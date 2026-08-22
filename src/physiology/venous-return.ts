import type { PhysiologyConcept } from "@/content-types";

export const venousReturn: PhysiologyConcept = {
  id: "physiology.venous-return",
  slug: "venous-return",
  title: "Venous Return",
  system: "cardiovascular",
  summary: "The flow of blood back to the right heart, driven by the pressure gradient between the venous system and the right atrium.",
  definition:
    "Venous return is the rate of blood flow back to the right atrium, driven by the gradient between mean systemic filling pressure (the pressure in the venous system when flow is stopped) and right atrial pressure. In steady state, venous return must equal cardiac output.",
  mechanism:
    "Venous return falls when mean systemic filling pressure falls (hypovolemia, venodilation) or when right atrial pressure rises enough to reduce the driving gradient — which is exactly what happens with elevated intrathoracic pressure from auto-PEEP, high PEEP, or tension pneumothorax. This is the physiologic link between ventilator settings and hemodynamics: positive-pressure ventilation raises intrathoracic and right atrial pressure, which can reduce venous return and, downstream, cardiac output, especially in a volume-depleted patient.",
  clinicalSignificance:
    "Explains why intubation and positive-pressure ventilation can precipitate hypotension, particularly in a patient who is already preload-dependent — the mechanism is reduced venous return, not primarily a direct cardiac effect.",
  icuApplications: [
    "Peri-intubation hypotension in a hypovolemic patient is frequently a venous-return problem, addressed with fluid before or during induction rather than only with vasopressors.",
    "Explains the hemodynamic risk of auto-PEEP and tension pneumothorax — both raise intrathoracic pressure enough to critically impair venous return.",
    "The passive leg raise maneuver works by transiently auto-transfusing venous blood centrally, testing whether increased venous return would increase cardiac output.",
  ],
  relatedConceptIds: ["physiology.preload", "physiology.svr", "physiology.auto-peep"],
  relatedTopicIds: [
  "shock"
],
};
