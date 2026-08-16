import type { Trial } from "@/content-types";

export const ichPatchTrial: Trial = {
  "id": "ich-patch-trial",
  "name": "PATCH",
  "title": "Platelet Transfusion versus Standard Care in Acute Spontaneous Intracerebral Hemorrhage",
  "year": 2016,
  "journal": "Lancet",
  "doi": "10.1016/S0140-6736(16)30392-0",
  "pmid": "27161521",
  "design": "Multicenter open-label randomized trial (n=190)",
  "clinicalQuestion": "Does platelet transfusion improve outcomes in antiplatelet-associated spontaneous intracerebral hemorrhage?",
  "population": "Adults with spontaneous ICH within 6 hours who had used antiplatelet therapy for >= 7 days prior",
  "intervention": "Platelet concentrate transfusion within 90 minutes of brain imaging",
  "comparator": "Standard supportive care without platelet transfusion",
  "primaryOutcome": "Shift towards death or dependence on the modified Rankin Scale at 3 months",
  "result": {
    "summary": "Patients receiving platelet transfusion had significantly higher odds of death or dependence at 3 months (adjusted OR 2.05, 95% CI 1.18 to 3.56, P=0.0114) and higher in-hospital mortality (24% vs 17%).",
    "pValue": "P=0.0114 (harm from platelets)"
  },
  "resultDirection": "contradictory",
  "whatItFound": "Platelet transfusion in antiplatelet-associated non-operative ICH causes harm and increases mortality.",
  "clinicalInterpretation": "Reversed empirical practice: routine platelet transfusion is contraindicated in non-surgical antiplatelet-associated ICH.",
  "currentGuidelinePosition": "Class III (Harm) recommendation in AHA/ASA and neurocritical care guidelines.",
  "relatedTopicIds": [
    "intracranial-hemorrhage",
    "transfusion"
  ]
};
