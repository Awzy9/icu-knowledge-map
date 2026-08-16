import type { Pathway } from "@/content-types";

export const acuteHypoxemia: Pathway = {
  id: "acute-hypoxemia",
  slug: "acute-hypoxemia",
  title: "Acute Hypoxemia",
  oneLiner: "From confirming true hypoxemia to identifying the underlying mechanism.",
  startingProblem: "Hypoxemia",
  relatedTopicIds: [
      "hypoxemic-respiratory-failure",
      "ards",
      "cardiogenic-pulmonary-edema",
      "respiratory-failure-basics",
      "pulmonary-embolism",
      "pneumonia",
      "pneumothorax"
    ],
  flow: {
    id: "confirm-oxygenation-problem",
    label: "Confirm oxygenation problem",
    kind: "step",
    detail: "Correlate pulse oximetry with an arterial blood gas — poor perfusion, motion, and nail polish are common sources of a falsely low SpO2.",
    children: [
      {
        id: "assess-airway",
        label: "Assess airway",
        kind: "step",
        detail: "Confirm patency; look for obstruction, stridor, or excessive secretions that would explain hypoxemia before looking further.",
        children: [
          {
            id: "assess-ventilation",
            label: "Assess ventilation",
            kind: "step",
            detail: "Respiratory rate, depth, and work of breathing; check PaCO2 — hypoventilation raises it, other mechanisms typically don't.",
            children: [
              {
                id: "identify-mechanism",
                label: "Identify mechanism",
                kind: "step",
                detail: "Use the A–a gradient and the response to supplemental oxygen to narrow the differential to one of five mechanisms.",
                children: [
                  {
                    id: "shunt",
                    label: "Shunt",
                    kind: "branch",
                    detail: "Perfused but unventilated alveoli. Hypoxemia responds poorly to supplemental oxygen alone.",
                    children: [
                      { id: "shunt-ards", label: "ARDS", kind: "branch", topicId: "ards" },
                      { id: "shunt-cardiogenic-edema", label: "Cardiogenic pulmonary edema", kind: "branch", topicId: "cardiogenic-pulmonary-edema" },
                      { id: "shunt-pneumonia", label: "Lobar pneumonia / atelectasis", kind: "branch" },
                    ],
                  },
                  {
                    id: "vq-mismatch",
                    label: "V/Q mismatch",
                    kind: "branch",
                    detail: "Regional imbalance between ventilation and perfusion. Usually improves with supplemental oxygen, unlike shunt.",
                    children: [
                      { id: "vq-pe", label: "Pulmonary embolism", kind: "branch" },
                      { id: "vq-copd", label: "COPD exacerbation", kind: "branch" },
                    ],
                  },
                  {
                    id: "hypoventilation",
                    label: "Hypoventilation",
                    kind: "branch",
                    detail: "Reduced minute ventilation raises PaCO2 and, by the alveolar gas equation, lowers PaO2 — the A–a gradient stays normal.",
                    children: [
                      { id: "hypoventilation-sedation", label: "Opioid / sedative excess", kind: "branch" },
                      { id: "hypoventilation-neuromuscular", label: "Neuromuscular weakness", kind: "branch" },
                    ],
                  },
                  {
                    id: "diffusion-limitation",
                    label: "Diffusion limitation",
                    kind: "branch",
                    detail: "Thickened or reduced alveolar-capillary membrane; usually only manifests as hypoxemia during exertion or high flow states.",
                    children: [
                      { id: "diffusion-ild", label: "Interstitial lung disease", kind: "branch" },
                      { id: "diffusion-emphysema", label: "Severe emphysema", kind: "branch" },
                    ],
                  },
                  {
                    id: "low-inspired-oxygen",
                    label: "Low inspired oxygen",
                    kind: "branch",
                    detail: "Rare in the ICU but easy to fix — always confirm delivered FiO2 before working up an intrinsic pulmonary cause.",
                    children: [
                      { id: "low-fio2-circuit", label: "Ventilator circuit / delivery failure", kind: "branch" },
                      { id: "low-fio2-altitude", label: "High altitude", kind: "branch" },
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
    { id: "hypoxemia-work-of-breathing", text: "SpO2 < 90% despite high-flow supplemental oxygen with increasing work of breathing — prepare for advanced airway management rather than continuing to escalate oxygen alone." },
    { id: "hypoxemia-unilateral-absent-sounds", text: "New unilateral absent breath sounds with hypotension — assess for tension pneumothorax immediately; do not wait for imaging." },
  ],
  references: [
    { kind: "guideline", id: "ards-guideline-low-tidal-volume", relevance: "Once shunt physiology is confirmed as ARDS, ventilation strategy follows this recommendation." },
  ],
};
