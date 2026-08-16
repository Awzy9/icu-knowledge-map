import { notFound } from "next/navigation";
import { getAllPhysiologyConcepts, getAllPhysiologySlugs, getAllTopics, getPhysiologyConcept } from "@/registry";
import { PhysiologyVisualPanel } from "@/components/physiology/PhysiologyVisualPanel";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BookmarkToggle } from "@/components/bookmarks/BookmarkToggle";
import { RelatedConceptsRow } from "@/components/ui/RelatedConceptsRow";
import { ReferenceCard } from "@/components/evidence/ReferenceCard";
import { Tag } from "@/components/ui/Tag";
import { physiologySystemLabel } from "@/lib/physiology-style";
import { resolveEvidenceReferences } from "@/lib/resolve-evidence-reference";

interface PhysiologyPageProps {
  readonly params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPhysiologySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PhysiologyPageProps) {
  const { slug } = await params;
  return { title: getPhysiologyConcept(slug)?.title ?? "Physiology" };
}

export default async function PhysiologyConceptPage({ params }: PhysiologyPageProps) {
  const { slug } = await params;
  const concept = getPhysiologyConcept(slug);
  if (!concept) notFound();

  const allConcepts = getAllPhysiologyConcepts();
  const allTopics = getAllTopics();

  const relatedConcepts = (concept.relatedConceptIds ?? [])
    .map((id) => allConcepts.find((candidate) => candidate.id === id))
    .filter((candidate): candidate is NonNullable<typeof candidate> => candidate !== undefined);

  const relatedTopics = concept.relatedTopicIds
    .map((id) => allTopics.find((topic) => topic.id === id))
    .filter((topic): topic is NonNullable<typeof topic> => topic !== undefined);

  const references = resolveEvidenceReferences(concept.references);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <Breadcrumbs items={[{ label: "Physiology", href: "/physiology" }, { label: concept.title }]} />
          <BookmarkToggle type="physiology" id={concept.id} />
        </div>
        <Tag>{physiologySystemLabel[concept.system]}</Tag>
        <h1 className="text-2xl font-semibold text-ink">{concept.title}</h1>
        <p className="text-sm text-ink-muted">{concept.summary}</p>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Definition</p>
        <p className="mt-1 text-sm leading-relaxed text-ink">{concept.definition}</p>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Mechanism</p>
        <p className="mt-1 text-sm leading-relaxed text-ink">{concept.mechanism}</p>
      </div>

      {concept.visual && (
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-faint">Interactive visual</p>
          <PhysiologyVisualPanel visual={concept.visual} />
          <p className="mt-2 text-xs text-ink-faint">
            An educational visualization for exploring the relationship between values, not a patient simulation.
          </p>
        </div>
      )}

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Clinical significance</p>
        <p className="mt-1 text-sm leading-relaxed text-ink">{concept.clinicalSignificance}</p>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Common ICU applications</p>
        <ul className="mt-1 flex list-disc flex-col gap-1 pl-5 text-sm leading-relaxed text-ink">
          {concept.icuApplications.map((application, i) => (
            <li key={i}>{application}</li>
          ))}
        </ul>
      </div>

      {references.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">References</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {references.map((ref) => (
              <ReferenceCard key={ref.href} {...ref} />
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4 border-t border-border pt-4 sm:flex-row sm:gap-8">
        <RelatedConceptsRow
          label="Related concepts"
          items={relatedConcepts.map((related) => ({ id: related.id, href: `/physiology/${related.slug}`, title: related.title }))}
        />
        <RelatedConceptsRow
          items={relatedTopics.map((topic) => ({ id: topic.id, href: `/topics/${topic.slug}`, title: topic.title }))}
        />
      </div>
    </div>
  );
}
