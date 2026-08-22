"use client";

import React, { useState } from "react";

export function ComparisonMatrix() {
  const [activeTab, setActiveTab] = useState<"carbapenems" | "anaerobic" | "antifungals">("carbapenems");

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border/80 bg-card p-5 shadow-xs">
      <div className="flex items-center justify-between border-b border-border/60 pb-3 flex-wrap gap-2">
        <h3 className="text-base font-semibold text-ink flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-indigo-500" />
          High-Yield Antimicrobial Comparison Matrices
        </h3>

        {/* Tab Selection */}
        <div className="flex rounded-lg bg-surface p-1 border border-border/60">
          <button
            onClick={() => setActiveTab("carbapenems")}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
              activeTab === "carbapenems"
                ? "bg-card text-ink shadow-xs"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Meropenem vs Ertapenem
          </button>
          <button
            onClick={() => setActiveTab("anaerobic")}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
              activeTab === "anaerobic"
                ? "bg-card text-ink shadow-xs"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Metronidazole vs Broad β-Lactams
          </button>
          <button
            onClick={() => setActiveTab("antifungals")}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
              activeTab === "antifungals"
                ? "bg-card text-ink shadow-xs"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Anidulafungin vs Liposomal Amphotericin B
          </button>
        </div>
      </div>

      {/* Carbapenems Comparison */}
      {activeTab === "carbapenems" && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-border/80 bg-surface">
                <th className="p-2.5 font-bold text-ink">Feature / Spectrum</th>
                <th className="p-2.5 font-bold text-blue-700 dark:text-blue-400">Meropenem (Group 2)</th>
                <th className="p-2.5 font-bold text-amber-700 dark:text-amber-400">Ertapenem (Group 1)</th>
                <th className="p-2.5 font-bold text-ink-muted">Bedside Clinical Pearl</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              <tr>
                <td className="p-2.5 font-medium text-ink">Pseudomonas aeruginosa</td>
                <td className="p-2.5 text-emerald-700 dark:text-emerald-400 font-bold">✓ Active (Initial susceptible)</td>
                <td className="p-2.5 text-rose-700 dark:text-rose-400 font-bold">✕ No clinically reliable activity — not an antipseudomonal agent</td>
                <td className="p-2.5 text-ink-muted">Ertapenem is not an antipseudomonal carbapenem.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-ink">Acinetobacter baumannii</td>
                <td className="p-2.5 text-emerald-700 dark:text-emerald-400 font-bold">✓ Active (Susceptible strains)</td>
                <td className="p-2.5 text-rose-700 dark:text-rose-400 font-bold">✕ No clinically reliable activity</td>
                <td className="p-2.5 text-ink-muted">Do NOT use Ertapenem for Acinetobacter.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-ink">Enterococcus species</td>
                <td className="p-2.5 text-amber-700 dark:text-amber-400 font-semibold">~ E. faecalis variable</td>
                <td className="p-2.5 text-rose-700 dark:text-rose-400 font-semibold">✕ No activity against Enterococcus</td>
                <td className="p-2.5 text-ink-muted">Neither covers E. faecium (VRE).</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-ink">ESBL Enterobacterales</td>
                <td className="p-2.5 text-emerald-700 dark:text-emerald-400 font-bold">✓ Preferred in Septic Shock</td>
                <td className="p-2.5 text-emerald-700 dark:text-emerald-400 font-bold">✓ Preferred in Stable / OPAT Step-down</td>
                <td className="p-2.5 text-ink-muted">High protein binding of Ertapenem favors Meropenem in hypoalbuminemic shock.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-ink">Dosing Frequency</td>
                <td className="p-2.5 text-ink font-semibold">q8h (1g q8h extended infusion)</td>
                <td className="p-2.5 text-emerald-700 dark:text-emerald-400 font-bold">q24h (1g Once Daily)</td>
                <td className="p-2.5 text-ink-muted">Ertapenem ideal for OPAT discharge.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-ink">CNS Penetration / Meningitis</td>
                <td className="p-2.5 text-emerald-700 dark:text-emerald-400 font-bold">✓ High (2g q8h for meningitis)</td>
                <td className="p-2.5 text-rose-700 dark:text-rose-400 font-bold">✕ Not indicated for meningitis</td>
                <td className="p-2.5 text-ink-muted">Meropenem preferred for neuro-ICU.</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Anaerobic Comparison */}
      {activeTab === "anaerobic" && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-border/80 bg-surface">
                <th className="p-2.5 font-bold text-ink">Antimicrobial Regimen</th>
                <th className="p-2.5 font-bold text-ink">Intrinsic Anaerobic Activity</th>
                <th className="p-2.5 font-bold text-ink">Is Metronidazole Needed?</th>
                <th className="p-2.5 font-bold text-ink-muted">Stewardship Guidance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              <tr>
                <td className="p-2.5 font-semibold text-ink">Piperacillin-Tazobactam</td>
                <td className="p-2.5 text-emerald-700 dark:text-emerald-400 font-bold">✓ Reliable B. fragilis coverage</td>
                <td className="p-2.5 text-rose-700 dark:text-rose-400 font-bold">NO (Redundant!)</td>
                <td className="p-2.5 text-ink-muted">Avoid unnecessary double anaerobic coverage.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold text-ink">Meropenem / Ertapenem</td>
                <td className="p-2.5 text-emerald-700 dark:text-emerald-400 font-bold">✓ Reliable B. fragilis coverage</td>
                <td className="p-2.5 text-rose-700 dark:text-rose-400 font-bold">NO (Redundant!)</td>
                <td className="p-2.5 text-ink-muted">Carbapenems provide reliable anaerobic coverage.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold text-ink">Cefepime / Ceftriaxone</td>
                <td className="p-2.5 text-rose-700 dark:text-rose-400 font-bold">✕ No B. fragilis coverage</td>
                <td className="p-2.5 text-emerald-700 dark:text-emerald-400 font-bold">YES (Mandatory for intra-abdominal)</td>
                <td className="p-2.5 text-ink-muted">Cephalosporins lack B. fragilis coverage.</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Antifungals Comparison */}
      {activeTab === "antifungals" && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-border/80 bg-surface">
                <th className="p-2.5 font-bold text-ink">Clinical Parameter</th>
                <th className="p-2.5 font-bold text-emerald-700 dark:text-emerald-400">Anidulafungin (Echinocandin)</th>
                <th className="p-2.5 font-bold text-rose-700 dark:text-rose-400">Liposomal Amphotericin B</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              <tr>
                <td className="p-2.5 font-medium text-ink">Primary Spectrum</td>
                <td className="p-2.5 text-ink">Candida spp. (including C. glabrata & C. krusei)</td>
                <td className="p-2.5 text-ink font-semibold">Broadest: Mucorales, Molds (Aspergillus), Yeasts, Cryptococcus</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-ink">Renal / Organ Failure Dosing</td>
                <td className="p-2.5 text-emerald-700 dark:text-emerald-400 font-bold">No dose adjustment per PI (Spontaneous chemical degradation)</td>
                <td className="p-2.5 text-amber-700 dark:text-amber-400 font-semibold">Weight-based (Monitor K+/Mg2+; individualize hydration)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-ink">Mucormycosis Activity</td>
                <td className="p-2.5 text-rose-700 dark:text-rose-400 font-bold">✕ No activity against Mucorales</td>
                <td className="p-2.5 text-emerald-700 dark:text-emerald-400 font-bold">✓ First-line Drug of Choice (5 mg/kg/day)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-ink">Urinary Tract Penetration</td>
                <td className="p-2.5 text-rose-700 dark:text-rose-400 font-bold">✕ Poor (Not for Candida cystitis)</td>
                <td className="p-2.5 text-emerald-700 dark:text-emerald-400 font-bold">✓ Active in renal parenchyma & urine</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
