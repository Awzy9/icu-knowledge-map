"use client";

import { useSyncExternalStore, useCallback } from "react";
import {
  getUnifiedLearningState,
  updateUnifiedLearningState,
  subscribeToLearningState,
  DEFAULT_LEARNING_STATE,
  type ActivityRecord,
} from "@/lib/learning-state";

export type ActivityEntry = ActivityRecord;
const MAX_ENTRIES = 20;

export function useRecentActivity() {
  const unified = useSyncExternalStore(
    subscribeToLearningState,
    getUnifiedLearningState,
    () => DEFAULT_LEARNING_STATE
  );

  const activities: ActivityRecord[] = unified.recentActivity || [];

  const recordActivity = useCallback((entry: Omit<ActivityRecord, "timestamp">) => {
    updateUnifiedLearningState((prev) => {
      const existing = prev.recentActivity || [];
      const filtered = existing.filter(
        (a) => !(a.type === entry.type && a.id === entry.id)
      );
      return {
        ...prev,
        recentActivity: [
          { ...entry, timestamp: new Date().toISOString() },
          ...filtered,
        ].slice(0, MAX_ENTRIES),
      };
    });
  }, []);

  const getRecentItems = useCallback(
    (count: number = 5): readonly ActivityRecord[] => activities.slice(0, count),
    [activities]
  );

  const getInProgressCases = useCallback(
    (): readonly ActivityRecord[] =>
      activities.filter(
        (a) => a.type === "case" && a.resumeState?.stepIndex !== undefined
      ),
    [activities]
  );

  const clearActivity = useCallback(() => {
    updateUnifiedLearningState((prev) => ({
      ...prev,
      recentActivity: [],
    }));
  }, []);

  return { activities, recordActivity, getRecentItems, getInProgressCases, clearActivity };
}
