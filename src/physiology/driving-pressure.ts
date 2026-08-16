import type { PhysiologyConcept } from "@/content-types";

export const drivingPressure: PhysiologyConcept = {
  id: "physiology.driving-pressure",
  slug: "driving-pressure",
  title: "Driving Pressure",
  system: "respiratory",
  summary: "Plateau pressure minus PEEP — the cyclic stress the tidal volume itself imposes on the aerated lung.",
  definition:
    "Driving pressure (ΔP) is the difference between plateau pressure and PEEP: ΔP = Pplat − PEEP. Because tidal volume divided by driving pressure equals compliance, driving pressure can also be understood as tidal volume normalized to the amount of lung actually available to receive it.",
  mechanism:
    "A fixed tidal volume set to a 'safe' 6 mL/kg predicted body weight can still overstress the lung if the aerated lung volume is small, because that volume is then distributed into a smaller functional space — the same tidal volume produces a larger driving pressure in a stiffer, more diseased lung. Driving pressure captures this in a single number, unlike tidal volume alone, which doesn't account for how much lung is actually available to be inflated.",
  clinicalSignificance:
    "Retrospective analyses of ARDSNet trial data found driving pressure to be the ventilation variable most strongly associated with mortality in ARDS, more so than tidal volume or PEEP individually, making it a practical bedside target once lung-protective tidal volume is already set.",
  icuApplications: [
    "Recalculated after every PEEP or tidal volume change to confirm the strategy is staying within a favorable range, generally interpreted as ≤ 15 cmH2O.",
    "A rising driving pressure at a fixed tidal volume signals falling compliance — a cue to reassess for a new complication (pneumothorax, worsening edema) rather than simply pushing forward.",
    "Used alongside PEEP titration: a PEEP change that increases driving pressure has likely overdistended the lung rather than recruited it.",
  ],
  relatedConceptIds: ["physiology.compliance", "physiology.plateau-pressure", "physiology.transpulmonary-pressure"],
  relatedTopicIds: ["ards"],
  references: [{ kind: "guideline", id: "ards-guideline-low-tidal-volume", relevance: "Driving pressure is calculated from the same plateau-pressure and PEEP targets this guideline recommends." }],
  visual: { kind: "pressure-relationship", defaultPlateauPressure: 24, defaultPeep: 10 },
};
