import type { Calculator, CalculatorInputValues } from "@/content-types";

export const minuteVentilation: Calculator = {
  id: "minute-ventilation",
  title: "Minute Ventilation",
  category: "respiratory",
  description: "Total volume of gas moved in or out of the lungs per minute.",
  formula: "Minute ventilation = Respiratory rate × Tidal volume",
  inputs: [
    { id: "respiratoryRate", label: "Respiratory rate", type: "number", unit: "breaths/min", min: 0, max: 60 },
    { id: "tidalVolume", label: "Tidal volume", type: "number", unit: "mL", min: 0, max: 1000 },
  ],
  compute: (inputs: CalculatorInputValues) => (Number(inputs.respiratoryRate) * Number(inputs.tidalVolume)) / 1000,
  resultUnit: "L/min",
  resultBands: [
    { min: 0, max: 4, label: "Low", interpretation: "Below the typical resting range — if unintended, consider hypoventilation and check PaCO2." },
    { min: 4, max: 10, label: "Typical resting range", interpretation: "Within the range commonly seen in adults at rest." },
    { min: 10, max: 1000, label: "Elevated", interpretation: "Above the typical resting range — seen with high metabolic demand, dead space, acidosis compensation, or agitation/distress." },
  ],
  limitations: [
    "A simple product of two values — it doesn't distinguish alveolar ventilation from dead-space ventilation, which is what actually determines CO2 clearance.",
    "Doesn't account for auto-PEEP or breath stacking, which can occur at high respiratory rates without being reflected in this number.",
    "Normal ranges vary with body size and metabolic state; a single value should be interpreted in the context of the whole patient, not against a fixed universal target.",
  ],
  references: ["Standard definition: minute ventilation = respiratory rate × tidal volume; see also Dead Space and Work of Breathing in the Physiology Library."],
  relatedTopicIds: [
      "mechanical-ventilation",
      "respiratory-failure-basics",
      "hypercapnic-respiratory-failure",
      "copd-exacerbation",
      "asthma"
    ],
};
