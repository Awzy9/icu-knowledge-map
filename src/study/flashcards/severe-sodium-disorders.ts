import type { Flashcard } from "@/content-types";

export const severeSodiumDisordersFlashcards: readonly Flashcard[] = [
  {
    "id": "sodium.fc.hyponatremia-correction-limit",
    "topicId": "severe-sodium-disorders",
    "question": "What is the maximum safe rate of serum sodium correction in chronic hyponatremia to avoid Osmotic Demyelination Syndrome (ODS)?",
    "answer": "Maximum 8 mEq/L in 24 hours (and ≤ 4–6 mEq/L in 24h for high-risk patients with malnutrition/alcoholism/liver disease).",
    "explanation": "Brain cells adapt to chronic hypotonicity by extruding organic osmols. Rapid sodium correction causes acute brain dehydration, oligodendrocyte shrinkage, and pontine myelinolysis.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Sterns RH et al. Disorders of plasma sodium. NEJM 2015; European Hyponatremia Guidelines."
    ]
  },
  {
    "id": "sodium.fc.acute-severe-hyponatremia-bolus",
    "topicId": "severe-sodium-disorders",
    "question": "What is the emergency treatment for acute severe hyponatremia with active seizures or herniation?",
    "answer": "3% Hypertonic Saline: 100–150 mL IV bolus over 10–20 minutes, repeatable up to 2 times to achieve an acute 4–6 mEq/L sodium rise.",
    "explanation": "An immediate rise of 4–6 mEq/L reduces brain edema by ~10%, rapidly stopping seizures and reversing tentorial herniation without risking ODS.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "European Clinical Practice Guideline on Hyponatremia. Eur J Endocrinol 2014."
    ]
  },
  {
    "id": "sodium.fc.ddavp-clamp-re-lowering",
    "topicId": "severe-sodium-disorders",
    "question": "What is the 'DDAVP Clamp' or re-lowering strategy if overcorrection of sodium occurs?",
    "answer": "Administer DDAVP (Desmopressin 1–2 mcg IV/SC) to halt urinary water loss, and infuse D5W (Dextrose 5% in water) to re-lower serum sodium back into safe limits.",
    "explanation": "Overcorrection often happens spontaneously when the reversible cause of SIADH/hypovolemia resolves and the kidneys excrete massive dilute urine.",
    "difficulty": "advanced",
    "category": "Management",
    "references": [
      "Sterns RH et al. Overcorrection of hyponatremia: prevention and correction. Clin J Am Soc Nephrol 2014."
    ]
  },
  {
    "id": "sodium.fc.hypernatremia-free-water-deficit",
    "topicId": "severe-sodium-disorders",
    "question": "What is the formula for calculating Free Water Deficit in severe hypernatremia?",
    "answer": "Free Water Deficit (L) = Total Body Water * ([Serum Na / 140] - 1), where TBW = Weight (kg) * 0.6 (0.5 in females/elderly).",
    "explanation": "Hypernatremia represents pure water deficit; safe correction rate is ≤ 10–12 mEq/L per 24 hours to prevent cerebral edema.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Adrogué HJ, Madias NE. Hypernatremia. NEJM 2000."
    ]
  },
  {
    "id": "sodium.fc.ods-correction-limit",
    "topicId": "severe-sodium-disorders",
    "question": "What is the maximum safe rate of serum sodium correction in chronic severe hyponatremia to prevent Osmotic Demyelination Syndrome (ODS)?",
    "answer": "Limit correction to <= 6-8 mEq/L in any 24-hour period (and <= 4-6 mEq/L/24h in high-risk patients: liver disease, malnutrition, alcoholism, baseline Na < 105).",
    "explanation": "Rapid correction causes brain dehydration, myelinolysis in the pons (quadriparesis, locked-in syndrome, dysarthria), and permanent neurologic devastation.",
    "difficulty": "basic",
    "category": "Complications",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in severe-sodium-disorders"
    ]
  },
  {
    "id": "sodium.fc.ddavp-clamp",
    "topicId": "severe-sodium-disorders",
    "question": "What is the DDAVP Clamp strategy in severe chronic hyponatremia?",
    "answer": "Proactive administration of Desmopressin (DDAVP 1-2 mcg IV q6-8h) combined with 3% Hypertonic Saline to strictly control the rate of sodium rise and prevent accidental overcorrection.",
    "explanation": "Prevents spontaneous rapid water diuresis when the underlying cause of SIADH or volume depletion abruptly resolves.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in severe-sodium-disorders"
    ]
  },
  {
    "id": "sodium.fc.relowering-strategy",
    "topicId": "severe-sodium-disorders",
    "question": "What is the emergency management if serum sodium is accidentally overcorrected by > 8-10 mEq/L in 24 hours?",
    "answer": "Immediately stop hypertonic infusions, administer IV D5W (3-6 mL/kg/h) + IV Desmopressin 2 mcg to halt water diuresis and actively re-lower serum sodium back into the safe target range.",
    "explanation": "Prompt re-lowering within the first 12-24 hours can rescue brain astrocytes and prevent permanent osmotic demyelination.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in severe-sodium-disorders"
    ]
  }
];
