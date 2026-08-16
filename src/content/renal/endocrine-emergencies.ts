import type { Topic } from "@/content-types";

export const endocrineEmergencies: Topic = {
  id: "endocrine-emergencies",
  slug: "endocrine-emergencies",
  title: "Endocrine Emergencies in Critical Care",
  category: "renal",
  oneLiner: "Management of thyroid storm, myxedema coma, acute adrenal crisis, and pheochromocytoma hypertensive crisis.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapter 108: Endocrine Crises and Metabolic Emergencies in the ICU"
    },
    {
      title: "Oh's Intensive Care Manual",
      edition: "9th Edition, 2025",
      note: "Chapter 58: Acute Endocrine Disorders"
    }
  ],
  currentStatus: "Current as of the 2016 American Thyroid Association (ATA) Guidelines for Hyperthyroidism and the Endocrine Society Guidelines on Adrenal Insufficiency and Pheochromocytoma.",
  otherReferences: [
    "Ross DS, et al. 2016 American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis. Thyroid. 2016;26(10):1343-1421.",
    "Bornstein SR, et al. Diagnosis and Treatment of Primary Adrenal Insufficiency: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2016;101(2):364-389."
  ],
  relationships: [
    { type: "related-to", targetId: "diabetic-ketoacidosis", label: "Hyperglycemic metabolic emergency and insulin therapy" },
    { type: "differential", targetId: "shock", label: "Refractory vasodilatory shock in acute adrenal crisis" },
    { type: "prerequisite", targetId: "hypertensive-emergencies", label: "Alpha-blockade before beta-blockade in pheochromocytoma crisis" },
    { type: "differential", targetId: "arrhythmias", label: "Thyrotoxic atrial fibrillation with rapid ventricular response" }
  ],
  sections: [
    {
      id: "endocrine-emergencies.overview",
      kind: "overview",
      title: "The Four Life-Threatening Endocrine Crises",
      summary: "Endocrine crises are high-mortality metabolic emergencies that mimic sepsis, cardiogenic shock, or malignant hyperthermia. Rapid recognition and specific hormonal replacement or blockade are life-saving.",
      provenance: "guideline",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "endocrine-guideline-ata-thyroid-storm-2016",
          relevance: "ATA 2016 Guidelines on diagnostic criteria, 5-step pharmacological sequence, and ICU supportive care for thyroid storm"
        }
      ],
      body: [
        {
          type: "paragraph",
          text: "Endocrine emergencies present with severe multi-organ dysfunction triggered by an acute stressor (infection, surgery, trauma, myocardial infarction, or medication non-compliance). Mortality in untreated thyroid storm, myxedema coma, or acute adrenal crisis exceeds 50%."
        },
        {
          type: "key-value-table",
          rows: [
            { label: "1. Thyroid Storm", value: "Extreme hypermetabolic state characterized by hyperpyrexia (39-41°C), marked tachycardia / tachyarrhythmias (AF), high-output heart failure, agitation/delirium/coma, and GI-hepatic dysfunction (jaundice, diarrhea)." },
            { label: "2. Myxedema Coma", value: "Severe end-stage hypothyroidism characterized by profound hypothermia (<35°C), obtundation/coma, severe bradycardia, hypoventilation/hypercapnia, hyponatremia, and generalized non-pitting edema." },
            { label: "3. Acute Adrenal Crisis", value: "Acute cortisol deficiency manifesting as refractory vasodilatory shock unresponsive to catecholamines, hypoglycemia, hyponatremia, hyperkalemia, fever, and severe abdominal pain." },
            { label: "4. Pheochromocytoma Crisis", value: "Massive catecholamine release causing severe paroxysmal hypertension, alternating with shock (due to profound down-regulation of alpha receptors), cardiomyopathy, hyperthermia, and multiorgan failure." }
          ]
        }
      ]
    },
    {
      id: "endocrine-emergencies.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Strategies & Clinical Scoring Criteria",
      summary: "Clinical diagnosis must drive immediate therapy without waiting for confirmatory hormonal assays.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Burch-Wartofsky Point Scale (BWPS) for Thyroid Storm", value: "Scoring system based on: Thermoregulatory dysfunction (temp 37.2-40.5°C = 5-30 pts), CNS effects (mild agitation to coma = 10-30 pts), Gastrointestinal-hepatic dysfunction (diarrhea to jaundice = 10-20 pts), Cardiovascular dysfunction (tachycardia 90-140+ bpm = 5-25 pts, atrial fibrillation = 10 pts, heart failure = 5-15 pts), and Precipitating event (10 pts). Score >= 45 is highly suggestive of Thyroid Storm; 25-44 supports impending storm; < 25 unlikely." },
            { label: "Adrenal Crisis Diagnostic Clues", value: "Unexplained refractory shock in a patient on chronic steroid therapy (or with history of autoimmune disease), accompanied by hypoglycemia, hyponatremia, and hyperkalemia. Random cortisol < 10-15 mcg/dL in the setting of critical shock is diagnostic. Do NOT delay steroid therapy for a cosyntropin stimulation test in an unstable patient." },
            { label: "Myxedema Coma Criteria", value: "Hypothermia + altered mental status + history of hypothyroidism / thyroidectomy. High TSH with undetectable free T4 confirms, but treatment must start on clinical suspicion." }
          ]
        }
      ]
    },
    {
      id: "endocrine-emergencies.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Endocrine Crises",
      summary: "Differentiate endocrine hypermetabolic and hypometabolic states from septic shock and neuroleptic syndromes.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Severe Sepsis / Septic Shock: Fever, tachycardia, hypotension, and leukocytosis; can coexist with or trigger an endocrine crisis.",
            "Serotonin Syndrome / Neuroleptic Malignant Syndrome: Hyperthermia, autonomic instability, and altered sensorium, but accompanied by clonus (SS) or lead-pipe rigidity (NMS).",
            "Severe Diabetic Ketoacidosis: High anion gap acidosis with hyperglycemia and ketonuria; can precipitate secondary adrenal insufficiency.",
            "Severe Sepsis with Hypothermia: Sepsis can cause severe hypothermia resembling myxedema coma; check thyroid function tests."
          ]
        }
      ]
    },
    {
      id: "endocrine-emergencies.thyroid-storm-management",
      kind: "management",
      title: "Thyroid Storm: The 5-Step Treatment Sequence",
      summary: "Pharmacological blockade must follow a strict sequential order to inhibit synthesis, release, and peripheral conversion of thyroid hormones.",
      provenance: "guideline",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            "Step 1: Beta-Blockade: Administer IV Propranolol (1-2 mg IV slow push every 10-15 min, or 60-80 mg PO q4-6h) or IV Esmolol infusion. Propranolol controls sympathetic storm and uniquely inhibits peripheral T4-to-T3 conversion at high doses.",
            "Step 2: Thionamide (Inhibit New Synthesis): Propylthiouracil (PTU, 500-1000 mg PO/NG loading, then 200-250 mg q4h) or Methimazole (20-30 mg PO/NG q4-6h). PTU is preferred in storm because it also blocks peripheral T4-to-T3 conversion.",
            "Step 3: Inorganic Iodine (Block Hormone Release — Wolff-Chaikoff Effect): Administer Saturated Solution of Potassium Iodide (SSKI, 5 drops PO q6h) or Lugol's solution (8-10 drops q8h) ONLY AFTER AT LEAST 1 HOUR HAS ELAPSED SINCE THIONAMIDE. CRITICAL WARNING: If iodine is given before thionamide, the thyroid gland uses the iodine as substrate to synthesize massive new waves of thyroid hormone (Jod-Basedow phenomenon), worsening storm.",
            "Step 4: Corticosteroid Therapy: IV Hydrocortisone (100 mg IV q8h) or IV Dexamethasone (2 mg IV q6h). Reduces peripheral T4-to-T3 conversion and treats potential relative adrenal exhaustion.",
            "Step 5: Bile Acid Sequestrants & Cooling: Cholestyramine (4 g PO q6h) binds thyroid hormone in the gut to prevent enterohepatic recirculation. Use cooling blankets and acetaminophen for fever; AVOID Aspirin / Salicylates (aspirin displaces T4/T3 from thyroid-binding globulin, worsening free hormone levels)."
          ]
        }
      ]
    },
    {
      id: "endocrine-emergencies.myxedema-adrenal-management",
      kind: "management",
      title: "Myxedema Coma & Acute Adrenal Crisis Protocols",
      summary: "Steroid administration must precede thyroid hormone in myxedema coma to prevent fatal adrenal collapse.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Myxedema Coma Management", value: "(1) IV Hydrocortisone 100 mg STAT FIRST: Thyroid hormone accelerates hepatic clearance of cortisol; giving thyroid hormone without steroids in a patient with coexisting adrenal insufficiency precipitates fatal cardiovascular collapse. (2) IV Levothyroxine (T4, 200-400 mcg IV loading, then 50-100 mcg daily) +/- IV Liothyronine (T3, 5-20 mcg IV loading, then 2.5-10 mcg q8h). (3) Passive rewarming (avoid active surface rewarming which causes sudden peripheral vasodilation and shock). (4) Cautious fluid restriction for SIADH-induced hyponatremia." },
            { label: "Acute Adrenal Crisis Protocol", value: "(1) IV Hydrocortisone 100 mg IV STAT bolus, followed by 50-100 mg IV every 6 to 8 hours (at >=200 mg/day, hydrocortisone provides full mineralocorticoid receptor coverage without needing fludrocortisone). (2) Volume Resuscitation: Rapid IV infusion of 1-3 L D5 0.9% Normal Saline over the first few hours to correct hypovolemia and hypoglycemia. (3) Vasopressors: Norepinephrine as needed while hydrocortisone restores vascular catecholamine receptor sensitivity." },
            { label: "Pheochromocytoma Crisis Protocol", value: "Strict Alpha-Blockade FIRST: Administer IV Phentolamine (5 mg bolus, repeated or infused) or oral Phenoxybenzamine (10 mg BID titrated). NEVER administer a beta-blocker before adequate alpha-blockade has been established for >=10-14 days; unopposed alpha-1 vasoconstriction leads to catastrophic hypertensive encephalopathy, aortic dissection, or acute pulmonary edema." }
          ]
        }
      ]
    },
    {
      id: "endocrine-emergencies.monitoring",
      kind: "monitoring",
      title: "ICU Endocrine & Hemodynamic Monitoring",
      summary: "Surveillance of blood glucose, electrolytes, body temperature, and continuous arterial pressure.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Blood Glucose Monitoring", value: "Hourly to q2h blood glucose checks to detect neuroglycopenia in adrenal crisis and myxedema coma." },
            { label: "Electrolyte Surveillance", value: "Serial potassium and sodium every 4-6 hours to confirm resolution of hyperkalemia/hyponatremia in adrenal crisis." },
            { label: "Continuous ECG Telemetry", value: "Continuous rhythm surveillance for thyrotoxic tachyarrhythmias (AF, ventricular tachycardias) or myxedema bradyarrhythmias." }
          ]
        }
      ]
    },
    {
      id: "endocrine-emergencies.complications",
      kind: "complications",
      title: "Complications & Escalation Triggers",
      summary: "Structured recognition of lethal acute decompensations, treatment-related hazards, and escalation criteria.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Early / Life-Threatening", value: "High-output heart failure and cardiogenic shock in thyroid storm, severe respiratory failure and hypoventilation in myxedema coma, refractory vasodilatory shock in adrenal crisis, hypertensive encephalopathy in pheochromocytoma." },
            { label: "Treatment-Related", value: "Adrenal crisis precipitated by starting thyroid hormone without prior steroids, Jod-Basedow thyroid storm exacerbation from premature iodine administration, peripheral vasodilation collapse from active rewarming in myxedema, unopposed alpha crisis from beta-blocker alone in pheochromocytoma." },
            { label: "Late / Delayed", value: "Agranulocytosis and hepatotoxicity from thionamides (PTU/Methimazole), permanent adrenal/thyroid insufficiency requiring lifelong replacement." },
            { label: "Escalation Triggers", value: "Refractory hyperpyrexia (>41°C) in thyroid storm requiring therapeutic plasma exchange (TPE) or continuous renal replacement therapy for cooling and hormone removal; progressive hypercapnic coma requiring endotracheal intubation in myxedema." }
          ]
        }
      ]
    },
    {
      id: "endocrine-emergencies.pitfalls",
      kind: "controversies",
      title: "Critical Care Endocrine Pitfalls & Practice Red Lines",
      summary: "High-yield bedside errors in endocrine crises including steroid timing, beta-blockade hazards, and active rewarming.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Pitfall: Thyroid Hormone Before Steroids", value: "Administering IV levothyroxine or liothyronine before IV hydrocortisone in myxedema coma; accelerated hepatic clearance of endogenous cortisol triggers immediate, fatal adrenal crisis." },
            { label: "Pitfall: Beta-Blockers in Pheochromocytoma", value: "Administering a beta-blocker prior to establishing complete alpha-1 blockade in pheochromocytoma crisis; unopposed alpha-1 vasoconstriction precipitates severe hypertensive stroke, acute aortic dissection, or acute pulmonary edema." },
            { label: "Pitfall: Premature Iodine in Thyroid Storm", value: "Administering Lugol's solution or potassium iodide before or simultaneously with PTU/methimazole; inorganic iodine without thionamide blockade acts as substrate to synthesize new thyroid hormone (Jod-Basedow effect)." },
            { label: "Pitfall: Active Rewarming in Myxedema", value: "Using aggressive external surface warming blankets for severe hypothermia in myxedema coma; rapid peripheral vasodilation produces severe cardiovascular collapse." },
            { label: "Pitfall: Withholding Cortisol Replacement in Shock", value: "Waiting for serum cortisol results before administering stress-dose hydrocortisone in unexplained refractory vasopressor-dependent shock with suspected adrenal crisis." }
          ]
        }
      ]
    }
  ]
};
