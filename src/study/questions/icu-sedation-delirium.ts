import type { Question } from "@/content-types";

export const icuSedationDeliriumQuestions: readonly Question[] = [
  {
    "id": "icu-sedation-delirium.q.1",
    "topicId": "icu-sedation-delirium",
    "sectionId": "icu-sedation-delirium.sedation-depth-agents",
    "stem": "According to the SCCM PADIS guidelines, which sedative strategy is associated with shorter duration of mechanical ventilation and reduced ICU delirium?",
    "options": [
      {
        "id": "a",
        "text": "Continuous Midazolam infusion targeted to deep sedation (RASS -4)",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Non-benzodiazepine sedatives (Propofol or Dexmedetomidine) targeted to light sedation (RASS -1 to 0)",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Continuous Lorazepam infusion with scheduled boluses",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Routine neuromuscular blockade in all ventilated patients",
        "isCorrect": false
      }
    ],
    "explanation": "PADIS guidelines strongly recommend light sedation with non-benzodiazepine infusions over benzodiazepine regimens to decrease ventilation time and delirium.",
    "difficulty": "basic",
    "references": [
      {
        "kind": "guideline",
        "id": "sedation-guideline-padis-sccm-2018",
        "relevance": "SCCM PADIS recommendations."
      }
    ]
  },
  {
    "id": "icu-sedation-delirium.q.2",
    "topicId": "icu-sedation-delirium",
    "sectionId": "icu-sedation-delirium.overview",
    "stem": "What did the Awakening and Breathing Controlled (ABC) trial prove regarding daily sedation interruption paired with spontaneous breathing trials?",
    "options": [
      {
        "id": "a",
        "text": "It increased self-extubation and had no mortality effect",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Paired daily SAT + SBT resulted in 3 more ventilator-free days and a 14% absolute reduction in 1-year mortality",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Daily awakening caused permanent PTSD",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "SBT should only be performed once weekly",
        "isCorrect": false
      }
    ],
    "explanation": "The ABC landmark trial (Lancet 2008) demonstrated that protocolized paired SAT + SBT significantly reduced mechanical ventilation duration and 1-year mortality (NNT = 7.4).",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "trial",
        "id": "sedation-abc-girard-trial",
        "relevance": "ABC trial evidence."
      }
    ]
  },
  {
    "id": "icu-sedation-delirium.q.3",
    "topicId": "icu-sedation-delirium",
    "sectionId": "icu-sedation-delirium.sedation-depth-agents",
    "stem": "A patient on high-dose Propofol (85 mcg/kg/min for 72 hours) develops severe metabolic acidosis with high anion gap, rhabdomyolysis (CK 45,000 U/L), hyperkalemia, and progressive cardiogenic shock. What is the diagnosis?",
    "options": [
      {
        "id": "a",
        "text": "Malignant hyperthermia",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Propofol Infusion Syndrome (PRIS)",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Neuroleptic malignant syndrome",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Adrenal crisis",
        "isCorrect": false
      }
    ],
    "explanation": "Propofol Infusion Syndrome (PRIS) is a lethal complication of high-dose, prolonged propofol infusions characterized by mitochondrial uncoupling, metabolic acidosis, rhabdomyolysis, and myocardial collapse.",
    "difficulty": "intermediate",
    "references": [
      "Irwin & Rippe 9th Edition"
    ]
  },
  {
    "id": "icu-sedation-delirium.q.4",
    "topicId": "icu-sedation-delirium",
    "sectionId": "icu-sedation-delirium.delirium-abcdef-bundle",
    "stem": "A mechanically ventilated patient tests positive on CAM-ICU for delirium. What is the evidence-based management strategy?",
    "options": [
      {
        "id": "a",
        "text": "Initiate scheduled IV Haloperidol every 6 hours",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Implement nonpharmacologic bundle interventions (correct hypoxia/infection, reorientation, sleep hygiene, early mobility) and minimize deliriogenic drugs",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Increase benzodiazepine sedation to induce deep coma",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Physical restraints applied to all four extremities continuously",
        "isCorrect": false
      }
    ],
    "explanation": "Antipsychotics do not reduce delirium duration or mortality (MIND-USA trial). Multicomponent nonpharmacologic ABCDEF bundle interventions are the primary standard of care.",
    "difficulty": "basic",
    "references": [
      "PADIS Guidelines 2018"
    ]
  },
  {
    "id": "icu-sedation-delirium.q.5",
    "topicId": "icu-sedation-delirium",
    "sectionId": "icu-sedation-delirium.overview",
    "stem": "What did the SPICE III trial show regarding early Dexmedetomidine as the primary sedative in mechanically ventilated ICU patients?",
    "options": [
      {
        "id": "a",
        "text": "Dexmedetomidine increased 90-day mortality",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Dexmedetomidine had identical 90-day mortality compared to usual care, while increasing target light sedation and coma-free days",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Dexmedetomidine was ineffective at maintaining sedation",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Dexmedetomidine caused irreversible renal failure",
        "isCorrect": false
      }
    ],
    "explanation": "The SPICE III trial (n=3904) demonstrated that early dexmedetomidine is safe, provides equivalent survival to standard sedatives, and increases light sedation and coma-free days.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "trial",
        "id": "sedation-mids-spice3-trial",
        "relevance": "SPICE III trial results."
      }
    ]
  }
];
