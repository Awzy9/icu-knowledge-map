import type { PhysiologyConcept } from "@/content-types";

export const wintersFormula: PhysiologyConcept = {
  id: "physiology.winters-formula",
  slug: "winters-formula",
  title: "Winter's Formula",
  system: "acid-base",
  summary: "The expected respiratory compensation for a primary metabolic acidosis, used to detect a second, independent disorder.",
  definition:
    "Winter's formula predicts the expected PaCO2 for a given bicarbonate in a simple metabolic acidosis: expected PaCO2 = 1.5 × [HCO3] + 8 ± 2. It's an empirically derived bedside estimate of appropriate respiratory compensation.",
  mechanism:
    "A falling bicarbonate normally triggers a proportional increase in ventilation (via central and peripheral chemoreceptors sensing the resulting acidemia), lowering PaCO2 and partially restoring the HCO3/PaCO2 ratio toward normal. Winter's formula captures the empirically observed slope of this response. If the measured PaCO2 falls within the predicted range, compensation is appropriate and only one primary process is likely present; if it falls outside that range, a second, independent respiratory disorder must also be present.",
  clinicalSignificance:
    "Winter's formula converts 'is this compensation appropriate?' from a qualitative judgment into a specific, checkable number — a measured PaCO2 above the predicted range means a concurrent respiratory acidosis, and below it means a concurrent respiratory alkalosis, both of which change the clinical picture and the differential.",
  icuApplications: [
    "Applied to essentially every ventilated patient with a metabolic acidosis, to confirm the ventilator is appropriately compensating (or to recognize that it needs to, if the patient can't do so on their own).",
    "A PaCO2 higher than predicted in a spontaneously breathing patient with a metabolic acidosis can signal impending respiratory fatigue — the patient is failing to compensate as expected — and is a warning sign for imminent decompensation.",
    "A PaCO2 lower than predicted points to a concurrent primary respiratory alkalosis (e.g. sepsis-driven tachypnea, salicylate toxicity) layered on top of the metabolic acidosis.",
  ],
  relatedConceptIds: ["physiology.compensation", "physiology.anion-gap", "physiology.mixed-disorders"],
  relatedTopicIds: ["metabolic-acidosis"],
  visual: { kind: "acid-base-map", defaultPh: 7.32, defaultPaco2: 34, defaultHco3: 16, defaultNa: 138, defaultCl: 106 },
};
