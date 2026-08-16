import type { Trial } from "@/content-types";

export const sedationMidsSpice3Trial: Trial = {
  "id": "sedation-mids-spice3-trial",
  "name": "SPICE III",
  "title": "Early Sedation with Dexmedetomidine in Critically Ill Patients",
  "year": 2019,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa1904710",
  "pmid": "31100984",
  "design": "Multinational open-label randomized trial across 65 ICUs (n=3904)",
  "clinicalQuestion": "Does early sedation with dexmedetomidine as the primary sedative reduce 90-day mortality compared with standard sedation in mechanically ventilated ICU patients?",
  "population": "Critically ill adults expected to receive mechanical ventilation for > 24 hours within 12 hours of intubation",
  "intervention": "Dexmedetomidine as the primary sedative agent",
  "comparator": "Usual care sedation (propofol, midazolam, or other sedatives)",
  "primaryOutcome": "All-cause mortality at 90 days",
  "result": {
    "summary": "90-day mortality was 29.1% in the dexmedetomidine group vs 29.1% in the usual-care group (difference 0.0 percentage points; 95% CI, -2.9 to 2.8; P=0.98). Dexmedetomidine patients had significantly more days free from coma and delirium (P<0.001) and spent more time at target light sedation.",
    "pValue": "P=0.98"
  },
  "resultDirection": "negative-neutral",
  "whatItFound": "Dexmedetomidine was safe and increased light sedation and coma-free days, with equivalent overall 90-day survival compared to standard sedative regimens.",
  "clinicalInterpretation": "Established dexmedetomidine as a safe primary sedative that facilitates light sedation without adverse mortality signals.",
  "currentGuidelinePosition": "Strong recommendation in SCCM PADIS guidelines for light sedation.",
  "relatedTopicIds": [
    "icu-sedation-delirium"
  ]
};
