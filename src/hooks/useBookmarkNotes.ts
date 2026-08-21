"use client";

import { useSyncExternalStore, useCallback } from "react";
import {
  getUnifiedLearningState,
  updateUnifiedLearningState,
  subscribeToLearningState,
  DEFAULT_LEARNING_STATE,
} from "@/lib/learning-state";

export type BookmarkNotesMap = Record<string, string>;

export function useBookmarkNotes() {
  const state = useSyncExternalStore(
    subscribeToLearningState,
    getUnifiedLearningState,
    () => DEFAULT_LEARNING_STATE
  );

  const notes: BookmarkNotesMap = (state.bookmarks || []).reduce((acc, b) => {
    if (b.note) {
      acc[`${b.type}:${b.id}`] = b.note;
    }
    return acc;
  }, {} as BookmarkNotesMap);

  const getNote = useCallback(
    (type: string, id: string): string | undefined => {
      const match = (state.bookmarks || []).find((b) => b.type === type && b.id === id);
      return match?.note;
    },
    [state.bookmarks]
  );

  const setNote = useCallback((type: string, id: string, note: string) => {
    updateUnifiedLearningState((prev) => {
      const current = prev.bookmarks || [];
      const trimmed = note.trim();
      return {
        ...prev,
        bookmarks: current.map((b) =>
          b.type === type && b.id === id ? { ...b, note: trimmed || undefined } : b
        ),
      };
    });
  }, []);

  const removeNote = useCallback((type: string, id: string) => {
    updateUnifiedLearningState((prev) => {
      const current = prev.bookmarks || [];
      return {
        ...prev,
        bookmarks: current.map((b) =>
          b.type === type && b.id === id ? { ...b, note: undefined } : b
        ),
      };
    });
  }, []);

  return { notes, getNote, setNote, removeNote };
}
