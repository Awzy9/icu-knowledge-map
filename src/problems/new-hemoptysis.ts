import type { ClinicalProblem } from "@/content-types";

export const newHemoptysis: ClinicalProblem = {
  id: "new-hemoptysis",
  slug: "new-hemoptysis",
  title: "New or Massive Hemoptysis",
  category: "respiratory",
  oneLiner: "Airway preservation and bleeding localization: non-massive vs massive hemoptysis (> 100–200 mL/hr), lateral decubitus positioning, isolation of the bleeding lung, and endovascular/bronchoscopic intervention.",
  relatedTopicIds: [
    "airway-management-rsi",
    "mechanical-ventilation",
    "pneumonia",
    "anticoagulation",
    "transfusion",
    "pulmonary-embolism",
  ],
  body: [
    {
      type: "paragraph",
      text: "Hemoptysis in the ICU ranges from mild blood-streaked sputum to catastrophic massive pulmonary hemorrhage (> 100–200 mL/hr or any rate threatening gas exchange). The critical rule of hemoptysis resuscitation is that patients die from asphyxiation and drowning in their own blood, not from exsanguination. Securing the airway, isolating the bleeding lung, and maintaining gas exchange in the unaffected lung take absolute priority over diagnostic workup.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Tracheo-Innominate Artery Fistula (in a patient with a surgical or percutaneous tracheostomy placed 1–3 weeks prior; presents with sentinel minor bleed followed by catastrophic exsanguination), ruptured pulmonary artery pseudoaneurysm (Rasmussen aneurysm in cavitary tuberculosis/abscess), and diffuse alveolar hemorrhage.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. RECOGNIZE & TRIAGE",
          value: "• Differentiate Hemoptysis vs Hematemesis vs ENT Bleeding: Hemoptysis produces bright red, frothy blood mixed with sputum (alkaline pH); hematemesis produces dark, acidic, coffee-ground blood mixed with food particles.\n• Severity Classification:\n  - Massive / Life-Threatening: > 100–200 mL in 1 hour (or > 600 mL in 24 hours), or any volume causing acute hypoxemia, airway obstruction, or hemodynamic instability.\n  - Non-Massive: Blood-tinged sputum or sub-massive bleeding without gas exchange impairment.",
        },
        {
          label: "2. IMMEDIATE STABILIZATION & POSITIONING",
          value: "• Patient Positioning: Position the patient in the Lateral Decubitus Position with the BLEEDING SIDE DOWN (dependent). This uses gravity to contain blood within the diseased lung, preventing spillover into the healthy lung and preserving gas exchange.\n• High-Flow Oxygen / Suctioning: Administer 100% FiO2 and perform continuous large-bore oral/tracheal suctioning.",
        },
        {
          label: "3. DEFINITIVE AIRWAY MANAGEMENT",
          value: "• Intubation Strategy: If massive hemoptysis is present, intubate promptly with a Large-Bore Endotracheal Tube (≥ 8.0–8.5 mm internal diameter). A large tube is mandatory to allow passage of therapeutic flexible bronchoscopes, suction catheters, and endobronchial blockers.\n• Lung Isolation Options:\n  - Right/Left Mainstem Selective Intubation (advancing standard single-lumen ETT over a bronchoscope into the non-bleeding main bronchus).\n  - Endobronchial Blocker (e.g. Arndt or Cohen blocker placed through ETT under bronchoscopic guidance into the bleeding lobar/main bronchus with balloon inflation).\n  - Double-Lumen Endobronchial Tube (DLT): Provides definitive isolation but is technically challenging to place in active bleeding and limits suction lumen diameter.",
        },
        {
          label: "4. DIFFERENTIAL DIAGNOSIS",
          value: "• Airway & Bronchial Circulation (90% of massive bleeds): Bronchiectasis, bronchogenic carcinoma, chronic bronchitis, tracheo-innominate fistula, airway trauma/suctioning.\n• Pulmonary Parenchyma & Infections: Cavitary tuberculosis, necrotizing bacterial pneumonia, lung abscess, invasive aspergillosis (mycetoma).\n• Pulmonary Vascular (Low-pressure, high-flow): Pulmonary embolism with pulmonary infarction, pulmonary arteriovenous malformation (AVM), pulmonary artery catheter balloon rupture.\n• Autoimmune / Capillary: Diffuse Alveolar Hemorrhage (ANCA-associated vasculitis, anti-GBM / Goodpasture disease, systemic lupus erythematosus).",
        },
        {
          label: "5. INITIAL INVESTIGATIONS & INTERVENTIONS",
          value: "• Emergent Flexible Bronchoscopy: Localize the site of bleeding, clear obstructing blood clots, apply cold saline lavages, topical vasoconstrictors (dilute epinephrine 1:20,000 or tranexamic acid 500–1000 mg instillation), and position an endobronchial blocker.\n• CT Angiography of the Chest (CTA): The gold standard for identifying bronchial and non-bronchial systemic arterial sources once the airway is secured.\n• Coagulation Screen & Reversal: Check CBC, PT/INR, aPTT, fibrinogen; immediately reverse any active anticoagulants (heparin, DOACs, warfarin).",
        },
        {
          label: "6. DEFINITIVE SOURCE CONTROL",
          value: "• Bronchial Artery Embolization (BAE): The first-line definitive procedure for massive hemoptysis (catheter embolization of hypertrophied bronchial arteries via interventional radiology; achieves > 85–90% immediate hemostasis).\n• Emergent Thoracic Surgery: Indicated for refractory bleeding failing embolization, tracheo-innominate fistula, or trauma (lobectomy/pneumonectomy).",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Placing the patient in the supine position or bleeding-side UP. This allows blood to drain across the carina into the healthy lung, causing asphyxiation within minutes.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Difficult Airway: Large-bore ETT placement, video laryngoscopy, and lung isolation.\n• Mechanical Ventilation: High-flow suctioning, PEEP titration, and lung-protective ventilation in uninjured lung.\n• Transfusion: Restrictive vs massive transfusion protocol triggers.\n• Anticoagulation: Immediate reversal protocols for heparin, warfarin, and DOACs.\n• Pneumonia: Necrotizing parenchymal infections and cavitary lung disease.",
        },
      ],
    },
  ],
};
