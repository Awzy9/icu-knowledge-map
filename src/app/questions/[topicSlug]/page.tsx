import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getQuestionsForTopic, getTopic, getTopicSlugsWithQuestions } from "@/registry";
import { QuestionQuiz } from "@/components/study/QuestionQuiz";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

interface QuestionsPageProps {
  readonly params: Promise<{ topicSlug: string }>;
}

export function generateStaticParams() {
  return getTopicSlugsWithQuestions().map((topicSlug) => ({ topicSlug }));
}

export async function generateMetadata({ params }: QuestionsPageProps) {
  const { topicSlug } = await params;
  const topic = getTopic(topicSlug);
  return { title: topic ? `${topic.title} Questions` : "Questions" };
}

export default async function QuestionsSessionPage({ params }: QuestionsPageProps) {
  const { topicSlug } = await params;
  const topic = getTopic(topicSlug);
  if (!topic) notFound();

  const topicQuestions = getQuestionsForTopic(topic.id);

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-2">
        <Breadcrumbs items={[{ label: "Questions", href: "/questions" }, { label: topic.title }]} />
        <h1 className="text-2xl font-semibold text-ink">{topic.title}</h1>
      </div>
      {/*
        QuestionQuiz reads the ?review=incorrect param itself via
        useSearchParams — wrapping it in Suspense keeps that read as a
        client-side-only concern, so this route stays fully statically
        generated instead of opting the whole page into dynamic rendering.
      */}
      <Suspense fallback={null}>
        <QuestionQuiz questions={topicQuestions} topicSlug={topic.slug} />
      </Suspense>
    </div>
  );
}
