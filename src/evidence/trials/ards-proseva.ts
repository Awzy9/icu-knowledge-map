import type { Trial } from "@/content-types";

export const ardsProseva: Trial = {
  id: "ards-proseva",
  name: "PROSEVA",
  title: "Prone Positioning in Severe Acute Respiratory Distress Syndrome",
  year: 2013,
  journal: "New England Journal of Medicine",
  doi: "10.1056/NEJMoa1214103",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter, randomized controlled trial, unblinded",
  clinicalQuestion: "Does early, prolonged prone positioning reduce mortality in severe ARDS?",
  population: "466 patients with severe ARDS (PaO2/FiO2 < 150 with FiO2 ≥ 0.6, PEEP ≥ 5) at French and Spanish centers.",
  inclusionCriteria: [
    "Severe ARDS: PaO2/FiO2 < 150 with FiO2 ≥ 0.6 and PEEP ≥ 5 cmH2O.",
    "Onset of ARDS within the preceding 36 hours.",
  ],
  intervention: "Prone positioning for at least 16 hours per day, on a background of low tidal volume ventilation.",
  comparator: "Supine positioning, on the same background of low tidal volume ventilation.",
  primaryOutcome: "28-day all-cause mortality.",
  secondaryOutcomes: ["90-day all-cause mortality.", "Time to successful extubation."],
  result: {
    summary: "Early, prolonged prone positioning reduced both 28-day and 90-day mortality in severe ARDS.",
    effectSize: "16.0% vs 32.8% 28-day mortality",
    pValue: "p < 0.001",
  },
  resultDirection: "positive",
  whatItFound:
    "In patients with severe ARDS ventilated with a lung-protective strategy, adding prone positioning for ≥16 hours/day, started early, substantially reduced mortality compared with staying supine.",
  clinicalInterpretation:
    "PROSEVA is the primary basis for recommending prone positioning specifically in severe ARDS (P/F < 150); the benefit has not been consistently shown in mild-to-moderate disease, so guidelines restrict the strong recommendation to the severe category.",
  currentGuidelinePosition:
    "The 2017 ATS/ESICM/SCCM guideline gives a strong recommendation for prone positioning more than 12 hours/day in severe ARDS, built directly on this trial.",
  limitations: [
    "Conducted at experienced centers with established proning protocols, which may not generalize to units with less proning experience.",
    "Unblinded, with mortality benefit larger than most other single ARDS interventions, prompting some scrutiny of effect size.",
  ],
  relatedTopicIds: ["ards"],
  certainty: "high",
};
