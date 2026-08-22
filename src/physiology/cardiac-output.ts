import type { PhysiologyConcept } from "@/content-types";

export const cardiacOutput: PhysiologyConcept = {
  id: "physiology.cardiac-output",
  slug: "cardiac-output",
  title: "Cardiac Output",
  system: "cardiovascular",
  summary: "The volume of blood the heart pumps per minute — the product of heart rate and stroke volume.",
  definition:
    "Cardiac output (CO) is the volume of blood ejected by the heart per minute: CO = heart rate × stroke volume. Stroke volume itself is jointly determined by preload, afterload, and contractility.",
  mechanism:
    "Because CO is a product of rate and volume, the body can maintain it in more than one way — a fall in stroke volume can be partly compensated by a rise in heart rate, which is why early compensated shock often presents with tachycardia and a preserved blood pressure before stroke volume failure becomes clinically obvious. Beyond a certain heart rate, however, shortened diastolic filling time reduces stroke volume enough that further tachycardia no longer helps, and can even reduce CO.",
  clinicalSignificance:
    "Cardiac output — not blood pressure alone — is what actually determines tissue oxygen delivery; a normal blood pressure can coexist with a critically low cardiac output if systemic vascular resistance is high enough to compensate, which is why relying on blood pressure alone can miss early shock.",
  icuApplications: [
    "Bedside or invasive CO monitoring is used to distinguish shock etiologies and to titrate fluids, inotropes, and vasopressors toward a physiologic target rather than a blood pressure number alone.",
    "A falling CO with a preserved blood pressure (rising SVR compensating) is an early, subtle sign of shock that precedes hypotension.",
    "Directly determines oxygen delivery (DO2 = CO × CaO2 × 10), linking cardiovascular and respiratory physiology at the bedside.",
  ],
  relatedConceptIds: ["physiology.preload", "physiology.contractility", "physiology.afterload", "physiology.oxygen-delivery-equation"],
  relatedTopicIds: [
  "shock",
  "ards"
],
  visual: { kind: "starling-curve", defaultPreload: 60, defaultContractility: "normal" },
};
