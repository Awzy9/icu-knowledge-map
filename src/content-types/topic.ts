import { z } from "zod";
import {
  evidenceTierSchema,
  isoDateSchema,
  nodeIdSchema,
  topicCategorySchema,
  topicSlugSchema,
} from "./common";
import { evidenceRefSchema, relationshipSchema } from "./relationship";

export const sectionKindSchema = z.enum([
  "overview",
  "definition",
  "physiology",
  "clinical-presentation",
  "diagnosis",
  "severity",
  "differential-diagnosis",
  "management",
  "management-subnode",
  "monitoring",
  "complications",
  "guidelines",
  "landmark-trials",
  "recent-evidence",
  "controversies",
]);
export type SectionKind = z.infer<typeof sectionKindSchema>;

export const contentBlockSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("paragraph"), text: z.string().min(1) }),
  z.object({
    type: z.literal("list"),
    ordered: z.boolean(),
    items: z.array(z.string().min(1)).min(1),
  }),
  z.object({
    type: z.literal("key-value-table"),
    rows: z
      .array(z.object({ label: z.string().min(1), value: z.string().min(1) }))
      .min(1),
  }),
  z.object({
    type: z.literal("callout"),
    tone: z.enum(["guideline", "trial", "caution", "controversy"]),
    text: z.string().min(1),
    evidenceId: z.string().optional(),
  }),
  z.object({
    type: z.literal("calculator-embed"),
    calculatorId: z.string().min(1),
  }),
]);
export type ContentBlock = z.infer<typeof contentBlockSchema>;

// ContentSection is recursive (management -> [peep, prone-positioning, ...]),
// so the schema needs z.lazy + an explicit type to avoid TS "implicitly has type any" on self-reference.
export interface ContentSection {
  readonly id: string;
  readonly kind: SectionKind;
  readonly title: string;
  readonly summary: string;
  readonly body: readonly z.infer<typeof contentBlockSchema>[];
  readonly children?: readonly ContentSection[];
  readonly evidenceRefs?: readonly z.infer<typeof evidenceRefSchema>[];
  readonly relationships?: readonly z.infer<typeof relationshipSchema>[];
  readonly provenance: z.infer<typeof evidenceTierSchema>;
}

export const contentSectionSchema: z.ZodType<ContentSection> = z.lazy(() =>
  z.object({
    id: nodeIdSchema,
    kind: sectionKindSchema,
    title: z.string().min(1),
    summary: z.string().min(1),
    body: z.array(contentBlockSchema).min(1),
    children: z.array(contentSectionSchema).optional(),
    evidenceRefs: z.array(evidenceRefSchema).optional(),
    relationships: z.array(relationshipSchema).optional(),
    provenance: evidenceTierSchema,
  }),
);

/**
 * "stub" — a bare graph node with no content yet (shows "coming soon").
 * "placeholder" — the full canonical section skeleton exists with TODO
 * markers instead of real content, so the structure is visible and
 * navigable but nothing in it should be treated as verified medical fact.
 * "complete" — real, reviewed content.
 */
export const topicStatusSchema = z.enum(["complete", "placeholder", "stub"]);
export type TopicStatus = z.infer<typeof topicStatusSchema>;

/** A foundational (textbook) citation for a topic. `note` is the place to flag anything not yet editorially verified. */
export const foundationSourceSchema = z.object({
  title: z.string().min(1),
  edition: z.string().optional(),
  note: z.string().optional(),
});
export type FoundationSource = z.infer<typeof foundationSourceSchema>;

export const topicSchema = z.object({
  id: nodeIdSchema,
  slug: topicSlugSchema,
  title: z.string().min(1),
  shortName: z.string().optional(),
  category: topicCategorySchema,
  oneLiner: z.string().min(1),
  sections: z.array(contentSectionSchema),
  relationships: z.array(relationshipSchema),
  status: topicStatusSchema,
  lastReviewed: isoDateSchema,
  /** Content revision, independent of lastReviewed. Optional so stub topics (no content yet) don't need one. */
  version: z.string().optional(),
  /** Optional — populate for complete topics; a stub with no content has nothing to cite yet. */
  foundationSources: z.array(foundationSourceSchema).optional(),
  /**
   * A one-line editorial statement of the most recent guideline/evidence
   * cycle this topic has been checked against (e.g. "Current as of the 2017
   * ATS/ESICM/SCCM guideline"). Left unset — not guessed — until an editor
   * has actually performed that check.
   */
  currentStatus: z.string().optional(),
  /** Plain citation strings for material that doesn't fit the Trial/Guideline/SystematicReview entity model. */
  otherReferences: z.array(z.string().min(1)).optional(),
});
export type Topic = z.infer<typeof topicSchema>;
