import type { Question } from "@/content-types";

export const cardiogenicShockQuestions: readonly Question[] = [
  {
    "id": "cshock.q.revascularization-evidence",
    "topicId": "cardiogenic-shock",
    "stem": "A 60-year-old man presents with an anterior STEMI complicated by cardiogenic shock (BP 76/48 mmHg, cold clammy extremities, lactate 4.5 mmol/L). Coronary angiography shows complete occlusion of the proximal LAD. Based on the SHOCK trial, what intervention provides the definitive mortality benefit?",
    "options": [
      {
        "id": "a",
        "text": "Immediate emergent coronary revascularization (PCI or CABG)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "High-dose Milrinone infusion without mechanical intervention",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Routine insertion of an intra-aortic balloon pump and medical therapy alone",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "High-dose therapeutic fibrinolysis with tenecteplase",
        "isCorrect": false
      }
    ],
    "explanation": "The landmark SHOCK trial (NEJM 1999) demonstrated that emergency revascularization (PCI or CABG) significantly improved 6-month and long-term survival in patients with cardiogenic shock complicating acute myocardial infarction.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Hochman JS et al. SHOCK Trial. NEJM 1999."
    ]
  },
  {
    "id": "cshock.q.doremi-inotropes",
    "topicId": "cardiogenic-shock",
    "stem": "In the DOREMI randomized trial (NEJM 2021), comparing Dobutamine vs Milrinone for patients in cardiogenic shock, what was the primary conclusion regarding in-hospital mortality and composite cardiac arrest/arrhythmias?",
    "options": [
      {
        "id": "a",
        "text": "Milrinone was superior due to lower myocardial oxygen consumption.",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Dobutamine was superior due to less hypotension and faster titration.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "There was no significant difference in the primary composite outcome of death, arrest, mechanical support, or renal replacement between the two drugs.",
        "isCorrect": true
      },
      {
        "id": "d",
        "text": "Both inotropes increased mortality compared to vasopressin monotherapy.",
        "isCorrect": false
      }
    ],
    "explanation": "The CAPITAL DOREMI trial (NEJM 2021) showed that in patients with cardiogenic shock, there was no significant difference between milrinone and dobutamine with respect to the primary composite outcome (36% vs 43%, P = 0.47) or individual safety outcomes.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Mathew R et al. DOREMI Trial. NEJM 2021."
    ]
  }
,
  {
    id: "cs.q.iabp-shock2-findings",
    topicId: "cardiogenic-shock",
    stem: "What was the primary conclusion of the IABP-SHOCK II landmark trial regarding routine Intra-Aortic Balloon Pump (IABP) counterpulsation in acute myocardial infarction with cardiogenic shock undergoing early revascularization?",
    options: [
      { id: "a", text: "Routine IABP significantly reduced 30-day and 1-year all-cause mortality.", isCorrect: false },
      { id: "b", text: "Routine IABP did NOT reduce 30-day mortality (39.7% vs 41.3%, P=0.69) or 6-year mortality compared with medical therapy alone, downgrading routine IABP use in guidelines.", isCorrect: true },
      { id: "c", text: "IABP was superior to Impella CP in all hemodynamics.", isCorrect: false },
      { id: "d", text: "IABP caused a massive increase in limb amputation.", isCorrect: false }
    ],
    explanation: "The IABP-SHOCK II trial (NEJM 2012, 6-year follow-up Circulation 2019) demonstrated that routine insertion of an IABP in AMI-CS undergoing early PCI did not reduce mortality. Consequently, ESC/AHA guidelines downgraded routine IABP in AMI-CS (Class III / Not Recommended), reserving mechanical circulatory support for selected refractory shock or mechanical complications.",
    difficulty: "basic",
    category: "Evidence",
    references: [
      "Thiele H, et al. IABP-SHOCK II. NEJM 2012; Circulation 2019."
    ]
  }
];
