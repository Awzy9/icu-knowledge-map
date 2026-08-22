import type { PhysiologyConcept } from "@/content-types";

export const afterload: PhysiologyConcept = {
  id: "physiology.afterload",
  slug: "afterload",
  title: "Afterload",
  system: "cardiovascular",
  summary: "The resistance the ventricle must overcome to eject blood.",
  definition:
    "Afterload is the wall tension the ventricle must generate to overcome the resistance and pressure it's ejecting against. For the left ventricle, this is dominated by systemic vascular resistance and aortic pressure; for the right ventricle, by pulmonary vascular resistance and pulmonary artery pressure.",
  mechanism:
    "For a fixed contractility and preload, a rising afterload reduces stroke volume, because more of the ventricle's generated force is spent overcoming resistance rather than ejecting volume. A healthy ventricle tolerates afterload changes well; a failing or acutely strained ventricle (especially the thin-walled right ventricle) is far more afterload-sensitive, and a sudden rise in afterload can precipitate acute decompensation.",
  clinicalSignificance:
    "Afterload reduction (vasodilators) is a core therapy in cardiogenic shock and acute decompensated heart failure precisely because a failing ventricle is disproportionately afterload-sensitive — small reductions in resistance can produce meaningful gains in stroke volume.",
  icuApplications: [
    "Vasodilator therapy in cardiogenic shock aims to reduce left ventricular afterload and improve forward flow, distinct from vasopressor therapy, which raises afterload to support blood pressure.",
    "Elevated pulmonary vascular resistance (from hypoxia, hypercapnia, or high intrathoracic pressure) raises right ventricular afterload — a key mechanism behind ventilator-associated RV strain in ARDS.",
    "Explains why aggressive vasopressor use can worsen forward flow in a patient with significant ventricular dysfunction, even while raising the blood pressure number.",
  ],
  relatedConceptIds: ["physiology.svr", "physiology.contractility", "physiology.rv-failure-physiology"],
  relatedTopicIds: [
  "shock"
],
};
