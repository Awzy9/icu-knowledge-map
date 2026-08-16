import type { ClinicalProblem } from "@/content-types";

export const metabolicAcidosis: ClinicalProblem = {
  id: "metabolic-acidosis",
  slug: "metabolic-acidosis",
  title: "Acute Severe Metabolic Acidosis",
  category: "renal-metabolic",
  oneLiner: "Physiologic acid-base evaluation: Anion Gap and Delta-Delta calculations, Winter's formula for respiratory compensation, distinguishing ketoacidosis/lactic acidosis/toxic alcohols from non-gap acidosis, and bicarbonate therapy indications.",
  relatedTopicIds: [
      "metabolic-acidosis",
      "acid-base-disorders",
      "diabetic-ketoacidosis",
      "toxicologic-emergencies",
      "aki",
      "crrt",
      "shock",
      "septic-shock",
      "hyperkalemia"
    ],
  body: [
    {
      type: "paragraph",
      text: "Acute metabolic acidosis (arterial pH < 7.35 with primary serum HCO3- < 22 mEq/L) is a hallmark of severe metabolic distress in the ICU. Severe acidemia (pH < 7.15–7.20) induces profound peripheral vasodilation, blunts myocardial responsiveness to catecholamines, impairs coagulation enzymes, and triggers life-threatening arrhythmias. Systematic physiologic evaluation requires calculating the Serum Anion Gap, assessing respiratory compensation via Winter's formula, and determining the Delta-Delta ratio.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Sepsis/Cardiogenic Shock with Type A Lactic Acidosis, Toxic Alcohol Ingestion (Methanol/Ethylene Glycol with high Osmolar Gap), Diabetic Ketoacidosis (including Euglycemic DKA from SGLT2 inhibitors), Acute Mesenteric Ischemia, and Severe Metformin-Associated Lactic Acidosis (MALA).",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. STEP 1: CALCULATE THE ANION GAP (AG)",
          value: "• Formula: Serum Anion Gap = [Na+] - ([Cl-] + [HCO3-]). Normal AG is 8 to 12 mEq/L.\n• Albumin Correction: For every 1.0 g/dL drop in serum albumin below 4.0 g/dL, add 2.5 mEq/L to the calculated AG (Corrected AG = Observed AG + 2.5 × [4.0 - Albumin]). In critically ill hypoalbuminemic patients, an uncorrected 'normal' AG of 10 mEq/L frequently masks a dangerous high-anion-gap acidosis.",
        },
        {
          label: "2. STEP 2: HIGH ANION GAP METABOLIC ACIDOSIS (HAGMA > 12) — THE GOLD MARK MNEMONIC",
          value: "• G — Glycols (Ethylene Glycol, Propylene Glycol from IV lorazepam/diazepam infusions).\n• O — Oxoproline (5-oxoproline / pyroglutamic acid from chronic high-dose acetaminophen ingestion).\n• L — L-Lactate: Type A (tissue hypoperfusion/shock, mesenteric ischemia, CPR, seizure) vs Type B (liver failure, metformin, propofol, beta-2 agonists [epinephrine/albuterol], linezolid, malignancy).\n• D — D-Lactate: Short bowel syndrome / small intestinal bacterial overgrowth.\n• M — Methanol: Windshield washer fluid ingestion (toxic metabolite formic acid causes optic disc edema / blindness).\n• A — Aspirin / Salicylates: Mixed respiratory alkalosis + high anion gap metabolic acidosis (tinnitus, tachypnea, hyperthermia).\n• R — Renal Failure: Uremic acidosis (retention of sulfates, phosphates, urates in advanced AKI/ESKD).\n• K — Ketoacidosis: Diabetic Ketoacidosis (DKA), Alcoholic Ketoacidosis (AKA), Starvation Ketoacidosis.",
        },
        {
          label: "3. STEP 3: NON-ANION GAP METABOLIC ACIDOSIS (NAGMA / HYPERCHLOREMIC, AG ≤ 12)",
          value: "• Massive Resuscitation with 0.9% Normal Saline (infusion of high chloride [154 mEq/L] expands extracellular volume, displacing bicarbonate; switch to balanced crystalloids [Plasma-Lyte / Lactated Ringer's]).\n• Gastrointestinal Bicarbonate Losses: Severe secretory diarrhea, enterocutaneous / pancreatic / biliary fistulas, ileostomy output.\n• Renal Tubular Acidosis (RTA): Type 1 (distal), Type 2 (proximal), Type 4 (hyporeninemic hypoaldosteronism with hyperkalemia).\n• Carbonic Anhydrase Inhibitors (Acetazolamide).",
        },
        {
          label: "4. STEP 4: ASSESS RESPIRATORY COMPENSATION & MIXED DISORDERS",
          value: "• Winter's Formula: Expected PaCO2 = 1.5 × [HCO3-] + 8 ± 2.\n  - If Actual PaCO2 > Expected: Coexisting Respiratory Acidosis (respiratory muscle exhaustion or central hypoventilation).\n  - If Actual PaCO2 < Expected: Coexisting Respiratory Alkalosis (sepsis, pain, liver failure, early salicylism).\n• Delta-Delta Ratio (ΔAG / ΔHCO3-):\n  - ΔAG / ΔHCO3- = (AG - 12) / (24 - HCO3-).\n  - Ratio < 0.8: Mixed HAGMA + Normal Anion Gap Acidosis (e.g. DKA with saline resuscitation).\n  - Ratio 0.8 to 2.0: Pure High Anion Gap Metabolic Acidosis.\n  - Ratio > 2.0: Mixed HAGMA + Metabolic Alkalosis (e.g. DKA with vomiting, or shock with pre-existing COPD alkalosis).",
        },
        {
          label: "5. TARGETED LABS: OSMOLAR GAP & TOXICOLOGY",
          value: "• Osmolar Gap: Calculated Serum Osmolality = 2 × [Na+] + [Glucose]/18 + [BUN]/2.8. Osmolar Gap = Measured Osmolality - Calculated Osmolality. An Osmolar Gap > 10–15 mOsm/kg H2O indicates circulating unmeasured osmolytes: Ethylene glycol, Methanol, Isopropanol, Propylene glycol, or Toxic Alcohols.\n• Immediate Antidote for Toxic Alcohols: Administer Fomepizole (15 mg/kg IV loading dose; competitive alcohol dehydrogenase inhibitor) + emergent hemodialysis.",
        },
        {
          label: "6. INITIAL MANAGEMENT & BICARBONATE CONTROVERSIES",
          value: "• Treat Underlying Etiology: Sepsis source control and vasopressors; insulin and fluids for DKA; emergent laparotomy for mesenteric ischemia.\n• IV Sodium Bicarbonate Therapy (BICAR-ICU Trial Framework):\n  - Routine sodium bicarbonate is NOT recommended in lactic acidosis (BICAR-ICU showed no overall benefit in unselected patients).\n  - Exception (Subgroup Benefit): In patients with severe metabolic acidemia (pH ≤ 7.20) accompanied by acute kidney injury (AKIN stage 2–3), IV sodium bicarbonate infusion (4.2% or 8.4%) to maintain pH ≥ 7.30 significantly reduced 28-day mortality and delayed CRRT requirement.\n  - Mandatory Requirement: Patient must have adequate alveolar minute ventilation to exhale the generated CO2 (HCO3- + H+ -> H2O + CO2).",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Administering IV Sodium Bicarbonate in a patient with severe hypoventilation or exhausted respiratory muscles without mechanical ventilatory support. Bicarbonate buffering generates immense amounts of carbon dioxide (CO2); if the lungs cannot blow off CO2, it rapidly diffuses into myocardial and brain cells, precipitating paradoxical worsening of intracellular acidosis.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Acid-Base Disorders: Detailed Henderson-Hasselbalch equations, Stewart physicochemical approach, and mixed disorder tables.\n• AKI: Uremic metabolic acidosis, FST, and renoprotection.\n• CRRT: Bicarbonate-buffered dialysate/replacement fluids and acid-base clearance.\n• Shock & Septic Shock: Lactate kinetics and tissue perfusion endpoints.\n• Hyperkalemia: Acidosis-induced extracellular potassium shifting.",
        },
      ],
    },
  ],
};
