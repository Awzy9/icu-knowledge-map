"use client";

import { Fragment, useMemo, useState } from "react";
import Link from "next/link";
import type { Comparison, ComparisonRow } from "@/content-types/comparison";
import { cn } from "@/lib/cn";

const GROUP_LABEL: Partial<Record<NonNullable<ComparisonRow["group"]>, string>> = {
  mechanism: "Mechanism",
  assessment: "Assessment",
  management: "Management",
  traps: "Traps & pitfalls",
};

/**
 * ONE reusable renderer for every comparison.
 * Desktop: comparison matrix. Mobile (<md): entity selector + stacked cards.
 * No horizontally overflowing tables at any width.
 */
export function ClinicalComparisonView({ comparison }: { comparison: Comparison }) {
  const { title, subtitle, entities, rows, caveat, references } = comparison;
  const [selectedId, setSelectedId] = useState(entities[0].id);

  const rowsByEntity = useMemo(() => {
    const map = new Map<
      string,
      { label: string; content: string; emphasis?: boolean; group?: ComparisonRow["group"] }[]
    >();
    for (const e of entities) map.set(e.id, []);
    for (const row of rows) {
      for (const v of row.values) {
        map.get(v.entityId)?.push({
          label: row.label,
          content: v.content,
          emphasis: v.emphasis,
          group: row.group,
        });
      }
    }
    return map;
  }, [entities, rows]);

  const cellOf = (row: ComparisonRow, entityId: string) =>
    row.values.find((v) => v.entityId === entityId);
  const startsGroup = (index: number) => rows[index - 1]?.group !== rows[index]?.group;

  return (
    <section aria-labelledby="comparison-title">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">{comparison.system}</p>
        <h1 id="comparison-title" className="mt-1 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {title}
        </h1>
        {subtitle && <p className="mt-1 text-sm text-ink-muted sm:text-base">{subtitle}</p>}
      </header>

      {/* ---------------- Desktop matrix ---------------- */}
      <div className="mt-6 hidden overflow-hidden rounded-xl border border-border md:block">
        <table className="w-full border-collapse text-left align-top text-sm">
          <caption className="sr-only">{title}</caption>
          <thead>
            <tr className="bg-surface">
              <th scope="col" className="w-44 p-3 font-semibold text-ink">Feature</th>
              {entities.map((e) => (
                <th scope="col" key={e.id} className="p-3 font-semibold text-ink">
                  {e.href ? (
                    <Link href={e.href} className="underline-offset-2 hover:underline">{e.label}</Link>
                  ) : (
                    e.label
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <Fragment key={row.label}>
                {row.group && startsGroup(i) && (
                  <tr aria-hidden="true">
                    <td
                      colSpan={entities.length + 1}
                      className="bg-accent-soft px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-muted"
                    >
                      {GROUP_LABEL[row.group] ?? row.group}
                    </td>
                  </tr>
                )}
                <tr className="border-t border-border/60">
                  <th scope="row" className="w-44 p-3 align-top font-medium text-ink-muted">
                    {row.label}
                  </th>
                  {entities.map((e) => {
                    const cell = cellOf(row, e.id);
                    return (
                      <td
                        key={e.id}
                        className={cn(
                          "p-3 align-top leading-relaxed text-ink",
                          cell?.emphasis && "border-x-2 border-accent/40 bg-accent/5 font-semibold",
                        )}
                      >
                        {cell?.content ?? "—"}
                      </td>
                    );
                  })}
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------------- Mobile: selector + stacked cards ---------------- */}
      <div className="mt-4 md:hidden">
        <div
          role="tablist"
          aria-label="Choose entity"
          className="-mx-1 flex snap-x gap-2 overflow-x-auto px-1 pb-1"
        >
          {entities.map((e) => (
            <button
              key={e.id}
              type="button"
              role="tab"
              aria-selected={selectedId === e.id}
              onClick={() => setSelectedId(e.id)}
              className={cn(
                "min-h-11 shrink-0 snap-start cursor-pointer whitespace-nowrap rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent",
                selectedId === e.id
                  ? "border-accent bg-accent text-white"
                  : "border-border bg-surface text-ink-muted",
              )}
            >
              {selectedId === e.id ? "▸ " : ""}
              {e.label}
            </button>
          ))}
        </div>

        {(() => {
          const sel = entities.find((e) => e.id === selectedId);
          if (!sel) return null;
          const items = rowsByEntity.get(selectedId) ?? [];
          return (
            <div role="tabpanel" aria-label={`${sel.label} details`} className="mt-4 space-y-3">
              <div className="rounded-lg bg-accent-soft px-4 py-2 text-sm font-bold text-ink">
                Comparing: {sel.href ? <Link href={sel.href}>{sel.label}</Link> : sel.label}
              </div>
              {items.map((item) => (
                <article
                  key={item.label}
                  className={cn(
                    "rounded-xl border p-4",
                    item.emphasis ? "border-accent/50 bg-accent/5" : "border-border bg-surface",
                  )}
                >
                  <h3 className="text-[11px] font-bold uppercase tracking-wide text-ink-muted">
                    {item.group ? `${GROUP_LABEL[item.group] ?? item.group} · ` : ""}
                    {item.label}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink">{item.content}</p>
                </article>
              ))}
            </div>
          );
        })()}
      </div>

      {caveat && (
        <aside
          className="mt-6 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-sm leading-relaxed text-ink"
          role="note"
        >
          <strong className="font-semibold">Read carefully: </strong>
          {caveat}
        </aside>
      )}

      {(references?.length ?? 0) > 0 && (
        <footer className="mt-6 text-xs text-ink-muted">
          <h2 className="font-semibold uppercase tracking-wide">Sources</h2>
          <ul className="mt-1 list-disc space-y-0.5 pl-4">
            {references!.map((r) => (
              <li key={r.label}>
                {r.url ? (
                  <a href={r.url} className="hover:underline">{r.label}</a>
                ) : (
                  r.label
                )}
              </li>
            ))}
          </ul>
        </footer>
      )}
    </section>
  );
}
