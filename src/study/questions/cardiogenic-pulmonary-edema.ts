import type { Question } from "@/content-types";

export const cardiogenicPulmonaryEdemaQuestions: readonly Question[] = [
  {
    "id": "cpe.q.scape-emergency-treatment",
    "topicId": "cardiogenic-pulmonary-edema",
    "stem": "A 62-year-old woman presents in extremis with flash pulmonary edema, coughing pink frothy sputum, BP 220/120 mmHg, HR 130 bpm, SpO2 78%. What is the most effective immediate medical treatment pair?",
    "options": [
      {
        "id": "a",
        "text": "High-dose IV Nitroglycerin infusion + Noninvasive CPAP (8–10 cmH2O)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Furosemide 160 mg IV push alone with high-flow oxygen mask",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Intravenous Metoprolol bolus to slow heart rate",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Intubation and rapid sedation with midazolam without vasodilators",
        "isCorrect": false
      }
    ],
    "explanation": "In SCAPE / acute hypertensive pulmonary edema, the primary driver is acute afterload mismatch and sympathetic vasoconstriction. High-dose IV nitroglycerin (venous + arteriolar dilation) and CPAP (afterload reduction + alveolar recruitment) rapidly abort the crisis within minutes, whereas loop diuretics have a delayed onset of 30–60 minutes.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Agrawal N et al. J Emerg Med 2016; Cotter G et al. Lancet 1998."
    ]
  }
,
  {
    id: "cpe.q.niv-physiologic-effects",
    topicId: "cardiogenic-pulmonary-edema",
    stem: "What are the primary hemodynamic and respiratory mechanisms through which Non-Invasive Ventilation (CPAP / BiPAP) rapidly improves cardiogenic pulmonary edema?",
    options: [
      { id: "a", text: "Increases LV afterload and stimulates catecholamine secretion.", isCorrect: false },
      { id: "b", text: "Increases intrathoracic pressure, decreasing RV venous return (preload) and decreasing LV transmural systolic pressure (afterload) while recruiting fluid-filled alveoli and reducing work of breathing.", isCorrect: true },
      { id: "c", text: "Directly causes renal artery vasodilation and spontaneous diuresis.", isCorrect: false },
      { id: "d", text: "Prevents the need for all intravenous vasodilators and diuretics.", isCorrect: false }
    ],
    explanation: "Positive intrathoracic pressure from CPAP/BiPAP decreases systemic venous return (reducing RV preload) and decreases LV transmural pressure gradient (reducing LV afterload). Simultaneously, PEEP recruits flooded alveoli, increases functional residual capacity, improves lung compliance, and decreases work of breathing (3CPO Trial, NEJM 2008).",
    difficulty: "intermediate",
    category: "Physiology",
    references: [
      "Gray A, et al. 3CPO Trial. NEJM 2008; ESC Acute Heart Failure Guidelines."
    ]
  },
  {
    id: "cpe.q.morphine-warning",
    topicId: "cardiogenic-pulmonary-edema",
    stem: "Why do modern international guidelines (ESC/AHA) caution against or advise against the routine use of IV morphine in acute cardiogenic pulmonary edema?",
    options: [
      { id: "a", text: "Morphine induces severe systemic hypertension and tachyarrhythmias.", isCorrect: false },
      { id: "b", text: "Morphine is associated with increased rates of mechanical ventilation, ICU admission, and hospital mortality secondary to respiratory depression and blunted sympathetic drive.", isCorrect: true },
      { id: "c", text: "Morphine causes sudden coronary artery vasospasm.", isCorrect: false },
      { id: "d", text: "Morphine directly inhibits the action of loop diuretics in the loop of Henle.", isCorrect: false }
    ],
    explanation: "Observational and registry data (e.g. ADHERE registry) demonstrate that routine IV morphine in acute pulmonary edema causes respiratory depression, increased need for endotracheal intubation, higher ICU admission rates, and increased mortality. Nitroglycerin and NIV should be the primary agents for symptom relief.",
    difficulty: "intermediate",
    category: "Safety",
    references: [
      "Peacock WF, et al. ADHERE Registry. Emerg Med J 2008; ESC Heart Failure Guidelines."
    ]
  }
];
