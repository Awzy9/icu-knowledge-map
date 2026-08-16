import type { Trial } from "@/content-types";

export const phAmbitionTrial: Trial = {
  "id": "ph-ambition-trial",
  "name": "AMBITION",
  "title": "Initial Use of Ambrisentan plus Tadalafil in Pulmonary Arterial Hypertension",
  "year": 2015,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa1413687",
  "pmid": "26309247",
  "design": "Multicenter double-blind randomized active-comparator trial (n=500)",
  "clinicalQuestion": "Does upfront initial combination therapy with ambrisentan and tadalafil reduce clinical failure compared with monotherapy in treatment-naive PAH?",
  "population": "Treatment-naive patients with WHO Functional Class II or III pulmonary arterial hypertension",
  "intervention": "Combination therapy with ambrisentan (10 mg daily) plus tadalafil (40 mg daily)",
  "comparator": "Pooled monotherapy with ambrisentan alone or tadalafil alone",
  "primaryOutcome": "Time to first event of clinical failure (death, hospitalization for worsening PAH, disease progression, or unsatisfactory response)",
  "result": {
    "summary": "Clinical failure occurred in 18% of the combination-therapy group vs 31% of the pooled-monotherapy group (hazard ratio 0.50; 95% CI, 0.35 to 0.72; P<0.001). Hospitalizations for worsening PAH were reduced by 63% (P=0.002).",
    "pValue": "P<0.001"
  },
  "resultDirection": "positive",
  "whatItFound": "Initial upfront dual oral combination therapy halves the rate of clinical failure and hospitalization in treatment-naive pulmonary arterial hypertension.",
  "clinicalInterpretation": "Transformed PAH management from sequential monotherapy escalation to mandatory upfront combination targeting multiple pathways.",
  "currentGuidelinePosition": "Class I recommendation in ESC/ERS 2022 pulmonary hypertension guidelines.",
  "relatedTopicIds": [
    "pulmonary-hypertension"
  ]
};
