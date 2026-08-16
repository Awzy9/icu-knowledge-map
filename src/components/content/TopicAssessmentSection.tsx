import Link from "next/link";
import { getFlashcardsForTopic, getQuestionsForTopic } from "@/registry";

interface TopicAssessmentSectionProps {
  readonly topicId: string;
  readonly topicSlug: string;
}

export function TopicAssessmentSection({ topicId, topicSlug }: TopicAssessmentSectionProps) {
  const flashcards = getFlashcardsForTopic(topicId);
  const questions = getQuestionsForTopic(topicId);

  if (flashcards.length === 0 && questions.length === 0) {
    return null;
  }

  return (
    <section className="my-10 rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col gap-1 border-b border-border pb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent-strong">
            Interactive Learning & Retention
          </span>
        </div>
        <h2 className="text-xl font-bold text-ink sm:text-2xl">Assess Your Knowledge</h2>
        <p className="text-sm text-ink-muted">
          Master this topic with high-yield spaced-repetition flashcards and board-style clinical reasoning questions.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {/* Flashcards Deck Card */}
        {flashcards.length > 0 && (
          <div className="group relative flex flex-col justify-between rounded-xl border border-border bg-surface-elevated p-5 transition-all hover:border-accent/50 hover:shadow-md">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent-strong">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  {flashcards.length} Flashcards
                </span>
                <span className="text-xs font-medium text-ink-faint">Spaced Repetition</span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-ink group-hover:text-accent transition-colors">
                Topic Flashcards
              </h3>
              <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">
                Review definitions, pathophysiology, diagnostic criteria, key thresholds, and trial findings.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-border/60">
              <Link
                href={`/flashcards/${topicSlug}`}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-accent-strong transition-colors"
              >
                Start Flashcard Session
                <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        )}

        {/* Questions Quiz Card */}
        {questions.length > 0 && (
          <div className="group relative flex flex-col justify-between rounded-xl border border-border bg-surface-elevated p-5 transition-all hover:border-accent/50 hover:shadow-md">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {questions.length} Questions
                </span>
                <span className="text-xs font-medium text-ink-faint">Board-Style Quiz</span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-ink group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Practice Questions
              </h3>
              <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">
                Test your clinical decision-making with board-style clinical vignettes and detailed rationale.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-border/60">
              <Link
                href={`/questions/${topicSlug}`}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-600 dark:bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-emerald-700 transition-colors"
              >
                Start Practice Quiz
                <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
