import type { Pathway } from "@/content-types";

export const statusEpilepticusWorkflow: Pathway = {
  id: "status-epilepticus-workflow",
  slug: "status-epilepticus-workflow",
  title: "Status Epilepticus Emergency Management",
  oneLiner: "From emergent first-line benzodiazepine administration to second-line IV non-sedating AEDs and continuous cEEG anesthetic burst suppression.",
  startingProblem: "Seizure Activity >= 5 Minutes / Non-Convulsive Status Epilepticus",
  relatedTopicIds: [
      "status-epilepticus",
      "altered-consciousness",
      "severe-tbi",
      "meningitis-encephalitis",
      "toxicologic-emergencies"
    ],
  flow: {
    id: "phase-1-emergent-benzodiazepine",
    label: "Phase 1 (0–5 min): Emergent Benzodiazepine Administration",
    kind: "step",
    role: "intervention",
    detail: "Give IV Lorazepam 4 mg (repeat once at 5–10 min if seizure persists) OR IM Midazolam 10 mg (if no IV access). Check fingerstick glucose immediately and administer 50 mL D50W if hypoglycemic.",
    topicId: "status-epilepticus",
    children: [
      {
        id: "phase-2-second-line-aed",
        label: "Phase 2 (5–20 min): Urgent IV Non-Sedating Antiepileptic Drug",
        kind: "branch",
        role: "decision",
        detail: "ESETT trial established equal efficacy among three options: IV Levetiracetam (Keppra 60 mg/kg, max 4500 mg over 10 min), IV Fosphenytoin (20 mg PE/kg over 10 min), or IV Sodium Valproate (40 mg/kg over 10 min).",
        children: [
          {
            id: "seizure-controlled-phase-2",
            label: "Seizures Terminated: Initiate maintenance AED dosing & workup",
            kind: "step",
            role: "reassessment",
            detail: "Maintain therapeutic AED levels, obtain non-contrast Head CT and MRI, check antiepileptic drug levels, electrolytes, and toxicology.",
          },
          {
            id: "refractory-status-phase-3",
            label: "Phase 3 (>20 min): Refractory Status Epilepticus — Intubation & Continuous Anesthetics",
            kind: "step",
            role: "warning",
            detail: "Perform rapid sequence intubation; initiate continuous IV anesthetic infusion (Propofol 2–5 mg/kg/h or Midazolam 0.2–2 mg/kg/h or Ketamine). Connect continuous EEG (cEEG) within 1 hour.",
            children: [
              {
                id: "ceeg-target-burst-suppression",
                label: "Titrate anesthetics to Electrographic Burst Suppression on cEEG",
                kind: "step",
                role: "intervention",
                detail: "Target: complete seizure cessation or electrographic burst suppression pattern (1 burst per 10–15 seconds) for 24–48 hours before planned slow wean.",
                children: [
                  {
                    id: "super-refractory-evaluation",
                    label: "Super-Refractory Status (>24h refractory): Multi-modal salvage",
                    kind: "step",
                    role: "intervention",
                    detail: "Ketamine infusion, inhalational anesthetics (Isoflurane), immunotherapy for autoimmune encephalitis, pyridoxine trial, or ketogenic diet.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  redFlags: [
    { id: "status-nonconvulsive-coma", text: "Persistent unexplained coma after convulsive status cessation — 20–40% of patients remain in non-convulsive status epilepticus (NCSE); continuous EEG is mandatory to detect ongoing subclinical electrical seizures." },
    { id: "status-underdosed-benzodiazepine", text: "Underdosing first-line benzodiazepines (e.g. giving only 1–2 mg lorazepam) is the leading cause of status progression to refractory status epilepticus — give full guideline doses promptly (Lorazepam 4 mg IV or Midazolam 10 mg IM)." },
  ],
};
