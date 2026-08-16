import type { Pathway } from "@/content-types";

export const shock: Pathway = {
  id: "shock",
  slug: "shock",
  title: "Shock",
  oneLiner: "Initial resuscitation and classification once shock is established.",
  startingProblem: "Confirmed Shock",
  relatedTopicIds: [
      "shock",
      "septic-shock",
      "cardiogenic-shock",
      "obstructive-shock",
      "rv-failure",
      "sepsis",
      "bleeding"
    ],
  flow: {
    id: "confirm-shock-physiology",
    label: "Confirm shock physiology",
    kind: "step",
    detail: "Hypotension or normotensive hypoperfusion — elevated lactate, altered mentation, oliguria, cool and mottled skin.",
    children: [
      {
        id: "establish-access-and-labs",
        label: "Establish access and send initial labs",
        kind: "step",
        detail: "Two large-bore IVs; lactate, CBC, chemistry, coagulation panel, and type & screen.",
        children: [
          {
            id: "assess-volume-responsiveness",
            label: "Assess volume responsiveness",
            kind: "step",
            detail: "A passive leg raise or fluid challenge with a dynamic measure, where feasible, before committing to large-volume fluid resuscitation.",
            children: [
              {
                id: "classify-shock-type",
                label: "Classify shock type",
                kind: "step",
                detail: "The four categories are not mutually exclusive — critically ill patients often have more than one mechanism at once.",
                children: [
                  {
                    id: "shock-distributive",
                    label: "Distributive (e.g. septic)",
                    kind: "branch",
                    detail: "Vasodilation with preserved or increased cardiac output; sepsis is the most common cause in the ICU.",
                    topicId: "sepsis",
                  },
                  {
                    id: "shock-cardiogenic",
                    label: "Cardiogenic",
                    kind: "branch",
                    detail: "Acute MI, decompensated heart failure, or a new arrhythmia — pump failure with elevated filling pressures.",
                  },
                  {
                    id: "shock-hypovolemic",
                    label: "Hypovolemic",
                    kind: "branch",
                    detail: "Hemorrhagic or non-hemorrhagic volume loss outstripping intake.",
                    topicId: "bleeding",
                  },
                  {
                    id: "shock-obstructive",
                    label: "Obstructive",
                    kind: "branch",
                    detail: "Tension pneumothorax, cardiac tamponade, or massive pulmonary embolism physically limiting filling or output.",
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
    { id: "shock-neuro-exam", text: "Shock with a fixed, dilated pupil or an asymmetric neurologic exam — consider a primary neurologic catastrophe rather than a purely hemodynamic cause." },
    { id: "shock-fluid-refractory", text: "No response to an adequate fluid bolus and vasopressor initiation — reassess the working diagnosis rather than continuing to escalate fluids alone." },
  ],
};
