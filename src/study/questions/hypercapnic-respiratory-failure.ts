import type { Question } from "@/content-types";

export const hypercapnicRespiratoryFailureQuestions: readonly Question[] = [
  {
    "id": "hypercapnic.q.dead-space-calculation",
    "topicId": "hypercapnic-respiratory-failure",
    "stem": "A mechanically ventilated patient with severe ARDS has a minute ventilation of 14 L/min, yet her PaCO2 is 62 mmHg (pH 7.22). What is the primary underlying physiological mechanism explaining this hypercapnia despite high minute ventilation?",
    "options": [
      {
        "id": "a",
        "text": "Severe hypoventilation due to central respiratory depression",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Elevated physiological dead space fraction (high Vd/Vt) from pulmonary microvascular occlusion and alveolar overdistension",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Excessive carbohydrate feeding alone generating isolated VCO2 excess",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Right-to-left anatomical intracardiac shunting",
        "isCorrect": false
      }
    ],
    "explanation": "High dead space fraction (Vd/Vt > 0.6) is characteristic of ARDS. Alveoli that are ventilated but underperfused (due to capillary microthrombosis and compression from high PEEP) waste ventilation, leading to hypercapnia despite very high minute ventilation.",
    "difficulty": "intermediate",
    "category": "Pathophysiology",
    "references": [
      "Nuckton TJ et al. NEJM 2002; West's Respiratory Physiology."
    ]
  },
  {
    "id": "hypercapnic.q.myasthenia-monitoring",
    "topicId": "hypercapnic-respiratory-failure",
    "stem": "A 42-year-old woman with a myasthenic crisis is admitted to the ICU. Which combination of bedside parameters indicates imminent respiratory arrest and need for elective intubation?",
    "options": [
      {
        "id": "a",
        "text": "FVC 12 mL/kg, NIF -18 cmH2O, and paradoxical abdominal breathing",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "FVC 35 mL/kg, NIF -45 cmH2O, and mild ptosis",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "PaO2 85 mmHg on room air with normal chest radiograph",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "PaCO2 38 mmHg with normal baseline bicarbonate",
        "isCorrect": false
      }
    ],
    "explanation": "FVC < 15–20 mL/kg, NIF worse than -20 to -30 cmH2O, and paradoxical abdominal motion (diaphragmatic exhaustion) signify impending respiratory muscle fatigue. Waiting for arterial blood gas deterioration or hypercapnia in neuromuscular disease is dangerous, as hypercapnia is a late, pre-terminal sign.",
    "difficulty": "advanced",
    "category": "Monitoring",
    "references": [
      "Neurocritical Care Society Guidelines for Myasthenic Crisis."
    ]
  }
,
  {
    id: "hypercap.q.niv-failure-triggers",
    topicId: "hypercapnic-respiratory-failure",
    stem: "In an acute COPD exacerbation with respiratory acidosis (pH 7.28, PaCO2 65 mmHg) initiated on BiPAP, which bedside findings at 1–2 hours indicate NIV failure requiring prompt endotracheal intubation?",
    options: [
      { id: "a", text: "Worsening acidemia (pH dropping < 7.25), worsening encephalopathy/somnolence, hemodynamic instability, or inability to clear copious secretions.", isCorrect: true },
      { id: "b", text: "Resolution of tachypnea and reduction in PaCO2 by 5 mmHg.", isCorrect: false },
      { id: "c", text: "Patient complaining of dry mouth from the mask.", isCorrect: false },
      { id: "d", text: "Serum bicarbonate rising by 1 mEq/L.", isCorrect: false }
    ],
    explanation: "While NIV reduces intubation by ~65% in COPD exacerbations (YOP trial), delayed intubation in NIV failure significantly increases mortality. Reassess at 1-2 hours: worsening pH (<7.25), lack of PaCO2 improvement, encephalopathy, hemodynamic instability, or copious unmanageable secretions are clear indications for immediate invasive mechanical ventilation (GOLD Guidelines / ERS/ATS).",
    difficulty: "intermediate",
    category: "Management",
    references: [
      "Brochard L, et al. NEJM 1995; GOLD 2024 Report; ERS/ATS NIV Guidelines."
    ]
  }
];
