import type { Question } from "@/content-types";

export const sepsisQuestions: readonly Question[] = [
  {
    "id": "sepsis.q.smart-trial-crystalloids",
    "topicId": "sepsis",
    "stem": "Based on the landmark SMART (NEJM 2018) and SALT-ED (NEJM 2018) randomized trials, which intravenous fluid is recommended as the primary resuscitation crystalloid for septic patients in the ICU to reduce renal failure and mortality?",
    "options": [
      {
        "id": "a",
        "text": "Balanced crystalloids (such as Lactated Ringer's or Plasma-Lyte)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "0.9% Normal Saline alone",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "4% Synthetic Hydroxyethyl Starch in normal saline",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Dextrose 5% in water with sodium chloride boluses",
        "isCorrect": false
      }
    ],
    "explanation": "The SMART trial (NEJM 2018, n=15,802) demonstrated that balanced crystalloids resulted in a lower rate of the composite outcome of death, new renal replacement therapy, or persistent renal dysfunction (MAKE30) compared with 0.9% saline (14.3% vs 15.4%, P=0.04), with greatest benefit seen in the sepsis subgroup.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Semler MW et al. SMART Trial. NEJM 2018; SSC Guidelines 2021."
    ]
  },
  {
    "id": "sepsis.q.sofa-delta-threshold",
    "topicId": "sepsis",
    "stem": "According to the Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3), what magnitude of acute increase in the total Sequential Organ Failure Assessment (SOFA) score represents the diagnostic threshold for Sepsis?",
    "options": [
      {
        "id": "a",
        "text": "An acute increase of ≥ 2 points from baseline",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "An acute increase of ≥ 4 points from baseline",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Any positive SIRS criteria with fever",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "A decrease in SOFA score of 1 point",
        "isCorrect": false
      }
    ],
    "explanation": "Sepsis-3 defines sepsis as life-threatening organ dysfunction caused by a dysregulated host response to infection. Clinically, this is operationalized as an acute change in total SOFA score of ≥ 2 points attributable to the infection.",
    "difficulty": "basic",
    "category": "Definition",
    "references": [
      "Singer M et al. Sepsis-3. JAMA 2016."
    ]
  }
,
  {
    id: "sepsis.q.source-control-window",
    topicId: "sepsis",
    stem: "According to Surviving Sepsis Campaign guidelines, what is the target timeframe for emergent anatomic source control (e.g., draining an intra-abdominal abscess, debriding necrotizing soft tissue, removing an infected vascular catheter)?",
    options: [
      { id: "a", text: "Within 6 to 12 hours of diagnosis.", isCorrect: true },
      { id: "b", text: "Defer source control for at least 48 hours until antibiotics reach peak tissue levels.", isCorrect: false },
      { id: "c", text: "Source control is only necessary if blood cultures remain positive after 5 days.", isCorrect: false },
      { id: "d", text: "Within 30 minutes of emergency department arrival.", isCorrect: false }
    ],
    explanation: "Surviving Sepsis Campaign guidelines recommend that emergent anatomic source control interventions be implemented as soon as medically and logistically practical, targeting within 6-12 hours of diagnosis. Delaying source control while relying on antimicrobials alone sharply increases septic shock mortality.",
    difficulty: "basic",
    category: "Management",
    references: [
      "Surviving Sepsis Campaign Guidelines 2021/2026; Evans L, et al. Crit Care Med 2021."
    ]
  }
];
