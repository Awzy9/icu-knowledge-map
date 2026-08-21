"use client";

import React, { useState } from "react";
import type { MedicationChallenge, ChallengeOption } from "@/content-types/medication-challenge";
import { useDailyChallenge } from "@/hooks/useDailyChallenge";
import Link from "next/link";

interface DailyChallengeWidgetProps {
  challenges: readonly MedicationChallenge[];
}

export function DailyChallengeWidget({ challenges }: DailyChallengeWidgetProps) {
  const { todayIndex, isCompletedToday, currentStreak } = useDailyChallenge(challenges.length);
  const challenge = challenges[todayIndex];

  if (!challenge) return null;

  return (
    <div className="bg-surface rounded-xl border border-border shadow-md overflow-hidden">
      <div className="bg-canvas border-b border-border px-5 py-3 flex items-center justify-between">
        <h3 className="font-semibold text-ink flex items-center gap-2">
          <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Daily Challenge
        </h3>
        
        {currentStreak > 0 && (
          <span className="text-sm font-medium text-amber-600 dark:text-amber-500 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
            {currentStreak}-day streak
          </span>
        )}
      </div>

      <div className="p-5">
        <p className="text-ink text-base mb-4 font-medium leading-relaxed">
          {challenge.stem}
        </p>

        <Link 
          href="/learn/daily-challenge"
          className="w-full block text-center bg-accent text-white py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors"
        >
          {isCompletedToday ? "Review Challenge" : "Take Challenge"}
        </Link>
      </div>
    </div>
  );
}
