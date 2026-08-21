"use client";

import { useSyncExternalStore, useCallback } from "react";
import {
  getUnifiedLearningState,
  updateUnifiedLearningState,
  subscribeToLearningState,
  DEFAULT_LEARNING_STATE,
} from "@/lib/learning-state";

export type FlashcardStatus = "known" | "review";
export type FlashcardProgressMap = Record<string, FlashcardStatus>;

export function useFlashcardProgress() {
  const state = useSyncExternalStore(
    subscribeToLearningState,
    getUnifiedLearningState,
    () => DEFAULT_LEARNING_STATE
  );

  const progress: FlashcardProgressMap = Object.entries(state.flashcards || {}).reduce(
    (acc, [id, data]) => ({ ...acc, [id]: data.status }),
    {}
  );

  const markCard = useCallback((cardId: string, status: FlashcardStatus) => {
    updateUnifiedLearningState((prev) => ({
      ...prev,
      flashcards: {
        ...prev.flashcards,
        [cardId]: { status, lastReviewedAt: new Date().toISOString() },
      },
    }));
  }, []);

  return { progress, markCard };
}
