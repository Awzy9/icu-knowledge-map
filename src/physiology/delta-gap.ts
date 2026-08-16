import type { PhysiologyConcept } from "@/content-types";

export const deltaGap: PhysiologyConcept = {
  id: "physiology.delta-gap",
  slug: "delta-gap",
  title: "Delta Gap",
  system: "acid-base",
  summary: "Compares the rise in anion gap to the fall in bicarbonate, to detect a second metabolic process hiding behind a high-anion-gap acidosis.",
  definition:
    "The delta gap (or delta ratio) compares how much the anion gap has risen above normal to how much bicarbonate has fallen below normal: delta ratio = (AG − 12) / (24 − HCO3). It's used specifically when a high-anion-gap metabolic acidosis (HAGMA) is already present.",
  mechanism:
    "In a pure HAGMA, each unmeasured acid anion that accumulates consumes roughly one bicarbonate in buffering, so the rise in anion gap and the fall in bicarbonate should track together, producing a delta ratio near 1 (clinically, roughly 1–2). A ratio well below this range means bicarbonate has fallen more than the anion gap rose — some of the bicarbonate loss is unaccounted for by the gap acidosis alone, implying a concurrent normal-anion-gap process. A ratio well above this range means bicarbonate is higher than the gap would predict, implying a concurrent metabolic alkalosis is also present and partially offsetting the acidosis.",
  clinicalSignificance:
    "The delta gap is the specific tool for uncovering a second metabolic process that a HAGMA alone would otherwise conceal — without it, a mixed HAGMA plus NAGMA, or a HAGMA plus metabolic alkalosis, can look identical to a simple, single HAGMA on the basic labs.",
  icuApplications: [
    "Applied whenever a high anion gap is found, as a routine next step, rather than stopping the workup once the gap acidosis is identified.",
    "A low delta ratio in a patient with sepsis and lactic acidosis can reveal a concurrent hyperchloremic acidosis from large-volume normal saline resuscitation.",
    "A high delta ratio can unmask a concurrent metabolic alkalosis (e.g. from vomiting, diuretics, or nasogastric losses) layered on top of an anion-gap acidosis.",
  ],
  relatedConceptIds: ["physiology.anion-gap", "physiology.mixed-disorders", "physiology.henderson-hasselbalch"],
  relatedTopicIds: ["metabolic-acidosis"],
};
