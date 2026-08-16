import type { Trial } from "@/content-types";

export const transfusionTriccTrial: Trial = {
  "id": "transfusion-tricc-trial",
  "name": "TRICC",
  "title": "A Multicenter, Randomized, Controlled Clinical Trial of Transfusion Requirements in Critical Care",
  "year": 1999,
  "journal": "NEJM",
  "doi": "10.1056/NEJM199902113400601",
  "pmid": "9971864",
  "design": "Multicenter randomized controlled trial in 25 Canadian ICUs (n=838)",
  "clinicalQuestion": "Is a restrictive RBC transfusion strategy (transfuse when Hb < 7.0 g/dL) as safe and effective as a liberal strategy (transfuse when Hb < 10.0 g/dL) in critically ill patients?",
  "population": "Euvolemic critically ill adults admitted to tertiary ICUs with Hb < 9.0 g/dL within 72 hours",
  "intervention": "Restrictive transfusion (transfusion threshold Hb < 7.0 g/dL; target 7.0-9.0 g/dL)",
  "comparator": "Liberal transfusion (transfusion threshold Hb < 10.0 g/dL; target 10.0-12.0 g/dL)",
  "primaryOutcome": "All-cause 30-day mortality",
  "result": {
    "summary": "30-day mortality was 18.7% in the restrictive group vs 23.3% in the liberal group (P=0.11). Among less severely ill patients (APACHE II <= 20) and patients < 55 years, restrictive transfusion significantly reduced mortality (8.7% vs 16.1%, P=0.03).",
    "pValue": "P=0.11 (overall) / P=0.03 (APACHE <= 20)"
  },
  "resultDirection": "positive",
  "whatItFound": "A restrictive threshold (Hb < 7.0 g/dL) was at least as effective as and potentially superior to a liberal threshold (Hb < 10.0 g/dL) in critically ill patients, cutting blood use by 54%.",
  "clinicalInterpretation": "Foundational trial establishing Hb < 7.0 g/dL as the standard restrictive transfusion trigger in critical care.",
  "currentGuidelinePosition": "Class I recommendation in AABB, SCCM, and international transfusion guidelines.",
  "relatedTopicIds": [
    "transfusion",
    "bleeding"
  ]
};
