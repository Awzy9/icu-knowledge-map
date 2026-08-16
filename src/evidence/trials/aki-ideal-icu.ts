import type { Trial } from "@/content-types";

export const akiIdealIcu: Trial = {
  id: "aki-ideal-icu",
  name: "IDEAL-ICU",
  title: "Timing of Renal-Replacement Therapy in Patients with Acute Kidney Injury and Sepsis",
  year: 2018,
  journal: "New England Journal of Medicine",
  doi: "10.1056/NEJMoa1803213",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter (French, 29 sites), randomized controlled trial, stopped early for futility.",
  clinicalQuestion: "In patients with septic shock and severe (RIFLE 'Failure' stage) AKI, does early RRT initiation improve 90-day survival compared with a delayed strategy?",
  population: "488 critically ill adults with septic shock and RIFLE 'Failure'-stage AKI.",
  intervention: "Early strategy: RRT initiated within 12 hours of meeting Failure-stage criteria.",
  comparator: "Delayed strategy: RRT initiated after 48 hours if renal recovery had not occurred, or immediately if a standard urgent indication developed.",
  primaryOutcome: "90-day all-cause mortality.",
  result: {
    summary: "No significant difference in 90-day mortality between early and delayed strategies; the trial was stopped early for futility.",
  },
  resultDirection: "negative-neutral",
  whatItFound:
    "In patients with septic shock and severe AKI specifically, early RRT initiation did not improve 90-day survival compared with a delayed, indication-based strategy.",
  clinicalInterpretation:
    "IDEAL-ICU extends the AKIKI finding to a septic-shock-specific population and reinforces that routine early RRT does not improve survival even in this higher-acuity group — supporting watchful waiting with RRT reserved for a defined indication rather than initiated pre-emptively based on AKI stage alone.",
  currentGuidelinePosition:
    "Consistent with AKIKI and STARRT-AKI, and contributes to current practice favoring indication-based rather than stage-based RRT initiation timing, including in septic AKI specifically.",
  limitations: [
    "Stopped early for futility, which reduces power to detect a smaller true effect.",
    "Restricted to septic shock with Failure-stage AKI, so may not generalize to non-septic AKI.",
  ],
  relatedTopicIds: ["aki", "crrt", "septic-shock"],
  certainty: "high",
};
