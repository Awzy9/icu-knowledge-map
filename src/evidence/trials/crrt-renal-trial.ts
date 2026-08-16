import type { Trial } from "@/content-types";

export const crrtRenalTrial: Trial = {
  "id": "crrt-renal-trial",
  "name": "RENAL",
  "title": "Intensity of Continuous Renal-Replacement Therapy in Critically Ill Patients",
  "year": 2009,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa0902413",
  "pmid": "19846848",
  "design": "Multicenter randomized trial in 35 ICUs across Australia and New Zealand (n=1508)",
  "clinicalQuestion": "Does high-intensity continuous renal replacement therapy improve 90-day survival compared with standard-intensity therapy in critically ill AKI?",
  "population": "Critically ill adult ICU patients with severe acute kidney injury requiring continuous RRT",
  "intervention": "Higher-intensity CRRT (effluent flow rate of 40 mL/kg/hour)",
  "comparator": "Lower-intensity CRRT (effluent flow rate of 25 mL/kg/hour)",
  "primaryOutcome": "All-cause mortality at 90 days",
  "result": {
    "summary": "90-day mortality was identical between the higher-intensity (44.7%) and lower-intensity (44.7%) groups (odds ratio 1.00, 95% CI 0.81 to 1.23, P=0.99). Dialysis dependence at 90 days was also identical (6.8% vs 4.4%, P=0.14).",
    "pValue": "P=0.99"
  },
  "resultDirection": "negative-neutral",
  "whatItFound": "Increasing CRRT dose from 25 to 40 mL/kg/h provides no benefit in survival or renal recovery.",
  "clinicalInterpretation": "Established a delivered CRRT effluent dose of 20-25 mL/kg/h as the global standard of care, avoiding unnecessary filter clogging and nutrient loss.",
  "currentGuidelinePosition": "Class I recommendation in KDIGO 2012 guidelines.",
  "relatedTopicIds": [
    "crrt",
    "aki"
  ]
};
