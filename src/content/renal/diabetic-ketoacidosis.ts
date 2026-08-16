import type { Topic } from "@/content-types";

export const diabeticKetoacidosis: Topic = {
  id: "diabetic-ketoacidosis",
  slug: "diabetic-ketoacidosis",
  title: "Diabetic Ketoacidosis (DKA)",
  category: "renal",
  oneLiner: "Pathophysiology, SGLT2i euglycemic DKA, balanced fluid resuscitation, potassium-before-insulin safety rules, dextrose addition kinetics, and subcutaneous transition.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Diabetic Ketoacidosis, Hyperosmolar Hyperglycemic State, and Endocrine Emergencies in the ICU",
    },
    {
      title: "American Diabetes Association Standards of Care in Diabetes — 2024: Diabetes Care in the Hospital",
      edition: "Diabetes Care 2024;47(Suppl 1):S295-S306",
    },
  ],
  currentStatus: "Current as of the 2024 ADA Consensus Statement on Hyperglycemic Crises in Adults, the 2023 Joint British Diabetes Societies (JBDS) Guidelines, and SGLT2-inhibitor euDKA alerts.",
  otherReferences: [
    "ElSayed NA, et al. American Diabetes Association Standards of Care in Diabetes—2024. Diabetes Care. 2024;47(Suppl 1):S295-S306.",
    "Dhatariya KK, et al. Joint British Diabetes Societies (JBDS) for Inpatient Care: The management of diabetic ketoacidosis in adults. Diabet Med. 2022;39(6):e14831.",
    "Self WH, et al. Clinical Effects of Balanced Crystalloids vs Saline in Adults With Diabetic Ketoacidosis (SCOPE-DKA / SMART trial). JAMA Netw Open. 2020;3(11):e2024582.",
    "Peters AL, et al. Euglycemic Diabetic Ketoacidosis: A Potential Complication of Treatment with Sodium-Glucose Cotransporter 2 Inhibition. Diabetes Care. 2015;38(9):1687-1693.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "metabolic-acidosis", label: "High anion gap metabolic acidosis and delta ratio interpretation" },
    { type: "prerequisite", targetId: "acid-base-disorders", label: "Winter's formula respiratory compensation and Stewart SID" },
    { type: "related-to", targetId: "hyperkalemia", label: "Extracellular potassium shifts and total body depletion dynamics" },
    { type: "complication", targetId: "aki", label: "Severe prerenal azotemia and osmotic tubular dehydration" },
    { type: "related-to", targetId: "crrt", label: "Management of refractory metabolic acidosis and electrolyte collapse in oliguric DKA" },
  ],
  sections: [
    {
      id: "diabetic-ketoacidosis.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "dka-guideline-ada-2023",
          relevance: "ADA/EASD consensus report on management of hyperglycemic emergencies in adults"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Diabetic Ketoacidosis (DKA) is a life-threatening acute endocrine and metabolic emergency characterized by the biochemical triad of uncontrolled hyperglycemia, high anion gap metabolic acidosis, and hyperketonemia, driven by absolute or relative insulin deficiency and counter-regulatory hormone excess.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Diabetic Ketoacidosis (DKA) occurs most commonly in Type 1 Diabetes Mellitus, but is increasingly encountered in Type 2 Diabetes during severe physiological stress (sepsis, acute myocardial infarction, pancreatitis) and in patients treated with Sodium-Glucose Cotransporter-2 (SGLT2) inhibitors.",
        },
        {
          type: "paragraph",
          text: "The clinical priority in the ICU is protocolized resuscitation: (1) Prompt volume expansion with balanced crystalloids; (2) Evaluation and replacement of potassium BEFORE starting insulin to prevent fatal hypokalemic cardiac arrest; (3) Continuous low-dose IV regular insulin; (4) Addition of dextrose as glucose falls < 200–250 mg/dL while continuing insulin to suppress ketogenesis; (5) Correction of precipitating triggers; and (6) Structured overlap with subcutaneous basal insulin prior to IV infusion cessation.",
        },
      ],
    },
    {
      id: "diabetic-ketoacidosis.physiology",
      kind: "physiology",
      title: "Pathophysiology: Ketogenesis, Osmotic Diuresis & The Potassium Paradox",
      summary: "Hormone-sensitive lipase activation, beta-hydroxybutyrate synthesis, severe dehydration (5–10L deficit), and transcellular potassium shifts.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "The cellular, biochemical, and fluid-electrolyte derangements of DKA:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Uninhibited Lipolysis & Hepatic Ketogenesis",
              value: "Insulin deficiency combined with an extreme surge in counter-regulatory hormones (glucagon, epinephrine, cortisol, growth hormone) removes the tonic inhibition on Hormone-Sensitive Lipase (HSL) in adipose tissue. Free fatty acids (FFAs) flood the liver, where elevated glucagon activates carnitine palmitoyltransferase-1 (CPT-1), shuttling FFAs into mitochondria for beta-oxidation. Excess acetyl-CoA is converted into acetoacetate and then reduced to Beta-Hydroxybutyrate (the predominant circulating ketoacid in DKA, ratio typically 3:1 to 5:1 over acetoacetate).",
            },
            {
              label: "2. High Anion Gap Metabolic Acidosis",
              value: "Dissociation of ketoacids releases hydrogen ions that consume serum bicarbonate (HCO3-), generating a severe High Anion Gap Metabolic Acidosis (HAGMA). Respiratory compensation involves intense hyperventilation (Kussmaul breathing, deep and rapid) to blow off PaCO2 per Winter's formula (PaCO2 = 1.5[HCO3-] + 8 ± 2).",
            },
            {
              label: "3. Hyperglycemic Osmotic Diuresis & Dehydration",
              value: "Hepatic gluconeogenesis and glycogenolysis elevate blood glucose above the renal tubular absorptive threshold (~180 mg/dL). Glucosuria induces profound osmotic diuresis, producing an average fluid deficit of 5 to 10 Liters (100 mL/kg), alongside massive urinary wasting of sodium, potassium, chloride, magnesium, and phosphate.",
            },
            {
              label: "4. The Potassium Paradox",
              value: "Total body potassium is severely depleted (loss of 300–600 mEq from urinary diuresis and vomiting). However, initial serum potassium is frequently NORMAL or ELEVATED. This occurs because: (1) Insulin deficiency prevents cellular K+ uptake; (2) Hyperosmolality pulls water and potassium out of cells (solvent drag); and (3) Acidemia causes intracellular buffering with K+ efflux. As soon as insulin and fluids are started, potassium rushes back into cells, precipitating sudden, fatal hypokalemia unless preemptively repleted.",
            },
          ],
        },
      ],
    },
    {
      id: "diabetic-ketoacidosis.diagnosis-eudka",
      kind: "diagnosis",
      title: "Diagnostic Criteria & Euglycemic DKA (euDKA)",
      summary: "Laboratory diagnosis (glucose, pH, bicarbonate, beta-hydroxybutyrate, anion gap) and SGLT2-inhibitor-induced euglycemic DKA.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Diagnostic thresholds and severity grading (2024 ADA Standards):",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Classical Diagnostic Criteria",
              value: "• Blood Glucose: > 200–250 mg/dL (or normal in euDKA)\n• Arterial/Venous pH: ≤ 7.30 (Severe: < 7.00)\n• Serum Bicarbonate: ≤ 18 mEq/L (Severe: < 10 mEq/L)\n• Serum Beta-Hydroxybutyrate: ≥ 3.0 mmol/L (or moderate/large urine ketones)\n• Anion Gap: > 12 mEq/L (calculated as Na+ - [Cl- + HCO3-]).",
            },
            {
              label: "2. Euglycemic DKA (euDKA) — The SGLT2i Warning",
              value: "• Definition: Severe ketoacidosis (pH ≤ 7.30, HCO3- ≤ 18, beta-hydroxybutyrate ≥ 3.0) with normal or mildly elevated blood glucose (< 200–250 mg/dL).\n• Trigger: SGLT2 inhibitors (Empagliflozin, Dapagliflozin, Canagliflozin), pregnancy, strict ketogenic diet/starvation, alcohol excess, or chronic liver disease.\n• Mechanism of SGLT2i euDKA: Renal tubular SGLT2 inhibition causes continuous glucosuria, maintaining low serum glucose. Low glucose suppresses endogenous insulin secretion while stimulating pancreatic alpha-cells to secrete glucagon. The resulting high glucagon-to-insulin ratio triggers massive hepatic ketogenesis despite near-normal glycemia.\n• Pitfall: Clinicians frequently miss euDKA because 'glucose is normal'; always check serum beta-hydroxybutyrate and anion gap in ill patients on SGLT2 inhibitors.",
            },
          ],
        },
      ],
    },
    {
      id: "diabetic-ketoacidosis.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Severe Metabolic Acidosis with Ketosis",
      summary: "Differentiate DKA from Hyperosmolar Hyperglycemic State (HHS), alcoholic ketoacidosis, and starvation ketosis.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "DKA vs Hyperosmolar Hyperglycemic State (HHS): HHS has extreme hyperglycemia (>600 mg/dL), severe hyperosmolality (>320 mOsm/kg), and profound dehydration without significant ketoacidosis (pH > 7.30, HCO3 > 18 mEq/L); DKA has prominent high anion gap ketoacidosis with moderate glucose (250-500 mg/dL).",
          "Euglycemic DKA: Blood glucose < 200-250 mg/dL with severe ketoacidosis (pH < 7.20, ketones positive); strongly associated with SGLT2 inhibitors ('flozins'), pregnancy, liver disease, and partial insulin treatment.",
          "Alcoholic Ketoacidosis (AKA): Chronic alcoholism with recent binge and starvation; moderate hyperglycemia or hypoglycemia with mixed high anion gap acidosis and metabolic alkalosis."
]
        }
      ]
    },
    {
      id: "diabetic-ketoacidosis.management",
      kind: "management",
      title: "Stepped ICU Resuscitation Protocol",
      summary: "Balanced crystalloid volume resuscitation, the potassium-before-insulin rule, continuous regular insulin infusion, dextrose addition, and resolution criteria.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Evidence-based, stepped ICU management algorithm for DKA:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Step 1: Volume Resuscitation (Balanced Crystalloids)",
              value: "• Initial Rate: 1.0–1.5 Liters (15–20 mL/kg) IV in the first hour of Balanced Crystalloid (Plasma-Lyte or Lactated Ringer's).\n• Landmark Evidence (SCOPE-DKA / SMART Trials): Balanced crystalloids lead to significantly faster resolution of DKA (median 13 hours vs 17 hours) and lower rates of hyperchloremic non-gap metabolic acidosis compared to 0.9% Normal Saline.\n• Maintenance: 250–500 mL/hr matched to corrected sodium: Corrected Na+ = Measured Na+ + 1.6 x [(Glucose - 100) / 100]. If corrected Na+ is normal/high, use 0.45% NaCl or balanced fluid; if low, use balanced crystalloid.",
            },
            {
              label: "Step 2: Potassium Management (THE CARDINAL RULE: Check K+ BEFORE Insulin)",
              value: "• If Serum K+ < 3.3 mEq/L: HOLD INSULIN! Administer IV KCl 20–40 mEq/hr until serum K+ rises > 3.3 mEq/L. (Giving insulin in severe hypokalemia drives remaining K+ intracellularly, precipitating fatal cardiac arrest or diaphragmatic paralysis).\n• If Serum K+ 3.3–5.2 mEq/L: Start IV insulin AND immediately add 20–30 mEq KCl per liter of IV fluids to maintain serum K+ strictly between 4.0–5.0 mEq/L.\n• If Serum K+ > 5.2 mEq/L: Start IV insulin; do NOT add potassium to IV fluids; recheck K+ every 1–2 hours.",
            },
            {
              label: "Step 3: Continuous IV Regular Insulin Infusion",
              value: "• Dose: 0.10 units/kg/hr continuous IV infusion (or 0.14 U/kg/hr without an IV bolus; boluses are unnecessary and increase hypoglycemia risk).\n• Target Glycemic Rate of Fall: 50 to 70 mg/dL per hour. If glucose drops < 50 mg/dL in the first hour, increase fluid rate or double insulin infusion rate.",
            },
            {
              label: "Step 4: Dextrose Addition to Prevent Hypoglycemia & Clear Ketones",
              value: "• When blood glucose reaches < 200–250 mg/dL in DKA (or immediately in euDKA):\n  - Add 5% or 10% Dextrose (D5W or D10W with 0.45% NaCl / Plasmalyte) to IV fluids.\n  - DO NOT STOP OR DECREASE THE INSULIN INFUSION (decrease only to 0.05 U/kg/hr if needed).\n  - Rationale: Insulin is required to turn off lipolysis and clear ketoacidosis, NOT merely to lower glucose. Adding dextrose allows continued high-rate insulin delivery without inducing hypoglycemia.",
            },
            {
              label: "Step 5: Bicarbonate & Phosphate Rules",
              value: "• Sodium Bicarbonate: Strictly NOT recommended for pH ≥ 6.90. (Bicarbonate causes paradoxical CSF acidosis, hypocalcemia, and delayed clearance of ketonemia). If pH < 6.90: 100 mmol Sodium Bicarbonate in 400 mL sterile water with 20 mEq KCl over 2 hours.\n• Phosphate: Replace (20–30 mmol Potassium Phosphate) ONLY if serum phosphate drops < 1.0 mg/dL or if respiratory muscle weakness / rhabdomyolysis develops.",
            },
            {
              label: "Step 6: Resolution Criteria & Subcutaneous Transition Protocol",
              value: "• DKA Resolution Criteria (Must Meet ALL):\n  1. Venous/Arterial pH > 7.30\n  2. Serum Bicarbonate ≥ 18 mEq/L\n  3. Anion Gap Normalized (≤ 12 mEq/L)\n  4. Serum Beta-Hydroxybutyrate < 0.6–1.0 mmol/L\n  5. Patient alert and tolerating oral intake.\n• THE TRANSITION OVERLAP MANDATE: Administer Subcutaneous Basal Insulin (Glargine or Degludec, 0.2–0.3 units/kg or home dose) exactly 2 to 4 hours BEFORE stopping the IV insulin infusion. (Stopping IV insulin without basal overlap causes acute rebound ketoacidosis within 30–60 minutes due to the ultra-short 5-minute half-life of IV regular insulin).",
            },
          ],
        },
      ],
    },
    {
      id: "diabetic-ketoacidosis.complications",
      kind: "complications",
      title: "Complications & Monitoring in the ICU",
      summary: "Cerebral edema, acute pulmonary edema, severe hypokalemia, delayed hypoglycemia, and hyperchloremic non-gap acidosis.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Cerebral Edema: Occurs primarily in children and young adults (0.5–1% of cases, 20–40% mortality) due to rapid reduction in plasma osmolality during over-aggressive fluid or insulin administration; presents with headache, lethargy, bradycardia, hypertension, and pupil changes; treat immediately with 3% Hypertonic Saline (5 mL/kg IV over 10 min) or 20% Mannitol (0.5–1.0 g/kg) and elevate head of bed.",
            "Delayed Hypokalemia & Hypoglycemia: Most common iatrogenic complications in the ICU; prevented by strict hourly glucose and 2-hourly potassium monitoring.",
            "Hyperchloremic Non-Anion Gap Metabolic Acidosis (NAGMA): Massive infusion of 0.9% Normal Saline (154 mEq/L chloride) causes hyperchloremic renal tubular acidosis; self-resolving over 24–48 hours; do not misinterpret as persistent DKA.",
            "Non-Cardiogenic Pulmonary Edema: Rapid fluid loading in patients with increased pulmonary capillary permeability.",
          ],
        },
      ],
    },
    {
      id: "diabetic-ketoacidosis.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "High-yield mistakes to avoid in DKA management.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Administering insulin when serum potassium is < 3.3 mEq/L: Causes lethal hypokalemic ventricular fibrillation or respiratory arrest; always check K+ and replete first.",
            "Stopping the IV insulin infusion as soon as blood glucose reaches 200 mg/dL: Blood glucose normalizes hours before ketoacidosis resolves; add 5–10% Dextrose and CONTINUE insulin until the anion gap closes.",
            "Stopping IV insulin without a 2-hour subcutaneous basal insulin overlap: Rebound ketoacidosis recurs rapidly; administer SubQ Glargine 2–4 hours before turning off the IV infusion.",
            "Monitoring urine ketones instead of serum beta-hydroxybutyrate to assess resolution: Urine dipsticks measure acetoacetate, which increases as beta-hydroxybutyrate oxidizes during recovery, falsely suggesting worsening DKA; track serum beta-hydroxybutyrate or the serum anion gap.",
            "Missing Euglycemic DKA in patients on SGLT2 inhibitors: Never rule out DKA based on normal blood glucose; check anion gap and beta-hydroxybutyrate.",
          ],
        },
      ],
    },
    {
      id: "diabetic-ketoacidosis.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Subcutaneous Rapid-Acting Insulin Protocols vs IV Infusion in Mild-to-Moderate DKA.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Subcutaneous Rapid-Acting Insulin Protocols: In mild-to-moderate, uncomplicated DKA (pH > 7.10, HCO3- > 10, patient alert), randomized trials show that hourly or 2-hourly subcutaneous rapid-acting insulin analogs (Lispro or Aspart 0.1–0.2 units/kg) administered in step-down or emergency units achieve equivalent time-to-resolution and safety compared to continuous IV regular insulin in the ICU, dramatically reducing healthcare costs and ICU utilization.",
        },
      ],
    },
  ],
};
