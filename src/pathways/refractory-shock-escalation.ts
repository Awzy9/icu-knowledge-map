import type { Pathway } from "@/content-types";

export const refractoryShockEscalation: Pathway = {
  id: "refractory-shock-escalation",
  slug: "refractory-shock-escalation",
  title: "Refractory Shock Support Escalation",
  oneLiner: "From multi-vasopressor failure to rescue non-adrenergic agents and mechanical circulatory support.",
  startingProblem: "Refractory Shock (Norepinephrine > 0.5 mcg/kg/min + Vasopressin)",
  relatedTopicIds: [
      "shock",
      "cardiogenic-shock",
      "septic-shock",
      "rv-failure",
      "obstructive-shock",
      "ecmo-fundamentals",
      "pulmonary-hypertension",
      "cardiac-arrest-post-arrest"
    ],
  flow: {
    id: "confirm-refractory-shock-state",
    label: "Confirm refractory shock: Multi-agent dependence with persistent hypoperfusion",
    kind: "step",
    role: "assessment",
    detail: "Criteria: Norepinephrine >0.5 mcg/kg/min + Vasopressin + Steroids with rising lactate (>4 mmol/L) or worsening organ failure.",
    topicId: "shock",
    children: [
      {
        id: "exclude-mechanical-obstruction",
        label: "Emergency bedside ultrasound: Exclude mechanical & surgical causes",
        kind: "branch",
        role: "decision",
        detail: "Exclude pericardial tamponade, massive pulmonary embolism / acute cor pulmonale, tension pneumothorax, occult internal hemorrhage, and severe valvular dysfunction.",
        topicId: "cardiogenic-shock",
        children: [
          {
            id: "refractory-vasoplegia-pathway",
            label: "Hyperdynamic Vasoplegic Shock (High CO, Low SVR)",
            kind: "step",
            role: "intervention",
            detail: "Initiate non-adrenergic rescue therapies: Angiotensin II (20–80 ng/kg/min) or Methylene Blue (1–2 mg/kg IV bolus over 20 min followed by infusion).",
            children: [
              {
                id: "reassess-perfusion-targets",
                label: "Reassess metabolic & microvascular endpoints every 1–2 hours",
                kind: "step",
                role: "reassessment",
                detail: "Track arterial lactate clearance, capillary refill time, central venous oxygen saturation (ScvO2 > 70%), and urine output.",
              },
            ],
          },
          {
            id: "refractory-cardiogenic-failure",
            label: "Severe Pump Failure (Low CO, Elevated Filling Pressures)",
            kind: "step",
            role: "intervention",
            detail: "Evaluate for Mechanical Circulatory Support (MCS): VA-ECMO (Veno-Arterial ECMO) for biventricular failure/cardiac arrest, Impella or IABP for isolated LV failure.",
            children: [
              {
                id: "mcs-cannulation-evaluation",
                label: "Emergent ECMO / Cardiothoracic Surgical Consultation",
                kind: "step",
                role: "intervention",
                detail: "Assess patient age, neurological status, reversible etiology (fulminant myocarditis, acute MI, cardiotomy shock), and vascular anatomy.",
              },
            ],
          },
        ],
      },
    ],
  },
  redFlags: [
    { id: "refractory-unrecognized-tamponade", text: "Refractory shock with elevated JVP and pulsus paradoxus — perform immediate subxiphoid pericardiocentesis if tamponade physiology is confirmed on ultrasound." },
    { id: "refractory-limb-ischemia-ecmo", text: "Distal limb ischemia following VA-ECMO femoral arterial cannulation — place antegrade distal perfusion cannula immediately to avoid leg amputation." },
  ],
};
