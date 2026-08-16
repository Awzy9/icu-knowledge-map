import type { Trial } from "@/content-types";

export const pePeithoTrial: Trial = {
  "id": "pe-peitho-trial",
  "name": "PEITHO",
  "title": "Fibrinolysis for Patients with Intermediate-Risk Pulmonary Embolism",
  "year": 2014,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa1302097",
  "pmid": "24716680",
  "design": "Multicenter randomized double-blind placebo-controlled trial (n=1006)",
  "clinicalQuestion": "Does systemic thrombolysis with tenecteplase improve outcomes in intermediate-risk (submassive) pulmonary embolism?",
  "population": "Normotensive patients with acute PE, RV dysfunction on echo/CT, and elevated troponin",
  "intervention": "Single IV bolus Tenecteplase plus Unfractionated Heparin",
  "comparator": "Placebo plus Unfractionated Heparin",
  "primaryOutcome": "All-cause mortality or hemodynamic collapse within 7 days",
  "result": {
    "summary": "Tenecteplase reduced the primary composite outcome (2.6% vs 5.6%, P=0.02) but significantly increased major extracranial bleeding (6.3% vs 1.2%, P<0.001) and hemorrhagic stroke (2.0% vs 0.2%, P=0.003).",
    "pValue": "P=0.02 (efficacy) / P=0.003 (stroke)"
  },
  "resultDirection": "contradictory",
  "whatItFound": "Routine thrombolysis prevents hemodynamic decompensation but markedly increases major hemorrhage and hemorrhagic stroke.",
  "clinicalInterpretation": "Routine thrombolysis is withheld in submassive PE; close monitoring with rescue thrombolysis if shock develops is the standard of care.",
  "currentGuidelinePosition": "Class III for routine thrombolysis; Class I for rescue in ESC guidelines.",
  "relatedTopicIds": [
    "pulmonary-embolism",
    "obstructive-shock"
  ]
};
