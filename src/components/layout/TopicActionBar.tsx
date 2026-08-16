import Link from "next/link";
import type { ClinicalProblem, Pathway, Calculator } from "@/content-types";
import type { TopicReferences } from "@/registry";

interface TopicActionBarProps {
  readonly topicSlug: string;
  readonly problems: readonly ClinicalProblem[];
  readonly pathways: readonly Pathway[];
  readonly calculators: readonly Calculator[];
  readonly references: TopicReferences;
  readonly flashcardCount: number;
  readonly questionCount: number;
}

export function TopicActionBar({
  topicSlug,
  problems,
  pathways,
  calculators,
  references,
  flashcardCount,
  questionCount,
}: TopicActionBarProps) {
  const totalEvidence =
    references.trials.length +
    references.guidelines.length +
    references.systematicReviews.length;

  return (
    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border/60">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-faint mr-1">
        Clinical Tools:
      </span>

      {/* Bedside Clinical Problems Action */}
      {problems.length > 0 && (
        <a
          href="#clinical-problems"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-medium text-ink transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent-strong"
          title={`View ${problems.length} linked bedside clinical problem${problems.length > 1 ? "s" : ""}`}
        >
          <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>Problems ({problems.length})</span>
        </a>
      )}

      {/* Decision Pathway Action */}
      {pathways.length > 0 && (
        <a
          href="#clinical-pathways"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-medium text-ink transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent-strong"
          title={`View ${pathways.length} linked clinical decision pathway${pathways.length > 1 ? "s" : ""}`}
        >
          <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
          </svg>
          <span>Pathways ({pathways.length})</span>
        </a>
      )}

      {/* ICU Calculators Action */}
      {calculators.length > 0 && (
        <a
          href="#calculators"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-medium text-ink transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent-strong"
          title={`View ${calculators.length} linked bedside calculator${calculators.length > 1 ? "s" : ""}`}
        >
          <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <span>Calculators ({calculators.length})</span>
        </a>
      )}

      {/* Evidence Explorer Action */}
      {totalEvidence > 0 && (
        <a
          href="#evidence-timeline"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-medium text-ink transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent-strong"
          title={`View ${totalEvidence} evidence record${totalEvidence > 1 ? "s" : ""}`}
        >
          <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          <span>Evidence ({totalEvidence})</span>
        </a>
      )}

      {/* Flashcards Action */}
      {flashcardCount > 0 && (
        <Link
          href={`/flashcards/${topicSlug}`}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-medium text-ink transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent-strong"
          title={`Test yourself with ${flashcardCount} flashcards`}
        >
          <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span>Flashcards ({flashcardCount})</span>
        </Link>
      )}

      {/* Questions Action */}
      {questionCount > 0 && (
        <Link
          href={`/questions/${topicSlug}`}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-medium text-ink transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent-strong"
          title={`Practice ${questionCount} scenario questions`}
        >
          <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Questions ({questionCount})</span>
        </Link>
      )}
    </div>
  );
}
