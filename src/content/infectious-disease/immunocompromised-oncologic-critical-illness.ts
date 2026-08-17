import type { Topic } from "@/content-types";

export const immunocompromisedOncologicCriticalIllness: Topic = {
  id: "immunocompromised-oncologic-critical-illness",
  slug: "immunocompromised-oncologic-critical-illness",
  title: "Immunocompromised & Oncologic Critical Illness",
  category: "infectious-disease",
  oneLiner: "Host immune defects, neutropenic sepsis, acute respiratory failure (PJP/Aspergillus), tumor lysis syndrome, leukostasis, CAR-T CRS/ICANS, and ICU triage.",
  status: "complete",
  lastReviewed: "2026-08-17",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Critical Care of the Immunocompromised Patient and Oncologic Emergencies",
    },
    {
      title: "Principles and Practice of Infectious Diseases (Mandell)",
      edition: "9th Edition, 2020",
      note: "Infections in the Immunocompromised Host and Neutropenic Sepsis",
    },
  ],
  currentStatus: "Current as of the 2018 ASCO/IDSA Neutropenic Fever Guidelines, the 2019 ASTCT CRS/ICANS Guidelines, the 2016 IDSA Aspergillosis & Candidiasis Guidelines, and the HIGH and ELIANA Landmark Trials.",
  otherReferences: [
    "Taplitz RA, et al. Outpatient Management of Fever and Neutropenia in Adults Treated for Malignancy: ASCO and IDSA Clinical Practice Guideline Update. J Clin Oncol. 2018;36(14):1443-1453.",
    "Lee DW, et al. ASTCT Consensus Grading for Cytokine Release Syndrome and Neurologic Toxicity Associated with Immune Effector Cells. Biol Blood Marrow Transplant. 2019;25(4):625-638.",
    "Azoulay E, et al. Effect of High-Flow Nasal Oxygen vs Standard Oxygen on 28-Day Mortality in Immunocompromised Patients With Acute Respiratory Failure: The HIGH Randomized Clinical Trial. JAMA. 2018;320(20):2099-2107.",
    "Maude SL, et al. Tisagenlecleucel in Children and Young Adults with B-Cell Lymphoblastic Leukemia (ELIANA trial). N Engl J Med. 2018;378(5):439-448.",
    "Puxty K, et al. Intensive care outcomes for patients with cancer: a systematic review and meta-analysis. Intensive Care Med. 2014;40(10):1429-1440.",
    "Patterson TF, et al. Practice Guidelines for the Diagnosis and Management of Aspergillosis: 2016 Update by the IDSA. Clin Infect Dis. 2016;63(4):e1-e60.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "sepsis", label: "Foundational sepsis recognition and early antimicrobial resuscitation" },
    { type: "complication", targetId: "septic-shock", label: "Septic shock and refractory vasoplegia in neutropenia" },
    { type: "complication", targetId: "ards", label: "Acute hypoxemic respiratory failure and pulmonary infiltrates" },
    { type: "complication", targetId: "aki", label: "Tumor lysis syndrome nephropathy and cardiorenal failure" },
    { type: "treated-with", targetId: "crrt", label: "Continuous renal replacement therapy for TLS hyperkalemia and uremia" },
    { type: "differential", targetId: "hyperkalemia", label: "Lethal hyperkalemia in acute tumor lysis syndrome" },
    { type: "related-to", targetId: "hap", label: "Hospital-acquired pneumonia and invasive fungal infections" },
    { type: "related-to", targetId: "intracranial-hemorrhage", label: "Thrombocytopenic and leukostasis intracranial hemorrhage" },
  ],
  sections: [
    {
      id: "immunocompromised-oncologic-critical-illness.overview",
      kind: "overview",
      title: "Overview",
      summary: "Critical illness in immunocompromised and cancer patients requires rapid identification of the underlying immune defect, immediate empiric bactericidal therapy within 1 hour, early multimodality diagnostics (HRCT/BAL), targeted oncologic emergency protocols, and individualized prognostication.",
      provenance: "textbook",
      evidenceRefs: [
        { kind: "guideline", id: "febrile-neutropenia-guideline-idsa-asco-2018", relevance: "ASCO/IDSA recommendations on neutropenic fever management" },
        { kind: "guideline", id: "car-t-crs-icans-guideline-astct-2019", relevance: "ASTCT guidelines on CAR-T toxicity grading and management" }
      ],
      body: [
        {
          type: "paragraph",
          text: "Critical care of the immunocompromised and oncology patient has undergone a major paradigm shift. Blanket pessimistic prognoses are outdated: modern ICUs achieve hospital survival rates exceeding 70–80% for solid tumor patients and 50–65% for hematologic malignancies. Survival is predominantly determined by the number and reversibility of acute organ failures (SOFA score trajectory) rather than the underlying cancer diagnosis alone.",
        },
        {
          type: "paragraph",
          text: "High-value ICU presentations fall into three core categories: (1) Severe infections and septic shock across specific immune defects (neutropenia, cellular deficiency, humoral deficiency); (2) Acute hypoxemic respiratory failure requiring rapid diagnostic discrimination (opportunistic infection vs drug toxicity vs alveolar hemorrhage vs fluid overload); and (3) Life-threatening oncologic and immunotherapy emergencies (Tumor Lysis Syndrome, Leukostasis, CAR T-cell Cytokine Release Syndrome [CRS], and Immune Effector Cell-Associated Neurotoxicity Syndrome [ICANS]).",
        },
      ],
    },
    {
      id: "immunocompromised-oncologic-critical-illness.immune-defect-framework",
      kind: "physiology",
      title: "The Host Immune Defect Framework & Pathogen Risk",
      summary: "Categorization of infection risk by specific immunological deficit: Neutropenia, Cellular (T-cell), Humoral (B-cell/Antibody), and Barrier Disruption.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Infection susceptibility is dictated by the precise anatomical and immunological defect present. Matching the patient's specific immune defect to anticipated pathogens guides immediate empiric therapy:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Severe Neutropenia (ANC < 500/uL)",
              value: "Exposures: AML/MDS, induction chemotherapy • Pathogens: Pseudomonas aeruginosa, Enterobacterales, S. aureus, Candida, Aspergillus (if > 7–10d) • First-Line: Cefepime 2g q8h, Pip-Tazo 4.5g q6h, or Meropenem 1g q8h (+/- Vancomycin for shock/catheter).",
            },
            {
              label: "Cell-Mediated Immunity (T-cell Defect)",
              value: "Exposures: Transplant, HSCT, high-dose steroids, calcineurin inhibitors • Pathogens: PJP, CMV, HSV, VZV, Listeria, Cryptococcus, Aspergillus, Nocardia, Toxoplasma • First-Line: High-dose TMP-SMX + Ganciclovir + Ampicillin.",
            },
            {
              label: "Humoral Immunity (B-cell / Antibody Defect)",
              value: "Exposures: CLL, multiple myeloma, rituximab, splenectomy • Pathogens: Encapsulated bacteria (S. pneumoniae, N. meningitidis, H. influenzae) • First-Line: High-dose Ceftriaxone (2g q12h) + Vancomycin; IVIG replacement if IgG < 400 mg/dL.",
            },
            {
              label: "Mucocutaneous & Barrier Disruption",
              value: "Exposures: Severe mucositis, CVC lines, catheters • Pathogens: CoNS, Enterococcus, Candida, oral anaerobes • First-Line: Vancomycin + Antipseudomonal beta-lactam; Echinocandin for persistent candidemia.",
            },
          ],
        },
      ],
    },
    {
      id: "immunocompromised-oncologic-critical-illness.febrile-neutropenia-neutropenic-sepsis",
      kind: "management",
      title: "Febrile Neutropenia & Neutropenic Septic Shock",
      summary: "Definition, immediate 1-hour broad-spectrum antipseudomonal therapy, indications for Gram-positive and antifungal expansion, and source control.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Febrile Neutropenia (FN) is defined as a single oral temperature >= 38.3°C (or >= 38.0°C sustained over 1 hour) with an Absolute Neutrophil Count (ANC) < 500/uL (or anticipated nadir < 500/uL within 48 hours). In the absence of neutrophils, the classic inflammatory signs of infection (purulence, erythema, consolidation) are absent; fever may be the sole indicator of life-threatening bacteremia.",
        },
        {
          type: "list", ordered: false,
          items: [
            "The 1-Hour Antimicrobial Rule: Draw two sets of blood cultures (peripheral and all CVC lumens) and lactate immediately, and administer empiric IV antipseudomonal bactericidal monotherapy within 60 minutes of triage: Cefepime (2 g IV q8h), Piperacillin-tazobactam (4.5 g IV q6h), or Meropenem (1 g IV q8h; preferred in septic shock or prior ESBL colonization).",
            "Specific Indications to Add Vancomycin: Vancomycin is NOT routinely indicated for all neutropenic fevers. Add Vancomycin ONLY for: (1) Hemodynamic instability / septic shock; (2) Suspected central venous catheter infection; (3) Radiographically confirmed pneumonia; (4) Clinically apparent skin/soft tissue infection; (5) Severe mucositis; (6) Fluoroquinolone prophylaxis prior to fever.",
            "Antifungal Therapy Triggers: If fever persists after 4–7 days of broad-spectrum antibiotics and ANC is expected to remain < 500/uL, add empiric antifungal therapy (Echinocandin [caspofungin/micafungin] or Voriconazole / Liposomal Amphotericin B for pulmonary infiltrates per IDSA guidelines).",
            "Source Control: Evaluate for neutropenic enterocolitis (typhlitis: CT abdomen showing cecal wall thickening > 4 mm, managed with bowel rest, broad-spectrum antibiotics, and surgical consultation for perforation), perianal abscess (avoid digital rectal exams; obtain MRI/CT pelvis), and infected vascular catheters.",
          ],
        },
      ],
    },
    {
      id: "immunocompromised-oncologic-critical-illness.acute-respiratory-failure-immunocompromised",
      kind: "management",
      title: "Acute Respiratory Failure in Immunocompromised Hosts",
      summary: "Etiological differential, early HRCT chest, early bronchoscopy/BAL, noninvasive support vs the risk of delayed intubation (HIGH trial).",
      provenance: "guideline",
      evidenceRefs: [
        { kind: "trial", id: "immunocompromised-high-trial", relevance: "HIGH trial evaluating HFNC in immunocompromised ARF" }
      ],
      body: [
        {
          type: "paragraph",
          text: "Acute hypoxemic respiratory failure in immunocompromised patients carries high mortality. Causes span infectious (bacterial, PJP, invasive fungal, viral) and non-infectious etiologies (diffuse alveolar hemorrhage [DAH], drug-induced pneumonitis, cardiogenic/hydrostatic pulmonary edema, transfusion-related lung injury [TRALI], and malignant infiltration).",
        },
        {
          type: "list", ordered: false,
          items: [
            "Early Diagnostic Workup: Obtain High-Resolution Chest CT (HRCT) within 24 hours. Perform early Bronchoscopy with Bronchoalveolar Lavage (BAL) within 24–48 hours if safe: send for cell count, bacterial cultures, fungal smear/calcofluor, fungal cultures, galactomannan, PJP PCR/DFA, respiratory viral multiplex PCR, and cytology. (Progressively bloodier aliquots confirm Diffuse Alveolar Hemorrhage).",
            "Noninvasive Support vs Invasive Ventilation (HIGH Landmark Trial): High-Flow Nasal Cannula (HFNC) and Noninvasive Ventilation (NIV) can be trialed in early hypoxemic respiratory failure. However, the HIGH trial demonstrated that HFNC does not confer a mortality advantage over standard oxygen (28-day mortality 35.6% vs 36.1%, P = 0.94). Close bedside monitoring is paramount: never delay invasive endotracheal intubation when work of breathing, exhaustion, or gas exchange deteriorates, as delayed emergency intubation carries > 60–70% mortality.",
            "Mechanical Ventilation: Use lung-protective ventilation (tidal volume 4–8 mL/kg PBW, plateau pressure <= 30 cmH2O, driving pressure <= 14 cmH2O, prone positioning for moderate-to-severe ARDS, cross-link ards).",
          ],
        },
      ],
    },
    {
      id: "immunocompromised-oncologic-critical-illness.invasive-fungal-disease",
      kind: "management",
      title: "Invasive Fungal Infections (Candida, Aspergillus, Mucor, PJP)",
      summary: "Diagnostic biomarkers (Galactomannan, BDG), antifungal pharmacotherapy (Echinocandins, Voriconazole, Liposomal Amphotericin B), and PJP steroids.",
      provenance: "guideline",
      evidenceRefs: [
        { kind: "guideline", id: "invasive-aspergillosis-guideline-idsa-2016", relevance: "IDSA 2016 Guideline for Diagnosis and Management of Aspergillosis" }
      ],
      body: [
        {
          type: "paragraph",
          text: "Invasive fungal infections in the ICU require rapid identification and targeted antifungal pharmacotherapy:",
        },
        {
          type: "list", ordered: false,
          items: [
            "Invasive Candidiasis / Candidemia: First-line therapy in critically ill patients is an Echinocandin (Caspofungin 70 mg load then 50 mg daily, Micafungin 100 mg daily, or Anidulafungin 200 mg load then 100 mg daily) preferred over fluconazole. Mandatory removal of central venous lines and dilated fundoscopic examination to rule out fungal endophthalmitis.",
            "Invasive Pulmonary Aspergillosis (IPA): Characterized on HRCT by nodular lesions with ground-glass halo sign or air-crescent sign. Biomarkers: Serum and BAL Galactomannan (GM ODI > 0.5 serum, > 1.0 BAL) and (1->3)-beta-D-Glucan (BDG). First-line therapy: Voriconazole (6 mg/kg IV q12h x 2 doses, then 4 mg/kg q12h; monitor therapeutic trough levels 2.0–5.5 mg/L and QTc interval) or Isavuconazole (200 mg IV q8h x 6 doses, then 200 mg daily; less QTc prolongation and hepatotoxicity) or Liposomal Amphotericin B (3–5 mg/kg/day).",
            "Mucormycosis: Aggressive angioinvasive infection in neutropenia or DKA. Requires immediate surgical debridement + high-dose Liposomal Amphotericin B (5–10 mg/kg/day) +/- Isavuconazole.",
            "Pneumocystis jirovecii Pneumonia (PJP): Severe hypoxemia, bilateral perihilar ground-glass opacities, elevated LDH, positive BDG, and BAL PCR/DFA. Treatment: High-dose Trimethoprim-Sulfamethoxazole (TMP-SMX 15–20 mg/kg/day TMP component IV divided q6–8h x 21 days). Adjunctive Corticosteroids (Prednisone 40 mg BID x 5 days, 40 mg daily x 5 days, then 20 mg daily x 11 days) are mandatory if PaO2 < 70 mmHg or A-a gradient >= 35 mmHg on room air (reduces mortality and respiratory failure).",
          ],
        },
      ],
    },
    {
      id: "immunocompromised-oncologic-critical-illness.tumor-lysis-syndrome",
      kind: "management",
      title: "Tumor Lysis Syndrome (TLS)",
      summary: "Cairo-Bishop criteria, metabolic derangements, rasburicase, vigorous hydration, hyperkalemia rescue, and CRRT indications.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Tumor Lysis Syndrome (TLS) is a life-threatening oncologic metabolic emergency caused by massive, rapid lysis of malignant cells (Burkitt lymphoma, ALL, AML, high-grade lymphomas) releasing intracellular potassium, phosphate, and nucleic acids into the circulation. Catabolism of nucleic acids generates overwhelming levels of uric acid, which along with calcium-phosphate crystals precipitates in the renal tubules, causing severe oliguric AKI.",
        },
        {
          type: "list", ordered: false,
          items: [
            "Cairo-Bishop Diagnostic Criteria: Laboratory TLS requires >= 2 of: Uric acid >= 8.0 mg/dL, Potassium >= 6.0 mEq/L, Phosphorus >= 4.5 mg/dL, Calcium <= 7.0 mg/dL (or ionized Ca < 1.12 mmol/L). Clinical TLS: Laboratory TLS plus Acute Kidney Injury (creatinine >= 1.5x baseline), cardiac arrhythmia / cardiac arrest, or seizures.",
            "Vigorous Isotonic Hydration: 2–3 L/m²/day (or 200–300 mL/h) targeting urine output >= 100 mL/m²/h (or >= 2 mL/kg/h). (Urinary alkalinization with sodium bicarbonate is NO LONGER recommended because it promotes calcium phosphate crystallization in renal tubules).",
            "Rasburicase (Recombinant Urate Oxidase): 0.2 mg/kg IV (or fixed single dose 3–6 mg). Rapidly converts insoluble uric acid into highly soluble allantoin within 4 hours. Contraindication: G6PD Deficiency (causes severe methemoglobinemia and fatal intravascular hemolysis). Note: Blood samples for uric acid post-rasburicase must be collected on ice and run immediately to avoid ex-vivo degradation.",
            "Allopurinol: 300 mg/m²/day oral/IV. Inhibits xanthine oxidase; used for prophylaxis in low/intermediate risk only. Does not lower pre-existing uric acid.",
            "Managing Electrolyte Catastrophes: Treat hyperkalemia aggressively (calcium gluconate for cardiac membrane stabilization, insulin + dextrose, albuterol, cross-link hyperkalemia). Treat hypocalcemia ONLY if the patient is symptomatic (tetany, seizures), as administering IV calcium to a patient with hyperphosphatemia promotes severe metastatic tissue and renal calcium-phosphate precipitation.",
            "Continuous Renal Replacement Therapy (CRRT): Indications: refractory hyperkalemia, severe hyperphosphatemia (> 10 mg/dL), symptomatic hypocalcemia with high phosphate, severe oliguric AKI, and volume overload. CRRT is vastly superior to intermittent hemodialysis for continuous clearance of ongoing intracellular phosphate and potassium release.",
          ],
        },
      ],
    },
    {
      id: "immunocompromised-oncologic-critical-illness.hyperleukocytosis-leukostasis",
      kind: "management",
      title: "Hyperleukocytosis & Leukostasis Crisis",
      summary: "Pathophysiology of blast microvascular occlusion, urgent cytoreduction, transfusion precautions, and leukapheresis controversy.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Hyperleukocytosis (WBC > 100,000/uL, most commonly in AML or CML blast crisis) causes Leukostasis—a medical emergency where large, rigid myeloblasts aggregate in the microvasculature, causing intravascular sludging, tissue hypoperfusion, and endothelial injury.",
        },
        {
          type: "list", ordered: false,
          items: [
            "Clinical Presentation: Pulmonary leukostasis (progressive dyspnea, hypoxemia, diffuse alveolar infiltrates, respiratory failure) and Central Nervous System leukostasis (severe headache, confusion, delirium, stupor, intracerebral hemorrhage, ischemic stroke).",
            "Urgent Cytoreduction: Immediate administration of Hydroxyurea (2–5 g/day oral) combined with emergent induction chemotherapy in consultation with hematology/oncology. Vigorous IV hydration and TLS prophylaxis with Rasburicase are mandatory.",
            "Blood Transfusion Precautions: Avoid packed red blood cell (PRBC) transfusions until the blast count is significantly reduced. Transfusing red blood cells drastically increases whole blood viscosity and precipitates acute fatal pulmonary and cerebral leukostasis. Transfuse platelets for severe thrombocytopenia (< 20,000/uL) to prevent intracranial hemorrhage.",
            "Leukapheresis Controversy: ASFA guidelines classify leukapheresis as Category II (second-line) in AML with leukostasis. It rapidly removes circulating blasts but does not treat the underlying marrow production or improve long-term mortality compared to rapid chemotherapy. Reserve as a temporizing bridge in severe pulmonary/CNS leukostasis when chemotherapy is delayed.",
          ],
        },
      ],
    },
    {
      id: "immunocompromised-oncologic-critical-illness.car-t-and-immune-effector-cell-toxicity",
      kind: "management",
      title: "CAR T-Cell Toxicity: CRS & ICANS Management",
      summary: "ASTCT grading, Cytokine Release Syndrome (IL-6/Tocilizumab, ELIANA trial), Immune Effector Cell-Associated Neurotoxicity (ICANS/Dexamethasone), and ICE scoring.",
      provenance: "guideline",
      evidenceRefs: [
        { kind: "trial", id: "immunocompromised-eliana-cart-trial", relevance: "ELIANA landmark trial establishing CAR-T efficacy and CRS protocol" }
      ],
      body: [
        {
          type: "paragraph",
          text: "Chimeric Antigen Receptor (CAR) T-cell therapies and bispecific T-cell engagers (BiTEs) induce massive immune activation with two distinct critical toxicities governed by the 2019 ASTCT consensus grading framework:",
        },
        {
          type: "list", ordered: false,
          items: [
            "Cytokine Release Syndrome (CRS): Systemic hyperinflammatory state driven by massive release of IL-6, IFN-gamma, and TNF-alpha by activated CAR T-cells and macrophages. Manifests with persistent high fevers, vasoplegic hypotension, capillary leak, and hypoxemic respiratory failure.",
            "CRS ASTCT Grading & Management: (1) Grade 1 (Fever >= 38.0°C only): Supportive care, antipyretics; (2) Grade 2 (Fever + hypotension responsive to fluids or low-dose vasopressor, and/or low-flow O2 <= 40%): Tocilizumab (IL-6 receptor antagonist, 8 mg/kg IV, max 800 mg, repeatable q8h up to 4 doses); (3) Grade 3 (Fever + high-dose or multiple vasopressors, and/or high-flow O2 / NIV): Tocilizumab PLUS Dexamethasone (10–20 mg IV q6h); (4) Grade 4 (Life-threatening hypotension with multiple high-dose pressors, or mechanical ventilation): Tocilizumab + High-dose Methylprednisolone (1000 mg/day IV).",
            "Immune Effector Cell-Associated Neurotoxicity Syndrome (ICANS): Neuroinflammation and blood-brain barrier disruption. Earliest sensitive signs: expressive aphasia, word-finding difficulty, and handwriting impairment (evaluated serially via the 10-point Immune Effector Cell Encephalopathy [ICE] score), progressing to tremor, confusion, seizures, motor weakness, cerebral edema, and coma.",
            "ICANS Management: First-line therapy is Corticosteroids: Dexamethasone (10–20 mg IV q6h) for Grade 1–3, or Methylprednisolone (1000 mg/day IV) for Grade 4 / cerebral edema. Tocilizumab does NOT penetrate the blood-brain barrier and is NOT recommended for isolated ICANS without CRS (may increase free circulating IL-6 in CSF). Levetiracetam (750–1000 mg BID) for seizure prophylaxis.",
          ],
        },
      ],
    },
    {
      id: "immunocompromised-oncologic-critical-illness.other-oncologic-emergencies",
      kind: "management",
      title: "Other Critical Oncologic Emergencies",
      summary: "Malignant pericardial tamponade, Superior Vena Cava (SVC) syndrome, spinal cord compression, and severe hypercalcemia of malignancy.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Oncologic critical care frequently involves acute mechanical or metabolic crises requiring immediate procedural and medical rescue:",
        },
        {
          type: "list", ordered: false,
          items: [
            "Malignant Pericardial Tamponade: Pericardial effusion producing pulsus paradoxus (> 10 mmHg drop in SBP on inspiration), electrical alternans, hypotension, and RV diastolic collapse on POCUS. Management: Emergent bedside echocardiographically guided pericardiocentesis or surgical pericardial window.",
            "Superior Vena Cava (SVC) Syndrome: Obstruction of SVC by mediastinal tumor (lung cancer, lymphoma) causing facial/neck edema, plethora, dyspnea, and dilated chest wall collateral veins. Management: Head elevation, dexamethasone (4–8 mg q6h), and emergent endovascular SVC stenting or urgent radiation/chemotherapy.",
            "Malignant Spinal Cord Compression: New severe back pain with motor weakness, sensory level, or bowel/bladder dysfunction. Management: Immediate Dexamethasone (10–16 mg IV bolus followed by 4 mg q6h), emergency spine MRI, and emergent neurosurgical decompression or radiation therapy.",
            "Severe Hypercalcemia of Malignancy (Corrected Ca > 14 mg/dL): Lethargy, confusion, shortened QTc, and severe polyuric dehydration. Management: (1) Aggressive isotonic saline hydration (200–300 mL/h); (2) Calcitonin (4–8 IU/kg IM/SC q12h x 48h for rapid 24h lowering); (3) Intravenous Zoledronic acid (4 mg IV over 15 min) or Pamidronate (60–90 mg IV); (4) Denosumab (120 mg SC) for refractory cases or severe renal impairment; (5) Hemodialysis for severe symptomatic hypercalcemia with oliguric renal failure.",
          ],
        },
      ],
    },
    {
      id: "immunocompromised-oncologic-critical-illness.icu-admission-prognostication",
      kind: "management",
      title: "ICU Admission, Triage & Modern Prognostication",
      summary: "Moving beyond outdated therapeutic nihilism: SOFA score trajectory, the 'Full ICU Trial' strategy, and multidisciplinary goals of care.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Modern cancer critical care is governed by objective physiological assessment rather than cancer stage or hematologic diagnosis alone. Upfront ICU denial based merely on oncologic diagnosis is ethically and scientifically unjustified (Puxty meta-analysis).",
        },
        {
          type: "list", ordered: false,
          items: [
            "Prognostic Determinants: Short-term ICU survival is driven by the number and severity of acute physiological organ failures (SOFA score trajectory over 48–72 hours), baseline functional status (ECOG performance status 0–2), and the availability of future anti-cancer therapeutic options. Cancer stage, metastatic burden, and neutropenia are poor independent predictors of acute ICU survival.",
            "The 'Full ICU Trial' Strategy: For patients with acute organ failure and uncertain oncologic prognosis, admit to the ICU for an unrestricted trial of full critical care support (mechanical ventilation, vasopressors, CRRT) for a pre-defined period of 3–5 days. Multidisciplinary reassessment (intensivist, oncologist, patient/family) is conducted daily: clinical improvement or stabilizing SOFA trajectory supports ongoing full care, whereas progressive multiorgan failure despite maximal support informs an empathetic transition to comfort-focused palliative goals.",
          ],
        },
      ],
    },
    {
      id: "immunocompromised-oncologic-critical-illness.monitoring",
      kind: "monitoring",
      title: "ICU Monitoring & Trajectory Assessment",
      summary: "Invasive hemodynamic line monitoring, serial fungal biomarkers, ICE scoring for neurotoxicity, and tumor lysis lab panels.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Intensive monitoring tracks rapidly evolving infections and metabolic shifts in immunocompromised hosts:",
        },
        {
          type: "list", ordered: false,
          items: [
            "Invasive Arterial Line: Mandatory for septic shock, CAR-T cytokine release syndrome, and frequent blood gas/lactate sampling.",
            "Tumor Lysis Syndrome Panel: Potassium, calcium, phosphate, magnesium, uric acid, and creatinine measured every 4–6 hours in high-risk patients.",
            "Serial Fungal & Viral Biomarkers: Serial serum galactomannan, (1->3)-beta-D-glucan, and quantitative CMV PCR.",
            "Serial Neurologic Scoring: 10-point Immune Effector Cell Encephalopathy (ICE) score assessed every 4–8 hours post-CAR-T therapy to detect early ICANS neurotoxicity.",
          ],
        },
      ],
    },
    {
      id: "immunocompromised-oncologic-critical-illness.complications",
      kind: "complications",
      title: "Complications & Red Lines",
      summary: "Neutropenic septic shock, severe CAR-T cerebral edema, tumor lysis cardiac arrest, leukostasis stroke, and secondary HLH.",
      provenance: "textbook",
      body: [
        {
          type: "list", ordered: false,
          items: [
            "Refractory Neutropenic Septic Shock: Rapid multiorgan failure driven by Gram-negative bacteremia (*Pseudomonas*, *Enterobacterales*).",
            "Fatal Hyperkalemic Arrhythmia / Arrest: Sudden cardiac arrest secondary to rapid cellular lysis in acute TLS.",
            "Severe CAR-T Neurotoxicity & Cerebral Edema: Grade 4 ICANS with status epilepticus and fatal diffuse cerebral edema.",
            "Leukostasis Intracranial Hemorrhage: Massive fatal intracerebral hemorrhage precipitated by leukostasis and severe thrombocytopenia.",
            "Secondary Hemophagocytic Lymphohistiocytosis (HLH / MAS): Uncontrolled hyperinflammatory syndrome with extreme hyperferritinemia (> 10,000 ng/mL) and multiorgan failure.",
          ],
        },
      ],
    },
    {
      id: "immunocompromised-oncologic-critical-illness.pitfalls",
      kind: "complications",
      title: "Common Pitfalls & Clinical Pearls",
      summary: "Dangerous assumptions and therapeutic pitfalls in oncologic and immunocompromised critical illness.",
      provenance: "textbook",
      body: [
        {
          type: "list", ordered: false,
          items: [
            "Administering Rasburicase in G6PD Deficiency: Rasburicase is strictly contraindicated in G6PD deficiency because it induces severe, life-threatening methemoglobinemia and massive intravascular hemolysis. Screen high-risk patients or monitor closely.",
            "Transfusing Red Blood Cells in Hyperleukocytosis: Transfusing PRBCs before cytoreduction lowers the blast count drastically increases whole blood viscosity and precipitates acute fatal pulmonary and cerebral leukostasis.",
            "Treating Isolated ICANS with Tocilizumab: Tocilizumab does not cross the blood-brain barrier and increases circulating IL-6 levels in the CSF, which can worsen neurotoxicity. Use Dexamethasone or Methylprednisolone for ICANS.",
            "Giving Intravenous Calcium for Asymptomatic Hypocalcemia in TLS: Administering IV calcium in the presence of severe hyperphosphatemia promotes widespread, catastrophic metastatic precipitation of calcium phosphate in kidneys, heart, and tissues.",
            "Denying ICU Admission Based Solely on Cancer Diagnosis: Blanket therapeutic nihilism is unsupported by modern critical care data. Always evaluate physiological reversibility and offer a time-limited 'Full ICU Trial' when appropriate.",
            "Delaying Empiric Antipseudomonal Antibiotics: In febrile neutropenia, mortality increases exponentially for every hour antibiotics are delayed. Administer broad-spectrum coverage within 1 hour.",
          ],
        },
      ],
    },
  ],
};
