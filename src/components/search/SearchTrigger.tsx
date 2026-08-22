"use client";

import { useEffect, useState } from "react";
import { SearchDialog } from "./SearchDialog";

interface SearchTriggerProps {
  /** "full" shows the labeled pill with a keyboard-shortcut hint (desktop); "icon" is a compact icon-only button (mobile header). */
  readonly variant?: "full" | "icon";
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden>
      <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SearchTrigger({ variant = "full" }: SearchTriggerProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {variant === "icon" ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Search"
          className="flex h-9 w-9 items-center justify-center rounded-md text-ink-muted transition-colors hover:text-ink"
        >
          <SearchIcon />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm text-ink-muted transition-colors hover:border-border-strong hover:text-ink"
        >
          <SearchIcon />
          Search
          <span className="ml-2 rounded border border-border px-1.5 py-0.5 text-xs text-ink-faint">⌘K</span>
        </button>
      )}
      {open && <SearchDialog onClose={() => setOpen(false)} />}
    </>
  );
}
