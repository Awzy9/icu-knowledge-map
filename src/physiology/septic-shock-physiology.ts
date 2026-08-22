import type { PhysiologyConcept } from "@/content-types";

export const septicShockPhysiology: PhysiologyConcept = {
  id: "physiology.septic-shock-physiology",
  slug: "septic-shock-physiology",
  title: "Septic Shock: From Infection to Hemodynamic Failure",
  system: "cardiovascular",
  summary:
    "How pathogen recognition triggers a cytokine storm that causes profound vasodilation, capillary leak, and distributive shock despite a high cardiac output.",
  definition:
    "Septic shock is a distributive shock state in which microbial pattern recognition activates NF-κB, unleashing inflammatory mediators — especially nitric oxide — that cause profound vasodilation and endothelial injury. Mean arterial pressure falls not because cardiac output is low (it is often supranormal) but because systemic vascular resistance collapses.",
  mechanism:
    "Pathogen-associated molecular patterns (PAMPs) — lipopolysaccharide from gram-negatives, peptidoglycan from gram-positives, fungal glucans — bind Toll-like receptors on macrophages and neutrophils, activating NF-κB. This drives massive transcription of pro-inflammatory cytokines (TNF-α, IL-1β, IL-6) and inducible nitric oxide synthase (iNOS). The resulting nitric oxide surge causes vascular smooth muscle relaxation, systemic vasodilation, and a precipitous fall in SVR.\n\nSimultaneously, endothelial activation increases permeability, allowing protein-rich fluid to extravasate into the interstitium. This reduces effective circulating volume and venous return, compounding the MAP fall despite compensatory tachycardia and a hyperdynamic cardiac output. The clinical picture is warm, vasodilated extremities with rapid, bounding pulses — the hallmark of distributive shock.\n\nCardiac function may also be directly impaired by sepsis-induced myocardial depression (cytokine-mediated), which becomes clinically significant in patients who cannot sustain the compensatory increase in cardiac output. As shock deepens, tissue hypoxia drives lactate accumulation, further impairing myocardial and vascular function in a self-reinforcing cycle.",
  clinicalSignificance:
    "The haemodynamic signature of septic shock — low SVR with high or normal cardiac output — mandates vasopressors (primarily norepinephrine) as the cornerstone of treatment. Mistaking septic shock for cardiogenic shock and withholding vasopressors while loading with fluids risks worsening oedema without restoring perfusion pressure. Conversely, attributing all hypotension to volume depletion ignores the vasodilatory mechanism and under-treats with vasopressors.",
  icuApplications: [
    "Norepinephrine is first-line vasopressor because its α1-mediated vasoconstriction directly reverses the SVR deficit without significantly increasing myocardial oxygen demand at typical doses.",
    "Fluid resuscitation corrects the hypovolaemia component (capillary leak) but cannot compensate for the vasodilatory component — both must be treated simultaneously.",
    "Vasopressin (0.03–0.04 u/min) as a second vasopressor targets V1 receptors on vascular smooth muscle, providing additional vasoconstriction independent of the adrenergic axis.",
    "Persistent hyperlactataemia despite adequate MAP (>65 mmHg) suggests microvascular shunting or mitochondrial dysfunction — not simply inadequate macrovascular resuscitation.",
    "Hydrocortisone 200 mg/day is indicated in refractory septic shock, partly by restoring adrenergic receptor sensitivity and partly by attenuating the inflammatory cascade.",
  ],
  relatedConceptIds: [
    "physiology.svr",
    "physiology.cardiac-output",
    "physiology.venous-return",
    "physiology.do2-vo2-relationship",
  ],
  relatedTopicIds: [
  "septic-shock",
  "shock"
],
  visual: {
    kind: "causal-chain",
    defaultState: "Pathology (Distributive Shock)",
    states: [
        {
            label: "Pathology (Distributive Shock)",
            description: "Pathological microvascular vasodilation, endothelial permeability, and relative hypovolemia",
            color: "red",
            chain: [
                {
                    text: "Systemic infection triggers widespread pathogen-associated inflammatory surge"
                },
                {
                    text: "Nitric oxide & prostacyclin overproduction drives profound arteriolar vasodilation",
                    direction: "up"
                },
                {
                    text: "Systemic vascular resistance (SVR) and effective arterial blood volume collapse",
                    direction: "down"
                },
                {
                    text: "Venous capacitance increases and capillary leak causes plasma extravasation",
                    direction: "up"
                },
                {
                    text: "Mean systemic filling pressure and effective preload fall",
                    direction: "down"
                },
                {
                    text: "Mitochondrial dysfunction and microcirculatory shunting impair cellular O2 extraction",
                    direction: "down",
                    emphasis: true
                },
                {
                    text: "Tissue dysoxia, hyperlactatemia, and multi-organ dysfunction occur",
                    direction: "up",
                    emphasis: true
                }
            ]
        },
        {
            label: "Resuscitation (+ Norepinephrine & Fluids)",
            description: "Restoration of vascular tone and perfusion pressure with crystalloid and alpha-1 vasopressor",
            color: "blue",
            chain: [
                {
                    text: "Balanced crystalloid restores intravascular volume deficit"
                },
                {
                    text: "Norepinephrine stimulates alpha-1 adrenergic receptors on systemic arterioles and venules",
                    direction: "up"
                },
                {
                    text: "Arteriolar vasoconstriction restores systemic vascular resistance (SVR)",
                    direction: "up"
                },
                {
                    text: "Venoconstriction un-stresses blood volume, raising mean systemic filling pressure",
                    direction: "up"
                },
                {
                    text: "Venous return gradient and stroke volume are supported",
                    direction: "up"
                },
                {
                    text: "Mean arterial pressure (MAP ≥65 mmHg) restored for organ perfusion",
                    direction: "up",
                    emphasis: true
                },
                {
                    text: "Microcirculatory perfusion and oxygen delivery stabilize",
                    direction: "up"
                }
            ]
        }
    ]
},
};
