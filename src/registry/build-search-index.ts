import type {
  Calculator,
  ClinicalProblem,
  ContentSection,
  Guideline,
  Pathway,
  PhysiologyConcept,
  SystematicReview,
  Topic,
  Trial,
} from "@/content-types";

export type SearchEntryType =
  | "section"
  | "topic"
  | "physiology"
  | "pathway"
  | "trial"
  | "guideline"
  | "review"
  | "calculator"
  | "problem";

export interface SearchEntry {
  readonly id: string;
  readonly type: SearchEntryType;
  readonly title: string;
  readonly subtitle: string;
  readonly href: string;
}

export interface SearchIndexInput {
  readonly topics: readonly Topic[];
  readonly trials: readonly Trial[];
  readonly guidelines: readonly Guideline[];
  readonly systematicReviews: readonly SystematicReview[];
  readonly calculators: readonly Calculator[];
  readonly pathways: readonly Pathway[];
  readonly physiologyConcepts: readonly PhysiologyConcept[];
  readonly clinicalProblems: readonly ClinicalProblem[];
}

/**
 * Every section of a complete topic — including nested ones (e.g. "Prone
 * Positioning" -> "Indications") — indexed as its own fine-grained
 * "concept", distinct from the topic itself. This is what lets a query like
 * "PEEP" surface the specific management section inside ARDS, not just ARDS
 * as a whole.
 */
function collectSectionEntries(topic: Topic): SearchEntry[] {
  const entries: SearchEntry[] = [];
  const visit = (section: ContentSection) => {
    entries.push({
      id: `section-${section.id}`,
      type: "section",
      title: section.title,
      subtitle: `${topic.title} — ${section.summary}`,
      href: `/topics/${topic.slug}#${section.id}`,
    });
    section.children?.forEach(visit);
  };
  topic.sections.forEach(visit);
  return entries;
}

/** Builds the full, flat search index from the local content database — no network calls, computed once at module load. */
export function buildSearchIndex(input: SearchIndexInput): readonly SearchEntry[] {
  const searchableTopics = input.topics.filter((topic) => topic.status !== "stub");

  return [
    ...searchableTopics.flatMap(collectSectionEntries),
    ...searchableTopics.map(
      (topic): SearchEntry => ({
        id: `topic-${topic.id}`,
        type: "topic",
        title: topic.title,
        subtitle: topic.oneLiner,
        href: `/topics/${topic.slug}`,
      }),
    ),
    ...input.physiologyConcepts.map(
      (concept): SearchEntry => ({
        id: `physiology-${concept.id}`,
        type: "physiology",
        title: concept.title,
        subtitle: concept.summary,
        href: `/physiology/${concept.slug}`,
      }),
    ),
    ...input.pathways.map(
      (pathway): SearchEntry => ({
        id: `pathway-${pathway.id}`,
        type: "pathway",
        title: pathway.title,
        subtitle: pathway.oneLiner,
        href: `/pathways/${pathway.slug}`,
      }),
    ),
    ...input.trials.map(
      (trial): SearchEntry => ({
        id: `trial-${trial.id}`,
        type: "trial",
        title: trial.name,
        subtitle: `${trial.journal}, ${trial.year}`,
        href: `/trials/${trial.id}`,
      }),
    ),
    ...input.guidelines.map(
      (guideline): SearchEntry => ({
        id: `guideline-${guideline.id}`,
        type: "guideline",
        title: `${guideline.abbreviation} — ${guideline.title}`,
        subtitle: `${guideline.society}, ${guideline.year}`,
        href: `/guidelines/${guideline.id}`,
      }),
    ),
    ...input.systematicReviews.map(
      (review): SearchEntry => ({
        id: `review-${review.id}`,
        type: "review",
        title: review.title,
        subtitle: `${review.authorsOrGroup}, ${review.year}`,
        href: `/evidence/${review.id}`,
      }),
    ),
    ...input.calculators.map(
      (calculator): SearchEntry => ({
        id: `calculator-${calculator.id}`,
        type: "calculator",
        title: calculator.title,
        subtitle: calculator.description,
        href: `/calculators/${calculator.id}`,
      }),
    ),
    ...input.clinicalProblems.map(
      (problem): SearchEntry => ({
        id: `problem-${problem.id}`,
        type: "problem",
        title: problem.title,
        subtitle: problem.oneLiner,
        href: `/problems/${problem.slug}`,
      }),
    ),
  ];
}
