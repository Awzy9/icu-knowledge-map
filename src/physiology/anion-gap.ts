import type { PhysiologyConcept } from "@/content-types";

export const anionGap: PhysiologyConcept = {
  id: "physiology.anion-gap",
  slug: "anion-gap",
  title: "Anion Gap",
  system: "acid-base",
  summary: "The calculated gap between measured cations and anions, used to narrow the differential for a metabolic acidosis.",
  definition:
    "The anion gap is the difference between the major measured cation and the major measured anions: AG = Na − (Cl + HCO3). It's a calculated proxy for the concentration of unmeasured anions in the plasma (normally proteins, phosphate, and sulfate), not a directly measured value.",
  mechanism:
    "Plasma must remain electrically neutral, so the total concentration of cations always equals the total concentration of anions — the 'gap' only exists because routine labs don't measure every ion. A rising anion gap during a metabolic acidosis means an unmeasured anion (lactate, ketoacids, or a toxic metabolite) is accumulating and displacing bicarbonate as it's consumed in buffering. A normal-anion-gap acidosis, by contrast, means bicarbonate is being lost directly and replaced by chloride, keeping the calculated gap unchanged.",
  clinicalSignificance:
    "The anion gap is the single most useful branch point in working up a metabolic acidosis, splitting a broad differential into two much narrower ones — production/accumulation of an unmeasured acid versus direct bicarbonate loss — that point toward very different causes and workups.",
  icuApplications: [
    "A high anion gap in a critically ill patient should prompt an immediate lactate — the most common ICU cause — before considering ketoacidosis, uremia, or toxic ingestion.",
    "Correcting the anion gap for a low albumin (each 1 g/dL drop in albumin lowers the expected gap by about 2.5) prevents missing a clinically significant HAGMA in a hypoalbuminemic critically ill patient.",
    "Trending the anion gap over time is used to track resolution of the underlying process (e.g. clearing lactate, resolving ketoacidosis) alongside the primary lab values.",
  ],
  relatedConceptIds: ["physiology.henderson-hasselbalch", "physiology.delta-gap", "physiology.osmolar-gap"],
  relatedTopicIds: [
  "metabolic-acidosis"
],
  visual: { kind: "acid-base-map", defaultPh: 7.3, defaultPaco2: 30, defaultHco3: 16, defaultNa: 140, defaultCl: 104 },
};
