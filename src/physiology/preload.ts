import type { PhysiologyConcept } from "@/content-types";

export const preload: PhysiologyConcept = {
  id: "physiology.preload",
  slug: "preload",
  title: "Preload",
  system: "cardiovascular",
  summary: "The stretch on the ventricle at end-diastole, just before it contracts.",
  definition:
    "Preload is the degree of ventricular myocardial stretch at end-diastole, most directly reflected by end-diastolic volume. It's determined by venous return and ventricular compliance, and it's the input side of the Frank-Starling relationship.",
  mechanism:
    "By the Frank-Starling mechanism, increasing preload stretches sarcomeres toward their optimal length for force generation, increasing stroke volume — up to a point. Beyond that point, further stretch no longer increases (and can even reduce) stroke volume, which is why the Frank-Starling curve plateaus rather than rising indefinitely. Preload is commonly estimated at the bedside using surrogates like central venous pressure, inferior vena cava diameter and collapsibility, or dynamic measures such as pulse pressure variation — none of which measure ventricular volume directly, which is why 'volume responsiveness' testing (e.g. passive leg raise) is generally more informative than any single static number.",
  clinicalSignificance:
    "Whether a hypotensive patient will benefit from more fluid depends on where they sit on their own Frank-Starling curve — a 'preload-responsive' patient still climbing the steep part of the curve benefits from fluids, while one already on the flat plateau does not and may simply become fluid-overloaded.",
  icuApplications: [
    "Dynamic assessments (passive leg raise, pulse pressure variation) are used specifically to predict fluid responsiveness before committing to a fluid bolus.",
    "Explains why static numbers (CVP alone) are poor predictors of fluid responsiveness — the same CVP can sit on the steep or flat part of the curve depending on ventricular compliance.",
    "Distinguishes hypovolemic shock (low preload, responsive to fluids) from cardiogenic and distributive shock, where preload may already be adequate or even elevated.",
  ],
  relatedConceptIds: ["physiology.cardiac-output", "physiology.venous-return", "physiology.contractility"],
  relatedTopicIds: ["shock"],
  visual: { kind: "starling-curve", defaultPreload: 40, defaultContractility: "normal" },
};
