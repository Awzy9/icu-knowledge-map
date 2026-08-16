import type { PhysiologyConcept } from "@/content-types";

export const plateauPressure: PhysiologyConcept = {
  id: "physiology.plateau-pressure",
  slug: "plateau-pressure",
  title: "Plateau Pressure",
  system: "respiratory",
  summary: "The pressure needed to hold the lung and chest wall at end-inspiratory volume, once flow has stopped.",
  definition:
    "Plateau pressure (Pplat) is the airway pressure measured during a brief end-inspiratory pause, once flow has ceased. Because there's no flow, it reflects only the elastic recoil of the lung and chest wall — not airway resistance — making it a proxy for the stress the lung is under at peak inflation.",
  mechanism:
    "During active inspiratory flow, airway pressure includes both the resistive pressure needed to drive gas through the airways and the elastic pressure needed to inflate the lung. Pausing flow removes the resistive component, leaving only elastic recoil — Pplat. A gap between peak pressure and Pplat therefore reflects resistance, while Pplat itself reflects compliance and how much lung is available to be inflated at the set tidal volume.",
  clinicalSignificance:
    "Keeping plateau pressure ≤ 30 cmH2O is one of the two central targets (alongside low tidal volume) of lung-protective ventilation, because pressures above this threshold are associated with a substantially higher risk of ventilator-induced lung injury.",
  icuApplications: [
    "Checked after every tidal volume or PEEP change in ARDS to confirm the strategy stays within the lung-protective target.",
    "A Pplat that rises unexpectedly at a fixed tidal volume points to falling compliance and prompts a search for a new problem (worsening edema, abdominal distension, pneumothorax).",
    "Used together with PEEP to calculate driving pressure, which many clinicians now treat as the more informative single number.",
  ],
  relatedConceptIds: ["physiology.driving-pressure", "physiology.compliance", "physiology.transpulmonary-pressure"],
  relatedTopicIds: ["ards", "mechanical-ventilation"],
  references: [{ kind: "guideline", id: "ards-guideline-low-tidal-volume", relevance: "This guideline's core recommendation targets plateau pressure ≤ 30 cmH2O alongside low tidal volume." }],
  visual: { kind: "pressure-relationship", defaultPlateauPressure: 28, defaultPeep: 8 },
};
