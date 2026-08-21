"use client";

import React from "react";

export function FolatePathwayVisualizer() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-indigo-200 dark:border-indigo-950 bg-indigo-50/30 dark:bg-indigo-950/20 p-5 shadow-xs">
      <div className="flex items-center justify-between border-b border-indigo-200/60 dark:border-indigo-900/60 pb-3">
        <h3 className="text-base font-semibold text-indigo-950 dark:text-indigo-200 flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-indigo-500" />
          Sequential Folate Pathway Blockade — TMP-SMX Mechanism
        </h3>
        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/60 px-2 py-0.5 rounded">
          Bactericidal Synergy
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center text-center py-2">
        <div className="rounded-lg bg-surface border border-border p-3">
          <div className="text-xs font-semibold text-ink-muted uppercase">Precursor</div>
          <div className="text-sm font-bold text-ink mt-1">PABA</div>
          <div className="text-[10px] text-ink-muted mt-0.5">Para-Aminobenzoic Acid</div>
        </div>

        <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900">
          <div className="text-xs font-bold text-rose-700 dark:text-rose-300">Sulfamethoxazole</div>
          <div className="text-[10px] text-rose-600 dark:text-rose-400 font-medium">Inhibits Dihydropteroate Synthase</div>
          <div className="text-sm font-black text-rose-600 dark:text-rose-400 mt-0.5">⛔ BLOCK 1</div>
        </div>

        <div className="rounded-lg bg-surface border border-border p-3">
          <div className="text-xs font-semibold text-ink-muted uppercase">Intermediate</div>
          <div className="text-sm font-bold text-ink mt-1">Dihydrofolate</div>
          <div className="text-[10px] text-ink-muted mt-0.5">DHF</div>
        </div>

        <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-900">
          <div className="text-xs font-bold text-indigo-700 dark:text-indigo-300">Trimethoprim</div>
          <div className="text-[10px] text-indigo-600 dark:text-indigo-400 font-medium">Inhibits Dihydrofolate Reductase (DHFR)</div>
          <div className="text-sm font-black text-indigo-600 dark:text-indigo-400 mt-0.5">⛔ BLOCK 2</div>
        </div>

        <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-3">
          <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 uppercase">End Product Lost</div>
          <div className="text-sm font-bold text-emerald-800 dark:text-emerald-200 mt-1">Tetrahydrofolate</div>
          <div className="text-[10px] text-emerald-700 dark:text-emerald-400 mt-0.5">Purine & DNA Failure</div>
        </div>
      </div>

      <div className="text-xs text-indigo-900 dark:text-indigo-300 bg-indigo-100/60 dark:bg-indigo-950/60 p-3 rounded-md">
        💡 <strong>Key Synergy Pearl:</strong> Sulfamethoxazole and Trimethoprim individually are bacteriostatic, but when combined they achieve <strong>sequential dual blockade</strong> of purine synthesis, converting the net effect into <strong>potent bactericidal cell death</strong>.
      </div>
    </div>
  );
}
