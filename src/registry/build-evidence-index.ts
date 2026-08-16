import type { ContentSection, EvidenceRef, NodeId, Topic } from "@/content-types";

export interface EvidenceIndex {
  readonly bySectionId: ReadonlyMap<NodeId, readonly EvidenceRef[]>;
  readonly sectionIdsByEvidenceKey: ReadonlyMap<string, readonly NodeId[]>;
}

const evidenceKey = (kind: EvidenceRef["kind"], id: string) => `${kind}:${id}`;

/** Inverts section-scoped evidenceRefs so the right rail can look up "what evidence applies here" by section id. */
export function buildEvidenceIndex(topics: readonly Topic[]): EvidenceIndex {
  const bySectionId = new Map<NodeId, EvidenceRef[]>();
  const sectionIdsByEvidenceKey = new Map<string, NodeId[]>();

  const visit = (section: ContentSection) => {
    if (section.evidenceRefs && section.evidenceRefs.length > 0) {
      bySectionId.set(section.id, [...section.evidenceRefs]);
      for (const ref of section.evidenceRefs) {
        const key = evidenceKey(ref.kind, ref.id);
        const existing = sectionIdsByEvidenceKey.get(key) ?? [];
        existing.push(section.id);
        sectionIdsByEvidenceKey.set(key, existing);
      }
    }
    section.children?.forEach(visit);
  };

  for (const topic of topics) {
    topic.sections.forEach(visit);
  }

  return { bySectionId, sectionIdsByEvidenceKey };
}
