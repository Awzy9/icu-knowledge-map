import type { Flashcard } from "@/content-types";

export const acidBaseDisordersFlashcards: readonly Flashcard[] = [
  {
    "id": "acidbase.fc.stewart-physicochemical-model",
    "topicId": "acid-base-disorders",
    "question": "What are the three independent variables that determine plasma pH in Stewart's physicochemical approach?",
    "answer": "1. Strong Ion Difference (SID); 2. Total non-volatile weak acids (ATOT, primarily albumin and phosphate); 3. PaCO2.",
    "explanation": "Stewart demonstrated that bicarbonate and hydrogen ions are dependent variables determined entirely by the balance of strong ions (SID = [Na + K + Ca + Mg] - [Cl + Lactate]), ATOT, and dissolved CO2.",
    "difficulty": "advanced",
    "category": "Pathophysiology",
    "references": [
      "Stewart PA. Modern quantitative acid-base chemistry. Can J Physiol Pharmacol 1983."
    ]
  },
  {
    "id": "acidbase.fc.normal-saline-acidosis-stewart",
    "topicId": "acid-base-disorders",
    "question": "Why does large-volume 0.9% Normal Saline infusion cause hyperchloremic metabolic acidosis?",
    "answer": "0.9% Saline has a Strong Ion Difference (SID) of 0 (Na 154, Cl 154 mEq/L), diluting plasma SID (~40 mEq/L) and forcing water dissociation into H+ ions.",
    "explanation": "Excessive chloride loading narrows the plasma Strong Ion Difference, driving normal anion gap hyperchloremic acidosis, renal vasoconstriction, and reduced GFR.",
    "difficulty": "intermediate",
    "category": "Pathophysiology",
    "references": [
      "Story DA et al. Bench-to-bedside review: Stewart approach. Critical Care 2004."
    ]
  },
  {
    "id": "acidbase.fc.goldmark",
    "topicId": "acid-base-disorders",
    "question": "What does the GOLDMARK mnemonic represent in high anion gap metabolic acidosis (HAGMA)?",
    "answer": "Glycols (ethylene/propylene), Oxoproline (chronic acetaminophen), L-lactate, D-lactate, Methanol, Aspirin (salicylates), Renal failure (uremia), Ketoacidosis (DKA, AKA, starvation).",
    "explanation": "GOLDMARK modernizes the older MUDPILES mnemonic, highlighting toxic glycols and acetaminophen-induced oxoproline (pyroglutamic acid) acidosis.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in acid-base-disorders"
    ]
  },
  {
    "id": "acidbase.fc.delta-delta",
    "topicId": "acid-base-disorders",
    "question": "How is the Delta-Delta ratio calculated and interpreted in mixed acid-base disorders?",
    "answer": "Delta-Delta = (Measured Anion Gap - 12) / (24 - Measured HCO3-). Ratio < 0.8 indicates mixed HAGMA + NAGMA; 0.8-2.0 indicates pure HAGMA; > 2.0 indicates mixed HAGMA + concurrent Metabolic Alkalosis.",
    "explanation": "The delta-delta ratio compares the excess anion gap to the deficit in bicarbonate, revealing hidden coexisting acid-base disturbances.",
    "difficulty": "advanced",
    "category": "Interpretation",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in acid-base-disorders"
    ]
  },
  {
    "id": "acidbase.fc.bicar-icu-evidence",
    "topicId": "acid-base-disorders",
    "question": "What did the BICAR-ICU trial prove regarding IV sodium bicarbonate in severe metabolic acidemia?",
    "answer": "In the predefined stratum of patients with acute kidney injury (AKIN 2-3) and severe acidemia (pH <= 7.20), 4.2% sodium bicarbonate reduced 28-day mortality (46% vs 63%) and dialysis requirement.",
    "explanation": "Jaber et al. (Lancet 2018) showed no overall ICU mortality difference, but a significant survival benefit and reduced need for renal replacement therapy in severe metabolic acidemia with AKI.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in acid-base-disorders"
    ]
  },
  {
    "id": "acidbase.fc.winter-formula",
    "topicId": "acid-base-disorders",
    "question": "What is Winter's formula and what does it diagnose?",
    "answer": "Expected PaCO2 = 1.5 × [HCO3-] + 8 ± 2. If actual PaCO2 is higher than expected, respiratory acidosis coexists; if lower, respiratory alkalosis coexists.",
    "explanation": "Evaluates the adequacy of respiratory compensation for metabolic acidosis. Failure to hyperventilate indicates respiratory muscle fatigue or CNS depression.",
    "difficulty": "basic",
    "category": "Interpretation",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in acid-base-disorders"
    ]
  }
];
