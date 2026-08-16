"use client";

import { useLocalStorageState } from "./useLocalStorageState";

export interface QuestionHistoryEntry {
  readonly lastOptionId: string;
  readonly correct: boolean;
  readonly attemptedAt: string;
}
export type QuestionHistoryMap = Record<string, QuestionHistoryEntry>;

const STORAGE_KEY = "icu-km:question-history";

/** Global (not per-topic) so a single store backs both the quiz and the cross-topic Progress / review-incorrect flow. */
export function useQuestionHistory() {
  const { value: history, setValue: setHistory } = useLocalStorageState<QuestionHistoryMap>(STORAGE_KEY, {});

  const recordAnswer = (questionId: string, optionId: string, correct: boolean) => {
    setHistory((prev) => ({
      ...prev,
      [questionId]: { lastOptionId: optionId, correct, attemptedAt: new Date().toISOString() },
    }));
  };

  return { history, recordAnswer };
}
