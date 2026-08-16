import type { Trial } from "@/content-types";

export const bleedingProppr: Trial = {
  id: "bleeding-proppr",
  name: "PROPPR",
  title: "Transfusion of Plasma, Platelets, and Red Blood Cells in a 1:1:1 vs a 1:1:2 Ratio and Mortality in Patients With Severe Trauma",
  year: 2015,
  journal: "JAMA",
  doi: "10.1001/jama.2015.12",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter (12 Level I trauma centers, North America), randomized controlled trial.",
  clinicalQuestion: "In severe trauma requiring massive transfusion, does a 1:1:1 plasma:platelet:RBC transfusion ratio improve survival compared with a 1:1:2 ratio?",
  population: "680 severely injured trauma patients predicted to require massive transfusion.",
  intervention: "Plasma, platelets, and RBCs in a 1:1:1 ratio.",
  comparator: "Plasma, platelets, and RBCs in a 1:1:2 ratio (relatively more RBCs).",
  primaryOutcome: "24-hour and 30-day all-cause mortality.",
  secondaryOutcomes: ["Exsanguination within 24 hours.", "Achievement of hemostasis."],
  result: {
    summary: "No significant difference in 24-hour or 30-day mortality, but the 1:1:1 group had less early exsanguination and more often achieved hemostasis.",
    effectSize: "Exsanguination 9.2% (1:1:1) vs 14.6% (1:1:2), p=0.03; hemostasis achieved 86% vs 78%, p=0.006",
  },
  resultDirection: "contradictory",
  whatItFound:
    "A 1:1:1 transfusion ratio did not significantly reduce overall mortality compared with 1:1:2, but did reduce early death from exsanguination and improved the rate of achieving hemostasis.",
  clinicalInterpretation:
    "PROPPR is the primary trial basis for balanced-ratio massive transfusion protocols, even though its overall mortality result was neutral — the reduction in early exsanguination and improved hemostasis are read as clinically meaningful secondary findings, though this requires interpreting a non-primary endpoint as practice-changing, which is a real limitation of the trial's design as basis for the current standard.",
  currentGuidelinePosition:
    "Balanced (near 1:1:1) transfusion ratios are now standard practice in most massive transfusion protocols for trauma, based substantially on this trial's secondary findings.",
  limitations: [
    "Primary mortality outcome was not statistically significant — the practice-changing conclusions rest on secondary outcomes.",
    "Restricted to trauma patients predicted to need massive transfusion; may not generalize to non-traumatic major hemorrhage.",
  ],
  relatedTopicIds: ["bleeding", "transfusion"],
  certainty: "moderate",
};
