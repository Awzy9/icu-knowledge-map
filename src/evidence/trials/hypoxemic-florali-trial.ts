import type { Trial } from "@/content-types";

export const hypoxemicFloraliTrial: Trial = {
  "id": "hypoxemic-florali-trial",
  "name": "FLORALI",
  "title": "High-flow oxygen through nasal cannula in acute hypoxemic respiratory failure",
  "year": 2015,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa1503326",
  "pmid": "25981908",
  "design": "Multicenter randomized controlled trial (n=310)",
  "clinicalQuestion": "Does high-flow nasal cannula (HFNC) reduce intubation or mortality compared with standard oxygen or noninvasive ventilation in acute hypoxemic failure?",
  "population": "ICU patients with non-hypercapnic acute hypoxemic respiratory failure (PaO2/FiO2 <= 300)",
  "intervention": "High-Flow Nasal Cannula (HFNC) at 50 L/min titrated to SpO2 >= 92%",
  "comparator": "Standard oxygen mask or Noninvasive Ventilation (BiPAP)",
  "primaryOutcome": "Rate of endotracheal intubation at 28 days",
  "result": {
    "summary": "In patients with PaO2/FiO2 <= 200, intubation rate was significantly lower with HFNC (35%) vs standard oxygen (53%) and NIV (58%, P=0.009). 90-day mortality was significantly reduced with HFNC (HR 0.42, P=0.02).",
    "pValue": "P=0.02 for mortality"
  },
  "resultDirection": "positive",
  "whatItFound": "HFNC reduced 90-day mortality and intubation rates in severe hypoxemic respiratory failure without increasing complications.",
  "clinicalInterpretation": "Established HFNC as preferred first-line noninvasive support for de-novo hypoxemic respiratory failure.",
  "currentGuidelinePosition": "Recommended by ESICM and ATS guidelines over standard O2 and NIV.",
  "relatedTopicIds": [
    "hypoxemic-respiratory-failure"
  ]
};
