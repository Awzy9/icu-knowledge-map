import type { Question } from "@/content-types";

export const rvFailureQuestions: readonly Question[] = [
  {
    "id": "rv.q.hemodynamic-vicious-cycle",
    "topicId": "rv-failure",
    "stem": "A patient with massive PE and acute RV failure develops severe hypotension (BP 70/40 mmHg) and high CVP (22 mmHg). What is the primary physiological mechanism by which systemic hypotension acutely worsens right ventricular contractile failure?",
    "options": [
      {
        "id": "a",
        "text": "Decreased right coronary artery driving pressure (aortic pressure minus RV intracavitary pressure) causing RV myocardial ischemia",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Reflex tachycardia suppressing parasympathetic tone",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Decreased pulmonary capillary wedge pressure causing alveolar collapse",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Immediate development of severe tricuspid stenosis",
        "isCorrect": false
      }
    ],
    "explanation": "The right ventricle is normally perfused during both systole and diastole. However, when RV pressure is severely elevated (acute cor pulmonale), the RCA is only perfused when systemic aortic pressure exceeds peak RV pressure. Systemic hypotension collapses RCA driving pressure, triggering acute RV ischemia and a fatal downhill spiral.",
    "difficulty": "intermediate",
    "category": "Pathophysiology",
    "references": [
      "Harjola VP et al. Critical Care 2016; Irwin & Rippe."
    ]
  }
,
  {
    id: "rvf.q.death-spiral",
    topicId: "rv-failure",
    stem: "What is the pathophysiology of the 'Right Ventricular Death Spiral' in acute RV failure?",
    options: [
      { id: "a", text: "High RV contractility causes leftward septal shift that improves LV filling.", isCorrect: false },
      { id: "b", text: "Elevated RV afterload causes RV dilation -> tricuspid regurgitation and interventricular septal shift into the LV -> reduced LV diastolic filling and reduced cardiac output -> hypotension -> reduced right coronary artery perfusion pressure -> worsening RV ischemia and acute failure.", isCorrect: true },
      { id: "c", text: "Excessive systemic vascular resistance collapses the right atrium.", isCorrect: false },
      { id: "d", text: "Acute hyperventilation causes reactive pulmonary capillaries to burst.", isCorrect: false }
    ],
    explanation: "The RV depends on coronary perfusion gradient (Aortic Diastolic Pressure - RV Cavity Pressure). When the RV dilates against high afterload, wall stress rises, septal flattening compresses the LV, stroke volume falls, MAP drops, and right coronary perfusion is compromised, causing rapid ischemic RV arrest.",
    difficulty: "intermediate",
    category: "Physiology",
    references: [
      "Harjola VP, et al. Eur J Heart Fail 2016; AHA Scientific Statement on RV Failure."
    ]
  },
  {
    id: "rvf.q.inhaled-vasodilators",
    topicId: "rv-failure",
    stem: "Why are selective inhaled pulmonary vasodilators (Inhaled Epoprostenol / Inhaled Nitric Oxide) preferred over systemic intravenous vasodilators (Nitroprusside, Hydralazine) in acute RV failure with pulmonary hypertension?",
    options: [
      { id: "a", text: "Inhaled agents only reach ventilated alveoli, lowering pulmonary vascular resistance and improving V/Q matching WITHOUT causing systemic hypotension or coronary hypoperfusion.", isCorrect: true },
      { id: "b", text: "Inhaled vasodilators directly stimulate myocardial beta-1 adrenergic receptors.", isCorrect: false },
      { id: "c", text: "Systemic vasodilators cannot cross the alveolar-capillary membrane.", isCorrect: false },
      { id: "d", text: "Inhaled nitric oxide has a systemic half-life of 6 hours.", isCorrect: false }
    ],
    explanation: "Systemic IV vasodilators cause non-selective systemic arterial vasodilation, dropping MAP and collapsing right coronary artery perfusion. Inhaled vasodilators act locally on pulmonary vessels in well-ventilated lung units, reducing RV afterload and improving oxygenation without lowering systemic MAP.",
    difficulty: "intermediate",
    category: "Pharmacology",
    references: [
      "AHA Statement on Acute RV Failure; ESC Guidelines."
    ]
  }
];
