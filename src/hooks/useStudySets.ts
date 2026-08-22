"use client";

import { useSyncExternalStore, useCallback } from "react";
import {
  getUnifiedLearningState,
  updateUnifiedLearningState,
  subscribeToLearningState,
  DEFAULT_LEARNING_STATE,
  type StudySet,
} from "@/lib/learning-state";

function makeId(): string {
  // Stable enough for a local-only collection id; avoids a uuid dependency.
  return `set-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export function useStudySets() {
  const state = useSyncExternalStore(
    subscribeToLearningState,
    getUnifiedLearningState,
    () => DEFAULT_LEARNING_STATE,
  );

  const studySets: readonly StudySet[] = state.studySets ?? [];

  const createSet = useCallback((name: string): string => {
    const trimmed = name.trim();
    if (trimmed === "") return "";
    const id = makeId();
    const now = new Date().toISOString();
    updateUnifiedLearningState((prev) => ({
      ...prev,
      studySets: [
        ...(prev.studySets ?? []),
        { id, name: trimmed, createdAt: now, updatedAt: now, itemIds: [] },
      ],
    }));
    return id;
  }, []);

  const renameSet = useCallback((setId: string, name: string) => {
    const trimmed = name.trim();
    if (trimmed === "") return;
    updateUnifiedLearningState((prev) => ({
      ...prev,
      studySets: (prev.studySets ?? []).map((set) =>
        set.id === setId ? { ...set, name: trimmed, updatedAt: new Date().toISOString() } : set,
      ),
    }));
  }, []);

  const deleteSet = useCallback((setId: string) => {
    updateUnifiedLearningState((prev) => ({
      ...prev,
      studySets: (prev.studySets ?? []).filter((set) => set.id !== setId),
    }));
  }, []);

  const addToSet = useCallback((setId: string, contentId: string) => {
    updateUnifiedLearningState((prev) => ({
      ...prev,
      studySets: (prev.studySets ?? []).map((set) => {
        if (set.id !== setId || set.itemIds.includes(contentId)) return set;
        return {
          ...set,
          itemIds: [...set.itemIds, contentId],
          updatedAt: new Date().toISOString(),
        };
      }),
    }));
  }, []);

  const removeFromSet = useCallback((setId: string, contentId: string) => {
    updateUnifiedLearningState((prev) => ({
      ...prev,
      studySets: (prev.studySets ?? []).map((set) =>
        set.id === setId
          ? {
              ...set,
              itemIds: set.itemIds.filter((id) => id !== contentId),
              updatedAt: new Date().toISOString(),
            }
          : set,
      ),
    }));
  }, []);

  /** Moves an item by `delta` positions (-1 up, +1 down), clamped to bounds. */
  const reorderItem = useCallback((setId: string, contentId: string, delta: number) => {
    updateUnifiedLearningState((prev) => ({
      ...prev,
      studySets: (prev.studySets ?? []).map((set) => {
        if (set.id !== setId) return set;
        const from = set.itemIds.indexOf(contentId);
        if (from === -1) return set;
        const to = Math.max(0, Math.min(set.itemIds.length - 1, from + delta));
        if (to === from) return set;
        const next = [...set.itemIds];
        next.splice(from, 1);
        next.splice(to, 0, contentId);
        return { ...set, itemIds: next, updatedAt: new Date().toISOString() };
      }),
    }));
  }, []);

  const isInSet = useCallback(
    (setId: string, contentId: string): boolean =>
      (state.studySets ?? []).find((set) => set.id === setId)?.itemIds.includes(contentId) ?? false,
    [state.studySets],
  );

  /** All sets that currently contain this content id — used by the "Save to…" menu. */
  const setsContaining = useCallback(
    (contentId: string): readonly StudySet[] =>
      (state.studySets ?? []).filter((set) => set.itemIds.includes(contentId)),
    [state.studySets],
  );

  return {
    studySets,
    createSet,
    renameSet,
    deleteSet,
    addToSet,
    removeFromSet,
    reorderItem,
    isInSet,
    setsContaining,
  };
}
