import type { Pathway } from "@/content-types";

export const mechanicalVentilationInitiation: Pathway = {
  id: "mechanical-ventilation-initiation",
  slug: "mechanical-ventilation-initiation",
  title: "Mechanical Ventilation Initiation Workflow",
  oneLiner: "From post-intubation verification and lung-protective settings to mechanics optimization.",
  startingProblem: "Post-Intubation / Invasive Ventilation Required",
  relatedTopicIds: ["mechanical-ventilation", "ards", "respiratory-failure-basics"],
  flow: {
    id: "verify-airway-position",
    label: "Verify endotracheal tube position & cuff seal",
    kind: "step",
    role: "assessment",
    detail: "Confirm bilateral breath sounds, end-tidal CO2 detection, chest radiography (tip 3–5 cm above carina), and cuff pressure 20–30 cmH2O.",
    children: [
      {
        id: "select-primary-mode",
        label: "Select primary ventilation mode",
        kind: "branch",
        role: "decision",
        detail: "Choose Volume Assist-Control (precise Vt and lung protection) or Pressure Assist-Control (peak pressure limitation) based on lung pathology.",
        children: [
          {
            id: "set-pbw-tidal-volume",
            label: "Calculate predicted body weight & set Vt 6–8 mL/kg",
            kind: "step",
            role: "intervention",
            detail: "Use height-based PBW equation. In ARDS or stiff lungs, target 6 mL/kg PBW immediately to prevent volutrauma.",
            topicId: "mechanical-ventilation",
            children: [
              {
                id: "set-initial-peep-fio2",
                label: "Set initial PEEP (5–8 cmH2O) and FiO2 (1.0 titrated down)",
                kind: "step",
                role: "intervention",
                detail: "Titrate FiO2 rapidly to achieve SpO2 92–96% (88–92% in ARDS/COPD) to minimize hyperoxic lung injury.",
                children: [
                  {
                    id: "measure-respiratory-mechanics",
                    label: "Perform inspiratory hold: measure Pplat & Driving Pressure",
                    kind: "step",
                    role: "assessment",
                    detail: "Target Plateau Pressure <= 30 cmH2O and Driving Pressure (Pplat - PEEP) <= 15 cmH2O.",
                    calculatorId: "driving-pressure",
                    children: [
                      {
                        id: "check-abg-30-min",
                        label: "Obtain arterial blood gas at 30 minutes",
                        kind: "step",
                        role: "reassessment",
                        detail: "Evaluate pH, PaCO2, and PaO2/FiO2 ratio. Adjust respiratory rate for pH 7.30–7.45 (permissive hypercapnia in ARDS/asthma).",
                        children: [
                          {
                            id: "mechanics-acceptable",
                            label: "Mechanics & gas exchange acceptable",
                            kind: "branch",
                            role: "reassessment",
                            detail: "Maintain lung-protective settings, synchronize sedation to RASS -1 to 0, and assess daily for liberation readiness.",
                          },
                          {
                            id: "high-airway-pressures",
                            label: "Pplat > 30 or Driving Pressure > 15 cmH2O",
                            kind: "branch",
                            role: "warning",
                            detail: "Escalate lung protection: reduce Vt to 4–5 mL/kg PBW, optimize PEEP, evaluate chest wall compliance, or consider neuromuscular blockade.",
                            topicId: "ards",
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
    { id: "vent-init-pneumothorax", text: "Sudden high peak and plateau pressure rise with hemodynamic instability — evaluate immediately for tension pneumothorax or mainstem intubation." },
    { id: "vent-init-severe-auto-peep", text: "Hypotension following intubation in obstructive lung disease — disconnect ventilator circuit briefly to allow complete exhalation and exclude dynamic hyperinflation (Auto-PEEP)." },
  ],
  references: [
    { kind: "trial", id: "ards-arma", relevance: "Landmark trial establishing 6 mL/kg PBW lung-protective ventilation superiority over traditional 12 mL/kg volumes." },
  ],
};
