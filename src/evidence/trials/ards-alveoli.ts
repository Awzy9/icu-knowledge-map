import type { Trial } from "@/content-types";

export const ardsAlveoli: Trial = {
  id: "ards-alveoli",
  name: "ALVEOLI",
  title: "Higher versus Lower Positive End-Expiratory Pressures in Patients with the Acute Respiratory Distress Syndrome",
  year: 2004,
  journal: "New England Journal of Medicine",
  doi: "10.1056/NEJMoa032193",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter, randomized controlled trial (ARDSNet), unblinded, stopped early for futility.",
  clinicalQuestion: "Among patients already ventilated with a low-tidal-volume, plateau-pressure-limited strategy, does a higher-PEEP/lower-FiO2 approach improve survival compared with a lower-PEEP/higher-FiO2 approach?",
  population: "549 patients with acute lung injury or ARDS, all ventilated with 6 mL/kg predicted body weight and a plateau pressure ceiling of 30 cmH2O in both arms.",
  inclusionCriteria: [
    "Acute lung injury or ARDS by the contemporaneous consensus definition.",
    "Enrolled from ARDS Network centers, on low tidal volume ventilation in both study arms.",
  ],
  intervention: "Higher-PEEP, lower-FiO2 strategy, using a PEEP/FiO2 combination table weighted toward higher PEEP.",
  comparator: "Lower-PEEP, higher-FiO2 strategy, using a PEEP/FiO2 table weighted toward lower PEEP.",
  primaryOutcome: "In-hospital mortality before discharge home and unassisted breathing.",
  secondaryOutcomes: ["Ventilator-free days through day 28."],
  result: {
    summary: "No difference in mortality or ventilator-free days between higher- and lower-PEEP strategies when both arms used low tidal volume ventilation.",
    effectSize: "Ventilator-free days 13.8 ± 10.6 (higher PEEP) vs 14.5 ± 10.4 (lower PEEP)",
    pValue: "p = 0.50",
  },
  resultDirection: "negative-neutral",
  whatItFound:
    "The trial was stopped early for futility: a higher-PEEP strategy produced clinical outcomes statistically indistinguishable from a lower-PEEP strategy once both groups were already receiving lung-protective tidal volumes. It did not show that higher PEEP is harmful, nor that it is beneficial on average.",
  clinicalInterpretation:
    "ALVEOLI does not by itself justify routinely using either a higher- or a lower-PEEP protocol — it shows the two fixed PEEP/FiO2 tables tested performed similarly on average across an unselected ALI/ARDS population. Later individual-patient-data meta-analyses (not reproduced here) suggested a mortality signal favoring higher PEEP specifically in moderate-to-severe disease, which is why current guidance is severity-stratified rather than a flat 'higher is better' or 'no difference' statement.",
  currentGuidelinePosition:
    "The 2023 ESICM ARDS guideline conditionally favors higher PEEP without a recruitment maneuver over lower PEEP specifically in moderate-to-severe ARDS (low certainty) — a narrower and more recent statement than this trial's own null result in an all-comers population.",
  limitations: [
    "Stopped early for futility, which reduces power to detect a smaller true effect.",
    "Used fixed PEEP/FiO2 tables rather than individualized titration (e.g. by esophageal pressure or driving pressure), which may not reflect how PEEP is actually selected at the bedside.",
    "Enrolled a mixed acute-lung-injury/ARDS population without severity stratification, which can dilute a subgroup-specific effect.",
  ],
  relatedTopicIds: ["ards"],
  certainty: "moderate",
};
