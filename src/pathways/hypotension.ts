import type { Pathway } from "@/content-types";

export const hypotension: Pathway = {
  id: "hypotension",
  slug: "hypotension",
  title: "Hypotension",
  oneLiner: "From confirming true hypotension to recognizing shock and its likely category.",
  startingProblem: "Hypotension",
  relatedTopicIds: [
      "shock",
      "septic-shock",
      "cardiogenic-shock",
      "obstructive-shock",
      "rv-failure",
      "pulmonary-hypertension",
      "acute-heart-failure"
    ],
  flow: {
    id: "confirm-true-hypotension",
    label: "Confirm true hypotension",
    kind: "step",
    detail: "Check cuff size and positioning, and repeat the measurement — an arterial line reading is more reliable if one is already in place.",
    children: [
      {
        id: "assess-perfusion",
        label: "Assess perfusion",
        kind: "step",
        detail: "Capillary refill, skin mottling, mentation, urine output, and lactate — these determine whether this is shock, not the blood pressure number alone.",
        children: [
          {
            id: "assess-volume-and-heart",
            label: "Assess volume status and cardiac function",
            kind: "step",
            detail: "Jugular venous pressure, lung exam for congestion, and a passive leg raise or bedside ultrasound where available.",
            children: [
              {
                id: "identify-shock-category",
                label: "Identify likely category",
                kind: "step",
                detail: "The physical exam and point-of-care findings above usually place the picture into one of four overlapping categories.",
                children: [
                  {
                    id: "distributive",
                    label: "Distributive",
                    kind: "branch",
                    detail: "Warm extremities, wide pulse pressure — vasodilation is the primary problem.",
                    topicId: "shock",
                    children: [{ id: "distributive-septic", label: "Septic shock", kind: "branch", topicId: "sepsis" }],
                  },
                  {
                    id: "cardiogenic",
                    label: "Cardiogenic",
                    kind: "branch",
                    detail: "Cool extremities, elevated JVP, pulmonary congestion — the heart itself is failing to generate adequate output.",
                    topicId: "shock",
                    children: [{ id: "cardiogenic-mi", label: "Acute MI / decompensated heart failure", kind: "branch" }],
                  },
                  {
                    id: "hypovolemic",
                    label: "Hypovolemic",
                    kind: "branch",
                    detail: "Flat neck veins, dry mucous membranes, or an obvious source of fluid or blood loss.",
                    topicId: "shock",
                    children: [{ id: "hypovolemic-bleeding", label: "Hemorrhage", kind: "branch", topicId: "bleeding" }],
                  },
                  {
                    id: "obstructive",
                    label: "Obstructive",
                    kind: "branch",
                    detail: "Elevated JVP without pulmonary congestion — something is mechanically preventing filling or output.",
                    topicId: "shock",
                    children: [{ id: "obstructive-causes", label: "Tension pneumothorax / tamponade / massive PE", kind: "branch" }],
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
    { id: "hypotension-organ-dysfunction", text: "SBP < 90 mmHg or MAP < 65 mmHg with new confusion or oliguria — treat as shock and escalate immediately rather than waiting for a definitive diagnosis." },
    { id: "hypotension-cardiac-signs", text: "Hypotension with a new murmur, chest pain, or ischemic ECG changes — obtain an urgent ECG and echocardiogram to evaluate for cardiogenic shock." },
  ],
};
