import type { SearchEntryType } from "@/registry";

export const searchCategoryLabel: Record<SearchEntryType, string> = {
  section: "Concepts",
  topic: "Topics",
  physiology: "Physiology",
  pathway: "Clinical Pathways",
  trial: "Trials",
  guideline: "Guidelines",
  review: "Systematic Reviews",
  calculator: "Calculators",
  problem: "Clinical Problems",
};

/** Stable tiebreaker when two category groups score equally on a query. */
export const searchCategoryOrder: readonly SearchEntryType[] = [
  "section",
  "topic",
  "physiology",
  "pathway",
  "trial",
  "guideline",
  "review",
  "calculator",
  "problem",
];
