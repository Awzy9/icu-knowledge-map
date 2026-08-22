import type { PhysiologyConcept } from "@/content-types";

export const mixedDisorders: PhysiologyConcept = {
  id: "physiology.mixed-disorders",
  slug: "mixed-disorders",
  title: "Mixed Acid-Base Disorders",
  system: "acid-base",
  summary: "When more than one primary acid-base process is present at once, and why pH alone can hide them.",
  definition:
    "A mixed acid-base disorder exists when two or more primary processes (metabolic or respiratory, acidosis or alkalosis) are present simultaneously in the same patient, rather than one primary disorder with its expected compensation.",
  mechanism:
    "Because compensation and a second primary disorder can move pH, PaCO2, and bicarbonate in similar directions, a mixed disorder can't reliably be detected from pH alone — it requires systematically checking whether the observed PaCO2 matches the expected compensation (via Winter's formula or an equivalent rule) and, for a high-anion-gap acidosis, whether the delta gap suggests an additional process. Critically ill patients very commonly have more than one acid-base process at once — for example, a septic patient can simultaneously have a lactic acidosis (metabolic acidosis), a compensatory or sepsis-driven tachypnea (respiratory alkalosis), and diuretic use (metabolic alkalosis) — so mixed disorders should be actively sought, not assumed to be the exception.",
  clinicalSignificance:
    "Missing a mixed disorder means missing part of the underlying pathology — a normal-looking pH can conceal a severe acidosis and a severe alkalosis canceling each other out, each of which may need its own specific treatment.",
  icuApplications: [
    "A systematic check (primary disorder → expected compensation → anion gap → delta gap) is applied to every ICU blood gas specifically to avoid missing a second process hidden behind a falsely reassuring pH.",
    "Common ICU combinations include lactic acidosis with a diuretic-induced metabolic alkalosis, or a metabolic acidosis with superimposed respiratory failure limiting compensation.",
    "Explains why two patients with the same pH can be in very different clinical situations — one may have a single, well-compensated process, and the other two or three simultaneous, partially offsetting ones.",
  ],
  relatedConceptIds: ["physiology.compensation", "physiology.delta-gap", "physiology.winters-formula"],
  relatedTopicIds: [
  "metabolic-acidosis"
],
};
