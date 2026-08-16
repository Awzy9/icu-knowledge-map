import type { Topic } from "@/content-types";

export const vap: Topic = {
  id: "vap",
  slug: "vap",
  title: "Ventilator-Associated Pneumonia (VAP)",
  category: "infectious-disease",
  oneLiner: "Quantitative lower tract sampling (ETA vs BAL), rapid multiplex PCR panels and stewardship interpretation, PK/PD extended beta-lactams, 7-day duration, and the SHEA prevention bundle.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Ventilator-Associated Pneumonia, Airway Management, and Hospital-Acquired Infections",
    },
    {
      title: "Kalil AC, et al. Management of Adults With Hospital-Acquired and Ventilator-Associated Pneumonia: 2016 Clinical Practice Guidelines by the IDSA and the ATS. Clin Infect Dis. 2016;63(5):e61-e111.",
    },
  ],
  currentStatus: "Current as of the 2016 ATS/IDSA HAP/VAP Guidelines, the 2022 SHEA/IDSA Strategies to Prevent VAE/VAP in Acute Care Hospitals, and modern rapid molecular pneumonia diagnostic guidelines.",
  otherReferences: [
    "Klompas M, et al. Strategies to prevent ventilator-associated pneumonia, ventilator-associated events, and nonventilator hospital-acquired pneumonia in acute-care hospitals: 2022 Update. Infect Control Hosp Epidemiol. 2022;43(6):687-713.",
    "CDC National Healthcare Safety Network (NHSN). Ventilator-Associated Event (VAE) Surveillance Protocol. 2024.",
    "Papazian L, et al. Formal guidelines: management of ventilator-associated pneumonia. Ann Intensive Care. 2020;10(1):157.",
    "Eckburg PB, et al. Multi-Center Evaluation of the BioFire FilmArray Pneumonia Panel for Lower Respiratory Tract Infections. J Clin Microbiol. 2020;58(7):e00236-20.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "mechanical-ventilation", label: "Invasive mechanical ventilation, artificial airway biofilm, and microaspiration" },
    { type: "complication", targetId: "septic-shock", label: "Leading cause of nosocomial septic shock in intubated patients" },
    { type: "related-to", targetId: "mdr-organisms", label: "High prevalence of resistant Gram-negative bacilli (Pseudomonas, Acinetobacter) and MRSA" },
    { type: "related-to", targetId: "hap", label: "Related nosocomial pneumonia occurring without invasive mechanical ventilation" },
    { type: "complication", targetId: "ards", label: "Secondary alveolar capillary barrier breakdown and severe hypoxemic failure" },
    { type: "related-to", targetId: "sepsis", label: "Nosocomial sepsis definitions, biomarkers, and resuscitation bundle" },
  ],
  sections: [
    {
      id: "vap.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "vap-guideline-idsa-ats-2016",
          relevance: "IDSA/ATS clinical guidelines on diagnosis, prevention, and 7-day antibiotic duration for VAP"
        },
        {
          kind: "trial",
          id: "vap-chastre-8day-trial",
          relevance: "Chastre landmark trial proving 8-day antibiotic course is equivalent to 15-day course in VAP"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Ventilator-Associated Pneumonia (VAP) is a nosocomial lung parenchymal infection arising ≥ 48 hours after endotracheal intubation, driven by biofilm colonization and continuous subglottic microaspiration, associated with prolonged ventilation and high ICU morbidity.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Ventilator-Associated Pneumonia (VAP) is the most common and lethal healthcare-associated infection in intensive care units, developing in 10% to 25% of all mechanically ventilated patients. The presence of an endotracheal tube (ETT) breaches upper airway anatomical defenses, impairs mucociliary clearance, facilitates bacterial biofilm formation on the plastic tube lumen, and allows continuous microaspiration of contaminated subglottic secretions pooled above the cuff.",
        },
        {
          type: "paragraph",
          text: "Management centers on: (1) Rapid microbiological lower respiratory sampling (ETA vs BAL) prior to initiating new antimicrobials; (2) Integration of rapid multiplex PCR panels for early targeted therapy and resistance gene detection; (3) Empiric broad-spectrum combination coverage optimized by PK/PD beta-lactam infusions; (4) Rapid de-escalation to a 7-day course once sensitivities are confirmed; and (5) Implementation of the evidence-based 2022 SHEA/IDSA VAP Prevention Bundle.",
        },
      ],
    },
    {
      id: "vap.diagnosis-microbiology",
      kind: "diagnosis",
      title: "Diagnostic Sampling, Quantitative Cultures & Rapid Multiplex PCR Panels",
      summary: "Clinical limitations, Endotracheal Aspirate (ETA) vs Bronchoalveolar Lavage (BAL) quantitative cutoffs, BioFire multiplex PCR panel interpretation, and colonization vs true infection.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Clinical criteria alone (fever, leukocytosis, purulent secretions, new infiltrates; e.g. the CPIS score) have poor specificity (~40–60%), as pulmonary atelectasis, fluid overload, ARDS progression, and pulmonary infarction closely mimic VAP. Objective lower tract microbiological sampling is mandatory before antimicrobial adjustments:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Endotracheal Aspirate (ETA) Quantitative Sampling",
              value: "Non-invasive in-line suction catheter passed via the ETT into the distal trachea. Quantitative Diagnostic Cutoff: ≥ 10^5 to 10^6 CFU/mL (or 3+/4+ semiquantitative growth with numerous polymorphonuclear leukocytes and intracellular bacteria). The 2016 ATS/IDSA guidelines recommend non-invasive ETA as the primary first-line sampling method due to diagnostic non-inferiority to bronchoscopy, lower cost, and zero risk of procedural hypoxemia.",
            },
            {
              label: "2. Bronchoalveolar Lavage (BAL) & Protected Specimen Brush (PSB)",
              value: "• BAL: Fiberoptic bronchoscopy wedged in the involved segmental bronchus with instillation of 100–150 mL sterile saline. Quantitative Cutoff: ≥ 10^4 CFU/mL.\n• PSB: Telescoping catheter brush sampling distal secretions. Quantitative Cutoff: ≥ 10^3 CFU/mL.\n• Indications: Equivocal ETA, clinical failure despite empiric therapy, suspicion of fungal/viral/opportunistic pathogens in immunocompromised hosts.",
            },
            {
              label: "3. Rapid Multiplex PCR Molecular Panels (e.g. BioFire FilmArray / Unyvero)",
              value: "• Targets: Direct molecular detection of 18–20 bacterial pathogens (Pseudomonas aeruginosa, Acinetobacter baumannii, Klebsiella pneumoniae, Enterobacter, MRSA) and 7 key resistance genes (mecA/C, blaKPC, blaNDM, blaOXA-48, blaVIM, blaIMP, blaCTX-M) from ETA or BAL in < 1 hour.\n• Semi-Quantitative Bins: Reports genomic copies from 10^4 to ≥ 10^7 copies/mL.",
            },
            {
              label: "4. CRITICAL RULE: Interpreting Molecular PCR Results (Colonization vs Infection)",
              value: "• Detection of bacterial DNA does NOT prove active invasive lung infection. ETT lumen biofilms contain high bacterial loads; PCR cannot distinguish innocent colonization or dead bacterial fragments from true invasive parenchymal pneumonia.\n• Clinical Integration: A positive PCR must always be correlated with clinical signs (purulent sputum, worsening PaO2/FiO2, rising procalcitonin) and quantitative semi-quantitative bins (≥ 10^6 copies/mL has higher clinical fidelity than 10^4).\n• Antimicrobial Stewardship & Early De-escalation: Multiplex PCR has a > 95–98% Negative Predictive Value. If the panel is negative for MRSA (mecA negative) and negative for Pseudomonas, anti-MRSA (Vancomycin) and aminoglycosides can be safely discontinued within hours of ICU admission.",
            },
            {
              label: "5. CDC Ventilator-Associated Event (VAE) Framework",
              value: "Objective surveillance framework replacing subjective clinical VAP:\n• VAC (Ventilator-Associated Condition): Baseline stability ≥ 2 days followed by ≥ 2 consecutive days of min PEEP increase ≥ 3 cmH2O or min FiO2 increase ≥ 0.20.\n• IVAC (Infection-related VAC): VAC + abnormal temperature or WBC count + new antimicrobial therapy started for ≥ 4 days.\n• Possible/Probable VAP: IVAC + purulent respiratory secretions and positive lower respiratory microbiology.",
            },
          ],
        },
      ],
    },
    {
      id: "vap.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Ventilator-Associated Deterioration",
      summary: "Differentiate true bacterial VAP from endotracheal colonization, ventilator-associated tracheobronchitis (VAT), and mucus plugging.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Ventilator-Associated Tracheobronchitis (VAT): Fever, purulent sputum, positive tracheal aspirate culture WITHOUT new or progressive lung infiltrates on chest imaging.",
          "Airway Colonization: Presence of MDR organisms in endotracheal aspirates without systemic signs of infection (normal temp, normal WBC, stable gas exchange).",
          "Acute Pulmonary Embolism in Ventilated Patient: Sudden unexplained hypoxemia or hypotension with clear/unchanged chest imaging.",
          "Ventilator-Induced Lung Injury (VILI): Worsening bilateral consolidations and compliance loss secondary to high driving pressure."
]
        }
      ]
    },
    {
      id: "vap.management",
      kind: "management",
      title: "Empiric Antimicrobial Regimens & PK/PD Beta-Lactam Dosing",
      summary: "Double anti-pseudomonal coverage, MRSA coverage, extended/continuous beta-lactam infusions, and 7-day short-course de-escalation.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Empiric coverage must cover Pseudomonas aeruginosa, enteric Gram-negative bacilli (Klebsiella, Enterobacter, Serratia, E. coli), and MRSA based on host risk factors and local ICU antibiograms:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Standard Empiric VAP Regimen (MDR Risk / High Mortality)",
              value: "1. Anti-Pseudomonal Beta-Lactam:\n   - Cefepime: 2.0 g IV q8h (extended 4-hr infusion)\n   OR\n   - Piperacillin-Tazobactam: 4.5 g IV q6h (extended 4-hr infusion)\n   OR\n   - Meropenem: 1.0 g IV q8h (extended 3-hr infusion, preferred in prior ESBL colonization or septic shock);\nPLUS\n2. Second Anti-Pseudomonal Agent (if MDR risk / unit resistance > 10%):\n   - Levofloxacin: 750 mg IV q24h (or Ciprofloxacin 400 mg IV q8h)\n   OR\n   - Amikacin: 15–20 mg/kg IV once daily (target peak 60–80 mcg/mL, trough < 5 mcg/mL);\nPLUS\n3. Anti-MRSA Agent (if unit MRSA prevalence > 10–20% or prior MRSA colonization):\n   - Vancomycin: Loading dose 25–30 mg/kg, maintenance 15–20 mg/kg q8–12h (target AUC24/MIC 400–600)\n   OR\n   - Linezolid: 600 mg IV q12h.",
            },
            {
              label: "Pharmacokinetic/Pharmacodynamic (PK/PD) Optimization",
              value: "Beta-lactams exhibit time-dependent killing (fT > MIC). In critically ill patients with augmented renal clearance (ARC) and high capillary volume of distribution, standard intermittent bolus dosing results in subtherapeutic troughs. Use Extended (3–4 hr) or Continuous 24-hour Infusions to maximize bactericidal target attainment (> 100% fT > MIC) and prevent emergence of secondary resistance.",
            },
            {
              label: "Short-Course 7-Day Duration Protocol & Clinical Exceptions",
              value: "• Standard Duration (2016 ATS/IDSA Guidelines): Strongly recommend a 7-day duration of antimicrobial therapy for patients with VAP who achieve clinical improvement, regardless of whether P. aeruginosa or non-fermenting Gram-negative bacilli are isolated (identical cure and mortality rates compared to 14 days, with significantly fewer superinfections and lower resistance).\n• Clinical Exceptions Requiring Extended Courses: Necrotizing pneumonia, lung abscess, parapneumonic empyema, cavitary disease, initial inappropriate empiric antimicrobial coverage, or underlying cystic fibrosis/severe structural lung disease.",
            },
          ],
        },
      ],
    },
    {
      id: "vap.prevention",
      kind: "management",
      title: "Evidence-Based VAP Prevention: The 2022 SHEA/IDSA Bundle",
      summary: "Head-of-bed elevation, subglottic secretion drainage, cuff pressure control, and sedation minimization protocols.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "The 2022 SHEA/IDSA Compendium provides rigorous evidence-based essential practices to prevent VAP and VAEs in the ICU:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Head-of-Bed (HOB) Elevation (30°–45°)",
              value: "Maintain patients in a 30°–45° semi-recumbent position unless medically contraindicated. Prevents gastroesophageal reflux and gravity-dependent microaspiration of gastric contents.",
            },
            {
              label: "2. Continuous / Intermittent Subglottic Secretion Drainage (SSD)",
              value: "Utilize specialized endotracheal tubes with a dorsal suction port above the cuff in patients expected to be ventilated > 48–72 hours. Continuously aspirates pooled colonized secretions, reducing VAP incidence by 45–50% and shortening duration of mechanical ventilation.",
            },
            {
              label: "3. Endotracheal Tube Cuff Pressure Management (20–30 cmH2O)",
              value: "Maintain continuous cuff pressures strictly between 20–30 cmH2O using a calibrated manometer. Pressures < 20 cmH2O allow microaspiration past cuff folds; pressures > 30 cmH2O cause tracheal mucosal ischemia, necrosis, and late subglottic stenosis.",
            },
            {
              label: "4. Daily Sedation Minimization & Paired SAT/SBT Protocols",
              value: "Pair daily spontaneous awakening trials (SAT) with spontaneous breathing trials (SBT) to accelerate extubation and minimize total ventilator days.",
            },
            {
              label: "5. Circuit & Humidifier Maintenance",
              value: "Change ventilator circuits only when visibly soiled or mechanically malfunctioning (never on a routine scheduled basis). Drain circuit condensation away from the patient's airway.",
            },
          ],
        },
      ],
    },
    {
      id: "vap.complications",
      kind: "complications",
      title: "ICU Complications & Treatment Failure",
      summary: "Multidrug-resistant superinfections, lung abscess/empyema, ARDS worsening, and tracheostomy complications.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Nosocomial Septic Shock & Multiorgan Failure: Sepsis-induced vasoplegia and acute kidney injury requiring vasopressors and CRRT.",
            "Necrotizing Pneumonia & Parapneumonic Empyema: Cavitary parenchymal destruction and pleural space infection, common with MRSA and Pseudomonas; mandates CT chest and chest tube thoracostomy drainage.",
            "Extubation Failure & Ventilator Dependency: Repeated failed weaning attempts secondary to diaphragmatic atrophy and unresolved pulmonary inflammation.",
            "Clostridioides difficile Colitis & MDR Colonization: Direct consequence of broad-spectrum antibiotic exposure; mitigated by aggressive 7-day de-escalation.",
          ],
        },
      ],
    },
    {
      id: "vap.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls in VAP Management",
      summary: "Critical mistakes to avoid in ventilator-associated pneumonia.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Treating bacterial colonization on PCR without clinical signs of infection: Biofilms on ETTs contain bacterial DNA; never escalate antibiotics based on a low-titer PCR result in an asymptomatic or extubating patient.",
            "Changing ventilator circuits routinely every few days: Routine circuit changes increase VAP rates by dislodging colonized condensate into the lower trachea; change circuits only when visibly soiled or broken.",
            "Prolonging antibiotic therapy beyond 7 days in responding patients: 14-day courses do not improve cure rates and significantly increase fungal superinfections and MDR emergence; stop therapy at 7 days if clinical stability is achieved.",
            "Failing to monitor ETT cuff pressures: Deflated cuffs (< 20 cmH2O) allow silent, continuous aspiration of subglottic secretions; check cuff pressure with a manometer every shift.",
            "Ordering routine surveillance tracheal aspirates without clinical symptoms: Tracheal colonization is universal in intubated patients; treating colonized aspirates breeds resistant pathogens without clinical benefit.",
          ],
        },
      ],
    },
    {
      id: "vap.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Routine Chlorhexidine Oral Care in Mechanically Ventilated Patients.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Chlorhexidine Oral Care in Non-Cardiac ICU Patients: While 0.12% Chlorhexidine gluconate oral rinses effectively reduce VAP in post-cardiac surgery patients, multiple large meta-analyses and the 2022 SHEA/IDSA compendium highlighted a concerning association between routine chlorhexidine oral care and increased all-cause mortality in general medical ICU patients (potentially from microaspiration of chemical mucosal irritants). Current guidelines recommend standard tooth-brushing with sterile water or sodium bicarbonate rather than routine chlorhexidine in general ICU populations.",
        },
      ],
    },
  ],
};
