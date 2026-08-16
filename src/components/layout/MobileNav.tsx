"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

interface NavLink {
  readonly href: string;
  readonly label: string;
}

export function MobileNav({ links }: { readonly links: readonly NavLink[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="sm:hidden">
        <ThemeToggle />
      </div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex h-9 w-9 items-center justify-center rounded-md text-ink-muted lg:hidden"
      >
        <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden>
          <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-ink/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-x-0 top-0 flex max-h-[85vh] flex-col overflow-y-auto rounded-b-lg border-b border-border bg-surface shadow-overlay">
            <div className="flex items-center justify-between border-b border-border px-4 py-4">
              <span className="font-serif text-lg font-semibold text-ink">ICU Knowledge Map</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-8 w-8 items-center justify-center text-ink-muted"
              >
                <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden>
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-between border-b border-border bg-surface-sunken px-4 py-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Theme</span>
              <ThemeToggle />
            </div>
            <nav className="flex flex-col px-2 py-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm text-ink transition-colors hover:bg-canvas"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
