import type { Trial } from "@/content-types";

export const akiStarrtAki: Trial = {
  id: "aki-starrt-aki",
  name: "STARRT-AKI",
  title: "Timing of Initiation of Renal-Replacement Therapy in Acute Kidney Injury",
  year: 2020,
  journal: "New England Journal of Medicine",
  doi: "10.1056/NEJMoa2000741",
  studyType: "rct",
  significance: "landmark",
  design: "International, multicenter, randomized controlled trial — the largest RRT-timing trial to date.",
  clinicalQuestion: "In critically ill adults with severe AKI, does an accelerated RRT initiation strategy improve 90-day survival compared with a standard, watchful-waiting strategy?",
  population: "3,019 critically ill adults with severe AKI (2,927 analyzed for the primary outcome), across sites in multiple countries.",
  intervention: "Accelerated strategy: RRT initiated promptly after meeting eligibility, generally within 12 hours.",
  comparator: "Standard strategy: RRT deferred unless a conventional indication developed, or AKI persisted beyond 72 hours.",
  primaryOutcome: "90-day all-cause mortality.",
  secondaryOutcomes: ["RRT dependence at 90 days.", "Adverse events (including hypotension and arrhythmia)."],
  result: {
    summary: "No significant difference in 90-day mortality between accelerated and standard strategies. A substantial proportion (roughly 38%) of the standard-strategy group avoided RRT entirely without a mortality penalty. The accelerated strategy was associated with more adverse events.",
  },
  resultDirection: "negative-neutral",
  whatItFound:
    "In the largest and most rigorously powered trial of RRT timing to date, an accelerated initiation strategy did not improve 90-day survival compared with watchful waiting, and watchful waiting safely avoided RRT altogether in a large minority of patients.",
  clinicalInterpretation:
    "STARRT-AKI is the strongest single piece of evidence against routine early/accelerated RRT initiation in AKI without a specific indication — it reinforces AKIKI and IDEAL-ICU, and its size and rigor argue against generalizing ELAIN's earlier, smaller, single-center positive result to general practice.",
  currentGuidelinePosition:
    "The weight of evidence (AKIKI, IDEAL-ICU, STARRT-AKI, all neutral or favoring watchful waiting, against ELAIN's isolated positive result) supports initiating RRT based on a clinical indication rather than a fixed AKI stage — this evidence predates and is expected to inform the still-in-draft KDIGO 2026 RRT timing guidance.",
  limitations: [
    "Accelerated strategy was associated with more adverse events (e.g. hypotension), a real trade-off against any hypothetical benefit.",
    "Excluded patients with an immediate life-threatening indication for RRT.",
  ],
  relatedTopicIds: ["aki", "crrt"],
  certainty: "high",
};
