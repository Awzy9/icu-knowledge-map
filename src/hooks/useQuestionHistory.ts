"use client";

import { useSyncExternalStore, useCallback } from "react";
import {
  getUnifiedLearningState,
  updateUnifiedLearningState,
  subscribeToLearningState,
  DEFAULT_LEARNING_STATE,
} from "@/lib/learning-state";

export interface QuestionHistoryEntry {
  readonly lastOptionId: string;
  readonly correct: boolean;
  readonly attemptedAt: string;
}
export type QuestionHistoryMap = Record<string, QuestionHistoryEntry>;

export function useQuestionHistory() {
  const state = useSyncExternalStore(
    subscribeToLearningState,
    getUnifiedLearningState,
    () => DEFAULT_LEARNING_STATE
  );

  const history: QuestionHistoryMap = Object.entries(state.questions || {}).reduce(
    (acc, [id, data]) => {
      const last = data.attempts[data.attempts.length - 1];
      if (!last) return acc;
      return {
        ...acc,
        [id]: {
          lastOptionId: last.optionId,
          correct: last.correct,
          attemptedAt: last.attemptedAt,
        },
      };
    },
    {}
  );

  const recordAnswer = useCallback((questionId: string, optionId: string, correct: boolean) => {
    updateUnifiedLearningState((prev) => {
      const existing = prev.questions?.[questionId] || { attempts: [], lastAttemptedAt: "" };
      const now = new Date().toISOString();
      return {
        ...prev,
        questions: {
          ...prev.questions,
          [questionId]: {
            attempts: [...existing.attempts, { optionId, correct, attemptedAt: now }],
            lastAttemptedAt: now,
          },
        },
      };
    });
  }, []);

  return { history, recordAnswer };
}
