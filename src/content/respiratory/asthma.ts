import type { Topic } from "@/content-types";

export const asthma: Topic = {
  id: "asthma",
  slug: "asthma",
  title: "Asthma (Severe & Near-Fatal Exacerbation)",
  category: "respiratory",
  oneLiner: "Pathophysiology of dynamic hyperinflation, auto-PEEP hemodynamics, stepped acute pharmacotherapy, and ventilator mechanics in status asthmaticus.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapter on Severe Asthma and Status Asthmaticus in the ICU",
    },
    {
      title: "Nunn and Eger's Applied Respiratory Physiology",
      edition: "9th Edition, 2020",
    },
  ],
  currentStatus: "Current as of the 2026 GINA Strategy Report and international neurocritical/respiratory consensus on status asthmaticus management.",
  otherReferences: [
    "Global Initiative for Asthma. 2026 GINA Strategy Report.",
    "Tuxen DV. Detrimental effects of positive end-expiratory pressure during controlled mechanical ventilation of patients with severe airflow obstruction. Am Rev Respir Dis. 1989;140(1):5-9.",
    "Leatherman J. Mechanical ventilation for severe asthma. Chest. 2015;147(6):1671-1680.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "hypercapnic-respiratory-failure", label: "Obstructive ventilatory failure physiology" },
    { type: "differential", targetId: "copd-exacerbation", label: "Fixed vs reversible dynamic airflow obstruction" },
    { type: "treated-with", targetId: "mechanical-ventilation", label: "Protective low-rate, prolonged-expiration mechanical ventilation" },
    { type: "complication", targetId: "pneumothorax", label: "Barotrauma from dynamic hyperinflation" },
    { type: "related-to", targetId: "obstructive-shock", label: "Tension pneumothorax and auto-PEEP cardiac tamponade physiology" },
    { type: "related-to", targetId: "acid-base-disorders", label: "Mixed severe lactic and respiratory acidosis" },
  ],
  sections: [
    {
      id: "asthma.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "asthma-guideline-gina-2023",
          relevance: "GINA 2023 Global Strategy for Asthma Management and Prevention"
        },
        {
          kind: "systematic-review",
          id: "asthma-mgso4-meta-analysis",
          relevance: "Systematic review and meta-analysis of IV magnesium sulfate in acute severe asthma"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Severe acute asthma (status asthmaticus) is a critical medical emergency characterized by progressive bronchospasm, dynamic hyperinflation, and impending respiratory muscle arrest.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Status asthmaticus represents severe, life-threatening bronchospasm and airway inflammation that fails to respond promptly to initial short-acting bronchodilator and corticosteroid therapy. In the ICU, the primary objectives are rapid reversal of airflow obstruction, alleviation of severe work of breathing, and rigorous prevention of dynamic hyperinflation (auto-PEEP), which can cause fatal tension pneumothorax or pulseless electrical activity (PEA) cardiac arrest.",
        },
        {
          type: "paragraph",
          text: "Managing near-fatal asthma requires an aggressive, multi-tiered pharmacologic escalation ladder combined with a highly specialized mechanical ventilation strategy (low respiratory rate, high inspiratory flow, prolonged expiratory time, and permissive hypercapnia) that directly counters obstructive respiratory mechanics.",
        },
      ],
    },
    {
      id: "asthma.physiology",
      kind: "physiology",
      title: "Physiology of Airflow Obstruction, Dynamic Hyperinflation, & Auto-PEEP",
      summary: "Pathophysiologic cascade: bronchospasm, mucus plugging, dynamic airway compression, gas trapping, and auto-PEEP-induced hemodynamic collapse.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "The fundamental derangement in status asthmaticus is severe diffuse narrowing of small and medium conducting airways driven by a combination of smooth muscle constriction, extensive mucosal edema, and tenacious intraluminal mucus plugging. This causes an exponential increase in airway resistance (Raw = [Ppeak - Pplat] / Flow; normal < 5 cmH2O/L/s; in severe asthma often > 20–40 cmH2O/L/s).",
        },
        {
          type: "paragraph",
          text: "Dynamic Hyperinflation & Auto-PEEP: Due to extreme expiratory resistance and dynamic compression of intrathoracic airways during active expiration, the time constant of the respiratory system (τ = Resistance × Compliance) is markedly prolonged. If the next inspiratory cycle begins before complete exhalation of the preceding tidal volume, air is progressively trapped in the alveoli breath by breath. Alveolar pressure remains positive at end-expiration (intrinsic PEEP / auto-PEEP), elevating Functional Residual Capacity (FRC) far above normal resting volume.",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Work of Breathing Impact",
              value: "Hyperinflated lungs operate on the flat, non-compliant upper portion of the pressure-volume curve. Furthermore, to initiate inspiratory flow, the patient must generate negative pleural pressure exceeding auto-PEEP before any fresh gas moves into the airway (threshold load).",
            },
            {
              label: "Hemodynamic Compromise",
              value: "High end-expiratory alveolar pressures and increased intrathoracic volume compress the vena cava and right atrium, drastically diminishing venous return (preload). Simultaneously, pulmonary vascular resistance (PVR) increases due to alveolar vessel compression, increasing RV afterload. The resulting interventricular septal shift restricts left ventricular diastolic filling, dropping stroke volume and producing pulsus paradoxus (> 10–12 mmHg drop in systolic BP during inspiration).",
            },
            {
              label: "Gas Exchange Derangements",
              value: "Severe V/Q mismatch generates profound hypoxemia (elevated A-a gradient). Initially, hyperventilation drives hypocapnia (PaCO2 25–30 mmHg). As respiratory muscles exhaust, alveolar ventilation plummets, precipitating acute severe respiratory acidosis.",
            },
          ],
        },
      ],
    },
    {
      id: "asthma.clinical-presentation",
      kind: "clinical-presentation",
      title: "Clinical Presentation, Severity Grading, & The 'Silent Chest'",
      summary: "Recognizing physical signs of severe versus life-threatening asthma and identifying imminent diaphragmatic exhaustion.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "Severe Exacerbation",
              value: "Inability to speak in full sentences; respiratory rate > 30 breaths/min; heart rate > 120 bpm; accessory muscle use (sternocleidomastoid retractions); pulsus paradoxus 10–25 mmHg; Peak Expiratory Flow (PEF) < 50% predicted or personal best; PaO2 < 60 mmHg on room air.",
            },
            {
              label: "Life-Threatening / Near-Fatal",
              value: "Silent chest on auscultation (airflow insufficient to generate wheezing); cyanosis; feeble respiratory effort; thoracoabdominal paradoxical breathing; altered mentation / confusion / lethargy; pulsus paradoxus > 25 mmHg or disappearing due to severe hypotension/fatigue; PaCO2 ≥ 42–45 mmHg with acidemia (pH < 7.35); PEF < 33% or unmeasurable.",
            },
          ],
        },
        {
          type: "callout",
          tone: "caution",
          text: "The 'Pseudonormal' PaCO2 Trap: A PaCO2 of 40 mmHg in an asthmatic breathing at 35 breaths/min is NOT normal — it is an ominous harbinger of acute diaphragmatic exhaustion and imminent respiratory arrest.",
        },
      ],
    },
    {
      id: "asthma.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Evaluation & Laboratory Monitoring",
      summary: "Arterial blood gases, lactate monitoring (distinguishing Type A vs Type B lactic acidosis), bedside imaging, and ECG findings.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            "Arterial Blood Gas (ABG): Track the trajectory of PaCO2 and pH. A falling pH or rising PaCO2 mandates immediate ICU escalation.",
            "Lactate & Electrolytes: Severe lactic acidosis is common in status asthmaticus due to two mechanisms: (1) Type A lactic acidosis from extreme respiratory muscle work and tissue hypoperfusion; and (2) Type B lactic acidosis induced by high-dose beta-2 agonists (albuterol stimulates hepatic gluconeogenesis and glycogenolysis, accelerating pyruvate production). Check potassium closely (beta-agonists drive hypokalemia).",
            "Bedside Chest Radiography / Ultrasound: Obtain a chest X-ray to rule out pneumothorax, pneumomediastinum, lobar atelectasis from mucus plugging, or superimposed bacterial pneumonia.",
            "Electrocardiogram (ECG): Sinus tachycardia, right axis deviation, P-pulmonale, or transient right bundle branch block (RBBB) reflecting acute right ventricular strain.",
          ],
        },
      ],
    },
    {
      id: "asthma.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Severe Acute Wheezing & Respiratory Distress",
      summary: "Differentiate near-fatal asthma exacerbation from acute heart failure, foreign body aspiration, and vocal cord dysfunction.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Acute Cardiogenic Asthma: Left ventricular failure and elevated pulmonary capillary pressures causing peribronchial cuffing, wheezing, and orthopnea; POCUS shows B-lines and dilated IVC rather than hyperinflated lungs.",
          "Upper Airway Obstruction / Laryngeal Edema: Inspiratory stridor rather than expiratory wheeze; lack of response to bronchodilators.",
          "Inducible Laryngeal Obstruction (Vocal Cord Dysfunction): Paradoxical vocal cord adduction during inspiration; normal flow-volume loop on expiration.",
          "Tension Pneumothorax in Asthmatic: Sudden unilateral chest hyporesonance, absent breath sounds, and hemodynamic collapse during severe bronchospasm."
]
        }
      ]
    },
    {
      id: "asthma.management",
      kind: "management",
      title: "Stepped Pharmacotherapy & Acute ICU Resuscitation",
      summary: "Comprehensive multi-tiered medical management: continuous bronchodilators, systemic corticosteroids, IV magnesium, parenteral agents, ketamine, heliox, and volatile anesthetics.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Pharmacologic therapy must be deployed rapidly and in parallel to open obstructed airways and reduce inflammation:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Inhaled Short-Acting Beta-2 Agonists (SABA)",
              value: "Continuous nebulized albuterol (10–20 mg/hour via specialized large-volume nebulizer) or high-dose intermittent albuterol (5 mg every 20 minutes for 3 doses, then 2.5–5 mg every 1–2 hours).",
            },
            {
              label: "2. Inhaled Anticholinergics",
              value: "Ipratropium bromide 0.5 mg nebulized every 20 minutes for 3 doses combined with albuterol, then every 4–6 hours. Inhibits vagally mediated bronchoconstriction and reduces mucus secretion.",
            },
            {
              label: "3. Systemic Corticosteroids",
              value: "Administer immediately. Methylprednisolone 60–125 mg IV every 6 hours (or Dexamethasone 10–16 mg IV daily). Corticosteroids suppress eosinophilic/lymphocytic inflammation and upregulate down-regulated beta-2 receptors within 4–6 hours.",
            },
            {
              label: "4. Intravenous Magnesium Sulfate",
              value: "2 g IV infusion in 100 mL D5W or NS over 15–20 minutes. Inhibits voltage-gated calcium channels in bronchial smooth muscle, producing potent bronchodilation. Proven by meta-analyses to reduce hospital admission (OR 0.75) in severe acute asthma.",
            },
            {
              label: "5. Parenteral Beta-Agonists / Epinephrine",
              value: "When severe bronchospasm and mucus plugging prevent aerosolized medication from reaching distal airways: Epinephrine 0.3–0.5 mg IM (1:1000) every 20 minutes x 3 doses, or IV Epinephrine infusion (0.05–0.2 mcg/kg/min) / Terbutaline infusion (0.1–0.5 mcg/kg/min).",
            },
            {
              label: "6. Ketamine Infusion",
              value: "Dissociative anesthetic with potent bronchodilatory properties via endogenous catecholamine release and NMDA receptor antagonism. Dose: 1–2 mg/kg IV induction bolus, followed by continuous infusion of 0.5–2.0 mg/kg/hour.",
            },
            {
              label: "7. Heliox (Helium-Oxygen Mixture)",
              value: "80:20 or 70:30 He:O2 mixture. Helium's low density converts turbulent flow into laminar flow in medium airways, reducing the work of breathing and improving aerosol penetration. Requires FiO2 ≤ 0.30–0.40 to be effective.",
            },
            {
              label: "8. Inhaled Volatile Anesthetics",
              value: "Isoflurane or Sevoflurane administered via an ICU-compatible anesthetic-conserving device (e.g., AnaConDa / Mirus) as rescue therapy for refractory status asthmaticus. Potent direct smooth muscle relaxant.",
            },
          ],
        },
        {
          type: "callout",
          tone: "trial",
          text: "A Cochrane meta-analysis of 14 RCTs (N=1,769) demonstrated that IV Magnesium Sulfate significantly reduced hospital admissions in acute severe asthma (OR 0.75, 95% CI 0.60–0.92; NNT = 7) and significantly improved FEV1 and PEF.",
          evidenceId: "asthma-mgso4-meta-analysis",
        },
      ],
    },
    {
      id: "asthma.ventilation",
      kind: "management",
      title: "Invasive Mechanical Ventilation Strategy in Near-Fatal Asthma",
      summary: "Ventilator mechanics tailored to dynamic hyperinflation: low respiratory rate, high flow rates, low I:E ratio, permissive hypercapnia, and zero external PEEP.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Intubation in severe asthma is a high-risk procedure that should be performed by the most experienced clinician available. Rapid Sequence Intubation (RSI) should utilize Ketamine (1.5–2.0 mg/kg) and Rocuronium (1.2 mg/kg) or Succinylcholine (1.5 mg/kg), with pre-treatment fluid loading to mitigate post-intubation hypotension.",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Ventilator Mode",
              value: "Volume Control (VCV) or Pressure Control (PCV). Volume control allows precise monitoring of peak airway pressure (Ppeak) and static plateau pressure (Pplat).",
            },
            {
              label: "Tidal Volume (Vt)",
              value: "6–8 mL/kg predicted body weight (often 5–6 mL/kg PBW in severe hyperinflation) to minimize end-inspiratory alveolar volume.",
            },
            {
              label: "Respiratory Rate (RR)",
              value: "Set RR very low: 10–14 breaths/min (often 8–10 breaths/min initially). This provides an expiratory time (Te) of 4.0–6.0 seconds, allowing complete exhalation.",
            },
            {
              label: "Inspiratory Flow Rate & Waveform",
              value: "High peak inspiratory flow rate of 80–100 L/min using a square (constant) flow waveform. This shortens inspiratory time (Ti ≤ 0.6–0.8s) and achieves an I:E ratio of 1:4 to 1:5.",
            },
            {
              label: "Plateau Pressure (Pplat) Target",
              value: "Pplat must be kept < 30 cmH2O (measured via 0.5s end-inspiratory pause). Peak pressure (Ppeak) may reach 50–70 cmH2O due to high airway resistance and high flow; this high Ppeak is dissipated along the conducting airways and does NOT cause alveolar barotrauma as long as Pplat is safe.",
            },
            {
              label: "External PEEP (ZEEP / Low PEEP)",
              value: "Set external PEEP to 0–5 cmH2O (ZEEP). Unlike COPD (which has dynamic flow limitation with collapsible airways that benefit from PEEP matching), asthma involves diffuse narrowing throughout the bronchial tree. Adding external PEEP in asthma adds directly to auto-PEEP, worsening hyperinflation and hemodynamic collapse.",
            },
            {
              label: "Permissive Hypercapnia",
              value: "Accept arterial PaCO2 of 60–90 mmHg (pH ≥ 7.15–7.20) to avoid over-ventilation and gas trapping. Correct severe acidemia (pH < 7.10) with slow bicarbonate infusion or buffering if refractory myocardial depression occurs.",
            },
          ],
        },
        {
          type: "callout",
          tone: "caution",
          text: "The Emergency Apnea / Disconnection Maneuver: If a mechanically ventilated asthmatic develops acute hypotension, profound bradycardia, or PEA arrest, IMMEDIATELY DISCONNECT THE ENDOTRACHEAL TUBE FROM THE VENTILATOR CIRCUIT and compress the chest bilaterally to allow trapped gas to escape. If auto-PEEP was the cause, blood pressure and cardiac output will return within 30–60 seconds.",
        },
      ],
    },
    {
      id: "asthma.complications",
      kind: "complications",
      title: "Complications of Status Asthmaticus & Ventilatory Support",
      summary: "Disease-related, treatment-related, and ICU-acquired complications.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Disease-Related: Dynamic hyperinflation and auto-PEEP causing severe obstructive shock / PEA arrest; barotrauma (tension pneumothorax, pneumomediastinum, subcutaneous emphysema); acute cor pulmonale from severe pulmonary vasoconstriction and hyperinflation; severe mixed respiratory and metabolic lactic acidosis; mucus plugging with complete lobar collapse.",
            "Treatment-Related: Acute Quadriplegic Myopathy of Intensive Care (profound, prolonged flaccid quadriplegia resulting from the concurrent use of high-dose systemic corticosteroids and continuous neuromuscular blocking agents); severe hypokalemia and tachyarrhythmias from high-dose albuterol; systemic corticosteroid-induced hyperglycemia and acute psychosis; propofol infusion syndrome (PRIS) or ketamine emergence reactions.",
            "ICU-Related: Ventilator-associated pneumonia (VAP), line sepsis, post-traumatic stress disorder, and critical illness deconditioning.",
          ],
        },
      ],
    },
    {
      id: "asthma.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Life-saving clinical pearls and traps in severe asthma management.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Increasing the respiratory rate to treat respiratory acidosis in a ventilated asthmatic: Raising the RR shortens expiratory time, worsens auto-PEEP, further increases intrathoracic pressure, and can precipitate immediate PEA cardiac arrest.",
            "Panicking over high peak airway pressures (Ppeak > 50 cmH2O): Ppeak reflects resistive pressure of the endotracheal tube and large airways at high flow rates. Perform an end-inspiratory pause to check Plateau Pressure (Pplat); as long as Pplat is < 30 cmH2O, the alveoli are protected.",
            "Applying external PEEP to 'match' auto-PEEP in asthma: Unlike flow-limited COPD, asthma lacks dynamic waterfall collapse of peripheral airways; applying external PEEP in severe asthma causes 'PEEP on PEEP', elevating total alveolar pressure and worsening hyperinflation.",
            "Prolonged use of neuromuscular blocking agents (NMBAs) alongside high-dose steroids: This combination causes severe acute myopathy that can leave patients paralyzed and ventilator-dependent for months. Extinguish dyssynchrony with deep sedation and ketamine; limit NMBAs to < 24 hours.",
            "Failing to immediately disconnect the ventilator in sudden post-intubation collapse: Always disconnect the circuit and allow 30–60 seconds of passive exhalation before performing emergent needle decompression or cardiac compressions.",
          ],
        },
      ],
    },
    {
      id: "asthma.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Noninvasive ventilation and VV-ECMO in near-fatal asthma.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Noninvasive Positive Pressure Ventilation (NIV) in Severe Asthma: Unlike in COPD, where NIV is unequivocally supported by high-quality RCTs, evidence for NIV in acute severe asthma is limited and mixed. A cautious, short trial (1–2 hours) in cooperative patients with moderate-severe exacerbations may reduce work of breathing, but NIV must never delay intubation in life-threatening exhaustion, silent chest, or severe encephalopathy.",
        },
        {
          type: "paragraph",
          text: "Veno-Venous Extracorporeal Membrane Oxygenation (VV-ECMO): In refractory near-fatal status asthmaticus where lung compliance is extremely poor, Pplat exceeds 30–35 cmH2O despite low tidal volumes, or severe barotrauma (bilateral tension pneumothoraces / bronchopleural fistulas) prevents safe ventilation, VV-ECMO provides complete extracorporeal CO2 clearance and oxygenation, allowing lung rest while intense medical therapy clears bronchospasm and mucus plugs.",
        },
      ],
    },
  ],
};
