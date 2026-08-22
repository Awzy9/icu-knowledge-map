import type { PhysiologyConcept } from "@/content-types";

export const rvFailureDynamic: PhysiologyConcept = {
  id: "physiology.rv-failure-dynamic",
  slug: "rv-failure-dynamic",
  title: "RV Failure: Afterload, Interdependence, and Treatment Pitfalls",
  system: "cardiovascular",
  summary:
    "Why the right ventricle fails at acutely elevated afterloads, how interventricular interdependence propagates that failure to the left heart, and why standard resuscitation manoeuvres — fluid, high PEEP, intubation — can be catastrophic.",
  definition:
    "Acute right ventricular failure occurs when pulmonary vascular resistance rises faster than the thin-walled, pressure-naïve RV can adapt, causing RV dilation, septal shift, LV underfilling, and circulatory collapse. Unlike the left ventricle, the RV is designed to accommodate volume, not pressure — it lacks the muscle mass to sustain high afterloads.",
  mechanism:
    "The normal RV operates at low pressure (~25/5 mmHg) and fills easily at low end-diastolic pressures. When PVR rises acutely — from massive PE, severe ARDS, acute hypoxia, hypercapnia, or acidosis — RV wall stress increases. The RV initially compensates by dilating (Frank-Starling) to maintain stroke volume, but in the non-hypertrophied RV, dilation quickly becomes maladaptive.\n\nRV dilation causes leftward displacement of the interventricular septum (ventricular interdependence), mechanically compressing the LV cavity. LV end-diastolic volume falls despite adequate systemic venous filling, reducing LV stroke volume and MAP — a paradox where the LV appears 'underfilled' even though the problem is entirely right-sided.\n\nThe RV is uniquely vulnerable to coronary ischaemia during failure: unlike the LV, the RV receives coronary perfusion throughout the entire cardiac cycle (both systole and diastole). As RV pressure rises and MAP falls, the aorta-to-RV pressure gradient narrows in both phases, critically reducing RV coronary perfusion. This creates a vicious cycle: ischaemia → worse contractility → more dilation → more septal shift → lower MAP → worse ischaemia.",
  clinicalSignificance:
    "RV failure defines a shock physiology diametrically opposed to LV failure in its management: fluid loading worsens septal shift; vasopressors that raise aortic diastolic pressure restore RV coronary perfusion; intubation and high PEEP can precipitate acute decompensation. Failure to recognise RV failure before intervention is one of the most lethal errors in critical care.",
  icuApplications: [
    "In RV failure, norepinephrine is the vasopressor of choice — it raises aortic diastolic pressure (restoring RV coronary perfusion gradient) while also providing some pulmonary vasoconstriction at low doses.",
    "Fluid boluses in RV failure often worsen haemodynamics by further distending an already volume-overloaded RV, increasing septal shift and reducing LV filling — this is the opposite of septic shock physiology.",
    "Intubation in RV failure carries extreme risk: positive-pressure ventilation reduces venous return (drops RV preload), and any increase in mean airway pressure raises PVR (increases RV afterload). Have vasopressor support running before induction.",
    "Pulmonary vasodilators (inhaled nitric oxide, epoprostenol) reduce RV afterload selectively without systemic vasodilation — they are particularly useful in post-cardiac-surgery RV failure and severe ARDS-related cor pulmonale.",
    "Correcting the underlying cause of elevated PVR (treating hypoxia, hypercapnia, acidosis, decompressing massive PE) is the most important priority — vasopressors are a bridge, not a destination.",
  ],
  relatedConceptIds: [
    "physiology.afterload",
    "physiology.preload",
    "physiology.venous-return",
    "physiology.cardiac-output",
    "physiology.rv-failure-physiology",
  ],
  relatedTopicIds: [
  "rv-failure",
  "shock",
  "mechanical-ventilation"
],
  visual: {
    kind: "causal-chain",
    defaultState: "RV Ischemia & Dilatation Spiral",
    states: [
        {
            label: "RV Ischemia & Dilatation Spiral",
            description: "Thin-walled right ventricle afterload mismatch, dilation, ischemia, and ventricular interdependence",
            color: "red",
            chain: [
                {
                    text: "Acute increase in pulmonary vascular resistance (PE, ARDS, hypoxic vasoconstriction)",
                    direction: "up"
                },
                {
                    text: "Right ventricular afterload exceeds contractile reserve",
                    direction: "up"
                },
                {
                    text: "RV end-systolic volume increases and RV dilates",
                    direction: "up"
                },
                {
                    text: "RV wall tension rises, increasing RV myocardial oxygen demand",
                    direction: "up"
                },
                {
                    text: "Elevated RV intracavitary pressure compresses right coronary artery perfusion",
                    direction: "down"
                },
                {
                    text: "RV ischemia and contractile failure ensue",
                    direction: "down",
                    emphasis: true
                },
                {
                    text: "Interventricular septum shifts leftward (ventricular interdependence)",
                    direction: "neutral"
                },
                {
                    text: "Left ventricular cavity distorted, reducing LV filling, stroke volume, and systemic MAP",
                    direction: "down",
                    emphasis: true
                }
            ]
        },
        {
            label: "Targeted Resuscitation",
            description: "Reduction of RV afterload, support of right coronary perfusion, and cautious volume control",
            color: "green",
            chain: [
                {
                    text: "Avoid fluid overloading to prevent worsening RV wall tension and septal shift",
                    direction: "neutral"
                },
                {
                    text: "Norepinephrine infused to raise aortic diastolic pressure and restore right coronary artery perfusion",
                    direction: "up"
                },
                {
                    text: "Inhaled pulmonary vasodilator (iNO or inhaled prostacyclin) selectively lowers PVR",
                    direction: "down"
                },
                {
                    text: "RV afterload decreases while maintaining systemic MAP",
                    direction: "down"
                },
                {
                    text: "RV chamber size diminishes and septal shift resolves",
                    direction: "down"
                },
                {
                    text: "Left ventricular preload and systemic cardiac output recover",
                    direction: "up",
                    emphasis: true
                }
            ]
        }
    ]
},
};
