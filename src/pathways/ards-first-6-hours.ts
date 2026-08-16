import type { Pathway } from "@/content-types";

export const ardsFirstSixHours: Pathway = {
  id: "ards-first-6-hours",
  slug: "ards-first-6-hours",
  title: "New ARDS Diagnosis — First 6 Hours",
  oneLiner: "From recognition to lung-protective ventilation and severity-driven escalation.",
  startingProblem: "New Hypoxemic Respiratory Failure",
  relatedTopicIds: [
      "ards",
      "hypoxemic-respiratory-failure",
      "mechanical-ventilation",
      "ecmo-fundamentals"
    ],
  flow: {
    id: "recognize",
    label: "Recognize the syndrome",
    kind: "step",
    detail:
      "New or worsening hypoxemic respiratory failure with bilateral infiltrates, within a week of a known risk factor (pneumonia, sepsis, aspiration, transfusion, pancreatitis).",
    topicId: "ards",
    sectionId: "ards.definition",
    children: [
      {
        id: "exclude-cardiac",
        label: "Exclude a cardiac cause",
        kind: "step",
        detail:
          "Confirm the picture isn't fully explained by cardiac failure or fluid overload — clinical exam plus BNP/echocardiography if the risk factor isn't obvious.",
        topicId: "ards",
        sectionId: "ards.diagnosis",
        children: [
          {
            id: "grade-severity",
            label: "Grade severity",
            kind: "step",
            detail:
              "Once PEEP ≥ 5 cmH2O is established, calculate PaO2/FiO2 to classify mild, moderate, or severe — this determines how aggressively to escalate.",
            topicId: "ards",
            sectionId: "ards.severity",
            children: [
              {
                id: "start-protective-ventilation",
                label: "Start lung-protective ventilation",
                kind: "step",
                detail:
                  "Set tidal volume to approximately 6 mL/kg predicted body weight and keep plateau pressure ≤ 30 cmH2O, regardless of severity grade.",
                topicId: "ards",
                sectionId: "ards.management.lung-protective-ventilation",
                children: [
                  {
                    id: "titrate-peep",
                    label: "Titrate PEEP and reassess mechanics",
                    kind: "step",
                    detail:
                      "Favor a higher-PEEP strategy in moderate-to-severe disease; track driving pressure (plateau − PEEP) as you titrate, targeting ≤ 15 cmH2O where achievable.",
                    topicId: "ards",
                    sectionId: "ards.management.peep",
                    children: [
                      {
                        id: "consider-proning",
                        label: "Consider prone positioning",
                        kind: "step",
                        detail:
                          "If PaO2/FiO2 remains < 150 despite an optimized lung-protective strategy, initiate prone positioning early — sessions of at least 16 hours per day.",
                        topicId: "ards",
                        sectionId: "ards.management.prone-positioning",
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
    { id: "refractory-hypoxemia", text: "PaO2/FiO2 < 100 despite an optimized lung-protective strategy — evaluate for rescue therapy (prone positioning, neuromuscular blockade, ECMO referral)." },
    { id: "hemodynamic-instability", text: "New hemodynamic instability after intubation or PEEP escalation — reassess for tension physiology, right heart strain, or volume depletion before continuing to titrate PEEP." },
  ],
};
