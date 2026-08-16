import Link from "next/link";
import type { ClinicalProblem } from "@/content-types";

interface TopicProblemsSectionProps {
  readonly problems: readonly ClinicalProblem[];
}

export function TopicProblemsSection({ problems }: TopicProblemsSectionProps) {
  if (problems.length === 0) return null;

  return (
    <section id="clinical-problems" className="my-10 rounded-2xl border border-border bg-surface p-6 sm:p-8 scroll-mt-20">
      <div className="flex flex-col gap-1 border-b border-border pb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-amber-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Bedside Patient Presentations
          </span>
        </div>
        <h2 className="text-xl font-bold text-ink sm:text-2xl">
          Clinical Problems Where This Topic is Actionable ({problems.length})
        </h2>
        <p className="text-sm text-ink-muted">
          Start from the patient presentation and determine immediate bedside priorities, differentials, and triggers.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {problems.map((problem) => (
          <Link
            key={problem.id}
            href={`/problems/${problem.slug}`}
            className="group flex flex-col justify-between rounded-xl border border-border bg-surface-elevated p-5 transition-all hover:border-accent hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-block rounded bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                  Bedside Presentation
                </span>
                {problem.category && (
                  <span className="text-[11px] text-ink-faint uppercase tracking-wider">
                    {problem.category.replace("-", " / ")}
                  </span>
                )}
              </div>
              <h3 className="mt-3 text-base font-bold text-ink group-hover:text-accent transition-colors">
                {problem.title}
              </h3>
              <p className="mt-1.5 text-xs text-ink-muted leading-relaxed line-clamp-2">
                {problem.oneLiner}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-border/60 text-xs font-medium text-accent flex items-center justify-between">
              <span>View Bedside Prioritization</span>
              <span aria-hidden>&rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
