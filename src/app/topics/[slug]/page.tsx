import Link from "next/link";
import { notFound } from "next/navigation";
import type { ContentSection } from "@/content-types";
import {
  getAllTopics,
  getAllTopicSlugs,
  getKnowledgeMapTree,
  getTopic,
  getTopicReferences,
  getClinicalProblemsForTopic,
  getPathwaysForTopic,
  getCalculatorsForTopic,
  getFlashcardsForTopic,
  getQuestionsForTopic,
  getRelatedContentForTopic,
} from "@/registry";
import { TopicLayoutShell } from "@/components/layout/TopicLayoutShell";
import { MobileSectionNav } from "@/components/layout/MobileSectionNav";
import { TopicHeader } from "@/components/content/TopicHeader";
import { TopicClinicalOrientation } from "@/components/content/TopicClinicalOrientation";
import { SectionRenderer } from "@/components/content/SectionRenderer";
import { SectionNav } from "@/components/content/SectionNav";
import { KnowledgeMap } from "@/components/knowledge-map/KnowledgeMap";
import { KnowledgeMapTree } from "@/components/knowledge-map/KnowledgeMapTree";
import { EvidenceRightRail } from "@/components/evidence/EvidenceRightRail";
import { EvidenceFreshnessPanel } from "@/components/evidence/EvidenceFreshnessPanel";
import { deriveFreshness } from "@/content-types/evidence-freshness";
import { TopicCompareLinks } from "@/components/compare/TopicCompareLinks";
import { LearnBedsideShell, BedsideView } from "@/components/content/ContentModeToggle";
import { getBedsideGuide } from "@/content/bedside";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RelatedContent } from "@/components/content/RelatedContent";
import { EvidenceTimeline } from "@/components/evidence/EvidenceTimeline";
import { TopicReferencesSection } from "@/components/content/TopicReferencesSection";
import { TopicRelatedConceptsSection } from "@/components/content/TopicRelatedConceptsSection";
import { TopicAssessmentSection } from "@/components/content/TopicAssessmentSection";
import { TopicProblemsSection } from "@/components/content/TopicProblemsSection";
import { TopicPathwaysSection } from "@/components/content/TopicPathwaysSection";
import { TopicCalculatorsSection } from "@/components/content/TopicCalculatorsSection";
import { WhatNextNav } from "@/components/layout/WhatNextNav";
import { Callout } from "@/components/ui/Callout";

interface TopicPageProps {
  readonly params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllTopicSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = getTopic(slug);
  return { title: topic?.title ?? "Topic" };
}

function flattenSectionIds(sections: readonly ContentSection[]): string[] {
  return sections.flatMap((section) => [
    section.id,
    ...(section.children ? flattenSectionIds(section.children) : []),
  ]);
}

export default async function TopicDetailPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = getTopic(slug);

  if (!topic) notFound();

  if (topic.status === "stub") {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
        <div className="mb-6 text-left">
          <Breadcrumbs items={[{ label: "Topics", href: "/topics" }, { label: topic.title }]} />
        </div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Coming soon</p>
        <h1 className="mt-2 text-2xl font-semibold text-ink">{topic.title}</h1>
        <p className="mt-3 text-sm text-ink-muted">{topic.oneLiner}</p>
        <p className="mt-6 text-sm text-ink-faint">
          This topic is registered on the Knowledge Map but hasn&apos;t been written yet.
        </p>
        <Link href="/map" className="mt-6 inline-block text-sm text-accent hover:text-accent-strong">
          Back to the Knowledge Map
        </Link>
      </div>
    );
  }

  const allTopics = getAllTopics();
  const sameCategoryTopics = allTopics.filter((t) => t.category === topic.category);
  const currentIndex = sameCategoryTopics.findIndex((t) => t.id === topic.id);
  const nextTopic = sameCategoryTopics[(currentIndex + 1) % sameCategoryTopics.length];

  const knowledgeMapTree = getKnowledgeMapTree(topic.slug);
  const sectionIds = flattenSectionIds(topic.sections);
  const references = getTopicReferences(topic.id);
  const { trials: topicTrials } = references;
  const mobileNavItems = topic.sections.map((section) => ({ id: section.id, title: section.title }));

  const problems = getClinicalProblemsForTopic(topic.id);
  const pathways = getPathwaysForTopic(topic.id);
  const calculators = getCalculatorsForTopic(topic.id);
  const flashcards = getFlashcardsForTopic(topic.id);
  const questions = getQuestionsForTopic(topic.id);

  const bedsideGuide = getBedsideGuide(topic.id);

  return (
    <TopicLayoutShell
      mobileNav={
        <div className="flex flex-col gap-3">
          <MobileSectionNav items={mobileNavItems} />
          {knowledgeMapTree && (
            <div className="rounded-md border border-border bg-surface p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-faint">Knowledge Map</p>
              <KnowledgeMapTree root={knowledgeMapTree} />
            </div>
          )}
        </div>
      }
      left={
        <div className="flex flex-col gap-6">
          <SectionNav sections={topic.sections} />
          {knowledgeMapTree && (
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-faint">Knowledge Map</p>
              <KnowledgeMap root={knowledgeMapTree} />
            </div>
          )}
        </div>
      }
      center={
        <div className="flex flex-col gap-6">
          <Breadcrumbs items={[{ label: "Topics", href: "/topics" }, { label: topic.title }]} />
          <TopicHeader
            topic={topic}
            problems={problems}
            pathways={pathways}
            calculators={calculators}
            references={references}
            flashcardCount={flashcards.length}
            questionCount={questions.length}
          />

          <TopicClinicalOrientation topic={topic} />

          <TopicCompareLinks topicId={topic.id} />

          <LearnBedsideShell
            storageKey={`topic:${topic.slug}`}
            bedside={bedsideGuide ? <BedsideView guide={bedsideGuide} topicTitle={topic.title} /> : undefined}
            learn={
              <div className="flex flex-col gap-6">

          {topic.status === "placeholder" && (
            <Callout tone="caution">
              <p className="font-medium">This topic is a structural placeholder.</p>
              <p className="mt-1">
                The section layout is in place, but the content itself has not been written or verified yet —
                every section below contains a TODO marker instead of medical content. Nothing on this page
                should be treated as clinical guidance.
              </p>
            </Callout>
          )}

          <div>
            {topic.sections.map((section) => (
              <SectionRenderer key={section.id} section={section} />
            ))}

            {/* Bedside Clinical Problems Section */}
            <TopicProblemsSection problems={problems} />

            {/* Clinical Decision Pathways Section */}
            <TopicPathwaysSection pathways={pathways} />

            {/* Clinical Calculators Section */}
            <TopicCalculatorsSection calculators={calculators} />

            {/* Evidence Timeline */}
            <EvidenceTimeline trials={topicTrials} />

            {/* Assessment Section (Flashcards + Questions) */}
            <TopicAssessmentSection topicId={topic.id} topicSlug={topic.slug} />

            {/* Evidence Freshness — review provenance, authored not inferred */}
            <div className="mt-8">
              <EvidenceFreshnessPanel
                freshness={deriveFreshness({
                  lastReviewed: topic.lastReviewed,
                  explicit: topic.evidenceFreshness,
                })}
                currentStatusNote={topic.currentStatus}
              />
            </div>

            {/* References Section */}
            <TopicReferencesSection
              topicId={topic.id}
              foundationSources={topic.foundationSources}
              currentStatus={topic.currentStatus}
              otherReferences={topic.otherReferences}
            />

            {/* Related Concepts */}
            <TopicRelatedConceptsSection topicId={topic.id} />

            {/* Contextual Next Steps / What Next */}
            {/* Related Content */}
            <div className="mt-8 mb-8 pt-8 border-t border-border">
              <RelatedContent {...getRelatedContentForTopic(topic.id)} />
            </div>

            <WhatNextNav
              currentTopic={topic}
              problems={problems}
              pathways={pathways}
              calculators={calculators}
              nextTopic={nextTopic?.id !== topic.id ? nextTopic : undefined}
            />
          </div>
              </div>
            }
          />
        </div>
      }
      right={<EvidenceRightRail sectionIds={sectionIds} />}
    />
  );
}

