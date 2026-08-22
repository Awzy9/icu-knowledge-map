"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import type { ClinicalCase } from "@/content-types/clinical-case";
import { useUnifiedState } from "@/hooks/useUnifiedState";

interface CaseOfTheDayProps {
  cases: readonly ClinicalCase[];
}

export function CaseOfTheDay({ cases }: CaseOfTheDayProps) {
  const { state } = useUnifiedState();

  // Deterministic daily selection based on epoch day in UTC
  const todayCase = useMemo(() => {
    if (!cases || cases.length === 0) return null;
    const epochDays = Math.floor(Date.now() / 86400000);
    const caseIndex = epochDays % cases.length;
    return cases[caseIndex];
  }, [cases]);

  if (!todayCase) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center text-ink-muted">
        No cases available today.
      </div>
    );
  }

  const isCompleted = !!state.cases[todayCase.id]?.completedAt;
  const progressRecord = state.cases[todayCase.id];

  const todayFormatted = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  return (
    <div className="space-y-6">
      {/* Date Header */}
      <div className="flex items-center justify-between flex-wrap gap-2 border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">📅</span>
          <span className="text-sm font-semibold text-ink">{todayFormatted}</span>
        </div>
        <span className="text-xs text-ink-muted bg-surface border border-border px-2.5 py-0.5 rounded-md">
          Rotates daily at 00:00 UTC
        </span>
      </div>

      {/* Featured Case Card */}
      <div className="rounded-xl border border-primary/30 bg-card p-6 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="rounded-md bg-primary/10 border border-primary/20 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-primary">
                {todayCase.system}
              </span>
              <span
                className={`rounded-md px-2 py-0.5 text-xs font-bold uppercase tracking-wider ${
                  todayCase.difficulty === "foundation"
                    ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20"
                    : todayCase.difficulty === "intermediate"
                    ? "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20"
                    : "bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20"
                }`}
              >
                {todayCase.difficulty}
              </span>
              {isCompleted && (
                <span className="rounded-md bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 px-2 py-0.5 text-xs font-bold">
                  ✓ Completed Today
                </span>
              )}
            </div>
            <h2 className="text-2xl font-bold text-ink">{todayCase.title}</h2>
            <p className="text-sm text-ink-muted mt-1">{todayCase.subtitle}</p>
          </div>
        </div>

        {/* Initial Presentation Preview */}
        <div className="rounded-lg bg-surface border border-border/80 p-4 space-y-3">
          <span className="text-xs font-bold text-ink uppercase tracking-wider block">
            Clinical History Preview:
          </span>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            {todayCase.initialPresentation.history}
          </p>

          {/* Vitals Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 pt-2">
            {Object.entries(todayCase.initialPresentation.vitals).map(([k, v]) => (
              <div key={k} className="rounded bg-card border border-border/60 p-2 text-center">
                <span className="text-[10px] text-ink-muted font-bold block">{k}</span>
                <span className="text-xs font-mono font-bold text-ink">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-ink uppercase tracking-wider block">
            Core Learning Objectives:
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink-muted">
            {todayCase.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-1.5 bg-surface/50 p-2.5 rounded border border-border/50">
                <span className="text-primary font-bold">▪</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between pt-2 border-t border-border flex-wrap gap-4">
          <div className="text-xs text-ink-muted">
            {isCompleted ? (
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                You scored {progressRecord?.score !== undefined ? `${progressRecord.score}%` : "completed"} on this case. You can replay it anytime.
              </span>
            ) : (
              <span>Step into the simulation and make sequential bedside decisions.</span>
            )}
          </div>
          <Link
            href={`/learn/clinical-reasoning/${todayCase.slug}`}
            className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-all flex items-center gap-1.5 shadow-sm"
          >
            {isCompleted ? "Replay Today's Case →" : "Launch Simulation →"}
          </Link>
        </div>
      </div>
    </div>
  );
}
