"use client";

import React from "react";

export function DrugByPathogenVisual() {
  const pathogens = [
    {
      name: "ESBL Enterobacterales",
      subtext: "E. coli, K. pneumoniae",
      preferred: ["Meropenem (Gold Standard in Shock)", "Ertapenem (Stable / OPAT Step-down)"],
      notRecommended: ["Piperacillin-Tazobactam (MERINO failure)", "Ceftriaxone (Resistant)"]
    },
    {
      name: "Pseudomonas aeruginosa",
      subtext: "MDR Gram-Negative Bacilli",
      preferred: ["Cefepime 2g q8h", "Pip-Tazo 4.5g q6h", "Meropenem 1g q8h", "Amikacin (Adjunct)"],
      notRecommended: ["Ertapenem ⚠️ (No clinically reliable activity against Pseudomonas)", "Ceftriaxone", "TMP-SMX", "Vancomycin"]
    },
    {
      name: "Stenotrophomonas maltophilia",
      subtext: "Educational framework based on IDSA AMR Guidance 2026",
      preferred: [
        "First: Determine colonization vs true infection (positive respiratory culture ≠ automatic treatment indication)",
        "Invasive infection preferred approach: Cefiderocol monotherapy (supporting clinical evidence is limited; treatment depends on site/susceptibility/severity)",
        "TMP-SMX: Important active option, including as a component of combination therapy for invasive infection",
        "Step-down: Transition to TMP-SMX monotherapy may be considered after clear and sustained clinical improvement"
      ],
      notRecommended: ["Meropenem", "Imipenem", "Cefepime (Inherently Resistant)", "Routine treatment of sputum colonization"]
    },
    {
      name: "Invasive Candidemia",
      subtext: "Candida bloodstream infection",
      preferred: [
        "Anidulafungin / Echinocandin initial therapy",
        "Fluconazole (Step-down if sensitive)",
        "Evaluation for early catheter removal when line is presumed source and can be safely removed"
      ],
      notRecommended: ["Respiratory Sputum Candida (Evaluate as colonization; do not treat respiratory isolation)", "Automatic catheter removal regardless of clinical context"]
    },
    {
      name: "Mucormycosis (Zygomycosis)",
      subtext: "Rhizopus, Mucor in DKA / BMT",
      preferred: ["Liposomal Amphotericin B 5 mg/kg", "Isavuconazole / Posaconazole"],
      notRecommended: ["Anidulafungin / Echinocandins ⚠️ (No activity against Mucorales)", "Fluconazole"]
    }
  ];

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border/80 bg-card p-5 shadow-xs">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <h3 className="text-base font-semibold text-ink flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-teal-500" />
          Educational Drug-by-Pathogen Framework (IDSA AMR Guidance 2026)
        </h3>
        <span className="text-xs text-ink-muted font-medium">Clinical Guidance Reference</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {pathogens.map((p, idx) => (
          <div key={idx} className="rounded-lg border border-border/60 bg-surface/50 p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-ink">{p.name}</h4>
              </div>
              <p className="text-[11px] text-ink-muted mb-3">{p.subtext}</p>

              <div className="mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block mb-1">
                  Preferred / Active Strategies:
                </span>
                <ul className="space-y-1">
                  {p.preferred.map((item, i) => (
                    <li key={i} className="text-xs font-semibold text-emerald-900 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200/60 dark:border-emerald-900/60">
                      ✓ {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 block mb-1">
                  Ineffective / Not Recommended:
                </span>
                <ul className="space-y-1">
                  {p.notRecommended.map((item, i) => (
                    <li key={i} className="text-xs font-medium text-rose-900 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded border border-rose-200/60 dark:border-rose-900/60">
                      ✕ {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-[11px] text-ink-muted bg-surface/80 p-2.5 rounded-md border border-border/60">
        📌 <strong>Educational Framework Note:</strong> Based on IDSA AMR Guidance 2026. Definitive antimicrobial selection depends on susceptibility testing, infection site, illness severity, patient organ function, and clinical response.
      </div>
    </div>
  );
}
