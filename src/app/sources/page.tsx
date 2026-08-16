import type { Metadata } from "next";
import { getAllGuidelines, getAllSystematicReviews, getAllTrials } from "@/registry";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ReferenceCard } from "@/components/evidence/ReferenceCard";
import { getGuidelineEvidenceCategory, getTrialEvidenceCategory } from "@/lib/evidence-style";

export const metadata: Metadata = { title: "Sources" };

const statusLabel: Record<string, string> = {
  current: "Current",
  historical: "Historical",
  superseded: "Superseded",
  "public-review-draft": "Draft",
};

// Multiple Guideline entries often share one parent document title (one
// entry per recommendation) — lead with the recommendation text so cards
// for the same document don't render as visual duplicates in this flat list.
function shortenRecommendation(text: string, max = 70): string {
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;
}

export default function SourcesPage() {
  const trials = getAllTrials();
  const guidelines = getAllGuidelines();
  const reviews = getAllSystematicReviews();

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-2">
        <Breadcrumbs items={[{ label: "Sources" }]} />
        <h1 className="text-2xl font-semibold text-ink">Sources</h1>
        <p className="mt-1 max-w-2xl text-sm text-ink-muted">
          Foundational physiology and general management principles are adapted, in original
          wording, from the framework of Irwin &amp; Rippe&apos;s Intensive Care Medicine (9th
          edition, 2023). No text is copied from the textbook. Current recommendations and primary
          evidence are cited individually below.
        </p>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">Trials</h2>
        <div className="flex flex-col gap-2">
          {trials.map((trial) => (
            <ReferenceCard
              key={trial.id}
              title={trial.name}
              meta={`${trial.journal}, ${trial.year}${trial.doi ? ` · doi:${trial.doi}` : ""}`}
              category={getTrialEvidenceCategory(trial)}
              href={`/trials/${trial.id}`}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">Guidelines</h2>
        <div className="flex flex-col gap-2">
          {guidelines.map((guideline) => (
            <ReferenceCard
              key={guideline.id}
              title={`${guideline.abbreviation}: ${shortenRecommendation(guideline.recommendationText)}`}
              meta={`${guideline.society}, ${guideline.year} · ${statusLabel[guideline.status]}`}
              category={getGuidelineEvidenceCategory(guideline)}
              href={`/guidelines/${guideline.id}`}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">Systematic Reviews</h2>
        <div className="flex flex-col gap-2">
          {reviews.map((review) => (
            <ReferenceCard
              key={review.id}
              title={review.title}
              meta={`${review.authorsOrGroup}, ${review.year}`}
              category="meta-analysis"
              href={`/evidence/${review.id}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
