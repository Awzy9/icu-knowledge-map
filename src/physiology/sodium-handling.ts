import type { PhysiologyConcept } from "@/content-types";

export const sodiumHandling: PhysiologyConcept = {
  id: "physiology.sodium-handling",
  slug: "sodium-handling",
  title: "Sodium Handling",
  system: "renal",
  summary: "How the kidney adjusts sodium reabsorption to match intake and maintain effective circulating volume.",
  definition:
    "Renal sodium handling is the process by which the kidney reabsorbs the vast majority of filtered sodium and fine-tunes the remainder to match dietary intake, keeping total body sodium — and, with it, extracellular volume — in balance.",
  mechanism:
    "The proximal tubule reabsorbs the largest share of filtered sodium, with progressively finer regulation downstream — the thick ascending limb, distal tubule, and collecting duct, the last under the control of aldosterone, which is released in response to volume depletion sensed by the renin-angiotensin-aldosterone system. Because sodium is the primary determinant of extracellular fluid volume, sodium handling and volume status are functionally the same axis: a kidney that senses low effective circulating volume (true hypovolemia, or a low-output/vasodilated state that mimics it) avidly retains sodium, producing a low urine sodium even when total body sodium is already normal or high.",
  clinicalSignificance:
    "Urine sodium is a direct readout of how the kidney perceives effective circulating volume, which is why it's used to distinguish prerenal AKI (avid sodium retention, low urine sodium) from established tubular injury (impaired reabsorption, higher urine sodium despite ongoing volume depletion).",
  icuApplications: [
    "A low urine sodium (or low fractional excretion of sodium) in oliguric AKI supports a prerenal mechanism; a higher value suggests tubular injury has already occurred.",
    "Explains why heart failure and cirrhosis — states of reduced effective circulating volume despite total-body sodium and volume excess — produce avid renal sodium retention and edema.",
    "Diuretic therapy works by blocking sodium reabsorption at specific tubular sites, and understanding which segment a diuretic targets explains its potency and side-effect profile.",
  ],
  relatedConceptIds: ["physiology.tubular-function", "physiology.potassium-handling"],
  relatedTopicIds: [
  "aki"
],
};
