import type { Trial } from "@/content-types";

export const akiElain: Trial = {
  id: "aki-elain",
  name: "ELAIN",
  title: "Effect of Early vs Delayed Initiation of Renal Replacement Therapy on Mortality in Critically Ill Patients With Acute Kidney Injury: The ELAIN Randomized Clinical Trial",
  year: 2016,
  journal: "JAMA",
  doi: "10.1001/jama.2016.5828",
  studyType: "rct",
  significance: "landmark",
  design: "Single-center (German), randomized controlled trial.",
  clinicalQuestion: "In a high-risk, biomarker-enriched population with KDIGO stage 2 AKI, does early RRT initiation improve 90-day survival compared with delayed initiation?",
  population: "231 critically ill adults with KDIGO stage 2 AKI and an elevated plasma NGAL (a kidney-injury biomarker used to enrich for a higher-risk population), from a single academic center.",
  intervention: "Early strategy: RRT initiated within 8 hours of meeting KDIGO stage 2 criteria.",
  comparator: "Delayed strategy: RRT initiated within 12 hours of meeting KDIGO stage 3 criteria, or if a standard urgent indication developed.",
  primaryOutcome: "90-day all-cause mortality.",
  result: {
    summary: "Early RRT initiation significantly reduced 90-day mortality compared with delayed initiation.",
    effectSize: "90-day mortality 39.3% (early) vs 54.7% (delayed); HR 0.66",
  },
  resultDirection: "positive",
  whatItFound:
    "In this single-center trial of a biomarker-enriched, higher-risk KDIGO stage 2 population, early RRT initiation substantially reduced 90-day mortality — a notably larger and more clearly positive effect than any of the larger, later multicenter trials found.",
  clinicalInterpretation:
    "ELAIN is the outlier among the four major RRT-timing trials: its single-center design, biomarker-based patient enrichment, and earlier AKI stage at randomization (stage 2, versus stage 3 in AKIKI) all differ from the larger, more recent, multicenter trials, which found no mortality benefit to early initiation. It has not been replicated at multicenter scale, so it should not be read as outweighing the larger neutral trials for general practice.",
  currentGuidelinePosition:
    "Current practice weighs ELAIN's positive result against the larger, more recent multicenter trials (AKIKI, IDEAL-ICU, STARRT-AKI), which collectively favor watchful waiting over routine early initiation for most patients without a specific enrichment strategy like ELAIN's.",
  limitations: [
    "Single-center design limits generalizability.",
    "Used a specific biomarker (NGAL) to enrich the population, which most institutions do not use routinely to guide RRT timing decisions.",
    "The magnitude of benefit is substantially larger than in any other trial in this area, which itself is a reason for some caution before generalizing the result.",
  ],
  relatedTopicIds: ["aki", "crrt"],
  certainty: "moderate",
};
