import type { Pathway } from "@/content-types";

export const neurologicDeteriorationWorkflow: Pathway = {
  id: "neurologic-deterioration-workflow",
  slug: "neurologic-deterioration-workflow",
  title: "Acute Neurologic Deterioration & Brain Death Workflow",
  oneLiner: "From acute GCS drop and herniation emergency measures to emergent CT, neurocritical intervention, and death by neurologic criteria determination.",
  startingProblem: "Acute Neurological Deterioration (Drop in GCS >= 2 / Pupillary Asymmetry)",
  relatedTopicIds: [
      "altered-consciousness",
      "acute-ischemic-stroke",
      "intracranial-hemorrhage",
      "intracranial-hypertension",
      "severe-tbi",
      "brain-death",
      "status-epilepticus",
      "icu-sedation-delirium"
    ],
  flow: {
    id: "rapid-airway-glucose-check",
    label: "Stabilize airway & circulation; check fingerstick glucose immediately",
    kind: "step",
    role: "assessment",
    detail: "If GCS <= 8 or loss of protective airway reflexes, perform rapid sequence intubation with neuroprotective precautions (avoid hypoxia and hypotension, maintain MAP >= 80–90).",
    topicId: "altered-consciousness",
    children: [
      {
        id: "check-herniation-signs",
        label: "Check for signs of acute brain herniation or severely elevated ICP",
        kind: "branch",
        role: "decision",
        detail: "Signs: unilateral dilated fixed pupil, decerebrate/decorticate posturing, Cushing's triad (bradycardia, severe hypertension, irregular respirations).",
        children: [
          {
            id: "emergent-herniation-management",
            label: "Herniation Present: Emergent Osmotherapy & Temporary Hyperventilation",
            kind: "step",
            role: "intervention",
            detail: "Administer 3% Hypertonic Saline (250 mL IV over 10–15 min) or Mannitol 20% (1 g/kg IV rapid bolus). Elevate head of bed 30 degrees. Hyperventilate temporarily to PaCO2 30–35 mmHg.",
            children: [
              {
                id: "emergent-head-ct-scan",
                label: "Transport immediately for Emergent Non-Contrast Head CT",
                kind: "step",
                role: "assessment",
                detail: "Identify mass effect, midline shift, intracranial hemorrhage (ICH, SDH, EDH, SAH), hydrocephalus, or large hemispheric infarction.",
                children: [
                  {
                    id: "surgical-vs-medical-decision",
                    label: "Evaluate for emergent neurosurgical vs medical neurocritical management",
                    kind: "branch",
                    role: "decision",
                    detail: "Surgical: emergent hematoma evacuation, decompressive hemicraniectomy, or EVD for hydrocephalus. Medical: targeted temperature management, ICP monitoring, antiepileptic therapy.",
                    children: [
                      {
                        id: "unrecoverable-brain-death-eval",
                        label: "Catastrophic Unrecoverable Injury: Formal Brain Death Evaluation",
                        kind: "step",
                        role: "assessment",
                        detail: "When clinical criteria met: irreversible coma, absence of all brainstem reflexes (pupillary, corneal, oculocephalic, oculovestibular, gag, cough), and positive apnea test (PaCO2 >= 60 with no respiratory effort) after excluding hypothermia, shock, and confounding CNS depressants.",
                        topicId: "brain-death",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "no-herniation-focal-workup",
            label: "No Herniation: Perform urgent Non-Contrast CT Head & metabolic panel",
            kind: "step",
            role: "assessment",
            detail: "Evaluate stroke / intracranial hemorrhage, sepsis-associated encephalopathy, hepatic encephalopathy (ammonia), uremia, and drug intoxication.",
          },
        ],
      },
    ],
  },
  redFlags: [
    { id: "neuro-hypotension-secondary-injury", text: "Even a single episode of hypotension (SBP < 90 mmHg or MAP < 65) or hypoxemia (SpO2 < 90%) in acute brain injury doubles patient mortality — aggressively defend cerebral perfusion pressure (CPP = MAP - ICP >= 60–70 mmHg)." },
    { id: "neuro-sedative-confounder-brain-death", text: "Brain death determination must NOT be performed until all sedative infusions (fentanyl, propofol, midazolam) have completely cleared based on pharmacokinetics (or validated by drug levels/EEG)." },
  ],
};
