import type { Trial } from "@/content-types";

export const shockSoapIiTrial: Trial = {
  "id": "shock-soap-ii-trial",
  "name": "SOAP II",
  "title": "Comparison of Dopamine and Norepinephrine in the Treatment of Shock",
  "year": 2010,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa0907118",
  "pmid": "20200382",
  "design": "Multicenter randomized double-blind trial (n=1679)",
  "clinicalQuestion": "Is norepinephrine or dopamine superior as the first-line vasopressor in undifferentiated shock?",
  "population": "Patients in the ICU with shock (MAP < 70 mmHg or SBP < 100 mmHg with hypoperfusion)",
  "intervention": "Norepinephrine infusion titrated to target MAP >= 65 mmHg",
  "comparator": "Dopamine infusion titrated to target MAP >= 65 mmHg",
  "primaryOutcome": "28-day all-cause mortality",
  "result": {
    "summary": "Overall 28-day mortality was similar, but dopamine was associated with significantly more arrhythmic events (20.7% vs 12.4%, P<0.001) and higher mortality in cardiogenic shock (P=0.03).",
    "pValue": "P<0.001 (arrhythmias)"
  },
  "resultDirection": "positive",
  "whatItFound": "Norepinephrine caused significantly fewer tachyarrhythmias and improved survival in cardiogenic shock compared with dopamine.",
  "clinicalInterpretation": "Established norepinephrine as the undisputed first-line vasopressor across shock states.",
  "currentGuidelinePosition": "Class I recommendation across Surviving Sepsis and shock guidelines.",
  "relatedTopicIds": [
    "shock",
    "septic-shock",
    "cardiogenic-shock"
  ]
};
