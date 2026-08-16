import type { Flashcard } from "@/content-types";

export const alteredConsciousnessFlashcards: readonly Flashcard[] = [
  {
    "id": "altered.fc.coma-pathophysiology",
    "topicId": "altered-consciousness",
    "question": "What two neuroanatomical structures must be impaired to produce Coma?",
    "answer": "1. The Ascending Reticular Activating System (ARAS) in the brainstem/thalamus; OR 2. Bilateral cerebral hemispheres (diffuse cortical dysfunction).",
    "explanation": "Unilateral hemispheric lesions do not cause coma unless they generate midline shift, herniation, and secondary brainstem compression.",
    "difficulty": "basic",
    "category": "Pathophysiology",
    "references": [
      "Plum and Posner's Diagnosis of Stupor and Coma, 5th Edition."
    ]
  },
  {
    "id": "altered.fc.cam-icu-delirium-screening",
    "topicId": "altered-consciousness",
    "question": "What 4 features comprise the Confusion Assessment Method for the ICU (CAM-ICU)?",
    "answer": "Feature 1: Acute onset or fluctuating course; Feature 2: Inattention (letters test); Feature 3: Altered level of consciousness (RASS other than 0); Feature 4: Disorganized thinking.",
    "explanation": "CAM-ICU is positive for delirium if Feature 1 AND Feature 2 are present, PLUS either Feature 3 OR Feature 4.",
    "difficulty": "basic",
    "category": "Diagnosis",
    "references": [
      "Ely EW et al. Evaluation of delirium in critically ill patients (CAM-ICU). JAMA 2001."
    ]
  },
  {
    "id": "altered.fc.padis-guidelines-dexmedetomidine",
    "topicId": "altered-consciousness",
    "question": "What do the SCCM PADIS guidelines recommend regarding sedative choice to reduce ICU delirium?",
    "answer": "Use non-benzodiazepine sedatives (Dexmedetomidine or Propofol) over benzodiazepines (Midazolam/Lorazepam) in mechanically ventilated adults.",
    "explanation": "Benzodiazepine infusions are an independent risk factor for ICU delirium, prolonged ventilation, and post-ICU cognitive impairment.",
    "difficulty": "intermediate",
    "category": "Guidelines",
    "references": [
      "Devlin JW et al. Clinical Practice Guidelines for the Prevention and Management of Pain, Agitation/Sedation, Delirium, Immobility, and Sleep Disruption in Adult Patients in the ICU (PADIS). Crit Care Med 2018."
    ]
  },
  {
    "id": "altered.fc.four-score",
    "topicId": "altered-consciousness",
    "question": "What are the 4 components of the FOUR Score and why is it superior to GCS in intubated ICU patients?",
    "answer": "Eye responses, Motor responses, Brainstem reflexes, and Respiration pattern (0-4 each, total 16). Superior because it does not require a verbal response and includes brainstem reflexes.",
    "explanation": "Wijdicks et al. validated the FOUR score to track coma depth and brainstem integrity in mechanically ventilated patients.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in altered-consciousness"
    ]
  },
  {
    "id": "altered.fc.nonconvulsive-status",
    "topicId": "altered-consciousness",
    "question": "When should continuous EEG (cEEG) be ordered in an unresponsive ICU patient?",
    "answer": "Unexplained coma, post-cardiac arrest, fluctuating mental status, subtle facial/ocular twitching, or acute brain injury failing to awaken as expected (detects nonconvulsive status epilepticus in 15-20%).",
    "explanation": "NCSE causes ongoing ischemic neuronal injury and must be treated emergently with anti-seizure medications.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in altered-consciousness"
    ]
  },
  {
    "id": "altered.fc.cam-icu-elements",
    "topicId": "altered-consciousness",
    "question": "What 4 features make up the CAM-ICU assessment for ICU delirium?",
    "answer": "Feature 1: Acute onset or fluctuating course; Feature 2: Inattention (letters test); AND either Feature 3: Altered level of consciousness (RASS not 0) OR Feature 4: Disorganized thinking.",
    "explanation": "Diagnosis requires Feature 1 AND Feature 2 AND (Feature 3 OR Feature 4). Highly sensitive (>95%) and specific (>90%).",
    "difficulty": "basic",
    "category": "Diagnosis",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in altered-consciousness"
    ]
  }
];
