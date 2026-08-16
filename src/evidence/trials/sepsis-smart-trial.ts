import type { Trial } from "@/content-types";

export const sepsisSmartTrial: Trial = {
  "id": "sepsis-smart-trial",
  "name": "SMART",
  "title": "Balanced Crystalloids versus Saline in Critically Ill Adults",
  "year": 2018,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa1711584",
  "pmid": "29485925",
  "design": "Pragmatic unblinded cluster-randomized multiple-crossover trial (n=15,802)",
  "clinicalQuestion": "Do balanced crystalloids reduce major adverse kidney events or mortality compared with saline in the ICU?",
  "population": "Adults admitted to five intensive care units",
  "intervention": "Balanced crystalloids (Lactated Ringer's or Plasma-Lyte A)",
  "comparator": "0.9% Normal Saline",
  "primaryOutcome": "Major Adverse Kidney Events within 30 days (MAKE30: death, new RRT, persistent renal dysfunction)",
  "result": {
    "summary": "Balanced crystalloids reduced MAKE30 (14.3% vs 15.4%, P=0.04). Among patients with sepsis, 30-day mortality was significantly lower with balanced crystalloids (25.2% vs 28.0%, P=0.01).",
    "pValue": "P=0.04 (overall MAKE30) / P=0.01 (sepsis mortality)"
  },
  "resultDirection": "positive",
  "whatItFound": "Balanced crystalloids reduced renal failure and mortality compared with 0.9% normal saline, especially in septic shock.",
  "clinicalInterpretation": "Established balanced crystalloids as the resuscitation fluid of choice in sepsis and critical illness.",
  "currentGuidelinePosition": "Class I recommendation in Surviving Sepsis Campaign 2021.",
  "relatedTopicIds": [
    "sepsis",
    "septic-shock",
    "aki",
    "shock",
    "acid-base-disorders"
  ]
};
