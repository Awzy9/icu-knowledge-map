import type { Trial } from "@/content-types";

export const sepsisVasst: Trial = {
  id: "sepsis-vasst",
  name: "VASST",
  title: "Vasopressin versus Norepinephrine Infusion in Patients with Septic Shock",
  year: 2008,
  journal: "New England Journal of Medicine",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter, randomized, double-blind trial.",
  clinicalQuestion: "In septic shock already requiring norepinephrine, does adding low-dose vasopressin instead of continuing to titrate norepinephrine alone improve mortality?",
  population: "778 adults with septic shock already receiving norepinephrine (≥5 μg/min).",
  intervention: "Low-dose vasopressin infusion added to open-label norepinephrine.",
  comparator: "Additional norepinephrine alone (vasopressin infusion replaced with more norepinephrine).",
  primaryOutcome: "28-day all-cause mortality.",
  result: {
    summary: "No significant difference in 28-day mortality overall between vasopressin and norepinephrine-only strategies.",
    effectSize: "28-day mortality 35.4% (vasopressin) vs 39.3% (norepinephrine)",
    pValue: "p = 0.26",
  },
  resultDirection: "negative-neutral",
  whatItFound:
    "Adding vasopressin to norepinephrine did not significantly reduce 28-day mortality compared with norepinephrine alone in the overall trial population. A pre-specified subgroup analysis suggested a possible mortality benefit in patients with less severe shock (lower baseline norepinephrine dose), but subgroup findings in a formally neutral trial are hypothesis-generating, not confirmatory.",
  clinicalInterpretation:
    "VASST is the main trial-level basis for using vasopressin as an add-on agent in septic shock rather than as a norepinephrine replacement, but it did not establish a mortality benefit for the overall population — the rationale for adding it (reducing norepinephrine dose requirements, catecholamine-sparing) is physiologic and practical rather than a demonstrated survival benefit.",
  currentGuidelinePosition:
    "The 2026 Surviving Sepsis Campaign guideline conditionally suggests adding vasopressin in patients with escalating norepinephrine doses, consistent with VASST's design (add-on, not replacement) but without claiming a proven mortality benefit.",
  limitations: [
    "Overall trial result was neutral for mortality; the less-severe-shock subgroup signal is exploratory.",
    "Excluded patients requiring very high-dose norepinephrine at enrollment.",
  ],
  relatedTopicIds: ["septic-shock"],
  certainty: "moderate",
};
