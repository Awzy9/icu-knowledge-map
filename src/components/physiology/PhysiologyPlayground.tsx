"use client";

import { useMemo, useState } from "react";
import {
  CONTROL_KEYS,
  CONTROL_LABEL,
  CONTEXT_KEYS,
  CONTEXT_LABEL,
  CONTEXT_DESCRIPTION,
  OUTPUT_LABEL,
  TREND_GLYPH,
  TREND_LABEL,
  resolveEffects,
  type ContextKey,
  type ControlKey,
  type Direction,
  type Trend,
} from "@/physiology/playground-model";
import { cn } from "@/lib/cn";

function trendClass(trend: Trend): string {
  switch (trend) {
    case "up":
      return "text-emerald-600 dark:text-emerald-400";
    case "down":
      return "text-rose-600 dark:text-rose-400";
    case "context-dependent":
      return "text-amber-600 dark:text-amber-400";
    default:
      return "text-ink-muted";
  }
}

export function PhysiologyPlayground() {
  const [context, setContext] = useState<ContextKey>("normal");
  const [control, setControl] = useState<ControlKey>("peep");
  const [direction, setDirection] = useState<Direction>("increase");

  const effects = useMemo(
    () => resolveEffects(control, direction, context),
    [control, direction, context],
  );

  const contextModifiedCount = effects.filter((e) => e.contextModified).length;

  return (
    <div className="space-y-6">
      {/* Context presets -------------------------------------------------- */}
      <section aria-labelledby="playground-context-heading">
        <h2 id="playground-context-heading" className="text-sm font-semibold text-ink">
          1. Clinical context
        </h2>
        <div
          role="radiogroup"
          aria-label="Clinical context"
          className="mt-2 flex gap-2 overflow-x-auto pb-1"
        >
          {CONTEXT_KEYS.map((key) => {
            const selected = context === key;
            return (
              <button
                key={key}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setContext(key)}
                className={cn(
                  "min-h-11 shrink-0 rounded-full border px-3.5 py-2 text-sm font-medium transition-colors",
                  selected
                    ? "border-accent bg-accent text-accent-contrast"
                    : "border-border bg-surface text-ink-muted hover:text-ink",
                )}
              >
                {CONTEXT_LABEL[key]}
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-xs text-ink-muted">{CONTEXT_DESCRIPTION[context]}</p>
      </section>

      {/* Control + direction ---------------------------------------------- */}
      <section aria-labelledby="playground-control-heading">
        <h2 id="playground-control-heading" className="text-sm font-semibold text-ink">
          2. Change one variable
        </h2>

        <div
          role="radiogroup"
          aria-label="Variable"
          className="mt-2 flex flex-wrap gap-2"
        >
          {CONTROL_KEYS.map((key) => {
            const selected = control === key;
            return (
              <button
                key={key}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setControl(key)}
                className={cn(
                  "min-h-11 rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
                  selected
                    ? "border-accent bg-accent-soft text-accent-strong"
                    : "border-border bg-surface text-ink-muted hover:text-ink",
                )}
              >
                {CONTROL_LABEL[key]}
              </button>
            );
          })}
        </div>

        <div role="radiogroup" aria-label="Direction of change" className="mt-3 flex gap-2">
          {(["increase", "decrease"] as const).map((dir) => {
            const selected = direction === dir;
            return (
              <button
                key={dir}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setDirection(dir)}
                className={cn(
                  "min-h-11 flex-1 rounded-lg border px-3 py-2 text-sm font-semibold transition-colors sm:flex-none sm:px-6",
                  selected
                    ? "border-accent bg-accent text-accent-contrast"
                    : "border-border bg-surface text-ink-muted hover:text-ink",
                )}
              >
                {CONTROL_LABEL[control]} {dir === "increase" ? "↑" : "↓"}
              </button>
            );
          })}
        </div>
      </section>

      {/* Results ----------------------------------------------------------- */}
      <section aria-labelledby="playground-results-heading">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 id="playground-results-heading" className="text-sm font-semibold text-ink">
            3. Directional effects
          </h2>
          {contextModifiedCount > 0 && (
            <p className="text-xs font-medium text-amber-600 dark:text-amber-400">
              {contextModifiedCount} effect{contextModifiedCount === 1 ? "" : "s"} differ in{" "}
              {CONTEXT_LABEL[context]}
            </p>
          )}
        </div>

        <ul aria-live="polite" className="mt-3 space-y-2">
          {effects.map((effect) => (
            <li
              key={effect.output}
              className={cn(
                "rounded-lg border p-3",
                effect.contextModified
                  ? "border-amber-500/40 bg-amber-500/5"
                  : "border-border bg-surface",
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-sm font-medium text-ink">{OUTPUT_LABEL[effect.output]}</span>
                <span
                  className={cn("shrink-0 text-lg font-bold leading-none", trendClass(effect.trend))}
                >
                  <span aria-hidden>{TREND_GLYPH[effect.trend]}</span>
                  <span className="sr-only">{TREND_LABEL[effect.trend]}</span>
                </span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-ink-muted">{effect.note}</p>
              {effect.contextModified && (
                <p className="mt-1.5 text-[11px] font-medium text-amber-600 dark:text-amber-400">
                  Differs from the normal circulation because of {CONTEXT_LABEL[context]}.
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <p className="rounded-lg border border-dashed border-border bg-surface-muted/50 px-4 py-3 text-xs leading-relaxed text-ink-muted">
        <strong className="font-semibold text-ink">Educational physiology model — not a patient-specific calculator.</strong>{" "}
        This shows the direction of well-established cardiopulmonary relationships and deliberately produces no
        numeric predictions. Real patients respond according to their own loading conditions, ventricular function,
        and comorbidity.
      </p>
    </div>
  );
}
