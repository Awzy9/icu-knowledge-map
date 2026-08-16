import type { Trial } from "@/content-types";

export const ardsEolia: Trial = {
  id: "ards-eolia",
  name: "EOLIA",
  title: "Extracorporeal Membrane Oxygenation for Severe Acute Respiratory Distress Syndrome",
  year: 2018,
  journal: "New England Journal of Medicine",
  doi: "10.1056/NEJMoa1800385",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter, randomized controlled trial, unblinded, stopped early for futility with crossover",
  clinicalQuestion: "Does early venovenous ECMO reduce mortality in very severe ARDS, compared with continued conventional ventilation with rescue therapies?",
  population: "249 patients with very severe ARDS (e.g. PaO2/FiO2 < 50 for > 3h, or < 80 for > 6h, or pH < 7.25 with hypercapnia).",
  inclusionCriteria: [
    "Very severe ARDS meeting one of several refractory-hypoxemia or refractory-acidosis thresholds.",
    "Onset within the preceding 7 days.",
  ],
  intervention: "Early venovenous ECMO.",
  comparator: "Continued conventional lung-protective ventilation with rescue therapies; crossover to ECMO was allowed if the control group became refractory.",
  primaryOutcome: "60-day all-cause mortality.",
  secondaryOutcomes: ["Treatment failure (a composite including crossover to ECMO)."],
  result: {
    summary: "The primary mortality comparison did not reach statistical significance, but 28% of the control group crossed over to ECMO, and pooled/Bayesian reanalyses suggest a plausible mortality benefit.",
    effectSize: "35% vs 46% 60-day mortality",
    pValue: "p = 0.09",
  },
  resultDirection: "negative-neutral",
  whatItFound:
    "Early ECMO in very severe ARDS did not significantly reduce 60-day mortality in the primary intention-to-treat analysis, but substantial crossover to ECMO in the control arm complicates interpreting this as a true null result.",
  clinicalInterpretation:
    "EOLIA is generally read as supportive of ECMO in very severe, refractory ARDS despite the non-significant primary endpoint, given the crossover pattern and subsequent Bayesian reanalyses.",
  currentGuidelinePosition:
    "Guidelines and expert practice position ECMO as a rescue option in very severe, refractory ARDS at experienced centers, rather than a first-line therapy.",
  limitations: [
    "High crossover rate (28%) from control to ECMO undermines a clean intention-to-treat interpretation.",
    "Restricted to very severe ARDS meeting strict refractory-hypoxemia thresholds; not generalizable to moderate ARDS.",
  ],
  relatedTopicIds: ["ards"],
  certainty: "moderate",
};
