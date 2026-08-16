import type { Calculator, CalculatorInputValues } from "@/content-types";

export const map: Calculator = {
  id: "map",
  title: "Mean Arterial Pressure",
  category: "hemodynamics",
  description: "Estimated average arterial pressure across the cardiac cycle, from systolic and diastolic pressure.",
  formula: "MAP = DBP + ⅓ × (SBP − DBP)",
  inputs: [
    { id: "sbp", label: "Systolic BP", type: "number", unit: "mmHg", min: 1, max: 300 },
    { id: "dbp", label: "Diastolic BP", type: "number", unit: "mmHg", min: 0, max: 250 },
  ],
  compute: (inputs: CalculatorInputValues) => {
    const sbp = Number(inputs.sbp);
    const dbp = Number(inputs.dbp);
    if (dbp > sbp) throw new Error("Systolic pressure cannot be lower than diastolic pressure.");
    return dbp + (sbp - dbp) / 3;
  },
  resultUnit: "mmHg",
  resultBands: [
    { min: 0, max: 65, label: "Below common resuscitation target", interpretation: "Below the MAP ≥ 65 mmHg target commonly used in shock resuscitation." },
    { min: 65, max: 1000, label: "At or above common resuscitation target", interpretation: "At or above the MAP ≥ 65 mmHg target commonly used in shock resuscitation." },
  ],
  limitations: [
    "This formula is an approximation that assumes a normal arterial waveform and resting heart rate — it is less accurate at very high heart rates or with an abnormal waveform, where a directly measured (e.g. arterial line) MAP is more reliable.",
    "A MAP ≥ 65 mmHg is a common resuscitation target, not a universally correct one — individual targets vary with chronic blood pressure, the specific diagnosis, and clinical context.",
    "Cuff-derived blood pressure can be inaccurate in shock states with significant vasoconstriction; an arterial line is preferred when precision matters.",
  ],
  references: ["Standard hemodynamic formula: MAP ≈ diastolic pressure + one-third of pulse pressure."],
  relatedTopicIds: [
      "shock",
      "septic-shock",
      "cardiogenic-shock",
      "hypertensive-emergencies",
      "intracranial-hypertension"
    ],
};
