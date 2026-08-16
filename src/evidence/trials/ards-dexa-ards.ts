import type { Trial } from "@/content-types";

export const ardsDexaArds: Trial = {
  id: "ards-dexa-ards",
  name: "DEXA-ARDS",
  title: "Dexamethasone Treatment for the Acute Respiratory Distress Syndrome: A Multicentre, Randomised Controlled Trial",
  year: 2020,
  journal: "The Lancet Respiratory Medicine",
  doi: "10.1016/S2213-2600(19)30417-5",
  pmid: "32043986",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter (17 ICUs, Spain), randomized, open-label trial; stopped early by the data safety monitoring board for slow recruitment (277 of a planned 314 patients enrolled) — not stopped for benefit.",
  clinicalQuestion: "In established moderate-to-severe ARDS not related to COVID-19, does early dexamethasone reduce ventilator-free days and mortality compared with usual care?",
  population: "277 patients with moderate-to-severe ARDS (PaO2/FiO2 < 200 mmHg), enrolled before the COVID-19 pandemic.",
  inclusionCriteria: [
    "Moderate-to-severe ARDS by Berlin criteria (PaO2/FiO2 < 200 mmHg at PEEP ≥ 10 cmH2O).",
    "Onset within 5 days.",
  ],
  intervention: "Dexamethasone 20 mg IV daily for 5 days, then 10 mg IV daily for 5 more days (stopped at extubation).",
  comparator: "Usual care without corticosteroids.",
  primaryOutcome: "Ventilator-free days at day 28.",
  secondaryOutcomes: ["60-day all-cause mortality."],
  result: {
    summary: "Dexamethasone increased ventilator-free days and reduced 60-day mortality compared with usual care.",
    effectSize: "Ventilator-free days 12.3 vs 7.5; 60-day mortality 21% vs 36%",
    pValue: "VFDs p < 0.0001; mortality difference p = 0.0047",
  },
  resultDirection: "positive",
  whatItFound:
    "Early dexamethasone in patients with established, non-COVID moderate-to-severe ARDS increased ventilator-free days and was associated with a large absolute reduction in 60-day mortality in this single-country trial.",
  clinicalInterpretation:
    "This is the most direct RCT evidence for a mortality benefit from corticosteroids in non-COVID ARDS, but it is a single trial, from a single country, stopped early for slow recruitment rather than for benefit — factors that widen uncertainty around the true effect size even though the result was statistically significant. It has not been replicated by an equivalently powered multinational confirmatory trial, so it should be read as an important but not yet definitively confirmed result, distinct from the separately established evidence for corticosteroids (e.g. dexamethasone) in COVID-19-related respiratory failure.",
  currentGuidelinePosition:
    "No major ARDS ventilation guideline (2017 ATS/ESICM/SCCM or 2023 ESICM) currently gives a formal graded recommendation for routine corticosteroids in non-COVID ARDS based on this trial alone; corticosteroid use in ARDS varies by institution and clinical context rather than being a uniformly guideline-mandated therapy.",
  limitations: [
    "Stopped early for slow recruitment (88% of planned enrollment), which can inflate the apparent effect size of a positive trial.",
    "Single-country (Spain), open-label design.",
    "Excludes COVID-19-related ARDS entirely — its result should not be conflated with the separate, larger body of evidence for dexamethasone in COVID-19 respiratory failure.",
  ],
  relatedTopicIds: ["ards"],
  certainty: "low",
};
