import type { Flashcard } from "@/content-types";

export const hyperkalemiaFlashcards: readonly Flashcard[] = [
  {
    "id": "hyperk.fc.ecg-progression",
    "topicId": "hyperkalemia",
    "question": "What is the classic chronological progression of ECG changes as serum potassium rises?",
    "answer": "Peaked narrow T waves → PR prolongation & flattening/loss of P waves → QRS widening → Sine wave pattern → Ventricular fibrillation / Asystole.",
    "explanation": "ECG changes represent impaired myocardial conduction velocity; however, severe hyperkalemia can progress rapidly to sine wave arrest without preceding textbook stages.",
    "difficulty": "basic",
    "category": "Recognition",
    "references": [
      "Montague BT et al. Retrospective review of the frequency of ECG changes in hyperkalemia. Clin J Am Soc Nephrol 2008."
    ]
  },
  {
    "id": "hyperk.fc.calcium-membrane-stabilization",
    "topicId": "hyperkalemia",
    "question": "How does IV Calcium treat hyperkalemic cardiotoxicity, and does it lower serum potassium?",
    "answer": "Calcium restores the normal electrical threshold potential gradient in cardiac myocytes within 1–3 minutes; it does NOT lower serum potassium.",
    "explanation": "Hyperkalemia partially depolarizes the resting membrane potential toward threshold, inactivating sodium channels. IV calcium elevates threshold potential, restoring excitability.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Irwin and Rippe's Intensive Care Medicine, 9th Edition."
    ]
  },
  {
    "id": "hyperk.fc.calcium-chloride-vs-gluconate",
    "topicId": "hyperkalemia",
    "question": "What is the difference in elemental calcium content between Calcium Chloride 10% and Calcium Gluconate 10%?",
    "answer": "Calcium Chloride contains ~3 times more elemental calcium (27.2 mg/mL vs 9.3 mg/mL = 13.6 mEq vs 4.6 mEq per 10 mL ampule).",
    "explanation": "Calcium chloride is preferred in cardiac arrest or profound shock via central/reliable line; calcium gluconate is preferred for peripheral infusion due to lower extravasation necrosis risk.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Goldfrank's Toxicologic Emergencies."
    ]
  },
  {
    "id": "hyperk.fc.shifting-agents-onset-duration",
    "topicId": "hyperkalemia",
    "question": "What are the doses, onsets, and durations of regular insulin and albuterol for shifting potassium?",
    "answer": "Insulin (10 U IV with 25–50 g D50W): onset 15–30 min, peak 30–60 min, duration 4–6h; Albuterol (10–20 mg nebulized): onset 15–30 min, duration 2–4h.",
    "explanation": "Both stimulate the Na+/K+-ATPase pump, shifting potassium into cells. Together they lower serum K+ by 1.0–1.5 mEq/L. Blood glucose must be monitored for delayed hypoglycemia.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Weisberg LS. Management of severe hyperkalemia. Crit Care Med 2008."
    ]
  },
  {
    "id": "hyperk.fc.novel-potassium-binders",
    "topicId": "hyperkalemia",
    "question": "What are the advantages of Sodium Zirconium Cyclosilicate (Lokelma) and Patiromer over Sodium Polystyrene Sulfonate (Kayexalate)?",
    "answer": "Faster onset, greater gastrointestinal tolerability, and lack of bowel necrosis / intestinal ischemia associated with sorbitol-containing Kayexalate.",
    "explanation": "Lokelma binds potassium specifically in exchange for hydrogen and sodium throughout the entire GI tract with an onset within 1–2 hours.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Kosiborod M et al. HARMONIZE Trial. JAMA 2014."
    ]
  }
];
