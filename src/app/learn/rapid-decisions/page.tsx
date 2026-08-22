import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RapidDecisionPlayer } from "@/components/learn/RapidDecisionPlayer";
import { rapidDecisions } from "@/content/rapid-decisions";

export const metadata: Metadata = {
  title: "Rapid ICU Decisions | 30 Bedside Scenarios",
  description:
    "Train rapid clinical decision-making under time pressure: 30 high-yield bedside scenarios covering electrolyte emergencies, mechanical ventilation crises, shock pharmacotherapy, and toxicological antidotes.",
};

export default function RapidDecisionsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-border pb-6">
        <Breadcrumbs
          items={[
            { label: "Learn", href: "/learn" },
            { label: "Rapid ICU Decisions" },
          ]}
        />
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="rounded-md bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Pattern Recognition
            </span>
            <span className="text-xs text-ink-muted">30 Bedside Decisions</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-ink">Rapid ICU Decisions</h1>
          <p className="mt-1 text-sm text-ink-muted leading-relaxed">
            30–60 second bedside decisions testing action over trivia. Make immediate clinical calls on vasopressor sequencing, ventilator adjustments, electrolyte shifts, and toxicological antidotes.
          </p>
        </div>
      </div>

      {/* Interactive Player */}
      <RapidDecisionPlayer decisions={rapidDecisions} />
    </div>
  );
}
