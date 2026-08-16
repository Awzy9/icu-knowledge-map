import type { Pathway } from "@/content-types";

export const hemodynamicResuscitationWorkflow: Pathway = {
  id: "hemodynamic-resuscitation-workflow",
  slug: "hemodynamic-resuscitation-workflow",
  title: "Initial Hemodynamic Resuscitation & Shock Bundling",
  oneLiner: "From recognizing hypoperfusion and initial crystalloid bolus to dynamic fluid responsiveness assessment and vasopressor targets.",
  startingProblem: "Hypotension / Undifferentiated Shock / Lactate > 2.0",
  relatedTopicIds: [
      "shock",
      "septic-shock",
      "cardiogenic-shock",
      "rv-failure",
      "acute-coronary-syndrome",
      "acute-heart-failure",
      "burns-critical-care",
      "sepsis",
      "arrhythmias",
      "acute-mesenteric-ischemia",
      "acute-aortic-syndromes"
    ],
  flow: {
    id: "recognize-shock-state",
    label: "Recognize shock: MAP < 65 mmHg, Lactate > 2.0, or tissue hypoperfusion",
    kind: "step",
    role: "assessment",
    detail: "Assess capillary refill time (>3s), mottling score, altered mentation, and urine output (<0.5 mL/kg/h).",
    topicId: "shock",
    children: [
      {
        id: "establish-vascular-access",
        label: "Secure vascular access & draw baseline lactate / blood gas",
        kind: "step",
        role: "intervention",
        detail: "Place 2 large-bore peripheral IVs (16/18G) or central venous line; send repeat lactate at 2–4 hours to calculate clearance.",
        children: [
          {
            id: "initial-fluid-bolus",
            label: "Administer initial balanced crystalloid bolus (30 mL/kg within 3h)",
            kind: "step",
            role: "intervention",
            detail: "Use Plasmalyte or Lactated Ringer's to avoid hyperchloremic metabolic acidosis associated with 0.9% Normal Saline.",
            children: [
              {
                id: "early-norepinephrine",
                label: "Start early peripheral/central Norepinephrine if MAP < 50–55 mmHg",
                kind: "step",
                role: "intervention",
                detail: "Do not wait for complete fluid infusion if profound hypotension threatens coronary or cerebral perfusion.",
                children: [
                  {
                    id: "evaluate-volume-responsiveness",
                    label: "Perform dynamic fluid responsiveness assessment",
                    kind: "branch",
                    role: "decision",
                    detail: "Use Passive Leg Raise (PLR) with continuous cardiac output/VTI measurement, Pulse Pressure Variation (PPV in ventilated sinus rhythm), or stroke volume change.",
                    topicId: "shock",
                    children: [
                      {
                        id: "fluid-responder",
                        label: "Fluid Responsive (Stroke Volume rise >= 10–15%)",
                        kind: "step",
                        role: "intervention",
                        detail: "Administer cautious additional aliquots (250–500 mL) and re-test responsiveness after each bolus. Stop fluids when non-responsive.",
                      },
                      {
                        id: "fluid-non-responder",
                        label: "Non-Responsive: Cease fluid boluses & optimize vasoactive support",
                        kind: "step",
                        role: "reassessment",
                        detail: "Prevent fluid overload, which increases pulmonary edema, AKI, and ICU mortality. Titrate vasopressors to MAP >= 65 mmHg.",
                        topicId: "septic-shock",
                      },
                    ],
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
    { id: "hemo-fluid-overload-mortality", text: "Continuing indiscriminate fluid administration in non-responsive shock causes tissue edema, worsening pulmonary gas exchange, and increased ICU mortality." },
    { id: "hemo-refractory-vasodilation", text: "High-dose vasopressor requirement (Norepinephrine >0.25 mcg/kg/min) requires immediate multi-modal vasopressor initiation (Vasopressin, Steroids) and bedside echocardiography." },
  ],
};
