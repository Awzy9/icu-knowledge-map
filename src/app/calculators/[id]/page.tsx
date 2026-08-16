import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCalculatorIds, getAllTopics, getCalculator, getAllPathways } from "@/registry";
import { CalculatorWidget } from "@/components/calculators/CalculatorWidget";
import { BookmarkToggle } from "@/components/bookmarks/BookmarkToggle";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

interface CalculatorPageProps {
  readonly params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return getAllCalculatorIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: CalculatorPageProps) {
  const { id } = await params;
  return { title: getCalculator(id)?.title ?? "Calculator" };
}

export default async function CalculatorDetailPage({ params }: CalculatorPageProps) {
  const { id } = await params;
  const calculator = getCalculator(id);
  if (!calculator) notFound();

  const allTopics = getAllTopics();
  const relatedTopics = calculator.relatedTopicIds
    .map((topicId) => allTopics.find((topic) => topic.id === topicId))
    .filter((topic): topic is NonNullable<typeof topic> => topic !== undefined);

  const allPathways = getAllPathways();
  const relatedPathways = allPathways.filter((p) =>
    p.relatedTopicIds.some((tid) => calculator.relatedTopicIds.includes(tid)),
  );

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-10 sm:px-6">
      <div className="flex items-start justify-between gap-4">
        <Breadcrumbs items={[{ label: "Calculators", href: "/calculators" }, { label: calculator.title }]} />
        <BookmarkToggle type="calculator" id={calculator.id} />
      </div>

      <CalculatorWidget calculatorId={calculator.id} />

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
              <Link
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
                  Open Topic &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Linked Decision Pathways */}
      {relatedPathways.length > 0 && (
        <div className="flex flex-col gap-3 rounded-xl border border-accent/20 bg-accent-soft/20 p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-accent-strong">
              Relevant Clinical Pathways ({relatedPathways.length})
            </h2>
            <span className="text-[11px] text-ink-faint">Decision Protocols</span>
          </div>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {relatedPathways.slice(0, 2).map((pathway) => (
              <Link
                key={pathway.id}
                href={`/pathways/${pathway.slug}`}
                className="group flex flex-col justify-between rounded-lg border border-accent/30 bg-surface p-3.5 transition-all hover:border-accent hover:shadow-xs"
              >
                <div>
                  <span className="text-xs font-semibold text-ink group-hover:text-accent-strong">
                    {pathway.title}
                  </span>
                  <p className="mt-1 text-xs text-ink-muted line-clamp-2 leading-relaxed">
                    {pathway.oneLiner}
                  </p>
                </div>
                <div className="mt-2 text-[11px] font-medium text-accent">
                  Launch Pathway &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

