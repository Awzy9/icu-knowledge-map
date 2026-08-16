import type { Trial } from "@/content-types";

export const aisDawnTrial: Trial = {
  "id": "ais-dawn-trial",
  "name": "DAWN",
  "title": "Thrombectomy 6 to 24 Hours after Stroke with a Mismatch between Deficit and Infarct",
  "year": 2018,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa1706442",
  "pmid": "29129157",
  "design": "Multicenter randomized open-label trial with blinded outcome assessment (n=206)",
  "clinicalQuestion": "Does mechanical thrombectomy improve functional independence in patients with acute ischemic stroke presenting 6-24 hours after last known well?",
  "population": "Patients with occlusion of the intracranial internal carotid artery or proximal MCA presenting 6-24 hours with clinical-core mismatch on automated perfusion CT (RAPID)",
  "intervention": "Mechanical thrombectomy with Trevo stent retriever plus standard medical therapy",
  "comparator": "Standard medical therapy alone",
  "primaryOutcome": "Functional independence (modified Rankin Scale score 0-2) at 90 days",
  "result": {
    "summary": "Rate of functional independence at 90 days was 49% in the thrombectomy group vs 13% in the control group (difference 36 percentage points; 95% CI 24 to 47; P<0.001; NNT=2.8). Symptomatic intracranial hemorrhage rates were similar (6% vs 3%, P=0.50).",
    "pValue": "P<0.001"
  },
  "resultDirection": "positive",
  "whatItFound": "Mechanical thrombectomy up to 24 hours after last known well in patients with clinical-core mismatch drastically increased functional independence without increasing mortality or intracranial hemorrhage.",
  "clinicalInterpretation": "Expanded the mechanical thrombectomy therapeutic window from 6 hours to 24 hours in imaging-selected large vessel occlusions.",
  "currentGuidelinePosition": "Class I recommendation in AHA/ASA and ESO stroke guidelines.",
  "relatedTopicIds": [
    "acute-ischemic-stroke"
  ]
};
