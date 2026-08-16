import type { Question } from "@/content-types";

export const hypertensiveEmergenciesQuestions: readonly Question[] = [
  {
    "id": "hypertensive-emergencies.q.1",
    "topicId": "hypertensive-emergencies",
    "sectionId": "hypertensive-emergencies.organ-specific-targets",
    "stem": "A 52-year-old male with chronic hypertension presents with SBP 220/130 mmHg and altered mental status, visual changes, and bilateral papilledema (hypertensive encephalopathy). What is the appropriate initial blood pressure goal?",
    "options": [
      {
        "id": "a",
        "text": "Rapidly normalize blood pressure to 120/80 mmHg in 15 minutes",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Reduce Mean Arterial Pressure (MAP) by at most 20-25% in the first hour, then toward 160/100 mmHg over 2-6 hours",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Do not lower blood pressure for the first 24 hours",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Lower diastolic pressure to < 60 mmHg immediately",
        "isCorrect": false
      }
    ],
    "explanation": "In hypertensive encephalopathy, chronic autoregulation curve shifting means rapid normalization precipitates watershed cerebral infarction and acute renal ischemia. Lower MAP by <= 20-25% initially.",
    "difficulty": "basic",
    "references": [
      {
        "kind": "guideline",
        "id": "hypertension-guideline-aha-acc-2017",
        "relevance": "20-25% MAP reduction guideline."
      }
    ]
  },
  {
    "id": "hypertensive-emergencies.q.2",
    "topicId": "hypertensive-emergencies",
    "sectionId": "hypertensive-emergencies.organ-specific-targets",
    "stem": "A 68-year-old male with acute ischemic stroke of 2 hours duration is being evaluated for IV thrombolysis. His blood pressure is 205/115 mmHg. What is the target blood pressure before thrombolytic infusion?",
    "options": [
      {
        "id": "a",
        "text": "Lower BP to < 185/110 mmHg prior to thrombolysis, and maintain < 180/105 mmHg for 24h",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Allow permissive hypertension up to 240/140 mmHg",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Lower BP to 120/70 mmHg immediately",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Thrombolysis is strictly contraindicated at this blood pressure",
        "isCorrect": false
      }
    ],
    "explanation": "Thrombolysis requires lowering BP to < 185/110 mmHg using titratable IV agents (e.g. Nicardipine, Labetalol) to minimize the risk of symptomatic intracerebral hemorrhage transformation.",
    "difficulty": "basic",
    "references": [
      "AHA/ASA Stroke Guidelines"
    ]
  },
  {
    "id": "hypertensive-emergencies.q.3",
    "topicId": "hypertensive-emergencies",
    "sectionId": "hypertensive-emergencies.pharmacology",
    "stem": "A 70-year-old female presents with acute flash pulmonary edema and SBP 230/125 mmHg (SCAPE). Which parenteral therapy provides the most rapid afterload reduction and clinical improvement?",
    "options": [
      {
        "id": "a",
        "text": "High-dose IV Furosemide bolus (200 mg) alone",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "High-dose IV Nitroglycerin (boluses + high infusion) combined with Non-Invasive Ventilation (NIV)",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "IV Morphine sulfate 10 mg boluses",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Oral Clonidine 0.3 mg",
        "isCorrect": false
      }
    ],
    "explanation": "SCAPE is caused by acute sympathetic vasoconstriction and massive afterload increase; high-dose nitroglycerin rapidly dilates arterial and venous beds, breaking the pulmonary edema spiral within minutes.",
    "difficulty": "intermediate",
    "references": [
      "Irwin & Rippe 9th Edition"
    ]
  },
  {
    "id": "hypertensive-emergencies.q.4",
    "topicId": "hypertensive-emergencies",
    "sectionId": "hypertensive-emergencies.pharmacology",
    "stem": "Why is Clevidipine particularly suited for blood pressure control in neurocritical care hypertensive emergencies?",
    "options": [
      {
        "id": "a",
        "text": "It causes profound venous pooling and decreases stroke volume",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "It is an ultra-short-acting arterial vasodilator metabolized by blood esterases with a 1-minute half-life, allowing precise titration without accumulation",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "It crosses the blood-brain barrier to sedate the patient",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "It acts as a potent carbonic anhydrase inhibitor",
        "isCorrect": false
      }
    ],
    "explanation": "Clevidipine's rapid onset and 1-minute offset enable precise BP titration without overshoot, independent of renal or hepatic clearance (CLOVER trial).",
    "difficulty": "intermediate",
    "references": [
      "Peacock WF et al. CLOVER Trial."
    ]
  },
  {
    "id": "hypertensive-emergencies.q.5",
    "topicId": "hypertensive-emergencies",
    "sectionId": "hypertensive-emergencies.overview",
    "stem": "A 45-year-old asymptomatic male is found to have a blood pressure of 195/110 mmHg on routine check. He has no chest pain, shortness of breath, headache, or visual symptoms. Serum creatinine and ECG are normal. What is the most appropriate management?",
    "options": [
      {
        "id": "a",
        "text": "Immediate ICU admission for IV Nicardipine infusion",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Outpatient management with oral antihypertensive adjustment and follow-up in 24-48 hours",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Emergency sublingual Nifedipine bite-and-swallow",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Immediate IV Hydralazine 20 mg bolus",
        "isCorrect": false
      }
    ],
    "explanation": "This represents Hypertensive Urgency (no acute end-organ damage). Rapid IV lowering is contraindicated and harmful; oral outpatient titration over 24-48 hours is standard of care.",
    "difficulty": "basic",
    "references": [
      "ACC/AHA Hypertension Guidelines 2017"
    ]
  }
];
