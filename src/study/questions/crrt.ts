import type { Question } from "@/content-types";

export const crrtQuestions: readonly Question[] = [
  {
    "id": "crrt.q.citrate-toxicity-diagnosis",
    "topicId": "crrt",
    "stem": "A patient with acute liver failure on CRRT with regional citrate anticoagulation develops worsening anion gap metabolic acidosis. Serum total calcium is 11.2 mg/dL, while systemic ionized calcium is low at 0.85 mmol/L (Total/Ionized Ca ratio = 3.3). What is the underlying diagnosis and required management?",
    "options": [
      {
        "id": "a",
        "text": "Heparin-induced thrombocytopenia; stop all heparin",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Citrate toxicity / accumulation; stop or reduce citrate infusion and increase systemic calcium replacement",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Severe secondary hyperparathyroidism; give calcitonin",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Over-dialysis with hypophosphatemia",
        "isCorrect": false
      }
    ],
    "explanation": "A Total Calcium (mg/dL) to Ionized Calcium (mmol/L) ratio > 2.5 in a patient receiving citrate indicates citrate toxicity (failure of the liver to clear citrate, trapping calcium in inactive complexes). Citrate must be stopped or significantly reduced, and calcium replacement titrated to normalize ionized calcium.",
    "difficulty": "advanced",
    "category": "Complications",
    "references": [
      "Schneider AG et al. Critical Care 2017; KDIGO 2012."
    ]
  },
  {
    "id": "crrt.q.renal-trial-dosing",
    "topicId": "crrt",
    "stem": "Based on the landmark RENAL (NEJM 2009) and VA/NIH ATN (NEJM 2008) randomized trials, what is the standard recommended delivered effluent dose for CRRT in ICU acute kidney injury?",
    "options": [
      {
        "id": "a",
        "text": "20 to 25 mL/kg/hour",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "35 to 45 mL/kg/hour (high-volume hemofiltration)",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "10 to 15 mL/kg/hour",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "60 mL/kg/hour to clear middle-molecular weight toxins",
        "isCorrect": false
      }
    ],
    "explanation": "The multicenter RENAL and ATN trials definitively demonstrated that high-intensity CRRT (35–45 mL/kg/h) provided no improvement in survival, renal recovery, or length of stay compared with standard intensity (20–25 mL/kg/h).",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "RENAL Replacement Therapy Study Investigators. NEJM 2009; VA/NIH ATN Study. NEJM 2008."
    ]
  }
,
  {
    id: "crrt.q.effluent-dose-trials",
    topicId: "crrt",
    stem: "What do the landmark RENAL (2009) and ATN (2008) randomized trials conclude regarding high-intensity (35–40 mL/kg/h) versus standard-intensity (20–25 mL/kg/h) CRRT effluent dosing in critically ill patients with acute kidney injury?",
    options: [
      { id: "a", text: "High-intensity effluent dosing significantly reduced 90-day mortality and hastened renal recovery.", isCorrect: false },
      { id: "b", text: "Standard-intensity effluent dosing (20–25 mL/kg/h) achieves identical survival and renal recovery outcomes, while high-intensity dosing increases hypophosphatemia, hypokalemia, and antibiotic clearance.", isCorrect: true },
      { id: "c", text: "All patients on CRRT require at least 50 mL/kg/h effluent flow.", isCorrect: false },
      { id: "d", text: "Effluent dose has no impact on solute clearance.", isCorrect: false }
    ],
    explanation: "The RENAL (n=1508) and VA/NIH ATN (n=1124) trials proved that increasing CRRT effluent dose beyond 20-25 mL/kg/h does not improve survival or renal recovery, but significantly increases electrolyte depletion and therapeutic drug clearance. Guidelines (KDIGO) recommend prescribing 25-30 mL/kg/h to deliver a true 20-25 mL/kg/h net dose.",
    difficulty: "basic",
    category: "Evidence",
    references: [
      "RENAL Replacement Therapy Study Investigators. NEJM 2009; VA/NIH ATN Study Group. NEJM 2008; KDIGO AKI Guidelines."
    ]
  }
];
