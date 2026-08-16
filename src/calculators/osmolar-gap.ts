import type { Calculator, CalculatorInputValues } from "@/content-types";

export const osmolarGap: Calculator = {
  id: "osmolar-gap",
  title: "Osmolar Gap",
  category: "acid-base",
  description: "Difference between measured and calculated osmolality — a screen for unmeasured osmotically active substances such as toxic alcohols.",
  formula: "Osmolar gap = Measured osmolality − (2 × Na + Glucose/18 + BUN/2.8)",
  inputs: [
    { id: "measuredOsm", label: "Measured osmolality", type: "number", unit: "mOsm/kg", min: 200, max: 400 },
    { id: "na", label: "Sodium", type: "number", unit: "mEq/L", min: 100, max: 200 },
    { id: "glucose", label: "Glucose", type: "number", unit: "mg/dL", min: 20, max: 2000 },
    { id: "bun", label: "BUN", type: "number", unit: "mg/dL", min: 1, max: 300 },
  ],
  compute: (inputs: CalculatorInputValues) => {
    const calculatedOsm = 2 * Number(inputs.na) + Number(inputs.glucose) / 18 + Number(inputs.bun) / 2.8;
    return Number(inputs.measuredOsm) - calculatedOsm;
  },
  resultUnit: "mOsm/kg",
  resultBands: [
    { min: -1000, max: 10, label: "Normal", interpretation: "Within the typically accepted normal range (< 10 mOsm/kg)." },
    { min: 10, max: 1000, label: "Elevated", interpretation: "An elevated osmolar gap raises concern for an unmeasured osmotically active substance — most importantly toxic alcohols (methanol, ethylene glycol) or ethanol — especially alongside a high-anion-gap metabolic acidosis." },
  ],
  limitations: [
    "A normal osmolar gap does not exclude toxic alcohol ingestion, particularly later in the course once the parent alcohol has already been metabolized.",
    "Requires a directly measured serum osmolality (by freezing-point depression) — this calculator cannot substitute for that measurement.",
    "Elevated but nonspecific — it flags the possibility of an unmeasured osmole without identifying which one; clinical context and specific levels are required to confirm the cause.",
  ],
  references: ["Standard calculated-osmolality formula (2×Na + glucose/18 + BUN/2.8); see also Osmolar Gap in the Physiology Library."],
  relatedTopicIds: [
      "acid-base-disorders",
      "metabolic-acidosis",
      "toxicologic-emergencies",
      "altered-consciousness"
    ],
};
