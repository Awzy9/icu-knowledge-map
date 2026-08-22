import type { PhysiologyConcept } from "@/content-types";

export const aorticDissectionPhysiology: PhysiologyConcept = {
  "id": "physiology.aortic-dissection-physiology",
  "slug": "aortic-dissection-physiology",
  "title": "Aortic Dissection: Shear Stress (dP/dt), Beta-Blockade, and Vasodilation",
  "system": "cardiovascular",
  "summary": "The biophysics of aortic intimal tearing, the critical role of ventricular contractility (dP/dt), and why beta-blockers must precede vasodilators.",
  "definition": "Acute aortic dissection occurs when a tear in the aortic intima allows pressurized pulsatile blood to dissect the media, creating a false lumen that propagates along the aorta and risks catastrophic pericardial tamponade, coronary ostial occlusion, or aortic rupture.",
  "mechanism": "The mechanical force driving propagation of an intimal flap is not merely mean arterial pressure, but the velocity of pressure rise during early ventricular systole: dP/dt (the rate of change of left ventricular pressure over time), combined with absolute systolic blood pressure and heart rate.\n\nAdministering a direct arterial vasodilator (such as Nicardipine, Hydralazine, or Nitroprusside) without prior beta-blockade triggers baroreceptor-mediated reflex sympathetic activation. Circulating catecholamines increase myocardial contractility and heart rate, dramatically steepening the dP/dt slope.\n\nThis increased pulsatile shear wave collides with the aortic root with each heartbeat, propagating the dissection flap proximally or distally and dramatically increasing the risk of fatal rupture. IV beta-blockers (Esmolol, Labetalol) directly depress LV contractility and slow heart rate, flattening the dP/dt curve before blood pressure is lowered.",
  "clinicalSignificance": "The mandatory chronological sequence in acute aortic syndromes is: Beta-block first (HR < 60 bpm), then vasodilate (SBP 100–120 mmHg).",
  "icuApplications": [
    "First drug: IV Esmolol continuous infusion (or IV Labetalol boluses) titrated to heart rate < 60 bpm.",
    "Second drug: Add IV Nicardipine or Clevidipine infusion once HR < 60 bpm to titrate SBP strictly between 100 and 120 mmHg.",
    "Avoid pure vasodilators (Hydralazine, Sodium Nitroprusside monotherapy) which trigger reflex tachycardia.",
    "Type A dissections (ascending aorta) require immediate emergency cardiothoracic surgical repair; Type B dissections (descending) are managed medically with impulse-control unless malperfusion or rupture occurs."
  ],
  "relatedConceptIds": [
    "physiology.svr",
    "physiology.contractility",
    "physiology.afterload"
  ],
  "relatedTopicIds": [
    "acute-aortic-syndromes",
    "hypertensive-emergencies"
  ],
  visual: {
    kind: "causal-chain",
    defaultState: "Intimal Tear & False Lumen Propagation",
    states: [
        {
            label: "Intimal Tear & False Lumen Propagation",
            description: "Intimal tear, high dP/dt sheer stress, false lumen expansion, and branch vessel malperfusion",
            color: "red",
            chain: [
                {
                    text: "Pre-existing media degeneration + elevated systemic blood pressure and pulse wave stress (dP/dt)"
                },
                {
                    text: "Intimal tear develops in aortic wall, exposing media to pulsatile blood flow",
                    direction: "up",
                    emphasis: true
                },
                {
                    text: "Pulsatile jet cleaves aortic media longitudinally, creating true and false lumens",
                    direction: "up"
                },
                {
                    text: "High shear stress (dP/dt) drives rapid false lumen propagation along aortic circumference",
                    direction: "up",
                    emphasis: true
                },
                {
                    text: "Static or dynamic obstruction of branch vessels (coronary, carotid, renal, mesenteric, spinal)",
                    direction: "down"
                },
                {
                    text: "Risk of catastrophic rupture into pericardium (tamponade), pleural space, or aortic valve disruption (acute AR)",
                    direction: "up",
                    emphasis: true
                }
            ]
        },
        {
            label: "Anti-Impulse Therapy (Beta-Blocker + Vasodilator)",
            description: "Targeted reduction of dP/dt and blood pressure to halt propagation",
            color: "green",
            chain: [
                {
                    text: "Immediate IV short-acting beta-blocker (e.g. Esmolol infusion) initiated FIRST",
                    emphasis: true
                },
                {
                    text: "Beta-1 blockade decreases left ventricular contractility and heart rate (HR 55–65 bpm)",
                    direction: "down",
                    emphasis: true
                },
                {
                    text: "Aortic shear stress (dP/dt = rate of pressure rise) plummets",
                    direction: "down",
                    emphasis: true
                },
                {
                    text: "Secondary titratable vasodilator (Nicardipine/Nitroprusside) added ONLY AFTER beta-blockade",
                    direction: "down"
                },
                {
                    text: "Systolic blood pressure lowered to target 100–120 mmHg without reflex tachycardia",
                    direction: "down"
                },
                {
                    text: "False lumen propagation arrested and rupture risk minimized while preparing for surgical or endovascular repair",
                    direction: "down"
                }
            ]
        }
    ]
},
};
