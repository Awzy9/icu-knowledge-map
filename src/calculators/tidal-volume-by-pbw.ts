import type { Calculator, CalculatorInputValues } from "@/content-types";

const CM_PER_INCH = 2.54;

function predictedBodyWeight(heightCm: number, sex: string | number | boolean): number {
  const heightIn = heightCm / CM_PER_INCH;
  const base = sex === "female" ? 45.5 : 50;
  return base + 2.3 * (heightIn - 60);
}

export const tidalVolumeByPbw: Calculator = {
  id: "tidal-volume-by-pbw",
  title: "Tidal Volume by Predicted Body Weight",
  category: "respiratory",
  description: "Target tidal volume for lung-protective ventilation, dosed to predicted body weight rather than actual weight.",
  formula: "Tidal volume = mL/kg target × Predicted body weight (Devine formula)",
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
    { id: "mlPerKg", label: "Target", type: "number", unit: "mL/kg PBW", min: 4, max: 8, step: 0.5 },
  ],
  compute: (inputs: CalculatorInputValues) => {
    const pbw = predictedBodyWeight(Number(inputs.heightCm), inputs.sex);
    if (pbw <= 0) throw new Error("This formula is not valid for heights below approximately 152 cm (5 ft).");
    return Number(inputs.mlPerKg) * pbw;
  },
  resultUnit: "mL",
  limitations: [
    "Dosed to predicted, not actual, body weight — this is intentional for lung-protective ventilation, since lung size tracks height and sex, not actual weight.",
    "6 mL/kg PBW is the standard lung-protective starting point; the 4–8 mL/kg range exists to allow titration for plateau pressure and patient comfort, not as an independently 'safe' range at every value.",
    "Achieving a target tidal volume doesn't guarantee a safe plateau pressure — both should be checked together.",
  ],
  references: [
    "The Acute Respiratory Distress Syndrome Network. Ventilation with Lower Tidal Volumes as Compared with Traditional Tidal Volumes for Acute Lung Injury and the Acute Respiratory Distress Syndrome. NEJM 2000.",
  ],
  relatedTopicIds: [
      "ards",
      "mechanical-ventilation",
      "hypoxemic-respiratory-failure"
    ],
};
