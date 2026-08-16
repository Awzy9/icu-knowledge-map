import type { ClinicalProblem } from "@/content-types";

export const acuteRespiratoryDistress: ClinicalProblem = {
  id: "acute-respiratory-distress",
  slug: "acute-respiratory-distress",
  title: "Acute Severe Respiratory Distress",
  category: "respiratory",
  oneLiner: "Bedside management of the gasping, tachypneic patient: work-of-breathing assessment, accessory muscle use, P-SILI prevention, and timely intubation vs noninvasive support.",
  relatedTopicIds: [
      "hypoxemic-respiratory-failure",
      "hypercapnic-respiratory-failure",
      "respiratory-failure-basics",
      "ards",
      "asthma",
      "copd-exacerbation",
      "airway-management-rsi",
      "cardiogenic-pulmonary-edema",
      "critical-illness-nutrition"
    ],
  body: [
    {
      type: "paragraph",
      text: "Acute severe respiratory distress is characterized by severe tachypnea (respiratory rate > 30–35 bpm), vigorous accessory muscle recruitment, sternocleidomastoid retractions, nasal flaring, and abdominal paradox. It indicates that the patient's ventilatory demand exceeds their neuromuscular capacity. Bedside triage requires identifying impending respiratory arrest, distinguishing upper from lower airway emergencies, and preventing Patient Self-Inflicted Lung Injury (P-SILI).",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Acute upper airway obstruction (laryngeal edema, expanding neck hematoma, foreign body), acute severe asthma with silent chest, impending respiratory arrest from muscle exhaustion, and SCAPE flash pulmonary edema.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. RECOGNIZE",
          value: "• Work of Breathing Signs: Sternocleidomastoid and intercostal retractions, tracheal tug, diaphoresis, inability to speak in full sentences (1–2 word dyspnea), and thoracoabdominal paradox (inward movement of abdominal wall during inspiration indicating diaphragmatic exhaustion).\n• Vital Signs: Severe tachypnea (> 35 bpm) or ominous bradypnea (< 10 bpm), tachycardia, hypertension or impending hypotension.",
        },
        {
          label: "2. IMMEDIATE DANGER SCREEN",
          value: "• Upper Airway Stridor: Inspiratory stridor indicates critical extrathoracic airway narrowing (edema, hematoma, tumor); mandates immediate expert airway preparation.\n• Silent Chest: In severe asthma, absence of wheezing accompanied by exhaustion and lethargy indicates zero air movement and imminent cardiopulmonary arrest.\n• Progressive Encephalopathy: Agitation progressing to somnolence indicates critical hypercapnia or severe cerebral hypoxia.",
        },
        {
          label: "3. STABILIZE",
          value: "• Positioning: Sit the patient fully upright (optimizes diaphragm excursion and FRC).\n• High-Flow Nasal Cannula (HFNC): Initiate at 50–60 L/min and 100% FiO2 to reduce work of breathing, wash out dead space, and generate dynamic PEEP.\n• Noninvasive Ventilation (NIV / BiPAP): If acute cardiogenic pulmonary edema (CPAP 8–12 cmH2O) or acute COPD exacerbation (IPAP 12–16, EPAP 4–6 cmH2O) is present.\n• Urgent Bronchodilator / Vasodilator Therapy: Continuous nebulized albuterol for bronchospasm; high-dose IV nitrates for SCAPE.",
        },
        {
          label: "4. DIFFERENTIAL BY CLINICAL PRESENTATION",
          value: "• Upper Airway: Laryngeal edema (post-extubation or anaphylaxis), retropharyngeal abscess, expanding neck hematoma, vocal cord paralysis.\n• Lower Airway / Bronchospasm: Status asthmaticus, acute COPD exacerbation, massive mucus plugging, foreign body aspiration.\n• Alveolar Filling: Severe ARDS, bilateral pneumonia, cardiogenic flash pulmonary edema, diffuse alveolar hemorrhage.\n• Neuromuscular / Diaphragmatic: Guillain-Barré syndrome, Myasthenia Gravis crisis, severe hypophosphatemia, phrenic nerve injury.",
        },
        {
          label: "5. INITIAL INVESTIGATIONS",
          value: "• Immediate Bedside ABG: Evaluate oxygenation (P/F ratio) and ventilation (pH and PaCO2).\n• Bedside Lung Ultrasound (BLUE Protocol): Rapidly differentiate pneumothorax (absent sliding), interstitial edema (diffuse B-lines), and consolidation.\n• Bedside Echocardiography: Assess LV systolic function, mitral regurgitation, and IVC collapsibility.",
        },
        {
          label: "6. REASSESSMENT & ESCALATION",
          value: "• Continuous Monitoring of Work of Breathing: Assess whether respiratory rate drops to < 25 bpm and accessory muscle use abates within 30–60 minutes of noninvasive support.\n• Definitive Intubation Triggers: Proceed directly to endotracheal intubation if: (1) Lethargy or inability to cooperate; (2) Worsening thoracoabdominal paradox; (3) Severe acidemia (pH < 7.20–7.25); (4) Tidal volumes on NIV remain excessive (> 9–10 mL/kg PBW, driving P-SILI); or (5) Hemodynamic instability.",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Being falsely reassured by a 'normal' pulse oximetry reading (SpO2 96%) in a patient with severe tachypnea and accessory muscle use. High work of breathing consumes immense metabolic energy; when respiratory muscles fatigue, sudden catastrophic respiratory arrest occurs.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Hypoxemic Respiratory Failure: Escalation ladders, P-SILI physiology, and ROX index.\n• Hypercapnic Respiratory Failure: Ventilatory pump failure and NIV protocols.\n• Difficult Airway: Pre-oxygenation, induction agents, and rescue surgical airway algorithms.\n• Cardiogenic Pulmonary Edema: Nitrates, CPAP, and DOSE diuresis.\n• Asthma & COPD Exacerbation: Dynamic hyperinflation and bronchodilator strategies.",
        },
      ],
    },
  ],
};
