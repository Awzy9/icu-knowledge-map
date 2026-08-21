import { z } from "zod";
import { nodeIdSchema } from "./common";
import { studyReferenceSchema } from "./relationship";

/* -------------------------------------------------------------------------- */
/*  Difficulty for clinical reasoning cases                                   */
/* -------------------------------------------------------------------------- */

export const caseDifficultySchema = z.enum(["foundation", "intermediate", "advanced"]);
export type CaseDifficulty = z.infer<typeof caseDifficultySchema>;

/* -------------------------------------------------------------------------- */
/*  Hemodynamic direction arrows used in physiology snapshots                 */
/* -------------------------------------------------------------------------- */

export const directionSchema = z.enum([
  "up",       // ↑
  "up-up",    // ↑↑
  "down",     // ↓
  "down-down",// ↓↓
  "neutral",  // ↔
  "variable", // ↑↓
]);
export type Direction = z.infer<typeof directionSchema>;

export const physiologySnapshotSchema = z.object({
  svr: directionSchema.optional(),
  hr: directionSchema.optional(),
  contractility: directionSchema.optional(),
  preload: directionSchema.optional(),
  afterload: directionSchema.optional(),
  co: directionSchema.optional(),
  map: directionSchema.optional(),
  pvr: directionSchema.optional(),
  venousReturn: directionSchema.optional(),
  myocardialO2Demand: directionSchema.optional(),
});
export type PhysiologySnapshot = z.infer<typeof physiologySnapshotSchema>;

/* -------------------------------------------------------------------------- */
/*  Outcome classification for clinical decisions                             */
/* -------------------------------------------------------------------------- */

export const outcomeClassificationSchema = z.enum([
  "appropriate",           // Best initial/sequential choice
  "reasonable-alternative", // Clinically viable, but slightly inferior or second-line
  "suboptimal",            // Inefficient, delays optimal therapy, or causes mild adverse effect
  "potentially-harmful",   // Directly worsens pathophysiology or causes hemodynamic decline
]);
export type OutcomeClassification = z.infer<typeof outcomeClassificationSchema>;

export const optionOutcomeSchema = z.object({
  classification: outcomeClassificationSchema,
  immediateEffects: z.array(z.string().min(1)).optional(),
  physiologyDelta: physiologySnapshotSchema.optional(),
  clinicalResponse: z.string().min(1).optional(),
  explanation: z.string().optional(),
  nextStepId: z.string().optional(), // For light branching
});
export type OptionOutcome = z.infer<typeof optionOutcomeSchema>;

/* -------------------------------------------------------------------------- */
/*  Case option — a single answer choice within a step                       */
/* -------------------------------------------------------------------------- */

export const caseOptionSchema = z.object({
  id: z.string().min(1),
  text: z.string().min(1),
  isCorrect: z.boolean(),
  explanation: z.string().min(1),
  whyNot: z.string().optional(),
  physiologicReasoning: z.string().optional(),
  outcome: optionOutcomeSchema.optional(),
  nextStepId: z.string().optional(), // For light branching
});
export type CaseOption = z.infer<typeof caseOptionSchema>;

/* -------------------------------------------------------------------------- */
/*  Case step — one sequential decision point in the case                    */
/* -------------------------------------------------------------------------- */

export const caseStepSchema = z.object({
  id: z.string().min(1),
  prompt: z.string().min(1),
  question: z.string().min(1),
  vitalsUpdate: z.record(z.string(), z.string()).optional(),
  newInformation: z.array(z.string().min(1)).optional(),
  options: z.array(caseOptionSchema).min(2),
  physiologyDisplay: physiologySnapshotSchema.optional(),
  isBranchStep: z.boolean().optional(),
  parentDecisionRef: z.string().optional(),
});
export type CaseStep = z.infer<typeof caseStepSchema>;

/* -------------------------------------------------------------------------- */
/*  Initial patient presentation                                             */
/* -------------------------------------------------------------------------- */

export const caseInitialPresentationSchema = z.object({
  history: z.string().min(1),
  vitals: z.record(z.string(), z.string()),
  keyFindings: z.array(z.string().min(1)).min(1),
});
export type CaseInitialPresentation = z.infer<typeof caseInitialPresentationSchema>;

/* -------------------------------------------------------------------------- */
/*  Clinical reasoning case — the top-level entity                           */
/* -------------------------------------------------------------------------- */

export const clinicalCaseSchema = z.object({
  id: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  subtitle: z.string().min(1),
  difficulty: caseDifficultySchema,
  system: z.string().min(1),
  tags: z.array(z.string().min(1)),
  objectives: z.array(z.string().min(1)).min(1),
  initialPresentation: caseInitialPresentationSchema,
  steps: z.array(caseStepSchema).min(1),
  relatedMedicationSlugs: z.array(z.string()),
  relatedTopicIds: z.array(nodeIdSchema),
  relatedPathwaySlugs: z.array(z.string()),
  relatedProblemSlugs: z.array(z.string()),
  references: z.array(studyReferenceSchema).min(1),
});
export type ClinicalCase = z.infer<typeof clinicalCaseSchema>;
