import type { Trial } from "@/content-types";

export const sepsisAprocchss: Trial = {
  id: "sepsis-aprocchss",
  name: "APROCCHSS",
  title: "Hydrocortisone plus Fludrocortisone for Adults with Septic Shock",
  year: 2018,
  journal: "New England Journal of Medicine",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter, randomized, double-blind, placebo-controlled, 2x2 factorial trial (steroids and activated protein C, the latter arm halted mid-trial for unrelated reasons).",
  clinicalQuestion: "In adults with septic shock, does hydrocortisone plus fludrocortisone reduce 90-day mortality?",
  population: "1,241 adults with septic shock.",
  intervention: "Hydrocortisone plus fludrocortisone.",
  comparator: "Placebo.",
  primaryOutcome: "90-day all-cause mortality.",
  result: {
    summary: "Hydrocortisone plus fludrocortisone reduced 90-day mortality compared with placebo.",
    effectSize: "90-day mortality 43.0% vs 49.1%",
    pValue: "RR 0.88, 95% CI 0.78-0.99, p = 0.03",
  },
  resultDirection: "positive",
  whatItFound:
    "Hydrocortisone combined with fludrocortisone reduced 90-day mortality compared with placebo in adults with septic shock.",
  clinicalInterpretation:
    "APROCCHSS and ADRENAL tested meaningfully different regimens (combined mineralocorticoid/glucocorticoid vs. glucocorticoid alone, with differing severity thresholds for enrollment) and reached different mortality conclusions. Current practice and the 2026 SSC's conditional, low-certainty recommendation reflect this unresolved tension rather than treating either trial as definitively settling the question — see Controversies.",
  currentGuidelinePosition:
    "The 2026 Surviving Sepsis Campaign guideline suggests using IV corticosteroids in septic shock (conditional, low certainty), without specifying hydrocortisone-alone versus hydrocortisone-plus-fludrocortisone as a distinctly graded choice.",
  limitations: [
    "Factorial design with a co-intervention (activated protein C) that was withdrawn from the market partway through the trial, complicating interpretation of that portion of the factorial analysis (the steroid comparison itself is not invalidated by this).",
    "Enrolled a population with somewhat higher illness severity than ADRENAL, which may partly explain the differing results.",
  ],
  relatedTopicIds: ["septic-shock"],
  certainty: "moderate",
};
