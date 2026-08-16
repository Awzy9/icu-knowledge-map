import type { Question } from "@/content-types";

export const acuteHeartFailureQuestions: readonly Question[] = [
  {
    "id": "ahf.q.dose-trial-regimen",
    "topicId": "acute-heart-failure",
    "stem": "A 70-year-old man taking 80 mg oral Furosemide daily is admitted with acute decompensated heart failure and pulmonary edema. Based on the DOSE trial, which IV furosemide regimen provides the greatest net fluid loss and dyspnea relief?",
    "options": [
      {
        "id": "a",
        "text": "Furosemide 100 mg IV twice daily (high-dose strategy: 2.5x oral dose IV)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Furosemide 20 mg IV once daily (low-dose strategy)",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Continuous low-dose infusion at 2 mg/hour without bolus",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Withholding diuretics for 24 hours while giving IV fluids",
        "isCorrect": false
      }
    ],
    "explanation": "The DOSE trial (NEJM 2011) demonstrated that a high-dose strategy (2.5 times the patient's home oral daily dose administered as IV furosemide) produced significantly more fluid loss, greater relief of dyspnea, and greater weight loss compared to a low-dose strategy, without causing lasting renal impairment.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Felker GM et al. DOSE Trial. NEJM 2011."
    ]
  }
,
  {
    id: "ahf.q.diuretic-strategy",
    topicId: "acute-heart-failure",
    stem: "In a patient admitted to the ICU with acute decompensated heart failure and pulmonary congestion who takes furosemide 80 mg PO daily at home, what was the primary finding of the DOSE trial regarding initial IV loop diuretic dosing?",
    options: [
      { id: "a", text: "Continuous infusion is vastly superior to intermittent boluses for 60-day survival.", isCorrect: false },
      { id: "b", text: "A high-dose strategy (2.5× home oral dose IV) produced faster symptom relief and net fluid loss without adverse 60-day clinical outcomes compared with a low-dose strategy.", isCorrect: true },
      { id: "c", text: "High-dose IV furosemide caused irreversible renal tubular damage and higher 30-day mortality.", isCorrect: false },
      { id: "d", text: "Oral diuretics must be continued alongside IV diuretics for synergistic effect.", isCorrect: false }
    ],
    explanation: "The DOSE trial (NEJM 2011) showed no significant difference in efficacy or safety between continuous infusion vs intermittent boluses. High-dose IV furosemide (2.5 times the previous oral daily dose divided q12h IV) resulted in greater net fluid loss and dyspnea relief with transient benign creatinine rises that did not worsen 60-day clinical outcomes.",
    difficulty: "intermediate",
    category: "Management",
    references: [
      "Felker GM, et al. DOSE Trial. NEJM 2011."
    ]
  },
  {
    id: "ahf.q.vasodilator-nitro",
    topicId: "acute-heart-failure",
    stem: "A patient presents with acute hypertensive pulmonary edema (SCAPE) with BP 210/115 mmHg, respiratory rate 38, and severe orthopnea. What is the most effective initial hemodynamic intervention?",
    options: [
      { id: "a", text: "Low-dose furosemide IV bolus and morphine sulfate.", isCorrect: false },
      { id: "b", text: "High-dose IV nitroglycerin boluses/infusion combined with immediate Non-Invasive Positive Pressure Ventilation (NIV / BiPAP).", isCorrect: true },
      { id: "c", text: "Immediate endotracheal intubation with high PEEP.", isCorrect: false },
      { id: "d", text: "IV Dobutamine infusion to increase myocardial inotropy.", isCorrect: false }
    ],
    explanation: "SCAPE is driven by acute sympathetic vasoconstriction and massive afterload mismatch rather than whole-body fluid overload. Immediate high-dose IV nitroglycerin (boluses of 0.5-2 mg or rapid infusion titration) rapidly reduces preload and afterload, while CPAP/BiPAP decreases work of breathing and LV transmural pressure, avoiding intubation.",
    difficulty: "intermediate",
    category: "Management",
    references: [
      "Levy P, et al. Ann Emerg Med 2016; ESC Heart Failure Guidelines."
    ]
  }
];
