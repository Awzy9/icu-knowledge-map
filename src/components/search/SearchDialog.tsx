"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { SearchEntry, SearchEntryType } from "@/registry";
import { useRecentSearches } from "@/hooks/useRecentSearches";
import { searchCategoryLabel, searchCategoryOrder } from "@/lib/search-style";
import { cn } from "@/lib/cn";

interface SearchDialogProps {
  readonly index: readonly SearchEntry[];
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

function matchScore(entry: SearchEntry, query: string): number {
  const q = query.toLowerCase();
  const title = entry.title.toLowerCase();
  if (title === q) return 5;
  if (title.startsWith(q)) return 4;
  if (title.includes(` ${q}`) || title.includes(`-${q}`)) return 3;
  if (title.includes(q)) return 2;
  if (entry.subtitle.toLowerCase().includes(q)) return 1;
  return 0;
}

/** Groups scored entries by type, then ranks both the groups (by their best-scoring entry) and the entries within each group by relevance. */
function groupByRelevance(scored: readonly ScoredEntry[]): readonly ResultGroup[] {
  const byType = new Map<SearchEntryType, ScoredEntry[]>();
  for (const item of scored) {
    const bucket = byType.get(item.entry.type) ?? [];
    bucket.push(item);
    byType.set(item.entry.type, bucket);
  }

  const groups = Array.from(byType.entries()).map(([type, items]) => {
    const sorted = [...items].sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title));
    return { type, entries: sorted.map((item) => item.entry), bestScore: sorted[0]?.score ?? 0 };
  });

  groups.sort(
    (a, b) => b.bestScore - a.bestScore || searchCategoryOrder.indexOf(a.type) - searchCategoryOrder.indexOf(b.type),
  );

  return groups.map(({ type, entries }) => ({ type, entries }));
}

function getSearchTypeBadge(type: SearchEntryType): { label: string; className: string } {
  switch (type) {
    case "topic":
      return { label: "Topic", className: "bg-accent/15 text-accent-strong border border-accent/20" };
    case "problem":
      return { label: "Problem", className: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/20" };
    case "pathway":
      return { label: "Pathway", className: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/20" };
    case "trial":
      return { label: "Trial", className: "bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/20" };
    case "guideline":
      return { label: "Guideline", className: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20" };
    case "review":
      return { label: "Synthesis", className: "bg-teal-500/15 text-teal-600 dark:text-teal-400 border border-teal-500/20" };
    case "calculator":
      return { label: "Calculator", className: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20" };
    case "physiology":
      return { label: "Physiology", className: "bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/20" };
    default:
      return { label: "Concept", className: "bg-surface-muted text-ink-muted border border-border" };
  }
}

export function SearchDialog({ index, onClose }: SearchDialogProps) {
  const router = useRouter();
  const { recentSearches, addRecentSearch, clearRecentSearches } = useRecentSearches();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const trimmedQuery = query.trim();

  const groups = useMemo((): readonly ResultGroup[] => {
    if (trimmedQuery === "") return [];
    const scored = index
      .map((entry) => ({ entry, score: matchScore(entry, trimmedQuery) }))
      .filter((item) => item.score > 0);
    return groupByRelevance(scored);
  }, [index, trimmedQuery]);

  const flatResults = useMemo(() => groups.flatMap((group) => group.entries), [groups]);

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
      setActiveIndex((i) => Math.min(i + 1, flatResults.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (event.key === "Enter" && flatResults[activeIndex]) {
      go(flatResults[activeIndex]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-ink/40 px-4 pt-12 sm:pt-24">
      <button type="button" aria-label="Close search" className="absolute inset-0" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className="relative flex max-h-[80vh] w-full max-w-lg flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-overlay"
      >
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(event) => handleQueryChange(event.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="search"
          placeholder="Search topics, concepts, physiology, trials, guidelines…"
          className="shrink-0 border-b border-border bg-surface px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-faint"
        />

        <div className="flex-1 overflow-y-auto py-2">
          {trimmedQuery === "" ? (
            recentSearches.length > 0 ? (
              <div className="px-2">
                <div className="flex items-center justify-between px-2 py-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Recent searches</p>
                  <button type="button" onClick={clearRecentSearches} className="text-xs text-ink-faint transition-colors hover:text-ink">
                    Clear
                  </button>
                </div>
                <ul>
                  {recentSearches.map((recent) => (
                    <li key={recent}>
                      <button
                        type="button"
                        onClick={() => selectRecentSearch(recent)}
                        className="flex w-full items-center gap-2.5 rounded-md px-2 py-2.5 text-left text-sm text-ink transition-colors hover:bg-accent-soft"
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
                Search across topics, concepts, physiology, pathways, trials, guidelines, systematic reviews, and
                calculators.
              </div>
            )
          ) : flatResults.length === 0 ? (
            <p className="px-4 py-6 text-sm text-ink-faint">No results for &quot;{trimmedQuery}&quot;.</p>
          ) : (
            groups.map((group) => (
              <div key={group.type} className="px-2 pb-1">
                <p className="px-2 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink-faint">
                  {searchCategoryLabel[group.type]}
                </p>
                <ul>
                  {group.entries.map((entry) => {
                    const flatIndex = flatResults.indexOf(entry);
                    const badge = getSearchTypeBadge(entry.type);
                    return (
                      <li key={entry.id}>
                        <button
                          type="button"
                          onMouseEnter={() => setActiveIndex(flatIndex)}
                          onClick={() => go(entry)}
                          className={cn(
                            "block w-full rounded-md px-2.5 py-2 text-left text-sm transition-colors",
                            flatIndex === activeIndex ? "bg-accent-soft text-accent-strong" : "text-ink hover:bg-surface-muted",
                          )}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="truncate font-medium">{entry.title}</span>
                            <span className={cn("shrink-0 rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider", badge.className)}>
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
            ))
          )}
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
