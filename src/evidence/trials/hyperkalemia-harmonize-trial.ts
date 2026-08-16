import type { Trial } from "@/content-types";

export const hyperkalemiaHarmonizeTrial: Trial = {
  "id": "hyperkalemia-harmonize-trial",
  "name": "HARMONIZE",
  "title": "Effect of Sodium Zirconium Cyclosilicate on Potassium in Patients with Hyperkalemia",
  "year": 2014,
  "journal": "JAMA",
  "doi": "10.1001/jama.2014.15688",
  "pmid": "25454397",
  "design": "Multicenter double-blind randomized trial (n=258)",
  "clinicalQuestion": "Does sodium zirconium cyclosilicate (ZS-9 / Lokelma) rapidly restore and maintain normokalemia in outpatient and hospitalized hyperkalemia?",
  "population": "Patients with serum potassium >= 5.1 mEq/L",
  "intervention": "Sodium zirconium cyclosilicate (ZS-9) 10 g three times daily for 48 h, then randomized to 5g, 10g, 15g or placebo daily for 28 days",
  "comparator": "Matching placebo",
  "primaryOutcome": "Mean serum potassium level during days 8-28",
  "result": {
    "summary": "Normokalemia was achieved in 84% at 24 hours and 98% at 48 hours. During maintenance, all ZS-9 doses maintained significantly lower potassium than placebo (P<0.001) with low adverse event rates.",
    "pValue": "P<0.001"
  },
  "resultDirection": "positive",
  "whatItFound": "ZS-9 acts within 1-2 hours to reliably bind intestinal potassium and achieve normokalemia without causing colonic necrosis.",
  "clinicalInterpretation": "Supported modern non-absorbed potassium binder therapy over sodium polystyrene sulfonate (Kayexalate).",
  "currentGuidelinePosition": "Recommended in UKKA 2023 and KDIGO hyperkalemia guidance.",
  "relatedTopicIds": [
    "hyperkalemia"
  ]
};
