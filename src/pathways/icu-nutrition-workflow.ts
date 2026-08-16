import type { Pathway } from "@/content-types";

export const icuNutritionWorkflow: Pathway = {
  id: "icu-nutrition-workflow",
  slug: "icu-nutrition-workflow",
  title: "ICU Enteral Nutrition & Feeding Escalation",
  oneLiner: "From nutritional risk stratification and early enteral nutrition to feeding intolerance management and parenteral escalation.",
  startingProblem: "Critical Illness Requiring Nutritional Support (>48h Inability to Eat)",
  relatedTopicIds: [
      "critical-illness-nutrition",
      "acute-pancreatitis",
      "acute-liver-failure",
      "burns-critical-care",
      "shock",
      "mechanical-ventilation"
    ],
  flow: {
    id: "screen-nutritional-risk",
    label: "Assess nutritional risk: Calculate NUTRIC score or NRS-2002",
    kind: "step",
    role: "assessment",
    detail: "High nutritional risk (NUTRIC score >= 5, excluding IL-6) identifies patients who benefit most significantly from achieving full protein and energy targets early.",
    topicId: "acute-pancreatitis",
    children: [
      {
        id: "initiate-early-enteral-nutrition",
        label: "Initiate Early Enteral Nutrition (EEN) within 24–48 hours of ICU admission",
        kind: "step",
        role: "intervention",
        detail: "Start gastric continuous enteral feeding at trophic rate (10–20 mL/h) and advance over 24–48h toward calculated targets: Protein 1.2–2.0 g/kg/day, Energy 25–30 kcal/kg/day (or 70% indirect calorimetry).",
        children: [
          {
            id: "monitor-tolerance-grv",
            label: "Monitor feeding tolerance: Do NOT routinely hold feeds for GRV < 500 mL",
            kind: "branch",
            role: "decision",
            detail: "ASPEN/SCCM guidelines recommend against holding enteral nutrition for Gastric Residual Volumes (GRV) < 500 mL in the absence of other signs of intolerance (vomiting, abdominal distension, severe pain).",
            children: [
              {
                id: "enteral-feeding-tolerated",
                label: "Tolerating Enteral Feeds: Advance to goal rate & maintain glycemic targets",
                kind: "step",
                role: "reassessment",
                detail: "Target blood glucose 140–180 mg/dL with IV insulin protocol. Monitor serum phosphate/potassium/magnesium daily to detect and treat refeeding syndrome.",
              },
              {
                id: "feeding-intolerance-management",
                label: "Feeding Intolerance Present (Vomiting, Distension, GRV > 500 mL)",
                kind: "step",
                role: "intervention",
                detail: "1. Add IV prokinetic: Metoclopramide 10 mg IV q6h and/or Erythromycin 250 mg IV q8h; 2. Place post-pyloric feeding tube under electromagnetic/endoscopic guidance; 3. Reduce narcotics where feasible.",
                children: [
                  {
                    id: "parenteral-nutrition-decision",
                    label: "If <60% of goal calories achieved by Day 7: Initiate Supplemental Parenteral Nutrition",
                    kind: "step",
                    role: "intervention",
                    detail: "Initiate central line Total/Supplemental Parenteral Nutrition (TPN) with dedicated lipid/amino acid formulations to bridge protein-calorie deficit in high-risk patients.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  redFlags: [
    { id: "nutrition-refeeding-hypophosphatemia", text: "Refeeding Syndrome — acute profound hypophosphatemia (<1.0–1.5 mg/dL), hypokalemia, and hypomagnesemia occurring 24–72h after initiating feeds in malnourished patients; causes acute diaphragmatic failure, ventricular arrhythmias, and death. Check baseline electrolytes and replace aggressively." },
    { id: "nutrition-nonocclusive-mesenteric-ischemia", text: "High-dose vasopressor shock with increasing lactate and abdominal pain on enteral feeds — hold enteral feeding immediately to prevent non-occlusive mesenteric ischemia (NOMI) during acute hemodynamic instability." },
  ],
};
