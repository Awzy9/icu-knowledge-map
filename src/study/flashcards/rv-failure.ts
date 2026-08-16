import type { Flashcard } from "@/content-types";

export const rvFailureFlashcards: readonly Flashcard[] = [
  {
    "id": "rv.fc.death-spiral-mechanism",
    "topicId": "rv-failure",
    "question": "What is the 'Right Ventricular Death Spiral' in the ICU?",
    "answer": "RV dilation → interventricular septal flattening (reducing LV filling) → decreased systemic cardiac output → hypotension → reduced right coronary artery perfusion → worsening RV ischemia and failure.",
    "explanation": "Because the dilated, failing RV generates high wall stress throughout systole and diastole, it relies critically on systemic aortic root pressure to perfuse the right coronary artery.",
    "difficulty": "intermediate",
    "category": "Pathophysiology",
    "references": [
      "Harjola VP et al. Clinical review: right ventricular failure in the ICU. Critical Care 2016."
    ]
  },
  {
    "id": "rv.fc.inhaled-pulmonary-vasodilators",
    "topicId": "rv-failure",
    "question": "What are the first-line inhaled pulmonary vasodilators used to reduce RV afterload in acute cor pulmonale?",
    "answer": "Inhaled Nitric Oxide (iNO 10–40 ppm) or Inhaled Epoprostenol (Prostacyclin 10–50 ng/kg/min).",
    "explanation": "Inhaled agents selectively dilate pulmonary vessels in ventilated alveoli, lowering pulmonary vascular resistance and RV afterload without causing systemic hypotension.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Price LC et al. Inhaled nitric oxide and pulmonary vasodilators in critical illness. Intensive Care Med 2021."
    ]
  },
  {
    "id": "rv.fc.vasopressor-rv-perfusion",
    "topicId": "rv-failure",
    "question": "Why is Norepinephrine the vasopressor of choice in acute RV failure with systemic hypotension?",
    "answer": "Norepinephrine increases aortic root pressure (restoring Right Coronary Artery perfusion gradient) and provides modest beta-1 inotropic support to the RV.",
    "explanation": "Restoring systemic MAP above RV systolic pressure breaks the RV ischemia cycle without significantly increasing pulmonary vascular resistance.",
    "difficulty": "advanced",
    "category": "Management",
    "references": [
      "Harjola VP et al. Critical Care 2016."
    ]
  },
  {
    "id": "rvf.fc.coronary-perfusion-gradient",
    "topicId": "rv-failure",
    "question": "Why is the Right Ventricular coronary perfusion gradient (MAP - CVP) critical in acute RV failure?",
    "answer": "Unlike the LV which is perfused only in diastole, the normal RV is perfused during both systole and diastole. In acute RV failure, high RV cavity pressure and elevated CVP compromise RV coronary perfusion during systole unless systemic MAP is raised above CVP.",
    "explanation": "Maintain MAP - CVP > 50 mmHg using Norepinephrine to preserve right coronary artery perfusion and halt the RV death spiral.",
    "difficulty": "advanced",
    "category": "Physiology",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in rv-failure"
    ]
  },
  {
    "id": "rvf.fc.fluid-overload-trap",
    "topicId": "rv-failure",
    "question": "Why can aggressive IV fluid boluses precipitate cardiovascular collapse in acute decompensated RV failure?",
    "answer": "The failing RV is already on the flat descending limb of the Starling curve; fluid expands RV volume, shifts the interventricular septum into the LV cavity (ventricular interdependence), reducing LV filling and dropping cardiac output.",
    "explanation": "Diuresis or ultrafiltration (decongesting the RV) paradoxically increases LV preload and improves cardiac output in severe RV failure.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in rv-failure"
    ]
  },
  {
    "id": "rvf.fc.inhaled-pulmonary-vasodilators",
    "topicId": "rv-failure",
    "question": "Why are INHALED pulmonary vasodilators (inhaled epoprostenol, iNO) superior to IV vasodilators in acute RV failure?",
    "answer": "Inhaled agents selectively dilate pulmonary vessels ONLY in ventilated lung regions (improving V/Q matching and lowering RV afterload) WITHOUT causing systemic hypotension or worsening intrapulmonary shunt.",
    "explanation": "IV vasodilators (sildenafil, nitroprusside) cause non-selective systemic vasodilation and worsen shock.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in rv-failure"
    ]
  }
];
