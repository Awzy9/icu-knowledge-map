import type { Trial } from "@/content-types";

export const ardsRose: Trial = {
  id: "ards-rose",
  name: "ROSE",
  title: "Early Neuromuscular Blockade in the Acute Respiratory Distress Syndrome",
  year: 2019,
  journal: "New England Journal of Medicine",
  doi: "10.1056/NEJMoa1901686",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter, randomized controlled trial, unblinded, stopped early for futility",
  clinicalQuestion: "Does routine early continuous neuromuscular blockade improve survival in moderate-to-severe ARDS, compared with a lighter-sedation strategy?",
  population: "1006 patients with moderate-to-severe ARDS (PaO2/FiO2 < 150) at North American centers.",
  inclusionCriteria: ["Moderate-to-severe ARDS: PaO2/FiO2 < 150.", "Onset within the preceding 48 hours."],
  intervention: "Early continuous cisatracurium plus deep sedation for 48 hours.",
  comparator: "A lighter-sedation strategy, with neuromuscular blockade used only as needed for dyssynchrony or refractory hypoxemia.",
  primaryOutcome: "90-day all-cause mortality.",
  secondaryOutcomes: ["Ventilator-free days.", "ICU-acquired weakness."],
  result: {
    summary: "Routine early continuous paralysis showed no mortality benefit over a lighter-sedation, as-needed approach, and the trial was stopped early for futility.",
    effectSize: "42.5% vs 42.8% 90-day mortality",
    pValue: "p = 0.93",
  },
  resultDirection: "contradictory",
  whatItFound:
    "In a larger, more contemporary trial using lighter background sedation in the comparator arm, routine early continuous neuromuscular blockade did not reduce mortality in moderate-to-severe ARDS.",
  clinicalInterpretation:
    "ROSE shifted practice away from routine early paralysis for all patients with severe ARDS; current guidance favors reserving neuromuscular blockade for patients with severe ventilator dyssynchrony or refractory hypoxemia despite adequate sedation, rather than applying it by default.",
  currentGuidelinePosition:
    "There is no strong formal recommendation for routine early paralysis; ROSE is the more contemporary and larger trial, and current practice generally follows it over ACURASYS.",
  limitations: [
    "The comparator arm used a lighter-sedation strategy than ACURASYS's comparator, so the trials are not directly testing the same clinical question.",
    "Stopped early for futility, which can sometimes overestimate the null result.",
  ],
  relatedTopicIds: ["ards"],
  certainty: "high",
};
