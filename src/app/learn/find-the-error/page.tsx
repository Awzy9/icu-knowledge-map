import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FindTheErrorPlayer } from "@/components/learn/FindTheErrorPlayer";
import { icuErrors } from "@/content/icu-errors";

export const metadata: Metadata = {
  title: "Find the ICU Error | 20 Critical Care Traps",
  description:
    "Test your vigilance and clinical safety instinct: review 20 realistic ICU management plans and spot the subtle, dangerous pharmacological or physiological error before it harms the patient.",
};

export default function FindTheErrorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-border pb-6">
        <Breadcrumbs
          items={[
            { label: "Learn", href: "/learn" },
            { label: "Find the ICU Error" },
          ]}
        />
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="rounded-md bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
              Safety & Vigilance
            </span>
            <span className="text-xs text-ink-muted">20 Management Traps</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-ink">Find the ICU Error</h1>
          <p className="mt-1 text-sm text-ink-muted leading-relaxed">
            One proposed management plan. One critical, life-threatening error. Identify the faulty order, understand the underlying pathophysiology, and review the guideline-directed corrective approach.
          </p>
        </div>
      </div>

      {/* Interactive Player */}
      <FindTheErrorPlayer errors={icuErrors} />
    </div>
  );
}
