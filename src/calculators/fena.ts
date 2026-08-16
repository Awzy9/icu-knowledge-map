import type { Calculator, CalculatorInputValues } from "@/content-types";

export const fena: Calculator = {
  id: "fena",
  title: "Fractional Excretion of Sodium (FeNa)",
  category: "renal",
  description: "Helps distinguish prerenal azotemia from acute tubular necrosis in oliguric AKI, in patients not on diuretics.",
  formula: "FeNa = (Urine Na × Plasma Cr) / (Plasma Na × Urine Cr) × 100",
  inputs: [
    { id: "urineNa", label: "Urine sodium", type: "number", unit: "mEq/L", min: 0, max: 300 },
    { id: "plasmaCr", label: "Plasma creatinine", type: "number", unit: "mg/dL", min: 0.1, max: 20 },
    { id: "plasmaNa", label: "Plasma sodium", type: "number", unit: "mEq/L", min: 100, max: 200 },
    { id: "urineCr", label: "Urine creatinine", type: "number", unit: "mg/dL", min: 0.1, max: 500 },
  ],
  compute: (inputs: CalculatorInputValues) => {
    const plasmaNa = Number(inputs.plasmaNa);
    const urineCr = Number(inputs.urineCr);
    if (plasmaNa <= 0 || urineCr <= 0) throw new Error("Plasma sodium and urine creatinine must be greater than 0.");
    return ((Number(inputs.urineNa) * Number(inputs.plasmaCr)) / (plasmaNa * urineCr)) * 100;
  },
  resultUnit: "%",
  resultBands: [
    { min: 0, max: 1, label: "< 1% — suggests prerenal", interpretation: "Consistent with a prerenal cause (avid sodium retention) — appropriate response to true or effective hypovolemia." },
    { min: 1, max: 1000, label: "> 1% — suggests intrinsic renal", interpretation: "Consistent with intrinsic renal injury (e.g. acute tubular necrosis), where impaired tubular function prevents avid sodium reabsorption." },
  ],
  limitations: [
    "Invalidated by diuretic use (including recent administration) — diuretics independently increase urine sodium regardless of the underlying cause.",
    "Less reliable in patients with underlying chronic kidney disease, contrast-induced nephropathy, or certain glomerulonephritides, which can show a low FeNa despite intrinsic injury.",
    "A single value is a probabilistic aid, not a definitive diagnostic test — it should be interpreted alongside the full clinical picture, not in isolation.",
  ],
  references: ["Standard fractional excretion formula; commonly used alongside FeUrea when diuretics are on board."],
  relatedTopicIds: [
      "aki",
      "crrt"
    ],
};
