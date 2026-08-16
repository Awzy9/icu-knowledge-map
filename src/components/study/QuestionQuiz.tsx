"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { Question } from "@/content-types";
import { useQuestionHistory } from "@/hooks/useQuestionHistory";
import { EmptyState } from "@/components/ui/EmptyState";
import { cn } from "@/lib/cn";
import { QuestionCard } from "./QuestionCard";

interface QuestionQuizProps {
  readonly questions: readonly Question[];
  readonly topicSlug?: string;
}

export function QuestionQuiz({ questions, topicSlug }: QuestionQuizProps) {
  const { history, recordAnswer } = useQuestionHistory();
  const searchParams = useSearchParams();
  const [reviewIncorrectOnly, setReviewIncorrectOnly] = useState(() => searchParams.get("review") === "incorrect");
  const [index, setIndex] = useState(0);
  const [selectedByQuestion, setSelectedByQuestion] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const incorrectQuestions = useMemo(
    () => questions.filter((question) => history[question.id]?.correct === false),
    [questions, history],
  );
  const activeQuestions = reviewIncorrectOnly ? incorrectQuestions : questions;

  if (questions.length === 0) {
    return <p className="text-sm text-ink-muted">No questions yet for this topic.</p>;
  }

  const toggleReviewMode = () => {
    setReviewIncorrectOnly((v) => !v);
    setIndex(0);
    setScore(0);
    setIsCompleted(false);
    setSelectedByQuestion({});
  };

  const handleResetQuiz = () => {
    setIndex(0);
    setScore(0);
    setIsCompleted(false);
    setSelectedByQuestion({});
  };

  if (activeQuestions.length === 0) {
    return (
      <div className="flex flex-col gap-4">
        <EmptyState
          title="No incorrect questions to review"
          description="Nice work — you've answered every attempted question in this topic correctly."
        />
        {reviewIncorrectOnly && (
          <button
            type="button"
            onClick={toggleReviewMode}
            className="self-start rounded-md border border-border px-3 py-1.5 text-sm text-ink-muted hover:text-ink"
          >
            Back to all questions
          </button>
        )}
      </div>
    );
  }

  const safeIndex = Math.min(index, activeQuestions.length - 1);
  const current = activeQuestions[safeIndex];
  const selectedOptionId = selectedByQuestion[current.id] ?? null;
  const isLast = safeIndex === activeQuestions.length - 1;

  const handleSelect = (optionId: string) => {
    const option = current.options.find((o) => o.id === optionId);
    if (!option) return;
    setSelectedByQuestion((prev) => ({ ...prev, [current.id]: optionId }));
    if (option.isCorrect) setScore((s) => s + 1);
    recordAnswer(current.id, optionId, option.isCorrect);
  };

  const handleNext = () => {
    if (isLast) {
      setIsCompleted(true);
    } else {
      setIndex((i) => Math.min(i + 1, activeQuestions.length - 1));
    }
  };

  // Completion / Results Screen
  if (isCompleted) {
    const totalAnswered = Object.keys(selectedByQuestion).length;
    const percentage = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0;
    const derivedTopicSlug = topicSlug || current.topicId;

    return (
      <div className="flex flex-col gap-6 rounded-2xl border border-border bg-surface p-6 shadow-xs">
        <div className="flex flex-col gap-1 border-b border-border pb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-strong">
            Assessment Completed
          </span>
          <h2 className="text-2xl font-bold text-ink">Quiz Summary</h2>
          <p className="text-sm text-ink-muted">
            You completed {totalAnswered} of {activeQuestions.length} questions in this session.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center justify-center rounded-xl bg-surface-sunken p-4 text-center">
            <span className="text-3xl font-extrabold text-ink">{percentage}%</span>
            <span className="mt-1 text-xs font-medium text-ink-muted">Score</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/40 p-4 text-center border border-emerald-500/20">
            <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">{score}</span>
            <span className="mt-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">Correct</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl bg-rose-50 dark:bg-rose-950/40 p-4 text-center border border-rose-500/20">
            <span className="text-3xl font-extrabold text-rose-600 dark:text-rose-400">
              {totalAnswered - score}
            </span>
            <span className="mt-1 text-xs font-medium text-rose-700 dark:text-rose-300">Incorrect</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="button"
            onClick={handleResetQuiz}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-accent-strong transition-colors"
          >
            Retry Quiz
          </button>

          {incorrectQuestions.length > 0 && !reviewIncorrectOnly && (
            <button
              type="button"
              onClick={toggleReviewMode}
              className="rounded-lg border border-accent/40 bg-accent-soft px-4 py-2 text-sm font-semibold text-accent-strong hover:bg-accent-soft/80 transition-colors"
            >
              Review {incorrectQuestions.length} Incorrect
            </button>
          )}

          <Link
            href={`/flashcards/${derivedTopicSlug}`}
            className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-ink hover:bg-surface-elevated transition-colors"
          >
            Review Flashcards
          </Link>

          <Link
            href={`/topics/${derivedTopicSlug}`}
            className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-ink hover:bg-surface-elevated transition-colors"
          >
            Return to Topic
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink-muted">
          {reviewIncorrectOnly ? "Reviewing incorrect" : "Question"} {safeIndex + 1} of {activeQuestions.length} · Score{" "}
          {score} correct so far
        </p>
        {incorrectQuestions.length > 0 && (
          <button
            type="button"
            onClick={toggleReviewMode}
            className={cn(
              "rounded-md border px-2.5 py-1 text-xs font-medium transition-colors",
              reviewIncorrectOnly
                ? "border-accent bg-accent-soft text-accent-strong"
                : "border-border text-ink-muted hover:border-border-strong hover:text-ink",
            )}
          >
            {reviewIncorrectOnly ? "Reviewing incorrect only" : `Review ${incorrectQuestions.length} incorrect`}
          </button>
        )}
      </div>

      <QuestionCard question={current} selectedOptionId={selectedOptionId} onSelect={handleSelect} />

      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          disabled={safeIndex === 0}
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          className="rounded-md border border-border px-3 py-1.5 text-sm text-ink-muted hover:text-ink disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        <button
          type="button"
          disabled={!selectedOptionId}
          onClick={handleNext}
          className="rounded-md border border-accent bg-accent px-4 py-1.5 text-sm font-medium text-white transition-all hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLast ? "View Results" : "Next Question"}
        </button>
      </div>
    </div>
  );
}
