"use client";

import { useLocalStorageState } from "./useLocalStorageState";
import type { BookmarkableType } from "@/registry";

export interface BookmarkEntry {
  readonly id: string;
  readonly type: BookmarkableType;
  readonly savedAt: string;
}

const STORAGE_KEY = "icu-km:bookmarks";

export function useBookmarks() {
  const { value: bookmarks, setValue: setBookmarks } = useLocalStorageState<BookmarkEntry[]>(
    STORAGE_KEY,
    [],
  );

  const isBookmarked = (type: BookmarkableType, id: string) =>
    bookmarks.some((entry) => entry.type === type && entry.id === id);

  const toggleBookmark = (type: BookmarkableType, id: string) => {
    setBookmarks((prev) => {
      const exists = prev.some((entry) => entry.type === type && entry.id === id);
      if (exists) return prev.filter((entry) => !(entry.type === type && entry.id === id));
      return [...prev, { id, type, savedAt: new Date().toISOString() }];
    });
  };

  return { bookmarks, isBookmarked, toggleBookmark };
}
