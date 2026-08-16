import type { Trial } from "@/content-types";

export const pancreatitisPanterTrial: Trial = {
  "id": "pancreatitis-panter-trial",
  "name": "PANTER",
  "title": "A Step-Up Approach or Open Necrosectomy for Necrotizing Pancreatitis",
  "year": 2010,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa0908821",
  "pmid": "20410519",
  "design": "Multicenter randomized controlled trial across 19 Dutch hospitals (n=88)",
  "clinicalQuestion": "Does a minimally invasive step-up approach reduce complications and mortality compared with primary open necrosectomy in infected necrotizing pancreatitis?",
  "population": "Patients with confirmed or suspected infected necrotizing pancreatitis",
  "intervention": "Minimally invasive step-up approach (percutaneous or endoscopic catheter drainage, followed by minimally invasive retroperitoneal necrosectomy if needed)",
  "comparator": "Primary open necrosectomy with continuous postoperative lavage",
  "primaryOutcome": "Composite of major complications (new-onset organ failure, bleeding, enterocutaneous fistula) or death",
  "result": {
    "summary": "Primary endpoint occurred in 40% of the step-up group vs 69% of the open-necrosectomy group (relative risk 0.57, 95% CI 0.38 to 0.87, P=0.006). 35% of step-up patients were successfully treated with percutaneous drainage alone without requiring any surgical necrosectomy.",
    "pValue": "P=0.006"
  },
  "resultDirection": "positive",
  "whatItFound": "The minimally invasive step-up approach reduced major complications by 43% and avoided open surgery in over one-third of infected necrotizing pancreatitis cases.",
  "clinicalInterpretation": "Transformed infected necrotizing pancreatitis management from immediate open surgery to initial percutaneous/endoscopic drainage.",
  "currentGuidelinePosition": "Class I recommendation in AGA, ACG, and international IAP/APA guidelines.",
  "relatedTopicIds": [
    "acute-pancreatitis"
  ]
};
