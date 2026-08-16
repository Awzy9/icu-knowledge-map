import type { Question } from "@/content-types";

export const pulmonaryEmbolismQuestions: readonly Question[] = [
  {
    "id": "pe.q.high-risk-management",
    "topicId": "pulmonary-embolism",
    "stem": "A 58-year-old woman post-knee replacement develops sudden syncope, severe dyspnea, and cyanosis. On arrival to the ICU, BP is 70/45 mmHg despite 1 L fluid bolus, HR 125 bpm, and SpO2 84%. Bedside echocardiogram shows massive RV dilation, McConnell's sign, and paradoxical septal flattening. CT pulmonary angiography confirms bilateral saddle pulmonary emboli. What is the immediate treatment of choice?",
    "options": [
      {
        "id": "a",
        "text": "Systemic intravenous thrombolysis (Alteplase 100 mg over 2 hours)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Therapeutic Low Molecular Weight Heparin alone",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Placement of an inferior vena cava filter followed by oral Apixaban",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Immediate endotracheal intubation and high PEEP ventilation",
        "isCorrect": false
      }
    ],
    "explanation": "This patient has High-Risk (Massive) Pulmonary Embolism with cardiogenic/obstructive shock. Systemic thrombolytic therapy (Alteplase 100 mg IV over 2h) is guideline-recommended as first-line therapy to rapidly reduce pulmonary vascular obstruction, restore RV function, and prevent cardiac arrest.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "ESC Guidelines 2019; CHEST 2021."
    ]
  },
  {
    "id": "pe.q.peitho-submassive-decision",
    "topicId": "pulmonary-embolism",
    "stem": "A 62-year-old man has a confirmed segmental PE. BP is 125/80 mmHg, HR 98 bpm. Echocardiogram shows moderate RV dilation, and Troponin I is elevated at 1.8 ng/mL. He is alert and hemodynamically stable. Based on the PEITHO trial, what is the best initial management strategy?",
    "options": [
      {
        "id": "a",
        "text": "Immediate full-dose systemic thrombolytic therapy",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Anticoagulation (e.g. LMWH or UFH) with close ICU monitoring, reserving thrombolysis for secondary hemodynamic decompensation",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Surgical pulmonary embolectomy within 4 hours",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Aspirin 325 mg daily alone",
        "isCorrect": false
      }
    ],
    "explanation": "This patient has Intermediate-High-Risk (submassive) PE. The PEITHO trial (NEJM 2014) showed that while thrombolysis prevented hemodynamic decompensation, it carried a 10-fold increase in hemorrhagic stroke (2.0% vs 0.2%). ESC and CHEST guidelines recommend therapeutic anticoagulation and close hemodynamic monitoring, reserving rescue reperfusion for patients who develop overt hypotension.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "PEITHO Investigators. NEJM 2014; ESC 2019."
    ]
  }
,
  {
    id: "pe.q.peitho-trial-findings",
    topicId: "pulmonary-embolism",
    stem: "In intermediate-high risk (submassive) pulmonary embolism (normotensive with RV dysfunction on echo/CT and elevated troponin), what were the findings of the PEITHO landmark trial regarding full-dose systemic thrombolysis (tenecteplase + heparin vs heparin alone)?",
    options: [
      { id: "a", text: "Tenecteplase significantly reduced 30-day all-cause mortality without increasing bleeding.", isCorrect: false },
      { id: "b", text: "Tenecteplase significantly reduced hemodynamic collapse (2.6% vs 5.6%), but caused a 10-fold increase in major extracranial bleeding and hemorrhagic stroke (2.0% vs 0.2%), with NO reduction in 30-day all-cause mortality.", isCorrect: true },
      { id: "c", text: "Heparin alone was associated with 80% mortality.", isCorrect: false },
      { id: "d", text: "Systemic thrombolysis is mandatory for all submassive pulmonary embolisms.", isCorrect: false }
    ],
    explanation: "The PEITHO trial (NEJM 2014, n=1006) showed that full-dose systemic thrombolysis prevented hemodynamic decompensation in submassive PE, but at the cost of a prohibitive increase in major bleeding and hemorrhagic stroke, without improving overall survival. Guidelines (ESC/AHA) therefore recommend anticoagulation and close monitoring for submassive PE, reserving thrombolysis for hemodynamic decompensation or catheter-directed therapy.",
    difficulty: "intermediate",
    category: "Evidence",
    references: [
      "Meyer G, et al. PEITHO Trial. NEJM 2014; Konstantinides SV, et al. ESC PE Guidelines 2019."
    ]
  }
];
