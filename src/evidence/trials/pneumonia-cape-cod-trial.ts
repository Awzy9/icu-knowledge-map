import type { Trial } from "@/content-types";

export const pneumoniaCapeCodTrial: Trial = {
  "id": "pneumonia-cape-cod-trial",
  "name": "CAPE COD",
  "title": "Hydrocortisone in Severe Community-Acquired Pneumonia",
  "year": 2023,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa2215145",
  "pmid": "36942784",
  "design": "Phase 3 multicenter double-blind randomized placebo-controlled trial (n=800)",
  "clinicalQuestion": "Does early hydrocortisone reduce 28-day mortality in severe community-acquired pneumonia admitted to the ICU?",
  "population": "Adults with severe CAP admitted to the ICU meeting severity criteria",
  "intervention": "Continuous IV Hydrocortisone (200 mg daily for 4-8 days)",
  "comparator": "Placebo infusion",
  "primaryOutcome": "28-day all-cause mortality",
  "result": {
    "summary": "28-day mortality was 6.2% in the hydrocortisone group compared to 11.9% in the placebo group (absolute difference -5.6%; 95% CI, -9.6 to -1.7; P=0.006).",
    "pValue": "P=0.006"
  },
  "resultDirection": "positive",
  "whatItFound": "Early continuous hydrocortisone reduced 28-day mortality by nearly half in severe CAP without increasing secondary infections.",
  "clinicalInterpretation": "Solidified early adjunctive hydrocortisone as a mortality-reducing intervention in severe CAP.",
  "currentGuidelinePosition": "Supported in critical care pneumonia management.",
  "relatedTopicIds": [
    "pneumonia",
    "sepsis"
  ]
};
