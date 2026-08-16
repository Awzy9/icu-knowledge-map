import type { Pathway } from "@/content-types";

export const metabolicAcidosis: Pathway = {
  id: "metabolic-acidosis",
  slug: "metabolic-acidosis",
  title: "Metabolic Acidosis",
  oneLiner: "From confirming the acid-base disorder to the anion-gap differential.",
  startingProblem: "Metabolic Acidosis",
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
    id: "confirm-metabolic-acidosis",
    label: "Confirm metabolic acidosis",
    kind: "step",
    detail: "An arterial or venous blood gas showing low pH with low bicarbonate or an elevated base deficit.",
    children: [
      {
        id: "calculate-anion-gap",
        label: "Calculate the anion gap",
        kind: "step",
        detail: "AG = Na − (Cl + HCO3); correct for a low albumin, which otherwise masks a true elevation.",
        children: [
          {
            id: "check-respiratory-compensation",
            label: "Check for respiratory compensation",
            kind: "step",
            detail: "Winter's formula: expected PaCO2 ≈ 1.5 × HCO3 + 8 ± 2. A PaCO2 outside this range signals a second, independent acid-base disorder.",
            children: [
              {
                id: "high-anion-gap",
                label: "High anion gap",
                kind: "branch",
                detail: "Unmeasured anions are accumulating — think production versus clearance.",
                children: [
                  { id: "hagma-lactic", label: "Lactic acidosis (shock, hypoxia)", kind: "branch", topicId: "shock" },
                  { id: "hagma-dka", label: "Diabetic ketoacidosis", kind: "branch" },
                  { id: "hagma-uremia", label: "Uremia (AKI / ESRD)", kind: "branch", topicId: "aki" },
                  { id: "hagma-toxic-alcohol", label: "Toxic alcohols / salicylates", kind: "branch" },
                ],
              },
              {
                id: "normal-anion-gap",
                label: "Normal anion gap",
                kind: "branch",
                detail: "Bicarbonate is being lost directly, and chloride rises to compensate (\"hyperchloremic\" acidosis).",
                children: [
                  { id: "nagma-gi-loss", label: "GI bicarbonate loss (diarrhea)", kind: "branch" },
                  { id: "nagma-rta", label: "Renal tubular acidosis", kind: "branch" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  redFlags: [
    { id: "acidosis-severe-ph", text: "pH < 7.15 or hemodynamic instability accompanying the acidosis — this is an emergency requiring urgent source control, not bicarbonate correction alone." },
    { id: "acidosis-osmolar-gap", text: "An anion gap acidosis with a markedly elevated osmolar gap — consider toxic alcohol ingestion and involve toxicology/nephrology early for possible dialysis." },
  ],
};
