"use client";

import React from "react";
import type { PkPdData } from "@/content-types/medication";

interface PkPdVisualizerProps {
  pkPd: PkPdData;
  drugName: string;
}

export function PkPdVisualizer({ pkPd, drugName }: PkPdVisualizerProps) {
  const getBadgeColor = (type: PkPdData["type"]) => {
    switch (type) {
      case "time-dependent":
        return "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200 border-blue-300";
      case "concentration-dependent":
        return "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200 border-amber-300";
      case "auc-mic":
        return "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-200 border-purple-300";
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border-slate-300";
    }
  };

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border/80 bg-card p-5 shadow-xs">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <h3 className="text-base font-semibold text-ink flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-blue-500" />
          Pharmacokinetics & Pharmacodynamics (PK/PD) — {drugName}
        </h3>
        <span className={`text-xs font-bold px-2.5 py-1 rounded border ${getBadgeColor(pkPd.type)} capitalize`}>
          {pkPd.type.replace("-", " ")}
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
        <div className="rounded-lg bg-surface border border-border/60 p-3">
          <span className="text-xs font-medium text-ink-muted block mb-1">Target Parameter</span>
          <span className="font-bold text-ink text-xs md:text-sm">{pkPd.targetParameter}</span>
        </div>
        <div className="rounded-lg bg-surface border border-border/60 p-3">
          <span className="text-xs font-medium text-ink-muted block mb-1">Half-Life ($t_{1/2}$)</span>
          <span className="font-semibold text-ink text-xs md:text-sm">{pkPd.halfLife}</span>
        </div>
        <div className="rounded-lg bg-surface border border-border/60 p-3">
          <span className="text-xs font-medium text-ink-muted block mb-1">Protein Binding</span>
          <span className="font-semibold text-ink text-xs md:text-sm">{pkPd.proteinBinding}</span>
        </div>
        <div className="rounded-lg bg-surface border border-border/60 p-3">
          <span className="text-xs font-medium text-ink-muted block mb-1">Primary Elimination</span>
          <span className="font-semibold text-ink text-xs md:text-sm">{pkPd.elimination}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs bg-surface/40 p-3 rounded-lg border border-border/60">
        <div>
          <span className="font-bold text-ink block mb-0.5">Metabolism Pathway:</span>
          <span className="text-ink-muted">{pkPd.metabolism}</span>
        </div>
        {pkPd.vdNotes && (
          <div>
            <span className="font-bold text-ink block mb-0.5">Volume of Distribution ($V_d$) Notes:</span>
            <span className="text-ink-muted">{pkPd.vdNotes}</span>
          </div>
        )}
      </div>
    </div>
  );
}
