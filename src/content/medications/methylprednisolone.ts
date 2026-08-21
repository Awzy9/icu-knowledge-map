import type { Medication } from "@/content-types/medication";

export const methylprednisolone: Medication = {
  id: "methylprednisolone",
  slug: "methylprednisolone",
  name: "Methylprednisolone",
  genericName: "Methylprednisolone Sodium Succinate",
  brandNames: ["Solu-Medrol"],
  class: "Intermediate-Acting Synthetic Corticosteroid with Minimal Mineralocorticoid Activity",
  category: "endocrine-metabolic",
  subcategory: "Endocrine & Metabolic",
  summary:
    "Preferred ICU corticosteroid for severe asthma exacerbation, COPD exacerbation, and select inflammatory lung disease — higher glucocorticoid potency and negligible mineralocorticoid activity distinguish it from hydrocortisone; ARDS steroid evidence is heterogeneous across regimens and should not be presented as a single settled protocol.",
  mechanism: {
    title: "High-Affinity Glucocorticoid Receptor Binding with Negligible Mineralocorticoid Activity",
    steps: [
      "Diffuses into cells and binds the cytosolic glucocorticoid receptor; the activated complex translocates to the nucleus and alters transcription of anti- and pro-inflammatory genes, using the same core genomic mechanism as hydrocortisone.",
      "Structurally modified relative to cortisol to have markedly higher glucocorticoid receptor affinity (roughly 5x hydrocortisone) and negligible mineralocorticoid receptor activity — this potency and selectivity profile is why it, not hydrocortisone, is favored for pulmonary and inflammatory indications where sodium-retaining mineralocorticoid effects are unwanted.",
      "Suppresses eosinophilic and broader inflammatory airway infiltration in asthma/COPD, reduces airway wall edema, and — over hours, not minutes — restores beta-2 adrenergic receptor responsiveness to inhaled bronchodilators.",
      "This delayed onset (hours) is exactly why systemic corticosteroids are never a rescue bronchodilator in their own right — they support and potentiate bronchodilator therapy rather than replacing it acutely."
    ],
    visualDiagram: "Methylprednisolone → High-Affinity Glucocorticoid Receptor Binding → Gene Transcription Changes → Airway Inflammation ↓, Eosinophil Infiltration ↓ → (Hours Later) Restored Beta-2 Agonist Responsiveness"
  },
  pkPd: {
    type: "receptor-occupancy",
    targetParameter: "Indication-specific anti-inflammatory/immunomodulatory effect — not a single measurable target",
    halfLife: "Plasma half-life ~2–3 hours; biologic (anti-inflammatory) half-life considerably longer at roughly 18–36 hours (intermediate-acting), which is why once- or twice-daily dosing achieves sustained effect",
    proteinBinding: "~60–70%, less than hydrocortisone, with a smaller specifically cortisol-binding-globulin-bound fraction",
    metabolism: "Extensive hepatic metabolism",
    elimination: "Renal excretion of hepatic metabolites",
    vdNotes: "Widely distributed, including good lung tissue penetration relevant to its pulmonary indications."
  },
  icuReasoning: {
    whyIChooseIt: [
      "Preferred over hydrocortisone for pulmonary/inflammatory indications (severe asthma, COPD exacerbation) given higher glucocorticoid potency without unwanted mineralocorticoid (sodium-retaining) activity.",
      "Intermediate duration of action supports once- or twice-daily dosing rather than an every-6-hour regimen.",
      "A reasonable IV option for patients who cannot reliably take or absorb oral prednisone."
    ],
    whyIDont: [
      "Lacks clinically useful mineralocorticoid activity, making it a poor choice for adrenal insufficiency/adrenal crisis, where that specific activity is needed — use hydrocortisone instead.",
      "ARDS corticosteroid evidence is heterogeneous across different agents, doses, and durations — there is no single universally validated ARDS steroid protocol, and presenting one regimen as definitive misrepresents the evidence base.",
      "Carries the same class-wide hyperglycemia, infection-risk, and ICU-acquired-weakness concerns as other systemic corticosteroids."
    ],
    bedsidePearl: "Be precise about what the underlying trial evidence actually tested. The REDUCE trial's well-known '5-day vs 14-day' short-course finding for COPD exacerbation studied oral PREDNISONE, not IV methylprednisolone — dose-equivalence tables let you cross-titrate between the two, but that is not the same as the trial having directly tested methylprednisolone."
  },
  dosing: {
    routine: "Dosing is indication-specific — see Syndrome-Specific Regimens below.",
    syndromeSpecific: [
      {
        syndrome: "Severe Asthma Exacerbation",
        regimen: "40–80 mg/day IV in 1–2 divided doses (e.g., 40 mg IV every 12 hours), or per institutional protocol; transition to oral prednisone-equivalent dosing once the patient can reliably tolerate oral intake and is clinically improving.",
        reference: "GINA current strategy report",
        note: "Oral and IV corticosteroids have shown comparable efficacy when GI absorption is intact — IV is chosen in the ICU mainly for reliability of delivery, not because it is inherently more effective."
      },
      {
        syndrome: "COPD Exacerbation",
        regimen: "A common approach is 40 mg IV daily (referencing the oral prednisone 40 mg/day short-course evidence base) with early transition to oral therapy once tolerated; total course duration is typically around 5 days rather than a prolonged taper.",
        reference: "GOLD current strategy report; short-course duration evidence largely derived from the REDUCE trial (oral prednisone, not methylprednisolone)",
        note: "Be explicit that the REDUCE trial's 5-day-vs-14-day duration finding is about oral prednisone, not a direct methylprednisolone dosing study — the extrapolation to methylprednisolone is by dose-equivalence, not direct trial evidence."
      },
      {
        syndrome: "ARDS (Selected Patients — Evidence Heterogeneous)",
        regimen: "No single universally validated regimen exists; published trials have used differing corticosteroids, doses, and durations. Consult current institutional protocol and guideline nuance rather than assuming one fixed methylprednisolone regimen applies.",
        note: "Do not present ARDS corticosteroid therapy as having one settled dosing regimen — the trial evidence base uses genuinely heterogeneous steroid choices, doses, and treatment durations."
      }
    ],
    renallyAdjusted: [
      { crclRange: "Any CrCl", dose: "No specific renal dose adjustment defined; methylprednisolone is hepatically metabolized." }
    ],
    hdDosing: "No specific supplemental post-HD dosing required; not significantly removed by dialysis.",
    crrtDosing: "No specific CRRT dose adjustment defined; dose per indication."
  },
  organFailure: {
    renalConsiderations: "No specific dose reduction required; monitor for hyperglycemia and fluid status as with any systemic corticosteroid.",
    hepaticConsiderations: "Significant hepatic impairment may reduce clearance and prolong systemic exposure — monitor for an exaggerated or prolonged corticosteroid effect."
  },
  toxicity: {
    majorWarnings: [
      "Hyperglycemia — common and often significant.",
      "Increased infection risk and a blunted febrile response, which can mask a new or worsening infection.",
      "ICU-acquired weakness/myopathy risk, particularly with concurrent neuromuscular blockade — a specific, well-documented concern when methylprednisolone and neuromuscular blocking agents are combined in severe asthma/status asthmaticus management.",
      "Increased risk of stress-related mucosal disease, typically in combination with other risk factors.",
      "Neuropsychiatric effects including agitation, delirium, or mood disturbance, especially at higher doses.",
      "Minimal mineralocorticoid activity means methylprednisolone does NOT reliably treat concurrent adrenal insufficiency or mineralocorticoid deficiency — use hydrocortisone, or add fludrocortisone, if that specific need exists."
    ],
    organToxicities: [
      { organ: "Metabolic/Endocrine", description: "Hyperglycemia and HPA-axis suppression with prolonged use; unlike hydrocortisone, minimal direct mineralocorticoid effect." },
      { organ: "Musculoskeletal", description: "ICU-acquired weakness/myopathy — a specific, well-recognized risk when combined with neuromuscular blocking agents in severe asthma/status asthmaticus management (acute quadriplegic myopathy of critical illness)." },
      { organ: "Immunologic/Infectious", description: "Increased infection risk and a blunted febrile response." },
      { organ: "Gastrointestinal", description: "Increased risk of stress-related mucosal disease." },
      { organ: "Neuropsychiatric", description: "Agitation, delirium, or mood disturbance, particularly at higher doses." }
    ]
  },
  interactions: [
    {
      drug: "Neuromuscular blocking agents (especially in severe asthma/status asthmaticus)",
      mechanism: "Additive/synergistic risk of severe ICU-acquired weakness (acute quadriplegic myopathy)",
      consequence: "Prolonged, sometimes severe weakness and difficulty weaning from mechanical ventilation",
      icuAction: "Minimize concurrent duration of both agents; use the lowest effective NMBA dose and duration, and consider daily interruption where feasible."
    },
    {
      drug: "Insulin / oral hypoglycemics",
      mechanism: "Corticosteroid-induced insulin resistance",
      consequence: "Increased insulin requirements",
      icuAction: "Anticipate higher insulin needs and monitor glucose closely."
    },
    {
      drug: "Strong CYP3A4 inhibitors/inducers",
      mechanism: "Altered hepatic metabolism of methylprednisolone",
      consequence: "Increased or decreased corticosteroid exposure",
      icuAction: "Be aware of significant CYP3A4 interactions (e.g., certain antifungals, rifampin) and adjust clinical monitoring accordingly."
    }
  ],
  monitoring: {
    parameters: [
      "Blood glucose",
      "Signs of new or worsening infection",
      "Neuromuscular strength/exam, particularly if combined with neuromuscular blockade",
      "Mental status",
      "Respiratory status and response to therapy (asthma/COPD indications)"
    ]
  },
  evidenceTraceability: {
    guidelineIds: ["gina-guideline-current", "gold-guideline-current"],
    claimCitations: [
      {
        claim: "A 5-day course of oral prednisone was non-inferior to a 14-day course for COPD exacerbation, supporting shorter corticosteroid courses.",
        source: "Leuppi JD, et al. Short-term vs Conventional Glucocorticoid Therapy in Acute Exacerbations of Chronic Obstructive Pulmonary Disease: The REDUCE Randomized Clinical Trial. JAMA. 2013;309(21):2223-2231.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/23695200/"
      }
    ]
  },
  patientScenarios: [
    {
      title: "Severe Asthma Exacerbation Requiring ICU Admission",
      clinicalContext: "A patient with a severe asthma exacerbation and poor response to bronchodilators is admitted to the ICU.",
      decision: "Give methylprednisolone 40 mg IV every 12 hours (or per institutional protocol), understanding that a meaningful anti-inflammatory/bronchodilator-potentiating effect takes hours, not minutes, to develop.",
      rationale: "Systemic corticosteroids reduce airway inflammation and restore beta-2 receptor responsiveness, but are never a substitute for immediate bronchodilator/rescue therapy given their delayed onset."
    },
    {
      title: "Methylprednisolone Mistakenly Substituted for Hydrocortisone in Adrenal Crisis",
      clinicalContext: "A patient with known adrenal insufficiency in crisis is given methylprednisolone instead of hydrocortisone.",
      decision: "Recognize the mineralocorticoid gap and add hydrocortisone (or fludrocortisone) rather than simply increasing the methylprednisolone dose.",
      rationale: "Methylprednisolone's negligible mineralocorticoid activity does not address the sodium/volume component of adrenal crisis — potency-equivalent dosing does not substitute for the specific receptor activity that's actually needed."
    }
  ],
  examTraps: [
    {
      misconception: "There is one universally agreed methylprednisolone regimen for ARDS.",
      reality: "FALSE. ARDS corticosteroid trial evidence uses heterogeneous agents, doses, and durations — there is no single settled regimen.",
      explanation: "Presenting ARDS steroid therapy as having one fixed protocol misrepresents a genuinely mixed and evolving evidence base; institutional and guideline-specific protocols should be consulted rather than assuming one universal number."
    },
    {
      misconception: "The REDUCE trial proved that a short methylprednisolone course is as effective as a long one for COPD.",
      reality: "Not precisely — REDUCE studied oral PREDNISONE, not IV methylprednisolone.",
      explanation: "The finding is often generalized in practice to systemic corticosteroids broadly via dose-equivalence reasoning, but citing REDUCE as direct methylprednisolone evidence overstates exactly what the trial tested."
    }
  ],
  searchAliases: ["methylprednisolone", "solu-medrol", "asthma steroids", "copd steroids", "ards steroids"],
  relatedTopicIds: ["asthma", "copd-exacerbation", "ards"]
};
