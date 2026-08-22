import React from "react";
import type { Metadata } from "next";
import { getAllTopics, getFlashcardsForTopic, getQuestionsForTopic, getAllClinicalCases } from "@/registry";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProgressSummary } from "@/components/study/ProgressSummary";
import { ProgressDashboard } from "@/components/progress/ProgressDashboard";
import { ContinueLearning } from "@/components/learn/ContinueLearning";
import { StudyNextPanel } from "@/components/learn/StudyNextPanel";

export const metadata: Metadata = { title: "Progress" };

export default function ProgressPage() {
  const allTopics = getAllTopics();
  const cases = getAllClinicalCases();
  
  const topics = allTopics
    .filter((topic) => topic.status === "complete")
    .map((topic) => ({
      topicId: topic.id,
      slug: topic.slug,
      title: topic.title,
      flashcardIds: getFlashcardsForTopic(topic.id).map((card) => card.id),
      questionIds: getQuestionsForTopic(topic.id).map((question) => question.id),
    }));

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-2">
        <Breadcrumbs items={[{ label: "Progress" }]} />
        <h1 className="text-2xl font-semibold text-ink">Progress</h1>
        <p className="mt-1 max-w-2xl text-sm text-ink-muted">
          Tracked locally in this browser only — nothing is sent to a server or synced across devices.
        </p>
      </div>
      
      {/* These are client components that never suspend. Wrapping them in a
          Suspense boundary can leave their markup stranded in React's hidden
          streaming container, so they are rendered directly. */}
      <ContinueLearning />

      <StudyNextPanel />

      <ProgressDashboard totalTopics={allTopics.length} totalCases={cases.length} />

      <div className="mt-8">
        <h2 className="text-xl font-bold text-ink mb-4">Topic Mastery</h2>
        <ProgressSummary topics={topics} />
      </div>
    </div>
  );
}
