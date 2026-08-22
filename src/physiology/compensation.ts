import type { PhysiologyConcept } from "@/content-types";

export const compensation: PhysiologyConcept = {
  id: "physiology.compensation",
  slug: "compensation",
  title: "Acid-Base Compensation",
  system: "acid-base",
  summary: "How the respiratory and renal systems each partially correct for a primary acid-base disturbance originating in the other.",
  definition:
    "Compensation is the physiologic response that partially corrects pH after a primary acid-base disturbance, by adjusting the other component of the Henderson-Hasselbalch ratio — the respiratory system compensates for metabolic disturbances by changing ventilation, and the kidney compensates for respiratory disturbances by changing bicarbonate handling.",
  mechanism:
    "Respiratory compensation is fast (minutes to hours) because it only requires a change in minute ventilation; renal compensation is slow (one to several days) because it requires actually changing rates of bicarbonate reabsorption and generation. Compensation is never complete — it moves pH back toward normal but does not fully normalize it — and each type of primary disturbance has a predictable, quantifiable compensatory response (e.g. Winter's formula for a metabolic acidosis), which is what allows a clinician to check whether the observed compensation is appropriate or whether a second, independent disturbance is also present.",
  clinicalSignificance:
    "Comparing the observed compensation to the expected compensation for a given primary disorder is the key step that reveals mixed acid-base disorders — an under- or over-compensated blood gas is not a diagnosis in itself but a signal to look for a second process.",
  icuApplications: [
    "A PaCO2 outside the range predicted by Winter's formula for a given bicarbonate signals a second, independent respiratory disorder — not simply 'incomplete' compensation.",
    "Explains why the ventilator settings of a chronically hypercapnic COPD patient shouldn't aim to fully normalize PaCO2 — their kidneys have already compensated for their baseline, and rapid correction can produce a dangerous alkalosis.",
    "Guides the pace of correcting any acute-on-chronic disturbance, since compensation that took days to develop shouldn't be reversed in hours.",
  ],
  relatedConceptIds: ["physiology.henderson-hasselbalch", "physiology.winters-formula", "physiology.mixed-disorders"],
  relatedTopicIds: [
  "metabolic-acidosis"
],
};
