import Link from "next/link";
import type { Pathway } from "@/content-types";

interface TopicPathwaysSectionProps {
  readonly pathways: readonly Pathway[];
}

export function TopicPathwaysSection({ pathways }: TopicPathwaysSectionProps) {
  if (pathways.length === 0) return null;

  return (
    <section id="clinical-pathways" className="my-10 rounded-2xl border border-border bg-surface p-6 sm:p-8 scroll-mt-20">
      <div className="flex flex-col gap-1 border-b border-border pb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-accent" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent-strong">
            Structured Decision Sequences
          </span>
        </div>
        <h2 className="text-xl font-bold text-ink sm:text-2xl">
          Clinical Decision Pathways ({pathways.length})
        </h2>
        <p className="text-sm text-ink-muted">
          Step-by-step ICU protocols: Trigger &rarr; Assess &rarr; Decision &rarr; Intervene &rarr; Reassess &rarr; Escalate.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {pathways.map((pathway) => (
          <Link
            key={pathway.id}
            href={`/pathways/${pathway.slug}`}
            className="group flex flex-col justify-between rounded-xl border border-accent/20 bg-accent-soft/20 p-5 transition-all hover:border-accent hover:bg-accent-soft/40 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-block rounded bg-accent/15 px-2.5 py-0.5 text-[11px] font-semibold text-accent-strong">
                  Protocol Workflow
                </span>
                <span className="text-[11px] text-ink-faint">
                  {pathway.startingProblem}
                </span>
              </div>
              <h3 className="mt-3 text-base font-bold text-ink group-hover:text-accent-strong transition-colors">
                {pathway.title}
              </h3>
              <p className="mt-1.5 text-xs text-ink-muted leading-relaxed line-clamp-2">
                {pathway.oneLiner}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-border/60 text-xs font-semibold text-accent flex items-center justify-between">
              <span>Launch Clinical Workflow</span>
              <span aria-hidden>&rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
