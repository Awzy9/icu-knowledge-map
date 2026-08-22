import type { PhysiologyConcept } from "@/content-types";

export const potassiumHandling: PhysiologyConcept = {
  id: "physiology.potassium-handling",
  slug: "potassium-handling",
  title: "Potassium Handling",
  system: "renal",
  summary: "How the kidney's distal nephron controls potassium excretion, and why AKI so readily produces hyperkalemia.",
  definition:
    "Renal potassium handling is dominated by secretion, not filtration: nearly all filtered potassium is reabsorbed in the proximal tubule and loop of Henle, and the amount that ultimately appears in urine is determined by regulated secretion in the distal tubule and collecting duct.",
  mechanism:
    "Distal potassium secretion depends on adequate distal sodium delivery and flow (which drives the electrochemical gradient for potassium secretion) and on aldosterone, which upregulates the sodium channels and pumps that make secretion possible. AKI disrupts this in two ways at once: reduced GFR means less filtrate and less distal flow, and tubular injury directly impairs the secretory machinery — which is why potassium excretion falls sharply in AKI even before GFR has dropped to zero, making hyperkalemia one of the earliest and most dangerous consequences of acute kidney injury.",
  clinicalSignificance:
    "Because potassium excretion depends on distal flow as well as aldosterone, hyperkalemia in AKI often responds to interventions that restore distal flow (loop diuretics, if urine output permits) in addition to — or before — dialysis is needed.",
  icuApplications: [
    "Explains why hyperkalemia is a near-universal feature of oliguric AKI and why it can develop quickly, well before other markers of renal failure become severe.",
    "Medications that block the renin-angiotensin-aldosterone system (ACE inhibitors/ARBs, potassium-sparing diuretics) blunt distal potassium secretion and are held in AKI accordingly.",
    "Refractory hyperkalemia despite medical therapy, especially with oliguria or anuria, is a standard indication for urgent dialysis.",
  ],
  relatedConceptIds: ["physiology.tubular-function", "physiology.sodium-handling"],
  relatedTopicIds: [
  "hyperkalemia",
  "aki"
],
};
