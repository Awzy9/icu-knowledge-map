import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CaseOfTheDay } from "@/components/learn/CaseOfTheDay";
import { getAllClinicalCases } from "@/registry";

export const metadata: Metadata = {
  title: "Case of the Day | Daily ICU Clinical Reasoning Challenge",
  description:
    "A fresh, high-yield ICU clinical simulation every day: test your bedside decision-making across 25 multi-step critical care cases rotating daily.",
};

export default function CaseOfTheDayPage() {
  const cases = getAllClinicalCases();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-border pb-6">
        <Breadcrumbs
          items={[
            { label: "Learn", href: "/learn" },
            { label: "Case of the Day" },
          ]}
        />
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="rounded-md bg-primary/10 border border-primary/20 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-primary">
              Daily Practice
            </span>
            <span className="text-xs text-ink-muted">25 Rotating Simulations</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-ink">Case of the Day</h1>
          <p className="mt-1 text-sm text-ink-muted leading-relaxed">
            One deterministic clinical reasoning simulation selected daily. Manage acute physiology, order diagnostics, and titrate advanced pharmacotherapy step-by-step.
          </p>
        </div>
      </div>

      {/* Case of the Day Component */}
      <CaseOfTheDay cases={cases} />
    </div>
  );
}
