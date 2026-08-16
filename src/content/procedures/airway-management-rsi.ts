import type { Topic } from "@/content-types";

export const airwayManagementRsi: Topic = {
  id: "airway-management-rsi",
  slug: "airway-management-rsi",
  title: "Airway Management & Rapid Sequence Intubation",
  category: "procedures",
  oneLiner: "The 7 Ps of ICU intubation, the physiologically difficult airway, BOUGIE/DEVICE video laryngoscopy trials, hemodynamic optimization, waveform capnography, and scalpel-bougie cricothyroidotomy.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Airway Management in the ICU, Rapid Sequence Intubation, and The Difficult and Failed Airway",
    },
    {
      title: "Guidelines for the management of tracheal intubation in critically ill adults (Difficult Airway Society / Intensive Care Society)",
      edition: "Br J Anaesth 2018;120(2):323-352",
    },
  ],
  currentStatus: "Current as of the DAS/ICS Guidelines for Tracheal Intubation in Critically Ill Adults, the 2022 ASA Difficult Airway Practice Guidelines, and the BOUGIE and DEVICE clinical trials.",
  otherReferences: [
    "Higgs A, et al. Guidelines for the management of tracheal intubation in critically ill adults. Br J Anaesth. 2018;120(2):323-352.",
    "Driver BE, et al. Effect of Use of a Bougie vs Endotracheal Tube and Stylet on First-Pass Success Among Patients With Difficult Airways (BOUGIE trial). JAMA. 2018;319(21):2179-2189.",
    "Prekker ME, et al. Video versus Direct Laryngoscopy for Tracheal Intubation of Critically Ill Adults (DEVICE trial). N Engl J Med. 2023;389(5):418-429.",
    "Mosier JM, et al. The physiologically difficult airway. West J Emerg Med. 2015;16(7):1109-1117.",
    "De Jong A, et al. Identification of difficult tracheal intubation in the ICU: the MACOCHA score. Intensive Care Med. 2013;39(4):597-606.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "mechanical-ventilation", label: "Immediate post-intubation ventilator setup and lung-protective initiation" },
    { type: "complication", targetId: "shock", label: "Post-intubation hypotension, induction vasoplegia, and peri-intubation arrest" },
    { type: "prerequisite", targetId: "hypoxemic-respiratory-failure", label: "Pre-oxygenation strategies, flush-rate NRB, and apneic oxygenation" },
    { type: "prerequisite", targetId: "hypercapnic-respiratory-failure", label: "Ventilatory failure and acute respiratory acidosis triggers" },
    { type: "related-to", targetId: "respiratory-failure-basics", label: "Physiological indications for invasive mechanical support" },
  ],
  sections: [
    {
      id: "airway-management-rsi.overview",
      evidenceRefs: [
        {
          kind: "trial",
          id: "airway-prevent-trial",
          relevance: "PREVENT trial establishing bag-mask ventilation during RSI reduces peri-intubation hypoxemia"
        },
        {
          kind: "systematic-review",
          id: "airway-videolaryngoscopy-cochrane-review",
          relevance: "Cochrane systematic review demonstrating videolaryngoscopy improves first-pass intubation success"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Endotracheal Intubation in the Intensive Care Unit is a high-risk resuscitation procedure performed in critically ill patients with severe physiological derangements, carrying a 10-fold higher rate of severe hypoxemia, cardiovascular collapse, and peri-intubation cardiac arrest compared to operating room intubation.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Endotracheal intubation in the ICU is fundamentally distinct from elective operating room induction. Over 40% of ICU intubations suffer from acute hypoxemic or hemodynamic complications, and peri-intubation cardiac arrest occurs in 2% to 3% of cases. The primary challenge is rarely anatomical alone; rather, it is the 'Physiologically Difficult Airway'—intubating a patient with severe hypoxemic shunt, metabolic acidosis, right ventricular failure, or profound shock.",
        },
        {
          type: "paragraph",
          text: "The clinical priority in critical care airway management is protocolized risk mitigation: (1) Anticipation and pre-optimization of anatomical (MACOCHA score) and physiological failure points; (2) Aggressive pre-oxygenation and Apneic Oxygenation (NO DESAT); (3) Hemodynamic pre-resuscitation with push-dose vasopressors; (4) Routine use of Video Laryngoscopy combined with a Bougie (the DEVICE & BOUGIE trial standard); (5) Mandatory continuous waveform capnography; and (6) Mastery of the failed airway algorithm (Supraglottic rescue -> Scalpel-Bougie-Tube cricothyroidotomy).",
        },
      ],
    },
    {
      id: "airway-management-rsi.physiology-risk",
      kind: "physiology",
      title: "The Physiologically Difficult Airway & Peri-Intubation Arrest Dynamics",
      summary: "Cardiorespiratory collapse mechanisms: loss of sympathetic tone, positive-pressure venous return collapse, right ventricular strain, and loss of respiratory compensation.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "The biophysical mechanisms that precipitate hemodynamic collapse and cardiac arrest during ICU intubation:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Induction Vasoplegia & Loss of Sympathetic Tone",
              value: "Critically ill patients in shock maintain borderline blood pressure through maximal endogenous sympathetic tone. Induction sedatives (especially Propofol, but also high-dose Benzodiazepines and Opioids) abolish sympathetic outflow and induce severe peripheral vasodilation and direct myocardial depression.",
            },
            {
              label: "2. Positive-Pressure Transition & Venous Return Collapse",
              value: "Transitioning from negative-pressure spontaneous breathing to positive-pressure mechanical ventilation increases mean intrathoracic pressure. This sharply decreases the pressure gradient for systemic venous return to the right heart, collapsing RV preload and stroke volume. In hypovolemic or vasoplegic patients, this triggers instant profound hypotension.",
            },
            {
              label: "3. Right Ventricular Failure & Acute Cor Pulmonale",
              value: "In acute pulmonary hypertension or RV failure (e.g. severe PE, ARDS), induction-induced hypotension collapses right coronary artery perfusion, while hypoxemia and hypercapnia during apnea cause acute pulmonary vasoconstriction, precipitating catastrophic RV ischemic arrest.",
            },
            {
              label: "4. Severe Metabolic Acidosis & The Apnea Death Trap",
              value: "Patients with severe metabolic acidosis (e.g. DKA, severe lactic acidosis with pH < 7.10) maintain life by massive compensatory hyperventilation (minute ventilation > 20–30 L/min with PaCO2 < 15–20 mmHg). Inducing apnea for even 30 to 60 seconds causes PaCO2 to rise by 6–10 mmHg, dropping arterial pH to < 6.80, precipitating electromechanical dissociation (PEA) arrest.",
            },
          ],
        },
      ],
    },
    {
      id: "airway-management-rsi.assessment",
      kind: "diagnosis",
      title: "Airway Assessment: The MACOCHA Score & Indications for Intubation",
      summary: "Clinical triggers for invasive airway control and the 12-point MACOCHA score for ICU difficult intubation prediction.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Indications for endotracheal intubation in the ICU and risk stratification:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. The 4 Fundamental Indications for Intubation",
              value: "1. Failure of Oxygenation: Refractory hypoxemia (PaO2/FiO2 ≤ 100–150 mmHg) despite maximal non-invasive support (HFNC / NIV).\n2. Failure of Ventilation: Acute hypercapnic respiratory acidosis (pH < 7.20, rising PaCO2) with respiratory muscle exhaustion and diaphragmatic fatigue.\n3. Failure of Airway Protection: Depressed level of consciousness (GCS ≤ 8), loss of protective gag/cough reflexes, massive upper GI bleeding, severe facial trauma, or pooling secretions.\n4. Anticipated Clinical Course: Impending airway obstruction (inhalational burn, expanding neck hematoma, angioedema, epiglottitis) or anticipated deterioration during transport/procedures.",
            },
            {
              label: "2. The MACOCHA Score for Difficult ICU Intubation (0–12 Points)",
              value: "• Patient-Related Factors:\n  - Mallampati Class III or IV (5 points)\n  - Obstructive Sleep Apnea syndrome (2 points)\n  - Reduced Cervical spine mobility (1 point)\n  - Limited Mouth opening < 3 cm (1 point)\n• Pathological Factors:\n  - Coma (GCS < 8) (1 point)\n  - Severe Hypoxemia (PaO2/FiO2 < 200 or SpO2 < 80%) (1 point)\n• Operator-Related Factors:\n  - Non-Anesthesiologist operator (1 point)\n• Score Interpretation: MACOCHA Score ≥ 3 points predicts difficult intubation with high sensitivity and specificity; mandates presence of senior expert, video laryngoscope, and immediate preparation of difficult airway cart.",
            },
          ],
        },
      ],
    },
    {
      id: "airway-management-rsi.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Risk Stratification: Anatomically vs Physiologically Difficult Airway",
      summary: "Distinguish purely anatomical intubation difficulty (LEMON criteria) from physiological intubation collapse risk (HOP criteria).",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Anatomically Difficult Airway", value: "LEMON criteria (Look externally, 3-3-2 rule, Mallampati, Obstruction, Neck mobility), severe cervical trauma, morbid obesity. Management: Videolaryngoscopy with hyperangulated blade or awake fiberoptic intubation." },
            { label: "Physiologically Difficult Airway", value: "• Hemodynamics: Shock index > 0.8-1.0 (pre-load with norepinephrine push doses).\n• Oxygenation: Severe shunt (preoxygenate with HFNC + BiPAP).\n• pH / Acidosis: Severe metabolic acidosis (spontaneous minute ventilation > 25 L/min; minimize apnea time to prevent lethal acidosis spike)." }
          ]
        }
      ]
    },
    {
      id: "airway-management-rsi.the-7-ps",
      kind: "management",
      title: "The 7 Ps of ICU Rapid Sequence Intubation: Protocol & Drug Selection",
      summary: "Preparation, Preoxygenation (NO DESAT), Pretreatment/Hemodynamic optimization, Paralysis with Induction (Ketamine, Rocuronium), Placement with proof (Waveform Capnography), and Post-intubation care.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Step-by-step ICU Rapid Sequence Intubation Protocol:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Preparation (T minus 10 minutes)",
              value: "• Device Setup: Video Laryngoscope with hyperangulated or standard geometry blade + Tracheal Tube Introducer (Bougie).\n• The Landmark DEVICE & BOUGIE Trials: The DEVICE trial (NEJM 2023) proved that video laryngoscopy significantly increased first-pass success compared to direct laryngoscopy (85.1% vs 70.8%, p < 0.001) in critically ill adults. The BOUGIE trial (JAMA 2018) proved that routinely using a bougie achieves first-pass success > 90% in difficult airways. Routine combination of Video Laryngoscopy + Bougie is the modern ICU standard of care.\n• Equipment Check: Working Yankauer suction under pillow, functional bag-valve-mask (BVM) with PEEP valve, appropriate ETT size (7.5–8.0 mm for men, 7.0–7.5 mm for women), supraglottic airway (i-gel), and scalpel-bougie cricothyroidotomy kit at the bedside.",
            },
            {
              label: "2. Preoxygenation & Apneic Oxygenation (T minus 5 minutes)",
              value: "• Standard Preoxygenation: 3 to 5 minutes of 100% FiO2 via Non-Rebreather Mask with flow rate set to 'flush' (> 30–60 L/min, wide open).\n• Shunt Physiology / Severe ARDS / Morbid Obesity: Preoxygenate with Non-Invasive Positive Pressure Ventilation (CPAP 5–10 cmH2O or BiPAP 10/5) with 100% FiO2 (delivers positive airway pressure to recruit fluid-filled alveoli; NRB alone fails in true shunt).\n• Apneic Oxygenation (NO DESAT): Leave High-Flow Nasal Cannula (HFNC at 40–60 L/min) or standard nasal cannula at 15 L/min ON during the entire laryngoscopy attempt (maintains continuous pharyngeal oxygenation and extends safe apnea time by up to 5–10 minutes).",
            },
            {
              label: "3. Pretreatment & Hemodynamic Optimization (T minus 3 minutes)",
              value: "• The Golden ICU Rule: NEVER induce an unstable patient without vasopressors running.\n• In Shock / Hypotension (MAP < 65 mmHg): Initiate or increase peripheral Norepinephrine infusion BEFORE induction to target MAP > 75–80 mmHg.\n• Have 'Push-Dose Epinephrine' (10–20 mcg boluses: 1 mL of 1:10,000 [100 mcg] diluted in 9 mL normal saline = 10 mcg/mL) or Push-Dose Phenylephrine (100–200 mcg) drawn up and attached to the IV line.",
            },
            {
              label: "4. Paralysis with Induction (T zero)",
              value: "• Induction Agents:\n  - **Ketamine (1.0–2.0 mg/kg IV)**: Drug of choice in shock, sepsis, bronchospasm, and hemodynamic instability. Dissociative NMDA antagonist; stimulates sympathetic catecholamine release, maintaining heart rate and MAP (reduce dose to 0.5–1.0 mg/kg in profoundly catecholamine-depleted shock).\n  - **Etomidate (0.2–0.3 mg/kg IV)**: Hemodynamically neutral; transiently inhibits 11-beta-hydroxylase (adrenal suppression).\n  - **Propofol (1.0–2.0 mg/kg IV)**: Causes severe systemic vasodilation and myocardial depression; avoid in shock (reduce to 0.5 mg/kg if used).\n• Neuromuscular Blocking Agents (NMBAs):\n  - **Rocuronium (1.2 mg/kg IV)**: Preferred first-line NMBA in the ICU. Non-depolarizing; rapid onset (45–60s), duration 45–60 min; safe in all electrolyte derangements, burn injuries, and renal failure. Fully reversible with Sugammadex (16 mg/kg for immediate rescue).\n  - **Succinylcholine (1.5 mg/kg IV)**: Depolarizing; rapid onset (45s), short duration (5–10 min). STRICTLY CONTRAINDICATED in hyperkalemia (K+ > 5.0), crush injuries/major burns > 24h, denervating neurological disease / stroke > 72h, muscular dystrophy, or personal/family history of Malignant Hyperthermia (can precipitate lethal hyperkalemic cardiac arrest).",
            },
            {
              label: "5. Placement with Proof (T plus 1 minute)",
              value: "• Laryngoscopy: Video laryngoscope blade inserted midline, visualize epiglottis, vallecula engagement, vocal cord view -> insert bougie through cords -> advance ETT over bougie -> inflate cuff.\n• CONTINUOUS WAVEFORM CAPNOGRAPHY (THE MANDATORY STANDARD): Quantitative waveform capnography showing a sustained 4-phase rectangular CO2 waveform for at least 5 to 6 consecutive breaths is the single absolute gold standard to confirm tracheal placement and exclude fatal esophageal intubation (end-tidal CO2 detector color changes can produce false positives with gastric carbonation).",
            },
            {
              label: "6. Post-Intubation Management (T plus 2 minutes)",
              value: "• Sedation: Immediately start continuous post-intubation analgosedation (Propofol, Fentanyl, Dexmedetomidine).\n• Mechanical Ventilation: Initiate lung-protective ventilation (Tidal volume 6 mL/kg PBW, PEEP 5–8 cmH2O, adjust respiratory rate for dead space).\n• Confirmation: Obtain post-intubation portable chest radiograph (ETT tip positioned 3 to 5 cm above the carina).",
            },
          ],
        },
      ],
    },
    {
      id: "airway-management-rsi.failed-airway",
      kind: "management",
      title: "The Failed Airway & Cannot Intubate / Cannot Oxygenate (CICO) Protocol",
      summary: "The 3-attempt rule, supraglottic airway rescue (i-gel), and emergent Scalpel-Bougie-Tube Front-of-Neck Access (FONA).",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Difficult Airway Society (DAS) Algorithm for Failed Intubation and CICO Emergency:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Plan A: Primary Tracheal Intubation",
              value: "Maximum of 3 attempts at laryngoscopy (only if operator, blade, or positioning changes between attempts). If unable to intubate after 3 attempts -> Declare Failed Intubation and immediately transition to Plan B.",
            },
            {
              label: "Plan B: Secondary Airway Rescue via Supraglottic Airway (SGA)",
              value: "Immediately insert a Second-Generation Supraglottic Airway (e.g. i-gel or LMA Supreme). Confirm ventilation with waveform capnography. If successful, patient is oxygenated (can wake patient up, perform fiberoptic intubation through the SGA, or proceed with tracheostomy). If SGA ventilation fails -> transition to Plan C.",
            },
            {
              label: "Plan C: Facemask Ventilation Rescue",
              value: "Two-person, two-handed technique with oral and nasal pharyngeal airways, 100% FiO2. If facemask ventilation fails and oxygen saturation is falling -> DECLARE A CANNOT INTUBATE, CANNOT OXYGENATE (CICO) EMERGENCY and immediately proceed to Plan D.",
            },
            {
              label: "Plan D: Emergent Surgical Front-of-Neck Access (FONA / Scalpel-Bougie Cricothyroidotomy)",
              value: "• Patient Positioning: Full neck extension (shoulder roll).\n• The 3-Step Scalpel-Bougie-Tube Technique:\n  1. Scalpel Stab: Palpate cricothyroid membrane (between thyroid and cricoid cartilages). Make a generous horizontal 2–3 cm stab incision through the skin and cricothyroid membrane using a #10 or #11 blade.\n  2. Bougie Insertion: Turn scalpel blade 90 degrees with cutting edge caudal to open the tract; advance the coudé tip of a bougie through the membrane into the trachea (confirm tracheal clicks and hold-up at carina).\n  3. Tube Placement: Railroad a cuffed 6.0 mm Endotracheal Tube (or tracheostomy tube) over the bougie into the trachea. Inflate cuff, remove bougie, attach BVM, and confirm ventilation with waveform capnography.",
            },
          ],
        },
      ],
    },
    {
      id: "airway-management-rsi.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls in Airway Management",
      summary: "Critical mistakes during emergency critical care intubations.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Failing to pre-optimize hemodynamics prior to induction: Administering induction agents to a hypotensive septic patient without active vasopressor infusions triggers sudden cardiovascular collapse; always start Norepinephrine early.",
            "Using Succinylcholine in patients with high-risk hyperkalemic conditions: Triggers lethal potassium surges (> 10 mEq/L) in denervating neurological injuries, chronic paralysis, major burns > 24h, or known hyperkalemia; use Rocuronium 1.2 mg/kg instead.",
            "Inducing prolonged apnea in patients with severe metabolic acidosis: Ventilatory arrest removes respiratory compensation for severe acidemia, dropping pH to fatal levels; perform gentle assisted manual bagging during induction or use ketamine-assisted awake intubation.",
            "Relying on auscultation alone to confirm endotracheal tube placement: Auscultation is notoriously unreliable in the noisy ICU and in obesity; continuous quantitative waveform capnography is mandatory for every intubation.",
            "Delaying surgical cricothyroidotomy in a CICO emergency: Continuing futile laryngoscopy attempts while the patient desaturates to zero leads to severe anoxic brain death; declare CICO and perform immediate scalpel-bougie cricothyroidotomy.",
          ],
        },
      ],
    },
    {
      id: "airway-management-rsi.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Bag-Mask Ventilation during the Apneic Period (The PreVent Trial) and Cricoid Pressure (Sellick Maneuver).",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Bag-Mask Ventilation During Apnea (The PreVent Trial): Historically, traditional RSI strictly avoided positive-pressure ventilation between induction and intubation for fear of gastric insufflation and aspiration. The landmark PreVent trial (Casey et al., NEJM 2019) demonstrated that gentle bag-mask ventilation with low tidal volumes (using a PEEP valve) during the apneic period significantly reduced severe hypoxemia (SpO2 < 80%) in critically ill adults without increasing aspiration rates.",
        },
        {
          type: "paragraph",
          text: "Cricoid Pressure (Sellick's Maneuver): Large-scale randomized trials (such as the IRIS trial) confirmed that routine cricoid pressure does not reduce pulmonary aspiration rates, frequently distorts the laryngeal anatomy, and significantly impairs video laryngoscopic view. Modern critical care guidelines recommend AGAINST routine cricoid pressure.",
        },
      ],
    },
    {
      id: "airway-management-rsi.complications",
      kind: "complications",
      title: "Complications & Escalation Triggers (Cannot Intubate / Cannot Oxygenate)",
      summary: "Structured recognition of post-induction cardiac arrest, hypoxemic brain injury, and emergent scalpel cricothyroidotomy.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Early / Immediate", value: "Post-induction severe hypotension and cardiac arrest (peri-intubation arrest rate 2-3% in ICU), critical hypoxemic desaturation (SpO2 < 70%), esophageal intubation, massive aspiration of gastric contents." },
            { label: "Treatment-Related", value: "Hyperkalemic cardiac arrest from succinylcholine in denervation/burns/AKI; tension pneumothorax from high positive pressure ventilation in severe asthma/COPD; dental/airway soft tissue trauma." },
            { label: "Late / Delayed", value: "Ventilator-associated pneumonia (VAP) from micro-aspiration, tracheal stenosis from over-inflated cuff pressure (>30 cmH2O)." },
            { label: "Escalation Triggers: CICO Protocol", value: "Cannot Intubate, Cannot Oxygenate (CICO) failing supraglottic airway (LMA) -> Immediate Emergent Scalpel-Bougie-Tube Cricothyroidotomy (scalpel incision of cricothyroid membrane, bougie insertion, size 6.0 ETT railroaded into trachea)." }
          ]
        }
      ]
    },
],
};
