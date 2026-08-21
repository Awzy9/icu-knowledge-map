"use client";

import React from "react";

export function SiteMattersPenetration() {
  const sites = [
    { site: "Central Nervous System / Meninges", good: ["Ceftriaxone (2g q12h)", "Meropenem (2g q8h)", "Linezolid", "Metronidazole"], poor: ["Ertapenem", "Anidulafungin", "Daptomycin", "Cefepime (at standard low doses)"] },
    { site: "Lungs / Alveolar Lining Fluid", good: ["Linezolid (High ELF)", "Levofloxacin", "Cefepime", "Meropenem"], poor: ["Daptomycin ⚠️ (Surfactant Inactivation!)", "Aminoglycosides (Monotherapy)"] },
    { site: "Urinary Tract / Kidney", good: ["Ceftriaxone", "TMP-SMX", "Aminoglycosides", "Ertapenem"], poor: ["Anidulafungin (Minimal urine excretion)", "Micafungin"] }
  ];

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border/80 bg-card p-5 shadow-xs">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <h3 className="text-base font-semibold text-ink flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-cyan-500" />
          Site Matters — Tissue Penetration Matrix
        </h3>
        <span className="text-xs text-ink-muted">In vitro MIC ≠ Clinical Efficacy if Site Penetration Fails</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {sites.map((s, i) => (
          <div key={i} className="rounded-lg border border-border/60 bg-surface/50 p-4">
            <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-2">{s.site}</h4>
            <div className="mb-2">
              <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 block mb-1">Excellent Penetration:</span>
              <ul className="space-y-1">
                {s.good.map((g, idx) => (
                  <li key={idx} className="text-xs font-medium text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">
                    ✓ {g}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-[10px] font-bold text-rose-700 dark:text-rose-400 block mb-1">Poor / Ineffective:</span>
              <ul className="space-y-1">
                {s.poor.map((p, idx) => (
                  <li key={idx} className="text-xs font-medium text-rose-800 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded">
                    ✕ {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
