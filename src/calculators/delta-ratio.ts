import type { Calculator, CalculatorInputValues } from "@/content-types";

export const deltaRatio: Calculator = {
  id: "delta-ratio",
  title: "Delta Ratio",
  category: "acid-base",
  description: "Compares the rise in anion gap to the fall in bicarbonate, to detect a second metabolic process hiding behind a high-anion-gap acidosis.",
  formula: "Delta ratio = (Anion gap − 12) / (24 − HCO3)",
  inputs: [
    { id: "na", label: "Sodium", type: "number", unit: "mEq/L", min: 100, max: 200 },
    { id: "cl", label: "Chloride", type: "number", unit: "mEq/L", min: 50, max: 150 },
    { id: "hco3", label: "Bicarbonate", type: "number", unit: "mEq/L", min: 1, max: 23.9 },
  ],
  compute: (inputs: CalculatorInputValues) => {
    const hco3 = Number(inputs.hco3);
    const anionGap = Number(inputs.na) - (Number(inputs.cl) + hco3);
    const denominator = 24 - hco3;
    if (denominator <= 0) throw new Error("Bicarbonate must be below 24 mEq/L for this calculation — the patient does not have a bicarbonate deficit.");
    return (anionGap - 12) / denominator;
  },
  resultUnit: "unitless ratio",
  resultBands: [
    { min: -1000, max: 0.4, label: "Low ratio", interpretation: "Suggests a concurrent normal-anion-gap (hyperchloremic) acidosis in addition to the high-anion-gap process." },
    { min: 0.4, max: 2, label: "Typical for a pure HAGMA", interpretation: "Consistent with a pure high-anion-gap metabolic acidosis, without strong evidence for an additional process." },
    { min: 2, max: 1000, label: "High ratio", interpretation: "Suggests a concurrent metabolic alkalosis — bicarbonate is higher than the anion gap alone would predict." },
  ],
  limitations: [
    "Only meaningful when a high-anion-gap metabolic acidosis is already present — applying it without one produces a number without a valid interpretation.",
    "Assumes fixed normal reference values (anion gap 12, bicarbonate 24) that vary somewhat by laboratory.",
    "A ratio in the 'typical' range doesn't rule out a second process of similar magnitude in the opposite direction — it only means the two are not obviously mismatched.",
  ],
  references: ["Standard derivation comparing anion gap excess to bicarbonate deficit; see also Delta Gap and Mixed Acid-Base Disorders in the Physiology Library."],
  relatedTopicIds: [
      "acid-base-disorders",
      "metabolic-acidosis",
      "diabetic-ketoacidosis"
    ],
};
