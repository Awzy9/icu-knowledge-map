import { z } from "zod";
import { isoDateSchema } from "./common";

/* -------------------------------------------------------------------------- */
/*  Evidence Freshness Layer                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Editorial review status.
 *
 * IMPORTANT: this is an AUTHORED field, never inferred from the calendar.
 * A topic does not become "review-due" because a date passed — an editor sets
 * it. Deriving staleness automatically would mislabel content that is still
 * clinically current simply because no new guideline has been issued.
 */
export const evidenceReviewStatusSchema = z.enum([
  "current", // Reviewed, and reflects the current guideline/evidence cycle.
  "review-due", // An editor has flagged that a scheduled review is now due.
  "update-under-review", // New evidence detected; an editor is actively assessing it.
  "outdated-source", // A cited source is known to be superseded. Content needs correction.
]);
export type EvidenceReviewStatus = z.infer<typeof evidenceReviewStatusSchema>;

/** Provenance badge for a cited source. */
export const sourceKindSchema = z.enum([
  "guideline",
  "rct",
  "meta-analysis",
  "consensus",
  "drug-label",
]);
export type SourceKind = z.infer<typeof sourceKindSchema>;

/**
 * Lifecycle of a single piece of newly detected evidence.
 *
 * The workflow is deliberately human-gated:
 *   detected -> review-pending -> (content-changed | no-change-required)
 * Nothing in this system rewrites medical content automatically.
 */
export const evidenceWatchStageSchema = z.enum([
  "detected",
  "review-pending",
  "review-completed",
  "content-changed",
  "no-change-required",
]);
export type EvidenceWatchStage = z.infer<typeof evidenceWatchStageSchema>;

export const evidenceWatchItemSchema = z.object({
  /** Stable id for the watch entry itself. */
  id: z.string().min(1),
  /** What was detected, e.g. "2026 ESC heart failure guideline". */
  title: z.string().min(1),
  kind: sourceKindSchema,
  stage: evidenceWatchStageSchema,
  detectedOn: isoDateSchema,
  /** Set when an editor completes their assessment. */
  reviewedOn: isoDateSchema.optional(),
  /** Editor's note: what changed, or why no change was required. */
  editorNote: z.string().optional(),
  /** Optional link to the source. Omitted rather than guessed. */
  url: z.string().url().optional(),
});
export type EvidenceWatchItem = z.infer<typeof evidenceWatchItemSchema>;

export const evidenceFreshnessSchema = z.object({
  status: evidenceReviewStatusSchema,
  /** Date an editor last medically reviewed this content. */
  lastReviewed: isoDateSchema,
  /**
   * The literature cut-off an editor actually searched to. Distinct from
   * lastReviewed: you can review content without re-running an evidence sweep.
   */
  evidenceCheckedThrough: isoDateSchema.optional(),
  /** Scheduled next review. Advisory only — does not change `status`. */
  nextReviewDue: isoDateSchema.optional(),
  /** The guideline edition this content is written against, e.g. "GINA 2026". */
  guidelineVersion: z.string().optional(),
  /** Newly detected evidence awaiting or having completed human review. */
  watchList: z.array(evidenceWatchItemSchema).optional(),
});
export type EvidenceFreshness = z.infer<typeof evidenceFreshnessSchema>;

/* -------------------------------------------------------------------------- */
/*  Display helpers                                                           */
/* -------------------------------------------------------------------------- */

export const EVIDENCE_STATUS_LABEL: Readonly<Record<EvidenceReviewStatus, string>> = {
  current: "Current",
  "review-due": "Review due",
  "update-under-review": "Update under review",
  "outdated-source": "Outdated source",
};

/**
 * Status styling. Every status pairs a colour with a distinct text label and
 * glyph so it is never communicated by colour alone.
 */
export const EVIDENCE_STATUS_STYLE: Readonly<
  Record<EvidenceReviewStatus, { className: string; glyph: string }>
> = {
  current: {
    className:
      "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25",
    glyph: "✓",
  },
  "review-due": {
    className: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/25",
    glyph: "◷",
  },
  "update-under-review": {
    className: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/25",
    glyph: "⟳",
  },
  "outdated-source": {
    className: "bg-red-500/10 text-red-700 dark:text-red-300 border border-red-500/25",
    glyph: "!",
  },
};

export const SOURCE_KIND_LABEL: Readonly<Record<SourceKind, string>> = {
  guideline: "Guideline",
  rct: "RCT",
  "meta-analysis": "Meta-analysis",
  consensus: "Consensus",
  "drug-label": "Drug label",
};

export const EVIDENCE_WATCH_STAGE_LABEL: Readonly<Record<EvidenceWatchStage, string>> = {
  detected: "Detected",
  "review-pending": "Review pending",
  "review-completed": "Review completed",
  "content-changed": "Content changed",
  "no-change-required": "No change required",
};

/**
 * Builds a freshness record for content that only carries the legacy
 * `lastReviewed` / `currentStatus` fields.
 *
 * Defaults to "current" — the absence of an explicit editorial flag means the
 * content is treated as reviewed-and-current, NOT as stale. Staleness is only
 * ever asserted by an editor.
 */
export function deriveFreshness(input: {
  readonly lastReviewed: string;
  readonly guidelineVersion?: string;
  readonly explicit?: EvidenceFreshness;
}): EvidenceFreshness {
  if (input.explicit) return input.explicit;
  return {
    status: "current",
    lastReviewed: input.lastReviewed,
    guidelineVersion: input.guidelineVersion,
  };
}
