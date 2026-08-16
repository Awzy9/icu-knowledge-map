"use client";

import type { BookmarkableType } from "@/registry";
import { useBookmarks } from "@/hooks/useBookmarks";
import { cn } from "@/lib/cn";

interface BookmarkToggleProps {
  readonly type: BookmarkableType;
  readonly id: string;
  readonly className?: string;
}

export function BookmarkToggle({ type, id, className }: BookmarkToggleProps) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const active = isBookmarked(type, id);

  return (
    <button
      type="button"
      onClick={() => toggleBookmark(type, id)}
      aria-pressed={active}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium transition-colors",
        active
          ? "border-accent bg-accent-soft text-accent-strong"
          : "border-border text-ink-muted hover:border-border-strong hover:text-ink",
        className,
      )}
    >
      {active ? "Bookmarked" : "Bookmark"}
    </button>
  );
}
