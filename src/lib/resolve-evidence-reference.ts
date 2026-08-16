import type { EvidenceCategory, EvidenceRef } from "@/content-types";
import { getGuideline, getSystematicReview, getTrial } from "@/registry";
import { getGuidelineEvidenceCategory, getTrialEvidenceCategory } from "./evidence-style";

export interface ResolvedEvidenceReference {
  readonly title: string;
  readonly meta: string;
  readonly category: EvidenceCategory;
  readonly href: string;
}

/**
 * Resolves a pathway's or physiology concept's EvidenceRef list into real,
 * linkable Trial/Guideline/SystematicReview cards. Shared by both detail
 * pages, which previously duplicated this exact resolution logic.
 */
export function resolveEvidenceReferences(refs: readonly EvidenceRef[] | undefined): readonly ResolvedEvidenceReference[] {
  if (!refs) return [];
  return refs
    .map((ref): ResolvedEvidenceReference | undefined => {
      if (ref.kind === "trial") {
        const trial = getTrial(ref.id);
        if (!trial) return undefined;
        return { title: trial.name, meta: `${trial.journal}, ${trial.year}`, category: getTrialEvidenceCategory(trial), href: `/trials/${trial.id}` };
      }
      if (ref.kind === "guideline") {
        const guideline = getGuideline(ref.id);
        if (!guideline) return undefined;
        return {
          title: `${guideline.abbreviation} — ${guideline.title}`,
          meta: `${guideline.society}, ${guideline.year}`,
          category: getGuidelineEvidenceCategory(guideline),
          href: `/guidelines/${guideline.id}`,
        };
      }
      const review = getSystematicReview(ref.id);
      if (!review) return undefined;
      return { title: review.title, meta: `${review.authorsOrGroup}, ${review.year}`, category: "meta-analysis", href: `/evidence/${review.id}` };
    })
    .filter((ref): ref is ResolvedEvidenceReference => ref !== undefined);
}
