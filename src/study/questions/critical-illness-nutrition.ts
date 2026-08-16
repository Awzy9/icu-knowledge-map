import type { Question } from "@/content-types";

export const criticalIllnessNutritionQuestions: readonly Question[] = [
  {
    "id": "critical-illness-nutrition.q.1",
    "topicId": "critical-illness-nutrition",
    "sectionId": "critical-illness-nutrition.timing-route-dosing",
    "stem": "A previously healthy 50-year-old male is admitted with severe polytrauma and intubated. When should enteral nutrition ideally be initiated?",
    "options": [
      {
        "id": "a",
        "text": "Within 24 to 48 hours of ICU admission once hemodynamics are resuscitated",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Withhold all feeding until day 7",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Start total parenteral nutrition immediately on admission",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Wait until the patient passes flatus or a bowel movement",
        "isCorrect": false
      }
    ],
    "explanation": "Early enteral nutrition (within 24-48 hours) maintains gut barrier function, stimulates secretory IgA, and reduces infectious complications in critical illness.",
    "difficulty": "basic",
    "references": [
      {
        "kind": "guideline",
        "id": "nutrition-guideline-espen-2019",
        "relevance": "ESPEN early EN recommendation."
      }
    ]
  },
  {
    "id": "critical-illness-nutrition.q.2",
    "topicId": "critical-illness-nutrition",
    "sectionId": "critical-illness-nutrition.timing-route-dosing",
    "stem": "What did the landmark EPaNIC trial show regarding early (day 3) vs late (day 8) initiation of supplemental Parenteral Nutrition in the ICU?",
    "options": [
      {
        "id": "a",
        "text": "Early PN reduced mortality and infection rates",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Late PN (withheld until day 8) resulted in fewer ICU infections, shorter ventilator duration, and faster ICU discharge",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "There was no difference between early and late PN in any outcome",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Early PN accelerated muscle recovery",
        "isCorrect": false
      }
    ],
    "explanation": "The EPaNIC trial demonstrated that early parenteral nutrition overfeeding suppresses cellular autophagy and increases hospital infections. Supplemental PN should be delayed past day 7 in well-nourished patients.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "trial",
        "id": "nutrition-epanic-trial",
        "relevance": "EPaNIC trial findings."
      }
    ]
  },
  {
    "id": "critical-illness-nutrition.q.3",
    "topicId": "critical-illness-nutrition",
    "sectionId": "critical-illness-nutrition.timing-route-dosing",
    "stem": "A patient with septic shock is receiving Norepinephrine at 0.6 mcg/kg/min and Epinephrine at 0.2 mcg/kg/min with rising serum lactate. What is the appropriate enteral nutrition strategy?",
    "options": [
      {
        "id": "a",
        "text": "Bolus enteral feeds at 100 mL/h to stimulate intestinal motility",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Withhold enteral nutrition until hemodynamic stabilization and vasopressor weaning (NUTRIREA-2 trial)",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Initiate high-fat enteral feeds via PEG tube",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Start oral solids immediately",
        "isCorrect": false
      }
    ],
    "explanation": "The NUTRIREA-2 trial demonstrated a 3-fold higher rate of non-occlusive mesenteric ischemia (NOMI) and bowel necrosis with enteral feeding during severe shock with escalating vasopressors.",
    "difficulty": "intermediate",
    "references": [
      "Reignier J et al. NUTRIREA-2 Trial. Lancet Respir Med 2018"
    ]
  },
  {
    "id": "critical-illness-nutrition.q.4",
    "topicId": "critical-illness-nutrition",
    "sectionId": "critical-illness-nutrition.refeeding-syndrome",
    "stem": "A severely malnourished alcoholic patient is admitted and started on full enteral feeds. On day 2, he develops respiratory distress, muscle weakness, and cardiac arrhythmias. Serum phosphate is 0.8 mg/dL (normal 2.5-4.5). What is the underlying mechanism?",
    "options": [
      {
        "id": "a",
        "text": "Refeeding syndrome: glucose reintroduction stimulates insulin secretion, driving phosphate, potassium, and magnesium into cells for glycolysis and ATP synthesis",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Acute renal failure with excessive phosphate excretion",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Hyperparathyroidism",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Bowel perforation",
        "isCorrect": false
      }
    ],
    "explanation": "Refeeding syndrome is triggered by insulin-driven intracellular electrolyte shifts, causing severe acute hypophosphatemia, diaphragmatic weakness, and heart failure.",
    "difficulty": "basic",
    "references": [
      "Oh's Intensive Care Manual 9th Edition"
    ]
  },
  {
    "id": "critical-illness-nutrition.q.5",
    "topicId": "critical-illness-nutrition",
    "sectionId": "critical-illness-nutrition.refeeding-syndrome",
    "stem": "What do modern ESPEN and SCCM/ASPEN guidelines recommend regarding routine monitoring of Gastric Residual Volumes (GRVs)?",
    "options": [
      {
        "id": "a",
        "text": "Check GRV every 2 hours and hold feeds if GRV > 50 mL",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Routine GRV monitoring is NOT recommended because it leads to inappropriate feeding cessation without reducing pneumonia",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Hold feeds only if GRV exceeds 1000 mL",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Always discard all aspirated gastric contents",
        "isCorrect": false
      }
    ],
    "explanation": "Eliminating routine GRV monitoring improves nutritional delivery and does not increase aspiration or ventilator-associated pneumonia rates.",
    "difficulty": "intermediate",
    "references": [
      "ESPEN Guidelines 2019"
    ]
  }
];
