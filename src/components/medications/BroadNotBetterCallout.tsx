"use client";

import React from "react";
import type { StewardshipTeaching } from "@/content-types/medication";

interface BroadNotBetterCalloutProps {
  stewardship: StewardshipTeaching;
  drugName: string;
}

export function BroadNotBetterCallout({ stewardship, drugName }: BroadNotBetterCalloutProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-emerald-300 dark:border-emerald-900 bg-emerald-500/10 p-5 shadow-xs">
      <div className="flex items-center gap-2 border-b border-emerald-200 dark:border-emerald-900/60 pb-2">
        <svg className="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-950 dark:text-emerald-200">
          Antimicrobial Stewardship — Broader ≠ Better ({drugName})
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="rounded-lg bg-surface/80 p-3 border border-emerald-200/60 dark:border-emerald-900/40">
          <span className="font-bold text-emerald-900 dark:text-emerald-300 block mb-1">
            🌱 De-Escalation & Narrowing Principle:
          </span>
          <p className="text-ink-muted leading-relaxed">{stewardship.deEscalationNotes}</p>
        </div>

        <div className="rounded-lg bg-surface/80 p-3 border border-emerald-200/60 dark:border-emerald-900/40">
          <span className="font-bold text-emerald-900 dark:text-emerald-300 block mb-1">
            🛡️ &quot;Broader ≠ Better&quot; Bedside Teaching Point:
          </span>
          <p className="text-ink-muted leading-relaxed">{stewardship.broadNotBetterPoint}</p>
        </div>
      </div>
    </div>
  );
}
