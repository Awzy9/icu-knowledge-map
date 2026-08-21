"use client";

import { useSyncExternalStore, useCallback } from "react";
import {
  getUnifiedLearningState,
  updateUnifiedLearningState,
  subscribeToLearningState,
  DEFAULT_LEARNING_STATE,
} from "@/lib/learning-state";

export function useCompletedTopics() {
  const state = useSyncExternalStore(
    subscribeToLearningState,
    getUnifiedLearningState,
    () => DEFAULT_LEARNING_STATE
  );

  const completedTopicIds = Object.entries(state.topics || {})
    .filter(([_, t]) => t.completed)
    .map(([id]) => id);

  const isCompleted = useCallback(
    (topicId: string) => !!state.topics?.[topicId]?.completed,
    [state.topics]
  );

  const toggleCompleted = useCallback((topicId: string) => {
    updateUnifiedLearningState((prev) => {
      const existing = prev.topics?.[topicId] || { viewed: true, completed: false };
      return {
        ...prev,
        topics: {
          ...prev.topics,
          [topicId]: {
            ...existing,
            completed: !existing.completed,
            lastViewedAt: new Date().toISOString(),
          },
        },
      };
    });
  }, []);

  return { completedTopicIds, isCompleted, toggleCompleted };
}
