import React, { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ContinueLearning } from "@/components/learn/ContinueLearning";
import { DailyChallengeWidget } from "@/components/learn/DailyChallengeWidget";
import { MedicalDisclaimer } from "@/components/learn/MedicalDisclaimer";
import { getAllClinicalCases, getAllMedicationChallenges } from "@/registry";
import { physiologyProfiles } from "@/content/physiology-profiles";
import { rapidDecisions } from "@/content/rapid-decisions";
import { icuErrors } from "@/content/icu-errors";

export const metadata: Metadata = {
  title: "Learn 2.0 | ICU Active Learning Hub",
  description: "Comprehensive active learning platform for critical care: 25 Clinical Reasoning cases, 30 Rapid ICU Decisions, 20 Find the ICU Error scenarios, Case of the Day, and Physiology Compare tools.",
};

export default function LearnDashboard() {
  const cases = getAllClinicalCases();
  const challenges = getAllMedicationChallenges();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 space-y-12">
      <MedicalDisclaimer />

      <section>
        <div className="flex items-center gap-2 mb-2">
          <span className="rounded-md bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-primary">
            Learning 2.0 Engine
          </span>
          <span className="text-xs text-ink-muted">Mastery &amp; Active Recall</span>
        </div>
        <h1 className="text-4xl font-bold text-ink mb-2">ICU Active Learning Hub</h1>
        <p className="text-lg text-ink/70 max-w-3xl leading-relaxed">
          High-yield critical care practice simulations designed around physiological rationale, rapid bedside pattern recognition, and error prevention.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <Suspense fallback={<div className="h-40 bg-surface animate-pulse rounded-xl" />}>
              <ContinueLearning />
            </Suspense>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-ink">Explore Learning Modes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Mode 1: Clinical Reasoning */}
              <Link
                href="/learn/clinical-reasoning"
                className="bg-surface border border-border rounded-xl p-5 hover:border-primary transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl mb-2">🩺</div>
                  <h3 className="text-lg font-bold text-ink group-hover:text-primary transition-colors">
                    Clinical Reasoning Cases
                  </h3>
                  <p className="text-xs text-ink/70 mt-1 mb-3">
                    Multi-step interactive patient simulations with deep branching and physiological feedback.
                  </p>
                </div>
                <div className="text-xs font-semibold text-primary flex items-center justify-between pt-2 border-t border-border/60">
                  <span>{cases.length} Deep Cases</span>
                  <span>Explore &rarr;</span>
                </div>
              </Link>

              {/* Mode 2: Case of the Day */}
              <Link
                href="/learn/case-of-the-day"
                className="bg-surface border border-border rounded-xl p-5 hover:border-primary transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl mb-2">📅</div>
                  <h3 className="text-lg font-bold text-ink group-hover:text-primary transition-colors">
                    Case of the Day
                  </h3>
                  <p className="text-xs text-ink/70 mt-1 mb-3">
                    Daily featured clinical case rotating at midnight UTC. Build a daily habit.
                  </p>
                </div>
                <div className="text-xs font-semibold text-primary flex items-center justify-between pt-2 border-t border-border/60">
                  <span>Today&apos;s Case</span>
                  <span>Launch &rarr;</span>
                </div>
              </Link>

              {/* Mode 3: Rapid ICU Decisions */}
              <Link
                href="/learn/rapid-decisions"
                className="bg-surface border border-border rounded-xl p-5 hover:border-amber-500 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl mb-2">⚡</div>
                  <h3 className="text-lg font-bold text-ink group-hover:text-amber-600 transition-colors">
                    Rapid ICU Decisions
                  </h3>
                  <p className="text-xs text-ink/70 mt-1 mb-3">
                    30-second rapid-fire bedside decisions. Test immediate action over trivia.
                  </p>
                </div>
                <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center justify-between pt-2 border-t border-border/60">
                  <span>{rapidDecisions.length} Decisions</span>
                  <span>Play &rarr;</span>
                </div>
              </Link>

              {/* Mode 4: Find the ICU Error */}
              <Link
                href="/learn/find-the-error"
                className="bg-surface border border-border rounded-xl p-5 hover:border-rose-500 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl mb-2">🔍</div>
                  <h3 className="text-lg font-bold text-ink group-hover:text-rose-600 transition-colors">
                    Find the ICU Error
                  </h3>
                  <p className="text-xs text-ink/70 mt-1 mb-3">
                    Spot the hidden, dangerous management flaw in realistic ICU orders.
                  </p>
                </div>
                <div className="text-xs font-semibold text-rose-600 dark:text-rose-400 flex items-center justify-between pt-2 border-t border-border/60">
                  <span>{icuErrors.length} Traps</span>
                  <span>Inspect &rarr;</span>
                </div>
              </Link>

              {/* Mode 5: Medication Challenges */}
              <Link
                href="/learn/medication-challenges"
                className="bg-surface border border-border rounded-xl p-5 hover:border-primary transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl mb-2">💊</div>
                  <h3 className="text-lg font-bold text-ink group-hover:text-primary transition-colors">
                    Medication Challenges
                  </h3>
                  <p className="text-xs text-ink/70 mt-1 mb-3">
                    Pharmacotherapy questions on dosing, toxicity, and interactions.
                  </p>
                </div>
                <div className="text-xs font-semibold text-primary flex items-center justify-between pt-2 border-t border-border/60">
                  <span>{challenges.length} Challenges</span>
                  <span>Practice &rarr;</span>
                </div>
              </Link>

              {/* Mode 6: Physiology Compare Tool */}
              <Link
                href="/learn/physiology-compare"
                className="bg-surface border border-border rounded-xl p-5 hover:border-primary transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl mb-2">🫀</div>
                  <h3 className="text-lg font-bold text-ink group-hover:text-primary transition-colors">
                    Physiology Compare
                  </h3>
                  <p className="text-xs text-ink/70 mt-1 mb-3">
                    Compare hemodynamics of different vasoactive agents side-by-side.
                  </p>
                </div>
                <div className="text-xs font-semibold text-primary flex items-center justify-between pt-2 border-t border-border/60">
                  <span>{physiologyProfiles.length} Drug Profiles</span>
                  <span>Compare &rarr;</span>
                </div>
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
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/flashcards" className="text-ink/80 hover:text-primary flex justify-between">
                  <span>Flashcards (Active Recall)</span>
                  <span>&rarr;</span>
                </Link>
              </li>
              <li>
                <Link href="/questions" className="text-ink/80 hover:text-primary flex justify-between">
                  <span>ICU Question Bank</span>
                  <span>&rarr;</span>
                </Link>
              </li>
              <li>
                <Link href="/progress" className="text-ink/80 hover:text-primary flex justify-between">
                  <span>My Progress &amp; Streaks</span>
                  <span>&rarr;</span>
                </Link>
              </li>
              <li>
                <Link href="/library" className="text-ink/80 hover:text-primary flex justify-between">
                  <span>My Bookmarks &amp; Notes</span>
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
