"use client";

import React, { useState } from "react";

type SteroidKey = "hydrocortisone" | "methylprednisolone" | "dexamethasone";

interface SteroidProfile {
  label: string;
  gcPotency: string;
  mcActivity: string;
  duration: string;
  icuRoles: string[];
  badgeColorClass: string;
}

const profiles: Record<SteroidKey, SteroidProfile> = {
  hydrocortisone: {
    label: "Hydrocortisone",
    gcPotency: "1× (reference)",
    mcActivity: "1× (clinically significant)",
    duration: "8–12 hours",
    icuRoles: [
      "Septic shock (vasopressor-dependent): 200 mg/day IV",
      "Adrenal crisis: stress-dose replacement",
      "Severe CAP (CAPE COD trial): 200 mg/day IV continuous",
      "CIRCI (Critical illness-related corticosteroid insufficiency)",
    ],
    badgeColorClass:
      "bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800",
  },
  methylprednisolone: {
    label: "Methylprednisolone",
    gcPotency: "5× hydrocortisone",
    mcActivity: "0.5× (minimal)",
    duration: "18–36 hours",
    icuRoles: [
      "Severe asthma & COPD exacerbations: 40–125 mg/day IV",
      "Status asthmaticus / AECOPD: 40–125 mg/day IV",
      "ARDS (select protocols): dose/duration per specific protocol",
    ],
    badgeColorClass:
      "bg-purple-50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-800",
  },
  dexamethasone: {
    label: "Dexamethasone",
    gcPotency: "25× hydrocortisone",
    mcActivity: "~0 (negligible)",
    duration: "36–54 hours",
    icuRoles: [
      "Bacterial meningitis: 0.15 mg/kg IV q6h × 4 days",
      "Vasogenic cerebral edema (brain tumors): 4–10 mg q6h",
      "Post-extubation laryngeal edema prevention (high-risk patients)",
    ],
    badgeColorClass:
      "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800",
  },
};

const cascadeSteps = [
  "Corticosteroid (IV/oral)",
  "Diffuses across cell membrane",
  "Binds cytoplasmic glucocorticoid receptor (GR)",
  "GR–ligand complex forms",
  "Translocates to nucleus",
  "Modulates gene transcription",
];

export function SteroidMechanismVisual() {
  const [active, setActive] = useState<SteroidKey>("hydrocortisone");
  const profile = profiles[active];

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border/80 bg-card p-5 shadow-xs">
      {/* Header */}
      <div className="border-b border-border/60 pb-3">
        <h3 className="text-base font-semibold text-ink flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-purple-500" />
          Glucocorticoid Receptor Mechanism Cascade
        </h3>
        <p className="text-xs text-ink-muted mt-0.5">
          Select a steroid to compare pharmacological properties alongside the shared receptor pathway
        </p>
      </div>

      {/* Steroid selector tabs */}
      <div
        className="flex rounded-lg bg-surface p-1 border border-border/60 gap-0.5"
        role="tablist"
        aria-label="Select corticosteroid"
      >
        {(Object.keys(profiles) as SteroidKey[]).map((key) => (
          <button
            key={key}
            role="tab"
            aria-selected={active === key}
            aria-controls={`steroid-panel-${key}`}
            id={`steroid-tab-${key}`}
            onClick={() => setActive(key)}
            className={`flex-1 px-2 py-1.5 text-xs font-semibold rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              active === key
                ? "bg-card text-ink shadow-xs"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            {profiles[key].label}
          </button>
        ))}
      </div>

      {/* Content: Cascade + Properties */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        id={`steroid-panel-${active}`}
        role="tabpanel"
        aria-labelledby={`steroid-tab-${active}`}
      >
        {/* Left: Cascade chain */}
        <div>
          <p className="text-xs font-bold text-ink-muted uppercase tracking-wider mb-3">
            Shared Receptor Pathway
          </p>
          <div className="flex flex-col items-center">
            {cascadeSteps.map((step, i) => (
              <div key={i} className="w-full flex flex-col items-center">
                <div className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-xs text-center font-medium text-ink">
                  {step}
                </div>
                {i < cascadeSteps.length - 1 && (
                  <div className="text-ink-muted text-base leading-none py-0.5">↓</div>
                )}
              </div>
            ))}
          </div>

          {/* Diverging outcomes */}
          <div className="mt-1">
            <div className="text-ink-muted text-base text-center leading-none py-0.5">
              ↙&nbsp;&nbsp;&nbsp;&nbsp;↘
            </div>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div className="rounded-lg border border-rose-200 dark:border-rose-900 bg-rose-50/50 dark:bg-rose-950/20 p-2 text-center">
                <p className="font-bold text-xs text-rose-800 dark:text-rose-300">
                  Pro-inflammatory ↓
                </p>
                <p className="text-[11px] text-rose-700 dark:text-rose-400 mt-0.5">
                  TNF-α, IL-1, IL-6
                </p>
              </div>
              <div className="rounded-lg border border-emerald-200 dark:border-emerald-900 bg-emerald-50/50 dark:bg-emerald-950/20 p-2 text-center">
                <p className="font-bold text-xs text-emerald-800 dark:text-emerald-300">
                  Anti-inflammatory ↑
                </p>
                <p className="text-[11px] text-emerald-700 dark:text-emerald-400 mt-0.5">
                  IL-10, Lipocortin
                </p>
              </div>
            </div>
            <div className="text-ink-muted text-base text-center leading-none py-1">↓</div>
            <div className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-xs text-center font-bold text-ink">
              Clinical Effect
            </div>
          </div>
        </div>

        {/* Right: Steroid-specific properties */}
        <div className="space-y-3">
          <p className="text-xs font-bold text-ink-muted uppercase tracking-wider">
            {profile.label} — Properties
          </p>

          <div className={`rounded-lg border p-3 space-y-2 text-xs ${profile.badgeColorClass}`}>
            <div className="flex justify-between gap-2">
              <span className="font-bold shrink-0">GC Potency:</span>
              <span className="text-right">{profile.gcPotency}</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="font-bold shrink-0">MC Activity:</span>
              <span className="text-right">{profile.mcActivity}</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="font-bold shrink-0">Duration:</span>
              <span className="text-right">{profile.duration}</span>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface p-3 space-y-2">
            <p className="text-xs font-bold text-ink uppercase tracking-wider">
              Key ICU Roles
            </p>
            <ul className="space-y-1.5">
              {profile.icuRoles.map((role, i) => (
                <li key={i} className="text-xs text-ink flex items-start gap-1.5">
                  <span className="text-accent mt-0.5 shrink-0">▪</span>
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-amber-200 dark:border-amber-900 bg-amber-50/50 dark:bg-amber-950/20 p-3 text-[11px] text-amber-900 dark:text-amber-200 leading-relaxed">
            <strong>Remember:</strong> All corticosteroids share the same GR-mediated nuclear mechanism. Differences
            in potency, MC activity, and duration determine which steroid is appropriate per indication.
          </div>
        </div>
      </div>
    </div>
  );
}
