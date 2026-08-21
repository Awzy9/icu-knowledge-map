"use client";

import { useSyncExternalStore, useCallback } from "react";
import {
  getUnifiedLearningState,
  updateUnifiedLearningState,
  subscribeToLearningState,
  DEFAULT_LEARNING_STATE,
} from "@/lib/learning-state";

function dateHash(dateStr: string): number {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    const char = dateStr.charCodeAt(i);
    hash = ((hash << 5) - hash + char) | 0;
  }
  return Math.abs(hash);
}

function getTodayDateString(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function isYesterday(dateStr: string): boolean {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, "0")}-${String(yesterday.getDate()).padStart(2, "0")}`;
  return dateStr === yStr;
}

export function useDailyChallenge(poolSize: number) {
  const unified = useSyncExternalStore(
    subscribeToLearningState,
    getUnifiedLearningState,
    () => DEFAULT_LEARNING_STATE
  );

  const state = unified.dailyChallenge;
  const today = getTodayDateString();
  const todayIndex = dateHash(today) % Math.max(poolSize, 1);

  const isCompletedToday = state.lastCompletedDate === today && state.selectedOptionId !== null;

  const currentStreak = (() => {
    if (state.lastCompletedDate === today) return state.streak;
    if (state.lastCompletedDate && isYesterday(state.lastCompletedDate)) return state.streak;
    return 0;
  })();

  const submitAnswer = useCallback(
    (challengeId: string, optionId: string, correct: boolean) => {
      updateUnifiedLearningState((prev) => {
        const curDaily = prev.dailyChallenge;
        const newStreak = (() => {
          if (curDaily.lastCompletedDate === today) return curDaily.streak;
          if (curDaily.lastCompletedDate && isYesterday(curDaily.lastCompletedDate)) return curDaily.streak + 1;
          return 1;
        })();

        return {
          ...prev,
          dailyChallenge: {
            lastCompletedDate: today,
            lastChallengeId: challengeId,
            selectedOptionId: optionId,
            correct,
            streak: newStreak,
          },
        };
      });
    },
    [today]
  );

  return {
    todayIndex,
    isCompletedToday,
    currentStreak,
    todayState: state.lastCompletedDate === today ? state : null,
    submitAnswer,
  };
}
