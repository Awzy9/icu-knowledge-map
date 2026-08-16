import { notFound } from "next/navigation";
import { getAllGuidelineIds, getAllTopics, getGuideline } from "@/registry";
import { EvidenceBadge } from "@/components/evidence/EvidenceBadge";
import { GuidelineStatusBadge } from "@/components/evidence/GuidelineStatusBadge";
import { CertaintyIndicator } from "@/components/evidence/CertaintyIndicator";
import { BookmarkToggle } from "@/components/bookmarks/BookmarkToggle";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getGuidelineEvidenceCategory, recommendationStrengthLabel } from "@/lib/evidence-style";

interface GuidelinePageProps {
  readonly params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return getAllGuidelineIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: GuidelinePageProps) {
  const { id } = await params;
  return { title: getGuideline(id)?.title ?? "Guideline" };
}

export default async function GuidelineDetailPage({ params }: GuidelinePageProps) {
  const { id } = await params;
  const guideline = getGuideline(id);
  if (!guideline) notFound();

  const allTopics = getAllTopics();
  const relatedTopics = guideline.relatedTopicIds
    .map((topicId) => allTopics.find((topic) => topic.id === topicId))
    .filter((topic): topic is NonNullable<typeof topic> => topic !== undefined);

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-5 px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Guidelines", href: "/guidelines" }, { label: guideline.title }]} />
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <EvidenceBadge category={getGuidelineEvidenceCategory(guideline)} />
          <GuidelineStatusBadge status={guideline.status} />
        </div>
        <BookmarkToggle type="guideline" id={guideline.id} />
      </div>
      <header>
        <h1 className="text-2xl font-semibold text-ink">
          {guideline.abbreviation} — {guideline.title}
        </h1>
        <p className="mt-1 text-sm text-ink-muted">
          {guideline.society}, {guideline.year}
        </p>
      </header>
      {guideline.status === "superseded" && (
        <p className="rounded-md border border-orange-300 bg-orange-50 px-3 py-2 text-sm text-orange-900">
          This guideline has been superseded by a newer recommendation. Check the Knowledge Map or the current
          topic page for the guideline that replaces it.
        </p>
      )}
      {guideline.status === "public-review-draft" && (
        <p className="rounded-md border border-dashed border-indigo-300 bg-indigo-50 px-3 py-2 text-sm text-indigo-900">
          This is a public-review draft, not a finalized guideline. Its recommendations may still change and
          should not be treated as current standard of care until publication.
        </p>
      )}
      <p className="text-sm leading-relaxed text-ink">{guideline.recommendationText}</p>
      <div className="flex flex-wrap items-center gap-4">
        <span className="text-sm text-ink-muted">{recommendationStrengthLabel[guideline.strength]}</span>
        <CertaintyIndicator certainty={guideline.certainty} />
      </div>
      {guideline.url && (
        <a
          href={guideline.url}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-accent hover:text-accent-strong"
        >
          View source guideline
        </a>
      )}

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

