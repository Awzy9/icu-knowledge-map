import type { Metadata } from "next";
import { getAllTopics, getFlashcardsForTopic, getQuestionsForTopic } from "@/registry";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProgressSummary } from "@/components/study/ProgressSummary";

export const metadata: Metadata = { title: "Progress" };

export default function ProgressPage() {
  const topics = getAllTopics()
    .filter((topic) => topic.status === "complete")
    .map((topic) => ({
      topicId: topic.id,
      slug: topic.slug,
      title: topic.title,
      flashcardIds: getFlashcardsForTopic(topic.id).map((card) => card.id),
      questionIds: getQuestionsForTopic(topic.id).map((question) => question.id),
    }));

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-2">
        <Breadcrumbs items={[{ label: "Progress" }]} />
        <h1 className="text-2xl font-semibold text-ink">Progress</h1>
        <p className="mt-1 max-w-2xl text-sm text-ink-muted">
          Tracked locally in this browser only — nothing is sent to a server or synced across devices.
        </p>
      </div>
      <ProgressSummary topics={topics} />
    </div>
  );
}
