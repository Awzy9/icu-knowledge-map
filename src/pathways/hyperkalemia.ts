import type { Pathway } from "@/content-types";

export const hyperkalemia: Pathway = {
  id: "hyperkalemia",
  slug: "hyperkalemia",
  title: "Hyperkalemia",
  oneLiner: "From confirming true hyperkalemia to stabilizing, shifting, and eliminating potassium.",
  startingProblem: "Hyperkalemia",
  relatedTopicIds: ["hyperkalemia", "aki"],
  flow: {
    id: "confirm-true-hyperkalemia",
    label: "Confirm true hyperkalemia",
    kind: "step",
    detail: "Exclude a hemolyzed sample or severe leukocytosis/thrombocytosis (pseudohyperkalemia); repeat the level if it's unexpected for the clinical picture.",
    children: [
      {
        id: "ecg-immediately",
        label: "Get an ECG immediately",
        kind: "step",
        detail: "Peaked T waves, PR prolongation, QRS widening, and a sine-wave pattern — ECG changes determine urgency more than the potassium number itself.",
        children: [
          {
            id: "ecg-changes-present",
            label: "ECG changes present",
            kind: "branch",
            detail: "Treat this as a cardiac emergency and move through stabilization, shifting, and elimination in sequence.",
            children: [
              {
                id: "stabilize-myocardium",
                label: "Stabilize the myocardium",
                kind: "step",
                detail: "IV calcium gluconate or calcium chloride antagonizes the membrane effects of hyperkalemia — it does not lower the serum potassium.",
                children: [
                  {
                    id: "shift-potassium",
                    label: "Shift potassium intracellularly",
                    kind: "step",
                    detail: "IV insulin with dextrose, and nebulized/inhaled beta-agonist as an adjunct.",
                    children: [
                      {
                        id: "remove-potassium",
                        label: "Remove potassium from the body",
                        kind: "step",
                        detail: "Loop diuretic if renal function allows, potassium binders, or urgent dialysis if refractory or in the setting of AKI/ESRD.",
                        topicId: "aki",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "no-ecg-changes",
            label: "No ECG changes",
            kind: "branch",
            detail: "Still treat and investigate, but without the same immediate cardiac-stabilization urgency.",
            children: [
              {
                id: "identify-and-treat-cause",
                label: "Identify and treat the cause",
                kind: "step",
                detail: "Review medications (ACE inhibitors/ARBs, potassium-sparing diuretics, NSAIDs) and assess renal function.",
                topicId: "aki",
              },
            ],
          },
        ],
      },
    ],
  },
  redFlags: [
    { id: "hyperkalemia-sine-wave", text: "A sine-wave ECG pattern or hemodynamic instability — give calcium and escalate immediately; do not wait for a repeat potassium level." },
    { id: "hyperkalemia-refractory", text: "Hyperkalemia refractory to shifting agents in a patient with AKI or ESRD — arrange urgent dialysis rather than repeating medical therapy." },
  ],
};
