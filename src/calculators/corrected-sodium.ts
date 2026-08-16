import type { Calculator, CalculatorInputValues } from "@/content-types";

export const correctedSodium: Calculator = {
  id: "corrected-sodium",
  title: "Corrected Sodium (Hyperglycemia)",
  category: "electrolytes",
  description: "Estimates true serum sodium in the setting of hyperglycemia, which dilutes measured sodium by drawing water into the vascular space.",
  formula: "Corrected Na = Measured Na + 1.6 × (Glucose − 100) / 100",
  inputs: [
    { id: "measuredNa", label: "Measured sodium", type: "number", unit: "mEq/L", min: 100, max: 200 },
    { id: "glucose", label: "Glucose", type: "number", unit: "mg/dL", min: 40, max: 2000 },
  ],
  compute: (inputs: CalculatorInputValues) => Number(inputs.measuredNa) + 1.6 * ((Number(inputs.glucose) - 100) / 100),
  resultUnit: "mEq/L",
  resultBands: [
    { min: 0, max: 135, label: "Corrected value still low", interpretation: "Even after correcting for glucose, the sodium remains low — a hyperglycemia-independent cause of hyponatremia should still be sought." },
    { min: 135, max: 145, label: "Corrected value in typical range", interpretation: "Once corrected for glucose, the sodium falls within the typical normal range." },
    { min: 145, max: 1000, label: "Corrected value elevated", interpretation: "Corrected sodium is above the typical normal range." },
  ],
  limitations: [
    "This calculator uses the traditional correction factor of 1.6 mEq/L per 100 mg/dL of glucose above 100 mg/dL; some evidence supports a larger factor (2.4) at very high glucose levels, which would produce a higher corrected value than shown here.",
    "Below a glucose of roughly 100 mg/dL, the correction term becomes negative — this formula is intended for hyperglycemia and is not meaningful in hypoglycemia.",
    "Does not account for other osmotically active substances (e.g. mannitol) that can similarly dilute measured sodium.",
  ],
  references: ["Katz MA. Hyperglycemia-induced hyponatremia — calculation of expected serum sodium depletion. NEJM 1973."],
  relatedTopicIds: [
      "severe-sodium-disorders",
      "diabetic-ketoacidosis",
      "aki"
    ],
};
