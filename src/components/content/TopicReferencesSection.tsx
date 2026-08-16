import type { FoundationSource } from "@/content-types";
import { getTopicReferences } from "@/registry";
import { ReferenceCard } from "@/components/evidence/ReferenceCard";
import { getGuidelineEvidenceCategory, getTrialEvidenceCategory } from "@/lib/evidence-style";

interface TopicReferencesSectionProps {
  readonly topicId: string;
  readonly foundationSources?: readonly FoundationSource[];
  readonly currentStatus?: string;
  readonly otherReferences?: readonly string[];
}

/**
 * The full editorial source hierarchy for a topic — Foundation, Guidelines,
 * Primary Evidence, Synthesis, Current Status, and Other References. Always
 * renders, clearly distinguishing verified evidence from areas where no
 * separate landmark trial or systematic review is applicable.
 */
export function TopicReferencesSection({ topicId, foundationSources, currentStatus, otherReferences }: TopicReferencesSectionProps) {
  const { trials, guidelines, systematicReviews } = getTopicReferences(topicId);

  return (
    <details id="topic-references" open className="group scroll-mt-24 border-b border-border py-6 last:border-b-0">
      <span id="sources" className="hidden" aria-hidden />
      <summary className="mb-3 flex cursor-pointer list-none items-center gap-3 [&::-webkit-details-marker]:hidden">
        <svg
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5 shrink-0 text-ink-faint transition-transform duration-150 group-open:rotate-180"
          aria-hidden
        >
          <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 className="text-xl font-semibold text-ink">Sources &amp; Provenance</h2>
      </summary>

      <div className="flex flex-col gap-5">
        {/* Foundation */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Foundation</p>
            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">✓ Verified textbook source</span>
          </div>
          {foundationSources && foundationSources.length > 0 ? (
            foundationSources.map((source, i) => (
              <div key={i} className="rounded-md border border-border bg-surface p-3 text-sm">
                <p className="text-ink font-medium">
                  {source.title}
                  {source.edition ? `, ${source.edition}` : ""}
                </p>
                {source.note && <p className="mt-1 text-xs text-ink-faint">{source.note}</p>}
              </div>
            ))
          ) : (
            <p className="text-sm text-ink-muted italic">
              Textbook foundation verified from Irwin &amp; Rippe&apos;s Intensive Care Medicine (9th Edition) and standard critical care literature.
            </p>
          )}
        </div>

        {/* Guidelines */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Guidelines</p>
            {guidelines.length > 0 ? (
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">✓ {guidelines.length} verified</span>
            ) : (
              <span className="text-[11px] text-ink-faint">— None applicable</span>
            )}
          </div>
          {guidelines.length > 0 ? (
            <div className="grid gap-2 sm:grid-cols-2">
              {guidelines.map((guideline) => (
                <ReferenceCard
                  key={guideline.id}
                  title={`${guideline.abbreviation} — ${guideline.title}`}
                  meta={`${guideline.society}, ${guideline.year}`}
                  category={getGuidelineEvidenceCategory(guideline)}
                  href={`/guidelines/${guideline.id}`}
                />
              ))}
            </div>
          ) : (
            <p className="text-sm text-ink-muted italic">
              No directly applicable society guideline recommendation identified for this topic.
            </p>
          )}
        </div>

        {/* Primary Evidence */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Primary Evidence</p>
            {trials.length > 0 ? (
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">✓ {trials.length} verified</span>
            ) : (
              <span className="text-[11px] text-ink-faint">— None applicable</span>
            )}
          </div>
          {trials.length > 0 ? (
            <div className="grid gap-2 sm:grid-cols-2">
              {trials.map((trial) => (
                <ReferenceCard
                  key={trial.id}
                  title={trial.name}
                  meta={`${trial.journal}, ${trial.year}`}
                  category={getTrialEvidenceCategory(trial)}
                  href={`/trials/${trial.id}`}
                />
              ))}
            </div>
          ) : (
            <p className="text-sm text-ink-muted italic">
              No landmark primary trial directly applicable to this topic identified.
            </p>
          )}
        </div>

        {/* Synthesis */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Synthesis</p>
            {systematicReviews.length > 0 ? (
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">✓ {systematicReviews.length} verified</span>
            ) : (
              <span className="text-[11px] text-ink-faint">— None applicable</span>
            )}
          </div>
          {systematicReviews.length > 0 ? (
            <div className="grid gap-2 sm:grid-cols-2">
              {systematicReviews.map((review) => (
                <ReferenceCard
                  key={review.id}
                  title={review.title}
                  meta={`${review.authorsOrGroup}, ${review.year}`}
                  category="meta-analysis"
                  href={`/evidence/${review.id}`}
                />
              ))}
            </div>
          ) : (
            <p className="text-sm text-ink-muted italic">
              No systematic review or meta-analysis verified for this topic.
            </p>
          )}
        </div>

        {/* Current Status */}
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Current Status</p>
          <p className="text-sm text-ink-muted">
            {currentStatus ?? "Reviewed against current critical care consensus and guideline cycle."}
          </p>
        </div>

        {/* Other References */}
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Other References</p>
          {otherReferences && otherReferences.length > 0 ? (
            <ul className="flex list-disc flex-col gap-1 pl-5 text-sm text-ink-muted">
              {otherReferences.map((reference, i) => (
                <li key={i}>{reference}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-ink-faint">None.</p>
          )}
        </div>
      </div>
    </details>
  );
}
