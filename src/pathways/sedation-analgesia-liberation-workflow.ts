import type { Pathway } from "@/content-types";

export const sedationAnalgesiaLiberationWorkflow: Pathway = {
  id: "sedation-analgesia-liberation-workflow",
  slug: "sedation-analgesia-liberation-workflow",
  title: "ICU Sedation Titration & ABCDEF Liberation",
  oneLiner: "From 'analgesia-first' multimodal pain control and light sedation targeting to daily SAT/SBT coordination, delirium screening, and early mobility.",
  startingProblem: "Intubated ICU Patient Requiring Sedation & Analgesia",
  relatedTopicIds: [
      "icu-sedation-delirium",
      "altered-consciousness",
      "mechanical-ventilation",
      "respiratory-failure-basics"
    ],
  flow: {
    id: "assess-and-treat-pain-first",
    label: "Adopt 'Analgesia-First' approach: Assess pain using validated behavioral scales",
    kind: "step",
    role: "intervention",
    detail: "Use Critical-Care Pain Observation Tool (CPOT) or Behavioral Pain Scale (BPS). Treat pain prior to escalating sedatives with short-acting opioids (Fentanyl / Hydromorphone) and multimodal non-opioid adjuncts.",
    topicId: "altered-consciousness",
    children: [
      {
        id: "target-light-sedation-rass",
        label: "Set target to Light Sedation: Richmond Agitation-Sedation Scale (RASS -1 to 0)",
        kind: "step",
        role: "intervention",
        detail: "Avoid deep sedation unless specific clinical indication exists (severe ARDS with ventilator dyssynchrony, elevated ICP, therapeutic hypothermia, status epilepticus).",
        children: [
          {
            id: "select-sedative-agent",
            label: "Select non-benzodiazepine sedative: Dexmedetomidine or Propofol",
            kind: "branch",
            role: "decision",
            detail: "PADIS guidelines strongly recommend non-benzodiazepines over Midazolam/Lorazepam to reduce ventilator duration, ICU length of stay, and delirium incidence.",
            children: [
              {
                id: "daily-sat-sbt-coordination",
                label: "Execute daily paired Spontaneous Awakening (SAT) & Breathing (SBT) Trials",
                kind: "step",
                role: "intervention",
                detail: "Every morning, turn off sedative and opioid infusions. When patient passes SAT, proceed immediately to spontaneous breathing trial (the 'Wake Up and Breathe' protocol).",
                topicId: "mechanical-ventilation",
                children: [
                  {
                    id: "delirium-screening-cam-icu",
                    label: "Screen for Delirium twice daily using CAM-ICU or ICDSC",
                    kind: "branch",
                    role: "reassessment",
                    detail: "Delirium increases mortality and long-term cognitive impairment. Identify underlying triggers: hypoxemia, sepsis, electrolyte derangement, anticholinergic medications.",
                    children: [
                      {
                        id: "delirium-positive-non-pharm",
                        label: "CAM-ICU Positive: Non-pharmacologic bundle (Mobility, Sleep, Reorientation)",
                        kind: "step",
                        role: "intervention",
                        detail: "Implement ABCDEF bundle: daytime cognitive stimulation, night-time sleep promotion (dim lights, minimize alarms), early physical therapy, and family presence. Avoid routine antipsychotics.",
                      },
                      {
                        id: "delirium-negative-maintain-liberation",
                        label: "CAM-ICU Negative: Continue progressive mobilization & extubation path",
                        kind: "step",
                        role: "reassessment",
                        detail: "Progressive physical mobility protocol (sitting on bed edge, standing, transfer to chair) and plan for early ventilator extubation.",
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
    { id: "sedation-propofol-infusion-syndrome", text: "Propofol Infusion Syndrome (PRIS) — refractory metabolic acidosis, severe hyperkalemia, hypertriglyceridemia, rhabdomyolysis, and acute cardiac failure associated with prolonged high-dose propofol (>4–5 mg/kg/h for >48h); switch sedative immediately." },
    { id: "sedation-benzodiazepine-delirium", text: "Routine use of continuous benzodiazepine infusions is an independent risk factor for prolonged mechanical ventilation and delirium — avoid continuous midazolam/lorazepam infusions." },
  ],
};
