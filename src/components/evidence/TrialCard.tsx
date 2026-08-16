import Link from "next/link";
import type { Trial, TrialResultDirection } from "@/content-types";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/cn";
import { EvidenceBadge } from "./EvidenceBadge";
import { CertaintyIndicator } from "./CertaintyIndicator";
import { getTrialEvidenceCategory, resultDirectionLabel, significanceLabel } from "@/lib/evidence-style";

const resultDirectionClass: Record<TrialResultDirection, string> = {
  positive: "border-green-300 bg-green-50 text-green-900 dark:border-green-800/60 dark:bg-green-950/40 dark:text-green-300",
  "negative-neutral": "border-slate-300 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300",
  contradictory: "border-orange-300 bg-orange-50 text-orange-900 dark:border-orange-800/60 dark:bg-orange-950/40 dark:text-orange-300",
};

interface TrialCardProps {
  readonly trial: Trial;
  readonly compact?: boolean;
}

export function TrialCard({ trial, compact = false }: TrialCardProps) {
  const category = getTrialEvidenceCategory(trial);

  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <Link href={`/trials/${trial.id}`} className="text-sm font-semibold text-ink hover:text-accent">
            {trial.name}
          </Link>
          <p className="text-xs text-ink-muted">
            {trial.journal}, {trial.year}
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1.5">
          <div className="flex items-center gap-2">
            {trial.significance && <Tag>{significanceLabel[trial.significance]}</Tag>}
            <EvidenceBadge category={category} />
          </div>
          {trial.resultDirection && (
            <span
              className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
                resultDirectionClass[trial.resultDirection],
              )}
            >
              {resultDirectionLabel[trial.resultDirection]}
            </span>
          )}
        </div>
      </div>

      {!compact && (
        <>
          {trial.clinicalQuestion && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Clinical question</p>
              <p className="text-sm leading-relaxed text-ink">{trial.clinicalQuestion}</p>
            </div>
          )}

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">What the trial found</p>
            <p className="text-sm leading-relaxed text-ink">{trial.whatItFound}</p>
          </div>

          {trial.currentGuidelinePosition && (
            <div className="rounded-md border border-border bg-surface-sunken p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Current guideline position</p>
              <p className="mt-1 text-sm leading-relaxed text-ink">{trial.currentGuidelinePosition}</p>
            </div>
          )}

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Clinical interpretation</p>
            <p className="text-sm leading-relaxed text-ink">{trial.clinicalInterpretation}</p>
          </div>
        </>
      )}

      {trial.certainty && <CertaintyIndicator certainty={trial.certainty} />}
    </Card>
  );
}
