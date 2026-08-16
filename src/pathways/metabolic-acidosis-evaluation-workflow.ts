import type { Pathway } from "@/content-types";

export const metabolicAcidosisEvaluationWorkflow: Pathway = {
  id: "metabolic-acidosis-evaluation-workflow",
  slug: "metabolic-acidosis-evaluation-workflow",
  title: "Acute Severe Metabolic Acidosis Evaluation",
  oneLiner: "From primary disorder confirmation and Anion Gap calculation to Winter's compensation, delta ratio, and targeted source control.",
  startingProblem: "Acute Severe Acidemia (pH < 7.25 / HCO3 < 15)",
  relatedTopicIds: [
      "metabolic-acidosis",
      "acid-base-disorders",
      "diabetic-ketoacidosis",
      "toxicologic-emergencies",
      "crrt",
      "shock",
      "aki"
    ],
  flow: {
    id: "confirm-primary-metabolic-acidosis",
    label: "Confirm primary metabolic acidosis on simultaneous ABG and basic chemistry",
    kind: "step",
    role: "assessment",
    detail: "Verify low pH (<7.35) with low serum bicarbonate (<22 mEq/L) and elevated base deficit.",
    topicId: "metabolic-acidosis",
    children: [
      {
        id: "calculate-anion-gap-corrected",
        label: "Calculate serum Anion Gap corrected for serum albumin",
        kind: "branch",
        role: "decision",
        detail: "AG = Na - (Cl + HCO3). Corrected AG = Observed AG + 2.5 * (4.0 - Albumin g/dL). Normal is 10–12 mEq/L.",
        calculatorId: "anion-gap",
        children: [
          {
            id: "high-anion-gap-path",
            label: "High Anion Gap Acidosis (HAGMA: AG > 12 mEq/L)",
            kind: "step",
            role: "assessment",
            detail: "Unmeasured acid anions accumulating. Work up 'GOLDMARK': Glycols (toxic alcohols), Oxoproline (chronic acetaminophen), L-Lactate (shock/hypoxia), D-Lactate (short gut), Methanol, Aspirin/Salicylates, Renal failure (uremia), Ketoacidosis (DKA/starvation/alcohol).",
            children: [
              {
                id: "check-winters-delta-ratio",
                label: "Check Winter's formula (expected PaCO2) and Delta-Delta ratio",
                kind: "step",
                role: "assessment",
                detail: "Expected PaCO2 = 1.5 * HCO3 + 8 (+/- 2). Delta Ratio = (AG - 12) / (24 - HCO3). Ratio < 0.4–0.8 indicates mixed HAGMA + NAGMA; ratio > 2.0 indicates concurrent metabolic alkalosis.",
                children: [
                  {
                    id: "hagma-targeted-intervention",
                    label: "Execute targeted etiology-specific reversal",
                    kind: "step",
                    role: "intervention",
                    detail: "DKA: IV insulin + balanced crystalloid. Sepsis: source control + perfusion restoration. Toxic alcohols: Fomepizole + urgent hemodialysis. Uremia: Dialysis initiation.",
                  },
                ],
              },
            ],
          },
          {
            id: "normal-anion-gap-path",
            label: "Normal Anion Gap Acidosis (NAGMA / Hyperchloremic: AG <= 12)",
            kind: "step",
            role: "assessment",
            detail: "Direct bicarbonate loss or rapid chloride loading. Differentiate GI losses (severe diarrhea, enterocutaneous fistula) from Renal Tubular Acidosis (RTA) and large-volume 0.9% saline infusion.",
            children: [
              {
                id: "nagma-targeted-intervention",
                label: "Switch to balanced crystalloid & replace bicarbonate if severe",
                kind: "step",
                role: "intervention",
                detail: "Discontinue 0.9% Normal Saline; administer isotonic sodium bicarbonate or Plasmalyte; treat GI losses.",
              },
            ],
          },
        ],
      },
    ],
  },
  redFlags: [
    { id: "acidosis-bicarb-icu-trial", text: "Profound metabolic acidemia with pH < 7.15 and severe AKI (AKIN score 2–3) in septic shock — IV sodium bicarbonate infusion reduces 28-day mortality and need for RRT per the landmark BICAR-ICU trial." },
    { id: "acidosis-toxic-alcohol-osmolar-gap", text: "Severe unexplained high anion gap acidosis with osmolar gap > 10–15 mOsm/kg — suspect toxic alcohol poisoning (Methanol / Ethylene Glycol); administer Fomepizole and consult nephrology immediately for emergency dialysis." },
  ],
};
