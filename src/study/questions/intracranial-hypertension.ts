import type { Question } from "@/content-types";

export const intracranialHypertensionQuestions: readonly Question[] = [
  {
    "id": "icp.q.cpp-target-calculation",
    "topicId": "intracranial-hypertension",
    "stem": "A patient with severe traumatic brain injury has an intracranial pressure (ICP) of 24 mmHg. His blood pressure is 110/60 mmHg (MAP 77 mmHg). What is his current Cerebral Perfusion Pressure (CPP), and what is the appropriate intervention according to Brain Trauma Foundation guidelines?",
    "options": [
      {
        "id": "a",
        "text": "CPP is 53 mmHg (inadequate); titrate Norepinephrine to raise MAP and initiate Tier 1 ICP-lowering therapy to achieve CPP 60–70 mmHg.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "CPP is 86 mmHg (excessive); start a nicardipine drip to lower MAP.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "CPP is 77 mmHg (normal); maintain current management without changes.",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "CPP is 24 mmHg; immediately initiate pentobarbital coma.",
        "isCorrect": false
      }
    ],
    "explanation": "CPP = MAP - ICP = 77 - 24 = 53 mmHg. Brain Trauma Foundation guidelines recommend maintaining CPP between 60–70 mmHg. A CPP < 60 mmHg is associated with cerebral ischemia and increased mortality; MAP should be supported with vasopressors while treating the elevated ICP.",
    "difficulty": "basic",
    "category": "Monitoring",
    "references": [
      "Brain Trauma Foundation Guidelines 4th Edition 2017."
    ]
  }
,
  {
    id: "icp.q.tier-management",
    topicId: "intracranial-hypertension",
    stem: "In a traumatic brain injury patient with an ICP monitor reading 28 mmHg (threshold > 22 mmHg) despite Tier 1 baseline measures (head of bed 30°, sedation/analgesia, normothermia, PaCO2 35-38 mmHg), what is the appropriate Tier 2 intervention?",
    options: [
      { id: "a", text: "Immediate decompressive hemicraniectomy and high-dose pentobarbital coma.", isCorrect: false },
      { id: "b", text: "Osmotherapy with 23.4% hypertonic saline bolus (30 mL) or 3% saline infusion (target Na 145-155 mEq/L) or mannitol (0.5-1.0 g/kg), and CSF drainage via external ventricular drain.", isCorrect: true },
      { id: "c", text: "Hyperventilation to PaCO2 < 25 mmHg for 24 hours.", isCorrect: false },
      { id: "d", text: "High-dose methylprednisolone infusion.", isCorrect: false }
    ],
    explanation: "Seattle International Severe Traumatic Brain Injury Consensus Conference (SIBICC) guidelines recommend a stepwise tiered algorithm: Tier 1 (posture, analgesia, normocapnia) -> Tier 2 (hyperosmolar therapy with hypertonic saline or mannitol, EVD CSF drainage, neuromuscular blockade) -> Tier 3 (decompressive craniectomy, barbiturate coma, mild hypothermia).",
    difficulty: "intermediate",
    category: "Management",
    references: [
      "Hawryluk GWJ, et al. SIBICC Guidelines. Intensive Care Med 2019; Brain Trauma Foundation 4th Edition."
    ]
  },
  {
    id: "icp.q.cpp-target",
    topicId: "intracranial-hypertension",
    stem: "According to Brain Trauma Foundation guidelines, what is the target Cerebral Perfusion Pressure (CPP = MAP - ICP) to prevent secondary cerebral ischemia while avoiding hyperdynamic lung injury?",
    options: [
      { id: "a", text: "CPP 40 to 50 mmHg.", isCorrect: false },
      { id: "b", text: "CPP 60 to 70 mmHg.", isCorrect: true },
      { id: "c", text: "CPP > 90 mmHg using aggressive vasopressors and fluid loading.", isCorrect: false },
      { id: "d", text: "CPP is not a relevant metric if ICP is normal.", isCorrect: false }
    ],
    explanation: "The Brain Trauma Foundation recommends targeting CPP between 60 and 70 mmHg. CPP < 60 mmHg increases secondary ischemic brain injury and mortality, whereas aggressively forcing CPP > 70 mmHg with excessive fluids and vasopressors increases ARDS and pulmonary edema (Rosner vs Chestnut trials).",
    difficulty: "basic",
    category: "Physiology",
    references: [
      "Brain Trauma Foundation 4th Edition Guidelines; Carney N, et al. Neurosurgery 2017."
    ]
  }
];
