import { Accordion } from "@/components/ui/Accordion";

interface MobileSectionNavItem {
  readonly id: string;
  readonly title: string;
  readonly depth?: 0 | 1;
}

interface MobileSectionNavProps {
  readonly items: readonly MobileSectionNavItem[];
}

export function MobileSectionNav({ items }: MobileSectionNavProps) {
  if (items.length === 0) return null;

  return (
    <Accordion summary="Jump to section">
      <nav aria-label="Section jump menu" className="flex flex-col gap-1">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`text-sm text-ink-muted transition-colors hover:text-accent ${item.depth === 1 ? "pl-4" : ""}`}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </Accordion>
  );
}
