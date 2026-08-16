import type { Trial } from "@/content-types";

export const transfusionTrissTrial: Trial = {
  "id": "transfusion-triss-trial",
  "name": "TRISS",
  "title": "Lower versus Higher Hemoglobin Threshold for Transfusion in Septic Shock",
  "year": 2014,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa1406617",
  "pmid": "25270275",
  "design": "Multicenter parallel-group randomized trial in 32 ICUs across Scandinavia (n=998)",
  "clinicalQuestion": "Does a restrictive hemoglobin threshold of 7.0 g/dL improve or preserve outcomes compared with 9.0 g/dL in septic shock?",
  "population": "ICU patients with septic shock and hemoglobin <= 9.0 g/dL",
  "intervention": "Restrictive RBC transfusion (transfusion threshold Hb <= 7.0 g/dL)",
  "comparator": "Liberal RBC transfusion (transfusion threshold Hb <= 9.0 g/dL)",
  "primaryOutcome": "90-day all-cause mortality",
  "result": {
    "summary": "90-day mortality was 43.0% in the restrictive group vs 45.0% in the liberal group (relative risk 0.94, 95% CI 0.78 to 1.09, P=0.44). Rates of ischemic events (7.2% vs 8.0%) and life support use were similar, with half as many RBC units transfused.",
    "pValue": "P=0.44"
  },
  "resultDirection": "positive",
  "whatItFound": "Patients with septic shock managed with a restrictive threshold (Hb <= 7.0 g/dL) had identical 90-day mortality and ischemic complications while avoiding 50% of transfusions.",
  "clinicalInterpretation": "Definitively extended restrictive transfusion safety specifically to septic shock resuscitation.",
  "currentGuidelinePosition": "Class I recommendation in Surviving Sepsis Campaign 2021/2026 guidelines.",
  "relatedTopicIds": [
    "transfusion",
    "septic-shock",
    "sepsis"
  ]
};
