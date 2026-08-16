import type { Trial } from "@/content-types";

export const ichInteract2Trial: Trial = {
  "id": "ich-interact2-trial",
  "name": "INTERACT-2",
  "title": "Rapid Blood-Pressure Lowering in Patients with Acute Intracerebral Hemorrhage",
  "year": 2013,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa1214609",
  "pmid": "23713348",
  "design": "International multicenter randomized open-label trial (n=2839)",
  "clinicalQuestion": "Does intensive acute blood pressure lowering targeting SBP < 140 mmHg improve outcomes in acute intracerebral hemorrhage?",
  "population": "Adults with spontaneous intracerebral hemorrhage within 6 hours of onset and elevated SBP (150-220 mmHg)",
  "intervention": "Intensive blood pressure lowering targeting SBP < 140 mmHg within 1 hour",
  "comparator": "Standard guideline blood pressure lowering targeting SBP < 180 mmHg",
  "primaryOutcome": "Death or major disability (mRS 3-6) at 90 days",
  "result": {
    "summary": "Intensive lowering did not significantly reduce the primary composite outcome of death or major disability (52.0% vs 55.6%, P=0.06), but ordinal analysis of mRS showed significantly improved functional recovery (odds ratio 0.87, 95% CI 0.77-1.00, P=0.04) with no safety concerns.",
    "pValue": "P=0.04 (ordinal mRS recovery)"
  },
  "resultDirection": "positive",
  "whatItFound": "Targeting SBP 130-140 mmHg within 1-2 hours is safe, attenuates hematoma expansion, and modestly improves functional recovery.",
  "clinicalInterpretation": "Established SBP 130-140 mmHg as the standard acute target in non-coagulopathic spontaneous ICH.",
  "currentGuidelinePosition": "Class I/IIa in AHA/ASA 2022 ICH guidelines.",
  "relatedTopicIds": [
    "intracranial-hemorrhage"
  ]
};
