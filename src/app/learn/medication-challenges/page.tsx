import React, { Suspense } from "react";
import type { Metadata } from "next";
import { getAllMedicationChallenges } from "@/registry";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ChallengesPageClient } from "./ChallengesPageClient";

export const metadata: Metadata = {
  title: "Medication Challenges | ICU Knowledge Map",
  description: "Test your pharmacology knowledge with medication challenges.",
};

export default function MedicationChallengesPage() {
  const challenges = getAllMedicationChallenges();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Breadcrumbs 
        items={[
          { label: "Learn", href: "/learn" },
          { label: "Medication Challenges", href: "/learn/medication-challenges" }
        ]} 
      />

      <h1 className="text-4xl font-bold text-ink mt-6 mb-4">Medication Challenges</h1>
      <p className="text-xl text-ink/70 mb-12">Sharpen your pharmacology reasoning with rapid-fire questions.</p>

      <Suspense fallback={<div className="h-96 bg-surface animate-pulse rounded-xl" />}>
        <ChallengesPageClient challenges={challenges} />
      </Suspense>
    </div>
  );
}
