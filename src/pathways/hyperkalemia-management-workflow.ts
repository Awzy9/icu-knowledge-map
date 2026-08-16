import type { Pathway } from "@/content-types";

export const hyperkalemiaManagementWorkflow: Pathway = {
  id: "hyperkalemia-management-workflow",
  slug: "hyperkalemia-management-workflow",
  title: "Severe Hyperkalemia Emergency Management",
  oneLiner: "From emergent cardiac membrane stabilization to intracellular shifting, elimination, and dialysis triggers.",
  startingProblem: "Severe Hyperkalemia (K+ > 6.0 mEq/L) / ECG Instability",
  relatedTopicIds: ["hyperkalemia", "aki", "crrt"],
  flow: {
    id: "immediate-ecg-membrane-check",
    label: "Obtain immediate 12-lead ECG & continuous telemetry",
    kind: "step",
    role: "assessment",
    detail: "Check for peaked T waves, PR prolongation, loss of P waves, QRS widening (>120 ms), and sinusoidal pattern. ECG changes define acute cardiac emergency.",
    topicId: "hyperkalemia",
    children: [
      {
        id: "membrane-stabilization-step",
        label: "Phase 1: Stabilize cardiac membrane immediately (if ECG changes or K+ > 6.5)",
        kind: "step",
        role: "intervention",
        detail: "Administer IV Calcium Chloride 10% (1 g = 10 mL via central/reliable line) or IV Calcium Gluconate 10% (3 g = 30 mL peripheral). Onset in 1–3 min; repeat in 5 min if ECG changes persist.",
        children: [
          {
            id: "intracellular-shifting-step",
            label: "Phase 2: Shift potassium intracellularly (Rapid temporary lowering)",
            kind: "step",
            role: "intervention",
            detail: "Give Regular Insulin 10 Units IV with 50 mL D50W (25 g glucose; check fingerstick glucose q1h). Add Nebulized Albuterol 10–20 mg (beta-2 receptor activation). Lowers K+ by 0.5–1.2 mEq/L within 30–60 min.",
            children: [
              {
                id: "potassium-elimination-step",
                label: "Phase 3: Eliminate potassium from the total body",
                kind: "branch",
                role: "decision",
                detail: "Shifting is temporary (rebound occurs at 2–4 hours). Total body excretion must be initiated simultaneously.",
                children: [
                  {
                    id: "renal-elimination-diuretics",
                    label: "Preserved Urine Output: IV Loop Diuretics (Furosemide 40–80 mg)",
                    kind: "step",
                    role: "intervention",
                    detail: "Promotes kaliuresis in distal nephron. Maintain intravascular volume with balanced crystalloid if not fluid overloaded.",
                  },
                  {
                    id: "gi-elimination-binders",
                    label: "Oral Binders: Sodium Zirconium Cyclosilicate (Lokelma 10 g) or Patiromer",
                    kind: "step",
                    role: "intervention",
                    detail: "Binds potassium in GI tract. Avoid Sodium Polystyrene Sulfonate (Kayexalate) in sorbitol due to bowel necrosis risk.",
                  },
                  {
                    id: "urgent-hemodialysis-trigger",
                    label: "Oliguric AKI / Refractory Hyperkalemia: Urgent Hemodialysis / CRRT",
                    kind: "step",
                    role: "warning",
                    detail: "Most rapid and definitive method for total body potassium clearance (clears 25–40 mEq/h). Trigger immediately if medical therapy fails.",
                    topicId: "crrt",
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
    { id: "hyperk-sine-wave-arrest", text: "Sine wave ECG pattern or severe bradyarrhythmia — indicates imminent cardiac arrest; give immediate IV calcium chloride, push D50 + insulin, and prepare for emergency cardiac pacing/CPR." },
    { id: "hyperk-hypoglycemia-insulin", text: "Severe delayed hypoglycemia following IV insulin administration — monitor fingerstick blood glucose every hour for at least 4–6 hours post-treatment." },
  ],
};
