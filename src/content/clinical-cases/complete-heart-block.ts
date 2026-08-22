import type { ClinicalCase } from "@/content-types/clinical-case";

export const completeHeartBlockCase: ClinicalCase = {
  "id": "case-complete-heart-block",
  "slug": "complete-heart-block",
  "title": "Complete Heart Block with Hemodynamic Instability",
  "subtitle": "Symptomatic third-degree AV block, escape rhythm mechanics, and sequential pacing strategy",
  "difficulty": "intermediate",
  "system": "cardiovascular",
  "tags": [
    "arrhythmias",
    "heart-block",
    "pacing",
    "hemodynamics"
  ],
  "objectives": [
    "Differentiate supraventricular vs infranodal AV blocks on 12-lead ECG",
    "Perform immediate non-invasive transcutaneous pacing and transition to transvenous pacing"
  ],
  "initialPresentation": {
    "history": "A 71-year-old female with prior anterior MI presents with syncope and profound lethargy. Heart rate is 32 bpm and blood pressure is 72/40 mmHg (MAP 50 mmHg).",
    "vitals": {
      "HR": "32/min regular",
      "BP": "72/40 mmHg",
      "MAP": "50 mmHg",
      "SpO2": "93%"
    },
    "keyFindings": [
      "12-lead ECG confirms complete AV dissociation with wide ventricular escape complexes at 32 bpm",
      "Profound hypoperfusion: cool clammy skin, altered sensorium"
    ]
  },
  "steps": [
    {
      "id": "step-1",
      "prompt": "The patient has symptomatic infranodal Complete Heart Block with MAP 50 mmHg.",
      "question": "What is the most appropriate initial management approach?",
      "options": [
        {
          "id": "1-a",
          "text": "Apply Transcutaneous Pacing (TCP) pads immediately and initiate pacing; attempt Atropine 1 mg as an initial trial bridge while preparing Transvenous Pacing",
          "isCorrect": true,
          "explanation": "In unstable bradycardia with infranodal complete heart block, Atropine is rarely effective (as it acts on the AV node, not His-Purkinje system). Immediate transcutaneous pacing with sedation is the primary therapy.",
          "physiologicReasoning": "Cardiac output = HR × SV. When heart rate is fixed at 32 bpm, compensatory stroke volume augmentation is maxed out, causing critical perfusion failure.",
          "outcome": {
            "classification": "appropriate",
            "immediateEffects": [
              "Electrical and mechanical capture achieved at 70 bpm",
              "Blood pressure rises to 118/72 mmHg"
            ],
            "clinicalResponse": "TCP pacing at 70 bpm yields immediate 1:1 capture and blood pressure normalizes."
          }
        },
        {
          "id": "1-b",
          "text": "Administer Adenosine 6 mg rapid IV push",
          "isCorrect": false,
          "explanation": "Adenosine blocks the AV node and is strictly contraindicated in complete heart block.",
          "whyNot": "Adenosine causes prolonged ventricular asystole in third-degree AV block.",
          "outcome": {
            "classification": "potentially-harmful",
            "immediateEffects": [
              "Ventricular asystole"
            ],
            "clinicalResponse": "Patient arrests in asystole."
          }
        }
      ],
      "physiologyDisplay": {
        "hr": "down-down",
        "co": "down-down",
        "map": "down-down"
      }
    }
  ],
  "relatedMedicationSlugs": [
    "epinephrine",
    "dopamine"
  ],
  "relatedTopicIds": [
    "arrhythmias",
    "shock"
  ],
  "relatedPathwaySlugs": [],
  "relatedProblemSlugs": [
    "acute-hypotension"
  ],
  "references": [
  "2018 ACC/AHA/HRS Guideline on Bradycardia and Cardiac Conduction Delay"
]
};
