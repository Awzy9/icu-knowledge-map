import {
  EVIDENCE_STATUS_LABEL,
  EVIDENCE_STATUS_STYLE,
  EVIDENCE_WATCH_STAGE_LABEL,
  SOURCE_KIND_LABEL,
  type EvidenceFreshness,
} from "@/content-types/evidence-freshness";
import { cn } from "@/lib/cn";

interface EvidenceFreshnessPanelProps {
  readonly freshness: EvidenceFreshness;
  /** Optional editorial one-liner already stored on the topic (`currentStatus`). */
  readonly currentStatusNote?: string;
  readonly className?: string;
}

function formatMonthYear(iso: string): string {
  // Parse as a plain date so a UTC timestamp can't shift the month backwards
  // in negative-offset timezones.
  const [year, month, day] = iso.split("-").map(Number);
  if (!year || !month || !day) return iso;
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/**
 * Displays review provenance for a topic or medication WITHOUT modifying any
 * medical content. Status is whatever an editor authored — this component
 * never infers staleness from the current date.
 */
export function EvidenceFreshnessPanel({
  freshness,
  currentStatusNote,
  className,
}: EvidenceFreshnessPanelProps) {
  const style = EVIDENCE_STATUS_STYLE[freshness.status];
  const openWatchItems = (freshness.watchList ?? []).filter(
    (item) => item.stage === "detected" || item.stage === "review-pending",
  );

  return (
    <section
      aria-labelledby="evidence-freshness-heading"
      className={cn("rounded-xl border border-border bg-surface p-4 sm:p-5", className)}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 id="evidence-freshness-heading" className="text-sm font-semibold text-ink">
          Evidence status
        </h2>
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
            style.className,
          )}
        >
          <span aria-hidden>{style.glyph}</span>
          {EVIDENCE_STATUS_LABEL[freshness.status]}
        </span>
      </div>

      <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-xs font-medium uppercase tracking-wide text-ink-faint">Last reviewed</dt>
          <dd className="mt-0.5 text-ink">{formatMonthYear(freshness.lastReviewed)}</dd>
        </div>

        {freshness.evidenceCheckedThrough && (
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-ink-faint">
              Evidence checked through
            </dt>
            <dd className="mt-0.5 text-ink">{formatMonthYear(freshness.evidenceCheckedThrough)}</dd>
          </div>
        )}

        {freshness.guidelineVersion && (
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-ink-faint">Key guideline</dt>
            <dd className="mt-0.5 text-ink">{freshness.guidelineVersion}</dd>
          </div>
        )}

        {freshness.nextReviewDue && (
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-ink-faint">Next review</dt>
            <dd className="mt-0.5 text-ink">{formatMonthYear(freshness.nextReviewDue)}</dd>
          </div>
        )}
      </dl>

      {currentStatusNote && (
        <p className="mt-4 border-t border-border pt-3 text-xs leading-relaxed text-ink-muted">
          {currentStatusNote}
        </p>
      )}

      {openWatchItems.length > 0 && (
        <div className="mt-4 border-t border-border pt-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
            New evidence under editorial review
          </p>
          <ul className="mt-2 space-y-2">
            {openWatchItems.map((item) => (
              <li key={item.id} className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-xs">
                <span className="rounded border border-border bg-surface-muted px-1.5 py-0.5 font-medium text-ink-muted">
                  {SOURCE_KIND_LABEL[item.kind]}
                </span>
                <span className="text-ink">{item.title}</span>
                <span className="text-ink-faint">— {EVIDENCE_WATCH_STAGE_LABEL[item.stage]}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-[11px] leading-relaxed text-ink-faint">
            Detected evidence is reviewed by an editor before any content changes. The guidance above is unchanged
            until that review completes.
          </p>
        </div>
      )}
    </section>
  );
}
