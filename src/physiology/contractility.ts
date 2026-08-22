import type { PhysiologyConcept } from "@/content-types";

export const contractility: PhysiologyConcept = {
  id: "physiology.contractility",
  slug: "contractility",
  title: "Contractility",
  system: "cardiovascular",
  summary: "The intrinsic force the heart generates independent of preload and afterload.",
  definition:
    "Contractility (inotropy) is the intrinsic strength of ventricular contraction at a given preload and afterload — the property that shifts the entire Frank-Starling curve up or down, rather than moving a single point along it.",
  mechanism:
    "Reduced contractility (from ischemia, sepsis-associated cardiomyopathy, or chronic heart failure) shifts the Frank-Starling curve downward and to the right: for any given preload, stroke volume is lower, and the curve plateaus earlier. Increased contractility (endogenous catecholamines, inotropic drugs) shifts the curve upward. Because contractility is a separate axis from preload, a patient can be both volume-overloaded and have poor contractility at the same time — more fluid won't help, and may worsen congestion, while an inotrope shifts the whole curve rather than just moving along it.",
  clinicalSignificance:
    "Distinguishing a preload problem from a contractility problem determines whether the right therapy is fluid, an inotrope, or both — treating a contractility problem with fluid alone can worsen pulmonary edema without improving forward flow.",
  icuApplications: [
    "Bedside echocardiography (ejection fraction, visual contractility assessment) is used to decide whether a hypotensive patient needs volume, an inotrope, or a vasopressor.",
    "Explains why dobutamine (a positive inotrope) is chosen over more fluid in cardiogenic shock with a already-adequate or elevated preload.",
    "Sepsis-associated cardiomyopathy is a reversible contractility problem that can mimic or compound the distributive component of septic shock.",
  ],
  relatedConceptIds: ["physiology.preload", "physiology.afterload", "physiology.cardiac-output"],
  relatedTopicIds: [
  "shock",
  "sepsis"
],
  visual: { kind: "starling-curve", defaultPreload: 50, defaultContractility: "reduced" },
};
