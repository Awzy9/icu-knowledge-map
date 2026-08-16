import type { ContentSection } from "@/content-types";
import { EvidenceBadge } from "@/components/evidence/EvidenceBadge";
import { provenanceToEvidenceCategory } from "@/lib/evidence-style";
import { ContentBlockList } from "./ContentBlockList";

interface SectionRendererProps {
  readonly section: ContentSection;
  readonly headingLevel?: 2 | 3;
}

export function SectionRenderer({ section, headingLevel = 2 }: SectionRendererProps) {
  const evidenceCategory = provenanceToEvidenceCategory[section.provenance];

  const body = (
    <>
      <p className="mb-4 text-sm text-ink-muted">{section.summary}</p>
      <ContentBlockList blocks={section.body} />
      {section.children && section.children.length > 0 && (
        <div className="mt-4 flex flex-col gap-2 border-l-2 border-border pl-5">
          {section.children.map((child) => (
            <SectionRenderer key={child.id} section={child} headingLevel={3} />
          ))}
        </div>
      )}
    </>
  );

  // Nested (management-subnode etc.) content stays plain — collapsing only
  // at the canonical top-level section granularity avoids nested-toggle clutter.
  if (headingLevel === 3) {
    return (
      <section id={section.id} className="scroll-mt-24 border-b border-border py-6 last:border-b-0">
        <div className="mb-1 flex flex-wrap items-center gap-3">
          <h3 className="text-lg font-semibold text-ink">{section.title}</h3>
          {evidenceCategory && <EvidenceBadge category={evidenceCategory} />}
        </div>
        {body}
      </section>
    );
  }

  return (
    <details id={section.id} open className="group scroll-mt-24 border-b border-border py-6 last:border-b-0">
      <summary className="mb-1 flex cursor-pointer list-none flex-wrap items-center gap-3 [&::-webkit-details-marker]:hidden">
        <svg
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5 shrink-0 text-ink-faint transition-transform duration-150 group-open:rotate-180"
          aria-hidden
        >
          <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
        {evidenceCategory && <EvidenceBadge category={evidenceCategory} />}
      </summary>
      {body}
    </details>
  );
}
