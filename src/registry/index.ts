import { allTopics } from "@/content";
import { trials } from "@/evidence/trials";
import { guidelines } from "@/evidence/guidelines";
import { systematicReviews } from "@/evidence/systematic-reviews";
import { calculators } from "@/calculators";
import { physiologyConcepts } from "@/physiology";
import { pathways } from "@/pathways";
import { clinicalProblems } from "@/problems";
import { flashcards } from "@/study/flashcards";
import { questions } from "@/study/questions";
import type {
  Calculator,
  ClinicalProblem,
  ContentSection,
  EvidenceRef,
  Guideline,
  NodeId,
  Pathway,
  PhysiologyConcept,
  Question,
  SystematicReview,
  Topic,
  TopicCategory,
  Trial,
} from "@/content-types";
import { buildEvidenceIndex, type EvidenceIndex } from "./build-evidence-index";
import { buildGraph, resolveRelationships as resolveGraphRelationships, type GraphData, type ResolvedRelationship } from "./build-graph";
import { buildKnowledgeMapTree, type KnowledgeMapNode } from "./build-knowledge-map";
import { buildSearchIndex, type SearchEntry, type SearchEntryType } from "./build-search-index";
import { validateContent } from "./validate";

export type { SearchEntry, SearchEntryType };

// Validated and built once, at module scope, so every page that imports this
// registry shares the same computed indices instead of recomputing them.
validateContent({
  topics: allTopics,
  trials,
  guidelines,
  systematicReviews,
  calculators,
  physiologyConcepts,
  pathways,
  problems: clinicalProblems,
  flashcards,
  questions,
});

const graph: GraphData = buildGraph(allTopics);
const evidenceIndex: EvidenceIndex = buildEvidenceIndex(allTopics);

const topicsBySlug = new Map(allTopics.map((topic) => [topic.slug, topic]));
const trialsById = new Map(trials.map((trial) => [trial.id, trial]));
const guidelinesById = new Map(guidelines.map((guideline) => [guideline.id, guideline]));
const reviewsById = new Map(systematicReviews.map((review) => [review.id, review]));
const calculatorsById = new Map(calculators.map((calculator) => [calculator.id, calculator]));
const physiologyBySlug = new Map(physiologyConcepts.map((concept) => [concept.slug, concept]));
const pathwaysBySlug = new Map(pathways.map((pathway) => [pathway.slug, pathway]));
const problemsBySlug = new Map(clinicalProblems.map((problem) => [problem.slug, problem]));
const flashcardsById = new Map(flashcards.map((card) => [card.id, card]));
const questionsById = new Map(questions.map((question) => [question.id, question]));

export function getAllTopics(): readonly Topic[] {
  return allTopics;
}

export function getTopicsByCategory(category: TopicCategory): readonly Topic[] {
  return allTopics.filter((topic) => topic.category === category);
}

export function getTopic(slug: string): Topic | undefined {
  return topicsBySlug.get(slug);
}

export function getAllTopicSlugs(): readonly string[] {
  return allTopics.filter((topic) => topic.status !== "stub").map((topic) => topic.slug);
}

/** Computed on demand (cheap, small trees) rather than precomputed for every topic at module scope. */
export function getKnowledgeMapTree(slug: string): KnowledgeMapNode | undefined {
  const topic = topicsBySlug.get(slug);
  if (!topic) return undefined;
  return buildKnowledgeMapTree(topic, { trials, guidelines, systematicReviews });
}

function findSection(sections: readonly ContentSection[], sectionId: NodeId): ContentSection | undefined {
  for (const section of sections) {
    if (section.id === sectionId) return section;
    if (section.children) {
      const found = findSection(section.children, sectionId);
      if (found) return found;
    }
  }
  return undefined;
}

export function getSection(topic: Topic, sectionId: NodeId): ContentSection | undefined {
  return findSection(topic.sections, sectionId);
}

export function getGraph(): GraphData {
  return graph;
}

export function resolveRelationships(topicId: NodeId): readonly ResolvedRelationship[] {
  return resolveGraphRelationships(topicId, graph);
}

export function getEvidenceForSection(sectionId: NodeId) {
  return evidenceIndex.bySectionId.get(sectionId) ?? [];
}

export function getAllTrials(): readonly Trial[] {
  return trials;
}
export function getTrial(id: string): Trial | undefined {
  return trialsById.get(id);
}
export function getAllTrialIds(): readonly string[] {
  return trials.map((trial) => trial.id);
}

export function getAllGuidelines(): readonly Guideline[] {
  return guidelines;
}
export function getGuideline(id: string): Guideline | undefined {
  return guidelinesById.get(id);
}
export function getAllGuidelineIds(): readonly string[] {
  return guidelines.map((guideline) => guideline.id);
}

export function getAllSystematicReviews(): readonly SystematicReview[] {
  return systematicReviews;
}
export function getSystematicReview(id: string): SystematicReview | undefined {
  return reviewsById.get(id);
}
export function getAllSystematicReviewIds(): readonly string[] {
  return systematicReviews.map((review) => review.id);
}

export function getAllCalculators(): readonly Calculator[] {
  return calculators;
}
export function getCalculator(id: string): Calculator | undefined {
  return calculatorsById.get(id);
}
export function getAllCalculatorIds(): readonly string[] {
  return calculators.map((calculator) => calculator.id);
}
export function getCalculatorsForTopic(topicId: NodeId): readonly Calculator[] {
  return calculators.filter((calculator) => calculator.relatedTopicIds.includes(topicId));
}

export function getAllPhysiologyConcepts(): readonly PhysiologyConcept[] {
  return physiologyConcepts;
}
export function getPhysiologyConcept(slug: string): PhysiologyConcept | undefined {
  return physiologyBySlug.get(slug);
}
export function getAllPhysiologySlugs(): readonly string[] {
  return physiologyConcepts.map((concept) => concept.slug);
}
export function getPhysiologyConceptsForTopic(topicId: NodeId): readonly PhysiologyConcept[] {
  return physiologyConcepts.filter((concept) => concept.relatedTopicIds.includes(topicId));
}

export function getAllPathways(): readonly Pathway[] {
  return pathways;
}
export function getPathway(slug: string): Pathway | undefined {
  return pathwaysBySlug.get(slug);
}
export function getAllPathwaySlugs(): readonly string[] {
  return pathways.map((pathway) => pathway.slug);
}
export function getPathwaysForTopic(topicId: NodeId): readonly Pathway[] {
  return pathways.filter((pathway) => pathway.relatedTopicIds.includes(topicId));
}

export interface TopicReferences {
  readonly trials: readonly Trial[];
  readonly guidelines: readonly Guideline[];
  readonly systematicReviews: readonly SystematicReview[];
}

function collectEvidenceRefs(sections: readonly ContentSection[], out: EvidenceRef[]): void {
  for (const section of sections) {
    if (section.evidenceRefs) out.push(...section.evidenceRefs);
    if (section.children) collectEvidenceRefs(section.children, out);
  }
}

/** Every trial/guideline/review actually cited anywhere in a topic's section tree — computed, so it can never disagree with what's really in the body. */
export function getTopicReferences(topicId: NodeId): TopicReferences {
  const topic = allTopics.find((t) => t.id === topicId);
  if (!topic) return { trials: [], guidelines: [], systematicReviews: [] };

  const refs: EvidenceRef[] = [];
  collectEvidenceRefs(topic.sections, refs);

  const seen = new Set<string>();
  const uniqueRefs = refs.filter((ref) => {
    const key = `${ref.kind}:${ref.id}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return {
    trials: uniqueRefs
      .filter((ref) => ref.kind === "trial")
      .map((ref) => trialsById.get(ref.id))
      .filter((trial): trial is Trial => trial !== undefined),
    guidelines: uniqueRefs
      .filter((ref) => ref.kind === "guideline")
      .map((ref) => guidelinesById.get(ref.id))
      .filter((guideline): guideline is Guideline => guideline !== undefined),
    systematicReviews: uniqueRefs
      .filter((ref) => ref.kind === "systematic-review")
      .map((ref) => reviewsById.get(ref.id))
      .filter((review): review is SystematicReview => review !== undefined),
  };
}

export function getAllClinicalProblems(): readonly ClinicalProblem[] {
  return clinicalProblems;
}
export function getClinicalProblem(slug: string): ClinicalProblem | undefined {
  return problemsBySlug.get(slug);
}
export function getAllClinicalProblemSlugs(): readonly string[] {
  return clinicalProblems.map((problem) => problem.slug);
}
export function getClinicalProblemsForTopic(topicId: NodeId): readonly ClinicalProblem[] {
  return clinicalProblems.filter((problem) => problem.relatedTopicIds.includes(topicId));
}

export function getFlashcardsForTopic(topicId: NodeId): readonly (typeof flashcards)[number][] {
  return flashcards.filter((card) => card.topicId === topicId);
}
export function getQuestionsForTopic(topicId: NodeId): readonly Question[] {
  return questions.filter((question) => question.topicId === topicId);
}
export function getTopicSlugsWithFlashcards(): readonly string[] {
  const idsWithCards = new Set(flashcards.map((card) => card.topicId));
  return allTopics.filter((topic) => idsWithCards.has(topic.id)).map((topic) => topic.slug);
}
export function getTopicSlugsWithQuestions(): readonly string[] {
  const idsWithQuestions = new Set(questions.map((question) => question.topicId));
  return allTopics.filter((topic) => idsWithQuestions.has(topic.id)).map((topic) => topic.slug);
}

export type BookmarkableType =
  | "topic"
  | "physiology"
  | "trial"
  | "guideline"
  | "systematic-review"
  | "calculator"
  | "pathway"
  | "flashcard"
  | "question";

export interface BookmarkableEntity {
  readonly id: string;
  readonly type: BookmarkableType;
  readonly title: string;
  readonly subtitle: string;
  readonly href: string;
}

const searchIndex: readonly SearchEntry[] = buildSearchIndex({
  topics: allTopics,
  trials,
  guidelines,
  systematicReviews,
  calculators,
  pathways,
  physiologyConcepts,
  clinicalProblems,
});

/** Flat, pre-built index for the client-side search dialog — small enough to ship as a plain prop. */
export function getSearchIndex(): readonly SearchEntry[] {
  return searchIndex;
}

/** Resolves a stored bookmark {type, id} into display data for the /library page. */
export function getBookmarkableEntity(
  type: BookmarkableType,
  id: string,
): BookmarkableEntity | undefined {
  switch (type) {
    case "topic": {
      const topic = allTopics.find((t) => t.id === id);
      if (!topic) return undefined;
      return { id, type, title: topic.title, subtitle: topic.oneLiner, href: `/topics/${topic.slug}` };
    }
    case "trial": {
      const trial = trialsById.get(id);
      if (!trial) return undefined;
      return { id, type, title: trial.name, subtitle: `${trial.journal}, ${trial.year}`, href: `/trials/${trial.id}` };
    }
    case "guideline": {
      const guideline = guidelinesById.get(id);
      if (!guideline) return undefined;
      return {
        id,
        type,
        title: guideline.title,
        subtitle: `${guideline.abbreviation}, ${guideline.year}`,
        href: `/guidelines/${guideline.id}`,
      };
    }
    case "systematic-review": {
      const review = reviewsById.get(id);
      if (!review) return undefined;
      return { id, type, title: review.title, subtitle: `${review.authorsOrGroup}, ${review.year}`, href: `/evidence/${review.id}` };
    }
    case "calculator": {
      const calculator = calculatorsById.get(id);
      if (!calculator) return undefined;
      return { id, type, title: calculator.title, subtitle: calculator.description, href: `/calculators/${calculator.id}` };
    }
    case "physiology": {
      const concept = physiologyConcepts.find((c) => c.id === id);
      if (!concept) return undefined;
      return { id, type, title: concept.title, subtitle: concept.summary, href: `/physiology/${concept.slug}` };
    }
    case "pathway": {
      const pathway = pathways.find((p) => p.id === id);
      if (!pathway) return undefined;
      return { id, type, title: pathway.title, subtitle: pathway.oneLiner, href: `/pathways/${pathway.slug}` };
    }
    case "flashcard": {
      const card = flashcardsById.get(id);
      if (!card) return undefined;
      const topic = allTopics.find((t) => t.id === card.topicId);
      if (!topic) return undefined;
      return { id, type, title: card.question, subtitle: `Flashcard — ${topic.title}`, href: `/flashcards/${topic.slug}` };
    }
    case "question": {
      const question = questionsById.get(id);
      if (!question) return undefined;
      const topic = allTopics.find((t) => t.id === question.topicId);
      if (!topic) return undefined;
      return { id, type, title: question.stem, subtitle: `Question — ${topic.title}`, href: `/questions/${topic.slug}` };
    }
    default:
      return undefined;
  }
}
