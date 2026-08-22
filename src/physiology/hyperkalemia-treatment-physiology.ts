import type { PhysiologyConcept } from "@/content-types";

export const hyperkalemiaTreatmentPhysiology: PhysiologyConcept = {
  "id": "physiology.hyperkalemia-treatment-physiology",
  "slug": "hyperkalemia-treatment-physiology",
  "title": "Hyperkalemia: Membrane Excitability, Shifting, and Elimination",
  "system": "cardiovascular",
  "summary": "Cardiac resting membrane potential dynamics and the three-pillar therapeutic strategy: Stabilize the membrane, Shift K+ intracellularly, and Eliminate K+ from the body.",
  "definition": "Hyperkalemia (serum K+ > 5.0–5.5 mEq/L) alters the cardiac transmembrane electrochemical gradient, partially depolarizing resting membrane potential and predisposing to fatal conduction blocks, sine waves, and ventricular fibrillation.",
  "mechanism": "The cardiac resting membrane potential (Em) is determined primarily by the Nernst equilibrium for potassium: Em = -61.5 × log([K+]in / [K+]out). As extracellular potassium rises, the ratio [K+]in / [K+]out decreases, making the resting membrane potential less negative (e.g., from -90 mV toward -70 mV).\n\nThis resting depolarization partially inactivates fast voltage-gated sodium channels (Nav1.5), slowing phase 0 depolarization velocity (dV/dt) and prolonging intraventricular conduction (peaked T waves → PR prolongation → QRS widening → sine wave → VF/asystole).\n\nManagement requires a three-pillar physiological strategy:\n1. Stabilize: IV Calcium raises the cardiac threshold potential, restoring the normal safety margin between resting and threshold potentials without lowering serum K+.\n2. Shift: Regular Insulin + Dextrose, Beta-2 agonists (Albuterol), and Sodium Bicarbonate activate the Na+/K+ ATPase, rapidly pumping potassium into cells for 2–4 hours.\n3. Eliminate: Loop diuretics, potassium binders (Patiromer, ZS-9), or Hemodialysis remove potassium from the body permanently.",
  "clinicalSignificance": "Recognizing that calcium does not lower potassium, and that insulin/albuterol only buy transient time, ensures clinicians establish definitive potassium excretion before rebound hyperkalemia occurs.",
  "icuApplications": [
    "Calcium Gluconate (10–30 mL IV 10%) works in 1–3 minutes and lasts 30–60 minutes — repeat if ECG widening persists.",
    "Regular Insulin 10 units IV with 25–50 g Dextrose (D50W) shifts K+ within 15–30 minutes, lowering serum K+ by 0.5–1.0 mEq/L.",
    "Albuterol 10–20 mg nebulized (4–8 times standard asthma dose) provides additive shifting via beta-2 receptor cAMP stimulation.",
    "Hemodialysis is the gold standard for rapid potassium elimination in oliguric renal failure or severe refractory hyperkalemia."
  ],
  "relatedConceptIds": [
    "physiology.potassium-handling",
    "physiology.sodium-handling"
  ],
  "relatedTopicIds": [
    "hyperkalemia",
    "aki",
    "crrt"
  ],
  visual: {
    kind: "causal-chain",
    defaultState: "Severe Hyperkalemia (Cardiotoxicity)",
    states: [
        {
            label: "Severe Hyperkalemia (Cardiotoxicity)",
            description: "Elevated extracellular K+ reducing resting membrane potential and slowing conduction",
            color: "red",
            chain: [
                {
                    text: "Extracellular K+ concentration rises significantly ([K+] > 6.5 mEq/L)",
                    direction: "up"
                },
                {
                    text: "Nernst potential shifts: resting membrane potential becomes less negative (-90 mV → -70 mV)",
                    direction: "up"
                },
                {
                    text: "Voltage-gated fast Na+ channels become progressively inactivated",
                    direction: "down",
                    emphasis: true
                },
                {
                    text: "Phase 0 depolarization rate (Vmax) slows drastically",
                    direction: "down"
                },
                {
                    text: "Intracardiac conduction velocity slows: peaked T waves → PR prolongation → QRS widening",
                    direction: "down"
                },
                {
                    text: "Sine-wave pattern, ventricular fibrillation, or asystole risk",
                    direction: "neutral",
                    emphasis: true
                }
            ]
        },
        {
            label: "IV Calcium (Membrane Stabilization)",
            description: "Calcium restoring threshold potential difference without altering serum potassium",
            color: "amber",
            chain: [
                {
                    text: "IV Calcium Gluconate (or Calcium Chloride) administered immediately",
                    emphasis: true
                },
                {
                    text: "Extracellular Ca2+ concentration increases at myocardial surface",
                    direction: "up"
                },
                {
                    text: "Threshold potential (Vth) shifts to a less negative level",
                    direction: "up"
                },
                {
                    text: "Normal difference between resting membrane potential and threshold is restored",
                    direction: "neutral",
                    emphasis: true
                },
                {
                    text: "Fast Na+ channels recover from voltage-inactivation",
                    direction: "up"
                },
                {
                    text: "Myocardial conduction velocity normalizes; QRS narrows within 1–3 minutes",
                    direction: "neutral"
                },
                {
                    text: "Note: Calcium stabilizes cardiac membrane but does NOT lower serum potassium",
                    direction: "neutral",
                    annotation: "Must follow with insulin/glucose and elimination therapy"
                }
            ]
        },
        {
            label: "Insulin + Dextrose (Intracellular Shift)",
            description: "Stimulation of Na+/K+-ATPase shifting K+ into intracellular compartment",
            color: "green",
            chain: [
                {
                    text: "IV Regular Insulin (10 units) administered with 25–50 g Dextrose",
                    emphasis: true
                },
                {
                    text: "Insulin binds skeletal muscle and hepatic insulin receptors",
                    direction: "up"
                },
                {
                    text: "Translocation and activation of membrane Na+/K+-ATPase pumps",
                    direction: "up"
                },
                {
                    text: "3 Na+ pumped out for every 2 K+ pumped into intracellular fluid",
                    direction: "up"
                },
                {
                    text: "Extracellular serum K+ drops by 0.5–1.0 mEq/L over 30–60 minutes",
                    direction: "down",
                    emphasis: true
                },
                {
                    text: "Resting membrane potential repolarizes toward -90 mV",
                    direction: "down"
                },
                {
                    text: "Protocolized blood glucose monitoring prevents delayed hypoglycemia",
                    direction: "neutral"
                }
            ]
        }
    ]
},
};
