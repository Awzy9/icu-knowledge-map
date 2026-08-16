import type { Trial } from "@/content-types";

export const airwayPreventTrial: Trial = {
  "id": "airway-prevent-trial",
  "name": "PREVENT",
  "title": "Bag-Mask Ventilation during Tracheal Intubation of Critically Ill Adults",
  "year": 2019,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa1812405",
  "pmid": "30779528",
  "design": "Multicenter randomized trial in 7 ICUs (n=401)",
  "clinicalQuestion": "Does gentle bag-mask ventilation during the interval between induction and laryngoscopy reduce hypoxemia during RSI in the ICU?",
  "population": "Critically ill adults undergoing emergency tracheal intubation",
  "intervention": "Gentle bag-mask ventilation (BMV with PEEP valve) during the apneic period",
  "comparator": "No ventilation (apneic oxygenation alone)",
  "primaryOutcome": "Lowest arterial oxygen saturation (nadir SpO2) between induction and 2 min post-intubation",
  "result": {
    "summary": "Lowest SpO2 was significantly higher in the BMV group (median 96% vs 93%, P=0.01). Severe hypoxemia (SpO2 < 80%) occurred in 10.9% vs 22.8% (P<0.001). Aspiration rates did not increase (2.5% vs 4.0%).",
    "pValue": "P<0.001 (severe hypoxemia reduction)"
  },
  "resultDirection": "positive",
  "whatItFound": "Gentle BMV during RSI significantly reduced profound peri-intubation hypoxemia without increasing pulmonary aspiration.",
  "clinicalInterpretation": "Changed ICU RSI practice: gentle bagging with low pressure/PEEP is now routinely performed during the apneic phase.",
  "currentGuidelinePosition": "Recommended in SCCM and airway guidelines.",
  "relatedTopicIds": [
    "airway-management-rsi"
  ]
};
