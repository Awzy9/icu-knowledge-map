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
import { allMedications } from "@/content/medications";
import { clinicalCases } from "@/content/clinical-cases";
import { medicationChallenges } from "@/content/medication-challenges";
import type { ClinicalCase } from "@/content-types/clinical-case";
import type { MedicationChallenge } from "@/content-types/medication-challenge";
import type {
  Calculator,
  ClinicalProblem,
  ContentSection,
  EvidenceRef,
  Guideline,
  Medication,
  MedicationCategory,
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
import { validateAllMedications } from "./validate-medications";
import { auditAllRelationships } from "./validate-relationships";

export type { SearchEntry, SearchEntryType };

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
  cases: clinicalCases,
  challenges: medicationChallenges,
});

validateAllMedications();

const relationshipAudit = auditAllRelationships();
if (!relationshipAudit.valid) {
  throw new Error(`Relationship audit failed with ${relationshipAudit.brokenLinks.length} errors: ${JSON.stringify(relationshipAudit.brokenLinks, null, 2)}`);
}

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
const medicationsBySlug = new Map(allMedications.map((med) => [med.slug, med]));
const clinicalCasesBySlug = new Map(clinicalCases.map((c) => [c.slug, c]));

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

export function getAllMedications(): readonly Medication[] {
  return allMedications;
}

export function getMedication(slug: string): Medication | undefined {
  return medicationsBySlug.get(slug);
}

export function getAllMedicationSlugs(): readonly string[] {
  return allMedications.map((med) => med.slug);
}

export function getMedicationsByCategory(category: MedicationCategory): readonly Medication[] {
  return allMedications.filter((med) => med.category === category);
}

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
  | "question"
  | "medication";

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
  medications: allMedications,
});

export function getSearchIndex(): readonly SearchEntry[] {
  return searchIndex;
}

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
    case "medication": {
      const med = medicationsBySlug.get(id) ?? allMedications.find((m) => m.id === id);
      if (!med) return undefined;
      return { id, type, title: med.name, subtitle: `${med.class} — ${med.summary}`, href: `/medications/${med.slug}` };
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

export function getAllClinicalCases(): readonly ClinicalCase[] {
  return clinicalCases;
}

export function getClinicalCase(slug: string): ClinicalCase | undefined {
  return clinicalCasesBySlug.get(slug);
}

export function getAllClinicalCaseSlugs(): readonly string[] {
  return clinicalCases.map(c => c.slug);
}

export function getAllMedicationChallenges(): readonly MedicationChallenge[] {
  return medicationChallenges;
}

export function getMedicationChallengesByType(type: string): readonly MedicationChallenge[] {
  return medicationChallenges.filter(c => c.challengeType === type);
}

export function getRelatedContentForMedication(slug: string) {
  const med = getMedication(slug);
  if (!med) return { items: [] };

  const relatedTopics = allTopics.filter(t => med.relatedTopicIds?.includes(t.id));
  const relatedPathways = pathways.filter(p => p.relatedTopicIds?.some(id => med.relatedTopicIds?.includes(id)));
  const relatedProblems = clinicalProblems.filter(p => p.relatedTopicIds?.some(id => med.relatedTopicIds?.includes(id)));
  const relatedCases = clinicalCases.filter(c => c.relatedMedicationSlugs?.includes(slug) || c.relatedTopicIds?.some(id => med.relatedTopicIds?.includes(id)));
  const relatedChallenges = medicationChallenges.filter(ch => ch.relatedMedicationSlugs?.includes(slug));

  const items: Array<{ type: string; title: string; href: string; subtitle?: string }> = [
    ...relatedTopics.slice(0, 2).map(t => ({ type: "Topic", title: t.title, href: `/topics/${t.slug}`, subtitle: t.oneLiner })),
    ...relatedCases.slice(0, 2).map(c => ({ type: "Clinical Case", title: c.title, href: `/learn/clinical-reasoning/${c.slug}`, subtitle: c.subtitle })),
    ...relatedProblems.slice(0, 2).map(p => ({ type: "Problem", title: p.title, href: `/problems/${p.slug}`, subtitle: p.oneLiner })),
    ...relatedPathways.slice(0, 2).map(p => ({ type: "Pathway", title: p.title, href: `/pathways/${p.slug}`, subtitle: p.oneLiner })),
    ...relatedChallenges.slice(0, 1).map(ch => ({ type: "Challenge", title: ch.stem.slice(0, 60) + "...", href: `/learn/medication-challenges`, subtitle: `Decision Challenge` })),
  ];

  return { items: items.slice(0, 6) };
}

export function getRelatedContentForTopic(id: string) {
  const meds = allMedications.filter(m => m.relatedTopicIds?.includes(id));
  const pathwaysList = pathways.filter(p => p.relatedTopicIds?.includes(id));
  const problems = clinicalProblems.filter(p => p.relatedTopicIds?.includes(id));
  const cases = clinicalCases.filter(c => c.relatedTopicIds?.includes(id));

  const items: Array<{ type: string; title: string; href: string; subtitle?: string }> = [
    ...meds.slice(0, 2).map(m => ({ type: "Medication", title: m.name, href: `/medications/${m.slug}`, subtitle: m.class })),
    ...cases.slice(0, 2).map(c => ({ type: "Clinical Case", title: c.title, href: `/learn/clinical-reasoning/${c.slug}`, subtitle: c.subtitle })),
    ...problems.slice(0, 2).map(p => ({ type: "Problem", title: p.title, href: `/problems/${p.slug}`, subtitle: p.oneLiner })),
    ...pathwaysList.slice(0, 2).map(p => ({ type: "Pathway", title: p.title, href: `/pathways/${p.slug}`, subtitle: p.oneLiner })),
  ];

  return { items: items.slice(0, 6) };
}
