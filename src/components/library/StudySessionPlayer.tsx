"use client";

import { useState } from "react";
import Link from "next/link";
import { useStudySets } from "@/hooks/useStudySets";
import { CONTENT_KIND_LABEL } from "@/lib/content-id";
import type { ResolvedItem } from "./StudySetsPanel";

interface StudySessionPlayerProps {
  readonly setId: string;
  readonly catalog: readonly ResolvedItem[];
}

/**
 * Walks the learner through a saved set in their chosen order.
 * Deliberately does NOT generate new questions — it sequences existing,
 * reviewed content only.
 */
export function StudySessionPlayer({ setId, catalog }: StudySessionPlayerProps) {
  const { studySets } = useStudySets();
  const [position, setPosition] = useState(0);

  const set = studySets.find((entry) => entry.id === setId);
  const byId = new Map(catalog.map((item) => [item.contentId, item] as const));

  if (!set) {
    return (
      <div className="rounded-xl border border-border bg-surface p-8 text-center">
        <p className="text-sm text-ink-muted">
          This study set no longer exists in this browser.
        </p>
        <Link href="/library" className="mt-3 inline-block text-sm font-medium text-accent hover:underline">
          Back to My Library
        </Link>
      </div>
    );
  }

  const items = set.itemIds
    .map((id) => byId.get(id))
    .filter((item): item is ResolvedItem => item !== undefined);

  if (items.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-surface p-8 text-center">
        <p className="text-sm text-ink-muted">This set is empty. Add some content to start a session.</p>
        <Link href="/library" className="mt-3 inline-block text-sm font-medium text-accent hover:underline">
          Back to My Library
        </Link>
      </div>
    );
  }

  const safePosition = Math.min(position, items.length - 1);
  const current = items[safePosition];
  const progress = Math.round(((safePosition + 1) / items.length) * 100);

  return (
    <div className="space-y-5">
      <div>
        <div className="flex items-baseline justify-between gap-3 text-sm">
          <h2 className="font-semibold text-ink">{set.name}</h2>
          <span className="tabular-nums text-ink-muted">
            {safePosition + 1} of {items.length}
          </span>
        </div>
        <div
          className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface-muted"
          role="progressbar"
          aria-valuenow={safePosition + 1}
          aria-valuemin={1}
          aria-valuemax={items.length}
          aria-label="Study session progress"
        >
          <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <article className="rounded-xl border border-border bg-surface p-5" aria-live="polite">
        <span className="text-[10px] font-bold uppercase tracking-wider text-ink-faint">
          {CONTENT_KIND_LABEL[current.kind]}
        </span>
        <h3 className="mt-1.5 text-lg font-semibold text-ink">{current.title}</h3>
        <p className="mt-1 text-sm text-ink-muted">{current.subtitle}</p>
        <Link
          href={current.href}
          className="mt-4 inline-flex min-h-11 items-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-contrast"
        >
          Open this item →
        </Link>
      </article>

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setPosition((p) => Math.max(0, p - 1))}
          disabled={safePosition === 0}
          className="min-h-11 rounded-lg border border-border px-4 py-2 text-sm font-medium text-ink transition-opacity disabled:opacity-40"
        >
          ← Previous
        </button>

        {safePosition === items.length - 1 ? (
          <Link
            href="/library"
            className="min-h-11 rounded-lg border border-border px-4 py-2 text-sm font-medium text-ink"
          >
            Finish session
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => setPosition((p) => Math.min(items.length - 1, p + 1))}
            className="min-h-11 rounded-lg border border-border px-4 py-2 text-sm font-medium text-ink"
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}
