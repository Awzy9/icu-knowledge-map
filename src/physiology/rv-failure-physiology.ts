import type { PhysiologyConcept } from "@/content-types";

export const rvFailurePhysiology: PhysiologyConcept = {
  id: "physiology.rv-failure-physiology",
  slug: "rv-failure-physiology",
  title: "RV Failure Physiology",
  system: "cardiovascular",
  summary: "Why the thin-walled right ventricle is disproportionately vulnerable to rises in afterload.",
  definition:
    "The right ventricle is a thin-walled, low-pressure pump built to accommodate volume, not pressure. Unlike the left ventricle, it tolerates preload changes well but has very little functional reserve against a rising afterload (pulmonary vascular resistance).",
  mechanism:
    "A sudden rise in pulmonary vascular resistance — from hypoxia, hypercapnia, acidosis, high intrathoracic pressure (high PEEP, auto-PEEP), or pulmonary embolism — can acutely overwhelm the RV's limited ability to generate pressure. As the RV dilates to compensate, it shifts the interventricular septum leftward (ventricular interdependence), impairing left ventricular filling and reducing left-sided cardiac output even though the primary problem is right-sided. This creates a self-reinforcing cycle: falling systemic pressure reduces RV coronary perfusion (which occurs throughout the cardiac cycle, not just diastole), further impairing RV function.",
  clinicalSignificance:
    "Acute RV failure is a distinct shock physiology that standard left-heart-oriented resuscitation (aggressive fluids, high PEEP) can actively worsen — recognizing it changes the entire management strategy toward RV afterload reduction and cautious volume administration.",
  icuApplications: [
    "In severe ARDS, avoiding unnecessarily high plateau and driving pressures is partly about protecting the right ventricle from afterload-mediated failure, not just the lung parenchyma.",
    "Hypotension after a large fluid bolus in a patient with suspected RV strain should raise suspicion for RV failure — the RV may already be volume-overloaded, and more fluid worsens septal shift rather than helping.",
    "Correcting hypoxia, hypercapnia, and acidosis are first-line therapies for acute RV failure, because all three directly raise pulmonary vascular resistance.",
  ],
  relatedConceptIds: ["physiology.afterload", "physiology.preload", "physiology.plateau-pressure"],
  relatedTopicIds: [
  "ards",
  "shock"
],
};
