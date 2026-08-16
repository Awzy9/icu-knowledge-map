import type { Trial } from "@/content-types";

export const nutritionEpanicTrial: Trial = {
  "id": "nutrition-epanic-trial",
  "name": "EPaNIC",
  "title": "Early versus Late Parenteral Nutrition in Critically Ill Adults",
  "year": 2011,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa1102662",
  "pmid": "21714640",
  "design": "Multicenter randomized controlled trial in 2 Belgian tertiary hospitals (n=4640)",
  "clinicalQuestion": "Does early initiation of parenteral nutrition to supplement enteral nutrition improve recovery compared with withholding parenteral nutrition until day 8?",
  "population": "Critically ill adults at nutritional risk admitted to medical and surgical ICUs",
  "intervention": "Early parenteral nutrition (initiated within 48 hours to meet full caloric goals)",
  "comparator": "Late parenteral nutrition (withheld until day 8; only 5% dextrose infusion given early)",
  "primaryOutcome": "Time to discharge from the ICU and new infection rates",
  "result": {
    "summary": "Late PN was associated with an 6.3% faster rate of live ICU discharge (hazard ratio 1.06, P=0.02) and a significant reduction in ICU infections (22.8% vs 26.2%, P=0.008). Patients in the late-PN group had fewer days on mechanical ventilation (P=0.006) and shorter renal replacement therapy duration.",
    "pValue": "P=0.008 (fewer infections with late PN)"
  },
  "resultDirection": "positive",
  "whatItFound": "Withholding supplemental parenteral nutrition during the first week of critical illness accelerates recovery and reduces infectious complications.",
  "clinicalInterpretation": "Overturned early aggressive parenteral feeding dogma; confirmed parenteral nutrition should be delayed until after day 7 in patients tolerating minimal enteral nutrition.",
  "currentGuidelinePosition": "Strong recommendation in ESPEN and ASPEN nutrition guidelines.",
  "relatedTopicIds": [
    "critical-illness-nutrition"
  ]
};
