import { categoryStyle } from "@/lib/category-style";
import type { TopicCategory } from "@/content-types";

const categories = Object.keys(categoryStyle) as TopicCategory[];

export function GraphLegend() {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-ink-muted">
      {categories.map((category) => (
        <span key={category} className="inline-flex items-center gap-1.5">
          <span className={`h-2 w-2 rounded-full ${categoryStyle[category].dotClass}`} aria-hidden />
          {categoryStyle[category].label}
        </span>
      ))}
      <span className="inline-flex items-center gap-1.5">
        <svg width="16" height="2" aria-hidden>
          <line x1="0" y1="1" x2="16" y2="1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        Direct relationship
      </span>
      <span className="inline-flex items-center gap-1.5">
        <svg width="16" height="2" aria-hidden>
          <line x1="0" y1="1" x2="16" y2="1" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
        Related / differential
      </span>
    </div>
  );
}
