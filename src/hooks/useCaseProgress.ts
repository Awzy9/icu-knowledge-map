"use client";

import { useSyncExternalStore, useCallback } from "react";
import {
  getUnifiedLearningState,
  updateUnifiedLearningState,
  subscribeToLearningState,
  DEFAULT_LEARNING_STATE,
  type CaseProgressRecord,
  type DecisionRecord,
} from "@/lib/learning-state";

export type { CaseProgressRecord, DecisionRecord };

export function useCaseProgress() {
  const state = useSyncExternalStore(
    subscribeToLearningState,
    getUnifiedLearningState,
    () => DEFAULT_LEARNING_STATE
  );

  const progress = state.cases;

  const getCaseProgress = useCallback(
    (caseId: string): CaseProgressRecord | undefined => progress[caseId],
    [progress]
  );

  const recordStepResult = useCallback(
    (
      caseId: string,
      stepId: string,
      selectedOptionId: string,
      correct: boolean,
      nextStepIndex: number,
      decisionInfo?: {
        stepPrompt: string;
        selectedOptionText: string;
        classification: "appropriate" | "reasonable-alternative" | "suboptimal" | "potentially-harmful";
      },
      nextStepId?: string
    ) => {
      updateUnifiedLearningState((prev) => {
        const existing: CaseProgressRecord = prev.cases[caseId] ?? {
          caseId,
          currentStepIndex: 0,
          stepResults: {},
          decisionTimeline: [],
        };

        const updatedTimeline = [...existing.decisionTimeline];
        if (decisionInfo) {
          const existingIdx = updatedTimeline.findIndex((d) => d.stepId === stepId);
          const decisionEntry: DecisionRecord = {
            stepId,
            stepPrompt: decisionInfo.stepPrompt,
            selectedOptionId,
            selectedOptionText: decisionInfo.selectedOptionText,
            isCorrect: correct,
            classification: decisionInfo.classification,
            timestamp: new Date().toISOString(),
          };
          if (existingIdx >= 0) {
            updatedTimeline[existingIdx] = decisionEntry;
          } else {
            updatedTimeline.push(decisionEntry);
          }
        }

        return {
          ...prev,
          cases: {
            ...prev.cases,
            [caseId]: {
              ...existing,
              currentStepIndex: nextStepIndex,
              currentStepId: nextStepId || existing.currentStepId,
              stepResults: {
                ...existing.stepResults,
                [stepId]: {
                  selectedOptionId,
                  correct,
                  classification: decisionInfo?.classification,
                },
              },
              decisionTimeline: updatedTimeline,
            },
          },
        };
      });
    },
    []
  );

  const completeCase = useCallback((caseId: string, score: number) => {
    updateUnifiedLearningState((prev) => {
      const existing = prev.cases[caseId];
      if (!existing) return prev;
      return {
        ...prev,
        cases: {
          ...prev.cases,
          [caseId]: {
            ...existing,
            completedAt: new Date().toISOString(),
            score,
          },
        },
      };
    });
  }, []);

  const resetCase = useCallback((caseId: string) => {
    updateUnifiedLearningState((prev) => {
      const nextCases = { ...prev.cases };
      delete nextCases[caseId];
      return {
        ...prev,
        cases: nextCases,
      };
    });
  }, []);

  const getCompletedCount = useCallback((): number => {
    return Object.values(progress).filter((entry) => entry.completedAt).length;
  }, [progress]);

  return {
    progress,
    getCaseProgress,
    recordStepResult,
    completeCase,
    resetCase,
    getCompletedCount,
  };
}
