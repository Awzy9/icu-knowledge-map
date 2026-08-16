import type { ClinicalProblem } from "@/content-types";

export const oliguriaFallingUrineOutput: ClinicalProblem = {
  id: "oliguria-falling-urine-output",
  slug: "oliguria-falling-urine-output",
  title: "Oliguria & Falling Urine Output",
  category: "renal-metabolic",
  oneLiner: "Algorithmic triage of acute oliguria (< 0.5 mL/kg/hr): urinary catheter patency check, volume responsiveness vs congestive nephropathy (VExUS Doppler), nephrotoxic drug review, and the furosemide stress test.",
  relatedTopicIds: [
      "aki",
      "crrt",
      "shock",
      "septic-shock",
      "rv-failure",
      "cardiogenic-shock",
      "acute-heart-failure",
      "critical-illness-nutrition"
    ],
  body: [
    {
      type: "paragraph",
      text: "Acute oliguria (urine output < 0.5 mL/kg/hr for ≥ 6 consecutive hours, or sudden anuria < 50 mL/day) is an early, highly sensitive harbinger of Acute Kidney Injury (AKI) and renal hypoperfusion. Bedside management mandates an immediate mechanical rule-out of urinary catheter obstruction, distinguishing pre-renal hypoperfusion from venous congestive nephropathy and intrinsic tubular necrosis, and preventing indiscriminate fluid overloading.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Obstructed urinary catheter with bladder overdistension / rupture, Abdominal Compartment Syndrome (IAP > 20 mmHg directly compressing renal veins and parenchyma), Severe Cardiorenal Venous Congestion (VExUS Grade 3), and rapidly progressive glomerulonephritis / thrombotic microangiopathy.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. STEP 1: MECHANICAL FOLEY CHECK (FIRST 5 MINUTES)",
          value: "• Flush the Catheter: Flush the indwelling urinary catheter with 30–50 mL of sterile saline under sterile technique; check for blood clots, sediment, kinks, or airlocks in tubing.\n• Bladder POCUS: Perform bedside ultrasound of the bladder; a distended bladder (> 300–500 mL) despite an indwelling catheter proves catheter obstruction or malposition (replace catheter immediately).",
        },
        {
          label: "2. STEP 2: HEMODYNAMIC & PERFUSION EVALUATION",
          value: "• Assess Systemic Perfusion: Check MAP (target MAP ≥ 65 mmHg; or higher MAP 75–85 mmHg in chronic hypertensive patients with altered renal autoregulation).\n• Rule Out Hypovolemic Shock: Assess heart rate, capillary refill, skin turgor, dynamic stroke volume variation, and passive leg raise test before giving fluid.",
        },
        {
          label: "3. STEP 3: SCREEN FOR VENOUS CONGESTION & ABDOMINAL PRESSURE",
          value: "• Assess Right-Sided Venous Congestion (VExUS Score): Perform Doppler ultrasound of IVC, hepatic vein (systolic flow reversal), portal vein (pulsatility > 50%), and intrarenal veins (discontinuous biphasic flow). Severe cardiorenal congestion (Grade 3 VExUS) requires diuresis/ultrafiltration, NOT fluids.\n• Measure Intra-Abdominal Pressure (IAP): Connect transduced catheter to bladder; IAP > 12 mmHg = Intra-Abdominal Hypertension (IAH); IAP > 20 mmHg with oliguria = Abdominal Compartment Syndrome (ACS) requiring urgent abdominal decompression.",
        },
        {
          label: "4. DIFFERENTIAL BY PRERENAL VS INTRINSIC VS POSTRENAL",
          value: "• Pre-Renal / Hemodynamic (FeNa < 1%, FeUrea < 35%, Urine Na < 20 mEq/L, bland sediment, hyaline casts):\n  - True intravascular depletion (hemorrhage, GI losses, over-diuresis).\n  - Effective arterial underfilling (sepsis vasoplegia, cardiogenic shock, cirrhosis/hepatorenal syndrome).\n• Intrinsic Renal (FeNa > 2%, Urine Na > 40 mEq/L, 'muddy brown' granular casts, renal tubular epithelial cells):\n  - Acute Tubular Necrosis (ATN): Prolonged ischemia, sepsis, nephrotoxins (aminoglycosides, vancomycin troughs, IV radiocontrast, cisplatin).\n  - Pigment Nephropathy: Rhabdomyolysis (myoglobinuria) or intravascular hemolysis (hemoglobinuria).\n  - Acute Interstitial Nephritis (AIN): Beta-lactams, NSAIDs, PPIs (sterile pyuria, eosinophiluria).\n• Post-Renal / Obstructive: Foley obstruction, ureteral obstruction (retroperitoneal hematoma/fibrosis, pelvic mass, bilateral stones).",
        },
        {
          label: "5. THE FUROSEMIDE STRESS TEST (FST)",
          value: "• Purpose: Validated predictive test for progression to severe Stage 3 AKI and CRRT requirement in early euvolemic/hypervolemic AKI.\n• Protocol: In a fully resuscitated, non-hypovolemic patient, administer IV Furosemide (1.0 mg/kg if loop diuretic naive; 1.5 mg/kg if previously exposed to loop diuretics).\n• Interpretation: A urine output of < 200 mL in the 2 hours following the bolus indicates a failed FST (high likelihood of progressive AKI and CRRT requirement); urine output > 200 mL indicates intact tubular integrity.",
        },
        {
          label: "6. REASSESSMENT & CRRT TRIGGERS",
          value: "• Nephrotoxin Audit: Immediately stop all non-essential nephrotoxic drugs, adjust antimicrobial dosing to measured renal clearance, and ensure therapeutic drug monitoring.\n• Indications for Renal Replacement Therapy (CRRT / HD) — The 'AEIOU' Mnemonic:\n  - A: Refractory metabolic Acidemia (pH < 7.15–7.20).\n  - E: Refractory severe hyperkalemia (K+ > 6.5 mEq/L with ECG changes).\n  - I: Ingestions of dialyzable toxins (toxic alcohols, lithium, salicylates).\n  - O: Severe refractory pulmonary/cardiorenal volume Overload failing diuretics.\n  - U: Uremic complications (pericarditis, encephalopathy, uremic bleeding).",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Reflexively giving fluid boluses for every oliguric patient without assessing volume status or venous congestion. In sepsis and cardiorenal syndrome, excess fluid accumulates in the interstitial and venous beds, raising renal subcapsular pressure and directly causing congestive acute renal failure.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• AKI: KDIGO staging, biomarkers, and renoprotective resuscitation.\n• CRRT: Modalities (CVVH/CVVHD/CVVHDF), filter anticoagulation, and dose delivery.\n• Shock & Septic Shock: Perfusion targets and dynamic fluid responsiveness.\n• Intra-Abdominal Hypertension: Bladder pressure monitoring and decompression.\n• RV Failure: Cardiorenal venous congestion and decongestion strategies.",
        },
      ],
    },
  ],
};
