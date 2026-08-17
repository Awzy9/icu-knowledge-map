import type { Trial } from "@/content-types";

export const neuromuscularEarlyMobilitySchweickertTrial: Trial = {
  id: "neuromuscular-early-mobility-schweickert-trial",
  name: "Schweickert Early Mobility",
  title: "Early Physical and Occupational Therapy in Mechanically Ventilated, Critically Ill Patients: A Randomised Controlled Trial",
  year: 2009,
  journal: "Lancet",
  pmid: "19446863",
  doi: "10.1016/S0140-6736(09)60658-9",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter, parallel-group randomized controlled trial",
  clinicalQuestion:
    "Does early physical and occupational therapy during daily sedation interruption improve functional independence and delirium in ventilated ICU patients?",
  population: "104 mechanically ventilated adult medical ICU patients ventilated for <72 hours",
  intervention: "Early physical and occupational therapy paired with daily interruption of sedation (n = 49)",
  comparator: "Standard care physical therapy and sedation interruption (n = 55)",
  primaryOutcome: "Return to independent functional status at hospital discharge",
  result: {
    summary:
      "Independent functional status at discharge was achieved in 59% of the intervention group vs 35% of controls (OR 2.7, 95% CI 1.2–6.1, P = 0.02), with shorter median ICU delirium (2.0 vs 4.0 days, P = 0.02) and more ventilator-free days (23.5 vs 21.1 days, P = 0.05).",
    effectSize: "OR 2.7 (95% CI 1.2–6.1)",
    pValue: "0.02",
  },
  resultDirection: "positive",
  whatItFound:
    "Early mobilization during sedation interruption significantly improves functional recovery at hospital discharge and decreases ICU delirium and ventilator duration.",
  clinicalInterpretation:
    "Core foundational trial supporting early mobilization protocols to prevent and mitigate ICU-acquired weakness (CIP/CIM).",
  currentGuidelinePosition:
    "Strong recommendation in SCCM PADIS guidelines to implement early mobilization protocols to reduce ICU-acquired weakness and delirium.",
  relatedTopicIds: ["neuromuscular-critical-illness", "icu-sedation-delirium", "mechanical-ventilation"],
  certainty: "high",
};
