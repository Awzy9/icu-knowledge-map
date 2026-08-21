import type { Medication } from "@/content-types/medication";

export const amiodarone: Medication = {
  id: "amiodarone",
  slug: "amiodarone",
  name: "Amiodarone",
  genericName: "Amiodarone Hydrochloride",
  brandNames: ["Nexterone", "Pacerone", "Cordarone"],
  class: "Class III Antiarrhythmic (Multi-Channel Blocker)",
  category: "antiarrhythmics",
  subcategory: "Antiarrhythmics",
  summary:
    "Broad-spectrum antiarrhythmic used for shock-refractory cardiac arrest, stable ventricular arrhythmias, and rate/rhythm-related management of atrial fibrillation — notable for an extremely long half-life and cumulative multi-organ toxicity (pulmonary, thyroid, hepatic).",
  mechanism: {
    title: "Multi-Channel Blockade: K+ (Class III) + Na+ (Class I) + Ca2+ (Class IV) + Non-Competitive Beta-Blockade (Class II)",
    steps: [
      "Blocks outward potassium (K+) rectifier channels, prolonging the action potential duration and the effective refractory period in atrial, ventricular, and accessory-pathway tissue (dominant Class III effect).",
      "Blocks fast inward sodium (Na+) channels, slowing phase-0 depolarization and conduction velocity (Class I effect), most apparent at faster heart rates (use-dependence).",
      "Blocks L-type calcium (Ca2+) channels, slowing AV nodal conduction and prolonging AV refractoriness (Class IV effect).",
      "Non-competitively antagonizes beta-adrenergic receptors, contributing additional AV nodal slowing and antiarrhythmic effect (Class II effect).",
      "The combined effect suppresses both reentrant and automatic arrhythmias, which is why amiodarone works across a broader range of arrhythmia mechanisms than single-class agents."
    ],
    visualDiagram: "K+ Channel Block + Na+ Channel Block + Ca2+ Channel Block + Beta-Blockade → Refractory Period ↑ & AV Conduction ↓ → Arrhythmia Suppression"
  },
  pkPd: {
    type: "other",
    targetParameter: "Arrhythmia suppression / rate control — not a single measurable receptor-occupancy or concentration target in routine ICU use",
    halfLife: "Extremely long and variable — terminal elimination half-life of approximately 40–55 days after chronic dosing (shorter, but still days-long, after a single acute IV course); active metabolite desethylamiodarone has a similarly long half-life",
    proteinBinding: "~96%",
    metabolism: "Extensive hepatic metabolism via CYP3A4 and CYP2C8 to the active metabolite desethylamiodarone",
    elimination: "Primarily hepatobiliary and fecal; negligible renal excretion of parent drug",
    vdNotes: "Enormous volume of distribution (~60 L/kg) reflecting extensive accumulation in adipose tissue, liver, lung, and thyroid — this is why a loading dose is required for rapid onset and why effects (and interactions) can persist for weeks after the drug is stopped."
  },
  icuReasoning: {
    whyIChooseIt: [
      "Broadly effective across both atrial and ventricular arrhythmias, with a lower proarrhythmic burden than many other antiarrhythmics in patients with structural heart disease or reduced ejection fraction.",
      "Antiarrhythmic of choice after epinephrine and defibrillation for shock-refractory VF/pulseless VT in the ACLS cardiac arrest algorithm.",
      "Comparatively less acute negative inotropic effect than typical AV-nodal blockers, making it a reasonable option for rate/rhythm-related management of new AF in patients who are hypotensive or vasopressor-dependent, where beta-blockers or non-dihydropyridine calcium-channel blockers are relatively contraindicated."
    ],
    whyIDont: [
      "The extremely long half-life means adverse effects, drug interactions, and QT prolongation can persist for weeks after the infusion is stopped — this is not a drug that 'washes out' overnight.",
      "Cumulative multi-organ toxicity risk (pulmonary, thyroid, hepatic) rises with total exposure, which matters for patients likely to continue oral therapy after ICU discharge.",
      "IV loading and infusion themselves can cause clinically significant hypotension and bradycardia, particularly with rapid administration."
    ],
    bedsidePearl: "Never use the cardiac-arrest push dose (300 mg IV/IO rapid push) in a patient with a pulse and a blood pressure — that dose is calibrated for a patient in arrest. A perfusing patient with stable VT or new AF gets the slower load (150 mg over 10 minutes) followed by a tapering infusion; giving the arrest dose to a perfusing patient will cause severe hypotension."
  },
  dosing: {
    routine: "Dosing is strictly indication-specific — see Syndrome-Specific Regimens below. There is no single 'routine' amiodarone dose; cardiac arrest, stable VT, and AF dosing are materially different and must not be interchanged.",
    syndromeSpecific: [
      {
        syndrome: "Cardiac Arrest — Shock-Refractory Pulseless VT/VF (ACLS)",
        regimen: "300 mg IV/IO rapid push (diluted in 20–30 mL D5W), given after the second or third defibrillation attempt and after epinephrine. May repeat with a 150 mg IV/IO push in 3–5 minutes if VF/pulseless VT persists.",
        reference: "2020 AHA Guidelines for CPR and ECC (adult cardiac arrest algorithm)",
        note: "This is a rapid push reserved for active cardiac arrest with no pulse. Do not use this dose or rate in a perfusing patient."
      },
      {
        syndrome: "Stable Ventricular Tachycardia (Perfusing Rhythm)",
        regimen: "150 mg IV over 10 minutes, followed by a continuous infusion of 1 mg/min for the first 6 hours, then 0.5 mg/min for the following 18 hours. An additional 150 mg IV bolus (over 10 minutes) may be repeated for recurrent or breakthrough VT, up to a labeled maximum total daily dose.",
        note: "Loading dose must be infused over 10 minutes, not pushed — rapid administration in a perfusing patient causes significant hypotension."
      },
      {
        syndrome: "Atrial Fibrillation — Rate/Rhythm-Related Management in Hemodynamically Vulnerable Patients",
        regimen: "150 mg IV over 10 minutes, then 1 mg/min for 6 hours, then 0.5 mg/min for 18 hours; if transitioning to oral therapy, an oral loading strategy (e.g., 400 mg PO given in divided doses daily for 1–2 weeks) is commonly used before dropping to a maintenance dose.",
        note: "Exact oral transition schedules are institution/cardiology-protocol dependent — verify local order sets rather than assuming a single universal taper."
      }
    ],
    renallyAdjusted: [
      { crclRange: "Any CrCl", dose: "No renal dose adjustment required — amiodarone undergoes negligible renal elimination of parent drug." }
    ],
    hdDosing: "Not removed by intermittent hemodialysis (high protein binding and massive tissue volume of distribution); no supplemental post-HD dosing is needed.",
    crrtDosing: "Not meaningfully cleared by CRRT for the same pharmacokinetic reasons; dose as for normal renal function."
  },
  organFailure: {
    renalConsiderations: "No dose adjustment required in AKI, CKD, or on CRRT — amiodarone clearance is hepatic, not renal.",
    hepaticConsiderations: "Use cautiously in significant hepatic impairment. Amiodarone is itself hepatotoxic (transaminase elevation is common, rarely progressing to overt hepatitis), and impaired hepatic clearance may prolong systemic exposure. Obtain baseline LFTs and monitor during therapy."
  },
  toxicity: {
    majorWarnings: [
      "IV administration commonly causes hypotension and bradycardia, particularly with faster infusion rates — slow the rate first rather than assuming the drug must be discontinued if hemodynamics allow.",
      "Pulmonary toxicity (organizing pneumonia, interstitial pneumonitis, and rarely an acute ARDS-like presentation) — classically a cumulative, chronic-therapy risk, but keep it on the differential for new infiltrates or unexplained hypoxemia in any amiodarone-exposed patient.",
      "Thyroid dysfunction (both hypothyroidism and amiodarone-induced thyrotoxicosis) due to the drug's high iodine content — can occur at any point during therapy, including after discontinuation given the long half-life.",
      "Hepatotoxicity, usually asymptomatic transaminase elevation; rare progression to clinically significant hepatitis.",
      "QT prolongation with a theoretical torsades de pointes risk, though this risk is generally considered lower than with other Class III agents given amiodarone's balanced multi-channel effect."
    ],
    organToxicities: [
      { organ: "Pulmonary", description: "Amiodarone pulmonary toxicity spans organizing pneumonia, interstitial pneumonitis, and (rarely) an acute fulminant presentation resembling ARDS; more classically associated with cumulative chronic oral dosing than short IV courses, but should remain on the differential." },
      { organ: "Thyroid", description: "Amiodarone-induced hypothyroidism (more common) or amiodarone-induced thyrotoxicosis (type 1 iodine-induced excess hormone synthesis vs type 2 destructive thyroiditis, which are managed differently) — reflects the drug's ~37% iodine content by weight." },
      { organ: "Hepatic", description: "Asymptomatic transaminase elevation is common; rare progression to steatohepatitis or, with prolonged therapy, cirrhosis." },
      { organ: "Cardiovascular (acute IV)", description: "Hypotension and bradycardia during IV loading or infusion, related both to infusion rate and to the polysorbate-80 solvent in some formulations." },
      { organ: "Dermatologic / Ophthalmologic (chronic oral therapy)", description: "Corneal microdeposits and blue-gray skin discoloration with prolonged oral use — not typically relevant to a short ICU course but worth flagging for patients continuing long-term oral amiodarone after discharge." }
    ],
    blackBoxWarning: "Amiodarone carries an FDA boxed warning covering pulmonary toxicity, hepatotoxicity, and proarrhythmia; it should be reserved for life-threatening arrhythmias, and the lowest effective dose should be used for ongoing (non-arrest) therapy."
  },
  interactions: [
    {
      drug: "Warfarin",
      mechanism: "CYP2C9 inhibition reduces warfarin clearance",
      consequence: "Significantly elevated INR and bleeding risk, onset over days as amiodarone accumulates",
      icuAction: "Empirically reduce the warfarin dose (commonly by roughly a third to half) when starting amiodarone, and monitor INR closely for weeks — the interaction persists after amiodarone is stopped given its long half-life."
    },
    {
      drug: "Digoxin",
      mechanism: "P-glycoprotein inhibition reduces digoxin clearance and increases digoxin levels",
      consequence: "Digoxin toxicity",
      icuAction: "Reduce the digoxin dose (commonly by roughly half) when co-administering, and check a digoxin level."
    },
    {
      drug: "Other QT-prolonging agents (e.g., fluoroquinolones, azole antifungals, other antiarrhythmics)",
      mechanism: "Additive QT prolongation",
      consequence: "Increased risk of torsades de pointes",
      icuAction: "Obtain a baseline ECG and trend the QT interval; avoid stacking additional QT-prolonging agents when amiodarone is already on board."
    },
    {
      drug: "Simvastatin (and other CYP3A4-dependent statins)",
      mechanism: "CYP3A4 inhibition increases statin exposure",
      consequence: "Increased risk of statin-associated myopathy and rhabdomyolysis",
      icuAction: "Limit simvastatin dose per label restrictions or use a statin with less CYP3A4 dependence (e.g., rosuvastatin, pravastatin)."
    }
  ],
  monitoring: {
    parameters: [
      "Continuous ECG/telemetry — heart rate, rhythm, and QT interval",
      "Blood pressure, particularly during IV loading and early infusion",
      "Liver function tests at baseline and periodically",
      "Thyroid function tests (TSH ± free T4) at baseline and periodically with any ongoing (non-single-dose) therapy",
      "Chest imaging and oxygenation trend if new respiratory symptoms develop during or after therapy"
    ]
  },
  evidenceTraceability: {
    guidelineIds: ["acls-guideline-aha-2020", "afib-guideline-aha-acc-hrs-2019"],
    claimCitations: [
      {
        claim: "The 2020 AHA ACLS guidelines list amiodarone as the preferred antiarrhythmic option (alongside lidocaine) for shock-refractory VF/pulseless VT, administered after epinephrine.",
        source: "Panchal AR, et al. Part 3: Adult Basic and Advanced Life Support: 2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2020;142(16_suppl_2):S366-S468.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/33081529/"
      },
      {
        claim: "Amiodarone improved survival to hospital admission compared with placebo in out-of-hospital cardiac arrest due to shock-refractory ventricular fibrillation.",
        source: "Kudenchuk PJ, et al. Amiodarone for resuscitation after out-of-hospital cardiac arrest due to ventricular fibrillation. N Engl J Med. 1999;341(12):871-878."
      }
    ]
  },
  patientScenarios: [
    {
      title: "Shock-Refractory Ventricular Fibrillation",
      clinicalContext: "Patient in cardiac arrest remains in VF after two defibrillation attempts and a dose of epinephrine.",
      decision: "Administer amiodarone 300 mg IV/IO rapid push; give an additional 150 mg IV/IO push if VF persists after the next shock.",
      rationale: "ACLS-recommended antiarrhythmic for shock-refractory VF/pulseless VT to improve the likelihood of successful defibrillation and return of spontaneous circulation."
    },
    {
      title: "New Rapid Atrial Fibrillation in Vasopressor-Dependent Septic Shock",
      clinicalContext: "A patient on norepinephrine for septic shock develops new atrial fibrillation with rapid ventricular response; beta-blockers and non-dihydropyridine calcium-channel blockers are relatively unattractive given ongoing vasopressor dependence.",
      decision: "Initiate an IV amiodarone load (150 mg over 10 minutes) followed by the tapering infusion for rate/rhythm-related management.",
      rationale: "Amiodarone has less acute negative inotropic effect than typical AV-nodal blocking agents, though the load itself must still be given slowly and with hemodynamic monitoring since hypotension can still occur."
    }
  ],
  examTraps: [
    {
      misconception: "Amiodarone toxicity in the ICU always means the classic chronic pulmonary/thyroid/hepatic syndrome.",
      reality: "FALSE. The toxicity actually seen acutely in the ICU is usually infusion-related hypotension and bradycardia — the pulmonary/thyroid/hepatic syndromes are predominantly cumulative-dose, chronic-therapy phenomena.",
      explanation: "Distinguishing acute infusion-related toxicity (managed by slowing or holding the infusion) from chronic cumulative organ toxicity (which requires a very different workup) changes the immediate bedside response."
    },
    {
      misconception: "The cardiac-arrest amiodarone dose (300 mg IV/IO push) can be used the same way in a stable patient with VT.",
      reality: "FALSE. A 300 mg rapid push in a patient with a pulse and a blood pressure will cause severe hypotension.",
      explanation: "Stable VT is loaded more slowly (150 mg over 10 minutes) followed by a tapering infusion — the arrest dose and rate are specific to a pulseless emergency, not a perfusing rhythm."
    }
  ],
  searchAliases: ["amiodarone", "cordarone", "pacerone", "nexterone", "class iii antiarrhythmic", "vt arrest amiodarone", "afib amiodarone"],
  relatedTopicIds: ["arrhythmias", "cardiac-arrest-post-arrest"]
};
