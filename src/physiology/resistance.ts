import type { PhysiologyConcept } from "@/content-types";

export const resistance: PhysiologyConcept = {
  id: "physiology.resistance",
  slug: "resistance",
  title: "Resistance",
  system: "respiratory",
  summary: "The pressure needed to drive flow through the airways, separate from the pressure needed to inflate the lung.",
  definition:
    "Airway resistance is the pressure required to produce a given flow through the airways (R = ΔP/flow). On a ventilator, it's reflected by the difference between peak and plateau pressure at a fixed flow rate.",
  mechanism:
    "Peak pressure reflects the pressure needed to overcome both airway resistance (to generate flow) and elastic recoil (to achieve volume); plateau pressure, measured during a brief no-flow pause, reflects elastic recoil alone. A widening gap between peak and plateau pressure at constant flow indicates rising resistance — from bronchospasm, secretions, a kinked or obstructed endotracheal tube, or a small-bore airway — rather than a change in lung or chest wall stiffness.",
  clinicalSignificance:
    "Distinguishing a resistance problem from a compliance problem changes management entirely: bronchodilators and suctioning address resistance, while PEEP and lung-protective strategies address compliance.",
  icuApplications: [
    "A rising peak-minus-plateau gap in a ventilated patient prompts a search for bronchospasm, secretions, or a tube problem before assuming worsening lung injury.",
    "Distinguishes an asthma/COPD exacerbation (high resistance, often normal compliance) from ARDS (low compliance, often near-normal resistance).",
    "High resistance combined with insufficient expiratory time is the mechanism behind auto-PEEP.",
  ],
  relatedConceptIds: ["physiology.compliance", "physiology.auto-peep", "physiology.work-of-breathing"],
  relatedTopicIds: ["mechanical-ventilation", "ards"],
};
