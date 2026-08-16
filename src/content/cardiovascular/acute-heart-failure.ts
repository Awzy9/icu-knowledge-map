import type { Topic } from "@/content-types";

export const acuteHeartFailure: Topic = {
  id: "acute-heart-failure",
  slug: "acute-heart-failure",
  title: "Acute Heart Failure & Cardiogenic Congestion",
  category: "cardiovascular",
  oneLiner: "Hemodynamic phenotypes (SCAPE vs ADHF vs Cardiogenic Shock), non-invasive positive pressure ventilation, high-dose vasodilator algorithms, loop diuretics, and sequential nephron blockade.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Heart Failure, Cardiogenic Pulmonary Edema, and Management of Cardiorenal Syndromes in the ICU",
    },
    {
      title: "2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure",
      edition: "Eur Heart J 2021;42(36):3599-3726",
    },
  ],
  currentStatus: "Current as of the 2021/2023 ESC Heart Failure Guidelines, the 2022 AHA/ACC/HFSA Guidelines, and the ADVOR, DOSE, and EMPULSE randomized clinical trials.",
  otherReferences: [
    "McDonagh TA, et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J. 2021;42(36):3599-3726.",
    "Mullens W, et al. Acetazolamide in Decompensated Heart Failure with Volume Overload (ADVOR trial). N Engl J Med. 2022;387(13):1185-1195.",
    "Felker GM, et al. Diuretic strategies in patients with acute decompensated heart failure (DOSE trial). N Engl J Med. 2011;364(9):797-805.",
    "Voors AA, et al. SGLT2 inhibition in patients hospitalized with acute heart failure (EMPULSE trial). Nat Med. 2022;28(3):568-574.",
  ],
  relationships: [
    { type: "complication", targetId: "cardiogenic-shock", label: "Decompensation into low cardiac output and systemic hypoperfusion" },
    { type: "complication", targetId: "cardiogenic-pulmonary-edema", label: "Hydrostatic alveolar capillary transudation and gas exchange failure" },
    { type: "complication", targetId: "aki", label: "Cardiorenal Syndrome Type 1 mediated by elevated renal venous pressure" },
    { type: "related-to", targetId: "rv-failure", label: "Biventricular congestion and adverse ventricular interdependence" },
    { type: "related-to", targetId: "arrhythmias", label: "Atrial fibrillation and ventricular tachyarrhythmias triggering acute decompensation" },
    { type: "related-to", targetId: "shock", label: "Hemodynamic profiling (Warm/Wet vs Cold/Wet vs Cold/Dry)" },
  ],
  sections: [
    {
      id: "acute-heart-failure.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "ahf-guideline-aha-acc-hfsa-2022",
          relevance: "2022 AHA/ACC/HFSA guideline for the management of heart failure"
        },
        {
          kind: "trial",
          id: "cardiogenic-pulmonary-edema-dose-trial",
          relevance: "DOSE landmark trial comparing high-dose vs low-dose furosemide in acute heart failure"
        },
        {
          kind: "trial",
          id: "ahf-advor-trial",
          relevance: "ADVOR trial on acetazolamide sequential nephron blockade in congested acute heart failure"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Acute Heart Failure (AHF) is the rapid onset or worsening of symptoms and signs of heart failure requiring urgent ICU therapy, characterized by systemic venous congestion, elevated pulmonary capillary wedge pressure, and variable forward cardiac output.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Acute Heart Failure (AHF) is a major cause of ICU admission, representing a heterogenous clinical syndrome that encompasses both de novo heart failure (e.g. acute myocardial infarction, acute myocarditis, acute severe valvular regurgitation) and acute decompensation of chronic heart failure (ADHF, representing > 75% of cases).",
        },
        {
          type: "paragraph",
          text: "The clinical imperative in the critical care unit is rapid hemodynamic phenotyping into 3 distinct clinical presentations: (1) Acute Decompensated Heart Failure (predominant systemic and pulmonary volume overload); (2) Sympathetic Crashing Acute Pulmonary Edema (SCAPE, severe hypertensive afterload crisis with fluid redistribution); and (3) Cardiogenic Shock (severe pump failure with tissue hypoperfusion). Management focuses on immediate respiratory unloading via Non-Invasive Ventilation, aggressive afterload reduction with intravenous vasodilators, and decongestion with high-dose loop diuretics and sequential nephron blockade.",
        },
      ],
    },
    {
      id: "acute-heart-failure.physiology",
      kind: "physiology",
      title: "Pathophysiology: Preload, Afterload, Ventricular Interdependence & Cardiorenal Dynamics",
      summary: "Systolic vs diastolic dysfunction, Starling capillary transudation, neurohormonal vasoconstriction, and renal venous congestion.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "The biophysical and neurohormonal mechanisms driving acute heart failure and pulmonary congestion:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. LV Failure & Hydrostatic Pulmonary Transudation",
              value: "Whether due to reduced ejection fraction (HFrEF, impaired inotropy) or preserved ejection fraction with stiff, non-compliant ventricles (HFpEF, impaired lusitropy), LV end-diastolic pressure (LVEDP) escalates. This pressure transmits backward into the left atrium and pulmonary veins, elevating Pulmonary Capillary Wedge Pressure (PCWP > 18–20 mmHg). Per the Starling equation, hydrostatic filtration pressure exceeds plasma colloid oncotic pressure, driving rapid fluid transudation across the alveolar-capillary barrier into the interstitium and alveolar spaces.",
            },
            {
              label: "2. Sympathetic Surge & Vascular Redistribution (SCAPE)",
              value: "In SCAPE (flash pulmonary edema), total body volume is often normal or only mildly elevated. A sudden surge in sympathetic catecholamines triggers intense arterial and venous vasoconstriction. Increased systemic vascular resistance (SVR / afterload) impedes LV forward stroke volume, while systemic venoconstriction translocates up to 1.0–1.5 liters of splanchnic blood volume into the central thoracic circulation within minutes, overwhelming the left ventricle.",
            },
            {
              label: "3. Cardiorenal Syndrome Type 1 (CRS-1)",
              value: "Acute worsening of heart failure leading to acute kidney injury. Crucially, contemporary hemodynamic studies demonstrate that Renal Venous Congestion (elevated CVP > 12–15 mmHg transmitting high backpressure to renal veins, collapsing trans-glomerular perfusion pressure [MAP - CVP]) is the primary driver of renal deterioration in AHF, far more significant than mild reductions in arterial cardiac output.",
            },
            {
              label: "4. Biventricular Interdependence",
              value: "Secondary pulmonary hypertension and elevated PCWP cause acute RV afterload mismatch. Right ventricular dilation within the fixed pericardium causes leftward septal bowing, further reducing LV end-diastolic volume and restricting LV stroke volume.",
            },
          ],
        },
      ],
    },
    {
      id: "acute-heart-failure.phenotypes-diagnosis",
      kind: "diagnosis",
      title: "Clinical Phenotypes & Bedside Diagnostic Workup",
      summary: "Forrester hemodynamics (Warm/Wet, Cold/Wet, Cold/Dry), POCUS FoCUS & Lung Ultrasound (B-lines, VExUS score), and natriuretic peptide cutoffs.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Hemodynamic profiling based on perfusion (Warm vs Cold) and congestion (Wet vs Dry):",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Warm and Wet (Most Common, ~70%)",
              value: "Adequate systemic perfusion (warm extremities, normal lactate, normal mentation, SBP normal to high) + severe congestion (orthopnea, bilateral crackles, elevated JVP, B-lines). Primary treatment: IV Loop Diuretics + IV Vasodilators (Nitroglycerin/Nitroprusside).",
            },
            {
              label: "2. Cold and Wet (Cardiogenic Shock with Congestion, ~20%)",
              value: "Profound hypoperfusion (cold clammy extremities, oliguria, lactate > 2.0, narrow pulse pressure, SBP < 90 mmHg) + severe congestion (pulmonary edema, elevated CVP). Primary treatment: Inotropes (Dobutamine, Milrinone), Vasopressors (Norepinephrine for MAP > 65), judicious diuretics, and emergent Mechanical Circulatory Support (MCS).",
            },
            {
              label: "3. Cold and Dry (Euvolemic Hypoperfusion, ~5%)",
              value: "Hypoperfusion without congestion (over-diuresed heart failure, low LV filling pressures). Primary treatment: Small, cautious fluid challenge (250 mL), inotropes.",
            },
          ],
        },
        {
          type: "paragraph",
          text: "Bedside ultrasound and laboratory diagnostic tools in the ICU:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Point-of-Care Lung Ultrasound (LUS): Diffuse, bilateral, symmetric B-lines (≥ 3 B-lines per rib space in ≥ 2 zones bilaterally) with a smooth pleural line and preserved lung sliding (distinguishes cardiogenic edema from ARDS/pneumonia with 95% sensitivity).",
            "Focused Cardiac Ultrasound (FoCUS): Assesses LV systolic function (ejection fraction, EPSS > 7 mm), LV wall motion abnormalities, severe acute valvular lesions (MR/AS/AI), and right ventricular dilation (RV/LV > 1.0).",
            "Venous Excess Ultrasound (VExUS) Score: Quantifies systemic venous congestion by combining IVC diameter (> 2.1 cm with < 50% collapsibility) with pulsed-wave Doppler waveforms of the hepatic veins (reversed systolic flow), portal vein (pulsatility fraction ≥ 50%), and intrarenal parenchyma veins (monophasic discontinuous flow). Grade 3 VExUS strongly predicts acute cardiorenal injury.",
            "Natriuretic Peptides: BNP > 100 pg/mL or NT-proBNP > 300 pg/mL (age-stratified: > 450 pg/mL < 50y, > 900 pg/mL 50–75y, > 1800 pg/mL > 75y) has 98% negative predictive value to rule out AHF.",
          ],
        },
      ],
    },
    {
      id: "acute-heart-failure.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Acute Decompensated Heart Failure",
      summary: "Differentiate cardiogenic congestion from primary pulmonary failure, ARDS, and non-cardiogenic fluid overload.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Cardiogenic Congestion vs ARDS / Non-Cardiogenic Edema: Cardiogenic edema has elevated PAWP (>18 mmHg), low/normal cardiac index, cardiomegaly, bilateral pleural effusions, and rapid response to IV loop diuretics/afterload reduction.",
          "Acute Severe Renal Failure with Hypervolemic Overload: Fluid retention from anuria without primary myocardial dysfunction; requires ultrafiltration.",
          "High-Output Heart Failure: Sepsis, severe anemia, thyrotoxicosis, beriberi, large AV fistulas; high cardiac output with inadequate tissue perfusion."
]
        }
      ]
    },
    {
      id: "acute-heart-failure.management",
      kind: "management",
      title: "Stepped ICU Resuscitation & Decongestion Protocols",
      summary: "Non-Invasive Ventilation (CPAP/BiPAP), high-dose vasodilator boluses, DOSE loop diuretics, ADVOR sequential nephron blockade, and inotropes.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Protocolized critical care management of acute heart failure and congestion:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Non-Invasive Ventilation (NIV: CPAP or BiPAP)",
              value: "• Initiate immediately for patients with respiratory distress (RR > 25, SpO2 < 90%, accessory muscle use).\n• Settings: Continuous Positive Airway Pressure (CPAP 5–10 cmH2O) or Bilevel Positive Airway Pressure (BiPAP: IPAP 10–15 cmH2O, EPAP 5 cmH2O).\n• Hemodynamic Mechanism: Positive intrathoracic pressure decreases LV transmural pressure (reducing LV afterload), decreases systemic venous return (reducing LV preload), and recruits fluid-filled alveoli to resolve V/Q mismatch. Landmark trials (3CPO trial) demonstrate a 50% reduction in intubation rates with early NIV.",
            },
            {
              label: "2. High-Dose IV Vasodilators (Preferred in Hypertensive AHF / SCAPE)",
              value: "• IV Nitroglycerin: In SCAPE/hypertensive edema, start with rapid IV boluses of 400–1000 mcg over 1–2 minutes, followed by a continuous infusion at 100–300 mcg/min, rapidly titrating downward as SBP normalizes to 130–140 mmHg. High-dose nitrates act as potent arteriolar and venodilators, immediately arresting fluid transudation.\n• IV Sodium Nitroprusside: 0.3–3.0 mcg/kg/min (balanced arterial and venous dilator; requires arterial line monitoring).",
            },
            {
              label: "3. Loop Diuretics (DOSE Trial Protocol)",
              value: "• For Volume Overload / ADHF: Administer IV Furosemide at 2.0–2.5 times the patient's daily oral home dose as an initial IV bolus (e.g. if home dose is 80 mg PO daily, give 160–200 mg IV).\n• In diuretic-naïve patients: Start with Furosemide 40–80 mg IV bolus.\n• The DOSE trial demonstrated that high-dose loop diuretic strategies achieve faster decongestion and dyspnea relief without worsening 60-day renal outcomes or mortality compared to low-dose regimens.",
            },
            {
              label: "4. Sequential Nephron Blockade (ADVOR & EMPULSE Trials)",
              value: "• IV Acetazolamide (ADVOR Trial): 500 mg IV once daily added to loop diuretics in acute decompensated heart failure. Inhibits proximal tubular sodium and bicarbonate reabsorption, increasing distal sodium delivery and significantly accelerating complete clinical decongestion (p < 0.001).\n• Oral Thiazide-Like Diuretics: Metolazone 2.5–5.0 mg PO or Chlorothiazide 500 mg IV for refractory loop diuretic resistance (distal convoluted tubule blockade).\n• SGLT2 Inhibitors (EMPULSE Trial): Empagliflozin 10 mg or Dapagliflozin 10 mg initiated during acute hospitalization reduces 90-day death, heart failure events, and symptomatic burden.",
            },
            {
              label: "5. Inotropes & Vasopressors in Low-Output States / Shock",
              value: "• Dobutamine (2.5–15 mcg/kg/min): Beta-1 inotropic agent; increases cardiac output and lowers filling pressures; causes mild vasodilation and tachycardia.\n• Milrinone (0.125–0.50 mcg/kg/min): Phosphodiesterase-3 inhibitor (inodilator); reduces pulmonary and systemic vascular resistance while increasing inotropy; does not rely on beta-adrenergic receptors (ideal for patients on chronic beta-blockers); excreted renally (adjust dose in AKI).\n• Norepinephrine: First-line vasopressor if SBP < 85–90 mmHg or MAP < 65 mmHg to maintain coronary and cerebral perfusion.",
            },
          ],
        },
      ],
    },
    {
      id: "acute-heart-failure.complications",
      kind: "complications",
      title: "Complications & Decongestion Monitoring",
      summary: "Cardiorenal syndrome, refractory diuretic resistance, electrolyte depletion, and transition to cardiogenic shock.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Decompensated Cardiorenal Syndrome: Transient elevation of serum creatinine during intense decongestion; if accompanied by clinical decongestion and adequate urine output (> 100 mL/hr or spot urine sodium > 50–70 mEq/L at 2 hours), this represents 'permissive hemoconcentration' rather than true parenchymal tubular injury and is associated with better long-term survival.",
            "Refractory Diuretic Resistance: Failure of high-dose loop diuretics to achieve net negative fluid balance due to proximal and distal tubular sodium hyper-reabsorption; requires triple sequential nephron blockade (Loop + Acetazolamide + Metolazone) or Ultrafiltration (CRRT).",
            "Severe Electrolyte Disturbances: Hypokalemia (loss of K+ in urine, predisposing to polymorphic VT/VF), hypomagnesemia, hyponatremia (free water retention via non-osmotic ADH secretion), and metabolic alkalosis (contraction alkalosis).",
            "Progression to SCAI Stage C/D Cardiogenic Shock: Progressive pump failure with elevated lactate, cool extremities, and oliguria requiring immediate invasive PAC monitoring and mechanical circulatory support.",
          ],
        },
      ],
    },
    {
      id: "acute-heart-failure.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical mistakes in managing acute heart failure and congestion.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Stopping or under-dosing loop diuretics due to a mild rise in serum creatinine: Renal venous congestion is the primary cause of renal failure in AHF; stopping diuretics worsens renal congestion and accelerates acute tubular necrosis; continue decongestion while tracking clinical congestion scores and VExUS.",
            "Treating SCAPE (hypertensive afterload crisis) primarily with diuretics rather than high-dose vasodilators: SCAPE patients have an intravascular volume shift rather than massive total fluid overload; giving furosemide alone delays relief while high-dose IV nitroglycerin resolves pulmonary edema in minutes.",
            "Administering IV fluid boluses for hypotension in the setting of severe pulmonary edema: Hypotension in AHF is almost always due to severe pump failure or secondary RV ischemia, not hypovolemia; fluid boluses worsen alveolar flooding; start vasopressors and inotropes.",
            "Delayed application of Non-Invasive Ventilation: Waiting for arterial blood gas deterioration before starting CPAP/BiPAP increases intubation rates; apply NIV immediately upon presentation with respiratory distress.",
            "Failing to check spot urine sodium at 2 hours post-diuretic: Spot urine sodium < 50–70 mEq/L indicates diuretic resistance and mandates immediate doubling of loop diuretic dose or adding acetazolamide/metolazone.",
          ],
        },
      ],
    },
    {
      id: "acute-heart-failure.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "In-hospital initiation of quadruple GDMT and Ultrafiltration vs Diuretic Therapy.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "In-Hospital Initiation of Guideline-Directed Medical Therapy (GDMT): Historically, physicians withheld guideline-directed medications (SGLT2 inhibitors, ARNIs [Sacubitril/Valsartan], MRAs, and Beta-blockers) during acute hospitalization for fear of renal or hemodynamic instability. Contemporary trials (PIONEER-HF, EMPULSE, STRONG-HF) demonstrate that early in-hospital initiation and rapid uptitration of quadruple GDMT once the patient is hemodynamically stabilized significantly reduces 180-day readmissions and all-cause mortality.",
        },
        {
          type: "paragraph",
          text: "Mechanical Ultrafiltration (Aquapheresis) vs Pharmacological Diuresis: The CARRESS-HF trial showed that routine ultrafiltration was not superior to stepped pharmacologic diuretic therapy and was associated with a higher rate of adverse events. Ultrafiltration is currently reserved for refractory diuretic resistance failing maximal multi-nephron diuretic combinations.",
        },
      ],
    },
  ],
};
