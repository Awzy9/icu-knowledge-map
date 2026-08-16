import type { PhysiologyConcept } from "@/content-types";

export const compliance: PhysiologyConcept = {
  id: "physiology.compliance",
  slug: "compliance",
  title: "Compliance",
  system: "respiratory",
  summary: "How much the lung and chest wall expand for a given change in pressure.",
  definition:
    "Compliance is the change in lung volume produced by a given change in pressure (C = ΔV/ΔP). Static compliance is measured under no-flow conditions using plateau pressure; it reflects the elastic properties of the lung and chest wall, separate from airway resistance.",
  mechanism:
    "A compliant lung expands easily for a small pressure change; a stiff lung requires a large pressure change to achieve the same volume. In ARDS, inflammation, edema, and loss of aerated lung units reduce the number of alveoli available to receive a tidal volume, so the same breath is distributed into a smaller 'baby lung' — measured compliance falls even though the aerated units themselves may be relatively normal. Compliance is calculated from tidal volume divided by driving pressure (Vt / (Pplat − PEEP)) during a no-flow condition.",
  clinicalSignificance:
    "Falling compliance is one of the earliest bedside signs of worsening lung injury, often preceding a clear change in oxygenation, and a rising compliance is a useful sign of improvement or successful derecruitment avoidance.",
  icuApplications: [
    "Trending static compliance day to day is a simple way to track ARDS severity at the bedside without recalculating full mechanics each time.",
    "A sudden drop in compliance should prompt a search for a new problem (pneumothorax, mainstem intubation, breath stacking) rather than assuming gradual disease progression.",
    "Compliance and driving pressure are directly linked — falling compliance for a fixed tidal volume shows up as rising driving pressure.",
  ],
  relatedConceptIds: ["physiology.driving-pressure", "physiology.plateau-pressure", "physiology.resistance"],
  relatedTopicIds: ["ards", "mechanical-ventilation"],
};
