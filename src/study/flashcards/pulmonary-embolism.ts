import type { Flashcard } from "@/content-types";

export const pulmonaryEmbolismFlashcards: readonly Flashcard[] = [
  {
    "id": "pe.fc.high-risk-definition",
    "topicId": "pulmonary-embolism",
    "question": "What clinical criteria define 'High-Risk' (Massive) Pulmonary Embolism per ESC guidelines?",
    "answer": "PE presenting with sustained hemodynamic instability (SBP < 90 mmHg, systolic drop ≥ 40 mmHg for >15 min, or cardiac arrest/shock).",
    "explanation": "High-risk PE carries an in-hospital mortality >15–30% and is the primary indication for emergency systemic thrombolysis or surgical/catheter embolectomy.",
    "difficulty": "basic",
    "category": "Definition",
    "references": [
      "Konstantinides SV et al. 2019 ESC Guidelines on Pulmonary Embolism. Eur Heart J 2020."
    ]
  },
  {
    "id": "pe.fc.intermediate-high-risk-criteria",
    "topicId": "pulmonary-embolism",
    "question": "What defines 'Intermediate-High-Risk' (Submassive) Pulmonary Embolism?",
    "answer": "Hemodynamically stable (SBP ≥ 90), but with BOTH Right Ventricular dysfunction (on Echo/CT) AND elevated cardiac biomarkers (Troponin or BNP).",
    "explanation": "Intermediate-high-risk patients require close ICU monitoring; PEITHO trial showed thrombolysis reduces hemodynamic collapse but increases major bleeding in this group.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "PEITHO Investigators. Fibrinolysis for intermediate-risk pulmonary embolism. NEJM 2014."
    ]
  },
  {
    "id": "pe.fc.mcconnell-sign",
    "topicId": "pulmonary-embolism",
    "question": "What is McConnell's sign on echocardiography in acute pulmonary embolism?",
    "answer": "Right ventricular free-wall hypokinesia/akinesia with preserved or hyperdynamic contraction of the RV apex.",
    "explanation": "McConnell's sign has high specificity (~94%) for acute pulmonary embolism, helping distinguish acute RV strain from chronic pulmonary hypertension.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "McConnell MV et al. Regional right ventricular dysfunction in acute pulmonary embolism. Am J Cardiol 1996."
    ]
  },
  {
    "id": "pe.fc.thrombolytic-dosing-alteplase",
    "topicId": "pulmonary-embolism",
    "question": "What is the standard systemic thrombolytic regimen for massive high-risk pulmonary embolism?",
    "answer": "Alteplase (rtPA) 100 mg IV infused over 2 hours (or 50 mg bolus in cardiac arrest / extreme periarrest).",
    "explanation": "Thrombolysis accelerates clot dissolution, rapidly lowers pulmonary vascular resistance, relieves acute RV failure, and restores cardiac output.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "ESC Guidelines for Pulmonary Embolism 2019; CHEST Guidelines 2021."
    ]
  },
  {
    "id": "pe.fc.peitho-trial-summary",
    "topicId": "pulmonary-embolism",
    "question": "What did the PEITHO trial find regarding routine thrombolysis in intermediate-risk PE?",
    "answer": "Tenecteplase reduced hemodynamic decompensation (2.6% vs 5.6%), but significantly increased major bleeding (11.5% vs 2.4%) and hemorrhagic stroke (2.0% vs 0.2%).",
    "explanation": "Therefore, routine thrombolysis is NOT recommended for intermediate-risk PE; anticoagulation with close monitoring and rescue thrombolysis if shock develops is the standard.",
    "difficulty": "advanced",
    "category": "Evidence",
    "references": [
      "Meyer G et al. PEITHO Trial. NEJM 2014."
    ]
  }
];
