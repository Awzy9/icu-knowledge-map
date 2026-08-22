import type { PhysiologyConcept } from "@/content-types";

export const filtration: PhysiologyConcept = {
  id: "physiology.filtration",
  slug: "filtration",
  title: "Filtration",
  system: "renal",
  summary: "How the glomerulus separates plasma water and small solutes from blood cells and large proteins.",
  definition:
    "Glomerular filtration is the passive process by which plasma water and small solutes cross the glomerular capillary wall into Bowman's space, while blood cells and large proteins (like albumin) are normally retained by the size- and charge-selective filtration barrier.",
  mechanism:
    "The filtration barrier — capillary endothelium, glomerular basement membrane, and podocyte foot processes — restricts passage based on molecular size and, for negatively charged molecules like albumin, electrical charge. Net filtration pressure is the balance of glomerular capillary hydrostatic pressure (favoring filtration) against Bowman's space hydrostatic pressure and plasma oncotic pressure (opposing it). Injury to any layer of the barrier — from inflammation, immune complex deposition, or direct toxin/ischemic injury — can allow protein or blood cells to leak into the filtrate, producing proteinuria or hematuria.",
  clinicalSignificance:
    "New proteinuria or hematuria signals a breach in the filtration barrier itself (glomerular injury), which points toward a different differential — and often a different urgency — than a purely hemodynamic or tubular cause of AKI.",
  icuApplications: [
    "Urinalysis and urine sediment examination are used to distinguish glomerular injury (dysmorphic red cells, red cell casts) from tubular injury (muddy brown casts) or a purely prerenal picture (bland sediment).",
    "New significant proteinuria in a critically ill patient should prompt consideration of a primary glomerular process rather than assuming routine prerenal or ischemic AKI.",
    "Understanding the filtration barrier explains why albumin is normally absent from urine, making albuminuria a sensitive marker of early glomerular injury.",
  ],
  relatedConceptIds: ["physiology.gfr", "physiology.tubular-function"],
  relatedTopicIds: [
  "aki"
],
};
