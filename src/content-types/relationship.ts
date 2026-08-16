import { z } from "zod";
import { nodeIdSchema } from "./common";

export const relationshipTypeSchema = z.enum([
  "related-to",
  "treated-with",
  "complication",
  "physiology",
  "evidence",
  "guideline",
  "differential",
  "prerequisite",
]);
export type RelationshipType = z.infer<typeof relationshipTypeSchema>;

export const relationshipSchema = z.object({
  type: relationshipTypeSchema,
  targetId: nodeIdSchema,
  label: z.string().optional(),
  weight: z.number().positive().optional(),
});
export type Relationship = z.infer<typeof relationshipSchema>;

export const evidenceRefKindSchema = z.enum([
  "trial",
  "guideline",
  "systematic-review",
]);
export type EvidenceRefKind = z.infer<typeof evidenceRefKindSchema>;

/** Attaches an evidence item to a specific content section, with a note on why it's relevant there. */
export const evidenceRefSchema = z.object({
  kind: evidenceRefKindSchema,
  id: z.string().min(1),
  relevance: z.string().min(1),
});
export type EvidenceRef = z.infer<typeof evidenceRefSchema>;

/**
 * A flashcard/question reference — either a link to a real registered
 * trial/guideline/systematic-review (evidenceRefSchema), or a plain citation
 * string for foundational material that isn't tied to one specific
 * registered entity (e.g. "Berlin Definition, JAMA 2012"). Every flashcard
 * and question requires at least one, but not every one has a specific
 * trial to cite — this avoids fabricating one just to fill the field.
 */
export const studyReferenceSchema = z.union([evidenceRefSchema, z.string().min(1)]);
export type StudyReference = z.infer<typeof studyReferenceSchema>;
