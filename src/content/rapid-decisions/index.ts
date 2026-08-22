export interface RapidDecisionOption {
  id: string;
  text: string;
  isCorrect: boolean;
  why: string;
}

export interface RapidDecision {
  id: string;
  vignette: string;
  question: string;
  options: RapidDecisionOption[];
  bedsidePearl: string;
  difficulty: "foundation" | "intermediate" | "advanced";
  relatedTopicId?: string;
  relatedMedicationSlug?: string;
}

export const rapidDecisions: readonly RapidDecision[] = [
  {
    "id": "rd-1",
    "vignette": "A 68-year-old male with ESRD is admitted with generalized weakness. Serum potassium returns at 7.2 mEq/L. The 12-lead ECG demonstrates sine-wave QRS widening and loss of P waves.",
    "question": "What is your immediate first-line pharmacologic intervention?",
    "options": [
      {
        "id": "a",
        "text": "Calcium Gluconate 10% (10–30 mL IV) or Calcium Chloride 10% (10 mL IV)",
        "isCorrect": true,
        "why": "Calcium directly antagonizes potassium-induced membrane excitability within 1–3 minutes by raising the cardiac threshold potential, stabilizing the resting membrane against fatal ventricular fibrillation."
      },
      {
        "id": "b",
        "text": "Regular Insulin 10 units IV with Dextrose 50% 50 mL",
        "isCorrect": false,
        "why": "Insulin shifts potassium intracellularly but takes 15–30 minutes to take effect; it does not provide immediate membrane protection against impending cardiac arrest."
      },
      {
        "id": "c",
        "text": "Sodium Polystyrene Sulfonate (Kayexalate) 30 g orally",
        "isCorrect": false,
        "why": "GI potassium binders take hours to days to eliminate potassium and have zero role in acute hyperkalemic instability."
      },
      {
        "id": "d",
        "text": "Immediate emergency hemodialysis consultation only",
        "isCorrect": false,
        "why": "While dialysis is the definitive removal method, emergency medical membrane stabilization with calcium must precede dialysis setup."
      }
    ],
    "bedsidePearl": "Calcium does not lower serum potassium by a single milliequivalent — it buys 30–60 minutes of membrane stabilization so you can safely shift and eliminate the potassium!",
    "difficulty": "foundation",
    "relatedTopicId": "hyperkalemia",
    "relatedMedicationSlug": "calcium-gluconate"
  },
  {
    "id": "rd-2",
    "vignette": "A 54-year-old female with massive pulmonary embolism develops acute hypotension (MAP 48 mmHg). Bedside echocardiogram shows a severely dilated, hypokinetic right ventricle with leftward septal shift and a hyperdynamic, underfilled LV.",
    "question": "What is the best immediate vasoactive choice to restore right ventricular perfusion?",
    "options": [
      {
        "id": "a",
        "text": "Norepinephrine infusion titrated for MAP ≥ 65–70 mmHg",
        "isCorrect": true,
        "why": "Norepinephrine raises systemic arterial pressure, restoring the right coronary artery driving pressure gradient to the ischemic, failing RV without significantly increasing pulmonary vascular resistance."
      },
      {
        "id": "b",
        "text": "Lactated Ringer's 1,000 mL rapid pressure bag bolus",
        "isCorrect": false,
        "why": "Volume loading an already maximally dilated RV worsens tricuspid regurgitation, increases RV wall tension, and pushes the septum further into the LV, reducing LV stroke volume."
      },
      {
        "id": "c",
        "text": "Dobutamine 15 mcg/kg/min as single-agent monotherapy",
        "isCorrect": false,
        "why": "Dobutamine causes peripheral beta-2 vasodilation and will precipitate catastrophic systemic cardiovascular collapse in severe uncorrected hypotension."
      },
      {
        "id": "d",
        "text": "Pure Phenylephrine infusion",
        "isCorrect": false,
        "why": "Pure alpha-1 constriction increases pulmonary vascular resistance without providing beta-1 inotropic support to the failing RV."
      }
    ],
    "bedsidePearl": "The failing RV is exquisitely dependent on systemic aortic pressure for its own coronary perfusion. Norepinephrine breaks the RV death spiral by restoring MAP!",
    "difficulty": "intermediate",
    "relatedTopicId": "rv-failure",
    "relatedMedicationSlug": "norepinephrine"
  },
  {
    "id": "rd-3",
    "vignette": "A 28-year-old mechanically ventilated patient with severe status asthmaticus suddenly develops profound hypotension (BP 52/30 mmHg) and tachycardia (HR 140 bpm). Peak airway pressure is 66 cmH2O and expiratory flow does not reach baseline.",
    "question": "What is your immediate first diagnostic and therapeutic action?",
    "options": [
      {
        "id": "a",
        "text": "Disconnect the endotracheal tube from the ventilator circuit for 15–20 seconds",
        "isCorrect": true,
        "why": "Disconnection relieves dynamic hyperinflation (auto-PEEP), allowing trapped intrathoracic gas to escape and instantly restoring venous return to the right atrium."
      },
      {
        "id": "b",
        "text": "Administer 1 mg Epinephrine IV push",
        "isCorrect": false,
        "why": "The collapse is mechanical/obstructive due to air trapping; IV epinephrine in a tachycardic patient risks lethal tachyarrhythmias without releasing trapped air."
      },
      {
        "id": "c",
        "text": "Increase extrinsic PEEP on the ventilator to 15 cmH2O",
        "isCorrect": false,
        "why": "Adding extrinsic PEEP stacks on top of auto-PEEP during passive ventilation, worsening hyperinflation and causing PEA cardiac arrest."
      },
      {
        "id": "d",
        "text": "Perform bilateral needle thoracostomies immediately",
        "isCorrect": false,
        "why": "A 5-second ventilator disconnection should always precede invasive pleural punctures unless unilateral absent breath sounds and tracheal deviation are proven."
      }
    ],
    "bedsidePearl": "In ventilated obstructive disease with sudden shock, disconnect first! If the BP surges back as air rushes out, you have both diagnosed and treated auto-PEEP.",
    "difficulty": "intermediate",
    "relatedTopicId": "asthma"
  },
  {
    "id": "rd-4",
    "vignette": "A 48-year-old female presents with acute severe hyponatremia (Na+ 110 mEq/L) and is actively seizing in the ICU despite Lorazepam 4 mg IV.",
    "question": "What is the definitive emergency management?",
    "options": [
      {
        "id": "a",
        "text": "3% Hypertonic Saline (100–150 mL IV bolus over 10–15 minutes)",
        "isCorrect": true,
        "why": "A rapid 4–6 mEq/L elevation in serum sodium via 3% NaCl reduces acute astrocyte cerebral edema, lowers ICP, and terminates hyponatremic status seizures."
      },
      {
        "id": "b",
        "text": "0.9% Normal Saline 1,000 mL bolus",
        "isCorrect": false,
        "why": "Isotonic saline is ineffective for acute hyponatremic encephalopathy and can worsen SIADH-induced hyponatremia via renal desalination."
      },
      {
        "id": "c",
        "text": "Phenytoin 20 mg/kg IV infusion",
        "isCorrect": false,
        "why": "Antiseizure medications fail in metabolic hyponatremic seizures until the underlying osmotic brain swelling is corrected with hypertonic saline."
      },
      {
        "id": "d",
        "text": "Strict fluid restriction only",
        "isCorrect": false,
        "why": "Fluid restriction takes 24–48 hours and is entirely inappropriate for active status epilepticus."
      }
    ],
    "bedsidePearl": "In hyponatremic seizures, hypertonic saline is your antiepileptic drug! 100–150 mL of 3% NaCl over 10 minutes stops the seizure by shrinking the swollen brain.",
    "difficulty": "foundation",
    "relatedTopicId": "severe-sodium-disorders"
  },
  {
    "id": "rd-5",
    "vignette": "A 62-year-old male with septic shock develops Atrial Fibrillation with Rapid Ventricular Response (HR 168 bpm) accompanied by acute hypotension (BP 72/40 mmHg, MAP 50 mmHg) and cold extremities.",
    "question": "What is the best immediate intervention?",
    "options": [
      {
        "id": "a",
        "text": "Synchronized Electrical Cardioversion (120–200 Joules biphasic)",
        "isCorrect": true,
        "why": "Hemodynamically unstable tachyarrhythmias (hypotension, ischemia, pulmonary edema) mandate immediate synchronized electrical cardioversion to restore rate and atrioventricular synchrony."
      },
      {
        "id": "b",
        "text": "Diltiazem 20 mg IV bolus",
        "isCorrect": false,
        "why": "IV calcium channel blockers are negative inotropes and vasodilators; giving diltiazem in hypotensive AF risks immediate circulatory collapse."
      },
      {
        "id": "c",
        "text": "Metoprolol 5 mg IV push",
        "isCorrect": false,
        "why": "Beta-blockers further depress stroke volume and worsen critical hypotension in unstable tachyarrhythmias."
      },
      {
        "id": "d",
        "text": "Digoxin 0.5 mg IV push",
        "isCorrect": false,
        "why": "Digoxin has a delayed onset of 1–2 hours and has zero role in acute emergency cardioversion."
      }
    ],
    "bedsidePearl": "If an arrhythmia is causing hypotension or shock, don't reach for the pharmacy — reach for the defibrillator pads! Synchronized cardioversion is the only answer in unstable AF.",
    "difficulty": "foundation",
    "relatedTopicId": "arrhythmias"
  },
  {
    "id": "rd-6",
    "vignette": "A 32-year-old trauma patient on mechanical ventilation suddenly develops absent right breath sounds, right hemithorax hyperresonance, tracheal deviation to the left, and blood pressure 60/30 mmHg.",
    "question": "What must be done immediately?",
    "options": [
      {
        "id": "a",
        "text": "Immediate right-sided needle decompression (2nd ICS MCL or 4th/5th ICS AAL) followed by chest tube",
        "isCorrect": true,
        "why": "Tension pneumothorax is an immediate clinical emergency; waiting for chest radiography causes preventable cardiac arrest."
      },
      {
        "id": "b",
        "text": "Order an emergent stat portable chest X-ray",
        "isCorrect": false,
        "why": "Radiographic delay in tension pneumothorax with shock is fatal."
      },
      {
        "id": "c",
        "text": "Start Norepinephrine infusion at 0.5 mcg/kg/min",
        "isCorrect": false,
        "why": "Vasopressors do not relieve mechanical obstruction of the inferior vena cava."
      },
      {
        "id": "d",
        "text": "Increase FiO2 to 100% and increase tidal volume",
        "isCorrect": false,
        "why": "Increasing positive pressure ventilation accelerates tension air trapping and hastens cardiac arrest."
      }
    ],
    "bedsidePearl": "Tension pneumothorax is a clinical diagnosis. If the patient has shock, asymmetric breath sounds, and high vent pressures, decompress first and X-ray later!",
    "difficulty": "foundation",
    "relatedTopicId": "pneumothorax"
  },
  {
    "id": "rd-7",
    "vignette": "A 22-year-old female with severe Diabetic Ketoacidosis (glucose 580 mg/dL, pH 7.12) has a serum potassium of 3.1 mEq/L on initial labs. The primary team is about to start an IV regular insulin infusion.",
    "question": "What is your critical bedside order?",
    "options": [
      {
        "id": "a",
        "text": "Hold insulin infusion, administer aggressive IV potassium chloride replacement, and only start insulin once K+ > 3.5 mEq/L",
        "isCorrect": true,
        "why": "Insulin drives potassium into cells. Administering insulin in baseline hypokalemia triggers catastrophic arrhythmias, respiratory muscle paralysis, and cardiac arrest."
      },
      {
        "id": "b",
        "text": "Start high-dose insulin infusion immediately to clear ketoacidosis as top priority",
        "isCorrect": false,
        "why": "Starting insulin before potassium repletion when K+ < 3.5 mEq/L violates all ADA and international DKA guidelines."
      },
      {
        "id": "c",
        "text": "Give Sodium Bicarbonate 100 mEq IV push",
        "isCorrect": false,
        "why": "Bicarbonate causes further intracellular potassium shifting, worsening hypokalemia."
      },
      {
        "id": "d",
        "text": "Administer subcutaneous insulin glargine and monitor",
        "isCorrect": false,
        "why": "Any form of insulin without potassium repletion is dangerous when baseline K+ is <3.5 mEq/L."
      }
    ],
    "bedsidePearl": "Never start insulin in DKA if the serum potassium is <3.5 mEq/L! Replete potassium first — hypokalemic cardiac arrest kills faster than ketoacidosis.",
    "difficulty": "foundation",
    "relatedTopicId": "diabetic-ketoacidosis"
  },
  {
    "id": "rd-8",
    "vignette": "A 35-year-old with suspected acute bacterial meningitis presents in septic shock (MAP 54 mmHg) with altered mental status. The ED team is transporting the patient for a head CT before performing lumbar puncture.",
    "question": "What is the most critical immediate action?",
    "options": [
      {
        "id": "a",
        "text": "Administer IV Dexamethasone (10 mg) and empiric broad-spectrum antibiotics (Ceftriaxone + Vancomycin ± Ampicillin) immediately before CT/LP",
        "isCorrect": true,
        "why": "Antibiotics and adjunctive dexamethasone must NEVER be delayed for neuroimaging or lumbar puncture in suspected bacterial meningitis. Blood cultures should be drawn, then antibiotics given immediately."
      },
      {
        "id": "b",
        "text": "Withhold all antibiotics until lumbar puncture is completed to ensure pristine CSF cultures",
        "isCorrect": false,
        "why": "Delaying antibiotics by even 1–2 hours in bacterial meningitis significantly increases mortality and permanent brain injury."
      },
      {
        "id": "c",
        "text": "Perform lumbar puncture in the CT scanner room before administering steroids",
        "isCorrect": false,
        "why": "Dexamethasone must be given before or with the first antibiotic dose to prevent inflammatory hearing loss and brain damage."
      },
      {
        "id": "d",
        "text": "Give high-dose Mannitol and await neurological consult",
        "isCorrect": false,
        "why": "Immediate bactericidal treatment is the primary life-saving measure."
      }
    ],
    "bedsidePearl": "In bacterial meningitis, do not let a CT scanner delay your antibiotics! Draw blood cultures, give dexamethasone + antibiotics immediately, and do the LP when safe.",
    "difficulty": "intermediate",
    "relatedTopicId": "meningitis-encephalitis",
    "relatedMedicationSlug": "dexamethasone"
  },
  {
    "id": "rd-9",
    "vignette": "A 62-year-old male with acute Type A Aortic Dissection is admitted with severe chest pain, BP 210/115 mmHg, and HR 98 bpm. The resident wants to start IV Nicardipine monotherapy immediately.",
    "question": "What is the mandatory drug sequence?",
    "options": [
      {
        "id": "a",
        "text": "Administer IV Beta-Blocker (Esmolol / Labetalol) FIRST to target HR < 60 bpm, THEN add vasodilator (Nicardipine) for SBP 100–120 mmHg",
        "isCorrect": true,
        "why": "Vasodilators without prior beta-blockade trigger reflex tachycardia and increase aortic dP/dt (shear stress), accelerating aortic wall tearing and rupture. Heart rate must be controlled first!"
      },
      {
        "id": "b",
        "text": "Start Nicardipine infusion immediately and avoid beta-blockers",
        "isCorrect": false,
        "why": "Nicardipine monotherapy induces reflex sympathetic tachycardia and spikes dP/dt, propagating the dissection flap."
      },
      {
        "id": "c",
        "text": "Administer sublingual Nitroglycerin and observe",
        "isCorrect": false,
        "why": "Sublingual nitrates are uncontrolled, cause reflex tachycardia, and are inadequate for dissection crisis."
      },
      {
        "id": "d",
        "text": "Give IV Hydralazine 20 mg push stat",
        "isCorrect": false,
        "why": "Hydralazine causes profound reflex tachycardia and unpredictable hypotension, making it strictly contraindicated in aortic dissection."
      }
    ],
    "bedsidePearl": "In aortic dissection, always beta-block before you vasodilate! Esmolol controls dP/dt; only then add nicardipine to hit SBP 100–120 mmHg.",
    "difficulty": "intermediate",
    "relatedTopicId": "acute-aortic-syndromes",
    "relatedMedicationSlug": "esmolol"
  },
  {
    "id": "rd-10",
    "vignette": "A 58-year-old ICU patient on unfractionated heparin for DVT develops a platelet drop from 280,000 to 95,000/μL on Day 6 of therapy (4Ts score = 7, high probability).",
    "question": "What is your immediate management step?",
    "options": [
      {
        "id": "a",
        "text": "Stop all heparin products immediately (including flushes) and start a non-heparin direct thrombin inhibitor (Argatroban or Bivalirudin)",
        "isCorrect": true,
        "why": "Suspected Heparin-Induced Thrombocytopenia (HIT) mandates immediate cessation of all heparin and initiation of therapeutic non-heparin anticoagulation to prevent catastrophic arterial and venous thrombosis."
      },
      {
        "id": "b",
        "text": "Switch to Low-Molecular-Weight Heparin (Enoxaparin)",
        "isCorrect": false,
        "why": "LMWH cross-reacts with HIT antibodies in >90% of cases and will trigger fulminant thrombosis."
      },
      {
        "id": "c",
        "text": "Start Warfarin 10 mg orally as sole therapy",
        "isCorrect": false,
        "why": "Starting warfarin in acute HIT without a direct thrombin inhibitor causes rapid protein C depletion, precipitating venous limb gangrene and skin necrosis."
      },
      {
        "id": "d",
        "text": "Transfuse 2 units of platelets immediately",
        "isCorrect": false,
        "why": "Platelet transfusions in HIT act as 'fuel on the fire' for antibody-mediated platelet aggregation and thrombosis."
      }
    ],
    "bedsidePearl": "HIT is a prothrombotic emergency, not a bleeding disorder! Stop all heparin, avoid LMWH cross-reactivity, never give warfarin alone in the acute phase, and initiate appropriate non-heparin anticoagulation (such as Argatroban or Bivalirudin based on organ function).",
    "difficulty": "intermediate",
    "relatedTopicId": "hit"
  },
  {
    "id": "rd-11",
    "vignette": "A 38-year-old head-injured patient on Propofol at 85 mcg/kg/min for 4 days develops unexplained refractory metabolic acidosis, hyperkalemia (K+ 6.4), rhabdomyolysis (CK 38,000), and Brugada-like ST elevation on ECG.",
    "question": "What is the diagnosis and immediate action?",
    "options": [
      {
        "id": "a",
        "text": "Propofol Infusion Syndrome (PRIS): Stop propofol infusion immediately and switch to alternative sedation (e.g., Dexmedetomidine, Midazolam)",
        "isCorrect": true,
        "why": "PRIS is a lethal toxic mitochondrial decoupling syndrome seen with high-dose (>50 mcg/kg/min) or prolonged (>48h) propofol use; immediate cessation is life-saving."
      },
      {
        "id": "b",
        "text": "Acute myocardial infarction: Administer dual antiplatelet therapy and heparin",
        "isCorrect": false,
        "why": "The findings represent toxic mitochondrial failure, not coronary plaque rupture; continuing propofol will cause asystole."
      },
      {
        "id": "c",
        "text": "Increase Propofol to 100 mcg/kg/min to control ICP",
        "isCorrect": false,
        "why": "Increasing propofol in PRIS guarantees fatal circulatory collapse."
      },
      {
        "id": "d",
        "text": "Administer sodium bicarbonate and continue propofol at same rate",
        "isCorrect": false,
        "why": "Bicarbonate does not reverse mitochondrial respiratory chain blockade."
      }
    ],
    "bedsidePearl": "Propofol Infusion Syndrome has up to 50% mortality. Never run propofol >50 mcg/kg/min for >48 hours without tracking triglycerides, CK, and blood gases!",
    "difficulty": "advanced",
    "relatedTopicId": "icu-sedation-delirium",
    "relatedMedicationSlug": "propofol"
  },
  {
    "id": "rd-12",
    "vignette": "A 45-year-old with severe ARDS (P/F ratio 92 on PEEP 14, FiO2 0.80) is placed in the prone position. The protocol duration is being discussed.",
    "question": "According to the landmark PROSEVA trial, what is the minimum duration per prone session to achieve a mortality benefit?",
    "options": [
      {
        "id": "a",
        "text": "At least 16 consecutive hours per session",
        "isCorrect": true,
        "why": "The PROSEVA trial proved that prone positioning for at least 16 consecutive hours per day in severe ARDS produces a massive reduction in 28-day mortality (16% vs 32.8%)."
      },
      {
        "id": "b",
        "text": "4–6 hours per day",
        "isCorrect": false,
        "why": "Short-duration proning improves transient oxygenation but fails to confer a 28-day mortality benefit."
      },
      {
        "id": "c",
        "text": "2 hours on, 2 hours off alternating",
        "isCorrect": false,
        "why": "Frequent turning creates airway dislodgement risks and fails to provide sustained dorsal alveolar recruitment."
      },
      {
        "id": "d",
        "text": "Continuous proning for 72 hours without supine breaks",
        "isCorrect": false,
        "why": "Sessions >24 hours increase facial skin breakdown, brachial plexus injury, and corneal ulceration."
      }
    ],
    "bedsidePearl": "Prone positioning in severe ARDS is not a quick 2-hour treatment — it must be delivered for at least 16 continuous hours per day to save lives!",
    "difficulty": "foundation",
    "relatedTopicId": "ards"
  },
  {
    "id": "rd-13",
    "vignette": "During DKA protocol management, blood glucose falls from 450 mg/dL to 230 mg/dL. The serum anion gap remains elevated at 22 mEq/L and beta-hydroxybutyrate is 4.2 mmol/L.",
    "question": "What is the appropriate fluid and insulin adjustment?",
    "options": [
      {
        "id": "a",
        "text": "Add 5% or 10% Dextrose (e.g., D5W / 0.45% NS) to the IV fluids while CONTINUING the IV insulin infusion to clear ketones",
        "isCorrect": true,
        "why": "Insulin is required to suppress lipolysis and hepatic ketogenesis. When glucose reaches ~200–250 mg/dL, adding dextrose prevents hypoglycemia while allowing insulin to remain running until the anion gap closes."
      },
      {
        "id": "b",
        "text": "Stop the insulin infusion completely because glucose is near normal",
        "isCorrect": false,
        "why": "Stopping insulin while the anion gap is open leads to immediate rebound ketoacidosis."
      },
      {
        "id": "c",
        "text": "Switch to sliding-scale subcutaneous insulin only",
        "isCorrect": false,
        "why": "Subcutaneous sliding scale is inadequate to clear ongoing ketoacidosis in acute DKA."
      },
      {
        "id": "d",
        "text": "Stop all IV fluids and administer boluses of sterile water",
        "isCorrect": false,
        "why": "Sterile water IV causes acute intravascular hemolysis."
      }
    ],
    "bedsidePearl": "In DKA, insulin is for the ketones, not just the glucose! When glucose hits 250 mg/dL, add dextrose to the bag and keep the insulin running until the gap is closed.",
    "difficulty": "intermediate",
    "relatedTopicId": "diabetic-ketoacidosis"
  },
  {
    "id": "rd-14",
    "vignette": "A peripheral IV line infusing Norepinephrine at 0.15 mcg/kg/min extravasates into the forearm soft tissue. The area is blanched, cold, and severely ischemic.",
    "question": "What is the immediate antidote and action?",
    "options": [
      {
        "id": "a",
        "text": "Infiltrate Phentolamine (5–10 mg in 10 mL saline) subcutaneously into the extravasation site with a fine needle",
        "isCorrect": true,
        "why": "Phentolamine is a competitive alpha-adrenergic antagonist that immediately reverses catecholamine-induced intense local vasoconstriction, preventing ischemic tissue necrosis."
      },
      {
        "id": "b",
        "text": "Apply ice packs and elevate the extremity",
        "isCorrect": false,
        "why": "Cold temperature worsens vasoconstriction and accelerates tissue necrosis in catecholamine extravasation."
      },
      {
        "id": "c",
        "text": "Inject high-dose Epinephrine into the site",
        "isCorrect": false,
        "why": "Epinephrine causes further vasoconstriction and worsens ischemic necrosis."
      },
      {
        "id": "d",
        "text": "Perform emergency surgical fasciotomy immediately",
        "isCorrect": false,
        "why": "Chemical alpha-blockade with phentolamine or topical nitroglycerin is the primary antidote before considering surgery."
      }
    ],
    "bedsidePearl": "If vasopressors extravasate, act immediately: aspirate what you can, then infiltrate phentolamine subcutaneously to block alpha receptors and save the limb!",
    "difficulty": "intermediate",
    "relatedTopicId": "shock",
    "relatedMedicationSlug": "norepinephrine"
  },
  {
    "id": "rd-15",
    "vignette": "During ACLS cardiac arrest resuscitation for Ventricular Fibrillation (VF), the patient has received 2 defibrillations (200J biphasic) and 1 mg of IV Epinephrine. VF persists on the monitor after the second shock.",
    "question": "What is the guideline-recommended first antiarrhythmic agent to administer during CPR?",
    "options": [
      {
        "id": "a",
        "text": "Amiodarone 300 mg IV/IO bolus (or Lidocaine 1–1.5 mg/kg IV/IO)",
        "isCorrect": true,
        "why": "ACLS guidelines recommend Amiodarone 300 mg (or Lidocaine) after the second defibrillation in shock-refractory VF/pulseless VT to increase conversion to a perfusing rhythm."
      },
      {
        "id": "b",
        "text": "Atropine 1 mg IV bolus",
        "isCorrect": false,
        "why": "Atropine has zero role in ventricular fibrillation."
      },
      {
        "id": "c",
        "text": "Procainamide 17 mg/kg IV infusion",
        "isCorrect": false,
        "why": "Procainamide is too slow for acute cardiac arrest algorithms."
      },
      {
        "id": "d",
        "text": "Magnesium Sulfate 10 g IV push",
        "isCorrect": false,
        "why": "Magnesium is only indicated for Torsades de Pointes, not routine monomorphic VF."
      }
    ],
    "bedsidePearl": "In shock-refractory VF, give Amiodarone 300 mg IV after shock #2, followed by a second dose of 150 mg if VF persists after shock #3!",
    "difficulty": "foundation",
    "relatedTopicId": "cardiac-arrest-post-arrest"
  },
  {
    "id": "rd-16",
    "vignette": "A 52-year-old with aneurysmal Subarachnoid Hemorrhage (SAH) has a blood pressure of 195/105 mmHg prior to surgical clipping of the ruptured aneurysm.",
    "question": "What is the recommended pre-clipping blood pressure target?",
    "options": [
      {
        "id": "a",
        "text": "Individualize blood pressure control with titratable IV antihypertensives (e.g., Nicardipine or Clevidipine) to avoid severe hypertension while preventing hypotension and excessive BP variability, preserving cerebral perfusion pressure",
        "isCorrect": true,
        "why": "Before the aneurysm is secured, acute hypertensive spikes dramatically increase rebleeding risk, but dropping MAP too low compromises cerebral perfusion in the face of elevated ICP."
      },
      {
        "id": "b",
        "text": "Drop SBP aggressively to < 90 mmHg",
        "isCorrect": false,
        "why": "Excessive hypotension triggers severe secondary ischemic stroke."
      },
      {
        "id": "c",
        "text": "Allow blood pressure to run without limit (permissive hypertension > 220 mmHg)",
        "isCorrect": false,
        "why": "Uncontrolled hypertension in an unsecured aneurysm causes fatal rebleeding."
      },
      {
        "id": "d",
        "text": "Administer high-dose Nitroprusside boluses",
        "isCorrect": false,
        "why": "Nitroprusside causes cerebral venodilation, increasing intracranial pressure."
      }
    ],
    "bedsidePearl": "In unsecured aneurysmal SAH, AHA/ASA guidelines emphasize individualized blood pressure control: avoid severe hypertension, avoid hypotension and hypovolemia, and minimize BP variability to maintain adequate cerebral perfusion.",
    "difficulty": "intermediate",
    "relatedTopicId": "intracranial-hemorrhage",
    "relatedMedicationSlug": "nicardipine"
  },
  {
    "id": "rd-17",
    "vignette": "A mechanically ventilated patient with ARDS is on Volume Control (VT 420 mL, PEEP 12, RR 20). An inspiratory hold reveals a Plateau Pressure (Pplat) of 37 cmH2O and Driving Pressure of 25 cmH2O.",
    "question": "What is your immediate ventilator adjustment to prevent ventilator-induced lung injury (VILI)?",
    "options": [
      {
        "id": "a",
        "text": "Decrease tidal volume stepwise (to 4–5 mL/kg PBW) to lower Pplat ≤ 30 cmH2O and Driving Pressure < 14–15 cmH2O",
        "isCorrect": true,
        "why": "The ARDSNet protocol mandates keeping Pplat ≤ 30 cmH2O and low driving pressure to prevent alveolar barotrauma, volutrauma, and stress fracture of the alveolar-capillary barrier."
      },
      {
        "id": "b",
        "text": "Increase tidal volume to 600 mL to improve ventilation",
        "isCorrect": false,
        "why": "Increasing tidal volume when Pplat is 37 cmH2O causes catastrophic alveolar rupture and pneumothorax."
      },
      {
        "id": "c",
        "text": "Increase PEEP to 22 cmH2O without changing tidal volume",
        "isCorrect": false,
        "why": "Increasing PEEP without reducing VT will spike Pplat above 45 cmH2O."
      },
      {
        "id": "d",
        "text": "Increase inspiratory flow rate to 100 L/min",
        "isCorrect": false,
        "why": "Flow rate increases peak pressure without decreasing plateau pressure."
      }
    ],
    "bedsidePearl": "Driving Pressure = Plateau Pressure minus PEEP. If Pplat > 30 cmH2O, drop the tidal volume immediately to protect the baby lung!",
    "difficulty": "foundation",
    "relatedTopicId": "ards"
  },
  {
    "id": "rd-18",
    "vignette": "A 69-year-old in complete heart block (HR 30 bpm, BP 68/38 mmHg) fails to respond to Atropine 1 mg. Transcutaneous pacing pads are being placed.",
    "question": "Which chronotropic infusion is most appropriate to run concurrently as a bridge?",
    "options": [
      {
        "id": "a",
        "text": "Epinephrine (2–10 mcg/min) or Dopamine (5–20 mcg/kg/min)",
        "isCorrect": true,
        "why": "Epinephrine and Dopamine stimulate beta-1 adrenergic receptors in infranodal ventricular pacemakers, increasing escape rates and supporting blood pressure."
      },
      {
        "id": "b",
        "text": "Amiodarone 150 mg IV",
        "isCorrect": false,
        "why": "Amiodarone suppresses cardiac automaticity and will cause total asystole."
      },
      {
        "id": "c",
        "text": "Metoprolol 5 mg IV",
        "isCorrect": false,
        "why": "Beta-blockers extinguish the escape rhythm."
      },
      {
        "id": "d",
        "text": "Phenylephrine 200 mcg/min",
        "isCorrect": false,
        "why": "Pure alpha-1 constriction triggers reflex vagal slowing, worsening bradycardia."
      }
    ],
    "bedsidePearl": "When atropine fails in complete heart block, start an epinephrine infusion at 2–10 mcg/min while setting up transcutaneous or transvenous pacing!",
    "difficulty": "intermediate",
    "relatedTopicId": "arrhythmias",
    "relatedMedicationSlug": "epinephrine"
  },
  {
    "id": "rd-19",
    "vignette": "A patient with refractory generalized convulsive status epilepticus continues seizing after receiving Lorazepam (4 mg + 4 mg) and IV Levetiracetam (60 mg/kg). Duration of seizure is now 35 minutes.",
    "question": "What is the mandatory next intervention?",
    "options": [
      {
        "id": "a",
        "text": "Endotracheal intubation, continuous anesthetic infusion (Propofol or Midazolam), and continuous EEG monitoring",
        "isCorrect": true,
        "why": "Refractory Status Epilepticus (>30 min or failing 1st & 2nd line drugs) requires general anesthesia to halt excitotoxic neuronal injury and burst suppression on continuous EEG."
      },
      {
        "id": "b",
        "text": "Wait 45 minutes to assess the full effect of levetiracetam",
        "isCorrect": false,
        "why": "Waiting in RSE causes irreversible hippocampal damage and rhabdomyolysis."
      },
      {
        "id": "c",
        "text": "Give oral carbamazepine via nasogastric tube",
        "isCorrect": false,
        "why": "Enteral AEDs are useless in active status epilepticus."
      },
      {
        "id": "d",
        "text": "Administer IV Succinylcholine to stop the shaking",
        "isCorrect": false,
        "why": "Paralytics only stop visible muscle twitches; electrographic seizure activity in the brain continues unabated!"
      }
    ],
    "bedsidePearl": "Paralytics stop the shaking, but only general anesthetics stop the brain from seizing! At 30 minutes, intubate and start continuous propofol or midazolam.",
    "difficulty": "intermediate",
    "relatedTopicId": "status-epilepticus",
    "relatedMedicationSlug": "propofol"
  },
  {
    "id": "rd-20",
    "vignette": "An 82-year-old nursing home resident presents with severe Hyperosmolar Hyperglycemic State (HHS): Blood glucose 980 mg/dL, serum osmolarity 365 mOsm/kg, serum Na+ 152 mEq/L, blood pH 7.36, serum bicarbonate 22 mEq/L.",
    "question": "What is the most critical initial resuscitation priority?",
    "options": [
      {
        "id": "a",
        "text": "Aggressive isotonic IV crystalloid volume resuscitation (1–2 L in the first 1–2 hours) BEFORE starting high-dose insulin",
        "isCorrect": true,
        "why": "HHS patients have massive free water deficits (8–12 L). Giving high-dose insulin before adequate volume resuscitation drives glucose and water out of the intravascular space, causing vascular collapse and shock."
      },
      {
        "id": "b",
        "text": "Immediate high-dose IV insulin bolus (0.2 units/kg) with zero initial fluids",
        "isCorrect": false,
        "why": "Insulin without volume expansion drops intravascular volume precipitously, precipitating circulatory collapse."
      },
      {
        "id": "c",
        "text": "Administer 3% Hypertonic Saline",
        "isCorrect": false,
        "why": "Patient is already hyperosmolar (365 mOsm/kg); hypertonic saline is lethal."
      },
      {
        "id": "d",
        "text": "Sodium Bicarbonate 150 mEq infusion",
        "isCorrect": false,
        "why": "There is no significant acidosis in HHS (pH 7.36, HCO3 22)."
      }
    ],
    "bedsidePearl": "In HHS, fluid resuscitation comes first! Rehydrate the intravascular space before aggressively lowering the blood glucose with insulin.",
    "difficulty": "foundation",
    "relatedTopicId": "endocrine-emergencies"
  },
  {
    "id": "rd-21",
    "vignette": "A septic ICU patient on broad-spectrum antibiotics has 2 sets of peripheral and central line blood cultures positive for Candida glabrata.",
    "question": "What is the first-line antifungal class and catheter management?",
    "options": [
      {
        "id": "a",
        "text": "IV Echinocandin (Anidulafungin / Caspofungin / Micafungin) + evaluate and remove the central venous catheter when it is the suspected source",
        "isCorrect": true,
        "why": "IDSA guidelines recommend an echinocandin as first-line for candidemia (superior fungicidal activity and coverage of C. glabrata) along with evaluating and removing the colonized catheter when feasible."
      },
      {
        "id": "b",
        "text": "Fluconazole 200 mg daily and leave line in place",
        "isCorrect": false,
        "why": "C. glabrata has high rates of fluconazole resistance, and retained lines perpetuate bloodstream infection."
      },
      {
        "id": "c",
        "text": "Nystatin oral swish and swallow",
        "isCorrect": false,
        "why": "Nystatin is not absorbed and has zero systemic efficacy for candidemia."
      },
      {
        "id": "d",
        "text": "Voriconazole monotherapy",
        "isCorrect": false,
        "why": "Echinocandins are superior to azoles for initial candidemia therapy."
      }
    ],
    "bedsidePearl": "Candida recovered from blood should be considered clinically significant and evaluated/managed as candidemia rather than dismissed as contamination. Initiate prompt echinocandin therapy and evaluate the central line for removal.",
    "difficulty": "intermediate",
    "relatedTopicId": "mdr-organisms",
    "relatedMedicationSlug": "anidulafungin"
  },
  {
    "id": "rd-22",
    "vignette": "A 66-year-old with acute COPD exacerbation has ABG: pH 7.26, PaCO2 68 mmHg, PaO2 54 mmHg on room air. He is tachypneic (RR 30) but alert and cooperative.",
    "question": "What is the first-line respiratory support intervention?",
    "options": [
      {
        "id": "a",
        "text": "Non-Invasive Positive Pressure Ventilation (BiPAP / NIV)",
        "isCorrect": true,
        "why": "NIV is the gold standard for acute hypercapnic COPD exacerbations (reduces intubation rates, ICU length of stay, and mortality by >50%)."
      },
      {
        "id": "b",
        "text": "Immediate endotracheal intubation and invasive mechanical ventilation",
        "isCorrect": false,
        "why": "Invasive intubation should be reserved for patients failing NIV, uncooperative, or in respiratory arrest."
      },
      {
        "id": "c",
        "text": "High-flow 100% Non-Rebreather oxygen mask alone",
        "isCorrect": false,
        "why": "High FiO2 without ventilatory support worsens hypercapnia (Haldane effect, V/Q mismatch) without offloading respiratory muscles."
      },
      {
        "id": "d",
        "text": "Administer IV Doxapram respiratory stimulant",
        "isCorrect": false,
        "why": "Respiratory stimulants are obsolete and inferior to NIV."
      }
    ],
    "bedsidePearl": "BiPAP is the definitive life-saving machine in COPD exacerbations. Start NIV early for respiratory acidosis (pH < 7.35, PaCO2 > 45) in the cooperative patient!",
    "difficulty": "foundation",
    "relatedTopicId": "copd-exacerbation"
  },
  {
    "id": "rd-23",
    "vignette": "A 50-year-old cirrhotic with massive upper GI bleeding presents in hemorrhagic shock (BP 74/42 mmHg, HR 135 bpm).",
    "question": "What is the correct order of management?",
    "options": [
      {
        "id": "a",
        "text": "Resuscitate with restrictive PRBC transfusion (target Hb 7–8 g/dL), start IV Octreotide + IV Ceftriaxone, protect airway, then perform urgent endoscopy",
        "isCorrect": true,
        "why": "Volume resuscitation with restrictive blood transfusion (target 7–8 g/dL per Villanueva NEJM trial prevents rebound portal hypertension) plus vasoactive octreotide and prophylactic ceftriaxone are mandatory before endoscopy."
      },
      {
        "id": "b",
        "text": "Aggressively over-transfuse PRBCs to target Hb > 11 g/dL before endoscopy",
        "isCorrect": false,
        "why": "Liberal transfusion (Hb > 9–10) spikes portal venous pressure, triggering massive rebleeding and doubling mortality."
      },
      {
        "id": "c",
        "text": "Rush patient to endoscopy suite immediately without IV access or airway protection",
        "isCorrect": false,
        "why": "Endoscopy in an un-resuscitated, unprotected shock state leads to fatal aspiration and arrest."
      },
      {
        "id": "d",
        "text": "Administer high-dose Heparin infusion",
        "isCorrect": false,
        "why": "Anticoagulation will accelerate fatal hemorrhage."
      }
    ],
    "bedsidePearl": "In variceal GI bleeding, restrict your blood transfusion! Target hemoglobin 7–8 g/dL — overtransfusing blows the clot off the varices.",
    "difficulty": "foundation",
    "relatedTopicId": "upper-gi-bleeding",
    "relatedMedicationSlug": "ceftriaxone"
  },
  {
    "id": "rd-24",
    "vignette": "A 60-year-old with septic shock has received 30 mL/kg balanced crystalloids. MAP is 56 mmHg and blood lactate is 3.8 mmol/L.",
    "question": "What is the guideline-directed vasopressor threshold?",
    "options": [
      {
        "id": "a",
        "text": "Start Norepinephrine infusion immediately (titrate for MAP ≥ 65 mmHg) without delaying for more fluid",
        "isCorrect": true,
        "why": "Surviving Sepsis Campaign guidelines recommend early Norepinephrine to restore organ perfusion pressure without waiting for completion of fluid resuscitation if MAP remains <65."
      },
      {
        "id": "b",
        "text": "Withhold all vasopressors until another 4 liters of fluid are infused",
        "isCorrect": false,
        "why": "Delaying vasopressors in persistent hypotension leads to acute tubular necrosis and organ infarction."
      },
      {
        "id": "c",
        "text": "Start Dopamine infusion as first choice",
        "isCorrect": false,
        "why": "Dopamine is associated with increased tachyarrhythmias and mortality compared to Norepinephrine."
      },
      {
        "id": "d",
        "text": "Start Phenylephrine monotherapy",
        "isCorrect": false,
        "why": "Phenylephrine lacks beta-1 inotropic support."
      }
    ],
    "bedsidePearl": "Do not wait for fluids to finish before starting norepinephrine! If MAP is <65 mmHg, start the pressor early to preserve renal and coronary perfusion.",
    "difficulty": "foundation",
    "relatedTopicId": "septic-shock",
    "relatedMedicationSlug": "norepinephrine"
  },
  {
    "id": "rd-25",
    "vignette": "A 42-year-old with bipolar disorder presents with severe chronic lithium toxicity: Serum lithium level 4.8 mEq/L, coarse tremors, hyperreflexia, ataxia, and acute oliguric kidney injury.",
    "question": "What is the most effective definitive elimination therapy per EXTRIP guidelines?",
    "options": [
      {
        "id": "a",
        "text": "Emergency Hemodialysis",
        "isCorrect": true,
        "why": "EXTRIP guidelines recommend emergency hemodialysis for severe lithium toxicity (level >4.0 mEq/L, or >2.5 with neurological signs / renal impairment) as lithium is a small, water-soluble, non-protein-bound ion readily cleared by dialysis."
      },
      {
        "id": "b",
        "text": "Administer activated charcoal orally",
        "isCorrect": false,
        "why": "Activated charcoal does NOT bind metal ions like lithium and has zero efficacy."
      },
      {
        "id": "c",
        "text": "Forced alkaline diuresis with sodium bicarbonate",
        "isCorrect": false,
        "why": "Forced diuresis is ineffective and causes severe pulmonary edema in oliguric renal failure."
      },
      {
        "id": "d",
        "text": "Whole bowel irrigation only",
        "isCorrect": false,
        "why": "WBI is only for acute sustained-release ingestions within 2–4 hours, not severe systemic toxicity with level 4.8."
      }
    ],
    "bedsidePearl": "Activated charcoal does NOT bind lithium! For severe toxicity with neurological deficits or levels >4.0 mEq/L, hemodialysis is the only answer.",
    "difficulty": "intermediate",
    "relatedTopicId": "toxicologic-emergencies"
  },
  {
    "id": "rd-26",
    "vignette": "A mechanically ventilated patient with severe ARDS on lung-protective ventilation (VT 4 mL/kg PBW) develops hypercapnia: ABG shows pH 7.22, PaCO2 64 mmHg, PaO2 82 mmHg.",
    "question": "What is the best clinical management for this blood gas?",
    "options": [
      {
        "id": "a",
        "text": "Accept permissive hypercapnia; maintain lung-protective ventilation and monitor clinical/hemodynamic tolerance rather than forcing PaCO2 normalization",
        "isCorrect": true,
        "why": "Accepting hypercapnia to maintain lung-protective ventilation prevents harmful alveolar overdistension and volutrauma that occur when attempting to force PaCO2 normalization in severe ARDS."
      },
      {
        "id": "b",
        "text": "Increase tidal volume to 9 mL/kg PBW to normalize PaCO2 to 40 mmHg",
        "isCorrect": false,
        "why": "Increasing tidal volume violates ARDSNet lung protection and causes ventilator-induced lung injury (VILI)."
      },
      {
        "id": "c",
        "text": "Administer 4 ampules of Sodium Bicarbonate IV",
        "isCorrect": false,
        "why": "Bicarbonate infusion generates additional dissolved CO2 and is not indicated for respiratory acidosis."
      },
      {
        "id": "d",
        "text": "Paralyze the patient and increase respiratory rate to 40/min",
        "isCorrect": false,
        "why": "Excessive respiratory rates cause auto-PEEP and worsening dynamic hyperinflation."
      }
    ],
    "bedsidePearl": "In ARDS, prioritize lung-protective tidal volumes and driving pressures over PaCO2 normalization; permissive hypercapnia is generally well tolerated when hemodynamically stable and without contraindications (such as severe acute cor pulmonale or intracranial hypertension).",
    "difficulty": "foundation",
    "relatedTopicId": "ards"
  },
  {
    "id": "rd-27",
    "vignette": "A 60-year-old in refractory cardiogenic shock post-anterior MI remains in SCAI Stage D shock (CI 1.5 L/min/m2, MAP 55, lactate 6.2 mmol/L) despite Norepinephrine (0.3 mcg/kg/min) and Dobutamine (10 mcg/kg/min).",
    "question": "What is the appropriate escalation pathway?",
    "options": [
      {
        "id": "a",
        "text": "Evaluate for emergent Mechanical Circulatory Support (MCS) — e.g., Microaxial LV pump (Impella) or VA-ECMO",
        "isCorrect": true,
        "why": "Refractory cardiogenic shock failing dual inopressor support requires temporary mechanical circulatory support to unload the left ventricle and restore systemic organ perfusion."
      },
      {
        "id": "b",
        "text": "Add a third inotrope (Milrinone 0.75 mcg/kg/min) without MCS",
        "isCorrect": false,
        "why": "Triple inotropic therapy increases myocardial oxygen consumption, induces refractory arrhythmias, and causes vasodilation."
      },
      {
        "id": "c",
        "text": "Switch all inotropes off and administer high-dose beta-blockers",
        "isCorrect": false,
        "why": "Beta-blockers in cardiogenic shock cause immediate asystole and death."
      },
      {
        "id": "d",
        "text": "Administer 3 liters of normal saline bolus",
        "isCorrect": false,
        "why": "Volume loading failing myocardium in cardiogenic shock worsens pulmonary edema and LV distension."
      }
    ],
    "bedsidePearl": "When cardiogenic shock fails dual vasoactives, more drugs won't save the patient. Escalate early to mechanical circulatory support (Impella / VA-ECMO)!",
    "difficulty": "advanced",
    "relatedTopicId": "cardiogenic-shock"
  },
  {
    "id": "rd-28",
    "vignette": "An 80-year-old female with severe symptomatic Bradycardia (HR 28 bpm, BP 70/36 mmHg) is receiving transcutaneous pacing. The nurse asks how to confirm true mechanical capture.",
    "question": "How do you definitively verify mechanical capture during transcutaneous pacing?",
    "options": [
      {
        "id": "a",
        "text": "Assess mechanical pulse with femoral or radial arterial palpation, or arterial line waveform / pulse oximeter plethysmograph, avoiding reliance on carotid palpation alone",
        "isCorrect": true,
        "why": "Electrical pacing triggers intense neck and pectoral muscle twitches that mimic a carotid pulse. True mechanical ventricular capture must be confirmed via a peripheral pulse (femoral or radial) or arterial line wave."
      },
      {
        "id": "b",
        "text": "Palpate the carotid pulse near the pacing pads",
        "isCorrect": false,
        "why": "Skeletal muscle jerking from pacing pads produces false-positive carotid pulsations."
      },
      {
        "id": "c",
        "text": "Look only at the pacing spikes on the monitor telemetry",
        "isCorrect": false,
        "why": "Pacer spikes show only electrical generator output, not mechanical ventricular ejection."
      },
      {
        "id": "d",
        "text": "Check pulse oximeter waveform alone",
        "isCorrect": false,
        "why": "Pulse oximeter waveforms can register motion artifact from rhythmic muscle contractions."
      }
    ],
    "bedsidePearl": "Electrical pacing spikes do not equal mechanical capture! Confirm true mechanical pulse using femoral/radial palpation, arterial line, or pulse oximetry plethysmography — direct chest muscle twitching can mimic a carotid pulse.",
    "difficulty": "intermediate",
    "relatedTopicId": "arrhythmias"
  },
  {
    "id": "rd-29",
    "vignette": "A 55-year-old achieves ROSC after 15 minutes of CPR for ventricular fibrillation. On post-cardiac arrest ICU admission, he is ventilated on FiO2 1.0 with an arterial PaO2 of 340 mmHg and SpO2 100%.",
    "question": "What is the guideline-recommended oxygen titration target post-ROSC?",
    "options": [
      {
        "id": "a",
        "text": "Titrate FiO2 downward to maintain SpO2 between 94% and 98% (avoid hyperoxia)",
        "isCorrect": true,
        "why": "Post-cardiac arrest hyperoxia (PaO2 > 300 mmHg) generates massive reactive oxygen species (ROS), worsens reperfusion injury, and significantly increases neurological mortality."
      },
      {
        "id": "b",
        "text": "Maintain 100% FiO2 for the first 24 hours to maximize tissue oxygen delivery",
        "isCorrect": false,
        "why": "Hyperoxia exacerbates cerebral reperfusion injury and worsens neurological outcomes."
      },
      {
        "id": "c",
        "text": "Allow PaO2 to fall to 45 mmHg",
        "isCorrect": false,
        "why": "Severe hypoxemia causes secondary hypoxic brain injury."
      },
      {
        "id": "d",
        "text": "Hyperventilate to PaCO2 25 mmHg",
        "isCorrect": false,
        "why": "Hypocapnia causes severe cerebral vasoconstriction."
      }
    ],
    "bedsidePearl": "Hyperoxia is toxic to the reperfused brain! Once you get ROSC, turn down the FiO2 to target SpO2 94–98% (PaO2 70–100 mmHg).",
    "difficulty": "foundation",
    "relatedTopicId": "cardiac-arrest-post-arrest"
  },
  {
    "id": "rd-30",
    "vignette": "A 40-year-old with severe traumatic brain injury (GCS 5) is admitted to the ICU. The team is establishing physiological neuro-monitoring goals.",
    "question": "What is the Brain Trauma Foundation recommended target Cerebral Perfusion Pressure (CPP)?",
    "options": [
      {
        "id": "a",
        "text": "CPP target 60 to 70 mmHg",
        "isCorrect": true,
        "why": "BTF guidelines recommend maintaining CPP strictly between 60 and 70 mmHg (CPP = MAP - ICP). Levels <60 risk cerebral ischemia; levels >70 risk acute respiratory distress syndrome from excessive vasopressor/fluid loading."
      },
      {
        "id": "b",
        "text": "CPP target 30 to 40 mmHg",
        "isCorrect": false,
        "why": "CPP < 50–60 mmHg causes critical cerebral penumbral ischemia and brain death."
      },
      {
        "id": "c",
        "text": "CPP target > 110 mmHg",
        "isCorrect": false,
        "why": "Supranormal CPP (>70–80 mmHg) increases ARDS and vasogenic edema without neurological benefit."
      },
      {
        "id": "d",
        "text": "Target MAP only, ignore ICP",
        "isCorrect": false,
        "why": "CPP depends directly on ICP; ignoring ICP leads to unmonitored brain ischemia."
      }
    ],
    "bedsidePearl": "CPP = MAP minus ICP. In severe TBI, keep CPP between 60 and 70 mmHg — not too low to starve the brain, and not too high to flood the lungs!",
    "difficulty": "foundation",
    "relatedTopicId": "intracranial-hypertension"
  }
];
