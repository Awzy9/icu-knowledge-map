/**
 * Why Is This Wrong? 2.0 — per-line management-plan classifications.
 *
 * Derived strictly from each case OWN reviewed answer/explanation text.
 * Legacy icuErrors remain untouched; players merge by error id.
 * Not every case uses all four labels — classifications reflect the case.
 */

export type ManagementClassification =
  | "correct"
  | "questionable"
  | "context-dependent"
  | "dangerous";

export interface ManagementItem {
  id: string;
  text: string;
  classification: ManagementClassification;
  explanation: string;
  consequence?: string;      // "WHAT COULD HAPPEN?"
  relatedTopicId?: string;   // canonical form, e.g. "topic:ards"
  relatedMedicationId?: string;
}

export const CLASSIFICATION_META: Readonly<
  Record<ManagementClassification, { label: string; glyph: string }>
> = {
  correct:             { label: "Correct",           glyph: "✓" },
  questionable:        { label: "Questionable",      glyph: "?" },
  "context-dependent": { label: "Context-dependent", glyph: "◐" },
  dangerous:           { label: "Dangerous",         glyph: "!" },
};

const t = (
  id: string,
  text: string,
  classification: ManagementClassification,
  explanation: string,
  consequence?: string,
  related?: Partial<Pick<ManagementItem, "relatedTopicId" | "relatedMedicationId">>,
): ManagementItem => ({ id, text, classification, explanation, consequence, ...related });

export const managementItemsByError: Readonly<Record<string, readonly ManagementItem[]>> = {
  "error-1": [
    t("1a", "Continuous Propofol + Fentanyl sedation", "correct", "Propofol adds bronchodilation and improves ventilator synchrony."),
    t("1b", "Continuous albuterol + IV methylprednisolone", "correct", "Beta-agonist bronchodilation and systemic steroids are standard first-line therapy."),
    t("1c", "VC: TV 8 mL/kg, RR 28, PEEP 10", "dangerous",
      "High rate + large tidal volume + external PEEP catastrophically shorten exhalation in obstructed lungs, stacking air every breath (auto-PEEP).",
      "Dynamic hyperinflation crushes venous return → hypotension → barotrauma → circulatory arrest.", { relatedTopicId: "topic:asthma" }),
    t("1d", "Normalize PaCO₂ 40 / pH 7.40", "dangerous",
      "Chasing normal gas values forces the deadly settings above. Permissive hypercapnia is the intended strategy.",
      "Same auto-PEEP cascade as the ventilator line.", { relatedTopicId: "topic:asthma" }),
  ],
  "error-2": [
    t("2a", "Isotonic crystalloid 1 L over 1 h", "correct", "Volume expansion is step one of DKA resuscitation."),
    t("2b", "Baseline labs: K 3.0, glucose 620, pH 7.10", "correct", "Appropriate workup — and the K of 3.0 is the alarm bell for the insulin line."),
    t("2c", "Start insulin infusion immediately WITHOUT potassium", "dangerous",
      "Insulin drives K⁺ intracellularly via Na⁺/K⁺-ATPase. Starting at K⁺ 3.0 invites profound hypokalemia.",
      "Hypokalemic arrhythmias and respiratory-muscle weakness → cardiac arrest.", { relatedMedicationId: "medication:regular-insulin-iv" }),
    t("2d", "Hourly glucose checks", "correct", "Mandatory during insulin titration."),
  ],
  "error-3": [
    t("3a", "Arterial line monitoring", "correct", "Standard of care for dissection titration."),
    t("3b", "Documented BP 215/110, HR 102", "correct", "Context finding; drives urgency."),
    t("3c", "Nicardipine FIRST as single agent", "dangerous",
      "Pure vasodilation → reflex tachycardia/inotropy → spiked dP/dt shears the flap further.",
      "Flap propagation → rupture or new malperfusion.", { relatedTopicId: "topic:acute-aortic-syndromes", relatedMedicationId: "medication:nicardipine" }),
    t("3d", "Emergent CT-surgery consult", "correct", "Type A dissection is a surgical emergency."),
  ],
  "error-4": [
    t("4a", "Calcium gluconate for peaked T waves", "correct", "Membrane stabilization is immediate priority with ECG changes."),
    t("4b", "Regular insulin 10 units IV", "correct", "5–10 units IV is standard shifting therapy."),
    t("4c", "No dextrose + no glucose-monitoring protocol", "dangerous",
      "Unpaired insulin causes hypoglycemia in a substantial fraction of patients, especially with renal impairment.",
      "Neuroglycopenia within 30–60 min → seizures/coma.", { relatedMedicationId: "medication:calcium-gluconate" }),
    t("4d", "Schedule hemodialysis for removal", "correct", "Definitive elimination in severe/oliguric hyperkalemia."),
  ],
  "error-5": [
    t("5a", "Fever, stiff neck, GCS 11 presentation", "correct", "Classic bacterial-meningitis picture; GCS <12 also justifies pre-LP CT."),
    t("5b", "Blood cultures stat", "correct", "Correct sequence before antimicrobials."),
    t("5c", "Hold antibiotics & dexamethasone until LP in 2 h", "dangerous",
      "Treatment must NEVER wait on imaging/LP logistics when meningitis is suspected.",
      "Bacteria double every 20–30 min → escalating inflammation, edema, herniation risk; measurable mortality cost per hour of delay."),
    t("5d", "ICU-level transfer", "correct", "Close neuro monitoring appropriate."),
  ],
  "error-6": [
    t("6a", "P/F 120 pneumonia ARDS context", "correct", "Moderate ARDS by ratio; sets strategy."),
    t("6b", "TV 10 mL/kg ACTUAL body weight", "dangerous",
      "Double violation: excessive volume AND wrong weight basis. Lung-protective ventilation is 4–6 mL/kg PREDICTED body weight.",
      "Volutrauma/biotrauma → inflammatory amplification, barotrauma, higher mortality.", { relatedTopicId: "topic:ards" }),
    t("6c", "PEEP 5 with FiO₂ 1.0", "questionable",
      "FiO₂ 1.0 temporarily is acceptable during stabilization, but PEEP 5 under-recruits a moderately injured lung; PEEP/FiO₂-table PEEP is expected."),
    t("6d", "Continuous neuromuscular blockade for severe hypoxemia", "correct",
      "Short-course NMBA can improve synchrony/oxygenation in moderate-severe ARDS (project ESICM entries)."),
  ],
  "error-7": [
    t("7a", "ROSC after VF arrest — context", "correct", "Sets post-arrest pathway."),
    t("7b", "TTM 36 °C", "correct", "Fever-prevention TTM is standard post-arrest care."),
    t("7c", "FiO₂ 100% for 24 h (hyperoxia allowed)", "dangerous",
      "Post-ROSC hyperoxia increases oxidative neuronal injury; titrate to SpO₂ 94–98%.",
      "Worse neurological outcome via free-radical injury.", { relatedTopicId: "topic:cardiac-arrest-post-arrest" }),
    t("7d", "Arterial line + central access", "correct", "Both are standard post-ROSC."),
  ],
  "error-8": [
    t("8a", "Blood cultures grow C. albicans — context", "correct", "True bloodstream pathogen; never dismiss as contaminant."),
    t("8b", "Fluconazole 200 mg PO daily", "dangerous",
      "Initial therapy for candidemia in an ICU patient should be an IV echinocandin; this fluconazole regimen is inadequate upfront.",
      "Persistent candidemia → deep-seeded foci (endophthalmitis, abscesses).", { relatedMedicationId: "medication:anidulafungin" }),
    t("8c", "Leave the 12-day-old CVC in place", "dangerous",
      "The catheter biofilm is the likely source — early evaluation/removal when feasible is recommended.",
      "Relapsing fungemia and metastatic infection.", { relatedMedicationId: "medication:anidulafungin" }),
    t("8d", "Repeat cultures in 10 days", "questionable",
      "Repeat cultures ARE required — but serially (every 24–48 h) until clearance, plus dilated eye exam within 7 days."),
  ],
  "error-9": [
    t("9a", "Saddle PE with shock — context", "correct", "Defines high-risk PE."),
    t("9b", "Echo: dilated RV, McConnell sign", "correct", "Confirms acute cor pulmonale."),
    t("9c", "Heparin alone + watchful waiting", "dangerous",
      "In shock, anticoagulation only prevents new clot — it does not relieve the obstruction killing the RV.",
      "Progressive RV failure → refractory shock → arrest.", { relatedTopicId: "topic:pulmonary-embolism" }),
    t("9d", "ICU transfer", "correct", "Mandatory monitoring level."),
  ],
  "error-10": [
    t("10a", "GCS 5, ICP 32 — context", "correct", "Severe TBI with intracranial hypertension."),
    t("10b", "HOB 30°, PaCO₂ 35–38", "correct", "Standard Tier-1 measures."),
    t("10c", "3% saline 250 mL for ICP spike", "correct", "Hyperosmolar therapy is first-line osmotherapy."),
    t("10d", "Dexamethasone 8 mg q6h for edema", "dangerous",
      "CRASH trial: corticosteroids INCREASE mortality in acute TBI. Cytotoxic edema does not respond to steroids.",
      "Higher 2-week and 6-month mortality; infection/hyperglycemia burden.", { relatedTopicId: "topic:severe-tbi" }),
  ],
  "error-11": [
    t("11a", "Day 5 focal drift — context", "correct", "Possible DCI — investigate (TCD, imaging)."),
    t("11b", "BP 118/70 — context", "correct", "Acceptable range; not a reason to alter nimodipine."),
    t("11c", "Hold nimodipine because BP is not high", "dangerous",
      "Nimodipine is NOT an antihypertensive — it reduces delayed cerebral ischemia and must run the full 21 days.",
      "Increased delayed cerebral ischemia / poorer outcome.", { relatedTopicId: "topic:acute-ischemic-stroke" }),
    t("11d", "TCD scheduled", "correct", "Standard vasospasm surveillance."),
  ],
  "error-12": [
    t("12a", "Seizing with Na 112 — context", "correct", "Symptomatic severe hyponatremia = hypertonic emergency."),
    t("12b", "1 L 0.9% NS wide open", "dangerous",
      "Seizure activity mandates 3% hypertonic boluses. Isotonic saline may even worsen Na⁺ in SIADH physiology.",
      "Continued cerebral edema → herniation.", { relatedTopicId: "topic:severe-sodium-disorders" }),
    t("12c", "Lorazepam 2 mg IV", "correct", "Appropriate symptomatic seizure control."),
    t("12d", "Repeat sodium in 6 hours", "questionable",
      "Monitoring is essential — but during active correction the interval should be far shorter (protocol-driven, e.g., 1–2 h)."),
  ],
  "error-13": [
    t("13a", "55% platelet drop on heparin day 6 — context", "correct", "Textbook HIT timeline; 4Ts + PF4 testing."),
    t("13b", "Stop heparin immediately", "correct", "First action in suspected HIT."),
    t("13c", "Warfarin 10 mg now as monotherapy", "dangerous",
      "Warfarin in acute HIT crashes Protein C → transient hypercoagulability.",
      "Venous limb gangrene / skin necrosis.", { relatedTopicId: "topic:hit" }),
    t("13d", "Send anti-PF4/heparin ELISA", "correct", "Confirmation testing appropriate with intermediate-high probability."),
  ],
  "error-14": [
    t("14a", "Sudden BP 58/34 — context", "correct", "Emergency; systematic cause hunt."),
    t("14b", "Ppeak 65 / Pplat 42 — context", "correct", "High-gradient pattern pointing at obstruction/flow, not compliance alone."),
    t("14c", "Fluids + norepinephrine WITHOUT touching the ventilator", "dangerous",
      "With obstructive physiology and high pressures, auto-PEEP is the prime suspect — the 15-second disconnection trial diagnoses AND treats it.",
      "Pressors chase the symptom while trapped gas keeps crushing preload → arrest."),
    t("14d", "Call for bedside ultrasound", "questionable",
      "Reasonable (excludes pneumothorax) but must not precede the instant disconnection maneuver."),
  ],
  "error-15": [
    t("15a", "Glucose 480, pH 7.18, HCO₃ 11 — context", "correct", "Moderate DKA; defines therapy."),
    t("15b", "Isotonic fluids + insulin infusion", "correct", "Foundation of therapy."),
    t("15c", "Sodium bicarbonate 100 mEq IV push at pH 7.18", "dangerous",
      "Trials show no benefit above pH ~6.9 and added harm.",
      "Hypokalemia, paradoxical CSF acidosis, delayed ketone clearance.", { relatedMedicationId: "medication:sodium-bicarbonate" }),
    t("15d", "Electrolytes q2h", "correct", "Appropriate monitoring cadence."),
  ],
  "error-16": [
    t("16a", "Propofol 85 mcg/kg/min × 5 days", "dangerous",
      "Far beyond the <50 mcg/kg/min / <48 h guardrails for PRIS risk.",
      "Propofol Infusion Syndrome: lactic acidosis, rhabdomyolysis, hyperkalemia, renal failure, cardiac collapse."),
    t("16b", "Insulin infusion for new refractory hyperglycemia", "context-dependent",
      "Glycemic control itself is fine — but treating the glucose while MISSING PRIS-as-the-cause is the trap here."),
    t("16c", "CK once next week", "questionable",
      "PRIS surveillance (CK, triglycerides, lactate, gas) must be DAILY at this exposure."),
    t("16d", "Continue current sedation indefinitely", "dangerous",
      "Compounding the exact dose-duration risk that causes PRIS."),
  ],
  "error-17": [
    t("17a", "Severe ARDS P/F 85 — context", "correct", "Meets proning criteria."),
    t("17b", "Prone 4 h in the morning", "questionable",
      "Proning is indicated — but PROSEVA efficacy came from ≥16 CONSECUTIVE hours; 4-hour stints forfeit the benefit."),
    t("17c", "Return supine for the rest of the day", "questionable",
      "Same duration problem: derecruitment wipes out gains; sessions should be prolonged (supine breaks for care only).", undefined, { relatedTopicId: "topic:ards" }),
    t("17d", "Repeat daily until oxygenation improves", "correct", "Daily cycles continue until criteria resolve."),
  ],
  "error-18": [
    t("18a", "RSI with etomidate + rocuronium", "correct", "Single induction doses are acceptable and common."),
    t("18b", "Repeated etomidate boluses q1h PRN for sedation", "dangerous",
      "Etomidate inhibits 11β-hydroxylase — repeated dosing abolishes cortisol synthesis.",
      "Adrenal crisis: refractory hypotension, excess mortality."),
    t("18c", "AC-mode ventilation", "correct", "Reasonable mode."),
    t("18d", "Arterial line", "correct", "Appropriate monitoring."),
  ],
  "error-19": [
    t("19a", "Li 4.6, tremor, ataxia, AKI — context", "correct", "Severe chronic toxicity; meets EXTRIP dialysis triggers."),
    t("19b", "Activated charcoal 50 g via NG", "dangerous",
      "Charcoal does not adsorb lithium (elemental cation) and risks aspiration in a neurologically impaired patient.",
      "Aspiration pneumonitis; delayed definitive hemodialysis."),
    t("19c", "0.9% NS 150 mL/hr", "correct", "Euvolemia supports renal lithium clearance."),
    t("19d", "Hold psychiatric medications", "correct", "Stopping the lithium source is mandatory."),
  ],
  "error-20": [
    t("20a", "SBP with MAP 54, lactate 4.8 — context", "correct", "Septic shock in cirrhosis — high-stakes vasopressor choice."),
    t("20b", "Ceftriaxone + albumin 1.5 g/kg", "correct", "First-line SBP therapy with albumin."),
    t("20c", "Phenylephrine as FIRST-line pressor", "dangerous",
      "Pure α-agonism cuts stroke volume and splanchnic flow in a patient with cirrhotic cardiomyopathy; NE is first-line.",
      "Falling cardiac output → worsened hepatic/renal perfusion (HRS risk).", { relatedMedicationId: "medication:norepinephrine" }),
    t("20d", "Blood + ascitic cultures", "correct", "Appropriate culture strategy."),
  ],
};
