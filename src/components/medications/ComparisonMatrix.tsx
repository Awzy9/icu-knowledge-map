"use client";

import React, { useState } from "react";

export function ComparisonMatrix() {
  const [activeTab, setActiveTab] = useState<
    "carbapenems" | "anaerobic" | "antifungals" | "anticoagulants" | "corticosteroids" | "diuretics"
  >("carbapenems");

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border/80 bg-card p-5 shadow-xs">
      <div className="flex items-center justify-between border-b border-border/60 pb-3 flex-wrap gap-2">
        <h3 className="text-base font-semibold text-ink flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-indigo-500" />
          High-Yield Medication Comparison Matrices
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
          <button
            onClick={() => setActiveTab("anticoagulants")}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
              activeTab === "anticoagulants"
                ? "bg-card text-ink shadow-xs"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            UFH vs Enoxaparin
          </button>
          <button
            onClick={() => setActiveTab("corticosteroids")}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
              activeTab === "corticosteroids"
                ? "bg-card text-ink shadow-xs"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Hydrocortisone vs Methylprednisolone
          </button>
          <button
            onClick={() => setActiveTab("diuretics")}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
              activeTab === "diuretics"
                ? "bg-card text-ink shadow-xs"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Furosemide vs Acetazolamide
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

      {/* Anticoagulants Comparison */}
      {activeTab === "anticoagulants" && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-border/80 bg-surface">
                <th className="p-2.5 font-bold text-ink">Feature</th>
                <th className="p-2.5 font-bold text-blue-700 dark:text-blue-400">Unfractionated Heparin</th>
                <th className="p-2.5 font-bold text-amber-700 dark:text-amber-400">Enoxaparin (LMWH)</th>
                <th className="p-2.5 font-bold text-ink-muted">Bedside Clinical Pearl</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              <tr>
                <td className="p-2.5 font-medium text-ink">Anti-Xa : Anti-IIa Activity Ratio</td>
                <td className="p-2.5 text-ink">~1:1 (inhibits both Xa and IIa comparably)</td>
                <td className="p-2.5 text-ink font-semibold">~3–4:1 (predominantly anti-Xa)</td>
                <td className="p-2.5 text-ink-muted">UFH&apos;s dual Xa/IIa inhibition is why aPTT tracks it reliably; enoxaparin&apos;s Xa-dominant activity is why aPTT does NOT reliably track it.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-ink">Routine Monitoring</td>
                <td className="p-2.5 text-ink">aPTT or anti-Xa, checked every 6h until therapeutic, then daily</td>
                <td className="p-2.5 text-ink">Not routinely required at standard doses; anti-Xa only in select populations</td>
                <td className="p-2.5 text-ink-muted">Obesity, pregnancy, renal impairment, and mechanical valves are the situations where LMWH anti-Xa monitoring is typically considered.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-ink">Renal Clearance</td>
                <td className="p-2.5 text-emerald-700 dark:text-emerald-400 font-bold">Primarily non-renal (reticuloendothelial + hepatic)</td>
                <td className="p-2.5 text-rose-700 dark:text-rose-400 font-bold">Predominantly renal — accumulates in renal impairment</td>
                <td className="p-2.5 text-ink-muted">UFH is generally preferred over enoxaparin when CrCl is severely reduced or on CRRT, given its non-renal clearance and instant reversibility.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-ink">Onset / Offset</td>
                <td className="p-2.5 text-emerald-700 dark:text-emerald-400 font-bold">Immediate IV onset; short half-life (~1–2h) allows rapid offset</td>
                <td className="p-2.5 text-ink">Slower peak (~3–5h SC); longer half-life (~4.5–7h)</td>
                <td className="p-2.5 text-ink-muted">UFH&apos;s rapid on/off makes it preferred when procedures or bleeding risk may require fast interruption.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-ink">Protamine Reversal</td>
                <td className="p-2.5 text-emerald-700 dark:text-emerald-400 font-bold">~Complete reversal</td>
                <td className="p-2.5 text-amber-700 dark:text-amber-400 font-semibold">Partial reversal only (~60% of anti-Xa activity at best)</td>
                <td className="p-2.5 text-ink-muted">Never promise a patient/family &quot;full reversal&quot; for enoxaparin bleeding — protamine only partially neutralizes it.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-ink">HIT Risk</td>
                <td className="p-2.5 text-rose-700 dark:text-rose-400 font-bold">Higher (~1–5% with prolonged therapeutic exposure)</td>
                <td className="p-2.5 text-emerald-700 dark:text-emerald-400 font-bold">Lower (~10-fold less than UFH)</td>
                <td className="p-2.5 text-ink-muted">Both can trigger HIT — LMWH is not &quot;HIT-safe,&quot; just lower risk; cross-reactivity with existing HIT antibodies still occurs.</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Corticosteroids Comparison */}
      {activeTab === "corticosteroids" && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-border/80 bg-surface">
                <th className="p-2.5 font-bold text-ink">Feature</th>
                <th className="p-2.5 font-bold text-blue-700 dark:text-blue-400">Hydrocortisone</th>
                <th className="p-2.5 font-bold text-amber-700 dark:text-amber-400">Methylprednisolone</th>
                <th className="p-2.5 font-bold text-ink-muted">Bedside Clinical Pearl</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              <tr>
                <td className="p-2.5 font-medium text-ink">Relative Glucocorticoid Potency</td>
                <td className="p-2.5 text-ink">1x (reference)</td>
                <td className="p-2.5 text-ink font-semibold">~5x hydrocortisone</td>
                <td className="p-2.5 text-ink-muted">Potency ratios guide equivalent dosing, not clinical superiority for a given indication.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-ink">Relative Mineralocorticoid Activity</td>
                <td className="p-2.5 text-emerald-700 dark:text-emerald-400 font-bold">Clinically significant (retains Na+/water, excretes K+)</td>
                <td className="p-2.5 text-rose-700 dark:text-rose-400 font-bold">Negligible</td>
                <td className="p-2.5 text-ink-muted">This is why hydrocortisone — not methylprednisolone — is preferred for adrenal insufficiency/adrenal crisis, where mineralocorticoid replacement matters.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-ink">Duration of Action</td>
                <td className="p-2.5 text-ink">Short (8–12h biologic half-life)</td>
                <td className="p-2.5 text-ink font-semibold">Intermediate (18–36h biologic half-life)</td>
                <td className="p-2.5 text-ink-muted">Hydrocortisone&apos;s short duration fits its typical q6h infusion/bolus septic-shock protocol.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-ink">Primary ICU Role</td>
                <td className="p-2.5 text-ink">Septic shock (per current guideline-conditional use), adrenal crisis, CIRCI</td>
                <td className="p-2.5 text-ink">Severe asthma/COPD exacerbation, selected inflammatory lung disease</td>
                <td className="p-2.5 text-ink-muted">Don&apos;t substitute one for the other by potency conversion alone — indication drives the choice, not just dose equivalence.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-ink">Approximate Equivalent Dose</td>
                <td className="p-2.5 text-ink">20 mg (reference)</td>
                <td className="p-2.5 text-ink">4 mg</td>
                <td className="p-2.5 text-ink-muted">Equivalence tables assist cross-titration but are not a substitute for indication-specific dosing regimens.</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Diuretics Comparison */}
      {activeTab === "diuretics" && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-border/80 bg-surface">
                <th className="p-2.5 font-bold text-ink">Feature</th>
                <th className="p-2.5 font-bold text-blue-700 dark:text-blue-400">Furosemide</th>
                <th className="p-2.5 font-bold text-amber-700 dark:text-amber-400">Acetazolamide</th>
                <th className="p-2.5 font-bold text-ink-muted">Bedside Clinical Pearl</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              <tr>
                <td className="p-2.5 font-medium text-ink">Nephron Site of Action</td>
                <td className="p-2.5 text-ink">Thick ascending limb (NKCC2 blockade)</td>
                <td className="p-2.5 text-ink font-semibold">Proximal tubule (carbonic anhydrase inhibition)</td>
                <td className="p-2.5 text-ink-muted">Different sites of action is exactly why sequential/combined use (ADVOR-style) produces a synergistic natriuretic effect.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-ink">Effect on Acid-Base Status</td>
                <td className="p-2.5 text-rose-700 dark:text-rose-400 font-bold">Worsens/causes metabolic alkalosis</td>
                <td className="p-2.5 text-emerald-700 dark:text-emerald-400 font-bold">Corrects metabolic alkalosis (bicarbonaturia)</td>
                <td className="p-2.5 text-ink-muted">This complementary acid-base effect is a major reason to add acetazolamide in a loop-diuretic patient who has developed contraction alkalosis.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-ink">Primary ICU Role</td>
                <td className="p-2.5 text-ink">First-line decongestion in ADHF/pulmonary edema/volume overload</td>
                <td className="p-2.5 text-ink">Adjunct for diuretic-resistant congestion; select ventilated/metabolic-alkalosis contexts</td>
                <td className="p-2.5 text-ink-muted">Acetazolamide is an adjunct, not a substitute — it is not a first-line decongestive agent on its own.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-ink">Key Electrolyte Risk</td>
                <td className="p-2.5 text-ink">Hypokalemia, hypomagnesemia, hypochloremia</td>
                <td className="p-2.5 text-ink">Hypokalemia, non-anion-gap metabolic acidosis (with overuse)</td>
                <td className="p-2.5 text-ink-muted">Both can cause hypokalemia by different mechanisms — check potassium regardless of which agent(s) are running.</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
