import type { Calculator, CalculatorInputValues } from "@/content-types";

export const deltaGap: Calculator = {
  id: "delta-gap",
  title: "Delta Gap",
  category: "acid-base",
  description: "How far the anion gap has risen above normal — the numerator used when assessing for a concurrent metabolic process.",
  formula: "Delta gap = (Na − (Cl + HCO3)) − 12",
  inputs: [
    { id: "na", label: "Sodium", type: "number", unit: "mEq/L", min: 100, max: 200 },
    { id: "cl", label: "Chloride", type: "number", unit: "mEq/L", min: 50, max: 150 },
    { id: "hco3", label: "Bicarbonate", type: "number", unit: "mEq/L", min: 1, max: 50 },
  ],
  compute: (inputs: CalculatorInputValues) => {
    const anionGap = Number(inputs.na) - (Number(inputs.cl) + Number(inputs.hco3));
    return anionGap - 12;
  },
  resultUnit: "mEq/L excess above normal anion gap",
  resultBands: [
    { min: -1000, max: 0, label: "Not elevated", interpretation: "The anion gap is not above the assumed normal value of 12 — a high-anion-gap process is not indicated by this number." },
    { min: 0, max: 1000, label: "Elevated", interpretation: "Reflects the excess anion gap above normal — used together with the change in bicarbonate (see Delta Ratio) to check for a concurrent acid-base process." },
  ],
  limitations: [
    "Assumes a fixed normal anion gap of 12 mEq/L, which varies somewhat by laboratory and isn't individually corrected for albumin here.",
    "On its own, the delta gap doesn't reveal a concurrent process — it's the numerator of the delta ratio, which is the more informative calculation (see Delta Ratio).",
    "Least reliable when the anion gap is only mildly elevated, where measurement variability has more relative influence.",
  ],
  references: ["Standard derivation from the anion gap; see also Delta Gap in the Physiology Library."],
  relatedTopicIds: [
      "acid-base-disorders",
      "metabolic-acidosis",
      "diabetic-ketoacidosis"
    ],
};
