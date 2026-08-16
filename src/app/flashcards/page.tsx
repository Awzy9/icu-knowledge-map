import Link from "next/link";
import type { Metadata } from "next";
import { getAllTopics, getTopicSlugsWithFlashcards, getFlashcardsForTopic } from "@/registry";
import { Card } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = { title: "Flashcard Decks · ICU Knowledge Map" };

export default function FlashcardsIndexPage() {
  const slugsWithCards = new Set(getTopicSlugsWithFlashcards());
  const topics = getAllTopics().filter((topic) => slugsWithCards.has(topic.slug));

  const totalCards = topics.reduce((acc, topic) => acc + getFlashcardsForTopic(topic.id).length, 0);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-2">
        <Breadcrumbs items={[{ label: "Flashcards" }]} />
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h1 className="text-2xl font-bold text-ink sm:text-3xl">Flashcard Decks</h1>
          <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-strong">
            {totalCards} cards across {topics.length} topics
          </span>
        </div>
        <p className="mt-1 max-w-2xl text-sm text-ink-muted">
          Active spaced-repetition flashcards covering diagnostic criteria, pathophysiological thresholds, landmark trials, and clinical management. Progress is saved locally in your browser.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => {
          const cards = getFlashcardsForTopic(topic.id);
          return (
            <Card key={topic.id} className="flex flex-col justify-between group hover:border-accent/50 transition-all">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="rounded-md bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent-strong">
                    {cards.length} cards
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-ink-faint">
                    {topic.category}
                  </span>
                </div>
                <Link href={`/flashcards/${topic.slug}`} className="text-base font-bold text-ink group-hover:text-accent transition-colors">
                  {topic.title}
                </Link>
                <p className="mt-1.5 text-xs text-ink-muted line-clamp-2 leading-relaxed">
                  {topic.oneLiner}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                <Link
                  href={`/flashcards/${topic.slug}`}
                  className="text-xs font-semibold text-accent hover:text-accent-strong flex items-center gap-1"
                >
                  Start Deck
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
