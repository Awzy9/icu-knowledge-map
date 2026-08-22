import type { SearchEntryType } from "@/registry";

export const searchCategoryLabel: Record<SearchEntryType, string> = {
  section: "Concepts",
  topic: "Topics",
  medication: "ICU Medications",
  physiology: "Physiology",
  pathway: "Clinical Pathways",
  problem: "Clinical Problems",
  case: "Clinical Reasoning",
  "rapid-decision": "Rapid Decisions",
  "error-hunt": "Find the Error",
  flashcard: "Flashcards",
  question: "Questions",
  trial: "Trials",
  guideline: "Guidelines",
  review: "Systematic Reviews",
  calculator: "Calculators",
  comparison: "Comparisons",
};

/** Stable tiebreaker when two category groups score equally on a query. */
export const searchCategoryOrder: readonly SearchEntryType[] = [
  "section",
  "topic",
  "medication",
  "physiology",
  "pathway",
  "problem",
  "case",
  "rapid-decision",
  "error-hunt",
  "trial",
  "guideline",
  "review",
  "calculator",
  "flashcard",
  "question",
  "comparison",
];

/**
 * Compact badge shown on each result row. Colour is paired with a distinct
 * text label so status is never conveyed by colour alone (accessibility).
 */
export const searchCategoryBadge: Record<SearchEntryType, { label: string; className: string }> = {
  topic: { label: "Topic", className: "bg-accent/15 text-accent-strong border border-accent/20" },
  section: { label: "Section", className: "bg-surface-muted text-ink-muted border border-border" },
  medication: { label: "Drug", className: "bg-teal-500/15 text-teal-700 dark:text-teal-300 border border-teal-500/20" },
  physiology: { label: "Physiology", className: "bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/20" },
  pathway: { label: "Pathway", className: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/20" },
  problem: { label: "Problem", className: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/20" },
  case: { label: "Case", className: "bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/20" },
  "rapid-decision": { label: "Rapid", className: "bg-orange-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/20" },
  "error-hunt": { label: "Error", className: "bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/20" },
  flashcard: { label: "Card", className: "bg-violet-500/15 text-violet-600 dark:text-violet-400 border border-violet-500/20" },
  question: { label: "Question", className: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20" },
  trial: { label: "Trial", className: "bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/20" },
  guideline: { label: "Guideline", className: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20" },
  review: { label: "Synthesis", className: "bg-teal-500/15 text-teal-600 dark:text-teal-400 border border-teal-500/20" },
  calculator: { label: "Calculator", className: "bg-lime-500/15 text-lime-700 dark:text-lime-300 border border-lime-500/20" },
  comparison: { label: "Compare", className: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20" },
};
