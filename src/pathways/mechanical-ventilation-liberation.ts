import type { Pathway } from "@/content-types";

export const mechanicalVentilationLiberation: Pathway = {
  id: "mechanical-ventilation-liberation",
  slug: "mechanical-ventilation-liberation",
  title: "Mechanical Ventilation Liberation & Weaning",
  oneLiner: "From readiness screening and spontaneous breathing trials to extubation and post-extubation support.",
  startingProblem: "Resolving Respiratory Failure / Weaning Candidate",
  relatedTopicIds: ["mechanical-ventilation", "ards", "respiratory-failure-basics"],
  flow: {
    id: "weaning-readiness-screen",
    label: "Perform daily weaning readiness screen",
    kind: "step",
    role: "assessment",
    detail: "Criteria: primary cause improving, PaO2/FiO2 >= 150 with PEEP <= 8 cmH2O and FiO2 <= 0.40, hemodynamic stability without escalating vasopressors, and spontaneous respiratory drive.",
    children: [
      {
        id: "spontaneous-awakening-trial",
        label: "Conduct Spontaneous Awakening Trial (SAT)",
        kind: "step",
        role: "intervention",
        detail: "Stop continuous sedatives and opioids (unless active pain). Patient passes if they open eyes, follow simple commands, or tolerate sedation hold without severe agitation.",
        topicId: "mechanical-ventilation",
        children: [
          {
            id: "conduct-sbt",
            label: "Initiate Spontaneous Breathing Trial (SBT) for 30–120 minutes",
            kind: "branch",
            role: "decision",
            detail: "Use Low Pressure Support (PS 5–8 cmH2O / PEEP 0–5) or T-piece trial. Monitor respiratory rate, SpO2, heart rate, and patient comfort.",
            children: [
              {
                id: "sbt-pass",
                label: "SBT Passed: Assess airway patency & secretion management",
                kind: "step",
                role: "assessment",
                detail: "Check RSBI (f/Vt < 105), strong cough on suctioning, minimal secretions (<1-2 suctions/2h), and positive cuff leak test in high-risk patients.",
                children: [
                  {
                    id: "proceed-extubation",
                    label: "Proceed with planned extubation",
                    kind: "step",
                    role: "intervention",
                    detail: "Suction oropharynx and ETT, deflate cuff during inspiration, remove tube smoothly, and administer supplemental oxygen immediately.",
                    children: [
                      {
                        id: "post-extubation-support",
                        label: "Select post-extubation support strategy",
                        kind: "branch",
                        role: "intervention",
                        detail: "Standard nasal cannula for low risk; proactive High-Flow Nasal Cannula (HFNC) or NIV for high-risk patients (age >65, COPD, CHF, hypercapnia at SBT end).",
                        children: [
                          {
                            id: "post-ext-stable",
                            label: "Stable: Monitor work of breathing & gas exchange",
                            kind: "step",
                            role: "reassessment",
                            detail: "Reassess vitals, respiratory rate, and ABG at 1–2 hours post-extubation. Initiate early mobilization.",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                id: "sbt-failure",
                label: "SBT Failed: Return to resting ventilator support",
                kind: "step",
                role: "warning",
                detail: "Identify failure mechanism: diaphragmatic fatigue, cardiac ischemia / fluid overload, bronchospasm, excessive secretions, or anxiety. Rest for 24h before re-attempting.",
                topicId: "mechanical-ventilation",
              },
            ],
          },
        ],
      },
    ],
  },
  redFlags: [
    { id: "weaning-post-extubation-stridor", text: "New post-extubation laryngeal stridor — administer nebulized racemic epinephrine and IV dexamethasone immediately; prepare for re-intubation if work of breathing escalates." },
    { id: "weaning-delayed-extubation-failure", text: "Extubation failure occurring >24 hours post-extubation is associated with higher mortality — re-intubate promptly rather than prolonging rescue noninvasive trials." },
  ],
};
