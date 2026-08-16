"use client";

import { useLocalStorageState } from "./useLocalStorageState";

const STORAGE_KEY = "icu-km:completed-topics";

export function useCompletedTopics() {
  const { value: completedTopicIds, setValue: setCompletedTopicIds } = useLocalStorageState<string[]>(
    STORAGE_KEY,
    [],
  );

  const isCompleted = (topicId: string) => completedTopicIds.includes(topicId);

  const toggleCompleted = (topicId: string) => {
    setCompletedTopicIds((prev) => (prev.includes(topicId) ? prev.filter((id) => id !== topicId) : [...prev, topicId]));
  };

  return { completedTopicIds, isCompleted, toggleCompleted };
}
