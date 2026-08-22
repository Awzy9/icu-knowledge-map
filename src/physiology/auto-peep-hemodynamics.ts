import type { PhysiologyConcept } from "@/content-types";

export const autoPeepHemodynamics: PhysiologyConcept = {
  id: "physiology.auto-peep-hemodynamics",
  slug: "auto-peep-hemodynamics",
  title: "Auto-PEEP: Air Trapping and Cardiovascular Collapse",
  system: "respiratory",
  summary:
    "How dynamic hyperinflation from insufficient expiratory time builds intrinsic PEEP that raises mean intrathoracic pressure, obstructs venous return, and can precipitate cardiovascular collapse — and why ventilator disconnection is both diagnostic and therapeutic.",
  definition:
    "Auto-PEEP (intrinsic PEEP) causes haemodynamic compromise when the accumulated intrathoracic pressure from dynamic hyperinflation raises mean intrathoracic pressure high enough to significantly impede the venous return gradient. This is the cardiovascular consequence of air trapping, distinct from the mechanical consequences (barotrauma, breath stacking) that the same process also produces.",
  mechanism:
    "When expiratory time is insufficient — due to high respiratory rate, prolonged inspiratory time, obstructive physiology (asthma, COPD), or secretion plugging — lungs do not fully empty before the next breath begins. Each successive breath adds residual volume, progressively increasing end-expiratory lung volume and intrinsic PEEP.\n\nThe cardiovascular consequence follows directly from the physiology of venous return: venous blood flows from the peripheral venous system (mean systemic filling pressure, ~7 mmHg) to the right atrium (right atrial pressure). Anything that raises right atrial pressure narrows or eliminates this gradient. Elevated intrathoracic pressure from dynamic hyperinflation raises right atrial pressure — and if the raise is severe enough, the venous return gradient collapses. Right atrial filling falls, RV stroke volume falls, and ultimately cardiac output and MAP drop precipitously.\n\nThis mechanism is separate from and additive to any hypoxic or hypercapnic effect on the pulmonary vasculature. In severe status asthmaticus or obstructive COPD exacerbations requiring mechanical ventilation, this cardiovascular collapse can be immediate and life-threatening — clinicians must recognise it rapidly.",
  clinicalSignificance:
    "Haemodynamic collapse during mechanical ventilation of a patient with obstructive physiology must immediately raise suspicion for severe auto-PEEP. The diagnostic and therapeutic manoeuvre is the same: disconnect the patient from the ventilator and allow passive full exhalation. If BP recovers within 30–60 seconds, auto-PEEP was the cause. This prevents inappropriate escalation (more vasopressors, more fluids) that misses the underlying mechanism.",
  icuApplications: [
    "In mechanically ventilated patients with obstructive disease, haemodynamic collapse without an obvious new cause should trigger immediate ventilator disconnection to allow lung decompression — before embarking on other resuscitation.",
    "Quantify auto-PEEP with an end-expiratory hold manoeuvre: total PEEP minus set PEEP equals auto-PEEP; values >5 cmH2O are clinically relevant, >10–15 cmH2O are haemodynamically significant.",
    "Reduce auto-PEEP by decreasing respiratory rate (longer expiratory time), shortening inspiratory time (higher I:E ratio e.g. 1:4–5), and treating bronchospasm aggressively — not by adding set PEEP reflexively.",
    "Adding extrinsic PEEP up to but not exceeding auto-PEEP levels can recruit effort-triggering in spontaneously breathing patients on the ventilator by partially stenting open dynamic airways — a nuanced use of PEEP in obstructive disease.",
    "Ketamine for induction in status asthmaticus is partly chosen for its bronchodilatory properties — reducing airways resistance reduces auto-PEEP generation during the vulnerable peri-intubation period.",
  ],
  relatedConceptIds: [
    "physiology.auto-peep",
    "physiology.venous-return",
    "physiology.transpulmonary-pressure",
    "physiology.resistance",
  ],
  relatedTopicIds: [
  "asthma",
  "copd-exacerbation",
  "mechanical-ventilation"
],
  visual: {
    kind: "causal-chain",
    defaultState: "Normal Expiration",
    states: [
        {
            label: "Normal Expiration",
            description: "Normal mechanical expiration with complete exhalation to baseline FRC before next breath",
            color: "blue",
            chain: [
                {
                    text: "Inspiration delivers positive-pressure tidal volume",
                    direction: "up"
                },
                {
                    text: "Passive expiration begins via thoracic elastic recoil"
                },
                {
                    text: "Expiratory airflow returns completely to zero",
                    direction: "neutral",
                    emphasis: true
                },
                {
                    text: "Lung returns to baseline functional residual capacity (FRC)"
                },
                {
                    text: "No intrinsic PEEP accumulation; right atrial pressure unaffected",
                    direction: "neutral"
                }
            ]
        },
        {
            label: "Air Trapping / Auto-PEEP",
            description: "Dynamic hyperinflation from insufficient expiratory time leading to cardiovascular collapse",
            color: "red",
            chain: [
                {
                    text: "High RR, prolonged Ti, or severe bronchospasm"
                },
                {
                    text: "Expiratory time insufficient for full exhalation",
                    direction: "down"
                },
                {
                    text: "Incomplete exhalation before next positive-pressure cycle"
                },
                {
                    text: "End-expiratory lung volume increases (dynamic hyperinflation)",
                    direction: "up"
                },
                {
                    text: "Intrinsic PEEP builds up progressively",
                    direction: "up",
                    emphasis: true
                },
                {
                    text: "Mean intrathoracic pressure and right atrial pressure increase",
                    direction: "up"
                },
                {
                    text: "Venous return gradient (Pmsf - Pra) narrows or collapses",
                    direction: "down"
                },
                {
                    text: "RV filling and stroke volume decrease",
                    direction: "down"
                },
                {
                    text: "Left ventricular preload and cardiac output fall",
                    direction: "down"
                },
                {
                    text: "Hypotension and possible cardiovascular collapse",
                    direction: "down",
                    emphasis: true
                }
            ]
        },
        {
            label: "Disconnect → Relief",
            description: "Diagnostic and therapeutic ventilator disconnection allowing passive lung decompression",
            color: "green",
            chain: [
                {
                    text: "Endotracheal tube briefly disconnected from ventilator circuit",
                    emphasis: true
                },
                {
                    text: "Positive-pressure cycles halted immediately"
                },
                {
                    text: "Trapped gas passively exhales through open tube"
                },
                {
                    text: "End-expiratory lung volume and intrinsic PEEP fall to zero",
                    direction: "down"
                },
                {
                    text: "Mean intrathoracic and right atrial pressures normalize",
                    direction: "down"
                },
                {
                    text: "Venous return gradient restored",
                    direction: "up"
                },
                {
                    text: "Right and left ventricular filling improve",
                    direction: "up"
                },
                {
                    text: "Cardiac output and blood pressure may rapidly recover",
                    direction: "up",
                    emphasis: true
                }
            ]
        }
    ]
},
};
