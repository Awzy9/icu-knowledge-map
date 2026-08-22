import type { PhysiologyConcept } from "@/content-types";

export const cardiogenicShockPhysiology: PhysiologyConcept = {
  id: "physiology.cardiogenic-shock-physiology",
  slug: "cardiogenic-shock-physiology",
  title: "Cardiogenic Shock: LV Failure and Circulatory Collapse",
  system: "cardiovascular",
  summary:
    "How left ventricular contractile failure creates a lethal cycle of falling cardiac output, rising filling pressures, pulmonary oedema, and ischaemia that worsens the very heart it originates from.",
  definition:
    "Cardiogenic shock is pump failure shock: the left ventricle cannot generate sufficient stroke volume to meet tissue demands, causing low cardiac output, high left ventricular end-diastolic pressure, and downstream organ hypoperfusion. Unlike distributive shock, SVR is typically elevated as a compensatory baroreceptor response.",
  mechanism:
    "Loss of LV contractility — whether from myocardial infarction, decompensated cardiomyopathy, acute myocarditis, or arrhythmia — reduces stroke volume. Cardiac output falls. Baroreceptors sense the drop in MAP and trigger sympathetic activation: tachycardia (which partially compensates CO), increased SVR (which raises afterload), and sodium and water retention (which raises preload). These compensatory mechanisms sustain MAP in early decompensation but at the cost of worsening LV workload.\n\nAs stroke volume falls further, left ventricular end-diastolic pressure rises, is transmitted to the left atrium and pulmonary veins, and eventually exceeds pulmonary capillary oncotic pressure. The result is cardiogenic pulmonary oedema, alveolar flooding, and hypoxaemia — which in turn worsens myocardial ischaemia in the case of AMI-related shock. Falling coronary perfusion pressure and rising myocardial oxygen demand from tachycardia and increased wall tension create a death spiral: ischaemia → more contractile failure → worse shock → more ischaemia.\n\nThis bidirectional pathophysiology explains why the haemodynamic target in cardiogenic shock differs fundamentally from other shock types: reducing afterload can improve stroke volume more than vasopressors, but the choice depends on whether MAP is already critically low.",
  clinicalSignificance:
    "Cardiogenic shock demands mechanical circulatory support (IABP, Impella, ECMO) early in refractory cases, as vasopressors alone can perpetuate ischaemia by increasing myocardial oxygen demand. The haemodynamic phenotype — wet and cold (high LVEDP, low CO) — is the opposite of distributive shock, making the distinction critical for management.",
  icuApplications: [
    "Dobutamine improves contractility and reduces filling pressures but increases myocardial oxygen demand — use cautiously in AMI-related cardiogenic shock where demand exceeds supply.",
    "Norepinephrine is the preferred vasopressor in cardiogenic shock when MAP is critically low, providing α1-mediated vasoconstriction without the β-agonist-mediated tachycardia of dopamine.",
    "Early revascularisation (PCI) is the priority in AMI-related cardiogenic shock — restoring blood flow to jeopardised myocardium is the only treatment that addresses the root cause.",
    "Pulmonary artery catheter (PAC) may clarify the haemodynamic phenotype — distinguishing purely cardiogenic (low CI, high PCWP) from mixed cardiogenic-distributive (as in sepsis superimposed on heart failure).",
    "Mechanical circulatory support (Impella, ECMO) should be considered before the patient deteriorates into refractory shock — device implantation in extremis carries very high procedural risk.",
  ],
  relatedConceptIds: [
    "physiology.contractility",
    "physiology.preload",
    "physiology.afterload",
    "physiology.cardiac-output",
  ],
  relatedTopicIds: [
  "cardiogenic-shock",
  "acute-coronary-syndrome",
  "acute-heart-failure"
],
  visual: {
    kind: "causal-chain",
    defaultState: "Primary Pump Failure",
    states: [
        {
            label: "Primary Pump Failure",
            description: "Myocardial contractility failure, forward output collapse, and pulmonary venous congestion",
            color: "red",
            chain: [
                {
                    text: "Acute myocardial ischemia, severe infarction, or decompensated myopathy"
                },
                {
                    text: "Myocardial contractility plummeting (inotropy impairment)",
                    direction: "down"
                },
                {
                    text: "Stroke volume and cardiac output collapse (CI < 2.0 L/min/m²)",
                    direction: "down",
                    emphasis: true
                },
                {
                    text: "End-systolic volume rises, elevating left ventricular end-diastolic pressure (LVEDP)",
                    direction: "up"
                },
                {
                    text: "Retrograde pressure transmission into pulmonary veins and capillaries (PCWP > 18 mmHg)",
                    direction: "up"
                },
                {
                    text: "Hydrostatic pulmonary edema and severe gas exchange impairment",
                    direction: "up"
                },
                {
                    text: "Compensatory neurohormonal SVR elevation increases LV afterload, worsening myocardial failure",
                    direction: "up",
                    emphasis: true
                }
            ]
        },
        {
            label: "Inotrope / MCS Support",
            description: "Inotropic stimulation and mechanical circulatory unloading to restore cardiac power",
            color: "green",
            chain: [
                {
                    text: "Initiation of inotrope (Dobutamine/Milrinone) ± temporary mechanical circulatory support"
                },
                {
                    text: "Beta-1/PDE-3 stimulation enhances cyclic AMP and myocardial contractility",
                    direction: "up"
                },
                {
                    text: "Stroke volume and cardiac index increase",
                    direction: "up"
                },
                {
                    text: "Left ventricular end-diastolic volume and filling pressures decrease",
                    direction: "down"
                },
                {
                    text: "Pulmonary capillary wedge pressure (PCWP) falls, relieving alveolar edema",
                    direction: "down"
                },
                {
                    text: "Coronary and systemic organ perfusion pressures improve",
                    direction: "up",
                    emphasis: true
                },
                {
                    text: "Targeted afterload optimization reduces total myocardial work",
                    direction: "down"
                }
            ]
        }
    ]
},
};
