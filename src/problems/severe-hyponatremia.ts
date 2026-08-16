import type { ClinicalProblem } from "@/content-types";

export const severeHyponatremia: ClinicalProblem = {
  id: "severe-hyponatremia",
  slug: "severe-hyponatremia",
  title: "Severe Acute Hyponatremia",
  category: "renal-metabolic",
  oneLiner: "Immediate bedside triage of [Na+] < 120 mEq/L: identifying neuro-herniation/seizures, 3% hypertonic saline bolus resuscitation (100–150 mL), acute vs chronic differentiation, and preventing overcorrection / ODS.",
  relatedTopicIds: [
    "severe-sodium-disorders",
    "intracranial-hypertension",
    "altered-consciousness",
    "status-epilepticus",
    "crrt",
    "aki",
  ],
  body: [
    {
      type: "paragraph",
      text: "Severe hyponatremia (serum [Na+] < 120 mEq/L, or acute drop < 125 mEq/L) is a neuro-medical emergency. When plasma tonicity falls acutely, osmotic water shifts into brain astrocytes, triggering cerebral edema, raised intracranial pressure, seizures, and fatal brainstem herniation. Bedside triage prioritizes immediate symptom-directed hypertonic saline boluses to reverse brain edema while establishing individualized 24-hour safety ceilings to prevent Osmotic Demyelination Syndrome (ODS).",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Acute Cerebral Edema with Uncal / Tonsillar Herniation (coma, pupillary dilation, respiratory arrest), Hyponatremic Status Epilepticus, and Osmotic Demyelination Syndrome (ODS / Central Pontine Myelinolysis) from accidental rapid overcorrection.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. RECOGNIZE & TRIAGE SYMPTOM SEVERITY",
          value: "• Severe Neurologic Symptoms (Emergency Indication for 3% NaCl):\n  - Seizures, status epilepticus, coma, stupor, respiratory arrest, signs of brainstem herniation (Cushing triad, unilateral fixed pupil).\n• Moderate / Mild Symptoms:\n  - Confusion, ataxia, nausea, vomiting, lethargy, muscle cramps, headache.",
        },
        {
          label: "2. EMERGENCY HYPERTONIC SALINE PROTOCOL (FOR SEVERE SYMPTOMS)",
          value: "• Initial Bolus: Administer 3% Hypertonic Saline (NaCl) 100–150 mL IV over 10–20 minutes.\n• Recheck & Repeat: Check serum sodium at 20 minutes; if severe symptoms persist or seizure continues, repeat 100–150 mL IV bolus up to 2 additional times (maximum 3 boluses total).\n• Therapeutic Goal: A prompt 4 to 6 mEq/L elevation in serum sodium. This small increase immediately reduces brain astrocyte volume by ~10%, stopping seizures and reversing herniation without exceeding safe daily correction limits.",
        },
        {
          label: "3. INDIVIDUALIZED CORRECTION GOALS VS MAXIMUM SAFETY CEILINGS",
          value: "• Acute Hyponatremia (< 48 hours, e.g. marathon runner, MDMA, post-TURP, acute water intoxication):\n  - Rapid correction can be performed safely because brain astrocytes have not yet fully extruded intracellular organic osmoprotective solutes.\n• Chronic Hyponatremia (> 48 hours or unknown duration) — Distinguish Goals vs Ceilings:\n  - Initial Therapeutic Target: 4 to 6 mEq/L rise in 24 hours to achieve clinical stability.\n  - Absolute Maximum Safety Limit (Ceiling): Do NOT exceed an absolute ceiling of 8 mEq/L in 24 hours (and ≤ 12–14 mEq/L in 48 hours).\n  - High-Risk Patients for ODS (Cirrhosis, chronic alcohol use disorder, severe malnutrition, hypokalemia, baseline Na+ < 105 mEq/L): Maximum correction ceiling is strictly ≤ 4 to 6 mEq/L per 24 hours.",
        },
        {
          label: "4. STEPWISE TONICITY & VOLUME INVESTIGATIONS",
          value: "• Step 1: Serum Osmolality:\n  - Hypotonic (< 280 mOsm/kg): True hyponatremia.\n  - Isotonic (280–295 mOsm/kg): Pseudohyponatremia (severe hypertriglyceridemia, paraproteinemia).\n  - Hypertonic (> 295 mOsm/kg): Hyperglycemia (corrected Na+ = measured Na+ + 0.016 × [glucose - 100]; or 0.024 factor if glucose > 400), mannitol.\n• Step 2: Urine Osmolality (UOsm):\n  - UOsm < 100 mOsm/kg: Maximally dilute urine; primary polydipsia, low solute intake (Beer potomania, tea-and-toast diet).\n  - UOsm > 100 mOsm/kg: Impaired free water clearance (ADH excess).\n• Step 3: Clinical Volume Status & Urine Sodium (UNa):\n  - Hypovolemic (UNa < 20 mEq/L = extra-renal loss; UNa > 20 mEq/L = renal loss, diuretics, cerebral salt wasting).\n  - Euvolemic (UNa > 30–40 mEq/L = SIADH, glucocorticoid deficiency, severe hypothyroidism).\n  - Hypervolemic (UNa < 20 mEq/L = heart failure, cirrhosis, nephrotic syndrome; UNa > 40 mEq/L = acute/chronic renal failure).",
        },
        {
          label: "5. PREVENTING & MANAGING ACCIDENTAL OVERCORRECTION",
          value: "• The Autonomous Aquaresis Danger: When underlying hypovolemia is resuscitated or offending drugs clear, ADH secretion abruptly shuts off, causing massive spontaneous aquaresis (> 500 mL/hr of dilute urine) and rapid sodium spike.\n• Proactive DDAVP Clamp: Administer scheduled DDAVP (1–2 mcg IV/SC q6–8h) alongside 3% NaCl to fix water excretion and make sodium rise solely dependent on 3% saline rate.\n• Reactive Relowering Protocol: If sodium rises > 8 mEq/L in 24h (or > 4–6 in high risk):\n  - Stop all sodium-containing fluids immediately.\n  - Administer Desmopressin (DDAVP 1–2 mcg IV/SC).\n  - Infuse IV D5W (Dextrose 5% in Water) at 3–5 mL/kg/hr to bring sodium back down to safe ceiling limits.",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Fluid-restricting a neurosurgical patient with Cerebral Salt Wasting (CSW) under the mistaken diagnosis of SIADH. CSW patients have true intravascular volume depletion and high urinary sodium; fluid restriction worsens cerebral ischemia, stroke, and mortality. Treat CSW with volume expansion using isotonic or hypertonic saline.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Severe Sodium Disorders: Detailed osmolality algorithms, SIADH diagnostic criteria, and ODS pathophysiology.\n• Intracranial Hypertension: Osmotherapy mechanisms, 3% hypertonic saline, and ICP monitoring.\n• Status Epilepticus: Refractory seizure management and second-line AEDs.\n• Altered Consciousness: Metabolic encephalopathy and coma localization.\n• CRRT: Continuous dialytic correction of severe dysnatremias without overcorrection.",
        },
      ],
    },
  ],
};
