import type { Topic } from "@/content-types";

export const pneumonia: Topic = {
  id: "pneumonia",
  slug: "pneumonia",
  title: "Severe Community-Acquired Pneumonia (Severe CAP)",
  category: "respiratory",
  oneLiner: "IDSA/ATS severe CAP criteria, rapid microbiology, targeted empiric antimicrobial regimens, and landmark adjunctive hydrocortisone evidence (CAPE COD).",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapter on Severe Community-Acquired Pneumonia in the Intensive Care Unit",
    },
    {
      title: "Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases",
      edition: "9th Edition, 2020",
    },
  ],
  currentStatus: "Current as of the ATS/IDSA Severe CAP Guidelines, the 2023 CAPE COD Landmark Trial, and the IDSA Antimicrobial Resistance Guidance.",
  otherReferences: [
    "Metlay JP, et al. Diagnosis and Treatment of Adults with Community-Acquired Pneumonia. An Official Clinical Practice Guideline of the ATS and IDSA. Am J Respir Crit Care Med. 2019;200(7):e45-e67.",
    "Dequin PF, et al. Hydrocortisone in severe community-acquired pneumonia (CAPE COD trial). N Engl J Med. 2023;388(21):1931-1941.",
    "Torres A, et al. Severe community-acquired pneumonia. Lancet. 2021;398(10304):989-1001.",
  ],
  relationships: [
    { type: "differential", targetId: "cardiogenic-pulmonary-edema", label: "Hydrostatic alveolar flooding mimic" },
    { type: "differential", targetId: "ards", label: "Diffuse bilateral non-cardiogenic lung injury" },
    { type: "complication", targetId: "ards", label: "Pneumonia is the leading trigger of ARDS" },
    { type: "complication", targetId: "septic-shock", label: "Progression to septic shock" },
    { type: "complication", targetId: "pneumothorax", label: "Barotrauma or necrotizing parenchymal cavitation" },
    { type: "related-to", targetId: "hap", label: "Distinguished from nosocomial hospital-acquired pneumonia" },
  ],
  sections: [
    {
      id: "pneumonia.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "pneumonia-guideline-idsa-ats-cap-2019",
          relevance: "ATS/IDSA clinical guideline on community-acquired pneumonia in adults"
        },
        {
          kind: "trial",
          id: "pneumonia-cape-cod-trial",
          relevance: "CAPE COD trial proving hydrocortisone reduces 28-day mortality in severe CAP"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Severe community-acquired pneumonia (Severe CAP) is a life-threatening parenchymal lung infection complicated by septic shock or acute respiratory failure, carrying an ICU mortality of 20–30%.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Community-acquired pneumonia (CAP) becomes 'Severe CAP' when acute alveolar inflammation and microvascular injury progress to severe gas-exchange impairment requiring mechanical ventilation or refractory vasodilatory septic shock requiring vasopressors. In the ICU, early risk stratification using the validated ATS/IDSA criteria, rapid diagnostic microbiological sampling, and immediate administration of broad-spectrum combination antimicrobial therapy are critical determinants of survival.",
        },
        {
          type: "paragraph",
          text: "Management combines targeted antimicrobial therapy (covering typical pathogens, atypical organisms, and risk-stratified MDR pathogens), lung-protective respiratory support (HFNC or invasive ventilation), active drainage of infected parapneumonic effusions/empyema, and adjunctive systemic corticosteroids supported by the landmark CAPE COD randomized trial.",
        },
      ],
    },
    {
      id: "pneumonia.microbiology",
      kind: "definition",
      title: "Microbiology & Host Risk Stratification",
      summary: "Core bacterial, atypical, and viral etiologies in Severe CAP, with specific risk factors for MRSA and Pseudomonas aeruginosa.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "Typical Bacterial Pathogens",
              value: "Streptococcus pneumoniae (pneumococcus; leading cause of bacteremic severe CAP), Staphylococcus aureus (MSSA and MRSA), Klebsiella pneumoniae and other Gram-negative Enterobacterales, Haemophilus influenzae, Moraxella catarrhalis.",
            },
            {
              label: "Atypical Bacterial Pathogens",
              value: "Legionella pneumophila (severe multisystem presentation with hyponatremia, diarrhea, confusion, elevated transaminases), Mycoplasma pneumoniae, Chlamydophila pneumoniae.",
            },
            {
              label: "Respiratory Viruses",
              value: "Influenza A and B (high risk for secondary necrotizing staphylococcal or streptococcal superinfection), SARS-CoV-2, Respiratory Syncytial Virus (RSV), Human Metapneumovirus.",
            },
            {
              label: "Community-Acquired MRSA (CA-MRSA)",
              value: "Panton-Valentine Leukocidin (PVL) toxin-producing strains. High-risk features: post-influenza necrotizing pneumonia, rapid cavitary/multilobar consolidation, severe hemoptysis, profound leukopenia, high serum lactate.",
            },
            {
              label: "Pseudomonas aeruginosa",
              value: "Risk factors: structural lung disease (bronchiectasis, severe COPD with FEV1 < 30%), chronic systemic corticosteroid therapy, prior respiratory isolation of Pseudomonas within 1 year, recent broad-spectrum IV antibiotic exposure within 90 days.",
            },
          ],
        },
      ],
    },
    {
      id: "pneumonia.severity",
      kind: "severity",
      title: "Severity Stratification: ATS/IDSA ICU Admission Criteria",
      summary: "The validated 2019 ATS/IDSA severe CAP criteria: 1 major criterion or ≥ 3 minor criteria mandates direct ICU admission.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "Major Criteria (1 criterion mandates ICU admission)",
              value: "(1) Septic shock requiring vasopressor support; OR (2) Acute respiratory failure requiring invasive mechanical ventilation.",
            },
            {
              label: "Minor Criteria (≥ 3 criteria warrants direct ICU admission)",
              value: "1. Respiratory rate ≥ 30 breaths/min\n2. PaO2/FiO2 ratio ≤ 250\n3. Multilobar radiographic infiltrates\n4. Confusion / disorientation\n5. Blood urea nitrogen (BUN) ≥ 20 mg/dL (uremia)\n6. Leukopenia (WBC < 4,000 cells/uL from consumption)\n7. Thrombocytopenia (Platelets < 100,000 /uL)\n8. Hypothermia (core temperature < 36.0°C)\n9. Hypotension requiring aggressive fluid resuscitation.",
            },
          ],
        },
        {
          type: "callout",
          tone: "guideline",
          text: "Standard outpatient scores like CURB-65 or PSI (Pneumonia Severity Index) underestimate severity in younger patients with severe hypoxemia or acute septic shock; the ATS/IDSA Major/Minor criteria are specifically validated for ICU triage.",
        },
      ],
    },
    {
      id: "pneumonia.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Protocol & Rapid Pathogen Identification",
      summary: "Systematic microbiology: blood cultures, sputum/tracheal aspirates, urinary antigen testing, molecular multiplex PCR, and procalcitonin.",
      provenance: "guideline",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            "Diagnostic Microbiology Before Antibiotics: Obtain 2 sets of peripheral blood cultures and high-quality sputum Gram stain/culture (or endotracheal aspirate if intubated) prior to antibiotic administration, provided this does not delay the first dose beyond 45–60 minutes.",
            "Urinary Antigen Testing: Order Streptococcus pneumoniae urinary antigen (sensitivity 70–80%, specificity > 95%) and Legionella pneumophila serogroup 1 urinary antigen (sensitivity 70–90%, specificity > 99%) in all patients with severe CAP. Results remain positive even after antibiotic therapy has commenced.",
            "Multiplex Molecular Viral/Atypical PCR: Perform nasopharyngeal and lower respiratory PCR testing for Influenza A/B, SARS-CoV-2, RSV, and atypical bacterial pathogens.",
            "Nasal MRSA PCR Screening: High negative predictive value (NPV > 96–99%) for MRSA pneumonia. A negative nasal swab enables safe, early discontinuation of empiric Vancomycin or Linezolid within 24–48 hours.",
            "Pleural Fluid Analysis: Perform prompt diagnostic thoracentesis on any pleural effusion > 10 mm on lateral decubitus film or bedside ultrasound to rule out complicated parapneumonic effusion or empyema (measure pleural fluid pH, glucose, LDH, protein, Gram stain, and culture).",
          ],
        },
      ],
    },
    {
      id: "pneumonia.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Severe Community-Acquired Pneumonia",
      summary: "Differentiate severe bacterial CAP from viral pneumonitis (Influenza/COVID-19), cryptogenic organizing pneumonia, and acute eosinophilic pneumonia.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Severe Viral Pneumonitis (Influenza / COVID-19 / RSV): Bilateral diffuse ground-glass infiltrates with rapid progression to severe ARDS; confirmed by multiplex respiratory viral PCR.",
          "Legionnaires' Disease (Legionella pneumophila): Severe CAP with high fever, hyponatremia (SIADH), diarrhea/abdominal pain, and elevated liver enzymes; confirmed by urine antigen.",
          "Acute Eosinophilic Pneumonia / Organizing Pneumonia: Rapid onset hypoxemic respiratory failure with diffuse infiltrates unresponsive to standard antibiotics; requires bronchoalveolar lavage (BAL)."
]
        }
      ]
    },
    {
      id: "pneumonia.management",
      kind: "management",
      title: "Empiric Antimicrobial Regimens & PK/PD Dosing",
      summary: "First-line combination therapy for Severe CAP, MRSA/Pseudomonas coverage protocols, and beta-lactam infusion optimization.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "In Severe CAP without risk factors for MRSA or Pseudomonas, guideline-directed therapy requires combination therapy with a potent anti-pneumococcal beta-lactam PLUS a Macrolide or a Respiratory Fluoroquinolone:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Standard Severe CAP First-Line Regimen",
              value: "Anti-pneumococcal Beta-Lactam: Ceftriaxone 2 g IV every 24 hours (or Ampicillin-Sulbactam 3 g IV every 6 hours) PLUS Azithromycin 500 mg IV every 24 hours (or Levofloxacin 750 mg IV every 24 hours). The beta-lactam + macrolide combination possesses immunomodulatory benefits that reduce mortality in severe pneumococcal bacteremia.",
            },
            {
              label: "Severe CAP with MRSA Risk Factors",
              value: "Add Vancomycin (loading dose 25–30 mg/kg, maintenance titrated to AUC24/MIC 400–600 mg·h/L) OR Linezolid 600 mg IV every 12 hours. Linezolid is preferred in necrotizing pneumonia due to inhibition of PVL toxin production.",
            },
            {
              label: "Severe CAP with Pseudomonas Risk Factors",
              value: "Replace standard beta-lactam with an Anti-Pseudomonal Beta-Lactam: Cefepime 2 g IV every 8 hours (extended 3–4 hr infusion) OR Piperacillin-Tazobactam 4.5 g IV every 6 hours (extended 4 hr infusion) OR Meropenem 1 g IV every 8 hours (extended 3 hr infusion) PLUS Levofloxacin 750 mg IV daily (or Ciprofloxacin 400 mg IV q8h, or Amikacin 15–20 mg/kg daily).",
            },
            {
              label: "Empiric Antiviral Coverage",
              value: "Oseltamivir 75 mg PO/NG BID (dose-adjusted for renal failure) for patients presenting during influenza season with acute respiratory failure, initiated immediately without waiting for PCR results.",
            },
          ],
        },
      ],
    },
    {
      id: "pneumonia.steroids",
      kind: "management",
      title: "Adjunctive Systemic Corticosteroids: The CAPE COD Evidence",
      summary: "Landmark evidence for hydrocortisone in severe CAP reducing 28-day mortality, intubation, and vasopressor requirements.",
      provenance: "trial",
      body: [
        {
          type: "paragraph",
          text: "The role of corticosteroids in severe CAP was definitively established by the multicenter, double-blind, randomized controlled CAPE COD Trial (Dequin et al., NEJM 2023):",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Study Population",
              value: "800 critically ill ICU patients with severe CAP (defined by mechanical ventilation, high-flow nasal cannula with P/F < 300, or a pulmonary severity score). Excluded patients with aspiration, post-obstructive pneumonia, or influenza.",
            },
            {
              label: "Intervention",
              value: "Early intravenous Hydrocortisone (200 mg/day continuous infusion) initiated within 24 hours of ICU admission for 4–8 days, followed by a protocolized taper based on clinical improvement.",
            },
            {
              label: "Landmark Findings",
              value: "Hydrocortisone significantly reduced 28-day all-cause mortality from 11.9% in the placebo group to 6.2% in the hydrocortisone group (absolute reduction 5.7%, 95% CI -9.1 to -2.4; p=0.006). It significantly reduced endotracheal intubation in non-intubated patients (HR 0.59) and reduced vasopressor initiation (HR 0.59), with no increase in secondary hospital-acquired infections.",
            },
          ],
        },
        {
          type: "callout",
          tone: "trial",
          text: "Hydrocortisone 200 mg/day (continuous IV infusion or 50 mg IV q6h) should be initiated early in non-viral severe CAP requiring ICU support, provided secondary fungal infection and aspiration are excluded.",
        },
      ],
    },
    {
      id: "pneumonia.complications",
      kind: "complications",
      title: "Complications of Severe CAP & Pleural Space Management",
      summary: "Complicated parapneumonic effusion, empyema, lung abscess, and septic shock.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Complicated Parapneumonic Effusion & Empyema: Pleural fluid with pH < 7.20, glucose < 40 mg/dL, LDH > 1000 IU/L, or positive Gram stain/culture mandates immediate tube thoracostomy drainage. For loculated empyema failing tube drainage, intrapleural fibrinolytic and mucolytic therapy (tPA 10 mg + Pulmozyme/DNase 5 mg BID for 3 days per MIST-2 trial) resolves loculations and avoids open decortication in > 80% of patients.",
            "Necrotizing Pneumonia & Lung Abscess: S. aureus, Klebsiella pneumoniae, or mixed anaerobes causing extensive parenchymal necrosis and cavitation. Requires prolonged antimicrobial therapy (3–6 weeks) and airway clearance.",
            "Acute Respiratory Distress Syndrome (ARDS): Direct alveolar injury triggering diffuse inflammatory capillary leak and refractory hypoxemia (requires low tidal volume 6 mL/kg PBW, higher PEEP, and prone positioning).",
            "Septic Shock & Multiorgan Failure: Acute tubular necrosis, acute cor pulmonale, and myocardial depression from systemic inflammation.",
          ],
        },
      ],
    },
    {
      id: "pneumonia.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical diagnostic and therapeutic pitfalls in severe CAP management.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Omitting atypical coverage (Macrolide or Fluoroquinolone) in severe CAP: Monotherapy with a beta-lactam in severe CAP is associated with higher mortality; combination therapy ensures coverage against Legionella and provides essential immunomodulatory suppression of pro-inflammatory cytokines.",
            "Delaying the first antibiotic dose for diagnostic procedures: While sputum and blood cultures should be obtained promptly, never delay the first dose of broad-spectrum antimicrobials > 1 hour in a patient with severe CAP or septic shock.",
            "Failing to perform diagnostic thoracentesis on a parapneumonic effusion: An undiagnosed empyema acts as an untreated closed-space infection that will cause persistent fever, septic shock, and treatment failure despite correct antibiotics.",
            "Continuing empiric Vancomycin or Anti-Pseudomonal agents when 48–72h cultures and nasal MRSA PCR are negative: De-escalate promptly to Ceftriaxone + Azithromycin to reduce selective pressure for antimicrobial resistance and prevent acute kidney injury.",
            "Using high-dose corticosteroids in severe viral pneumonia (e.g., Influenza): Unlike in bacterial Severe CAP (CAPE COD), corticosteroids in severe influenza pneumonia are associated with delayed viral clearance, increased secondary fungal superinfections (invasive aspergillosis), and increased mortality.",
          ],
        },
      ],
    },
    {
      id: "pneumonia.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Procalcitonin-guided duration and non-macrolide combination regimens.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Duration of Antimicrobial Therapy in Severe CAP: Traditional practice prescribed 10–14 days of IV antibiotics. Current consensus and trial evidence demonstrate that 5–7 days of therapy is equally effective in patients who achieve clinical stability (afebrile for 48 hours, normalized heart rate, RR < 24, off vasopressors) with falling procalcitonin levels (> 80% decrease from peak), avoiding excess drug toxicity and resistance.",
        },
        {
          type: "paragraph",
          text: "Beta-Lactam + Macrolide versus Beta-Lactam + Fluoroquinolone: Observational studies and meta-analyses suggest lower mortality with macrolide-containing regimens over fluoroquinolone-containing regimens in severe bacteremic pneumococcal CAP, hypothesized to result from macrolide inhibition of pneumolysin toxin production and anti-inflammatory effects.",
        },
      ],
    },
  ],
};
