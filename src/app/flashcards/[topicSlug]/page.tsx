import Link from "next/link";
import { notFound } from "next/navigation";
import { getFlashcardsForTopic, getQuestionsForTopic, getTopic, getTopicSlugsWithFlashcards } from "@/registry";
import { FlashcardDeck } from "@/components/study/FlashcardDeck";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

interface FlashcardsPageProps {
  readonly params: Promise<{ topicSlug: string }>;
}

export function generateStaticParams() {
  return getTopicSlugsWithFlashcards().map((topicSlug) => ({ topicSlug }));
}

export async function generateMetadata({ params }: FlashcardsPageProps) {
  const { topicSlug } = await params;
  const topic = getTopic(topicSlug);
  return { title: topic ? `${topic.title} Flashcards` : "Flashcards" };
}

export default async function FlashcardsSessionPage({ params }: FlashcardsPageProps) {
  const { topicSlug } = await params;
  const topic = getTopic(topicSlug);
  if (!topic) notFound();

  const cards = getFlashcardsForTopic(topic.id);
  const questions = getQuestionsForTopic(topic.id);

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-2">
        <Breadcrumbs items={[{ label: "Flashcards", href: "/flashcards" }, { label: topic.title }]} />
        <h1 className="text-2xl font-semibold text-ink">{topic.title} Flashcards</h1>
        <p className="text-xs text-ink-muted">
          Active recall for definitions, key thresholds, physiology mechanisms, and evidence.
        </p>
      </div>

      <FlashcardDeck cards={cards} />

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
        <Link
          href={`/topics/${topic.slug}`}
          className="rounded-lg border border-border bg-surface px-4 py-2 text-xs font-medium text-ink hover:bg-surface-elevated transition-colors"
        >
          &larr; Return to {topic.title}
        </Link>

        {questions.length > 0 && (
          <Link
            href={`/questions/${topic.slug}`}
            className="rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-accent-strong transition-colors"
          >
            Practice {questions.length} Scenario Questions &rarr;
          </Link>
        )}
      </div>
    </div>
  );
}

