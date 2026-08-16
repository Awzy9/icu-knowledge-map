import type { Topic } from "@/content-types";

export const mechanicalVentilation: Topic = {
  id: "mechanical-ventilation",
  slug: "mechanical-ventilation",
  title: "Invasive Mechanical Ventilation",
  category: "respiratory",
  oneLiner: "Core ventilator modes, respiratory mechanics (Cstat, Raw, driving pressure), waveform dyssynchrony analysis, VILI prevention, and liberation protocols.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Principles of Mechanical Ventilation, Patient-Ventilator Interaction, and Liberation from Mechanical Ventilation",
    },
    {
      title: "Tobin's Principles and Practice of Mechanical Ventilation",
      edition: "3rd Edition, 2013",
    },
  ],
  currentStatus: "Current as of the 2017 ATS/CHEST Liberation from Mechanical Ventilation Guidelines, the ARDSNet lung-protective protocols, and landmark driving pressure / mechanical power evidence.",
  otherReferences: [
    "Amato MB, et al. Driving pressure and survival in the acute respiratory distress syndrome. N Engl J Med. 2015;372(8):747-755.",
    "Gattinoni L, et al. Ventilator-related causes of lung injury: the mechanical power. Intensive Care Med. 2016;42(10):1567-1575.",
    "Ouellette DR, et al. Liberation from Mechanical Ventilation in Critically Ill Adults: An Official ATS/CHEST Clinical Practice Guideline. Chest. 2017;151(1):166-180.",
    "Yang KL, Tobin MJ. A prospective study of indexes predicting the outcome of trials of weaning from mechanical ventilation. N Engl J Med. 1991;324(21):1445-1450.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "respiratory-failure-basics", label: "Fundamental gas exchange and work-of-breathing mechanics" },
    { type: "complication", targetId: "pneumothorax", label: "Barotrauma from elevated transpulmonary pressure" },
    { type: "complication", targetId: "vap", label: "Ventilator-associated pneumonia from endotracheal intubation" },
    { type: "related-to", targetId: "ards", label: "Lung-protective low-tidal-volume and prone ventilation" },
    { type: "related-to", targetId: "copd-exacerbation", label: "Dynamic hyperinflation and auto-PEEP matching" },
    { type: "related-to", targetId: "asthma", label: "Obstructive ventilatory strategies and permissive hypercapnia" },
  ],
  sections: [
    {
      id: "mechanical-ventilation.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "mechanical-ventilation-guideline-liberation-sbt",
          relevance: "ATS/CHEST clinical practice guideline on liberation from mechanical ventilation"
        },
        {
          kind: "guideline",
          id: "ards-guideline-low-tidal-volume",
          relevance: "Low tidal volume ventilation protocol (6 mL/kg PBW)"
        },
        {
          kind: "trial",
          id: "ards-arma",
          relevance: "ARMA landmark trial establishing lung-protective ventilation"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Invasive mechanical ventilation delivers positive-pressure gas to support pulmonary gas exchange and unload exhausted respiratory muscles while balancing the risks of ventilator-induced lung injury and hemodynamic collapse.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Invasive mechanical ventilation is a life-sustaining supportive intervention designed to maintain alveolar ventilation, optimize arterial oxygenation, reduce the metabolic work of breathing, and allow therapeutic stabilization in acute respiratory failure, shock, or severe neurologic impairment.",
        },
        {
          type: "paragraph",
          text: "Because positive-pressure ventilation reverses the normal negative-pressure physiology of spontaneous breathing, it introduces serious iatrogenic hazards: ventilator-induced lung injury (VILI: barotrauma, volutrauma, atelectrauma, biotrauma), severe reduction in right ventricular venous return (preload collapse), and patient-ventilator dyssynchrony. Critical care management requires meticulous parameter selection, continuous monitoring of respiratory mechanics (Cstat, Raw, Driving Pressure, Mechanical Power), and daily protocolized screening for liberation.",
        },
      ],
    },
    {
      id: "mechanical-ventilation.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Sudden Ventilator Deterioration (DOPE Mnemonic)",
      summary: "Systematic bedside evaluation of acute high peak pressures and sudden hypoxemia during mechanical ventilation.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "D — Dislodged / Malpositioned Endotracheal Tube: Right mainstem intubation (high peak pressure, asymmetric breath sounds) or accidental extubation.",
          "O — Obstruction: Mucus plugging, tube kinking, biting on endotracheal tube, or herniated cuff.",
          "P — Pneumothorax: Sudden rise in peak and plateau pressures, unilateral absent breath sounds, subcutaneous emphysema, hemodynamic collapse.",
          "E — Equipment Failure: Ventilator malfunction, oxygen supply failure, circuit disconnect, or exhalation valve blockage."
]
        }
      ]
    },
    {
      id: "mechanical-ventilation.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Evaluation: Respiratory Mechanics & Patient-Ventilator Asynchrony",
      summary: "Waveform analysis, static compliance calculation, driving pressure measurement, and asynchrony pattern recognition.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Static Respiratory System Compliance (Cstat)", value: "Formula: Cstat = VT / (Pplat - PEEP). Normal is 50-80 mL/cmH2O; in severe ARDS, Cstat drops < 20-30 mL/cmH2O indicating severe lung stiffness." },
            { label: "Driving Pressure (Delta P)", value: "Formula: Delta P = Pplat - PEEP. Amato NEJM landmark study: Target Delta P <= 14-15 cmH2O; each 1 cmH2O increase above 15 is independently associated with increased mortality." },
            { label: "Airway Resistance (Raw)", value: "Formula: Raw = (Ppeak - Pplat) / Flow. Normal <= 10-15 cmH2O/L/s. Elevated (Ppeak - Pplat > 10-15 cmH2O) indicates bronchospasm, mucus plugging, or small endotracheal tube." },
            { label: "Asynchrony Recognition", value: "Inspect flow-time and pressure-time curves for: Trigger delay, Ineffective triggering (diaphragmatic effort without breath delivery), Double triggering (breath stacking), Flow starvation (concave pressure curve), and Premature/Delayed cycling." }
          ]
        }
      ]
    },
    {
      id: "mechanical-ventilation.modes",
      kind: "definition",
      title: "Classification of Ventilator Modes & Control Variables",
      summary: "Phase variables governing mandatory and assisted breaths: trigger, limit, and cycle mechanisms across Volume Control, Pressure Control, and Pressure Support.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "A ventilator breath is defined by four phase variables: (1) Trigger (what starts inspiration: time, pressure, or flow); (2) Target/Limit (what parameter is capped during inspiration: volume, flow, or pressure); (3) Cycle (what ends inspiration: volume, time, or flow); and (4) Baseline (what end-expiratory pressure is maintained: PEEP).",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Volume Control (VC-CMV / AC-VC)",
              value: "Volume-targeted, flow-limited, time- or volume-cycled. A fixed tidal volume and flow rate/waveform are delivered with every breath. Guarantees minute ventilation. Airway pressures (Ppeak, Pplat) vary dynamically with patient compliance and resistance.",
            },
            {
              label: "Pressure Control (PC-CMV / AC-PC)",
              value: "Pressure-targeted, pressure-limited, time-cycled. A constant inspiratory pressure is applied for a set inspiratory time (Ti) with a decelerating flow waveform. Guarantees a pressure ceiling (protecting against excessive airway pressure). Delivered tidal volume varies with compliance, resistance, and patient effort.",
            },
            {
              label: "Pressure Support Ventilation (PSV)",
              value: "Patient-triggered, pressure-limited, flow-cycled. The patient initiates every breath, and the ventilator augments inspiratory effort by delivering a set pressure above PEEP until inspiratory flow decays to a set percentage of peak flow (cycle-off threshold, typically 25%). Requires intact respiratory drive.",
            },
            {
              label: "Dual-Control / Volume-Targeted Pressure Modes (PRVC / VC+)",
              value: "Pressure-regulated volume control delivering decelerating flow while automatically adjusting inspiratory pressure breath-by-breath to achieve a target tidal volume at the lowest possible airway pressure.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanical-ventilation.mechanics",
      kind: "physiology",
      title: "Respiratory Mechanics: Compliance, Resistance, Driving Pressure, & Mechanical Power",
      summary: "Mathematical equations of motion, plateau pressure, static compliance, airway resistance, driving pressure (Amato et al.), and mechanical power.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "The Equation of Motion for the respiratory system states: Paw = Pelastic + Presistive + PEEP = (Vt / Cstat) + (Raw × Flow) + PEEP. During an end-inspiratory pause (flow = 0), resistive pressure drops to zero, and airway pressure equilibrates to the Static Plateau Pressure (Pplat), which reflects alveolar distending pressure.",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Peak Airway Pressure (Ppeak)",
              value: "Total pressure required to overcome both airway resistance and lung/chest wall elastic recoil. Ppeak = Pplat + (Raw × Flow).",
            },
            {
              label: "Plateau Pressure (Pplat)",
              value: "Measured via a 0.5-second end-inspiratory pause in a relaxed/sedated patient without spontaneous effort. Reflects true alveolar end-inspiratory pressure. Target Pplat ≤ 30 cmH2O to prevent volutrauma/barotrauma.",
            },
            {
              label: "Static Compliance (Cstat)",
              value: "Cstat = Vt / (Pplat - PEEPtotal). Normal in intubated lungs is 50–80 mL/cmH2O. In severe ARDS or pulmonary edema, Cstat plummets to < 20–30 mL/cmH2O.",
            },
            {
              label: "Airway Resistance (Raw)",
              value: "Raw = (Ppeak - Pplat) / Flow (in L/sec). Normal intubated Raw is 5–10 cmH2O/L/s. In severe bronchospasm or small ETTs, Raw exceeds 20–40 cmH2O/L/s.",
            },
            {
              label: "Driving Pressure (ΔP)",
              value: "ΔP = Pplat - PEEPtotal = Vt / Cstat. Landmark study by Amato et al. (NEJM 2015) established driving pressure as the single strongest mechanical predictor of hospital survival in ARDS. Target ΔP ≤ 14–15 cmH2O.",
            },
            {
              label: "Mechanical Power (MP)",
              value: "MP (J/min) = 0.098 × RR × Vt × [Ppeak - (ΔP / 2)] (Gattinoni et al.). Represents the total mechanical energy transferred from the ventilator to the lung parenchyma per minute. MP > 17–20 J/min independently correlates with ventilator-induced lung injury.",
            },
          ],
        },
        { type: "calculator-embed", calculatorId: "driving-pressure" },
        { type: "calculator-embed", calculatorId: "static-compliance" },
      ],
    },
    {
      id: "mechanical-ventilation.dyssynchrony",
      kind: "physiology",
      title: "Patient-Ventilator Interaction: Waveform Analysis & Dyssynchrony",
      summary: "Recognition and remediation of flow starvation, ineffective triggering, double triggering, auto-triggering, and reverse triggering.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Patient-ventilator dyssynchrony occurs in > 25% of mechanically ventilated patients and is independently associated with prolonged mechanical ventilation, increased sedation requirements, ICU delirium, and higher mortality:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Flow Starvation / Inadequate Flow",
              value: "Waveform: Concave/scalloped pressure-time curve during inspiration in volume control. Cause: Patient inspiratory flow demand exceeds fixed set flow. Fix: Increase peak flow rate (e.g., to 70–90 L/min), switch to a decelerating flow profile, or change to Pressure Control / Pressure Support.",
            },
            {
              label: "2. Ineffective Triggering / Missed Efforts",
              value: "Waveform: Negative deflection on pressure-time curve with a blip in expiratory flow during expiration that fails to trigger a machine breath. Cause: Auto-PEEP imposing an inspiratory threshold load, or trigger sensitivity set too low. Fix: Match external PEEP to 70–80% of auto-PEEP, increase trigger sensitivity, reduce pressure support.",
            },
            {
              label: "3. Double Triggering / Breath Stacking",
              value: "Waveform: Two consecutive mandatory breaths delivered with virtually no expiratory pause, delivering double the set tidal volume. Cause: Patient neural inspiratory time exceeds ventilator inspiratory time (Ti set too short, or Vt set too low). Fix: Increase tidal volume, lengthen Ti, or adjust pressure support cycle-off criteria.",
            },
            {
              label: "4. Auto-Triggering",
              value: "Waveform: Rapid mandatory breath delivery without preceding negative patient effort. Cause: Overly sensitive trigger threshold, circuit condensation/water sloshing, cardiogenic oscillations from hyperdynamic heart. Fix: Switch from flow to pressure trigger, drain circuit water, optimize sensitivity.",
            },
            {
              label: "5. Reverse Triggering",
              value: "Waveform: Patient diaphragmatic contraction rhythmically triggered by the preceding mandatory machine breath. Occurs in deeply sedated patients. Can cause dynamic breath stacking. Fix: Adjust sedation depth or change respiratory rate.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanical-ventilation.vili",
      kind: "complications",
      title: "Ventilator-Induced Lung Injury (VILI) Mechanisms",
      summary: "Barotrauma, volutrauma, atelectrauma, biotrauma, and ergotrauma pathways.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Barotrauma: High transalveolar pressure causing macroscopic alveolar rupture, leading to pulmonary interstitial emphysema, pneumothorax, pneumomediastinum, and subcutaneous emphysema.",
            "Volutrauma: Regional alveolar overdistension from excessive end-inspiratory lung volume (strain), leading to alveolar-capillary membrane disruption, increased vascular permeability, and non-cardiogenic pulmonary edema.",
            "Atelectrauma: Shear stress injury caused by repetitive cyclic opening and closing of unstable, surfactant-depleted alveoli during tidal breathing. Prevented by adequate positive end-expiratory pressure (PEEP).",
            "Biotrauma: Mechanical deformation of epithelial and endothelial cells triggering intracellular signal transduction cascades that release pro-inflammatory cytokines (IL-6, IL-8, TNF-alpha) into the systemic circulation, driving multiorgan dysfunction syndrome (MODS).",
            "Ergotrauma: Lung injury caused by excessive cumulative kinetic energy and mechanical power delivered per unit time into heterogeneous lung tissue.",
          ],
        },
      ],
    },
    {
      id: "mechanical-ventilation.liberation",
      kind: "management",
      title: "Liberation from Mechanical Ventilation: The ABCDEF Bundle & SBT Protocol",
      summary: "Spontaneous Awakening Trial (SAT), Spontaneous Breathing Trial (SBT), Rapid Shallow Breathing Index (RSBI), and Cuff Leak Test.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Liberation from mechanical ventilation should be evaluated daily via protocolized screening to avoid prolonged intubation:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Daily Readiness Screening",
              value: "Criteria: (1) Underlying cause of ARF improving; (2) PaO2/FiO2 > 150–200 on PEEP ≤ 5–8 cmH2O and FiO2 ≤ 0.40–0.50; (3) Arterial pH > 7.30; (4) Hemodynamic stability with minimal/no vasopressors; (5) Patient conscious and cooperative with intact cough and gag reflexes.",
            },
            {
              label: "2. Spontaneous Awakening Trial (SAT)",
              value: "Turn off all continuous sedatives and opioids daily unless contraindicated (active seizures, neuromuscular blockade, severe intracranial hypertension).",
            },
            {
              label: "3. Spontaneous Breathing Trial (SBT)",
              value: "The 2017 ATS/CHEST guideline conditionally recommends performing an SBT with inspiratory pressure augmentation (Pressure Support 5–8 cmH2O with PEEP 0–5 cmH2O) rather than an unassisted T-piece for 30–120 minutes. Pressure-augmented SBTs significantly increase extubation success and decrease ICU stay.",
            },
            {
              label: "4. Rapid Shallow Breathing Index (RSBI)",
              value: "RSBI = Respiratory Rate (breaths/min) / Tidal Volume (in Liters), measured after 1 minute of unassisted breathing on T-piece or CPAP. RSBI < 105 breaths/min/L strongly predicts successful weaning (Yang & Tobin, NEJM 1991).",
            },
            {
              label: "5. Cuff Leak Test for Post-Extubation Stridor",
              value: "Perform in patients intubated > 6 days, with difficult airway anatomy, or at risk for laryngeal edema. Deflate ETT cuff and measure exhaled tidal volume. An absolute leak volume < 110 mL (or < 15–24% of inspiratory Vt) indicates high risk of post-extubation stridor. Treat with IV Methylprednisolone (20–40 mg q4h) or Dexamethasone (5 mg q6h) for 12–24 hours prior to extubation.",
            },
            {
              label: "6. Planned Post-Extubation NIV / HFNC",
              value: "For patients at high risk of extubation failure (age > 65, underlying severe COPD, congestive heart failure, hypercapnia at end of SBT, obesity), immediately applying prophylactic post-extubation NIV or HFNC prevents reintubation and reduces post-extubation mortality.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanical-ventilation.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical mistakes in ventilator setup, monitoring, and liberation.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Calculating tidal volume based on actual body weight instead of Predicted Body Weight (PBW): Lung size is determined by height and biological sex, not adipose tissue; ventilating an obese patient based on actual weight delivers severely injurious tidal volumes (> 12–15 mL/kg PBW).",
            "Treating patient-ventilator dyssynchrony reflexively with deeper sedation or paralytics without analyzing the pressure/flow waveforms: Most dyssynchrony is easily solved by increasing peak inspiratory flow, matching auto-PEEP, or adjusting trigger sensitivity.",
            "Confusing Peak Pressure with Plateau Pressure: An elevated Ppeak with a normal Pplat (< 28 cmH2O) indicates an airway resistance problem (ETT biting, bronchospasm, secretions, kinked tube), NOT alveolar stiffness.",
            "Failing to recognize auto-PEEP as the cause of difficult weaning or post-intubation shock: Always perform an end-expiratory hold maneuver to measure intrinsic PEEP.",
            "Extubating a high-risk patient (e.g., severe COPD or morbid obesity) to standard room air: High-risk patients should be extubated directly to planned prophylactic NIV or HFNC to prevent secondary extubation failure.",
          ],
        },
      ],
    },
    {
      id: "mechanical-ventilation.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Optimal SBT technique (PSV vs T-piece) and driving pressure titration.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "SBT Technique — Pressure Support (PSV) versus T-Piece: While the 2017 ATS/CHEST guidelines recommend PSV (5–8 cmH2O) to overcome the resistive work of the endotracheal tube, critics argue that PSV may underestimate post-extubation work of breathing, leading to premature extubation in marginal patients. T-piece trials provide a truer reflection of unassisted breathing mechanics.",
        },
        {
          type: "paragraph",
          text: "Driving Pressure-Guided vs PEEP/FiO2 Table-Guided Ventilation: While traditional ARDS management utilizes standard PEEP/FiO2 titration tables, randomized trials are evaluating whether individualizing PEEP to achieve the lowest Driving Pressure (ΔP = Pplat - PEEP) or maximum static compliance improves clinical survival compared to empiric protocolized tables.",
        },
      ],
    },
  ],
};
