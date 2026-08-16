import type { Topic } from "@/content-types";

export const pulmonaryHypertension: Topic = {
  id: "pulmonary-hypertension",
  slug: "pulmonary-hypertension",
  title: "Pulmonary Hypertension & Acute Decompensation",
  category: "cardiovascular",
  oneLiner: "Hemodynamic classification, right ventricular afterload reduction, selective pulmonary vasodilation, and pulmonary hypertensive crisis management.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapter 36: Pulmonary Arterial Hypertension and Right Heart Failure in the ICU"
    },
    {
      title: "Oh's Intensive Care Manual",
      edition: "9th Edition, 2025",
      note: "Chapter 24: Pulmonary Vascular Emergencies and Acute Cor Pulmonale"
    }
  ],
  currentStatus: "Current as of the 2022 ESC/ERS Guidelines for the Diagnosis and Treatment of Pulmonary Hypertension and the AMBITION trial recommendations.",
  otherReferences: [
    "Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43(38):3618-3731.",
    "Galiè N, et al. Initial Use of Ambrisentan plus Tadalafil in Pulmonary Arterial Hypertension (AMBITION). N Engl J Med. 2015;373(9):834-844."
  ],
  relationships: [
    { type: "prerequisite", targetId: "rv-failure", label: "Pathophysiologic mechanisms of acute RV afterload mismatch" },
    { type: "differential", targetId: "pulmonary-embolism", label: "Acute thromboembolic obstruction vs chronic thromboembolic PH (CTEPH)" },
    { type: "complication", targetId: "cardiogenic-shock", label: "RV failure-induced low output state and leftward ventricular septal shift" },
    { type: "related-to", targetId: "ecmo-fundamentals", label: "VA-ECMO as bridge to lung transplantation in refractory PH crisis" }
  ],
  sections: [
    {
      id: "pulmonary-hypertension.overview",
      kind: "overview",
      title: "Hemodynamic Definition & 5 Clinical Groups",
      summary: "Pulmonary Hypertension (PH) is defined hemodynamically by a mean pulmonary arterial pressure (mPAP) > 20 mmHg at rest. In the ICU, decompensated PH presents as acute-on-chronic right ventricular failure and hemodynamic collapse.",
      provenance: "guideline",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "ph-guideline-esc-ers-2022",
          relevance: "2022 ESC/ERS Guidelines establishing updated mPAP > 20 mmHg threshold, PVR > 2 WU, and acute decompensation management"
        }
      ],
      body: [
        {
          type: "paragraph",
          text: "The 2022 ESC/ERS guidelines redefined PH with a lowered resting mPAP threshold of > 20 mmHg (down from 25 mmHg). Classification into pre-capillary vs post-capillary PH is critical because pulmonary vasodilator therapies are highly effective in pre-capillary PAH (Group 1) but can cause lethal pulmonary edema in post-capillary left heart disease (Group 2)."
        },
        {
          type: "key-value-table",
          rows: [
            { label: "Pre-Capillary PH", value: "mPAP > 20 mmHg, Pulmonary Artery Wedge Pressure (PAWP) <= 15 mmHg, and Pulmonary Vascular Resistance (PVR) > 2 Wood Units (WU). Seen in Group 1 (PAH), Group 3 (Lung disease/hypoxia), Group 4 (CTEPH), and Group 5." },
            { label: "Isolated Post-Capillary (IpcPH)", value: "mPAP > 20 mmHg, PAWP > 15 mmHg, and PVR <= 2 WU. Secondary to left ventricular systolic/diastolic dysfunction or mitral/aortic valve disease (Group 2)." },
            { label: "Combined Pre- and Post-Capillary (CpcPH)", value: "mPAP > 20 mmHg, PAWP > 15 mmHg, and PVR > 2 WU. Reflects secondary reactive pulmonary vascular remodeling superimposed on chronic left heart congestion." }
          ]
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Group 1: Pulmonary Arterial Hypertension (PAH — idiopathic, heritable, drug/toxin, connective tissue disease, HIV, portal hypertension, congenital heart disease).",
            "Group 2: PH associated with Left Heart Disease (HFpEF, HFrEF, valvular disease).",
            "Group 3: PH associated with Lung Diseases and/or Hypoxia (COPD, interstitial lung disease, sleep apnea).",
            "Group 4: Chronic Thromboembolic Pulmonary Hypertension (CTEPH) and other pulmonary artery obstructions.",
            "Group 5: PH with unclear and/or multifactorial mechanisms (sarcoidosis, hematologic disorders, systemic disorders)."
          ]
        }
      ]
    },
    {
      id: "pulmonary-hypertension.physiology-crisis",
      kind: "physiology",
      title: "The Pulmonary Hypertensive Crisis & RV Death Spiral",
      summary: "The thin-walled right ventricle is built for volume, not pressure. When acute insults spike RV afterload, RV dilatation compresses the left ventricle, reduces cardiac output, and causes RV coronary ischemia.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "In normal physiology, the RV perfuses throughout both systole and diastole because systemic aortic pressure greatly exceeds RV intracavitary pressure. In severe PH, elevated RV systolic pressure reduces the right coronary artery (RCA) perfusion gradient (Aortic Diastolic Pressure - RV Diastolic/Intracavitary Pressure), confining RV perfusion strictly to diastole. When systemic hypotension develops, RV ischemia rapidly triggers cardiogenic shock and lethal cardiac arrest."
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Ventricular Interdependence: Massive RV dilatation shifts the interventricular septum into the LV cavity (D-shaped LV on short-axis echo), severely reducing LV end-diastolic volume, stroke volume, and systemic cardiac output.",
            "Tricuspid Annular Dilation: RV enlargement causes severe functional tricuspid regurgitation (TR), worsening systemic venous congestion (CVP > 15-20 mmHg), hepatomegaly, and renal venous hypertension.",
            "Hypoxia/Hypercapnia Reflex: Alveolar hypoxia (PaO2 < 60 mmHg) and acidosis (pH < 7.30) trigger potent hypoxic pulmonary vasoconstriction, rapidly escalating PVR and precipitating acute RV decompensation."
          ]
        }
      ]
    },
    {
      id: "pulmonary-hypertension.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Evaluation of Acute Decompensation",
      summary: "Immediate bedside echocardiography identifies RV failure severity, while Right Heart Catheterization (RHC) confirms the hemodynamic gold standard.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Bedside Echocardiography (First Test)", value: "Assess Tricuspid Annular Plane Systolic Excursion (TAPSE < 16 mm indicates severe dysfunction), RV/LV basal diameter ratio (>1.0 indicates severe RV dilation), Tricuspid Regurgitation peak velocity (estimates RV systolic pressure via modified Bernoulli), and parasternal short-axis D-shaped LV in systole and diastole." },
            { label: "Right Heart Catheterization (RHC)", value: "Gold standard: Measures direct mPAP, PAWP, PVR, right atrial pressure (RAP), and cardiac index by thermodilution/Fick. In stable Group 1 PAH, perform acute vasoreactivity testing with inhaled nitric oxide." },
            { label: "Search for Acute Triggers", value: "Screen for triggers of acute crisis: sepsis/pneumonia, medication non-adherence, acute pulmonary embolism (CTPA or V/Q scan), arrhythmias (atrial flutter/AF), or volume overload." }
          ]
        }
      ]
    },
    {
      id: "pulmonary-hypertension.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Acute Right Ventricular Failure",
      summary: "Differentiate acute decompensated PH from acute massive PE, isolated RV myocardial infarction, and pericardial tamponade.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Acute Massive Pulmonary Embolism: Acute unconditioned RV failure without chronic RV hypertrophy (RV wall thickness <= 4 mm; McConnell's sign with apical sparing); RV systolic pressure rarely exceeds 45-50 mmHg in acute PE.",
            "Chronic PH with Decompensation: Marked RV wall hypertrophy (wall thickness > 5 mm), severe chronic right atrial enlargement, RV systolic pressure often > 60-80 mmHg.",
            "Acute RV Myocardial Infarction: ST-segment elevation in lead V4R, inferior STEMI on ECG, clear lung fields, severe hemodynamic collapse responsive to gentle volume.",
            "Cardiac Tamponade: Equalization of diastolic pressures across all four chambers, respiratory variation of mitral/tricuspid inflow on echo, pericardial effusion without elevated PVR."
          ]
        }
      ]
    },
    {
      id: "pulmonary-hypertension.management",
      kind: "management",
      title: "Management of Acute Pulmonary Hypertensive Crisis",
      summary: "Three core pillars: (1) Restore RV coronary perfusion with vasopressors, (2) Reduce RV afterload with selective inhaled vasodilators, and (3) Optimize volume and avoid intubation collapse.",
      provenance: "trial",
      evidenceRefs: [
        {
          kind: "trial",
          id: "ph-ambition-trial",
          relevance: "AMBITION trial establishing upfront dual oral combination therapy (Ambrisentan + Tadalafil) in reducing clinical failure events by 50%"
        }
      ],
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            "Maintain RV Perfusion Pressure (MAP > CVP): Administer Norepinephrine as first-line vasopressor to restore systemic arterial pressure and coronary perfusion gradient (MAP - CVP >= 50 mmHg). Low-dose Vasopressin (<=0.03 units/min) is a useful adjunctive agent because it constricts systemic vascular beds without constricting pulmonary vessels at low doses.",
            "Selective Inhaled Pulmonary Vasodilators: Initiate Inhaled Epoprostenol (10-50 ng/kg/min) or Inhaled Nitric Oxide (iNO, 20-40 ppm). Inhaled agents selectively vasodilate ventilated alveoli, lowering PVR and improving V/Q matching WITHOUT causing systemic hypotension.",
            "Inotropic Support: Add Dobutamine (2-5 mcg/kg/min) or Milrinone (0.25-0.5 mcg/kg/min, only if MAP is supported by vasopressor) to enhance RV inotropy.",
            "Fluid Optimization: AVOID routine fluid boluses. Fluid loading dilates the failing RV, worsens septal shift, and reduces LV cardiac output. Perform gentle diuresis (furosemide infusion) if CVP > 15 mmHg and venous congestion is severe.",
            "Intubation Warning & Mechanical Ventilation: Positive pressure ventilation increases intrathoracic pressure and RV afterload while reducing venous return, frequently triggering fatal pulseless electrical activity (PEA) arrest during RSI. If intubation is mandatory: pre-load with vasopressors, use hemodynamically neutral induction (etomidate/ketamine), and maintain low plateau pressures (<25 cmH2O) and low PEEP (5-8 cmH2O)."
          ]
        }
      ]
    },
    {
      id: "pulmonary-hypertension.monitoring",
      kind: "monitoring",
      title: "ICU Hemodynamic & Right Heart Monitoring",
      summary: "Continuous monitoring of right-to-left pressure gradients and central venous oxygen saturation.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Coronary Perfusion Gradient", value: "Continuous calculation of (MAP - CVP). Target >= 50-55 mmHg to prevent right coronary artery ischemia." },
            { label: "Central Venous Oxygen Saturation (ScvO2)", value: "Continuous or serial ScvO2 from central venous catheter. Target ScvO2 >= 65-70% as a surrogate for global cardiac output." },
            { label: "Serial Bedside Echo", value: "Monitor TAPSE, RV size, and resolution of interventricular septal flattening following diuresis and inhaled vasodilator titration." }
          ]
        }
      ]
    },
    {
      id: "pulmonary-hypertension.complications",
      kind: "complications",
      title: "Complications & Escalation Triggers",
      summary: "Structured recognition of catastrophic acute, treatment-related, and delayed complications.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Early / Immediate", value: "Lethal pulmonary hypertensive crisis, acute right-to-left shunt via patent foramen ovale (PFO) causing refractory hypoxemia, cardiovascular collapse during endotracheal intubation." },
            { label: "Treatment-Related", value: "Systemic hypotension from oral PDE5 inhibitors / prostacyclins; pulmonary edema when pulmonary vasodilators are mistakenly given in Group 2 left heart disease (PVOD/PCH); rebound PH crisis on abrupt cessation of inhaled epoprostenol/iNO." },
            { label: "Late / Delayed", value: "Progressive right heart failure, cardiac cirrhosis (congestive hepatopathy), cardiorenal syndrome type 1/2." },
            { label: "Escalation Triggers", value: "Refractory shock despite maximum inotropes and inhaled vasodilators; persistent ScvO2 < 55%; indications for urgent Veno-Arterial (VA) ECMO as a bridge to lung transplantation or recovery." }
          ]
        }
      ]
    },
    {
      id: "pulmonary-hypertension.pitfalls",
      kind: "controversies",
      title: "Critical Care Pulmonary Hypertension Pitfalls & Practice Red Lines",
      summary: "High-yield bedside errors in RV crisis including intubation arrest, fluid overload, and abrupt prostacyclin cessation.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Pitfall: Intubation Without Vasopressor Pre-load", value: "Inducing and intubating a decompensated pulmonary hypertensive patient without upfront norepinephrine; induction vasodilation and positive-pressure ventilation acutely drop RV coronary perfusion and venous return, triggering immediate fatal PEA arrest." },
            { label: "Pitfall: Aggressive Fluid Boluses for Hypotension", value: "Giving IV crystalloid boluses for hypotension in acute RV failure; volume loading overdistends the thin-walled RV, shifts the interventricular septum leftward, and collapses LV stroke volume ('the RV death spiral')." },
            { label: "Pitfall: Abrupt Cessation of Continuous Prostacyclins", value: "Interrupting or flushing lines of chronic IV epoprostenol or treprostinil (half-life of epoprostenol is 3-5 minutes); abrupt cessation precipitates fatal rebound pulmonary hypertensive crisis." },
            { label: "Pitfall: Vasodilators in Group 2 Pulmonary HTN", value: "Administering pulmonary arterial vasodilators in pulmonary venous hypertension secondary to left heart disease (Group 2 PH); increasing pulmonary blood flow against high left atrial pressure precipitates acute flash pulmonary edema." },
            { label: "Pitfall: Excessive Positive End-Expiratory Pressure (PEEP)", value: "Using high PEEP (>10-12 cmH2O) in severe RV failure; excessive PEEP compresses intra-alveolar pulmonary capillaries, sharply increasing pulmonary vascular resistance (PVR) and RV afterload." }
          ]
        }
      ]
    }
  ]
};
