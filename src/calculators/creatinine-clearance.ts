import type { Calculator, CalculatorInputValues } from "@/content-types";

export const creatinineClearance: Calculator = {
  id: "creatinine-clearance",
  title: "Creatinine Clearance (Cockcroft-Gault)",
  category: "renal",
  description: "Estimates creatinine clearance from age, weight, sex, and plasma creatinine — commonly used for renally-cleared drug dosing.",
  formula: "CrCl = [(140 − age) × weight(kg) × (0.85 if female)] / (72 × plasma creatinine)",
  inputs: [
    { id: "age", label: "Age", type: "number", unit: "years", min: 18, max: 110 },
    { id: "weightKg", label: "Weight", type: "number", unit: "kg", min: 20, max: 300 },
    {
      id: "sex",
      label: "Sex",
      type: "select",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ],
    },
    { id: "creatinine", label: "Plasma creatinine", type: "number", unit: "mg/dL", min: 0.1, max: 20 },
  ],
  compute: (inputs: CalculatorInputValues) => {
    const creatinine = Number(inputs.creatinine);
    if (creatinine <= 0) throw new Error("Plasma creatinine must be greater than 0.");
    const sexFactor = inputs.sex === "female" ? 0.85 : 1;
    return ((140 - Number(inputs.age)) * Number(inputs.weightKg) * sexFactor) / (72 * creatinine);
  },
  resultUnit: "mL/min",
  resultBands: [
    { min: 0, max: 30, label: "Severely reduced", interpretation: "Substantially reduced clearance — many renally cleared drugs need significant dose adjustment or avoidance at this level." },
    { min: 30, max: 60, label: "Moderately reduced", interpretation: "Moderately reduced clearance — many renally cleared drugs need dose adjustment." },
    { min: 60, max: 1000, label: "Preserved", interpretation: "At or above the commonly used threshold where routine renal dose adjustment is not typically required." },
  ],
  limitations: [
    "An estimate derived from a stable, steady-state plasma creatinine — unreliable in acute kidney injury, where creatinine hasn't yet equilibrated with true filtration.",
    "Uses actual body weight in its original form; many institutions substitute adjusted or ideal body weight in obesity, which this calculator does not do automatically.",
    "Was derived from a largely male study population from 1976 and does not perform as well across all body compositions and ages as modern estimating equations (e.g. CKD-EPI) for general GFR estimation — it remains widely used specifically for drug-dosing purposes.",
  ],
  references: ["Cockcroft DW, Gault MH. Prediction of creatinine clearance from serum creatinine. Nephron. 1976."],
  relatedTopicIds: [
      "aki",
      "crrt"
    ],
};
