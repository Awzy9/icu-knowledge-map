import Link from "next/link";

export interface RelatedConceptItem {
  readonly id: string;
  readonly href: string;
  readonly title: string;
}

interface RelatedConceptsRowProps {
  readonly items: readonly RelatedConceptItem[];
  readonly label?: string;
}

/** The related-item chip row duplicated across topic/trial/guideline/calculator/pathway/physiology/problem detail pages. */
export function RelatedConceptsRow({ items, label = "Related topics" }: RelatedConceptsRowProps) {
  if (items.length === 0) return null;

  return (
    <div className="flex flex-col gap-2 border-t border-border pt-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">{label}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="rounded-full border border-border px-3 py-1 text-xs text-ink-muted transition-colors hover:border-border-strong hover:text-ink"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
