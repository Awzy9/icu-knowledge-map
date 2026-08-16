import type { Topic } from "@/content-types";

export const shock: Topic = {
  id: "shock",
  slug: "shock",
  title: "Shock: Foundational Critical Care Framework",
  category: "cardiovascular",
  oneLiner: "Cellular dysoxia, DO2/VO2 physiology, the 4 shock phenotypes, dynamic fluid responsiveness (PLR/PPV) vs fluid tolerance (VExUS), and vasoactive pharmacology.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Shock: An Overview, Hemodynamic Monitoring, and Vasoactive Agents",
    },
    {
      title: "Vincent JL, De Backer D. Circulatory shock. N Engl J Med. 2013;369(18):1726-1734.",
    },
  ],
  currentStatus: "Foundational critical care consensus framework synthesized from international hemodynamic guidelines, the ANDROMEDA-SHOCK trial, and consensus VExUS protocols.",
  otherReferences: [
    "Hernández G, et al. Effect of a resuscitation strategy targeting peripheral perfusion status vs serum lactate on 28-day mortality among patients with septic shock (ANDROMEDA-SHOCK trial). JAMA. 2019;321(7):654-664.",
    "Monnet X, et al. Prediction of fluid responsiveness by a passive leg raising test: Systematic review and meta-analysis. Intensive Care Med. 2016;42(10):1525-1538.",
    "Beaubien-Souligny W, et al. Quantifying systemic congestion with Point-Of-Care ultrasound: development of the venous excess ultrasound grading system (VExUS). Ultrasound J. 2020;12(1):16.",
  ],
  relationships: [
    { type: "physiology", targetId: "septic-shock", label: "Distributive shock prototype" },
    { type: "physiology", targetId: "cardiogenic-shock", label: "Pump failure shock prototype" },
    { type: "physiology", targetId: "obstructive-shock", label: "Extracardiac mechanical obstruction prototype" },
    { type: "related-to", targetId: "rv-failure", label: "Right ventricular failure and venous congestion" },
    { type: "related-to", targetId: "cardiogenic-pulmonary-edema", label: "Hydrostatic congestion and low cardiac output" },
    { type: "related-to", targetId: "arrhythmias", label: "Tachy- and bradyarrhythmic shock triggers" },
    { type: "prerequisite", targetId: "aki", label: "Renal hypoperfusion and shock-induced acute kidney injury" },
    { type: "related-to", targetId: "respiratory-failure-basics", label: "Type IV respiratory failure and diaphragmatic steal" },
  ],
  sections: [
    {
      id: "shock.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "shock-guideline-esicm-consensus-2014",
          relevance: "ESICM consensus on circulatory shock and hemodynamic monitoring"
        },
        {
          kind: "trial",
          id: "shock-soap-ii-trial",
          relevance: "SOAP II trial comparing norepinephrine vs dopamine in shock"
        },
        {
          kind: "trial",
          id: "shock-andromeda-trial",
          relevance: "ANDROMEDA-SHOCK trial comparing capillary refill time vs lactate resuscitation"
        },
        {
          kind: "systematic-review",
          id: "shock-plr-meta-analysis",
          relevance: "Systematic review and meta-analysis on passive leg raise for fluid responsiveness"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Shock is acute circulatory failure resulting in inadequate cellular oxygen delivery relative to metabolic demand, producing cellular dysoxia, anaerobic metabolism, and multiorgan failure.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Circulatory shock is defined as a life-threatening, generalized maldistribution of blood flow that results in cellular dysoxia — a state where oxygen delivery (DO2) is insufficient to meet the metabolic oxygen demands (VO2) of tissues, or where cells are unable to extract and utilize oxygen due to microcirculatory and mitochondrial dysfunction. The universal biochemical consequence is anaerobic glycolysis, pyruvate conversion to lactate, ATP depletion, cellular swelling, and progressive multiorgan failure.",
        },
        {
          type: "paragraph",
          text: "A critical clinical principle in modern critical care is that hypotension (MAP < 65 mmHg) is neither required nor sufficient for the diagnosis of shock. Patients can suffer fatal cellular hypoperfusion with a normal or elevated blood pressure (cryptic shock / compensated shock) through intense peripheral vasoconstriction. Conversely, patients can have stable baseline hypotension without hypoperfusion. Management requires rapid identification of the dominant shock category, assessment of dynamic fluid responsiveness versus venous congestion/fluid tolerance, and rational titration of vasoactive agents targeting tissue perfusion rather than isolated pressure numbers.",
        },
      ],
    },
    {
      id: "shock.definition",
      kind: "definition",
      title: "The Four Classic Shock Phenotypes",
      summary: "Distributive, cardiogenic, hypovolemic, and obstructive shock — hemodynamic profiles, primary pathophysiologic defects, and initial therapeutic priorities.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Distributive Shock",
              value: "Primary defect: Severe loss of vascular vasomotor tone (pathologic systemic vasodilation) and microvascular permeability. Hemodynamics: Low SVR, normal/elevated Cardiac Output (hyperdynamic), low/normal CVP/PCWP, high or normal SvO2/ScvO2 (unless severe late shunting). Causes: Sepsis, anaphylaxis, neurogenic shock (loss of sympathetic tone from high spinal cord injury), adrenal crisis, severe pancreatitis. Primary treatment: Norepinephrine (vasoconstriction) + balanced fluid resuscitation + source control.",
            },
            {
              label: "2. Cardiogenic Shock",
              value: "Primary defect: Primary pump failure of the left, right, or both ventricles. Hemodynamics: Severely depressed Cardiac Output (CI < 2.2 L/min/m2), elevated SVR (compensatory vasoconstriction), elevated ventricular filling pressures (PCWP > 15–18 mmHg, CVP > 12 mmHg), low SvO2 (< 60%). Causes: Acute myocardial infarction, acute decompensated heart failure, severe myocarditis, acute severe mitral/aortic regurgitation, malignant arrhythmias. Primary treatment: Inotropes (dobutamine/milrinone), mechanical circulatory support, emergency revascularization; cautious fluid restriction.",
            },
            {
              label: "3. Hypovolemic Shock",
              value: "Primary defect: Critical deficit in effective circulating intravascular volume. Hemodynamics: Low Cardiac Output, high SVR, low filling pressures (CVP < 5 mmHg, PCWP < 8 mmHg), low SvO2. Causes: Hemorrhage (trauma, GI bleed), non-hemorrhagic GI losses (severe vomiting/diarrhea), renal losses (DKA, diabetes insipidus), third-spacing (burns, capillary leak). Primary treatment: Immediate volume repletion (blood products in hemorrhage per MTP 1:1:1; balanced crystalloids in non-hemorrhagic) + hemorrhage source control.",
            },
            {
              label: "4. Obstructive Shock",
              value: "Primary defect: Extracardiac mechanical barrier preventing ventricular filling or systolic ejection. Hemodynamics: Low Cardiac Output, high SVR, elevated or asymmetric filling pressures, low SvO2. Causes: Massive pulmonary embolism (RV outflow occlusion), cardiac tamponade (impaired diastolic filling of all chambers), tension pneumothorax (vena caval kinking and compression), dynamic hyperinflation / severe auto-PEEP. Primary treatment: Immediate mechanical decompression (thrombolysis/thrombectomy, pericardiocentesis, pleural thoracostomy, ventilator disconnection).",
            },
          ],
        },
      ],
    },
    {
      id: "shock.physiology",
      kind: "physiology",
      title: "Hemodynamic Formulas & Oxygen Transport Physiology",
      summary: "Mathematical relationships: MAP, Cardiac Output, SVR, CaO2, DO2, VO2, oxygen extraction ratio (O2ER), and mixed venous oxygen saturation (SvO2).",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Mastering cardiovascular physiology requires understanding the mathematical equations governing pressure, flow, resistance, and tissue oxygenation:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Mean Arterial Pressure (MAP)",
              value: "MAP = DBP + 1/3(SBP - DBP) = (CO × SVR) + CVP. Represents the perfusion pressure driving blood flow into organ capillary beds. Organ autoregulation is preserved above a MAP of 60–65 mmHg in most adults.",
            },
            {
              label: "Cardiac Output (CO) & Index (CI)",
              value: "CO = Heart Rate (HR) × Stroke Volume (SV). CI = CO / Body Surface Area (normal 2.5–4.0 L/min/m2). Stroke volume is determined by: (1) Preload (end-diastolic sarcomere length), (2) Afterload (ventricular wall stress during systole), and (3) Contractility (inotropy).",
            },
            {
              label: "Systemic Vascular Resistance (SVR)",
              value: "SVR = [(MAP - CVP) / CO] × 80. Normal is 800–1200 dyn·s·cm⁻⁵. SVR is low (< 600) in distributive shock and high (> 1400) in cardiogenic, hypovolemic, and obstructive shock.",
            },
            {
              label: "Arterial Oxygen Content (CaO2)",
              value: "CaO2 = (1.34 × [Hb] × SaO2) + (0.0031 × PaO2). Normal is 17–20 mL O2/dL blood.",
            },
            {
              label: "Oxygen Delivery (DO2)",
              value: "DO2 = CO × CaO2 × 10. Normal is ~900–1100 mL/min (~500–600 mL/min/m2). Under normal conditions, DO2 far exceeds metabolic demand.",
            },
            {
              label: "Oxygen Consumption (VO2)",
              value: "VO2 = CO × (CaO2 - Cv̄O2) × 10 (Fick Principle). Normal resting VO2 is ~200–250 mL/min (~110–160 mL/min/m2).",
            },
            {
              label: "Oxygen Extraction Ratio (O2ER)",
              value: "O2ER = VO2 / DO2 = (SaO2 - Sv̄O2) / SaO2. Normal is 0.20–0.30 (20–30%). When DO2 drops below critical threshold (DO2crit), tissues maximize O2ER up to 60–70%. Beyond this point, VO2 becomes supply-dependent, precipitating cellular anaerobic metabolism and lactic acidosis.",
            },
            {
              label: "Central Venous O2 Saturation (ScvO2 / SvO2)",
              value: "ScvO2 (from superior vena cava / internal jugular catheter, normal ≥ 70%) and SvO2 (from pulmonary artery catheter, normal ≥ 65%) reflect the balance between global DO2 and VO2. A low ScvO2 (< 65%) indicates inadequate flow (low CO, hypovolemia, anemia, or severe hypoxemia). A high ScvO2 (> 80–85%) in shock indicates cellular dysoxia and microvascular shunting with failure of cellular oxygen extraction (typical of severe septic shock or mitochondrial poisoning).",
            },
          ],
        },
      ],
    },
    {
      id: "shock.diagnosis",
      kind: "diagnosis",
      title: "Clinical Recognition: The 3 Windows of Perfusion & CRT Protocol",
      summary: "Bedside physical examination triage: the brain, kidneys, and skin windows, the ANDROMEDA-SHOCK CRT protocol, and the Skin Mottling Score.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Physical examination provides immediate, real-time assessment of tissue microcirculation through the 'Three Clinical Windows of Perfusion':",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. The Neurologic Window (Brain)",
              value: "Cerebral hypoperfusion manifests as acute agitation, restlessness, confusion, delirium, somnolence, or coma. An altered mental status in a patient with infection or trauma is an immediate marker of shock until proven otherwise.",
            },
            {
              label: "2. The Renal Window (Kidneys)",
              value: "Renal cortical hypoperfusion produces acute oliguria (< 0.5 mL/kg/hour for > 2 hours) due to decreased glomerular filtration pressure and intense sympathetic/RAAS-mediated tubular sodium and water retention.",
            },
            {
              label: "3. The Cutaneous Window (Skin & Capillaries)",
              value: "Cutaneous vasoconstriction redirects blood to core vital organs, presenting as cold, clammy extremities, delayed capillary refill time, and skin mottling.",
            },
            {
              label: "Capillary Refill Time (CRT) — ANDROMEDA Protocol",
              value: "Firmly press the ventral surface of the index finger distal phalanx with a glass microscope slide for 10 seconds until blanched, then release and record time to complete color return. Normal is < 3.0 seconds. The landmark ANDROMEDA-SHOCK RCT (Hernandez et al., JAMA 2019) demonstrated that targeting CRT normalization (< 3.0s) during resuscitation significantly improved 28-day survival and reduced organ failure compared to serial lactate-guided resuscitation.",
            },
            {
              label: "Skin Mottling Score",
              value: "Evaluates patchy violaceous discoloration around the patella: Score 0 (no mottling), Score 1 (coin-sized area at knee), Score 2 (mottling extending to middle of patella), Score 3 (mottling up to groin), Score 4 (mottling extending to upper thigh), Score 5 (mottling beyond groin). Score ≥ 4 strongly predicts 14-day mortality (> 80%).",
            },
            {
              label: "Pulse Pressure Differentiation",
              value: "Wide Pulse Pressure (SBP - DBP > 50–60 mmHg) with warm peripheries: Distributive vasodilation. Narrow Pulse Pressure (< 30–40 mmHg) with cold peripheries: Low stroke volume with intense vasoconstriction (cardiogenic/hypovolemic).",
            },
          ],
        },
        { type: "calculator-embed", calculatorId: "shock-index" },
      ],
    },
    {
      id: "shock.fluid-responsiveness",
      kind: "diagnosis",
      title: "Dynamic Fluid Responsiveness versus Fluid Tolerance (VExUS Score)",
      summary: "Passive Leg Raising (PLR), Pulse Pressure Variation (PPV), mini-fluid challenge, and point-of-care quantification of venous congestion (VExUS score).",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "In circulatory shock, administering intravenous fluids is only beneficial if the patient is on the steep, ascending limb of the Frank-Starling curve (Fluid Responsive: defined as a > 10–15% increase in stroke volume or cardiac output following a volume challenge). Only ~50% of hemodynamically unstable ICU patients are fluid responsive. Fluid given to a non-responsive patient increases venous congestion and mortality without improving perfusion.",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Passive Leg Raising (PLR) Test",
              value: "Gold-standard dynamic test. Semi-recumbent position (45° head-up) -> pivot bed to supine with legs elevated 45° for 60–90 seconds. Translocates ~300 mL of autologous blood from lower limbs and splanchnic reservoir into the central circulation. Paired with real-time stroke volume measurement (echocardiographic LVOT VTI or arterial pulse contour), a > 10% increase in stroke volume confirms fluid responsiveness (Sensitivity 92%, Specificity 95% per Monnet et al. meta-analysis). Reversible and carries zero risk of volume overload.",
            },
            {
              label: "Pulse Pressure Variation (PPV) / Stroke Volume Variation (SVV)",
              value: "PPV = [(PPmax - PPmin) / ((PPmax + PPmin)/2)] × 100. Valid ONLY if all criteria are met: (1) Invasive arterial line; (2) Fully mechanically ventilated without spontaneous breaths; (3) Tidal volume ≥ 8 mL/kg PBW; (4) Regular sinus rhythm (no arrhythmia); (5) Normal chest wall compliance. A PPV > 12–13% indicates fluid responsiveness.",
            },
            {
              label: "Mini-Fluid Challenge",
              value: "Rapid infusion of 100–150 mL of crystalloid over 1–2 minutes while continuously measuring LVOT VTI on echocardiography; an increase in VTI ≥ 5% predicts responsiveness to a full 500 mL bolus.",
            },
            {
              label: "Quantifying Venous Congestion: The VExUS Score",
              value: "Assesses systemic venous backpressure: (1) IVC diameter (> 2.0 cm indicates congestion); (2) Hepatic Vein Doppler (systolic flow reversal = severe); (3) Portal Vein Doppler (pulsatility fraction > 50% = severe); (4) Intrarenal Venous Doppler (discontinuous biphasic or monophasic diastolic-only flow = severe). VExUS Grade 3 (dilated IVC + ≥ 2 severe Doppler abnormalities) indicates high renal venous congestion and mandates fluid restriction/diuresis regardless of blood pressure.",
            },
          ],
        },
      ],
    },
    {
      id: "shock.pharmacology",
      kind: "management",
      title: "Vasoactive Drug Receptor Pharmacology & Selection",
      summary: "Comparative receptor affinities (Alpha-1, Beta-1, Beta-2, V1a, AT-1) and clinical indications for vasopressors, inotropes, and inodilators.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "Norepinephrine (First-Line Vasopressor)",
              value: "Potent Alpha-1 agonist + modest Beta-1 agonist. Produces potent peripheral vasoconstriction to restore MAP while providing mild inotropic support to preserve stroke volume. Initial dose: 0.02–0.05 mcg/kg/min, titrated to MAP ≥ 65 mmHg.",
            },
            {
              label: "Vasopressin (Second-Line Vasopressor)",
              value: "Selective Vasopressin V1a receptor agonist on vascular smooth muscle. Reverses relative vasopressin deficiency in septic shock and restores vascular responsiveness. Sparing effect on norepinephrine. Fixed dose: 0.03 units/min (not titrated).",
            },
            {
              label: "Epinephrine (Inotrope / Vasopressor)",
              value: "Potent Alpha-1, Beta-1, and Beta-2 agonist. Increases cardiac output and vascular resistance. Second-line agent in refractory septic shock or first-line in anaphylactic shock. Induces transient Type B hyperlactatemia via aerobic beta-2 stimulation.",
            },
            {
              label: "Dobutamine (Inotrope)",
              value: "Strong Beta-1 agonist + mild Beta-2 agonist. Potent inotrope that increases stroke volume and cardiac index; produces mild vasodilation (inodilator). First-line inotrope for cardiogenic shock and septic cardiomyopathy with low cardiac output (CI < 2.5). Dose: 2.5–20 mcg/kg/min.",
            },
            {
              label: "Milrinone (Inodilator)",
              value: "Phosphodiesterase-3 (PDE-3) inhibitor preventing cAMP breakdown. Increases cardiac contractility and produces profound systemic and pulmonary vasodilation. Ideal for RV failure with pulmonary hypertension. Renal clearance (accumulates in AKI; long half-life 2–4 hours). Dose: 0.125–0.75 mcg/kg/min (omit bolus to prevent acute hypotension).",
            },
            {
              label: "Phenylephrine (Pure Alpha-1)",
              value: "Pure Alpha-1 vasoconstrictor with zero beta-1 activity. Increases SVR but causes reflex bradycardia and can decrease stroke volume and cardiac output. Reserved for hyperdynamic shock with severe tachyarrhythmias.",
            },
          ],
        },
      ],
    },
    {
      id: "shock.mixed",
      kind: "differential-diagnosis",
      title: "Mixed Shock Phenotypes & Diagnostic Reassessment",
      summary: "Recognizing and managing multi-mechanism shock states: sepsis with septic cardiomyopathy, trauma with hemorrhage plus tension pneumothorax, and post-cardiac arrest syndrome.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "In clinical practice, shock frequently presents as a complex hybrid of multiple overlapping mechanisms:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Septic Shock with Septic Cardiomyopathy (Distributive + Cardiogenic): ~30–50% of septic shock patients develop acute reversible biventricular systolic dysfunction (septic cardiomyopathy) driven by circulating myocardial depressant factors (TNF-alpha, IL-1beta). These patients require norepinephrine for low SVR plus dobutamine to support low cardiac output.",
            "Trauma / Hemorrhagic Shock with Obstructive Shock: Severe blunt chest trauma frequently combines severe hypovolemic shock (pelvic/solid organ hemorrhage) with acute obstructive shock (tension pneumothorax or cardiac tamponade). Reflexively administering massive fluid without decompressing the pleural/pericardial space results in fatal PEA arrest.",
            "Post-Cardiac Arrest Syndrome (Cardiogenic + Distributive): Severe global ischemia-reperfusion injury generates both profound myocardial stunning (cardiogenic shock) and a severe systemic inflammatory response syndrome (distributive vasodilation).",
          ],
        },
      ],
    },
    {
      id: "shock.complications",
      kind: "complications",
      title: "Complications of Circulatory Shock & Resuscitation",
      summary: "End-organ ischemia, fluid overload toxicity, and catecholamine-induced adverse effects.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Disease-Related: Acute ischemic encephalopathy / coma, shock liver (ischemic hepatitis with AST/ALT > 1000–3000 IU/L), non-occlusive mesenteric ischemia (NOMI), acute tubular necrosis and anuric renal failure, disseminated intravascular coagulation (DIC).",
            "Fluid Overload Toxicity: Increased mortality, renal compartment syndrome (elevated renal venous backpressure decreasing net filtration pressure), pulmonary edema requiring prolonged mechanical ventilation, abdominal compartment syndrome (intra-abdominal pressure > 20 mmHg with new organ failure).",
            "Vasopressor-Related: Severe peripheral digital and limb necrosis, tachyarrhythmias (AFib, VT), mesenteric and myocardial ischemia, extravasation tissue necrosis.",
            "ICU-Related: Catheter-related bloodstream infections, critical illness polyneuromyopathy, delirium.",
          ],
        },
      ],
    },
    {
      id: "shock.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical mistakes to avoid in shock resuscitation.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Equating blood pressure with tissue perfusion: A patient with MAP 70 mmHg on high-dose norepinephrine who is confused, oliguric, and has cold mottled knees (CRT 6s) is in profound unresuscitated shock.",
            "Reflexively giving large crystalloid boluses to every hypotensive patient: In cardiogenic shock, massive PE, or tamponade, fluid boluses overdistend the right ventricle, worsen septal shift, and precipitate immediate circulatory arrest.",
            "Relying on CVP or single IVC diameter to guide fluid resuscitation: Static filling pressures fail to predict fluid responsiveness; use dynamic tests (Passive Leg Raise, PPV) and assess venous congestion with VExUS.",
            "Failing to recognize that hyperlactatemia during epinephrine infusion is often aerobic (Type B): Epinephrine stimulates muscle beta-2 receptors, accelerating aerobic glycolysis; do not assume rising lactate on epinephrine always indicates worsening shock.",
            "Delaying vasopressors until after full fluid completion: Early peripheral norepinephrine infusion restores diastolic perfusion pressure and venous vascular tone, preventing prolonged ischemic end-organ injury.",
          ],
        },
      ],
    },
    {
      id: "shock.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Dynamic peripheral perfusion versus lactate clearance endpoints and personalized MAP targets.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Peripheral Perfusion-Guided (CRT) vs Lactate-Guided Resuscitation: The ANDROMEDA-SHOCK trial established that Capillary Refill Time responds within minutes to changes in microcirculatory blood flow, whereas lactate clearance lags by hours. Resuscitating until CRT normalizes (< 3.0s) prevents fluid overload and reduces organ failure compared to chasing lactate normalization.",
        },
        {
          type: "paragraph",
          text: "Individualized MAP Targets: While standard guidelines target a MAP of 65 mmHg, the landmark 65 Trial (JAMA 2020) demonstrated that permissive hypotension (MAP target 60–65 mmHg) in patients aged ≥ 65 years safely reduced vasopressor exposure with no difference in mortality. In patients with chronic hypertension, higher MAP targets (75–85 mmHg) may reduce the need for renal replacement therapy.",
        },
      ],
    },
  ],
};
