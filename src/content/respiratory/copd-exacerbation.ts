import type { Topic } from "@/content-types";

export const copdExacerbation: Topic = {
  id: "copd-exacerbation",
  slug: "copd-exacerbation",
  title: "COPD Exacerbation (Acute & Severe)",
  category: "respiratory",
  oneLiner: "Pathophysiology of acute-on-chronic hypercapnia, controlled oxygen targets (88–92%), evidence-based NIV, and auto-PEEP matching mechanics.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapter on Chronic Obstructive Pulmonary Disease in the Intensive Care Unit",
    },
    {
      title: "West's Respiratory Physiology: The Essentials",
      edition: "11th Edition, 2021",
    },
  ],
  currentStatus: "Current as of the Global Initiative for Chronic Obstructive Lung Disease (GOLD 2026 Report) and the 2017 ERS/ATS Noninvasive Ventilation Guidelines.",
  otherReferences: [
    "Global Initiative for Chronic Obstructive Lung Disease. GOLD 2026 Global Strategy for Diagnosis, Management, and Prevention of COPD.",
    "Brochard L, et al. Noninvasive ventilation for acute exacerbations of chronic obstructive pulmonary disease. N Engl J Med. 1995;333(13):817-822.",
    "Austin MA, et al. Effect of high flow oxygen on mortality in chronic obstructive pulmonary disease patients in prehospital setting: randomised controlled trial. BMJ. 2010;341:c5462.",
    "Leuppi JD, et al. Short-term vs conventional glucocorticoid therapy in acute exacerbations of chronic obstructive pulmonary disease (REDUCE trial). JAMA. 2013;309(21):2223-2231.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "hypercapnic-respiratory-failure", label: "Ventilatory failure and dead space physiology" },
    { type: "differential", targetId: "cardiogenic-pulmonary-edema", label: "Hydrostatic left ventricular failure mimic" },
    { type: "differential", targetId: "pneumonia", label: "Parenchymal infective trigger and co-pathology" },
    { type: "differential", targetId: "asthma", label: "Reversible bronchospasm vs fixed emphysematous airflow limitation" },
    { type: "treated-with", targetId: "mechanical-ventilation", label: "Noninvasive bilevel PAP or invasive lung-protective mechanical ventilation" },
    { type: "complication", targetId: "pneumothorax", label: "Rupture of apical bullae or barotrauma" },
    { type: "related-to", targetId: "rv-failure", label: "Acute cor pulmonale and pulmonary hypertension exacerbation" },
  ],
  sections: [
    {
      id: "copd-exacerbation.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "copd-guideline-gold-2024",
          relevance: "GOLD 2024 Global Strategy for the Management of COPD"
        },
        {
          kind: "guideline",
          id: "hypercapnic-respiratory-failure-guideline-niv",
          relevance: "ERS/ATS clinical practice guideline on NIV for acute hypercapnic respiratory failure"
        },
        {
          kind: "trial",
          id: "copd-reduce-trial",
          relevance: "REDUCE landmark trial proving 5-day systemic steroids is non-inferior to 14 days"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Severe acute exacerbations of chronic obstructive pulmonary disease (AECOPD) present with acute-on-chronic gas-exchange failure, profound dynamic hyperinflation, and respiratory muscle exhaustion.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "An acute exacerbation of COPD (AECOPD) is characterized by an acute worsening of dyspnea, cough, sputum volume, and sputum purulence beyond normal day-to-day baseline variation. In the ICU, severe exacerbations present with life-threatening acute-on-chronic respiratory acidosis (pH < 7.35, PaCO2 > 50 mmHg), marked dynamic hyperinflation, and impending respiratory muscle fatigue.",
        },
        {
          type: "paragraph",
          text: "Noninvasive positive pressure ventilation (NIV / BiPAP) is the definitive, life-saving intervention for acute hypercapnic COPD exacerbations, reducing intubation rates by > 60% and hospital mortality by 50%. Medical therapy combines controlled oxygen titration (SpO2 88–92%), short-acting bronchodilators, a 5-day course of systemic corticosteroids (REDUCE trial), and targeted antibiotic therapy for purulent exacerbations.",
        },
      ],
    },
    {
      id: "copd-exacerbation.physiology",
      kind: "physiology",
      title: "Physiology: Flow Limitation, Hyperinflation, & Oxygen-Induced Hypercapnia",
      summary: "Mechanisms of dynamic airway collapse, auto-PEEP generation, and the three physiologic drivers of hypercapnic worsening with high-flow oxygen.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Dynamic Airway Compression & Equal Pressure Point: In healthy lungs, radial traction from alveolar elastic recoil maintains airway patency during exhalation. In emphysema, destruction of alveolar attachments and loss of elastic recoil cause the 'equal pressure point' (where intrapleural pressure equals intrabronchial pressure) to migrate upstream into small, non-cartilaginous bronchioles. During active expiration, positive pleural pressure compresses these unsupported airways, producing severe expiratory flow limitation.",
        },
        {
          type: "paragraph",
          text: "Dynamic Hyperinflation & Auto-PEEP: Because expiratory flow is severely capped, complete exhalation of tidal volume requires prolonged time. When the patient breathes rapidly, inspiration begins before lung volume returns to Functional Residual Capacity (FRC). Gas is progressively trapped, generating intrinsic PEEP (auto-PEEP). This flattens the diaphragm, shortens its sarcomeres, reduces its mechanical contractility, and imposes an inspiratory threshold load.",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Loss of Hypoxic Vasoconstriction (HPV)",
              value: "High FiO2 relieves hypoxic pulmonary vasoconstriction in poorly ventilated alveoli, redirecting pulmonary blood flow away from well-ventilated units to poorly ventilated units (V/Q worsening), dramatically increasing dead-space fraction (VD/VT). This is the dominant mechanism of oxygen-induced hypercapnia.",
            },
            {
              label: "2. The Haldane Effect",
              value: "Oxygenation of deoxygenated hemoglobin reduces hemoglobin's affinity for carbon dioxide, displacing CO2 from carbamino-hemoglobin into physical solution in plasma, acutely raising PaCO2 by 5–10 mmHg.",
            },
            {
              label: "3. Blunting of Hypoxic Ventilatory Drive",
              value: "In a subset of severe chronic CO2 retainers, peripheral carotid body chemoreceptors maintain minute ventilation. High FiO2 blunts this peripheral hypoxic drive, causing a minor, transient reduction in minute ventilation.",
            },
          ],
        },
        {
          type: "callout",
          tone: "caution",
          text: "Target SpO2 in COPD Exacerbation: Strictly titrate supplemental oxygen to maintain SpO2 88–92% (or PaO2 60–70 mmHg). The Austin et al. landmark RCT (BMJ 2010) proved that titrated oxygen targeting 88–92% reduced in-hospital mortality by 58% compared to unrestricted high-flow oxygen (mortality 4% vs 9%, p=0.02).",
        },
      ],
    },
    {
      id: "copd-exacerbation.clinical-presentation",
      kind: "clinical-presentation",
      title: "Clinical Presentation & The Anthonisen Diagnostic Criteria",
      summary: "Triad of cardinal symptoms, Anthonisen stratification for antibiotic therapy, and physical examination markers of respiratory failure.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "Anthonisen Type 1 (Severe)",
              value: "Presence of all 3 cardinal symptoms: (1) increased dyspnea, (2) increased sputum volume, and (3) increased sputum purulence. Antibiotic therapy is strongly indicated.",
            },
            {
              label: "Anthonisen Type 2 (Moderate)",
              value: "Presence of 2 of the 3 cardinal symptoms (must include increased sputum purulence to warrant antibiotics).",
            },
            {
              label: "Anthonisen Type 3 (Mild)",
              value: "Presence of 1 cardinal symptom plus at least one secondary feature (fever, sore throat, cough, wheeze). Antibiotics generally not indicated.",
            },
          ],
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Physical Exam: Pursed-lip breathing, barrel chest, use of sternocleidomastoid and scalene muscles, Hoover's sign (paradoxical inward movement of the lower lateral rib margins during inspiration due to diaphragmatic flattening).",
            "Signs of Impending Exhaustion: Thoracoabdominal paradox, rapid shallow breathing, asterixis (flapping tremor from CO2 retention), bounding pulses, flushed skin, progressive lethargy, and coma.",
          ],
        },
      ],
    },
    {
      id: "copd-exacerbation.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Evaluation & Differential Mimics",
      summary: "Arterial blood gas interpretation (acute vs chronic compensation), chest radiography, point-of-care ultrasound, and exclusion of heart failure and pulmonary embolism.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            "Arterial Blood Gas (ABG): Measure pH, PaCO2, and HCO3-. Differentiate acute uncompensated respiratory acidosis (pH < 7.35, normal HCO3-) from chronic compensated hypercapnia (elevated PaCO2, elevated HCO3- > 30 mEq/L, pH > 7.35) and acute-on-chronic decompensation (elevated PaCO2 and elevated HCO3-, but pH < 7.35).",
            "Chest Radiography: Essential to evaluate for triggers and complications: focal consolidation (pneumonia), apical pneumothorax (rupture of bullae), pulmonary vascular congestion and cardiomegaly (heart failure).",
            "Point-of-Care Thoracic Ultrasound (POCUS): Differentiate COPD (A-line pattern with lung sliding) from Acute Decompensated Heart Failure (bilateral B-profile / wet lung). Check for pneumothorax (absent sliding, lung point).",
            "Rule Out Pulmonary Embolism (PE): CT pulmonary angiography is indicated in patients presenting with worsening hypoxemia disproportionate to airway obstruction, syncope, pleuritic chest pain, or failure to improve with standard therapy.",
          ],
        },
      ],
    },
    {
      id: "copd-exacerbation.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Acute Respiratory Deterioration in COPD",
      summary: "Differentiate bacterial/viral COPD flare from acute pulmonary embolism, pneumothorax, and decompensated heart failure.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Acute Pulmonary Embolism in COPD: Present in up to 10-15% of unexplained acute COPD exacerbations; suspect with severe hypoxemia out of proportion to PaCO2 or absence of sputum purulence.",
          "Decompensated Heart Failure / SCAPE: Frequently coexists with severe COPD ('overlap syndrome'); POCUS lung ultrasound confirms B-lines and left atrial hypertension.",
          "Spontaneous Pneumothorax: Rupture of apical subpleural bullae causing sudden unilateral chest pain and acute ventilatory failure."
]
        }
      ]
    },
    {
      id: "copd-exacerbation.management",
      kind: "management",
      title: "Comprehensive Acute Medical Management",
      summary: "Bronchodilators, systemic corticosteroids (REDUCE trial protocol), and antimicrobial stewardship.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Inhaled Bronchodilators",
              value: "Nebulized Short-Acting Beta-2 Agonist (Albuterol 2.5–5.0 mg) combined with Short-Acting Muscarinic Antagonist (Ipratropium bromide 0.5 mg) every 1–4 hours as needed. Inhaled therapy reduces airway resistance and dynamic hyperinflation.",
            },
            {
              label: "2. Systemic Corticosteroids (REDUCE Protocol)",
              value: "Prednisone 40 mg PO daily (or IV Methylprednisolone 40 mg IV daily) for exactly 5 days. The landmark REDUCE Trial (Leuppi et al., JAMA 2013) proved that 5 days of systemic corticosteroids was non-inferior to 14 days for re-exacerbation rates and significantly reduced hospital stay.",
            },
            {
              label: "3. Antibiotic Therapy",
              value: "Indicated for Anthonisen Type 1, Type 2 with purulent sputum, or any patient requiring NIV/intubation. Duration: 5–7 days. First-line: Azithromycin 500 mg daily or Amoxicillin-Clavulanate 875/125 mg BID. If Pseudomonas risk factors are present (frequent hospitalizations, FEV1 < 30%, chronic oral steroids): Cefepime, Piperacillin-Tazobactam, or Levofloxacin.",
            },
            {
              label: "4. Venous Thromboembolism Prophylaxis",
              value: "Subcutaneous Enoxaparin (40 mg daily) or Unfractionated Heparin (5000 units TID) is mandatory for all hospitalized COPD exacerbation patients unless strictly contraindicated.",
            },
          ],
        },
      ],
    },
    {
      id: "copd-exacerbation.niv",
      kind: "management",
      title: "Noninvasive Ventilation (NIV) Protocol & Auto-PEEP Matching",
      summary: "First-line BiPAP settings, the physiologic concept of PEEP matching in expiratory flow limitation, and invasive ventilator management.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Noninvasive Positive Pressure Ventilation (NIV / Bilevel PAP) is the gold-standard, first-line ventilatory modality in AECOPD with acute hypercapnic respiratory acidosis (pH < 7.35, PaCO2 > 45 mmHg). A landmark trial by Brochard et al. (NEJM 1995) established that NIV reduced intubation rates from 74% to 26% and reduced in-hospital mortality from 29% to 9%.",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Initial NIV Settings",
              value: "IPAP 10–12 cmH2O, EPAP 4–5 cmH2O, FiO2 titrated to SpO2 88–92%. Titrate IPAP upward in steps of 2–3 cmH2O to achieve exhaled tidal volumes of 6–8 mL/kg PBW and a respiratory rate < 25 breaths/min.",
            },
            {
              label: "The Cascade Model of PEEP Matching",
              value: "In flow-limited COPD with dynamic airway collapse, setting EPAP (or external PEEP on a mechanical ventilator) to 70–80% of measured intrinsic auto-PEEP acts as a pneumatic stent across collapsed airways. It elevates downstream airway pressure up to the critical collapse point, reducing the negative inspiratory effort needed to trigger breaths without adding to end-expiratory alveolar pressure.",
            },
            {
              label: "Invasive Mechanical Ventilation Strategy",
              value: "If NIV fails: Intubate with low RR (10–14 bpm), high inspiratory flow (70–90 L/min) to achieve I:E ratio 1:3 to 1:5, tidal volume 6–8 mL/kg PBW, plateau pressure < 30 cmH2O, applied PEEP matched to 70–80% of auto-PEEP, and permissive hypercapnia (pH ≥ 7.20).",
            },
            {
              label: "NIV-Facilitated Weaning & Extubation",
              value: "In intubated COPD patients who fail a spontaneous breathing trial (SBT) purely due to respiratory muscle fatigue, early extubation directly to NIV reduces total ventilator days, VAP rates, and mortality.",
            },
          ],
        },
        {
          type: "callout",
          tone: "guideline",
          text: "Predictors of NIV Failure: Baseline arterial pH < 7.25, severe encephalopathy (GCS < 11), lack of improvement in pH and PaCO2 after 1–2 hours, severe tachypnea (> 35 bpm), and large air leaks around the mask.",
          evidenceId: "hypercapnic-respiratory-failure-guideline-niv",
        },
      ],
    },
    {
      id: "copd-exacerbation.complications",
      kind: "complications",
      title: "Complications of Acute COPD Exacerbation",
      summary: "Disease-related, treatment-related, and ICU-acquired complications.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Disease-Related: Acute cor pulmonale and decompensated right ventricular failure, acute respiratory arrest from muscle fatigue, secondary spontaneous pneumothorax from ruptured emphysematous bullae.",
            "Treatment-Related: Severe oxygen-induced hypercapnic coma from uncontrolled high FiO2; post-hypercapnic metabolic alkalosis from over-ventilation; barotrauma/pneumothorax from positive pressure ventilation; corticosteroid-induced hyperglycemia and secondary infections; facial pressure necrosis from prolonged NIV masks.",
            "ICU-Related: Ventilator-associated pneumonia (VAP), difficult weaning and prolonged tracheostomy dependence, ICU-acquired weakness, deep vein thrombosis.",
          ],
        },
      ],
    },
    {
      id: "copd-exacerbation.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical diagnostic and management traps in COPD exacerbation.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Administering 100% FiO2 via non-rebreather mask to a drowsy COPD patient: This eliminates hypoxic vasoconstriction and increases dead space, driving PaCO2 to > 90–100 mmHg; titrate oxygen to SpO2 88–92% with a Venturi mask or nasal cannula instead.",
            "Ventilating an intubated COPD patient down to a 'normal' PaCO2 of 40 mmHg: If baseline PaCO2 was 65 mmHg with HCO3- 36 mEq/L, forcing PaCO2 to 40 mmHg produces severe metabolic alkalosis (pH > 7.55), seizures, arrhythmias, and suppresses respiratory drive.",
            "Prescribing prolonged courses of systemic corticosteroids (e.g., 14–21 days): The REDUCE trial proved 5 days of steroids is non-inferior to 14 days and avoids unnecessary steroid-induced myopathy, hyperglycemia, and immunosuppression.",
            "Failing to recognize dynamic hyperinflation as the cause of post-intubation shock: Always perform an expiratory hold to measure auto-PEEP; if severe hypotension occurs, disconnect the circuit for 30–60 seconds to allow lung deflation.",
            "Delaying intubation in a patient clearly failing an NIV trial: Persisting with NIV beyond 2 hours in a patient with worsening acidosis and exhaustion leads to catastrophic emergency intubation with higher cardiac arrest rates.",
          ],
        },
      ],
    },
    {
      id: "copd-exacerbation.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Blood eosinophil-guided steroid therapy and High-Flow Nasal Cannula.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Blood Eosinophil-Directed Steroid Therapy: Emerging randomized trials suggest that patients presenting with AECOPD and low peripheral blood eosinophils (< 100 cells/uL or < 2%) derive minimal clinical benefit from systemic corticosteroids, while those with eosinophils ≥ 300 cells/uL show dramatic responses. Current guidelines recommend standard 5-day steroids for all hospitalized exacerbations, but biomarker-guided personalization is actively evolving.",
        },
        {
          type: "paragraph",
          text: "HFNC versus NIV in Mild-Moderate Acidosis: While NIV remains the gold-standard first-line therapy for acute respiratory acidosis, HFNC has demonstrated efficacy in patients who fail or cannot tolerate NIV masks, providing anatomical dead-space clearance and humidified gas without claustrophobia or facial skin breakdown.",
        },
      ],
    },
  ],
};
