import type { Comparison } from "@/content-types/comparison";
import { formatContentId } from "@/lib/content-id";
import { shockTypesComparison, obstructiveShockTrio } from "./comparisons-shock";
import { ardsVsCpe, traliVsTaco, akiComparison } from "./comparisons-lungs-renal";
import { dkaVsHhs, sodiumDisordersComparison, acidBaseComparison } from "./comparisons-metabolic";

export * from "@/content-types/comparison";

const ALL: readonly Comparison[] = [
  shockTypesComparison,
  obstructiveShockTrio,
  ardsVsCpe,
  traliVsTaco,
  akiComparison,
  dkaVsHhs,
  sodiumDisordersComparison,
  acidBaseComparison,
];

export function getAllComparisons(): readonly Comparison[] {
  return ALL;
}

export function getComparison(id: string): Comparison | undefined {
  return ALL.find((c) => c.id === id);
}

export function comparisonCount(): number {
  return ALL.length;
}

/** Canonical stable content id, e.g. "comparison:shock-types". */
export function comparisonContentId(id: string): string {
  return formatContentId("comparison", id);
}

/**
 * Contextual [Compare] wiring: topic.id -> comparison ids offered on that page.
 * Rendered automatically by <TopicCompareLinks /> on topic pages.
 */
const TOPIC_COMPARE_LINKS: Readonly<Record<string, readonly string[]>> = {
  shock: ["shock-types"],
  "septic-shock": ["shock-types"],
  "cardiogenic-shock": ["shock-types"],
  "obstructive-shock": ["obstructive-shock-trio", "shock-types"],
  ards: ["ards-vs-cardiogenic-edema", "shock-types"],
  "cardiogenic-pulmonary-edema": ["ards-vs-cardiogenic-edema"],
  transfusion: ["trali-vs-taco"],
  aki: ["aki-categories"],
  "diabetic-ketoacidosis": ["dka-vs-hhs"],
  "endocrine-emergencies": ["dka-vs-hhs"],
  "severe-sodium-disorders": ["siadh-csw-di"],
  "acid-base-disorders": ["acid-base-primary"],
  "metabolic-acidosis": ["acid-base-primary"],
  "pulmonary-embolism": ["obstructive-shock-trio"],
  pneumothorax: ["obstructive-shock-trio"],
};

export function getComparisonIdsForTopic(topicId: string): readonly string[] {
  return TOPIC_COMPARE_LINKS[topicId] ?? [];
}
