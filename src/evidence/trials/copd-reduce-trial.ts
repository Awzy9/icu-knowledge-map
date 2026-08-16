import type { Trial } from "@/content-types";

export const copdReduceTrial: Trial = {
  "id": "copd-reduce-trial",
  "name": "REDUCE",
  "title": "Short-term vs conventional glucocorticoid therapy in acute exacerbations of COPD",
  "year": 2013,
  "journal": "JAMA",
  "doi": "10.1001/jama.2013.5023",
  "pmid": "23695200",
  "design": "Multicenter double-blind randomized non-inferiority trial (n=314)",
  "clinicalQuestion": "Is a 5-day course of systemic glucocorticoids non-inferior to a 14-day course in acute COPD exacerbations?",
  "population": "Adults presenting to the ED with acute exacerbation of COPD",
  "intervention": "Oral prednisone 40 mg daily for 5 days",
  "comparator": "Oral prednisone 40 mg daily for 14 days",
  "primaryOutcome": "Time to next COPD exacerbation within 180 days",
  "result": {
    "summary": "5-day prednisone was non-inferior to 14 days for re-exacerbation risk (hazard ratio 0.95; 90% CI, 0.70 to 1.29; P=0.006 for non-inferiority) with similar mortality and shorter hospital stay.",
    "pValue": "P=0.006 (non-inferiority)"
  },
  "resultDirection": "positive",
  "whatItFound": "5 days of systemic glucocorticoids is clinically non-inferior to 14 days, significantly reducing steroid exposure.",
  "clinicalInterpretation": "Established the 5-day oral prednisone 40 mg regimen as the international standard of care in AECOPD.",
  "currentGuidelinePosition": "Class I recommendation in GOLD guidelines.",
  "relatedTopicIds": [
    "copd-exacerbation"
  ]
};
