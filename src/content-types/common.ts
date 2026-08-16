import { z } from "zod";

export const topicCategorySchema = z.enum([
  "respiratory",
  "cardiovascular",
  "renal",
  "infectious-disease",
  "neurology",
  "hematology",
  "gi-hepatic",
  "procedures",
]);
export type TopicCategory = z.infer<typeof topicCategorySchema>;

/** Globally unique id. Topic ids are flat ("ards"); section ids are dot-scoped ("ards.management.peep"). */
export const nodeIdSchema = z.string().min(1);
export type NodeId = string;

export const topicSlugSchema = z.string().regex(/^[a-z0-9-]+$/);
export type TopicSlug = string;

export const evidenceTierSchema = z.enum([
  "textbook",
  "guideline",
  "trial",
  "systematic-review",
]);
export type EvidenceTier = z.infer<typeof evidenceTierSchema>;

/**
 * Display taxonomy for evidence badges (TrialCard/GuidelineCard/SystematicReviewCard,
 * section-level evidence badges) — distinct from EvidenceTier, which tags
 * *who authored* a section's prose. This tags *what kind of evidence* a
 * badge refers to. Guideline/meta-analysis are implied directly by content
 * type; rct/observational come from Trial.studyType.
 */
export const evidenceCategorySchema = z.enum([
  "guideline",
  "rct",
  "meta-analysis",
  "observational",
  "review",
  "consensus",
]);
export type EvidenceCategory = z.infer<typeof evidenceCategorySchema>;

export const certaintyGradeSchema = z.enum([
  "high",
  "moderate",
  "low",
  "very-low",
]);
export type CertaintyGrade = z.infer<typeof certaintyGradeSchema>;

export const recommendationStrengthSchema = z.enum([
  "strong",
  "conditional",
  "expert-opinion",
]);
export type RecommendationStrength = z.infer<typeof recommendationStrengthSchema>;

export const isoDateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);

/** Difficulty for flashcards and quiz questions. */
export const studyDifficultySchema = z.enum(["basic", "intermediate", "advanced"]);
export type StudyDifficulty = z.infer<typeof studyDifficultySchema>;
