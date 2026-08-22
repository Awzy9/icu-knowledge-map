import type { ClinicalCase } from "@/content-types/clinical-case";

export const refractoryStatusEpilepticusCase: ClinicalCase = {
  "id": "case-refractory-status-epilepticus",
  "slug": "refractory-status-epilepticus",
  "title": "Refractory Status Epilepticus (RSE)",
  "subtitle": "Time-critical pharmacotherapy escalation from benzodiazepines to continuous anesthetic infusions and continuous EEG",
  "difficulty": "advanced",
  "system": "neurological",
  "tags": [
    "status-epilepticus",
    "neurology",
    "propofol",
    "midazolam"
  ],
  "objectives": [
    "Execute guideline-directed treatment algorithm for status epilepticus",
    "Transition to continuous anesthetic infusions (Propofol / Midazolam) for Refractory Status Epilepticus (>30 min)"
  ],
  "initialPresentation": {
    "history": "A 34-year-old male presents with continuous generalized tonic-clonic convulsions for 25 minutes despite EMS Lorazepam 2 mg IV.",
    "vitals": {
      "HR": "142/min",
      "BP": "165/98 mmHg",
      "RR": "28/min",
      "SpO2": "90%"
    },
    "keyFindings": [
      "Active bilateral tonic-clonic motor convulsions with cyanosis",
      "Total seizure duration: 25 minutes"
    ]
  },
  "steps": [
    {
      "id": "step-1",
      "prompt": "The patient has been seizing continuously for 25 minutes despite 2 mg of Lorazepam.",
      "question": "What is the most appropriate immediate medication order per the ESETT trial?",
      "options": [
        {
          "id": "1-a",
          "text": "Administer a full second-dose of Lorazepam (4 mg IV) + immediate IV Levetiracetam (60 mg/kg, max 4,500 mg over 10 min) OR IV Fosphenytoin (20 mg PE/kg)",
          "isCorrect": true,
          "explanation": "First-line therapy requires full weight-based benzodiazepines (Lorazepam 0.1 mg/kg). Second-line non-sedating AEDs (Levetiracetam 60 mg/kg) must be infused rapidly.",
          "physiologicReasoning": "GABA-A receptors downregulate as seizure duration exceeds 15–30 minutes, causing progressive benzodiazepine pharmacoresistance.",
          "outcome": {
            "classification": "appropriate",
            "immediateEffects": [
              "GABAergic inhibition augmented",
              "Presynaptic SV2A blocked"
            ],
            "clinicalResponse": "Lorazepam 4 mg IV plus Levetiracetam 4,500 mg IV reduces the amplitude of convulsions."
          }
        },
        {
          "id": "1-b",
          "text": "Give Phenobarbital orally via NG tube and wait 2 hours",
          "isCorrect": false,
          "explanation": "Enteral dosing is unacceptably slow during status epilepticus.",
          "whyNot": "Enteral dosing is strictly contraindicated in acute GCSE emergencies.",
          "outcome": {
            "classification": "potentially-harmful",
            "immediateEffects": [
              "Ongoing neuronal cell death"
            ],
            "clinicalResponse": "Convulsions continue unabated."
          }
        }
      ],
      "physiologyDisplay": {
        "map": "up",
        "hr": "up-up"
      }
    }
  ],
  "relatedMedicationSlugs": [
    "propofol",
    "midazolam",
    "ketamine"
  ],
  "relatedTopicIds": [
    "status-epilepticus",
    "altered-consciousness"
  ],
  "relatedPathwaySlugs": [],
  "relatedProblemSlugs": [
    "acute-altered-mental-status"
  ],
  "references": [
  "Randomized Trial of Three Anticonvulsant Medications for Status Epilepticus (ESETT)"
]
};
