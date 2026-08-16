import type { Question } from "@/content-types";

export const septicShockQuestions: readonly Question[] = [
  {
    "id": "septicshock.q.sepsis3-diagnostic-threshold",
    "topicId": "septic-shock",
    "stem": "A 58-year-old woman with urosepsis has received 30 mL/kg balanced crystalloids. Her MAP is 58 mmHg, requiring Norepinephrine infusion at 0.12 mcg/kg/min to maintain MAP at 65 mmHg. Her repeat arterial lactate is 3.1 mmol/L. According to the Sepsis-3 consensus definitions, how is her condition classified?",
    "options": [
      {
        "id": "a",
        "text": "Severe Sepsis without shock",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Septic Shock",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Refractory Sepsis with microvascular shunting",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Systemic Inflammatory Response Syndrome (SIRS) only",
        "isCorrect": false
      }
    ],
    "explanation": "Sepsis-3 defines Septic Shock as sepsis with persistent hypotension requiring vasopressors to maintain MAP ≥ 65 mmHg AND serum lactate > 2.0 mmol/L despite adequate fluid resuscitation.",
    "difficulty": "basic",
    "category": "Definition",
    "references": [
      "Singer M et al. Sepsis-3. JAMA 2016."
    ]
  },
  {
    "id": "septicshock.q.approcchss-steroid-selection",
    "topicId": "septic-shock",
    "stem": "A patient in refractory septic shock requires Norepinephrine at 0.35 mcg/kg/min and Vasopressin at 0.03 U/min. Based on the Surviving Sepsis Campaign 2021 guidelines and the APROCCHSS trial, which corticosteroid regimen is indicated?",
    "options": [
      {
        "id": "a",
        "text": "Intravenous Hydrocortisone 200 mg/day (e.g. 50 mg IV q6h or continuous infusion)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "High-dose Methylprednisolone 1 g IV daily for 3 days",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Dexamethasone 20 mg IV daily",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Steroids are strictly contraindicated in septic shock",
        "isCorrect": false
      }
    ],
    "explanation": "Surviving Sepsis Campaign 2021 guidelines recommend initiating IV Hydrocortisone (200 mg/day) in patients with septic shock requiring ongoing vasopressor support (typically Norepinephrine ≥ 0.25 mcg/kg/min for >4 hours). The APROCCHSS trial demonstrated improved 90-day survival with this strategy.",
    "difficulty": "intermediate",
    "category": "Guidelines",
    "references": [
      "Annane D et al. APROCCHSS Trial. NEJM 2018; SSC Guidelines 2021."
    ]
  }
,
  {
    id: "septic-shock.q.smart-trial-crystalloids",
    topicId: "septic-shock",
    stem: "What was the definitive finding of the SMART landmark trial (NEJM 2018) comparing balanced crystalloids (Lactated Ringer's or Plasma-Lyte) versus 0.9% Normal Saline in critically ill ICU patients?",
    options: [
      { id: "a", text: "0.9% Saline significantly improved renal function and reduced dialysis.", isCorrect: false },
      { id: "b", text: "Balanced crystalloids resulted in a significant reduction in the composite outcome of Major Adverse Kidney Events within 30 days (MAKE30: death, new renal replacement therapy, or persistent renal dysfunction; 14.3% vs 15.4%, P=0.04), with the largest benefit observed in patients with sepsis (30-day mortality 25.2% vs 28.0%).", isCorrect: true },
      { id: "c", text: "There was zero clinical difference between any crystalloid solution.", isCorrect: false },
      { id: "d", text: "Balanced crystalloids caused life-threatening hyperkalemia in all patients.", isCorrect: false }
    ],
    explanation: "The SMART trial (n=15,802) demonstrated that balanced crystalloids significantly reduced MAKE30 and mortality in septic shock compared with 0.9% saline. 0.9% saline infuses supraphysiologic chloride (154 mEq/L), producing hyperchloremic metabolic acidosis, renal cortical vasoconstriction, and reduced GFR.",
    difficulty: "intermediate",
    category: "Evidence",
    references: [
      "Semler MW, et al. SMART Trial. NEJM 2018; Self WH, et al. SALT-ED Trial. NEJM 2018."
    ]
  }
];
