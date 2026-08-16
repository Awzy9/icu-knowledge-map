import type { Topic } from "@/content-types";

export const pulmonaryEmbolism: Topic = {
  id: "pulmonary-embolism",
  slug: "pulmonary-embolism",
  title: "Acute Pulmonary Embolism",
  category: "respiratory",
  oneLiner: "Pulmonary vascular occlusion, acute RV pressure overload, ESC/AHA risk stratification, systemic thrombolysis, catheter-directed therapies, and hemodynamic support.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Venous Thromboembolism, Pulmonary Embolism, and Acute Right Ventricular Failure in the ICU",
    },
    {
      title: "2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism developed in collaboration with the ERS",
      edition: "Eur Heart J 2020;41(4):543-603",
    },
  ],
  currentStatus: "Current as of the 2019/2026 ESC PE Guidelines, the CHEST 2021 antithrombotic recommendations, and the PERT consensus on catheter-directed therapies.",
  otherReferences: [
    "Konstantinides SV, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020;41(4):543-603.",
    "Meyer G, et al. Fibrinolysis for patients with intermediate-risk pulmonary embolism (PEITHO trial). N Engl J Med. 2014;370(15):1402-1411.",
    "Sharifi M, et al. Moderate Pulmonary Embolism Treated With Thrombolysis (MOPETT trial). Am J Cardiol. 2013;111(2):273-277.",
    "Sista AK, et al. Stratification and management of pulmonary embolism in the ICU. CHEST. 2021;160(2):657-670.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "anticoagulation", label: "Immediate parenteral anticoagulation protocols" },
    { type: "complication", targetId: "rv-failure", label: "Acute cor pulmonale and RV ischemic death spiral" },
    { type: "complication", targetId: "obstructive-shock", label: "Hemodynamic collapse and cardiogenic arrest" },
    { type: "related-to", targetId: "shock", label: "Hemodynamic profiling and vasopressor selection" },
    { type: "related-to", targetId: "hypoxemic-respiratory-failure", label: "V/Q mismatch and shunt physiology" },
    { type: "related-to", targetId: "mechanical-ventilation", label: "Ventilator management in severe RV compromise" },
  ],
  sections: [
    {
      id: "pulmonary-embolism.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "obstructive-shock-guideline-pe-2026",
          relevance: "ESC 2019 clinical practice guidelines on acute pulmonary embolism"
        },
        {
          kind: "trial",
          id: "pe-peitho-trial",
          relevance: "PEITHO trial evaluating tenecteplase thrombolysis in intermediate-risk PE"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Acute Pulmonary Embolism (PE) is the mechanical and vasoconstrictive obstruction of the pulmonary arterial bed, causing a sudden escalation in RV afterload, RV dilation, ventricular interdependence, and potential obstructive circulatory collapse.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Acute Pulmonary Embolism (PE) is the third most common cardiovascular emergency worldwide, resulting from venous thromboemboli (primarily from deep veins of the lower extremities) lodging in the pulmonary arterial tree. In the intensive care unit, PE presents across a spectrum from incidentally detected subsegmental clots to catastrophic saddle emboli causing acute cor pulmonale, electromechanical dissociation, and cardiac arrest.",
        },
        {
          type: "paragraph",
          text: "The clinical priority in the ICU is rapid risk stratification (High vs Intermediate-High vs Intermediate-Low vs Low) to guide urgent reperfusion (systemic thrombolysis, catheter-directed thrombectomy, surgical embolectomy) while preventing lethal RV ischemia and avoiding high-risk ventilator-induced hemodynamic collapse.",
        },
      ],
    },
    {
      id: "pulmonary-embolism.physiology",
      kind: "physiology",
      title: "Pathophysiology: Pulmonary Vascular Obstruction & Ventricular Interdependence",
      summary: "Mechanical occlusion, reflex vasoconstriction, RV wall tension surge, right coronary artery hypoperfusion, leftward septal bowing, and gas exchange abnormalities.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "The hemodynamic and gas exchange consequences of acute pulmonary embolism involve an interlocking triad of vascular, cardiac, and respiratory pathophysiology:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Vascular Obstruction & Vasoconstriction",
              value: "Physical thrombus occlusion of > 30–50% of the total pulmonary arterial cross-sectional area triggers a sudden spike in Pulmonary Vascular Resistance (PVR). This mechanical block is amplified by intense neurohumoral pulmonary vasoconstriction mediated by thromboxane A2, serotonin, and local endothelin release from activated platelets.",
            },
            {
              label: "2. The RV Ischemic Death Spiral",
              value: "The thin-walled RV cannot generate acute peak systolic pressures > 50–60 mmHg without dilating. Acute RV afterload mismatch causes RV dilation, tricuspid annular stretching (severe functional tricuspid regurgitation), and increased RV wall tension (Laplace's Law: Tension = Pressure x Radius). Elevated RV intracavitary pressure compresses the Right Coronary Artery (RCA), which normally perfuses the RV throughout both systole and diastole. When RV systolic pressure exceeds aortic root pressure, RCA perfusion drops during systole, inducing acute RV subendocardial ischemia, cardiogenic shock, and ventricular arrhythmias.",
            },
            {
              label: "3. Adverse Ventricular Interdependence",
              value: "The dilated RV within the non-compliant pericardium forces the interventricular septum to shift leftward ('D-shaped LV' on short-axis view). This leftward septal shift impairs LV diastolic filling (decreases LV preload), causing a precipitous drop in Stroke Volume, cardiac output, and systemic MAP, accelerating systemic hypotension.",
            },
            {
              label: "4. Gas Exchange Abnormalities",
              value: "Hypoxemia arises from 4 distinct mechanisms: (1) Increased alveolar dead space (ventilation without perfusion) in obstructed zones; (2) V/Q mismatch with redistribution of blood flow to non-obstructed, hyperperfused capillary beds; (3) Intracardiac right-to-left shunt via a patent foramen ovale (PFO), opened by high RA pressure (> 20–30% of adults); and (4) Profoundly desaturated mixed venous blood (low SvO2) from low cardiac output, which dramatically widens the arterial-venous oxygen content difference.",
            },
          ],
        },
      ],
    },
    {
      id: "pulmonary-embolism.diagnosis-stratification",
      kind: "diagnosis",
      title: "Diagnostic Evaluation & ESC/AHA Risk Stratification",
      summary: "Defining High-Risk (massive), Intermediate-High (submassive), Intermediate-Low, and Low-Risk PE using hemodynamics, sPESI, biomarkers, and imaging.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Risk stratification dictates the immediate therapeutic pathway in the ICU:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. High-Risk (Massive) PE",
              value: "• Definition: PE with Hemodynamic Instability, defined by any of:\n  - Cardiac arrest / PEA\n  - Obstructive shock: SBP < 90 mmHg or vasopressors required to maintain SBP ≥ 90 despite adequate volume, with end-organ hypoperfusion (lactate > 2.0, oliguria, cold extremities, altered mentation)\n  - Persistent hypotension: SBP < 90 mmHg or SBP drop ≥ 40 mmHg lasting > 15 minutes, not caused by new-onset arrhythmia, hypovolemia, or sepsis.\n• Immediate Action: Immediate primary reperfusion (Systemic Thrombolysis, Catheter-Directed Therapy, or Surgical Embolectomy).",
            },
            {
              label: "2. Intermediate-High Risk (Submassive) PE",
              value: "• Definition: Hemodynamically stable (SBP ≥ 90 mmHg) + Simplified PESI (sPESI) ≥ 1 point, PLUS BOTH of:\n  - RV Dysfunction on bedside Echo (RV/LV > 1.0, TAPSE < 16 mm, McConnell's sign) or CTPA (RV/LV diameter ratio ≥ 1.0 in 4-chamber view)\n  - Myocardial Injury Biomarkers: Elevated Cardiac Troponin I/T or elevated BNP / NT-proBNP.\n• Management: Immediate therapeutic anticoagulation + intensive ICU hemodynamic monitoring; standby reperfusion for clinical decompensation.",
            },
            {
              label: "3. Intermediate-Low Risk PE",
              value: "• Definition: Hemodynamically stable + sPESI ≥ 1, with EITHER RV dysfunction OR elevated biomarkers positive, but not both.\n• Management: Therapeutic anticoagulation, step-down monitoring.",
            },
            {
              label: "4. Low-Risk PE",
              value: "• Definition: Hemodynamically stable + sPESI = 0 + normal RV function + normal biomarkers. Mortality < 1%.",
            },
          ],
        },
        {
          type: "paragraph",
          text: "Diagnostic modalities in suspected acute ICU PE:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "ECG Findings: Sinus tachycardia (most common, > 40%), S1Q3T3 pattern (McGinn-White sign: prominent S in I, Q in III, inverted T in III; ~20% sensitivity), new incomplete/complete RBBB, T-wave inversions across V1–V4 (highest specificity for acute RV strain), and QR pattern in V1.",
            "Bedside FoCUS / Echocardiography: RV dilation (RV/LV basal diameter > 0.9–1.0), McConnell's Sign (severe hypokinesia of RV mid-free wall with preserved normal apical contractility, 94% specificity for acute PE), 60/60 Sign (pulmonary acceleration time < 60 ms with tricuspid peak gradient < 60 mmHg), flattened/paradoxical interventricular septum, elevated TR jet velocity > 2.8 m/s.",
            "CT Pulmonary Angiography (CTPA): Gold standard for anatomical confirmation (saddle embolus, lobar/segmental filling defects, RV/LV transverse diameter ratio ≥ 1.0 on axial reconstructions, contrast reflux into IVC and hepatic veins).",
            "Lower Extremity Compression Ultrasound (CUS): Identifies proximal DVT; in unstable patients too critical for CTPA, positive proximal DVT + acute RV strain on echo confirms PE and justifies immediate reperfusion.",
          ],
        },
      ],
    },
    {
      id: "pulmonary-embolism.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Acute Hemodynamic Collapse & RV Strain",
      summary: "Differentiate acute massive pulmonary embolism from acute RV myocardial infarction, aortic dissection, and cardiac tamponade.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Acute Massive PE vs Acute RV Myocardial Infarction: Both cause severe right heart failure with clear lungs; RV MI has ST elevation in V4R; massive PE has McConnell's sign on echo and severe acute pulmonary arterial hypertension.",
          "Acute Aortic Dissection with Pericardial Tamponade: Tearing chest/back pain with hemopericardium and equalized chamber pressures.",
          "Severe Acute Bronchospasm with Dynamic Hyperinflation: Severe wheezing with high intrinsic PEEP causing hemodynamic collapse resembling PE."
]
        }
      ]
    },
    {
      id: "pulmonary-embolism.management",
      kind: "management",
      title: "Stepped ICU Resuscitation & Reperfusion Protocols",
      summary: "Systemic thrombolysis protocols, catheter-directed therapies, surgical embolectomy, RV-protective hemodynamic support, and ECMO.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Comprehensive therapeutic algorithm for acute PE in the critical care unit:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Immediate Anticoagulation",
              value: "• Start immediately upon high clinical suspicion while diagnostic workup is underway.\n• High-Risk / Hemodynamically Unstable: Unfractionated Heparin (UFH) 80 U/kg IV bolus followed by 18 U/kg/hr infusion (target anti-Xa 0.3–0.7 IU/mL or aPTT 60–85s). UFH is preferred due to rapid cessation and full reversibility with protamine if emergent interventions are required.\n• Stable Intermediate/Low-Risk: Low-Molecular-Weight Heparin (Enoxaparin 1 mg/kg SC q12h) or Fondaparinux.",
            },
            {
              label: "2. Primary Systemic Thrombolysis (Indicated in High-Risk / Massive PE)",
              value: "• Full-Dose Alteplase (tPA): 100 mg IV infusion over 2 hours (or 0.6 mg/kg over 15 minutes, max 50 mg in imminent collapse).\n• Cardiac Arrest / PEA Resuscitation: Alteplase 50 mg IV bolus push over 2 minutes, continuing CPR for at least 15–30 minutes to allow clot dissolution and RV unloading.\n• Landmark Evidence (PEITHO Trial): In intermediate-high risk PE, routine systemic fibrinolysis reduced hemodynamic decompensation (from 5.6% to 2.6%) but significantly increased major bleeding (from 2.4% to 11.5%) and hemorrhagic stroke (from 0.2% to 2.0%). Therefore, systemic lytics are reserved for high-risk shock or secondary deterioration on anticoagulation.",
            },
            {
              label: "3. Catheter-Directed Therapy (CDT) & Mechanical Thrombectomy",
              value: "• Indication: High-risk PE with absolute contraindications to systemic lysis, failed systemic lysis, or intermediate-high risk PE with clinical worsening.\n• Modalities:\n  - Ultrasound-Assisted Catheter-Directed Thrombolysis (EKOS): Infuses low-dose tPA (e.g. 0.5–1.0 mg/hr/catheter, total 12–24 mg) combined with ultrasound cavitation; achieves rapid RV unloading with low bleeding risk (< 2% major bleeding).\n  - Large-Bore Mechanical Aspiration Thrombectomy (FlowTriever, Lightning Flash): Rapid percutaneous aspiration of massive clots without requiring lytic agents (proven rapid reduction in mean PAP and RV/LV ratio in the FLARE and FLASH registries).",
            },
            {
              label: "4. Surgical Pulmonary Embolectomy",
              value: "Median sternotomy with cardiopulmonary bypass and pulmonary arteriotomy for clot extraction. Indicated for massive PE with contraindications to thrombolysis, failed CDT/thrombolysis, or right heart 'thrombus-in-transit' straddling a patent foramen ovale.",
            },
            {
              label: "5. Hemodynamic Support & Vasopressors",
              value: "• Norepinephrine: First-line vasopressor; restores systemic MAP, increases RCA perfusion pressure, and improves RV contractility via beta-1 stimulation without excessive tachycardia.\n• Vasopressin (0.03 U/min): Preferred second-line; constricts systemic vessels while causing pulmonary vasodilation at clinical doses via endothelial V1a-nitric oxide release.\n• Inhaled Nitric Oxide (iNO 20–40 ppm) or Inhaled Epoprostenol: Delivers selective pulmonary vasodilation directly to ventilated alveoli, immediately decreasing PVR and unloading the RV without causing systemic hypotension.\n• CRITICAL FLUID RESTRICTION: Avoid aggressive IV fluid boluses! Fluid loading (> 500 mL) overdistends the failing RV, worsens tricuspid regurgitation, shifts the septum leftward, and precipitates cardiovascular collapse.",
            },
            {
              label: "6. Mechanical Ventilation Precautions",
              value: "Intubation in severe PE carries extreme mortality risk (induction vasodilation + positive pressure ventilation reducing RV venous return). If intubation is mandatory: pre-optimize with norepinephrine; use hemodynamically stable induction (Ketamine 1 mg/kg + Rocuronium); maintain low tidal volume (6 mL/kg), low PEEP (≤ 5–8 cmH2O), and avoid hypercapnia and hypoxemia.",
            },
            {
              label: "7. Venoarterial Extracorporeal Membrane Oxygenation (VA-ECMO)",
              value: "Provides immediate full mechanical circulatory and gas exchange support, completely decompressing the RV and restoring systemic perfusion as a bridge to surgical embolectomy or catheter thrombectomy in refractory shock/arrest.",
            },
          ],
        },
      ],
    },
    {
      id: "pulmonary-embolism.complications",
      kind: "complications",
      title: "Complications & Long-Term Sequelae",
      summary: "Post-PE syndrome, Chronic Thromboembolic Pulmonary Hypertension (CTEPH), reperfusion pulmonary edema, and recurrent VTE.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Cardiovascular Collapse & Refractory PEA Arrest: Acute RV failure leading to total cessation of forward stroke volume.",
            "Major Intracranial & Retroperitoneal Hemorrhage: The primary lethal complication of systemic thrombolytic therapy (1.5–2.0% ICH risk in full-dose tPA).",
            "Chronic Thromboembolic Pulmonary Hypertension (CTEPH): Occurs in 1–4% of PE survivors due to non-resolving organized fibrotic thrombi in the pulmonary arteries causing progressive PVR elevation and right heart failure. All patients with persistent dyspnea at 3–6 months must undergo echocardiography and a V/Q scan (gold standard for CTEPH screening; treatable with Pulmonary Endarterectomy [PEA] or Balloon Pulmonary Angioplasty [BPA]).",
            "Post-PE Syndrome: Persistent functional impairment, exercise limitation, and chronic RV dysfunction without resting pulmonary hypertension.",
            "Reperfusion Pulmonary Edema: Localized alveolar capillary leak and hemorrhage into reperfused lung segments following catheter or surgical clot removal.",
          ],
        },
      ],
    },
    {
      id: "pulmonary-embolism.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "High-risk mistakes in the diagnosis and treatment of acute PE.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Giving large IV fluid boluses to hypotensive PE patients: Volume loading an acutely dilated RV increases wall tension, reduces RCA perfusion, worsens leftward septal shift, and triggers cardiac arrest; restrict fluids and start Norepinephrine early.",
            "Delaying anticoagulation while waiting for CTPA confirmation in high-probability patients: Immediately administer IV UFH while organizing imaging unless active bleeding is present.",
            "Routine systemic thrombolysis in hemodynamically stable intermediate-high risk PE: The PEITHO trial proved that routine lysis in non-shock patients increases hemorrhagic stroke and major bleeding without improving overall survival; monitor in the ICU and reserve lysis for secondary decompensation.",
            "Applying high PEEP (> 10 cmH2O) on mechanical ventilation: High intrathoracic pressure increases RV afterload and collapses systemic venous return; keep PEEP minimal (5–8 cmH2O).",
            "Failing to screen for CTEPH at 3–6 months: Chronic persistent exertional dyspnea is frequently misdiagnosed as deconditioning or asthma; order a screening echocardiogram and V/Q scan.",
          ],
        },
      ],
    },
    {
      id: "pulmonary-embolism.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Half-dose systemic thrombolysis, optimal timing of Catheter-Directed Thrombectomy, and IVC filter placement.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Half-Dose (Reduced-Dose) Systemic Thrombolysis: The MOPETT trial (Sharifi 2013) evaluated 'safe dose' tPA (50 mg total: 10 mg bolus + 40 mg over 2 hours) in moderate/submassive PE, showing significant reduction in pulmonary hypertension and hospital stay without any major bleeding. Ongoing trials are investigating whether half-dose lytics represent the optimal balance between efficacy and safety in intermediate-high risk PE.",
        },
        {
          type: "paragraph",
          text: "Catheter-Directed Mechanical Thrombectomy vs Anticoagulation Alone: While registry data (FLASH, EXTRACT-PE) show remarkable procedural safety and acute RV unloading, large-scale randomized trials (such as PEERLESS and HI-PEITHO) are currently defining whether routine upfront CDT improves long-term mortality and functional recovery compared to modern anticoagulation alone in intermediate-high risk PE.",
        },
        {
          type: "paragraph",
          text: "Inferior Vena Cava (IVC) Filters: Retrievable IVC filters are indicated ONLY when absolute contraindications to anticoagulation exist in acute PE or when recurrent PE occurs despite therapeutic anticoagulation (PREPIC trials). Routine prophylactic filter placement does NOT improve survival and increases long-term DVT rates.",
        },
      ],
    },
  ],
};
