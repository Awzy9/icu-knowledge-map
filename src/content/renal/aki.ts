import type { Topic } from "@/content-types";

export const aki: Topic = {
  id: "aki",
  slug: "aki",
  title: "Acute Kidney Injury in Critical Care",
  shortName: "AKI",
  category: "renal",
  oneLiner: "Sepsis-AKI microcirculatory decoupling, KDIGO staging, Furosemide Stress Test (FST), urine microscopy, and the AEIOU dialysis threshold framework.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Acute Kidney Injury in the ICU, Pathophysiology and Prevention of AKI, and Drug Dosing in Renal Dysfunction",
    },
    {
      title: "KDIGO Clinical Practice Guideline for Acute Kidney Injury",
      edition: "Kidney Int Suppl 2012;2(1):1-138 (with 2026 update framework notes)",
    },
  ],
  currentStatus: "Current as of the final published KDIGO 2012 Guidelines, the Furosemide Stress Test consensus, and multi-center randomized trials on RRT timing (AKIKI, IDEAL-ICU, STARRT-AKI).",
  otherReferences: [
    "Chawla LS, et al. Development and standardization of a furosemide stress test to predict the severity of acute kidney injury. Crit Care. 2013;17(5):R207.",
    "Bellomo R, et al. Acute kidney injury. Lancet. 2012;380(9843):756-766.",
    "Perazella MA. The urine sediment as a biomarker of kidney disease. Am J Kidney Dis. 2015;66(5):748-755.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "shock", label: "Renal perfusion pressure (MAP - CVP) and prerenal failure" },
    { type: "complication", targetId: "hyperkalemia", label: "Impaired potassium excretion" },
    { type: "complication", targetId: "metabolic-acidosis", label: "Uremic high-anion-gap metabolic acidosis" },
    { type: "treated-with", targetId: "crrt", label: "Continuous renal replacement therapy indications" },
    { type: "related-to", targetId: "septic-shock", label: "Sepsis is the leading cause of ICU-acquired AKI" },
    { type: "related-to", targetId: "cardiogenic-pulmonary-edema", label: "Cardiorenal syndrome and venous congestion" },
  ],
  sections: [
    {
      id: "aki.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "aki-kdigo-2012",
          relevance: "KDIGO 2012 clinical practice guideline for acute kidney injury"
        },
        {
          kind: "guideline",
          id: "aki-kdigo-2026-draft",
          relevance: "KDIGO updated framework on acute kidney injury staging and subphenotypes"
        },
        {
          kind: "trial",
          id: "aki-akiki",
          relevance: "AKIKI landmark trial comparing early vs delayed RRT initiation strategy"
        },
        {
          kind: "trial",
          id: "aki-starrt-aki",
          relevance: "STARRT-AKI multicenter trial evaluating accelerated vs standard RRT timing"
        },
        {
          kind: "trial",
          id: "aki-ideal-icu",
          relevance: "IDEAL-ICU trial on RRT timing in early septic shock"
        },
        {
          kind: "trial",
          id: "aki-elain",
          relevance: "ELAIN single-center trial evaluating early vs delayed RRT in surgical AKI"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Acute Kidney Injury (AKI) is an abrupt decline in glomerular filtration and tubular function, staged by serum creatinine and urine output, carrying an ICU mortality of 30–50%.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Acute Kidney Injury (AKI) complicates up to 50% of all critically ill ICU patients and is an independent predictor of prolonged mechanical ventilation, multiorgan dysfunction, and hospital mortality. Sepsis is the single most common etiology (~50% of ICU AKI), followed by major surgery, cardiogenic shock, and nephrotoxin exposure.",
        },
        {
          type: "paragraph",
          text: "Diagnostic evaluation requires rapid staging via the KDIGO criteria, distinguishing functional prerenal azotemia from intrinsic Acute Tubular Necrosis (ATN) using urine microscopy and functional indices (FeNa, FeUrea), risk-stratifying renal recovery via the Furosemide Stress Test (FST), and systematically monitoring for urgent 'AEIOU' dialysis indications.",
        },
      ],
    },
    {
      id: "aki.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Acute Oliguria & Azotemia in Critical Care",
      summary: "Differentiate pre-renal hemodynamic azotemia, acute tubular necrosis (ATN), acute interstitial nephritis (AIN), and post-renal obstruction.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Pre-Renal Azotemia vs Established ATN: Pre-renal has FENa < 1% (or FEUrea < 35% on diuretics), bland urine sediment, and rapid response to volume; ATN has FENa > 2%, muddy brown granular casts, and persistent renal failure despite fluid optimization.",
          "Abdominal Compartment Syndrome (ACS): High intra-abdominal pressure (IAP > 20 mmHg) compressing renal veins and parenchyma, causing sudden oliguria with elevated CVP; confirmed by bladder pressure measurement.",
          "Acute Interstitial Nephritis (AIN): Allergic drug reaction (antibiotics, PPIs, NSAIDs) presenting with sterile pyuria, WBC casts, eosinophiluria, and rash.",
          "Cardiorenal Syndrome Type 1: High central venous congestion (CVP > 15-20 mmHg) causing backward venous hypertension and drop in net renal perfusion pressure."
]
        }
      ]
    },
    {
      id: "aki.definition",
      kind: "definition",
      title: "Definition & KDIGO Staging Matrix",
      summary: "The 2012 KDIGO consensus staging system across Stage 1, Stage 2, and Stage 3 based on serum creatinine rise and duration of oliguria.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "AKI is diagnosed when any ONE of the following three criteria is met:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Diagnostic Criteria",
              value: "1. Serum creatinine increase by ≥ 0.3 mg/dL (≥ 26.5 umol/L) within 48 hours; OR\n2. Serum creatinine increase to ≥ 1.5 times baseline within the prior 7 days; OR\n3. Urine volume < 0.5 mL/kg/hour for ≥ 6 consecutive hours.",
            },
            {
              label: "Stage 1",
              value: "Serum creatinine 1.5–1.9 times baseline OR increase ≥ 0.3 mg/dL; OR urine output < 0.5 mL/kg/hr for 6–12 hours.",
            },
            {
              label: "Stage 2",
              value: "Serum creatinine 2.0–2.9 times baseline; OR urine output < 0.5 mL/kg/hr for ≥ 12 hours.",
            },
            {
              label: "Stage 3",
              value: "Serum creatinine ≥ 3.0 times baseline OR increase to ≥ 4.0 mg/dL (≥ 353.6 umol/L) OR initiation of Renal Replacement Therapy; OR urine output < 0.3 mL/kg/hr for ≥ 24 hours OR anuria for ≥ 12 hours.",
            },
          ],
        },
      ],
    },
    {
      id: "aki.physiology",
      kind: "physiology",
      title: "Pathophysiology: Sepsis-AKI, Autoregulation, & Nephrotoxins",
      summary: "The sepsis-AKI microcirculatory paradigm, renal perfusion pressure (MAP - CVP), tubular mitochondrial hibernation, and nephrotoxicity mechanisms.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Renal hemodynamic and cellular injury in the ICU is governed by complex microvascular and cellular mechanisms:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Renal Perfusion Pressure (RPP)",
              value: "RPP = Mean Arterial Pressure (MAP) - Central Venous Pressure (CVP). In circulatory shock or venous congestion (VExUS grade 3), falling MAP and rising CVP drastically narrow net transglomerular filtration pressure, triggering oliguria.",
            },
            {
              label: "2. The Modern Sepsis-AKI Paradigm",
              value: "Sepsis-AKI is NOT purely ischemic tubular necrosis. Human and experimental data show that sepsis causes profound renal microvascular flow heterogeneity, efferent arteriolar vasodilation (causing GFR collapse despite preserved global renal blood flow), pathogen-associated molecular pattern (PAMP) activation of TLR-4 receptors on tubular cells, and tubular cell mitochondrial shutdown (metabolic hibernation) to protect against apoptosis.",
            },
            {
              label: "3. Common ICU Nephrotoxin Mechanisms",
              value: "• Vancomycin: Direct proximal tubular oxidative stress and cast formation.\n• Aminoglycosides: Megalin-receptor-mediated endocytosis into proximal tubule lysosomes causing phospholipidosis.\n• IV Iodinated Contrast: Medullary hypoxia from intense vasoconstriction + direct tubular cytotoxicity.\n• NSAIDs: Block vasodilatory prostaglandins -> afferent arteriolar vasoconstriction.\n• ACEi / ARBs: Block angiotensin II -> efferent arteriolar vasodilation.\n• Rhabdomyolysis: Free myoglobin precipitation with Tamm-Horsfall protein + heme-mediated lipid peroxidation.",
            },
          ],
        },
      ],
    },
    {
      id: "aki.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Protocol: FeNa, FeUrea, & Urine Microscopy",
      summary: "Fractional excretion formulas, distinguishing prerenal azotemia from intrinsic ATN, and sediment microscopy findings.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "Fractional Excretion of Sodium (FeNa)",
              value: "FeNa (%) = [(Urine Na × Serum Cr) / (Serum Na × Urine Cr)] × 100. FeNa < 1.0% indicates prerenal physiology (intact tubular sodium reabsorption). FeNa > 2.0% indicates intrinsic ATN (tubular epithelial failure). Exceptions: FeNa < 1% in intrinsic AKI occurs with contrast nephropathy, rhabdomyolysis, and acute glomerulonephritis.",
            },
            {
              label: "Fractional Excretion of Urea (FeUrea)",
              value: "FeUrea (%) = [(Urine Urea × Serum Cr) / (Serum BUN × Urine Cr)] × 100. Preferred in patients receiving loop diuretics (which invalidate FeNa by poisoning the Na-K-2Cl symporter). FeUrea < 35% indicates prerenal physiology; FeUrea > 50% indicates intrinsic ATN.",
            },
            {
              label: "Urine Sediment Microscopy ('Liquid Kidney Biopsy')",
              value: "• Muddy Brown Granular Casts + Renal Tubular Epithelial (RTE) cells: Diagnostic of Acute Tubular Necrosis (ATN).\n• White Blood Cell (WBC) Casts + Eosinophiluria: Suggests Acute Interstitial Nephritis (AIN).\n• Dysmorphic Red Blood Cells + RBC Casts: Indicates Acute Glomerulonephritis / Vasculitis.\n• Broad Waxy Casts: Reflects Chronic Kidney Disease / tubular dilation.",
            },
          ],
        },
        { type: "calculator-embed", calculatorId: "fena" },
        { type: "calculator-embed", calculatorId: "feurea" },
      ],
    },
    {
      id: "aki.fst",
      kind: "diagnosis",
      title: "Risk Stratification: The Furosemide Stress Test (FST)",
      summary: "Chawla et al. FST protocol for predicting progression to severe Stage 3 AKI and need for renal replacement therapy.",
      provenance: "trial",
      body: [
        {
          type: "paragraph",
          text: "The Furosemide Stress Test (FST) is a validated functional challenge assessing the integrity of the loop of Henle and collecting duct in early AKI (Chawla et al., Crit Care 2013):",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "FST Protocol",
              value: "Patient must be euvolemic / adequately fluid resuscitated. Administer IV Furosemide: 1.0 mg/kg in loop-diuretic-naïve patients OR 1.5 mg/kg in patients with prior loop diuretic exposure. Measure hourly urine output.",
            },
            {
              label: "FST Interpretation",
              value: "Urine Output < 200 mL in the 2 hours following furosemide administration is a positive test (Sensitivity 87%, Specificity 84% for predicting progression to KDIGO Stage 3 AKI and requiring RRT within 14 days). An FST output > 200 mL/2h indicates intact tubular secretory reserve and favorable renal recovery.",
            },
          ],
        },
      ],
    },
    {
      id: "aki.rrt-indications",
      kind: "management",
      title: "Indications for Renal Replacement Therapy: The AEIOU Framework",
      summary: "Absolute emergency indications versus watchful waiting in non-emergent AKI.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "A — Acidemia",
              value: "Severe refractory metabolic acidemia (pH < 7.15–7.20) uncorrectable by medical therapy (see BICAR-ICU protocol).",
            },
            {
              label: "E — Electrolyte Abnormalities",
              value: "Severe hyperkalemia (K+ > 6.5 mEq/L) with ECG changes or refractory to medical shifting/stabilization.",
            },
            {
              label: "I — Ingestions / Toxins",
              value: "Dialyzable toxic ingestions: Methanol, Ethylene Glycol, Lithium, Salicylates, Theophylline.",
            },
            {
              label: "O — Overload",
              value: "Refractory hypervolemia / flash pulmonary edema unresponsive to high-dose loop diuretics and vasodilators.",
            },
            {
              label: "U — Uremia",
              value: "Severe uremic complications: Uremic encephalopathy (asterixis, seizures, coma), uremic pericarditis (friction rub), uremic coagulopathy / bleeding.",
            },
          ],
        },
      ],
    },
    {
      id: "aki.complications",
      kind: "complications",
      title: "Complications of Acute Kidney Injury",
      summary: "Hyperkalemia, uremic bleeding, fluid overload-induced organ crosstalk, and transition to chronic kidney disease.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Cardiopulmonary Crosstalk: Fluid overload causing acute pulmonary edema, RV afterload increase, and failure to wean from mechanical ventilation.",
            "Uremic Platelet Dysfunction: Impaired platelet adhesion and aggregation from uremic toxins, predisposing to major gastrointestinal and surgical bleeding.",
            "Altered Pharmacokinetics: Severe accumulation of renally-cleared drugs (sedatives, opioids, enoxaparin, beta-lactams), causing toxic neuro-encephalopathy and bone marrow suppression.",
            "Chronic Kidney Disease (CKD) Transition: AKI survivors have a 9-fold higher risk of developing progressive CKD and end-stage renal disease (ESRD).",
          ],
        },
      ],
    },
    {
      id: "aki.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical diagnostic and therapeutic pitfalls in AKI management.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Relying on serum creatinine alone for acute detection: Serum creatinine lags behind GFR loss by 24–48 hours; urine output is a vastly more rapid and sensitive marker of acute injury.",
            "Giving reflexive IV fluid boluses for oliguria without assessing fluid responsiveness or venous congestion: If the patient is fluid non-responsive or has high CVP, fluids exacerbate renal interstitial edema and worsen AKI.",
            "Calculating FeNa in patients receiving loop diuretics: Diuretics force urinary sodium wasting, falsely elevating FeNa into the 'ATN' range; calculate FeUrea instead.",
            "Assuming contrast cannot be given when an urgent CT is clinically essential: Modern low-osmolar contrast carries low true nephrotoxicity in resuscitated patients; never withhold life-saving imaging (e.g. CTA for PE, trauma, or aortic dissection).",
            "Failing to dose-adjust antibiotics to actual dynamic GFR: Underdosing broad-spectrum beta-lactams in septic shock during initial hyperfiltration vs overdosing renally cleared toxins during anuric phases.",
          ],
        },
      ],
    },
    {
      id: "aki.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Timing of renal replacement therapy initiation (early vs delayed strategies).",
      provenance: "trial",
      body: [
        {
          type: "paragraph",
          text: "Timing of RRT Initiation in AKI: Multiple massive multicenter RCTs (AKIKI, IDEAL-ICU, STARRT-AKI) compared an 'accelerated/early' strategy (starting RRT immediately upon reaching KDIGO Stage 3) versus a 'standard/delayed' strategy (watchful waiting until an absolute urgent AEIOU indication developed). STARRT-AKI (NEJM 2020, 3019 patients) demonstrated no mortality difference at 90 days, but early RRT significantly increased dialysis dependence at 90 days (10.4% vs 6.0%) and adverse vascular/hypotension events. Conclusion: Watchful waiting with supportive medical management is preferred in the absence of urgent AEIOU indications, avoiding unnecessary invasive dialysis in ~40% of patients whose kidneys recover spontaneously.",
        },
      ],
    },
  ],
};
