import type { Topic } from "@/content-types";

export const hypoxemicRespiratoryFailure: Topic = {
  id: "hypoxemic-respiratory-failure",
  slug: "hypoxemic-respiratory-failure",
  title: "Hypoxemic Respiratory Failure",
  category: "respiratory",
  oneLiner: "Pathophysiologic mechanisms (shunt vs V/Q mismatch), dynamic ROX index trajectories, P-SILI prevention, and evidence-based oxygen escalation ladders.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapter on Acute Hypoxemic Respiratory Failure and Noninvasive Respiratory Support",
    },
    {
      title: "Nunn and Eger's Applied Respiratory Physiology",
      edition: "9th Edition, 2020",
    },
  ],
  currentStatus: "Current as of the 2022 ERS Clinical Practice Guideline on High-Flow Nasal Cannula in Acute Respiratory Failure, the FLORALI Trial, and the 2024 Global Definition of ARDS.",
  otherReferences: [
    "Roca O, et al. Predicting success of high-flow nasal cannula in pneumonia patients with hypoxemic respiratory failure: The utility of the ROX index. J Crit Care. 2016;35:200-205.",
    "Frat JP, et al. High-flow oxygen through nasal cannula in acute hypoxemic respiratory failure (FLORALI Trial). N Engl J Med. 2015;372(23):2185-2196.",
    "Brochard L, et al. Patient-inflicted lung injury (P-SILI): the mechanical risk of excessive spontaneous breathing. Intensive Care Med. 2017;43(7):1038-1041.",
    "Roca O, et al. An index combining respiratory rate and oxygenation to predict outcome of nasal high-flow therapy in patients with pneumonia. Am J Respir Crit Care Med. 2019;199(11):1368-1376.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "respiratory-failure-basics", label: "Fundamental oxygenation and alveolar gas equations" },
    { type: "differential", targetId: "ards", label: "Diffuse inflammatory alveolar injury and capillary permeability breakdown" },
    { type: "differential", targetId: "cardiogenic-pulmonary-edema", label: "Hydrostatic alveolar transudation" },
    { type: "differential", targetId: "pneumonia", label: "Infectious parenchymal consolidation" },
    { type: "differential", targetId: "pulmonary-embolism", label: "Acute vascular obstruction with V/Q mismatch and dead space" },
    { type: "treated-with", targetId: "mechanical-ventilation", label: "Invasive mechanical ventilation for refractory failure" },
  ],
  sections: [
    {
      id: "hypoxemic-respiratory-failure.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "hypoxemic-respiratory-failure-guideline-hfnc",
          relevance: "ESICM clinical practice guideline on high-flow nasal cannula in acute hypoxemic failure"
        },
        {
          kind: "trial",
          id: "hypoxemic-florali-trial",
          relevance: "FLORALI trial establishing HFNC superiority over NIV and standard oxygen"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Type I respiratory failure is characterized by severe arterial hypoxemia (PaO2 < 60 mmHg or PaO2/FiO2 ≤ 300) without primary alveolar hypoventilation, demanding rapid mechanism-directed therapy.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Acute Hypoxemic Respiratory Failure (Type I ARF) is one of the most frequent indications for ICU admission. It is defined as a failure of pulmonary oxygenation resulting in arterial hypoxemia (PaO2 < 60 mmHg or SpO2 < 90% on room air, or a PaO2/FiO2 ratio ≤ 300) while carbon dioxide elimination is preserved or even augmented (PaCO2 low or normal due to compensatory tachypnea).",
        },
        {
          type: "paragraph",
          text: "The clinical challenge in the ICU is twofold: rapidly determining the exact physiological mechanism (differentiating responsive V/Q mismatch from refractory intrapulmonary shunt) and titrating the respiratory support ladder (low-flow oxygen -> high-flow nasal cannula -> noninvasive ventilation -> invasive mechanical ventilation) while actively preventing Patient Self-Inflicted Lung Injury (P-SILI) and avoiding dangerous delays in intubation.",
        },
      ],
    },
    {
      id: "hypoxemic-respiratory-failure.physiology",
      kind: "physiology",
      title: "The 5 Mechanisms of Hypoxemia & Shunt Physiology",
      summary: "Systematic physiologic derivation of the five causes of hypoxemia, A-a gradient interpretation, the 100% O2 test, and the shunt fraction equation.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Decreased Inspired PO2 (PiO2)",
              value: "PiO2 = FiO2 × (Patm - 47). Occurs at high altitude or in toxic gas environments. Normal A-a gradient, normal/low PaCO2, completely responsive to supplemental FiO2.",
            },
            {
              label: "2. Alveolar Hypoventilation",
              value: "Alveolar hypoventilation elevates PaCO2 and displaces alveolar oxygen per the alveolar gas equation. Normal A-a gradient, elevated PaCO2, completely corrects PaO2 with minimal supplemental FiO2, but hypercapnic acidemia persists.",
            },
            {
              label: "3. Ventilation-Perfusion (V/Q) Mismatch",
              value: "Regions of lung with low ventilation relative to perfusion (V/Q < 1.0). Most common mechanism in ICU (mild-moderate pulmonary edema, pneumonia, bronchospasm, atelectasis). Elevated A-a gradient; responds readily to moderate increases in FiO2.",
            },
            {
              label: "4. True Shunt (V/Q = 0)",
              value: "Deoxygenated mixed venous blood enters the systemic arterial circulation without passing through ventilated lung units. Causes: dense alveolar flooding/consolidation (severe ARDS, severe pneumonia), complete lobar collapse, intracardiac right-to-left shunts (PFO with elevated RA pressure), pulmonary AVMs. Elevated A-a gradient; refractory to high FiO2.",
            },
            {
              label: "5. Diffusion Impairment",
              value: "Thickening or destruction of the alveolar-capillary membrane (interstitial lung disease, pulmonary fibrosis). Elevated A-a gradient; typically causes exertional rather than resting hypoxemia unless disease is end-stage.",
            },
          ],
        },
        {
          type: "paragraph",
          text: "The 100% Oxygen Response Test: Administering 100% FiO2 for 15–20 minutes serves as a crucial physiological diagnostic probe. In pure V/Q mismatch, high alveolar PO2 overwhelms poorly ventilated units, raising PaO2 to > 400–500 mmHg. In true shunt > 20–30%, PaO2 remains stubbornly low (< 150–200 mmHg) because blood bypassing ventilated alveoli dilutes the oxygenated blood from healthy units.",
        },
        {
          type: "paragraph",
          text: "The Classic Shunt Fraction Equation (Berggren Equation): Qs/Qt = (Cc'O2 - CaO2) / (Cc'O2 - Cv̄O2), where Qs/Qt is the fraction of total cardiac output traversing the shunt, Cc'O2 is the oxygen content of end-capillary blood, CaO2 is arterial oxygen content, and Cv̄O2 is mixed venous oxygen content. In health, anatomical shunt is < 3–5%. In severe ARDS, Qs/Qt frequently exceeds 25–40%.",
        },
      ],
    },
    {
      id: "hypoxemic-respiratory-failure.psili",
      kind: "physiology",
      title: "Patient Self-Inflicted Lung Injury (P-SILI) & Spontaneous Effort Hazards",
      summary: "Excessive spontaneous breathing drives generate extreme swings in transpulmonary pressure, regional pendelluft gas shifts, and worsened lung injury in spontaneously breathing patients.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "In acute hypoxemic respiratory failure, high respiratory drive induces vigorous spontaneous inspiratory efforts. The resulting large negative pleural pressure swings dramatically increase transpulmonary pressure (ΔPL = Pairway - Ppleural), generating tidal volumes far exceeding lung-protective targets (> 9–12 mL/kg PBW).",
        },
        {
          type: "paragraph",
          text: "This phenomenon, termed Patient Self-Inflicted Lung Injury (P-SILI), inflicts lung damage through three mechanical mechanisms: (1) Increased vascular transmural pressure gradient (Pmicrovascular - Ppleural), which dramatically increases vascular filtration and pulmonary edema; (2) Regional overdistension and pendelluft flow, where gas moves asynchronously between dependent and non-dependent lung zones during inspiration without fresh gas entering the airway; and (3) Dynamic alveolar cyclic opening and collapse (atelectrauma).",
        },
        {
          type: "callout",
          tone: "caution",
          text: "If a patient on noninvasive support (HFNC or NIV) generates excessive tidal volumes (> 9–10 mL/kg PBW) or shows severe inspiratory esophageal pressure swings, persisting with spontaneous noninvasive support will worsen lung injury. Timely endotracheal intubation, controlled ventilation, and neuromuscular relaxation extinguish P-SILI.",
        },
      ],
    },
    {
      id: "hypoxemic-respiratory-failure.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Assessment & POCUS Protocol",
      summary: "Triangulating arterial blood gases, severity indices (PaO2/FiO2, SpO2/FiO2), and bedside lung ultrasound (BLUE protocol).",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            "Quantify Oxygenation Severity: Calculate PaO2/FiO2 (P/F) ratio. Severe hypoxemic failure: P/F ≤ 100 mmHg; Moderate: P/F 101–200 mmHg; Mild: P/F 201–300 mmHg. When ABG is unavailable, calculate the Kigali modification SpO2/FiO2 (S/F) index (S/F ≤ 315 correlates with P/F ≤ 300 when SpO2 ≤ 97%).",
            "Perform Bedside Lung Ultrasound (BLUE Protocol): Rapidly scan 6 thoracic zones per hemithorax to differentiate profiles: (A) A-lines with normal sliding = normal lung / COPD / PE (order CT-PA / D-dimer); (B) Multiple bilateral dynamic B-lines = interstitial syndrome / pulmonary edema / ARDS; (C) Consolidation with shred sign / air bronchograms = pneumonia; (D) Absent sliding with lung point = pneumothorax.",
            "Bedside Echocardiography (FoCUS): Assess left ventricular systolic/diastolic function, mitral regurgitation, and left atrial filling pressures to differentiate cardiogenic hydrostatic pulmonary edema from non-cardiogenic ARDS.",
            "Identify Underlying Etiology: Blood cultures, sputum/tracheal aspirates, viral multiplex PCR, cardiac troponin/BNP, and serial chest radiography or high-resolution CT.",
          ],
        },
        { type: "calculator-embed", calculatorId: "pao2-fio2-ratio" },
      ],
    },
    {
      id: "hypoxemic-respiratory-failure.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Severe Type 1 Hypoxemia: Shunt vs V/Q Mismatch",
      summary: "Differentiate true intrapulmonary shunt (refractory to O2) from V/Q mismatch and diffusion limitation.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Shunt Physiology (Refractory to 100% O2)", value: "Alveoli are completely flooded or collapsed (V/Q = 0): ARDS, severe pneumonia, dense atelectasis, diffuse alveolar hemorrhage. Requires PEEP for recruitment." },
            { label: "V/Q Mismatch (Responsive to O2)", value: "Alveoli have low ventilation relative to perfusion (V/Q < 1): COPD, asthma, pulmonary embolism. Promptly improves with supplemental oxygen." },
            { label: "Right-to-Left Shunt", value: "Patent foramen ovale (PFO) reopening during acute cor pulmonale / PH crisis, or hepatopulmonary syndrome." }
          ]
        }
      ]
    },
    {
      id: "hypoxemic-respiratory-failure.escalation",
      kind: "management",
      title: "The Oxygenation Escalation Ladder & Dynamic ROX Index Trajectories",
      summary: "Stepwise respiratory support ladder (Conventional O2 -> HFNC -> NIV -> Invasive ETT), ROX Index calculations at 2/6/12h, and holistic intubation triggers.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Stepwise escalation algorithm based on patient work of breathing, gas exchange, and underlying etiology:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Step 1: Conventional Oxygen Therapy",
              value: "Standard nasal cannula (1–6 L/min, FiO2 0.24–0.44) or Venturi mask (precise FiO2 0.24–0.50). For severe acute hypoxemia, non-rebreather mask (NRB at 15 L/min + flush) delivers FiO2 0.70–0.90. If patient requires > 6 L/min or NRB to maintain SpO2 ≥ 92%, escalate immediately to HFNC.",
            },
            {
              label: "Step 2: High-Flow Nasal Cannula (HFNC — The First-Line Choice)",
              value: "• Settings: Start flow at 50–60 L/min and titrate FiO2 to maintain SpO2 92–96%.\n• Physiological Actions: (1) Delivers precise high FiO2 meeting peak inspiratory demands; (2) Washes out anatomical dead space (CO2 clearance); (3) Generates 3–5 cmH2O PEEP (improving FRC and alveolar recruitment); (4) Provides humidification, preserving mucociliary function.\n• Evidence (FLORALI Trial): HFNC significantly reduced 90-day all-cause mortality and intubation rates in severe hypoxemia (P/F ≤ 200) compared to conventional oxygen and NIV.",
            },
            {
              label: "Step 3: Non-Invasive Positive Pressure Ventilation (NIV) — Narrow Indications",
              value: "• Indications in Hypoxemia: Acute cardiogenic pulmonary edema and acute exacerbation of COPD with hypoxemia.\n• DANGER in De Novo ARDS / Viral Pneumonia: NIV in non-hypercapnic acute hypoxemic failure carries high failure rates (> 50%) and risks severe P-SILI from uncontrolled large tidal volumes (> 10 mL/kg PBW). Use HFNC in preference to NIV for de novo hypoxemic ARF.",
            },
            {
              label: "Step 4: Dynamic ROX Index Monitoring & Holistic Intubation Triggers",
              value: "• Formula: ROX Index = [SpO2 (%) / FiO2 (decimal)] / Respiratory Rate (breaths/min).\n• Example: SpO2 94% on 60% FiO2 (0.60) with RR 28 = (94 / 0.60) / 28 = 156.7 / 28 = 5.60.\n• Validated Thresholds (Roca et al. 2016 / 2019):\n  - Success Prediction: ROX ≥ 4.88 calculated at 2, 6, or 12 hours predicts high likelihood of successful HFNC weaning.\n  - High Risk of Failure: ROX < 2.85 at 2 hours, ROX < 3.47 at 6 hours, or ROX < 3.85 at 12 hours strongly predicts HFNC failure.\n  - Intermediate Zone (ROX 3.85–4.87): Reassess dynamically within 1–2 hours.\n• CRITICAL PRINCIPLE: The ROX index is a dynamic trajectory tool, NOT a standalone rule for intubation. Decisions to intubate must integrate overall work of breathing, accessory muscle use, abdominal paradox, mental status, hemodynamics, and lack of physiological improvement.",
            },
          ],
        },
      ],
    },
    {
      id: "hypoxemic-respiratory-failure.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls in Hypoxemic Failure",
      summary: "Critical errors to avoid in managing acute hypoxemic respiratory failure.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Persisting with HFNC or NIV in a patient with severe work of breathing and falling ROX: Delayed intubation in failing patients leads to severe cardiorespiratory arrest and higher mortality; intubate promptly when trajectory is downward.",
            "Using high-dose NIV in de novo severe ARDS: High inspiratory pressure support generates massive tidal volumes and transpulmonary pressure swings, driving severe P-SILI; use HFNC or proceed directly to invasive lung-protective mechanical ventilation.",
            "Relying on SpO2 alone without assessing work of breathing: A patient maintaining SpO2 95% while tachypneic at 38 bpm with sternocleidomastoid retraction is in impending respiratory arrest; tachypnea and work of breathing are critical warning signs.",
            "Failing to recognize intrapulmonary shunt in severe ARDS: True shunt does not correct with simple supplemental oxygen; alveolar recruitment with positive pressure (PEEP / prone positioning) is required.",
            "Treating all hypoxemic patients with identical settings: Always align the support modality with the underlying mechanism (e.g. CPAP for SCAPE, bronchodilators/NIV for COPD, low-tidal-volume ETT ventilation for severe ARDS).",
          ],
        },
      ],
    },
    {
      id: "hypoxemic-respiratory-failure.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Awake Prone Positioning in Spontaneously Breathing Non-Intubated Patients.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Awake Prone Positioning on HFNC: Randomized controlled trials and meta-analyses (such as the COVID-19 Awake Proning Meta-Trial) have demonstrated that awake prone positioning for ≥ 6–8 hours daily in non-intubated patients on HFNC significantly improves oxygenation and reduces the rate of endotracheal intubation, particularly in patients with PaO2/FiO2 < 150 mmHg. However, careful continuous monitoring is mandatory to ensure that awake proning does not dangerously mask progressive fatigue or delay necessary intubation.",
        },
      ],
    },
    {
      id: "hypoxemic-respiratory-failure.complications",
      kind: "complications",
      title: "Complications & Escalation Triggers",
      summary: "Structured recognition of acute hypoxemic arrest, VILI, and VV-ECMO escalation criteria.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Early / Immediate", value: "Hypoxemic cardiac arrest, acute cor pulmonale / acute RV failure from severe hypoxic pulmonary vasoconstriction, secondary ischemic brain damage." },
            { label: "Treatment-Related", value: "Patient-Self-Inflicted Lung Injury (P-SILI) from vigorous spontaneous breathing efforts with large transpulmonary pressure swings; Ventilator-Induced Lung Injury (VILI - barotrauma, volutrauma, atelectrauma); oxygen toxicity from prolonged high FiO2 (>0.70-0.80)." },
            { label: "Late / Delayed", value: "Fibroproliferative lung remodeling, ventilator dependence, ICU-acquired weakness." },
            { label: "Escalation Triggers", value: "Refractory PaO2/FiO2 < 80 mmHg despite optimized PEEP, neuromuscular blockade, and prone positioning -> Veno-Venous (VV) ECMO (EOLIA criteria)." }
          ]
        }
      ]
    },
],
};
