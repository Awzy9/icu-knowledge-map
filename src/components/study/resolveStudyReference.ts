import type { StudyReference } from "@/content-types";
import { getGuideline, getSystematicReview, getTrial } from "@/registry";

export interface ResolvedStudyReference {
  readonly text: string;
  readonly href?: string;
}

/** A study reference is either a real registered trial/guideline/review, or a plain citation string — resolve either into display text plus an optional link. */
export function resolveStudyReference(reference: StudyReference): ResolvedStudyReference {
  if (typeof reference === "string") return { text: reference };

  if (reference.kind === "trial") {
    const trial = getTrial(reference.id);
    return trial ? { text: trial.name, href: `/trials/${trial.id}` } : { text: reference.id };
  }
  if (reference.kind === "guideline") {
    const guideline = getGuideline(reference.id);
    return guideline
      ? { text: `${guideline.abbreviation} — ${guideline.title}`, href: `/guidelines/${guideline.id}` }
      : { text: reference.id };
  }
  const review = getSystematicReview(reference.id);
  return review ? { text: review.title, href: `/evidence/${review.id}` } : { text: reference.id };
}
