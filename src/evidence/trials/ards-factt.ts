import type { Trial } from "@/content-types";

export const ardsFactt: Trial = {
  id: "ards-factt",
  name: "FACTT",
  title: "Comparison of Two Fluid-Management Strategies in Acute Lung Injury",
  year: 2006,
  journal: "New England Journal of Medicine",
  doi: "10.1056/NEJMoa062200",
  pmid: "16714767",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter, randomized controlled trial (ARDSNet), unblinded, 2x2 factorial with a separate catheter-type comparison.",
  clinicalQuestion: "In acute lung injury/ARDS, does a conservative fluid-management strategy targeting an even fluid balance improve outcomes compared with a liberal strategy, once shock has resolved?",
  population: "1,000 patients with acute lung injury or ARDS, enrolled once free of shock requiring vasopressors.",
  inclusionCriteria: [
    "Acute lung injury or ARDS by the contemporaneous consensus definition.",
    "No longer in shock requiring vasopressor support at enrollment.",
  ],
  intervention: "Conservative fluid strategy: protocol-driven diuresis or fluid restriction targeting an even-to-negative fluid balance.",
  comparator: "Liberal fluid strategy: protocol-driven fluid administration targeting a more net-positive balance.",
  primaryOutcome: "60-day mortality.",
  secondaryOutcomes: ["Ventilator-free days through day 28.", "ICU length of stay.", "Non-pulmonary organ failure."],
  result: {
    summary: "No mortality difference between strategies, but the conservative strategy improved lung function and shortened the duration of mechanical ventilation and ICU stay without increasing non-pulmonary organ failure.",
    effectSize: "60-day mortality 25.5% (conservative) vs 28.4% (liberal)",
    pValue: "p = 0.30",
  },
  resultDirection: "negative-neutral",
  whatItFound:
    "A conservative, restrictive fluid strategy after the shock phase did not reduce mortality compared with a more liberal strategy, but it produced more ventilator-free days and a shorter ICU stay, without an increase in shock or need for renal replacement therapy.",
  clinicalInterpretation:
    "FACTT is the basis for a 'dry after resuscitation' approach in ARDS: once a patient is no longer in shock, avoiding a positive fluid balance shortens time on the ventilator and in the ICU, even though it has not been shown to change 60-day survival on its own. It does not address fluid strategy during the initial resuscitation/shock phase, when adequate perfusion still takes priority.",
  currentGuidelinePosition:
    "No formal strong guideline recommendation mandates a specific conservative fluid protocol in ARDS, but conservative fluid management after hemodynamic stabilization is widely adopted as standard supportive practice and is consistent with this trial.",
  limitations: [
    "Unblinded, protocol-driven fluid management, as is unavoidable for this design.",
    "Excluded patients still in shock, so it does not inform fluid strategy during initial resuscitation.",
    "Mortality was a secondary, not primary, finding of benefit — the functional outcomes (ventilator-free days, ICU stay) were the strategy's clearest benefit.",
  ],
  relatedTopicIds: ["ards"],
  certainty: "moderate",
};
