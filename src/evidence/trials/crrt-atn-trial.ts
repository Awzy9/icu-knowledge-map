import type { Trial } from "@/content-types";

export const crrtAtnTrial: Trial = {
  "id": "crrt-atn-trial",
  "name": "ATN",
  "title": "Intensity of Renal Support in Critically Ill Patients with Acute Kidney Injury",
  "year": 2008,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa0802639",
  "pmid": "18492867",
  "design": "Multicenter randomized trial in 27 VA and university medical centers (n=1124)",
  "clinicalQuestion": "Does intensive renal replacement therapy reduce mortality in critically ill AKI patients compared with standard therapy?",
  "population": "ICU patients with AKI and failure of at least one non-renal organ or sepsis",
  "intervention": "Intensive renal support (CVVHDF at 35 mL/kg/h or daily intermittent hemodialysis)",
  "comparator": "Standard renal support (CVVHDF at 20 mL/kg/h or intermittent hemodialysis 3x/week)",
  "primaryOutcome": "All-cause mortality at 60 days",
  "result": {
    "summary": "60-day mortality was 53.6% in the intensive-strategy group vs 51.5% in the less-intensive group (odds ratio 1.09, 95% CI 0.86 to 1.40, P=0.47). Recovery of kidney function was similar (15.4% vs 16.5%, P=0.75).",
    "pValue": "P=0.47"
  },
  "resultDirection": "negative-neutral",
  "whatItFound": "Intensive dialysis dose or frequency does not improve survival, renal recovery, or reduce organ failure in ICU AKI.",
  "clinicalInterpretation": "Reaffirmed the standard target effluent dose of 20-25 mL/kg/h for continuous RRT.",
  "currentGuidelinePosition": "Class I recommendation in KDIGO 2012 guidelines.",
  "relatedTopicIds": [
    "crrt",
    "aki"
  ]
};
