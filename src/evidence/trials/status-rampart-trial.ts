import type { Trial } from "@/content-types";

export const statusRampartTrial: Trial = {
  "id": "status-rampart-trial",
  "name": "RAMPART",
  "title": "Intramuscular versus Intravenous Therapy for Prehospital Status Epilepticus",
  "year": 2012,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa1107494",
  "pmid": "22335736",
  "design": "Double-blind non-inferiority randomized trial (n=893)",
  "clinicalQuestion": "Is intramuscular midazolam via autoinjector non-inferior to intravenous lorazepam for terminating prehospital status epilepticus?",
  "population": "Children and adults in convulsive status epilepticus lasting > 5 minutes",
  "intervention": "Intramuscular Midazolam (10 mg for weight > 40 kg, 5 mg for 13-40 kg)",
  "comparator": "Intravenous Lorazepam (4 mg for weight > 40 kg, 2 mg for 13-40 kg)",
  "primaryOutcome": "Seizure cessation on arrival at the emergency department without rescue therapy",
  "result": {
    "summary": "IM midazolam was superior in seizure termination upon ED arrival (73.4% vs 63.4%; difference 10.0 percentage points; 95% CI 4.0 to 16.1; P<0.001 for non-inferiority and P<0.001 for superiority) due to faster administration time.",
    "pValue": "P<0.001"
  },
  "resultDirection": "positive",
  "whatItFound": "IM midazolam terminates prolonged seizures faster than IV lorazepam by eliminating the delay required for intravenous line placement.",
  "clinicalInterpretation": "Established IM midazolam 10 mg as the preferred first-line agent when IV access is not immediately established.",
  "currentGuidelinePosition": "Class I recommendation in American Epilepsy Society 2016 guidelines.",
  "relatedTopicIds": [
    "status-epilepticus"
  ]
};
