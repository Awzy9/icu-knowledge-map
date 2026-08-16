import type { Topic } from "@/content-types";

export const sepsis: Topic = {
  id: "sepsis",
  slug: "sepsis",
  title: "Sepsis",
  category: "infectious-disease",
  oneLiner:
    "Life-threatening organ dysfunction caused by a dysregulated host response to infection — recognized by an acute rise in SOFA score, not by infection plus fever alone.",
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
    "Current as of the 2026 Surviving Sepsis Campaign guideline (published online March 2026, updating the 2021 SSC guideline) and the Sepsis-3 (2016) consensus definitions, which the 2026 guideline retains without revision.",
  otherReferences: [
    "Singer M, et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA. 2016;315(8):801-810.",
  ],
  relationships: [
    { type: "complication", targetId: "septic-shock", label: "Can progress to septic shock" },
    { type: "complication", targetId: "aki", label: "Common complication of sepsis" },
    { type: "complication", targetId: "dic" },
    { type: "complication", targetId: "ards", label: "Sepsis is a common ARDS trigger" },
    { type: "related-to", targetId: "vap", label: "Common nosocomial infection source" },
    { type: "related-to", targetId: "hap", label: "Common nosocomial infection source" },
    { type: "related-to", targetId: "pneumonia", label: "Leading community-acquired pulmonary source" },
    { type: "related-to", targetId: "mdr-organisms", label: "Antimicrobial resistance in nosocomial sepsis" },
  ],
  sections: [
    {
      id: "sepsis.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "sepsis-ssc2026-blood-cultures",
          relevance: "Surviving Sepsis recommendation for blood cultures prior to antimicrobial therapy"
        },
        {
          kind: "guideline",
          id: "sepsis-ssc2026-antibiotic-timing",
          relevance: "Surviving Sepsis recommendation for antimicrobial administration within 1 hour"
        },
        {
          kind: "guideline",
          id: "sepsis-ssc2026-source-control",
          relevance: "Surviving Sepsis recommendation for rapid anatomical source control"
        },
        {
          kind: "guideline",
          id: "sepsis-ssc2026-deescalation",
          relevance: "Surviving Sepsis recommendation for daily assessment and procalcitonin-guided de-escalation"
        },
        {
          kind: "trial",
          id: "sepsis-smart-trial",
          relevance: "SMART trial proving balanced crystalloids reduce 30-day mortality in sepsis"
        },
        {
          kind: "systematic-review",
          id: "sepsis-egdt-meta-analysis",
          relevance: "Systematic review and meta-analysis on early goal-directed resuscitation in sepsis"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Sepsis is organ dysfunction from infection, not infection itself — the distinction drives everything about how it's diagnosed and treated.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Sepsis is one of the most common reasons for ICU admission and a leading cause of in-hospital death. The core idea in the current (Sepsis-3) framework is that sepsis is not simply 'infection plus a fever' — it is infection that has triggered a host response severe and dysregulated enough to injure the patient's own organs, and it is that organ dysfunction, not the infection alone, that defines the syndrome and drives urgency.",
        },
        {
          type: "paragraph",
          text: "Because sepsis can arise from almost any site of infection (pulmonary, urinary, intra-abdominal, skin/soft tissue, catheter-related, and many others), management combines two parallel tracks: treating the infection itself (cultures, antimicrobials, source control) and supporting the organ systems it has destabilized. Septic shock — covered as its own topic — is the subset of sepsis with profound circulatory and cellular abnormality severe enough to substantially raise the risk of death.",
        },
      ],
    },
    {
      id: "sepsis.definition",
      kind: "definition",
      title: "Definition",
      summary: "Sepsis-3 defines sepsis as life-threatening organ dysfunction from infection, operationalized as an acute increase in SOFA score of 2 points or more.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Sepsis", value: "Suspected or confirmed infection plus an acute increase in Sequential Organ Failure Assessment (SOFA) score of ≥ 2 points." },
            { label: "qSOFA", value: "Bedside screening prompt (not a diagnostic criterion): respiratory rate ≥ 22/min, altered mentation, systolic BP ≤ 100 mmHg. Meeting ≥ 2 flags higher risk and should prompt formal assessment for organ dysfunction and infection." },
          ],
        },
        {
          type: "paragraph",
          text: "SOFA scoring requires laboratory and clinical data that are not always immediately available, which is why qSOFA exists as a quick bedside prompt — a positive qSOFA should trigger a full evaluation, not stand in as a diagnosis on its own, and a negative qSOFA does not exclude sepsis, especially early in its course.",
        },
        {
          type: "callout",
          tone: "guideline",
          text: "The Sepsis-3 definitions (2016) have not been revised by the 2026 Surviving Sepsis Campaign guideline update, which focuses on management recommendations rather than redefining the syndrome.",
        },
      ],
    },
    {
      id: "sepsis.physiology",
      kind: "physiology",
      title: "Physiology",
      summary: "A dysregulated, simultaneously pro- and anti-inflammatory host response drives endothelial injury, microvascular dysfunction, and downstream organ injury.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Infection triggers an innate immune response intended to contain the pathogen, but in sepsis this response becomes dysregulated — simultaneously excessive (cytokine release, complement activation, coagulation activation) and, later, immunosuppressed. The result is widespread endothelial injury and microvascular dysfunction: capillary leak, impaired microcirculatory flow, and mitochondrial dysfunction that can impair oxygen utilization even when systemic oxygen delivery is adequate.",
        },
        {
          type: "paragraph",
          text: "This explains several bedside observations: why sepsis can injure organs (kidneys, lungs, brain, myocardium) far from the original infection site; why elevated lactate in sepsis reflects a mix of tissue hypoperfusion, impaired cellular oxygen use, and increased aerobic glycolysis rather than hypoperfusion alone; and why fluid resuscitation and vasopressors address only part of the underlying problem.",
        },
      ],
    },
    {
      id: "sepsis.clinical-presentation",
      kind: "clinical-presentation",
      title: "Clinical Presentation",
      summary: "Presentation is defined by the combination of a plausible infection source and evidence of new organ dysfunction, which can be subtle.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "A plausible source of infection — pulmonary, urinary, abdominal, skin/soft tissue, catheter/line-related, or other — with or without a clearly localizing symptom.",
            "Signs of organ dysfunction: altered mentation, tachypnea, hypotension, oliguria, mottled skin, or new hypoxemia, which may be subtle and easy to attribute to something else early on.",
            "Fever or hypothermia, tachycardia, and leukocytosis or leukopenia are common but neither required nor sufficient for the diagnosis under Sepsis-3.",
            "Presentation varies enormously by source and host — older adults, immunosuppressed patients, and those with prior organ dysfunction may present with few classic signs despite severe illness.",
          ],
        },
        {
          type: "callout",
          tone: "caution",
          text: "A normal temperature and normal white cell count do not exclude sepsis, particularly in older or immunosuppressed patients — the organ-dysfunction criterion, not the inflammatory markers, is what defines the syndrome.",
        },
      ],
    },
    {
      id: "sepsis.diagnosis",
      kind: "diagnosis",
      title: "Diagnosis",
      summary: "Diagnosis requires identifying both a plausible infection and objective organ dysfunction; cultures and lactate are drawn early but should not delay antimicrobial therapy.",
      provenance: "guideline",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            "Use qSOFA or a similar bedside prompt to flag patients who need urgent formal assessment — it is a screening tool, not the diagnosis itself.",
            "Confirm organ dysfunction with a SOFA score (or the local equivalent), looking at respiratory, cardiovascular, hepatic, coagulation, renal, and neurologic domains.",
            "Draw blood cultures (at least two sets) as soon as possible, ideally before the first antimicrobial dose — but do not let culture collection meaningfully delay antimicrobial administration.",
            "Measure lactate; an elevated lactate supports the diagnosis and helps risk-stratify, and should be repeated serially to guide resuscitation rather than checked once.",
            "Identify the infection source with a focused history, exam, and targeted imaging — do not order a broad, undirected battery of tests.",
          ],
        },
        {
          type: "callout",
          tone: "guideline",
          text: "Blood cultures before antimicrobials is a strong SSC 2026 recommendation, but only \"as soon as possible\" and only when it does not substantially delay treatment — a patient in extremis should still receive antimicrobials promptly even if cultures are imperfectly timed.",
        },
      ],
    },
    {
      id: "sepsis.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis",
      summary: "Other causes of organ dysfunction and shock can mimic sepsis, particularly when a clear infection source is not obvious.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Non-infectious systemic inflammatory states — pancreatitis, severe trauma, burns, or major surgery can produce a similar organ-dysfunction picture without infection.",
            "Other shock states (cardiogenic, hypovolemic, obstructive) — distinguished by hemodynamic pattern and the presence or absence of a plausible infection source; see Shock and Septic Shock.",
            "Adrenal insufficiency and thyroid storm — can mimic distributive shock and should be considered when the clinical picture is atypical or refractory to usual therapy.",
            "Drug reactions and toxidromes — can produce fever, altered mentation, and hemodynamic instability without infection.",
          ],
        },
      ],
    },
    {
      id: "sepsis.management",
      kind: "management",
      title: "Management",
      summary: "Two parallel tracks: treat the infection (cultures, timely antimicrobials, source control) and support organ function — hemodynamic management of septic shock is covered separately.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Management runs on two simultaneous tracks: identifying and treating the underlying infection, and supporting whichever organ systems have been destabilized. For the hemodynamic management of septic shock specifically — fluids, vasopressors, MAP targets, corticosteroids — see the Septic Shock topic, which covers that in depth.",
        },
      ],
      children: [
        {
          id: "sepsis.management.antimicrobial-timing",
          kind: "management-subnode",
          title: "Antimicrobial Timing",
          summary: "Immediate antimicrobial therapy — ideally within 1 hour — for septic shock and for sepsis without shock.",
          provenance: "guideline",
          body: [
            {
              type: "list",
              ordered: false,
              items: [
                "Septic shock or sepsis without shock: administer antimicrobials immediately, ideally within 1 hour of recognition.",
                "Possible sepsis without shock but ongoing diagnostic uncertainty: rapid investigation with antimicrobials within 3 hours if concern for infection persists.",
                "Choose empiric coverage based on the suspected source, local resistance patterns, and patient-specific risk factors for resistant organisms.",
              ],
            },
            {
              type: "callout",
              tone: "controversy",
              text: "The 1-hour target is a strong SSC recommendation built on very-low-certainty evidence — the trials supporting a strict time cutoff (as opposed to \"promptly, after rapid assessment\") are weaker than the strength of the recommendation might suggest. See Controversies.",
            },
          ],
        },
        {
          id: "sepsis.management.source-control",
          kind: "management-subnode",
          title: "Source Control",
          summary: "Identify and control any anatomic source (abscess, obstructed viscus, infected device) within 6 hours when one exists.",
          provenance: "guideline",
          body: [
            {
              type: "paragraph",
              text: "When an anatomic source amenable to control exists — an abscess to drain, a perforated viscus to repair, an infected device to remove — source control should proceed promptly (within about 6 hours of diagnosis) rather than being deferred while antimicrobials alone are given time to work. Not every source of sepsis has a controllable anatomic lesion (e.g. many cases of pneumonia do not).",
            },
          ],
        },
        {
          id: "sepsis.management.deescalation-duration",
          kind: "management-subnode",
          title: "De-escalation and Duration",
          summary: "Narrow therapy once culture and susceptibility data return, and keep duration as short as source control and clinical response allow.",
          provenance: "guideline",
          body: [
            {
              type: "list",
              ordered: false,
              items: [
                "De-escalate to the narrowest effective antimicrobial regimen once a pathogen and susceptibilities are known.",
                "Consider de-escalation even when no pathogen is identified on final cultures, if the patient is clinically improving.",
                "Favor shorter courses when source control has been adequate; there is no single universal duration that applies to every source and organism.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "sepsis.monitoring",
      kind: "monitoring",
      title: "Monitoring",
      summary: "Trend organ function, perfusion markers, and response to source control rather than relying on a single early assessment.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Serial lactate to gauge trajectory, not a single value in isolation.",
            "Trend SOFA-relevant organ function: mental status, urine output and creatinine, oxygenation, bilirubin, platelets, coagulation.",
            "Reassess the infection source and antimicrobial choice if the patient is not improving as expected — a change in course should prompt renewed source-control assessment, not just an antibiotic change.",
            "Watch for evolving shock, which shifts management toward the hemodynamic protocol covered in Septic Shock.",
          ],
        },
      ],
    },
    {
      id: "sepsis.complications",
      kind: "complications",
      title: "Complications",
      summary: "Sepsis can injure essentially any organ system; several complications are common enough to actively anticipate.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Septic shock — the progression to circulatory and cellular/metabolic failure severe enough to substantially raise mortality risk.",
            "Acute kidney injury, from a mix of hypoperfusion, inflammatory injury, and nephrotoxin exposure (including some antimicrobials).",
            "ARDS, when the inflammatory response or a pulmonary source injures the alveolar-capillary membrane.",
            "Disseminated intravascular coagulation, from unchecked activation of the coagulation cascade.",
            "Septic cardiomyopathy / myocardial dysfunction, usually reversible over days if the patient survives the acute illness.",
            "Encephalopathy and delirium, common and often multifactorial (inflammation, sedation, metabolic derangement).",
            "Post-sepsis syndrome and ICU-acquired weakness in survivors of prolonged critical illness.",
          ],
        },
      ],
    },
    {
      id: "sepsis.guidelines",
      kind: "guidelines",
      title: "Guidelines",
      summary: "The 2026 Surviving Sepsis Campaign guideline is the current reference for sepsis management.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "The 2026 Surviving Sepsis Campaign guideline (a joint ESICM/SCCM guideline, published online March 2026, updating the 2021 version) contains 129 statements covering diagnosis, resuscitation, antimicrobial therapy, source control, and post-ICU care. It retains the Sepsis-3 definitions without revision.",
        },
      ],
    },
    {
      id: "sepsis.landmark-trials",
      kind: "landmark-trials",
      title: "Landmark Trials",
      summary: "The EGDT trilogy re-tested and ultimately ended the mandate for a fixed protocolized resuscitation algorithm, without overturning early recognition and treatment itself.",
      provenance: "systematic-review",
      body: [
        {
          type: "paragraph",
          text: "The original 2001 Rivers trial reported a large mortality benefit from a protocolized, central-line-guided early goal-directed therapy (EGDT) algorithm and strongly influenced a decade of sepsis resuscitation practice. Three large, multicenter trials a decade later — ProCESS, ARISE, and ProMISe (2014-2015) — re-tested the specific Rivers protocol against usual, unprotocolized early sepsis care and found no mortality benefit, with higher resource use in the protocolized arms. A prospectively planned individual-patient-data meta-analysis (PRISM, 2017) pooling all three confirmed no mortality benefit for the fixed protocol.",
        },
        {
          type: "callout",
          tone: "trial",
          text: "This ended the mandate for the specific 2001 algorithm (central venous catheter, ScvO2 and CVP targets) as a fixed protocol — it did not overturn the underlying principles both trial arms still received: early recognition, cultures, timely antimicrobials, and fluid resuscitation.",
          evidenceId: "sepsis-egdt-meta-analysis",
        },
      ],
    },
    {
      id: "sepsis.controversies",
      kind: "controversies",
      title: "Controversies",
      summary: "The 1-hour antimicrobial target is a strong recommendation resting on weak evidence, and applying it as a rigid quality metric has real trade-offs.",
      provenance: "guideline",
      body: [
        {
          type: "callout",
          tone: "controversy",
          text: "The evidence most directly supporting a strict 1-hour antimicrobial window (as opposed to \"promptly, after a rapid but real assessment\") is very-low-certainty, largely from observational data with a substantial risk of confounding — sicker patients may both be recognized faster and die more often for reasons unrelated to the exact minute antimicrobials were given. When a strong recommendation is built on weak evidence and then used as a fixed quality metric, it can pressure clinicians to treat empirically before diagnostic uncertainty is resolved, in patients who may not have sepsis at all. This is a genuine, actively debated tension in the 2026 guideline update, not a settled question.",
        },
      ],
    },
    {
      id: "sepsis.pitfalls",
      kind: "controversies",
      title: "Critical Care Sepsis Pitfalls & Bedside Red Lines",
      summary: "High-yield bedside errors in sepsis including antimicrobial delay, inappropriate de-escalation failure, and missing non-infectious mimics.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Pitfall: Delaying Antibiotics for Cultures", value: "Postponing empiric antimicrobials in septic shock while waiting for difficult blood cultures, lumbar puncture, or urine collection; in unstable shock, give broad-spectrum antibiotics within 1 hour even if cultures are delayed." },
            { label: "Pitfall: Neglecting Physical Source Control", value: "Relying on antimicrobial escalation to treat undrained abscesses, ascending cholangitis, infected vascular lines, or necrotizing fasciitis; antibiotics cannot sterilize necrotic tissue or obstructed viscous spaces." },
            { label: "Pitfall: Anchoring on Procalcitonin Alone", value: "Initiating or withholding antibiotics based solely on a single serum procalcitonin level without clinical context; procalcitonin is most validated for de-escalation and stopping therapy, not as a standalone rule-in diagnostic." },
            { label: "Pitfall: Failure to De-Escalate", value: "Continuing broad-spectrum anti-pseudomonal and MRSA coverage beyond 48-72 hours when sterile cultures and clinical improvement permit narrowing to pathogen-directed therapy (increases Clostridioides difficile and multidrug-resistant emergence)." },
            { label: "Pitfall: Treating Asymptomatic Bacteriuria", value: "Administering antibiotics for positive catheter urine cultures in the absence of systemic symptoms or urinary tract signs, mistaking colonization for the primary sepsis source." }
          ]
        }
      ]
    }
  ],
};
