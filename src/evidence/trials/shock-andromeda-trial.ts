import type { Trial } from "@/content-types";

export const shockAndromedaTrial: Trial = {
  "id": "shock-andromeda-trial",
  "name": "ANDROMEDA-SHOCK",
  "title": "Effect of a Resuscitation Strategy Targeting Peripheral Perfusion Status vs Serum Lactate Level on 28-Day Mortality",
  "year": 2019,
  "journal": "JAMA",
  "doi": "10.1001/jama.2019.0071",
  "pmid": "30772908",
  "design": "Multicenter randomized trial (n=424)",
  "clinicalQuestion": "Does capillary refill time (CRT)-guided resuscitation improve outcomes compared with lactate-guided resuscitation in septic shock?",
  "population": "Adults with early septic shock within 4 hours of diagnosis",
  "intervention": "Resuscitation protocol targeting CRT normalization (<= 3 seconds)",
  "comparator": "Resuscitation protocol targeting lactate clearance (>= 20% every 2 hours)",
  "primaryOutcome": "28-day all-cause mortality",
  "result": {
    "summary": "28-day mortality was 34.9% in the CRT group vs 43.4% in the lactate group (hazard ratio 0.75; P=0.06; adjusted analysis P=0.025), with significantly less organ dysfunction at 72 hours.",
    "pValue": "P=0.025 (adjusted)"
  },
  "resultDirection": "positive",
  "whatItFound": "Capillary refill time guided resuscitation resulted in less fluid overload and faster resolution of organ dysfunction.",
  "clinicalInterpretation": "Promoted CRT as a rapid, non-invasive bedside endpoint for perfusion resuscitation.",
  "currentGuidelinePosition": "Supported in Surviving Sepsis Campaign 2021 guidelines.",
  "relatedTopicIds": [
    "shock",
    "septic-shock"
  ]
};
