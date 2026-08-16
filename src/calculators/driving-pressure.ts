import type { Calculator, CalculatorInputValues } from "@/content-types";

export const drivingPressure: Calculator = {
  id: "driving-pressure",
  title: "Driving Pressure",
  category: "respiratory",
  description: "Plateau pressure minus PEEP — a marker of lung-protective ventilation beyond tidal volume alone.",
  formula: "Driving pressure = Plateau pressure − PEEP",
  inputs: [
    { id: "plateauPressure", label: "Plateau pressure", type: "number", unit: "cmH2O", min: 0, max: 60 },
    { id: "peep", label: "PEEP", type: "number", unit: "cmH2O", min: 0, max: 30 },
  ],
  compute: (inputs: CalculatorInputValues) => {
    const plateauPressure = Number(inputs.plateauPressure);
    const peep = Number(inputs.peep);
    if (peep > plateauPressure) throw new Error("PEEP cannot exceed plateau pressure.");
    return plateauPressure - peep;
  },
  resultUnit: "cmH2O",
  resultBands: [
    {
      min: 0,
      max: 15,
      label: "Within target range",
      interpretation: "Driving pressure ≤ 15 cmH2O has been associated with lower mortality in retrospective analyses of ARDSNet trial data.",
    },
    {
      min: 15,
      max: 100,
      label: "Above target range",
      interpretation: "Higher driving pressure has been associated with increased mortality in retrospective analyses; consider reassessing tidal volume, PEEP, and sedation depth.",
    },
  ],
  limitations: [
    "Requires a valid plateau pressure measured during an end-inspiratory pause with no active patient effort — spontaneous breathing effort invalidates the measurement.",
    "The mortality association comes from retrospective analyses of trial data, not a randomized trial of a driving-pressure-targeted strategy itself.",
    "Doesn't separate lung from chest wall contribution — see transpulmonary pressure for that distinction.",
  ],
  references: ["Amato MB, et al. Driving Pressure and Survival in the Acute Respiratory Distress Syndrome. NEJM 2015."],
  relatedTopicIds: [
      "ards",
      "mechanical-ventilation",
      "copd-exacerbation"
    ],
};
