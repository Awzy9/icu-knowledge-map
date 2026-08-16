import type { Flashcard } from "@/content-types";

export const pulmonaryHypertensionFlashcards: readonly Flashcard[] = [
  {
    "id": "pulmonary-hypertension.fc.1",
    "topicId": "pulmonary-hypertension",
    "sectionId": "pulmonary-hypertension.overview",
    "question": "What is the current hemodynamic definition of pulmonary hypertension per the 2022 ESC/ERS guidelines?",
    "answer": "Mean Pulmonary Artery Pressure (mPAP) > 20 mmHg at rest measured by right heart catheterization.",
    "explanation": "The threshold was updated from >= 25 mmHg to > 20 mmHg to reflect upper limit of normal human pulmonary pressure.",
    "difficulty": "basic",
    "references": [
      "2022 ESC/ERS Guidelines"
    ]
  },
  {
    "id": "pulmonary-hypertension.fc.2",
    "topicId": "pulmonary-hypertension",
    "sectionId": "pulmonary-hypertension.overview",
    "question": "What hemodynamic criteria define Pre-capillary Pulmonary Arterial Hypertension (PAH)?",
    "answer": "mPAP > 20 mmHg, Pulmonary Artery Wedge Pressure (PAWP) <= 15 mmHg, and Pulmonary Vascular Resistance (PVR) > 2 Wood Units.",
    "explanation": "Distinguishes intrinsic precapillary pulmonary vascular disease from postcapillary left heart disease.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "guideline",
        "id": "ph-guideline-esc-ers-2022",
        "relevance": "Hemodynamic definition of precapillary PH."
      }
    ]
  },
  {
    "id": "pulmonary-hypertension.fc.3",
    "topicId": "pulmonary-hypertension",
    "sectionId": "pulmonary-hypertension.classification",
    "question": "Why are targeted PAH vasodilators (e.g. Sildenafil, Bosentan) contraindicated in WHO Group 2 PH (Left Heart Disease)?",
    "answer": "Dilating the pulmonary vasculature increases blood flow into a failing left atrium/ventricle that cannot handle the venous return, precipitating acute flash pulmonary edema.",
    "explanation": "Group 2 PH is managed by treating the left heart failure (afterload reduction, diuretics, valvular repair).",
    "difficulty": "advanced",
    "references": [
      "ESC/ERS Guidelines 2022"
    ]
  },
  {
    "id": "pulmonary-hypertension.fc.4",
    "topicId": "pulmonary-hypertension",
    "sectionId": "pulmonary-hypertension.acute-crisis-management",
    "question": "What is the primary vasopressor of choice in acute decompensated PH with right ventricular failure?",
    "answer": "Norepinephrine infusion (titrated to maintain MAP > 65-75 mmHg and RV coronary perfusion gradient MAP - CVP > 50-60 mmHg).",
    "explanation": "Norepinephrine restores aortic root pressure to perfuse the right coronary artery without significantly raising PVR.",
    "difficulty": "basic",
    "references": [
      "Price LC et al. Intensive Care Med 2010"
    ]
  },
  {
    "id": "pulmonary-hypertension.fc.5",
    "topicId": "pulmonary-hypertension",
    "sectionId": "pulmonary-hypertension.acute-crisis-management",
    "question": "What are the advantages of Inhaled Nitric Oxide (iNO) or Inhaled Epoprostenol in acute PH crisis?",
    "answer": "Selective pulmonary vasodilation in ventilated lung units, reducing RV afterload and improving V/Q matching WITHOUT causing systemic hypotension.",
    "explanation": "Inhaled agents do not reach non-ventilated alveoli and are rapidly inactivated upon entering systemic blood.",
    "difficulty": "basic",
    "references": [
      "Irwin & Rippe 9th Edition"
    ]
  },
  {
    "id": "pulmonary-hypertension.fc.6",
    "topicId": "pulmonary-hypertension",
    "sectionId": "pulmonary-hypertension.acute-crisis-management",
    "question": "Why is abrupt cessation of chronic parenteral prostacyclin (IV Epoprostenol) a lethal emergency in the ICU?",
    "answer": "Epoprostenol has a half-life of 3-5 minutes. Interruption causes instantaneous rebound pulmonary vasoconstriction, acute RV failure, and fatal PEA arrest.",
    "explanation": "Dedicated central lines must never be flushed, paused, or piggybacked with other medications.",
    "difficulty": "advanced",
    "references": [
      "Oh's Intensive Care Manual 9th Edition"
    ]
  },
  {
    "id": "pulmonary-hypertension.fc.7",
    "topicId": "pulmonary-hypertension",
    "sectionId": "pulmonary-hypertension.overview",
    "question": "What did the landmark AMBITION trial establish in treatment-naive PAH?",
    "answer": "Initial upfront combination therapy (Ambrisentan + Tadalafil) reduced the risk of clinical failure by 50% compared to monotherapy.",
    "explanation": "Shifted standard practice from sequential monotherapy escalation to upfront dual pathway inhibition.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "trial",
        "id": "ph-ambition-trial",
        "relevance": "AMBITION upfront combination trial."
      }
    ]
  },
  {
    "id": "pulmonary-hypertension.fc.8",
    "topicId": "pulmonary-hypertension",
    "sectionId": "pulmonary-hypertension.acute-crisis-management",
    "question": "Why is endotracheal intubation considered a high-risk peri-arrest procedure in acute PH decompensation?",
    "answer": "Induction agents cause systemic vasodilation (collapsing RV perfusion), while positive-pressure ventilation and lung hyperinflation increase PVR and compress the RV.",
    "explanation": "Maintain spontaneous breathing when possible; if intubating, preload with vasopressors and use low driving pressures.",
    "difficulty": "intermediate",
    "references": [
      "ESC/ERS Guidelines 2022"
    ]
  }
];
