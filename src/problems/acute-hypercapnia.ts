import type { ClinicalProblem } from "@/content-types";

export const acuteHypercapnia: ClinicalProblem = {
  id: "acute-hypercapnia",
  slug: "acute-hypercapnia",
  title: "Acute Hypercapnia & Ventilatory Failure",
  category: "respiratory",
  oneLiner: "Triaging rising PaCO2: distinguishing acute uncompensated acidemia from chronic compensation, identifying central vs pump vs dead-space failure, and titrating noninvasive ventilation.",
  relatedTopicIds: [
    "hypercapnic-respiratory-failure",
    "respiratory-failure-basics",
    "copd-exacerbation",
    "asthma",
    "mechanical-ventilation",
    "acid-base-disorders",
    "altered-consciousness",
  ],
  body: [
    {
      type: "paragraph",
      text: "Acute hypercapnia (arterial PaCO2 > 45–50 mmHg with acute acidemia pH < 7.35) represents a failure of the respiratory pump to eliminate metabolic carbon dioxide. In the ICU, the bedside challenge is determining whether hypercapnia is acute (uncompensated, immediately life-threatening), chronic (compensated with high baseline HCO3-, near-normal pH), or acute-on-chronic, while rapidly identifying the site of failure across the central drive, neuromuscular transmission, chest wall, and alveolar-capillary dead space.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Acute hypercapnic encephalopathy (CO2 narcosis with loss of airway protection), acute severe dynamic hyperinflation / auto-PEEP with tension arrest in asthma/COPD, and acute diaphragmatic paralysis in Guillain-Barré Syndrome or Myasthenia Gravis.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. RECOGNIZE",
          value: "• Clinical Manifestations: Asterixis (flapping tremor), somnolence, confusion, bounding peripheral pulses, warm flushed skin, headache, diaphoresis, and paradoxical abdominal breathing.\n• Arterial Blood Gas: Elevated PaCO2 with respiratory acidemia (acute: pH drops 0.08 per 10 mmHg PaCO2; chronic: pH drops only 0.03 per 10 mmHg PaCO2 due to renal bicarbonate retention).",
        },
        {
          label: "2. IMMEDIATE DANGER SCREEN",
          value: "• Severe Acidemia: Arterial pH < 7.20–7.25 causing direct myocardial depression, arrhythmias, and systemic vasodilation.\n• Airway Compromise: Severe hypercapnic narcosis (GCS < 8–9) or inability to clear copious bronchial secretions.\n• Tension Auto-PEEP: Expiratory flow limitation causing severe intrinsic PEEP (> 15 cmH2O), impeding venous return and dropping cardiac output.",
        },
        {
          label: "3. STABILIZE",
          value: "• Controlled Oxygenation: In chronic hypercapnic patients (COPD, OHS), target SpO2 strictly 88% to 92% (prevent hyperoxia-induced worsening of V/Q mismatch and Haldane effect).\n• Prompt Application of Bilevel Noninvasive Ventilation (NIV): Start IPAP 10–12 cmH2O, EPAP 4–5 cmH2O for acute COPD exacerbation with pH < 7.35.\n• Bronchodilator & Steroid Therapy: Continuous or frequent nebulized albuterol/ipratropium and IV corticosteroids for acute bronchospasm.",
        },
        {
          label: "4. DIFFERENTIAL BY ANATOMICAL SITE",
          value: "• Central Respiratory Drive Depression: Opioids, sedatives, brainstem stroke, central sleep apnea, severe hypothermia.\n• Neuromuscular Pump Failure: Guillain-Barré syndrome, Myasthenia Gravis crisis, Amyotrophic Lateral Sclerosis, critical illness myopathy/neuropathy, hypophosphatemia, severe hypokalemia.\n• Thoracic Cage / Chest Wall Restriction: Severe kyphoscoliosis, flail chest, morbid obesity (OHS), tight surgical dressings, severe abdominal compartment syndrome.\n• Airway & Dead Space Disease: Acute COPD exacerbation, status asthmaticus, severe emphysema, massive pulmonary embolism, excessive PEEP with alveolar overdistension (Zone 1).",
        },
        {
          label: "5. INITIAL INVESTIGATIONS",
          value: "• Serial ABGs: Evaluate initial pH/PaCO2 and check response at 1–2 hours after starting NIV.\n• Bedside Neuromuscular Mechanics: In suspected GBS/Myasthenia, check Forced Vital Capacity (FVC), Negative Inspiratory Force (NIF/MIP), and Maximum Expiratory Pressure (MEP). The 20/30/40 rule (FVC < 20 mL/kg, NIF > -30, MEP < 40) signals impending diaphragmatic exhaustion.\n• Auto-PEEP Measurement: In ventilated/NIV patients, perform end-expiratory occlusion to measure total PEEP and intrinsic PEEP.\n• Medication Review: Identify recent opioids, benzodiazepines, antiepileptics, or neuromuscular blocking agents.",
        },
        {
          label: "6. INTERPRETATION & ACTION",
          value: "• Responding to NIV: Rising pH (> 0.05 increase at 1h), falling PaCO2, decreased respiratory rate, and improved alertness; continue NIV titration.\n• Failing NIV: Persisting or worsening acidemia (pH < 7.25), worsening encephalopathy, exhaustion, or inability to clear secretions; proceed immediately to endotracheal intubation.",
        },
        {
          label: "7. REASSESSMENT & ESCALATION",
          value: "• Mandatory 1-to-2 Hour ABG: Re-evaluate arterial blood gas within 60–120 minutes of starting NIV.\n• Invasive Ventilation Strategy: If intubated for COPD/Asthma, prioritize adequate expiratory time (I:E ratio 1:3 or 1:4), low respiratory rate (10–14 bpm), and permissive hypercapnia (target pH > 7.20 rather than normal PaCO2) to avoid fatal dynamic hyperinflation.",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Waiting for arterial hypercapnia before recognizing respiratory muscle failure in neuromuscular patients (GBS, Myasthenia). Patients maintain normal PaCO2 through rapid shallow breathing until diaphragmatic collapse occurs abruptly; use serial bedside FVC/NIF testing to guide elective intubation.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Hypercapnic Respiratory Failure: Alveolar ventilation equation, acute vs chronic compensation kinetics, and NIV titration protocols.\n• COPD Exacerbation: Pharmacotherapy, NIV indications, and ventilator management.\n• Asthma: Dynamic hyperinflation, auto-PEEP, and permissive hypercapnia.\n• Mechanical Ventilation: Pressure support, flow triggering, and patient-ventilator synchrony.\n• Acid-Base Disorders: Henderson-Hasselbalch kinetics and mixed acid-base interpretation.",
        },
      ],
    },
  ],
};
