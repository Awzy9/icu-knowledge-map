"use client";

import { useSyncExternalStore, useCallback } from "react";
import {
  getUnifiedLearningState,
  updateUnifiedLearningState,
  subscribeToLearningState,
  DEFAULT_LEARNING_STATE,
} from "@/lib/learning-state";

export interface ChallengeHistoryEntry {
  readonly challengeId: string;
  readonly selectedOptionId: string;
  readonly correct: boolean;
  readonly attemptedAt: string;
}

export type ChallengeHistoryMap = Record<string, ChallengeHistoryEntry>;

export function useChallengeHistory() {
  const state = useSyncExternalStore(
    subscribeToLearningState,
    getUnifiedLearningState,
    () => DEFAULT_LEARNING_STATE
  );

  const history: ChallengeHistoryMap = Object.entries(state.challenges || {}).reduce(
    (acc, [id, data]) => {
      const last = data.attempts[data.attempts.length - 1];
      if (!last) return acc;
      return {
        ...acc,
        [id]: {
          challengeId: id,
          selectedOptionId: last.selectedOptionId,
          correct: last.correct,
          attemptedAt: last.attemptedAt,
        },
      };
    },
    {}
  );

  const recordChallenge = useCallback(
    (challengeId: string, selectedOptionId: string, correct: boolean) => {
      updateUnifiedLearningState((prev) => {
        const existing = prev.challenges?.[challengeId] || { attempts: [], lastAttemptedAt: "" };
        const now = new Date().toISOString();
        return {
          ...prev,
          challenges: {
            ...prev.challenges,
            [challengeId]: {
              attempts: [...existing.attempts, { selectedOptionId, correct, attemptedAt: now }],
              lastAttemptedAt: now,
            },
          },
        };
      });
    },
    []
  );

  const getChallengeResult = useCallback(
    (challengeId: string): ChallengeHistoryEntry | undefined => history[challengeId],
    [history]
  );

  const getAccuracy = useCallback((): { total: number; correct: number; percentage: number } => {
    const entries = Object.values(history);
    const total = entries.length;
    const correct = entries.filter((e) => e.correct).length;
    return { total, correct, percentage: total > 0 ? Math.round((correct / total) * 100) : 0 };
  }, [history]);

  return { history, recordChallenge, getChallengeResult, getAccuracy };
}
