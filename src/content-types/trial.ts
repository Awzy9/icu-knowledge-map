import { z } from "zod";
import { certaintyGradeSchema, nodeIdSchema } from "./common";

export const trialResultSchema = z.object({
  summary: z.string().min(1),
  effectSize: z.string().optional(),
  pValue: z.string().optional(),
});

export const trialStudyTypeSchema = z.enum(["rct", "observational"]);
export type TrialStudyType = z.infer<typeof trialStudyTypeSchema>;

/** Editorial judgment of a trial's standing, not derived from year alone — drives the Landmark/Recent filter and the topic timeline. */
export const trialSignificanceSchema = z.enum(["landmark", "recent"]);
export type TrialSignificance = z.infer<typeof trialSignificanceSchema>;

/** Drives the Positive / Negative-neutral / Contradictory Evidence Explorer filter. */
export const trialResultDirectionSchema = z.enum(["positive", "negative-neutral", "contradictory"]);
export type TrialResultDirection = z.infer<typeof trialResultDirectionSchema>;

/**
 * Three concepts that must never be merged (enforced by every trial-showing
 * UI, not just this schema):
 * - `whatItFound`: the trial's own, objective, trial-scoped claim.
 * - `currentGuidelinePosition`: what current guidelines say now — separate,
 *   because a positive trial does not by itself mean an intervention should
 *   be universally applied, and guideline position can move independently.
 * - `clinicalInterpretation`: how the field/site reads the finding today.
 */
export const trialSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  /** Full publication title — `name` remains the short/informal name (e.g. "PROSEVA"). */
  title: z.string().optional(),
  year: z.number().int().min(1900).max(2100),
  journal: z.string().min(1),
  doi: z.string().optional(),
  pmid: z.string().optional(),
  /** Drives which evidence-category badge the trial gets (rct vs observational). Defaults to "rct" if omitted. */
  studyType: trialStudyTypeSchema.optional(),
  significance: trialSignificanceSchema.optional(),
  design: z.string().min(1),
  /** Plain-language framing of the question the trial was asking. */
  clinicalQuestion: z.string().optional(),
  population: z.string().min(1),
  inclusionCriteria: z.array(z.string().min(1)).optional(),
  intervention: z.string().min(1),
  /** What the control/comparator arm received — kept separate from `intervention` rather than one combined string. */
  comparator: z.string().optional(),
  primaryOutcome: z.string().min(1),
  secondaryOutcomes: z.array(z.string().min(1)).optional(),
  result: trialResultSchema,
  resultDirection: trialResultDirectionSchema.optional(),
  whatItFound: z.string().min(1),
  clinicalInterpretation: z.string().min(1),
  /** What current guidelines say now — distinct from both of the above. */
  currentGuidelinePosition: z.string().optional(),
  limitations: z.array(z.string().min(1)).optional(),
  relatedTopicIds: z.array(nodeIdSchema).min(1),
  certainty: certaintyGradeSchema.optional(),
});
export type Trial = z.infer<typeof trialSchema>;
