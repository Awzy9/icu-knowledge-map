"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import type { IcuError } from "@/content/icu-errors";
import { updateUnifiedLearningState } from "@/lib/learning-state";

interface FindTheErrorPlayerProps {
  errors: readonly IcuError[];
}

export function FindTheErrorPlayer({ errors }: FindTheErrorPlayerProps) {
  const [filterDifficulty, setFilterDifficulty] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [isFinished, setIsFinished] = useState(false);

  const filteredErrors = useMemo(() => {
    if (filterDifficulty === "all") return errors;
    return errors.filter((e) => e.difficulty === filterDifficulty);
  }, [errors, filterDifficulty]);

  const currentError = filteredErrors[currentIndex];

  const handleSelectOption = (optionId: string) => {
    if (selectedOptionId !== null || !currentError) return;

    setSelectedOptionId(optionId);
    const selected = currentError.options.find((o) => o.id === optionId);
    const isCorrect = selected?.isCorrect ?? false;

    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));

    // Record in unified learning state
    updateUnifiedLearningState((prev) => ({
      ...prev,
      challenges: {
        ...prev.challenges,
        [`icu-error-${currentError.id}`]: {
          attempts: [
            ...(prev.challenges[`icu-error-${currentError.id}`]?.attempts || []),
            {
              selectedOptionId: optionId,
              correct: isCorrect,
              attemptedAt: new Date().toISOString(),
            },
          ],
          lastAttemptedAt: new Date().toISOString(),
        },
      },
    }));
  };

  const handleNext = () => {
    if (currentIndex < filteredErrors.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setScore({ correct: 0, total: 0 });
    setIsFinished(false);
  };

  if (!currentError && !isFinished) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center text-ink-muted">
        No scenarios match this difficulty filter.
      </div>
    );
  }

  if (isFinished) {
    const accuracy = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center space-y-6 shadow-xs">
        <span className="text-4xl">🔍</span>
        <h2 className="text-2xl font-bold text-ink">Error Spotting Session Complete!</h2>
        <div className="flex justify-center gap-6">
          <div className="p-4 rounded-xl bg-surface border border-border min-w-[120px]">
            <span className="text-xs uppercase text-ink-muted font-bold block">Errors Caught</span>
            <span className="text-2xl font-black text-primary">
              {score.correct} / {score.total}
            </span>
          </div>
          <div className="p-4 rounded-xl bg-surface border border-border min-w-[120px]">
            <span className="text-xs uppercase text-ink-muted font-bold block">Accuracy</span>
            <span
              className={`text-2xl font-black ${
                accuracy >= 80 ? "text-emerald-600" : accuracy >= 60 ? "text-amber-600" : "text-rose-600"
              }`}
            >
              {accuracy}%
            </span>
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <button
            onClick={handleRestart}
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/learn"
            className="rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface/80 transition-colors"
          >
            Back to Learning Hub
          </Link>
        </div>
      </div>
    );
  }

  const selectedOption = currentError.options.find((o) => o.id === selectedOptionId);
  const correctOption = currentError.options.find((o) => o.isCorrect);

  return (
    <div className="space-y-6">
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-ink-muted uppercase tracking-wider">
            Scenario {currentIndex + 1} of {filteredErrors.length}
          </span>
          <span
            className={`rounded-md px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
              currentError.difficulty === "foundation"
                ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20"
                : currentError.difficulty === "intermediate"
                ? "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20"
                : "bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20"
            }`}
          >
            {currentError.difficulty}
          </span>
        </div>

        {/* Difficulty Filter Tabs */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {["all", "foundation", "intermediate", "advanced"].map((diff) => (
            <button
              key={diff}
              onClick={() => {
                setFilterDifficulty(diff);
                setCurrentIndex(0);
                setSelectedOptionId(null);
              }}
              className={`rounded-md px-2.5 py-1 text-xs font-semibold capitalize transition-colors cursor-pointer ${
                filterDifficulty === diff
                  ? "bg-primary text-white"
                  : "bg-surface border border-border text-ink-muted hover:text-ink"
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-surface rounded-full overflow-hidden border border-border/60">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / filteredErrors.length) * 100}%` }}
        />
      </div>

      {/* Management Plan Card */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-ink">{currentError.title}</h2>
          <span className="text-xs text-rose-600 dark:text-rose-400 font-bold bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded">
            ⚠️ 1 Flaw in Plan
          </span>
        </div>

        <div className="rounded-lg bg-surface/80 border border-border/80 p-4 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-ink-muted block">
            Proposed ICU Orders:
          </span>
          <ul className="space-y-1.5 text-xs sm:text-sm font-mono text-ink">
            {currentError.icuPlan.map((item, i) => (
              <li key={i} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <h3 className="text-sm font-bold text-ink pt-2">
          Which of the following represents the critical management error?
        </h3>

        {/* Options Grid */}
        <div className="grid grid-cols-1 gap-2.5">
          {currentError.options.map((opt) => {
            const isSelected = selectedOptionId === opt.id;
            const hasAnswered = selectedOptionId !== null;

            let btnStyle = "border-border bg-surface hover:border-primary/50 text-ink";
            if (hasAnswered) {
              if (opt.isCorrect) {
                btnStyle = "border-emerald-500 bg-emerald-500/10 text-emerald-950 dark:text-emerald-200 font-medium";
              } else if (isSelected && !opt.isCorrect) {
                btnStyle = "border-rose-500 bg-rose-500/10 text-rose-950 dark:text-rose-200";
              } else {
                btnStyle = "border-border/50 bg-surface/40 text-ink-muted opacity-60";
              }
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelectOption(opt.id)}
                disabled={hasAnswered}
                className={`w-full text-left rounded-lg border p-4 text-xs sm:text-sm leading-relaxed transition-all cursor-pointer flex items-start gap-3 ${btnStyle}`}
              >
                <span className="font-mono font-bold shrink-0 mt-0.5 uppercase">
                  {hasAnswered && opt.isCorrect ? "✓" : hasAnswered && isSelected ? "✕" : `[${opt.id}]`}
                </span>
                <span>{opt.text}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback Panel */}
      {selectedOptionId !== null && (
        <div className="rounded-xl border border-border bg-card p-6 shadow-xs space-y-4 animate-fadeIn">
          <div className="flex items-center gap-2">
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                selectedOption?.isCorrect
                  ? "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30"
                  : "bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-500/30"
              }`}
            >
              {selectedOption?.isCorrect ? "✓ Error Successfully Identified" : "✕ Incorrect Error Chosen"}
            </span>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-ink leading-relaxed">
            <div className="rounded-lg bg-emerald-500/10 border border-emerald-200 dark:border-emerald-900 p-3.5">
              <strong className="text-emerald-900 dark:text-emerald-300 block mb-1">
                Why this is an error:
              </strong>
              <p className="text-emerald-950 dark:text-emerald-200">{correctOption?.explanation}</p>
            </div>

            <div className="rounded-lg bg-surface border border-border p-3.5 space-y-1">
              <strong className="text-ink block">Underlying Pathophysiology:</strong>
              <p className="text-ink-muted">{currentError.physiology}</p>
            </div>

            <div className="rounded-lg bg-primary/10 border border-primary/20 p-3.5 space-y-1">
              <strong className="text-primary block">Correct Evidence-Based Approach:</strong>
              <p className="text-ink">{currentError.correctApproach}</p>
            </div>

            <div className="text-[11px] text-ink-muted italic pt-1">
              Reference: {currentError.reference}
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={handleNext}
              className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              {currentIndex < filteredErrors.length - 1 ? "Next Scenario →" : "View Summary →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
