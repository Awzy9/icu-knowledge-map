import type { PhysiologyConcept } from "@/content-types";

export const osmolarGap: PhysiologyConcept = {
  id: "physiology.osmolar-gap",
  slug: "osmolar-gap",
  title: "Osmolar Gap",
  system: "acid-base",
  summary: "The difference between measured and calculated serum osmolality, used to screen for unmeasured osmotically active substances such as toxic alcohols.",
  definition:
    "The osmolar gap is the difference between the directly measured serum osmolality and the calculated osmolality (roughly 2×Na + glucose/18 + BUN/2.8): osmolar gap = measured − calculated. A gap greater than about 10 mOsm/kg is considered elevated.",
  mechanism:
    "The calculated osmolality only accounts for sodium, glucose, and urea — the routinely measured osmotically active solutes. Any other osmotically active substance present in significant concentration (most importantly the toxic alcohols: methanol, ethylene glycol, and isopropyl alcohol, as well as ethanol itself) raises the measured osmolality without being reflected in the calculation, producing a gap. Because these alcohols are metabolized over time into their toxic acid metabolites, the osmolar gap is often most elevated early, before a high anion gap has fully developed — the two findings can appear at different points in the same poisoning.",
  clinicalSignificance:
    "An elevated osmolar gap in a patient with an unexplained high-anion-gap metabolic acidosis is a strong clue toward toxic alcohol ingestion, prompting urgent involvement of toxicology and consideration of antidote therapy and dialysis before a specific alcohol level even returns.",
  icuApplications: [
    "Calculated as part of the initial workup of any unexplained HAGMA, particularly in the setting of altered consciousness or a history concerning for ingestion.",
    "A normal osmolar gap doesn't fully exclude toxic alcohol ingestion, especially later in the course once the alcohol has already been metabolized — clinical suspicion still matters.",
    "Guides the urgency of empiric antidote therapy (fomepizole) and nephrology consultation for dialysis while definitive alcohol levels are pending.",
  ],
  relatedConceptIds: ["physiology.anion-gap", "physiology.henderson-hasselbalch"],
  relatedTopicIds: [
  "metabolic-acidosis"
],
};
