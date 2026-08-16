import type { Trial } from "@/content-types";

export const meningitisDeGansTrial: Trial = {
  "id": "meningitis-de-gans-trial",
  "name": "de Gans & van de Beek",
  "title": "Dexamethasone in Adults with Bacterial Meningitis",
  "year": 2002,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa021334",
  "pmid": "12432041",
  "design": "Prospective randomized double-blind multicenter trial (n=301)",
  "clinicalQuestion": "Does adjunctive dexamethasone improve outcomes in adults with acute bacterial meningitis?",
  "population": "Adults (>= 17 years) with suspected or confirmed acute bacterial meningitis",
  "intervention": "IV Dexamethasone (10 mg every 6 h for 4 days) started before or with the first antibiotic dose",
  "comparator": "Matching placebo infusion",
  "primaryOutcome": "Unfavorable outcome (Glasgow Outcome Scale score 1-4) at 8 weeks",
  "result": {
    "summary": "Dexamethasone significantly reduced unfavorable outcome (15% vs 25%; RR 0.59, P=0.03) and all-cause mortality (7% vs 15%, P=0.04). Among patients with Streptococcus pneumoniae meningitis, mortality was reduced from 34% to 14% (RR 0.41, P=0.02).",
    "pValue": "P=0.04 (overall mortality) / P=0.02 (pneumococcal mortality)"
  },
  "resultDirection": "positive",
  "whatItFound": "Early dexamethasone significantly reduces death and severe hearing loss/neurological disability in adult pneumococcal meningitis.",
  "clinicalInterpretation": "Established the mandatory practice of giving 10 mg IV dexamethasone prior to or concurrently with empiric antibiotics.",
  "currentGuidelinePosition": "Class I recommendation in IDSA and European ESCMID guidelines.",
  "relatedTopicIds": [
    "meningitis-encephalitis"
  ]
};
