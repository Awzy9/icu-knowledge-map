import type { Trial } from "@/content-types";

export const akiAkiki: Trial = {
  id: "aki-akiki",
  name: "AKIKI",
  title: "Initiation Strategies for Renal-Replacement Therapy in the Intensive Care Unit",
  year: 2016,
  journal: "New England Journal of Medicine",
  doi: "10.1056/NEJMoa1603017",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter (French), randomized controlled trial.",
  clinicalQuestion: "In critically ill adults with severe (KDIGO stage 3) AKI, does starting RRT immediately, rather than waiting for a strict clinical indication, improve survival?",
  population: "619 critically ill adults with severe (KDIGO stage 3) AKI requiring mechanical ventilation and/or catecholamine support, without an immediate life-threatening indication for RRT.",
  intervention: "Early strategy: RRT initiated immediately upon reaching KDIGO stage 3.",
  comparator: "Delayed strategy: RRT deferred unless a strict indication developed (severe hyperkalemia, metabolic acidosis, pulmonary edema, markedly elevated BUN, or oliguria/anuria beyond a defined duration).",
  primaryOutcome: "60-day overall survival.",
  result: {
    summary: "No significant difference in 60-day mortality between early and delayed strategies; roughly half of patients in the delayed arm avoided RRT entirely.",
  },
  resultDirection: "negative-neutral",
  whatItFound:
    "Starting RRT immediately at KDIGO stage 3, rather than waiting for a strict clinical indication, did not improve 60-day survival. A substantial proportion of patients managed with watchful waiting never required RRT at all.",
  clinicalInterpretation:
    "AKIKI supports a watchful-waiting approach to RRT timing in AKI without an emergent indication — closely monitoring the patient and starting RRT only if a defined indication develops, rather than initiating it pre-emptively at a given AKI stage.",
  currentGuidelinePosition:
    "Consistent with AKIKI, IDEAL-ICU, and STARRT-AKI (the larger, more recent trials), current practice generally favors initiating RRT based on a clinical indication rather than a fixed AKI stage or biomarker threshold alone; the KDIGO 2012 guideline predates these trials, and the KDIGO 2026 draft (not yet finalized) is expected to update RRT timing guidance based on this evidence.",
  limitations: [
    "Excluded patients with an immediate life-threatening indication for RRT (who received it regardless of allocation).",
    "Delayed-strategy criteria were protocol-defined and may not exactly match every institution's threshold for starting RRT.",
  ],
  relatedTopicIds: ["aki", "crrt"],
  certainty: "high",
};
