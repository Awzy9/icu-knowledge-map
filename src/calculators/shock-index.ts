import type { Calculator, CalculatorInputValues } from "@/content-types";

export const shockIndex: Calculator = {
  id: "shock-index",
  title: "Shock Index",
  category: "hemodynamics",
  description: "Heart rate divided by systolic blood pressure — a simple bedside marker that can flag early hemodynamic compromise before hypotension develops.",
  formula: "Shock index = Heart rate / Systolic BP",
  inputs: [
    { id: "heartRate", label: "Heart rate", type: "number", unit: "beats/min", min: 1, max: 300 },
    { id: "sbp", label: "Systolic BP", type: "number", unit: "mmHg", min: 1, max: 300 },
  ],
  compute: (inputs: CalculatorInputValues) => {
    const sbp = Number(inputs.sbp);
    if (sbp <= 0) throw new Error("Systolic BP must be greater than 0.");
    return Number(inputs.heartRate) / sbp;
  },
  resultUnit: "unitless ratio",
  resultBands: [
    { min: 0, max: 0.7, label: "Normal range", interpretation: "Within the typical normal range (roughly 0.5–0.7)." },
    { min: 0.7, max: 1, label: "Borderline elevated", interpretation: "Above the typical normal range — worth trending alongside other perfusion markers." },
    { min: 1, max: 1000, label: "Elevated", interpretation: "Elevated shock index (≥ 1) has been associated with occult hypoperfusion and worse outcomes in several observational cohorts, even with a normal blood pressure." },
  ],
  limitations: [
    "A single elevated value is a screening flag, not a diagnosis — it should prompt closer assessment (lactate, exam, trend), not a specific intervention by itself.",
    "Affected by anything that independently changes heart rate (pain, anxiety, beta-blockade, pacemaker) or blood pressure, which can produce false positives or false negatives.",
    "Derived mainly from trauma and sepsis cohorts; its performance in other populations is less well established.",
  ],
  references: ["Allgöwer M, Burri C. Schockindex. Deutsche Medizinische Wochenschrift. 1967 (original description of the shock index)."],
  relatedTopicIds: [
      "shock",
      "bleeding",
      "pulmonary-embolism",
      "cardiogenic-shock",
      "septic-shock"
    ],
};
