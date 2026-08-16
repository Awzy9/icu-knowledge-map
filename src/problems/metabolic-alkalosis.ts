import type { ClinicalProblem } from "@/content-types";

export const metabolicAlkalosis: ClinicalProblem = {
  id: "metabolic-alkalosis",
  slug: "metabolic-alkalosis",
  title: "Severe Metabolic Alkalosis",
  category: "renal-metabolic",
  oneLiner: "Bedside evaluation of severe alkalemia (pH > 7.55, HCO3 > 35 mEq/L): assessing chloride responsiveness (urine chloride), diuretic-induced contraction alkalosis, nasogastric suction loss, hypokalemia, and acetazolamide/CRRT rescue.",
  relatedTopicIds: [
    "acid-base-disorders",
    "severe-sodium-disorders",
    "hyperkalemia",
    "mechanical-ventilation",
    "arrhythmias",
    "crrt",
  ],
  body: [
    {
      type: "paragraph",
      text: "Metabolic alkalosis (arterial pH > 7.45 with primary serum HCO3- > 28 mEq/L, severe when pH > 7.55 and HCO3- > 35 mEq/L) is the most common acid-base derangement in ICU patients. Severe alkalemia increases systemic vascular resistance, impairs coronary blood flow, causes refractory hypokalemia and ionized hypocalcemia, and blunts central respiratory drive, directly causing hypoventilation and failure to wean from mechanical ventilation.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Life-threatening ventricular and atrial arrhythmias triggered by intracellular potassium/magnesium shifts, acute tetany and laryngospasm from ionized hypocalcemia, and severe compensatory hypoventilation precipitating critical hypoxemic arrest.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. RECOGNIZE & SYSTEMIC CONSEQUENCES",
          value: "• Cardiovascular: Coronary and cerebral vasoconstriction (decreased perfusion), decreased threshold for malignant ventricular arrhythmias (especially if concurrent digitalis therapy), refractory hypotension.\n• Neuromuscular: Neuromuscular irritability, hyperreflexia, carpopedal spasm, tetany, seizures (driven by decreased ionized calcium due to increased binding to negatively charged albumin).\n• Respiratory: Blunted medullary chemoreceptor drive; the brain compensatory response is alveolar hypoventilation (PaCO2 rises 0.7 mmHg per 1.0 mEq/L rise in HCO3-), preventing extubation and promoting atelectasis.",
        },
        {
          label: "2. PHYSIOLOGIC MECHANISM: GENERATION VS MAINTENANCE",
          value: "• Generation Phase: Loss of unbuffered H+ ions (gastric drainage, vomiting), massive renal H+ excretion (loop/thiazide diuretics), or exogenous alkali administration (sodium bicarbonate, massive blood transfusion citrate metabolism, acetate in TPN).\n• Maintenance Phase: The kidneys normally excrete excess bicarbonate rapidly. Alkalosis persists ONLY if renal bicarbonate excretion is impaired by: (1) Volume depletion and chloride depletion (stimulates aldosterone and proximal HCO3- reabsorption); (2) Hypokalemia (causes intracellular acidosis in tubular cells, upregulating H+/K+ ATPase and ammoniagenesis); or (3) Decreased GFR (severe AKI/ESKD).",
        },
        {
          label: "3. DIFFERENTIAL BY URINE CHLORIDE CONCENTRATION (UCl)",
          value: "• Chloride-Responsive Metabolic Alkalosis (Spot Urine Chloride < 20 mEq/L):\n  - Extracellular Volume Depletion & Contraction Alkalosis.\n  - Gastric Losses: Nasogastric tube suctioning, severe vomiting.\n  - Remote Diuretic Use: Loop or thiazide diuretics after drug has cleared.\n  - Congenital Chloridorrhea / Villous Adenoma.\n  - Treatment: Volume expansion with IV 0.9% Normal Saline + Potassium Chloride.\n• Chloride-Resistant Metabolic Alkalosis (Spot Urine Chloride > 20 mEq/L):\n  - Mineralocorticoid Excess: Primary hyperaldosteronism (Conn syndrome), Cushing syndrome, exogenous steroids.\n  - Severe Profound Hypokalemia (Serum K+ < 2.0 mEq/L).\n  - Active Diuretic Use (loop/thiazide actively blocking chloride reabsorption).\n  - Bartter / Gitelman Syndromes.\n  - Renal Failure with Exogenous Alkali.\n  - Treatment: Potassium repletion, Aldosterone antagonists (Spironolactone), Acetazolamide, or CRRT.",
        },
        {
          label: "4. TARGETED INITIAL INVESTIGATIONS",
          value: "• Arterial Blood Gas: Confirm pH, PaCO2, and HCO3-; calculate expected compensatory PaCO2 (Expected PaCO2 = 0.7 × [HCO3- - 24] + 40 ± 2).\n• Spot Urine Electrolytes: Measure Urine Chloride (UCl), Urine Sodium (UNa), and Urine Potassium (UK).\n• Serum Electrolytes: Check Potassium (K+), Magnesium (Mg2+), and Ionized Calcium (iCa2+).\n• Volume Assessment: Bedside POCUS of IVC, cardiac chambers, and skin turgor.",
        },
        {
          label: "5. STEPPED CRITICAL CARE MANAGEMENT",
          value: "• Step 1: Aggressive Potassium Repletion: Infuse IV Potassium Chloride (KCl); restoring serum K+ > 4.0–4.5 mEq/L shuts down renal tubular hydrogen ion secretion.\n• Step 2: Volume & Chloride Replacement (for Chloride-Responsive states): Infuse IV 0.9% Normal Saline (contains 154 mEq/L chloride) to expand extracellular volume and suppress secondary hyperaldosteronism.\n• Step 3: Carbonic Anhydrase Inhibition (Acetazolamide): In hypervolemic/edematous patients (e.g. COPD with heart failure on diuretics where saline is contraindicated):\n  - Administer IV Acetazolamide 500 mg IV q12–24h (blocks proximal tubular bicarbonate reclamation, inducing alkaline diuresis and lowering serum HCO3-).\n• Step 4: Dialytic Clearance (CRRT): In anuric renal failure or life-threatening severe alkalemia (pH > 7.60), initiate CRRT with customized low-bicarbonate / high-chloride dialysate/replacement solutions (or IV Hydrochloric Acid 0.1 N infusion via central line in extreme refractory situations).",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Failing to recognize metabolic alkalosis as the primary obstacle preventing successful weaning from mechanical ventilation. Severe alkalemia suppresses the patient's spontaneous respiratory drive; correcting alkalosis with Acetazolamide or potassium chloride promptly restores spontaneous ventilatory trigger.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Acid-Base Disorders: Stewart physicochemical model (strong ion difference) and compensation formulas.\n• Severe Sodium Disorders: Contraction alkalosis and volume status assessment.\n• Hyperkalemia: Hypokalemia-induced hydrogen ion shifts and renal tubular kinetics.\n• Mechanical Ventilation: Weaning failure, dead-space ventilation, and respiratory drive.\n• CRRT: Customized dialysate composition and electrolyte clearance.",
        },
      ],
    },
  ],
};
