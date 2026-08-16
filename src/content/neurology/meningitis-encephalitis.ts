import type { Topic } from "@/content-types";

export const meningitisEncephalitis: Topic = {
  id: "meningitis-encephalitis",
  slug: "meningitis-encephalitis",
  title: "Acute Meningitis & Encephalitis",
  category: "neurology",
  oneLiner: "CT-before-LP criteria, CSF interpretation matrix, de Gans Dexamethasone timing, empiric age/host antimicrobial coverage + Ampicillin + Acyclovir, and neurocritical ICP management.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Central Nervous System Infections, Acute Bacterial Meningitis, and Viral Encephalitis in the ICU",
    },
    {
      title: "IDSA Practice Guidelines for the Management of Bacterial Meningitis",
      edition: "Clin Infect Dis 2004;39(9):1267-1284 (and 2017 Healthcare-Associated Guideline)",
    },
  ],
  currentStatus: "Current as of the IDSA Practice Guidelines, the European Society of Clinical Microbiology and Infectious Diseases (ESCMID) guidelines, and the de Gans Dexamethasone trial.",
  otherReferences: [
    "van de Beek D, et al. ESCMID guideline on diagnosis and treatment of acute bacterial meningitis. Clin Microbiol Infect. 2016;22(Suppl 3):S37-S62.",
    "Tunkel AR, et al. Practice Guidelines for the Management of Bacterial Meningitis. Clin Infect Dis. 2004;39(9):1267-1284.",
    "de Gans J, et al. Dexamethasone in adults with bacterial meningitis. N Engl J Med. 2002;347(20):1549-1556.",
    "Hasbun R, et al. Computed tomography of the head before lumbar puncture in adults with suspected meningitis. N Engl J Med. 2001;345(24):1727-1733.",
    "Venkatesan A, et al. Diagnosis and management of acute encephalitis: consensus statement of the International Encephalitis Consortium. Clin Infect Dis. 2013;57(8):1114-1128.",
  ],
  relationships: [
    { type: "complication", targetId: "intracranial-hypertension", label: "Cerebral edema, hydrocephalus, and herniation management" },
    { type: "differential", targetId: "altered-consciousness", label: "Encephalopathy, acute delirium, and infectious coma" },
    { type: "complication", targetId: "status-epilepticus", label: "Cortical irritation, focal motor seizures, and nonconvulsive status epilepticus" },
    { type: "related-to", targetId: "sepsis", label: "Sepsis-induced vasoplegic shock and source identification" },
  ],
  sections: [
    {
      id: "meningitis-encephalitis.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "meningitis-guideline-idsa-2004",
          relevance: "IDSA practice guidelines on adjunctive dexamethasone and empiric antimicrobials in bacterial meningitis"
        },
        {
          kind: "trial",
          id: "meningitis-de-gans-trial",
          relevance: "de Gans & van de Beek trial proving adjunctive dexamethasone reduces mortality in pneumococcal meningitis"
        },
        {
          kind: "systematic-review",
          id: "meningitis-corticosteroids-cochrane-review",
          relevance: "Cochrane systematic review on adjunctive corticosteroids for acute bacterial meningitis"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Acute Meningitis (inflammation of the leptomeninges and subarachnoid space) and Encephalitis (inflammation of the brain parenchyma with neuropsychiatric dysfunction) represent life-threatening neuro-infectious emergencies requiring immediate empiric antimicrobial therapy, rapid diagnostic lumbar puncture, and aggressive neurocritical care.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Acute Central Nervous System (CNS) infections are among the most time-critical emergencies in critical care medicine. Bacterial meningitis carries a case-fatality rate of 15–25% in adults and up to 30–50% in pneumococcal infection, with permanent neurological sequelae in up to 50% of survivors.",
        },
        {
          type: "paragraph",
          text: "The cardinal ICU imperatives are: (1) Immediate blood cultures followed by INSTANT empiric antimicrobial administration and adjunct Dexamethasone (DO NOT delay antibiotics for neuroimaging or lumbar puncture!); (2) Rapid risk assessment for CT-before-LP criteria; (3) Comprehensive CSF diagnostic panel (cytology, biochemistry, Gram stain, FilmArray multiplex PCR, and HSV/VZV PCR); and (4) Vigilant management of intracranial hypertension, status epilepticus, and septic shock.",
        },
      ],
    },
    {
      id: "meningitis-encephalitis.physiology",
      kind: "physiology",
      title: "Pathophysiology: Blood-Brain Barrier Disruption, Purulence & Edema",
      summary: "Bacterial mucosal colonization, hematogenous seeding, subarachnoid cytokine cascade, and the triad of vasogenic, cytotoxic, and interstitial cerebral edema.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "The molecular and biophysical mechanisms of central nervous system infection:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Meningeal Invasion & Subarachnoid Purulence",
              value: "Pathogens (e.g. Streptococcus pneumoniae, Neisseria meningitidis, Listeria monocytogenes) cross the blood-brain barrier via receptor-mediated endocytosis. The subarachnoid space lacks complement and immunoglobulins, allowing explosive bacterial replication. Cell wall components (peptidoglycan, teichoic acid, lipopolysaccharide endotoxin) trigger massive microglial activation and release of TNF-alpha, IL-1beta, and IL-6.",
            },
            {
              label: "2. The Triad of Cerebral Edema in Meningitis",
              value: "• Vasogenic Edema: Inflammatory breakdown of tight junctions in brain capillary endothelial cells increases BBB permeability, causing albumin-rich fluid transudation into the white matter.\n• Cytotoxic Edema: Release of bacterial toxins, nitric oxide, and reactive oxygen species impairs astrocytic and neuronal Na+/K+-ATPase pumps, causing massive cellular intracellular swelling.\n• Interstitial (Hydrocephalic) Edema: Purulent exudate blocks arachnoid villi and the aqueduct of Sylvius, halting CSF resorption and causing acute communicating/obstructive hydrocephalus.",
            },
            {
              label: "3. Encephalitis & Neuronal Tropism",
              value: "In viral encephalitis (e.g. Herpes Simplex Virus 1 [HSV-1]), the virus enters via retrograde axonal transport along olfactory or trigeminal nerves, establishing hemorrhagic, necrotizing inflammation with a predilection for the temporal lobes, inferior frontal lobes, and limbic system.",
            },
            {
              label: "4. Infectious Vasculitis & Cortical Infarction",
              value: "Purulent inflammation surrounding Circle of Willis vessels induces infectious arteritis, vessel spasm, and cortical venous thrombosis, causing focal ischemic strokes in 15–20% of bacterial meningitis cases.",
            },
          ],
        },
      ],
    },
    {
      id: "meningitis-encephalitis.diagnosis-sequence",
      kind: "diagnosis",
      title: "Diagnostic Sequence, CT-Before-LP Criteria & CSF Interpretation",
      summary: "The 5 clinical indications for CT before Lumbar Puncture, CSF laboratory matrix (bacterial vs viral vs fungal), and molecular multiplex PCR.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "The clinical sequence and indications for neuroimaging prior to Lumbar Puncture (Hasbun NEJM Criteria):",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Indications for Head CT Before Lumbar Puncture",
              value: "Performing LP in the presence of mass effect can precipitate fatal brainstem herniation. A non-contrast head CT is mandatory prior to LP ONLY if any of the following 5 high-risk criteria are present:\n  1. Focal neurological deficit (e.g. hemiparesis, visual field cut, cranial nerve palsy)\n  2. New-onset seizure within 1 week of presentation\n  3. Papilledema on fundoscopic exam\n  4. Altered level of consciousness (GCS < 10 or severe somnolence)\n  5. Severe immunocompromise (HIV/AIDS, post-solid organ transplant, immunosuppressants).\n• If NONE of these 5 features are present, proceed DIRECTLY to bedside Lumbar Puncture without delaying for CT!",
            },
            {
              label: "2. The Golden Rule of Timing",
              value: "If a CT is required prior to LP: (1) Draw 2 sets of blood cultures; (2) Administer IV Dexamethasone + Empiric Antibiotics + Acyclovir IMMEDIATELY; (3) Send patient to CT; (4) Perform LP immediately post-CT. NEVER withhold or delay antimicrobial therapy while waiting for imaging or procedural completion.",
            },
          ],
        },
        {
          type: "paragraph",
          text: "Cerebrospinal Fluid (CSF) Diagnostic Matrix:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Acute Bacterial Meningitis",
              value: "• Opening Pressure: Elevated (> 200–300 mmH2O)\n• WBC: 1,000–10,000/uL (Marked Neutrophilic predominance > 80% PMNs)\n• Glucose: Low (< 40 mg/dL; CSF:Serum Glucose ratio < 0.40)\n• Protein: Markedly elevated (> 100–500 mg/dL)\n• Gram Stain: Positive in 60–80%; Multiplex BioFire ME PCR positive in > 95%.",
            },
            {
              label: "Viral Meningitis / Encephalitis (HSV, VZV, Enterovirus)",
              value: "• Opening Pressure: Normal to mildly elevated (100–250 mmH2O)\n• WBC: 50–500/uL (Lymphocytic predominance > 80%, may have early PMNs in first 24h)\n• Glucose: Normal (> 60% of serum glucose)\n• Protein: Mildly elevated (50–100 mg/dL)\n• Diagnostic: CSF HSV-1/2 PCR (sensitivity > 98%), VZV PCR; RBCs frequently present in HSV encephalitis.",
            },
            {
              label: "Fungal / Tuberculous Meningitis (Cryptococcus, TB)",
              value: "• Opening Pressure: Markedly elevated (> 300 mmH2O in Cryptococcus)\n• WBC: 100–500/uL (Lymphocytic predominance)\n• Glucose: Markedly decreased (< 30 mg/dL)\n• Protein: Very high (100–1000 mg/dL)\n• Diagnostic: Cryptococcal Antigen (CrAg, > 98% sensitive), Acid-Fast Bacilli (AFB) smear/culture, GeneXpert MTB/RIF.",
            },
          ],
        },
      ],
    },
    {
      id: "meningitis-encephalitis.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Acute Febrile Encephalopathy",
      summary: "Differentiate acute bacterial meningitis from viral meningoencephalitis (HSV), fungal/tubercular meningitis, and non-infectious autoimmune encephalitis.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Acute Bacterial Meningitis: Marked CSF neutrophilic pleocytosis (>1,000/uL), elevated opening pressure (>200-300 mmH2O), low CSF-to-serum glucose ratio (<0.40), high protein (>100-500 mg/dL).",
          "Herpes Simplex Virus (HSV-1) Encephalitis: Prominent temporal lobe edema, seizures, olfactory hallucinations, CSF lymphocytic pleocytosis with RBCs; requires immediate IV Acyclovir (10 mg/kg q8h).",
          "Autoimmune / Anti-NMDA Receptor Encephalitis: Prominent psychiatric symptoms, autonomic instability, dyskinesias, normal basic CSF; confirmed by CSF antibody panel."
]
        }
      ]
    },
    {
      id: "meningitis-encephalitis.management",
      kind: "management",
      title: "Stepped Empiric Pharmacotherapy & Neuro-ICU Resuscitation",
      summary: "The de Gans Dexamethasone protocol, host/age-specific antibiotic regimens, Listeria coverage with Ampicillin, and IV Acyclovir.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Stepped emergency pharmacotherapy for suspected acute CNS infection:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Adjunctive Dexamethasone Protocol (The de Gans NEJM Trial)",
              value: "• Dose: 10 mg IV administered with or 15–20 minutes BEFORE the first dose of antibiotics (giving steroids after antibiotics provides no benefit).\n• Evidence: Significantly reduces 8-week mortality (from 15% to 7%) and prevents severe sensorineural hearing loss in adults with Streptococcus pneumoniae meningitis.\n• Maintenance: 10 mg IV q6h for 4 days. If CSF confirms S. pneumoniae, continue full 4-day course. If CSF confirms N. meningitidis, H. influenzae, or viral etiology, discontinue dexamethasone.",
            },
            {
              label: "2. Empiric Antimicrobial Regimens by Host Context",
              value: "• Adults 18–49 Years (Streptococcus pneumoniae, Neisseria meningitidis):\n  - Ceftriaxone: 2.0 g IV every 12 hours (or Cefotaxime 2.0 g IV q4h)\n  PLUS\n  - Vancomycin: 15–20 mg/kg IV q8–12h (loading 25–30 mg/kg, target trough 15–20 mcg/mL or AUC 400–600 to cover cephalosporin-resistant pneumococci).\n• Adults ≥ 50 Years or Immunocompromised / Alcohol Use / Malignancy (Adds Listeria monocytogenes coverage):\n  - Ceftriaxone (2 g q12h) + Vancomycin (15–20 mg/kg q8–12h)\n  PLUS\n  - Ampicillin: 2.0 g IV every 4 hours (Listeria is inherently resistant to all cephalosporins!).\n• Post-Neurosurgical, Penetrating Head Trauma, or CSF Shunts (Pseudomonas, Staphylococci, Enterobacterales):\n  - Vancomycin (15–20 mg/kg q8–12h) PLUS Cefepime (2.0 g IV q8h) or Meropenem (2.0 g IV q8h).\n• Severe Beta-Lactam Allergy (Anaphylaxis):\n  - Vancomycin (15–20 mg/kg) + Moxifloxacin (400 mg IV q24h) + TMP-SMX (5 mg/kg IV q6–8h for Listeria).",
            },
            {
              label: "3. Empiric Antiviral Therapy (HSV & VZV Encephalitis)",
              value: "• IV Acyclovir: 10 mg/kg IV every 8 hours infused over 1 hour (dosed on ideal body weight; adjust for renal failure).\n• Maintain aggressive IV hydration to prevent acyclovir obstructive crystalline nephropathy in renal tubules.\n• Continue acyclovir for 14–21 days if CSF HSV-1 PCR is positive.",
            },
            {
              label: "4. Droplet Isolation & Chemoprophylaxis",
              value: "Maintain respiratory droplet isolation for suspected Neisseria meningitidis until 24 hours of effective IV antibiotics have been completed. Provide post-exposure chemoprophylaxis (Rifampin 600 mg PO bid x 2 days OR single-dose Ciprofloxacin 500 mg PO OR Ceftriaxone 250 mg IM) to close household contacts and healthcare personnel with direct respiratory secretion exposure (e.g. during intubation without PPE).",
            },
          ],
        },
      ],
    },
    {
      id: "meningitis-encephalitis.complications",
      kind: "complications",
      title: "ICU-Level Complications & Neuro-Monitoring",
      summary: "Refractory intracranial hypertension, nonconvulsive status epilepticus, cerebral salt wasting, and cranial nerve palsies.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Severe Cerebral Edema & Brain Herniation: High opening pressure and mass effect; manage with 3% Hypertonic Saline (250 mL boluses, target Na+ 145–155 mEq/L), HOB 30°, and sedation.",
            "Nonconvulsive Status Epilepticus (NCSE): Occurs in up to 30% of comatose encephalitis patients; requires continuous electroencephalography (cEEG) and aggressive anti-seizure medication (Levetiracetam 60 mg/kg, Valproate 40 mg/kg).",
            "Severe Hyponatremia (SIADH vs Cerebral Salt Wasting): Frequent complication; maintain serum sodium strictly > 135–140 mEq/L with isotonic fluids or hypertonic saline to prevent worsening brain edema.",
            "Waterhouse-Friderichsen Syndrome: Acute bilateral adrenal hemorrhage in fulminant meningococcemia, causing catastrophic refractory vasodilatory shock; treated with stress-dose IV Hydrocortisone (100 mg q8h) and vasopressors.",
            "Persistent Sensorineural Hearing Loss & Cognitive Impairment: Cranial nerve VIII damage from purulent labyrinthitis and cochlear inflammation (prevented by early Dexamethasone).",
          ],
        },
      ],
    },
    {
      id: "meningitis-encephalitis.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical mistakes in managing acute meningitis and encephalitis.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Delaying empiric antibiotics to obtain a CT scan or perform an LP: In bacterial meningitis, every 30-minute delay in antibiotic administration directly increases mortality; give Dexamethasone and broad-spectrum antibiotics immediately.",
            "Administering Dexamethasone hours after the first antibiotic dose: Steroids must be given BEFORE or WITH the first antibiotic dose; late steroids do not improve outcomes and may cause unnecessary immunosuppression.",
            "Forgetting Ampicillin in patients ≥ 50 years or immunocompromised: Ceftriaxone and Vancomycin have ZERO activity against Listeria monocytogenes; always add Ampicillin 2g q4h in this population.",
            "Failing to place an HSV encephalitis patient on IV Acyclovir due to a normal initial CT: Early CT is normal in > 50% of HSV encephalitis cases; start Acyclovir immediately upon clinical suspicion of fever + altered mentation/seizures.",
            "Fluid-restricting an encephalitis patient for hyponatremia: True cerebral salt wasting causes intravascular hypovolemia; fluid restriction compromises cerebral perfusion pressure; use isotonic or hypertonic saline instead.",
          ],
        },
      ],
    },
    {
      id: "meningitis-encephalitis.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Dexamethasone in non-pneumococcal bacterial meningitis and Autoimmune Encephalitis testing.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Dexamethasone in Non-Pneumococcal Meningitis: While the benefit of dexamethasone is unequivocally established in Streptococcus pneumoniae meningitis, its role in Neisseria meningitidis remains controversial. Subgroup analyses show a non-significant trend toward reduced hearing loss in meningococcal meningitis without harm, leading the IDSA and ESCMID guidelines to recommend initiating dexamethasone in all suspected bacterial meningitis cases and stopping if non-pneumococcal etiology is confirmed.",
        },
        {
          type: "paragraph",
          text: "Autoimmune & Paraneoplastic Encephalitis: Patients presenting with subacute cognitive decline, psychiatric symptoms, refractory status epilepticus, and normal infectious PCR panels should be tested for anti-NMDAR, anti-LGI1, and CASPR2 antibodies. Treatment involves early first-line immunotherapy (High-Dose Methylprednisolone 1g IV daily x 5 days + IVIG 2g/kg or Plasma Exchange).",
        },
      ],
    },
  ],
};
