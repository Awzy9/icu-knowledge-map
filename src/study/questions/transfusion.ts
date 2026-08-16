import type { Question } from "@/content-types";

export const transfusionQuestions: readonly Question[] = [
  {
    "id": "transfusion.q.tricc-threshold-selection",
    "topicId": "transfusion",
    "stem": "A 62-year-old mechanically ventilated patient with septic shock is hemodynamically stable on low-dose norepinephrine. His morning laboratory report shows a hemoglobin of 7.4 g/dL (hematocrit 22%). There is no active bleeding or acute myocardial ischemia. Based on the TRICC and TRISS randomized trials, what is the best transfusion decision?",
    "options": [
      {
        "id": "a",
        "text": "Withhold red blood cell transfusion and maintain a restrictive transfusion strategy (transfuse if Hb < 7.0 g/dL)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Transfuse 2 units of packed red blood cells immediately to maintain Hb > 10.0 g/dL",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Administer high-dose Erythropoietin and iron sucrose",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Transfuse 1 unit of fresh frozen plasma with 1 unit of PRBCs",
        "isCorrect": false
      }
    ],
    "explanation": "The TRICC (NEJM 1999) and TRISS (NEJM 2014) trials demonstrated that a restrictive transfusion threshold (Hb < 7.0 g/dL) is safe and results in similar (or lower) 90-day mortality, while cutting blood product exposure and transfusion complications by more than 50% compared to a liberal strategy (Hb < 9.0–10.0 g/dL).",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Hébert PC et al. TRICC Trial. NEJM 1999; Holst LB et al. TRISS Trial. NEJM 2014."
    ]
  }
,
  {
    id: "transfusion.q.restrictive-threshold",
    topicId: "transfusion",
    stem: "What do landmark randomized trials (TRICC, TRISS, TRICS-III) conclude regarding restrictive (Hb < 7.0 g/dL, target 7–9 g/dL) versus liberal (Hb < 9–10 g/dL) red blood cell transfusion in critically ill ICU patients?",
    options: [
      { id: "a", text: "Liberal transfusion is superior for 30-day survival in general critical illness.", isCorrect: false },
      { id: "b", text: "A restrictive threshold (Hb < 7.0 g/dL) is non-inferior or superior, reduces overall blood product exposure by 40-50%, and carries no increase in mortality or organ failure.", isCorrect: true },
      { id: "c", text: "All septic patients require Hb > 10.0 g/dL to ensure adequate tissue oxygen delivery.", isCorrect: false },
      { id: "d", text: "Restrictive transfusion causes significant renal failure in cardiac surgery.", isCorrect: false }
    ],
    explanation: "TRICC (NEJM 1999), TRISS (septic shock, NEJM 2014), and TRICS-III (cardiac surgery, NEJM 2017) consistently demonstrated that a restrictive transfusion trigger of Hb < 7.0 g/dL (or < 7.5 g/dL in cardiac surgery) is safe, reduces transfusions by ~50%, and avoids transfusion-related adverse events (TRALI, TACO, infections) without increasing mortality.",
    difficulty: "basic",
    category: "Evidence",
    references: [
      "Hébert PC, et al. TRICC Trial. NEJM 1999; Holst LB, et al. TRISS Trial. NEJM 2014; Mazer CD, et al. TRICS-III. NEJM 2017."
    ]
  },
  {
    id: "transfusion.q.trali-vs-taco",
    topicId: "transfusion",
    stem: "How do clinical and laboratory parameters distinguish Transfusion-Related Acute Lung Injury (TRALI) from Transfusion-Associated Circulatory Overload (TACO)?",
    options: [
      { id: "a", text: "TRALI presents with hypertension, elevated BNP/NT-proBNP, high CVP, and responds dramatically to furosemide; TACO presents with fever, hypotension, and normal BNP.", isCorrect: false },
      { id: "b", text: "TRALI is a non-cardiogenic capillary leak injury (fever, hypotension, transient leukopenia, normal BNP/CVP, non-responsive to diuretics); TACO is hydrostatic volume overload (hypertension, elevated BNP, wide pulse pressure, elevated CVP, rapid improvement with diuretics).", isCorrect: true },
      { id: "c", text: "Both are identical and managed solely with aggressive fluid boluses.", isCorrect: false },
      { id: "d", text: "TRALI occurs exclusively with washed RBCs; TACO occurs only with cryoprecipitate.", isCorrect: false }
    ],
    explanation: "TRALI is immune-mediated (donor anti-HLA/anti-HNA antibodies causing neutrophil activation in pulmonary capillaries), presenting with acute hypoxemia, fever, hypotension, normal CVP/BNP, and minimal response to diuresis. TACO is hydrostatic fluid overload presenting with acute dyspnea, hypertension, elevated BNP, jugular distension, and rapid response to loop diuretics.",
    difficulty: "intermediate",
    category: "Diagnosis",
    references: [
      "Vlaar AP, et al. TRALI Consensus Definition. Lancet Haematol 2019; Semple JW, et al. Blood 2019."
    ]
  }
];
