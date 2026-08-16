import type { Topic } from "@/content-types";

export const metabolicAcidosis: Topic = {
  id: "metabolic-acidosis",
  slug: "metabolic-acidosis",
  title: "Metabolic Acidosis: HAGMA, NAGMA, & BICAR-ICU",
  category: "renal",
  oneLiner: "Differential diagnosis (GOLD MARK vs HARDCARP), toxic alcohol osmolar gaps, Urine Anion Gap, and the BICAR-ICU sodium bicarbonate protocol.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Metabolic Acidosis, Toxic Ingestions in the ICU, and Acid-Base Management",
    },
    {
      title: "Kraut JA, Madias NE. Metabolic acidosis: pathophysiology, diagnosis and management. Nat Rev Nephrol. 2010;6(5):274-285.",
    },
  ],
  currentStatus: "Current as of the BICAR-ICU Landmark Trial, the 2026 Surviving Sepsis Campaign Guideline recommendations on bicarbonate, and international toxicology consensus.",
  otherReferences: [
    "Jaber S, et al. Sodium bicarbonate therapy for patients with severe metabolic acidaemia in the intensive care unit (BICAR-ICU): a multicentre, open-label, randomised controlled, phase 3 trial. Lancet. 2018;392(10141):31-40.",
    "Kraut JA, Xing SX. Approach to the evaluation of a patient with an increased serum anion gap and high osmolar gap. Clin Exp Nephrol. 2011;15(6):796-805.",
    "Batlle D, et al. The use of the urinary anion gap and urinary osmolal gap in the diagnosis of hyperchloremic metabolic acidosis. N Engl J Med. 1988;318(10):594-599.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "acid-base-disorders", label: "Fundamental acid-base and compensation framework" },
    { type: "related-to", targetId: "septic-shock", label: "Type A lactic acidosis from tissue hypoperfusion" },
    { type: "related-to", targetId: "aki", label: "Loss of renal acid excretion and uremic acidosis in AKI" },
    { type: "related-to", targetId: "crrt", label: "Extracorporeal dialysis for refractory acidemia and toxic alcohol removal" },
    { type: "related-to", targetId: "hyperkalemia", label: "Transcellular potassium shift and type 4 RTA" },
  ],
  sections: [
    {
      id: "metabolic-acidosis.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "septic-shock-ssc2026-bicarbonate",
          relevance: "Surviving Sepsis Campaign recommendation on sodium bicarbonate in severe metabolic acidemia"
        },
        {
          kind: "trial",
          id: "acidosis-bicar-icu-trial",
          relevance: "BICAR-ICU trial showing sodium bicarbonate reduces 28-day mortality in severe acidemia with AKI"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Metabolic acidosis is a primary reduction in serum bicarbonate and extracellular pH, categorized by the serum Anion Gap into High Anion Gap (HAGMA) and Normal Anion Gap (NAGMA).",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Metabolic acidosis is the most frequent acid-base disturbance encountered in critical care. It is defined by a primary fall in serum bicarbonate ([HCO3-] < 22 mEq/L) accompanied by compensatory hyperventilation that lowers PaCO2 (per Winter's formula: expected PaCO2 = 1.5 × [HCO3-] + 8 ± 2).",
        },
        {
          type: "paragraph",
          text: "The primary diagnostic branch point is the Albumin-Corrected Serum Anion Gap. High Anion Gap Metabolic Acidosis (HAGMA) results from the accumulation of fixed unmeasured organic or inorganic acids (lactate, ketoacids, uremic sulfates/phosphates, toxic alcohol metabolites). Normal Anion Gap Metabolic Acidosis (NAGMA / hyperchloremic acidosis) results from bicarbonate loss (gastrointestinal or renal) or rapid large-volume infusion of chloride-rich fluids (0.9% normal saline).",
        },
      ],
    },
    {
      id: "metabolic-acidosis.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Severe Lactic Acidosis & NAGMA",
      summary: "Differentiate Type A tissue hypoperfusion lactic acidosis from Type B non-hypoperfusion metabolic acidosis.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Type A Lactic Acidosis (Tissue Hypoxia): Septic shock, cardiogenic shock, hypovolemic shock, acute mesenteric ischemia, severe hypoxemia (PaO2 < 30 mmHg), carbon monoxide poisoning.",
          "Type B Lactic Acidosis (Non-Hypoxic): Impaired clearance or mitochondrial dysfunction: Severe liver failure, metformin toxicity (MALA), nucleoside reverse transcriptase inhibitors (NRTIs), linezolid toxicity, thiamine deficiency (beriberi), propofol infusion syndrome (PRIS), malignancy (Warburg effect).",
          "D-Lactic Acidosis: Bacterial fermentation of unabsorbed carbohydrates in short bowel syndrome; standard lab lactate assays detect only L-lactate, requiring specific D-lactate testing."
]
        }
      ]
    },
    {
      id: "metabolic-acidosis.hagma",
      kind: "definition",
      title: "High Anion Gap Metabolic Acidosis (HAGMA) & GOLD MARK",
      summary: "Comprehensive differential diagnosis: L-lactate (Type A vs B), D-lactate, ketoacidosis, toxic alcohols, 5-oxoproline, and uremia.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "The differential for HAGMA (corrected AG > 12 mEq/L) is organized using the modern mnemonic GOLD MARK:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "G — Glycols (Ethylene & Propylene Glycol)",
              value: "Ethylene glycol (antifreeze) metabolizes via alcohol dehydrogenase into toxic glycolic and oxalic acids, causing acute tubular necrosis and calcium oxalate crystalluria. Propylene glycol (IV drug solvent for lorazepam, diazepam, trimethoprim-sulfamethoxazole) accumulates during high-dose infusions, causing severe HAGMA and hyperosmolality.",
            },
            {
              label: "O — Oxoproline (5-Oxoproline / Pyroglutamic Acid)",
              value: "Occurs in critically ill, malnourished, or septic patients receiving chronic therapeutic acetaminophen. Glutathione depletion disrupts the gamma-glutamyl cycle, causing massive accumulation of 5-oxoproline (pyroglutamic acid). Unmeasured anion HAGMA with normal lactate/ketones and negative toxic screens. Treated by stopping acetaminophen and administering N-acetylcysteine (NAC).",
            },
            {
              label: "L — L-Lactate (Type A vs Type B Lactic Acidosis)",
              value: "Type A (Tissue Dysoxia / Hypoperfusion): Septic shock, cardiogenic shock, hemorrhagic shock, severe hypoxemia, mesenteric ischemia, ischemic bowel, status epilepticus.\nType B (Non-Dysoxic / Aerobic): Liver failure (impaired hepatic lactate clearance), hematologic malignancy (Warburg effect), severe thiamine deficiency (beriberi / pyruvate dehydrogenase dysfunction), drugs (Metformin-associated lactic acidosis [MALA], Epinephrine beta-2 stimulation, Linezolid, Propofol infusion syndrome [PRIS], NRTIs).",
            },
            {
              label: "D — D-Lactate",
              value: "Produced by colonic bacterial fermentation of unabsorbed carbohydrates in patients with short bowel syndrome or jejunoileal bypass. D-lactate is invisible on standard clinical lab assays (which only measure L-lactate) and presents with encephalopathy, ataxia, and severe unexplained HAGMA.",
            },
            {
              label: "M — Methanol",
              value: "Metabolized to formic acid, causing retinal toxicity (optic disc hyperemia, 'snowstorm vision', blindness), basal ganglia necrosis (putaminal hemorrhage), severe HAGMA, and elevated osmolar gap.",
            },
            {
              label: "A — Aspirin / Salicylates",
              value: "Presents with classic mixed disorder: direct respiratory center stimulation (primary Respiratory Alkalosis) PLUS uncoupling of oxidative phosphorylation and accumulation of organic acids (primary HAGMA). Tinnitus, hyperpyrexia, non-cardiogenic pulmonary edema.",
            },
            {
              label: "R — Renal Failure / Uremia",
              value: "Advanced AKI or CKD (GFR < 15–20 mL/min) with retention of unmeasured inorganic anions (sulfates, phosphates, urate, hippurate). Anion gap rarely exceeds 20–24 mEq/L from uremia alone.",
            },
            {
              label: "K — Ketoacidosis (DKA, AKA, Starvation)",
              value: "Diabetic Ketoacidosis (insulin deficiency driving lipolysis into acetoacetate and beta-hydroxybutyrate), Alcoholic Ketoacidosis (starvation + ethanol metabolism suppressing gluconeogenesis), and Starvation Ketosis (mild, HCO3- rarely < 18).",
            },
          ],
        },
      ],
    },
    {
      id: "metabolic-acidosis.toxic-alcohols",
      kind: "diagnosis",
      title: "Toxic Alcohol Evaluation & The Serum Osmolar Gap",
      summary: "Calculation of the Osmolar Gap, toxic alcohol metabolites, fomepizole dosing, and emergent hemodialysis indications.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "When an unexplained HAGMA is present, calculate the Serum Osmolar Gap to screen for volatile toxic alcohols (methanol, ethylene glycol, isopropanol):",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Calculated Serum Osmolality Formula",
              value: "Calculated Osm (mOsm/kg) = (2 × [Na+]) + ([Glucose in mg/dL] / 18) + ([BUN in mg/dL] / 2.8) + ([Ethanol in mg/dL] / 4.6).",
            },
            {
              label: "Serum Osmolar Gap Interpretation",
              value: "Osmolar Gap = Measured Osmolality (freezing point depression) - Calculated Osmolality. Normal is < 10 mOsm/kg. An elevated gap > 10–15 mOsm/kg indicates unmeasured low-molecular-weight circulating toxins. Note: As the parent alcohol is metabolized into toxic acids over time, the osmolar gap falls while the anion gap widens.",
            },
            {
              label: "Antidotal Pharmacotherapy (Fomepizole)",
              value: "Fomepizole (4-methylpyrazole): Potent competitive inhibitor of Alcohol Dehydrogenase (ADH). Loading dose: 15 mg/kg IV over 30 min, followed by 10 mg/kg q12h (increase to q4h during hemodialysis). Prevents formation of toxic formic and glycolic acid metabolites.",
            },
            {
              label: "Emergent Hemodialysis Indications",
              value: "Severe metabolic acidemia (pH < 7.25–7.30), visual symptoms / end-organ damage, acute kidney injury, refractory electrolyte abnormalities, or toxic alcohol level > 50 mg/dL.",
            },
          ],
        },
        { type: "calculator-embed", calculatorId: "osmolar-gap" },
      ],
    },
    {
      id: "metabolic-acidosis.nagma",
      kind: "definition",
      title: "Normal Anion Gap (Hyperchloremic) Metabolic Acidosis (NAGMA)",
      summary: "Gastrointestinal bicarbonate loss, iatrogenic saline loading, Renal Tubular Acidosis (Types 1, 2, 4), and the Urine Anion Gap.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "In NAGMA, serum bicarbonate is lost and replaced milliequivalent-for-milliequivalent by serum chloride, maintaining a normal anion gap (10–12 mEq/L). The differential is organized using the Urine Anion Gap (UAG) to separate GI losses from renal tubular acidosis:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Urine Anion Gap (UAG) Formula",
              value: "UAG = [Na+]urine + [K+]urine - [Cl-]urine. Measures unmeasured urinary cations, predominantly Ammonium (NH4+).",
            },
            {
              label: "Negative UAG (-20 to -50 mEq/L) — GI Bicarbonate Loss",
              value: "Negative UAG indicates intact renal ammonium excretion (excreting NH4+ paired with Cl-). Etiologies: Severe secretory diarrhea, high-output enterocutaneous fistulas, biliary/pancreatic external drains, ureterosigmoidostomy, and large-volume 0.9% Normal Saline resuscitation.",
            },
            {
              label: "Positive UAG (> 0 to +30 mEq/L) — Renal Tubular Acidosis (RTA)",
              value: "Positive UAG indicates defective renal ammonium excretion. Subtypes:\n• Type 1 (Distal) RTA: Impaired alpha-intercalated cell H+ secretion; urine pH > 5.5 despite severe acidemia; hypokalemia, nephrocalcinosis.\n• Type 2 (Proximal) RTA: Defective proximal tubular HCO3- reabsorption (Fanconi syndrome); urine pH variable, hypokalemia.\n• Type 4 (Hypoaldosteronism) RTA: Aldosterone deficiency/resistance (diabetes, ACEi/ARBs, spironolactone, calcineurin inhibitors); HYPERKALEMIA with urine pH < 5.5.",
            },
          ],
        },
      ],
    },
    {
      id: "metabolic-acidosis.bicarbonate",
      kind: "management",
      title: "Sodium Bicarbonate Therapy & The Landmark BICAR-ICU Trial",
      summary: "Evidence-based indication for IV sodium bicarbonate in severe metabolic acidemia with AKI, dosing protocols, and physiological hazards.",
      provenance: "trial",
      body: [
        {
          type: "paragraph",
          text: "The administration of intravenous sodium bicarbonate for metabolic acidemia was historically controversial until the landmark BICAR-ICU Trial (Jaber et al., Lancet 2018):",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "The BICAR-ICU Trial Design",
              value: "Multicenter, open-label RCT of 389 critically ill ICU patients with severe metabolic acidemia (pH ≤ 7.20, PaCO2 ≤ 45 mmHg, [HCO3-] ≤ 20 mEq/L, and SOFA ≥ 4) randomized to 4.2% IV Sodium Bicarbonate (target pH ≥ 7.30) versus No Bicarbonate.",
            },
            {
              label: "Landmark Trial Findings",
              value: "Overall Cohort: Sodium bicarbonate did not reduce primary 28-day mortality (39% vs 46%, p=0.12) but significantly reduced the requirement for renal replacement therapy (35% vs 52%, p=0.0009).\nPre-specified AKI Subgroup (AKIN Stage 2–3, ~48% of cohort): Sodium bicarbonate significantly reduced 28-day all-cause mortality from 63% in control down to 46% with bicarbonate (absolute reduction 17%, HR 0.59; p=0.016) and reduced RRT dependence.",
            },
            {
              label: "Guideline Recommendation (SSC 2026)",
              value: "Suggest administering IV sodium bicarbonate in patients with severe metabolic acidemia (pH ≤ 7.20) and concurrent Acute Kidney Injury (AKIN stage 2–3). Do NOT administer routinely for mild-moderate lactic acidosis without AKI.",
            },
            {
              label: "Physiological Hazards of Sodium Bicarbonate",
              value: "1. Paradoxical Intracellular Acidosis: HCO3- + H+ -> H2O + CO2. Lipid-soluble CO2 freely crosses cell membranes and the blood-brain barrier, worsening intracellular and CSF acidosis unless alveolar minute ventilation is increased to exhale generated CO2.\n2. Ionized Hypocalcemia: Alkalinization increases calcium binding to albumin, triggering acute drop in ionized Ca2+ and myocardial depression.\n3. Hypernatremia & Hyperosmolality (especially with hypertonic 8.4% amps).\n4. Hypokalemia from transcellular K+ entry.",
            },
          ],
        },
        {
          type: "callout",
          tone: "trial",
          text: "BICAR-ICU established that IV sodium bicarbonate (4.2% isotonic infusion) confers a proven survival benefit in severe metabolic acidemia (pH ≤ 7.20) when complicated by acute kidney injury (AKIN 2–3).",
        },
      ],
    },
    {
      id: "metabolic-acidosis.complications",
      kind: "complications",
      title: "Complications of Metabolic Acidosis",
      summary: "Myocardial depression, vascular collapse, hyperkalemia, and intracellular acidosis.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Cardiovascular Collapse: Severe acidemia (pH < 7.15) decreases LV contractility, causes peripheral arteriolar vasoplegia, and renders vascular smooth muscle refractory to norepinephrine and vasopressin.",
            "Lethal Arrhythmias: Acidosis lowers ventricular fibrillation threshold and triggers transcellular potassium shifts resulting in acute severe hyperkalemia.",
            "Respiratory Exhaustion: Extreme compensatory hyperventilation (tidal volume 15–20 mL/kg with RR > 35, 'Kussmaul breathing') leads to diaphragmatic fatigue and rapid progression to Type II hypercapnic arrest.",
          ],
        },
      ],
    },
    {
      id: "metabolic-acidosis.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical diagnostic and therapeutic pitfalls in metabolic acidosis.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Administering IV sodium bicarbonate pushes to an intubated patient without increasing ventilator minute ventilation: Generated CO2 cannot be cleared if ventilation is fixed, driving severe paradoxical intracellular and cerebral acidosis.",
            "Failing to correct for albumin when calculating the anion gap in malnourished ICU patients: An uncorrected gap of 10 mEq/L with albumin 1.5 g/dL represents a hidden HAGMA of 16 mEq/L.",
            "Continuing 0.9% normal saline resuscitation in a resolving DKA patient: Hyperchloremic NAGMA will perpetuate low bicarbonate and delay ICU discharge; switch to balanced crystalloids once glucose is controlled.",
            "Overlooking 5-oxoproline (pyroglutamic acidosis) in an ICU patient with unexplained HAGMA receiving scheduled paracetamol/acetaminophen.",
            "Assuming D-lactic acidosis will register on standard blood lactate tests: Standard hospital assays use L-lactate dehydrogenase; D-lactate requires a specialized enzymatic sendout.",
          ],
        },
      ],
    },
    {
      id: "metabolic-acidosis.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "THAM (tromethamine) versus sodium bicarbonate and balanced crystalloids for fluid resuscitation.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "THAM (Tromethamine) vs Sodium Bicarbonate: THAM is a non-sodium, proton-accepting amino alcohol buffer that does not generate carbon dioxide during buffering (THAM + H+ -> THAM-H+), avoiding paradoxical intracellular acidosis and sodium loading. While physiologically attractive in acidemic patients with severe hypercapnic respiratory failure, THAM can cause hyperkalemia, hypoglycemia, and local tissue necrosis on extravasation, and lacks large randomized mortality trial evidence.",
        },
      ],
    },
  ],
};
