import type { Calculator, CalculatorInputValues } from "@/content-types";

export const staticCompliance: Calculator = {
  id: "static-compliance",
  title: "Static Compliance",
  category: "respiratory",
  description: "Tidal volume delivered per unit of driving pressure — a bedside marker of how stiff the lung and chest wall are.",
  formula: "Static compliance = Tidal volume / (Plateau pressure − PEEP)",
  inputs: [
    { id: "tidalVolume", label: "Tidal volume", type: "number", unit: "mL", min: 1, max: 1000 },
    { id: "plateauPressure", label: "Plateau pressure", type: "number", unit: "cmH2O", min: 0, max: 60 },
    { id: "peep", label: "PEEP", type: "number", unit: "cmH2O", min: 0, max: 30 },
  ],
  compute: (inputs: CalculatorInputValues) => {
    const tidalVolume = Number(inputs.tidalVolume);
    const plateauPressure = Number(inputs.plateauPressure);
    const peep = Number(inputs.peep);
    const drivingPressure = plateauPressure - peep;
    if (drivingPressure <= 0) throw new Error("Plateau pressure must be greater than PEEP to calculate compliance.");
    return tidalVolume / drivingPressure;
  },
  resultUnit: "mL/cmH2O",
  resultBands: [
    { min: 0, max: 30, label: "Reduced", interpretation: "Suggests significantly stiff lungs and/or chest wall — consistent with more severe ARDS or another process reducing compliance." },
    { min: 30, max: 50, label: "Mildly reduced", interpretation: "Somewhat below the typical normal range for a ventilated adult." },
    { min: 50, max: 1000, label: "Within typical range", interpretation: "Within the range commonly seen in adults without severe lung or chest wall disease." },
  ],
  limitations: [
    "Requires a true end-inspiratory pause with no patient effort — spontaneous breathing invalidates the plateau pressure measurement and this calculation.",
    "Reflects the combined compliance of lung and chest wall together, not the lung alone.",
    "A single measurement is less informative than trending compliance over time in the same patient.",
  ],
  references: ["Standard respiratory-system compliance relationship (Vt / driving pressure); see also Compliance and Driving Pressure in the Physiology Library."],
  relatedTopicIds: [
      "ards",
      "mechanical-ventilation",
      "asthma",
      "copd-exacerbation"
    ],
};
