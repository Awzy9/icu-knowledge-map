import type { Calculator, CalculatorInputValues } from "@/content-types";

const TBW_FRACTION: Record<string, number> = { male: 0.6, female: 0.5 };

export const freeWaterDeficit: Calculator = {
  id: "free-water-deficit",
  title: "Free Water Deficit",
  category: "renal",
  description: "Estimates the water deficit underlying hypernatremia, as a starting point for correction planning.",
  formula: "Free water deficit = Total body water fraction × Weight × (Current Na / 140 − 1)",
  inputs: [
    {
      id: "sex",
      label: "Sex",
      type: "select",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ],
    },
    { id: "weightKg", label: "Weight", type: "number", unit: "kg", min: 20, max: 300 },
    { id: "currentNa", label: "Current sodium", type: "number", unit: "mEq/L", min: 100, max: 200 },
  ],
  compute: (inputs: CalculatorInputValues) => {
    const tbwFraction = TBW_FRACTION[String(inputs.sex)] ?? TBW_FRACTION.male;
    const currentNa = Number(inputs.currentNa);
    return tbwFraction * Number(inputs.weightKg) * (currentNa / 140 - 1);
  },
  resultUnit: "L",
  resultBands: [
    { min: -1000, max: 0, label: "Not a deficit", interpretation: "A result at or below zero means current sodium is not above 140 mEq/L — this formula does not apply to hyponatremia or a normal sodium." },
    { min: 0, max: 1000, label: "Estimated deficit", interpretation: "An estimate of the free water deficit to correct toward a sodium of 140 mEq/L — not a rate or an infusion plan by itself." },
  ],
  limitations: [
    "Uses a fixed total-body-water fraction by sex (0.6 male, 0.5 female) and does not adjust for age or body composition, both of which shift true total body water.",
    "Estimates the total deficit only — it does not specify a safe correction rate, which must be limited separately (commonly no more than 8–10 mEq/L per 24 hours to avoid cerebral edema from overly rapid correction).",
    "Does not account for ongoing free water losses (e.g. diabetes insipidus, osmotic diuresis) that continue during correction.",
  ],
  references: ["Standard total-body-water-based free water deficit formula; used alongside Corrected Sodium and safe correction-rate limits."],
  relatedTopicIds: [
      "severe-sodium-disorders",
      "endocrine-emergencies",
      "aki"
    ],
};
