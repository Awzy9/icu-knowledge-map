import type { Trial } from "@/content-types";

export const sedationAbcGirardTrial: Trial = {
  "id": "sedation-abc-girard-trial",
  "name": "Awakening & Breathing Controlled (ABC)",
  "title": "Efficacy and safety of a paired sedation and ventilator weaning protocol for mechanically ventilated patients in intensive care",
  "year": 2008,
  "journal": "Lancet",
  "doi": "10.1016/S0140-6736(08)60105-1",
  "pmid": "18191684",
  "design": "Multicenter randomized controlled trial in 4 tertiary medical centers (n=336)",
  "clinicalQuestion": "Does a paired protocol of daily Spontaneous Awakening Trials (SAT) plus Spontaneous Breathing Trials (SBT) improve ventilator liberation and survival compared with standard care?",
  "population": "Adult medical ICU patients receiving mechanical ventilation for > 12 hours",
  "intervention": "Paired daily SAT (sedation interruption) followed by SBT if passed",
  "comparator": "Usual sedation care plus daily SBT",
  "primaryOutcome": "Time to successful extubation (days free of mechanical ventilation during 28 days)",
  "result": {
    "summary": "Patients in the intervention group had significantly more ventilator-free days (median 14.7 vs 11.6 days, P=0.02), were discharged from the ICU earlier (9.1 vs 12.9 days, P=0.01), and had a 14% absolute reduction in 1-year mortality (44% vs 58%; hazard ratio 0.68; P=0.01; NNT=7.4).",
    "pValue": "P=0.01 (1-year survival)"
  },
  "resultDirection": "positive",
  "whatItFound": "A paired nurse-driven SAT and respiratory therapist-driven SBT protocol drastically reduced ventilator duration, ICU stay, and 1-year mortality.",
  "clinicalInterpretation": "Established the SAT/SBT paired coordination bundle as the foundational standard for ICU ventilator liberation.",
  "currentGuidelinePosition": "Class I core component of the SCCM ABCDEF liberation bundle.",
  "relatedTopicIds": [
    "icu-sedation-delirium",
    "mechanical-ventilation"
  ]
};
