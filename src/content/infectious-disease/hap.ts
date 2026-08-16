import type { Topic } from "@/content-types";

export const hap: Topic = {
  id: "hap",
  slug: "hap",
  title: "Hospital-Acquired Pneumonia (HAP)",
  category: "infectious-disease",
  oneLiner: "Nosocomial pneumonia developing ≥ 48 hours after admission in non-ventilated patients, host and antibiogram MDR risk tailoring, nasal MRSA PCR screening, and 7-day de-escalation.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapter on Nosocomial Pneumonia in the ICU",
    },
    {
      title: "Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases",
      edition: "9th Edition, 2020",
    },
  ],
  currentStatus: "Current as of the 2016 ATS/IDSA Hospital-Acquired and Ventilator-Associated Pneumonia Guidelines and the 2024 IDSA Antimicrobial Resistance Guidance.",
  otherReferences: [
    "Kalil AC, et al. Management of Adults With Hospital-Acquired and Ventilator-Associated Pneumonia: 2016 Clinical Practice Guidelines by the IDSA and the ATS. Clin Infect Dis. 2016;63(5):e61-e111.",
    "Torres A, et al. International ERS/ESICM/ESCMID/ALAT guidelines for the management of hospital-acquired pneumonia and ventilator-associated pneumonia. Eur Respir J. 2017;50(3):1700582.",
    "Smith MN, et al. Assessment of nasal methicillin-resistant Staphylococcus aureus (MRSA) PCR for pneumonia: a meta-analysis. Clin Infect Dis. 2020;71(5):e40-e47.",
  ],
  relationships: [
    { type: "differential", targetId: "pneumonia", label: "Differentiated from community-acquired pneumonia by hospital flora and MDR risks" },
    { type: "related-to", targetId: "vap", label: "Nosocomial counterpart occurring without invasive mechanical ventilation at onset" },
    { type: "related-to", targetId: "mdr-organisms", label: "Stratification for MRSA and multidrug-resistant Gram-negatives" },
    { type: "complication", targetId: "septic-shock", label: "Progression to severe nosocomial vasoplegic shock" },
    { type: "complication", targetId: "ards", label: "Direct secondary pulmonary capillary permeability injury" },
    { type: "related-to", targetId: "sepsis", label: "Hospital-acquired sepsis recognition and organ dysfunction scoring" },
  ],
  sections: [
    {
      id: "hap.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "vap-guideline-idsa-ats-2016",
          relevance: "IDSA/ATS clinical guidelines on empiric antipseudomonal/MRSA coverage and 7-day duration for HAP"
        },
        {
          kind: "trial",
          id: "vap-chastre-8day-trial",
          relevance: "Chastre trial supporting short-course 7-8 day antimicrobial therapy in hospital-acquired pneumonia"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Hospital-Acquired Pneumonia (HAP) is an acute lower respiratory tract infection developing ≥ 48 hours after hospital admission in patients who were not mechanically ventilated at the time of onset, carrying high ICU admission and mortality rates.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Hospital-Acquired Pneumonia (HAP, non-ventilator hospital-acquired pneumonia) is the second most common nosocomial infection in hospitalized patients and the leading cause of death from hospital-acquired infections (crude mortality 20–40%). In non-ventilated ward patients admitted to the ICU for decompensation, microaspiration of colonized oropharyngeal secretions containing hospital flora and multidrug-resistant (MDR) pathogens drives the infection.",
        },
        {
          type: "paragraph",
          text: "Approximately 30% to 50% of HAP patients who deteriorate and require ICU admission progress to acute respiratory failure requiring invasive mechanical ventilation (transitioning to VAP-like management). Effective critical care therapy requires: (1) Systematic stratification for MDR pathogens and mortality risk; (2) Tailoring empiric regimens to host risk, prior colonization, and local unit antibiograms (avoiding rigid one-size-fits-all regimens); (3) Nasal MRSA PCR screening to enable rapid de-escalation; and (4) Strict adherence to a 7-day total antimicrobial duration.",
        },
      ],
    },
    {
      id: "hap.microbiology-risk",
      kind: "physiology",
      title: "Microbiology, Host Risk Stratification & MDR Risk Logic",
      summary: "Core nosocomial pathogens, the 5 cardinal MDR risk factors, non-pseudomonal vs pseudomonal tailoring, and nasal MRSA screening.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Hospital microflora differs fundamentally from community pathogens, dominated by enteric Gram-negative bacilli and resistant staphylococci:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Core Nosocomial Pathogens",
              value: "• Gram-Negative Bacilli: Pseudomonas aeruginosa, Klebsiella pneumoniae, Enterobacter cloacae, Escherichia coli, Serratia marcescens, Acinetobacter baumannii, and Stenotrophomonas maltophilia.\n• Gram-Positive Cocci: Staphylococcus aureus (Methicillin-Resistant S. aureus [MRSA] and Methicillin-Susceptible S. aureus [MSSA]), Streptococcus pneumoniae.",
            },
            {
              label: "2. The 5 Cardinal Risk Factors for MDR Pathogens in HAP",
              value: "1. Prior intravenous antibiotic use within the past 90 days (the single strongest predictor of MDR Gram-negative and MRSA infection).\n2. Septic shock at the time of pneumonia presentation.\n3. Need for mechanical ventilation (invasive or non-invasive) or HFNC due to HAP.\n4. Hospital length of stay ≥ 5 days prior to pneumonia onset.\n5. High local unit prevalence (> 20%) of MRSA or (> 10%) Gram-negative resistance among isolates.",
            },
            {
              label: "3. Structural Lung Disease & Colonization History",
              value: "Patients with underlying bronchiectasis, cystic fibrosis, or severe COPD with frequent exacerbations have high baseline rates of chronic P. aeruginosa colonization, mandating immediate double anti-pseudomonal coverage even in the absence of prior recent IV antibiotics.",
            },
            {
              label: "4. Rapid Nasal MRSA PCR Screening",
              value: "Perform nasal MRSA PCR upon ICU admission. A negative nasal MRSA PCR has a 96% to 99% Negative Predictive Value (NPV) for MRSA pneumonia in HAP/VAP cohorts, allowing confident discontinuation of empiric Vancomycin or Linezolid within 24–48 hours, significantly reducing drug-induced nephrotoxicity.",
            },
          ],
        },
      ],
    },
    {
      id: "hap.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Protocol & Microbiological Sampling",
      summary: "Clinical diagnostic criteria, non-invasive sputum sampling, blood cultures, and ruling out non-infectious mimics.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Clinical diagnosis requires a new or progressive radiographic infiltrate PLUS at least two of the following: (1) Fever > 38.0°C or hypothermia < 36.0°C; (2) Leukocytosis (> 12,000/uL) or leukopenia (< 4,000/uL); (3) Purulent sputum/secretions; (4) Worsening hypoxemia (falling PaO2/FiO2 or rising oxygen requirement).",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Obtain Lower Respiratory Sputum Sample: Obtain spontaneous expectorated sputum, induced sputum, or deep nasotracheal suction before antibiotic initiation. Gram stain showing > 25 PMNs and < 10 epithelial cells per low-power field confirms lower airway origin.",
            "Obtain 2 Sets of Blood Cultures: Positive in 15–25% of severe HAP; bacteremia indicates high mortality risk and mandates source evaluation.",
            "Screen for MRSA: Perform rapid nasal MRSA PCR to guide anti-MRSA de-escalation.",
            "Evaluate for Parapneumonic Effusion: Perform bedside ultrasound to detect loculated fluid and guide diagnostic thoracentesis to exclude empyema.",
            "Rule Out Non-Infectious Mimics: Atelectasis from hypoventilation/mucus plugging, cardiogenic pulmonary edema, pulmonary embolism, and drug-induced pneumonitis.",
          ],
        },
      ],
    },
    {
      id: "hap.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Hospital-Acquired Pulmonary Infiltrates",
      summary: "Differentiate bacterial HAP from non-infectious hospital pulmonary complications.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Acute Cardiogenic Pulmonary Edema: Bilateral symmetric batwing infiltrates, elevated BNP, responsive to diuresis without purulent sputum.",
          "Non-Infectious Atelectasis: Lobar or segmental collapse in post-operative patients; improves with lung recruitment and suctioning without persistent leukocytosis.",
          "Pulmonary Embolism / Infarction: Wedge-shaped peripheral infiltrate (Hampton hump) with acute pleuritic pain and hypoxemia.",
          "Drug-Induced Pneumonitis: Amiodarone, bleomycin, or checkpoint inhibitor toxicity producing bilateral ground-glass opacities."
]
        }
      ]
    },
    {
      id: "hap.management",
      kind: "management",
      title: "Tailored Empiric Antimicrobial Regimens & 7-Day De-escalation",
      summary: "Individualized empiric regimens based on MDR risk, PK/PD beta-lactam dosing, and 7-day duration rules.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Empiric antimicrobial selection is NOT a rigid formula; it must integrate individual host MDR risk factors, local unit antibiograms, renal function, and allergy profiles:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Low-Risk HAP (No MDR Risk Factors, No Shock, Non-Ventilated)",
              value: "Monotherapy with an Anti-Pseudomonal Beta-Lactam (covers MSSA, enteric Gram-negatives, and P. aeruginosa):\n• Piperacillin-Tazobactam: 4.5 g IV every 6 hours (extended 4-hour infusion); OR\n• Cefepime: 2.0 g IV every 8 hours (extended 4-hour infusion); OR\n• Levofloxacin: 750 mg IV every 24 hours (if severe beta-lactam allergy).",
            },
            {
              label: "2. High-Risk Severe HAP (Prior IV Abx ≤ 90d, Septic Shock, Ventilator/HFNC Need)",
              value: "Double Anti-Pseudomonal + Anti-MRSA Combination Therapy:\n1. Anti-Pseudomonal Beta-Lactam:\n   - Cefepime 2.0 g IV q8h (extended 4-hr infusion) OR\n   - Piperacillin-Tazobactam 4.5 g IV q6h (extended 4-hr infusion) OR\n   - Meropenem 1.0 g IV q8h (extended 3-hr infusion; preferred in prior ESBL colonization or severe septic shock);\nPLUS\n2. Second Anti-Pseudomonal Agent:\n   - Levofloxacin 750 mg IV q24h (or Ciprofloxacin 400 mg IV q8h) OR\n   - Amikacin 15–20 mg/kg IV once daily (target peak 60–80 mcg/mL, trough < 5 mcg/mL);\nPLUS\n3. Anti-MRSA Agent:\n   - Vancomycin: Loading dose 25–30 mg/kg, maintenance 15–20 mg/kg q8–12h (target AUC24/MIC 400–600) OR\n   - Linezolid: 600 mg IV every 12 hours.",
            },
            {
              label: "3. Pharmacokinetic/Pharmacodynamic (PK/PD) Optimization",
              value: "Utilize Extended (3–4 hr) or Continuous 24-hour Beta-Lactam Infusions in critically ill patients to maintain free drug concentration above the MIC (100% fT > MIC), maximizing bacterial clearance in augmented renal clearance (ARC) and preventing resistance.",
            },
            {
              label: "4. De-escalation, 7-Day Course Protocol & Exceptions",
              value: "• De-escalation: Discontinue anti-MRSA agent within 24–48 hours if nasal MRSA PCR is negative; discontinue the second anti-pseudomonal agent once microbiological culture and susceptibility data return.\n• Standard Duration (2016 ATS/IDSA Guidelines): Exactly 7 days for clinically responding patients (afebrile > 48h, weaning oxygen, resolving leukocytosis). Prolonging therapy beyond 7 days does not reduce recurrence and significantly increases fungal superinfections and C. difficile.\n• Clinical Exceptions: Longer treatment courses are warranted for parapneumonic empyema, lung abscess, necrotizing cavitation, non-resolving clinical infection, or underlying cystic fibrosis.",
            },
          ],
        },
      ],
    },
    {
      id: "hap.complications",
      kind: "complications",
      title: "Complications of Severe HAP",
      summary: "Progression to VAP, septic shock, lung abscess, and secondary Clostridioides difficile colitis.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Progression to Acute Respiratory Failure requiring endotracheal intubation (transitioning HAP into VAP).",
            "Septic Shock and Multiorgan Dysfunction Syndrome (MODS).",
            "Parapneumonic Empyema and Necrotizing Cavitation (especially with P. aeruginosa, K. pneumoniae, or MRSA).",
            "Clostridioides difficile Colitis from prolonged broad-spectrum antibiotic exposure.",
            "Antibiotic Toxicities: Vancomycin-associated acute kidney injury; aminoglycoside ototoxicity/nephrotoxicity.",
          ],
        },
      ],
    },
    {
      id: "hap.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls in HAP Management",
      summary: "Critical mistakes to avoid in hospital-acquired pneumonia.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Using community-acquired pneumonia regimens (e.g. Ceftriaxone + Azithromycin) for HAP: HAP flora is dominated by enteric Gram-negatives, Pseudomonas, and MRSA; standard CAP coverage leads to treatment failure and mortality.",
            "Continuing empiric Vancomycin despite a negative nasal MRSA PCR: Nasal PCR has a > 96–99% negative predictive value; de-escalate vancomycin promptly to prevent acute kidney injury.",
            "Treating non-infectious hospital infiltrates (atelectasis, fluid overload, pulmonary embolism) with escalating antibiotics: Always obtain objective microbiological samples and examine bedside lung ultrasound before changing antibiotics.",
            "Continuing double Gram-negative coverage after susceptibilities are known: Monotherapy with the active beta-lactam is definitive; continuing aminoglycosides or fluoroquinolones causes cumulative toxicity without clinical benefit.",
            "Extending antibiotic courses to 14 days for Pseudomonas HAP: RCTs confirm 7-day courses achieve identical cure rates with lower resistance; stop at 7 days if the patient has clinically improved.",
          ],
        },
      ],
    },
    {
      id: "hap.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Inhaled vs Intravenous-Only Antibiotics for MDR HAP/VAP.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Adjunctive Inhaled Antibiotics (e.g. Aerosolized Colistin or Tobramycin): While inhaled delivery achieves high local epithelial lining fluid concentrations without systemic nephrotoxicity, randomized clinical trials (such as the IASIS trial) have failed to show consistent improvements in clinical cure or mortality. Current ATS/IDSA guidelines recommend adjunctive aerosolized antibiotics ONLY as a rescue strategy for HAP/VAP caused by MDR Gram-negative pathogens susceptible only to aminoglycosides or polymyxins.",
        },
      ],
    },
  ],
};
