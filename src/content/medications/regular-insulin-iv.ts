import type { Medication } from "@/content-types/medication";

export const regularInsulinIv: Medication = {
  id: "regular-insulin-iv",
  slug: "regular-insulin-iv",
  name: "Regular Insulin (IV)",
  genericName: "Regular Human Insulin",
  brandNames: ["Humulin R", "Novolin R"],
  class: "Rapid-Onset IV Insulin — Endogenous Peptide Hormone",
  category: "endocrine-metabolic",
  subcategory: "Endocrine & Metabolic",
  summary:
    "IV regular insulin used for three distinct ICU purposes — DKA/HHS ketoacidosis reversal, temporizing potassium shift in hyperkalemia, and general ICU glycemic control — each with its own dosing regimen and endpoint; the single most important teaching point is that insulin SHIFTS potassium intracellularly, it does not remove it from the body.",
  mechanism: {
    title: "Two Independent Pathways: GLUT4-Mediated Glucose Uptake & Na+/K+-ATPase-Mediated Potassium Shift",
    steps: [
      "Binds the insulin receptor (a receptor tyrosine kinase) on skeletal muscle and adipose tissue, triggering translocation of GLUT4 glucose transporters to the cell membrane and increasing cellular glucose uptake — the mechanism behind glucose lowering in DKA/HHS and general ICU glycemic control.",
      "Independently and simultaneously, insulin directly stimulates the Na+/K+-ATPase pump on cell membranes throughout the body, driving potassium into cells.",
      "This potassium shift lowers the SERUM potassium concentration within about 15–30 minutes, but it does not remove any potassium from the body — total body potassium is unchanged, and the shifted potassium redistributes back into the extracellular space once the insulin effect wears off, typically within a few hours.",
      "In DKA specifically, insulin's most important action is shutting off hepatic ketogenesis and lipolysis — glucose lowering is almost incidental to the actual treatment goal, which is why the infusion must continue (with dextrose added) even after glucose normalizes, until the ketoacidosis itself resolves."
    ],
    visualDiagram: "GLUCOSE PATHWAY: Insulin → GLUT4 Translocation → Cellular Glucose Uptake ↑ → Serum Glucose ↓ // POTASSIUM PATHWAY: Insulin → Na+/K+-ATPase Activity ↑ → K+ Shifts INTO Cells → Serum K+ ↓ (Total Body K+ Unchanged)"
  },
  pkPd: {
    type: "receptor-occupancy",
    targetParameter: "Indication-specific: ketoacidosis resolution (DKA/HHS), transient serum potassium reduction (hyperkalemia), or a target glucose range (general ICU glycemic control)",
    halfLife: "Plasma half-life of only a few minutes, but the clinical/biologic effect after IV administration lasts substantially longer (roughly 30–60 minutes for a bolus dose; steady-state effect during a continuous infusion)",
    proteinBinding: "Not clinically significant",
    metabolism: "Degraded by insulin-degrading enzyme primarily in the liver and kidney",
    elimination: "Combination of hepatic and renal clearance — renal impairment prolongs the effective duration of insulin's action and is a major driver of delayed hypoglycemia",
    vdNotes: "Distributes rapidly through the extracellular compartment; the clinically important pharmacokinetic feature is not volume of distribution but the prolonged effective duration of action in renal failure, which drives the delayed-hypoglycemia risk this drug is best known for in the ICU."
  },
  icuReasoning: {
    whyIChooseIt: [
      "Essential, non-substitutable therapy in DKA/HHS to shut off ketogenesis (DKA) and correct the profound underlying insulin deficiency driving both syndromes.",
      "Rapid, reliable, and titratable agent for temporizing severe or symptomatic hyperkalemia via the potassium-shift mechanism.",
      "Standard agent for general ICU glycemic control, since IV administration allows rapid onset/offset and tight titration compared with subcutaneous regimens."
    ],
    whyIDont: [
      "Hypoglycemia is a serious and common iatrogenic risk — especially in renal failure, where prolonged insulin clearance causes delayed hypoglycemia hours after a dose.",
      "Does not treat hyperkalemia definitively — it only shifts potassium without removing it, so it is a temporizing bridge, not a substitute for a true elimination strategy when one is indicated.",
      "In DKA, stopping the infusion as soon as glucose normalizes — rather than continuing it (with dextrose added) until the ketoacidosis itself resolves — risks rapid rebound ketoacidosis."
    ],
    bedsidePearl: "INSULIN SHIFTS POTASSIUM. IT DOES NOT REMOVE IT FROM THE BODY. Serum potassium will predictably rebound upward within a few hours of an insulin dose given for hyperkalemia — plan for a true elimination strategy (dialysis, potassium binders, or diuretics with adequate renal function) whenever the underlying hyperkalemia actually warrants one, and recheck glucose serially afterward given the real risk of delayed hypoglycemia, particularly in renal impairment."
  },
  dosing: {
    routine: "Dosing is strictly indication-specific — see Syndrome-Specific Regimens below. DKA/HHS infusion dosing, hyperkalemia insulin-dextrose bolus dosing, and general ICU glycemic-control infusion dosing are calculated, titrated, and monitored completely differently and must never be interchanged.",
    syndromeSpecific: [
      {
        syndrome: "Diabetic Ketoacidosis (DKA) / Hyperosmolar Hyperglycemic State (HHS)",
        regimen: "Continuous IV infusion at 0.1 units/kg/hr (a bolus is not required per current consensus guidance, though some local protocols still use one). Do NOT start insulin until serum potassium is confirmed ≥ 3.5 mEq/L. Add dextrose to IV fluids once glucose falls to roughly 200–250 mg/dL (DKA) or 250–300 mg/dL (HHS), and continue the insulin infusion — do not stop it — until the anion gap closes and ketoacidosis has actually resolved.",
        reference: "ADA Consensus Report on Hyperglycemic Crises in Adults, 2024",
        note: "The treatment endpoint in DKA is resolution of the acidosis/ketosis (anion gap, bicarbonate, pH) — not a normal glucose. Stopping insulin at normoglycemia risks rebound ketoacidosis."
      },
      {
        syndrome: "Hyperkalemia — Temporizing Potassium Shift",
        regimen: "10 units IV regular insulin as a single dose, typically given together with dextrose (e.g., 25 g / 50 mL D50, or per weight/glucose-adjusted institutional protocol) unless the patient is already significantly hyperglycemic. Onset approximately 15–30 minutes; effect lasts several hours.",
        note: "This is a single-dose bolus regimen, NOT an infusion — do not confuse this with the DKA infusion rate. Monitor glucose serially afterward given delayed hypoglycemia risk, especially in renal impairment."
      },
      {
        syndrome: "General ICU Glycemic Control",
        regimen: "Continuous IV infusion titrated per institutional glycemic-control protocol/nomogram to a target glucose range — commonly a moderate target on the order of roughly 140–180 mg/dL in most ICU patients, reflecting current evidence against both hyperglycemia and overly tight control. Exact institutional targets and titration algorithms vary.",
        reference: "Informed by the NICE-SUGAR trial",
        note: "Do not apply an older tight-control target (e.g., 80–110 mg/dL) — current evidence favors a more moderate glycemic target in general ICU populations."
      }
    ],
    renallyAdjusted: [
      { crclRange: "Any degree of renal impairment/AKI", dose: "No fixed dose-reduction formula exists — insulin is partially renally cleared, and its effective duration of action is prolonged in renal impairment/AKI, increasing hypoglycemia risk. Titrate cautiously and monitor glucose more frequently rather than applying a fixed percentage reduction." }
    ],
    hdDosing: "Insulin is not meaningfully removed by hemodialysis. Renal failure (dialysis-dependent or not) prolongs insulin's effective duration of action and increases delayed hypoglycemia risk — monitor glucose closely, especially after hyperkalemia dosing.",
    crrtDosing: "CRRT does not reliably clear insulin. The same delayed-hypoglycemia caution applies as with other forms of renal impairment; there is no specific CRRT dose-adjustment formula — individualize based on glucose trends."
  },
  organFailure: {
    renalConsiderations: "Insulin clearance is partially renal; renal impairment/AKI prolongs its effective duration of action and increases the risk — and typical delay, often 1–3 hours or more — of hypoglycemia. This is especially important after insulin-dextrose dosing for hyperkalemia, where a dextrose infusion and extended glucose monitoring are often warranted.",
    hepaticConsiderations: "The liver is a site of both insulin clearance and glucose counter-regulation (gluconeogenesis/glycogenolysis); significant hepatic dysfunction can alter glucose homeostasis and insulin requirements unpredictably in either direction — monitor glucose closely rather than assuming a fixed adjustment."
  },
  toxicity: {
    majorWarnings: [
      "Hypoglycemia is the primary and most dangerous toxicity — it can be severe and delayed, particularly in renal failure, and is a common preventable iatrogenic ICU harm.",
      "Hypokalemia — because insulin's potassium-shifting effect is the same mechanism whether intended (hyperkalemia treatment) or incidental (DKA/glycemic-control therapy), unintended hypokalemia is a real risk any time insulin is running, not only when it is being used specifically for hyperkalemia.",
      "Rebound hyperkalemia after the shift effect wears off (typically within a few hours) if no definitive elimination therapy was pursued for the underlying hyperkalemia when one was actually indicated.",
      "Rebound ketoacidosis if a DKA infusion is stopped once glucose has normalized, before the anion gap and ketosis have actually resolved."
    ],
    organToxicities: [
      { organ: "Metabolic/Endocrine", description: "Hypoglycemia (potentially severe and delayed, especially in renal failure); hypokalemia; rebound hyperkalemia once the shift effect resolves if no elimination therapy was given when one was indicated." },
      { organ: "Neurologic", description: "Neuroglycopenic symptoms — confusion, seizure, or coma — from unrecognized or inadequately monitored hypoglycemia." }
    ]
  },
  interactions: [
    {
      drug: "Non-selective beta-blockers",
      mechanism: "Blunt the adrenergic warning symptoms of hypoglycemia (tremor, tachycardia) and can impair counter-regulatory glucose release",
      consequence: "Masked or prolonged hypoglycemia",
      icuAction: "Maintain a higher index of suspicion for hypoglycemia and monitor glucose more frequently in patients on beta-blockers."
    },
    {
      drug: "Corticosteroids (e.g., hydrocortisone, methylprednisolone)",
      mechanism: "Induce insulin resistance and hyperglycemia",
      consequence: "Increased and unpredictable insulin requirements",
      icuAction: "Anticipate higher insulin requirements and monitor glucose more closely when corticosteroids are started, up-titrated, or stopped."
    }
  ],
  monitoring: {
    parameters: [
      "Point-of-care blood glucose — frequency is indication-specific (e.g., hourly during a DKA infusion; serial checks for several hours after a hyperkalemia bolus dose given delayed hypoglycemia risk)",
      "Serum potassium — before starting insulin for DKA, and serially during/after treatment for any indication",
      "Anion gap, serum bicarbonate, and ketones when treating DKA, to confirm actual resolution rather than just glucose normalization",
      "Mental status, particularly in patients who cannot reliably report hypoglycemic symptoms"
    ]
  },
  evidenceTraceability: {
    guidelineIds: ["ada-hyperglycemic-crises-guideline-2024"],
    claimCitations: [
      {
        claim: "The current ADA consensus report provides evidence-based guidance for managing DKA and HHS in adults, including insulin infusion protocols and the correct treatment endpoint (resolution of ketoacidosis, not normoglycemia).",
        source: "Umpierrez GE, Davis GM, et al. Hyperglycemic Crises in Adults With Diabetes: A Consensus Report. Diabetes Care. 2024;47(8):1257-1275.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/39052901/"
      },
      {
        claim: "Intensive glucose control (81–108 mg/dL) increased mortality compared with conventional control (<180 mg/dL) in a broad ICU population, supporting a moderate rather than tight glycemic target for general ICU glycemic control.",
        source: "NICE-SUGAR Study Investigators (Finfer S, et al). Intensive versus Conventional Glucose Control in Critically Ill Patients. N Engl J Med. 2009;360(13):1283-1297.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/19318384/"
      }
    ]
  },
  patientScenarios: [
    {
      title: "Severe DKA with Potassium 3.1 mEq/L",
      clinicalContext: "New DKA diagnosis with pH 7.05, anion gap 28, glucose 480 mg/dL, and serum potassium 3.1 mEq/L.",
      decision: "Hold insulin, replete potassium first (e.g., IV KCl), and start the insulin infusion only once potassium is ≥ 3.5 mEq/L, alongside fluid resuscitation.",
      rationale: "Starting insulin in significant hypokalemia drives potassium further into cells, risking a life-threatening arrhythmia or respiratory muscle weakness before the underlying acidosis has even begun to improve."
    },
    {
      title: "Symptomatic Hyperkalemia with Peaked T Waves",
      clinicalContext: "A dialysis-dependent patient has potassium 7.2 mEq/L with peaked T waves on ECG while awaiting emergent dialysis.",
      decision: "Give IV calcium for cardiac membrane stabilization, then 10 units IV regular insulin with concurrent dextrose, and monitor glucose closely given the patient's renal failure.",
      rationale: "Insulin provides rapid, reliable temporizing potassium shifting while dialysis (the definitive elimination therapy) is arranged — but the shift is temporary, and glucose must be watched closely given prolonged insulin clearance in renal failure."
    }
  ],
  examTraps: [
    {
      misconception: "Insulin given for hyperkalemia lowers total body potassium.",
      reality: "FALSE. Insulin only shifts potassium into cells — total body potassium is unchanged, and serum potassium will rebound upward within a few hours unless a true elimination therapy (dialysis, potassium binders, or diuretics with adequate renal function) is also pursued when clinically indicated.",
      explanation: "Confusing a shifting agent with an elimination agent leads to under-treatment of the underlying potassium burden and a false sense that the problem has been 'solved.'"
    },
    {
      misconception: "Once blood glucose normalizes during a DKA insulin infusion, the infusion can be stopped.",
      reality: "FALSE. Stopping insulin at normoglycemia — before the anion gap has closed — risks rapid rebound ketoacidosis.",
      explanation: "In DKA, insulin's essential job is shutting off hepatic ketogenesis, not just lowering glucose; the correct response to falling glucose is adding dextrose to the fluids while continuing the insulin infusion, not stopping the insulin."
    }
  ],
  searchAliases: ["insulin", "regular insulin", "iv insulin", "insulin drip", "dka insulin", "hyperkalemia insulin"],
  relatedTopicIds: ["diabetic-ketoacidosis", "hyperkalemia", "endocrine-emergencies"]
};
