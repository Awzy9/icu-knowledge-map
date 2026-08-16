import type { PhysiologyConcept } from "@/content-types";

export const oxygenDeliveryEquation: PhysiologyConcept = {
  id: "physiology.oxygen-delivery-equation",
  slug: "oxygen-delivery-equation",
  title: "Oxygen Delivery",
  system: "cardiovascular",
  summary: "How cardiac output and arterial oxygen content combine to determine tissue oxygen delivery.",
  definition:
    "Oxygen delivery (DO2) is the total volume of oxygen delivered to the tissues per minute: DO2 = CO × CaO2 × 10, where CaO2 is arterial oxygen content.",
  mechanism:
    "Arterial oxygen content is dominated by hemoglobin-bound oxygen (1.34 × Hb × SaO2), with dissolved oxygen (0.003 × PaO2) contributing very little at normal atmospheric pressure. Because hemoglobin saturation dominates the equation, the clinically important drop in CaO2 only becomes steep once SaO2 falls below roughly 90% — the shoulder of the oxyhemoglobin dissociation curve. DO2 then scales linearly with cardiac output, so a fall in either CO or CaO2 alone can be compensated by a rise in the other, up to a point.",
  clinicalSignificance:
    "DO2 sets the ceiling on how much oxygen is available to the tissues; when it falls below the level tissues need (VO2), anaerobic metabolism and lactate production begin. Because DO2 depends on three independently manipulable variables (CO, Hb, SaO2), it reframes 'hypoxemia' as only one of several ways oxygen delivery can fail — anemia or a falling cardiac output can be just as important.",
  icuApplications: [
    "Explains why a modest PaO2 (e.g. 65 mmHg, SaO2 ~92%) is often tolerated: hemoglobin is still nearly saturated, so CaO2 is only slightly reduced.",
    "Frames the decision to transfuse or to support cardiac output as an alternative to chasing a normal PaO2 in a hypoxemic patient.",
    "Underlies the physiologic rationale for optimizing cardiac output (fluids, inotropes) alongside oxygenation in shock states.",
  ],
  relatedConceptIds: [
    "physiology.oxygen-consumption",
    "physiology.do2-vo2-relationship",
    "physiology.cardiac-output",
    "physiology.ventilation-perfusion-mismatch",
  ],
  relatedTopicIds: ["ards", "shock"],
  visual: { kind: "do2-breakdown", defaultCardiacOutput: 5, defaultHemoglobin: 12, defaultSao2: 97 },
};
