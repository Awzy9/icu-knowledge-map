import type { EvidenceCategory } from "@/content-types";
import { Badge } from "@/components/ui/Badge";
import { evidenceCategoryStyle } from "@/lib/evidence-style";

export function EvidenceBadge({ category }: { readonly category: EvidenceCategory }) {
  const style = evidenceCategoryStyle[category];
  return <Badge className={style.badgeClass}>{style.label}</Badge>;
}
