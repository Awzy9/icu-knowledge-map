import type { Metadata } from "next";
import { getAllTrials } from "@/registry";
import { TrialCard } from "@/components/evidence/TrialCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = { title: "Landmark Trials" };

export default function TrialsIndexPage() {
  const trials = getAllTrials();

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-2">
        <Breadcrumbs items={[{ label: "Trials" }]} />
        <h1 className="text-2xl font-semibold text-ink">Landmark Trials</h1>
        <p className="mt-1 max-w-2xl text-sm text-ink-muted">
          The primary randomized trials behind current critical care practice, each showing what
          it found separately from how it&apos;s interpreted.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {trials.map((trial) => (
          <TrialCard key={trial.id} trial={trial} />
        ))}
      </div>
    </div>
  );
}
