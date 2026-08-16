import type { Topic } from "@/content-types";

export const septicShock: Topic = {
  id: "septic-shock",
  slug: "septic-shock",
  title: "Septic Shock",
  category: "cardiovascular",
  oneLiner:
    "The subset of sepsis with profound circulatory and cellular/metabolic abnormality — clinically identified by a vasopressor requirement to maintain MAP ≥ 65 mmHg plus lactate > 2 mmol/L despite adequate fluid resuscitation.",
  status: "complete",
  lastReviewed: "2026-08-14",
  version: "1.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
    },
  ],
  currentStatus:
    "Current as of the 2026 Surviving Sepsis Campaign guideline (published online March 2026) and the Sepsis-3 (2016) consensus definitions, which the 2026 guideline retains without revision.",
  otherReferences: [
    "Singer M, et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA. 2016;315(8):801-810.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "sepsis", label: "Septic shock is a subset of sepsis" },
    { type: "prerequisite", targetId: "shock", label: "Core hemodynamic and oxygen transport framework" },
    { type: "differential", targetId: "cardiogenic-shock" },
    { type: "differential", targetId: "obstructive-shock" },
    { type: "complication", targetId: "aki", label: "Common complication" },
    { type: "complication", targetId: "ards" },
    { type: "complication", targetId: "dic" },
    { type: "complication", targetId: "arrhythmias", label: "Sepsis-induced new-onset atrial fibrillation" },
    { type: "related-to", targetId: "rv-failure", label: "Septic cardiomyopathy and acute cor pulmonale" },
    { type: "related-to", targetId: "metabolic-acidosis", label: "Lactic acidosis and tissue dysoxia" },
    { type: "treated-with", targetId: "crrt", label: "RRT for refractory acidosis, fluid overload, or AKI" },
  ],
  sections: [
    {
      id: "septic-shock.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "septic-shock-ssc2026-initial-fluids",
          relevance: "Surviving Sepsis recommendation on initial 30 mL/kg crystalloid resuscitation"
        },
        {
          kind: "guideline",
          id: "septic-shock-ssc2026-balanced-crystalloids",
          relevance: "Surviving Sepsis recommendation for balanced crystalloids over normal saline"
        },
        {
          kind: "guideline",
          id: "septic-shock-ssc2026-norepinephrine",
          relevance: "Surviving Sepsis recommendation for norepinephrine as first-line vasopressor"
        },
        {
          kind: "guideline",
          id: "septic-shock-ssc2026-vasopressin",
          relevance: "Surviving Sepsis recommendation for fixed-dose vasopressin (0.03 U/min)"
        },
        {
          kind: "guideline",
          id: "septic-shock-ssc2026-map-target",
          relevance: "Surviving Sepsis target MAP >= 65 mmHg"
        },
        {
          kind: "guideline",
          id: "septic-shock-ssc2026-map-target-elderly",
          relevance: "Permissive hypotension (MAP 60-65 mmHg) in elderly septic shock"
        },
        {
          kind: "guideline",
          id: "septic-shock-ssc2026-corticosteroids",
          relevance: "Surviving Sepsis recommendation for IV hydrocortisone in refractory shock"
        },
        {
          kind: "guideline",
          id: "septic-shock-ssc2026-bicarbonate",
          relevance: "Surviving Sepsis recommendation for sodium bicarbonate in severe acidemia"
        },
        {
          kind: "guideline",
          id: "septic-shock-ssc2026-active-fluid-removal",
          relevance: "Surviving Sepsis recommendation for conservative/active fluid de-resuscitation"
        },
        {
          kind: "trial",
          id: "sepsis-vasst",
          relevance: "VASST trial evaluating vasopressin in septic shock"
        },
        {
          kind: "trial",
          id: "sepsis-aprocchss",
          relevance: "APROCCHSS trial showing hydrocortisone + fludrocortisone reduces 90-day mortality"
        },
        {
          kind: "trial",
          id: "sepsis-adrenal",
          relevance: "ADRENAL trial showing hydrocortisone accelerates shock reversal and extubation"
        },
        {
          kind: "trial",
          id: "sepsis-vanish",
          relevance: "VANISH trial evaluating early vasopressin and hydrocortisone in septic shock"
        },
        {
          kind: "trial",
          id: "sepsis-smart-trial",
          relevance: "SMART trial proving balanced crystalloids reduce MAKE30 and mortality in sepsis"
        },
        {
          kind: "systematic-review",
          id: "sepsis-egdt-meta-analysis",
          relevance: "PRISM meta-analysis of protocolized early goal-directed therapy"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Septic shock is sepsis plus a hemodynamic and metabolic derangement severe enough to substantially raise mortality risk.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Septic shock is the clinical identification of the sickest subset of patients with sepsis: those whose circulatory, cellular, and metabolic abnormalities are severe enough that mortality is substantially higher than sepsis without shock. Management centers on rapid, protocolized hemodynamic support (fluids, vasopressors, monitoring) running in parallel with the infection-focused care covered in the Sepsis topic — this topic covers the hemodynamic side in depth.",
        },
      ],
    },
    {
      id: "septic-shock.definition",
      kind: "definition",
      title: "Definition",
      summary: "Vasopressors to maintain MAP ≥ 65 mmHg plus lactate > 2 mmol/L, despite adequate fluid resuscitation, with no other cause of shock.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Septic shock (Sepsis-3)", value: "Sepsis with vasopressor requirement to maintain MAP ≥ 65 mmHg AND serum lactate > 2 mmol/L, despite adequate fluid resuscitation, and no other clear cause for the hypotension/hyperlactatemia." },
          ],
        },
        {
          type: "paragraph",
          text: "Both elements — the vasopressor requirement and the elevated lactate — are needed under Sepsis-3; hypotension responsive to fluids alone, or an isolated lactate elevation without a vasopressor requirement, does not by itself meet this definition, though either may represent earlier or evolving shock physiology that still warrants urgent attention.",
        },
      ],
    },
    {
      id: "septic-shock.physiology",
      kind: "physiology",
      title: "Physiology",
      summary: "Distributive shock from vasoplegia, with variable contributions from relative/absolute hypovolemia and myocardial depression.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Septic shock is fundamentally distributive: inflammatory mediators cause pathologic vasodilation (vasoplegia) and loss of vascular tone, dropping systemic vascular resistance despite an often normal or increased cardiac output. This is compounded by capillary leak (relative and sometimes absolute hypovolemia from fluid shifting out of the vasculature) and, in a substantial proportion of patients, reversible septic cardiomyopathy that adds a cardiogenic component on top of the distributive picture.",
        },
        {
          type: "paragraph",
          text: "Elevated lactate in this setting reflects more than simple hypoperfusion — impaired mitochondrial oxygen utilization and increased aerobic glycolysis driven by the inflammatory response both contribute, which is part of why lactate should guide resuscitation trends rather than be chased to an arbitrary normal number regardless of the clinical picture.",
        },
      ],
    },
    {
      id: "septic-shock.clinical-presentation",
      kind: "clinical-presentation",
      title: "Clinical Presentation",
      summary: "Warm or cold shock physiology, hypotension refractory to initial fluids, and signs of impaired perfusion.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Hypotension despite adequate fluid resuscitation, often with a widened pulse pressure and warm extremities early (\"warm shock\") from vasoplegia, though patients can also present cold and mottled, especially later or with a cardiogenic component.",
            "Tachycardia, altered mentation, oliguria, and delayed capillary refill or mottling as perfusion markers.",
            "Rising or persistently elevated lactate.",
            "A plausible infection source, though it is not always immediately apparent.",
          ],
        },
      ],
    },
    {
      id: "septic-shock.diagnosis",
      kind: "diagnosis",
      title: "Diagnosis",
      summary: "Confirm the vasopressor-plus-lactate definition, and use dynamic measures rather than static numbers or exam alone to guide further fluid.",
      provenance: "guideline",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            "Confirm sepsis is present (organ dysfunction from a plausible infection) and that hypotension has not corrected with adequate fluid resuscitation.",
            "Confirm the vasopressor requirement to maintain MAP ≥ 65 mmHg and lactate > 2 mmol/L, both together.",
            "Actively exclude or identify a concurrent non-septic contributor to shock (cardiogenic, hypovolemic, obstructive) — the two are not mutually exclusive, and a patient can have septic and cardiogenic physiology together.",
            "Use dynamic measures of fluid responsiveness (e.g. passive leg raise, or stroke volume/pulse pressure variation with a fluid challenge) rather than static measures or exam alone to guide further fluid administration once initial resuscitation is underway.",
          ],
        },
        {
          type: "callout",
          tone: "guideline",
          text: "Point-of-care echocardiography is useful for identifying a cardiogenic contributor, assessing volume responsiveness, and distinguishing warm from cold shock physiology at the bedside — see Cardiogenic Shock and Shock for the broader differential approach.",
        },
      ],
    },
    {
      id: "septic-shock.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis",
      summary: "Other shock states can coexist with or mimic septic shock and must be actively considered, especially when the response to therapy is poor.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Cardiogenic shock — consider with a history of cardiac disease, new arrhythmia, or poor response to fluids and vasopressors; bedside echocardiography helps distinguish.",
            "Obstructive shock (tension pneumothorax, cardiac tamponade, massive pulmonary embolism) — consider especially with a sudden onset or refractory presentation.",
            "Hypovolemic shock from hemorrhage or severe non-infectious fluid losses.",
            "Adrenal crisis and thyroid storm — can mimic distributive shock refractory to usual therapy.",
            "Anaphylaxis — typically has a clear temporal trigger and mucocutaneous findings.",
          ],
        },
      ],
    },
    {
      id: "septic-shock.management",
      kind: "management",
      title: "Management",
      summary: "Fluids, then vasopressors targeted to a MAP goal, with corticosteroids and adjunctive vasopressin considered for refractory shock — running alongside the infection-focused care in Sepsis.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Hemodynamic management proceeds in parallel with — not instead of — the antimicrobial and source-control track covered in the Sepsis topic. Recommendation wording below deliberately reflects the actual strength and certainty behind each recommendation rather than treating all of them as equally mandatory.",
        },
      ],
      children: [
        {
          id: "septic-shock.management.fluids",
          kind: "management-subnode",
          title: "Initial Fluid Resuscitation",
          summary: "At least 30 mL/kg balanced crystalloid in the first 3 hours, then individualize using dynamic measures.",
          provenance: "guideline",
          body: [
            {
              type: "list",
              ordered: false,
              items: [
                "Suggest at least 30 mL/kg IV crystalloid within the first 3 hours — a starting point to individualize from, not a fixed volume mandated for every patient.",
                "Suggest balanced crystalloids over 0.9% saline, except in sepsis with concurrent traumatic brain injury, where saline is preferred.",
                "After the initial bolus, use dynamic measures of fluid responsiveness to guide further fluid rather than continuing to fixed endpoints like a normalized lactate.",
              ],
            },
            {
              type: "callout",
              tone: "caution",
              text: "\"At least 30 mL/kg\" is a conditional recommendation on low-certainty evidence, not a rigid requirement for every patient — those with heart failure, significant renal impairment, or clear fluid overload need individualized, often smaller, volumes.",
            },
          ],
        },
        {
          id: "septic-shock.management.vasopressors",
          kind: "management-subnode",
          title: "Vasopressors",
          summary: "Norepinephrine first-line; consider adding vasopressin for escalating norepinephrine needs, then epinephrine if still inadequate.",
          provenance: "guideline",
          body: [
            {
              type: "list",
              ordered: false,
              items: [
                "Norepinephrine is the first-line vasopressor over dopamine, epinephrine, or selepressin.",
                "Consider adding vasopressin in patients with septic shock requiring escalating doses of norepinephrine, rather than escalating norepinephrine alone — the guideline does not mandate a single universal starting dose as a formal recommendation.",
                "Consider adding epinephrine if MAP remains inadequate despite norepinephrine and vasopressin.",
                "In patients with a significant cardiac dysfunction component, norepinephrine or epinephrine are reasonable first-line choices.",
              ],
            },
            {
              type: "callout",
              tone: "caution",
              text: "Avoid the shorthand \"give vasopressin early\" — the guideline-supported role is specifically as an add-on for escalating norepinephrine requirements, evaluated in VASST and VANISH, neither of which established a clear overall mortality benefit. See Landmark Trials and Controversies.",
            },
          ],
        },
        {
          id: "septic-shock.management.map-target",
          kind: "management-subnode",
          title: "MAP Target",
          summary: "65 mmHg for most adults; 60-65 mmHg specifically for adults aged 65 and older.",
          provenance: "guideline",
          body: [
            {
              type: "key-value-table",
              rows: [
                { label: "General adults", value: "Initial MAP target 65 mmHg (a reasonable range, roughly ±5 mmHg, is appropriate in practice)." },
                { label: "Adults aged ≥ 65 years", value: "MAP target 60-65 mmHg, rather than a higher target — a specific age-based recommendation, not a general statement about \"older\" or \"frail\" patients." },
              ],
            },
            {
              type: "paragraph",
              text: "The age-65-and-older recommendation is conditional and based on low-certainty evidence — it reflects a judgment that avoiding vasopressor-related harms may outweigh a marginally higher pressure target in this age group, not a claim that lower pressure is better tolerated by all older or frail patients regardless of age.",
            },
          ],
        },
        {
          id: "septic-shock.management.corticosteroids",
          kind: "management-subnode",
          title: "Corticosteroids",
          summary: "Consider IV corticosteroids, usually in patients with an ongoing vasopressor requirement — the two major trials disagree on mortality benefit.",
          provenance: "guideline",
          body: [
            {
              type: "paragraph",
              text: "IV corticosteroids are conditionally suggested in septic shock, most often reserved for patients with an ongoing vasopressor requirement rather than given routinely at shock onset. The evidence base is genuinely mixed: ADRENAL (hydrocortisone alone) found no 90-day mortality benefit, while APROCCHSS (hydrocortisone plus fludrocortisone) found a significant mortality reduction. See Controversies.",
            },
          ],
        },
        {
          id: "septic-shock.management.bicarbonate-rrt",
          kind: "management-subnode",
          title: "Bicarbonate and Renal Replacement Therapy",
          summary: "Bicarbonate is not routine for lactic acidemia; a narrow exception exists for severe acidemia with concurrent AKI. RRT indications follow AKI, not shock alone.",
          provenance: "guideline",
          body: [
            {
              type: "list",
              ordered: false,
              items: [
                "Sodium bicarbonate is not suggested for improving hemodynamics or reducing vasopressor requirements in lactic acidemia generally.",
                "A narrow exception: consider bicarbonate in severe metabolic acidemia (pH ≤ 7.2) with concurrent acute kidney injury (AKIN stage 2-3).",
                "Renal replacement therapy indications and timing follow the approach in AKI and CRRT — septic shock alone, without a definitive AKI indication, is not itself a reason to start RRT.",
              ],
            },
          ],
        },
        {
          id: "septic-shock.management.active-fluid-removal",
          kind: "management-subnode",
          title: "Active Fluid Removal",
          summary: "Once the acute resuscitation phase resolves, actively remove excess fluid rather than allowing passive positive balance to persist.",
          provenance: "guideline",
          body: [
            {
              type: "paragraph",
              text: "Once shock has resolved and the patient is fluid-overloaded, active fluid removal (diuretics, or ultrafiltration/CRRT if the patient is already on it) is suggested over passive fluid balance alone — the same logic underlying conservative fluid management after the shock phase in ARDS.",
            },
          ],
        },
      ],
    },
    {
      id: "septic-shock.monitoring",
      kind: "monitoring",
      title: "Monitoring",
      summary: "Trend MAP, lactate, perfusion markers, and fluid balance; reassess the vasopressor requirement continuously rather than at fixed intervals only.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Continuous arterial pressure monitoring once on vasopressors, with a defined MAP target reassessed as the clinical picture evolves.",
            "Serial lactate to track trend, not a single value.",
            "Perfusion markers: capillary refill time, mottling, mentation, urine output.",
            "Daily assessment of vasopressor and fluid requirements, with de-escalation as shock resolves and active fluid removal once appropriate.",
            "Ongoing reassessment for a cardiogenic or other non-septic contributor if the response to therapy is poor.",
          ],
        },
      ],
    },
    {
      id: "septic-shock.complications",
      kind: "complications",
      title: "Complications",
      summary: "Multi-organ involvement is the rule, not the exception, in established septic shock.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Acute kidney injury, from hypoperfusion, inflammatory injury, and nephrotoxin exposure.",
            "ARDS, when the inflammatory response or a pulmonary source injures the alveolar-capillary membrane.",
            "Disseminated intravascular coagulation and other coagulopathy.",
            "Myocardial dysfunction (septic cardiomyopathy), usually reversible over days.",
            "Encephalopathy and delirium.",
            "Digital or limb ischemia from high-dose, prolonged vasopressor use — a treatment-related, not disease-related, complication worth anticipating and monitoring for.",
            "ICU-acquired weakness and post-sepsis syndrome in survivors.",
          ],
        },
      ],
    },
    {
      id: "septic-shock.guidelines",
      kind: "guidelines",
      title: "Guidelines",
      summary: "The 2026 Surviving Sepsis Campaign guideline is the current reference for hemodynamic management of septic shock.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "The 2026 Surviving Sepsis Campaign guideline (joint ESICM/SCCM, published online March 2026) sets graded recommendations for fluid type and volume, vasopressor choice and sequencing, MAP targets (including the age-65-and-older-specific target), corticosteroids, bicarbonate, and active fluid removal, each with an explicit strength and certainty rating rather than uniform mandatory language.",
        },
      ],
    },
    {
      id: "septic-shock.landmark-trials",
      kind: "landmark-trials",
      title: "Landmark Trials",
      summary: "Four trials that shaped current vasopressor and corticosteroid practice, including two steroid trials that disagree.",
      provenance: "trial",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "VASST (2008) — adding vasopressin to norepinephrine showed no overall mortality benefit, with an exploratory signal favoring vasopressin in less-severe shock.",
            "VANISH (2016) — vasopressin as an early primary vasopressor showed no benefit in kidney failure-free days or mortality versus norepinephrine — a different clinical question from the guideline-endorsed add-on use.",
            "ADRENAL (2018) — hydrocortisone alone showed no 90-day mortality benefit versus placebo, though it resolved shock faster.",
            "APROCCHSS (2018) — hydrocortisone plus fludrocortisone showed a significant 90-day mortality reduction versus placebo.",
          ],
        },
      ],
    },
    {
      id: "septic-shock.controversies",
      kind: "controversies",
      title: "Controversies",
      summary: "ADRENAL and APROCCHSS disagree on corticosteroid mortality benefit, and neither vasopressin trial supports a strong independent mortality claim.",
      provenance: "trial",
      body: [
        {
          type: "callout",
          tone: "controversy",
          text: "ADRENAL (hydrocortisone alone, neutral mortality) and APROCCHSS (hydrocortisone plus fludrocortisone, positive mortality) are the two largest modern corticosteroid trials in septic shock, and they disagree. Plausible explanations include the added mineralocorticoid, differences in enrolled illness severity, and other protocol differences — but the honest state of the evidence is genuine disagreement between two well-conducted trials, not a resolved question where one trial should be dismissed. Current guidance (a conditional, low-certainty recommendation to use corticosteroids) reflects this unresolved tension rather than a confident universal answer.",
        },
        {
          type: "paragraph",
          text: "Neither VASST nor VANISH established an independent mortality benefit for vasopressin. The guideline-endorsed rationale for adding it — reducing norepinephrine dose requirements in escalating shock — is a physiologic and practical argument (catecholamine-sparing, potential reduction in tachyarrhythmia risk) more than a demonstrated survival benefit, and this distinction is easy to lose in shorthand teaching about \"early vasopressin.\"",
        },
      ],
    },
    {
      id: "septic-shock.pitfalls",
      kind: "controversies",
      title: "Critical Care Septic Shock Pitfalls & Practice Red Lines",
      summary: "High-yield bedside errors in septic shock including excessive fluid loading, delayed vasopressors, and 0.9% saline toxicity.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Pitfall: Continuing Fluids to Normalize Lactate", value: "Pouring liters of crystalloids into a post-resuscitation septic patient solely because lactate remains elevated; delayed lactate clearance often reflects impaired hepatic clearance, microvascular shunting, or epinephrine-induced aerobic glycolysis, while aggressive positive fluid balance increases ARDS, AKI, and 90-day mortality (CLASSIC trial)." },
            { label: "Pitfall: Delaying Vasopressors for Fluid Boluses", value: "Withholding norepinephrine until 30 mL/kg of fluid finishes in profound hypotension; early norepinephrine restores vascular tone, increases venous return (unstressed to stressed volume conversion), and protects coronary/cerebral perfusion." },
            { label: "Pitfall: High-Volume 0.9% Normal Saline", value: "Infusing large volumes of 0.9% NaCl instead of balanced crystalloids (Plasma-Lyte / Lactated Ringer's); saline induces hyperchloremic metabolic acidosis and renal vasoconstriction, increasing Major Adverse Kidney Events (SMART trial)." },
            { label: "Pitfall: Missing Occult Source Control", value: "Relying on escalating broad-spectrum antimicrobials without aggressive physical source control (draining an abscess, relieving obstructed pyelonephritis, removing infected central lines, or debriding necrotizing soft tissue)." },
            { label: "Pitfall: Universal Fixed MAP Targets", value: "Targeting a rigid MAP of 65 mmHg in chronic severe hypertension with acute oliguria, or conversely forcing MAP > 65 in elderly patients with limited cardiac reserve (2026 SSC suggests MAP 60-65 mmHg is acceptable in adults >= 65 years)." }
          ]
        }
      ]
    }
  ],
};
