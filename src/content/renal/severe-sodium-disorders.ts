import type { Topic } from "@/content-types";

export const severeSodiumDisorders: Topic = {
  id: "severe-sodium-disorders",
  slug: "severe-sodium-disorders",
  title: "Severe Sodium Disorders: Hyponatremia & Hypernatremia",
  category: "renal",
  oneLiner: "Tonicity assessment, etiologic classification matrix, 3% hypertonic saline bolus protocols, strict 6–8 mEq/24h ceiling, DDAVP relowering for ODS, DI diagnostics, and safe water deficit kinetics.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Disorders of Sodium and Water Balance, Osmoregulation, and Osmotic Demyelination Syndrome",
    },
    {
      title: "Clinical Practice Guideline on diagnosis and treatment of hyponatraemia (European Society of Endocrinology / ESICM)",
      edition: "Eur J Endocrinol 2014;170(3):G1-G47",
    },
  ],
  currentStatus: "Current as of the European Hyponatraemia Guidelines, the US Expert Consensus Panel on Hyponatremia, and critical care hypernatremia correction standards.",
  otherReferences: [
    "Spasovski G, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol. 2014;170(3):G1-G47.",
    "Sterns RH, et al. Treatment of hyponatremia: what is the risk of overcorrection? Am J Kidney Dis. 2014;64(5):688-690.",
    "Adrogue HJ, et al. Hypernatremia. N Engl J Med. 2000;342(20):1493-1499.",
    "Sterns RH. Disorders of Plasma Sodium — Causes, Consequences, and Correction. N Engl J Med. 2015;372(1):55-65.",
    "Verbalis JG, et al. Diagnosis, evaluation, and treatment of hyponatremia: expert panel recommendations. Am J Med. 2013;126(10 Suppl 1):S1-S42.",
  ],
  relationships: [
    { type: "differential", targetId: "altered-consciousness", label: "Hyponatremic encephalopathy, seizures, and hypernatremic coma" },
    { type: "complication", targetId: "intracranial-hypertension", label: "Cerebral edema from severe acute hyponatremia or rapid hypernatremia rehydration" },
    { type: "related-to", targetId: "aki", label: "Impaired renal water handling and tubular concentrating defects" },
    { type: "related-to", targetId: "diabetic-ketoacidosis", label: "Hyperglycemia-induced pseudohyponatremia and osmotic diuresis hypernatremia" },
    { type: "related-to", targetId: "crrt", label: "Precision sodium balancing and dialysate customization during renal replacement" },
  ],
  sections: [
    {
      id: "severe-sodium-disorders.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Algorithm: Serum Osmolality & Volume Assessment",
      summary: "Classify hyponatremia by measured serum osmolality (hypotonic vs isotonic/hypertonic), then by clinical volume status and urine sodium.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Step 1: Check Serum Osmolality", value: "Confirm Hypotonic Hyponatremia (Osm < 275 mOsm/kg). Exclude Hypertonic (hyperglycemia — corrected Na = measured Na + 1.6 to 2.4 * [glucose - 100]/100; or mannitol) and Isotonic Pseudohyponatremia (severe hypertriglyceridemia or paraproteinemia on indirect ISE)." },
            { label: "Step 2: Assess Clinical Volume Status", value: "• Hypovolemic (dry mucosa, orthostasis, CVP < 5, BUN/Cr > 20:1): Urine Na < 20-30 mEq/L (extra-renal loss: vomiting, diarrhea) vs Urine Na > 30 mEq/L (renal loss: thiazides, cerebral salt wasting, mineralocorticoid deficiency). • Euvolemic (normal skin turgor, no edema, CVP 6-10): SIADH (Urine Osm > 100, Urine Na > 30-40), severe hypothyroidism, adrenal insufficiency, psychogenic polydipsia. • Hypervolemic (edema, ascites, elevated JVP): Heart failure, cirrhosis, nephrotic syndrome (Urine Na < 20 mEq/L), or advanced renal failure." },
            { label: "Step 3: Hypernatremia Free Water Deficit", value: "Formula: Free Water Deficit = Total Body Water * ([Serum Na / 140] - 1), where TBW = 0.6 * weight (men) or 0.5 * weight (women). Calculate hourly replacement rate to lower Na by <= 8-10 mEq/L/24h." }
          ]
        }
      ]
    },
    {
      id: "severe-sodium-disorders.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis: SIADH vs Cerebral Salt Wasting vs Diabetes Insipidus",
      summary: "Critical neuro-ICU distinctions between volume-replete SIADH, hypovolemic CSW, and polyuric DI.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "SIADH vs Cerebral Salt Wasting (CSW)", value: "SIADH is euvolemic/mildly hypervolemic (treated with fluid restriction and hypertonic saline); CSW is hypovolemic renal salt wasting with massive natriuresis (treated with volume and salt replacement with isotonic/hypertonic saline; fluid restriction in CSW causes fatal cerebral vasospasm and stroke)." },
            { label: "Central vs Nephrogenic Diabetes Insipidus (DI)", value: "Hypernatremia with polyuria (>3 L/day) and dilute urine (Urine Osm < 300 mOsm/kg). Central DI responds to Desmopressin (dDAVP) with >50% rise in urine osmolality; Nephrogenic DI (lithium, hypercalcemia) fails to respond to dDAVP." }
          ]
        }
      ]
    },
    {
      id: "severe-sodium-disorders.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "sodium-guideline-european-2014",
          relevance: "European clinical practice guideline on diagnosis and treatment of hyponatremia"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Severe Sodium Disorders represent primary disturbances of water balance and plasma tonicity rather than total body sodium quantity, with life-threatening cerebral consequences (cerebral edema vs osmotic demyelination) dictated by the speed of development and rate of correction.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Sodium is the principal extracellular cation and the primary determinant of Effective Plasma Osmolality (Tonicity = 2[Na+] + [Glucose]/18). In the ICU, disorders of sodium concentration reflect water imbalance: Hyponatremia indicates an excess of water relative to sodium, while Hypernatremia indicates a deficit of water relative to sodium.",
        },
        {
          type: "paragraph",
          text: "The critical principle in neurocritical and intensive care is that the brain adapts to chronic (> 48h) osmolality shifts by gaining or losing organic intracellular osmoles. Therefore, the rate of therapeutic correction must strictly respect brain volume adaptation: correcting hyponatremia too rapidly causes irreversible Osmotic Demyelination Syndrome (ODS), while correcting hypernatremia too rapidly causes lethal Cerebral Edema.",
        },
      ],
    },
    {
      id: "severe-sodium-disorders.hyponatremia-etiology",
      kind: "physiology",
      title: "Hyponatremia Etiologic Framework & Diagnostic Matrix",
      summary: "Tonicity branches, volume phenotypes, SIADH vs Cerebral Salt Wasting, low-solute states, and comparison table.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Systematic diagnostic framework and differentiation of hyponatremic phenotypes:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Step 1: Plasma Tonicity Classification",
              value: "• Isotonic Hyponatremia (275–295 mOsm/kg): Pseudohyponatremia. The aqueous phase of plasma is displaced by extreme hyperlipidemia (severe hypertriglyceridemia/chylomicronemia) or paraproteinemia (multiple myeloma). True aqueous sodium is normal; no therapy required. • Hypertonic Hyponatremia (> 295 mOsm/kg): Translocational. High effective osmoles (glucose, mannitol, maltose) draw intracellular water into extracellular space. Corrected Sodium = Measured Na+ + 1.6 x [(Glucose - 100) / 100] (or 2.4 factor for glucose > 400 mg/dL). • Hypotonic Hyponatremia (< 275 mOsm/kg): True hypotonic hyponatremia (proceed to Step 2).",
            },
            {
              label: "2. Step 2: Extracellular Volume Status & Diagnostic Matrix",
              value: "• Hypovolemic (Decreased total body water and sodium; sodium deficit > water deficit):   - Extrarenal Losses (Urine Na+ < 20 mEq/L, FeNa < 1%): Severe diarrhea, vomiting, burns, pancreatitis third-spacing.   - Renal Losses (Urine Na+ > 20–30 mEq/L): Thiazide diuretics, primary adrenal insufficiency (Addison's), cerebral salt wasting. • Euvolemic (Normal total body sodium, moderate excess free water):   - SIADH (Urine Osm > 100 mOsm/kg, Urine Na+ > 30–40 mEq/L, serum uric acid < 4.0 mg/dL).   - Secondary Adrenal Insufficiency (cortisol deficiency removes tonic ADH inhibition) & Severe Hypothyroidism.   - Low-Solute Intake / Impaired Water Excretion (Beer Potomania, 'Tea and Toast' diet): Inadequate dietary solute (< 200 mOsm/day) limits renal free water clearance despite suppressed ADH; Urine Osm < 100 mOsm/kg.   - Primary Psychogenic Polydipsia: Excessive water ingestion exceeding maximum renal excretory capacity (> 15–20 L/day); Urine Osm < 100 mOsm/kg. • Hypervolemic (Excess total body sodium and water; water excess > sodium excess):   - Congestive Heart Failure, Cirrhosis, Nephrotic Syndrome (Urine Na+ < 20 mEq/L due to low effective circulating arterial volume).   - Advanced Renal Failure (AKI/ESRD: Urine Na+ > 40 mEq/L due to loss of tubular concentrating/diluting capacity).",
            },
            {
              label: "3. SIADH vs Cerebral Salt Wasting (CSW) Differentiation",
              value: "• SIADH: Euvolemic; inappropriately high ADH; total body sodium is normal; blood pressure is normal; BUN is low/normal (< 10 mg/dL); treated with fluid restriction and oral urea / 3% saline. • Cerebral Salt Wasting (CSW): Seen in neurosurgical patients (aSAH, severe TBI). Driven by elevated brain natriuretic peptide (BNP) or sympathetic loss leading to primary renal sodium wasting. True HYPOVOLEMIA, weight loss, orthostatic hypotension, elevated BUN/Cr ratio, and negative fluid balance. STRICTLY CONTRAINDICATED to fluid restrict (precipitates cerebral vasospasm/infarction); treated with 0.9% or 3% Saline volume repletion + Fludrocortisone.",
            },
          ],
        },
        {
          type: "paragraph",
          text: "Etiological comparison matrix across major hyponatremic syndromes:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "SIADH",
              value: "Serum Osm: < 275 mOsm/kg | Urine Osm: > 100 (often > 300) | Urine Na+: > 30–40 mEq/L | Volume Status: Euvolemic | Common Causes: CNS lesions, malignancies (SCLC), pulmonary disease, drugs (SSRIs, carbamazepine) | Primary Rx: Fluid restriction (< 1 L/day), oral urea, 3% saline for severe symptoms.",
            },
            {
              label: "Hypovolemia (Extrarenal / Diuretic)",
              value: "Serum Osm: < 275 mOsm/kg | Urine Osm: > 300 mOsm/kg | Urine Na+: < 20 mEq/L (extrarenal) or > 30 mEq/L (diuretic/renal) | Volume Status: Hypovolemic (dry, orthostatic, flat JVP) | Common Causes: GI losses, thiazides, burns | Primary Rx: Isotonic crystalloid volume resuscitation (0.9% Saline / Plasma-Lyte).",
            },
            {
              label: "Heart Failure / Cirrhosis",
              value: "Serum Osm: < 275 mOsm/kg | Urine Osm: > 300 mOsm/kg | Urine Na+: < 20 mEq/L | Volume Status: Hypervolemic (edema, ascites, JVP elevated) | Common Causes: End-stage systolic HF, decompensated cirrhosis | Primary Rx: Fluid restriction, loop diuretics, neurohormonal optimization, albumin in cirrhosis.",
            },
            {
              label: "Primary Polydipsia / Low Solute",
              value: "Serum Osm: < 275 mOsm/kg | Urine Osm: < 100 mOsm/kg | Urine Na+: < 20 mEq/L | Volume Status: Euvolemic | Common Causes: Psychogenic water drinking, beer potomania, tea-and-toast | Primary Rx: Free water restriction, dietary solute repletion (oral sodium/protein).",
            },
          ],
        },
      ],
    },
    {
      id: "severe-sodium-disorders.hyponatremia-management",
      kind: "management",
      title: "Severe Symptomatic Hyponatremia: 3% Saline, Safety Ceilings & Relowering",
      summary: "3% Hypertonic Saline bolus protocol for seizures/herniation, the 6–8 mEq/24h ceiling, ODS high-risk criteria, and DDAVP relowering.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Protocolized ICU critical care resuscitation for severe or symptomatic hyponatremia:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Emergency 3% Hypertonic Saline Bolus Protocol (For Severe Symptoms)",
              value: "• Indications: Acute severe neurological symptoms (seizures, coma, stupor, respiratory depression, brainstem herniation) regardless of absolute sodium concentration. • Therapeutic Goal: A prompt, modest 4 to 6 mEq/L rise in serum sodium within the first 1–2 hours. This reduces cerebral edema volume by ~10%, rapidly stopping seizures and reversing herniation without exceeding safe daily limits. • Protocol (European / US Consensus):   - Administer 3% NaCl 100–150 mL IV bolus over 10–20 minutes.   - Recheck serum sodium at 20 minutes.   - If severe symptoms persist, repeat the 100–150 mL bolus up to 2 additional times (maximum 3 boluses total).   - Once severe symptoms resolve or the 4–6 mEq/L goal is achieved, stop hypertonic boluses and transition to individualized etiology-directed management.",
            },
            {
              label: "2. Individualized Correction Goals vs Maximum Safety Ceilings (Preventing ODS)",
              value: "• Individualized Framework: The daily correction target is NOT a rigid number; it depends on duration (acute < 48h vs chronic > 48h), presence of symptoms, and baseline ODS risk. • Acute Hyponatremia (< 48 hours): Brain volume regulation is incomplete; sodium can be corrected more rapidly to reverse cerebral edema without risk of osmotic demyelination. • Chronic Hyponatremia (> 48 hours) — Distinguish Goals vs Limits:   - Therapeutic Correction Goal: Aim for a modest increase of 4 to 6 mEq/L per 24 hours to achieve symptom control.   - Maximum Correction Safety Limit (The 'Ceiling'): Do not exceed an absolute maximum of 8 mEq/L in any 24-hour period (and ≤ 12–14 mEq/L in 48 hours).   - High-Risk Patients for ODS (Cirrhosis/advanced liver disease, chronic alcohol use disorder, severe malnutrition, hypokalemia, baseline Na+ < 105 mEq/L): Maximum correction ceiling is strictly ≤ 4 to 6 mEq/L in 24 hours. • Asymptomatic Hyponatremia: Rapid hypertonic saline is NOT indicated; manage conservatively by addressing underlying etiology (e.g. fluid restriction in SIADH, isotonic fluids in hypovolemia, holding offending diuretics) with serial monitoring.",
            },
            {
              label: "3. Preventing & Managing Overcorrection (The DDAVP Strategy)",
              value: "• The Overcorrection Phenomenon: Sudden autonomous free water excretion (aquaresis > 500 mL/hr) frequently occurs when volume depletion is reversed, cortisol/thyroid deficiency is replaced, or offending drugs are cleared. • Relowering Protocol for Accidental Overcorrection:   - If serum sodium exceeds the safe ceiling (> 6–8 mEq/L in 24h, or > 4–6 mEq/L in high-risk patients), STOP all sodium-containing infusions immediately.   - Administer Desmopressin (DDAVP 1.0–2.0 mcg IV or SC every 6–8 hours) to clamp renal water excretion.   - Infuse IV D5W (Dextrose 5% in Water) at 3–5 mL/kg/hr until serum sodium is relowered back within safe limits. • The DDAVP Clamp Strategy (Proactive Approach): In patients at extreme risk of unpredictable aquaresis, administer scheduled DDAVP (1–2 mcg q6–8h) alongside hypertonic saline, creating a fixed state of antidiuresis where sodium rise is precisely controlled by the 3% NaCl infusion rate alone.",
            },
          ],
        },
      ],
    },
    {
      id: "severe-sodium-disorders.hypernatremia",
      kind: "management",
      title: "Severe Hypernatremia: Diabetes Insipidus, Water Deficit & Safe Lowering Kinetics",
      summary: "Central vs Nephrogenic DI diagnostics, free water deficit formula, safe correction rate (≤ 8–10 mEq/24h), and enteral vs IV replacement.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Systematic evaluation and treatment of Severe Hypernatremia ([Na+] > 150–160 mEq/L):",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Etiology & Volume Classification",
              value: "Hypernatremia is ALWAYS hypertonic and reflects a deficit of pure water relative to solute, caused by: • Pure Free Water Loss (Diabetes Insipidus):   - Central DI: Lack of hypothalamic/pituitary ADH synthesis/secretion (TBI, transsphenoidal surgery, hypoxic-ischemic brain death, Sheehan syndrome).   - Nephrogenic DI: Renal resistance to ADH (chronic Lithium therapy, hypercalcemia, hypokalemia, demeclocycline, foscarnet).   - Hallmark: Inappropriately dilute polyuria (> 3 L/day, Urine Osm < 300 mOsm/kg) despite hypernatremia (serum Na+ > 145–150 mEq/L).   - Desmopressin Test: Administer DDAVP 2–4 mcg SC/IV. Central DI responds with > 50% rise in Urine Osmolality and decreased urine volume; Nephrogenic DI shows < 50% change. • Hypotonic Fluid Loss: Osmotic diuresis (DKA, HHS, high-dose Mannitol, post-ATN diuresis), profuse watery diarrhea, burns, severe fever/sweating. • Hypertonic Sodium Gain: Exogenous 8.4% Sodium Bicarbonate ampules during cardiac arrest, hypertonic saline infusions, hypertonic tube feeding without adequate water flushes.",
            },
            {
              label: "2. Free Water Deficit Calculation",
              value: "Calculate the total free water deficit (in Liters): • Deficit (L) = Total Body Water (TBW) x [(Serum Na+ / 140) - 1] • TBW = 0.60 x Weight (kg) in young men; 0.50 in young women / elderly men; 0.45 in elderly women. • Example: A 70 kg man with Na+ of 165 mEq/L has TBW = 42 L; Free Water Deficit = 42 x [(165 / 140) - 1] = 7.5 Liters of pure water.",
            },
            {
              label: "3. Safe Correction Kinetics (Avoiding Cerebral Edema)",
              value: "• In Chronic Hypernatremia (> 48 hours), brain cells synthesize 'idiogenic osmoles' (inositol, taurine, betaine) to maintain cellular volume. Rapid water replacement drives water into hypertonic brain cells, causing acute iatrogenic Cerebral Edema, seizures, and death. • Maximum Correction Rate: Lower serum sodium by NO MORE than 8 to 10 mEq/L per 24 hours (~0.4–0.5 mEq/L/hr). • Acute Hypernatremia (< 24–48 hours, e.g. acute sodium poisoning): Can be corrected rapidly at 1.0 mEq/L/hr without risk of cerebral edema.",
            },
            {
              label: "4. Replacement Strategy & Routes",
              value: "• Preferred Route: Enteral Sterile Free Water via Nasogastric/Orogastric tube (administered as scheduled water boluses, e.g. 200–300 mL q4h) plus maintenance fluid. • IV Route: D5W (Dextrose 5% in Water) continuous IV infusion (dextrose is metabolized to CO2 and water, delivering 100% free water) or 0.225% / 0.45% Saline. • Total Daily Fluid Rate: Half the calculated water deficit + ongoing insensible losses (500–800 mL/day) + ongoing urinary free water losses, distributed evenly over 24 hours. • Central Diabetes Insipidus: Desmopressin (DDAVP 1.0–2.0 mcg IV or SC every 12 hours) to halt urinary water loss.",
            },
          ],
        },
      ],
    },
    {
      id: "severe-sodium-disorders.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls in Sodium Management",
      summary: "Critical mistakes to avoid in managing hyponatremia and hypernatremia.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Failing to recognize spontaneous aquaresis during hyponatremia correction: When hypovolemia or adrenal crisis is corrected, ADH abruptly turns off, leading to massive dilute urine output (> 500 mL/hr) and rapid unintended sodium overcorrection (> 12 mEq/24h); check serum sodium every 2–4 hours and give DDAVP/D5W immediately if sodium rises too fast.",
            "Using 0.9% Normal Saline to treat SIADH: In SIADH, infused saline is excreted as concentrated urine (Urine Na+ > 154 mEq/L), but free water is retained, actually WORSENING the hyponatremia; use fluid restriction, oral urea, or 3% hypertonic saline.",
            "Restricting fluids in Cerebral Salt Wasting (CSW): Fluid restriction in neurosurgical patients with CSW precipitates severe hypovolemia, cerebral vasospasm, and ischemic stroke; treat CSW with volume replacement using 0.9% or 3% saline plus fludrocortisone.",
            "Correcting chronic hypernatremia faster than 10 mEq/L in 24 hours: Rapid free water administration causes fatal iatrogenic cerebral edema; strictly cap lowering at ≤ 8–10 mEq/24h.",
            "Failing to calculate corrected sodium in severe hyperglycemia: High glucose draws water from cells into plasma, diluting measured sodium; always calculate corrected sodium before assessing true tonicity.",
            "Treating severe symptomatic hyponatremia (seizures) with slow fluid restriction: Acute cerebral edema requires immediate 3% Hypertonic Saline boluses to save the patient's life; fluid restriction takes days to work.",
          ],
        },
      ],
    },
    {
      id: "severe-sodium-disorders.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Vasopressin Receptor Antagonists (Vaptans) vs Urea in Euvolemic Hyponatremia.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Vasopressin Receptor Antagonists (Vaptans, e.g. Tolvaptan) in SIADH: While oral Tolvaptan selectively blocks V2 receptors in the collecting duct promoting aquaresis, the 2014 European Guidelines recommend AGAINST routine vaptans in acute ICU hyponatremia due to unpredictable overcorrection rates and hepatotoxicity risks. Oral Urea (15–30 g daily) is increasingly favored as a safe, physiological osmotic aquaretic that does not cause rapid overcorrection.",
        },
      ],
    },
    {
      id: "severe-sodium-disorders.complications",
      kind: "complications",
      title: "Complications & Escalation Triggers",
      summary: "Structured recognition of Osmotic Demyelination Syndrome (ODS), cerebral edema, and overcorrection rescue protocols.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Early / Life-Threatening", value: "Hyponatremic cerebral edema, tentorial herniation, and status epilepticus; hypernatremic subdural/parenchymal hemorrhage from brain tissue shrinkage and bridging vein tearing." },
            { label: "Treatment-Related (The ODS Hazard)", value: "Osmotic Demyelination Syndrome (Central Pontine Myelinolysis): Caused by overly rapid correction of chronic hyponatremia (> 8-10 mEq/L in 24h or > 18 mEq/L in 48h). Manifests 2-6 days after correction with pseudobulbar palsy, spastic quadriparesis, locked-in syndrome, and coma. High-risk: alcoholism, malnutrition, hypokalemia, advanced liver disease." },
            { label: "Overcorrection Rescue Protocol", value: "If sodium rises > 8 mEq/L in 24 hours: IMMEDIATELY halt hypertonic saline, administer IV Desmopressin (dDAVP 1-2 mcg IV) + IV D5W (3 mL/kg/h) to re-lower sodium into the safe target range." },
            { label: "Escalation Triggers", value: "Refractory status epilepticus in acute severe hyponatremia -> immediate 3% Hypertonic Saline 100-150 mL IV bolus repeated up to 3 times to raise Na+ by 4-6 mEq/L rapidly." }
          ]
        }
      ]
    },
],
};
