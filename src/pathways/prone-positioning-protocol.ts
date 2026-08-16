import type { Pathway } from "@/content-types";

export const pronePositioningProtocol: Pathway = {
  id: "prone-positioning-protocol",
  slug: "prone-positioning-protocol",
  title: "Prone Positioning Protocol for Severe ARDS",
  oneLiner: "From eligibility screening and team preparation to 16-hour proning cycles and response evaluation.",
  startingProblem: "Severe ARDS / Refractory Hypoxemia (P/F < 150)",
  relatedTopicIds: [
      "ards",
      "mechanical-ventilation",
      "hypoxemic-respiratory-failure",
      "respiratory-failure-basics"
    ],
  flow: {
    id: "screen-proning-eligibility",
    label: "Verify eligibility: PaO2/FiO2 < 150 on PEEP >= 10 and FiO2 >= 0.6",
    kind: "step",
    role: "assessment",
    detail: "Verify patient is optimized on 6 mL/kg PBW lung-protective ventilation and has persistent PaO2/FiO2 < 150 after at least 12–24h of stabilization.",
    topicId: "ards",
    children: [
      {
        id: "screen-contraindications",
        label: "Screen for absolute & relative contraindications",
        kind: "branch",
        role: "decision",
        detail: "Absolute: unstable spinal fracture, open abdomen, severe facial trauma. Relative: acute elevated ICP, severe refractory shock, second/third trimester pregnancy.",
        children: [
          {
            id: "pre-proning-checklist",
            label: "Execute pre-proning safety checklist",
            kind: "step",
            role: "intervention",
            detail: "Confirm ETT position and secure tape; pause enteral feeding and aspirate stomach; apply eye lubricant and tape eyelids; pre-oxygenate with FiO2 1.0; assemble minimum 4-person team.",
            children: [
              {
                id: "initiate-prone-session",
                label: "Turn patient prone: maintain session for >= 16 consecutive hours",
                kind: "step",
                role: "intervention",
                detail: "Position head in neutral/swimmer's position with alternating head turns q2h; place chest and pelvic padding to allow uninhibited abdominal excursion.",
                children: [
                  {
                    id: "monitor-proning-response",
                    label: "Check ABG & mechanics at 4 hours into proning session",
                    kind: "step",
                    role: "reassessment",
                    detail: "Responders demonstrate PaO2/FiO2 rise >= 20 mmHg or PaCO2 decrease >= 1 mmHg without deterioration in driving pressure.",
                    children: [
                      {
                        id: "turn-supine-evaluation",
                        label: "Turn supine at 16–20 hours: reassess supine PaO2/FiO2 after 4 hours",
                        kind: "branch",
                        role: "reassessment",
                        detail: "Evaluate whether oxygenation improvement persists in the supine position on moderate ventilator settings.",
                        children: [
                          {
                            id: "proning-wean-success",
                            label: "PaO2/FiO2 >= 150 maintained supine on PEEP <= 10 & FiO2 <= 0.6",
                            kind: "step",
                            role: "intervention",
                            detail: "Discontinue daily proning cycles. Continue lung-protective ventilation in the supine position.",
                          },
                          {
                            id: "proning-repeat-cycle",
                            label: "PaO2/FiO2 drops < 150 after 4 hours supine",
                            kind: "step",
                            role: "warning",
                            detail: "Initiate next 16-hour proning cycle. Continue daily cycles until sustained improvement or treatment failure criteria met.",
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
    ],
  },
  redFlags: [
    { id: "prone-accidental-extubation", text: "Accidental extubation in the prone position — place patient supine immediately and perform emergency airway management." },
    { id: "prone-hemodynamic-collapse", text: "Sudden bradycardia or severe hypotension during turning — return patient to supine position immediately and evaluate for line displacement or RV failure." },
  ],
  references: [
    { kind: "trial", id: "ards-proseva", relevance: "The PROSEVA trial proved that early prolonged prone positioning (>=16h/day) reduced 28-day mortality from 32.8% to 16.0% in severe ARDS." },
  ],
};
