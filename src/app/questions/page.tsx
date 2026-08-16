import Link from "next/link";
import type { Metadata } from "next";
import { getAllTopics, getTopicSlugsWithQuestions, getQuestionsForTopic } from "@/registry";
import { Card } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = { title: "Clinical Questions · ICU Knowledge Map" };

export default function QuestionsIndexPage() {
  const slugsWithQuestions = new Set(getTopicSlugsWithQuestions());
  const topics = getAllTopics().filter((topic) => slugsWithQuestions.has(topic.slug));

  const totalQuestions = topics.reduce((acc, topic) => acc + getQuestionsForTopic(topic.id).length, 0);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-2">
        <Breadcrumbs items={[{ label: "Questions" }]} />
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h1 className="text-2xl font-bold text-ink sm:text-3xl">Clinical Question Banks</h1>
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
            {totalQuestions} questions across {topics.length} topics
          </span>
        </div>
        <p className="mt-1 max-w-2xl text-sm text-ink-muted">
          Multiple-choice and vignette-based clinical reasoning questions with in-depth rationales for correct and incorrect answers. Answer history is saved locally in your browser.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => {
          const questions = getQuestionsForTopic(topic.id);
          return (
            <Card key={topic.id} className="flex flex-col justify-between group hover:border-emerald-500/50 transition-all">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                    {questions.length} questions
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-ink-faint">
                    {topic.category}
                  </span>
                </div>
                <Link href={`/questions/${topic.slug}`} className="text-base font-bold text-ink group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {topic.title}
                </Link>
                <p className="mt-1.5 text-xs text-ink-muted line-clamp-2 leading-relaxed">
                  {topic.oneLiner}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                <Link
                  href={`/questions/${topic.slug}`}
                  className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  Start Quiz
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href={`/topics/${topic.slug}`}
                  className="text-xs text-ink-faint hover:text-ink transition-colors"
                >
                  View Topic
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
