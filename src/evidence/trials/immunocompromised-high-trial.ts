import type { Trial } from "@/content-types";

export const immunocompromisedHighTrial: Trial = {
  id: "immunocompromised-high-trial",
  name: "HIGH",
  title: "Effect of High-Flow Nasal Oxygen vs Standard Oxygen on 28-Day Mortality in Immunocompromised Patients With Acute Respiratory Failure: The HIGH Randomized Clinical Trial",
  year: 2018,
  journal: "JAMA",
  pmid: "30357270",
  doi: "10.1001/jama.2018.14282",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter, parallel-group randomized clinical trial",
  clinicalQuestion:
    "Does high-flow nasal cannula (HFNC) oxygen reduce 28-day mortality compared with standard oxygen therapy in immunocompromised patients with acute respiratory failure?",
  population: "776 immunocompromised adult ICU patients with acute hypoxemic respiratory failure across 32 French and Belgian ICUs",
  intervention: "High-flow nasal cannula oxygen (n = 388)",
  comparator: "Standard oxygen therapy via venturi or nonrebreather mask (n = 388)",
  primaryOutcome: "All-cause mortality at day 28",
  result: {
    summary:
      "28-day mortality was not significantly different between high-flow oxygen and standard oxygen (35.6% vs 36.1%, HR 0.98, 95% CI 0.77–1.24, P = 0.94). Intubation rate (38.7% vs 43.8%, P = 0.17) and ICU length of stay were also similar.",
    effectSize: "HR 0.98 (95% CI 0.77–1.24)",
    pValue: "0.94",
  },
  resultDirection: "negative-neutral",
  whatItFound:
    "In critically ill immunocompromised patients with acute hypoxemic respiratory failure, high-flow nasal oxygen did not significantly reduce 28-day mortality or intubation rate compared with standard oxygen.",
  clinicalInterpretation:
    "Demonstrated that while HFNC improves comfort and oxygenation, it does not confer a mortality advantage over standard oxygen in immunocompromised hosts, and close bedside monitoring is essential to avoid delayed emergency intubation.",
  currentGuidelinePosition:
    "ESICM and ATS guidelines suggest trial of HFNC in hypoxemic respiratory failure with low threshold for invasive mechanical ventilation.",
  relatedTopicIds: ["immunocompromised-oncologic-critical-illness", "hypoxemic-respiratory-failure", "ards"],
  certainty: "high",
};
