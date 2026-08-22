import type { PhysiologyConcept } from "@/content-types";

export const cerebralPerfusionCpp: PhysiologyConcept = {
  "id": "physiology.cerebral-perfusion-cpp",
  "slug": "cerebral-perfusion-cpp",
  "title": "Cerebral Perfusion Pressure: CPP = MAP − ICP Dynamics",
  "system": "cardiovascular",
  "summary": "The biophysical determinant of cerebral blood flow in acute brain injury, autoregulatory limits, and Brain Trauma Foundation management targets.",
  "definition": "Cerebral Perfusion Pressure (CPP) is the net pressure gradient driving blood flow through the cerebral microcirculation to supply oxygen and glucose to brain tissue, defined mathematically as: CPP = Mean Arterial Pressure (MAP) - Intracranial Pressure (ICP) [or Central Venous Pressure, whichever is higher].",
  "mechanism": "In the healthy brain, Cerebral Autoregulation maintains a constant Cerebral Blood Flow (CBF) across a wide range of CPP (50–150 mmHg) by dynamic arteriolar vasoconstriction and vasodilation.\n\nIn severe traumatic brain injury, subarachnoid hemorrhage, or intracranial hypertension, autoregulation is frequently impaired or shifted rightward. Cerebral blood flow becomes passively dependent on perfusion pressure.\n\nWhen ICP rises (e.g., to 35 mmHg) and MAP is low or normal (e.g., 75 mmHg), CPP drops to 40 mmHg, below the critical ischemic threshold. Microvascular collapse occurs in the ischemic penumbra surrounding the brain contusion, triggering cellular ATP depletion, cytotoxic edema, and secondary brain infarction. Conversely, excessive CPP (>70–80 mmHg) drives vasogenic edema and increases the incidence of Acute Respiratory Distress Syndrome (ARDS).",
  "clinicalSignificance": "Maintaining CPP strictly between 60 and 70 mmHg prevents secondary ischemic neuronal death without inducing systemic hypervolemic complications.",
  "icuApplications": [
    "Brain Trauma Foundation target: Maintain CPP between 60 and 70 mmHg.",
    "If ICP is elevated, use Tier 1/2 osmotherapy (3% Hypertonic Saline or Mannitol), head elevation (30°), and sedation to lower ICP.",
    "If CPP remains <60 mmHg despite ICP control, titrate Norepinephrine infusion to elevate MAP.",
    "Avoid aggressive hyperventilation (PaCO2 < 30 mmHg) which causes severe cerebral vasoconstriction and worsens brain tissue hypoxia (PbtO2 < 15 mmHg)."
  ],
  "relatedConceptIds": [
    "physiology.svr",
    "physiology.cardiac-output"
  ],
  "relatedTopicIds": [
    "intracranial-hypertension",
    "severe-tbi",
    "altered-consciousness"
  ],
  visual: {
    kind: "causal-chain",
    defaultState: "Intracranial Hypertension & Ischemia",
    states: [
        {
            label: "Intracranial Hypertension & Ischemia",
            description: "Elevated ICP compressing cerebral microcirculation and compromising CPP",
            color: "red",
            chain: [
                {
                    text: "Traumatic contusion, mass lesion, or diffuse cerebral edema within rigid skull (Monro-Kellie doctrine)"
                },
                {
                    text: "Intracranial pressure (ICP) rises significantly (>20–22 mmHg)",
                    direction: "up",
                    emphasis: true
                },
                {
                    text: "Cerebral Perfusion Pressure formula: CPP = MAP - ICP",
                    direction: "neutral"
                },
                {
                    text: "Elevated ICP directly reduces CPP below the critical threshold (<60 mmHg)",
                    direction: "down",
                    emphasis: true
                },
                {
                    text: "Cerebral microvascular beds compressed, diminishing cerebral blood flow (CBF)",
                    direction: "down"
                },
                {
                    text: "Cerebral tissue ischemia, ATP depletion, and worsening cytotoxic edema",
                    direction: "down"
                },
                {
                    text: "Ischemia triggers reflex autonomic hypertension and bradycardia (Cushing's response)",
                    direction: "up",
                    emphasis: true
                }
            ]
        },
        {
            label: "CPP Optimization Protocol",
            description: "Osmotherapy, targeted MAP elevation, and ICP reduction to maintain tissue oxygenation",
            color: "green",
            chain: [
                {
                    text: "Head of bed elevated 30° to promote cerebral venous drainage without compromising MAP",
                    direction: "down"
                },
                {
                    text: "Hyperosmolar therapy (3% Hypertonic Saline or Mannitol) pulls water from intact brain parenchyma",
                    direction: "down"
                },
                {
                    text: "Intracranial pressure (ICP) drops < 20–22 mmHg",
                    direction: "down",
                    emphasis: true
                },
                {
                    text: "Titrate vasopressors (Norepinephrine) to maintain MAP sufficient for CPP target 60–70 mmHg",
                    direction: "up",
                    emphasis: true
                },
                {
                    text: "Cerebral blood flow and microvascular perfusion are restored",
                    direction: "up"
                },
                {
                    text: "Secondary ischemic neuronal injury is halted",
                    direction: "down"
                }
            ]
        }
    ]
},
};
