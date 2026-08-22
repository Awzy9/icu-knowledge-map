"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchDialog } from "@/components/search/SearchDialog";
import { cn } from "@/lib/cn";

/**
 * Mobile-only bottom navigation.
 *
 * Complements the existing header nav rather than duplicating it: these are the
 * five destinations worth one-thumb access. The full navigation stays available
 * from the header menu.
 */
const ITEMS = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "__search", label: "Search", icon: SearchIcon },
  { href: "/learn", label: "Learn", icon: LearnIcon },
  { href: "/problems", label: "Bedside", icon: BedsideIcon },
  { href: "/library", label: "Saved", icon: SavedIcon },
] as const;

export function MobileBottomNav() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav
        aria-label="Primary mobile"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80 lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <ul className="mx-auto flex max-w-md items-stretch justify-around">
          {ITEMS.map((item) => {
            const Icon = item.icon;

            if (item.href === "__search") {
              return (
                <li key={item.label} className="flex-1">
                  <button
                    type="button"
                    onClick={() => setSearchOpen(true)}
                    className="flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-1.5 text-ink-muted transition-colors hover:text-ink"
                  >
                    <Icon active={false} />
                    <span className="text-[10px] font-medium leading-none">{item.label}</span>
                  </button>
                </li>
              );
            }

            const active = isActive(item.href);
            return (
              <li key={item.href} className="flex-1">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-1.5 transition-colors",
                    active ? "text-accent" : "text-ink-muted hover:text-ink",
                  )}
                >
                  <Icon active={active} />
                  <span className="text-[10px] font-medium leading-none">{item.label}</span>
                  {/* Non-colour active indicator for accessibility */}
                  <span
                    aria-hidden
                    className={cn(
                      "mt-0.5 h-0.5 w-5 rounded-full",
                      active ? "bg-accent" : "bg-transparent",
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Spacer so fixed bar never covers page content */}
      <div aria-hidden className="h-16 lg:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }} />

      {searchOpen && <SearchDialog onClose={() => setSearchOpen(false)} />}
    </>
  );
}

/* ------------------------------- icons ---------------------------------- */

interface IconProps {
  readonly active: boolean;
}

function HomeIcon({ active }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.7} aria-hidden>
      <path d="M3 10.5 12 3l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 9.5V20h13V9.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" strokeLinecap="round" />
    </svg>
  );
}

function LearnIcon({ active }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.7} aria-hidden>
      <path d="M3 7.5 12 4l9 3.5-9 3.5-9-3.5Z" strokeLinejoin="round" />
      <path d="M6.5 10v5.5c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5V10" strokeLinecap="round" />
    </svg>
  );
}

function BedsideIcon({ active }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.7} aria-hidden>
      <path d="M3 12h4l2-4 3 8 2.5-5 1.5 3h5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SavedIcon({ active }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.7} aria-hidden>
      <path d="M6 4h12v16l-6-3.5L6 20V4Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
