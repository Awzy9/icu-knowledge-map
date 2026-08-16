import type { ClinicalProblem } from "@/content-types";

export const severeHyperkalemia: ClinicalProblem = {
  id: "severe-hyperkalemia",
  slug: "severe-hyperkalemia",
  title: "Severe Hyperkalemia & Cardiac Membrane Instability",
  category: "renal-metabolic",
  oneLiner: "Time-critical hyperkalemia protocol (K+ > 6.5 mEq/L or ECG changes): immediate membrane stabilization with IV Calcium, intracellular shifting with Insulin/Dextrose and beta-agonists, and definitive potassium elimination.",
  relatedTopicIds: [
    "hyperkalemia",
    "aki",
    "crrt",
    "arrhythmias",
    "acid-base-disorders",
  ],
  body: [
    {
      type: "paragraph",
      text: "Severe hyperkalemia (serum potassium [K+] > 6.5 mEq/L, or any potassium elevation accompanied by ECG changes or muscle weakness) is a time-critical cardiovascular emergency. Elevated extracellular potassium partially depolarizes the resting membrane potential of cardiomyocytes, inactivating voltage-gated sodium channels and slowing cardiac conduction velocity, leading swiftly to ventricular fibrillation, high-grade AV block, sine wave rhythm, and asystolic cardiac arrest.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Imminent Hyperkalemic Cardiac Arrest (sine wave ECG progressing to VF/asystole), Severe Acute Rhabdomyolysis (massive muscle breakdown releasing intracellular potassium and myoglobin), Tumor Lysis Syndrome, and Anuric Acute Renal Failure.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. RECOGNIZE ECG SIGNS OF HYPERKALEMIA",
          value: "Progression of electrophysiologic signs (can occur unpredictably or rapidly):\n• K+ 5.5–6.5 mEq/L: Tall, peaked, symmetrical T-waves with a narrow base (best seen in precordial leads V2–V4).\n• K+ 6.5–7.5 mEq/L: PR interval prolongation, loss/flattening of P-waves, ST-segment depression.\n• K+ 7.5–8.5 mEq/L: QRS complex widening, bundle branch blocks, fascicular blocks, high-grade AV block, junctional or ventricular bradycardia.\n• K+ > 8.5 mEq/L: Merging of wide QRS with T-wave forming the ominous 'Sine Wave' pattern -> immediate Ventricular Fibrillation or Asystole.",
        },
        {
          label: "2. PILLAR 1: IMMEDIATE CARDIAC MEMBRANE STABILIZATION (0 TO 5 MINUTES)",
          value: "• Indication: Any ECG changes (peaked T-waves, wide QRS, loss of P) OR serum K+ > 6.5–7.0 mEq/L.\n• Mechanism: Calcium restores resting membrane threshold potential, counteracting potassium depolarization without lowering serum potassium.\n• Dosing & Administration:\n  - IV Calcium Gluconate (10%): 30 mL (3 grams / 3 ampules) IV over 5–10 minutes (preferred for peripheral IV access; lower tissue necrosis risk).\n  - IV Calcium Chloride (10%): 10 mL (1 gram / 1 ampule) IV over 2–5 minutes via central line (or during active cardiac arrest / peri-arrest; provides 3x more elemental calcium).\n  - Onset & Duration: Onset in 1–3 minutes; duration 30–60 minutes. Repeat bolus in 5–10 minutes if ECG abnormalities persist.",
        },
        {
          label: "3. PILLAR 2: INTRACELLULAR POTASSIUM SHIFTING (5 TO 15 MINUTES)",
          value: "Drives extracellular potassium into cells temporarily (buys 2–4 hours for elimination):\n• IV Regular Insulin + Dextrose (Gold Standard):\n  - Administer Regular Insulin 10 Units IV bolus + 50 mL of D50W (25 g Dextrose) IV push over 5 minutes.\n  - In patients with baseline blood glucose < 150 mg/dL or renal failure: Give 5 Units Regular Insulin + 50 mL D50W, followed by continuous D10W infusion (50–100 mL/hr for 4–6h) to prevent delayed, life-threatening hypoglycemia.\n  - Lowers serum K+ by 0.6 to 1.0 mEq/L within 15–30 minutes.\n• Inhaled Beta-2 Agonists (Albuterol):\n  - Nebulize Albuterol 10 to 20 mg in 4 mL saline continuously over 15 minutes (stimulates Na+/K+ ATPase via beta-2 receptor cAMP).\n  - Lowers K+ by 0.5–1.0 mEq/L; synergistic with insulin (use cautiously in active myocardial ischemia or severe tachyarrhythmias).\n• IV Sodium Bicarbonate (8.4%):\n  - 50–100 mEq IV infusion over 15–30 minutes; effective ONLY in patients with severe concurrent metabolic acidemia (pH < 7.20); minimal efficacy in normal pH.",
        },
        {
          label: "4. PILLAR 3: DEFINITIVE POTASSIUM ELIMINATION",
          value: "Shifting agents are temporary; total body potassium must be removed from the body:\n• Loop Diuretics (for non-anuric patients with functional kidneys):\n  - IV Furosemide (40–80 mg IV bolus) + 0.45% saline to promote robust kaliuresis.\n• Gastrointestinal Potassium Binders:\n  - Sodium Zirconium Cyclosilicate (Lokelma): 10 g PO/NG TID (onset 1–2 hours; non-absorbed crystal lattice trapping K+ in exchange for Na+/H+; highly preferred over Kayexalate).\n  - Patiromer (Veltassa): 8.4 g PO daily (exchanges calcium for potassium).\n  - AVOID Sodium Polystyrene Sulfonate (Kayexalate) in sorbitol due to severe risk of intestinal necrosis / bowel perforation.\n• Emergent Hemodialysis / Continuous Renal Replacement Therapy (CRRT):\n  - The absolute gold-standard, definitive therapy for refractory hyperkalemia in anuric renal failure, severe rhabdomyolysis, or tumor lysis syndrome; removes 30–50 mEq of K+ per hour.",
        },
        {
          label: "5. REASSESSMENT & HYPOGLYCEMIA MONITORING",
          value: "• Check Fingerstick Blood Glucose: Check glucose at 30 minutes, 1 hour, 2 hours, 3 hours, and 4 hours after insulin administration (delayed hypoglycemia occurs in up to 20% of ICU patients, particularly in renal impairment where insulin clearance is prolonged).\n• Recheck Serum Potassium: Check stat potassium at 1 hour and 2 hours to verify shifting and elimination response.",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Giving shifting agents (Insulin/Dextrose and Albuterol) and assuming the hyperkalemia is resolved. Shifting agents wear off in 2 to 4 hours, causing intracellular potassium to leak back into the extracellular space with rebound fatal arrhythmias unless definitive elimination (diuresis, binders, or dialysis) was initiated simultaneously.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Hyperkalemia: Comprehensive membrane biophysics, EKG gallery, and dialytic removal.\n• AKI: Acute tubular necrosis and renal electrolyte management.\n• CRRT: Continuous venovenous hemodiafiltration and dialysate potassium prescription.\n• Arrhythmias: Conduction blocks, sine wave rhythms, and overdrive pacing.\n• Cardiac Arrest: ACLS arrest algorithms for hyperkalemia and toxic ingestions.",
        },
      ],
    },
  ],
};
