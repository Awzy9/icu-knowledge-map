import type { Flashcard } from "@/content-types";

export const cardiogenicPulmonaryEdemaFlashcards: readonly Flashcard[] = [
  {
    "id": "cpe.fc.scape-definition-pathophysiology",
    "topicId": "cardiogenic-pulmonary-edema",
    "question": "What is Sympathetic Crashing Acute Pulmonary Edema (SCAPE)?",
    "answer": "A severe hyperacute form of cardiogenic pulmonary edema driven by extreme sympathetic surge, massive systemic vasoconstriction, and acute afterload mismatch.",
    "explanation": "Patients present within minutes to hours with severe hypertension (SBP > 180–200 mmHg), flash pulmonary edema, and respiratory distress, rather than total-body fluid overload.",
    "difficulty": "intermediate",
    "category": "Pathophysiology",
    "references": [
      "Agrawal N et al. Sympathetic Crashing Acute Pulmonary Edema (SCAPE). J Emerg Med 2016."
    ]
  },
  {
    "id": "cpe.fc.scape-management-high-dose-nitrates",
    "topicId": "cardiogenic-pulmonary-edema",
    "question": "What is the primary emergency management strategy for SCAPE?",
    "answer": "High-dose intravenous Nitroglycerin boluses (e.g. 0.5–1.0 mg IV boluses + rapid infusion up to 200–400 mcg/min) combined with immediate noninvasive CPAP/BiPAP.",
    "explanation": "High-dose nitrates provide rapid venous and arterial vasodilation, dropping LV afterload and preload, rapidly resolving alveolar flooding within minutes.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Cotter G et al. High-dose isosorbide dinitrate in severe pulmonary edema. Lancet 1998."
    ]
  },
  {
    "id": "cpe.fc.cpap-afterload-reduction",
    "topicId": "cardiogenic-pulmonary-edema",
    "question": "How does positive airway pressure (CPAP 8–10 cmH2O) physiologically improve left ventricular function in pulmonary edema?",
    "answer": "Positive intrathoracic pressure reduces LV transmural pressure (reducing LV afterload) and reduces systemic venous return (reducing LV preload).",
    "explanation": "Unlike in a normal heart, in a failing dilated left ventricle with elevated filling pressures, positive intrathoracic pressure augments cardiac stroke volume.",
    "difficulty": "advanced",
    "category": "Pathophysiology",
    "references": [
      "West's Respiratory Physiology; Irwin & Rippe."
    ]
  },
  {
    "id": "cpe.fc.scape-nitrates",
    "topicId": "cardiogenic-pulmonary-edema",
    "question": "Why is high-dose IV Nitroglycerin preferred over high-dose IV loop diuretics as first-line therapy in SCAPE?",
    "answer": "SCAPE is driven by acute sympathetically-mediated afterload spike and fluid redistribution, NOT total body volume overload. High-dose nitrates immediately reduce afterload and preload, rapidly clearing alveolar edema.",
    "explanation": "Titrate IV nitroglycerin boluses (0.4-2 mg IV every 3-5 min) followed by high-dose infusion (100-300 mcg/min) paired with Non-Invasive Ventilation (CPAP/BiPAP).",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in cardiogenic-pulmonary-edema"
    ]
  },
  {
    "id": "cpe.fc.niv-benefit",
    "topicId": "cardiogenic-pulmonary-edema",
    "question": "How does CPAP/BiPAP improve hemodynamics in acute cardiogenic pulmonary edema?",
    "answer": "Positive intrathoracic pressure reduces LV transmural pressure (reducing LV afterload), decreases systemic venous return (reducing LV preload), and recruits fluid-filled alveoli to resolve hypoxemia.",
    "explanation": "Significantly reduces intubation rates and hospital mortality without worsening myocardial ischemia (3CPO trial).",
    "difficulty": "basic",
    "category": "Physiology",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in cardiogenic-pulmonary-edema"
    ]
  },
  {
    "id": "cpe.fc.morphine-warning",
    "topicId": "cardiogenic-pulmonary-edema",
    "question": "Why is routine IV Morphine no longer recommended in acute cardiogenic pulmonary edema?",
    "answer": "Associated with increased intubation rates, ICU admission, and hospital mortality due to respiratory depression, histamine release, and blunted baroreceptor reflexes (ADHERE registry).",
    "explanation": "AHA/ESC guidelines advise avoiding routine opioids; treat dyspnea with NIV and aggressive afterload reduction instead.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in cardiogenic-pulmonary-edema"
    ]
  }
];
