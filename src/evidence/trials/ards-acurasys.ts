import type { Trial } from "@/content-types";

export const ardsAcurasys: Trial = {
  id: "ards-acurasys",
  name: "ACURASYS",
  title: "Neuromuscular Blockers in Early Acute Respiratory Distress Syndrome",
  year: 2010,
  journal: "New England Journal of Medicine",
  doi: "10.1056/NEJMoa1005372",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter, randomized, placebo-controlled trial",
  clinicalQuestion: "Does early, short-course continuous neuromuscular blockade improve survival in severe ARDS?",
  population: "340 patients with early severe ARDS (PaO2/FiO2 < 150) at French centers.",
  inclusionCriteria: [
    "Severe ARDS: PaO2/FiO2 < 150 with PEEP ≥ 5 cmH2O.",
    "Onset within the preceding 48 hours.",
  ],
  intervention: "Cisatracurium infusion for 48 hours, under deep sedation with low tidal volume ventilation.",
  comparator: "Placebo infusion, under the same deep sedation and low tidal volume ventilation.",
  primaryOutcome: "90-day mortality, adjusted for baseline PaO2/FiO2, SAPS II score, and plateau pressure.",
  secondaryOutcomes: ["Ventilator-free days at day 90.", "Incidence of ICU-acquired weakness at day 28."],
  result: {
    summary: "Early continuous neuromuscular blockade was associated with improved adjusted 90-day survival and more ventilator-free days, without an increase in ICU-acquired weakness.",
    effectSize: "adjusted hazard ratio for death 0.68",
    pValue: "p = 0.04",
  },
  resultDirection: "contradictory",
  whatItFound:
    "A 48-hour course of continuous cisatracurium, started early in severe ARDS, improved adjusted survival and time off the ventilator compared with placebo in this single trial.",
  clinicalInterpretation:
    "ACURASYS drove a period of routine early paralysis in severe ARDS, but its mortality finding relied on an adjusted secondary analysis rather than the unadjusted primary comparison, and the later ROSE trial (see Landmark Trials) did not confirm a survival benefit — see Controversies.",
  currentGuidelinePosition:
    "There is no strong formal recommendation for routine early paralysis in ARDS; current practice, reflecting ROSE, reserves neuromuscular blockade for refractory ventilator dyssynchrony or hypoxemia rather than applying it by default to all severe ARDS.",
  limitations: [
    "The unadjusted primary mortality comparison did not reach significance; the reported benefit came from a prespecified adjusted analysis.",
    "Deep sedation was mandated in both arms, which does not reflect the lighter-sedation practice common today.",
  ],
  relatedTopicIds: ["ards"],
  certainty: "moderate",
};
