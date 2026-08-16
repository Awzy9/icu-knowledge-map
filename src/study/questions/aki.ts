import type { Question } from "@/content-types";

export const akiQuestions: readonly Question[] = [
  {
    "id": "aki.q.feurea-diuretics",
    "topicId": "aki",
    "stem": "A 72-year-old man with congestive heart failure receiving IV Furosemide develops a serum creatinine rise from 1.0 to 2.4 mg/dL with oliguria. His spot urine sodium is 48 mEq/L (FeNa 2.4%), but his Fractional Excretion of Urea (FEUrea) is 24%. What is the most accurate clinical interpretation?",
    "options": [
      {
        "id": "a",
        "text": "Acute Tubular Necrosis (ATN) confirmed by elevated FeNa",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Pre-renal azotemia / cardiorenal underfilling (FeNa is falsely elevated by recent loop diuretic use; FEUrea < 35% confirms pre-renal state)",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Acute Interstitial Nephritis requiring high-dose steroids",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Post-renal obstructive uropathy",
        "isCorrect": false
      }
    ],
    "explanation": "Loop diuretics inhibit the Na-K-2Cl cotransporter in the thick ascending loop of Henle, causing high urinary sodium and rendering FeNa falsely elevated (>1–2%). Fractional Excretion of Urea is not affected by distal tubular diuretics; a FEUrea < 35% has high sensitivity and specificity for pre-renal azotemia.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Carvounis CP et al. Kidney Int 2002."
    ]
  },
  {
    "id": "aki.q.starrt-aki-timing",
    "topicId": "aki",
    "stem": "A critically ill patient with KDIGO Stage 2 AKI secondary to septic shock has a rising creatinine (3.2 mg/dL) and oliguria. Serum potassium is 4.8 mEq/L, pH 7.32, and there is no pulmonary edema. Based on the STARRT-AKI (NEJM 2020) and AKIKI trials, what is the best management strategy regarding RRT timing?",
    "options": [
      {
        "id": "a",
        "text": "Immediate preemptive RRT initiation before Stage 3 develops",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Watchful waiting with supportive medical management, initiating RRT only if absolute urgent indications (AEIOU) develop",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Daily hemodialysis for 3 days followed by continuous filtration",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "High-volume hemofiltration to clear inflammatory cytokines",
        "isCorrect": false
      }
    ],
    "explanation": "The STARRT-AKI trial (NEJM 2020, n=3,011) showed that an accelerated RRT strategy did not reduce 90-day mortality compared with standard strategy (watchful waiting) and resulted in higher rates of persistent dialysis dependence and catheter adverse events. Standard practice is to wait for conventional urgent indications.",
    "difficulty": "advanced",
    "category": "Evidence",
    "references": [
      "STARRT-AKI Investigators. NEJM 2020."
    ]
  }
,
  {
    id: "aki.q.rrt-timing-trials",
    topicId: "aki",
    stem: "What do landmark randomized trials on RRT timing (AKIKI, IDEAL-ICU, STARRT-AKI) conclude regarding early vs delayed/conservative strategy in severe AKI (KDIGO stage 3) without absolute urgent indications?",
    options: [
      { id: "a", text: "Immediate early RRT initiation improves 90-day survival and renal recovery.", isCorrect: false },
      { id: "b", text: "An accelerated early strategy does NOT improve survival, while a delayed/conservative strategy allows ~40–50% of patients to recover spontaneously without ever needing RRT and avoids dialysis catheter complications.", isCorrect: true },
      { id: "c", text: "RRT must be started strictly when BUN reaches 60 mg/dL.", isCorrect: false },
      { id: "d", text: "Delayed RRT causes permanent dialysis dependence in all patients.", isCorrect: false }
    ],
    explanation: "The AKIKI, IDEAL-ICU, and STARRT-AKI trials consistently showed that early preemptive RRT in severe AKI does not improve survival. A delayed strategy (reserving RRT for conventional emergency triggers: refractory hyperkalemia, severe metabolic acidemia, volume overload refractory to diuretics, or uremic complications) avoids invasive RRT entirely in nearly half of patients.",
    difficulty: "intermediate",
    category: "Evidence",
    references: [
      "Gaudry S, et al. AKIKI. NEJM 2016; STARRT-AKI Investigators. NEJM 2020."
    ]
  }
];
