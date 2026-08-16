import type { Trial } from "@/content-types";

export const ecmoCesarTrial: Trial = {
  "id": "ecmo-cesar-trial",
  "name": "CESAR",
  "title": "Efficacy and economic assessment of conventional ventilatory support versus extracorporeal membrane oxygenation for severe adult respiratory failure",
  "year": 2009,
  "journal": "Lancet",
  "doi": "10.1016/S0140-6736(09)61069-2",
  "pmid": "19762075",
  "design": "Multicenter randomized controlled trial across 68 UK hospitals (n=180)",
  "clinicalQuestion": "Does referral of severe adult respiratory failure to a specialized ECMO center improve 6-month survival without severe disability compared with conventional ventilation?",
  "population": "Adults with severe but potentially reversible acute respiratory failure (Murray score >= 3.0 or uncompensated hypercapnic acidosis pH < 7.20)",
  "intervention": "Referral to a specialized ECMO center for consideration of VV ECMO and protocolized lung-protective ventilation",
  "comparator": "Continued conventional mechanical ventilation at referring tertiary hospitals",
  "primaryOutcome": "Death or severe disability at 6 months post-randomization",
  "result": {
    "summary": "63% of patients allocated to the ECMO-referral group survived to 6 months without severe disability compared with 47% allocated to conventional management (relative risk 0.69; 95% CI, 0.50 to 0.97; P=0.03; NNT=6).",
    "pValue": "P=0.03"
  },
  "resultDirection": "positive",
  "whatItFound": "Centralized referral to a dedicated ECMO center for severe ARDS significantly improved 6-month survival without severe disability.",
  "clinicalInterpretation": "Established the clinical paradigm of early transfer to high-volume ECMO centers for refractory ARDS.",
  "currentGuidelinePosition": "Class I recommendation in ELSO and international ECMO consensus guidelines.",
  "relatedTopicIds": [
    "ecmo-fundamentals",
    "ards"
  ]
};
