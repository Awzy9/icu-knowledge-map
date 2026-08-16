import { z } from "zod";
import {
  certaintyGradeSchema,
  nodeIdSchema,
  recommendationStrengthSchema,
} from "./common";

/**
 * "current" — the latest formally issued/published version of this guideline.
 * "historical" — an older but not formally superseded document; still foundational
 * or widely cited, but not the newest guidance available.
 * "superseded" — explicitly replaced by a newer guideline (see the newer entry's
 * `supersedes` field, which points back to this one's `id`).
 * "public-review-draft" — not yet finalized; under public/stakeholder review.
 * Must never be presented to users as equivalent to a final, current guideline.
 */
export const guidelineStatusSchema = z.enum([
  "current",
  "historical",
  "superseded",
  "public-review-draft",
]);
export type GuidelineStatus = z.infer<typeof guidelineStatusSchema>;

/** Paraphrased recommendation text only — link out to the source, never reproduce full guideline text. */
export const guidelineSchema = z.object({
  id: z.string().min(1),
  society: z.string().min(1),
  abbreviation: z.string().min(1),
  title: z.string().min(1),
  year: z.number().int().min(1900).max(2100),
  url: z.string().url().optional(),
  recommendationText: z.string().min(1),
  strength: recommendationStrengthSchema,
  certainty: certaintyGradeSchema,
  status: guidelineStatusSchema,
  relatedTopicIds: z.array(nodeIdSchema).min(1),
  /** id of the older Guideline entry this one formally replaces, if any. */
  supersedes: z.string().optional(),
});
export type Guideline = z.infer<typeof guidelineSchema>;
