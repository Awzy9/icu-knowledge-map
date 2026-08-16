import Link from "next/link";
import type { Guideline } from "@/content-types";
import { Card } from "@/components/ui/Card";
import { EvidenceBadge } from "./EvidenceBadge";
import { GuidelineStatusBadge } from "./GuidelineStatusBadge";
import { CertaintyIndicator } from "./CertaintyIndicator";
import { getGuidelineEvidenceCategory, recommendationStrengthLabel } from "@/lib/evidence-style";

interface GuidelineCardProps {
  readonly guideline: Guideline;
  readonly compact?: boolean;
}

export function GuidelineCard({ guideline, compact = false }: GuidelineCardProps) {
  const category = getGuidelineEvidenceCategory(guideline);

  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <Link href={`/guidelines/${guideline.id}`} className="text-sm font-semibold text-ink hover:text-accent">
            {guideline.abbreviation} — {guideline.title}
          </Link>
          <p className="text-xs text-ink-muted">
            {guideline.society}, {guideline.year}
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1.5">
          <EvidenceBadge category={category} />
          <GuidelineStatusBadge status={guideline.status} />
        </div>
      </div>

      {!compact && <p className="text-sm leading-relaxed text-ink">{guideline.recommendationText}</p>}

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs text-ink-muted">{recommendationStrengthLabel[guideline.strength]}</span>
        <CertaintyIndicator certainty={guideline.certainty} />
      </div>
    </Card>
  );
}
