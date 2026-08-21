"use client";

import React from "react";
import type { MedicationChallenge } from "@/content-types/medication-challenge";
import { useDailyChallenge } from "@/hooks/useDailyChallenge";
import { ChallengeCard } from "@/components/learn/ChallengeCard";

export function DailyChallengeClient({ challenges }: { challenges: readonly MedicationChallenge[] }) {
  const { todayIndex, currentStreak } = useDailyChallenge(challenges.length);
  const challenge = challenges[todayIndex];

  if (!challenge) return <div>No challenge available today.</div>;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center bg-surface border border-border p-6 rounded-xl">
        <div>
          <h1 className="text-3xl font-bold text-ink">Daily Challenge</h1>
          <p className="text-ink/70 mt-2">Test your clinical reasoning with today's scenario.</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-accent">{currentStreak}🔥</div>
          <div className="text-sm font-medium text-ink/60 mt-1">Day Streak</div>
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <ChallengeCard challenge={challenge} />
      </div>
    </div>
  );
}
