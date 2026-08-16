import type { Question } from "@/content-types";

export const alteredConsciousnessQuestions: readonly Question[] = [
  {
    "id": "altered.q.cam-icu-scoring",
    "topicId": "altered-consciousness",
    "stem": "An intubated ICU patient has acute waxing and waning alertness over 24 hours (Feature 1 present). On the 'SAVEHAART' letter attention test, she squeezes appropriately on only 5 of 10 letters (Feature 2 present, >2 errors). Her current RASS score is -1 (Feature 3 present). How is this CAM-ICU assessment classified?",
    "options": [
      {
        "id": "a",
        "text": "CAM-ICU Positive (Delirium present)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "CAM-ICU Negative (Requires Feature 4 to be positive)",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Unassessable due to intubation",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Normal baseline sedation",
        "isCorrect": false
      }
    ],
    "explanation": "CAM-ICU diagnosis of delirium requires Feature 1 (Acute change/fluctuating) + Feature 2 (Inattention) + EITHER Feature 3 (Altered LOC, RASS other than 0) OR Feature 4 (Disorganized thinking). Because Features 1, 2, and 3 are present, the patient is CAM-ICU Positive.",
    "difficulty": "basic",
    "category": "Diagnosis",
    "references": [
      "Ely EW et al. CAM-ICU. JAMA 2001."
    ]
  }
,
  {
    id: "coma.q.four-score-advantage",
    topicId: "altered-consciousness",
    stem: "Why is the Full Outline of UnResponsiveness (FOUR) score often preferred over the Glasgow Coma Scale (GCS) in intubated ICU patients with altered consciousness?",
    options: [
      { id: "a", text: "The FOUR score does not require any physical examination of the patient.", isCorrect: false },
      { id: "b", text: "The FOUR score tests brainstem reflexes and respiratory patterns independently and does not depend on a verbal response, making it fully testable in intubated patients.", isCorrect: true },
      { id: "c", text: "The FOUR score is only validated in pediatric trauma patients.", isCorrect: false },
      { id: "d", text: "The FOUR score directly correlates with intracranial pressure in mmHg.", isCorrect: false }
    ],
    explanation: "The FOUR score evaluates four domains (Eye response, Motor response, Brainstem reflexes, and Respiration), each scored 0-4 (total 16). Because it replaces the GCS verbal component with brainstem reflexes (pupils and corneal reflexes) and respiratory drive, it provides superior neuroprognostic precision in intubated, mechanically ventilated patients.",
    difficulty: "basic",
    category: "Assessment",
    references: [
      "Wijdicks EFM, et al. FOUR Score. Ann Neurol 2005; Neurocritical Care Society."
    ]
  },
  {
    id: "coma.q.ncse-screening",
    topicId: "altered-consciousness",
    stem: "In an ICU patient with unexplained persistent coma or fluctuating delirium after cardiac arrest or stroke without visible motor convulsions, which diagnostic test is mandatory to rule out Non-Convulsive Status Epilepticus (NCSE)?",
    options: [
      { id: "a", text: "Non-contrast Head CT.", isCorrect: false },
      { id: "b", text: "Continuous Electroencephalography (cEEG) for at least 24 to 48 hours.", isCorrect: true },
      { id: "c", text: "Serum S100B biomarker measurement.", isCorrect: false },
      { id: "d", text: "Lumbar puncture for opening pressure only.", isCorrect: false }
    ],
    explanation: "NCSE occurs in up to 15-30% of comatose ICU patients without overt convulsions. Continuous EEG (cEEG) is mandatory to detect electrographic seizures, periodic discharges, and status epilepticus, enabling timely treatment with non-sedating ASMs and continuous anesthetics.",
    difficulty: "basic",
    category: "Diagnosis",
    references: [
      "Claassen J, et al. Neurocrit Care 2013; ACNS Guidelines."
    ]
  }
];
