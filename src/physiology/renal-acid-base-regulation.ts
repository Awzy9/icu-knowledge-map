import type { PhysiologyConcept } from "@/content-types";

export const renalAcidBaseRegulation: PhysiologyConcept = {
  id: "physiology.renal-acid-base-regulation",
  slug: "renal-acid-base-regulation",
  title: "Renal Acid-Base Regulation",
  system: "renal",
  summary: "How the kidney reclaims filtered bicarbonate and generates new bicarbonate to excrete the body's daily acid load.",
  definition:
    "The kidney maintains acid-base balance over hours to days by reabsorbing nearly all filtered bicarbonate (mostly in the proximal tubule) and by generating new bicarbonate to replace what's consumed buffering the body's ongoing metabolic acid production, primarily through distal tubular acid secretion.",
  mechanism:
    "Unlike the rapid, minutes-scale respiratory compensation for acid-base disturbances, renal compensation is slow — it takes one to several days to fully develop, because it depends on adjusting the rate of new bicarbonate generation and ammonium excretion rather than simply changing a rate of breathing. This is why an acute respiratory acidosis or alkalosis shows a smaller compensatory change in bicarbonate than the same disturbance present for several days (acute versus chronic compensation), and why renal failure (via impaired acid excretion) produces a metabolic acidosis of its own even without a primary respiratory problem.",
  clinicalSignificance:
    "Because renal compensation is slow, the degree of metabolic compensation for a respiratory acid-base disturbance is itself a clue to how long the disturbance has been present — an acutely decompensating COPD patient with minimal bicarbonate elevation is behaving differently than one with a chronic, fully compensated respiratory acidosis.",
  icuApplications: [
    "Distinguishing acute from chronic respiratory acidosis by the degree of metabolic compensation helps set expectations for how much a ventilated patient's PaCO2 can safely be corrected, and how quickly.",
    "AKI or CKD impairs the kidney's ability to generate new bicarbonate and excrete the daily acid load, contributing directly to the metabolic acidosis commonly seen in renal failure.",
    "Explains why correcting a chronic respiratory acidosis too quickly on a ventilator can produce a transient post-hypercapnic metabolic alkalosis — the elevated bicarbonate hasn't yet been renally cleared.",
  ],
  relatedConceptIds: ["physiology.henderson-hasselbalch", "physiology.compensation", "physiology.tubular-function"],
  relatedTopicIds: [
  "aki",
  "metabolic-acidosis"
],
};
