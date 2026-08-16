import type { ClinicalProblem } from "@/content-types";

export const severeHypernatremia: ClinicalProblem = {
  id: "severe-hypernatremia",
  slug: "severe-hypernatremia",
  title: "Severe Hypernatremia & Water Deficit",
  category: "renal-metabolic",
  oneLiner: "Bedside evaluation of [Na+] > 155–160 mEq/L: free water deficit calculations, differentiating Central vs Nephrogenic Diabetes Insipidus, safe correction kinetics (≤ 8–10 mEq/24h), and enteral vs IV D5W replacement.",
  relatedTopicIds: [
    "severe-sodium-disorders",
    "brain-death",
    "severe-tbi",
    "intracranial-hypertension",
    "crrt",
  ],
  body: [
    {
      type: "paragraph",
      text: "Severe hypernatremia (serum [Na+] > 155–160 mEq/L) represents a hyperosmolar state resulting from a critical deficit of total body water relative to body sodium. It occurs almost exclusively in patients unable to sense or autonomously satisfy thirst (intubated, sedated, elderly, or encephalopathic ICU patients). High extracellular tonicity dehydrates brain astrocytes, causing brain shrinkage, tearing of dural bridging veins with intracranial hemorrhage, encephalopathy, and seizures.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Fulminant Central Diabetes Insipidus (following severe TBI, pituitary surgery, subarachnoid hemorrhage, or herniation/brain death; urine output > 500–1000 mL/hr of dilute water), Nonketotic Hyperosmolar Hyperglycemic State (HHS), and severe iatrogenic sodium overload (repeated 8.4% sodium bicarbonate amps).",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. RECOGNIZE & INITIAL EVALUATION",
          value: "• Clinical Manifestations: Lethargy, hyperreflexia, muscle spasticity, tremors, seizures, coma, intense thirst (if awake), fever, signs of severe volume depletion (tachycardia, dry mucous membranes, flat neck veins, sunken eyes).\n• Immediate Danger Screen: Massive polyuria (> 4–5 mL/kg/hr or > 300–500 mL/hr) with specific gravity < 1.005 and urine osmolality < 200 mOsm/kg indicates uncontrolled Diabetes Insipidus.",
        },
        {
          label: "2. TOTAL BODY WATER (TBW) & FREE WATER DEFICIT CALCULATION",
          value: "• Step 1: Estimate Total Body Water (TBW):\n  - Young Men = Weight (kg) × 0.60 | Young Women = Weight × 0.50.\n  - Elderly Men = Weight × 0.50 | Elderly Women = Weight × 0.45.\n• Step 2: Calculate Free Water Deficit (FWD):\n  - Formula: FWD (Liters) = TBW × [ (Serum [Na+] / 140) - 1 ].\n  - Example: 70 kg man with Na+ 168: TBW = 42 L -> FWD = 42 × [(168/140) - 1] = 42 × 0.20 = 8.4 Liters of free water deficit.",
        },
        {
          label: "3. SAFE CORRECTION KINETICS (PREVENTING CEREBRAL EDEMA)",
          value: "• Chronic Hypernatremia (> 48 hours or unknown duration):\n  - Brain astrocytes generate intracellular idiogenic osmoles (organic solutes) to defend cell volume.\n  - Safe Rate of Lowering: Lower serum sodium at a rate strictly ≤ 8 to 10 mEq/L per 24 hours (~0.4 to 0.5 mEq/L per hour).\n  - DANGER OF RAPID LOWERING: Rapid infusion of hypotonic fluids causes water to rush into osmotically adapted brain cells, precipitating cerebral edema, seizures, and fatal herniation.\n• Acute Hypernatremia (< 24–48 hours, e.g. acute salt poisoning):\n  - Can be safely corrected more rapidly (1.0 mEq/L/hr) to baseline.",
        },
        {
          label: "4. DIFFERENTIAL BY VOLUME STATUS & URINE OSMOLALITY",
          value: "• Hypovolemic Hypernatremia (Water Loss > Sodium Loss):\n  - Extra-Renal (UOsm > 600–800 mOsm/kg): Profuse sweating, burns, osmotic diarrhea, severe dehydration.\n  - Renal (UOsm < 300–500 mOsm/kg): Loop diuretics, osmotic diuresis (hyperglycemia, mannitol, high-protein urea excretion).\n• Euvolemic Hypernatremia (Pure Free Water Loss):\n  - Central Diabetes Insipidus (CDI): Complete/partial deficiency of hypothalamic ADH (pituitary surgery, severe TBI, hypoxic encephalopathy, brain death).\n  - Nephrogenic Diabetes Insipidus (NDI): Renal resistance to ADH (lithium toxicity, hypercalcemia, severe hypokalemia, foscarnet, demeclocycline).\n• Hypervolemic Hypernatremia (Sodium Gain > Water Gain):\n  - Iatrogenic: Hypertonic 3% NaCl infusions, multiple 8.4% NaHCO3 amps in cardiac arrest, hypertonic dialysate.",
        },
        {
          label: "5. THE DDAVP CHALLENGE TEST (CENTRAL VS NEPHROGENIC DI)",
          value: "• Administer Desmopressin (DDAVP 1.0–2.0 mcg IV or SC or 10–20 mcg intranasal):\n  - Central DI: Urine osmolality increases by > 50–100% within 2 hours, and urine volume drops sharply.\n  - Nephrogenic DI: Urine osmolality increases by < 10–20% (minimal or zero response).",
        },
        {
          label: "6. STEPPED REPLACEMENT & PROTOCOLIZED FLUID MANAGEMENT",
          value: "• Route of Administration:\n  - Enteral Route (Preferred if gut functioning): Sterile water flushes via nasogastric tube (200–300 mL q4–6h).\n  - IV Route: Infuse IV D5W (Dextrose 5% in Water) or 0.45% Half-Normal Saline.\n• Replacement Hourly Rate Calculation:\n  - Hourly Fluid Rate = (FWD in Liters / 48 hours) + Hourly Ongoing Free Water Urine Losses + Insensible Losses (~30–40 mL/hr).\n• Specific Management of Central DI: Administer Desmopressin (DDAVP 1–2 mcg IV/SC q12h, or titrated continuous infusion 0.5–2.4 U/hr of standard vasopressin) + replace ongoing urine output volume with enteral water or D5W.",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Failing to account for ongoing massive polyuric free water losses when calculating fluid replacement rates in Diabetes Insipidus. Administering only the baseline calculated free water deficit will result in worsening hypernatremia if the patient continues to lose 500 mL/hr of dilute urine.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Severe Sodium Disorders: Detailed hypernatremia formulas, DI diagnostic pathways, and electrolyte kinetics.\n• Brain Death: Diabetes insipidus in brain death, hormonal resuscitation protocols (Rule of 100s).\n• Severe TBI: Hyperosmolar therapy monitoring, sodium targets, and central DI management.\n• Intracranial Hypertension: ICP monitoring and serum osmolality limits (< 320 mOsm/kg).\n• CRRT: Continuous dialytic management of extreme hypernatremia using customized dialysate sodium matching.",
        },
      ],
    },
  ],
};
