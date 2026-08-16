import Link from "next/link";
import type { ResolvedRelationship } from "@/registry/build-graph";
import type { RelationshipType } from "@/content-types";
import { categoryStyle } from "@/lib/category-style";
import { relationshipTypeLabel as typeLabel } from "@/lib/relationship-style";
import { Accordion } from "@/components/ui/Accordion";

interface RelationshipTreeProps {
  readonly relationships: readonly ResolvedRelationship[];
}

/** Mobile/tablet substitute for RelationshipGraph — a native accordion grouped by relationship type. */
export function RelationshipTree({ relationships }: RelationshipTreeProps) {
  if (relationships.length === 0) {
    return <p className="text-sm text-ink-faint">No related topics yet.</p>;
  }

  const grouped = new Map<RelationshipType, ResolvedRelationship[]>();
  for (const relationship of relationships) {
    const list = grouped.get(relationship.type) ?? [];
    list.push(relationship);
    grouped.set(relationship.type, list);
  }

  return (
    <div className="flex flex-col gap-2">
      {[...grouped.entries()].map(([type, items]) => (
        <Accordion key={type} summary={`${typeLabel[type]} (${items.length})`}>
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={`${item.direction}-${item.relatedTopic.id}`}>
                {item.relatedTopic.status !== "stub" ? (
                  <Link
                    href={`/topics/${item.relatedTopic.slug}`}
                    className="inline-flex items-center gap-1.5 py-1 text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${categoryStyle[item.relatedTopic.category].dotClass}`}
                      aria-hidden
                    />
                    {item.relatedTopic.title}
                    {item.relatedTopic.status === "placeholder" && <span className="text-xs">(placeholder)</span>}
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-1.5 py-1 text-sm text-ink-faint">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${categoryStyle[item.relatedTopic.category].dotClass}`}
                      aria-hidden
                    />
                    {item.relatedTopic.title}
                    <span className="text-xs">(coming soon)</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </div>
  );
}
