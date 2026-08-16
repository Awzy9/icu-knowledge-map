import type { Topic } from "@/content-types";

export const respiratoryFailureBasics: Topic = {
  id: "respiratory-failure-basics",
  slug: "respiratory-failure-basics",
  title: "Respiratory Failure: Basic Principles",
  category: "respiratory",
  oneLiner: "Core taxonomy (Types I–IV), alveolar gas exchange physiology, work-of-breathing mechanics, and escalation thresholds in acute respiratory failure.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Principles of Mechanical Ventilation and Acute Respiratory Failure",
    },
    {
      title: "West's Respiratory Physiology: The Essentials",
      edition: "11th Edition, 2021",
    },
  ],
  currentStatus: "Foundational critical care physiology and taxonomy synthesized across international consensus frameworks and landmark physiology literature.",
  otherReferences: [
    "Roussos C, Macklem PT. The respiratory muscles. N Engl J Med. 1982;307(13):786-797.",
    "Vincent JL, et al. The Oxford Textbook of Critical Care. 2nd Edition, 2016.",
  ],
  relationships: [
    { type: "physiology", targetId: "hypoxemic-respiratory-failure", label: "Type I failure pathophysiology" },
    { type: "physiology", targetId: "hypercapnic-respiratory-failure", label: "Type II failure pathophysiology" },
    { type: "treated-with", targetId: "mechanical-ventilation", label: "Invasive and noninvasive mechanical support" },
    { type: "related-to", targetId: "ards", label: "Primary parenchymal hypoxemic lung injury" },
    { type: "related-to", targetId: "copd-exacerbation", label: "Obstructive hypercapnic decompensation" },
    { type: "related-to", targetId: "asthma", label: "Severe dynamic airflow limitation" },
    { type: "related-to", targetId: "pneumonia", label: "Infectious parenchymal consolidation" },
    { type: "related-to", targetId: "shock", label: "Type IV failure / cardiogenic and distributive hypoperfusion" },
  ],
  sections: [
    {
      id: "respiratory-failure-basics.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "hypoxemic-respiratory-failure-guideline-hfnc",
          relevance: "Clinical guideline on initial noninvasive respiratory support"
        },
        {
          kind: "guideline",
          id: "hypercapnic-respiratory-failure-guideline-niv",
          relevance: "Clinical guideline on positive pressure ventilation in acute ventilatory failure"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Respiratory failure is the inability of the respiratory system to maintain adequate arterial oxygenation, carbon dioxide elimination, or both, categorized into four distinct physiologic types.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Acute respiratory failure (ARF) is a functional diagnosis indicating that the respiratory system can no longer meet the metabolic demands of the body for oxygen uptake or carbon dioxide clearance. Rather than representing a single disease entity, it is a life-threatening manifestation of underlying pulmonary, cardiac, neuromuscular, or systemic pathology.",
        },
        {
          type: "paragraph",
          text: "In the ICU, understanding the physiological taxonomy of respiratory failure is vital because the four major types differ fundamentally in mechanism, gas-exchange abnormalities, hemodynamic consequences, and required therapeutic interventions. Managing ARF requires continuous triangulation between arterial blood gas analysis, respiratory mechanics, work of breathing, and systemic perfusion.",
        },
      ],
    },
    {
      id: "respiratory-failure-basics.definition",
      kind: "definition",
      title: "Classification: Types I through IV Respiratory Failure",
      summary: "Modern critical care recognizes four physiologic categories: hypoxemic (Type I), hypercapnic (Type II), perioperative/atelectatic (Type III), and shock/hypoperfusion-related (Type IV).",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "Type I — Hypoxemic",
              value: "PaO2 < 60 mmHg on room air (or PaO2/FiO2 ≤ 300) with normal or low PaCO2. Mechanism: Alveolar flooding, V/Q mismatch, or intrapulmonary shunt (e.g., ARDS, severe pneumonia, cardiogenic pulmonary edema).",
            },
            {
              label: "Type II — Hypercapnic",
              value: "PaCO2 > 45–50 mmHg with acute uncompensated acidemia (pH < 7.35). Mechanism: Alveolar hypoventilation due to central drive depression, neuromuscular weakness, severe chest wall deformity, or severe airflow obstruction with increased dead space (e.g., COPD, severe asthma, myasthenic crisis, sedative toxicity).",
            },
            {
              label: "Type III — Perioperative / Atelectatic",
              value: "Hypoxemia developing postoperatively due to reduced functional residual capacity (FRC), anesthesia-induced atelectasis, diaphragmatic splinting from pain or upper abdominal incisions, and retained secretions.",
            },
            {
              label: "Type IV — Shock / Hypoperfusion",
              value: "Respiratory failure in the setting of severe circulatory failure (shock). The respiratory muscles consume up to 25–40% of total cardiac output (diaphragmatic steal). Intubation and mechanical ventilation unload the respiratory pump, redistributing critical blood flow to vital organs.",
            },
          ],
        },
        {
          type: "callout",
          tone: "caution",
          text: "Types I and II frequently overlap in severe disease. For example, severe status asthmaticus or end-stage COPD exacerbation begins with severe V/Q mismatch and hypoxemia (Type I) and rapidly progresses to respiratory muscle exhaustion, severe CO2 retention, and respiratory acidosis (Type II).",
        },
      ],
    },
    {
      id: "respiratory-failure-basics.physiology",
      kind: "physiology",
      title: "Physiology of Gas Exchange and Work of Breathing",
      summary: "Mastering the alveolar gas equation, A-a gradient, West zones, and the respiratory muscle fatigue cascade provides the mathematical and physiologic foundation for ICU management.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Arterial oxygenation depends on the Alveolar Gas Equation, which calculates the partial pressure of oxygen inside the alveolus (PAO2): PAO2 = FiO2 × (Patm - PH2O) - (PaCO2 / R), where Patm is atmospheric pressure (760 mmHg at sea level), PH2O is water vapor pressure (47 mmHg at 37°C), and R is the respiratory quotient (typically 0.8). At sea level on room air (FiO2 0.21), PAO2 ≈ 150 - (PaCO2 / 0.8).",
        },
        {
          type: "paragraph",
          text: "The Alveolar-arterial (A-a) oxygen gradient equals PAO2 - PaO2. The normal age-adjusted A-a gradient is estimated as (Age / 4) + 4, or roughly (Age / 3). A normal A-a gradient in a hypoxemic patient proves that hypoxemia is driven solely by alveolar hypoventilation (Type II) or low inspired FiO2. An elevated A-a gradient signifies parenchymal lung disease, V/Q mismatch, intrapulmonary shunt, or diffusion impairment.",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Oxygen Content (CaO2)",
              value: "CaO2 = (1.34 × [Hb] × SaO2) + (0.0031 × PaO2). The vast majority of oxygen is bound to hemoglobin; dissolved oxygen contributes only 0.0031 mL/dL per mmHg of PaO2.",
            },
            {
              label: "Oxygen Delivery (DO2)",
              value: "DO2 = Cardiac Output (CO) × CaO2 × 10. Normal resting DO2 is ~1000 mL/min (~500–600 mL/min/m2). Critical DO2 occurs when tissue oxygen delivery drops below metabolic demand, precipitating anaerobic metabolism and lactic acidosis.",
            },
            {
              label: "West Zones of the Lung",
              value: "Zone 1 (PA > Pa > Pv): Alveolar dead space (ventilated, unperfused). Enlarged by positive pressure ventilation and hypovolemia. Zone 2 (Pa > PA > Pv): Waterfall effect / Starling resistor; flow determined by Pa - PA. Zone 3 (Pa > Pv > PA): Continuous perfusion and optimal gas exchange dependent on gravity in dependent lung regions.",
            },
          ],
        },
        {
          type: "paragraph",
          text: "The Work of Breathing (WOB) is the energy expended to overcome elastic recoil of the lung and chest wall, plus frictional airway resistance and tissue viscous resistance. Under normal conditions, WOB accounts for < 5% of total metabolic oxygen consumption. In severe ARF (high airway resistance, severe dynamic hyperinflation, or low lung compliance), WOB can rise to exceed 25–40% of total oxygen consumption.",
        },
        {
          type: "paragraph",
          text: "The Respiratory Muscle Fatigue Cascade follows a predictable trajectory: excessive load leads to tachypnea and accessory muscle recruitment (sternocleidomastoid, scalenes, intercostals) -> discoordinated breathing -> thoracoabdominal paradox (inward movement of the abdomen during inspiration due to diaphragmatic fatigue) and respiratory alternans -> rapid drop in tidal volume -> acute CO2 retention -> bradypnea -> respiratory arrest.",
        },
      ],
    },
    {
      id: "respiratory-failure-basics.clinical-presentation",
      kind: "clinical-presentation",
      title: "Clinical Presentation and Bedside Recognition",
      summary: "Recognizing early physical signs of respiratory muscle fatigue and impending catastrophic collapse before complete respiratory arrest.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Signs of excessive work of breathing: tachypnea (RR > 30–35 breaths/min), nasal flaring, tracheal tugging, intercostal and supraclavicular retractions, inability to speak in full sentences.",
            "Signs of diaphragmatic exhaustion: thoracoabdominal paradoxical breathing (abdominal wall paradox), respiratory alternans (alternating between purely diaphragmatic and accessory muscle breathing), rapid shallow breathing pattern.",
            "Signs of hypoxemia: cyanosis (late and insensitive, requires > 5 g/dL unoxygenated hemoglobin), agitation, confusion, diaphoresis, tachycardia, and early hypertension progressing to bradycardia and hypotension in terminal stages.",
            "Signs of severe hypercapnia / CO2 narcosis: asterixis, bounding peripheral pulses, flushed warm extremities, progressive somnolence, confusion, obtundation, and coma.",
            "Impending respiratory arrest warning signs: abrupt transition from tachypnea to bradypnea or irregular gasping respirations, 'pseudonormalization' of PaCO2 in an exhausted asthmatic patient, diaphoresis with declining consciousness, and silent chest on auscultation.",
          ],
        },
        {
          type: "callout",
          tone: "caution",
          text: "A patient with severe acute asthma or COPD whose respiratory rate slows from 38 to 18 breaths/min with declining alertness is NOT improving — this is a sign of acute diaphragmatic exhaustion and imminent respiratory arrest.",
        },
      ],
    },
    {
      id: "respiratory-failure-basics.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Approach & Arterial Blood Gas Interpretation",
      summary: "A systematic 4-step arterial blood gas and clinical evaluation framework to differentiate the underlying physiological driver.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            "Step 1 — Assess Oxygenation: Measure PaO2 and calculate PaO2/FiO2 ratio. If hypoxemia is present, calculate the A-a gradient on the current FiO2 to determine whether lung parenchymal/vascular disease is present (elevated A-a gradient) or if it is purely hypoventilation/low ambient O2 (normal A-a gradient).",
            "Step 2 — Assess Ventilation: Check PaCO2 and pH. Determine if hypercapnia is acute (pH drops ~0.08 per 10 mmHg increase in PaCO2 with serum HCO3- rising only ~1 mEq/L) or chronic/compensated (pH drops ~0.03 per 10 mmHg increase in PaCO2 with serum HCO3- rising ~3.5–4 mEq/L).",
            "Step 3 — Bedside Ultrasound (POCUS) & Imaging: Perform targeted thoracic ultrasound (BLUE protocol) to rapidly identify pneumothorax (absent sliding, lung point), interstitial syndrome / pulmonary edema (diffuse B-lines), consolidation / pneumonia (shred sign, tissue-like pattern with air bronchograms), or large pleural effusions.",
            "Step 4 — Evaluate Respiratory Mechanics: In mechanically ventilated patients, assess static compliance (Cstat), airway resistance (Raw), plateau pressure (Pplat), driving pressure (ΔP), and auto-PEEP (intrinsic PEEP) to pinpoint elastic versus resistive loading.",
          ],
        },
      ],
    },
    {
      id: "respiratory-failure-basics.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Acute Respiratory Failure: Type 1 vs Type 2 vs Type 3 vs Type 4",
      summary: "The classic four-type physiological taxonomy of acute respiratory failure.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Type 1: Hypoxemic Respiratory Failure (PaO2 < 60 mmHg on room air with normal/low PaCO2): Shunt (ARDS, pneumonia, alveolar flooding) or severe V/Q mismatch.",
          "Type 2: Hypercapnic / Ventilatory Pump Failure (PaCO2 > 45-50 mmHg with pH < 7.35): Central depression, neuromuscular failure, COPD/asthma load mismatch.",
          "Type 3: Perioperative / Atelectatic Failure: Loss of functional residual capacity (FRC) following major abdominal/thoracic surgery and anesthesia.",
          "Type 4: Shock-Related / Hypoperfusion Failure: Severe circulatory shock where respiratory muscles consume up to 40% of total cardiac output; intubation and mechanical ventilation unloads the diaphragm and redirects perfusion to vital organs."
]
        }
      ]
    },
    {
      id: "respiratory-failure-basics.management",
      kind: "management",
      title: "Stepwise Escalation of Respiratory Support",
      summary: "From low-flow oxygen to high-flow nasal cannula, noninvasive positive pressure ventilation, and invasive endotracheal intubation.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Oxygen delivery devices must be escalated rationally according to the underlying physiological failure mechanism (oxygenation versus ventilatory pump failure):",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Low-Flow Oxygen (Nasal Cannula / Simple Mask)",
              value: "Provides 1–6 L/min (~24–44% FiO2) or 6–10 L/min (~35–55% FiO2). Flow is exceeded by patient's peak inspiratory flow, resulting in variable entrainment of room air.",
            },
            {
              label: "Non-Rebreather Mask (NRB)",
              value: "Provides 10–15 L/min with reservoir bag; delivers 60–80% FiO2. Useful for acute temporization, but lacks positive airway pressure and washout of anatomical dead space.",
            },
            {
              label: "High-Flow Nasal Cannula (HFNC)",
              value: "Delivers heated, humidified gas up to 60–80 L/min and precise FiO2 (0.21–1.0). Provides anatomical dead-space washout, reduces work of breathing, and provides modest flow-dependent PEEP (~2–5 cmH2O). First-line for acute hypoxemic respiratory failure (Type I).",
            },
            {
              label: "Noninvasive Positive Pressure Ventilation (NIV / BiPAP)",
              value: "Delivers inspiratory positive airway pressure (IPAP) to unload respiratory muscles and increase alveolar ventilation, plus expiratory positive airway pressure (EPAP) to recruit alveoli. First-line for acute hypercapnic COPD exacerbations and cardiogenic pulmonary edema.",
            },
            {
              label: "Invasive Mechanical Ventilation (IMV)",
              value: "Endotracheal intubation indicated when noninvasive strategies fail, airway protection is lost, severe shock requires unloading of the respiratory pump (Type IV), or severe encephalopathy/exhaustion supervenes.",
            },
          ],
        },
        {
          type: "callout",
          tone: "caution",
          text: "Indications for Immediate Intubation: (1) Cardiac or respiratory arrest; (2) Inability to protect airway / severe GCS depression (< 8) with aspiration risk; (3) Severe hemodynamic instability / unresuscitatable shock; (4) Exhaustion, severe paradoxical breathing, and uncorrectable respiratory acidosis (pH < 7.15–7.20) despite maximal noninvasive support.",
        },
      ],
    },
    {
      id: "respiratory-failure-basics.complications",
      kind: "complications",
      title: "Complications of Respiratory Failure & Resuscitation",
      summary: "Complications structured by disease-related pathology, treatment-related hazards, and ICU-acquired sequelae.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "Disease-Related Complications",
              value: "Severe hypoxic encephalopathy, malignant cardiac arrhythmias (VT/VF, severe bradycardia), secondary pulseless electrical activity (PEA) arrest, severe mixed metabolic-respiratory acidosis, and ischemic multiorgan failure.",
            },
            {
              label: "Treatment-Related Complications",
              value: "Hyperoxia-induced absorption atelectasis, reactive oxygen species formation, hypercapnic worsening from unregulated high-flow FiO2 in COPD, ventilator-induced lung injury (VILI: barotrauma, volutrauma), and post-intubation hemodynamic collapse.",
            },
            {
              label: "ICU-Related Sequelae",
              value: "Ventilator-associated pneumonia (VAP), critical illness myopathy and neuropathy (ICU-acquired weakness), deep venous thrombosis / pulmonary embolism, delirium, and post-intensive care syndrome (PICS).",
            },
          ],
        },
      ],
    },
    {
      id: "respiratory-failure-basics.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical diagnostic and management traps in acute respiratory failure management.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Relying solely on pulse oximetry (SpO2) to monitor a patient in acute ventilatory failure — supplemental oxygen can maintain an SpO2 of 98% while PaCO2 climbs into fatal acidotic ranges (> 90 mmHg, pH < 7.10).",
            "Interpreting a 'normal' PaCO2 (e.g., 40 mmHg) in a severely tachypneic asthmatic as reassuring — at a respiratory rate of 35 breaths/min, PaCO2 should be 25–30 mmHg. A PaCO2 of 40 mmHg indicates impending diaphragmatic exhaustion.",
            "Failing to anticipate post-intubation hypotension: transitioning a patient in severe respiratory distress from negative-pressure spontaneous breathing to positive-pressure mechanical ventilation abruptly increases intrathoracic pressure, reduces venous return, and removes endogenous catecholamine surge upon induction.",
            "Delaying intubation in a patient with progressive Type IV respiratory failure in cardiogenic or septic shock, allowing the exhausted respiratory pump to divert up to 40% of cardiac output away from kidneys, brain, and myocardium.",
            "Treating hypercapnia with arbitrary high-flow oxygen without an assessment of baseline compensatory bicarbonate or serial blood gas monitoring.",
          ],
        },
      ],
    },
    {
      id: "respiratory-failure-basics.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Debates surrounding optimal oxygenation targets and noninvasive device selection in mixed respiratory failure.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Conservative versus Liberal Oxygen Targets: Landmark clinical trials (e.g., LOCO2, HOT-ICU, ICU-ROX) have highlighted the dangers of hyperoxia in critically ill patients, demonstrating that supra-normal PaO2 levels induce coronary and cerebral vasoconstriction and produce cytotoxic reactive oxygen species. Current consensus targets an SpO2 of 92–96% for most critically ill patients (and 88–92% in patients at risk for hypercapnic respiratory failure), avoiding both hypoxemia and unmonitored hyperoxia.",
        },
        {
          type: "paragraph",
          text: "HFNC versus NIV in De novo Hypoxemic Failure: While NIV is universally accepted for COPD exacerbations and cardiogenic pulmonary edema, its use in de novo hypoxemic respiratory failure (e.g., early ARDS) remains debated due to high failure rates (> 40–50%) and the hazard of large tidal volumes generating patient self-inflicted lung injury (P-SILI). HFNC is increasingly preferred as initial noninvasive support in pure hypoxemic failure.",
        },
      ],
    },
  ],
};
