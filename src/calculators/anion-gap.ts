import type { Calculator, CalculatorInputValues } from "@/content-types";

export const anionGap: Calculator = {
  id: "anion-gap",
  title: "Anion Gap",
  category: "acid-base",
  description: "Narrows the differential for a metabolic acidosis by estimating the concentration of unmeasured anions in the plasma.",
  formula: "Anion gap = Na − (Cl + HCO3)",
  inputs: [
    { id: "na", label: "Sodium", type: "number", unit: "mEq/L", min: 100, max: 200 },
    { id: "cl", label: "Chloride", type: "number", unit: "mEq/L", min: 50, max: 150 },
    { id: "hco3", label: "Bicarbonate", type: "number", unit: "mEq/L", min: 1, max: 50 },
  ],
  compute: (inputs: CalculatorInputValues) => Number(inputs.na) - (Number(inputs.cl) + Number(inputs.hco3)),
  resultUnit: "mEq/L",
  resultBands: [
    { min: -100, max: 12, label: "Normal", interpretation: "Within the typical normal range (roughly 8–12 mEq/L)." },
    { min: 12, max: 1000, label: "Elevated (high anion gap)", interpretation: "An unmeasured anion is likely accumulating — common ICU causes include lactic acidosis, ketoacidosis, uremia, and toxic ingestions." },
  ],
  limitations: [
    "Should be corrected for albumin: a low albumin lowers the expected 'normal' gap by roughly 2.5 per 1 g/dL drop, and can mask a clinically significant gap acidosis if not accounted for.",
    "The normal reference range varies somewhat between laboratory assay methods.",
    "A normal anion gap does not exclude a mixed acid-base disorder — it only addresses the gap-forming component.",
  ],
  references: ["Standard definition based on electroneutrality of plasma; see also Anion Gap in the Physiology Library."],
  relatedTopicIds: [
      "acid-base-disorders",
      "metabolic-acidosis",
      "diabetic-ketoacidosis",
      "toxicologic-emergencies"
    ],
};
