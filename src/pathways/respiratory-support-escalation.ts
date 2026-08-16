import type { Pathway } from "@/content-types";

export const respiratorySupportEscalation: Pathway = {
  id: "respiratory-support-escalation",
  slug: "respiratory-support-escalation",
  title: "Noninvasive Respiratory Support Escalation & Intubation Decision",
  oneLiner: "From initial noninvasive modality selection to ROX index tracking and timely intubation triggers.",
  startingProblem: "Acute Respiratory Distress (Hypoxemic or Hypercapnic)",
  relatedTopicIds: [
      "respiratory-failure-basics",
      "hypoxemic-respiratory-failure",
      "hypercapnic-respiratory-failure",
      "ards",
      "copd-exacerbation",
      "asthma",
      "pneumonia",
      "mechanical-ventilation"
    ],
  flow: {
    id: "classify-respiratory-phenotype",
    label: "Classify primary respiratory failure phenotype",
    kind: "branch",
    role: "decision",
    detail: "Differentiate Hypoxemic Respiratory Failure (de-novo ARDS, COVID-19, pneumonia) from Hypercapnic / Cardiogenic Failure (COPD exacerbation, acute cardiogenic pulmonary edema).",
    children: [
      {
        id: "hypoxemic-hfnc-path",
        label: "Hypoxemic Failure: Initiate High-Flow Nasal Cannula (HFNC)",
        kind: "step",
        role: "intervention",
        detail: "Start flow 40–60 L/min, temp 37°C, FiO2 titrated for SpO2 92–96%. Improves anatomical dead space clearance and provides modest PEEP (3–5 cmH2O).",
        topicId: "hypoxemic-respiratory-failure",
        children: [
          {
            id: "track-rox-index",
            label: "Calculate & track ROX Index at 2, 6, and 12 hours",
            kind: "branch",
            role: "reassessment",
            detail: "ROX = (SpO2 / FiO2) / Respiratory Rate. Standardized metric to predict HFNC success vs risk of delayed intubation.",
            children: [
              {
                id: "rox-success",
                label: "ROX >= 4.88: Success, continue HFNC and gradually wean",
                kind: "step",
                role: "reassessment",
                detail: "Wean FiO2 first until <= 0.40, then wean flow in increments of 5–10 L/min as work of breathing stabilizes.",
              },
              {
                id: "rox-failure",
                label: "ROX < 3.85 or persistent severe tachypnea/accessory muscle use",
                kind: "step",
                role: "warning",
                detail: "High failure risk: proceed with timely endotracheal intubation. Avoid prolonged HFNC trials when exhaustion is imminent.",
                topicId: "mechanical-ventilation",
              },
            ],
          },
        ],
      },
      {
        id: "hypercapnic-niv-path",
        label: "Hypercapnic / Cardiogenic: Initiate Noninvasive BiPAP / CPAP",
        kind: "step",
        role: "intervention",
        detail: "In COPD: IPAP 10–12 / EPAP 4–5 cmH2O titrated for PaCO2 reduction. In Cardiogenic Edema: CPAP 8–10 cmH2O or BiPAP for afterload reduction.",
        topicId: "hypercapnic-respiratory-failure",
        children: [
          {
            id: "reassess-abg-1-2-hours",
            label: "Reassess ABG and clinical comfort at 1–2 hours",
            kind: "branch",
            role: "reassessment",
            detail: "Check for pH improvement (>7.30), PaCO2 reduction, and decreased dyspnea score.",
            children: [
              {
                id: "niv-response-good",
                label: "pH improving, PaCO2 falling, patient comfortable",
                kind: "step",
                role: "reassessment",
                detail: "Continue NIV with periodic rest breaks, optimizing medical therapy (bronchodilators, steroids, or diuresis).",
              },
              {
                id: "niv-failure-criteria",
                label: "Worsening acidemia, hemodynamic instability, or loss of airway reflexes",
                kind: "step",
                role: "warning",
                detail: "NIV failure: perform prompt endotracheal intubation. Do not delay airway management.",
                topicId: "mechanical-ventilation",
              },
            ],
          },
        ],
      },
    ],
  },
  redFlags: [
    { id: "support-delayed-intubation-mortality", text: "Continuing failing noninvasive support despite clinical exhaustion leads to emergency 'crash' intubation and significantly increased mortality — intubate electively when failure thresholds are met." },
    { id: "support-facial-trauma-vomiting", text: "Active vomiting, copious secretions, or inability to clear airway are absolute contraindications to NIV — intubate immediately." },
  ],
};
