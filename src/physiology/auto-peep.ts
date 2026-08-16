import type { PhysiologyConcept } from "@/content-types";

export const autoPeep: PhysiologyConcept = {
  id: "physiology.auto-peep",
  slug: "auto-peep",
  title: "Auto-PEEP",
  system: "respiratory",
  summary: "Trapped air pressure left in the alveoli at end-expiration when a breath doesn't fully exhale before the next one starts.",
  definition:
    "Auto-PEEP (intrinsic PEEP) is positive alveolar pressure remaining at end-expiration that isn't accounted for by the ventilator's set PEEP. It occurs when expiratory time is too short, relative to the time constant of the respiratory system, for the lung to fully empty before the next breath begins.",
  mechanism:
    "Every exhalation needs enough time to let alveolar pressure equilibrate back to baseline. High respiratory rates, prolonged inspiratory times, and especially high airway resistance (bronchospasm, secretions, small endotracheal tubes) all shorten the effective time available to exhale or slow the rate of exhalation, so the next breath stacks on top of residual volume that hasn't left the lung. The result is progressively rising alveolar pressure and volume — breath stacking — that the ventilator's airway pressure gauge alone does not reveal, since it's normally measured at the mouth, not the alveolus.",
  clinicalSignificance:
    "Auto-PEEP raises intrathoracic pressure, which can cause hypotension by impeding venous return and, in severe cases, produces dynamic hyperinflation with barotrauma risk; recognizing it changes ventilator strategy from 'more support' to 'more time to exhale'.",
  icuApplications: [
    "A hypotensive, difficult-to-ventilate patient with obstructive lung disease should prompt a brief disconnection from the ventilator to allow full exhalation — a rapid, diagnostic and therapeutic maneuver for suspected severe auto-PEEP.",
    "Measured via an end-expiratory hold maneuver on the ventilator, comparing total PEEP to set PEEP.",
    "Managed by lowering respiratory rate, shortening inspiratory time, treating bronchospasm, and choosing a larger endotracheal tube when possible — not by adding more set PEEP as a reflex.",
  ],
  relatedConceptIds: ["physiology.resistance", "physiology.work-of-breathing", "physiology.plateau-pressure"],
  relatedTopicIds: ["mechanical-ventilation", "pneumothorax"],
};
