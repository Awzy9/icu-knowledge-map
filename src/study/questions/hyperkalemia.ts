import type { Question } from "@/content-types";

export const hyperkalemiaQuestions: readonly Question[] = [
  {
    "id": "hyperk.q.membrane-stabilization-first",
    "topicId": "hyperkalemia",
    "stem": "A 60-year-old dialysis patient presents with severe weakness. Serum potassium is 7.4 mEq/L. Telemetry shows wide QRS complexes (160 ms) and tall peaked T waves. What is the most immediate first-line medication to administer?",
    "options": [
      {
        "id": "a",
        "text": "Intravenous Calcium Chloride 10% (1 g IV) or Calcium Gluconate (3 g IV)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Regular Insulin 10 units IV with D50W",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Sodium Bicarbonate 50 mEq IV push",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Oral Sodium Zirconium Cyclosilicate 10 g",
        "isCorrect": false
      }
    ],
    "explanation": "Cardiac membrane stabilization with IV calcium (Chloride 1 g or Gluconate 3 g) is the immediate first step in any patient with hyperkalemic ECG changes to prevent fatal ventricular fibrillation or sine-wave asystole. Shifting agents (insulin/D50) and elimination therapies are initiated immediately afterward.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Weisberg LS. Crit Care Med 2008; AHA ACLS Guidelines."
    ]
  },
  {
    "id": "hyperk.q.calcium-elemental-content",
    "topicId": "hyperkalemia",
    "stem": "Why does 1 ampule (10 mL) of 10% Calcium Chloride provide more rapid and potent membrane stabilization than 1 ampule of 10% Calcium Gluconate in an unstable periarrest patient?",
    "options": [
      {
        "id": "a",
        "text": "Calcium chloride contains 3 times the elemental calcium content of calcium gluconate and does not require hepatic metabolism to release calcium ions.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Calcium chloride directly activates renal potassium excretion.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Calcium gluconate is only active when administered subcutaneously.",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Calcium chloride shifts potassium into red blood cells directly.",
        "isCorrect": false
      }
    ],
    "explanation": "10 mL of 10% Calcium Chloride contains 272 mg elemental calcium (13.6 mEq), compared to only 93 mg elemental calcium (4.6 mEq) in 10 mL of 10% Calcium Gluconate. In cardiac arrest or profound shock, Calcium Chloride is preferred for rapid delivery of bioavailable ionized calcium.",
    "difficulty": "intermediate",
    "category": "Pharmacology",
    "references": [
      "Goldfrank's Toxicologic Emergencies; Irwin & Rippe."
    ]
  }
,
  {
    id: "hyperkal.q.calcium-membrane-action",
    topicId: "hyperkalemia",
    stem: "Why is IV Calcium (Calcium Gluconate 10% 10-30 mL or Calcium Chloride 10% 10 mL) the absolute FIRST intervention in severe hyperkalemia with ECG changes (peaked T waves, PR prolongation, widened QRS)?",
    options: [
      { id: "a", text: "Calcium immediately lowers total-body serum potassium concentration by binding K+.", isCorrect: false },
      { id: "b", text: "Calcium stabilizes the cardiac myocyte resting membrane potential by shifting threshold potential more positive, restoring normal excitability without changing serum potassium concentration.", isCorrect: true },
      { id: "c", text: "Calcium stimulates renal potassium excretion in the distal collecting duct.", isCorrect: false },
      { id: "d", text: "Calcium converts potassium into an unmeasured cation.", isCorrect: false }
    ],
    explanation: "Elevated extracellular K+ partially depolarizes cardiac resting membrane potential (-90 mV toward -70 mV), inactivating fast sodium channels and causing conduction slowing and asystole/VF. IV calcium restores the difference between resting membrane potential and threshold potential by shifting threshold potential upward, preventing fatal arrhythmias within 1-3 minutes without altering serum K+ levels.",
    difficulty: "basic",
    category: "Physiology",
    references: [
      "Weisberg LS. Crit Care Med 2008; ERC / AHA Resuscitation Guidelines."
    ]
  }
];
