import type { GuidelineStatus } from "@/content-types";
import { cn } from "@/lib/cn";

const statusClass: Record<GuidelineStatus, string> = {
  current: "border-green-300 bg-green-50 text-green-900 dark:border-green-800/60 dark:bg-green-950/40 dark:text-green-300",
  historical: "border-slate-300 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300",
  superseded: "border-orange-300 bg-orange-50 text-orange-900 dark:border-orange-800/60 dark:bg-orange-950/40 dark:text-orange-300",
  "public-review-draft": "border-dashed border-indigo-300 bg-indigo-50 text-indigo-900 dark:border-indigo-800/60 dark:bg-indigo-950/40 dark:text-indigo-300",
};

const statusLabel: Record<GuidelineStatus, string> = {
  current: "Current",
  historical: "Historical / Foundational",
  superseded: "Superseded",
  "public-review-draft": "Public Review Draft",
};

/**
 * Distinct from EvidenceBadge (which tags the *kind* of evidence — guideline
 * vs RCT vs meta-analysis). This tags a guideline's *standing* — whether it's
 * the current word, an older-but-not-replaced document, formally replaced,
 * or not yet finalized. Never let "published" or "complete" imply "current".
 */
export function GuidelineStatusBadge({ status }: { readonly status: GuidelineStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        statusClass[status],
      )}
    >
      {statusLabel[status]}
    </span>
  );
}
