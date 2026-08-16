import type { Metadata } from "next";
import { getAllGuidelines, getAllSystematicReviews, getAllTopics, getAllTrials } from "@/registry";
import { EvidenceExplorer } from "@/components/evidence/EvidenceExplorer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = { title: "Evidence Explorer" };

export default function EvidencePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Evidence Explorer" }]} />
      <h1 className="mt-2 text-2xl font-semibold text-ink">Evidence Explorer</h1>
      <p className="mt-1 max-w-2xl text-sm text-ink-muted">
        Trials, guidelines, and systematic reviews together — filterable by evidence type, topic,
        year, organization, journal, landmark/recent status, and result direction.
      </p>
      <div className="mt-6">
        <EvidenceExplorer
          trials={getAllTrials()}
          guidelines={getAllGuidelines()}
          reviews={getAllSystematicReviews()}
          topics={getAllTopics()}
        />
      </div>
    </div>
  );
}
