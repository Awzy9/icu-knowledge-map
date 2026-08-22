"use client";

import React, { useState, useEffect } from "react";
import type { MedicationChallenge, ChallengeOption } from "@/content-types/medication-challenge";
import { useChallengeHistory } from "@/hooks/useChallengeHistory";
import { WhyNot } from "./WhyNot";
import Link from "next/link";

interface ChallengeCardProps {
  challenge: MedicationChallenge;
}

export function ChallengeCard({ challenge }: ChallengeCardProps) {
  const { recordChallenge, getChallengeResult } = useChallengeHistory();
  const historyEntry = getChallengeResult(challenge.id);
  const isCompleted = !!historyEntry;
  const [selectedId, setSelectedId] = useState<string | null>(historyEntry?.selectedOptionId ?? null);

  const handleSelect = (option: ChallengeOption) => {
    if (isCompleted) return;
    
    setSelectedId(option.id);
    recordChallenge(challenge.id, option.id, option.isCorrect);
  };

  return (
    <div className="bg-surface rounded-xl border border-border shadow-md overflow-hidden flex flex-col">
      <div className="p-5 md:p-6 flex-grow">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-semibold px-2.5 py-1 bg-accent-soft text-accent rounded-full uppercase tracking-wider">
            {challenge.challengeType.replace("-", " ")}
          </span>
          {isCompleted && (
            <span className={`text-sm font-medium ${historyEntry.correct ? "text-emerald-600 dark:text-emerald-500" : "text-red-600 dark:text-red-500"}`}>
              {historyEntry.correct ? "Correct" : "Incorrect"}
            </span>
          )}
        </div>
        
        <h3 className="text-lg md:text-xl font-medium text-ink leading-relaxed mb-6">
          {challenge.stem}
        </h3>

        <div className="flex flex-col gap-3">
          {challenge.options.map((option) => {
            const isSelected = selectedId === option.id;
            
            let btnClass = "border-border bg-canvas hover:bg-surface-elevated text-ink";
            if (isCompleted) {
              if (option.isCorrect) {
                btnClass = "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-900 dark:text-emerald-100 ring-1 ring-emerald-500";
              } else if (isSelected) {
                btnClass = "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-100 ring-1 ring-red-500";
              } else {
                btnClass = "border-border bg-canvas opacity-50";
              }
            } else if (isSelected) {
              btnClass = "border-accent bg-accent-soft text-accent ring-1 ring-accent";
            }

            return (
              <button
                key={option.id}
                type="button"
                disabled={isCompleted}
                onClick={() => handleSelect(option)}
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${btnClass}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option.text}</span>
                  {isCompleted && option.isCorrect && (
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {isCompleted && isSelected && !option.isCorrect && (
                    <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
              </button>
            );
          })}
        </div>
        
        {isCompleted && (
          <div className="mt-6 pt-6 border-t border-border animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h4 className="text-base font-semibold text-ink mb-2">Explanation</h4>
            <p className="text-ink-muted leading-relaxed text-sm md:text-base">
              {challenge.explanation}
            </p>
            
            {challenge.whyNotAlternatives && challenge.whyNotAlternatives.length > 0 && (
              <WhyNot alternatives={challenge.whyNotAlternatives} />
            )}
          </div>
        )}
      </div>
      
      {isCompleted && challenge.relatedMedicationSlugs && challenge.relatedMedicationSlugs.length > 0 && (
        <div className="bg-canvas border-t border-border p-4 flex flex-wrap gap-3 items-center">
          <span className="text-sm font-medium text-ink-muted">Related:</span>
          {challenge.relatedMedicationSlugs.map(slug => (
            <Link 
              key={slug} 
              href={`/medications/${slug}`}
              className="text-sm font-medium text-accent hover:text-accent-strong hover:underline"
            >
              {slug}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
