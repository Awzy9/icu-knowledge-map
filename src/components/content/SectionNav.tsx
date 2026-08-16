import type { ContentSection } from "@/content-types";

interface SectionNavProps {
  readonly sections: readonly ContentSection[];
}

/** Intra-topic outline (definition -> management -> peep...) — distinct from the inter-topic relationship graph. */
export function SectionNav({ sections }: SectionNavProps) {
  return (
    <nav aria-label="Section outline" className="flex flex-col gap-0.5 text-sm">
      {sections.map((section) => (
        <div key={section.id}>
          <a href={`#${section.id}`} className="block py-1 text-ink-muted transition-colors hover:text-accent">
            {section.title}
          </a>
          {section.children && section.children.length > 0 && (
            <div className="ml-3 flex flex-col">
              {section.children.map((child) => (
                <a
                  key={child.id}
                  href={`#${child.id}`}
                  className="block py-1 text-xs text-ink-faint transition-colors hover:text-accent"
                >
                  {child.title}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
