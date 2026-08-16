"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface NavLink {
  readonly href: string;
  readonly label: string;
}

export function DesktopNavMore({ links }: { readonly links: readonly NavLink[] }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) setOpen(false);
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex items-center gap-1 text-sm text-ink-muted transition-colors hover:text-accent"
      >
        More
        <svg
          viewBox="0 0 16 16"
          className={`h-3 w-3 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full z-20 mt-2 w-52 rounded-md border border-border bg-surface p-1.5 shadow-overlay">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm text-ink-muted transition-colors hover:bg-canvas hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
