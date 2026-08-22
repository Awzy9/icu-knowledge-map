import Link from "next/link";
import { getComparisonIdsForTopic, getComparison } from "@/content/comparisons";

/** Contextual [Compare] buttons rendered on topic pages via the shared map. */
export function TopicCompareLinks({ topicId }: { topicId: string }) {
  const ids = getComparisonIdsForTopic(topicId);
  if (ids.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2" aria-label="Related comparisons">
      <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">Compare:</span>
      {ids.map((id) => {
        const c = getComparison(id);
        if (!c) return null;
        return (
          <Link
            key={id}
            href={`/compare/${id}`}
            className="inline-flex min-h-9 items-center gap-1 rounded-full border border-accent/40 bg-accent/5 px-3 py-1 text-xs font-semibold text-accent transition-colors hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            ⇄ {c.title}
          </Link>
        );
      })}
    </div>
  );
}
