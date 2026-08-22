import type { ClinicalCase } from "@/content-types/clinical-case";

export const vtStormCase: ClinicalCase = {
  "id": "case-vt-storm",
  "slug": "vt-storm",
  "title": "Ventricular Tachycardia (VT) Storm",
  "subtitle": "Recurrent refractory monomorphic VT: Sympathetic blockade, antiarrhythmics, and electrical cardioversion",
  "difficulty": "advanced",
  "system": "cardiovascular",
  "tags": [
    "arrhythmias",
    "vt-storm",
    "defibrillation",
    "esmolol"
  ],
  "objectives": [
    "Execute synchronized electrical cardioversion for unstable VT with a pulse",
    "Employ sympathetic autonomic blockade with beta-blockers and amiodarone"
  ],
  "initialPresentation": {
    "history": "A 64-year-old male with ischemic cardiomyopathy (LVEF 25%) develops wide-complex monomorphic tachycardia at 178 bpm with presyncope and MAP 58 mmHg.",
    "vitals": {
      "HR": "178/min",
      "BP": "78/48 mmHg",
      "MAP": "58 mmHg"
    },
    "keyFindings": [
      "Monomorphic wide-complex tachycardia on 12-lead telemetry",
      "Borderline conscious with weak carotid pulse"
    ]
  },
  "steps": [
    {
      "id": "step-1",
      "prompt": "The patient is in sustained monomorphic VT at 178 bpm with hypotension (MAP 58 mmHg).",
      "question": "What is your immediate first intervention?",
      "options": [
        {
          "id": "1-a",
          "text": "Perform immediate Synchronized Electrical Cardioversion (100–200 Joules biphasic) with procedural sedation",
          "isCorrect": true,
          "explanation": "Unstable ventricular tachycardia with a pulse requires immediate synchronized electrical cardioversion to restore sinus rhythm.",
          "physiologicReasoning": "Rapid VT truncates diastolic filling time, causing stroke volume to collapse and driving myocardial ischemia.",
          "outcome": {
            "classification": "appropriate",
            "immediateEffects": [
              "Sinus rhythm restored at 88 bpm",
              "MAP rises to 110/68 mmHg"
            ],
            "clinicalResponse": "A 150J synchronized shock immediately converts the patient to sinus rhythm."
          }
        },
        {
          "id": "1-b",
          "text": "Administer Adenosine 12 mg IV rapid push",
          "isCorrect": false,
          "explanation": "In wide-complex tachycardia with structural heart disease, Adenosine wastes critical time and can trigger VF.",
          "whyNot": "Adenosine is contraindicated in unstable VT.",
          "outcome": {
            "classification": "potentially-harmful",
            "immediateEffects": [
              "Degeneration into VF"
            ],
            "clinicalResponse": "Patient arrests in VF."
          }
        }
      ],
      "physiologyDisplay": {
        "hr": "up-up",
        "co": "down-down",
        "map": "down-down"
      }
    }
  ],
  "relatedMedicationSlugs": [
    "esmolol",
    "propofol"
  ],
  "relatedTopicIds": [
    "arrhythmias",
    "acute-coronary-syndrome"
  ],
  "relatedPathwaySlugs": [],
  "relatedProblemSlugs": [
    "acute-hypotension"
  ],
  "references": [
  "2017 AHA/ACC/HRS Guideline for Management of Ventricular Arrhythmias"
]
};
