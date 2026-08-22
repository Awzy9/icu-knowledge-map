import type { ClinicalCase } from "@/content-types/clinical-case";

export const severeMetabolicAlkalosisCase: ClinicalCase = {
  "id": "case-severe-metabolic-alkalosis",
  "slug": "severe-metabolic-alkalosis",
  "title": "Severe Post-Massive Transfusion Metabolic Alkalosis",
  "subtitle": "Citrate metabolism, hypokalemic-hypochloremic contraction alkalosis, and chloride-responsiveness testing",
  "difficulty": "advanced",
  "system": "renal",
  "tags": [
    "acid-base-disorders",
    "transfusion",
    "metabolic-acidosis",
    "electrolytes"
  ],
  "objectives": [
    "Identify metabolic conversion of blood product citrate preservatives into sodium bicarbonate as a major cause of post-resuscitation alkalosis",
    "Calculate urine chloride to differentiate Chloride-Responsive (<20 mEq/L) vs Chloride-Resistant (>20 mEq/L) metabolic alkalosis",
    "Execute therapeutic chloride repletion with isotonic 0.9% Normal Saline + Potassium Chloride and judge when Acetazolamide is indicated"
  ],
  "initialPresentation": {
    "history": "A 48-year-old male trauma victim receives massive transfusion protocol (18 units PRBCs, 14 units FFP, 2 units apheresis platelets) and emergent laparotomy with splenectomy and packing. Postoperatively on Day 2 in the ICU, he is stable and ready for extubation. However, his spontaneous breathing trial fails due to severe hypoventilation.",
    "vitals": {
      "HR": "88/min",
      "BP": "128/72 mmHg",
      "RR": "10/min (shallow)",
      "SpO2": "95% on 40% FiO2"
    },
    "keyFindings": [
      "Severe metabolic alkalemia on ABG: pH 7.58, PaCO2 52 mmHg, PaO2 84 mmHg, HCO3 48 mEq/L",
      "Electrolytes: Na+ 140 mEq/L, K+ 2.8 mEq/L (severe hypokalemia), Cl- 80 mEq/L (severe hypochloremia)",
      "Urine Chloride is low at 8 mEq/L (Chloride-Responsive / Saline-Responsive Alkalosis)"
    ]
  },
  "steps": [
    {
      "id": "step-1",
      "prompt": "The patient has severe metabolic alkalosis (pH 7.58, HCO3 48) causing compensatory hypoventilation (PaCO2 52) that is preventing ventilator liberation. Urine chloride is 8 mEq/L.",
      "question": "What is the primary pathophysiology and the definitive corrective treatment?",
      "options": [
        {
          "id": "1-a",
          "text": "Citrate overload converted to bicarbonate + hypochloremia/hypokalemia: Administer IV 0.9% Normal Saline with aggressive Potassium Chloride replacement (40 mEq/L) + consider IV Acetazolamide (500 mg IV) if volume overloaded",
          "isCorrect": true,
          "explanation": "Each unit of PRBC/FFP contains ~3 grams of citrate, which the liver metabolizes into 3 moles of sodium bicarbonate. Combined with nasogastric suction and hypochloremia, the kidney cannot excrete bicarbonate without chloride. Giving 0.9% NaCl and KCl provides chloride to restore renal bicarbonate excretion.",
          "physiologicReasoning": "The cortical collecting duct pendrin exchanger requires luminal chloride to secrete bicarbonate into the urine. In hypochloremic states, bicarbonate excretion is paralyzed.",
          "outcome": {
            "classification": "appropriate",
            "immediateEffects": [
              "Distal tubular chloride delivery restored",
              "Renal bicarbonate excretion accelerates",
              "Serum HCO3 drops from 48 to 28 mEq/L; pH normalizes to 7.42"
            ],
            "clinicalResponse": "Following chloride repletion and K+ normalization to 4.2 mEq/L, respiratory drive normalizes, PaCO2 falls to 38 mmHg, and the patient is successfully extubated."
          }
        },
        {
          "id": "1-b",
          "text": "Infuse concentrated Hydrochloric Acid (0.1 N HCl) through a peripheral IV immediately",
          "isCorrect": false,
          "explanation": "IV HCl is an extreme rescue therapy reserved for life-threatening alkalemia (pH > 7.65) unresponsive to chloride, and must ONLY be given through a dedicated central venous line (never peripheral IV due to severe tissue necrosis).",
          "whyNot": "Peripheral HCl causes catastrophic vein sclerosis and is unnecessary when saline and KCl are effective.",
          "outcome": {
            "classification": "potentially-harmful",
            "immediateEffects": [
              "Severe peripheral thrombophlebitis and skin necrosis"
            ],
            "clinicalResponse": "Patient suffers severe extravasation injury."
          }
        }
      ],
      "physiologyDisplay": {
        "map": "neutral",
        "hr": "neutral"
      }
    }
  ],
  "relatedMedicationSlugs": [],
  "relatedTopicIds": [
    "acid-base-disorders",
    "transfusion",
    "metabolic-acidosis"
  ],
  "relatedPathwaySlugs": [
    "mechanical-ventilation-liberation"
  ],
  "relatedProblemSlugs": [
    "acute-hypercapnia"
  ],
  "references": [
  "Metabolic Alkalosis in the Intensive Care Unit: Pathophysiology, Diagnosis, and Treatment"
]
};
