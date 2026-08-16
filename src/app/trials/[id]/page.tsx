import { notFound } from "next/navigation";
import { getAllTopics, getAllTrialIds, getTrial } from "@/registry";
import { EvidenceBadge } from "@/components/evidence/EvidenceBadge";
import { CertaintyIndicator } from "@/components/evidence/CertaintyIndicator";
import { BookmarkToggle } from "@/components/bookmarks/BookmarkToggle";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Tag } from "@/components/ui/Tag";
import { getTrialEvidenceCategory, significanceLabel } from "@/lib/evidence-style";

interface TrialPageProps {
  readonly params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return getAllTrialIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: TrialPageProps) {
  const { id } = await params;
  return { title: getTrial(id)?.name ?? "Trial" };
}

export default async function TrialDetailPage({ params }: TrialPageProps) {
  const { id } = await params;
  const trial = getTrial(id);
  if (!trial) notFound();

  const allTopics = getAllTopics();
  const relatedTopics = trial.relatedTopicIds
    .map((topicId) => allTopics.find((topic) => topic.id === topicId))
    .filter((topic): topic is NonNullable<typeof topic> => topic !== undefined);

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-5 px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Trials", href: "/trials" }, { label: trial.name }]} />
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2">
          {trial.significance && <Tag>{significanceLabel[trial.significance]}</Tag>}
          <EvidenceBadge category={getTrialEvidenceCategory(trial)} />
        </div>
        <BookmarkToggle type="trial" id={trial.id} />
      </div>
      <header>
        <h1 className="text-2xl font-semibold text-ink">{trial.name}</h1>
        {trial.title && trial.title !== trial.name && (
          <p className="mt-1 text-sm italic text-ink-muted">{trial.title}</p>
        )}
        <p className="mt-1 text-sm text-ink-muted">
          {trial.journal}, {trial.year} · {trial.design}
        </p>
      </header>

      {trial.clinicalQuestion && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Clinical question</p>
          <p className="mt-1 text-sm leading-relaxed text-ink">{trial.clinicalQuestion}</p>
        </div>
      )}

      <dl className="grid gap-3 rounded-md border border-border bg-surface p-4 text-sm">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Population</dt>
          <dd className="mt-0.5 text-ink">{trial.population}</dd>
        </div>
        {trial.inclusionCriteria && trial.inclusionCriteria.length > 0 && (
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Inclusion criteria</dt>
            <dd className="mt-0.5 text-ink">
              <ul className="flex list-disc flex-col gap-1 pl-5">
                {trial.inclusionCriteria.map((criterion, i) => (
                  <li key={i}>{criterion}</li>
                ))}
              </ul>
            </dd>
          </div>
        )}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Intervention</dt>
          <dd className="mt-0.5 text-ink">{trial.intervention}</dd>
        </div>
        {trial.comparator && (
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Comparator</dt>
            <dd className="mt-0.5 text-ink">{trial.comparator}</dd>
          </div>
        )}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Primary outcome</dt>
          <dd className="mt-0.5 text-ink">{trial.primaryOutcome}</dd>
        </div>
        {trial.secondaryOutcomes && trial.secondaryOutcomes.length > 0 && (
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Secondary outcomes</dt>
            <dd className="mt-0.5 text-ink">
              <ul className="flex list-disc flex-col gap-1 pl-5">
                {trial.secondaryOutcomes.map((outcome, i) => (
                  <li key={i}>{outcome}</li>
                ))}
              </ul>
            </dd>
          </div>
        )}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Result</dt>
          <dd className="mt-0.5 text-ink">
            {trial.result.summary}
            {trial.result.effectSize && ` (${trial.result.effectSize}${trial.result.pValue ? `, ${trial.result.pValue}` : ""})`}
          </dd>
        </div>
      </dl>

      {/* Three distinct concepts, deliberately never merged: what the trial itself found, what guidelines
          say now, and how the field/site reads the finding — each gets its own labeled block. */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">What the trial found</p>
        <p className="mt-1 text-sm leading-relaxed text-ink">{trial.whatItFound}</p>
      </div>

      {trial.currentGuidelinePosition && (
        <div className="rounded-md border border-border bg-surface-sunken p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Current guideline position</p>
          <p className="mt-1 text-sm leading-relaxed text-ink">{trial.currentGuidelinePosition}</p>
        </div>
      )}

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Clinical interpretation</p>
        <p className="mt-1 text-sm leading-relaxed text-ink">{trial.clinicalInterpretation}</p>
      </div>

      {trial.limitations && trial.limitations.length > 0 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Limitations</p>
          <ul className="mt-1 flex list-disc flex-col gap-1 pl-5 text-sm leading-relaxed text-ink">
            {trial.limitations.map((limitation, i) => (
              <li key={i}>{limitation}</li>
            ))}
          </ul>
        </div>
      )}

      {trial.certainty && <CertaintyIndicator certainty={trial.certainty} />}

      {/* Linked Clinical Topics */}
      {relatedTopics.length > 0 && (
        <div className="mt-4 flex flex-col gap-3 rounded-xl border border-border bg-surface p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-ink-faint">
              Clinical Context & Relevant Topics ({relatedTopics.length})
            </h2>
            <span className="text-[11px] text-ink-faint">Disease Reference</span>
          </div>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {relatedTopics.map((topic) => (
              <a
                key={topic.id}
                href={`/topics/${topic.slug}`}
                className="group flex flex-col justify-between rounded-lg border border-border/80 bg-surface-elevated p-3.5 transition-all hover:border-accent hover:shadow-xs"
              >
                <div>
                  <span className="text-xs font-semibold text-ink group-hover:text-accent">
                    {topic.title}
                  </span>
                  <p className="mt-1 text-xs text-ink-muted line-clamp-2 leading-relaxed">
                    {topic.oneLiner}
                  </p>
                </div>
                <div className="mt-2 text-[11px] font-medium text-accent">
                  View Topic Context &rarr;
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

