import Link from "next/link";
import type { SystematicReview } from "@/content-types";
import { Card } from "@/components/ui/Card";
import { EvidenceBadge } from "./EvidenceBadge";
import { CertaintyIndicator } from "./CertaintyIndicator";

interface SystematicReviewCardProps {
  readonly review: SystematicReview;
  readonly compact?: boolean;
}

export function SystematicReviewCard({ review, compact = false }: SystematicReviewCardProps) {
  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <Link href={`/evidence/${review.id}`} className="text-sm font-semibold text-ink hover:text-accent">
            {review.title}
          </Link>
          <p className="text-xs text-ink-muted">
            {review.authorsOrGroup}, {review.year} · {review.studiesIncluded} studies
          </p>
        </div>
        <EvidenceBadge category="meta-analysis" />
      </div>

      {!compact && <p className="text-sm leading-relaxed text-ink">{review.conclusion}</p>}

      <CertaintyIndicator certainty={review.certainty} />
    </Card>
  );
}
