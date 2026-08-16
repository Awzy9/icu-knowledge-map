import type { Trial } from "@/content-types";

export const intracranialHypertensionDecra: Trial = {
  id: "intracranial-hypertension-decra",
  name: "DECRA",
  title: "Decompressive Craniectomy in Diffuse Traumatic Brain Injury",
  year: 2011,
  journal: "New England Journal of Medicine",
  doi: "10.1056/NEJMoa1102077",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter (Australia, New Zealand, Saudi Arabia), randomized controlled trial.",
  clinicalQuestion: "Does early bifrontotemporoparietal decompressive craniectomy for diffuse TBI with early intracranial hypertension improve functional outcome?",
  population: "155 adults with severe diffuse TBI and intracranial hypertension (>20 mmHg for 15 minutes within a 1-hour period) refractory to first-tier therapy.",
  intervention: "Early bifrontotemporoparietal decompressive craniectomy.",
  comparator: "Standard medical care.",
  primaryOutcome: "Extended Glasgow Outcome Scale (GOS-E) score at 6 months.",
  result: {
    summary: "Craniectomy reduced ICP and ICU length of stay but was associated with worse (more unfavorable) functional outcomes at 6 months.",
  },
  resultDirection: "negative-neutral",
  whatItFound:
    "Early decompressive craniectomy for diffuse TBI with intracranial hypertension controlled ICP more effectively than medical management alone but resulted in worse functional outcomes at 6 months.",
  clinicalInterpretation:
    "DECRA demonstrated that successfully lowering ICP does not guarantee a better functional outcome — an important general lesson, not just a craniectomy-specific one. Interpretation is complicated by a baseline imbalance in pupillary reactivity (a strong outcome predictor) between the two groups, and by the relatively low ICP threshold (20 mmHg) and short duration used to trigger the intervention, which is lower/shorter than the refractory threshold used in RESCUEicp.",
  currentGuidelinePosition:
    "Current guidance does not support early, non-refractory decompressive craniectomy based on this trial; decompressive craniectomy is generally reserved for ICP refractory to maximal medical therapy, per RESCUEicp's more restrictive population.",
  limitations: [
    "Baseline imbalance in pupillary reactivity between groups, a major outcome predictor, complicates interpretation.",
    "Relatively low ICP threshold and short duration for enrollment compared with how 'refractory' intracranial hypertension is defined in later trials/guidelines.",
  ],
  relatedTopicIds: ["intracranial-hypertension"],
  certainty: "moderate",
};
