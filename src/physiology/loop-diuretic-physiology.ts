import type { PhysiologyConcept } from "@/content-types";

export const loopDiureticPhysiology: PhysiologyConcept = {
  "id": "physiology.loop-diuretic-physiology",
  "slug": "loop-diuretic-physiology",
  "title": "Loop Diuretics: NKCC2 Blockade, Electrolyte Wasting, and Alkalosis",
  "system": "renal",
  "summary": "Inhibition of the Na+/K+/2Cl- cotransporter in the thick ascending limb of Henle, disruption of the medullary concentration gradient, and contraction alkalosis.",
  "definition": "Loop diuretics (Furosemide, Bumetanide, Torsemide) reversibly block the luminal Na+/K+/2Cl- (NKCC2) symporter in the thick ascending limb of the loop of Henle, producing profound natriuresis, chloruresis, kaliuresis, and calcium/magnesium wasting.",
  "mechanism": "The thick ascending limb reabsorbs 25% of the filtered sodium and chloride load via the apical NKCC2 cotransporter. Reabsorption of these ions without water generates the hypertonic medullary interstitium required for downstream collecting duct water reabsorption via ADH-mediated aquaporins.\n\nLoop diuretics bind the chloride-binding site of NKCC2, blocking solute reabsorption. This increases distal delivery of sodium, chloride, and fluid to the distal tubule and collecting duct.\n\nIn the cortical collecting duct, increased sodium delivery stimulates the epithelial sodium channel (ENaC), driving electrical-gradient secretion of potassium (kaliuresis) and hydrogen ions (H+ ATPase), producing hypokalemic, hypochloremic metabolic alkalosis (contraction alkalosis). NKCC2 blockade also collapses the lumen-positive transepithelial potential, inhibiting paracellular reabsorption of divalent cations (magnesium and calcium).",
  "clinicalSignificance": "In heart failure, AKI, and fluid overload, loop diuretic resistance often occurs due to distal tubular remodeling; adding a thiazide diuretic (e.g., Metolazone) achieves sequential nephron blockade.",
  "icuApplications": [
    "Continuous IV infusion of furosemide achieves more consistent natriuresis with fewer peak-and-trough hemodynamic swings than intermittent boluses.",
    "Monitor daily potassium and magnesium — loop diuretic hypokalemia/hypomagnesemia significantly increases malignant ventricular arrhythmia risk.",
    "Severe contraction alkalosis from excessive loop diuresis blunts central respiratory drive, impairing ventilator weaning.",
    "Sequential nephron blockade: Co-administering an oral thiazide (Metolazone) or IV Chlorothiazide blocks distal convoluted tubule Na-Cl cotransporter hypertrophy."
  ],
  "relatedConceptIds": [
    "physiology.sodium-handling",
    "physiology.potassium-handling",
    "physiology.tubular-function"
  ],
  "relatedTopicIds": [
    "aki",
    "acute-heart-failure",
    "crrt"
  ],
  visual: {
    kind: "causal-chain",
    defaultState: "Loop Diuretic Mechanism",
    states: [
        {
            label: "Volume Overload",
            description: "Renal sodium retention, expanded plasma volume, and elevated filling pressures",
            color: "red",
            chain: [
                {
                    text: "Heart failure, renal impairment, or capillary leak state"
                },
                {
                    text: "Renal hypoperfusion activates renin-angiotensin-aldosterone and sympathetic systems",
                    direction: "up"
                },
                {
                    text: "Avid tubular sodium and water retention expands intravascular volume",
                    direction: "up"
                },
                {
                    text: "Central venous and pulmonary capillary wedge pressures increase",
                    direction: "up"
                },
                {
                    text: "Hydrostatic extravasation into interstitial spaces (pulmonary and peripheral edema)",
                    direction: "up",
                    emphasis: true
                },
                {
                    text: "Worsening gas exchange and organ congestion (congestive nephropathy / hepatopathy)",
                    direction: "down",
                    emphasis: true
                }
            ]
        },
        {
            label: "Loop Diuretic Mechanism",
            description: "Inhibition of NKCC2 co-transporter in thick ascending limb generating natriuresis",
            color: "blue",
            chain: [
                {
                    text: "IV Furosemide / Bumetanide / Torsemide administered (secreted into tubular lumen via organic anion transporters)",
                    emphasis: true
                },
                {
                    text: "Reversibly binds and blocks the apical Na+-K+-2Cl- (NKCC2) co-transporter in thick ascending limb of Henle",
                    direction: "down",
                    emphasis: true
                },
                {
                    text: "Inhibits reabsorption of 20–25% of filtered sodium and chloride load",
                    direction: "down"
                },
                {
                    text: "Disrupts the hypertonic medullary countercurrent gradient, preventing collecting duct water reabsorption",
                    direction: "down"
                },
                {
                    text: "Massive luminal solute and water excretion (natriuresis & diuresis)",
                    direction: "up",
                    emphasis: true
                },
                {
                    text: "Intravascular plasma volume and central venous pressures decrease",
                    direction: "down"
                },
                {
                    text: "Hydrostatic pressure drops, relieving pulmonary and systemic venous congestion",
                    direction: "down"
                }
            ]
        }
    ]
},
};
