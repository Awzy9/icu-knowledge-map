import type { PhysiologyConcept } from "@/content-types";

export const deadSpace: PhysiologyConcept = {
  id: "physiology.dead-space",
  slug: "dead-space",
  title: "Dead Space",
  system: "respiratory",
  summary: "Ventilated lung that isn't perfused, so it doesn't participate in gas exchange.",
  definition:
    "Dead space is ventilation that doesn't reach perfused alveoli, so it can't contribute to CO2 elimination. Anatomic dead space is the conducting airways themselves; alveolar dead space is ventilated but underperfused alveoli — the two together make up physiologic dead space.",
  mechanism:
    "Every breath must first fill the anatomic dead space before any of it reaches gas-exchanging alveoli, so a portion of each tidal volume is 'wasted' by design. Alveolar dead space increases pathologically when perfusion to ventilated units falls — from pulmonary embolism, hypovolemia, or overdistended alveoli compressing adjacent capillaries at high PEEP. The dead-space fraction (Vd/Vt) rises accordingly, and more minute ventilation is needed to clear the same amount of CO2.",
  clinicalSignificance:
    "A rising dead-space fraction is a marker of pulmonary vascular compromise and is independently associated with mortality in ARDS, largely because it signals how much of the lung is both diseased and poorly perfused.",
  icuApplications: [
    "A sudden rise in required minute ventilation to maintain the same PaCO2 should prompt consideration of pulmonary embolism or acute right heart strain.",
    "Excessive PEEP can increase dead space by overdistending alveoli and compressing the surrounding capillaries — a reason not to escalate PEEP indefinitely while chasing oxygenation.",
    "Persistently elevated dead-space fraction in ARDS is a marker of more severe disease and a supportive data point when considering escalation of therapy.",
  ],
  relatedConceptIds: ["physiology.ventilation-perfusion-mismatch", "physiology.shunt"],
  relatedTopicIds: ["ards", "mechanical-ventilation"],
  visual: { kind: "vq-spectrum", defaultRatio: 1.8 },
};
