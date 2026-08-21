import type { Medication } from "@/content-types/medication";

export const calciumGluconate: Medication = {
  id: "calcium-gluconate",
  slug: "calcium-gluconate",
  name: "Calcium Gluconate",
  genericName: "Calcium Gluconate",
  brandNames: [],
  class: "Electrolyte / Cardiac Membrane Stabilizer",
  category: "electrolytes-emergency",
  subcategory: "Electrolytes & Emergency Reversal",
  summary:
    "First-line cardiac membrane stabilizer for hyperkalemic ECG changes and definitive replacement therapy for symptomatic hypocalcemia — the single most important teaching point is that it stabilizes the myocardium without changing serum potassium at all.",
  mechanism: {
    title: "Threshold Potential Restoration via Extracellular Calcium",
    steps: [
      "In hyperkalemia, elevated extracellular K+ partially depolarizes the resting cardiac membrane potential, narrowing the gap between resting and threshold potential and predisposing to malignant arrhythmia.",
      "IV calcium raises extracellular ionized calcium, which raises the threshold potential (shifts it less negative), restoring the normal gap between resting and threshold potential and stabilizing the cardiac membrane — this occurs within minutes but does NOT change the serum potassium concentration at all.",
      "Separately, in true hypocalcemia, calcium gluconate directly repletes ionized calcium, which is required for normal cardiac contractility, neuromuscular function, and coagulation.",
      "The membrane-stabilizing effect in hyperkalemia is temporary (roughly 30–60 minutes) and must be promptly followed by definitive potassium-lowering therapy — calcium buys time, it does not treat the underlying hyperkalemia."
    ],
    visualDiagram: "Hyperkalemia → Cardiac Membrane Destabilized // Calcium → Threshold Potential Restored → Membrane Stabilized (Serum K+ UNCHANGED)"
  },
  pkPd: {
    type: "other",
    targetParameter: "ECG normalization/membrane stabilization (hyperkalemia) or normalization of ionized calcium (hypocalcemia) — not a conventional pharmacokinetic target",
    halfLife: "Not clinically meaningful in the traditional sense — calcium is an endogenous electrolyte; the membrane-stabilizing clinical effect after an IV dose lasts approximately 30–60 minutes",
    proteinBinding: "Roughly 40–45% of total serum calcium is protein-bound (mostly albumin); the physiologically active fraction is ionized (free) calcium, roughly half of the total",
    metabolism: "Not applicable — calcium is not metabolized",
    elimination: "Renal and gastrointestinal/biliary excretion of excess calcium, along with skeletal buffering",
    vdNotes: "Distributes into the large skeletal calcium pool; only a small fraction of total body calcium is in the extracellular fluid actually being measured and treated acutely."
  },
  icuReasoning: {
    whyIChooseIt: [
      "Rapid, effective first-line cardiac membrane stabilization in hyperkalemia with ECG changes (peaked T waves, widened QRS, loss of P waves) or severe hyperkalemia.",
      "Definitive replacement therapy for symptomatic or severe hypocalcemia.",
      "A reasonable adjunct in calcium-channel-blocker toxicity (high-dose calcium can partially overcome CCB-induced channel blockade) and for treating citrate toxicity — e.g., during massive transfusion or citrate-based CRRT anticoagulation — by directly repleting the ionized calcium that citrate has chelated."
    ],
    whyIDont: [
      "Does NOT lower serum potassium — must always be paired with actual shifting/elimination therapy when treating hyperkalemia.",
      "The effect is temporary (roughly 30–60 minutes) and may need to be repeated if ECG changes recur before definitive therapy takes hold.",
      "Risk of severe tissue necrosis with extravasation — particularly with calcium chloride — and precipitation risk with certain co-administered solutions requires a dedicated, compatible IV line."
    ],
    bedsidePearl: "SERUM POTASSIUM DOES NOT DECREASE with calcium — it must always be paired with real shifting/elimination therapy. And if a patient develops recurrent ECG changes 30–60 minutes after a dose, that's the expected duration of effect wearing off, not treatment failure — repeat the calcium and make sure definitive therapy is actually working."
  },
  dosing: {
    routine: "Dosing is indication-specific — see Syndrome-Specific Regimens below.",
    syndromeSpecific: [
      {
        syndrome: "Hyperkalemia — Cardiac Membrane Stabilization",
        regimen: "1–2 g (10–20 mL of 10% calcium gluconate) IV over 2–3 minutes; may repeat in 5–10 minutes if ECG changes persist. Onset within minutes; effect lasts approximately 30–60 minutes.",
        note: "Repeat dosing is expected and appropriate if ECG changes recur — this does not mean the first dose 'failed,' it means the temporary stabilizing effect wore off before definitive shift/elimination therapy took hold."
      },
      {
        syndrome: "Symptomatic / Severe Hypocalcemia",
        regimen: "1–2 g (10–20 mL of 10% calcium gluconate) IV over 10–20 minutes — deliberately slower than the hyperkalemia push — followed by a continuous infusion if ongoing replacement is needed, titrated to ionized calcium.",
        note: "This is a replacement regimen, not an emergency push — administration is intentionally slower than the hyperkalemia-emergency dose."
      },
      {
        syndrome: "Calcium-Channel-Blocker Toxicity (Adjunctive, High-Dose)",
        regimen: "High-dose calcium (often several grams, repeated or as an infusion) may be used adjunctively per toxicology/poison-control guidance, alongside other CCB-toxicity therapies (e.g., high-dose insulin euglycemic therapy).",
        note: "Doses used in CCB toxicity substantially exceed standard hyperkalemia/hypocalcemia dosing — involve toxicology/poison control for specific regimens rather than assuming standard dosing applies."
      }
    ],
    renallyAdjusted: [
      { crclRange: "Any CrCl", dose: "No specific renal dose adjustment for acute IV dosing, though ongoing calcium requirements and monitoring should account for altered calcium-phosphate-vitamin D handling in significant renal impairment." }
    ],
    hdDosing: "Not specifically dose-adjusted for acute administration; dialysate calcium concentration and timing relative to dialysis sessions can affect ongoing calcium needs — coordinate with nephrology for maintenance dosing.",
    crrtDosing: "Citrate-based CRRT anticoagulation specifically requires a separate, protocolized systemic calcium replacement infusion (distinct from acute hyperkalemia/hypocalcemia dosing) titrated to systemic ionized calcium — follow the institutional CRRT citrate protocol rather than standard bolus dosing."
  },
  organFailure: {
    renalConsiderations: "No specific acute dose adjustment; altered calcium-phosphate-vitamin D physiology in significant renal impairment/CKD affects ongoing (non-emergency) calcium management and should be coordinated with nephrology.",
    hepaticConsiderations: "Not a primary consideration for calcium dosing — hepatic disease does not significantly affect calcium handling in the way it affects many other drugs."
  },
  toxicity: {
    majorWarnings: [
      "Severe tissue necrosis with extravasation — a significant risk, particularly with calcium chloride given its higher elemental calcium concentration per volume; calcium gluconate is preferred for peripheral IV administration for this reason.",
      "Hypercalcemia with repeated or excessive dosing.",
      "Historical caution regarding rapid IV calcium in digoxin toxicity (theoretical risk of precipitating malignant arrhythmia); modern evidence suggests this risk is lower than classically taught, but slow, dilute administration remains reasonable when digoxin toxicity is a specific concern.",
      "Precipitation risk with certain co-administered solutions (e.g., some phosphate- or bicarbonate-containing fluids) — administer through a dedicated, compatible line."
    ],
    organToxicities: [
      { organ: "Local/Tissue (extravasation)", description: "Severe soft tissue necrosis and calcinosis cutis with extravasation, especially from calcium chloride given peripherally." },
      { organ: "Cardiovascular", description: "Bradycardia, hypotension, or arrhythmia with rapid administration; theoretical/historical concern regarding rapid administration in digoxin toxicity." },
      { organ: "Metabolic", description: "Hypercalcemia with repeated or excessive dosing." }
    ]
  },
  interactions: [
    {
      drug: "Digoxin",
      mechanism: "Additive effects on myocardial calcium handling",
      consequence: "Historically taught to risk malignant arrhythmia with rapid IV calcium in digoxin toxicity; modern evidence suggests this risk is lower than classically taught, but caution remains reasonable",
      icuAction: "If digoxin toxicity is a specific concern, administer calcium slowly and diluted with continuous cardiac monitoring, rather than withholding calcium entirely from a patient who needs urgent membrane stabilization."
    },
    {
      drug: "Sodium bicarbonate / phosphate-containing IV solutions",
      mechanism: "Physical/chemical incompatibility (precipitation)",
      consequence: "Line occlusion and loss of drug delivery if co-administered in the same line",
      icuAction: "Administer calcium through a separate, compatible IV line; flush lines appropriately between incompatible medications."
    }
  ],
  monitoring: {
    parameters: [
      "Continuous ECG during administration for hyperkalemia (QRS narrowing, T-wave normalization as a marker of effect)",
      "Ionized calcium level (not total calcium, which is affected by albumin)",
      "Serum potassium, to confirm definitive therapy is also being pursued when calcium is given for hyperkalemia",
      "IV site for signs of extravasation"
    ]
  },
  evidenceTraceability: {
    guidelineIds: ["hyperkalemia-guideline-ukka-2023"],
    claimCitations: [
      {
        claim: "The 2023 UK Kidney Association guideline recommends IV calcium for cardiac membrane stabilization in hyperkalemia with ECG changes, distinct from and prior to potassium-lowering therapy.",
        source: "UK Kidney Association. Treatment of Acute Hyperkalaemia in Adults. December 2023.",
        citationUrl: "https://ukkidney.org"
      }
    ]
  },
  patientScenarios: [
    {
      title: "Peaked T Waves and Widened QRS on ECG",
      clinicalContext: "A dialysis patient has potassium 7.4 mEq/L, peaked T waves, and a widened QRS on the monitor.",
      decision: "Give calcium gluconate 1–2 g IV over 2–3 minutes immediately, before other potassium-lowering measures take effect, then proceed with insulin/dextrose and arrange dialysis.",
      rationale: "Cardiac membrane stabilization is the immediate priority in hyperkalemia with ECG changes — it buys time for slower-onset shifting and elimination therapies to work."
    },
    {
      title: "Repeat ECG Changes 45 Minutes After Calcium Gluconate",
      clinicalContext: "A patient treated for hyperkalemic ECG changes 45 minutes ago now has recurrent peaked T waves.",
      decision: "Repeat the calcium gluconate dose and reassess/escalate potassium-lowering therapy — this is not treatment failure.",
      rationale: "The membrane-stabilizing effect of calcium lasts only about 30–60 minutes; its recurrence simply reflects that effect wearing off before the potassium level itself has been adequately addressed."
    }
  ],
  examTraps: [
    {
      misconception: "Giving calcium gluconate lowers the patient's potassium level.",
      reality: "FALSE. Calcium does not change serum potassium at all — it only stabilizes the cardiac membrane.",
      explanation: "Treating calcium administration as if it were definitive hyperkalemia therapy risks under-treating the actual potassium burden; shift and/or elimination therapy must still be given."
    },
    {
      misconception: "Calcium gluconate and calcium chloride are interchangeable at the same volume dose.",
      reality: "FALSE. Calcium chloride contains roughly 3x more elemental calcium per equivalent volume than calcium gluconate, and is also substantially more tissue-caustic if extravasated.",
      explanation: "Confusing the two risks either under-dosing elemental calcium (if gluconate is given at a chloride-equivalent volume) or a much higher extravasation-injury risk (if chloride is given peripherally as if it were gluconate)."
    }
  ],
  searchAliases: ["calcium gluconate", "calcium chloride comparison", "hyperkalemia calcium", "membrane stabilization"],
  relatedTopicIds: ["hyperkalemia"]
};
