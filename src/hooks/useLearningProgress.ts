"use client";

import { useSyncExternalStore, useMemo } from "react";
import {
  getUnifiedLearningState,
  subscribeToLearningState,
  DEFAULT_LEARNING_STATE,
  exportLearningState,
  importLearningState,
  resetLearningState,
  computeLearningState,
  type LearningStateLevel,
} from "@/lib/learning-state";
import { allMedications } from "@/content/medications";
import { medicationChallenges } from "@/content/medication-challenges";
import { clinicalCases } from "@/content/clinical-cases";

export { exportLearningState as exportLearningData, resetLearningState as resetLearningData, importLearningState };

export interface LearningStateBreakdown {
  notStarted: number;
  learning: number;
  practiced: number;
  strong: number;
}

export interface MedicationProgressItem {
  slug: string;
  name: string;
  level: LearningStateLevel;
}

export interface NeedsReviewArea {
  id: string;
  title: string;
  category: string;
  reason: string;
  accuracy?: number;
  href: string;
}

export interface LearningStats {
  readonly topicsCompleted: number;
  readonly totalTopics: number;
  readonly topicBreakdown: LearningStateBreakdown;
  readonly medicationBreakdown: LearningStateBreakdown;
  readonly medicationList: readonly MedicationProgressItem[];
  readonly casesCompleted: number;
  readonly totalCases: number;
  readonly challengeAccuracy: { readonly total: number; readonly correct: number; readonly percentage: number };
  readonly questionAccuracy: { readonly total: number; readonly correct: number; readonly percentage: number };
  readonly flashcardsKnown: number;
  readonly flashcardsReview: number;
  readonly bookmarkCount: number;
  readonly needsReview: readonly NeedsReviewArea[];
  readonly strongAreas: readonly string[];
}

export function useLearningProgress(counts: {
  totalTopics: number;
  totalCases: number;
}): LearningStats {
  const state = useSyncExternalStore(
    subscribeToLearningState,
    getUnifiedLearningState,
    () => DEFAULT_LEARNING_STATE
  );

  return useMemo(() => {
    // 1. Topic Breakdown
    const topicEntries = Object.entries(state.topics || {});
    const topicsCompleted = topicEntries.filter(([_, t]) => t.completed).length;

    let topicsLearning = 0;
    let topicsPracticed = 0;
    let topicsStrong = 0;

    topicEntries.forEach(([id, t]) => {
      const qAttempts = state.questions[id]?.attempts || [];
      const qTotal = qAttempts.length;
      const qCorrect = qAttempts.filter((a) => a.correct).length;
      const fcStatus = state.flashcards[id]?.status;

      const lvl = computeLearningState({
        isViewed: t.viewed,
        challengeTotalAttempts: 0,
        challengeRecentCorrect: 0,
        questionTotalAttempts: qTotal,
        questionRecentCorrect: qCorrect,
        flashcardStatus: fcStatus,
      });

      if (lvl === "strong") topicsStrong++;
      else if (lvl === "practiced") topicsPracticed++;
      else if (lvl === "learning") topicsLearning++;
    });

    const topicsNotStarted = Math.max(0, counts.totalTopics - (topicsLearning + topicsPracticed + topicsStrong));

    // 2. Medication Breakdown — computed from real structured signals across all medications
    const medicationList: MedicationProgressItem[] = [];
    let medsNotStarted = 0;
    let medsLearning = 0;
    let medsPracticed = 0;
    let medsStrong = 0;
    const medNeedsReview: NeedsReviewArea[] = [];

    for (const med of allMedications) {
      const isViewed = !!state.medications[med.slug]?.viewed;

      // Find challenges associated with this medication
      const relatedChallenges = medicationChallenges.filter((ch) =>
        ch.relatedMedicationSlugs?.includes(med.slug)
      );
      const chAttempts = relatedChallenges.flatMap((ch) => state.challenges[ch.id]?.attempts || []);
      const chTotal = chAttempts.length;
      const chCorrect = chAttempts.filter((a) => a.correct).length;

      // Find questions and flashcards from related topics
      const qAttempts = (med.relatedTopicIds || []).flatMap(
        (tid) => state.questions[tid]?.attempts || []
      );
      const qTotal = qAttempts.length;
      const qCorrect = qAttempts.filter((a) => a.correct).length;

      const hasKnownFlashcard = (med.relatedTopicIds || []).some(
        (tid) => state.flashcards[tid]?.status === "known"
      );

      // Find cases matching this medication
      const relatedCases = clinicalCases.filter((c) =>
        c.relatedMedicationSlugs?.includes(med.slug)
      );
      const casesCompleted = relatedCases.filter((c) => state.cases[c.id]?.completedAt).length;

      const level = computeLearningState({
        isViewed,
        challengeTotalAttempts: chTotal,
        challengeRecentCorrect: chCorrect,
        questionTotalAttempts: qTotal,
        questionRecentCorrect: qCorrect,
        flashcardStatus: hasKnownFlashcard ? "known" : undefined,
        casesCompleted,
      });

      medicationList.push({ slug: med.slug, name: med.name, level });

      if (level === "strong") medsStrong++;
      else if (level === "practiced") medsPracticed++;
      else if (level === "learning") medsLearning++;
      else medsNotStarted++;

      // Check if medication needs review based on poor challenge performance
      if (chTotal >= 2) {
        const pct = Math.round((chCorrect / chTotal) * 100);
        if (pct < 70) {
          medNeedsReview.push({
            id: `med-${med.slug}`,
            title: `${med.name} (Medication)`,
            category: "Medication Decisions",
            accuracy: pct,
            reason: `${pct}% accuracy across ${chTotal} decision challenges`,
            href: `/learn/medication-challenges`,
          });
        }
      }
    }

    // 3. Cases
    const caseEntries = Object.values(state.cases || {});
    const casesCompleted = caseEntries.filter((c) => c.completedAt).length;

    // 4. Challenges & Questions accuracy
    const allChallengeAttempts = Object.values(state.challenges || {}).flatMap((c) => c.attempts);
    const challengeCorrect = allChallengeAttempts.filter((a) => a.correct).length;

    const allQuestionAttempts = Object.values(state.questions || {}).flatMap((q) => q.attempts);
    const questionCorrect = allQuestionAttempts.filter((a) => a.correct).length;

    // 5. Flashcards
    const flashcardEntries = Object.values(state.flashcards || {});
    const flashcardsKnown = flashcardEntries.filter((f) => f.status === "known").length;
    const flashcardsReview = flashcardEntries.filter((f) => f.status === "review").length;

    // 6. Aggregate Needs Review Areas
    const topicNeedsReview: NeedsReviewArea[] = [];
    Object.entries(state.questions || {}).forEach(([topicId, q]) => {
      if (q.attempts.length >= 2) {
        const correct = q.attempts.filter((a) => a.correct).length;
        const pct = Math.round((correct / q.attempts.length) * 100);
        if (pct < 70) {
          topicNeedsReview.push({
            id: topicId,
            title: topicId.replace(/-/g, " "),
            category: "Topic Questions",
            accuracy: pct,
            reason: `${pct}% accuracy on ${q.attempts.length} attempts`,
            href: `/questions/${topicId}`,
          });
        }
      }
    });

    const caseNeedsReview: NeedsReviewArea[] = [];
    Object.entries(state.cases || {}).forEach(([caseId, c]) => {
      if (c.completedAt && typeof c.score === "number" && c.score < 70) {
        caseNeedsReview.push({
          id: caseId,
          title: caseId.replace(/^case-/, "").replace(/-/g, " "),
          category: "Clinical Case",
          accuracy: c.score,
          reason: `Completed with score of ${c.score}%`,
          href: `/learn/clinical-reasoning/${caseId.replace(/^case-/, "")}`,
        });
      }
    });

    const needsReview = [...medNeedsReview, ...topicNeedsReview, ...caseNeedsReview];

    // 7. Strong Areas
    const strongAreas: string[] = [];
    if (challengeCorrect >= 5 && (challengeCorrect / allChallengeAttempts.length) >= 0.8) {
      strongAreas.push("Medication Decisions");
    }
    if (questionCorrect >= 10 && (questionCorrect / allQuestionAttempts.length) >= 0.8) {
      strongAreas.push("ICU Core Concepts");
    }
    if (casesCompleted >= 3) {
      const highScores = caseEntries.filter((c) => c.score && c.score >= 80).length;
      if (highScores >= 2) {
        strongAreas.push("Clinical Case Reasoning");
      }
    }
    if (medsStrong >= 5) {
      strongAreas.push("ICU Pharmacotherapy Mastery");
    }

    return {
      topicsCompleted,
      totalTopics: counts.totalTopics,
      topicBreakdown: {
        notStarted: topicsNotStarted,
        learning: topicsLearning,
        practiced: topicsPracticed,
        strong: topicsStrong,
      },
      medicationBreakdown: {
        notStarted: medsNotStarted,
        learning: medsLearning,
        practiced: medsPracticed,
        strong: medsStrong,
      },
      medicationList,
      casesCompleted,
      totalCases: counts.totalCases,
      challengeAccuracy: {
        total: allChallengeAttempts.length,
        correct: challengeCorrect,
        percentage: allChallengeAttempts.length > 0 ? Math.round((challengeCorrect / allChallengeAttempts.length) * 100) : 0,
      },
      questionAccuracy: {
        total: allQuestionAttempts.length,
        correct: questionCorrect,
        percentage: allQuestionAttempts.length > 0 ? Math.round((questionCorrect / allQuestionAttempts.length) * 100) : 0,
      },
      flashcardsKnown,
      flashcardsReview,
      bookmarkCount: (state.bookmarks || []).length,
      needsReview,
      strongAreas,
    };
  }, [state, counts.totalTopics, counts.totalCases]);
}
