import type { PhysiologyConcept } from "@/content-types";

export const obstructiveShockPePhysiology: PhysiologyConcept = {
  "id": "physiology.obstructive-shock-pe-physiology",
  "slug": "obstructive-shock-pe-physiology",
  "title": "Obstructive Shock: Massive Pulmonary Embolism & Acute Cor Pulmonale",
  "system": "cardiovascular",
  "summary": "Acute mechanical pulmonary vascular occlusion, abrupt RV afterload spike, interventricular dependence, and systemic circulatory collapse.",
  "definition": "Massive pulmonary embolism produces acute obstructive shock when thrombus occludes >50% of the pulmonary arterial bed, abruptly exceeding the thin-walled right ventricle's pressure-generating capacity and triggering acute RV dilation, leftward septal shift, and left ventricular underfilling.",
  "mechanism": "The normal right ventricle is a thin-walled, compliant volume pump unaccustomed to acute pressure overloads. When acute mechanical obstruction and neurohumoral vasoconstrictors (thromboxane A2, serotonin) double or triple pulmonary vascular resistance, RV systolic pressure cannot exceed 50–60 mmHg.\n\nThe RV acutely dilates and its wall tension spikes (Laplace's Law), dramatically increasing RV myocardial oxygen consumption while compressing right coronary artery capillary perfusion in the wall.\n\nAs the RV dilates within the non-compliant pericardial sac, ventricular interdependence causes the interventricular septum to shift leftward ('D-shaped LV'), restricting left ventricular diastolic filling. LV stroke volume collapses, MAP plummets, and systemic hypotension extinguishes aortic root driving pressure to the right coronary artery, completing a fatal ischemic spiral.",
  "clinicalSignificance": "Recognizing that hypotension in massive PE is driven by mechanical obstruction and RV ischemia dictates immediate reperfusion (systemic thrombolysis or catheter embolectomy) and avoiding excessive fluid loading.",
  "icuApplications": [
    "Systemic thrombolysis (Alteplase 100 mg IV over 2 hours, or 50 mg push in arrest) is first-line for hemodynamically unstable PE.",
    "Norepinephrine is the vasopressor of choice to elevate aortic diastolic pressure and restore RV coronary perfusion.",
    "Fluid loading is dangerous and should be limited to <500 mL — overdistension worsens septal flattening and collapses LV cardiac output.",
    "Inhaled pulmonary vasodilators (inhaled epoprostenol or nitric oxide) can selectively unload the RV without causing systemic hypotension."
  ],
  "relatedConceptIds": [
    "physiology.svr",
    "physiology.cardiac-output",
    "physiology.preload",
    "physiology.afterload"
  ],
  "relatedTopicIds": [
    "pulmonary-embolism",
    "rv-failure",
    "shock"
  ],
  visual: {
    kind: "causal-chain",
    defaultState: "Massive Pulmonary Embolism",
    states: [
        {
            label: "Massive Pulmonary Embolism",
            description: "Mechanical pulmonary arterial obstruction and acute cor pulmonale",
            color: "red",
            chain: [
                {
                    text: "Large embolus lodges in main or lobar pulmonary arteries",
                    emphasis: true
                },
                {
                    text: "Cross-sectional area of pulmonary vascular bed sharply reduced",
                    direction: "down"
                },
                {
                    text: "Neurohumoral vasoconstrictors (thromboxane A2, serotonin) released",
                    direction: "up"
                },
                {
                    text: "Pulmonary vascular resistance spikes abruptly",
                    direction: "up"
                },
                {
                    text: "Right ventricle acutely afterload-mismatched, dilates and fails",
                    direction: "down"
                },
                {
                    text: "Interventricular septal bowing compresses LV cavity",
                    direction: "neutral"
                },
                {
                    text: "LV stroke volume collapses, precipitating obstructive shock and cardiac arrest",
                    direction: "down",
                    emphasis: true
                }
            ]
        },
        {
            label: "Thrombolysis / Reperfusion",
            description: "Rapid clot lysis restoring pulmonary vascular patency and RV ejection",
            color: "green",
            chain: [
                {
                    text: "Systemic thrombolytic (e.g. Alteplase) or catheter-directed reperfusion initiated",
                    emphasis: true
                },
                {
                    text: "Fibrinolysis rapidly degrades pulmonary arterial thrombi",
                    direction: "down"
                },
                {
                    text: "Pulmonary vascular resistance decreases toward normal",
                    direction: "down"
                },
                {
                    text: "Right ventricular afterload is unloaded",
                    direction: "down"
                },
                {
                    text: "RV stroke volume and transpulmonary blood flow are restored",
                    direction: "up"
                },
                {
                    text: "Left ventricular preload normalizes and septal bowing resolves",
                    direction: "up"
                },
                {
                    text: "Systemic arterial pressure and organ perfusion recover",
                    direction: "up",
                    emphasis: true
                }
            ]
        }
    ]
},
};
