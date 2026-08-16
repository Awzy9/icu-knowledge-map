import type { PhysiologyConcept } from "@/content-types";

export const hendersonHasselbalch: PhysiologyConcept = {
  id: "physiology.henderson-hasselbalch",
  slug: "henderson-hasselbalch",
  title: "Henderson-Hasselbalch Equation",
  system: "acid-base",
  summary: "The equation linking pH to the ratio of bicarbonate to dissolved CO2 — the mathematical foundation of clinical acid-base interpretation.",
  definition:
    "The Henderson-Hasselbalch equation describes pH as a function of the ratio of bicarbonate (the metabolic component) to PaCO2 (the respiratory component): pH = 6.1 + log([HCO3] / (0.03 × PaCO2)).",
  mechanism:
    "Because pH depends on the ratio of HCO3 to PaCO2 rather than either value alone, the same pH can arise from many different combinations of the two — which is precisely why a blood gas can't be interpreted from pH alone. This ratio-based relationship is also why compensation works: a primary change in one component (metabolic or respiratory) can be partly offset by a directionally appropriate change in the other, moving pH back toward — but not all the way to — normal.",
  clinicalSignificance:
    "Every systematic approach to blood gas interpretation (identify the primary disorder, check for appropriate compensation, calculate the anion gap) is ultimately just a structured way of applying this equation, which is why understanding it — rather than memorizing rules — makes acid-base interpretation transferable to any lab pattern.",
  icuApplications: [
    "Explains why a normal pH doesn't rule out an acid-base disorder — two opposing primary disturbances (e.g. a metabolic acidosis and a respiratory alkalosis) can normalize the ratio and the pH while both remain present.",
    "Provides the logical basis for checking whether PaCO2 is appropriately compensating for a metabolic disturbance (via Winter's formula) rather than representing a second, independent process.",
    "Underlies bedside blood gas interpretation in every ventilated ICU patient, not just those with a primary metabolic derangement.",
  ],
  relatedConceptIds: ["physiology.anion-gap", "physiology.compensation", "physiology.mixed-disorders"],
  relatedTopicIds: ["metabolic-acidosis"],
  visual: { kind: "acid-base-map", defaultPh: 7.36, defaultPaco2: 32, defaultHco3: 18, defaultNa: 138, defaultCl: 104 },
};
