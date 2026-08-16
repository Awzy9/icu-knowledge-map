import type { Calculator, CalculatorInputValues } from "@/content-types";

const CM_PER_INCH = 2.54;

export const idealBodyWeight: Calculator = {
  id: "ideal-body-weight",
  title: "Ideal Body Weight",
  category: "respiratory",
  description: "Predicted body weight from height and sex (Devine formula) — the basis for lung-protective tidal volume dosing.",
  formula: "Male: IBW = 50 + 2.3 × (height in inches − 60). Female: IBW = 45.5 + 2.3 × (height in inches − 60)",
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
    { id: "heightCm", label: "Height", type: "number", unit: "cm", min: 140, max: 220 },
  ],
  compute: (inputs: CalculatorInputValues) => {
    const heightIn = Number(inputs.heightCm) / CM_PER_INCH;
    const base = inputs.sex === "female" ? 45.5 : 50;
    const ibw = base + 2.3 * (heightIn - 60);
    if (ibw <= 0) throw new Error("This formula is not valid for heights below approximately 152 cm (5 ft).");
    return ibw;
  },
  resultUnit: "kg",
  limitations: [
    "The Devine formula is only validated for adult heights of roughly 152 cm (5 ft) and above.",
    "Predicted (ideal) body weight, not measured body weight — it's deliberately used for dosing tidal volume regardless of a patient's actual weight, including in obesity.",
    "Doesn't account for amputation or significant body habitus variation outside the population the formula was derived from.",
  ],
  references: ["Devine BJ. Gentamicin therapy. Drug Intell Clin Pharm. 1974 (origin of the commonly used IBW formula)."],
  relatedTopicIds: [
      "ards",
      "mechanical-ventilation",
      "critical-illness-nutrition"
    ],
};
