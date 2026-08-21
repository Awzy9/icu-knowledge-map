"use client";

import { useSyncExternalStore, useCallback } from "react";
import {
  getUnifiedLearningState,
  saveUnifiedLearningState,
  updateUnifiedLearningState,
  subscribeToLearningState,
  DEFAULT_LEARNING_STATE,
  type UnifiedLearningState,
  type LearningStateLevel,
  computeLearningState,
} from "@/lib/learning-state";

export function useUnifiedState() {
  const state = useSyncExternalStore(
    subscribeToLearningState,
    getUnifiedLearningState,
    () => DEFAULT_LEARNING_STATE
  );

  const markTopicViewed = useCallback((topicId: string) => {
    updateUnifiedLearningState((prev) => ({
      ...prev,
      topics: {
        ...prev.topics,
        [topicId]: {
          ...(prev.topics[topicId] || { completed: false }),
          viewed: true,
          lastViewedAt: new Date().toISOString(),
        },
      },
    }));
  }, []);

  const markMedicationViewed = useCallback((medSlug: string) => {
    updateUnifiedLearningState((prev) => ({
      ...prev,
      medications: {
        ...prev.medications,
        [medSlug]: {
          viewed: true,
          lastViewedAt: new Date().toISOString(),
        },
      },
    }));
  }, []);

  const toggleTopicCompleted = useCallback((topicId: string) => {
    updateUnifiedLearningState((prev) => {
      const current = prev.topics[topicId]?.completed || false;
      return {
        ...prev,
        topics: {
          ...prev.topics,
          [topicId]: {
            viewed: true,
            completed: !current,
            lastViewedAt: new Date().toISOString(),
          },
        },
      };
    });
  }, []);

  const getMedicationLearningState = useCallback(
    (medSlug: string, relatedChallengeIds: string[] = [], relatedQuestionIds: string[] = []): LearningStateLevel => {
      const med = state.medications[medSlug];
      const isViewed = !!med?.viewed;

      let challengeTotalAttempts = 0;
      let challengeRecentCorrect = 0;
      relatedChallengeIds.forEach((id) => {
        const ch = state.challenges[id];
        if (ch && ch.attempts.length > 0) {
          challengeTotalAttempts += ch.attempts.length;
          const lastAttempt = ch.attempts[ch.attempts.length - 1];
          if (lastAttempt.correct) challengeRecentCorrect++;
        }
      });

      let questionTotalAttempts = 0;
      let questionRecentCorrect = 0;
      relatedQuestionIds.forEach((id) => {
        const q = state.questions[id];
        if (q && q.attempts.length > 0) {
          questionTotalAttempts += q.attempts.length;
          const lastAttempt = q.attempts[q.attempts.length - 1];
          if (lastAttempt.correct) questionRecentCorrect++;
        }
      });

      return computeLearningState({
        isViewed,
        challengeTotalAttempts,
        challengeRecentCorrect,
        questionTotalAttempts,
        questionRecentCorrect,
      });
    },
    [state.medications, state.challenges, state.questions]
  );

  const getTopicLearningState = useCallback(
    (topicId: string, relatedQuestionIds: string[] = [], cardIds: string[] = []): LearningStateLevel => {
      const topic = state.topics[topicId];
      const isViewed = !!topic?.viewed;

      let questionTotalAttempts = 0;
      let questionRecentCorrect = 0;
      relatedQuestionIds.forEach((id) => {
        const q = state.questions[id];
        if (q && q.attempts.length > 0) {
          questionTotalAttempts += q.attempts.length;
          const lastAttempt = q.attempts[q.attempts.length - 1];
          if (lastAttempt.correct) questionRecentCorrect++;
        }
      });

      let flashcardStatus: "known" | "review" | undefined;
      const knownCount = cardIds.filter((cid) => state.flashcards[cid]?.status === "known").length;
      if (cardIds.length > 0 && knownCount >= Math.ceil(cardIds.length / 2)) {
        flashcardStatus = "known";
      }

      return computeLearningState({
        isViewed,
        challengeTotalAttempts: 0,
        challengeRecentCorrect: 0,
        questionTotalAttempts,
        questionRecentCorrect,
        flashcardStatus,
      });
    },
    [state.topics, state.questions, state.flashcards]
  );

  return {
    state,
    markTopicViewed,
    markMedicationViewed,
    toggleTopicCompleted,
    getMedicationLearningState,
    getTopicLearningState,
  };
}
