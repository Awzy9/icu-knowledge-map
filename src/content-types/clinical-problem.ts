import { z } from "zod";
import { nodeIdSchema } from "./common";
import { contentBlockSchema } from "./topic";

/**
 * A presentation-first entry point (e.g. "Refractory Hypoxemia") — distinct
 * from Topics (disease/concept-centric). Like Pathways, a problem is a thin
 * framework that references existing topic/section nodes rather than
 * duplicating their content.
 */
export const clinicalProblemCategorySchema = z.enum([
  "respiratory",
  "hemodynamic",
  "neurologic",
  "renal-metabolic",
  "infectious",
  "hematology-gi",
]);
export type ClinicalProblemCategory = z.infer<typeof clinicalProblemCategorySchema>;

export const clinicalProblemSchema = z.object({
  id: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  category: clinicalProblemCategorySchema.optional(),
  oneLiner: z.string().min(1),
  body: z.array(contentBlockSchema).min(1),
  relatedTopicIds: z.array(nodeIdSchema).min(1),
});
export type ClinicalProblem = z.infer<typeof clinicalProblemSchema>;
