import { notFound } from "next/navigation";
import { getAllSystematicReviewIds, getAllTopics, getSystematicReview } from "@/registry";
import { EvidenceBadge } from "@/components/evidence/EvidenceBadge";
import { CertaintyIndicator } from "@/components/evidence/CertaintyIndicator";
import { BookmarkToggle } from "@/components/bookmarks/BookmarkToggle";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

interface SystematicReviewPageProps {
  readonly params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return getAllSystematicReviewIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: SystematicReviewPageProps) {
  const { id } = await params;
  return { title: getSystematicReview(id)?.title ?? "Systematic Review" };
}

export default async function SystematicReviewDetailPage({ params }: SystematicReviewPageProps) {
  const { id } = await params;
  const review = getSystematicReview(id);
  if (!review) notFound();

  const allTopics = getAllTopics();
  const relatedTopics = review.relatedTopicIds
    .map((topicId) => allTopics.find((topic) => topic.id === topicId))
    .filter((topic): topic is NonNullable<typeof topic> => topic !== undefined);

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-5 px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Evidence Explorer", href: "/evidence" }, { label: review.title }]} />
      <div className="flex items-start justify-between gap-4">
        <EvidenceBadge category="meta-analysis" />
        <BookmarkToggle type="systematic-review" id={review.id} />
      </div>
      <header>
        <h1 className="text-2xl font-semibold text-ink">{review.title}</h1>
        <p className="mt-1 text-sm text-ink-muted">
          {review.authorsOrGroup}, {review.year} · {review.studiesIncluded} studies included
        </p>
      </header>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Summary</p>
        <p className="mt-1 text-sm leading-relaxed text-ink">{review.summary}</p>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Conclusion</p>
        <p className="mt-1 text-sm leading-relaxed text-ink">{review.conclusion}</p>
      </div>
      <CertaintyIndicator certainty={review.certainty} />

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

