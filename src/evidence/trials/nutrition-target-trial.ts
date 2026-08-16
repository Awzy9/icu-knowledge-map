import type { Trial } from "@/content-types";

export const nutritionTargetTrial: Trial = {
  "id": "nutrition-target-trial",
  "name": "TARGET",
  "title": "Energy-Dense versus Routine Enteral Nutrition in the Critically Ill",
  "year": 2018,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa1811687",
  "pmid": "30346225",
  "design": "Multicenter double-blind randomized clinical trial in 46 Australian and New Zealand ICUs (n=3957)",
  "clinicalQuestion": "Does energy-dense enteral nutrition delivering higher caloric intake improve 90-day survival in mechanically ventilated ICU patients?",
  "population": "Adults expected to receive enteral nutrition for >= 2 days in the ICU",
  "intervention": "Energy-dense enteral nutrition formula (1.5 kcal/mL delivering 100% estimated energy target)",
  "comparator": "Routine enteral nutrition formula (1.0 kcal/mL delivering ~70% energy target)",
  "primaryOutcome": "All-cause mortality at 90 days",
  "result": {
    "summary": "90-day mortality was 26.8% in the 1.5-kcal group and 25.7% in the 1.0-kcal group (relative risk 1.05; 95% CI, 0.94 to 1.16; P=0.41). Patients receiving 1.5 kcal/mL had significantly more gastrointestinal intolerance (vomiting 10.5% vs 8.6%, P=0.04) and higher insulin requirements.",
    "pValue": "P=0.41"
  },
  "resultDirection": "negative-neutral",
  "whatItFound": "Higher caloric delivery (100% of target) via energy-dense enteral nutrition did not improve survival and increased gastrointestinal intolerance.",
  "clinicalInterpretation": "Confirmed that moderate/permissive underfeeding (~70% energy target) during early critical illness is safe and avoids overfeeding complications.",
  "currentGuidelinePosition": "Supported in ESPEN and ASPEN critical care nutrition guidelines.",
  "relatedTopicIds": [
    "critical-illness-nutrition"
  ]
};
