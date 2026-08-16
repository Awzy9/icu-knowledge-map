import Link from "next/link";
import type { ClinicalProblem, Pathway, Calculator, Topic } from "@/content-types";

interface WhatNextNavProps {
  readonly currentTopic: Topic;
  readonly problems?: readonly ClinicalProblem[];
  readonly pathways?: readonly Pathway[];
  readonly calculators?: readonly Calculator[];
  readonly nextTopic?: Topic;
}

export function WhatNextNav({
  currentTopic,
  problems = [],
  pathways = [],
  calculators = [],
  nextTopic,
}: WhatNextNavProps) {
  return (
    <section className="my-12 rounded-2xl border border-border/80 bg-surface-muted/30 p-6 sm:p-8">
      <div className="flex items-center gap-2 pb-3 border-b border-border/60">
        <span className="flex h-2 w-2 rounded-full bg-accent" />
        <h2 className="text-xs font-bold uppercase tracking-wider text-ink-faint">
          What Next? — Continue Your Clinical Workflow
        </h2>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Step 1: Decision Pathway */}
        {pathways.length > 0 ? (
          <Link
            href={`/pathways/${pathways[0].slug}`}
            className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-4 transition-all hover:border-accent hover:shadow-xs"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
                Decision Protocol
              </span>
              <h3 className="mt-1 text-sm font-semibold text-ink group-hover:text-accent transition-colors">
                {pathways[0].title}
              </h3>
              <p className="mt-1 text-xs text-ink-muted line-clamp-2 leading-relaxed">
                {pathways[0].oneLiner}
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-border/40 text-xs font-medium text-accent flex items-center gap-1">
              Launch Pathway &rarr;
            </div>
          </Link>
        ) : null}

        {/* Step 2: Bedside Clinical Problem */}
        {problems.length > 0 ? (
          <Link
            href={`/problems/${problems[0].slug}`}
            className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-4 transition-all hover:border-accent hover:shadow-xs"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
                Bedside Presentation
              </span>
              <h3 className="mt-1 text-sm font-semibold text-ink group-hover:text-accent transition-colors">
                {problems[0].title}
              </h3>
              <p className="mt-1 text-xs text-ink-muted line-clamp-2 leading-relaxed">
                {problems[0].oneLiner}
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-border/40 text-xs font-medium text-accent flex items-center gap-1">
              View Bedside Problem &rarr;
            </div>
          </Link>
        ) : null}

        {/* Step 3: Practice Questions */}
        <Link
          href={`/questions/${currentTopic.slug}`}
          className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-4 transition-all hover:border-accent hover:shadow-xs"
        >
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
              Active Assessment
            </span>
            <h3 className="mt-1 text-sm font-semibold text-ink group-hover:text-accent transition-colors">
              Test Clinical Reasoning
            </h3>
            <p className="mt-1 text-xs text-ink-muted leading-relaxed">
              Answer scenario-based clinical questions with detailed rationales and trial links.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-border/40 text-xs font-medium text-accent flex items-center gap-1">
            Start Questions &rarr;
          </div>
        </Link>

        {/* Step 4: Next Topic in Category (if present) */}
        {nextTopic && (
          <Link
            href={`/topics/${nextTopic.slug}`}
            className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-4 transition-all hover:border-accent hover:shadow-xs"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-ink-faint">
                Next Topic in Domain
              </span>
              <h3 className="mt-1 text-sm font-semibold text-ink group-hover:text-accent transition-colors">
                {nextTopic.title}
              </h3>
              <p className="mt-1 text-xs text-ink-muted line-clamp-2 leading-relaxed">
                {nextTopic.oneLiner}
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-border/40 text-xs font-medium text-accent flex items-center gap-1">
              Read Topic &rarr;
            </div>
          </Link>
        )}

        {/* Step 5: Clinical Calculators (if present) */}
        {calculators.length > 0 && (
          <Link
            href={`/calculators/${calculators[0].id}`}
            className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-4 transition-all hover:border-emerald-500 hover:shadow-xs"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Bedside Tool
              </span>
              <h3 className="mt-1 text-sm font-semibold text-ink group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {calculators[0].title}
              </h3>
              <p className="mt-1 text-xs text-ink-muted line-clamp-2 leading-relaxed">
                {calculators[0].description}
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-border/40 text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              Open Calculator &rarr;
            </div>
          </Link>
        )}

        {/* Step 6: Knowledge Map */}
        <Link
          href="/map"
          className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-4 transition-all hover:border-accent hover:shadow-xs"
        >
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-ink-faint">
              Visual Map
            </span>
            <h3 className="mt-1 text-sm font-semibold text-ink group-hover:text-accent transition-colors">
              Explore Knowledge Map
            </h3>
            <p className="mt-1 text-xs text-ink-muted leading-relaxed">
              Explore the entire critical care network and inspect cross-system relationships.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-border/40 text-xs font-medium text-accent flex items-center gap-1">
            Open Map &rarr;
          </div>
        </Link>
      </div>
    </section>
  );
}
