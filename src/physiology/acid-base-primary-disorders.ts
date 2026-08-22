import type { PhysiologyConcept } from "@/content-types";

export const acidBasePrimaryDisorders: PhysiologyConcept = {
  "id": "physiology.acid-base-primary-disorders",
  "slug": "acid-base-primary-disorders",
  "title": "Primary Acid-Base Disorders: 4 Pathologies & Compensatory Limits",
  "system": "acid-base",
  "summary": "Systematic physiology of Metabolic Acidosis, Metabolic Alkalosis, Respiratory Acidosis, and Respiratory Alkalosis with exact compensation formulas.",
  "definition": "Acid-base homeostasis is governed by the Henderson-Hasselbalch equation (pH = 6.1 + log([HCO3-] / 0.03 × PaCO2)). Primary disorders originate in either the metabolic component (HCO3-) or the respiratory component (PaCO2), invoking rapid respiratory or slower renal secondary compensation.",
  "mechanism": "The body utilizes chemical buffers (bicarbonate, hemoglobin, intracellular proteins), respiratory minute ventilation adjustment (acting within minutes to hours), and renal tubular proton secretion/bicarbonate reabsorption (acting over 2–5 days) to defend physiological pH (7.35–7.45).\n\nCompensatory rules:\n1. Metabolic Acidosis: For every 1 mEq/L fall in HCO3-, PaCO2 drops by ~1.2 mmHg (Winter's Formula: Expected PaCO2 = 1.5 × [HCO3-] + 8 ± 2).\n2. Metabolic Alkalosis: For every 1 mEq/L rise in HCO3-, PaCO2 rises by ~0.7 mmHg (Expected PaCO2 = 0.7 × [HCO3-] + 21 ± 2).\n3. Acute Respiratory Acidosis: For every 10 mmHg rise in PaCO2, HCO3- rises by 1 mEq/L (cellular buffering). Chronic: HCO3- rises by 3.5–4 mEq/L (renal retention).\n4. Acute Respiratory Alkalosis: For every 10 mmHg fall in PaCO2, HCO3- falls by 2 mEq/L. Chronic: HCO3- falls by 4–5 mEq/L.",
  "clinicalSignificance": "Compensation NEVER overshoots the normal pH (7.40). If the pH is normal with abnormal PaCO2 and HCO3-, or if compensation deviates from calculated formulas, a Mixed Acid-Base Disorder is definitively present.",
  "icuApplications": [
    "Step 1: Check pH (acidemia < 7.35 vs alkalemia > 7.45).",
    "Step 2: Identify primary process (matching PaCO2 or HCO3- direction).",
    "Step 3: Calculate expected compensation using formulas — discrepancy proves a second primary disorder.",
    "Step 4: In metabolic acidosis, ALWAYS calculate albumin-corrected Anion Gap: AG = Na - (Cl + HCO3) + 2.5 × (4.0 - Albumin).",
    "Step 5: If HAGMA is present, calculate Delta-Delta (Delta AG / Delta HCO3) to uncover hidden non-gap acidosis (<1) or metabolic alkalosis (>2)."
  ],
  "relatedConceptIds": [
    "physiology.henderson-hasselbalch",
    "physiology.compensation",
    "physiology.winters-formula",
    "physiology.mixed-disorders"
  ],
  "relatedTopicIds": [
    "acid-base-disorders",
    "metabolic-acidosis"
  ],
  visual: {
    kind: "causal-chain",
    defaultState: "Metabolic Acidosis",
    states: [
        {
            label: "Metabolic Acidosis",
            description: "Primary reduction in serum bicarbonate with compensatory respiratory hyperventilation",
            color: "red",
            chain: [
                {
                    text: "Acid accumulation (ketoacids, lactate, toxins) or bicarbonate loss (diarrhea, RTA)",
                    direction: "up"
                },
                {
                    text: "Serum [HCO3-] falls below normal (<22 mEq/L)",
                    direction: "down",
                    emphasis: true
                },
                {
                    text: "Blood pH drops ([H+] increases) per Henderson-Hasselbalch equation",
                    direction: "down"
                },
                {
                    text: "Peripheral & central chemoreceptors sense acidemia",
                    direction: "up"
                },
                {
                    text: "Respiratory drive stimulates minute ventilation (Kussmaul breathing)",
                    direction: "up"
                },
                {
                    text: "PaCO2 blown down toward expected Winter's compensation: PaCO2 = 1.5[HCO3-] + 8 ± 2",
                    direction: "down",
                    emphasis: true
                },
                {
                    text: "Arterial pH partially buffered toward normal",
                    direction: "up"
                }
            ]
        },
        {
            label: "Respiratory Acidosis",
            description: "Alveolar hypoventilation causing CO2 retention and compensatory renal bicarbonate retention",
            color: "amber",
            chain: [
                {
                    text: "Alveolar hypoventilation (CNS depression, neuromuscular weakness, severe COPD/asthma)",
                    direction: "down"
                },
                {
                    text: "Arterial PaCO2 accumulates acutely (>45 mmHg)",
                    direction: "up",
                    emphasis: true
                },
                {
                    text: "Dissolved CO2 forms carbonic acid, dropping arterial pH below 7.35",
                    direction: "down"
                },
                {
                    text: "Acute cellular buffering: HCO3- rises 1 mEq/L per 10 mmHg acute rise in PaCO2",
                    direction: "up"
                },
                {
                    text: "Chronic renal compensation (after 24–48h): tubular H+ secretion and HCO3- generation increase",
                    direction: "up",
                    emphasis: true
                },
                {
                    text: "Serum HCO3- increases 3.5–4.0 mEq/L per 10 mmHg chronic rise in PaCO2",
                    direction: "up"
                },
                {
                    text: "Arterial pH partially restored toward normal physiologic range",
                    direction: "up"
                }
            ]
        }
    ]
},
};
