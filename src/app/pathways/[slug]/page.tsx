import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPathwaySlugs, getAllTopics, getAllClinicalProblems, getPathway } from "@/registry";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BookmarkToggle } from "@/components/bookmarks/BookmarkToggle";
import { PathwayFlow } from "@/components/pathways/PathwayFlow";
import { Callout } from "@/components/ui/Callout";
import { ReferenceCard } from "@/components/evidence/ReferenceCard";
import { resolveEvidenceReferences } from "@/lib/resolve-evidence-reference";

interface PathwayPageProps {
  readonly params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPathwaySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PathwayPageProps) {
  const { slug } = await params;
  return { title: getPathway(slug)?.title ?? "Pathway" };
}

export default async function PathwayDetailPage({ params }: PathwayPageProps) {
  const { slug } = await params;
  const pathway = getPathway(slug);
  if (!pathway) notFound();

  const allTopics = getAllTopics();
  const topicSlugById = new Map(allTopics.map((topic) => [topic.id, topic.slug]));
  const linkedTopics = pathway.relatedTopicIds
    .map((id) => allTopics.find((topic) => topic.id === id))
    .filter((topic): topic is NonNullable<typeof topic> => topic !== undefined);

  const allProblems = getAllClinicalProblems();
  const relatedProblems = allProblems.filter((problem) =>
    problem.relatedTopicIds.some((tid) => pathway.relatedTopicIds.includes(tid)),
  );

  const references = resolveEvidenceReferences(pathway.references);

  return (
    <div className="mx-auto flex max-w-6xl w-full flex-col gap-8 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <Breadcrumbs items={[{ label: "Pathways", href: "/pathways" }, { label: pathway.title }]} />
          <BookmarkToggle type="pathway" id={pathway.id} />
        </div>
        <h1 className="text-2xl font-semibold text-ink">{pathway.title}</h1>
        <p className="max-w-2xl text-sm text-ink-muted">{pathway.oneLiner}</p>
      </div>

      <div className="flex flex-col gap-3">
        <PathwayFlow startingProblem={pathway.startingProblem} root={pathway.flow} topicSlugById={topicSlugById} />
        <p className="text-xs text-ink-faint">
          An educational representation of clinical reasoning, not a diagnostic algorithm or personalized medical
          advice — always apply clinical judgment and institutional protocols.
        </p>
      </div>

      {pathway.redFlags && pathway.redFlags.length > 0 && (
        <Callout tone="caution">
          <p className="mb-2 text-sm font-medium">Escalate — Red Flags & Critical Warnings</p>
          <ul className="flex list-disc flex-col gap-1.5 pl-5">
            {pathway.redFlags.map((flag) => (
              <li key={flag.id}>{flag.text}</li>
            ))}
          </ul>
        </Callout>
      )}

      {/* Related Bedside Clinical Problems */}
      {relatedProblems.length > 0 && (
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
              Related Bedside Clinical Problems ({relatedProblems.length})
            </h2>
            <span className="text-[11px] text-ink-faint">Bedside Presentations</span>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProblems.slice(0, 3).map((problem) => (
              <Link
                key={problem.id}
                href={`/problems/${problem.slug}`}
                className="group flex flex-col justify-between rounded-lg border border-border/80 bg-surface p-3 transition-all hover:border-accent hover:bg-surface-elevated"
              >
                <div>
                  <span className="text-xs font-semibold text-ink group-hover:text-accent">
                    {problem.title}
                  </span>
                  <p className="mt-1 text-xs text-ink-muted line-clamp-2 leading-relaxed">
                    {problem.oneLiner}
                  </p>
                </div>
                <div className="mt-2 text-[11px] font-medium text-accent">
                  View Bedside Problem &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Linked Knowledge Topics */}
      {linkedTopics.length > 0 && (
        <div className="flex flex-col gap-3 border-t border-border pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
              Linked Deep-Dive Topics ({linkedTopics.length})
            </h2>
            <span className="text-[11px] text-ink-faint">Reference Knowledge</span>
          </div>
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {linkedTopics.map((topic) => (
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

      {references.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">References & Guidelines</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {references.map((ref) => (
              <ReferenceCard key={ref.href} {...ref} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
