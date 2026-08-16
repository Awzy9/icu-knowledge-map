import type { PhysiologyConcept } from "@/content-types";

export const svr: PhysiologyConcept = {
  id: "physiology.svr",
  slug: "svr",
  title: "Systemic Vascular Resistance",
  system: "cardiovascular",
  summary: "The resistance the arterial tree offers to blood flow — the main determinant of left ventricular afterload.",
  definition:
    "Systemic vascular resistance (SVR) is the resistance the systemic arterial circulation offers to blood flow, calculated as SVR = (MAP − CVP) / CO. It is set primarily by arteriolar tone.",
  mechanism:
    "Blood pressure is the product of cardiac output and SVR (MAP ≈ CO × SVR), so the same blood pressure can arise from very different underlying physiology — a high-CO, low-SVR state (distributive/septic shock) versus a low-CO, high-SVR state (cardiogenic shock). Vasodilation from inflammatory mediators (sepsis, SIRS) or from vasodilating drugs lowers SVR; compensatory sympathetic vasoconstriction, or vasopressor therapy, raises it.",
  clinicalSignificance:
    "SVR is the physiologic variable that separates the major shock categories at the bedside: distributive shock is characterized by low SVR with warm extremities, while cardiogenic and hypovolemic shock typically show compensatory high SVR with cool extremities, even though blood pressure alone may look similar in both.",
  icuApplications: [
    "Warm, vasodilated extremities with a wide pulse pressure point toward low SVR (distributive shock); cool, mottled extremities point toward compensatory high SVR (cardiogenic or hypovolemic shock).",
    "Vasopressors (norepinephrine, vasopressin) work by raising SVR — appropriate in distributive shock, but can worsen forward flow if used in a primarily cardiogenic picture with high afterload already.",
    "Falling SVR despite adequate volume resuscitation is a hallmark of septic shock and the physiologic target of vasopressor titration in that setting.",
  ],
  relatedConceptIds: ["physiology.afterload", "physiology.cardiac-output", "physiology.venous-return"],
  relatedTopicIds: ["shock", "sepsis"],
};
