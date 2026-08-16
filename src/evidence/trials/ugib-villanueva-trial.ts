import type { Trial } from "@/content-types";

export const ugibVillanuevaTrial: Trial = {
  "id": "ugib-villanueva-trial",
  "name": "Villanueva",
  "title": "Transfusion Strategies for Acute Upper Gastrointestinal Bleeding",
  "year": 2013,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa1211801",
  "pmid": "23281973",
  "design": "Single-center randomized controlled trial (n=921)",
  "clinicalQuestion": "Does a restrictive transfusion strategy improve outcomes compared with a liberal strategy in acute upper GI bleeding?",
  "population": "Adults with severe acute upper gastrointestinal bleeding (hematemesis or melena)",
  "intervention": "Restrictive RBC transfusion (transfuse when Hb < 7.0 g/dL, target 7.0-9.0 g/dL)",
  "comparator": "Liberal RBC transfusion (transfuse when Hb < 9.0 g/dL, target 9.0-11.0 g/dL)",
  "primaryOutcome": "All-cause mortality at 45 days",
  "result": {
    "summary": "45-day mortality was significantly lower in the restrictive group (5% vs 9%; hazard ratio 0.55; 95% CI, 0.33 to 0.92; P=0.02). Rebleeding was significantly lower (10% vs 16%, P=0.01).",
    "pValue": "P=0.02"
  },
  "resultDirection": "positive",
  "whatItFound": "Restrictive transfusion significantly improved 45-day survival and reduced rebleeding, particularly in cirrhotic patients.",
  "clinicalInterpretation": "Firmly established the restrictive transfusion threshold (Hb < 7.0 g/dL) in acute UGIB.",
  "currentGuidelinePosition": "Class I recommendation in AASLD and international consensus guidelines.",
  "relatedTopicIds": [
    "upper-gi-bleeding",
    "transfusion",
    "bleeding"
  ]
};
