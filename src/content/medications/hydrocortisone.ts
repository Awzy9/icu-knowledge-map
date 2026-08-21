import type { Medication } from "@/content-types/medication";

export const hydrocortisone: Medication = {
  id: "hydrocortisone",
  slug: "hydrocortisone",
  name: "Hydrocortisone",
  genericName: "Hydrocortisone Sodium Succinate",
  brandNames: ["Solu-Cortef"],
  class: "Short-Acting Corticosteroid with Significant Mineralocorticoid Activity",
  category: "endocrine-metabolic",
  subcategory: "Endocrine & Metabolic",
  summary:
    "The primary ICU corticosteroid for vasopressor-refractory septic shock (guideline-conditional), adrenal crisis, and CIRCI — distinguished from methylprednisolone and other synthetic steroids by clinically significant retained mineralocorticoid activity, which is exactly why it is preferred whenever mineralocorticoid replacement matters.",
  mechanism: {
    title: "Glucocorticoid Receptor Gene Transcription + Retained Mineralocorticoid Receptor Activity",
    steps: [
      "Diffuses into cells and binds the cytosolic glucocorticoid receptor (GR).",
      "The activated hydrocortisone-GR complex translocates to the nucleus, binding glucocorticoid response elements to upregulate anti-inflammatory genes and repress pro-inflammatory transcription factors (e.g., NF-kB, AP-1) — broadly suppressing cytokine production, leukocyte trafficking, and inflammatory mediator release.",
      "Unlike synthetic steroids further modified away from the mineralocorticoid receptor, hydrocortisone retains clinically significant mineralocorticoid receptor activity, promoting renal sodium and water retention and potassium/hydrogen excretion — this is why it, not methylprednisolone, is used for adrenal insufficiency and adrenal crisis, where mineralocorticoid replacement matters.",
      "In septic shock specifically, hydrocortisone is thought to act partly through a permissive effect that restores vascular smooth muscle responsiveness to endogenous and exogenous catecholamines, rather than purely through anti-inflammatory action."
    ],
    visualDiagram: "Hydrocortisone → Glucocorticoid Receptor → Gene Transcription Changes → Inflammatory Signaling ↓ // + Mineralocorticoid Receptor Activity → Na+/Water Retention, K+/H+ Excretion"
  },
  pkPd: {
    type: "receptor-occupancy",
    targetParameter: "Indication-specific — hemodynamic/shock-reversal effect in septic shock; cortisol replacement in adrenal insufficiency, not a single measurable receptor-occupancy target",
    halfLife: "Plasma half-life ~1.5–2 hours; biologic (anti-inflammatory) effect duration ~8–12 hours, considerably longer than the plasma half-life",
    proteinBinding: "~90% at physiologic concentrations (cortisol-binding globulin and albumin); binding becomes saturated at pharmacologic ICU doses, increasing the free (active) drug fraction",
    metabolism: "Hepatic metabolism, primarily via 11-beta-hydroxysteroid dehydrogenase and other hepatic enzymes",
    elimination: "Renal excretion of hepatic metabolites",
    vdNotes: "Distributes widely. Critically ill patients often have reduced cortisol-binding globulin, which can increase the free (active) fraction at a given total dose — part of why total serum cortisol measurements are notoriously unreliable in critical illness."
  },
  icuReasoning: {
    whyIChooseIt: [
      "Guideline-conditional adjunct in septic shock that is inadequately responsive to fluids and vasopressors, where it modestly reduces time to shock resolution and vasopressor requirement.",
      "First-line replacement therapy for adrenal crisis and acute adrenal insufficiency, given its retained mineralocorticoid activity.",
      "Preferred agent when Critical Illness-Related Corticosteroid Insufficiency (CIRCI) is being addressed, per current SCCM/ESICM guidance."
    ],
    whyIDont: [
      "The trial-level evidence in septic shock is genuinely conflicting — ADRENAL showed no 90-day mortality benefit, while APROCCHSS (hydrocortisone plus fludrocortisone) did. It is not a universally mortality-benefiting therapy, and framing it that way overstates the evidence.",
      "Causes hyperglycemia, which complicates concurrent insulin/glycemic-control management.",
      "CIRCI itself has no single validated diagnostic test — the random cortisol/ACTH-stimulation-test approach has fallen out of favor, so the decision to treat is largely clinical and empirical rather than lab-confirmed."
    ],
    bedsidePearl: "Septic-shock dosing and adrenal-crisis dosing are not the same regimen — septic shock uses 200 mg/day (divided or continuous infusion), while true adrenal crisis is front-loaded with a 100 mg bolus. And not every short ICU steroid course needs a prolonged taper: a few days of stress-dose hydrocortisone in septic shock, stopped as shock resolves, is a reasonable approach per typical trial protocols — reflexively tapering every course, or never tapering any course, are both oversimplifications."
  },
  dosing: {
    routine: "Dosing is indication-specific — see Syndrome-Specific Regimens below. Septic-shock dosing and adrenal-crisis dosing differ meaningfully in both total dose and administration pattern.",
    syndromeSpecific: [
      {
        syndrome: "Septic Shock (Guideline-Conditional, Vasopressor-Refractory)",
        regimen: "200 mg/day IV, given either as 50 mg IV every 6 hours or as a continuous infusion (institution-dependent); continued while vasopressor-dependent, then typically tapered as shock resolves rather than stopped abruptly.",
        reference: "Trial regimens vary between ADRENAL (continuous infusion) and APROCCHSS (50 mg IV q6h plus fludrocortisone) — the evidence does not establish one single universal regimen as superior.",
        note: "This is a CONDITIONAL recommendation reserved for shock inadequately responsive to fluids and vasopressors, not a routine septic-shock therapy."
      },
      {
        syndrome: "Adrenal Crisis / Acute Adrenal Insufficiency",
        regimen: "100 mg IV bolus, followed by 50 mg IV every 6 hours (or a continuous infusion equivalent), alongside aggressive isotonic fluid resuscitation and treatment of the precipitating illness.",
        note: "This is a higher-acuity, more front-loaded regimen than the septic-shock protocol — do not substitute the septic-shock dosing pattern for true adrenal crisis."
      }
    ],
    renallyAdjusted: [
      { crclRange: "Any CrCl", dose: "No specific renal dose adjustment defined; hydrocortisone is hepatically metabolized. Monitor fluid/sodium retention more closely in renal impairment given the drug's mineralocorticoid activity." }
    ],
    hdDosing: "No specific supplemental post-HD dosing required; not significantly removed by dialysis given protein binding and hepatic metabolism.",
    crrtDosing: "No specific CRRT dose adjustment defined; dose per indication and monitor volume status/electrolytes given concurrent CRRT fluid management."
  },
  organFailure: {
    renalConsiderations: "No specific dose reduction required. Monitor for fluid retention and electrolyte effects (sodium retention, potassium/hydrogen excretion) more closely given hydrocortisone's mineralocorticoid activity, especially in oliguric renal impairment.",
    hepaticConsiderations: "Hydrocortisone does not require hepatic bioactivation (unlike prednisone), making it a reasonable choice when hepatic dysfunction is a concern, though hepatic clearance of the drug itself may still be somewhat reduced in significant impairment."
  },
  toxicity: {
    majorWarnings: [
      "Hyperglycemia — common and often significant; anticipate increased insulin requirements.",
      "Hypernatremia and fluid retention from mineralocorticoid activity, particularly at higher or prolonged doses.",
      "Increased infection risk, including reactivation of latent infections, and a blunted febrile response that can mask an evolving new infection.",
      "ICU-acquired weakness/critical illness myopathy risk, particularly with concurrent neuromuscular blockade.",
      "Increased risk of stress-related mucosal disease, typically in combination with other risk factors (mechanical ventilation, coagulopathy).",
      "Neuropsychiatric effects including delirium, agitation, or mood disturbance, especially at higher doses."
    ],
    organToxicities: [
      { organ: "Metabolic/Endocrine", description: "Hyperglycemia, hypernatremia, fluid retention, and HPA-axis suppression with prolonged use." },
      { organ: "Musculoskeletal", description: "ICU-acquired weakness/myopathy, particularly with concurrent neuromuscular blocking agents." },
      { organ: "Immunologic/Infectious", description: "Increased infection risk and a blunted febrile response, which can delay recognition of a new or worsening infection." },
      { organ: "Gastrointestinal", description: "Increased risk of stress-related mucosal disease, particularly when combined with other risk factors." },
      { organ: "Neuropsychiatric", description: "Delirium, agitation, or mood disturbance, particularly at higher doses." }
    ]
  },
  interactions: [
    {
      drug: "Insulin / oral hypoglycemics",
      mechanism: "Corticosteroid-induced insulin resistance and hyperglycemia",
      consequence: "Increased insulin requirements and less predictable glucose control",
      icuAction: "Anticipate higher insulin needs and monitor glucose more frequently while hydrocortisone is running, and again as it is tapered or stopped."
    },
    {
      drug: "Neuromuscular blocking agents",
      mechanism: "Additive risk of ICU-acquired weakness/myopathy",
      consequence: "Prolonged weakness and difficulty weaning from mechanical ventilation",
      icuAction: "Minimize concurrent duration of both agents where possible and monitor strength."
    }
  ],
  monitoring: {
    parameters: [
      "Blood glucose, closely and serially",
      "Serum sodium and fluid balance",
      "Signs of new or worsening infection, recognizing the febrile response may be blunted",
      "Blood pressure and vasopressor requirement trend (for the septic-shock indication)",
      "Mental status"
    ]
  },
  evidenceTraceability: {
    guidelineIds: ["circi-guideline-sccm-esicm-2017"],
    claimCitations: [
      {
        claim: "The ADRENAL trial found no significant 90-day mortality difference with hydrocortisone in septic shock, though secondary outcomes favored faster shock resolution and a shorter ICU stay.",
        source: "Venkatesh ES, et al. Adjunctive Glucocorticoid Therapy in Patients with Septic Shock. N Engl J Med. 2018;378(9):797-808.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/29347874/"
      },
      {
        claim: "The APROCCHSS trial found hydrocortisone plus fludrocortisone significantly reduced 90-day mortality in septic shock, in contrast to ADRENAL.",
        source: "Annane D, et al. Hydrocortisone plus Fludrocortisone for Adults with Septic Shock. N Engl J Med. 2018;378(9):809-818.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/29490185/"
      },
      {
        claim: "The 2017 SCCM/ESICM guideline provides the current framework for diagnosing and managing Critical Illness-Related Corticosteroid Insufficiency (CIRCI).",
        source: "Annane D, et al. Guidelines for the Diagnosis and Management of Critical Illness-Related Corticosteroid Insufficiency (CIRCI). Crit Care Med. 2017;45(12):2078-2088.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/28938253/"
      }
    ]
  },
  patientScenarios: [
    {
      title: "Norepinephrine-Refractory Septic Shock",
      clinicalContext: "A patient in septic shock remains on escalating norepinephrine despite adequate fluid resuscitation and source-control efforts.",
      decision: "Add hydrocortisone 200 mg/day IV (in divided doses or continuous infusion, per institutional protocol).",
      rationale: "Guideline-conditional adjunct associated with faster shock reversal and reduced vasopressor duration — framed as a hemodynamic adjunct, not a proven standalone mortality intervention."
    },
    {
      title: "Known Adrenal Insufficiency with Hypotension and Hyponatremia During Acute Illness",
      clinicalContext: "A patient with known primary adrenal insufficiency presents with hypotension, hyponatremia, hyperkalemia, and an acute illness precipitant.",
      decision: "Give hydrocortisone 100 mg IV bolus, followed by 50 mg IV every 6 hours, with aggressive isotonic fluid resuscitation and treatment of the precipitating illness.",
      rationale: "This is adrenal crisis — hydrocortisone's retained mineralocorticoid activity, combined with fluids, addresses the combined glucocorticoid and mineralocorticoid deficiency driving the presentation."
    }
  ],
  examTraps: [
    {
      misconception: "Hydrocortisone is a proven mortality-reducing therapy in septic shock.",
      reality: "MIXED. The two largest modern trials disagree — ADRENAL showed no mortality benefit, while APROCCHSS (hydrocortisone plus fludrocortisone) did.",
      explanation: "Current guidance treats hydrocortisone as a conditional adjunct for faster shock reversal, not an unambiguous mortality intervention — presenting it as settled, proven mortality benefit overstates the evidence."
    },
    {
      misconception: "Every ICU patient who receives a short course of stress-dose steroids needs a prolonged taper before stopping.",
      reality: "FALSE as a blanket rule. A short (days-long) course of stress-dose hydrocortisone in septic shock, stopped as shock resolves, is a reasonable approach consistent with typical trial protocols.",
      explanation: "The reflexive 'steroids always need a taper' rule applies most clearly to prolonged, higher-dose, or chronic therapy — not necessarily to a short stress-dose ICU course, though HPA-axis suppression risk should still be considered on a case-by-case basis."
    }
  ],
  searchAliases: ["hydrocortisone", "solu-cortef", "stress dose steroids", "septic shock steroids", "adrenal crisis", "circi"],
  relatedTopicIds: ["septic-shock", "endocrine-emergencies"]
};
