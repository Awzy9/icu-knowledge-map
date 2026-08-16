import type { Flashcard } from "@/content-types";

export const metabolicAcidosisFlashcards: readonly Flashcard[] = [
  {
    "id": "acidosis.fc.anion-gap-formula-albumin",
    "topicId": "metabolic-acidosis",
    "question": "What is the formula for the Serum Anion Gap, and how is it corrected for hypoalbuminemia?",
    "answer": "AG = Na - (Cl + HCO3). Corrected AG = Observed AG + 2.5 * (4.0 - Albumin in g/dL).",
    "explanation": "Albumin is the major unmeasured serum anion. Every 1.0 g/dL drop in serum albumin lowers the baseline normal anion gap by ~2.5 mEq/L, masking high anion gap acidosis in malnourished/critically ill patients.",
    "difficulty": "basic",
    "category": "Diagnosis",
    "references": [
      "Figge J et al. Anion gap and hypoalbuminemia. Crit Care Med 1998."
    ]
  },
  {
    "id": "acidosis.fc.goldmark-mnemonic",
    "topicId": "metabolic-acidosis",
    "question": "What causes of High Anion Gap Metabolic Acidosis are represented by the modern 'GOLDMARK' mnemonic?",
    "answer": "G: Glycols (ethylene/propylene); O: Oxoproline (chronic acetaminophen); L: L-Lactate; D: D-Lactate; M: Methanol; A: Aspirin/Salicylates; R: Renal failure (uremia); K: Ketoacidosis (DKA, starvation, alcoholic).",
    "explanation": "Replaces the older MUDPILES mnemonic by incorporating 5-oxoproline (pyroglutamic acid) and D-lactic acidosis.",
    "difficulty": "intermediate",
    "category": "Differential",
    "references": [
      "Mehta AN et al. GOLD MARK: an anion gap mnemonic for the 21st century. Lancet 2008."
    ]
  },
  {
    "id": "acidosis.fc.winters-formula",
    "topicId": "metabolic-acidosis",
    "question": "What is Winter's Formula for assessing respiratory compensation in metabolic acidosis?",
    "answer": "Expected PaCO2 = (1.5 * [HCO3-]) + 8 ± 2.",
    "explanation": "If observed PaCO2 is higher than expected, a concurrent respiratory acidosis (ventilatory failure) is present; if lower, a concurrent primary respiratory alkalosis exists.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Albert MS et al. Quantitative displacement of acid-base equilibrium in metabolic acidosis. Ann Intern Med 1967."
    ]
  },
  {
    "id": "acidosis.fc.bicar-icu-trial",
    "topicId": "metabolic-acidosis",
    "question": "What did the landmark BICAR-ICU trial conclude regarding IV Sodium Bicarbonate in severe metabolic acidemia?",
    "answer": "Bicarbonate infusion (targeting pH ≥ 7.30) significantly reduced 28-day mortality (46% vs 63%) and need for RRT in patients with severe acidemia (pH ≤ 7.20) and concomitant AKI (AKIN score 2–3).",
    "explanation": "Jaber et al. (Lancet 2018) established that sodium bicarbonate provides concrete survival benefit in severe metabolic acidemia when acute kidney injury is present.",
    "difficulty": "advanced",
    "category": "Evidence",
    "references": [
      "Jaber S et al. Sodium bicarbonate therapy for patients with severe metabolic acidaemia in the ICU (BICAR-ICU). Lancet 2018."
    ]
  },
  {
    "id": "acidosis.fc.delta-delta-ratio",
    "topicId": "metabolic-acidosis",
    "question": "What is the Delta Ratio (Delta-Delta), and how is it interpreted?",
    "answer": "Delta Ratio = (Observed AG - 12) / (24 - Observed HCO3). < 0.4–0.8: Mixed HAGMA + NAGMA; 1.0–2.0: Pure HAGMA; > 2.0: Mixed HAGMA + Metabolic Alkalosis.",
    "explanation": "Quantifies whether the rise in unmeasured anions matches the fall in serum bicarbonate 1:1.",
    "difficulty": "advanced",
    "category": "Diagnosis",
    "references": [
      "Irwin and Rippe's Intensive Care Medicine, 9th Edition."
    ]
  }
];
