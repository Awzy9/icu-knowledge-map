import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllClinicalProblemSlugs, getClinicalProblem, getAllTopics, getAllPathways } from "@/registry";
import { ContentBlockList } from "@/components/content/ContentBlockList";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

interface ProblemPageProps {
  readonly params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllClinicalProblemSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProblemPageProps) {
  const { slug } = await params;
  return { title: getClinicalProblem(slug)?.title ?? "Clinical Problem" };
}

export default async function ProblemDetailPage({ params }: ProblemPageProps) {
  const { slug } = await params;
  const problem = getClinicalProblem(slug);
  if (!problem) notFound();

  const allTopics = getAllTopics();
  const relatedTopics = problem.relatedTopicIds
    .map((id) => allTopics.find((topic) => topic.id === id))
    .filter((topic): topic is NonNullable<typeof topic> => topic !== undefined);

  const allPathways = getAllPathways();
  const relatedPathways = allPathways.filter((pathway) =>
    pathway.relatedTopicIds.some((tid) => problem.relatedTopicIds.includes(tid)),
  );

  return (
    <div className="mx-auto flex max-w-4xl w-full flex-col gap-6 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-2">
        <Breadcrumbs items={[{ label: "Clinical Problems", href: "/problems" }, { label: problem.title }]} />
        <div className="flex items-center gap-2">
          {problem.category && (
            <span className="inline-block rounded bg-surface-muted px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-ink-muted">
              {problem.category.replace("-", " / ")}
            </span>
          )}
        </div>
        <h1 className="text-2xl font-semibold text-ink">{problem.title}</h1>
        <p className="mt-1 text-sm text-ink-muted leading-relaxed">{problem.oneLiner}</p>
      </div>

      <ContentBlockList blocks={problem.body} />

      {/* Actionable Clinical Workflows */}
      {relatedPathways.length > 0 && (
        <div className="mt-4 flex flex-col gap-3 border-t border-border pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-accent-strong">
              Actionable Clinical Workflows ({relatedPathways.length})
            </h2>
            <span className="text-[11px] text-ink-faint">Step-by-step ICU Processes</span>
          </div>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {relatedPathways.slice(0, 4).map((pathway) => (
              <Link
                key={pathway.id}
                href={`/pathways/${pathway.slug}`}
                className="group flex flex-col justify-between rounded-lg border border-accent/30 bg-accent-soft/30 p-3.5 transition-all hover:border-accent hover:bg-accent-soft/60"
              >
                <div>
                  <span className="text-xs font-semibold text-ink group-hover:text-accent-strong">
                    {pathway.title}
                  </span>
                  <p className="mt-1 text-xs text-ink-muted line-clamp-2 leading-relaxed">
                    {pathway.oneLiner}
                  </p>
                </div>
                <div className="mt-2 text-[11px] font-semibold text-accent flex items-center gap-1">
                  Launch Workflow &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Deep-Dive Knowledge Topics */}
      {relatedTopics.length > 0 && (
        <div className="mt-4 flex flex-col gap-3 border-t border-border pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
              Deep-Dive Topic Destinations ({relatedTopics.length})
            </h2>
            <span className="text-[11px] text-ink-faint">Reference Knowledge</span>
          </div>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {relatedTopics.map((topic) => (
              <Link
                key={topic.id}
                href={`/topics/${topic.slug}`}
                className="group flex flex-col justify-between rounded-lg border border-border/80 bg-surface p-3.5 transition-all hover:border-accent/60 hover:bg-surface-elevated"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-ink group-hover:text-accent">
                      {topic.title}
                    </span>
                    <span className="text-[10px] text-ink-faint uppercase">{topic.category}</span>
                  </div>
                  <p className="mt-1 text-xs text-ink-muted line-clamp-2 leading-relaxed">
                    {topic.oneLiner}
                  </p>
                </div>
                <div className="mt-2 text-[11px] font-medium text-accent">
                  Explore Topic &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
