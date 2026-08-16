"use client";

import Link from "next/link";
import { useFlashcardProgress } from "@/hooks/useFlashcardProgress";
import { useQuestionHistory } from "@/hooks/useQuestionHistory";
import { TopicCompleteToggle } from "@/components/bookmarks/TopicCompleteToggle";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";

export interface TopicProgressInput {
  readonly topicId: string;
  readonly slug: string;
  readonly title: string;
  readonly flashcardIds: readonly string[];
  readonly questionIds: readonly string[];
}

interface ProgressSummaryProps {
  readonly topics: readonly TopicProgressInput[];
}

/** Reads the same global flashcard-progress / question-history stores the study deck and quiz write to, so this always reflects real activity — nothing is tracked separately just for this page. */
export function ProgressSummary({ topics }: ProgressSummaryProps) {
  const { progress: flashcardProgress } = useFlashcardProgress();
  const { history: questionHistory } = useQuestionHistory();

  if (topics.length === 0) {
    return <EmptyState title="No topics yet" description="Progress tracking will appear here once topics have flashcards or questions." />;
  }

  return (
    <div className="flex flex-col gap-3">
      {topics.map((topic) => {
        const knownCount = topic.flashcardIds.filter((id) => flashcardProgress[id] === "known").length;
        const attemptedIds = topic.questionIds.filter((id) => questionHistory[id] !== undefined);
        const correctCount = attemptedIds.filter((id) => questionHistory[id]?.correct).length;
        const incorrectCount = attemptedIds.length - correctCount;

        return (
          <Card key={topic.topicId} className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link href={`/topics/${topic.slug}`} className="text-sm font-semibold text-ink hover:text-accent">
                {topic.title}
              </Link>
              <TopicCompleteToggle topicId={topic.topicId} />
            </div>

            {(topic.flashcardIds.length > 0 || topic.questionIds.length > 0) && (
              <div className="grid gap-3 sm:grid-cols-2">
                {topic.flashcardIds.length > 0 && (
                  <div className="rounded-md bg-surface-sunken p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Flashcards</p>
                    <p className="mt-1 text-sm text-ink">
                      {knownCount}/{topic.flashcardIds.length} known
                    </p>
                    <Link href={`/flashcards/${topic.slug}`} className="mt-1 inline-block text-xs text-accent hover:text-accent-strong">
                      Study deck →
                    </Link>
                  </div>
                )}
                {topic.questionIds.length > 0 && (
                  <div className="rounded-md bg-surface-sunken p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Questions</p>
                    <p className="mt-1 text-sm text-ink">
                      {correctCount}/{attemptedIds.length} correct · {attemptedIds.length}/{topic.questionIds.length} attempted
                    </p>
                    <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                      <Link href={`/questions/${topic.slug}`} className="text-accent hover:text-accent-strong">
                        Take quiz →
                      </Link>
                      {incorrectCount > 0 && (
                        <Link href={`/questions/${topic.slug}?review=incorrect`} className="text-accent hover:text-accent-strong">
                          Review {incorrectCount} incorrect →
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );
}
