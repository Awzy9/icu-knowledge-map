import type { Topic } from "@/content-types";

export const acidBaseDisorders: Topic = {
  id: "acid-base-disorders",
  slug: "acid-base-disorders",
  title: "Acid-Base Disorders: Comprehensive Critical Care Approach",
  category: "renal",
  oneLiner: "Stepwise 6-step interpretation algorithm, compensation formulas, albumin-corrected anion gap, delta ratio, and Stewart physicochemical (SID) principles.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Acid-Base Metabolism and Approach to Complex Acid-Base Disorders",
    },
    {
      title: "Kraut JA, Madias NE. Metabolic acidosis: pathophysiology, diagnosis and management. Nat Rev Nephrol. 2010;6(5):274-285.",
    },
  ],
  currentStatus: "Foundational critical care nephrology consensus framework combining traditional Henderson-Hasselbalch/anion gap and Stewart physicochemical approaches.",
  otherReferences: [
    "Figge J, et al. Anion gap and hypoalbuminemia. Crit Care Med. 1998;26(11):1807-1810.",
    "Kellum JA. Clinical review: Reunification of acid-base physiology. Crit Care. 2005;9(5):500-507.",
    "Story DA. Bench-to-bedside review: Stewart approach to acid-base disorders in the critically ill. Crit Care. 2004;8(6):450-458.",
  ],
  relationships: [
    { type: "physiology", targetId: "metabolic-acidosis", label: "Primary metabolic acidemia and high vs normal anion gap" },
    { type: "related-to", targetId: "hyperkalemia", label: "Transcellular potassium-hydrogen ion shifts in acid-base disturbances" },
    { type: "related-to", targetId: "hypercapnic-respiratory-failure", label: "Acute vs chronic respiratory acidosis and renal compensation" },
    { type: "related-to", targetId: "crrt", label: "Correction of refractory metabolic acidosis and buffer reconstitution" },
    { type: "related-to", targetId: "shock", label: "Lactic acidosis and tissue dysoxia in circulatory failure" },
  ],
  sections: [
    {
      id: "acid-base-disorders.overview",
      evidenceRefs: [
        {
          kind: "trial",
          id: "acidosis-bicar-icu-trial",
          relevance: "BICAR-ICU trial on bicarbonate infusion in severe acidemia"
        },
        {
          kind: "trial",
          id: "sepsis-smart-trial",
          relevance: "SMART trial comparing balanced crystalloids vs saline-induced hyperchloremic acidosis"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Acid-base homeostasis maintains extracellular pH between 7.35 and 7.45; critical illness frequently induces complex, multi-mechanism mixed disturbances.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Acid-base disorders are among the most common and complex physiological derangements in the ICU. Severe acidemia (pH < 7.15–7.20) impairs myocardial contractility, induces peripheral arteriolar vasodilation, blunts cardiovascular responsiveness to catecholamines, and triggers lethal ventricular arrhythmias. Conversely, severe alkalemia (pH > 7.55) impairs tissue oxygen unloading (leftward shift of the oxyhemoglobin dissociation curve), causes cerebral vasoconstriction, and induces severe hypocalcemia and hypokalemia.",
        },
        {
          type: "paragraph",
          text: "In the ICU, relying on pH alone is treacherous: two or three opposing primary disorders (e.g., severe high anion gap lactic acidosis, metabolic alkalosis from vomiting/diuretics, and respiratory alkalosis from pain/sepsis) can coexist in a single patient, yielding a deceptively 'normal' pH of 7.40. A rigorous, systematic 6-step interpretation algorithm is mandatory for every arterial or venous blood gas.",
        },
      ],
    },
    {
      id: "acid-base-disorders.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Complex Mixed Acid-Base Disturbances",
      summary: "Systematic step-by-step Stewart and Boston approach to detect hidden coexisting acid-base processes.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "High Anion Gap Metabolic Acidosis (HAGMA): 'GOLDMARK' (Glycols, Oxoproline, L-lactate, D-lactate, Methanol, Aspirin, Renal failure, Ketoacidosis).",
          "Normal Anion Gap Metabolic Acidosis (NAGMA): 'USED CARP' (Ureterosigmoidostomy, Saline resuscitation, Early renal failure, Diarrhea, Carbonic anhydrase inhibitors, Amino acid infusions, Renal tubular acidosis).",
          "Mixed Triple Acid-Base Disorder: Severe sepsis with DKA and vomiting: High anion gap acidosis + compensatory respiratory alkalosis + concurrent metabolic alkalosis (identified by Delta-Delta ratio > 2.0)."
]
        }
      ]
    },
    {
      id: "acid-base-disorders.algorithm",
      kind: "diagnosis",
      title: "The Systematic 6-Step Interpretation Algorithm",
      summary: "Step-by-step evaluation: pH, primary disorder, expected compensation rules, albumin-corrected anion gap, and delta ratio.",
      provenance: "guideline",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            "Step 1: Assess pH — Determine Acidemia (pH < 7.35, [H+] > 45 nmol/L) versus Alkalemia (pH > 7.45, [H+] < 35 nmol/L). Note: A normal pH (7.35–7.45) does NOT rule out a severe mixed acid-base disorder.",
            "Step 2: Identify the Primary Disorder — Look at PaCO2 (respiratory) and HCO3- (metabolic). Match which direction accounts for the pH deviation.",
            "Step 3: Check Expected Physiological Compensation — The body never overcompensates. If measured compensation falls outside the expected mathematical range, a SECOND primary disorder is present.",
            "Step 4: Calculate the Anion Gap & ALWAYS Correct for Albumin — Hypoalbuminemia (ubiquitous in critical illness) drastically lowers baseline anion gap and masks High Anion Gap Metabolic Acidosis (HAGMA) if uncorrected.",
            "Step 5: Calculate the Delta Ratio (Δ/Δ) in HAGMA — Compare the increase in anion gap to the decrease in bicarbonate to detect concurrent Normal Anion Gap Metabolic Acidosis (NAGMA) or Metabolic Alkalosis.",
            "Step 6: Evaluate Clinical Context & Physicochemical Determinants — Examine chloride levels, lactate, ketones, toxic alcohols, and renal function.",
          ],
        },
      ],
    },
    {
      id: "acid-base-disorders.compensation",
      kind: "physiology",
      title: "Primary Acid-Base Disorders & Precise Compensation Formulas",
      summary: "Mathematical rules of physiological compensation for metabolic acidosis (Winter's formula), metabolic alkalosis, and acute vs chronic respiratory disorders.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Metabolic Acidosis (Winter's Formula)",
              value: "Expected PaCO2 = (1.5 × [HCO3-]) + 8 ± 2. (Quick bed check: PaCO2 ≈ last two digits of pH, e.g., pH 7.25 -> PaCO2 ~25 mmHg). If actual PaCO2 > expected -> Superimposed Respiratory Acidosis. If actual PaCO2 < expected -> Superimposed Respiratory Alkalosis.",
            },
            {
              label: "2. Metabolic Alkalosis",
              value: "Expected PaCO2 = 40 + [0.7 × ([HCO3-] - 24)] ± 2. (PaCO2 rises by 0.7 mmHg for every 1 mEq/L increase in HCO3-). Note: Hypoventilation compensation is capped at PaCO2 ≈ 55–60 mmHg due to hypoxemic drive stimulation.",
            },
            {
              label: "3. Acute Respiratory Acidosis (Uncompensated)",
              value: "For every 10 mmHg increase in PaCO2 above 40: [HCO3-] rises by 1.0 mEq/L (cellular buffering); pH falls by ~0.08.",
            },
            {
              label: "4. Chronic Respiratory Acidosis (Renal Compensation)",
              value: "For every 10 mmHg increase in PaCO2 above 40: [HCO3-] rises by 3.5–4.0 mEq/L (renal H+ excretion over 3–5 days); pH falls by only ~0.03.",
            },
            {
              label: "5. Acute Respiratory Alkalosis (Uncompensated)",
              value: "For every 10 mmHg decrease in PaCO2 below 40: [HCO3-] falls by 2.0 mEq/L; pH rises by ~0.08.",
            },
            {
              label: "6. Chronic Respiratory Alkalosis (Renal Compensation)",
              value: "For every 10 mmHg decrease in PaCO2 below 40: [HCO3-] falls by 4.0–5.0 mEq/L (renal HCO3- wasting); pH rises by only ~0.03.",
            },
          ],
        },
        { type: "calculator-embed", calculatorId: "winters-formula" },
      ],
    },
    {
      id: "acid-base-disorders.anion-gap",
      kind: "diagnosis",
      title: "Albumin-Corrected Anion Gap & The Delta Ratio",
      summary: "Figge-Jabor-Kassirer correction for hypoalbuminemia and mathematical interpretation of the Delta Ratio (ΔAG / ΔHCO3-).",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "The serum Anion Gap represents unmeasured anions (albumin, phosphate, sulfate, lactate, organic acids) minus unmeasured cations (K+, Ca2+, Mg2+): AG = [Na+] - ([Cl-] + [HCO3-]). Normal AG is 10–12 mEq/L.",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Albumin-Corrected Anion Gap (Figge Equation)",
              value: "Serum albumin contributes ~2.5 mEq/L of negative charge per 1 g/dL. Hypoalbuminemia lowers the baseline anion gap. Corrected AG = Calculated AG + [2.5 × (4.0 - Serum Albumin in g/dL)]. Example: A patient with calculated AG of 11, but Albumin of 1.6 g/dL, has a Corrected AG of 11 + [2.5 × 2.4] = 17 mEq/L — revealing a clinically severe occult HAGMA!",
            },
            {
              label: "The Delta Ratio (ΔAG / ΔHCO3-)",
              value: "ΔAG = Corrected AG - 12. ΔHCO3- = 24 - Measured HCO3-.\nDelta Ratio = ΔAG / ΔHCO3-.",
            },
            {
              label: "Delta Ratio < 0.4 – 0.8",
              value: "Mixed HAGMA + Normal Anion Gap (Hyperchloremic) Metabolic Acidosis (NAGMA). The fall in bicarbonate is much greater than the rise in anion gap (e.g. DKA with large-volume 0.9% saline resuscitation or diarrhea).",
            },
            {
              label: "Delta Ratio 0.8 – 1.6",
              value: "Pure High Anion Gap Metabolic Acidosis (uncomplicated DKA ~1.0 due to urinary ketone loss; pure lactic acidosis ~1.6).",
            },
            {
              label: "Delta Ratio > 1.6 – 2.0",
              value: "Mixed HAGMA + Metabolic Alkalosis (e.g. lactic acidosis from septic shock in a patient vomiting or on NG suction) OR pre-existing Chronic Respiratory Acidosis.",
            },
          ],
        },
        { type: "calculator-embed", calculatorId: "anion-gap" },
        { type: "calculator-embed", calculatorId: "delta-gap" },
        { type: "calculator-embed", calculatorId: "delta-ratio" },
      ],
    },
    {
      id: "acid-base-disorders.stewart",
      kind: "physiology",
      title: "The Stewart Physicochemical Approach (Strong Ion Difference)",
      summary: "Strong Ion Difference (SID), total weak acids (Atot), and the mechanism of normal saline-induced hyperchloremic acidosis.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Peter Stewart's physicochemical framework posits that [H+] and [HCO3-] are dependent variables determined entirely by three independent variables:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Apparent Strong Ion Difference (SIDa)",
              value: "SIDa = ([Na+] + [K+] + [Ca2+] + [Mg2+]) - ([Cl-] + [Lactate-]). Normal SIDa is 40–42 mEq/L. Strong ions are completely dissociated at physiological pH. Decreasing SIDa (< 38 mEq/L) forces water to dissociate into H+ and OH- to maintain electrical neutrality, releasing free [H+] (acidosis). Increasing SIDa (> 42 mEq/L) causes alkalosis.",
            },
            {
              label: "2. The Saline Acidosis Mechanism",
              value: "0.9% Normal Saline has [Na+] 154 and [Cl-] 154 mEq/L (SID = 0 mEq/L). Infusing large volumes of 0.9% saline dilutes plasma bicarbonate and drastically increases plasma [Cl-] relative to [Na+], shrinking the patient's SID from 40 down to < 30 mEq/L, directly causing hyperchloremic metabolic acidosis. Balanced crystalloids (Plasma-Lyte SID = 50, Lactated Ringer's SID = 28) protect against SID collapse.",
            },
            {
              label: "3. Total Non-Volatile Weak Acids (Atot)",
              value: "Primarily Albumin and Inorganic Phosphate. Hypoalbuminemia reduces Atot, acting as a direct alkalinizing force. Hyperphosphatemia increases Atot, contributing to acidosis.",
            },
            {
              label: "4. Strong Ion Gap (SIG)",
              value: "SIG = SIDa - Effective SID (SIDe). A positive SIG indicates unmeasured strong anions (sulfate, ketoacids, toxic metabolites) independent of albumin and phosphate fluctuations.",
            },
          ],
        },
      ],
    },
    {
      id: "acid-base-disorders.complications",
      kind: "complications",
      title: "Complications of Severe Acid-Base Derangements",
      summary: "Cardiovascular collapse, blunted catecholamine responsiveness, refractory arrhythmias, and shifts in oxygen delivery.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Severe Acidemia (pH < 7.15): Depressed LV myocardial contractility, arterial vasoplegia and refractory shock, resistance to endogenous and exogenous catecholamines, shift of potassium from intracellular to extracellular space (hyperkalemia), and reduced threshold for ventricular fibrillation.",
            "Severe Alkalemia (pH > 7.55): Leftward shift of oxyhemoglobin curve (impaired tissue O2 release), cerebral vasoconstriction and seizure threshold reduction, coronary vasospasm, severe hypokalemia, neuromuscular irritability, and tetany.",
            "Post-Hypercapnic Metabolic Alkalosis: Occurs when a chronic COPD patient with high compensatory bicarbonate is rapidly ventilated to normal PaCO2 on the ventilator, precipitating severe alkalemia, seizures, and hypoventilation failure.",
          ],
        },
      ],
    },
    {
      id: "acid-base-disorders.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical diagnostic errors in acid-base interpretation.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Failing to correct the Anion Gap for serum albumin: In critically ill hypoalbuminemic patients (e.g. Albumin 1.5–2.0 g/dL), an uncorrected anion gap of 11 mEq/L masks a true, dangerous HAGMA (corrected AG = 16–18 mEq/L).",
            "Assuming a normal pH (7.40) excludes an acid-base disorder: A patient with pH 7.40 can have a lethal triple disorder (HAGMA + Metabolic Alkalosis + Respiratory Acidosis). Always calculate the anion gap and PaCO2 compensation on every blood gas.",
            "Attributing a high anion gap solely to uremia in moderate renal impairment: Renal failure alone rarely raises the anion gap > 18–20 mEq/L; if AG > 22–25, actively search for concurrent lactic acidosis, ketoacidosis, or toxic alcohol ingestion.",
            "Attempting to rapidly normalize PaCO2 in chronic hypercapnic COPD: Acutely blowing off CO2 down to 40 mmHg in a patient with baseline chronic PaCO2 of 65 mmHg converts compensated respiratory acidosis into life-threatening severe metabolic alkalosis.",
            "Infusing massive 0.9% normal saline in severe DKA: 0.9% saline induces severe hyperchloremic NAGMA, perpetuating acidemia even as ketoacids clear; switch to balanced crystalloids.",
          ],
        },
      ],
    },
    {
      id: "acid-base-disorders.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Traditional Anion Gap versus Stewart SID modeling in clinical practice.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Traditional Henderson-Hasselbalch vs Stewart Physicochemical Approach: While Stewart's SID methodology provides superior mechanistic explanations for saline-induced hyperchloremia and hypoalbuminemic alkalosis, clinical trials demonstrate that the traditional approach (using the albumin-corrected anion gap, delta ratio, and chloride-to-sodium ratio) achieves identical diagnostic and therapeutic accuracy with vastly simpler bedside calculations.",
        },
      ],
    },
  ],
};
