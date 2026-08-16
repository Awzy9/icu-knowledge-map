import type { Topic } from "@/content-types";

export const criticalIllnessNutrition: Topic = {
  id: "critical-illness-nutrition",
  slug: "critical-illness-nutrition",
  title: "Critical Illness Nutrition & Metabolism",
  category: "gi-hepatic",
  oneLiner: "Phased energy targets, high-protein delivery, early trophic enteral feeding, refeeding syndrome prevention, and targeted parenteral nutrition timing.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapter 131: Nutritional Assessment and Therapy in the Critically Ill"
    },
    {
      title: "Oh's Intensive Care Manual",
      edition: "9th Edition, 2025",
      note: "Chapter 68: Clinical Nutrition and Metabolism in Intensive Care"
    }
  ],
  currentStatus: "Current as of the 2019 ESPEN Guideline on Clinical Nutrition in the ICU and the 2016 ASPEN/SCCM Critical Care Nutrition Guidelines.",
  otherReferences: [
    "Singer P, et al. ESPEN guideline on clinical nutrition in the intensive care unit. Clin Nutr. 2019;38(1):48-79.",
    "TARGET Investigators. Energy-Dense versus Routine Enteral Nutrition in the Critically Ill (TARGET). N Engl J Med. 2018;379(19):1823-1834.",
    "Casaer MP, et al. Early versus Late Parenteral Nutrition in Critically Ill Adults (EPaNIC). N Engl J Med. 2011;365(6):506-517."
  ],
  relationships: [
    { type: "prerequisite", targetId: "acute-mesenteric-ischemia", label: "Withholding full enteral nutrition in severe unresuscitated shock to prevent non-occlusive mesenteric ischemia (NUTRIREA-2)" },
    { type: "differential", targetId: "severe-sodium-disorders", label: "Refeeding syndrome-induced severe hypophosphatemia, hypokalemia, and fluid shifts" },
    { type: "related-to", targetId: "acute-pancreatitis", label: "Early enteral nutrition vs parenteral nutrition in severe acute pancreatitis" }
  ],
  sections: [
    {
      id: "critical-illness-nutrition.overview",
      kind: "overview",
      title: "Metabolic Phases & The Enteral Nutrition First Rule",
      summary: "Critical illness is characterized by intense neuroendocrine stress, catabolism, and endogenous energy production. Enteral Nutrition (EN) is the preferred route, started early (within 24-48 hours) once hemodynamics are stable.",
      provenance: "guideline",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "nutrition-guideline-espen-2019",
          relevance: "ESPEN 2019 comprehensive clinical practice guideline on ICU energy, protein targets, route selection, and PN timing"
        }
      ],
      body: [
        {
          type: "paragraph",
          text: "Critical illness is not simple starvation: systemic inflammation and counter-regulatory hormones (cortisol, glucagon, catecholamines) drive massive skeletal muscle proteolysis and endogenous hepatic glucose production (2-3 g/kg/day) that CANNOT be suppressed by exogenous caloric delivery. Enteral nutrition maintains gut mucosal barrier integrity, prevents bacterial translocation, and dampens systemic inflammation."
        },
        {
          type: "key-value-table",
          rows: [
            { label: "Phase 1: Early Acute Phase (Days 1-2)", value: "Profound catabolism, metabolic instability, and endogenous energy production. Full caloric feeding during this phase causes hyperglycemia, hypercapnia, and hepatic steatosis. Target: Low-dose hypocaloric / trophic feeding (10-20 kcal/h or <= 70% energy expenditure)." },
            { label: "Phase 2: Late Acute Phase (Days 3-7)", value: "Gradual stabilization; slowly advance caloric delivery toward 80-100% of measured or calculated energy expenditure (20-25 kcal/kg/day)." },
            { label: "Phase 3: Post-Acute Anabolic Phase (> Day 7)", value: "Rehabilitation, wound healing, and recovery. Deliver full calories (25-30 kcal/kg/day) and high protein (1.5-2.0 g/kg/day) to support muscle re-synthesis." }
          ]
        }
      ]
    },
    {
      id: "critical-illness-nutrition.diagnosis-refeeding",
      kind: "diagnosis",
      title: "Nutritional Risk Stratification & Refeeding Syndrome Screening",
      summary: "Identify high-nutritional-risk patients (NUTRIC score) and screen aggressively for Refeeding Syndrome risk prior to feed initiation.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "NUTRIC Score / NRS-2002", value: "Identifies patients who benefit most from nutritional support (evaluates age, APACHE II, SOFA score, number of comorbidities, days in hospital before ICU, and IL-6). A modified NUTRIC score >= 5 indicates high nutritional risk." },
            { label: "Refeeding Syndrome Risk Screening", value: "High risk: BMI < 16, unintentional weight loss > 15% in 3-6 months, little or no nutritional intake for > 10 days, or baseline low serum phosphate, potassium, or magnesium prior to feeding (chronic alcoholism, anorexia, oncology, prolonged fasting)." },
            { label: "Refeeding Pathophysiology", value: "Re-introducing carbohydrates triggers insulin surges, driving phosphate, potassium, and magnesium into cells to phosphorylate glucose, causing precipitous serum hypophosphatemia (<1.0-1.5 mg/dL), fatal arrhythmias, acute heart failure, and diaphragmatic paralysis." }
          ]
        }
      ]
    },
    {
      id: "critical-illness-nutrition.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Enteral Feeding Intolerance",
      summary: "Distinguish benign delayed gastric emptying from mechanical bowel obstruction or non-occlusive mesenteric ischemia.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Delayed Gastric Emptying (Gastroparesis): Common in critical illness secondary to opioids, hyperglycemia, and catecholamines; responsive to prokinetics (metoclopramide, erythromycin).",
            "Non-Occlusive Mesenteric Ischemia (NOMI): Enteral feeding in an unresuscitated patient with high vasopressor requirements can trigger bowel infarction (severe pain, metabolic acidosis, rising lactate; NUTRIREA-2 trial).",
            "Paralytic Ileus: Diffuse bowel distension, absent bowel sounds, multiple air-fluid levels on X-ray following abdominal surgery or severe retroperitoneal inflammation.",
            "Refeeding-Induced Cardiac Decompensation: Sudden acute congestive heart failure and pulmonary edema following rapid fluid and sodium retention during carbohydrate reintroduction."
          ]
        }
      ]
    },
    {
      id: "critical-illness-nutrition.caloric-protein-targets",
      kind: "management",
      title: "Caloric Targets & High-Protein Delivery (TARGET & EPaNIC Evidence)",
      summary: "The TARGET trial demonstrates that 100% calories provide no advantage over 70% in the acute phase. High protein delivery (1.2-2.0 g/kg/day) is the primary clinical priority.",
      provenance: "trial",
      evidenceRefs: [
        {
          kind: "trial",
          id: "nutrition-target-trial",
          relevance: "TARGET landmark randomized trial (n=3957) demonstrating that energy-dense 100% caloric feeding did not improve 90-day survival or functional recovery over routine feeding (70% calories)"
        },
        {
          kind: "trial",
          id: "nutrition-epanic-trial",
          relevance: "EPaNIC trial (n=4640) showing that withholding early parenteral nutrition until Day 8 in ICU patients significantly reduced new infections, shortened ICU stay, and sped recovery"
        }
      ],
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Caloric Target (Acute Phase)", value: "15 to 20 kcal/kg/day during the initial 48-72 hours, advancing to 20-25 kcal/kg/day in the late acute phase. Indirect calorimetry is the gold standard for measuring resting energy expenditure (REE) when available." },
            { label: "Protein Target (The Critical Metric)", value: "High protein is essential: 1.2 to 2.0 g/kg actual or ideal body weight/day. Protein delivery must NOT be restricted in acute kidney injury or CRRT (patients on CRRT lose 10-15 g amino acids/day into effluent, requiring 1.5-2.5 g/kg/day)." },
            { label: "Parenteral Nutrition Timing (EPaNIC Trial)", value: "In well-nourished or low-risk ICU patients, withhold parenteral nutrition (PN) until Day 8 if enteral nutrition is insufficient. The EPaNIC trial demonstrated that early PN resulted in higher infection rates and longer ICU stays compared with late PN, secondary to autophagy suppression." },
            { label: "Refeeding Protocol", value: "In high-risk refeeding patients: Check baseline PO4, K+, Mg2+ and replete BEFORE feeding. Start feeding at 5-10 kcal/kg/day, give IV Thiamine 100-300 mg daily for 3 days, and slowly advance over 4-7 days while monitoring electrolytes q12h." }
          ]
        }
      ]
    },
    {
      id: "critical-illness-nutrition.monitoring",
      kind: "monitoring",
      title: "ICU Nutritional & Tolerance Monitoring",
      summary: "Gastric residual volume policy, blood glucose control, and serial electrolyte surveillance.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Gastric Residual Volumes (GRVs)", value: "Routine stopping of enteral feeds for GRVs < 500 mL is NOT recommended (NUTRIREA-1 trial). Evaluate tolerance by clinical abdominal distension, vomiting, and pain rather than arbitrary GRV cutoffs." },
            { label: "Blood Glucose Target", value: "Maintain blood glucose between 140 and 180 mg/dL (7.8-10.0 mmol/L) using IV regular insulin protocol. Avoid strict tight glycemic control (<110 mg/dL) which increases lethal hypoglycemia without benefit (NICE-SUGAR trial)." },
            { label: "Electrolyte Surveillance", value: "Serum phosphate, potassium, and magnesium checks every 12 to 24 hours during feed initiation." }
          ]
        }
      ]
    },
    {
      id: "critical-illness-nutrition.complications",
      kind: "complications",
      title: "Complications & Escalation Triggers",
      summary: "Structured recognition of refeeding collapse, overfeeding toxicity, and escalation criteria.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Early / Life-Threatening", value: "Refeeding hypophosphatemic cardiac arrest and diaphragmatic failure, severe aspiration pneumonia, non-occlusive mesenteric ischemia (NOMI) from aggressive EN during shock." },
            { label: "Treatment-Related", value: "Overfeeding hypercapnia (increased CO2 production impeding ventilator weaning), azotemia from high protein with inadequate free water, central venous catheter-associated bloodstream infection (CLABSI) from parenteral nutrition." },
            { label: "Late / Delayed", value: "Severe sarcopenia and ICU-acquired weakness from chronic under-delivery of protein, essential fatty acid deficiency." },
            { label: "Escalation Triggers", value: "Serum phosphate dropping < 1.0 mg/dL (immediately halt/reduce feeds, administer IV sodium/potassium phosphate); new abdominal distension with lactic acidosis on EN (immediate CT angiography to exclude bowel ischemia)." }
          ]
        }
      ]
    },
    {
      id: "critical-illness-nutrition.pitfalls",
      kind: "controversies",
      title: "Critical Care Nutrition Pitfalls & Special Populations",
      summary: "High-yield bedside pitfalls and dosing adaptations in major burns, severe obesity, and CRRT.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Pitfall: Routine Feed Cessation for GRV", value: "Holding enteral feeds for moderate gastric residual volumes (200-500 mL) in the absence of vomiting or distension creates severe iatrogenic caloric deficits without reducing aspiration (NUTRIREA-1)." },
            { label: "Pitfall: Protein Restriction in AKI/CRRT", value: "Restricting protein intake in acute renal failure or CRRT out of concern for uremia accelerates sarcopenia; patients on CRRT lose 10-15 g amino acids/day into effluent and require 1.5-2.5 g/kg/day." },
            { label: "Pitfall: Early Acute Phase Overfeeding", value: "Forcing 100% caloric targets during Days 1-2 when endogenous glucose production is maximal and non-suppressible triggers hyperglycemia, hepatic steatosis, and hypercapnic weaning failure (TARGET trial)." },
            { label: "Special Population: Severe Obesity", value: "BMI 30-50: use hypocaloric high-protein feeding (11-14 kcal/kg actual body weight or 22-25 kcal/kg ideal body weight, with protein 2.0-2.5 g/kg ideal body weight/day) to minimize nitrogen loss while promoting fat oxidation." },
            { label: "Special Population: Major Burns", value: "Hypermetabolic burn injury requires aggressive early enteral nutrition with very high protein (2.0-2.5 g/kg/day) and trace element supplementation (copper, selenium, zinc)." }
          ]
        }
      ]
    }
  ]
};
