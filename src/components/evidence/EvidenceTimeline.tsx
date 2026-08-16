import Link from "next/link";
import type { Trial } from "@/content-types";

interface EvidenceTimelineProps {
  readonly trials: readonly Trial[];
}

/** Chronological sequence of a topic's cited trials — generic over any topic's trial list (e.g. from getTopicReferences). */
export function EvidenceTimeline({ trials }: EvidenceTimelineProps) {
  if (trials.length === 0) return null;

  const sorted = [...trials].sort((a, b) => a.year - b.year);

  return (
    <details id="evidence-timeline" open className="group scroll-mt-24 border-b border-border py-6 last:border-b-0">
      <summary className="mb-4 flex cursor-pointer list-none items-center gap-3 [&::-webkit-details-marker]:hidden">
        <svg
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5 shrink-0 text-ink-faint transition-transform duration-150 group-open:rotate-180"
          aria-hidden
        >
          <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 className="text-xl font-semibold text-ink">Evidence Timeline</h2>
      </summary>

      <div className="overflow-x-auto pb-2">
        <div className="relative flex min-w-max gap-6 pt-2">
          <div className="absolute left-0 right-0 top-[27px] h-px bg-border" aria-hidden />
          {sorted.map((trial) => (
            <Link
              key={trial.id}
              href={`/trials/${trial.id}`}
              className="group/item relative z-10 flex w-28 shrink-0 flex-col items-center gap-1.5 text-center"
            >
              <span className="text-xs font-semibold text-ink-faint">{trial.year}</span>
              <span className="h-2.5 w-2.5 rounded-full border-2 border-accent bg-canvas" aria-hidden />
              <span className="text-xs font-medium text-ink transition-colors group-hover/item:text-accent">
                {trial.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}
