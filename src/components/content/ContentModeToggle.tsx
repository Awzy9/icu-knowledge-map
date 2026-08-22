"use client";

import { useEffect, useReducer, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { BedsideGuide } from "@/content/bedside";

type Mode = "learn" | "bedside";

function readMode(key: string): Mode {
  try {
    return localStorage.getItem(`icukm:${key}`) === "bedside" ? "bedside" : "learn";
  } catch {
    return "learn";
  }
}

/**
 * LEARN vs BEDSIDE toggle. Same medical source, two presentations.
 * Preference persists locally per page; switching is always available.
 * Non-colour indicators (glyph + aria-pressed) for accessibility.
 */
export function LearnBedsideShell({
  storageKey,
  learn,
  bedside,
}: {
  storageKey: string;
  learn: ReactNode;
  /** Undefined means the topic lacks bedside coverage; toggle hidden entirely. */
  bedside?: ReactNode;
}) {
  const [mode, setMode] = useReducer((_: Mode, next: Mode) => next, "learn");

  // Restore the saved preference after hydration (localStorage is client-only).
  useEffect(() => {
    setMode(readMode(storageKey));
  }, [storageKey]);

  const selectMode = (next: Mode) => {
    setMode(next);
    try {
      localStorage.setItem(`icukm:${storageKey}`, next);
    } catch {
      /* storage unavailable (private mode) */
    }
  };

  if (!bedside) return <>{learn}</>;

  return (
    <>
      <div role="group" aria-label="View mode" className="mb-4 flex justify-center py-2">
        <div className="flex rounded-full border border-border bg-surface p-1 shadow-sm">
          {(["learn", "bedside"] as const).map((m) => {
            const active = mode === m;
            const label = m === "learn" ? "Learn" : "Bedside";
            return (
              <button
                key={m}
                type="button"
                aria-pressed={active}
                onClick={() => selectMode(m)}
                className={cn(
                  "min-h-11 cursor-pointer rounded-full px-4 py-1.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent",
                  active ? "bg-accent text-white" : "text-ink-muted hover:text-ink",
                )}
              >
                {active ? "▸ " : ""}
                {label}
              </button>
            );
          })}
        </div>
      </div>
      {mode === "learn" ? learn : bedside}
    </>
  );
}

/* ------------------------- Bedside renderer (presentational) ------------------------- */

const SECTION_ORDER = [
  "whatMattersNow", "firstFiveMinutes", "initialOrders", "medications",
  "monitor", "reassess", "redFlags", "escalateWhen", "doNotMiss", "references",
] as const;

const SECTION_LABEL: Record<(typeof SECTION_ORDER)[number], string> = {
  whatMattersNow: "What matters now",
  firstFiveMinutes: "First 5 minutes",
  initialOrders: "Initial orders",
  medications: "Medications / doses",
  monitor: "Monitor",
  reassess: "Reassess",
  redFlags: "Red flags",
  escalateWhen: "Escalate when",
  doNotMiss: "Do not miss",
  references: "References",
};

export function BedsideView({ guide, topicTitle }: { guide: BedsideGuide; topicTitle: string }) {
  const present = SECTION_ORDER
    .map((key) => ({ key, items: guide.sections[key] }))
    .filter((s): s is { key: (typeof SECTION_ORDER)[number]; items: readonly string[] } =>
      Array.isArray(s.items) && s.items.length > 0);

  return (
    <section aria-label={`Bedside mode: ${topicTitle}`}>
      <div className="rounded-2xl border border-border bg-surface p-4 sm:p-6">
        <header className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1">
          <h1 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{topicTitle}</h1>
          <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-accent-strong">
            Bedside mode
          </span>
          {guide.coverage === "partial" && (
            <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700 dark:text-amber-300">
              Partial coverage — see full Learn page
            </span>
          )}
        </header>

        <div className="space-y-5">
          {present.map(({ key, items }) => (
            <div key={key}>
              <h2 className="text-sm font-bold uppercase tracking-wide text-ink">
                {SECTION_LABEL[key]}
              </h2>
              <ul className="mt-2 space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-ink">
                    <span aria-hidden="true" className="text-accent">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 border-t border-border pt-3 text-xs text-ink-muted">
          Action-oriented extract of the full educational page — same reviewed source. Verify doses against local protocols.
        </p>
      </div>
    </section>
  );
}
