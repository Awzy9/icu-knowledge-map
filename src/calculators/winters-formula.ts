import type { Calculator, CalculatorInputValues } from "@/content-types";

export const wintersFormula: Calculator = {
  id: "winters-formula",
  title: "Winter's Formula",
  category: "acid-base",
  description: "Predicted respiratory compensation (expected PaCO2) for a primary metabolic acidosis.",
  formula: "Expected PaCO2 = 1.5 × HCO3 + 8 (± 2)",
  inputs: [{ id: "hco3", label: "Bicarbonate", type: "number", unit: "mEq/L", min: 1, max: 50 }],
  compute: (inputs: CalculatorInputValues) => 1.5 * Number(inputs.hco3) + 8,
  resultUnit: "mmHg (± 2, midpoint shown)",
  limitations: [
    "Only valid for a primary metabolic acidosis — it does not predict expected compensation for any other primary acid-base disorder.",
    "Assumes the respiratory system is able to compensate; a patient with respiratory failure or heavy sedation may not reach the predicted PaCO2 even without a second acid-base process.",
    "The ± 2 mmHg margin around the predicted value should be applied — this calculator shows only the midpoint, not the full expected range.",
  ],
  references: ["Narins RG, Emmett M. Simple and mixed acid-base disorders: a practical approach. Medicine (Baltimore). 1980 (describes Winter's formula and related compensation relationships)."],
  relatedTopicIds: [
      "acid-base-disorders",
      "metabolic-acidosis",
      "diabetic-ketoacidosis"
    ],
};
