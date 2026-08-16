"use client";

import { useLocalStorageState } from "./useLocalStorageState";

const STORAGE_KEY = "icu-km:recent-searches";
const MAX_RECENT = 6;

export function useRecentSearches() {
  const { value: recentSearches, setValue: setRecentSearches } = useLocalStorageState<string[]>(STORAGE_KEY, []);

  const addRecentSearch = (query: string) => {
    const trimmed = query.trim();
    if (trimmed.length < 2) return;
    setRecentSearches((prev) => {
      const deduped = prev.filter((entry) => entry.toLowerCase() !== trimmed.toLowerCase());
      return [trimmed, ...deduped].slice(0, MAX_RECENT);
    });
  };

  const clearRecentSearches = () => setRecentSearches([]);

  return { recentSearches, addRecentSearch, clearRecentSearches };
}
