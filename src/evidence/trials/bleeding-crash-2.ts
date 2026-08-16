import type { Trial } from "@/content-types";

export const bleedingCrash2: Trial = {
  id: "bleeding-crash-2",
  name: "CRASH-2",
  title: "Effects of Tranexamic Acid on Death, Vascular Occlusive Events, and Blood Transfusion in Trauma Patients with Significant Haemorrhage",
  year: 2010,
  journal: "The Lancet",
  studyType: "rct",
  significance: "landmark",
  design: "International, multicenter, randomized, placebo-controlled trial.",
  clinicalQuestion: "In trauma patients with or at risk of significant hemorrhage, does tranexamic acid reduce mortality?",
  population: "20,211 adult trauma patients with, or at risk of, significant hemorrhage, treated within 8 hours of injury.",
  intervention: "IV tranexamic acid.",
  comparator: "Placebo.",
  primaryOutcome: "All-cause mortality at 28 days.",
  secondaryOutcomes: ["Vascular occlusive events.", "Blood transfusion requirement.", "Death due to bleeding, by time to treatment."],
  result: {
    summary: "Tranexamic acid significantly reduced 28-day all-cause mortality; the survival benefit was concentrated in patients treated within 3 hours of injury.",
    effectSize: "28-day mortality 14.5% (TXA) vs 16.0% (placebo)",
    pValue: "RR 0.91, 95% CI 0.85-0.97",
  },
  resultDirection: "positive",
  whatItFound:
    "Tranexamic acid given within 8 hours of trauma reduced all-cause mortality, with the benefit for death due to bleeding concentrated in patients treated within 3 hours of injury — later administration showed a diminished, and in subsequent analyses potentially reversed, effect.",
  clinicalInterpretation:
    "CRASH-2 established early tranexamic acid as standard of care in trauma with significant hemorrhage, with the specific, time-dependent finding that earlier administration matters — this is the basis for treating TXA as most beneficial within a 3-hour window rather than a drug with a flat benefit regardless of timing.",
  currentGuidelinePosition:
    "Early tranexamic acid (within 3 hours of injury) in trauma with significant hemorrhage is widely adopted as standard practice, based on this trial.",
  limitations: [
    "Broad, pragmatic inclusion criteria ('significant hemorrhage or risk of') mean not every enrolled patient had confirmed major bleeding.",
    "Benefit diminishes and may reverse beyond 3 hours from injury — TXA is not supported as a late intervention by this trial.",
  ],
  relatedTopicIds: ["bleeding"],
  certainty: "high",
};
