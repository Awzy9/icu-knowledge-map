import type { Trial } from "@/content-types";

export const pancreatitisWaterfallTrial: Trial = {
  "id": "pancreatitis-waterfall-trial",
  "name": "WATERFALL",
  "title": "Aggressive versus Moderate Fluid Resuscitation in Acute Pancreatitis",
  "year": 2022,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa2202884",
  "pmid": "36103415",
  "design": "Multicenter open-label randomized controlled trial (n=249)",
  "clinicalQuestion": "Is aggressive fluid resuscitation superior to moderate fluid resuscitation in acute pancreatitis?",
  "population": "Adults presenting with acute pancreatitis within 24 hours of pain onset",
  "intervention": "Aggressive resuscitation (20 mL/kg bolus + 3 mL/kg/h Lactated Ringer's)",
  "comparator": "Moderate resuscitation (10 mL/kg bolus if hypovolemic + 1.5 mL/kg/h Lactated Ringer's)",
  "primaryOutcome": "Development of moderately severe or severe acute pancreatitis",
  "result": {
    "summary": "Trial stopped early for safety: aggressive resuscitation caused a 3-fold higher incidence of fluid overload (20.5% vs 6.3%, P=0.004) without reducing severe pancreatitis (22.1% vs 17.3%, P=0.32).",
    "pValue": "P=0.004 (fluid overload harm)"
  },
  "resultDirection": "contradictory",
  "whatItFound": "Aggressive large-volume fluid loading causes volume overload and harm without improving clinical resolution.",
  "clinicalInterpretation": "Reversed decades of dogmatic aggressive hydration in acute pancreatitis toward moderate goal-directed therapy.",
  "currentGuidelinePosition": "Standard of care in modern pancreatic critical care.",
  "relatedTopicIds": [
    "acute-pancreatitis"
  ]
};
