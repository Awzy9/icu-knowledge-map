import type { PhysiologyConcept } from "@/content-types";

export const do2Vo2Relationship: PhysiologyConcept = {
  id: "physiology.do2-vo2-relationship",
  slug: "do2-vo2-relationship",
  title: "DO2/VO2 Relationship",
  system: "cardiovascular",
  summary: "Why oxygen consumption stays independent of delivery over a wide range — until it doesn't.",
  definition:
    "Across most of the physiologic range, oxygen consumption (VO2) is independent of oxygen delivery (DO2): the tissues extract more oxygen per unit of blood as DO2 falls, keeping VO2 constant. Below a critical DO2 threshold, extraction can no longer increase enough to compensate, and VO2 becomes delivery-dependent — it falls in parallel with DO2.",
  mechanism:
    "This produces a two-part relationship: a flat plateau where VO2 is supply-independent, and a steep segment below the critical DO2 threshold where VO2 falls linearly with DO2. The transition point is the critical DO2 — below it, tissues can no longer meet metabolic demand through extraction alone, and anaerobic metabolism begins, producing lactate. The critical threshold isn't fixed; it shifts with metabolic demand, so a febrile, agitated, or septic patient reaches supply-dependency at a higher DO2 than one who is sedated and afebrile.",
  clinicalSignificance:
    "This relationship is the physiologic basis for lactate as a marker of inadequate oxygen delivery — rising lactate signals that DO2 has fallen below (or demand has risen above) the critical threshold, not simply that oxygenation is imperfect.",
  icuApplications: [
    "Explains why resuscitation targets in shock focus on markers of adequate perfusion (lactate clearance, venous oxygen saturation) rather than a specific DO2 number, since the critical threshold varies by patient and by moment.",
    "Reducing metabolic demand (treating fever, providing adequate sedation and analgesia, supporting the work of breathing) effectively raises the safety margin before the critical DO2 threshold is reached.",
    "Persistently elevated or rising lactate despite an apparently 'adequate' cardiac output should prompt reassessment of whether demand has risen rather than assuming resuscitation has failed.",
  ],
  relatedConceptIds: ["physiology.oxygen-delivery-equation", "physiology.oxygen-consumption", "physiology.cardiac-output"],
  relatedTopicIds: ["shock", "sepsis"],
};
