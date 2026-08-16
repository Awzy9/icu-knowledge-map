import type { Topic } from "@/content-types";

export const cardiogenicPulmonaryEdema: Topic = {
  id: "cardiogenic-pulmonary-edema",
  slug: "cardiogenic-pulmonary-edema",
  title: "Acute Cardiogenic Pulmonary Edema & SCAPE",
  category: "cardiovascular",
  oneLiner: "Starling transudation mechanics, SCAPE vs chronic ADHF volume overload vs cardiogenic shock, high-dose nitrate boluses, CPAP afterload reduction, and sequential nephron blockade.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Pulmonary Edema: Cardiogenic and Noncardiogenic, and Heart Failure in the ICU",
    },
    {
      title: "Braunwald's Heart Disease: A Textbook of Cardiovascular Medicine",
      edition: "12th Edition, 2022",
    },
  ],
  currentStatus: "Current as of the 2022 AHA/ACC/HFSA Heart Failure Guidelines, the ADVOR Trial on sequential nephron blockade, and modern SCAPE resuscitation protocols.",
  otherReferences: [
    "Heidenreich PA, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation. 2022;145(18):e895-e1032.",
    "Mullens W, et al. Acetazolamide in Acute Decompensated Heart Failure with Volume Overload (ADVOR trial). N Engl J Med. 2022;387(13):1185-1195.",
    "Felker GM, et al. Diuretic strategies in patients with acute decompensated heart failure (DOSE trial). N Engl J Med. 2011;364(9):797-805.",
    "Agrawal N, et al. Sympathetic crashing acute pulmonary edema. Emerg Med Clin North Am. 2020;38(4):839-854.",
    "Gray A, et al. Noninvasive ventilation in acute cardiogenic pulmonary edema (3CPO trial). N Engl J Med. 2008;359(2):142-151.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "shock", label: "Foundational hemodynamic determinants and perfusion physiology" },
    { type: "complication", targetId: "cardiogenic-shock", label: "Progression from pulmonary congestion to forward pump failure" },
    { type: "differential", targetId: "acute-heart-failure", label: "SCAPE afterload crisis vs systemic ADHF hypervolemic congestion" },
    { type: "differential", targetId: "ards", label: "Differentiating hydrostatic transudative edema from inflammatory ARDS permeability edema" },
    { type: "related-to", targetId: "hypoxemic-respiratory-failure", label: "Primary alveolar flooding etiology of hypoxemia" },
    { type: "related-to", targetId: "arrhythmias", label: "Arrhythmogenic precipitation of acute pulmonary edema" },
    { type: "treated-with", targetId: "crrt", label: "Continuous venovenous ultrafiltration for diuretic-resistant cardiorenal overload" },
  ],
  sections: [
    {
      id: "cardiogenic-pulmonary-edema.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "ahf-guideline-aha-acc-hfsa-2022",
          relevance: "AHA/ACC/HFSA guideline on acute pulmonary congestion and vasodilators"
        },
        {
          kind: "trial",
          id: "cardiogenic-pulmonary-edema-dose-trial",
          relevance: "DOSE trial on diuretic strategies in acute heart failure and congestion"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Acute cardiogenic pulmonary edema is life-threatening alveolar flooding driven by elevated pulmonary capillary hydrostatic pressure (> 18–20 mmHg) across an intact alveolar-capillary membrane, requiring distinct pathophysiological management for afterload crises (SCAPE) vs hypervolemic overload (ADHF).",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Acute Cardiogenic Pulmonary Edema (ACPE) is a life-threatening critical care emergency characterized by rapid transudation of low-protein fluid from pulmonary capillaries into the lung interstitium and alveoli. It is driven by severe acute elevations in left ventricular end-diastolic pressure (LVEDP) and pulmonary capillary wedge pressure (PCWP > 18–20 mmHg).",
        },
        {
          type: "paragraph",
          text: "In the ICU, ACPE is fundamentally distinct from chronic systemic heart failure: (1) Sympathetic Crashing Acute Pulmonary Edema (SCAPE / flash pulmonary edema) is an acute sympathetic afterload crisis with fluid redistribution into the lungs occurring over minutes to hours, where blood pressure is severely elevated and high-dose IV vasodilators are the definitive life-saving therapy; (2) Acute Decompensated Heart Failure (ADHF) is a subacute total body fluid overload state occurring over days to weeks requiring loop diuretics; and (3) Cardiogenic Shock represents forward pump failure with systemic hypoperfusion requiring inotropes and mechanical circulatory support.",
        },
      ],
    },
    {
      id: "cardiogenic-pulmonary-edema.phenotypes",
      kind: "physiology",
      title: "Pathophysiology: SCAPE vs ADHF vs Cardiogenic Shock",
      summary: "The Starling transudation equation and the tripartite comparison matrix: SCAPE (afterload redistribution) vs ADHF (preload overload) vs Cardiogenic Shock (pump failure).",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Fluid filtration across the pulmonary microvasculature is governed by the Starling Equation: Jv = Kf · [(Pc - Pi) - σ · (πc - πi)]. In cardiogenic edema, the filtration coefficient (Kf) and reflection coefficient (σ ≈ 1.0) are normal; fluid transudation is driven purely by hydrostatic pressure (Pc) exceeding oncotic pressure (πc) and lymphatic clearance capacity.",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Sympathetic Crashing Acute Pulmonary Edema (SCAPE)",
              value: "Pathophysiology: Extreme sympathetic surge triggered by acute hypertension, myocardial ischemia, or emotional stress. Sudden severe systemic vasoconstriction spikes Systemic Vascular Resistance (SVR > 1800–2200 dynes·s/cm5), causing abrupt LV afterload mismatch, acute LVEDP elevation, and sympathetic venoconstriction that shifts 1–2 Liters of blood from the splanchnic venous reservoir directly into the pulmonary bed. Total body volume is often EUVOLEMIC. Primary therapy: High-dose IV nitroglycerin boluses + CPAP.",
            },
            {
              label: "2. Acute Decompensated Heart Failure (ADHF)",
              value: "Pathophysiology: Progressive neurohormonal (RAAS/SNS) retention of sodium and water over days to weeks. Massive total body hypervolemia with peripheral edema, hepatomegaly, ascites, and elevated JVD. Blood pressure is normal or moderately elevated. Primary therapy: IV loop diuretics + sequential nephron blockade.",
            },
            {
              label: "3. Cardiogenic Shock (Forward Failure)",
              value: "Pathophysiology: Primary myocardial contractility collapse (AMI, end-stage cardiomyopathy) resulting in profound depression of Cardiac Index (< 2.2 L/min/m2) and Cardiac Power Output (CPO < 0.6 W), accompanied by end-organ hypoperfusion (hypotension SBP < 90, lactic acidosis, cold extremities, oliguria). Primary therapy: Inotropes, vasopressors, and mechanical circulatory support (Impella/VA-ECMO).",
            },
          ],
        },
        {
          type: "paragraph",
          text: "Tripartite clinical and hemodynamic comparison matrix:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Blood Pressure / SBP",
              value: "SCAPE: Severely elevated (SBP > 180–220 mmHg) | ADHF: Normal to moderately high (SBP 110–160 mmHg) | Cardiogenic Shock: Severely depressed (SBP < 90 mmHg or MAP < 65 mmHg).",
            },
            {
              label: "Total Body Volume Status",
              value: "SCAPE: Euvolemic / Maldistributed (splanchnic-to-pulmonary fluid shift) | ADHF: Massive Total Body Hypervolemia (+5 to +15 kg fluid gain) | Cardiogenic Shock: Variable (frequently elevated PCWP with inadequate effective forward flow).",
            },
            {
              label: "Systemic Vascular Resistance (SVR)",
              value: "SCAPE: Massively Elevated (> 2000 dynes·s/cm5) | ADHF: Mildly to moderately elevated | Cardiogenic Shock: Compensatory vasoconstriction (or vasoplegia in mixed shock).",
            },
            {
              label: "Definitive First-Line Therapy",
              value: "SCAPE: High-Dose IV Nitroglycerin (boluses 400–1000 mcg) + CPAP | ADHF: IV Loop Diuretics (DOSE trial) + Acetazolamide (ADVOR trial) | Cardiogenic Shock: Inotropes (Dobutamine/Milrinone), Norepinephrine, Revascularization, MCS.",
            },
            {
              label: "High-Risk ICU Treatment Pitfall",
              value: "SCAPE: Treating primarily with high-dose loop diuretics (delays afterload reduction, worsens renal perfusion) | ADHF: Giving fluids | Cardiogenic Shock: Giving vasodilators/nitrates (precipitates immediate cardiac arrest).",
            },
          ],
        },
      ],
    },
    {
      id: "cardiogenic-pulmonary-edema.pocus",
      kind: "diagnosis",
      title: "Diagnostic Triangulation & POCUS Differentiation from ARDS",
      summary: "Bedside lung ultrasound, echocardiographic filling pressures (E/e' ratio), natriuretic peptides, and distinguishing hydrostatic from permeability edema.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Distinguishing cardiogenic pulmonary edema from non-cardiogenic ARDS is the central diagnostic task in acute hypoxemic respiratory failure with bilateral infiltrates:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Lung Ultrasound (POCUS) — Cardiogenic Profile",
              value: "B-Lines: Homogeneous, symmetrical, diffuse vertical comet-tail artifacts (B7 lines) with dependent basal predominance. Pleural Line: Smooth, thin, regular with preserved lung sliding. Pleural Effusions: Bilateral, transudative (common).",
            },
            {
              label: "Lung Ultrasound (POCUS) — ARDS Profile",
              value: "B-Lines: Patchy, heterogeneous distribution with interspersed normal 'spared areas' (A-lines). Pleural Line: Thickened, irregular, fragmented with subpleural microconsolidations and reduced/absent lung sliding.",
            },
            {
              label: "Echocardiography",
              value: "Cardiogenic: Dilated left heart chambers, regional/global systolic dysfunction or severe LV hypertrophy with elevated filling pressures (Mitral E/A > 2, tissue Doppler E/e' > 14, dilated non-collapsing IVC). ARDS: Normal LV filling pressures (E/e' < 10, collapsible IVC), RV strain / acute cor pulmonale.",
            },
            {
              label: "Biomarkers & Edema Fluid Protein Ratio",
              value: "BNP > 500 pg/mL or NT-proBNP > 1000–1800 pg/mL strongly supports cardiogenic etiology. Edema fluid to plasma protein ratio < 0.5 confirms hydrostatic transudate (ratio > 0.7 indicates ARDS exudative capillary leak).",
            },
            {
              label: "Acute Trigger Identification",
              value: "Evaluate immediately for reversible triggers: (1) Acute Coronary Syndrome / Myocardial Infarction; (2) Hypertensive Crisis / Medication non-adherence; (3) Rapid Tachyarrhythmias (Atrial Fibrillation with RVR); (4) Acute Valvular Catastrophes (Papillary muscle rupture with acute severe MR, chordal rupture, acute aortic insufficiency); (5) Severe Sepsis / Infection.",
            },
          ],
        },
      ],
    },
    {
      id: "cardiogenic-pulmonary-edema.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Flash Pulmonary Edema & SCAPE",
      summary: "Differentiate sympathetic crashing acute pulmonary edema from non-cardiogenic ARDS and severe bilateral pneumonia.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "SCAPE vs Hypervolemic Heart Failure: SCAPE is an acute sympathetic surge causing intense systemic vasoconstriction and fluid redistribution from splanchnic circulation to lungs with NORMAL total body water (requires high-dose vasodilators, not large fluid removal).",
          "Severe ARDS: Non-cardiogenic alveolar flood with PaO2/FiO2 <= 300, bilateral infiltrates, normal left atrial pressures (PAWP <= 18 mmHg).",
          "Acute Aspiration Pneumonitis: Sudden alveolar flooding following witnessed emesis or loss of consciousness; prominent bronchospasm."
]
        }
      ]
    },
    {
      id: "cardiogenic-pulmonary-edema.management",
      kind: "management",
      title: "Stepped ICU Resuscitation: High-Dose Nitrates, NIV, & Diuresis",
      summary: "High-dose IV nitroglycerin boluses for SCAPE, CPAP/BiPAP mechanics (3CPO trial), loop diuretic titration (DOSE trial), and sequential nephron blockade (ADVOR trial).",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Vasodilator Therapy & High-Dose Nitroglycerin in Severe SCAPE",
              value: "• Context-Specific Strategy: In severe, acute hypertensive pulmonary edema (SCAPE), where extreme sympathetic surge and afterload mismatch drive flash pulmonary edema, aggressive nitrate regimens (e.g. repeated IV nitroglycerin boluses of 400–1000 mcg over 1–2 minutes or rapidly titrated infusions of 50–300 mcg/min) have been described in critical care literature to swiftly reduce systemic vascular resistance and LVEDP.\n• Clinical Decision Framework: Nitrate dosing is NOT a universal fixed recipe; dosing and titration must be individualized based on continuous blood pressure monitoring, end-organ perfusion, clinical severity, and response to non-invasive ventilation.\n• Distinction Across Phenotypes:\n  - SCAPE (Severe Hypertensive Edema): Rapid afterload reduction via titrated nitrates + CPAP is the cornerstone; diuresis is secondary.\n  - ADHF (Hypervolemic / Normotensive): Modest vasodilator titration alongside loop diuretics and sequential nephron blockade.\n  - Cardiogenic Shock (Hypotension / Low Perfusion): Vasodilators are contraindicated; prioritize inotropes, vasopressors, and mechanical circulatory support.\n• Key Contraindications: Nitrates must be avoided or used with extreme caution in preload-dependent conditions (severe aortic stenosis, hypertrophic obstructive cardiomyopathy, RV infarction, phosphodiesterase-5 inhibitor use within 24–48 hours) or when SBP is borderline/low (< 100–110 mmHg).",
            },
            {
              label: "2. Non-Invasive Positive Pressure Ventilation (CPAP / BiPAP)",
              value: "• Apply CPAP (8–12 cmH2O) or BiPAP (IPAP 12–16, EPAP 6–8 cmH2O) immediately.\n• Physiological Mechanisms: (1) Decreases LV transmural systolic pressure (afterload reduction via Laplace's law); (2) Decreases right heart venous return (preload reduction); (3) Recruits flooded alveoli and improves compliance.\n• Evidence (3CPO Trial): Rapidly improves dyspnea and gas exchange, reducing intubation rates by > 60% and lowering ICU mortality.",
            },
            {
              label: "3. IV Loop Diuretic Protocol (DOSE Trial)",
              value: "For volume-overloaded patients, administer IV Furosemide at 1.0–2.5 times the patient's oral home dose (e.g., 80–160 mg IV bolus) or continuous infusion (10–20 mg/hr). The landmark DOSE trial (NEJM 2011) demonstrated that high-dose diuretic regimens achieve faster symptom relief without lasting renal harm.",
            },
            {
              label: "4. Sequential Nephron Blockade (The ADVOR Trial)",
              value: "In patients with diuretic resistance: (1) Add IV Acetazolamide 500 mg daily (ADVOR trial, NEJM 2022: blocks proximal tubular sodium/bicarbonate reabsorption, significantly increasing successful decongestion, HR 1.46); (2) Add Thiazides (IV Chlorothiazide 500 mg or PO Metolazone 2.5–5 mg) to block distal tubular Na+ compensation; (3) Initiate SGLT2 inhibitors (Empagliflozin/Dapagliflozin).",
            },
          ],
        },
        {
          type: "callout",
          tone: "caution",
          text: "Avoid routine intravenous morphine in acute pulmonary edema. Large observational registries and RCTs show morphine is associated with higher rates of endotracheal intubation, prolonged ICU stays, and increased in-hospital mortality due to respiratory depression and blunted sympathetic drive.",
        },
      ],
    },
    {
      id: "cardiogenic-pulmonary-edema.complications",
      kind: "complications",
      title: "ICU Complications & Mechanical Escalation",
      summary: "Cardiorenal syndrome type 1, respiratory muscle exhaustion, transition to cardiogenic shock, and mechanical circulatory support.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Cardiorenal Syndrome Type 1 (CRS-1): Rapid worsening of renal function driven primarily by elevated central venous pressure (renal congestion / tamponade) rather than low forward arterial flow; managed by aggressive venous decongestion.",
            "Respiratory Muscle Exhaustion & Hypercapnic Collapse: Massive increase in work of breathing leading to diaphragmatic fatigue; mandates prompt endotracheal intubation.",
            "Cardiogenic Shock Transition: Progressive loss of forward cardiac output resulting in refractory hypotension, cool clammy extremities, and rising lactic acidosis; requires inotropic support (Dobutamine, Milrinone) or temporary MCS.",
            "Myocardial Infarction Extension: Extreme myocardial oxygen demand from elevated wall tension and tachycardia triggering secondary subendocardial ischemia.",
          ],
        },
      ],
    },
    {
      id: "cardiogenic-pulmonary-edema.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "High-risk mistakes in managing acute cardiogenic pulmonary edema.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Relying on loop diuretics alone in hypertensive SCAPE: SCAPE is an afterload crisis, not a volume problem; furosemide takes 30–60 minutes to induce diuresis while high-dose nitrates relieve pulmonary capillary flooding within 5 minutes.",
            "Administering IV Morphine: Morphine increases intubation rates, ICU length of stay, and mortality; use high-dose nitrates and NIV instead.",
            "Withholding NIV in patients with severe respiratory distress: CPAP/BiPAP immediately unloads the failing left ventricle and recruits flooded alveoli, preventing emergency intubation in > 60% of cases.",
            "Misdiagnosing SCAPE as ARDS or pneumonia: Look for severe hypertension, symmetric B-lines, smooth pleural lines, and high E/e' ratio on bedside POCUS.",
            "Continuing vasodilators when SBP drops < 90–100 mmHg: Inadvertent conversion into cardiogenic shock; immediately discontinue nitrates and initiate inotropes/vasopressors.",
          ],
        },
      ],
    },
    {
      id: "cardiogenic-pulmonary-edema.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "CPAP vs BiPAP in Acute Cardiogenic Pulmonary Edema (The 3CPO Trial).",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "CPAP vs BiPAP in ACPE (The 3CPO Trial): The landmark 3CPO trial (NEJM 2008) demonstrated that both CPAP and BiPAP provide identical, rapid improvements in physiological dyspnea and acidosis without a significant difference in 7-day mortality. Continuous Positive Airway Pressure (CPAP at 8–10 cmH2O) is simpler and preferred as initial therapy, while Bilevel Positive Airway Pressure (BiPAP) is specifically indicated for patients with concurrent acute hypercapnic respiratory acidosis (pH < 7.30, PaCO2 > 45 mmHg) or underlying COPD.",
        },
      ],
    },
  ],
};
