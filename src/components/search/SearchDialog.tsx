"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { SearchEntry, SearchEntryType } from "@/registry";
import { useRecentSearches } from "@/hooks/useRecentSearches";
import { searchCategoryLabel, searchCategoryOrder, searchCategoryBadge } from "@/lib/search-style";
import { expandQuery, fuzzyIncludes, normalizeTerm } from "@/lib/search-aliases";
import { cn } from "@/lib/cn";

interface SearchDialogProps {
  readonly onClose: () => void;
}

interface ScoredEntry {
  readonly entry: SearchEntry;
  readonly score: number;
}

interface ResultGroup {
  readonly type: SearchEntryType;
  readonly entries: readonly SearchEntry[];
}

const MAX_PER_GROUP = 6;
const MAX_TOTAL = 40;

/* -------------------------------------------------------------------------- */
/*  Lazily fetched index (module-scoped so it is fetched at most once)         */
/* -------------------------------------------------------------------------- */

let indexPromise: Promise<readonly SearchEntry[]> | null = null;

function loadSearchIndex(): Promise<readonly SearchEntry[]> {
  if (!indexPromise) {
    indexPromise = fetch("/search-index.json")
      .then((response) => {
        if (!response.ok) throw new Error(`Search index ${response.status}`);
        return response.json() as Promise<SearchEntry[]>;
      })
      .catch((error) => {
        // Allow a later retry rather than caching a permanent failure.
        indexPromise = null;
        throw error;
      });
  }
  return indexPromise;
}

/* -------------------------------------------------------------------------- */
/*  Scoring                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Scores one entry against one already-normalized term.
 * Exact/prefix title hits rank far above keyword and fuzzy hits so that a
 * typo-tolerant match can never outrank a literal one.
 */
function scoreTerm(entry: SearchEntry, term: string): number {
  const title = normalizeTerm(entry.title);
  if (title === term) return 100;
  if (title.startsWith(term)) return 80;
  if (title.includes(` ${term}`)) return 60;
  if (title.includes(term)) return 45;

  if (entry.keywords) {
    const keywords = entry.keywords;
    if (keywords === term || keywords.startsWith(`${term} `)) return 55;
    if (keywords.includes(term)) return 40;
  }

  if (normalizeTerm(entry.subtitle).includes(term)) return 20;

  // Typo tolerance last, and only against the title/keywords.
  if (fuzzyIncludes(title, term)) return 15;
  if (entry.keywords && fuzzyIncludes(entry.keywords, term)) return 10;

  return 0;
}

/**
 * Scores an entry across every expansion of a phrase (aliases included).
 * The first term is the user's literal text; alias expansions are slightly
 * discounted so a literal match wins ties.
 */
function scorePhrase(entry: SearchEntry, terms: readonly string[]): number {
  let best = 0;
  for (let i = 0; i < terms.length; i += 1) {
    const raw = scoreTerm(entry, terms[i]);
    if (raw === 0) continue;
    const adjusted = i === 0 ? raw : raw - 5;
    if (adjusted > best) best = adjusted;
  }
  return best;
}

/**
 * Scores an entry against a full query.
 *
 * Multi-word queries ("vancomycin loading dose") are scored per token and every
 * token must match somewhere, so a deep section entry whose title holds one
 * word and whose keywords hold the others still surfaces. An exact match on the
 * whole phrase is scored on top, so it always outranks a scattered token match.
 */
function scoreEntry(entry: SearchEntry, tokenGroups: readonly (readonly string[])[], wholePhrase: readonly string[]): number {
  const phraseScore = scorePhrase(entry, wholePhrase);

  if (tokenGroups.length <= 1) return phraseScore;

  let total = 0;
  for (const group of tokenGroups) {
    const tokenScore = scorePhrase(entry, group);
    // Every token must contribute, otherwise this entry is not a match.
    if (tokenScore === 0) return phraseScore;
    total += tokenScore;
  }

  // Average the token scores so long queries aren't inflated, then add any
  // whole-phrase bonus.
  return Math.round(total / tokenGroups.length) + phraseScore;
}

function groupByRelevance(scored: readonly ScoredEntry[]): readonly ResultGroup[] {
  const byType = new Map<SearchEntryType, ScoredEntry[]>();
  for (const item of scored) {
    const bucket = byType.get(item.entry.type) ?? [];
    bucket.push(item);
    byType.set(item.entry.type, bucket);
  }

  const groups = Array.from(byType.entries()).map(([type, items]) => {
    const sorted = [...items].sort(
      (a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title),
    );
    return {
      type,
      entries: sorted.slice(0, MAX_PER_GROUP).map((item) => item.entry),
      bestScore: sorted[0]?.score ?? 0,
    };
  });

  groups.sort(
    (a, b) =>
      b.bestScore - a.bestScore ||
      searchCategoryOrder.indexOf(a.type) - searchCategoryOrder.indexOf(b.type),
  );

  return groups.map(({ type, entries }) => ({ type, entries }));
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function SearchDialog({ onClose }: SearchDialogProps) {
  const router = useRouter();
  const { recentSearches, addRecentSearch, clearRecentSearches } = useRecentSearches();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [index, setIndex] = useState<readonly SearchEntry[] | null>(null);
  const [loadError, setLoadError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Fetch the index once the dialog actually opens.
  useEffect(() => {
    let cancelled = false;
    loadSearchIndex()
      .then((entries) => {
        if (!cancelled) setIndex(entries);
      })
      .catch(() => {
        if (!cancelled) setLoadError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const trimmedQuery = query.trim();

  const groups = useMemo((): readonly ResultGroup[] => {
    if (trimmedQuery === "" || !index) return [];

    // Whole-phrase terms (query + its alias expansions).
    const wholePhrase = expandQuery(trimmedQuery);
    if (wholePhrase.length === 0) return [];

    // Per-token terms, each independently alias-expanded, so "lasix dose"
    // expands "lasix" -> furosemide while still requiring "dose" to match.
    const tokenGroups = normalizeTerm(trimmedQuery)
      .split(" ")
      .filter((token) => token.length > 1)
      .map((token) => expandQuery(token));

    const scored: ScoredEntry[] = [];
    for (const entry of index) {
      const score = scoreEntry(entry, tokenGroups, wholePhrase);
      if (score > 0) scored.push({ entry, score });
    }
    scored.sort((a, b) => b.score - a.score);
    return groupByRelevance(scored.slice(0, MAX_TOTAL * 3));
  }, [index, trimmedQuery]);

  const flatResults = useMemo(
    () => groups.flatMap((group) => group.entries).slice(0, MAX_TOTAL),
    [groups],
  );

  // Keep the highlighted row scrolled into view during keyboard navigation.
  useEffect(() => {
    const node = listRef.current?.querySelector<HTMLElement>(`[data-result-index="${activeIndex}"]`);
    node?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setActiveIndex(0);
  };

  const go = (entry: SearchEntry) => {
    addRecentSearch(trimmedQuery);
    onClose();
    router.push(entry.href);
  };

  const selectRecentSearch = (recent: string) => {
    setQuery(recent);
    setActiveIndex(0);
    inputRef.current?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => (flatResults.length === 0 ? 0 : (i + 1) % flatResults.length));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => (flatResults.length === 0 ? 0 : (i - 1 + flatResults.length) % flatResults.length));
    } else if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setActiveIndex(Math.max(0, flatResults.length - 1));
    } else if (event.key === "Enter" && flatResults[activeIndex]) {
      event.preventDefault();
      go(flatResults[activeIndex]);
    }
  };

  const activeId = flatResults[activeIndex] ? `search-result-${flatResults[activeIndex].id}` : undefined;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-ink/40 px-3 pt-10 sm:px-4 sm:pt-24">
      <button type="button" aria-label="Close search" className="absolute inset-0" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search ICU Knowledge Map"
        className="relative flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-overlay"
      >
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-expanded={flatResults.length > 0}
          aria-controls="search-results"
          aria-activedescendant={activeId}
          aria-autocomplete="list"
          value={query}
          onChange={(event) => handleQueryChange(event.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="search"
          placeholder="Search topics, drugs, physiology, cases, evidence…"
          className="shrink-0 border-b border-border bg-surface px-4 py-3 text-base text-ink outline-none placeholder:text-ink-faint sm:text-sm"
        />

        <div id="search-results" ref={listRef} role="listbox" aria-label="Search results" className="flex-1 overflow-y-auto py-2">
          {trimmedQuery === "" ? (
            recentSearches.length > 0 ? (
              <div className="px-2">
                <div className="flex items-center justify-between px-2 py-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Recent searches</p>
                  <button
                    type="button"
                    onClick={clearRecentSearches}
                    className="rounded px-1.5 py-1 text-xs text-ink-faint transition-colors hover:text-ink"
                  >
                    Clear
                  </button>
                </div>
                <ul>
                  {recentSearches.map((recent) => (
                    <li key={recent}>
                      <button
                        type="button"
                        onClick={() => selectRecentSearch(recent)}
                        className="flex min-h-11 w-full items-center gap-2.5 rounded-md px-2 py-2.5 text-left text-sm text-ink transition-colors hover:bg-accent-soft"
                      >
                        <ClockIcon />
                        {recent}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="px-4 py-8 text-center text-sm text-ink-faint">
                Search topics, medications, physiology, pathways, clinical problems, clinical reasoning cases, rapid
                decisions, error hunts, flashcards, questions, trials, and guidelines.
              </div>
            )
          ) : loadError ? (
            <p className="px-4 py-6 text-sm text-ink-faint">
              Search index unavailable offline. Reconnect and try again.
            </p>
          ) : !index ? (
            <p className="px-4 py-6 text-sm text-ink-faint">Loading search index…</p>
          ) : flatResults.length === 0 ? (
            <p className="px-4 py-6 text-sm text-ink-faint">No results for &quot;{trimmedQuery}&quot;.</p>
          ) : (
            groups.map((group) => {
              const visible = group.entries.filter((entry) => flatResults.includes(entry));
              if (visible.length === 0) return null;
              return (
                <div key={group.type} className="px-2 pb-1">
                  <p className="px-2 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink-faint">
                    {searchCategoryLabel[group.type]}
                  </p>
                  <ul>
                    {visible.map((entry) => {
                      const flatIndex = flatResults.indexOf(entry);
                      const badge = searchCategoryBadge[entry.type];
                      const isActive = flatIndex === activeIndex;
                      return (
                        <li key={entry.id}>
                          <button
                            type="button"
                            id={`search-result-${entry.id}`}
                            data-result-index={flatIndex}
                            role="option"
                            aria-selected={isActive}
                            onMouseEnter={() => setActiveIndex(flatIndex)}
                            onClick={() => go(entry)}
                            className={cn(
                              "block w-full rounded-md px-2.5 py-2 text-left text-sm transition-colors",
                              isActive ? "bg-accent-soft text-accent-strong" : "text-ink hover:bg-surface-muted",
                            )}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="truncate font-medium">{entry.title}</span>
                              <span
                                className={cn(
                                  "shrink-0 rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider",
                                  badge.className,
                                )}
                              >
                                {badge.label}
                              </span>
                            </div>
                            <span className="block truncate text-xs text-ink-muted">{entry.subtitle}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })
          )}
        </div>

        <div className="hidden shrink-0 items-center gap-3 border-t border-border px-3 py-2 text-[11px] text-ink-faint sm:flex">
          <span><kbd className="rounded border border-border px-1">↑</kbd> <kbd className="rounded border border-border px-1">↓</kbd> navigate</span>
          <span><kbd className="rounded border border-border px-1">↵</kbd> open</span>
          <span><kbd className="rounded border border-border px-1">esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 text-ink-faint" aria-hidden>
      <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 5v3.3l2 1.2" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
