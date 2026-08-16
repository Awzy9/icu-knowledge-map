import type { Calculator, CalculatorInputValues } from "@/content-types";

export const pao2Fio2Ratio: Calculator = {
  id: "pao2-fio2-ratio",
  title: "PaO2/FiO2 Ratio",
  category: "respiratory",
  description: "Grades hypoxemia severity for the Berlin ARDS definition. Measure at PEEP ≥ 5 cmH2O.",
  formula: "P/F ratio = PaO2 / FiO2",
  inputs: [
    { id: "pao2", label: "PaO2", type: "number", unit: "mmHg", min: 1, max: 700 },
    { id: "fio2", label: "FiO2", type: "number", unit: "fraction, e.g. 0.5", min: 0.21, max: 1, step: 0.01 },
  ],
  compute: (inputs: CalculatorInputValues) => {
    const fio2 = Number(inputs.fio2);
    if (fio2 <= 0) throw new Error("FiO2 must be greater than 0.");
    return Number(inputs.pao2) / fio2;
  },
  resultUnit: "unitless ratio (mmHg per fraction)",
  resultBands: [
    {
      min: 0,
      max: 100,
      label: "Severe range",
      interpretation: "Consistent with severe ARDS if the Berlin timing, imaging, and cardiac-exclusion criteria are also met.",
    },
    {
      min: 100,
      max: 200,
      label: "Moderate range",
      interpretation: "Consistent with moderate ARDS under the same Berlin criteria.",
    },
    {
      min: 200,
      max: 300,
      label: "Mild range",
      interpretation: "Consistent with mild ARDS under the same Berlin criteria.",
    },
    {
      min: 300,
      max: 100_000,
      label: "Above ARDS threshold",
      interpretation: "Does not meet the oxygenation criterion for ARDS at this PEEP/FiO2 combination.",
    },
  ],
  limitations: [
    "Only valid for ARDS severity grading when measured at PEEP ≥ 5 cmH2O — this calculator does not know or check the current PEEP.",
    "Does not itself establish an ARDS diagnosis; the Berlin definition's timing, imaging, and cardiac-exclusion criteria must also be met.",
    "FiO2 is often only approximately known on non-invasive or high-flow oxygen devices, which limits precision outside invasive mechanical ventilation.",
  ],
  references: ["ARDS Definition Task Force. Berlin Definition of ARDS. JAMA 2012."],
  relatedTopicIds: [
      "ards",
      "hypoxemic-respiratory-failure",
      "pneumonia",
      "respiratory-failure-basics"
    ],
};
