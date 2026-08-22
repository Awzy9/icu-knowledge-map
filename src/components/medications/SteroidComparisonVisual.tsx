"use client";

import React from "react";

const steroids = [
  {
    name: "Hydrocortisone",
    abbr: "HC",
    gc: 1.0,
    mc: 1.0,
    durationLabel: "8–12h",
    durationMax: 12,
    equivDose: "20 mg",
  },
  {
    name: "Prednisone / Prednisolone",
    abbr: "Pred",
    gc: 4.0,
    mc: 0.8,
    durationLabel: "18–36h",
    durationMax: 36,
    equivDose: "5 mg",
  },
  {
    name: "Methylprednisolone",
    abbr: "MP",
    gc: 5.0,
    mc: 0.5,
    durationLabel: "18–36h",
    durationMax: 36,
    equivDose: "4 mg",
  },
  {
    name: "Dexamethasone",
    abbr: "Dexa",
    gc: 25.0,
    mc: 0,
    durationLabel: "36–54h",
    durationMax: 54,
    equivDose: "0.75 mg",
  },
  {
    name: "Fludrocortisone",
    abbr: "FC",
    gc: 10.0,
    mc: 125.0,
    durationLabel: "18–36h",
    durationMax: 36,
    equivDose: "~2 mg GC / 0.1 mg MC",
  },
];

// Normalization maximums
const GC_MAX = 25;
const MC_MAX = 125;
const DUR_MAX = 54;

function Bar({
  pct,
  color,
  label,
  value,
}: {
  pct: number;
  color: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="w-20 shrink-0 text-ink-muted font-medium">{label}</span>
      <div className="flex-1 h-5 bg-surface rounded overflow-hidden border border-border/60">
        <div
          className={`h-full rounded transition-all duration-500 ${color}`}
          style={{ width: `${Math.max(pct, 1)}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${label}: ${value}`}
        />
      </div>
      <span className="w-14 shrink-0 text-right font-bold text-ink">{value}</span>
    </div>
  );
}

export function SteroidComparisonVisual() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border/80 bg-card p-5 shadow-xs">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap border-b border-border/60 pb-3">
        <div>
          <h3 className="text-base font-semibold text-ink flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-blue-500" />
            Corticosteroid Pharmacology &amp; Potency Comparison
          </h3>
          <p className="text-xs text-ink-muted mt-0.5">
            Relative glucocorticoid (GC) potency, mineralocorticoid (MC) activity, biological duration, and equivalent anti-inflammatory doses
          </p>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 text-xs">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded bg-blue-500" />
          <span className="text-ink-muted">GC Activity (relative to hydrocortisone = 1)</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded bg-amber-500" />
          <span className="text-ink-muted">MC Activity (relative to hydrocortisone = 1)</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded bg-emerald-500" />
          <span className="text-ink-muted">Biological Duration</span>
        </span>
      </div>

      {/* Steroid bars — responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {steroids.map((s) => {
          const gcPct = (s.gc / GC_MAX) * 100;
          const mcPct = (s.mc / MC_MAX) * 100;
          const durPct = (s.durationMax / DUR_MAX) * 100;
          const mcValue =
            s.mc === 0 ? "~0" : s.mc === 125 ? "125×" : `${s.mc}×`;
          return (
            <div
              key={s.name}
              className="rounded-lg border border-border bg-surface p-4 space-y-3"
            >
              <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-ink">{s.name}</span>
                  <span className="rounded bg-surface-sunken border border-border px-1.5 py-0.5 text-[10px] font-mono text-ink-muted">
                    {s.abbr}
                  </span>
                </div>
                <span className="text-[11px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                  Equiv: {s.equivDose}
                </span>
              </div>
              <Bar
                pct={gcPct}
                color="bg-blue-500"
                label="GC Potency"
                value={`${s.gc}×`}
              />
              <Bar
                pct={mcPct}
                color="bg-amber-500"
                label="MC Activity"
                value={mcValue}
              />
              <Bar
                pct={durPct}
                color="bg-emerald-500"
                label="Duration"
                value={s.durationLabel}
              />
            </div>
          );
        })}
      </div>

      {/* Disclaimer note */}
      <p className="text-[11px] text-ink-faint border-t border-border/60 pt-3 leading-relaxed">
        ⚠️ Relative potency values and equivalent anti-inflammatory doses are approximations used for clinical comparison. Exact pharmacodynamic response varies by individual tissue distribution, protein binding, and disease context. Source: Standard pharmacology reference (Katzung Basic &amp; Clinical Pharmacology / Goodman &amp; Gilman).
      </p>
    </div>
  );
}
