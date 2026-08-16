"use client";

import { useLocalStorageState } from "./useLocalStorageState";

export type FlashcardStatus = "known" | "review";
export type FlashcardProgressMap = Record<string, FlashcardStatus>;

const STORAGE_KEY = "icu-km:flashcard-progress";

/** Global (not per-topic) so a single store backs both the study deck and the cross-topic Progress page. */
export function useFlashcardProgress() {
  const { value: progress, setValue: setProgress } = useLocalStorageState<FlashcardProgressMap>(STORAGE_KEY, {});

  const markCard = (cardId: string, status: FlashcardStatus) => {
    setProgress((prev) => ({ ...prev, [cardId]: status }));
  };

  return { progress, markCard };
}
