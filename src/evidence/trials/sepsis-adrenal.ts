import type { Trial } from "@/content-types";

export const sepsisAdrenal: Trial = {
  id: "sepsis-adrenal",
  name: "ADRENAL",
  title: "Adjunctive Glucocorticoid Therapy in Patients with Septic Shock",
  year: 2018,
  journal: "New England Journal of Medicine",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter, randomized, double-blind, placebo-controlled trial.",
  clinicalQuestion: "In mechanically ventilated adults with septic shock, does a continuous hydrocortisone infusion reduce 90-day mortality?",
  population: "3,800 mechanically ventilated adults with septic shock requiring vasopressor support.",
  intervention: "Hydrocortisone 200 mg/day by continuous IV infusion.",
  comparator: "Placebo.",
  primaryOutcome: "90-day all-cause mortality.",
  secondaryOutcomes: ["Time to shock resolution.", "Duration of mechanical ventilation.", "ICU length of stay."],
  result: {
    summary: "No significant 90-day mortality difference, but hydrocortisone shortened time to shock resolution.",
    effectSize: "90-day mortality 27.9% (hydrocortisone) vs 28.8% (placebo)",
    pValue: "OR 0.95, 95% CI 0.82-1.10",
  },
  resultDirection: "negative-neutral",
  whatItFound:
    "Continuous hydrocortisone infusion did not reduce 90-day mortality compared with placebo, though it resolved shock faster and shortened initial ICU stay.",
  clinicalInterpretation:
    "ADRENAL and APROCCHSS tested different steroid regimens (hydrocortisone alone vs hydrocortisone plus fludrocortisone, with some protocol differences) and reached different conclusions about mortality — this is a genuine, unresolved tension in the corticosteroid evidence base, not a case where one trial should be read as simply correct and the other wrong. See Controversies.",
  currentGuidelinePosition:
    "The 2026 Surviving Sepsis Campaign guideline suggests using IV corticosteroids in septic shock on conditional, low-certainty evidence — a position that has to weigh ADRENAL's neutral mortality result against APROCCHSS's positive one.",
  limitations: [
    "Used hydrocortisone alone without fludrocortisone, unlike APROCCHSS.",
    "Neutral primary outcome despite a large sample size, which strengthens confidence that any true mortality effect of this specific regimen is small.",
  ],
  relatedTopicIds: ["septic-shock"],
  certainty: "high",
};
