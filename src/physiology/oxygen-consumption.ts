import type { PhysiologyConcept } from "@/content-types";

export const oxygenConsumption: PhysiologyConcept = {
  id: "physiology.oxygen-consumption",
  slug: "oxygen-consumption",
  title: "Oxygen Consumption",
  system: "cardiovascular",
  summary: "The rate at which the tissues actually use oxygen, as opposed to how much is delivered to them.",
  definition:
    "Oxygen consumption (VO2) is the volume of oxygen the tissues extract and use per minute, calculated from the Fick principle as VO2 = CO × (CaO2 − CvO2), where CvO2 is mixed venous oxygen content.",
  mechanism:
    "Under normal conditions, VO2 is set by metabolic demand, and the body adjusts oxygen extraction (and, if needed, cardiac output) to meet it — DO2 normally exceeds VO2 several-fold, leaving a wide margin of reserve. Critical illness increases metabolic demand (fever, sepsis, increased work of breathing) while simultaneously threatening the ability to increase DO2 to match, narrowing that reserve. Extraction ratio (VO2/DO2) rises as this margin shrinks, which is reflected clinically as a falling mixed or central venous oxygen saturation (SvO2/ScvO2).",
  clinicalSignificance:
    "A falling venous oxygen saturation signals that oxygen extraction is rising to compensate for a widening gap between demand and delivery — an early, sensitive warning sign that DO2 may be becoming inadequate, often before global markers like lactate rise.",
  icuApplications: [
    "Central or mixed venous oxygen saturation is used as a surrogate marker of the DO2/VO2 balance in the resuscitation of shock.",
    "Fever, agitation, shivering, and increased work of breathing all raise VO2 and should be actively minimized in a patient with borderline oxygen delivery.",
    "Sedation and mechanical ventilation reduce the oxygen cost of breathing, effectively lowering VO2 in a patient with severe respiratory distress.",
  ],
  relatedConceptIds: ["physiology.oxygen-delivery-equation", "physiology.do2-vo2-relationship", "physiology.cardiac-output"],
  relatedTopicIds: [
  "shock",
  "sepsis"
],
};
