import type { Topic } from "@/content-types";

export const neuromuscularCriticalIllness: Topic = {
  id: "neuromuscular-critical-illness",
  slug: "neuromuscular-critical-illness",
  title: "Neuromuscular Critical Illness & ICU-Acquired Weakness",
  category: "neurology",
  oneLiner: "Ventilatory pump failure, bedside 20/30/40 monitoring, GBS/myasthenic crisis immunotherapy, CIP/CIM differentiation, and liberation.",
  status: "complete",
  lastReviewed: "2026-08-17",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Neuromuscular Diseases in the ICU and ICU-Acquired Weakness",
    },
    {
      title: "Oh's Intensive Care Manual",
      edition: "8th Edition, 2019",
      note: "Chapter on Acute Neuromuscular Emergencies in Critical Care",
    },
  ],
  currentStatus: "Current as of the 2021 EAN/PNS Guillain-Barré Guidelines, the 2020 International Myasthenia Gravis Consensus, the 2018 SCCM PADIS Guidelines on ICU-Acquired Weakness, and the Schweickert Early Mobility Landmark Trial.",
  otherReferences: [
    "van Doorn PA, et al. European Academy of Neurology/Peripheral Nerve Society guideline on diagnosis and treatment of Guillain-Barré syndrome. Eur J Neurol. 2023;30(12):3646-3674.",
    "Narayanaswami P, et al. International Consensus Guidance for Management of Myasthenia Gravis: 2020 Update. Neurology. 2021;96(3):114-122.",
    "Schweickert WD, et al. Early physical and occupational therapy in mechanically ventilated, critically ill patients: a randomised controlled trial. Lancet. 2009;373(9678):1874-1882.",
    "Hughes RA, et al. Intravenous immunoglobulin for Guillain-Barré syndrome. Cochrane Database Syst Rev. 2014;(9):CD002063.",
    "Plasma Exchange/Sandoglobulin GBS Trial Group. Randomised trial of plasma exchange, intravenous immunoglobulin, and combined treatments in Guillain-Barré syndrome. Lancet. 1997;349(9047):225-230.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "mechanical-ventilation", label: "Mechanical ventilation physiology and invasive support" },
    { type: "complication", targetId: "hypercapnic-respiratory-failure", label: "Ventilatory pump exhaustion and acute hypercapnia" },
    { type: "complication", targetId: "icu-sedation-delirium", label: "Immobility, deep sedation, and neuromuscular weakness" },
    { type: "differential", targetId: "severe-sodium-disorders", label: "Electrolyte-induced severe weakness and flaccidity" },
    { type: "differential", targetId: "toxicologic-emergencies", label: "Neurotoxic paralysis (botulism, organophosphates)" },
    { type: "treated-with", targetId: "airway-management-rsi", label: "Urgent endotracheal intubation for pump and bulbar failure" },
  ],
  sections: [
    {
      id: "neuromuscular-critical-illness.overview",
      kind: "overview",
      title: "Overview",
      summary: "Neuromuscular critical illness encompasses primary neuromuscular emergencies causing ventilatory pump failure (GBS, myasthenic crisis, botulism) and secondary critical illness polyneuromyopathy (CIP/CIM) developed during sepsis, multiorgan failure, and prolonged ventilation.",
      provenance: "textbook",
      evidenceRefs: [
        { kind: "guideline", id: "gbs-guideline-aan-ean-2021", relevance: "EAN/PNS guideline on GBS recognition and immunotherapy" },
        { kind: "guideline", id: "myasthenia-guideline-international-consensus-2020", relevance: "International consensus on myasthenic crisis management" }
      ],
      body: [
        {
          type: "paragraph",
          text: "Acute neuromuscular failure represents primary failure of the ventilatory bellows and upper airway protection, as opposed to parenchymal gas exchange failure. Patients can maintain normal arterial blood gases until terminal diaphragmatic exhaustion occurs, making reliance on hypoxemia or hypercapnia alone dangerously misleading.",
        },
        {
          type: "paragraph",
          text: "In the ICU, neuromuscular weakness presents in two primary settings: (1) Rapidly ascending flaccid weakness, fatiguable weakness, or bulbar failure requiring admission for serial pulmonary mechanics, airway protection, and disease-modifying immunotherapy; and (2) ICU-Acquired Weakness (ICUAW: Critical Illness Polyneuropathy CIP, Critical Illness Myopathy CIM, or combined CIPNM), which affects >40–50% of septic, mechanically ventilated patients and is a leading cause of prolonged mechanical ventilation and post-ICU disability.",
        },
      ],
    },
    {
      id: "neuromuscular-critical-illness.physiology",
      kind: "physiology",
      title: "Respiratory Muscle Physiology & Pump Failure Mechanics",
      summary: "Diaphragm, accessory muscles, abdominal wall, and bulbar innervation governing ventilation, secretion clearance, and airway defense.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "The respiratory pump comprises three distinct functional muscle groups operating in series: (1) Inspiratory muscles (Diaphragm innervated by C3–C5 phrenic nerves generating 70% of resting tidal volume; scalenes and sternocleidomastoids for accessory inspiratory lift); (2) Expiratory muscles (Rectus abdominis, internal obliques, transversus abdominis, and internal intercostals generating high positive intra-thoracic pressures required for effective peak cough flow >= 160 L/min); and (3) Bulbar and Upper Airway musculature (Cranial nerves IX, X, XII maintaining pharyngeal patency, glottic closure, and swallowing).",
        },
        {
          type: "paragraph",
          text: "Mechanics of Pump Failure: As muscle strength wanes, tidal volume decreases, microatelectasis develops, and lung compliance falls. The work of breathing increases exponentially. Rapid shallow breathing ensues to minimize elastic work. When diaphragmatic force is exhausted, paradoxical abdominal motion (inward collapse of the anterior abdominal wall during inspiration) appears, signifying impending catastrophic respiratory arrest.",
        },
      ],
    },
    {
      id: "neuromuscular-critical-illness.bedside-respiratory-assessment",
      kind: "management",
      title: "Bedside Respiratory Assessment & The 20/30/40 Rule",
      summary: "Serial trajectory of Forced Vital Capacity (FVC), Negative Inspiratory Force (NIF/MIP), Maximum Expiratory Pressure (MEP), single-breath count, and bulbar secretion assessment.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Bedside spirometry and manometry must be performed serially (every 4–6 hours during acute deterioration). The classic '20/30/40 rule' provides clinical warning thresholds for impending pump failure:",
        },
        {
          type: "list", ordered: false,
          items: [
            "Forced Vital Capacity (FVC): Normal is 60–70 mL/kg. FVC < 30 mL/kg indicates significant impairment; FVC < 15–20 mL/kg represents impending ventilatory exhaustion requiring elective intubation.",
            "Negative Inspiratory Force / Maximum Inspiratory Pressure (NIF / MIP): Normal is -70 to -100 cmH2O. NIF worse than -30 cmH2O (i.e. -20 to 0 cmH2O) indicates severe inspiratory muscle weakness unable to sustain spontaneous tidal breathing.",
            "Maximum Expiratory Pressure (MEP): Normal is > 80–100 cmH2O. MEP < 40 cmH2O indicates severe expiratory muscle failure, predicting inability to generate an effective cough and fatal secretion retention.",
            "Single-Breath Count Test: Simple bedside screen: asking the patient to count aloud at 2 Hz after a single maximal breath. Counting to < 20 correlates with FVC < 20 mL/kg; < 15 indicates urgent need for airway control.",
            "Serial Trajectory & Bulbar Assessment: A rapid downward trajectory (e.g., FVC dropping by > 30–50% within 12 hours), inability to manage oral secretions (drooling, wet phonation), weak cough, or neck flexor weakness (inability to lift head from pillow) supersedes any single number. Do NOT wait for hypercapnia on ABG.",
          ],
        },
      ],
    },
    {
      id: "neuromuscular-critical-illness.guillain-barre-syndrome",
      kind: "management",
      title: "Guillain-Barré Syndrome in the ICU",
      summary: "Acute ascending flaccid paralysis, life-threatening dysautonomia, immunotherapy (IVIG vs Plasma Exchange), and strict contraindication to succinylcholine.",
      provenance: "guideline",
      evidenceRefs: [
        { kind: "trial", id: "neuromuscular-gbs-ivig-plex-trial", relevance: "GBS IVIG vs PLEX trial showing equal efficacy" }
      ],
      body: [
        {
          type: "paragraph",
          text: "Guillain-Barré Syndrome (GBS: acute inflammatory demyelinating polyradiculoneuropathy AIDP and axonal variants AMAN/AMSAN) causes symmetric, ascending flaccid weakness, areflexia, and cranial nerve involvement. Up to 20–30% of patients require mechanical ventilation for respiratory failure, and dysautonomia is a major cause of sudden ICU mortality.",
        },
        {
          type: "list", ordered: false,
          items: [
            "Disease-Modifying Immunotherapy: Intravenous Immunoglobulin (IVIG 0.4 g/kg/day IV for 5 days, total 2.0 g/kg) OR Plasma Exchange (PLEX: 200–250 mL/kg total plasma volume exchanged across 5 sessions over 10–14 days). Both modalities have equal efficacy (Hughes Cochrane review, Lancet 1997 trial). Combining IVIG and PLEX confers no additional benefit.",
            "Corticosteroids are Ineffective: High-dose oral or intravenous corticosteroids alone do NOT improve recovery and are not recommended in GBS.",
            "Autonomic Instability Management: Severe blood pressure lability (profound hypertension alternating with severe neurogenic hypotension), malignant bradyarrhythmias, sinus arrest, and paralytic ileus. Avoid long-acting vasodilators or aggressive antihypertensives; use short-acting agents (esmolol, clevidipine) and have transcutaneous/temporary transvenous pacing readily available at the bedside.",
            "Succinylcholine is ABSOLUTELY CONTRAINDICATED: Denervation-induced upregulation of extrajunctional acetylcholine receptors across all skeletal muscle causes massive, life-threatening potassium release upon depolarization, leading to hyperkalemic cardiac arrest. Always use rocuronium for endotracheal intubation.",
          ],
        },
      ],
    },
    {
      id: "neuromuscular-critical-illness.myasthenic-crisis",
      kind: "management",
      title: "Myasthenic Crisis in the ICU",
      summary: "Acute autoantibody-mediated neuromuscular junction failure, medication precipitants, airway protection, immunotherapy, and holding cholinesterase inhibitors.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Myasthenic Crisis is life-threatening respiratory or bulbar muscle weakness in Myasthenia Gravis (autoantibodies against postsynaptic nicotinic acetylcholine receptors AChR, MuSK, or LRP4), requiring ventilatory support.",
        },
        {
          type: "list", ordered: false,
          items: [
            "Precipitants: Acute infection (pneumonia, UTI), surgical stress, pregnancy, corticosteroid initiation/taper, and medication exposures (aminoglycosides, fluoroquinolones, macrolides, beta-blockers, magnesium, iodinated radiocontrast, procainamide, neuromuscular blockers).",
            "Emergency Immunotherapy: Plasma Exchange (PLEX, 5 exchanges over 10–14 days) or IVIG (2 g/kg total over 2–5 days) to rapidly clear pathogenic autoantibodies. High-dose corticosteroids (prednisone 60–80 mg daily or IV methylprednisolone) are initiated concurrently under IVIG/PLEX coverage (to avoid transient paradoxical worsening during steroid initiation).",
            "Management of Oral Pyridostigmine: Temporarily discontinue or markedly reduce oral acetylcholinesterase inhibitors (pyridostigmine) during intubated mechanical ventilation. Continuing pyridostigmine floods the bronchial tree with copious cholinergic secretions, induces bronchospasm, and complicates the clinical picture with cholinergic crisis.",
            "Airway & Intubation: Perform rapid elective intubation before aspiration or exhaustion occurs. If neuromuscular blockers are required, rocuronium is preferred with sugammadex available for immediate reversal. (Patients with MG have unpredictable sensitivity and resistance to muscle relaxants).",
          ],
        },
      ],
    },
    {
      id: "neuromuscular-critical-illness.other-neuromuscular-emergencies",
      kind: "management",
      title: "Other Acute Neuromuscular Emergencies",
      summary: "Botulism, Lambert-Eaton Myasthenic Syndrome (LEMS), acute high cervical cord myelopathy, and inflammatory myopathies in the ICU.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "A structured differential diagnosis is critical for acute flaccid paralysis and ventilatory pump failure in the ICU:",
        },
        {
          type: "list", ordered: false,
          items: [
            "Botulism (*Clostridium botulinum* neurotoxin inhibiting presynaptic acetylcholine release): Presents with acute descending flaccid paralysis, prominent early symmetric cranial neuropathies (ptosis, ophthalmoplegia, fixed dilated pupils, dysphagia), dry mouth, and clear sensorium. Management: Immediate administration of Heptavalent Botulinum Antitoxin (BAT) prior to microbiological confirmation; mechanical ventilatory support.",
            "Lambert-Eaton Myasthenic Syndrome (LEMS: antibodies against presynaptic P/Q-type voltage-gated calcium channels, often paraneoplastic with small cell lung cancer): Proximal limb weakness improving transiently with repetitive effort, hyporeflexia, and autonomic dry mouth/erectile dysfunction. Management: 3,4-Diaminopyridine (amifampridine), IVIG, treatment of underlying malignancy.",
            "Acute Cervical Cord Myelopathy / Transverse Myelitis (C3–C5): Sudden quadriparesis with diaphragmatic paralysis and sensory level. Often accompanied by neurogenic shock (hypotension with relative bradycardia). Management: High-dose IV steroids, urgent MRI, neurosurgical decompression.",
          ],
        },
      ],
    },
    {
      id: "neuromuscular-critical-illness.icu-acquired-weakness",
      kind: "management",
      title: "ICU-Acquired Weakness (CIP, CIM & Diaphragm Dysfunction)",
      summary: "Pathophysiology of Critical Illness Polyneuropathy (CIP), Critical Illness Myopathy (CIM), risk factors, MRC sum score, and early mobilization protocols.",
      provenance: "guideline",
      evidenceRefs: [
        { kind: "trial", id: "neuromuscular-early-mobility-schweickert-trial", relevance: "Schweickert trial proving early mobilization improves functional independence" }
      ],
      body: [
        {
          type: "paragraph",
          text: "ICU-Acquired Weakness (ICUAW) is clinically detected generalized muscle weakness developing during critical illness in the absence of a plausible etiology other than the critical illness itself. It encompasses three overlapping syndromes:",
        },
        {
          type: "list", ordered: false,
          items: [
            "Critical Illness Myopathy (CIM): Primary non-necrotizing diffuse myopathy characterized by selective loss of thick myosin filaments, reduced muscle membrane excitability, and muscle atrophy.",
            "Critical Illness Polyneuropathy (CIP): Distal axonal sensorimotor polyneuropathy with primary axonal degeneration of motor and sensory fibers.",
            "Ventilator-Induced Diaphragm Dysfunction (VIDD): Rapid diaphragmatic myofiber atrophy and contractile proteolysis occurring within 18–48 hours of controlled mechanical ventilation.",
            "Diagnostic Criteria: Medical Research Council (MRC) sum score < 48/60 (testing 6 muscle groups bilaterally, score 0–5 each: shoulder abductors, elbow flexors, wrist extensors, hip flexors, knee extensors, ankle dorsiflexors). Electrophysiology (EMG/NCS) and muscle ultrasound (diaphragmatic thickening fraction < 20%) confirm diagnosis.",
            "Prevention & Interventions (Schweickert Landmark Trial): Daily interruption of sedation paired with early progressive physical and occupational rehabilitation (reduces delirium, shortens mechanical ventilation duration, and increases return to independent function at discharge, OR 2.7, P = 0.02); minimizing unnecessary neuromuscular blockade; protocolized blood glucose control; minimizing deep sedative infusions.",
          ],
        },
      ],
    },
    {
      id: "neuromuscular-critical-illness.ventilator-liberation",
      kind: "management",
      title: "Ventilator Liberation & Airway Clearance in Neuromuscular Disease",
      summary: "Managing post-extubation failure risk, cough augmentation (MIE), noninvasive ventilation, and tracheostomy timing.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Weaning and extubation in neuromuscular disease differ fundamentally from parenchymal lung disease. Neuromuscular patients often easily pass standard Spontaneous Breathing Trials (SBT) and have normal gas exchange, yet fail extubation precipitously within 12–24 hours due to an ineffective cough, inability to clear secretions, and bulbar aspiration.",
        },
        {
          type: "list", ordered: false,
          items: [
            "Extubation Readiness Assessment: Evaluate peak expiratory cough flow (PECF >= 160 L/min indicates sufficient cough to clear secretions), Maximum Expiratory Pressure (MEP > 40 cmH2O), secretion volume, and swallowing/bulbar integrity.",
            "Cough Augmentation & Mechanical Insufflation-Exsufflation (MIE): Routine post-extubation protocol combining lung volume recruitment (air stacking) and mechanical in-exsufflation (cough assist: positive pressure inflation followed by rapid negative pressure exsufflation) drastically lowers re-intubation rates.",
            "Prophylactic Post-Extubation NIV: Prophylactic application of noninvasive bilevel ventilation immediately upon extubation supports the fatigued ventilatory pump in cooperative patients with intact bulbar function.",
            "Tracheostomy Timing: For patients with severe GBS, severe CIPNM, or complete bulbar paralysis with anticipated prolonged mechanical ventilation (> 10–14 days), early elective tracheostomy facilitates comfortable secretion clearance, speech valve rehabilitation, and progressive physical mobility.",
          ],
        },
      ],
    },
    {
      id: "neuromuscular-critical-illness.monitoring",
      kind: "monitoring",
      title: "ICU Monitoring & Neurologic Trajectory",
      summary: "Serial FVC/NIF manometry, continuous telemetry for autonomic dysreflexia, daily MRC scoring, and diaphragm ultrasound.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Protocolized ICU monitoring is vital to anticipate respiratory collapse before emergency airway management is forced under hypoxemic conditions.",
        },
        {
          type: "list", ordered: false,
          items: [
            "Serial Pulmonary Mechanics: FVC, NIF/MIP, and MEP measured at bedside every 4–6 hours during the acute progressive phase.",
            "Continuous Telemetry: High sensitivity for sinus bradycardia, sinus arrest, heart block, and malignant tachyarrhythmias in GBS dysautonomia.",
            "Continuous Capnography & Pulse Oximetry: Detection of hypoventilation and microatelectasis.",
            "Diaphragm Ultrasound: Monitoring diaphragmatic excursion and thickening fraction during spontaneous breathing efforts.",
            "Daily Functional Strength Scoring: Standardized daily MRC sum score to track recovery from ICUAW.",
          ],
        },
      ],
    },
    {
      id: "neuromuscular-critical-illness.complications",
      kind: "complications",
      title: "Complications & Red Lines",
      summary: "Sudden respiratory arrest, lethal hyperkalemia from succinylcholine, autonomic cardiovascular collapse, and pulmonary embolism.",
      provenance: "textbook",
      body: [
        {
          type: "list", ordered: false,
          items: [
            "Sudden Asphyxiation / Respiratory Arrest: Catastrophic respiratory arrest from acute diaphragmatic fatigue or massive glottic aspiration.",
            "Succinylcholine-Induced Hyperkalemic Cardiac Arrest: Fatal hyperkalemic arrest caused by depolarizing paralytic administration in subacute GBS, myelopathy, or prolonged immobility.",
            "Autonomic Storm & Asystole: Malignant blood pressure swings and severe vagal bradycardia / asystolic arrest during endotracheal suctioning in GBS.",
            "Massive Venous Thromboembolism: High risk of DVT and fatal pulmonary embolism from complete flaccid lower extremity immobility.",
            "Post-Intensive Care Syndrome (PICS): Severe chronic functional impairment, contractures, and chronic neuromuscular disability.",
          ],
        },
      ],
    },
    {
      id: "neuromuscular-critical-illness.pitfalls",
      kind: "complications",
      title: "Common Pitfalls & Clinical Pearls",
      summary: "Critical mistakes in managing neuromuscular respiratory failure.",
      provenance: "textbook",
      body: [
        {
          type: "list", ordered: false,
          items: [
            "Waiting for Arterial Blood Gas Abnormalities Before Intubating: Arterial blood gases remain normal until the patient is in extremis. Intubation must be guided by vital capacity trajectory (< 15–20 mL/kg), NIF (> -30 cmH2O), and bulbar failure, not PaO2 or PaCO2.",
            "Using Succinylcholine in Neuromuscular Disease: Administering succinylcholine in patients with GBS, motor neuron disease, or critical illness polyneuromyopathy triggers lethal hyperkalemic cardiac arrest. Always use rocuronium.",
            "Administering Corticosteroids as Monotherapy in GBS: Large randomized trials and meta-analyses prove corticosteroids alone do not improve GBS outcomes and may delay recovery; use IVIG or Plasma Exchange.",
            "Extubating Based Solely on Normal Gas Exchange: Passing an SBT with normal ABG does not ensure extubation success in neuromuscular patients. Always verify peak cough flow (PECF >= 160 L/min) and bulbar airway protection before removing the endotracheal tube.",
          ],
        },
      ],
    },
  ],
};
