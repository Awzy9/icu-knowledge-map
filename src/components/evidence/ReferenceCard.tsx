import Link from "next/link";
import type { EvidenceCategory } from "@/content-types";
import { Card } from "@/components/ui/Card";
import { EvidenceBadge } from "./EvidenceBadge";

interface ReferenceCardProps {
  readonly title: string;
  readonly meta: string;
  readonly category: EvidenceCategory;
  readonly href: string;
}

export function ReferenceCard({ title, meta, category, href }: ReferenceCardProps) {
  return (
    <Link href={href} className="block">
      <Card className="flex items-start justify-between gap-3 transition-colors hover:border-border-strong">
        <div>
          <p className="text-sm font-medium text-ink">{title}</p>
          <p className="mt-0.5 text-xs text-ink-muted">{meta}</p>
        </div>
        <EvidenceBadge category={category} />
      </Card>
    </Link>
  );
}
