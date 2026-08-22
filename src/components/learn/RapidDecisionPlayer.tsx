"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import type { RapidDecision } from "@/content/rapid-decisions";
import { updateUnifiedLearningState } from "@/lib/learning-state";

interface RapidDecisionPlayerProps {
  decisions: readonly RapidDecision[];
}

export function RapidDecisionPlayer({ decisions }: RapidDecisionPlayerProps) {
  const [filterDifficulty, setFilterDifficulty] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [isFinished, setIsFinished] = useState(false);

  const filteredDecisions = useMemo(() => {
    if (filterDifficulty === "all") return decisions;
    return decisions.filter((d) => d.difficulty === filterDifficulty);
  }, [decisions, filterDifficulty]);

  const currentDecision = filteredDecisions[currentIndex];

  const handleSelectOption = (optionId: string) => {
    if (selectedOptionId !== null || !currentDecision) return;

    setSelectedOptionId(optionId);
    const selected = currentDecision.options.find((o) => o.id === optionId);
    const isCorrect = selected?.isCorrect ?? false;

    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));

    // Record in unified learning state
    updateUnifiedLearningState((prev) => ({
      ...prev,
      questions: {
        ...prev.questions,
        [currentDecision.id]: {
          attempts: [
            ...(prev.questions[currentDecision.id]?.attempts || []),
            {
              optionId,
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
    if (currentIndex < filteredDecisions.length - 1) {
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

  if (!currentDecision && !isFinished) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center text-ink-muted">
        No decisions match this difficulty filter.
      </div>
    );
  }

  if (isFinished) {
    const accuracy = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center space-y-6 shadow-xs">
        <span className="text-4xl">🏆</span>
        <h2 className="text-2xl font-bold text-ink">Rapid Decision Session Complete!</h2>
        <div className="flex justify-center gap-6">
          <div className="p-4 rounded-xl bg-surface border border-border min-w-[120px]">
            <span className="text-xs uppercase text-ink-muted font-bold block">Score</span>
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
            Restart Decisions
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

  const selectedOption = currentDecision.options.find((o) => o.id === selectedOptionId);
  const correctOption = currentDecision.options.find((o) => o.isCorrect);

  return (
    <div className="space-y-6">
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-ink-muted uppercase tracking-wider">
            Decision {currentIndex + 1} of {filteredDecisions.length}
          </span>
          <span
            className={`rounded-md px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
              currentDecision.difficulty === "foundation"
                ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20"
                : currentDecision.difficulty === "intermediate"
                ? "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20"
                : "bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20"
            }`}
          >
            {currentDecision.difficulty}
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
          style={{ width: `${((currentIndex + 1) / filteredDecisions.length) * 100}%` }}
        />
      </div>

      {/* Clinical Vignette & Question Card */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-xs space-y-4">
        <div className="rounded-lg bg-surface/70 border border-border/70 p-4 text-sm text-ink leading-relaxed">
          {currentDecision.vignette}
        </div>

        <h3 className="text-base font-bold text-ink">{currentDecision.question}</h3>

        {/* 4 Decision Options */}
        <div className="grid grid-cols-1 gap-2.5 pt-2">
          {currentDecision.options.map((opt) => {
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

      {/* Feedback & Physiology Reveal Panel */}
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
              {selectedOption?.isCorrect ? "✓ Correct Bedside Decision" : "✕ Suboptimal / Incorrect Choice"}
            </span>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-ink leading-relaxed">
            <div>
              <strong className="text-ink block mb-1">Physiologic Rationale:</strong>
              <p className="text-ink-muted">{correctOption?.why}</p>
            </div>

            {selectedOption && !selectedOption.isCorrect && (
              <div className="rounded-lg bg-rose-500/10 border border-rose-200 dark:border-rose-900 p-3 text-xs">
                <strong className="text-rose-900 dark:text-rose-300 block mb-0.5">Why your selection was incorrect:</strong>
                <p className="text-rose-950 dark:text-rose-200">{selectedOption.why}</p>
              </div>
            )}

            <div className="rounded-lg bg-amber-500/10 border border-amber-300 dark:border-amber-900 p-3.5 text-xs text-amber-950 dark:text-amber-200">
              ⭐ <strong>Bedside High-Yield Pearl:</strong> {currentDecision.bedsidePearl}
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={handleNext}
              className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              {currentIndex < filteredDecisions.length - 1 ? "Next Decision →" : "View Results →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
