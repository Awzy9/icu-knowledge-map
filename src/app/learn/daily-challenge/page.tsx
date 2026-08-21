import React, { Suspense } from "react";
import type { Metadata } from "next";
import { getAllMedicationChallenges } from "@/registry";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { DailyChallengeClient } from "./DailyChallengeClient";

export const metadata: Metadata = {
  title: "Daily Challenge | ICU Knowledge Map",
  description: "Test your knowledge with today's clinical challenge.",
};

export default function DailyChallengePage() {
  const challenges = getAllMedicationChallenges();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Breadcrumbs 
        items={[
          { label: "Learn", href: "/learn" },
          { label: "Daily Challenge", href: "/learn/daily-challenge" }
        ]} 
      />

      <div className="mt-6">
        <Suspense fallback={<div className="h-96 bg-surface animate-pulse rounded-xl" />}>
          <DailyChallengeClient challenges={challenges} />
        </Suspense>
      </div>
    </div>
  );
}
