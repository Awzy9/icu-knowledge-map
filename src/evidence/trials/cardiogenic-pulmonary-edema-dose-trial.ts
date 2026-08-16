import type { Trial } from "@/content-types";

export const cardiogenicPulmonaryEdemaDoseTrial: Trial = {
  id: "cardiogenic-pulmonary-edema-dose-trial",
  name: "DOSE",
  title: "Diuretic Strategies in Patients with Acute Decompensated Heart Failure",
  year: 2011,
  journal: "New England Journal of Medicine",
  doi: "10.1056/NEJMoa1005419",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter, randomized, double-blind, 2x2 factorial trial.",
  clinicalQuestion: "In acute decompensated heart failure, does the route (bolus vs. continuous infusion) or dose intensity (low- vs. high-dose) of IV furosemide affect symptom relief or renal function?",
  population: "308 patients with acute decompensated heart failure and at least moderate baseline diuretic requirements.",
  intervention: "IV furosemide by continuous infusion, and/or a high-dose strategy (2.5x total daily oral home dose).",
  comparator: "IV furosemide by every-12-hour bolus, and/or a low-dose strategy (equivalent to the total daily oral home dose).",
  primaryOutcome: "Patient global assessment of symptoms (area under the curve) at 72 hours, and change in serum creatinine at 72 hours.",
  result: {
    summary: "No significant difference in symptom relief or renal function between bolus and continuous infusion, or between low-dose and high-dose strategies.",
  },
  resultDirection: "negative-neutral",
  whatItFound:
    "Neither the route of furosemide administration (bolus vs. continuous) nor the dose intensity (low vs. high) significantly changed symptom relief or renal function at 72 hours, though the high-dose strategy showed trends toward greater diuresis and symptom relief at the cost of a trend toward transient renal function worsening, neither reaching statistical significance.",
  clinicalInterpretation:
    "DOSE supports flexibility in diuretic strategy for acute decompensated heart failure — neither administration route nor dose intensity has been shown to be clearly superior, so the choice can reasonably be guided by institutional practice and individual patient response rather than a single mandated protocol.",
  currentGuidelinePosition:
    "Consistent with the 2022 AHA/ACC/HFSA heart failure guideline's flexible approach to diuretic strategy in acute decompensated heart failure.",
  limitations: [
    "Restricted to patients with at least moderate baseline diuretic requirements; may not generalize to diuretic-naive patients.",
    "Underpowered to detect smaller differences between strategies given the observed (nonsignificant) trends.",
  ],
  relatedTopicIds: ["cardiogenic-pulmonary-edema"],
  certainty: "moderate",
};
