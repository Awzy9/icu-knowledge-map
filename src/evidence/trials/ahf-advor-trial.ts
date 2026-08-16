import type { Trial } from "@/content-types";

export const ahfAdvorTrial: Trial = {
  "id": "ahf-advor-trial",
  "name": "ADVOR",
  "title": "Acetazolamide in Decompensated Heart Failure with Volume Overload",
  "year": 2022,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa2203094",
  "pmid": "36027559",
  "design": "Multicenter double-blind randomized placebo-controlled trial (n=519)",
  "clinicalQuestion": "Does adding IV acetazolamide to loop diuretics improve successful decongestion in acute decompensated heart failure?",
  "population": "Adults hospitalized with acute decompensated heart failure, volume overload, and elevated BNP/NT-proBNP on chronic oral loop diuretics",
  "intervention": "IV Acetazolamide (500 mg once daily for 3 days) combined with high-dose IV loop diuretics",
  "comparator": "Matching placebo plus high-dose IV loop diuretics",
  "primaryOutcome": "Successful decongestion defined as absence of volume overload signs at day 3 without escalation of therapy",
  "result": {
    "summary": "Successful decongestion was achieved in 42.2% of the acetazolamide group vs 30.5% of the placebo group (risk ratio 1.46; 95% CI, 1.17 to 1.82; P<0.001), with shorter hospital stay (8.8 vs 9.9 days) and greater natriuresis.",
    "pValue": "P<0.001"
  },
  "resultDirection": "positive",
  "whatItFound": "Adding IV acetazolamide targeting the proximal tubule improves successful decongestion and speeds hospital discharge in congested acute heart failure.",
  "clinicalInterpretation": "Provides high-quality evidence for sequential nephron blockade using carbonic anhydrase inhibition in loop diuretic resistance.",
  "currentGuidelinePosition": "Class IIa in ESC 2023 heart failure focused update.",
  "relatedTopicIds": [
    "acute-heart-failure",
    "cardiogenic-pulmonary-edema"
  ]
};
