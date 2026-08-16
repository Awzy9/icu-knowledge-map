import type { Metadata } from "next";
import { getAllGuidelines } from "@/registry";
import { GuidelineCard } from "@/components/evidence/GuidelineCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = { title: "Guidelines" };

export default function GuidelinesIndexPage() {
  const guidelines = getAllGuidelines();
  const bySociety = new Map<string, typeof guidelines[number][]>();
  for (const guideline of guidelines) {
    const list = bySociety.get(guideline.abbreviation) ?? [];
    list.push(guideline);
    bySociety.set(guideline.abbreviation, list);
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-2">
        <Breadcrumbs items={[{ label: "Guidelines" }]} />
        <h1 className="text-2xl font-semibold text-ink">Guidelines</h1>
        <p className="mt-1 max-w-2xl text-sm text-ink-muted">
          Current professional society recommendations, grouped by society. Each recommendation is
          paraphrased and links back to its source topic.
        </p>
      </div>
      {[...bySociety.entries()].map(([society, items]) => (
        <section key={society} className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">{society}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {items.map((guideline) => (
              <GuidelineCard key={guideline.id} guideline={guideline} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
