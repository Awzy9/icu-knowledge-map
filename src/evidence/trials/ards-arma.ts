import type { Trial } from "@/content-types";

export const ardsArma: Trial = {
  id: "ards-arma",
  name: "ARMA (ARDSNet)",
  title: "Ventilation with Lower Tidal Volumes as Compared with Traditional Tidal Volumes for Acute Lung Injury and the Acute Respiratory Distress Syndrome",
  year: 2000,
  journal: "New England Journal of Medicine",
  doi: "10.1056/NEJM200005043421801",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter, randomized controlled trial, unblinded",
  clinicalQuestion: "Does ventilating with a lower tidal volume reduce mortality compared with traditional tidal volumes in acute lung injury and ARDS?",
  population: "861 patients with acute lung injury or ARDS across North American ARDS Network centers.",
  inclusionCriteria: [
    "Acute lung injury or ARDS by the contemporaneous consensus definition.",
    "Already receiving mechanical ventilation.",
  ],
  intervention: "Tidal volume 6 mL/kg predicted body weight, with plateau pressure kept ≤ 30 cmH2O.",
  comparator: "Traditional tidal volume 12 mL/kg predicted body weight, with plateau pressure kept ≤ 50 cmH2O.",
  primaryOutcome: "All-cause in-hospital mortality before unassisted breathing.",
  secondaryOutcomes: ["Ventilator-free days through day 28."],
  result: {
    summary: "The low tidal volume strategy reduced mortality compared with the traditional higher tidal volume strategy.",
    effectSize: "31.0% vs 39.8% mortality",
    pValue: "p = 0.007",
  },
  resultDirection: "positive",
  whatItFound:
    "Ventilating with 6 mL/kg predicted body weight and a plateau pressure ceiling of 30 cmH2O lowered mortality compared with 12 mL/kg ventilation, and trial enrollment was stopped early for benefit.",
  clinicalInterpretation:
    "This trial established low tidal volume ventilation as the default strategy for essentially all patients with ARDS, largely independent of severity, and it anchors every major ARDS ventilation guideline written since.",
  currentGuidelinePosition:
    "The 2017 ATS/ESICM/SCCM guideline gives a strong recommendation for low tidal volume ventilation (approximately 4-8 mL/kg predicted body weight) with attention to plateau pressure, built directly on this trial.",
  limitations: [
    "Unblinded, as is unavoidable for a ventilator-strategy trial.",
    "The traditional-tidal-volume comparator (12 mL/kg) was higher than some contemporaneous practice, which may have widened the observed benefit.",
  ],
  relatedTopicIds: ["ards"],
  certainty: "high",
};
