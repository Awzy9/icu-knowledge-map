import type { Topic } from "@/content-types";

export const toxicologicEmergencies: Topic = {
  id: "toxicologic-emergencies",
  slug: "toxicologic-emergencies",
  title: "Toxicologic Emergencies in Critical Care",
  category: "procedures",
  oneLiner: "Toxidrome pattern recognition, targeted antidote administration, High-Dose Insulin Euglycemic Therapy (HIET), and EXTRIP extracorporeal elimination.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapter 138: Critical Care Toxicology and Poisoning Management"
    },
    {
      title: "Oh's Intensive Care Manual",
      edition: "9th Edition, 2025",
      note: "Chapter 72: Severe Poisoning and Toxic Ingestions"
    }
  ],
  currentStatus: "Current as of the EXTRIP (Extracorporeal Treatments in Poisoning) Workgroup Guidelines and the 2023 ACMT Practice Guidelines.",
  otherReferences: [
    "Ghannoum M, et al. Extracorporeal treatment for poisoning: EXTRIP Workgroup recommendations. Nephrol Dial Transplant. 2015;30(1):62-71.",
    "Graudins A, et al. High-dose insulin therapy for calcium-channel blocker and beta-blocker overdose: A systematic review. Clin Toxicol (Phila). 2016;54(4):304-322."
  ],
  relationships: [
    { type: "prerequisite", targetId: "altered-consciousness", label: "Evaluation of toxic encephalopathy and coma" },
    { type: "complication", targetId: "cardiogenic-shock", label: "Refractory cardiotoxicity from calcium channel blocker and beta-blocker overdose" },
    { type: "related-to", targetId: "crrt", label: "EXTRIP criteria for hemodialysis / continuous renal replacement in poisoning" },
    { type: "complication", targetId: "acute-liver-failure", label: "Acetaminophen overdose hepatotoxicity and NAC protocol" }
  ],
  sections: [
    {
      id: "toxicologic-emergencies.overview",
      kind: "overview",
      title: "The 5 Core Toxidromes & Initial ABCDE Approach",
      summary: "In severe poisoning, structured toxidrome recognition allows rapid syndromic identification and empiric antidote deployment before comprehensive laboratory results return.",
      provenance: "guideline",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "toxicology-guideline-extrip-2015",
          relevance: "EXTRIP international consensus guidelines on indications and modality selection for extracorporeal toxin elimination"
        }
      ],
      body: [
        {
          type: "paragraph",
          text: "Critical care toxicology begins with the universal ABCDE resuscitation priority: Airway protection with low threshold for endotracheal intubation in obtunded patients, Breathing support avoiding hypoventilation-induced acidosis, Circulatory support with vasopressors and inotropes, Disability evaluation for hypoglycemia and coma, and Exposure with core temperature measurement. Toxidrome recognition narrows the differential diagnosis within seconds."
        },
        {
          type: "key-value-table",
          rows: [
            { label: "1. Opioid Toxidrome", value: "CNS depression, pinpoint miosis, severe bradypnea/hypoventilation, bradycardia, hypothermia, decreased bowel sounds. (Antidote: Naloxone)." },
            { label: "2. Sympathomimetic Toxidrome", value: "Hypertension, severe tachycardia, hyperthermia, mydriasis, diaphoresis (sweating), hyperactive bowel sounds, agitation, seizures. (Cocaine, amphetamines). (Treatment: Benzodiazepines, cooling)." },
            { label: "3. Anticholinergic Toxidrome", value: "'Mad as a hatter, blind as a bat, red as a beet, hot as a hare, dry as a bone.' Delirium/hallucinations, mydriasis, hyperthermia, dry flushed skin (NO sweat), urinary retention, absent bowel sounds, tachycardia. (Antihistamines, TCAs). (Antidote: Physostigmine if QRS normal)." },
            { label: "4. Cholinergic Toxidrome", value: "'SLUDGEM': Salivation, Lacrimation, Urination, Defecation, GI cramping, Emesis, Miosis; plus 'Killer B's' (Bradycardia, Bronchorrhea, Bronchospasm), diaphoresis, fasciculations. (Organophosphates, nerve agents). (Antidotes: Atropine + Pralidoxime)." },
            { label: "5. Sedative-Hypnotic Toxidrome", value: "CNS depression, normal/sluggish pupils, hypoventilation, hypotension, bradycardia, hypothermia, ataxia. (Benzodiazepines, barbiturates, GHB, ethanol)." }
          ]
        }
      ]
    },
    {
      id: "toxicologic-emergencies.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Screening & The Critical ECG Patterns",
      summary: "Immediate screening for high anion gap acidosis, osmolar gap, and cardiotoxic ECG interval widening.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            "Bedside Fingerstick Glucose: Mandatory first step in any altered poisoned patient to exclude neuroglycopenia.",
            "12-Lead ECG Intervals: (1) QRS Duration: QRS > 100 ms predicts seizures; QRS > 160 ms predicts ventricular arrhythmias in Tricyclic Antidepressant (TCA) and sodium channel blocker overdose (requires IV Sodium Bicarbonate). (2) Terminal R Wave in aVR > 3 mm: Specific for sodium channel blockade. (3) QTc Interval: QTc > 500 ms carries high risk of Torsades de Pointes.",
            "Anion Gap & Osmolar Gap: High anion gap metabolic acidosis points to 'GOLDMARK' (Glycols [ethylene/propylene], Oxoproline, L-lactate, D-lactate, Methanol, Aspirin/Salicylate, Renal failure, Ketoacidosis). An elevated osmolar gap (>10-15 mOsm/kg) strongly suggests toxic alcohol ingestion (methanol, ethylene glycol, isopropanol).",
            "Serum Acetaminophen Level: Mandatory in ALL intentional poisonings regardless of history, as early APAP toxicity is completely asymptomatic until irreversible hepatic necrosis occurs."
          ]
        }
      ]
    },
    {
      id: "toxicologic-emergencies.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Severe Toxic Hyperthermia & Encephalopathy",
      summary: "Differentiate life-threatening hyperthermic toxidromes: Serotonin Syndrome vs NMS vs Malignant Hyperthermia vs Sympathomimetics.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Serotonin Syndrome (SS)", value: "Rapid onset (<24h), hyperreflexia, INDUCIBLE/SPONTANEOUS CLONUS (hallmark), tremor, ocular clonus, diaphoresis, hyperthermia. (Treatment: Cyproheptadine, Benzodiazepines)." },
            { label: "Neuroleptic Malignant Syndrome (NMS)", value: "Subacute onset (days-weeks), 'LEAD-PIPE' RIGIDITY, hyporeflexia, extreme hyperthermia, diaphoresis, severe CK elevation. (Dopamine antagonists). (Treatment: Dantrolene, Bromocriptine)." },
            { label: "Malignant Hyperthermia (MH)", value: "Hyperacute onset in OR following volatile anesthetics or succinylcholine, masseter muscle rigidity, rapid hypercapnia, severe hyperthermia, rhabdomyolysis. (Treatment: IV Dantrolene 2.5 mg/kg)." }
          ]
        }
      ]
    },
    {
      id: "toxicologic-emergencies.antidotes-hiet",
      kind: "management",
      title: "Targeted Antidotes & High-Dose Insulin (HIET) Protocol",
      summary: "Deployment of specific life-saving antidotes, High-Dose Insulin Euglycemic Therapy for cardiotoxins, and Intravenous Lipid Emulsion.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Calcium Channel / Beta-Blocker Overdose (HIET)", value: "High-Dose Insulin Euglycemic Therapy: Regular Insulin 1 unit/kg IV bolus, followed by 1 to 10 units/kg/h infusion accompanied by D10W/D50W titration to maintain normoglycemia and aggressive IV Potassium supplementation. Switches stunned myocardium from fatty acid to glucose oxidation, acting as a potent inotrope." },
            { label: "Intravenous Lipid Emulsion (ILE 20%)", value: "Indicated for severe local anesthetic systemic toxicity (LAST) and lipophilic cardiotoxin arrest (bupivacaine, verapamil, beta-blockers, TCAs). Dose: 1.5 mL/kg IV bolus of 20% lipid emulsion, then 0.25-0.5 mL/kg/min infusion. Acts as a 'lipid sink' and metabolic fuel." },
            { label: "Sodium Bicarbonate for Sodium Channel Blockade", value: "Dose: 1-2 mEq/kg IV push repeated until QRS narrows < 100 ms and serum pH reaches 7.50-7.55. Overcomes competitive blockade of cardiac sodium channels in TCA and diphenhydramine toxicity." },
            { label: "N-Acetylcysteine (NAC) for Acetaminophen", value: "Administer within 8 hours of ingestion based on Rumack-Matthew nomogram. IV 21-hour protocol (150 mg/kg over 1h, 50 mg/kg over 4h, 100 mg/kg over 16h) or oral protocol. Replenishes hepatic glutathione to neutralize toxic NAPQI metabolite." },
            { label: "Fomepizole for Toxic Alcohols", value: "Competitive alcohol dehydrogenase inhibitor: Loading dose 15 mg/kg IV, then 10 mg/kg q12h. Prevents conversion of methanol to formic acid and ethylene glycol to oxalic acid/glycolate." },
            { label: "Atropine + Pralidoxime for Organophosphates", value: "IV Atropine 2-5 mg every 3-5 minutes doubling dose until 'full atropinization' (dry secretions, clear lungs, HR > 80 bpm); plus IV Pralidoxime (2-PAM) 2 g loading to reactivate acetylcholinesterase." }
          ]
        }
      ]
    },
    {
      id: "toxicologic-emergencies.extrip",
      kind: "management",
      title: "EXTRIP Guidelines: Extracorporeal Elimination Criteria",
      summary: "Intermittent Hemodialysis (IHD) provides superior clearance over CRRT for small, water-soluble, low-protein-bound toxins.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "The international EXTRIP workgroup provides strict evidence-based criteria for when hemodialysis is mandatory in severe poisoning. Intermittent Hemodialysis (IHD) achieves clearance rates 5 to 10 times higher than CRRT and is the modality of choice unless profound hemodynamic collapse limits tolerance."
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Toxic Alcohols (Methanol / Ethylene Glycol): Dialysis indicated if serum level > 50 mg/dL (or >20 mg/dL with symptoms), severe metabolic acidosis (pH < 7.25), visual impairment (methanol), or acute kidney injury (ethylene glycol).",
            "Salicylates (Aspirin): Dialysis indicated if serum salicylate > 90-100 mg/dL (>6.5-7.2 mmol/L), or >80 mg/dL with renal impairment, or present with severe neurotoxicity (coma, seizures), pulmonary edema, or refractory acidosis.",
            "Lithium: Dialysis indicated if serum lithium > 4.0 mEq/L with normal kidneys, or > 2.5 mEq/L with renal impairment/severe neurologic symptoms (seizures, coma).",
            "Theophylline: Dialysis indicated if level > 100 mcg/mL (acute) or > 60 mcg/mL (chronic), or with refractory tachyarrhythmias or status epilepticus.",
            "Metformin: Dialysis indicated for severe Metformin-Associated Lactic Acidosis (MALA) with pH < 7.10, lactate > 20 mmol/L, or failure to respond to bicarbonate/vasopressors."
          ]
        }
      ]
    },
    {
      id: "toxicologic-emergencies.monitoring",
      kind: "monitoring",
      title: "ICU Surveillance & Serial Toxicology Parameters",
      summary: "Continuous cardiac telemetry, serial ECG intervals, and blood gas monitoring.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Continuous Telemetry & Serial ECGs", value: "QRS and QTc interval measurement every 1-2 hours until clearly normalizing; monitor for sudden malignant ventricular tachycardia (Torsades, monomorphic VT)." },
            { label: "Blood Glucose & Potassium on HIET", value: "Check fingerstick glucose every 15-30 minutes during HIET titration, and serum potassium every 1-2 hours (maintain K+ 3.5-4.5 mEq/L)." },
            { label: "Serial Arterial Blood Gases", value: "Monitor lactate, anion gap, and pH clearance post-dialysis and post-antidote therapy." }
          ]
        }
      ]
    },
    {
      id: "toxicologic-emergencies.complications",
      kind: "complications",
      title: "Complications & Escalation Triggers",
      summary: "Structured recognition of acute lethal toxicity, treatment-related complications, and escalation criteria.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Early / Life-Threatening", value: "Refractory ventricular arrhythmias, profound cardiotoxic shock, status epilepticus, acute hyperthermia (>41°C) with rhabdomyolysis, respiratory arrest." },
            { label: "Treatment-Related", value: "Severe hypoglycemia and hypokalemia from HIET, acute lung injury / fat embolism from excessive Intravenous Lipid Emulsion, metabolic alkalosis from sodium bicarbonate infusions." },
            { label: "Late / Delayed", value: "Acute liver failure post-APAP, rebound toxicity post-dialysis (lithium, theophylline redistribution), ischemic anoxic encephalopathy." },
            { label: "Escalation Triggers", value: "Refractory cardiotoxic shock failing maximum vasopressors and HIET -> emergent Veno-Arterial (VA) ECMO as a bridge to drug clearance." }
          ]
        }
      ]
    },
    {
      id: "toxicologic-emergencies.pitfalls",
      kind: "controversies",
      title: "Critical Care Toxicology Pitfalls & Practice Red Lines",
      summary: "High-yield bedside errors including flumazenil avoidance, delayed HIET, and intubation hazards in severe acidemia.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Pitfall: Flumazenil in Undifferentiated Overdose", value: "Administering flumazenil in mixed overdoses with pro-convulsant drugs (TCAs, bupropion) or in chronic benzodiazepine users; precipitates intractable, fatal status epilepticus." },
            { label: "Pitfall: Intubation Acidemia Collapse in Salicylates", value: "During RSI in severe aspirin poisoning, even brief apnea or fixed mechanical ventilator rates drop respiratory alkalosis, causing acute systemic and CSF acidemia that drives unionized salicylate across the blood-brain barrier with fatal neurotoxicity; requires pre-intubation sodium bicarbonate boluses and high mandatory minute ventilation." },
            { label: "Pitfall: Under-dosing HIET in CCB/Beta-Blocker Shock", value: "Treating severe calcium channel blocker or beta-blocker shock with low diabetic doses of insulin; High-Dose Insulin Euglycemia Therapy requires a 1 unit/kg IV bolus followed by 1 unit/kg/h (titrated up to 5-10 units/kg/h) with 10-50% dextrose infusions and potassium repletion." },
            { label: "Pitfall: Premature Discontinuation of NAC", value: "Stopping IV N-acetylcysteine at 21 hours solely by the clock in massive acetaminophen ingestions; NAC must continue if ALT is rising or acetaminophen is still detectable." },
            { label: "Pitfall: Relying on CRRT for Dialyzable Toxins", value: "Using CRRT instead of Intermittent Hemodialysis (IHD) for acute methanol, ethylene glycol, or lithium poisoning; IHD clearance is 5-10 times faster and clears toxins before irreversible optic or neurologic damage occurs (EXTRIP guidelines)." }
          ]
        }
      ]
    }
  ]
};
