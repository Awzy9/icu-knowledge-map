import type { Flashcard } from "@/content-types";

export const pulmonaryEmbolismFlashcards: readonly Flashcard[] = [
  {
    "id": "pe.fc.high-risk-definition",
    "topicId": "pulmonary-embolism",
    "question": "What clinical criteria define High-Risk Pulmonary Embolism (Category E1) under the 2026 guideline framework?",
    "answer": "PE presenting with persistent hypotension (SBP < 90 mmHg, MAP < 65 mmHg, or SBP drop ≥ 40 mmHg lasting ≥ 15 min) or requiring vasopressor/inotropic support with cardiogenic shock.",
    "explanation": "Category E1 cardiopulmonary failure warrants prompt advanced reperfusion (Class 2a for systemic thrombolysis, catheter-directed lysis, or mechanical thrombectomy; surgical embolectomy may also be considered), tailored to bleeding risk and local resources.",
    "difficulty": "basic",
    "category": "Definition",
    "references": [
      "2026 AHA/ACC Multisociety Acute PE Guideline; ESC Guidelines for Pulmonary Embolism 2019."
    ]
  },
  {
    "id": "pe.fc.intermediate-high-risk-criteria",
    "topicId": "pulmonary-embolism",
    "question": "What defines 'Intermediate-High-Risk' (Category C) Pulmonary Embolism?",
    "answer": "Hemodynamically stable (SBP ≥ 90 mmHg), but with BOTH Right Ventricular dysfunction (on Echo/CT) AND elevated cardiac biomarkers (Troponin or BNP).",
    "explanation": "Intermediate-high-risk (Category C) patients require close ICU monitoring; PEITHO trial showed routine fibrinolysis reduces hemodynamic decompensation but significantly increases major bleeding and hemorrhagic stroke without reducing 30-day mortality.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "2026 AHA/ACC Multisociety Acute PE Guideline; PEITHO Investigators. NEJM 2014."
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
    "question": "When systemic thrombolysis is selected for high-risk Category E1 pulmonary embolism, what is the standardized alteplase regimen?",
    "answer": "Alteplase (rtPA) 100 mg IV infused over 2 hours.",
    "explanation": "Systemic thrombolysis is one of several Class 2a advanced reperfusion options. It provides rapid bedside clot lysis when bleeding risk is low and intervention suites are not immediately accessible.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "2026 AHA/ACC Multisociety Acute PE Guideline; ESC Guidelines for Pulmonary Embolism."
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
