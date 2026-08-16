import type { Topic } from "@/content-types";

export const hypercapnicRespiratoryFailure: Topic = {
  id: "hypercapnic-respiratory-failure",
  slug: "hypercapnic-respiratory-failure",
  title: "Hypercapnic Respiratory Failure",
  category: "respiratory",
  oneLiner: "Alveolar ventilation equations, acute vs chronic acid-base kinetics, neuromuscular 20/30/40 rule, and evidence-based noninvasive ventilation titration protocols.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Hypercapnic Respiratory Failure, Chronic Obstructive Pulmonary Disease, and Noninvasive Ventilation",
    },
    {
      title: "West's Respiratory Physiology: The Essentials",
      edition: "11th Edition, 2021",
    },
  ],
  currentStatus: "Current as of the 2017 ERS/ATS Noninvasive Ventilation Guideline, the 2022 ERS HFNC Guideline, and the 2024 GOLD Report.",
  otherReferences: [
    "Brochard L, et al. Noninvasive ventilation for acute exacerbations of chronic obstructive pulmonary disease. N Engl J Med. 1995;333(13):817-822.",
    "Rochwerg B, et al. Official ERS/ATS clinical practice guidelines: noninvasive ventilation for acute respiratory failure. Eur Respir J. 2017;50(2):1602426.",
    "Ozyilmaz E, et al. Timing of noninvasive ventilation failure: causes, risk factors, and potential remedies. BMC Pulm Med. 2014;14:19.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "respiratory-failure-basics", label: "Fundamental mechanics of ventilation, compliance, and resistance" },
    { type: "differential", targetId: "copd-exacerbation", label: "Primary obstructive disease with dynamic air trapping and auto-PEEP" },
    { type: "differential", targetId: "asthma", label: "Severe acute dynamic bronchospasm and high airway resistance" },
    { type: "treated-with", targetId: "mechanical-ventilation", label: "Bilevel NIV or invasive mechanical ventilation" },
    { type: "related-to", targetId: "acid-base-disorders", label: "Acute vs chronic respiratory acidosis compensation kinetics" },
    { type: "related-to", targetId: "altered-consciousness", label: "CO2 narcosis, asterixis, and hypercapnic encephalopathy" },
  ],
  sections: [
    {
      id: "hypercapnic-respiratory-failure.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "hypercapnic-respiratory-failure-guideline-niv",
          relevance: "ERS/ATS guideline on noninvasive ventilation in acute hypercapnic failure"
        },
        {
          kind: "guideline",
          id: "copd-guideline-gold-2024",
          relevance: "GOLD guideline recommendations on acute hypercapnic respiratory acidosis"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Type II respiratory failure represents a failure of the ventilatory pump, resulting in acute uncompensated or acute-on-chronic respiratory acidemia requiring prompt ventilatory unloading.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Acute Hypercapnic Respiratory Failure (Type II ARF, or ventilatory failure) is defined by an arterial carbon dioxide tension (PaCO2) > 45–50 mmHg with an accompanying acute respiratory acidemia (pH < 7.35). It represents a critical mismatch between the mechanical load placed on the respiratory system and the capacity of the neuromuscular ventilatory pump.",
        },
        {
          type: "paragraph",
          text: "In the ICU, determining whether hypercapnia is acute (uncompensated, dangerous acidemia), chronic (compensated with metabolic alkalosis, normal/near-normal pH), or acute-on-chronic dictates the urgency of intervention. Noninvasive positive-pressure ventilation (NIV) is the primary, life-saving evidence-based therapy that reduces endotracheal intubation rates and mortality.",
        },
      ],
    },
    {
      id: "hypercapnic-respiratory-failure.physiology",
      kind: "physiology",
      title: "The Alveolar Ventilation Equation & Dead Space Mechanics",
      summary: "Mathematical relationships governing PaCO2: metabolic CO2 production, minute ventilation, dead space fraction (VD/VT), and acute vs chronic compensation kinetics.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "The arterial partial pressure of carbon dioxide (PaCO2) is determined by the fundamental Alveolar Ventilation Equation: PaCO2 = (V̇CO2 × 0.863) / V̇A = (V̇CO2 × 0.863) / [V̇E × (1 - VD/VT)], where V̇CO2 is metabolic carbon dioxide production (mL/min), V̇A is alveolar ventilation (L/min), V̇E is total minute ventilation (tidal volume × respiratory rate), and VD/VT is the dead-space fraction.",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Increased CO2 Production (V̇CO2)",
              value: "Fever, severe sepsis, extensive burns, shivering, high-carbohydrate overfeeding (RQ rises to 1.0), thyroid storm, malignant hyperthermia. In healthy lungs, V̇A increases proportionally; in patients with limited ventilatory reserve, rising V̇CO2 triggers acute decompensation.",
            },
            {
              label: "2. Decreased Minute Ventilation (V̇E)",
              value: "Central drive depression (opioids, sedatives, brainstem stroke, central sleep apnea); neuromuscular pump failure (Guillain-Barré syndrome, myasthenia gravis, ALS, cervical spinal cord injury, critical illness myopathy); thoracic cage restriction (severe kyphoscoliosis, flail chest, morbid obesity).",
            },
            {
              label: "3. Increased Dead-Space Fraction (VD/VT)",
              value: "VD/VT = (PaCO2 - PĒCO2) / PaCO2 (Bohr-Enghoff equation). Normal VD/VT is 0.25–0.35. In severe emphysema, ARDS, massive pulmonary embolism, or dynamic hyperinflation with overdistended alveoli, VD/VT exceeds 0.60–0.70. Under these conditions, minute ventilation may be 12 L/min, but effective alveolar ventilation is insufficient.",
            },
            {
              label: "4. Acute vs Chronic Respiratory Acidosis Compensation Kinetics",
              value: "• Acute Hypercapnia: Hydration of CO2 produces H2CO3, yielding a modest acute increase in serum HCO3- (1 mEq/L rise per 10 mmHg increase in PaCO2; pH drops 0.08 per 10 mmHg PaCO2). Example: PaCO2 70, HCO3- 26, pH 7.16.\n• Chronic Hypercapnia: Renal proximal tubular reclamation and generation of HCO3- take 3–5 days to reach full compensation (HCO3- rises 3.5–4.0 mEq/L per 10 mmHg increase in PaCO2; pH drops only 0.03 per 10 mmHg PaCO2). Example: PaCO2 70, HCO3- 36, pH 7.34.\n• Acute-on-Chronic: High baseline HCO3- with acute acidemic drop in pH (e.g. PaCO2 85, HCO3- 36, pH 7.24).",
            },
          ],
        },
      ],
    },
    {
      id: "hypercapnic-respiratory-failure.neuromuscular",
      kind: "diagnosis",
      title: "Neuromuscular Respiratory Failure Assessment: The 20/30/40 Rule",
      summary: "Specific bedside pulmonary function testing to identify progressive neuromuscular respiratory muscle exhaustion before gas-exchange failure occurs.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "In neuromuscular disorders (Guillain-Barré syndrome, myasthenic crisis, ALS), arterial blood gas derangements and hypercapnia are very late signs that appear only when respiratory muscles are completely exhausted. Monitoring must rely on serial bedside mechanics:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Forced Vital Capacity (FVC)",
              value: "Normal is 50–60 mL/kg. FVC < 20 mL/kg indicates significant weakness; FVC < 15 mL/kg (or < 1.0 L in an adult) strongly predicts impending ventilatory failure and is a classic indication for elective intubation.",
            },
            {
              label: "Negative Inspiratory Force (NIF / MIP)",
              value: "Measures diaphragm inspiratory muscle strength. Normal is < -70 to -80 cmH2O. NIF > -30 cmH2O (less negative, e.g., -20 cmH2O) indicates severe diaphragm fatigue and inability to generate adequate inspiratory volume.",
            },
            {
              label: "Maximum Expiratory Pressure (MEP)",
              value: "Measures abdominal and intercostal strength required for cough and secretion clearance. Normal > +100 cmH2O. MEP < +40 cmH2O indicates poor cough and high risk of mucus plugging and aspiration.",
            },
            {
              label: "Single Breath Count Test",
              value: "Ask the patient to count aloud from 1 following a maximal inspiration (1 count per second). Counting to < 20 correlates with an FVC < 1.5 L; counting to < 10 correlates with an FVC < 1.0 L.",
            },
          ],
        },
        {
          type: "callout",
          tone: "caution",
          text: "The '20/30/40 Rule' as a Bedside Clinical Monitoring Aid: The 20/30/40 thresholds (FVC < 20 mL/kg, NIF/MIP > -30 cmH2O, MEP < 40 cmH2O) serve as crucial warning signals for progressive diaphragmatic exhaustion before arterial hypercapnia develops. They are clinical decision aids that must be integrated with the patient's overall work of breathing, bulbar weakness, and trajectory, rather than rigid standalone mandates for intubation.",
        },
      ],
    },
    {
      id: "hypercapnic-respiratory-failure.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Type 2 Hypercapnic Respiratory Failure",
      summary: "Anatomical taxonomy: Central respiratory drive depression vs neuromuscular pump failure vs increased load and dead space.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "1. Central Depression", value: "Sedative/opioid overdose, brainstem stroke, severe myxedema coma, central sleep apnea." },
            { label: "2. Neuromuscular Pump Failure", value: "Myasthenia gravis crisis, Guillain-Barré syndrome, ALS, high cervical spinal cord injury, severe hypophosphatemia, critical illness myopathy." },
            { label: "3. Increased Load & Dead Space", value: "Severe COPD exacerbation, dynamic hyperinflation with auto-PEEP, severe asthma, obesity hypoventilation syndrome." }
          ]
        }
      ]
    },
    {
      id: "hypercapnic-respiratory-failure.niv-protocol",
      kind: "management",
      title: "Noninvasive Positive Pressure Ventilation (NIV) Protocol & Titration",
      summary: "Indications, contraindications, physiological pressure titration (IPAP/EPAP), leak management, and intubation failure criteria.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Noninvasive Positive Pressure Ventilation (NIV / Bilevel PAP) is the gold-standard, first-line ventilatory support for acute hypercapnic respiratory failure:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Indications for NIV",
              value: "• Acute COPD Exacerbation: Respiratory acidosis (pH < 7.35 and PaCO2 > 45 mmHg) despite initial medical therapy (Grade A evidence; Brochard trial: reduces intubation by > 60% and lowers mortality).\n• Acute Cardiogenic Pulmonary Edema with hypercapnia.\n• Obesity Hypoventilation Syndrome (OHS) / Acute hypercapnic decompensation.\n• Chest Wall Deformity / Neuromuscular disease without severe bulbar dysfunction.\n• Post-Extubation Weaning Bridge in high-risk hypercapnic COPD patients.",
            },
            {
              label: "2. Contraindications to NIV",
              value: "• Absolute: Respiratory or cardiac arrest, severe facial trauma/burns, fixed upper airway obstruction.\n• Relative: Inability to protect airway or clear secretions, persistent vomiting/bowel obstruction (aspiration risk), severe unresuscitated shock/arrhythmias, and severe encephalopathy (exception: mild-moderate hypercapnic CO2 narcosis in COPD can receive a closely monitored trial of NIV with senior staff at the bedside).",
            },
            {
              label: "3. Physiological Pressure Titration Protocol",
              value: "• Initial Settings: Start Inspiratory Positive Airway Pressure (IPAP) at 10–12 cmH2O and Expiratory Positive Airway Pressure (EPAP) at 4–5 cmH2O (Pressure Support = IPAP - EPAP = 6–8 cmH2O).\n• Titration for Ventilation: Increase IPAP by 2 cmH2O increments every 15–30 minutes (up to 16–20 cmH2O) to target an exhaled tidal volume of 6–8 mL/kg PBW and reduce respiratory rate to < 25 bpm.\n• Titration for Oxygenation / Obstruction: Increase EPAP in 1–2 cmH2O increments (up to 8–10 cmH2O) to overcome intrinsic auto-PEEP (set EPAP to ~80% of auto-PEEP) or treat obstructive sleep apnea.\n• Oxygen Target: Set FiO2 to maintain SpO2 strictly between 88% and 92% in chronic hypercapnic COPD (avoiding hyperoxia-induced loss of hypoxic vasoconstriction and worsening V/Q mismatch).",
            },
            {
              label: "4. Monitoring & NIV Failure Triggers for Intubation",
              value: "• Check Arterial Blood Gas at exactly 1 to 2 hours after starting NIV.\n• Success Criteria: Normalizing pH (rise > 0.05), falling PaCO2, reduction in respiratory rate, and decreased accessory muscle use.\n• Mandatory Intubation Triggers: Worsening or unimproved acidemia (pH < 7.25) at 1–2 hours, worsening encephalopathy, patient exhaustion, inability to clear copious secretions, severe mask leak (> 30–40 L/min), or hemodynamic collapse.",
            },
          ],
        },
      ],
    },
    {
      id: "hypercapnic-respiratory-failure.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls in Hypercapnic Failure",
      summary: "Critical mistakes to avoid in managing acute ventilatory failure.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Over-oxygenating chronic COPD patients (SpO2 > 96%): Hyperoxia causes absorption atelectasis, reverses hypoxic pulmonary vasoconstriction in poorly ventilated units, and blunts hypoxic drive (the Haldane effect), precipitating severe CO2 narcosis; target SpO2 strictly 88–92%.",
            "Delaying intubation in a patient failing NIV at 2 hours: Persisting with NIV in a patient with worsening acidemia (pH < 7.25) or exhaustion leads to emergency arrest and increased mortality; intubate promptly.",
            "Waiting for hypercapnia before intubating in neuromuscular crisis: Patients with GBS or Myasthenia maintain normal ABGs through rapid shallow breathing until diaphragmatic collapse occurs; use the 20/30/40 rule (FVC < 20 mL/kg, NIF > -30) to guide elective intubation.",
            "Setting excessive Pressure Support on NIV (> 20 cmH2O): High inspiratory pressures cause gastric air insufflation (> 20–25 cmH2O overcomes lower esophageal sphincter pressure), vomiting, severe mask leaks, and patient-ventilator dyssynchrony.",
            "Relying on low-flow nasal cannulas in acute severe hypercapnic exacerbations: Low-flow oxygen does not offload the fatigued respiratory muscles; prompt application of bilevel NIV reduces the work of breathing and clears CO2.",
          ],
        },
      ],
    },
    {
      id: "hypercapnic-respiratory-failure.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "High-Flow Nasal Cannula (HFNC) vs NIV in Acute Hypercapnic Exacerbations.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "High-Flow Nasal Cannula (HFNC) in Hypercapnic Respiratory Failure: While Bilevel NIV remains the established first-line gold standard, recent randomized trials (such as the Hi-COPD trial) suggest that HFNC (at 40–50 L/min) is a safe and well-tolerated alternative in mild-moderate hypercapnic exacerbations (pH 7.30–7.35) or for patients who are claustrophobic and completely intolerant of NIV masks. However, NIV remains superior for severe acidemia (pH < 7.25).",
        },
      ],
    },
    {
      id: "hypercapnic-respiratory-failure.complications",
      kind: "complications",
      title: "Complications & Escalation Triggers",
      summary: "Structured recognition of CO2 narcosis coma, dynamic auto-PEEP collapse, and non-invasive ventilation failure.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Early / Life-Threatening", value: "CO2 narcosis with coma, severe acidemic ventricular arrhythmias (pH < 7.15), severe hemodynamic collapse from high intrinsic PEEP (auto-PEEP) impeding venous return." },
            { label: "Treatment-Related", value: "Post-hypercapnic metabolic alkalosis and hypokalemia from overly rapid mechanical ventilator blowing off of chronic compensatory bicarbonate; gastric insufflation and aspiration from NIV." },
            { label: "Late / Delayed", value: "Prolonged ventilator weaning failure and diaphragm atrophy." },
            { label: "Escalation Triggers", value: "Failure of Non-Invasive Ventilation (NIV) characterized by worsening encephalopathy, severe tachypnea, rising PaCO2 with worsening acidemia (pH < 7.20), or exhaustion -> Emergent Endotracheal Intubation." }
          ]
        }
      ]
    },
],
};
