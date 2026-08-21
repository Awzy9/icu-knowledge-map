import React, { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ContinueLearning } from "@/components/learn/ContinueLearning";
import { DailyChallengeWidget } from "@/components/learn/DailyChallengeWidget";
import { MedicalDisclaimer } from "@/components/learn/MedicalDisclaimer";
import { getAllClinicalCases, getAllMedicationChallenges, getAllTopics } from "@/registry";
import { physiologyProfiles } from "@/content/physiology-profiles";

export const metadata: Metadata = {
  title: "Learn | ICU Knowledge Map",
  description: "Active learning engine for intensive care medicine. Clinical reasoning, daily challenges, and physiology tools.",
};

export default function LearnDashboard() {
  const cases = getAllClinicalCases();
  const challenges = getAllMedicationChallenges();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 space-y-12">
      <MedicalDisclaimer />

      <section>
        <h1 className="text-4xl font-bold text-ink mb-2">ICU Learning Engine</h1>
        <p className="text-xl text-ink/70">Test your knowledge with active clinical scenarios and simulations.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <Suspense fallback={<div className="h-40 bg-surface animate-pulse rounded-xl" />}>
              <ContinueLearning />
            </Suspense>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink mb-4">Explore Learning Modes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link href="/learn/clinical-reasoning" className="bg-surface border border-border rounded-xl p-6 hover:border-accent transition-colors block">
                <h3 className="text-xl font-bold text-ink mb-2">Clinical Reasoning</h3>
                <p className="text-ink/70 mb-4">Step-by-step interactive patient cases.</p>
                <div className="text-sm font-medium text-accent">{cases.length} cases available &rarr;</div>
              </Link>
              
              <Link href="/learn/medication-challenges" className="bg-surface border border-border rounded-xl p-6 hover:border-accent transition-colors block">
                <h3 className="text-xl font-bold text-ink mb-2">Medication Challenges</h3>
                <p className="text-ink/70 mb-4">Test your pharmacology knowledge.</p>
                <div className="text-sm font-medium text-accent">{challenges.length} challenges available &rarr;</div>
              </Link>

              <Link href="/learn/physiology-compare" className="bg-surface border border-border rounded-xl p-6 hover:border-accent transition-colors block sm:col-span-2">
                <h3 className="text-xl font-bold text-ink mb-2">Physiology Compare Tool</h3>
                <p className="text-ink/70 mb-4">Compare hemodynamics of different vasoactive agents side-by-side.</p>
                <div className="text-sm font-medium text-accent">{physiologyProfiles.length} profiles &rarr;</div>
              </Link>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <Suspense fallback={<div className="h-40 bg-surface animate-pulse rounded-xl" />}>
              <DailyChallengeWidget challenges={challenges} />
            </Suspense>
          </section>

          <section className="bg-surface border border-border rounded-xl p-6">
            <h3 className="font-bold text-ink mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/flashcards" className="text-ink/80 hover:text-accent flex justify-between">
                  <span>Flashcards</span>
                  <span>&rarr;</span>
                </Link>
              </li>
              <li>
                <Link href="/questions" className="text-ink/80 hover:text-accent flex justify-between">
                  <span>Question Bank</span>
                  <span>&rarr;</span>
                </Link>
              </li>
              <li>
                <Link href="/progress" className="text-ink/80 hover:text-accent flex justify-between">
                  <span>My Progress</span>
                  <span>&rarr;</span>
                </Link>
              </li>
              <li>
                <Link href="/library" className="text-ink/80 hover:text-accent flex justify-between">
                  <span>My Library</span>
                  <span>&rarr;</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
