import type { Trial } from "@/content-types";

export const cshockDoremiTrial: Trial = {
  "id": "cshock-doremi-trial",
  "name": "CAPITAL DOREMI",
  "title": "Milrinone as Compared with Dobutamine in Cardiogenic Shock",
  "year": 2021,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa2026845",
  "pmid": "34347952",
  "design": "Double-blind randomized clinical trial (n=192)",
  "clinicalQuestion": "Is milrinone superior to dobutamine in reducing mortality and adverse events in cardiogenic shock?",
  "population": "Patients admitted to the cardiac ICU with cardiogenic shock (SCAI stage B to E)",
  "intervention": "Milrinone infusion titrated according to clinical protocol",
  "comparator": "Dobutamine infusion titrated according to clinical protocol",
  "primaryOutcome": "Composite of in-hospital death from any cause, resuscitated cardiac arrest, mechanical support, transplant, MI, TIA/stroke, or RRT",
  "result": {
    "summary": "No significant difference in the primary composite outcome occurred between milrinone (37%) and dobutamine (43%; relative risk 0.90, 95% CI 0.69 to 1.18, P=0.47). In-hospital mortality was 37% vs 43% (P=0.41).",
    "pValue": "P=0.47"
  },
  "resultDirection": "negative-neutral",
  "whatItFound": "Milrinone and dobutamine yielded identical outcomes in cardiogenic shock without significant differences in mortality, arrhythmias, or hospital stay.",
  "clinicalInterpretation": "Validates inotrope selection based on physiologic context: dobutamine for renal dysfunction or hypotension; milrinone for RV afterload elevation or chronic beta-blocker therapy.",
  "currentGuidelinePosition": "Supported in AHA and ESC heart failure / cardiogenic shock guidance.",
  "relatedTopicIds": [
    "cardiogenic-shock",
    "acute-heart-failure",
    "rv-failure"
  ]
};
