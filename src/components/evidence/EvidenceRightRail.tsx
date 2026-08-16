"use client";

import { getEvidenceForSection, getGuideline, getSystematicReview, getTrial } from "@/registry";
import { useActiveSection } from "@/hooks/useActiveSection";
import { TrialCard } from "./TrialCard";
import { GuidelineCard } from "./GuidelineCard";
import { SystematicReviewCard } from "./SystematicReviewCard";

interface EvidenceRightRailProps {
  readonly sectionIds: readonly string[];
}

/** Section-aware evidence rail — shows what's relevant to whichever section is currently in view. */
export function EvidenceRightRail({ sectionIds }: EvidenceRightRailProps) {
  const activeId = useActiveSection(sectionIds);
  const refs = activeId ? getEvidenceForSection(activeId) : [];

  if (refs.length === 0) {
    return (
      <div className="sticky top-6 rounded-md border border-dashed border-border p-4 text-sm text-ink-faint">
        Evidence relevant to the section you&apos;re reading appears here as you scroll.
      </div>
    );
  }

  return (
    <div className="sticky top-6 flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Relevant evidence</p>
      {refs.map((ref) => {
        if (ref.kind === "trial") {
          const trial = getTrial(ref.id);
          return trial ? <TrialCard key={ref.id} trial={trial} compact /> : null;
        }
        if (ref.kind === "guideline") {
          const guideline = getGuideline(ref.id);
          return guideline ? <GuidelineCard key={ref.id} guideline={guideline} compact /> : null;
        }
        const review = getSystematicReview(ref.id);
        return review ? <SystematicReviewCard key={ref.id} review={review} compact /> : null;
      })}
    </div>
  );
}
