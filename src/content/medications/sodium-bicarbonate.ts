import type { Medication } from "@/content-types/medication";

export const sodiumBicarbonate: Medication = {
  id: "sodium-bicarbonate",
  slug: "sodium-bicarbonate",
  name: "Sodium Bicarbonate",
  genericName: "Sodium Bicarbonate",
  brandNames: [],
  class: "Alkalinizing Agent / Buffer",
  category: "electrolytes-emergency",
  subcategory: "Electrolytes & Emergency Reversal",
  summary:
    "A deliberately narrow-role buffer reserved for severe metabolic acidosis with concurrent AKI, sodium-channel-blocker toxicity, and select hyperkalemia with significant concurrent acidemia — explicitly NOT a routine therapy for lactic acidosis or a default cardiac-arrest drug.",
  mechanism: {
    title: "Hydrogen Ion Buffering with a CO2-Generation Tradeoff",
    steps: [
      "Reacts with free H+ to form carbonic acid (H2CO3), which is then converted by carbonic anhydrase to CO2 and H2O — directly buffering (raising) blood pH by consuming hydrogen ions.",
      "The generated CO2 must be cleared by ventilation. In a patient who cannot adequately increase minute ventilation — during cardiac arrest with limited effective ventilation, or severe respiratory failure — bicarbonate administration can paradoxically worsen intracellular/tissue acidosis, since CO2 diffuses across cell membranes faster than bicarbonate itself.",
      "In sodium-channel-blocker toxicity (e.g., tricyclic antidepressant overdose), the sodium load itself — independent of the pH effect — helps overcome sodium channel blockade, and the resulting alkalemia reduces the free (active) fraction of the offending drug. This is a distinct, drug-specific mechanism from bicarbonate's role as a simple acid-base buffer."
    ],
    visualDiagram: "HCO3- + H+ → H2CO3 → CO2 + H2O // Bicarbonate Administration → CO2 Generation ↑ → Ventilation Requirement ↑"
  },
  pkPd: {
    type: "other",
    targetParameter: "Indication-specific: arterial pH/bicarbonate correction (severe acidemia), QRS narrowing and clinical improvement (sodium-channel-blocker toxicity), or serum potassium/pH improvement (hyperkalemia with concurrent acidosis)",
    halfLife: "Not a conventional pharmacokinetic half-life — bicarbonate is an endogenous buffer; its effect is immediate on administration, and duration depends on ongoing acid production and clearance, not drug elimination",
    proteinBinding: "Not applicable",
    metabolism: "Not applicable — bicarbonate is a normal physiologic buffer, not a metabolized xenobiotic",
    elimination: "Renal handling (reabsorption/excretion) regulates bicarbonate homeostasis; the accompanying sodium load is renally excreted if renal function permits",
    vdNotes: "Distributes throughout total body water/extracellular fluid; the sodium load accompanying bicarbonate administration is clinically significant given the concentrated formulations typically used (e.g., an 8.4% solution delivers 1 mEq/mL of both Na+ and HCO3-)."
  },
  icuReasoning: {
    whyIChooseIt: [
      "Selected severe metabolic acidosis with concurrent AKI, where trial evidence (BICAR-ICU) suggests benefit in that specific subgroup.",
      "Sodium-channel-blocker toxicity (e.g., TCA overdose) with a widened QRS, where it is genuinely a first-line, mechanism-specific therapy.",
      "Hyperkalemia specifically when significant concurrent metabolic acidosis is present, used as an adjunct rather than primary shifting therapy."
    ],
    whyIDont: [
      "NOT recommended as routine or universal therapy for lactic acidosis — it does not address the underlying cause and can worsen intracellular acidosis and cause volume/sodium overload without demonstrated outcome benefit in that broad context.",
      "NOT routinely recommended during cardiac arrest outside specific circumstances (known pre-existing severe metabolic acidosis, hyperkalemia, or sodium-channel-blocker toxicity as the presumed cause), given the lack of demonstrated outcome benefit and theoretical harms.",
      "Causes a significant sodium load, volume expansion, hypernatremia risk, and can reduce ionized calcium — all relevant considerations in fluid-sensitive or hemodynamically unstable ICU patients."
    ],
    bedsidePearl: "Know exactly which population BICAR-ICU actually studied: severe acidemia (pH≤7.20) WITH concurrent AKI — the mortality and RRT-reduction benefit was concentrated in the AKIN stage 2–3 subgroup, not the overall trial population. Don't present bicarbonate as broadly validated for 'severe metabolic acidosis' in general; the evidence is genuinely narrower than that."
  },
  dosing: {
    routine: "Dosing is strictly indication-specific — see Syndrome-Specific Regimens below. There is no single universal 'bicarb dose,' and routine use for isolated lactic acidosis, hyperkalemia without significant acidemia, or cardiac arrest is generally NOT recommended.",
    syndromeSpecific: [
      {
        syndrome: "Severe Metabolic Acidosis with Concurrent AKI (pH ≤ 7.20)",
        regimen: "IV sodium bicarbonate infusion (e.g., 4.2% or diluted 8.4% solution) titrated to a target arterial pH/bicarbonate per institutional protocol; the BICAR-ICU trial protocol used 4.2% sodium bicarbonate targeting pH ≥ 7.30.",
        reference: "Jaber S, et al. BICAR-ICU trial, Lancet 2018",
        note: "Trial benefit (reduced mortality, reduced RRT initiation) was concentrated in the subgroup with concurrent AKIN stage 2–3 acute kidney injury — this should not be generalized as routine therapy for all severe metabolic acidosis."
      },
      {
        syndrome: "Sodium-Channel-Blocker Toxicity (e.g., TCA overdose with widened QRS)",
        regimen: "1–2 mEq/kg IV bolus, repeated as needed and titrated to QRS narrowing and clinical improvement; may be followed by a continuous infusion targeting a higher-normal or mildly alkalemic arterial pH per toxicology guidance.",
        note: "This is a mechanism-specific, genuinely first-line indication — distinct from bicarbonate's more limited, conditional role in other forms of acidosis."
      },
      {
        syndrome: "Hyperkalemia with Significant Concurrent Metabolic Acidosis",
        regimen: "Used adjunctively — not as primary shifting therapy — when pH is significantly reduced, alongside calcium, insulin/dextrose, and elimination measures; exact dosing is protocol- and severity-dependent.",
        note: "Not effective or recommended as isolated hyperkalemia therapy in the absence of significant concurrent acidemia."
      }
    ],
    renallyAdjusted: [
      { crclRange: "Any CrCl", dose: "No fixed renal dose-adjustment formula. Renal impairment (particularly AKI) is actually the population where the strongest trial evidence for benefit exists, though sodium/volume load should be monitored closely regardless of renal function." }
    ],
    hdDosing: "Bicarbonate itself is dialyzable, and dialysate bicarbonate concentration is a separate variable managed by the dialysis prescription; IV bicarbonate may still be used for acute severe acidemia while arranging or awaiting dialysis per clinical judgment.",
    crrtDosing: "CRRT effluent/replacement fluid bicarbonate concentration is the primary driver of acid-base correction on CRRT — supplemental IV bicarbonate administration should be coordinated with the CRRT prescription rather than dosed independently."
  },
  organFailure: {
    renalConsiderations: "Renal impairment/AKI is the specific population in which trial evidence (BICAR-ICU) supports benefit for severe acidemia — this is a case where renal failure is a reason FOR use in the correct clinical context, though volume/sodium status still requires close monitoring.",
    hepaticConsiderations: "No specific hepatic dose adjustment; hepatic lactate clearance is a separate consideration relevant to the underlying acidosis (e.g., lactic acidosis in liver failure) but does not directly alter bicarbonate dosing."
  },
  toxicity: {
    majorWarnings: [
      "Significant sodium load and volume expansion — a real concern in heart failure, renal failure, or generally fluid-sensitive patients.",
      "Hypernatremia, particularly with repeated dosing of concentrated (8.4%) solution.",
      "Can reduce ionized calcium (via pH-dependent protein binding of calcium), which can be clinically significant in a patient already hypocalcemic or receiving citrate anticoagulation.",
      "Overshoot alkalosis with excessive/repeated dosing, which left-shifts the oxyhemoglobin dissociation curve (impairing peripheral O2 unloading) and can precipitate hypokalemia and tetany.",
      "Generates CO2 that must be cleared by ventilation — can worsen intracellular/tissue acidosis if minute ventilation cannot adequately increase, which is central to why it is not a default cardiac-arrest therapy."
    ],
    organToxicities: [
      { organ: "Cardiovascular/Volume", description: "Sodium and volume overload, particularly relevant in heart failure or renal failure." },
      { organ: "Metabolic", description: "Hypernatremia, reduced ionized calcium, overshoot alkalosis, hypokalemia." },
      { organ: "Respiratory/Cellular", description: "Generated CO2 requires adequate ventilation to clear; inadequate ventilation can worsen intracellular acidosis despite improving extracellular/serum pH." }
    ]
  },
  interactions: [
    {
      drug: "Calcium-containing solutions",
      mechanism: "Physical/chemical incompatibility (precipitation) when mixed in the same line",
      consequence: "Line occlusion and loss of drug delivery",
      icuAction: "Administer through separate, compatible IV lines."
    },
    {
      drug: "Catecholamines (e.g., epinephrine, norepinephrine)",
      mechanism: "Alkaline pH can inactivate catecholamines if mixed in the same solution/line",
      consequence: "Reduced vasopressor effect",
      icuAction: "Do not co-administer in the same line; use separate access."
    }
  ],
  monitoring: {
    parameters: [
      "Arterial or venous blood gas (pH, bicarbonate, pCO2) serially",
      "Serum sodium",
      "Ionized calcium",
      "Serum potassium",
      "Ventilatory status/minute ventilation adequacy to clear the generated CO2"
    ]
  },
  evidenceTraceability: {
    claimCitations: [
      {
        claim: "In severe metabolic acidosis (pH≤7.20), sodium bicarbonate did not improve the overall composite primary outcome, but significantly reduced 28-day mortality and renal replacement therapy initiation in the prespecified subgroup with concurrent AKIN stage 2–3 acute kidney injury.",
        source: "Jaber S, et al. Sodium bicarbonate therapy for patients with severe metabolic acidaemia in the intensive care unit (BICAR-ICU): a multicentre, open-label, randomised controlled, phase 3 trial. Lancet. 2018;392(10141):31-40.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/29910040/"
      }
    ]
  },
  patientScenarios: [
    {
      title: "Severe Metabolic Acidosis with AKI",
      clinicalContext: "A patient with septic shock has pH 7.15, bicarbonate 10 mEq/L, and AKIN stage 3 acute kidney injury.",
      decision: "Consider a sodium bicarbonate infusion targeting pH ≥ 7.30, per the BICAR-ICU protocol, given the specific concurrent-AKI subgroup where benefit was demonstrated.",
      rationale: "This is the specific population — severe acidemia plus significant concurrent AKI — where trial-level evidence supports a mortality and renal-replacement-therapy benefit."
    },
    {
      title: "TCA Overdose with Widened QRS",
      clinicalContext: "A patient with a tricyclic antidepressant overdose has a QRS duration of 130 ms and is hypotensive.",
      decision: "Give sodium bicarbonate 1–2 mEq/kg IV bolus, repeated and titrated to QRS narrowing, with a target arterial pH of roughly 7.50–7.55.",
      rationale: "Sodium-channel-blocker toxicity is a genuinely first-line, mechanism-specific indication for bicarbonate — both the sodium load and the induced alkalemia directly counteract the toxin's effect."
    }
  ],
  examTraps: [
    {
      misconception: "Sodium bicarbonate is standard therapy for lactic acidosis.",
      reality: "FALSE. Routine bicarbonate administration for lactic acidosis is not recommended — it does not address the underlying cause and can worsen intracellular acidosis and cause volume/sodium overload without demonstrated outcome benefit in that broad context.",
      explanation: "The correct treatment for lactic acidosis is addressing its cause (e.g., improving perfusion), not buffering the pH number — bicarbonate's evidence-supported role is much narrower: specific severe-acidemia-with-AKI, sodium-channel-blocker toxicity, and select hyperkalemia contexts."
    },
    {
      misconception: "Bicarbonate should be given routinely during cardiac arrest.",
      reality: "FALSE as a default. Routine bicarbonate during cardiac arrest is not recommended outside specific circumstances (known severe pre-existing metabolic acidosis, hyperkalemia, or suspected sodium-channel-blocker toxicity as the arrest etiology).",
      explanation: "Effective compressions and ventilation, defibrillation when indicated, and addressing reversible causes take priority — bicarbonate's generated CO2 load can worsen intracellular acidosis if ventilation during arrest is inherently limited."
    }
  ],
  searchAliases: ["sodium bicarbonate", "bicarb", "bicar-icu trial", "tca overdose bicarbonate", "metabolic acidosis treatment"],
  relatedTopicIds: ["metabolic-acidosis", "hyperkalemia", "toxicologic-emergencies", "diabetic-ketoacidosis"]
};
