import Link from "next/link";
import {
  getClinicalProblemsForTopic,
  getPathwaysForTopic,
  getPhysiologyConceptsForTopic,
  getTopicReferences,
  resolveRelationships,
} from "@/registry";
import { RelatedConceptsRow } from "@/components/ui/RelatedConceptsRow";

interface TopicRelatedConceptsSectionProps {
  readonly topicId: string;
}

/**
 * "Where Next?" — entirely derived from existing, structured data (topic
 * relationships, evidenceRefs, pathway/physiology relatedTopicIds). No
 * generated text: every row here is a real registered entity this topic is
 * already linked to.
 */
export function TopicRelatedConceptsSection({ topicId }: TopicRelatedConceptsSectionProps) {
  const relationships = resolveRelationships(topicId).filter(
    (relationship) => relationship.relatedTopic.status !== "stub",
  );
  const toItems = (types: readonly string[]) =>
    relationships
      .filter((relationship) => types.includes(relationship.type))
      .map((relationship) => ({
        id: `${relationship.relatedTopic.id}-${relationship.type}`,
        href: `/topics/${relationship.relatedTopic.slug}`,
        title: relationship.relatedTopic.title,
      }));

  const prerequisites = toItems(["prerequisite"]);
  const complications = toItems(["complication"]);
  const related = toItems(["related-to", "differential", "treated-with"]);

  const physiologyConcepts = getPhysiologyConceptsForTopic(topicId).map((concept) => ({
    id: concept.id,
    href: `/physiology/${concept.slug}`,
    title: concept.title,
  }));

  const pathways = getPathwaysForTopic(topicId).map((pathway) => ({
    id: pathway.id,
    href: `/pathways/${pathway.slug}`,
    title: pathway.title,
  }));

  const clinicalProblems = getClinicalProblemsForTopic(topicId).map((problem) => ({
    id: problem.id,
    href: `/problems/${problem.slug}`,
    title: problem.title,
  }));

  const { trials, guidelines } = getTopicReferences(topicId);
  // Multiple Guideline entries often share one parent document title (one
  // entry per recommendation) — use the recommendation text, not the title,
  // so chips for the same guideline document don't render as duplicates.
  const shortenRecommendation = (text: string, max = 44) =>
    text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;
  const evidence = [
    ...trials.map((trial) => ({ id: trial.id, href: `/trials/${trial.id}`, title: trial.name })),
    ...guidelines.map((guideline) => ({
      id: guideline.id,
      href: `/guidelines/${guideline.id}`,
      title: `${guideline.abbreviation}: ${shortenRecommendation(guideline.recommendationText)}`,
    })),
  ];

  const hasAnything =
    prerequisites.length > 0 ||
    physiologyConcepts.length > 0 ||
    pathways.length > 0 ||
    clinicalProblems.length > 0 ||
    evidence.length > 0 ||
    complications.length > 0 ||
    related.length > 0;
  if (!hasAnything) return null;

  return (
    <details id="related-concepts" open className="group scroll-mt-24 py-6">
      <summary className="mb-3 flex cursor-pointer list-none items-center gap-3 [&::-webkit-details-marker]:hidden">
        <svg
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5 shrink-0 text-ink-faint transition-transform duration-150 group-open:rotate-180"
          aria-hidden
        >
          <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 className="text-xl font-semibold text-ink">Where Next?</h2>
      </summary>

      <div className="flex flex-col gap-4">
        {prerequisites.length > 0 && <RelatedConceptsRow label="Before this topic" items={prerequisites} />}
        {clinicalProblems.length > 0 && <RelatedConceptsRow label="Bedside presentations" items={clinicalProblems} />}
        {physiologyConcepts.length > 0 && <RelatedConceptsRow label="Go deeper" items={physiologyConcepts} />}
        {pathways.length > 0 && <RelatedConceptsRow label="Clinical workflows" items={pathways} />}
        {evidence.length > 0 && <RelatedConceptsRow label="Evidence" items={evidence} />}
        {complications.length > 0 && <RelatedConceptsRow label="Watch for" items={complications} />}
        {related.length > 0 && <RelatedConceptsRow label="Related" items={related} />}
      </div>
      <p className="mt-4 text-xs text-ink-faint">
        Generated from this topic&apos;s registered relationships and citations —{" "}
        <Link href="/map" className="text-accent hover:text-accent-strong">
          see the full Knowledge Map
        </Link>
        .
      </p>
    </details>
  );
}
