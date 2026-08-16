import type { Trial } from "@/content-types";

export const statusEpilepticusEsett: Trial = {
  id: "status-epilepticus-esett",
  name: "ESETT",
  title: "Randomized Trial of Three Anticonvulsant Medications for Status Epilepticus",
  year: 2019,
  journal: "New England Journal of Medicine",
  doi: "10.1056/NEJMoa1905795",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter, double-blind, response-adaptive randomized controlled trial (Established Status Epilepticus Treatment Trial), stopped early for futility in detecting a difference between arms after a planned interim analysis.",
  clinicalQuestion: "In benzodiazepine-refractory status epilepticus, is any one of levetiracetam, fosphenytoin, or valproate more effective as second-line therapy than the others?",
  population: "384 children and adults with benzodiazepine-refractory convulsive status epilepticus.",
  intervention: "Levetiracetam (60 mg/kg, max 4500 mg).",
  comparator: "Fosphenytoin (20 mg PE/kg, max 1500 mg PE) or valproate (40 mg/kg, max 3000 mg).",
  primaryOutcome: "Absence of clinically evident seizures and improvement in responsiveness by 60 minutes after the start of the infusion, without need for additional anticonvulsant medication.",
  secondaryOutcomes: ["Adverse events, including hypotension and need for intubation.", "Outcomes by age subgroup (children, adults, older adults)."],
  result: {
    summary: "The primary outcome was met in roughly half of patients in each arm, with no significant difference detected between levetiracetam, fosphenytoin, or valproate; the trial was stopped early for futility on the pre-specified comparison.",
    effectSize: "Primary outcome met in approximately 44-52% (children), 44-46% (adults), and 35-47% (older adults) across the three drugs, with overlapping confidence intervals and no statistically significant pairwise difference.",
  },
  resultDirection: "negative-neutral",
  whatItFound:
    "None of the three second-line agents was superior to the other two for terminating benzodiazepine-refractory status epilepticus, and adverse event rates (including hypotension and need for intubation) were similar across arms.",
  clinicalInterpretation:
    "ESETT did not identify a preferred second-line agent on efficacy or safety grounds — choice among levetiracetam, fosphenytoin, and valproate can reasonably be guided by other factors (infusion time, side-effect profile in a specific patient, drug availability, renal/hepatic considerations) rather than by an expected difference in seizure termination.",
  currentGuidelinePosition:
    "ESETT is generally read as supporting the 2016 AES guideline's position that no single second-line agent has established superiority, now with direct comparative-effectiveness data rather than indirect comparison across separate trials.",
  limitations: [
    "The trial was powered to detect a difference between agents, not to establish equivalence — a 'no significant difference' result with a stopped-early, futility-driven design is not the same as proof that the drugs are truly interchangeable in every clinical situation.",
    "Refractory status epilepticus (seizures continuing despite an adequate second-line agent) was not addressed by this trial.",
  ],
  relatedTopicIds: ["status-epilepticus"],
  certainty: "high",
};
