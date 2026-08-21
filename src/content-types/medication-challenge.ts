import { z } from "zod";
import { nodeIdSchema } from "./common";
import { studyReferenceSchema } from "./relationship";

/* -------------------------------------------------------------------------- */
/*  Challenge types                                                          */
/* -------------------------------------------------------------------------- */

export const challengeTypeSchema = z.enum([
  "best-drug",
  "avoid-drug",
  "dose-change",
  "toxicity",
  "organ-failure",
  "interaction",
  "narrow-spectrum",
  "no-coverage",
  "fits-physiology",
]);
export type ChallengeType = z.infer<typeof challengeTypeSchema>;

/* -------------------------------------------------------------------------- */
/*  Challenge difficulty — reuses the case difficulty vocabulary              */
/* -------------------------------------------------------------------------- */

export const challengeDifficultySchema = z.enum(["foundation", "intermediate", "advanced"]);
export type ChallengeDifficulty = z.infer<typeof challengeDifficultySchema>;

/* -------------------------------------------------------------------------- */
/*  Why-not entry for each distractor                                        */
/* -------------------------------------------------------------------------- */

export const whyNotEntrySchema = z.object({
  optionId: z.string().min(1),
  drug: z.string().min(1),
  reasoning: z.string().min(1),
});
export type WhyNotEntry = z.infer<typeof whyNotEntrySchema>;

/* -------------------------------------------------------------------------- */
/*  Challenge option                                                         */
/* -------------------------------------------------------------------------- */

export const challengeOptionSchema = z.object({
  id: z.string().min(1),
  text: z.string().min(1),
  isCorrect: z.boolean(),
});
export type ChallengeOption = z.infer<typeof challengeOptionSchema>;

/* -------------------------------------------------------------------------- */
/*  Medication challenge — the top-level entity                              */
/* -------------------------------------------------------------------------- */

export const medicationChallengeSchema = z.object({
  id: z.string().min(1),
  challengeType: challengeTypeSchema,
  difficulty: challengeDifficultySchema,
  system: z.string().min(1),
  stem: z.string().min(1),
  options: z.array(challengeOptionSchema).min(2),
  explanation: z.string().min(1),
  whyNotAlternatives: z.array(whyNotEntrySchema),
  relatedMedicationSlugs: z.array(z.string()),
  relatedTopicIds: z.array(nodeIdSchema),
  tags: z.array(z.string().min(1)),
  references: z.array(studyReferenceSchema).min(1),
});
export type MedicationChallenge = z.infer<typeof medicationChallengeSchema>;
