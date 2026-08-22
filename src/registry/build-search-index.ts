import type {
  Calculator,
  ClinicalProblem,
  ContentSection,
  Guideline,
  Medication,
  Pathway,
  PhysiologyConcept,
  SystematicReview,
  Topic,
  Trial,
} from "@/content-types";
import type { ClinicalCase } from "@/content-types/clinical-case";
import type { Flashcard } from "@/content-types/flashcard";
import type { Question } from "@/content-types/question";
import { formatContentId } from "@/lib/content-id";

export type SearchEntryType =
  | "section"
  | "topic"
  | "physiology"
  | "pathway"
  | "trial"
  | "guideline"
  | "review"
  | "calculator"
  | "problem"
  | "medication"
  | "case"
  | "rapid-decision"
  | "error-hunt"
  | "flashcard"
  | "question";

export interface SearchEntry {
  readonly id: string;
  readonly type: SearchEntryType;
  readonly title: string;
  readonly subtitle: string;
  readonly href: string;
  /**
   * Canonical stable content id ("topic:ards"). Present for entries that map
   * onto a bookmarkable/study-set-able entity. Section entries carry the id of
   * their parent topic so a saved section still resolves.
   */
  readonly contentId?: string;
  /**
   * Extra matchable text (brand names, abbreviations, tags, system).
   * Kept lowercase and short — this ships to the client.
   */
  readonly keywords?: string;
}

/** Minimal shapes for content that does not have a zod content-type module. */
interface RapidDecisionLike {
  readonly id: string;
  readonly vignette: string;
  readonly question: string;
  readonly difficulty: string;
  readonly relatedTopicId?: string;
}

interface IcuErrorLike {
  readonly id: string;
  readonly title: string;
  readonly physiology?: string;
  readonly difficulty: string;
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
  readonly medications?: readonly Medication[];
  readonly clinicalCases?: readonly ClinicalCase[];
  readonly rapidDecisions?: readonly RapidDecisionLike[];
  readonly icuErrors?: readonly IcuErrorLike[];
  readonly flashcards?: readonly Flashcard[];
  readonly questions?: readonly Question[];
  /** Medication slugs that render a physiology/hemodynamics section. */
  readonly medicationSlugsWithPhysiology?: readonly string[];
}

function kw(...parts: readonly (string | undefined | readonly string[])[]): string | undefined {
  const flat: string[] = [];
  for (const part of parts) {
    if (!part) continue;
    if (Array.isArray(part)) flat.push(...part);
    else if (typeof part === "string") flat.push(part);
  }
  const joined = flat.join(" ").toLowerCase().trim();
  return joined.length > 0 ? joined : undefined;
}

/** Truncates long prose so the shipped index stays small. */
function clamp(value: string, max = 120): string {
  const clean = value.replace(/\s+/g, " ").trim();
  return clean.length <= max ? clean : `${clean.slice(0, max - 1)}…`;
}

function collectSectionEntries(topic: Topic): SearchEntry[] {
  const entries: SearchEntry[] = [];
  const visit = (section: ContentSection, trail: readonly string[]) => {
    const path = [...trail, section.title];
    entries.push({
      id: `section-${section.id}`,
      type: "section",
      title: section.title,
      // Breadcrumb trail makes "vancomycin loading dose"-style deep hits legible.
      subtitle: `${topic.title} — ${path.length > 1 ? path.join(" → ") : section.summary}`,
      href: `/topics/${topic.slug}#${section.id}`,
      contentId: formatContentId("topic", topic.id),
      keywords: kw(topic.title, section.summary.slice(0, 80)),
    });
    section.children?.forEach((child) => visit(child, path));
  };
  topic.sections.forEach((section) => visit(section, []));
  return entries;
}

/**
 * Deep-link anchors on the medication page. These IDs must stay in sync with
 * the `id` attributes rendered by src/app/medications/[slug]/page.tsx.
 */
const MEDICATION_SECTIONS: readonly {
  readonly anchor: string;
  readonly label: string;
  readonly aliases?: string;
}[] = [
  { anchor: "mechanism", label: "Mechanism of Action", aliases: "target pathway receptor" },
  { anchor: "reasoning", label: "ICU Clinical Reasoning", aliases: "when to use indications" },
  { anchor: "dosing", label: "Dosing & Administration", aliases: "loading dose infusion bolus titration rate" },
  { anchor: "organ-dysfunction", label: "Organ Failure Considerations", aliases: "renal hepatic crrt hd adjustment" },
  { anchor: "toxicity", label: "Toxicity & Safety Warnings", aliases: "adverse effects black box" },
  { anchor: "interactions", label: "Drug Interactions", aliases: "interaction contraindication" },
  { anchor: "monitoring", label: "Monitoring & TDM", aliases: "levels trough peak auc therapeutic drug monitoring" },
  { anchor: "evidence", label: "Evidence & Citations", aliases: "guideline trial reference" },
  { anchor: "scenarios", label: "Bedside Scenarios", aliases: "case example" },
  { anchor: "exam-traps", label: "Exam Traps", aliases: "misconception pitfall" },
  { anchor: "physiology", label: "Physiology & Hemodynamics", aliases: "hemodynamic effects" },
];

function collectMedicationSectionEntries(
  med: Medication,
  slugsWithPhysiology: ReadonlySet<string>,
): SearchEntry[] {
  return MEDICATION_SECTIONS
    // The physiology block only renders for medications that have a
    // hemodynamic profile — never emit a deep link to a section that is not
    // on the page.
    .filter((section) => section.anchor !== "physiology" || slugsWithPhysiology.has(med.slug))
    .map((section) => ({
      id: `medsection-${med.slug}-${section.anchor}`,
      type: "section" as const,
      title: section.label,
      subtitle: `${med.name} → ${section.label}`,
      href: `/medications/${med.slug}#${section.anchor}`,
      contentId: formatContentId("medication", med.slug),
      keywords: kw(med.name, med.genericName, section.label, section.aliases),
    }));
}

export function buildSearchIndex(input: SearchIndexInput): readonly SearchEntry[] {
  const searchableTopics = input.topics.filter((topic) => topic.status !== "stub");
  const meds = input.medications ?? [];
  const slugsWithPhysiology = new Set(input.medicationSlugsWithPhysiology ?? []);
  const topicSlugById = new Map(input.topics.map((t) => [t.id, t.slug]));
  const topicTitleById = new Map(input.topics.map((t) => [t.id, t.title]));

  return [
    ...searchableTopics.flatMap(collectSectionEntries),
    ...meds.flatMap((med) => collectMedicationSectionEntries(med, slugsWithPhysiology)),

    ...searchableTopics.map(
      (topic): SearchEntry => ({
        id: `topic-${topic.id}`,
        type: "topic",
        title: topic.title,
        subtitle: clamp(topic.oneLiner),
        href: `/topics/${topic.slug}`,
        contentId: formatContentId("topic", topic.id),
        keywords: kw(topic.category, topic.shortName),
      }),
    ),

    ...input.physiologyConcepts.map(
      (concept): SearchEntry => ({
        id: `physiology-${concept.id}`,
        type: "physiology",
        title: concept.title,
        subtitle: clamp(concept.summary),
        href: `/physiology/${concept.slug}`,
        contentId: formatContentId("physiology", concept.slug),
      }),
    ),

    ...input.pathways.map(
      (pathway): SearchEntry => ({
        id: `pathway-${pathway.id}`,
        type: "pathway",
        title: pathway.title,
        subtitle: clamp(pathway.oneLiner),
        href: `/pathways/${pathway.slug}`,
        contentId: formatContentId("pathway", pathway.slug),
      }),
    ),

    ...input.trials.map(
      (trial): SearchEntry => ({
        id: `trial-${trial.id}`,
        type: "trial",
        title: trial.name,
        subtitle: `${trial.journal}, ${trial.year}`,
        href: `/trials/${trial.id}`,
        contentId: formatContentId("trial", trial.id),
        keywords: kw(trial.title),
      }),
    ),

    ...input.guidelines.map(
      (guideline): SearchEntry => ({
        id: `guideline-${guideline.id}`,
        type: "guideline",
        title: `${guideline.abbreviation} — ${guideline.title}`,
        subtitle: `${guideline.society}, ${guideline.year}`,
        href: `/guidelines/${guideline.id}`,
        contentId: formatContentId("guideline", guideline.id),
        keywords: kw(guideline.society, String(guideline.year)),
      }),
    ),

    ...input.systematicReviews.map(
      (review): SearchEntry => ({
        id: `review-${review.id}`,
        type: "review",
        title: review.title,
        subtitle: `${review.authorsOrGroup}, ${review.year}`,
        href: `/evidence/${review.id}`,
        contentId: formatContentId("systematic-review", review.id),
      }),
    ),

    ...input.calculators.map(
      (calculator): SearchEntry => ({
        id: `calculator-${calculator.id}`,
        type: "calculator",
        title: calculator.title,
        subtitle: clamp(calculator.description),
        href: `/calculators/${calculator.id}`,
        contentId: formatContentId("calculator", calculator.id),
      }),
    ),

    ...input.clinicalProblems.map(
      (problem): SearchEntry => ({
        id: `problem-${problem.id}`,
        type: "problem",
        title: problem.title,
        subtitle: clamp(problem.oneLiner),
        href: `/problems/${problem.slug}`,
        contentId: formatContentId("problem", problem.slug),
      }),
    ),

    ...meds.map(
      (med): SearchEntry => ({
        id: `medication-${med.id}`,
        type: "medication",
        title: `${med.name} (${med.genericName})`,
        subtitle: clamp(`${med.class} — ${med.summary}`),
        href: `/medications/${med.slug}`,
        contentId: formatContentId("medication", med.slug),
        // Brand names are the single highest-value alias source ("lasix").
        keywords: kw(med.brandNames, med.class, med.category, med.subcategory),
      }),
    ),

    ...(input.clinicalCases ?? []).map(
      (kase): SearchEntry => ({
        id: `case-${kase.id}`,
        type: "case",
        title: kase.title,
        subtitle: clamp(kase.subtitle),
        href: `/learn/clinical-reasoning/${kase.slug}`,
        contentId: formatContentId("case", kase.slug),
        keywords: kw(kase.system, kase.tags, kase.difficulty),
      }),
    ),

    ...(input.rapidDecisions ?? []).map(
      (decision): SearchEntry => ({
        id: `rapid-${decision.id}`,
        type: "rapid-decision",
        title: clamp(decision.question, 90),
        subtitle: clamp(decision.vignette, 110),
        href: `/learn/rapid-decisions#${decision.id}`,
        contentId: formatContentId("rapid-decision", decision.id),
        keywords: kw(
          decision.difficulty,
          decision.relatedTopicId ? topicTitleById.get(decision.relatedTopicId) : undefined,
        ),
      }),
    ),

    ...(input.icuErrors ?? []).map(
      (error): SearchEntry => ({
        id: `errorhunt-${error.id}`,
        type: "error-hunt",
        title: error.title,
        subtitle: clamp(error.physiology ?? "Find the ICU error", 110),
        href: `/learn/find-the-error#${error.id}`,
        contentId: formatContentId("error-hunt", error.id),
        keywords: kw(error.difficulty),
      }),
    ),

    ...(input.flashcards ?? []).map((card): SearchEntry => {
      const slug = topicSlugById.get(card.topicId) ?? card.topicId;
      return {
        id: `flashcard-${card.id}`,
        type: "flashcard",
        title: clamp(card.question, 90),
        subtitle: `${topicTitleById.get(card.topicId) ?? "Flashcard"} — flashcard`,
        href: `/flashcards/${slug}`,
        contentId: formatContentId("flashcard", card.id),
      };
    }),

    ...(input.questions ?? []).map((question): SearchEntry => {
      const slug = topicSlugById.get(question.topicId) ?? question.topicId;
      return {
        id: `question-${question.id}`,
        type: "question",
        title: clamp(question.stem, 90),
        subtitle: `${topicTitleById.get(question.topicId) ?? "Question"} — practice question`,
        href: `/questions/${slug}`,
        contentId: formatContentId("question", question.id),
      };
    }),
  ];
}
