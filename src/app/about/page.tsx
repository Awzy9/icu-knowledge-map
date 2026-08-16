import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = { title: "About & Editorial Policy" };

interface Tier {
  readonly label: string;
  readonly title: string;
  readonly body: string;
}

const TIERS: readonly Tier[] = [
  {
    label: "Foundation",
    title: "Irwin & Rippe is the foundational textbook",
    body: "Foundational physiology, pathophysiology, and general management principles are written in original wording, using Irwin & Rippe's Intensive Care Medicine as a conceptual framework — not copied or reproduced from the textbook or from any other copyrighted source. Every topic that draws on it lists the edition in its Sources & Provenance section.",
  },
  {
    label: "Guidelines",
    title: "Guidelines provide current recommendations",
    body: "Recommendations are drawn from professional society guidelines (e.g. SCCM, ATS, ESICM), paraphrased with the organization, year, and strength shown, and linked back to the source society where available. A guideline recommendation is never presented as though it were the trial finding it's based on.",
  },
  {
    label: "Primary Evidence",
    title: "Primary trials provide original evidence",
    body: "Landmark and recent trials are presented with what the trial itself found kept explicitly separate from how the field currently interprets that finding and from what guidelines now recommend as a result. A positive result is never treated as automatic justification for universal adoption.",
  },
  {
    label: "Synthesis",
    title: "Systematic reviews synthesize evidence",
    body: "Systematic reviews and meta-analyses are used to show where a body of trials agrees or disagrees, and to surface sensitivity to how the underlying studies differ — not as a substitute for reading the individual trials they pool.",
  },
  {
    label: "Current Status",
    title: "Every topic states how current its sourcing is",
    body: "Each topic's Sources & Provenance section includes a Current Status line naming the most recent guideline cycle or trial the content has actually been checked against. Where that check hasn't been done yet, the field says so explicitly rather than being left to imply the content is up to date.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-2">
        <Breadcrumbs items={[{ label: "About" }]} />
        <h1 className="text-2xl font-semibold text-ink">About &amp; Editorial Policy</h1>
        <p className="mt-1 text-sm text-ink-muted">
          Connect the physiology. Understand the evidence. Navigate critical care.
        </p>
      </div>

      <p className="text-sm leading-relaxed text-ink">
        ICU Knowledge Map is an educational reference for ICU learners and clinicians. It organizes
        critical care knowledge as an interconnected graph — clinical problems link to physiology,
        diagnosis, management, complications, guidelines, and the evidence behind each
        recommendation — rather than as a collection of standalone articles. Every topic follows the
        same five-tier source hierarchy, shown below and displayed on every topic page.
      </p>

      <div className="flex flex-col gap-5">
        {TIERS.map((tier) => (
          <div key={tier.label} className="rounded-md border border-border bg-surface p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">{tier.label}</p>
            <p className="mt-1 text-sm font-medium text-ink">{tier.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{tier.body}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 text-sm leading-relaxed text-ink">
        <div>
          <p className="font-medium text-ink">Sources are independently verified</p>
          <p className="mt-1 text-ink-muted">
            Every trial, guideline, and systematic review entry is checked against its own primary
            publication before it&apos;s added — not generated or inferred. Where a citation, a
            statistic, or a recommendation hasn&apos;t been verified yet, the content says so with an
            explicit TODO marker rather than presenting an unverified claim as settled. Topics still
            at that stage are labeled as placeholders, not as finished content.
          </p>
        </div>

        <div>
          <p className="font-medium text-ink">No AI-generated content</p>
          <p className="mt-1 text-ink-muted">
            This platform does not use artificial intelligence to generate, summarize, or interpret
            medical content, and it is not connected to any AI service. All content is written and
            structured directly by an editor.
          </p>
        </div>

        <div>
          <p className="font-medium text-ink">Not an official publication</p>
          <p className="mt-1 text-ink-muted">
            ICU Knowledge Map is an independent, unofficial reference. It is not affiliated with,
            endorsed by, or a publication of Irwin &amp; Rippe, Elsevier, or any of the professional
            societies whose guidelines it cites (including SCCM, ATS, and ESICM). References to
            those sources are citations, not claims of association.
          </p>
        </div>

        <p className="text-ink-muted">
          ICU Knowledge Map is an educational reference, not a substitute for clinical judgment,
          institutional protocols, or the primary literature it summarizes.
        </p>
      </div>
    </div>
  );
}
