import type { Question } from "@/content-types";

export const ecmoFundamentalsQuestions: readonly Question[] = [
  {
    "id": "ecmo-fundamentals.q.1",
    "topicId": "ecmo-fundamentals",
    "sectionId": "ecmo-fundamentals.overview",
    "stem": "A 32-year-old female with severe ARDS from viral pneumonia has PaO2/FiO2 of 62 mmHg on PEEP 16 cmH2O after 16 hours of prone positioning. Echocardiogram shows normal LV and RV function. What is the most appropriate ECMO configuration?",
    "options": [
      {
        "id": "a",
        "text": "Veno-Arterial (VA) ECMO",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Veno-Venous (VV) ECMO",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Cardiopulmonary bypass with cardiac arrest",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Intra-aortic balloon pump alone",
        "isCorrect": false
      }
    ],
    "explanation": "In isolated severe hypoxemic respiratory failure with preserved cardiac function, Veno-Venous (VV) ECMO provides complete gas exchange while resting the native lungs.",
    "difficulty": "basic",
    "references": [
      {
        "kind": "guideline",
        "id": "ecmo-guideline-elso-2021",
        "relevance": "ELSO VV ECMO indications."
      }
    ]
  },
  {
    "id": "ecmo-fundamentals.q.2",
    "topicId": "ecmo-fundamentals",
    "sectionId": "ecmo-fundamentals.physiology-circuit-dynamics",
    "stem": "On a VV ECMO circuit, how are arterial oxygenation and PaCO2 clearance adjusted?",
    "options": [
      {
        "id": "a",
        "text": "Blood flow controls PaCO2; Sweep gas controls PaO2",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Blood flow (L/min) controls oxygen delivery (PaO2); Sweep gas flow (L/min) controls carbon dioxide clearance (PaCO2)",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Both are controlled solely by the mechanical ventilator",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Sweep gas has no effect on gas exchange",
        "isCorrect": false
      }
    ],
    "explanation": "Oxygenation depends on total extracorporeal blood flow (L/min) and circuit FiO2; CO2 clearance depends on sweep gas flow rate (L/min) washing across the membrane.",
    "difficulty": "basic",
    "references": [
      "ELSO Guidelines 2021"
    ]
  },
  {
    "id": "ecmo-fundamentals.q.3",
    "topicId": "ecmo-fundamentals",
    "sectionId": "ecmo-fundamentals.va-ecmo-challenges-complications",
    "stem": "A patient on femoral VA-ECMO develops progressive pulmonary edema and echocardiogram shows a dilated LV with a closed aortic valve. What is the mechanism and management?",
    "options": [
      {
        "id": "a",
        "text": "Decreased afterload; give phenylephrine",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Increased LV afterload from retrograde arterial ECMO flow; treat with inotropes and active LV venting (Impella / ECPELLA)",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Massive air embolism; clamp the circuit",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Over-oxygenation; reduce sweep gas",
        "isCorrect": false
      }
    ],
    "explanation": "Retrograde arterial flow increases LV afterload. In a stunned LV, the aortic valve cannot open, causing LV stasis and pulmonary edema. LV unloading (inotropes, Impella, septostomy) is required.",
    "difficulty": "intermediate",
    "references": [
      "Irwin & Rippe 9th Edition"
    ]
  },
  {
    "id": "ecmo-fundamentals.q.4",
    "topicId": "ecmo-fundamentals",
    "sectionId": "ecmo-fundamentals.va-ecmo-challenges-complications",
    "stem": "A patient on peripheral femoral VA-ECMO has a Right Radial arterial blood gas showing PaO2 55 mmHg, while the ECMO circuit blood gas shows PaO2 450 mmHg. What phenomenon is occurring?",
    "options": [
      {
        "id": "a",
        "text": "Oxygenator membrane failure",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Differential Hypoxemia (Harlequin / North-South Syndrome)",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Systemic air embolism",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Methemoglobinemia",
        "isCorrect": false
      }
    ],
    "explanation": "Differential hypoxemia occurs when native cardiac output recovers but lungs remain poorly oxygenated; deoxygenated native blood supplies the upper body while ECMO blood perfuses the lower body.",
    "difficulty": "advanced",
    "references": [
      "Oh's Intensive Care Manual 9th Edition"
    ]
  },
  {
    "id": "ecmo-fundamentals.q.5",
    "topicId": "ecmo-fundamentals",
    "sectionId": "ecmo-fundamentals.overview",
    "stem": "What did the ECLS-SHOCK trial conclude regarding routine early VA-ECMO in infarct-related cardiogenic shock?",
    "options": [
      {
        "id": "a",
        "text": "Routine early VA-ECMO reduced 30-day mortality by 25%",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Routine early VA-ECMO did not reduce 30-day mortality and significantly increased major bleeding and vascular complications",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "VA-ECMO eliminated all need for coronary revascularization",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "VA-ECMO was 100% complication-free",
        "isCorrect": false
      }
    ],
    "explanation": "The ECLS-SHOCK trial (NEJM 2023, n=420) showed 30-day mortality was 47.8% vs 49.0% with higher bleeding and vascular complications, establishing VA-ECMO should be reserved as rescue for refractory shock.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "trial",
        "id": "ecmo-ecls-shock-trial",
        "relevance": "ECLS-SHOCK trial results."
      }
    ]
  }
];
