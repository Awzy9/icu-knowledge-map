import type { CertaintyGrade } from "@/content-types";
import { certaintyDots, certaintyLabel } from "@/lib/evidence-style";

/** Typographic filled-dot scale — deliberately not a gimmicky meter graphic. */
export function CertaintyIndicator({ certainty }: { readonly certainty: CertaintyGrade }) {
  const filled = certaintyDots[certainty];
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-ink-muted">
      <span className="inline-flex gap-0.5" aria-hidden>
        {Array.from({ length: 4 }, (_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full ${i < filled ? "bg-ink" : "bg-border"}`}
          />
        ))}
      </span>
      {certaintyLabel[certainty]}
    </span>
  );
}
