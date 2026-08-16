import type { ReactNode } from "react";

interface AccordionProps {
  readonly summary: ReactNode;
  readonly children: ReactNode;
  readonly defaultOpen?: boolean;
}

/**
 * Native <details>/<summary> — no JS required, works before hydration.
 * Formalizes the pattern previously copy-pasted across MobileSectionNav,
 * RelationshipTree, and the mobile Knowledge Map view.
 */
export function Accordion({ summary, children, defaultOpen = false }: AccordionProps) {
  return (
    <details className="group rounded-md border border-border bg-surface" open={defaultOpen}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3 text-sm font-medium text-ink [&::-webkit-details-marker]:hidden">
        <span>{summary}</span>
        <svg
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5 shrink-0 text-ink-faint transition-transform duration-150 group-open:rotate-180"
          aria-hidden
        >
          <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div className="border-t border-border px-4 py-3">{children}</div>
    </details>
  );
}
