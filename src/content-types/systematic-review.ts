import { z } from "zod";
import { certaintyGradeSchema, nodeIdSchema } from "./common";

export const systematicReviewSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  year: z.number().int().min(1900).max(2100),
  authorsOrGroup: z.string().min(1),
  doi: z.string().optional(),
  pmid: z.string().optional(),
  studiesIncluded: z.number().int().positive(),
  summary: z.string().min(1),
  conclusion: z.string().min(1),
  certainty: certaintyGradeSchema,
  relatedTopicIds: z.array(nodeIdSchema).min(1),
});
export type SystematicReview = z.infer<typeof systematicReviewSchema>;
