"use client";

import { useRef, useEffect } from "react";
import type { TopicCategory } from "@/content-types";
import { categoryStyle } from "@/lib/category-style";

interface KnowledgeMapControlsProps {
  readonly searchQuery: string;
  readonly onSearchChange: (query: string) => void;
  readonly selectedCategory: TopicCategory | "all";
  readonly onCategoryChange: (category: TopicCategory | "all") => void;
  readonly viewMode: "library" | "relationships";
  readonly onViewModeChange: (mode: "library" | "relationships") => void;
  readonly totalTopicsCount: number;
  readonly filteredCount: number;
  readonly categoryCounts: Record<TopicCategory, number>;
}

export function KnowledgeMapControls({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  viewMode,
  onViewModeChange,
  totalTopicsCount,
  filteredCount,
  categoryCounts,
}: KnowledgeMapControlsProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut (Cmd+K or /) to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === "/" && document.activeElement !== searchInputRef.current && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const categories = Object.keys(categoryStyle) as TopicCategory[];

  return (
    <div className="flex flex-col gap-4 bg-surface p-4 sm:p-5 rounded-xl border border-border shadow-sm">
      {/* Top Row: Search Input + View Mode Switcher */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Search Bar */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink-muted">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search ICU knowledge by topic title, concept, or organ system..."
            className="w-full pl-10 pr-20 py-2.5 bg-surface-muted/60 border border-border rounded-lg text-sm text-ink placeholder-ink-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-ink-muted hover:text-ink"
            >
              Clear
            </button>
          ) : (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-semibold text-ink-muted bg-surface border border-border rounded shadow-xs">
                ⌘K
              </kbd>
            </div>
          )}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 p-1 bg-surface-muted border border-border rounded-lg shrink-0 self-start md:self-auto">
          <button
            type="button"
            onClick={() => onViewModeChange("library")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              viewMode === "library"
                ? "bg-surface text-accent shadow-xs border border-border/80"
                : "text-ink-muted hover:text-ink"
            }`}
            aria-pressed={viewMode === "library"}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>Library Overview</span>
          </button>

          <button
            type="button"
            onClick={() => onViewModeChange("relationships")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              viewMode === "relationships"
                ? "bg-surface text-accent shadow-xs border border-border/80"
                : "text-ink-muted hover:text-ink"
            }`}
            aria-pressed={viewMode === "relationships"}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span>Relationship Explorer</span>
          </button>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
        <button
          type="button"
          onClick={() => onCategoryChange("all")}
          className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium transition-all ${
            selectedCategory === "all"
              ? "bg-accent text-accent-contrast shadow-xs"
              : "bg-surface-muted/80 text-ink-muted hover:text-ink border border-border"
          }`}
        >
          <span>All Topics</span>
          <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${selectedCategory === "all" ? "bg-accent-strong text-white" : "bg-surface text-ink-muted"}`}>
            {totalTopicsCount}
          </span>
        </button>

        {categories.map((cat) => {
          const style = categoryStyle[cat];
          const isSelected = selectedCategory === cat;
          const count = categoryCounts[cat] || 0;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onCategoryChange(cat)}
              className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium transition-all border ${
                isSelected
                  ? `${style.chipClass} font-semibold ring-2 ring-accent/30 shadow-xs`
                  : "bg-surface-muted/60 border-border text-ink-muted hover:text-ink hover:border-border-strong"
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${style.dotClass}`} />
              <span>{style.label}</span>
              <span className="text-[11px] text-ink-muted opacity-80">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Filter Status summary if searching or filtering */}
      {(searchQuery || selectedCategory !== "all") && (
        <div className="flex items-center justify-between pt-2 border-t border-border/60 text-xs text-ink-muted">
          <div>
            Showing <strong className="text-ink">{filteredCount}</strong> of <strong className="text-ink">{totalTopicsCount}</strong> topics
            {searchQuery && <> matching &ldquo;<span className="text-accent font-medium">{searchQuery}</span>&rdquo;</>}
            {selectedCategory !== "all" && <> in <span className="text-ink font-medium">{categoryStyle[selectedCategory].label}</span></>}
          </div>
          <button
            type="button"
            onClick={() => {
              onSearchChange("");
              onCategoryChange("all");
            }}
            className="text-accent hover:underline font-medium"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
