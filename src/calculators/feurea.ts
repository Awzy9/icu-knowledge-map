import type { Calculator, CalculatorInputValues } from "@/content-types";

export const feurea: Calculator = {
  id: "feurea",
  title: "Fractional Excretion of Urea (FeUrea)",
  category: "renal",
  description: "An alternative to FeNa for distinguishing prerenal azotemia from acute tubular necrosis, useful when the patient has received diuretics.",
  formula: "FeUrea = (Urine urea nitrogen × Plasma Cr) / (Plasma urea nitrogen × Urine Cr) × 100",
  inputs: [
    { id: "urineUrea", label: "Urine urea nitrogen", type: "number", unit: "mg/dL", min: 0, max: 2000 },
    { id: "plasmaCr", label: "Plasma creatinine", type: "number", unit: "mg/dL", min: 0.1, max: 20 },
    { id: "plasmaUrea", label: "Plasma urea nitrogen (BUN)", type: "number", unit: "mg/dL", min: 1, max: 300 },
    { id: "urineCr", label: "Urine creatinine", type: "number", unit: "mg/dL", min: 0.1, max: 500 },
  ],
  compute: (inputs: CalculatorInputValues) => {
    const plasmaUrea = Number(inputs.plasmaUrea);
    const urineCr = Number(inputs.urineCr);
    if (plasmaUrea <= 0 || urineCr <= 0) throw new Error("Plasma urea nitrogen and urine creatinine must be greater than 0.");
    return ((Number(inputs.urineUrea) * Number(inputs.plasmaCr)) / (plasmaUrea * urineCr)) * 100;
  },
  resultUnit: "%",
  resultBands: [
    { min: 0, max: 35, label: "≤ 35% — suggests prerenal", interpretation: "Consistent with a prerenal cause — urea reabsorption remains largely intact even with diuretic use, unlike FeNa." },
    { min: 35, max: 1000, label: "> 35% — suggests intrinsic renal", interpretation: "Consistent with intrinsic renal injury (e.g. acute tubular necrosis)." },
  ],
  limitations: [
    "Less well validated overall than FeNa — mainly used specifically when diuretic use makes FeNa unreliable.",
    "Urea handling can also be affected by protein intake, catabolic state, and liver function, which can shift the result independent of the prerenal/intrinsic distinction.",
    "A single value is a probabilistic aid, not a definitive diagnostic test — it should be interpreted alongside the full clinical picture, not in isolation.",
  ],
  references: ["Carvounis CP, et al. Significance of the fractional excretion of urea in the differential diagnosis of acute renal failure. Kidney Int. 2002."],
  relatedTopicIds: [
      "aki",
      "crrt"
    ],
};
