import type {
  ContentSection,
  EvidenceCategory,
  EvidenceRef,
  Guideline,
  SectionKind,
  SystematicReview,
  Topic,
  Trial,
} from "@/content-types";
import { getGuidelineEvidenceCategory, getTrialEvidenceCategory } from "@/lib/evidence-style";
import { hasSectionContent } from "@/lib/section-content";

/** Guideline recommendation text truncated to a short, glanceable node label. */
function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}

export type KnowledgeMapNodeKind = "topic" | "group" | "section" | "evidence";

export interface KnowledgeMapNode {
  readonly id: string;
  readonly label: string;
  readonly kind: KnowledgeMapNodeKind;
  /** Present on nodes with meaningful content to navigate to. In-page anchors start with '#' */
  readonly href?: string;
  /** Present on evidence nodes, for badge coloring. */
  readonly evidenceCategory?: EvidenceCategory;
  readonly children?: readonly KnowledgeMapNode[];
  readonly hasContent?: boolean;
}

interface SectionGroupDefinition {
  readonly id: string;
  readonly label: string;
  readonly kinds: readonly SectionKind[];
}

/**
 * 5 primary spokes of clinical domain architecture.
 */
const SECTION_GROUPS: readonly SectionGroupDefinition[] = [
  { id: "physiology", label: "Physiology", kinds: ["overview", "definition", "physiology"] },
  {
    id: "diagnosis",
    label: "Diagnosis",
    kinds: ["clinical-presentation", "diagnosis", "severity", "differential-diagnosis"],
  },
  { id: "management", label: "Management", kinds: ["management", "monitoring"] },
  { id: "complications", label: "Complications", kinds: ["complications"] },
  { id: "evidence", label: "Evidence", kinds: ["guidelines", "landmark-trials", "recent-evidence", "controversies"] },
];

export interface KnowledgeMapEvidenceSource {
  readonly trials: readonly Trial[];
  readonly guidelines: readonly Guideline[];
  readonly systematicReviews: readonly SystematicReview[];
}

function resolveEvidenceRef(ref: EvidenceRef, source: KnowledgeMapEvidenceSource): KnowledgeMapNode | undefined {
  if (ref.kind === "trial") {
    const trial = source.trials.find((t) => t.id === ref.id);
    if (!trial) return undefined;
    return {
      id: `evidence.${ref.id}`,
      label: trial.name,
      kind: "evidence",
      href: `/trials/${trial.id}`,
      evidenceCategory: getTrialEvidenceCategory(trial),
      hasContent: true,
    };
  }
  if (ref.kind === "guideline") {
    const guideline = source.guidelines.find((g) => g.id === ref.id);
    if (!guideline) return undefined;
    return {
      id: `evidence.${ref.id}`,
      label: `${guideline.abbreviation}: ${truncate(guideline.recommendationText, 40)}`,
      kind: "evidence",
      href: `/guidelines/${guideline.id}`,
      evidenceCategory: getGuidelineEvidenceCategory(guideline),
      hasContent: true,
    };
  }
  const review = source.systematicReviews.find((r) => r.id === ref.id);
  if (!review) return undefined;
  return {
    id: `evidence.${ref.id}`,
    label: review.title,
    kind: "evidence",
    href: `/evidence/${review.id}`,
    evidenceCategory: "meta-analysis",
    hasContent: true,
  };
}

/** Keep the first occurrence only, so node ids (and React keys) stay unique. */
function dedupeById(nodes: readonly KnowledgeMapNode[]): KnowledgeMapNode[] {
  const seen = new Set<string>();
  return nodes.filter((node) => {
    if (seen.has(node.id)) return false;
    seen.add(node.id);
    return true;
  });
}

/**
 * Maps a ContentSection to a KnowledgeMapNode, PRESERVING the section itself
 * and its own content/navigation href even when it has children.
 */
function sectionToNode(section: ContentSection, source: KnowledgeMapEvidenceSource): KnowledgeMapNode {
  const hasContent = hasSectionContent(section);
  const childSectionNodes = (section.children ?? [])
    .filter((child) => hasSectionContent(child))
    .map((child) => sectionToNode(child, source));

  const evidenceNodes = (section.evidenceRefs ?? [])
    .map((ref) => resolveEvidenceRef(ref, source))
    .filter((node): node is KnowledgeMapNode => node !== undefined);

  const children = dedupeById([...childSectionNodes, ...evidenceNodes]);

  return {
    id: section.id,
    label: section.title,
    kind: "section",
    href: hasContent ? `#${section.id}` : undefined,
    hasContent,
    children: children.length > 0 ? children : undefined,
  };
}

/**
 * Derives a generic, rendering-ready node tree from a Topic's own
 * ContentSection structure and evidence sources.
 * Never flattens or discards a parent section node that has its own content.
 */
export function buildKnowledgeMapTree(topic: Topic, source: KnowledgeMapEvidenceSource): KnowledgeMapNode {
  const sectionsByKind = new Map<SectionKind, ContentSection[]>();
  for (const section of topic.sections) {
    const list = sectionsByKind.get(section.kind) ?? [];
    list.push(section);
    sectionsByKind.set(section.kind, list);
  }

  // Collect all topic-level evidence nodes from all sections
  const allTopicEvidenceNodes: KnowledgeMapNode[] = [];
  for (const section of topic.sections) {
    if (section.evidenceRefs) {
      for (const ref of section.evidenceRefs) {
        const evNode = resolveEvidenceRef(ref, source);
        if (evNode) allTopicEvidenceNodes.push(evNode);
      }
    }
  }
  const uniqueTopicEvidenceNodes = dedupeById(allTopicEvidenceNodes);

  const groupNodes: KnowledgeMapNode[] = SECTION_GROUPS.map((group): KnowledgeMapNode | undefined => {
    const matchingSections = group.kinds
      .flatMap((kind) => sectionsByKind.get(kind) ?? [])
      .filter((section) => hasSectionContent(section));

    // Special handling for Evidence spoke
    if (group.id === "evidence") {
      const evidenceSections = matchingSections.map((s) => sectionToNode(s, source));
      const combinedEvidenceChildren = dedupeById([...evidenceSections, ...uniqueTopicEvidenceNodes]);
      const hasAnyEvidence =
        combinedEvidenceChildren.length > 0 ||
        (topic.foundationSources && topic.foundationSources.length > 0) ||
        (topic.otherReferences && topic.otherReferences.length > 0) ||
        Boolean(topic.currentStatus);

      if (!hasAnyEvidence) return undefined;

      const firstAnchor = matchingSections[0] ? `#${matchingSections[0].id}` : "#topic-references";
      const children = combinedEvidenceChildren.length > 0 ? combinedEvidenceChildren : undefined;

      return {
        id: group.id,
        label: group.label,
        kind: "group",
        href: firstAnchor,
        hasContent: true,
        children,
      };
    }

    if (matchingSections.length === 0) return undefined;

    // Map each matching section into a preserved section node
    const sectionNodes = matchingSections.map((section) => sectionToNode(section, source));

    // If there is only 1 section in this domain group:
    if (sectionNodes.length === 1) {
      const singleSection = sectionNodes[0];
      return {
        id: singleSection.id,
        label: group.label, // Use canonical domain spoke label (e.g. "Complications")
        kind: "group",
        href: singleSection.href,
        hasContent: singleSection.hasContent,
        children: singleSection.children,
      };
    }

    // If there are multiple sections in this domain group:
    return {
      id: group.id,
      label: group.label,
      kind: "group",
      href: `#${matchingSections[0].id}`,
      hasContent: true,
      children: sectionNodes,
    };
  }).filter((node): node is KnowledgeMapNode => node !== undefined);

  return { id: topic.id, label: topic.title, kind: "topic", children: groupNodes, hasContent: true };
}
