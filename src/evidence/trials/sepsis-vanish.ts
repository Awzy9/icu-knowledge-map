import type { Trial } from "@/content-types";

export const sepsisVanish: Trial = {
  id: "sepsis-vanish",
  name: "VANISH",
  title: "Effect of Early Vasopressin vs Norepinephrine on Kidney Failure in Patients With Septic Shock",
  year: 2016,
  journal: "JAMA",
  pmid: "27483065",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter, randomized, double-blind, 2x2 factorial trial (vasopressor type and hydrocortisone).",
  clinicalQuestion: "Does using vasopressin as an early, primary vasopressor (rather than adding it after norepinephrine) reduce kidney failure in septic shock?",
  population: "409 adults with septic shock.",
  intervention: "Vasopressin (titrated first) as the primary vasopressor.",
  comparator: "Norepinephrine as the primary vasopressor.",
  primaryOutcome: "Kidney failure-free days during the 28 days after randomization.",
  secondaryOutcomes: ["28-day mortality.", "Rates of serious adverse events."],
  result: {
    summary: "No significant difference in kidney failure-free days or mortality between early vasopressin and norepinephrine.",
  },
  resultDirection: "negative-neutral",
  whatItFound:
    "Using vasopressin as an early, primary vasopressor did not improve kidney failure-free days or reduce mortality compared with norepinephrine as the primary vasopressor.",
  clinicalInterpretation:
    "VANISH tested vasopressin as an early, primary agent rather than as an add-on for norepinephrine-refractory shock, which is a different clinical question from how vasopressin is actually used in current practice — it does not argue against the current guideline-endorsed role of vasopressin as an adjunct in escalating norepinephrine requirements.",
  currentGuidelinePosition:
    "The 2026 Surviving Sepsis Campaign guideline suggests adding vasopressin specifically in patients with escalating norepinephrine requirements, a narrower indication than the early-primary-agent strategy this trial tested.",
  limitations: [
    "Tested vasopressin as a primary/early agent, not the add-on-for-escalating-norepinephrine strategy that guidelines actually endorse.",
    "Underpowered relative to the observed event rates for definitively excluding a smaller true effect.",
  ],
  relatedTopicIds: ["septic-shock"],
  certainty: "moderate",
};
