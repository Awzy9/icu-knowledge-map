import type { ClinicalCase } from "@/content-types/clinical-case";

export const intracranialHypertensionCase: ClinicalCase = {
  "id": "case-intracranial-hypertension",
  "slug": "intracranial-hypertension",
  "title": "Acute Intracranial Hypertension Crisis",
  "subtitle": "Tiered ICP management, osmotherapy, target cerebral perfusion pressure (CPP), and herniation physiology",
  "difficulty": "intermediate",
  "system": "neurological",
  "tags": [
    "intracranial-hypertension",
    "severe-tbi",
    "cpp"
  ],
  "objectives": [
    "Calculate Cerebral Perfusion Pressure (CPP = MAP - ICP) and apply Brain Trauma Foundation target goals (60–70 mmHg)",
    "Execute Tier 1 and Tier 2 evidence-based intracranial pressure reduction algorithms"
  ],
  "initialPresentation": {
    "history": "A 28-year-old male with severe TBI has an ICP monitor alarming at 38 mmHg, with a blood pressure of 124/68 mmHg (MAP 86 mmHg, giving a CPP of only 48 mmHg).",
    "vitals": {
      "HR": "54/min",
      "BP": "124/68 mmHg",
      "MAP": "86 mmHg",
      "ICP": "38 mmHg",
      "CPP": "48 mmHg"
    },
    "keyFindings": [
      "ICP 38 mmHg (normal < 20–22 mmHg)",
      "Sluggish right pupil (5 mm vs left 3 mm)"
    ]
  },
  "steps": [
    {
      "id": "step-1",
      "prompt": "The patient has acute intracranial hypertension (ICP 38 mmHg, CPP 48 mmHg) and a newly sluggish right pupil.",
      "question": "What is your immediate first sequence of interventions?",
      "options": [
        {
          "id": "1-a",
          "text": "Elevate head of bed to 30°, optimize venous drainage, administer IV analgesia/sedation, and administer 3% Hypertonic Saline 250 mL IV bolus (or Mannitol 1 g/kg)",
          "isCorrect": true,
          "explanation": "Tier 1 neuro-critical care maneuvers maximize jugular venous outflow. Hyperosmolar therapy creates an osmotic gradient across the intact BBB, drawing water out of the brain parenchyma.",
          "physiologicReasoning": "Monro-Kellie doctrine: Intracranial volume = Brain + Blood + CSF. Reducing brain water via osmotherapy directly lowers intracranial pressure.",
          "outcome": {
            "classification": "appropriate",
            "immediateEffects": [
              "Osmotic extraction of parenchymal water",
              "ICP drops from 38 to 18 mmHg"
            ],
            "clinicalResponse": "Head elevation and 250 mL of 3% NaCl drop ICP to 17 mmHg."
          }
        },
        {
          "id": "1-b",
          "text": "Hyperventilate the patient aggressively to PaCO2 < 25 mmHg for 24 hours",
          "isCorrect": false,
          "explanation": "Aggressive hyperventilation causes intense cerebral vasoconstriction and critical brain ischemia.",
          "whyNot": "Prolonged hyperventilation is strictly contraindicated in severe TBI.",
          "outcome": {
            "classification": "potentially-harmful",
            "immediateEffects": [
              "Severe cerebral vasoconstriction and brain ischemia"
            ],
            "clinicalResponse": "Brain tissue oxygen tension drops to 8 mmHg."
          }
        }
      ],
      "physiologyDisplay": {
        "map": "up"
      }
    }
  ],
  "relatedMedicationSlugs": [
    "propofol",
    "midazolam",
    "norepinephrine"
  ],
  "relatedTopicIds": [
    "intracranial-hypertension",
    "severe-tbi"
  ],
  "relatedPathwaySlugs": [],
  "relatedProblemSlugs": [
    "acute-altered-mental-status"
  ],
  "references": [
  "Brain Trauma Foundation Guidelines for the Management of Severe Traumatic Brain Injury, 4th Edition"
]
};
