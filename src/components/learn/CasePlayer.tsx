"use client";

import React, { useState, useEffect } from "react";
import type { ClinicalCase, CaseOption } from "@/content-types/clinical-case";
import { useCaseProgress } from "@/hooks/useCaseProgress";
import { useRecentActivity } from "@/hooks/useRecentActivity";
import { CaseVitalsPanel } from "./CaseVitalsPanel";
import { WhyNot } from "./WhyNot";
import { PhysiologyEngine } from "@/components/physiology/PhysiologyEngine";
import Link from "next/link";

interface CasePlayerProps {
  caseData: ClinicalCase;
}

export function CasePlayer({ caseData }: CasePlayerProps) {
  const { getCaseProgress, recordStepResult, completeCase, resetCase } = useCaseProgress();
  const { recordActivity } = useRecentActivity();

  const progress = getCaseProgress(caseData.id);

  const [hasStarted, setHasStarted] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(progress?.currentStepIndex || 0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasCommitted, setHasCommitted] = useState(false);

  // Resume or initialize
  useEffect(() => {
    if (progress && (progress.currentStepIndex > 0 || Object.keys(progress.stepResults).length > 0)) {
      setHasStarted(true);
      setCurrentStepIndex(progress.currentStepIndex);

      const currentStep = caseData.steps[progress.currentStepIndex];
      if (currentStep && progress.stepResults[currentStep.id]) {
        setSelectedOptionId(progress.stepResults[currentStep.id].selectedOptionId);
        setHasCommitted(true);
      } else {
        setSelectedOptionId(null);
        setHasCommitted(false);
      }
    }
  }, [caseData.id, progress, caseData.steps]);

  // Keyboard shortcut (Enter to commit)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && selectedOptionId && !hasCommitted && hasStarted) {
        handleCommit();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedOptionId, hasCommitted, hasStarted]);

  const handleStart = () => {
    setHasStarted(true);
    recordActivity({
      type: "case",
      id: caseData.id,
      title: caseData.title,
      href: `/learn/clinical-reasoning/${caseData.slug}`,
      resumeState: { stepIndex: 0 },
    });
  };

  const handleOptionSelect = (optionId: string) => {
    if (hasCommitted) return;
    setSelectedOptionId(optionId);
  };

  const handleCommit = () => {
    if (!selectedOptionId || hasCommitted) return;

    setHasCommitted(true);
    const step = caseData.steps[currentStepIndex];
    const option = step.options.find((o) => o.id === selectedOptionId)!;

    const classification = option.outcome?.classification || (option.isCorrect ? "appropriate" : "suboptimal");

    recordStepResult(
      caseData.id,
      step.id,
      selectedOptionId,
      option.isCorrect,
      currentStepIndex,
      {
        stepPrompt: step.prompt,
        selectedOptionText: option.text,
        classification,
      },
      option.nextStepId
    );
  };

  const handleNextStep = () => {
    const currentStep = caseData.steps[currentStepIndex];
    const selectedOption = currentStep.options.find((o) => o.id === selectedOptionId);

    // Branching support: if option has nextStepId, find that step; else sequential increment
    let nextIndex = currentStepIndex + 1;
    if (selectedOption?.nextStepId) {
      const branchIdx = caseData.steps.findIndex((s) => s.id === selectedOption.nextStepId);
      if (branchIdx >= 0) {
        nextIndex = branchIdx;
      }
    }

    if (nextIndex >= caseData.steps.length) {
      // Completed Case
      const results = progress?.stepResults || {};
      const totalSteps = caseData.steps.length;

      let correctCount = selectedOption?.isCorrect ? 1 : 0;
      for (const stepId of Object.keys(results)) {
        if (stepId !== currentStep.id && results[stepId].correct) {
          correctCount++;
        }
      }

      const score = Math.round((correctCount / totalSteps) * 100);
      completeCase(caseData.id, score);
      setCurrentStepIndex(nextIndex);
      setSelectedOptionId(null);
      setHasCommitted(false);

      recordActivity({
        type: "case",
        id: caseData.id,
        title: caseData.title,
        href: `/learn/clinical-reasoning/${caseData.slug}`,
      });
    } else {
      setCurrentStepIndex(nextIndex);
      setSelectedOptionId(null);
      setHasCommitted(false);

      recordActivity({
        type: "case",
        id: caseData.id,
        title: caseData.title,
        href: `/learn/clinical-reasoning/${caseData.slug}`,
        resumeState: { stepIndex: nextIndex },
      });
    }
  };

  const isCompleted = progress?.completedAt || currentStepIndex >= caseData.steps.length;

  // --------------------------------------------------------------------------
  // Summary & Decision Timeline View
  // --------------------------------------------------------------------------
  if (isCompleted) {
    const score = progress?.score ?? 100;
    const timeline = progress?.decisionTimeline || [];

    const strongDecisions = timeline.filter((d) => d.classification === "appropriate");
    const missedOrSuboptimal = timeline.filter((d) => d.classification === "suboptimal" || d.classification === "potentially-harmful");

    return (
      <div className="bg-surface rounded-xl border border-border shadow-md overflow-hidden p-6 md:p-8 animate-in fade-in duration-500 max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <div className="mx-auto w-14 h-14 bg-accent-soft rounded-full flex items-center justify-center mb-4">
            <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-ink mb-1">Case Reasoning Summary</h2>
          <p className="text-sm text-ink-muted">{caseData.title} — {caseData.subtitle}</p>

          <div className="inline-block bg-canvas border border-border rounded-xl px-6 py-3 mt-4">
            <span className="text-xs uppercase font-bold text-ink-muted tracking-wider block">Decision Accuracy</span>
            <span className="text-3xl font-bold text-ink">{score}%</span>
          </div>
        </div>

        {/* Decision Timeline */}
        {timeline.length > 0 && (
          <div className="border-t border-border pt-6">
            <h3 className="text-base font-bold text-ink mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Decision Timeline
            </h3>

            <div className="space-y-4">
              {timeline.map((item, idx) => {
                let badgeClass = "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-300";
                let label = "Appropriate";

                if (item.classification === "reasonable-alternative") {
                  badgeClass = "bg-blue-100 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300 border-blue-300";
                  label = "Reasonable Alternative";
                } else if (item.classification === "suboptimal") {
                  badgeClass = "bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 border-amber-300";
                  label = "Suboptimal";
                } else if (item.classification === "potentially-harmful") {
                  badgeClass = "bg-rose-100 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300 border-rose-300";
                  label = "Potentially Harmful";
                }

                return (
                  <div key={idx} className="bg-canvas border border-border rounded-lg p-4 text-left space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-ink-muted">Step {idx + 1} Decision</span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${badgeClass}`}>
                        {label}
                      </span>
                    </div>
                    <p className="text-xs text-ink-muted line-clamp-1 italic">{item.stepPrompt}</p>
                    <p className="text-sm font-semibold text-ink">{item.selectedOptionText}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Strong & Missed Concepts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border pt-6">
          <div className="bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-200 dark:border-emerald-900/30 rounded-lg p-4 text-left">
            <h4 className="text-xs font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider mb-2">
              Strong Decisions ({strongDecisions.length})
            </h4>
            {strongDecisions.length > 0 ? (
              <ul className="text-xs text-ink space-y-1.5 list-disc list-inside">
                {strongDecisions.map((d, i) => (
                  <li key={i}>{d.selectedOptionText}</li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-ink-muted italic">Review the case to build optimal paths.</p>
            )}
          </div>

          <div className="bg-amber-50/50 dark:bg-amber-950/10 border border-amber-200 dark:border-amber-900/30 rounded-lg p-4 text-left">
            <h4 className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider mb-2">
              Missed / Suboptimal Concepts ({missedOrSuboptimal.length})
            </h4>
            {missedOrSuboptimal.length > 0 ? (
              <ul className="text-xs text-ink space-y-1.5 list-disc list-inside">
                {missedOrSuboptimal.map((d, i) => (
                  <li key={i}>{d.selectedOptionText}</li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">All decisions were optimal!</p>
            )}
          </div>
        </div>

        {/* Deep Cross-Links */}
        <div className="border-t border-border pt-6 text-left">
          <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-3">Continue Learning</h4>
          <div className="flex flex-wrap gap-2">
            {caseData.relatedMedicationSlugs.map((slug) => (
              <Link
                key={slug}
                href={`/medications/${slug}`}
                className="text-xs font-medium px-3 py-1.5 bg-canvas border border-border hover:border-accent hover:text-accent rounded-lg transition-colors capitalize"
              >
                Medication: {slug.replace(/-/g, " ")}
              </Link>
            ))}
            {caseData.relatedPathwaySlugs.map((slug) => (
              <Link
                key={slug}
                href={`/pathways/${slug}`}
                className="text-xs font-medium px-3 py-1.5 bg-canvas border border-border hover:border-accent hover:text-accent rounded-lg transition-colors capitalize"
              >
                Pathway: {slug.replace(/-/g, " ")}
              </Link>
            ))}
            {caseData.relatedProblemSlugs.map((slug) => (
              <Link
                key={slug}
                href={`/problems/${slug}`}
                className="text-xs font-medium px-3 py-1.5 bg-canvas border border-border hover:border-accent hover:text-accent rounded-lg transition-colors capitalize"
              >
                Problem: {slug.replace(/-/g, " ")}
              </Link>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-border">
          <Link
            href="/learn/clinical-reasoning"
            className="w-full sm:w-auto px-6 py-2.5 bg-surface border border-border text-ink font-medium rounded-lg hover:bg-surface-elevated transition-colors text-sm"
          >
            All Cases
          </Link>
          <button
            onClick={() => {
              resetCase(caseData.id);
              setHasStarted(false);
              setCurrentStepIndex(0);
              setSelectedOptionId(null);
              setHasCommitted(false);
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-accent text-white font-medium rounded-lg hover:bg-accent-strong transition-colors text-sm"
          >
            Restart Case
          </button>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // Initial Presentation View
  // --------------------------------------------------------------------------
  if (!hasStarted) {
    return (
      <div className="bg-surface rounded-xl border border-border shadow-md overflow-hidden animate-in fade-in duration-300 max-w-4xl mx-auto">
        <div className="p-6 md:p-8">
          <div className="mb-6">
            <span className="text-xs font-semibold px-2.5 py-1 bg-accent-soft text-accent rounded-full uppercase tracking-wider mb-4 inline-block">
              Initial Presentation
            </span>
            <h2 className="text-2xl font-bold text-ink mb-2">Patient Presentation</h2>
            <p className="text-ink-muted text-base leading-relaxed">
              {caseData.initialPresentation.history}
            </p>
          </div>

          <CaseVitalsPanel vitals={caseData.initialPresentation.vitals} />

          <div className="mt-8">
            <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-3">Key Bedside Findings</h3>
            <ul className="space-y-2">
              {caseData.initialPresentation.keyFindings.map((finding, idx) => (
                <li key={idx} className="flex items-start gap-3 text-ink-muted text-sm">
                  <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="leading-relaxed">{finding}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-canvas border-t border-border p-6 flex justify-end">
          <button
            onClick={handleStart}
            className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-strong transition-colors shadow-sm text-sm"
          >
            Begin Sequential Reasoning &rarr;
          </button>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // Active Sequential Step View
  // --------------------------------------------------------------------------
  const step = caseData.steps[currentStepIndex];
  const totalSteps = caseData.steps.length;
  const progressPercent = ((currentStepIndex + (hasCommitted ? 1 : 0)) / totalSteps) * 100;

  // Compute accumulated vitals
  let currentVitals = { ...caseData.initialPresentation.vitals };
  let prevVitals = { ...currentVitals };

  for (let i = 0; i <= currentStepIndex; i++) {
    const s = caseData.steps[i];
    if (s.vitalsUpdate) {
      if (i === currentStepIndex) prevVitals = { ...currentVitals };
      currentVitals = { ...currentVitals, ...s.vitalsUpdate };
    }
  }

  const selectedOption = step.options.find((o) => o.id === selectedOptionId);
  const correctOption = step.options.find((o) => o.isCorrect);
  const outcome = selectedOption?.outcome;

  return (
    <div className="bg-surface rounded-xl border border-border shadow-md overflow-hidden flex flex-col min-h-[600px] animate-in slide-in-from-right-4 duration-300 max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="w-full bg-canvas h-1.5 border-b border-border">
        <div
          className="bg-accent h-1.5 transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="p-5 md:p-7 flex-grow flex flex-col">
        {/* Step Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold px-2.5 py-1 bg-surface-elevated border border-border text-ink-muted rounded-full uppercase tracking-wider">
            Step {currentStepIndex + 1} of {totalSteps}
          </span>
          {step.isBranchStep && (
            <span className="text-xs font-semibold text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/40 px-2 py-0.5 rounded border border-amber-300">
              Consequence Branch
            </span>
          )}
        </div>

        <h3 className="text-lg md:text-xl font-semibold text-ink leading-relaxed mb-6">
          {step.prompt}
        </h3>

        {/* New Information Callout */}
        {step.newInformation && step.newInformation.length > 0 && (
          <div className="mb-6 bg-accent-soft/20 border border-accent/20 rounded-xl p-4">
            <h4 className="text-xs font-bold text-accent mb-2 uppercase tracking-wider">New Bedside Information</h4>
            <ul className="space-y-1.5">
              {step.newInformation.map((info, idx) => (
                <li key={idx} className="text-xs md:text-sm text-ink-muted flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>{info}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Vitals Panel */}
        {(step.vitalsUpdate || currentStepIndex === 0) && (
          <div className="mb-6">
            <CaseVitalsPanel vitals={currentVitals} previousVitals={prevVitals} />
          </div>
        )}

        {/* Decision Question & Options */}
        <div className="mt-2 mb-6">
          <h4 className="text-base font-bold text-ink mb-3">{step.question}</h4>

          <div className="flex flex-col gap-3">
            {step.options.map((option) => {
              const isSelected = selectedOptionId === option.id;

              let btnClass = "border-border bg-canvas hover:bg-surface-elevated text-ink";

              if (hasCommitted) {
                if (option.isCorrect) {
                  btnClass = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-100 ring-1 ring-emerald-500";
                } else if (isSelected) {
                  const isHarmful = option.outcome?.classification === "potentially-harmful";
                  btnClass = isHarmful
                    ? "border-rose-500 bg-rose-50 dark:bg-rose-950/20 text-rose-900 dark:text-rose-100 ring-1 ring-rose-500"
                    : "border-amber-500 bg-amber-50 dark:bg-amber-950/20 text-amber-900 dark:text-amber-100 ring-1 ring-amber-500";
                } else {
                  btnClass = "border-border bg-canvas opacity-40";
                }
              } else if (isSelected) {
                btnClass = "border-accent bg-accent-soft text-accent ring-1 ring-accent";
              }

              return (
                <button
                  key={option.id}
                  type="button"
                  disabled={hasCommitted}
                  onClick={() => handleOptionSelect(option.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${btnClass}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm md:text-base">{option.text}</span>
                    {hasCommitted && option.isCorrect && (
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 shrink-0 ml-2">
                        Appropriate
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Committed Outcome & Clinical Consequence Section */}
        {hasCommitted && selectedOption && (
          <div className="mt-2 pt-6 border-t border-border animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-4">
            {/* Outcome Badge */}
            <div className="flex items-center gap-2">
              {selectedOption.isCorrect ? (
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-300">
                  Best Initial Strategy
                </span>
              ) : outcome?.classification === "potentially-harmful" ? (
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-rose-100 text-rose-800 dark:bg-rose-950/50 dark:text-rose-300 border border-rose-300">
                  Potentially Harmful Intervention
                </span>
              ) : outcome?.classification === "reasonable-alternative" ? (
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-950/50 dark:text-blue-300 border border-blue-300">
                  Reasonable Alternative
                </span>
              ) : (
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-300">
                  Suboptimal Decision
                </span>
              )}
            </div>

            {/* Clinical & Immediate Effects */}
            {outcome?.immediateEffects && outcome.immediateEffects.length > 0 && (
              <div className="bg-canvas border border-border rounded-lg p-4">
                <h5 className="text-xs font-bold text-ink uppercase tracking-wider mb-2">Immediate Bedside Effects</h5>
                <ul className="space-y-1 text-xs md:text-sm text-ink-muted">
                  {outcome.immediateEffects.map((eff, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent">&bull;</span>
                      <span>{eff}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Clinical Response Paragraph */}
            {outcome?.clinicalResponse && (
              <div className="bg-surface-elevated border border-border rounded-lg p-4 text-xs md:text-sm text-ink leading-relaxed">
                <span className="font-bold text-ink block mb-1">Patient Response:</span>
                {outcome.clinicalResponse}
              </div>
            )}

            {/* Explanation */}
            <div className="text-sm text-ink-muted leading-relaxed">
              <span className="font-semibold text-ink">Clinical Reasoning: </span>
              {selectedOption.explanation || correctOption?.explanation}
            </div>

            {/* Physiologic Reasoning */}
            {selectedOption.physiologicReasoning && (
              <div className="bg-accent-soft/20 border border-accent/20 rounded-lg p-4 text-xs md:text-sm text-ink-muted">
                <span className="font-semibold text-accent block mb-1">Physiologic Mechanism:</span>
                {selectedOption.physiologicReasoning}
              </div>
            )}

            {/* Why Not Accordion */}
            {!selectedOption.isCorrect && selectedOption.whyNot && (
              <div className="bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 rounded-lg p-4 text-xs md:text-sm">
                <span className="font-bold text-amber-900 dark:text-amber-300 block mb-1">
                  Why not this choice?
                </span>
                <p className="text-amber-800 dark:text-amber-200/90">{selectedOption.whyNot}</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-auto pt-6" />
      </div>

      {/* Sticky Action Footer */}
      <div className="bg-canvas border-t border-border p-4 sticky bottom-0 z-10 flex justify-end">
        {!hasCommitted ? (
          <button
            disabled={!selectedOptionId}
            onClick={handleCommit}
            className={`px-6 py-2.5 font-semibold rounded-lg transition-all duration-200 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              selectedOptionId
                ? "bg-accent text-white hover:bg-accent-strong shadow-sm"
                : "bg-surface-elevated text-ink-faint cursor-not-allowed border border-border"
            }`}
          >
            Commit Decision
          </button>
        ) : (
          <button
            onClick={handleNextStep}
            className="px-6 py-2.5 bg-ink text-canvas font-semibold rounded-lg hover:bg-ink-muted transition-all duration-200 shadow-sm flex items-center gap-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
          >
            {currentStepIndex + 1 >= totalSteps ? "View Case Summary" : "Next Clinical Step"}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
