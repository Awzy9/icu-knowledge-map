import type { Comparison } from "@/content-types/comparison";

const DK = "dka", HH = "hhs";
const SI = "siadh", CW = "csw", DI = "di";
const HG = "hagma", NG = "nagma", RA = "resp-acid", RL = "resp-alk";

export const dkaVsHhs: Comparison = {
  id: "dka-vs-hhs",
  title: "DKA vs HHS",
  subtitle: "Hyperglycemic crises compared",
  system: "Endocrine / Renal",
  entities: [
    { id: DK, label: "DKA", href: "/topics/diabetic-ketoacidosis" },
    { id: HH, label: "HHS", href: "/topics/endocrine-emergencies" },
  ],
  rows: [
    { label: "Glucose", group: "assessment", values: [
      { entityId: DK, content: "Usually >250 mg/dL (may be lower in euglycemic DKA)" },
      { entityId: HH, content: "Typically >600 mg/dL", emphasis: true },
    ]},
    { label: "Ketones", group: "assessment", values: [
      { entityId: DK, content: "Markedly elevated (serum β-hydroxybutyrate high)", emphasis: true },
      { entityId: HH, content: "Absent or trivial" },
    ]},
    { label: "Acidosis", group: "assessment", values: [
      { entityId: DK, content: "pH <7.3, HCO₃⁻ <18, raised anion gap", emphasis: true },
      { entityId: HH, content: "pH essentially preserved" },
    ]},
    { label: "Effective osmolality", group: "assessment", values: [
      { entityId: DK, content: "Variable, often mildly high" },
      { entityId: HH, content: ">320 mOsm/kg — correlates with sensorium", emphasis: true },
    ]},
    { label: "Volume deficit", group: "assessment", values: [
      { entityId: DK, content: "~5–7 L typical estimate" },
      { entityId: HH, content: "~8–12 L typical estimate — often larger, develops over days" },
    ]},
    { label: "Potassium physiology", group: "management", values: [
      { entityId: DK, content: "Total-body K⁺ depleted even when serum is normal/high; insulin shifts K⁺ intracellularly — replace to keep ~4–5 mEq/L; HOLD insulin if K⁺ <3.5", emphasis: true },
      { entityId: HH, content: "Same depletion principle; monitor closely with insulin + fluids" },
    ]},
    { label: "Insulin strategy", group: "management", values: [
      { entityId: DK, content: "IV regular insulin ~0.1 units/kg/h (fixed-rate; pre-bolus not mandatory per current consensus); only after K⁺ secured" },
      { entityId: HH, content: "Lower-dose infusion (~0.05–0.1 units/kg/h) aiming for GRADUAL osmolality decline", emphasis: true },
    ]},
    { label: "Fluid priorities", group: "management", values: [
      { entityId: DK, content: "Isotonic crystalloid first hour, then per corrected Na/hemodynamics; add dextrose when glucose <200–250 to continue insulin" },
      { entityId: HH, content: "Aggressive but monitored repletion; rate tempered in elderly/cardiac/renal disease; correct Na slowly", emphasis: true },
    ]},
    { label: "Resolution criteria", group: "traps", values: [
      { entityId: DK, content: "Anion gap closed + ketones clearing (not glucose alone); overlap SC basal-bolus before stopping infusion", emphasis: true },
      { entityId: HH, content: "Normal mentation + near-normal osmolality + ambulation; insulin stopped only when stable on maintenance regimen" },
    ]},
  ],
  references: [{ label: "ADA Hyperglycemic Crises consensus (project guideline entry)" }],
};

export const sodiumDisordersComparison: Comparison = {
  id: "siadh-csw-di",
  title: "SIADH vs Cerebral Salt Wasting vs Diabetes Insipidus",
  subtitle: "Two hyponatremia mechanisms — and one opposite disorder",
  system: "Neurology / Renal",
  entities: [
    { id: SI, label: "SIADH", href: "/topics/severe-sodium-disorders" },
    { id: CW, label: "CSW", href: "/topics/severe-sodium-disorders" },
    { id: DI, label: "Diabetes insipidus", href: "/topics/severe-sodium-disorders" },
  ],
  rows: [
    { label: "Serum sodium", group: "assessment", values: [
      { entityId: SI, content: "LOW (hypotonic hyponatremia)" },
      { entityId: CW, content: "LOW (hypotonic hyponatremia)" },
      { entityId: DI, content: "HIGH (hypernatremia) — the OPPOSITE problem", emphasis: true },
    ]},
    { label: "Serum osmolality", group: "assessment", values: [
      { entityId: SI, content: "Low" },
      { entityId: CW, content: "Low" },
      { entityId: DI, content: "High", emphasis: true },
    ]},
    { label: "Urine osmolality", group: "assessment", values: [
      { entityId: SI, content: "Inappropriately concentrated (>100 mOsm/kg)" },
      { entityId: CW, content: "Inappropriately concentrated" },
      { entityId: DI, content: "Inappropriately dilute despite hypernatremia", emphasis: true },
    ]},
    { label: "Urine sodium", group: "assessment", values: [
      { entityId: SI, content: "Often >30 mEq/L (euvolemic pattern)" },
      { entityId: CW, content: "Markedly high with volume depletion", emphasis: true },
      { entityId: DI, content: "Variable; follows water diuresis" },
    ]},
    { label: "Volume status", group: "assessment", values: [
      { entityId: SI, content: "Euvolemic (clinically)" },
      { entityId: CW, content: "Hypovolemic", emphasis: true },
      { entityId: DI, content: "Hypovolemic if losses unreplaced" },
    ]},
    { label: "Urine output", group: "assessment", values: [
      { entityId: SI, content: "Normal/subnormal" },
      { entityId: CW, content: "High (salt-rich diuresis)", emphasis: true },
      { entityId: DI, content: "Very high, dilute polyuria", emphasis: true },
    ]},
    { label: "Mechanism", group: "mechanism", values: [
      { entityId: SI, content: "ADH secreted despite low osmolality (malignancy, drugs, CNS/pulmonary disease, post-op)" },
      { entityId: CW, content: "Renal salt wasting — classically after SAH; natriuresis drives ADH secondarily", emphasis: true },
      { entityId: DI, content: "Central: ADH deficiency. Nephrogenic: ADH resistance (lithium, hypercalcemia)" },
    ]},
    { label: "Treatment principle", group: "management", values: [
      { entityId: SI, content: "Restrict free water; consider NaCl/urea; short-course vasopressin antagonists per protocol; correct Na slowly" },
      { entityId: CW, content: "REPLACE salt AND volume (isotonic ± hypertonic) — restriction worsens it", emphasis: true },
      { entityId: DI, content: "Replace water (enterally/IV D5); central → desmopressin; nephrogenic → treat cause, Na restriction ± thiazide/amiloride", emphasis: true },
    ]},
  ],
  caveat: "SIADH and CSW overlap in biochemistry (both: low Na + concentrated urine + high urine Na); volume status and urine OUTPUT separate them. DI is not a cause of hyponatremia at all — grouping all three as the same sodium problem leads to harmful therapy swaps.",
  references: [{ label: "European hyponatraemia guideline entry (project)" }],
};

export const acidBaseComparison: Comparison = {
  id: "acid-base-primary",
  title: "Primary Acid–Base Disturbances",
  subtitle: "Metabolic & respiratory — compensation, causes, calculations",
  system: "Renal / Respiratory",
  entities: [
    { id: HG, label: "High-AG metabolic acidosis", href: "/topics/metabolic-acidosis" },
    { id: NG, label: "Normal-AG metabolic acidosis", href: "/topics/acid-base-disorders" },
    { id: RA, label: "Respiratory acidosis", href: "/topics/hypercapnic-respiratory-failure" },
    { id: RL, label: "Respiratory alkalosis", href: "/topics/acid-base-disorders" },
  ],
  rows: [
    { label: "Primary disturbance", group: "mechanism", values: [
      { entityId: HG, content: "↓HCO₃⁻ from added acid (AG expanded)", emphasis: true },
      { entityId: NG, content: "↓HCO₃⁻ with Cl⁻ gain (AG normal)", emphasis: true },
      { entityId: RA, content: "↑PaCO₂ (alveolar hypoventilation)", emphasis: true },
      { entityId: RL, content: "↓PaCO₂ (hyperventilation)", emphasis: true },
    ]},
    { label: "Expected compensation", group: "assessment", values: [
      { entityId: HG, content: "Winter: expected PaCO₂ ≈ 1.5×HCO₃⁻ + 8 (±2)" },
      { entityId: NG, content: "Same Winter relation applies" },
      { entityId: RA, content: "Acute: HCO₃⁻ +1 per 10 mmHg PaCO₂; Chronic: +3.5–4 per 10" },
      { entityId: RL, content: "Acute: HCO₃⁻ −2 per 10; Chronic: −4–5 per 10" },
    ]},
    { label: "Common ICU causes", group: "traps", values: [
      { entityId: HG, content: "Lactic (shock, metformin), ketoacidosis (DM/alcohol), toxins (methanol, ethylene glycol, salicylate), renal failure" },
      { entityId: NG, content: "GI HCO₃⁻ loss (diarrhea, fistula/high-output stoma), RTAs, acetazolamide, large-volume saline (hyperchloremic)", emphasis: true },
      { entityId: RA, content: "Sedatives/opioids, neuromuscular weakness (GBS/MG/high cord), COPD exacerbation, obesity hypoventilation, fatigue/auto-PEEP in late ARDS", emphasis: true },
      { entityId: RL, content: "Pain/anxiety, hypoxemia, early sepsis, PE, liver failure, salicylates, over-ventilation" },
    ]},
    { label: "Key calculations", group: "assessment", values: [
      { entityId: HG, content: "AG = Na − (Cl + HCO₃⁻); ΔΔ gap to expose a second (normal-AG) disorder; osmolar gap if toxin suspected; correct AG for albumin (+~2.5 per 1 g/dL below 4)", emphasis: true },
      { entityId: NG, content: "Urine anion gap; ΔΔ (low ratio suggests combined HAGMA+NAGMA)" },
      { entityId: RA, content: "Compare measured HCO₃⁻ vs expected → exposes superimposed metabolic disorder" },
      { entityId: RL, content: "Same expected-compensation comparison" },
    ]},
    { label: "Common traps", group: "traps", values: [
      { entityId: HG, content: "Hypoalbuminemia masks a high AG; D-lactate not detected on standard lactate assay" },
      { entityId: NG, content: "Post-saline acidosis misread as worsening AKI acidosis", emphasis: true },
      { entityId: RA, content: "Rising post-intubation PaCO₂ from AUTO-PEEP mistaken for worsening disease", emphasis: true },
      { entityId: RL, content: "Near-normal pH from mixed disturbances hides severity; severe alkalemia → arrhythmia, ↓cerebral flow, ↓ionized Ca²⁺" },
    ]},
  ],
  references: [{ label: "Project acid-base & metabolic-acidosis topics" }],
};
