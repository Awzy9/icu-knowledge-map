import type { PhysiologyConcept } from "@/content-types";

export const tubularFunction: PhysiologyConcept = {
  id: "physiology.tubular-function",
  slug: "tubular-function",
  title: "Tubular Function",
  system: "renal",
  summary: "How the renal tubules reclaim and fine-tune the vast majority of what the glomerulus filters.",
  definition:
    "The renal tubules reabsorb roughly 99% of the fluid and solutes filtered by the glomerulus and secrete additional solutes into the filtrate, converting a large volume of filtrate into a much smaller volume of urine with a composition tightly matched to the body's needs.",
  mechanism:
    "Each tubular segment has a distinct job: the proximal tubule reabsorbs the bulk of filtered sodium, water, glucose, and bicarbonate; the loop of Henle establishes the medullary concentration gradient that allows urine to be concentrated; the distal tubule and collecting duct perform fine-tuning of sodium, potassium, and water balance under hormonal control (aldosterone, ADH). Because the tubules are metabolically active and oxygen-hungry — especially the proximal tubule and thick ascending limb — they're highly vulnerable to ischemia, which is why prolonged hypoperfusion (prerenal azotemia, if sustained) progresses to acute tubular necrosis, the most common intrinsic cause of AKI in the ICU.",
  clinicalSignificance:
    "Distinguishing a prerenal (hemodynamic, tubules still intact) picture from established tubular injury changes both prognosis and management — prerenal azotemia reverses quickly with restored perfusion, while established ATN takes days to weeks to recover even after the inciting insult is fixed.",
  icuApplications: [
    "Urine sediment (muddy brown granular casts) and urine electrolytes (a high fractional excretion of sodium) help distinguish established tubular injury from a purely prerenal state.",
    "Explains why AKI doesn't reverse immediately even after blood pressure and volume status are corrected — tubular cells that have already died need time to regenerate.",
    "Nephrotoxin avoidance (aminoglycosides, contrast, prolonged NSAID use) is aimed specifically at protecting these metabolically vulnerable tubular segments.",
  ],
  relatedConceptIds: ["physiology.gfr", "physiology.sodium-handling", "physiology.potassium-handling"],
  relatedTopicIds: [
  "aki"
],
};
