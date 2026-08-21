"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useBookmarks } from "@/hooks/useBookmarks";
import { getBookmarkableEntity } from "@/registry";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { cn } from "@/lib/cn";
import { categoryByBookmarkType, libraryCategoryLabel, libraryCategoryOrder, type LibraryCategory } from "@/lib/library-style";
import { BookmarkToggle } from "./BookmarkToggle";

const ALL = "all";
type CategoryFilter = LibraryCategory | typeof ALL;

const pillClass =
  "rounded-full border px-3 py-1 text-xs font-medium transition-colors border-border text-ink-muted hover:border-border-strong hover:text-ink";
const activePillClass = "border-accent bg-accent-soft text-accent-strong hover:border-accent hover:text-accent-strong";

/** Every bookmarkable type resolved and grouped into the 5 library categories, with a category filter and text search. */
export function MyLibrary() {
  const { bookmarks } = useBookmarks();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>(ALL);
  const [query, setQuery] = useState("");

  const resolved = useMemo(
    () =>
      bookmarks
        .map((entry) => ({ entry, entity: getBookmarkableEntity(entry.type, entry.id) }))
        .filter(
          (item): item is { entry: (typeof bookmarks)[number]; entity: NonNullable<ReturnType<typeof getBookmarkableEntity>> } =>
            item.entity !== undefined,
        )
        .sort((a, b) => b.entry.savedAt.localeCompare(a.entry.savedAt)),
    [bookmarks],
  );

  const countsByCategory = useMemo(() => {
    const counts: Record<LibraryCategory, number> = { topics: 0, medications: 0, evidence: 0, guidelines: 0, calculators: 0, learning: 0 };
    for (const { entry } of resolved) counts[categoryByBookmarkType[entry.type]] += 1;
    return counts;
  }, [resolved]);

  if (resolved.length === 0) {
    return (
      <EmptyState
        title="Nothing saved yet"
        description="Use the Bookmark button on any topic, concept, trial, guideline, calculator, pathway, flashcard, or question to save it here."
        action={{ label: "Browse topics", href: "/topics" }}
      />
    );
  }

  const trimmedQuery = query.trim().toLowerCase();
  const filtered = resolved.filter(({ entry, entity }) => {
    if (activeCategory !== ALL && categoryByBookmarkType[entry.type] !== activeCategory) return false;
    if (trimmedQuery && !entity.title.toLowerCase().includes(trimmedQuery) && !entity.subtitle.toLowerCase().includes(trimmedQuery)) {
      return false;
    }
    return true;
  });

  const groups = libraryCategoryOrder
    .map((category) => ({ category, items: filtered.filter(({ entry }) => categoryByBookmarkType[entry.type] === category) }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-1.5">
          <button type="button" onClick={() => setActiveCategory(ALL)} className={cn(pillClass, activeCategory === ALL && activePillClass)}>
            All ({resolved.length})
          </button>
          {libraryCategoryOrder.map(
            (category) =>
              countsByCategory[category] > 0 && (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={cn(pillClass, activeCategory === category && activePillClass)}
                >
                  {libraryCategoryLabel[category]} ({countsByCategory[category]})
                </button>
              ),
          )}
        </div>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search your library…"
          className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-ink outline-none placeholder:text-ink-faint sm:w-60"
        />
      </div>

      {groups.length === 0 ? (
        <EmptyState title="No matches" description="Try a different search term, or clear the category filter." />
      ) : (
        groups.map((group) => (
          <div key={group.category} className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
              {libraryCategoryLabel[group.category]} ({group.items.length})
            </p>
            <div className="flex flex-col gap-2">
              {group.items.map(({ entry, entity }) => (
                <Card key={`${entry.type}-${entry.id}`} className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <Link href={entity.href} className="block truncate text-sm font-semibold text-ink hover:text-accent">
                      {entity.title}
                    </Link>
                    <p className="truncate text-xs text-ink-muted">{entity.subtitle}</p>
                  </div>
                  <BookmarkToggle type={entry.type} id={entry.id} />
                </Card>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
