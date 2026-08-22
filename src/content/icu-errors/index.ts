export interface IcuErrorOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface IcuError {
  id: string;
  title: string;
  icuPlan: string[];
  options: IcuErrorOption[];
  physiology: string;
  correctApproach: string;
  reference: string;
  difficulty: "foundation" | "intermediate" | "advanced";
}

export const icuErrors: readonly IcuError[] = [
  {
    "id": "error-1",
    "title": "Mechanically Ventilated Severe Asthma Management Plan",
    "icuPlan": [
      "1. Sedation with continuous Propofol and Fentanyl infusions",
      "2. Continuous albuterol nebulization (15 mg/hr) and IV Methylprednisolone 40 mg daily (or 20 mg q12h)",
      "3. Volume Control mode: Tidal volume 8 mL/kg PBW (550 mL), Respiratory Rate 28/min, PEEP 10 cmH2O",
      "4. Target: Aggressive hyperventilation to normalize PaCO2 to 40 mmHg and pH to 7.40"
    ],
    "options": [
      {
        "id": "a",
        "text": "Setting high RR (28/min) and high VT (8 mL/kg) to normalize PaCO2 in severe asthma",
        "isCorrect": true,
        "explanation": "Normalizing PaCO2 with high minute ventilation in severe asthma shortens expiratory time, causing catastrophic dynamic hyperinflation (auto-PEEP), barotrauma, and circulatory arrest. The correct strategy is permissive hypercapnia with low respiratory rate, tidal volume 5–6 mL/kg PBW, and adequate expiratory time to minimize auto-PEEP while accepting permissive hypercapnia."
      },
      {
        "id": "b",
        "text": "Administering continuous albuterol nebulization",
        "isCorrect": false,
        "explanation": "Continuous beta-agonist bronchodilation is standard first-line therapy in acute severe status asthmaticus."
      },
      {
        "id": "c",
        "text": "Using IV Methylprednisolone for acute status asthmaticus",
        "isCorrect": false,
        "explanation": "Systemic corticosteroids are standard of care in acute severe asthma."
      },
      {
        "id": "d",
        "text": "Using Propofol and Fentanyl for sedation",
        "isCorrect": false,
        "explanation": "Propofol provides smooth muscle bronchodilation and adequate vent synchrony."
      }
    ],
    "physiology": "In obstructive airway disease, severe expiratory resistance requires prolonged expiratory time. High respiratory rates prevent complete alveolar exhalation, trapping air and increasing intrathoracic pressure, which crushes venous return.",
    "correctApproach": "Prioritize lung-protective mechanics and dynamic hyperinflation avoidance over PaCO2 normalization: Example initial strategy includes low respiratory rate (typically 10–12/min), tidal volume ~5–6 mL/kg PBW, high inspiratory flow (e.g. 70–80 L/min to prolong expiratory time), and low PEEP (0–5 cmH2O). Accept permissive hypercapnia while monitoring plateau pressure (<30 cmH2O), auto-PEEP, and hemodynamic tolerance rather than chasing a rigid PaCO2 target.",
    "reference": "Global Initiative for Asthma (GINA 2026 Strategy Report); Mechanical Ventilation in Severe Asthma. Intensive Care Med 2017.",
    "difficulty": "foundation"
  },
  {
    "id": "error-2",
    "title": "Diabetic Ketoacidosis (DKA) Resuscitation Protocol",
    "icuPlan": [
      "1. Isotonic crystalloid volume resuscitation (1 L 0.9% NS over 1 hour)",
      "2. Initial laboratory workup: Serum K+ = 3.0 mEq/L, Blood glucose = 620 mg/dL, pH = 7.10",
      "3. Start IV Regular Insulin infusion at 0.14 units/kg/hr immediately without adding potassium",
      "4. Serial glucose checks every 1 hour"
    ],
    "options": [
      {
        "id": "a",
        "text": "Starting insulin infusion when baseline serum potassium is < 3.5 mEq/L",
        "isCorrect": true,
        "explanation": "Insulin drives potassium into cells. Starting insulin when serum K+ is already <3.5 mEq/L causes severe hypokalemia, cardiac arrhythmias, respiratory muscle paralysis, and cardiac arrest. Potassium must be infused and K+ confirmed >3.5 mEq/L before starting insulin."
      },
      {
        "id": "b",
        "text": "Administering initial isotonic crystalloid resuscitation",
        "isCorrect": false,
        "explanation": "Initial fluid loading is appropriate in DKA."
      },
      {
        "id": "c",
        "text": "Ordering serial glucose checks every hour",
        "isCorrect": false,
        "explanation": "Hourly blood glucose monitoring is mandatory during insulin titration."
      },
      {
        "id": "d",
        "text": "Using Regular insulin via intravenous infusion",
        "isCorrect": false,
        "explanation": "IV regular insulin is the gold standard for ICU DKA resuscitation."
      }
    ],
    "physiology": "Insulin stimulates the Na+/K+ ATPase pump, shifting extracellular potassium into the intracellular compartment. In a patient already hypokalemic from osmotic diuresis, insulin causes sudden fatal hypokalemic cardiac arrest.",
    "correctApproach": "Hold insulin! Administer IV potassium chloride (20–40 mEq/hr) until serum potassium is verified > 3.5 mEq/L. Only then initiate the intravenous insulin infusion.",
    "reference": "American Diabetes Association (ADA) Consensus Statement on Hyperglycemic Crises in Adults. Diabetes Care 2024.",
    "difficulty": "foundation"
  },
  {
    "id": "error-3",
    "title": "Acute Type A Aortic Dissection Blood Pressure Management",
    "icuPlan": [
      "1. Establish continuous arterial line monitoring",
      "2. Initial vitals: BP 215/110 mmHg, HR 102 bpm",
      "3. Start IV Nicardipine infusion immediately as initial single-agent to lower SBP to 110 mmHg",
      "4. Consult Cardiothoracic Surgery emergently"
    ],
    "options": [
      {
        "id": "a",
        "text": "Starting a pure vasodilator (Nicardipine) before establishing adequate beta-blockade",
        "isCorrect": true,
        "explanation": "Vasodilator monotherapy triggers reflex sympathetic activation, increasing heart rate and myocardial contractility (elevating aortic dP/dt), which tears the aortic wall and accelerates fatal dissection rupture."
      },
      {
        "id": "b",
        "text": "Establishing arterial line blood pressure monitoring",
        "isCorrect": false,
        "explanation": "Continuous arterial line monitoring is the standard of care in aortic dissection."
      },
      {
        "id": "c",
        "text": "Consulting cardiothoracic surgery for Type A dissection",
        "isCorrect": false,
        "explanation": "Type A dissection is an emergent surgical emergency."
      },
      {
        "id": "d",
        "text": "Targeting SBP 110 mmHg",
        "isCorrect": false,
        "explanation": "SBP 100–120 mmHg is the correct target once heart rate is controlled."
      }
    ],
    "physiology": "The force driving aortic flap propagation is dP/dt (rate of rise in aortic pressure with each ventricular ejection). Vasodilation causes reflex tachycardia and spikes dP/dt. Beta-blockade reduces dP/dt and must precede vasodilation.",
    "correctApproach": "Administer IV Beta-Blocker (Esmolol or Labetalol) FIRST to achieve HR < 60 bpm. Once heart rate is strictly controlled, add IV Nicardipine or Clevidipine to titrate SBP to 100–120 mmHg.",
    "reference": "2022 ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease. Circulation 2022.",
    "difficulty": "intermediate"
  },
  {
    "id": "error-4",
    "title": "Severe Hyperkalemia Management Plan",
    "icuPlan": [
      "1. Administer Calcium Gluconate 10% 20 mL IV for peaked T waves",
      "2. Administer Regular Insulin 10 units IV push",
      "3. No concurrent dextrose given and no post-insulin blood glucose monitoring protocol ordered",
      "4. Schedule hemodialysis for definitive potassium removal"
    ],
    "options": [
      {
        "id": "a",
        "text": "Administering 10 units IV insulin without dextrose or glucose monitoring",
        "isCorrect": true,
        "explanation": "Administering IV insulin without dextrose causes severe, potentially fatal hypoglycemia in up to 20–30% of hyperkalemic patients. Concurrent dextrose (e.g. 25–50 g IV) and protocolized frequent glucose monitoring (typically over 4–6 hours) are essential to prevent severe hypoglycemia."
      },
      {
        "id": "b",
        "text": "Giving Calcium Gluconate for peaked T waves",
        "isCorrect": false,
        "explanation": "Calcium provides immediate cardiac membrane stabilization."
      },
      {
        "id": "c",
        "text": "Using 10 units of regular insulin to shift potassium",
        "isCorrect": false,
        "explanation": "Regular insulin 5–10 units IV is standard shifting therapy."
      },
      {
        "id": "d",
        "text": "Planning hemodialysis for potassium removal",
        "isCorrect": false,
        "explanation": "Hemodialysis is the definitive elimination therapy in severe hyperkalemia."
      }
    ],
    "physiology": "Exogenous IV insulin boluses stimulate massive peripheral glucose uptake and hepatic glycogen synthesis, causing severe neuroglycopenia within 30–60 minutes unless balanced with hypertonic dextrose.",
    "correctApproach": "Administer Dextrose 50% 50 mL (25 g D50W) IV push with or immediately before the 10 units of Regular insulin (or use 5 units insulin in high-risk patients). Initiate protocolized blood glucose monitoring (e.g., at 30, 60, 120, 180, and 240 minutes per hypoglycemia prevention protocol).",
    "reference": "Management of Severe Hyperkalemia in Critical Illness. Kidney Int 2020; UK Renal Association Guidelines 2023.",
    "difficulty": "foundation"
  },
  {
    "id": "error-5",
    "title": "Acute Bacterial Meningitis Emergency Pathway",
    "icuPlan": [
      "1. Patient presents with high fever, neck stiffness, and altered mental status (GCS 11)",
      "2. Draw blood cultures stat",
      "3. Transport patient immediately to CT scanner for head CT, and hold all antibiotics and steroids until lumbar puncture is performed in 2 hours",
      "4. Transfer to ICU after imaging"
    ],
    "options": [
      {
        "id": "a",
        "text": "Withholding antibiotics and dexamethasone while awaiting head CT and lumbar puncture",
        "isCorrect": true,
        "explanation": "In suspected acute bacterial meningitis, life-saving antimicrobial therapy and adjunctive dexamethasone should not be delayed for neuroimaging or lumbar puncture. Administer empiric antibiotics and dexamethasone promptly after obtaining blood cultures."
      },
      {
        "id": "b",
        "text": "Drawing blood cultures on arrival",
        "isCorrect": false,
        "explanation": "Drawing blood cultures prior to antibiotic administration is appropriate."
      },
      {
        "id": "c",
        "text": "Planning a head CT in an altered patient prior to LP",
        "isCorrect": false,
        "explanation": "CT before LP is indicated in patients with altered sensorium to rule out mass effect, but treatment must not be delayed."
      },
      {
        "id": "d",
        "text": "Transferring patient to ICU for close neurological checks",
        "isCorrect": false,
        "explanation": "ICU level care is appropriate for bacterial meningitis."
      }
    ],
    "physiology": "Bacterial replication in the subarachnoid space doubles every 20–30 minutes, triggering exponential inflammatory cytokine cascades and irreversible cytotoxic brain edema. Delaying antibiotics increases mortality by up to 30% per hour.",
    "correctApproach": "Draw blood cultures stat, then IMMEDIATELY administer IV Dexamethasone (10 mg) and empiric antibiotics (Ceftriaxone 2 g + Vancomycin 25 mg/kg ± Ampicillin 2 g). Then transport the patient for head CT and lumbar puncture.",
    "reference": "IDSA Clinical Practice Guidelines for the Management of Bacterial Meningitis. Clin Infect Dis 2004; ESCMID Guidelines 2016.",
    "difficulty": "foundation"
  },
  {
    "id": "error-6",
    "title": "Early ARDS Mechanical Ventilation Strategy",
    "icuPlan": [
      "1. Patient intubated for severe bilateral pneumonia-induced ARDS (P/F ratio 120)",
      "2. Volume Control mode: Tidal Volume set to 10 mL/kg actual body weight (750 mL)",
      "3. PEEP set to 5 cmH2O, FiO2 1.0",
      "4. Continuous neuromuscular blockade for severe hypoxemia"
    ],
    "options": [
      {
        "id": "a",
        "text": "Setting tidal volume to 10 mL/kg actual body weight (750 mL) with low PEEP (5 cmH2O)",
        "isCorrect": true,
        "explanation": "The landmark ARDSNet trial proved that high tidal volumes (10–12 mL/kg) cause massive volutrauma, biotrauma, and increased mortality. ARDS requires lung-protective ventilation: 4–6 mL/kg Predicted Body Weight (PBW) and higher PEEP."
      },
      {
        "id": "b",
        "text": "Using continuous neuromuscular blockade for severe ARDS",
        "isCorrect": false,
        "explanation": "Early short-course NMBAs can improve patient-ventilator synchrony in severe ARDS."
      },
      {
        "id": "c",
        "text": "Using Volume Control mode",
        "isCorrect": false,
        "explanation": "Volume Control is an acceptable mode for ARDSNet ventilation."
      },
      {
        "id": "d",
        "text": "Setting initial FiO2 to 1.0 in severe hypoxemia",
        "isCorrect": false,
        "explanation": "High initial FiO2 is standard during acute crisis while titrating PEEP."
      }
    ],
    "physiology": "In ARDS, the aerated 'baby lung' is only 20–30% of normal lung volume. A 750 mL tidal volume overdistends compliant alveoli, fracturing epithelial basement membranes and releasing systemic inflammatory cytokines.",
    "correctApproach": "Calculate Predicted Body Weight (PBW) based on height/sex. Set initial tidal volume to 6 mL/kg PBW, titrate down to 4 mL/kg if Pplat > 30 cmH2O, set higher PEEP (10–14 cmH2O per ARDSNet PEEP/FiO2 table), and monitor driving pressure.",
    "reference": "Ventilation with Lower Tidal Volumes as Compared with Traditional Tidal Volumes for ARDS (ARMA Trial). N Engl J Med 2000.",
    "difficulty": "foundation"
  },
  {
    "id": "error-7",
    "title": "Post-Cardiac Arrest Targeted Temperature and Oxygenation Plan",
    "icuPlan": [
      "1. Patient achieves ROSC after 20 minutes of CPR for ventricular fibrillation",
      "2. Initiate targeted temperature management (TTM) at 36°C with active cooling device",
      "3. Maintain 100% FiO2 on mechanical ventilator for the first 24 hours to maximize brain oxygenation (PaO2 > 350 mmHg)",
      "4. Place arterial line and central venous catheter"
    ],
    "options": [
      {
        "id": "a",
        "text": "Maintaining 100% FiO2 and allowing severe hyperoxia (PaO2 > 350 mmHg) post-ROSC",
        "isCorrect": true,
        "explanation": "Hyperoxia after cardiac arrest causes profound oxidative stress, microvascular vasoconstriction, and accelerated neurotoxic free radical generation. Post-ROSC guidelines mandate titrating FiO2 to maintain SpO2 94–98% (PaO2 70–100 mmHg)."
      },
      {
        "id": "b",
        "text": "Initiating targeted temperature management at 36°C",
        "isCorrect": false,
        "explanation": "TTM at 36°C (avoiding fever) is standard evidence-based post-arrest care."
      },
      {
        "id": "c",
        "text": "Placing an arterial line for continuous blood pressure monitoring",
        "isCorrect": false,
        "explanation": "Continuous arterial line monitoring is essential post-cardiac arrest."
      },
      {
        "id": "d",
        "text": "Placing a central venous line",
        "isCorrect": false,
        "explanation": "Central venous access is standard for vasopressor infusion in post-resuscitation shock."
      }
    ],
    "physiology": "During post-ischemic reperfusion, excessive molecular oxygen accelerates superoxide radical formation via mitochondrial electron transport decoupling, directly causing neuronal apoptosis in the cerebral cortex and hippocampus.",
    "correctApproach": "Titrate FiO2 downward as soon as ROSC is established to maintain SpO2 strictly between 94% and 98% (PaO2 75–100 mmHg), actively avoiding both hypoxemia and hyperoxia.",
    "reference": "2021 ERC/ESICM Guidelines for Post-Resuscitation Care. Intensive Care Med 2021; AHA Guidelines 2020.",
    "difficulty": "foundation"
  },
  {
    "id": "error-8",
    "title": "Invasive Candidemia in the ICU Management Plan",
    "icuPlan": [
      "1. Blood cultures grow Candida albicans in a septic ICU patient with central line and TPN",
      "2. Start IV Fluconazole 200 mg PO daily",
      "3. Leave the 12-day-old central venous catheter in place to maintain vascular access",
      "4. Repeat blood cultures in 10 days"
    ],
    "options": [
      {
        "id": "a",
        "text": "Starting low-dose fluconazole and leaving the colonized central venous catheter in place",
        "isCorrect": true,
        "explanation": "IDSA guidelines recommend an IV Echinocandin (e.g., Anidulafungin or Caspofungin) as first-line fungicidal therapy for ICU candidemia and recommend early evaluation and removal of the catheter when feasible, as it serves as a persistent biofilm source."
      },
      {
        "id": "b",
        "text": "Repeating blood cultures to assess clearance",
        "isCorrect": false,
        "explanation": "Repeating blood cultures is required, though they should be drawn every 24–48 hours until sterile, not in 10 days."
      },
      {
        "id": "c",
        "text": "Treating Candida albicans as a true bloodstream pathogen",
        "isCorrect": false,
        "explanation": "Candida recovered from blood cultures should be treated as clinically significant candidemia rather than dismissed as a contaminant."
      },
      {
        "id": "d",
        "text": "Providing antifungal therapy for candidemia",
        "isCorrect": false,
        "explanation": "Antifungals are essential, but the drug choice and dose must be correct."
      }
    ],
    "physiology": "Candida adheres to intravascular silicone and polyurethane catheters, secreting an extracellular polysaccharide biofilm that is completely impervious to host immune cells and antifungal penetration.",
    "correctApproach": "Start an IV Echinocandin (e.g., Anidulafungin 200 mg load then 100 mg daily) and evaluate the central venous catheter for early removal as the suspected biofilm source. Draw repeat blood cultures every 24–48 hours until sterile, and order a dilated fundoscopic eye exam within 7 days.",
    "reference": "IDSA Clinical Practice Guideline for the Management of Candidiasis. Clin Infect Dis 2016.",
    "difficulty": "intermediate"
  },
  {
    "id": "error-9",
    "title": "Massive Pulmonary Embolism Shock Protocol",
    "icuPlan": [
      "1. 52-year-old female with CT-proven saddle PE and severe hypotension (BP 68/40 mmHg)",
      "2. Bedside echo: Massive RV dilation, McConnell's sign, severe RV strain",
      "3. Start Unfractionated Heparin infusion alone and adopt 'watchful waiting' over the next 48 hours",
      "4. Transfer to ICU"
    ],
    "options": [
      {
        "id": "a",
        "text": "Relying on heparin anticoagulation alone without systemic thrombolysis or catheter embolectomy in massive PE shock",
        "isCorrect": true,
        "explanation": "Massive PE is defined by sustained hypotension/shock. Anticoagulation only prevents new clot formation; it does NOT dissolve the massive mechanical obstruction. Prompt advanced reperfusion (systemic thrombolysis, catheter-directed therapy, or surgical embolectomy) is indicated to relieve acute RV outflow obstruction and prevent cardiovascular collapse."
      },
      {
        "id": "b",
        "text": "Starting unfractionated heparin",
        "isCorrect": false,
        "explanation": "Heparin is necessary, but in massive PE shock it is insufficient without reperfusion therapy."
      },
      {
        "id": "c",
        "text": "Performing bedside echocardiogram to assess RV strain",
        "isCorrect": false,
        "explanation": "Echo is standard for identifying acute cor pulmonale."
      },
      {
        "id": "d",
        "text": "Transferring patient to the ICU",
        "isCorrect": false,
        "explanation": "ICU level care is mandatory for massive PE."
      }
    ],
    "physiology": "Acute massive pulmonary vascular occlusion increases RV afterload acutely. The unconditioned thin-walled RV cannot generate pressures >50–60 mmHg, precipitating acute RV dilation, septal flattening, and LV diastolic collapse.",
    "correctApproach": "Administer systemic thrombolytic therapy (Alteplase 100 mg IV over 2 hours, or 50 mg push in cardiac arrest) unless absolute contraindications exist. If contraindicated, consult Interventional Radiology or Cardiac Surgery for emergent catheter-directed or surgical embolectomy.",
    "reference": "2019 ESC Guidelines for the Management of Acute Pulmonary Embolism. Eur Heart J 2020.",
    "difficulty": "foundation"
  },
  {
    "id": "error-10",
    "title": "Severe Traumatic Brain Injury (TBI) Management Plan",
    "icuPlan": [
      "1. 24-year-old male with severe TBI (GCS 5), ICP monitor reading 32 mmHg",
      "2. Head of bed elevated 30°, maintain PaCO2 35–38 mmHg",
      "3. Administer 3% Hypertonic Saline bolus 250 mL IV for ICP spike",
      "4. Administer Dexamethasone 8 mg IV q6h to reduce brain edema"
    ],
    "options": [
      {
        "id": "a",
        "text": "Administering Dexamethasone for brain edema in acute Traumatic Brain Injury",
        "isCorrect": true,
        "explanation": "The landmark CRASH trial (10,008 patients) proved that corticosteroids in acute TBI significantly INCREASE 2-week and 6-month mortality. Corticosteroids should not be used to treat acute traumatic brain injury because large randomized evidence demonstrated increased mortality."
      },
      {
        "id": "b",
        "text": "Administer 3% Hypertonic Saline for ICP > 22 mmHg",
        "isCorrect": false,
        "explanation": "Hypertonic saline is standard first-line osmotherapy for traumatic intracranial hypertension."
      },
      {
        "id": "c",
        "text": "Elevating head of bed to 30 degrees",
        "isCorrect": false,
        "explanation": "Head elevation promotes jugular venous drainage and reduces ICP."
      },
      {
        "id": "d",
        "text": "Maintaining PaCO2 35–38 mmHg",
        "isCorrect": false,
        "explanation": "Mild normocapnia avoids hypercapnic vasodilation while preventing ischemic vasoconstriction."
      }
    ],
    "physiology": "Traumatic brain edema is predominantly cytotoxic (cellular energy failure) rather than vasogenic. Steroids provide no benefit in cytotoxic edema, and their metabolic/immunosuppressive toxicity directly increases mortality in TBI.",
    "correctApproach": "Do not use corticosteroids to treat acute TBI. Manage elevated ICP using Tier 1/2 protocols: head elevation, sedation, targeted CPP (60–70 mmHg), hyperosmolar therapy (3% NaCl or Mannitol), and CSF drainage via EVD.",
    "reference": "CRASH Trial Collaborators. Final Results of MRC CRASH. Lancet 2005; Brain Trauma Foundation Guidelines 2017.",
    "difficulty": "foundation"
  },
  {
    "id": "error-11",
    "title": "Subarachnoid Hemorrhage Vasospasm Prevention",
    "icuPlan": [
      "1. Patient post-aneurysm coiling on Day 5 with new mild right arm drift",
      "2. Blood pressure is 118/70 mmHg",
      "3. Hold oral Nimodipine because blood pressure is not elevated",
      "4. Transcranial Doppler scheduled"
    ],
    "options": [
      {
        "id": "a",
        "text": "Holding Nimodipine because blood pressure is not hypertensive",
        "isCorrect": true,
        "explanation": "Nimodipine is neuroprotective (reduces delayed cerebral ischemia and poor neurological outcomes) and is NOT given as an antihypertensive. It must be continued for the full 21 days regardless of baseline blood pressure (unless refractory hypotension occurs, where vasopressors should be added rather than stopping nimodipine)."
      },
      {
        "id": "b",
        "text": "Scheduling Transcranial Doppler monitoring",
        "isCorrect": false,
        "explanation": "TCD is standard for monitoring middle cerebral artery velocities in vasospasm."
      },
      {
        "id": "c",
        "text": "Monitoring for focal neurological deficits",
        "isCorrect": false,
        "explanation": "Daily neurological checks are mandatory for delayed cerebral ischemia detection."
      },
      {
        "id": "d",
        "text": "Maintaining euvolemia post-clipping",
        "isCorrect": false,
        "explanation": "Euvolemia is the current standard of care."
      }
    ],
    "physiology": "Nimodipine blocks L-type calcium channels in cerebral microvessels and neurons, preventing ischemic cellular injury and microvascular thrombosis independent of macrovascular vasospasm.",
    "correctApproach": "Administer Nimodipine 60 mg orally/NG q4h for the full 21-day course. If blood pressure drops, administer intravenous fluids and initiate norepinephrine to support MAP rather than discontinuing nimodipine.",
    "reference": "2023 AHA/ASA Guideline for the Management of Patients With Aneurysmal Subarachnoid Hemorrhage. Stroke 2023.",
    "difficulty": "intermediate"
  },
  {
    "id": "error-12",
    "title": "Acute Severe Hyponatremia with Active Seizures",
    "icuPlan": [
      "1. 42-year-old female presents actively seizing with serum sodium 112 mEq/L",
      "2. Administer 1 L of 0.9% Normal Saline wide open over 30 minutes",
      "3. Lorazepam 2 mg IV given",
      "4. Repeat serum sodium in 6 hours"
    ],
    "options": [
      {
        "id": "a",
        "text": "Administering 0.9% Normal Saline instead of 3% Hypertonic Saline for hyponatremic seizures",
        "isCorrect": true,
        "explanation": "In acute severe hyponatremia with seizures, 0.9% Normal Saline is ineffective and can worsen hyponatremia in SIADH via renal desalination. 3% Hypertonic Saline (100–150 mL IV over 10 min) is the mandatory standard of care."
      },
      {
        "id": "b",
        "text": "Administering IV Lorazepam for active seizures",
        "isCorrect": false,
        "explanation": "Benzodiazepines are appropriate initial symptomatic therapy."
      },
      {
        "id": "c",
        "text": "Planning repeat serum sodium testing",
        "isCorrect": false,
        "explanation": "Frequent electrolyte monitoring is required."
      },
      {
        "id": "d",
        "text": "Placing patient in the ICU",
        "isCorrect": false,
        "explanation": "ICU level care is appropriate."
      }
    ],
    "physiology": "0.9% NaCl has an osmolarity of 308 mOsm/L. In SIADH, the kidney excretes the sodium in concentrated urine while reabsorbing the free water, worsening the hyponatremic cerebral edema.",
    "correctApproach": "Administer 3% Hypertonic Saline 100–150 mL IV bolus over 10–15 minutes immediately. Repeat up to two times if seizures continue, targeting a 4–6 mEq/L rise in serum sodium.",
    "reference": "European Clinical Practice Guideline on Diagnosis and Treatment of Hyponatraemia. Eur J Endocrinol 2014.",
    "difficulty": "foundation"
  },
  {
    "id": "error-13",
    "title": "Heparin-Induced Thrombocytopenia (HIT) Management",
    "icuPlan": [
      "1. Patient on heparin for 6 days develops a 55% drop in platelet count (240k to 95k)",
      "2. Stop unfractionated heparin infusion immediately",
      "3. Start Warfarin 10 mg orally immediately as monotherapy for anticoagulation",
      "4. Send anti-PF4/heparin antibody ELISA"
    ],
    "options": [
      {
        "id": "a",
        "text": "Starting Warfarin monotherapy during acute active HIT",
        "isCorrect": true,
        "explanation": "Warfarin is strictly contraindicated in acute HIT. Warfarin rapidly depletes Protein C (which has a short half-life of 6 hours) while prothrombin remains active, causing a profound hypercoagulable state that triggers venous limb gangrene and skin necrosis."
      },
      {
        "id": "b",
        "text": "Stopping the heparin infusion immediately",
        "isCorrect": false,
        "explanation": "Heparin cessation is the critical first step in suspected HIT."
      },
      {
        "id": "c",
        "text": "Sending anti-PF4 antibody testing",
        "isCorrect": false,
        "explanation": "Serological confirmation is indicated in high 4Ts score patients."
      },
      {
        "id": "d",
        "text": "Calculating the 4Ts clinical score",
        "isCorrect": false,
        "explanation": "4Ts score guides pre-test probability."
      }
    ],
    "physiology": "Protein C is an endogenous natural anticoagulant. Warfarin shuts down protein C synthesis within hours, precipitating massive microvascular thrombosis in a patient with active HIT platelet activation.",
    "correctApproach": "Initiate non-heparin therapeutic anticoagulation (selecting Argatroban for hepatic clearance/renal failure, Bivalirudin for hepatic impairment/short procedures, or Fondaparinux/DOAC when appropriate). Warfarin should be delayed until the patient is therapeutically anticoagulated with a non-heparin agent and platelets have substantially recovered (typically >150,000/μL).",
    "reference": "American Society of Hematology 2018 Guidelines for Management of Venous Thromboembolism: Heparin-Induced Thrombocytopenia. Blood Adv 2018.",
    "difficulty": "intermediate"
  },
  {
    "id": "error-14",
    "title": "Acute Dynamic Hyperinflation in Ventilated Asthma",
    "icuPlan": [
      "1. Intubated severe asthma patient develops sudden hypotension (BP 58/34 mmHg)",
      "2. Ppeak is 65 cmH2O and Pplat is 42 cmH2O",
      "3. Immediately infuse 2 L of normal saline and start Norepinephrine infusion without touching the ventilator",
      "4. Call for emergency ultrasound"
    ],
    "options": [
      {
        "id": "a",
        "text": "Pumping fluids and vasopressors without performing an immediate ventilator disconnection trial for auto-PEEP",
        "isCorrect": true,
        "explanation": "In ventilated obstructive disease with sudden shock and high airway pressures, dynamic hyperinflation (auto-PEEP) is the most common cause. Disconnecting the ventilator for 15 seconds allows trapped air to escape and immediately restores blood pressure."
      },
      {
        "id": "b",
        "text": "Calling for a bedside ultrasound",
        "isCorrect": false,
        "explanation": "Ultrasound is useful to rule out pneumothorax, but ventilator disconnection takes 5 seconds and should be done first."
      },
      {
        "id": "c",
        "text": "Recognizing that MAP 42 is critical",
        "isCorrect": false,
        "explanation": "Hypotension must be acted on immediately."
      },
      {
        "id": "d",
        "text": "Monitoring peak and plateau pressures",
        "isCorrect": false,
        "explanation": "Monitoring airway pressures is essential."
      }
    ],
    "physiology": "Severe dynamic hyperinflation elevates intrathoracic pressure above right atrial pressure, crushing the vena cavae and eliminating venous return to the heart.",
    "correctApproach": "Immediately disconnect the endotracheal tube from the ventilator circuit and allow the patient to passively exhale for 15–20 seconds. Once BP rebounds, reconnect with low respiratory rate, tidal volume ~5–6 mL/kg PBW, prolonged expiratory time, and accept permissive hypercapnia while monitoring plateau pressure and auto-PEEP.",
    "reference": "Mechanical Ventilation in Severe Asthma. Intensive Care Med 2017.",
    "difficulty": "foundation"
  },
  {
    "id": "error-15",
    "title": "Diabetic Ketoacidosis Bicarbonate Management",
    "icuPlan": [
      "1. Patient with DKA presents with blood glucose 480 mg/dL, pH 7.18, and HCO3 11 mEq/L",
      "2. Start IV isotonic fluids and insulin infusion",
      "3. Administer 100 mEq of Sodium Bicarbonate IV push for pH 7.18",
      "4. Check electrolytes every 2 hours"
    ],
    "options": [
      {
        "id": "a",
        "text": "Administering routine sodium bicarbonate for DKA with pH > 6.9–7.0",
        "isCorrect": true,
        "explanation": "Randomized trials demonstrate that sodium bicarbonate for DKA with pH > 6.90 does NOT improve time to resolution, morbidity, or mortality, but causes hypokalemia, paradoxical CSF acidosis, delayed ketone clearance, and intracellular sodium loading."
      },
      {
        "id": "b",
        "text": "Starting isotonic fluid resuscitation",
        "isCorrect": false,
        "explanation": "Fluid resuscitation is the foundation of DKA therapy."
      },
      {
        "id": "c",
        "text": "Starting continuous insulin infusion",
        "isCorrect": false,
        "explanation": "Insulin halts ketoacidosis."
      },
      {
        "id": "d",
        "text": "Checking electrolytes every 2 hours",
        "isCorrect": false,
        "explanation": "Frequent monitoring is standard of care."
      }
    ],
    "physiology": "Sodium bicarbonate converts to CO2, which rapidly crosses the blood-brain barrier faster than bicarbonate, causing paradoxical worsening of central nervous system and CSF acidosis. Bicarbonate also shifts potassium into cells, worsening hypokalemia.",
    "correctApproach": "Withhold sodium bicarbonate for pH > 6.90. Treat with isotonic fluids, potassium replacement, and IV insulin infusion, which metabolizes ketoacid anions back into endogenous bicarbonate.",
    "reference": "ADA Consensus Statement on Hyperglycemic Crises in Adults. Diabetes Care 2024.",
    "difficulty": "foundation"
  },
  {
    "id": "error-16",
    "title": "High-Dose Prolonged Propofol Sedation Plan",
    "icuPlan": [
      "1. Severe TBI patient maintained on Propofol at 85 mcg/kg/min for 5 consecutive days",
      "2. Add IV Insulin infusion for new refractory hyperglycemia",
      "3. Check serum CK once next week",
      "4. Continue current sedation indefinitely"
    ],
    "options": [
      {
        "id": "a",
        "text": "Continuing Propofol at >50 mcg/kg/min for >48 hours without monitoring for Propofol Infusion Syndrome (PRIS)",
        "isCorrect": true,
        "explanation": "Propofol doses >50 mcg/kg/min or durations >48 hours dramatically increase the risk of lethal Propofol Infusion Syndrome (PRIS: metabolic acidosis, rhabdomyolysis, hyperkalemia, renal failure, cardiac collapse). Sedation should be rotated or limited."
      },
      {
        "id": "b",
        "text": "Treating hyperglycemia with insulin",
        "isCorrect": false,
        "explanation": "Glycemic control is appropriate, but missing PRIS as the cause of metabolic derangement is the error."
      },
      {
        "id": "c",
        "text": "Using continuous sedation for intracranial hypertension",
        "isCorrect": false,
        "explanation": "Sedation is indicated in TBI, but agent selection and dosing limits must be observed."
      },
      {
        "id": "d",
        "text": "Checking serum CK",
        "isCorrect": false,
        "explanation": "CK should be checked daily, not next week."
      }
    ],
    "physiology": "Propofol uncouples mitochondrial oxidative phosphorylation and blocks cellular free fatty acid entry, causing energy starvation, acute muscle necrosis (rhabdomyolysis), and refractory lactic acidosis.",
    "correctApproach": "Limit propofol to < 50 mcg/kg/min and < 48 hours when possible. Monitor daily triglycerides, CK, lactate, and electrolytes. Switch to alternative agents (Midazolam, Dexmedetomidine) if high sedation requirements persist.",
    "reference": "Clinical Practice Guidelines for the Prevention and Management of Pain, Agitation/Sedation, Delirium, Immobility, and Sleep Disruption in Adult Patients in the ICU (PADIS). Crit Care Med 2018.",
    "difficulty": "intermediate"
  },
  {
    "id": "error-17",
    "title": "Severe ARDS Prone Positioning Protocol",
    "icuPlan": [
      "1. Patient with severe ARDS (P/F ratio 85 on PEEP 16, FiO2 0.85)",
      "2. Turn patient prone for 4 hours in the morning",
      "3. Return to supine position after 4 hours for the remainder of the day",
      "4. Repeat 4-hour prone session tomorrow"
    ],
    "options": [
      {
        "id": "a",
        "text": "Limiting prone positioning to 4 hours per day instead of ≥16 consecutive hours",
        "isCorrect": true,
        "explanation": "In patients meeting severe ARDS criteria (P/F < 150 with PEEP ≥ 10 and FiO2 ≥ 0.6), the landmark PROSEVA trial established that prolonged prone positioning sessions (typically ≥16 consecutive hours per session) provide sustained dorsal alveolar recruitment and a significant 28-day mortality reduction."
      },
      {
        "id": "b",
        "text": "Using prone positioning for severe ARDS with P/F ratio < 150",
        "isCorrect": false,
        "explanation": "Prone positioning is a strong guideline recommendation for severe ARDS."
      },
      {
        "id": "c",
        "text": "Using PEEP 16 cmH2O in severe ARDS",
        "isCorrect": false,
        "explanation": "Higher PEEP strategy is evidence-based in severe ARDS."
      },
      {
        "id": "d",
        "text": "Repeating proning daily until P/F ratio improves",
        "isCorrect": false,
        "explanation": "Daily sessions are standard until oxygenation criteria are met."
      }
    ],
    "physiology": "Prone positioning redistributes transpulmonary pressure gradients, making ventilation much more homogeneous. Short 4-hour sessions cause rapid alveolar derecruitment upon turning supine, losing all protective benefits.",
    "correctApproach": "In eligible severe ARDS patients, administer prolonged prone sessions (typically ≥16 consecutive hours per session per PROSEVA trial protocol). Reposition supine for skin, eye, and airway care, continuing daily sessions until oxygenation criteria are met.",
    "reference": "Prone Positioning in Severe Acute Respiratory Distress Syndrome (PROSEVA Trial). N Engl J Med 2013.",
    "difficulty": "foundation"
  },
  {
    "id": "error-18",
    "title": "Post-Intubation Maintenance Sedation Protocol",
    "icuPlan": [
      "1. Patient successfully intubated using Etomidate 0.3 mg/kg and Rocuronium 1.2 mg/kg for RSI",
      "2. For ongoing ICU sedation, order repeated IV Etomidate boluses (10–20 mg q1h PRN)",
      "3. Maintain mechanical ventilation on AC mode",
      "4. Place arterial line"
    ],
    "options": [
      {
        "id": "a",
        "text": "Using repeated Etomidate boluses or continuous infusion for maintenance ICU sedation",
        "isCorrect": true,
        "explanation": "Etomidate causes potent, reversible inhibition of 11-beta-hydroxylase in the adrenal cortex, completely abolishing cortisol and aldosterone synthesis. Repeated boluses or continuous infusions cause lethal adrenal failure and excess mortality in ICU patients."
      },
      {
        "id": "b",
        "text": "Using Etomidate as an induction agent for initial intubation",
        "isCorrect": false,
        "explanation": "Single-dose etomidate is a widely used RSI induction agent due to hemodynamic stability."
      },
      {
        "id": "c",
        "text": "Using Rocuronium for neuromuscular blockade during RSI",
        "isCorrect": false,
        "explanation": "Rocuronium 1.2 mg/kg is standard for rapid sequence intubation."
      },
      {
        "id": "d",
        "text": "Placing an arterial line for ventilated monitoring",
        "isCorrect": false,
        "explanation": "Arterial line placement is appropriate."
      }
    ],
    "physiology": "Etomidate blocks 11-beta-hydroxylase, preventing the conversion of 11-deoxycortisol to cortisol and 11-deoxycorticosterone to aldosterone, causing profound adrenocortical suppression.",
    "correctApproach": "Never use Etomidate for maintenance sedation! Transition to approved ICU sedation agents such as Propofol, Dexmedetomidine, or Midazolam with concurrent opioid analgesia.",
    "reference": "SCCM PADIS Guidelines 2018; Etomidate for Sedation in Critical Care. Lancet 1983.",
    "difficulty": "intermediate"
  },
  {
    "id": "error-19",
    "title": "Severe Chronic Lithium Toxicity Resuscitation",
    "icuPlan": [
      "1. 50-year-old with chronic lithium toxicity (serum level 4.6 mEq/L), coarse tremors, ataxia, and AKI",
      "2. Administer Activated Charcoal 50 g orally via NG tube",
      "3. IV 0.9% Normal Saline at 150 mL/hr",
      "4. Hold all psychiatric medications"
    ],
    "options": [
      {
        "id": "a",
        "text": "Administering Activated Charcoal for lithium poisoning",
        "isCorrect": true,
        "explanation": "Activated charcoal does NOT adsorb lithium or other elemental metals (iron, lead, lithium) and carries an aspiration risk in neurologically impaired patients. Hemodialysis is the definitive treatment for severe lithium toxicity per EXTRIP guidelines."
      },
      {
        "id": "b",
        "text": "Infusing 0.9% Normal Saline for hydration",
        "isCorrect": false,
        "explanation": "Restoring euvolemia supports renal lithium clearance."
      },
      {
        "id": "c",
        "text": "Holding psychiatric medications",
        "isCorrect": false,
        "explanation": "Discontinuing lithium is mandatory."
      },
      {
        "id": "d",
        "text": "Monitoring neurological status",
        "isCorrect": false,
        "explanation": "Neuro checks are essential in lithium encephalopathy."
      }
    ],
    "physiology": "Lithium is a tiny, highly charged monovalent metal cation that does not physically bind to the carbon lattice of activated charcoal.",
    "correctApproach": "Do not give activated charcoal! Consult Nephrology for emergent Intermittent Hemodialysis (EXTRIP criteria: lithium >4.0 mEq/L or >2.5 with neurological signs or renal failure). Infuse isotonic saline to restore euvolemia.",
    "reference": "Extracorporeal Treatment for Lithium Poisoning: Systematic Review and Recommendations from the EXTRIP Workgroup. Clin J Am Soc Nephrol 2015.",
    "difficulty": "foundation"
  },
  {
    "id": "error-20",
    "title": "Septic Shock in Decompensated Cirrhosis Management",
    "icuPlan": [
      "1. Cirrhotic patient presents with septic shock from SBP (MAP 54 mmHg, Lactate 4.8)",
      "2. Administer IV Ceftriaxone 2 g and Albumin 1.5 g/kg",
      "3. Start pure Phenylephrine infusion as the first-line vasopressor to protect against tachycardia",
      "4. Draw blood and ascitic cultures"
    ],
    "options": [
      {
        "id": "a",
        "text": "Using pure Phenylephrine as first-line vasopressor instead of Norepinephrine in septic shock with cirrhosis",
        "isCorrect": true,
        "explanation": "Phenylephrine causes pure alpha-1 peripheral vasoconstriction without beta-1 inotropic support, which significantly reduces stroke volume and splanchnic/hepatic blood flow in cirrhotic patients with underlying cirrhotic cardiomyopathy. Norepinephrine is the recommended first-line vasopressor of choice per SSC and AASLD guidance."
      },
      {
        "id": "b",
        "text": "Administering IV Albumin 1.5 g/kg for SBP",
        "isCorrect": false,
        "explanation": "IV Albumin (1.5 g/kg Day 1, 1.0 g/kg Day 3) reduces hepatorenal syndrome and mortality in SBP per Sort trial guidelines."
      },
      {
        "id": "c",
        "text": "Using Ceftriaxone for spontaneous bacterial peritonitis",
        "isCorrect": false,
        "explanation": "Third-generation cephalosporins are first-line for community-acquired SBP."
      },
      {
        "id": "d",
        "text": "Drawing cultures before antibiotics",
        "isCorrect": false,
        "explanation": "Appropriate standard sepsis care."
      }
    ],
    "physiology": "Cirrhosis is characterized by profound baseline splanchnic vasodilation and blunted cardiac contractile reserve (cirrhotic cardiomyopathy). Pure alpha-1 vasoconstriction increases afterload without inotropic support, collapsing cardiac output.",
    "correctApproach": "Start Norepinephrine as the first-line vasopressor of choice (target MAP ≥ 65 mmHg). Norepinephrine provides balanced alpha-1 vasoconstriction and beta-1 inotropy, preserving cardiac index and hepatic perfusion.",
    "reference": "AASLD Practice Guidance on Management of Adult Patients with Ascites and SBP. Hepatology 2021; Surviving Sepsis Campaign 2021.",
    "difficulty": "intermediate"
  }
];
