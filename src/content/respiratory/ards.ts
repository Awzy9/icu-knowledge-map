import type { Topic } from "@/content-types";

export const ards: Topic = {
  id: "ards",
  slug: "ards",
  title: "Acute Respiratory Distress Syndrome",
  shortName: "ARDS",
  category: "respiratory",
  oneLiner:
    "Acute, diffuse inflammatory lung injury causing hypoxemia and bilateral infiltrates not fully explained by cardiac failure or fluid overload.",
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
    "Current as of the 2024 Global Definition of ARDS, the 2023 ESICM ARDS guideline, and landmark trials through DEXA-ARDS (2020). The 2017 ATS/ESICM/SCCM guideline is retained where the 2023 ESICM update did not revisit a recommendation (e.g. low tidal volume, prone positioning).",
  otherReferences: [
    "ARDS Definition Task Force. Berlin Definition of ARDS. JAMA 2012.",
    "Matthay MA, et al. A New Global Definition of Acute Respiratory Distress Syndrome. Am J Respir Crit Care Med. 2024;209(1):37-47.",
  ],
  relationships: [
    { type: "treated-with", targetId: "mechanical-ventilation", label: "Lung-protective ventilation" },
    { type: "complication", targetId: "pneumothorax", label: "Barotrauma" },
    { type: "complication", targetId: "vap" },
    { type: "complication", targetId: "rv-failure", label: "Acute cor pulmonale" },
    { type: "differential", targetId: "cardiogenic-pulmonary-edema" },
    { type: "prerequisite", targetId: "respiratory-failure-basics" },
    { type: "related-to", targetId: "hypoxemic-respiratory-failure", label: "Primary hypoxemic failure etiology" },
    { type: "related-to", targetId: "sepsis", label: "Common indirect trigger" },
    { type: "related-to", targetId: "pneumonia", label: "Leading direct infectious trigger" },
  ],
  sections: [
    {
      id: "ards.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "ards-guideline-low-tidal-volume",
          relevance: "Low tidal volume ventilation guideline recommendation (6 mL/kg PBW)"
        },
        {
          kind: "guideline",
          id: "ards-guideline-higher-peep",
          relevance: "Higher vs lower PEEP titration in moderate-to-severe ARDS"
        },
        {
          kind: "guideline",
          id: "ards-guideline-prone-positioning",
          relevance: "Prone positioning recommendation in severe ARDS (PaO2/FiO2 < 150)"
        },
        {
          kind: "guideline",
          id: "ards-guideline-esicm-2023-peep",
          relevance: "ESICM 2023 guideline on PEEP and recruitment maneuvers"
        },
        {
          kind: "guideline",
          id: "ards-guideline-esicm-2023-nmb",
          relevance: "ESICM 2023 guideline on neuromuscular blockade in early severe ARDS"
        },
        {
          kind: "guideline",
          id: "ards-guideline-esicm-2023-recruitment-maneuvers",
          relevance: "ESICM 2023 recommendation against routine staircase recruitment maneuvers"
        },
        {
          kind: "trial",
          id: "ards-arma",
          relevance: "Landmark ARMA trial establishing 6 mL/kg lung-protective ventilation"
        },
        {
          kind: "trial",
          id: "ards-proseva",
          relevance: "PROSEVA landmark trial proving prone positioning reduces 28-day mortality"
        },
        {
          kind: "trial",
          id: "ards-acurasys",
          relevance: "ACURASYS trial evaluating early cisatracurium infusion in severe ARDS"
        },
        {
          kind: "trial",
          id: "ards-rose",
          relevance: "ROSE trial showing early NMB without deep sedation does not reduce mortality"
        },
        {
          kind: "trial",
          id: "ards-eolia",
          relevance: "EOLIA trial evaluating early venovenous ECMO in very severe ARDS"
        },
        {
          kind: "trial",
          id: "ards-art",
          relevance: "ART trial showing lung recruitment with decremental PEEP titration increased mortality"
        },
        {
          kind: "trial",
          id: "ards-alveoli",
          relevance: "ALVEOLI trial showing higher vs lower PEEP yielded similar overall mortality"
        },
        {
          kind: "trial",
          id: "ards-factt",
          relevance: "FACTT trial demonstrating fluid-conservative management increases ventilator-free days"
        },
        {
          kind: "trial",
          id: "ards-dexa-ards",
          relevance: "DEXA-ARDS trial showing early dexamethasone reduces ventilator days and mortality"
        },
        {
          kind: "systematic-review",
          id: "ards-nmb-meta-analysis",
          relevance: "Systematic review and meta-analysis of neuromuscular blockade in ARDS"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "A common final pathway for many different insults to the alveolar-capillary membrane.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "ARDS is not a single disease but a shared endpoint: pneumonia, sepsis, aspiration, trauma, transfusion, and pancreatitis can all injure the alveolar-capillary membrane in the same way, producing acute hypoxemic respiratory failure with a common radiographic and physiologic picture regardless of what triggered it.",
        },
        {
          type: "paragraph",
          text: "It is one of the more common reasons for mechanical ventilation in the ICU, and its severity — and the risk that goes with it — varies considerably from patient to patient. There is no single drug or procedure that reverses the underlying injury; management is almost entirely about protecting the lung from additional, iatrogenic injury while the triggering illness is treated, which is why the Management section below is the largest part of this topic.",
        },
      ],
    },
    {
      id: "ards.definition",
      kind: "definition",
      title: "Definition",
      summary: "The Berlin Definition frames ARDS by timing, imaging, the origin of edema, and oxygenation.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "ARDS is defined by four elements that must all be present together, rather than by any single lab value: an acute timeline, characteristic imaging, exclusion of a purely cardiac cause, and a defined degree of hypoxemia measured under standardized ventilator conditions.",
        },
        {
          type: "key-value-table",
          rows: [
            { label: "Timing", value: "Onset within 1 week of a known clinical insult or new/worsening respiratory symptoms." },
            { label: "Imaging", value: "Bilateral opacities on chest X-ray or CT, not fully explained by effusions, lobar collapse, or nodules." },
            { label: "Origin of edema", value: "Respiratory failure not fully explained by cardiac failure or fluid overload; requires objective assessment (e.g. echocardiography) if no clear risk factor is present." },
            { label: "Oxygenation", value: "Graded by PaO2/FiO2 ratio measured at PEEP ≥ 5 cmH2O (see Severity)." },
          ],
        },
        {
          type: "paragraph",
          text: "ARDS is a clinical syndrome with many possible triggers — pneumonia, sepsis, aspiration, trauma, transfusion, and pancreatitis are among the most common — rather than a single disease with one cause.",
        },
        {
          type: "callout",
          tone: "guideline",
          text: "The table above is the 2012 Berlin Definition, which remains the framework nearly every major ARDS trial (ARMA through DEXA-ARDS) was designed and interpreted against. A 2024 Global Definition of ARDS built on Berlin rather than replacing its logic — see below for what it changes.",
        },
        {
          type: "paragraph",
          text: "The 2024 Global Definition of ARDS extends the same four-element framework to patients who are not yet intubated and to settings without arterial blood gas or standardized ventilator access. It adds a non-intubated ARDS category (PaO2/FiO2 ≤ 300, or SpO2/FiO2 ≤ 315 when SpO2 ≤ 97%, on high-flow nasal oxygen ≥ 30 L/min or noninvasive ventilation/CPAP ≥ 5 cmH2O), permits SpO2/FiO2 as an alternative to PaO2/FiO2 throughout, and adds a resource-variable category for settings without reliable PEEP delivery or blood gas access (SpO2/FiO2 ≤ 315, with neither a minimum PEEP nor a flow-rate requirement). Bilateral opacities may be assessed by lung ultrasound as well as chest X-ray or CT under the 2024 definition.",
        },
        {
          type: "callout",
          tone: "caution",
          text: "This content uses Berlin terminology and PaO2/FiO2 thresholds as the primary framework, since that is what the cited trials and the 2017/2023 ventilation guidelines were built around, and adds the 2024 Global Definition's SpO2/FiO2 and non-intubated criteria alongside it — the two are not in conflict, but a chart or trial that says \"ARDS\" without specifying which definition was applied should be read as Berlin unless stated otherwise.",
        },
      ],
    },
    {
      id: "ards.physiology",
      kind: "physiology",
      title: "Physiology",
      summary: "Diffuse alveolar damage produces shunt physiology and a heterogeneous, poorly compliant lung.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "The pathologic correlate of early ARDS is diffuse alveolar damage: capillary leak floods alveoli with protein-rich edema fluid, surfactant function is disrupted, and alveoli collapse or fill with exudate. The result is a lung that is not uniformly stiff but heterogeneous — some regions remain relatively normal while others are fully consolidated or collapsed, so a single tidal volume is distributed disproportionately into the smaller aerated portion of the lung (sometimes described as a functionally 'baby lung').",
        },
        {
          type: "paragraph",
          text: "Two physiologic consequences follow directly. First, perfused-but-unventilated alveoli create intrapulmonary shunt, producing hypoxemia that resists supplemental oxygen and instead requires alveolar recruitment. Second, because the aerated lung volume is small, a tidal volume that seems modest relative to total body size can still overdistend the aerated regions, causing ventilator-induced lung injury — the physiologic rationale for low tidal volume ventilation.",
        },
        {
          type: "callout",
          tone: "guideline",
          text: "See the Physiology section for two standalone concepts this topic depends on: the Oxygen Delivery Equation and Ventilation-Perfusion Mismatch and Shunt.",
        },
      ],
    },
    {
      id: "ards.clinical-presentation",
      kind: "clinical-presentation",
      title: "Clinical Presentation",
      summary: "Acute dyspnea and hypoxemia in a patient with a recognized risk factor, evolving over hours to days.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Acute onset of dyspnea and hypoxemia, typically within a week of a known risk factor (pneumonia, sepsis, aspiration, trauma, transfusion, pancreatitis).",
            "Tachypnea and increased work of breathing; findings can be subtle early and progress quickly.",
            "Diffuse crackles on auscultation, though the exam can be relatively unremarkable in early or mild disease.",
            "No single exam finding is specific to ARDS — the presentation overlaps substantially with its differential diagnoses (see below).",
          ],
        },
        {
          type: "callout",
          tone: "caution",
          text: "The absence of volume-overload signs (jugular venous distension, peripheral edema, an S3) argues against a purely cardiogenic cause but does not exclude ARDS coexisting with a cardiac contribution — the two are not mutually exclusive.",
        },
      ],
    },
    {
      id: "ards.diagnosis",
      kind: "diagnosis",
      title: "Diagnosis",
      summary: "Diagnosis is clinical: apply the Berlin criteria and actively exclude a cardiac cause.",
      provenance: "guideline",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            "Confirm the timing criterion: new or worsening respiratory symptoms within 1 week of a recognized risk factor.",
            "Review chest imaging for bilateral opacities not better explained by effusion, collapse, or nodules.",
            "Actively assess for a cardiac cause — clinical exam, BNP/NT-proBNP, and echocardiography when there is no obvious risk factor for ARDS or when the picture is ambiguous.",
            "Calculate the PaO2/FiO2 ratio at PEEP ≥ 5 cmH2O to grade severity once the syndromic diagnosis is met.",
          ],
        },
        {
          type: "callout",
          tone: "caution",
          text: "Volume overload and cardiogenic edema are the most common diagnostic pitfalls — they can produce bilateral opacities and hypoxemia that superficially mimic ARDS. Objective assessment of cardiac function is required whenever the cause is not obvious.",
        },
      ],
    },
    {
      id: "ards.severity",
      kind: "severity",
      title: "Severity",
      summary: "Berlin severity is graded by PaO2/FiO2 ratio at PEEP ≥ 5 cmH2O, and should be reassessed after optimization.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Mild", value: "PaO2/FiO2 200-300 (SpO2/FiO2 235-315 under the 2024 Global Definition)" },
            { label: "Moderate", value: "PaO2/FiO2 100-200 (SpO2/FiO2 148-235)" },
            { label: "Severe", value: "PaO2/FiO2 ≤ 100 (SpO2/FiO2 ≤ 148)" },
          ],
        },
        {
          type: "paragraph",
          text: "Severity is not fixed at diagnosis — a patient classified as moderate on presentation may reclassify as severe or mild after PEEP and FiO2 are optimized over the first hours, and re-grading at that point is what should drive decisions like prone positioning.",
        },
        {
          type: "callout",
          tone: "guideline",
          text: "The management evidence below (low tidal volume, PEEP, prone positioning, neuromuscular blockade) was generated using Berlin/PaO2-FiO2-defined severity. SpO2/FiO2 bands from the 2024 Global Definition are a validated proxy, not a separately trial-tested severity scale — treat them as approximate when they diverge from a directly measured PaO2/FiO2.",
        },
        { type: "calculator-embed", calculatorId: "pao2-fio2-ratio" },
      ],
    },
    {
      id: "ards.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis",
      summary: "Conditions that can mimic the Berlin criteria and should be considered before settling on ARDS.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Cardiogenic pulmonary edema — the most common mimic; look for volume-overload signs and consider echocardiography or a BNP.",
            "Diffuse alveolar hemorrhage — consider with hemoptysis, a falling hematocrit, or a known bleeding diathesis or vasculitis.",
            "Acute eosinophilic pneumonia — a rapidly progressive presentation, sometimes with peripheral or bronchoalveolar-lavage eosinophilia.",
            "Acute interstitial pneumonia (Hamman-Rich syndrome) — a diffuse alveolar damage pattern without an identifiable ARDS risk factor.",
            "Drug-induced lung injury — review the medication list for known culprits.",
            "Transfusion-related acute lung injury (TRALI) — onset within hours of a blood product transfusion.",
          ],
        },
      ],
    },
    {
      id: "ards.management",
      kind: "management",
      title: "Management",
      summary: "Supportive care built around lung-protective ventilation, with escalation based on severity.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "There is no therapy that reverses the underlying alveolar injury of ARDS; management is supportive, aimed at maintaining gas exchange while avoiding ventilator-induced lung injury until the lung recovers or the precipitating illness resolves. Treating the underlying cause (e.g. source control for sepsis) runs in parallel and is equally essential.",
        },
      ],
      children: [
        {
          id: "ards.management.lung-protective-ventilation",
          kind: "management-subnode",
          title: "Lung-Protective Ventilation",
          summary: "Low tidal volume with a plateau pressure ceiling is the foundational intervention in ARDS.",
          provenance: "trial",
          body: [
            {
              type: "list",
              ordered: false,
              items: [
                "Target tidal volume approximately 6 mL/kg predicted body weight (range 4-8 mL/kg).",
                "Keep plateau pressure ≤ 30 cmH2O, reducing tidal volume further if needed to stay under this ceiling.",
                "Applies broadly across ARDS severity, not only to severe disease.",
              ],
            },
            {
              type: "callout",
              tone: "trial",
              text: "Grounded in the ARMA (ARDSNet) trial, which showed a mortality reduction with 6 mL/kg vs 12 mL/kg ventilation.",
              evidenceId: "ards-arma",
            },
          ],
        },
        {
          id: "ards.management.peep",
          kind: "management-subnode",
          title: "PEEP Titration",
          summary: "Higher PEEP without a recruitment maneuver is favored in moderate-to-severe ARDS; driving pressure helps judge whether it's helping or overdistending the lung.",
          provenance: "guideline",
          body: [
            {
              type: "paragraph",
              text: "PEEP recruits collapsed alveoli and reduces shunt, but excessive PEEP can overdistend already-aerated regions and worsen driving pressure. Current guidance conditionally favors a higher-PEEP strategy without a formal recruitment maneuver over a lower-PEEP strategy in moderate-to-severe ARDS, titrated against oxygenation and mechanics rather than fixed at one number for every patient.",
            },
            {
              type: "callout",
              tone: "trial",
              text: "ALVEOLI found no difference in mortality or ventilator-free days between fixed higher- and lower-PEEP protocols in an unselected ALI/ARDS population — the guideline's preference for higher PEEP rests on later severity-stratified analyses, not on ALVEOLI's own null result.",
              evidenceId: "ards-alveoli",
            },
            {
              type: "callout",
              tone: "caution",
              text: "The 2023 ESICM guideline strongly recommends against prolonged, aggressive lung recruitment maneuvers in moderate-to-severe ARDS — see Landmark Trials for the ART trial, which found higher mortality with an aggressive recruitment-plus-titrated-PEEP protocol.",
            },
            { type: "calculator-embed", calculatorId: "driving-pressure" },
          ],
        },
        {
          id: "ards.management.fluid-management",
          kind: "management-subnode",
          title: "Fluid Management",
          summary: "Once shock has resolved, a conservative fluid strategy shortens time on the ventilator without changing 60-day mortality.",
          provenance: "trial",
          body: [
            {
              type: "list",
              ordered: false,
              items: [
                "Once a patient is no longer in shock requiring vasopressors, target an even-to-negative fluid balance rather than a net-positive one.",
                "Does not apply to the initial resuscitation/shock phase, when adequate perfusion still takes priority over fluid restriction.",
                "Benefit is functional (ventilator-free days, ICU length of stay), not a demonstrated mortality reduction.",
              ],
            },
            {
              type: "callout",
              tone: "trial",
              text: "Grounded in FACTT, which found more ventilator-free days and a shorter ICU stay with a conservative fluid strategy after shock resolution, without an increase in shock or new renal replacement therapy — but no significant difference in 60-day mortality.",
              evidenceId: "ards-factt",
            },
          ],
        },
        {
          id: "ards.management.prone-positioning",
          kind: "management-subnode",
          title: "Prone Positioning",
          summary: "Early, prolonged proning improves survival in severe ARDS (PaO2/FiO2 < 150).",
          provenance: "trial",
          body: [
            {
              type: "list",
              ordered: false,
              items: [
                "Reserve for severe ARDS: PaO2/FiO2 < 150 despite optimized ventilation.",
                "Sessions of at least 16 hours per day, started early rather than as a late rescue measure.",
                "Requires a team experienced in safe positioning and airway/line management while prone.",
              ],
            },
          ],
          children: [
            {
              id: "ards.management.prone-positioning.indications",
              kind: "management-subnode",
              title: "Indications",
              summary: "Severe, persistent hypoxemia despite an optimized lung-protective strategy.",
              provenance: "textbook",
              body: [
                {
                  type: "paragraph",
                  text: "PaO2/FiO2 below 150 that persists despite lung-protective ventilation, adequate PEEP, and a reasonable trial of optimization — this is the population in which the mortality benefit has actually been demonstrated, not a general therapy for any hypoxemic patient.",
                },
              ],
            },
            {
              id: "ards.management.prone-positioning.patient-selection",
              kind: "management-subnode",
              title: "Patient Selection",
              summary: "Confirm the airway, lines, and hemodynamics can tolerate safe turning before proceeding.",
              provenance: "textbook",
              body: [
                {
                  type: "paragraph",
                  text: "Before turning, confirm the airway is secure, central and arterial lines are unlikely to dislodge, and the patient is hemodynamically stable enough to tolerate the maneuver. Obesity alone is not a contraindication but does require extra staff and appropriate equipment.",
                },
              ],
            },
            {
              id: "ards.management.prone-positioning.duration",
              kind: "management-subnode",
              title: "Duration",
              summary: "Sessions of at least 16 hours, reassessed daily against oxygenation once supine.",
              provenance: "textbook",
              body: [
                {
                  type: "paragraph",
                  text: "Each proning session should last at least 16 consecutive hours. Oxygenation is reassessed after a period back supine; proning is generally stopped once oxygenation is sustained (PaO2/FiO2 above roughly 150) supine with modest PEEP and FiO2 across multiple attempts.",
                },
              ],
            },
            {
              id: "ards.management.prone-positioning.contraindications",
              kind: "management-subnode",
              title: "Contraindications",
              summary: "Situations where turning itself carries unacceptable risk.",
              provenance: "textbook",
              body: [
                {
                  type: "list",
                  ordered: false,
                  items: [
                    "Unstable spine injury.",
                    "Open abdomen or recent abdominal surgery.",
                    "Elevated intracranial pressure.",
                    "Recent tracheal surgery or facial trauma.",
                    "Hemodynamic instability that makes turning unsafe.",
                  ],
                },
              ],
            },
            {
              id: "ards.management.prone-positioning.complications",
              kind: "management-subnode",
              title: "Complications",
              summary: "Mostly positioning-related, not a consequence of the physiology itself.",
              provenance: "textbook",
              body: [
                {
                  type: "list",
                  ordered: false,
                  items: [
                    "Facial and airway edema.",
                    "Pressure injuries at the face, chest, and knees.",
                    "Transient desaturation or hemodynamic changes during the turn itself.",
                    "Endotracheal tube or line displacement.",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "ards.management.neuromuscular-blockade",
          kind: "management-subnode",
          title: "Neuromuscular Blockade",
          summary: "No longer used routinely — reserved for refractory dyssynchrony or hypoxemia despite adequate sedation.",
          provenance: "trial",
          body: [
            {
              type: "paragraph",
              text: "Early continuous neuromuscular blockade was once used routinely in severe ARDS based on an adjusted mortality benefit in ACURASYS. The larger, more contemporary ROSE trial — using a lighter-sedation comparator — found no mortality benefit, and current practice reserves neuromuscular blockade for patients with severe ventilator dyssynchrony or refractory hypoxemia despite adequate sedation, rather than applying it by default.",
            },
            {
              type: "callout",
              tone: "controversy",
              text: "ACURASYS and ROSE reached different conclusions about the same intervention — see Controversies for why, and note that they used different sedation strategies in their comparator arms.",
            },
            {
              type: "callout",
              tone: "guideline",
              text: "The 2023 ESICM guideline still conditionally suggests neuromuscular blockade in early, severe ARDS, explicitly on low-certainty evidence — a guideline position that has not simply followed ROSE's neutral result, illustrating that a guideline's recommendation and a single trial's outcome are not the same thing.",
            },
          ],
        },
        {
          id: "ards.management.corticosteroids",
          kind: "management-subnode",
          title: "Corticosteroids",
          summary: "Dexamethasone showed a large mortality benefit in one moderate-sized, single-country trial — promising but not yet a uniformly guideline-mandated therapy.",
          provenance: "trial",
          body: [
            {
              type: "list",
              ordered: false,
              items: [
                "Not currently the subject of a strong, graded recommendation from the 2017 ATS/ESICM/SCCM or 2023 ESICM guidelines.",
                "Evidence is strongest for early, moderate-to-severe, non-COVID ARDS, using the specific dexamethasone dose and duration tested in DEXA-ARDS.",
                "Use varies by institution — this is an evolving area, not a settled standard of care.",
              ],
            },
            {
              type: "callout",
              tone: "trial",
              text: "DEXA-ARDS (single-country, stopped early for slow recruitment rather than for benefit) found dexamethasone increased ventilator-free days and reduced 60-day mortality (21% vs 36%) in moderate-to-severe ARDS. It has not been replicated by an equivalently powered multinational confirmatory trial.",
              evidenceId: "ards-dexa-ards",
            },
            {
              type: "callout",
              tone: "caution",
              text: "This trial excluded COVID-19-related ARDS. Its result should not be conflated with the separate, much larger evidence base for dexamethasone in COVID-19 respiratory failure.",
            },
          ],
        },
        {
          id: "ards.management.rescue-therapies",
          kind: "management-subnode",
          title: "Rescue Therapies",
          summary: "ECMO is reserved for very severe, refractory hypoxemia at experienced centers.",
          provenance: "trial",
          body: [
            {
              type: "paragraph",
              text: "For very severe ARDS refractory to lung-protective ventilation, PEEP optimization, and proning, venovenous ECMO can maintain gas exchange while avoiding further ventilator-induced injury. It is resource-intensive and is positioned as a rescue option at experienced centers rather than a first-line therapy.",
            },
          ],
        },
      ],
    },
    {
      id: "ards.monitoring",
      kind: "monitoring",
      title: "Monitoring",
      summary: "What to trend day to day: ventilator mechanics, gas exchange, hemodynamics, and readiness to wean.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Ventilator mechanics: plateau pressure, driving pressure, and compliance, trended over time rather than checked once.",
            "Gas exchange: arterial blood gases and PaO2/FiO2, reassessed after any change to PEEP or FiO2.",
            "Hemodynamics: particularly important around proning and high-PEEP titration, both of which can affect venous return and right ventricular afterload.",
            "Sedation and analgesia depth, especially if neuromuscular blockade is in use.",
            "Daily assessment for readiness to reduce support once oxygenation and mechanics are improving.",
          ],
        },
        {
          type: "callout",
          tone: "caution",
          text: "Specific monitoring targets and protocols vary by institution — confirm against local ICU protocol rather than treating the items above as fixed thresholds.",
        },
      ],
    },
    {
      id: "ards.complications",
      kind: "complications",
      title: "Complications",
      summary: "Both the disease and its treatment carry complication risk.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Barotrauma, including pneumothorax, from high airway pressures or underlying lung fragility.",
            "Ventilator-associated pneumonia from prolonged intubation.",
            "ICU-acquired weakness, compounded by immobility, deep sedation, and neuromuscular blockade.",
            "Fibroproliferative changes in a subset of patients with prolonged ARDS, contributing to persistent restrictive physiology.",
            "Right ventricular strain from hypoxic vasoconstriction and elevated intrathoracic pressure at high PEEP.",
          ],
        },
      ],
    },
    {
      id: "ards.guidelines",
      kind: "guidelines",
      title: "Guidelines",
      summary: "The 2023 ESICM guideline is the current reference for PEEP/recruitment strategy and neuromuscular blockade; the 2017 ATS/ESICM/SCCM guideline remains current where 2023 did not revisit a recommendation.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "The 2023 ESICM guideline updated ARDS ventilation guidance: it conditionally favors higher PEEP without a formal recruitment maneuver over lower PEEP in moderate-to-severe ARDS, strongly recommends against prolonged/aggressive recruitment maneuvers, and conditionally suggests neuromuscular blockade in early severe ARDS on low-certainty evidence. Recommendations it did not revisit — strong recommendations for low tidal volume ventilation and for prone positioning in severe disease, and against routine high-frequency oscillatory ventilation — remain as stated in the 2017 ATS/ESICM/SCCM guideline.",
        },
      ],
    },
    {
      id: "ards.landmark-trials",
      kind: "landmark-trials",
      title: "Landmark Trials",
      summary: "Nine trials that define current ARDS management, spanning ventilation, PEEP strategy, fluid management, positioning, sedation, steroids, and rescue therapy.",
      provenance: "trial",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "ARMA (ARDSNet, 2000) — established low tidal volume ventilation.",
            "ALVEOLI (2004) — found no difference between fixed higher- and lower-PEEP protocols in an unselected population.",
            "FACTT (2006) — established conservative fluid management after shock resolution shortens ventilator time, without a mortality difference.",
            "ACURASYS (2010) — reported an adjusted mortality benefit with early neuromuscular blockade.",
            "PROSEVA (2013) — established early, prolonged prone positioning in severe ARDS.",
            "ART (2017) — found higher mortality with an aggressive lung recruitment and titrated-PEEP strategy compared with a conventional low-PEEP approach.",
            "EOLIA (2018) — tested early ECMO in very severe ARDS; primary endpoint not significant, interpretation complicated by crossover.",
            "ROSE (2019) — found no mortality benefit with routine early neuromuscular blockade, contradicting ACURASYS.",
            "DEXA-ARDS (2020) — a single-country trial reporting a large mortality benefit with early dexamethasone in moderate-to-severe ARDS, not yet confirmatory-trial-replicated.",
          ],
        },
      ],
    },
    {
      id: "ards.recent-evidence",
      kind: "recent-evidence",
      title: "Recent Evidence",
      summary: "Meta-analysis of neuromuscular blockade trials illustrates why pooling trials with different comparator strategies is difficult.",
      provenance: "systematic-review",
      body: [
        {
          type: "paragraph",
          text: "A pooled analysis of neuromuscular blockade trials in ARDS found no clear overall mortality benefit, with the estimate highly sensitive to the sedation strategy used in each trial's comparator arm — a reminder that meta-analysis cannot fully resolve a question when the underlying trials are not testing quite the same clinical strategy.",
        },
      ],
    },
    {
      id: "ards.controversies",
      kind: "controversies",
      title: "Controversies",
      summary: "Neuromuscular blockade is the clearest example of contradictory trial evidence in ARDS management.",
      provenance: "trial",
      body: [
        {
          type: "callout",
          tone: "controversy",
          text: "ACURASYS (2010) reported an adjusted mortality benefit with routine early paralysis under deep sedation. ROSE (2019), a larger and more contemporary trial that used a lighter-sedation comparator, found no benefit. The discrepancy is best explained by differences in the comparator strategy — light sedation with as-needed paralysis is itself protective — rather than by one trial being simply 'right' and the other 'wrong'. Current practice has shifted away from routine paralysis toward reserving it for refractory cases.",
        },
        {
          type: "paragraph",
          text: "A second live question is how to interpret EOLIA: its primary mortality endpoint was not statistically significant, yet substantial crossover from the control arm to ECMO makes a strict intention-to-treat reading potentially misleading. Guidelines have generally chosen to support ECMO as a rescue option in very severe ARDS despite the formally null primary result — a case where trial statistics and clinical interpretation diverge.",
        },
      ],
    },
  ],
};
