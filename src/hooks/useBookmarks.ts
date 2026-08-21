"use client";

import { useSyncExternalStore, useCallback } from "react";
import {
  getUnifiedLearningState,
  updateUnifiedLearningState,
  subscribeToLearningState,
  DEFAULT_LEARNING_STATE,
} from "@/lib/learning-state";
import type { BookmarkableType } from "@/registry";

export interface BookmarkEntry {
  readonly id: string;
  readonly type: BookmarkableType;
  readonly savedAt: string;
  readonly note?: string;
}

export function useBookmarks() {
  const state = useSyncExternalStore(
    subscribeToLearningState,
    getUnifiedLearningState,
    () => DEFAULT_LEARNING_STATE
  );

  const bookmarks: BookmarkEntry[] = (state.bookmarks || []).map((b) => ({
    id: b.id,
    type: b.type as BookmarkableType,
    savedAt: b.savedAt,
    note: b.note,
  }));

  const isBookmarked = useCallback(
    (type: BookmarkableType, id: string): boolean => {
      return (state.bookmarks || []).some((entry) => entry.type === type && entry.id === id);
    },
    [state.bookmarks]
  );

  const toggleBookmark = useCallback(
    (type: BookmarkableType, id: string, note?: string) => {
      updateUnifiedLearningState((prev) => {
        const currentBookmarks = prev.bookmarks || [];
        const exists = currentBookmarks.some((entry) => entry.type === type && entry.id === id);
        if (exists) {
          return {
            ...prev,
            bookmarks: currentBookmarks.filter((entry) => !(entry.type === type && entry.id === id)),
          };
        }
        return {
          ...prev,
          bookmarks: [...currentBookmarks, { id, type, savedAt: new Date().toISOString(), note }],
        };
      });
    },
    []
  );

  const updateBookmarkNote = useCallback(
    (type: BookmarkableType, id: string, note: string) => {
      updateUnifiedLearningState((prev) => {
        const currentBookmarks = prev.bookmarks || [];
        return {
          ...prev,
          bookmarks: currentBookmarks.map((entry) =>
            entry.type === type && entry.id === id ? { ...entry, note: note.trim() || undefined } : entry
          ),
        };
      });
    },
    []
  );

  return { bookmarks, isBookmarked, toggleBookmark, updateBookmarkNote };
}
