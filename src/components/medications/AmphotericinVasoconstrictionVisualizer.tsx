"use client";

import React from "react";

export function AmphotericinVasoconstrictionVisualizer() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-rose-200 dark:border-rose-950 bg-rose-50/20 dark:bg-rose-950/20 p-5 shadow-xs">
      <div className="flex items-center justify-between border-b border-rose-200/60 dark:border-rose-900/60 pb-3">
        <h3 className="text-base font-semibold text-rose-950 dark:text-rose-200 flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-rose-500" />
          Renal Vasoconstriction & Electrolyte Wasting Physiology — Liposomal Amphotericin B
        </h3>
        <span className="text-xs font-bold text-rose-700 dark:text-rose-400 bg-rose-100 dark:bg-rose-900/60 px-2.5 py-0.5 rounded">
          Nephrotoxicity Mechanism
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Afferent Vasoconstriction */}
        <div className="rounded-lg border border-rose-200 dark:border-rose-900 bg-surface p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 text-rose-800 text-xs font-bold">1</span>
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-900 dark:text-rose-300">
              Afferent Arteriolar Vasoconstriction
            </h4>
          </div>
          <p className="text-xs text-ink-muted leading-relaxed">
            Amphotericin B triggers Tubuloglomerular Feedback (TGF) and direct renal afferent arteriolar smooth muscle contraction, reducing renal blood flow and GFR.
          </p>
          <div className="mt-3 rounded bg-rose-50 dark:bg-rose-950/40 p-2 text-xs font-medium text-rose-800 dark:text-rose-300">
            🛡️ <strong>ICU Action:</strong> Individualize IV hydration based on patient volume status (saline pre-hydration was shown to attenuate TGF vasoconstriction for conventional deoxycholate, but is not universally mandatory for liposomal formulations and should be tailored in heart failure or ARDS).
          </div>
        </div>

        {/* Distal Tubular Wasting */}
        <div className="rounded-lg border border-amber-200 dark:border-amber-900 bg-surface p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-800 text-xs font-bold">2</span>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
              Distal Tubular Membrane Pores (Potassium / Magnesium Wasting)
            </h4>
          </div>
          <p className="text-xs text-ink-muted leading-relaxed">
            Polyene membrane pores insert into distal tubular cell membranes, creating non-selective ion channels that cause severe, uncontrollable renal wasting of Potassium (K+) and Magnesium (Mg2+).
          </p>
          <div className="mt-3 rounded bg-amber-50 dark:bg-amber-950/40 p-2 text-xs font-medium text-amber-800 dark:text-amber-300">
            🧪 <strong>ICU Action:</strong> Monitor serum K+ and Mg2+ DAILY and provide aggressive IV repletion (target K+ &gt; 4.0 mEq/L, Mg2+ &gt; 2.0 mg/dL).
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-rose-500/10 border border-rose-300 dark:border-rose-900 p-3 text-xs text-rose-950 dark:text-rose-200 font-medium">
        ⚠️ <strong>Formulation Safety Warning:</strong> Liposomal Amphotericin B (AmBisome: 3–5 mg/kg/day) reduces nephrotoxicity by ~60% compared to conventional amphotericin B deoxycholate (0.5–1 mg/kg/day). <strong>Formulations are NOT interchangeable mg-for-mg!</strong>
      </div>
    </div>
  );
}
