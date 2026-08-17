import type { Topic } from "@/content-types";

export const valvularHeartDiseaseEndocarditis: Topic = {
  id: "valvular-heart-disease-endocarditis",
  slug: "valvular-heart-disease-endocarditis",
  title: "Valvular Heart Disease & Infective Endocarditis in the ICU",
  category: "cardiovascular",
  oneLiner: "Critical AS, acute AR/MR mechanics, prosthetic valve emergencies, and infective endocarditis with multidisciplinary surgical triggers.",
  status: "complete",
  lastReviewed: "2026-08-17",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapter on Valvular Heart Disease and Critical Infective Endocarditis",
    },
    {
      title: "Braunwald's Heart Disease: A Textbook of Cardiovascular Medicine",
      edition: "12th Edition, 2022",
      note: "Chapters on Valvular Heart Disease and Infective Endocarditis",
    },
  ],
  currentStatus: "Current as of the 2020 ACC/AHA Valvular Heart Disease Guidelines, the 2021 ESC/EACTS Guidelines on Valvular Heart Disease, the 2023 ESC Infective Endocarditis Guidelines, and the EASE Landmark Trial.",
  otherReferences: [
    "Otto CM, et al. 2020 ACC/AHA Guideline for the Management of Patients With Valvular Heart Disease. Circulation. 2021;143(5):e72-e227.",
    "Delgado V, et al. 2023 ESC Guidelines for the management of endocarditis. Eur Heart J. 2023;44(39):3948-4042.",
    "Kang DH, et al. Early surgery versus conventional treatment for infective endocarditis (EASE trial). N Engl J Med. 2012;366(26):2466-2473.",
    "Mack MJ, et al. Transcatheter Aortic-Valve Replacement with a Balloon-Expandable Valve in Low-Risk Patients (PARTNER 3). N Engl J Med. 2019;380(18):1695-1705.",
    "Ozkan M, et al. Ultra-slow infusion of low-dose recombinant tissue plasminogen activator for obstructive prosthetic valve thrombosis (TROIA/PROMETHEUS). J Am Coll Cardiol. 2013;61(10):1036-1045.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "shock", label: "Foundational hemodynamic and oxygen transport principles" },
    { type: "complication", targetId: "cardiogenic-shock", label: "Acute valvular pump failure and low-output state" },
    { type: "complication", targetId: "cardiogenic-pulmonary-edema", label: "Hydrostatic pulmonary capillary hypertension" },
    { type: "related-to", targetId: "acute-coronary-syndrome", label: "Papillary muscle rupture and ischemic MR" },
    { type: "related-to", targetId: "acute-aortic-syndromes", label: "Type A aortic dissection causing acute AR" },
    { type: "related-to", targetId: "rv-failure", label: "Severe tricuspid regurgitation and RV volume overload" },
    { type: "related-to", targetId: "sepsis", label: "Infective endocarditis systemic sepsis and bacteremia" },
    { type: "related-to", targetId: "arrhythmias", label: "Periannular root abscess causing high-grade AV block" },
  ],
  sections: [
    {
      id: "valvular-heart-disease-endocarditis.overview",
      kind: "overview",
      title: "Overview",
      summary: "Critical valvular heart disease in the ICU encompasses acute catastrophic mechanical disruption and acute decompensation of severe chronic stenotic or regurgitant lesions, requiring urgent lesion-specific hemodynamic optimization and multidisciplinary Heart Valve Team consultation.",
      provenance: "textbook",
      evidenceRefs: [
        { kind: "guideline", id: "valvular-guideline-acc-aha-2020", relevance: "ACC/AHA Class 1 recommendations for urgent valvular interventions" },
        { kind: "guideline", id: "endocarditis-guideline-esc-2023", relevance: "ESC guidance on surgical timing and multimodality imaging in IE" }
      ],
      body: [
        {
          type: "paragraph",
          text: "Critical valvular disease in the ICU presents in two distinct clinical phenotypes: (1) acute native or prosthetic valve catastrophe (e.g., papillary muscle rupture, acute endocarditic cusp perforation, mechanical valve thrombosis), where a non-compliant, unprepared left or right ventricle faces sudden massive volume or pressure overload; and (2) acute hemodynamic collapse of chronic compensated valvular lesions (e.g., critical aortic stenosis, severe mitral stenosis) precipitated by tachycardia, atrial fibrillation, sepsis, or peri-intubation vasodilation.",
        },
        {
          type: "paragraph",
          text: "Management differs fundamentally from chronic outpatient cardiology: standard guideline-directed medical therapy (such as aggressive vasodilation or inodilators) can induce immediate cardiovascular collapse in fixed-obstruction lesions like critical AS, while positive-pressure ventilation and inotropes have diametrically opposing effects across regurgitant versus stenotic pathologies. Rapid bedside echocardiography (TTE/TEE) and early engagement of a multidisciplinary Heart Valve Team (intensivist, cardiologist, cardiac surgeon) are critical for survival.",
        },
      ],
    },
    {
      id: "valvular-heart-disease-endocarditis.physiology",
      kind: "physiology",
      title: "ICU Valvular Hemodynamics Matrix",
      summary: "Hemodynamic goals across five core ICU valvular lesions: Preload, Afterload, Heart Rate, Rhythm, Contractility, and Ventricular Interactions.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Each valvular lesion dictates strict, highly specific hemodynamic boundaries in the ICU. Applying incorrect hemodynamic targets can rapidly precipitate irreversible shock or flash pulmonary edema.",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Critical Aortic Stenosis (AS)",
              value: "Preload: Maintain high-normal (preload-dependent, non-compliant LV) • Afterload: Maintain SVR with phenylephrine/norepi • HR: Slow-normal (60–80 bpm) • Rhythm: Strict Sinus Rhythm (atrial kick provides 30–40% of LVEDV) • Vulnerability: Extreme risk of arrest with sudden vasodilation, tachycardia, or loss of atrial kick.",
            },
            {
              label: "Acute Aortic Regurgitation (AR)",
              value: "Preload: Maintain cautiously • Afterload: Reduce aggressively (nitroprusside) • HR: Fast-normal (85–105 bpm, shortens diastole) • Rhythm: Sinus/controlled • Vulnerability: IABP IS STRICTLY CONTRAINDICATED (forces diastolic reflux into LV causing arrest); premature mitral valve closure.",
            },
            {
              label: "Mitral Stenosis (MS)",
              value: "Preload: Maintain carefully • Afterload: Maintain SVR • HR: Strict slow rate (60–75 bpm) • Rhythm: Strict Sinus Rhythm • Vulnerability: Tachycardia causes exponential rise in LA pressure (LAP = Flow^2 / Filling Time^2) precipitating flash pulmonary edema.",
            },
            {
              label: "Acute Severe Mitral Regurgitation (MR)",
              value: "Preload: Normal to mildly reduced • Afterload: Reduce aggressively (nitroprusside, clevidipine, IABP/Impella) • HR: Normal to brisk (80–100 bpm) • Rhythm: Sinus preferred • Vulnerability: Giant LA v-waves; soft/absent murmur due to early LV-LA pressure equalization; flash pulmonary edema.",
            },
            {
              label: "Severe Tricuspid Regurgitation (TR)",
              value: "Preload: Judicious optimization • Afterload: Reduce RV afterload with inhaled epoprostenol/iNO • HR: Normal (70–90 bpm) • Rhythm: Sinus preferred • Vulnerability: Profound systemic venous hypertension causing congestive hepatopathy and cardiorenal AKI.",
            },
          ],
        },
      ],
    },
    {
      id: "valvular-heart-disease-endocarditis.critical-aortic-stenosis",
      kind: "management",
      title: "Critical Aortic Stenosis in the ICU",
      summary: "Fixed LV outflow obstruction with concentric hypertrophy, preload dependence, strict coronary perfusion vulnerability, and high risk of peri-intubation cardiac arrest.",
      provenance: "guideline",
      evidenceRefs: [
        { kind: "trial", id: "valvular-partner3-trial", relevance: "PARTNER 3 establishing transcatheter valve replacement efficacy" }
      ],
      body: [
        {
          type: "paragraph",
          text: "Critical aortic stenosis (valve area < 0.8–1.0 cm², mean gradient > 40 mmHg, peak velocity > 4.0 m/s) results in massive concentric LV hypertrophy and severe diastolic stiffness. The hypertrophied myocardium has markedly increased myocardial oxygen demand coupled with reduced coronary perfusion pressure (CPP = Diastolic BP - LVEDP). Because LVEDP is severely elevated, coronary perfusion is critically dependent on maintaining systemic diastolic arterial pressure.",
        },
        {
          type: "list", ordered: false,
          items: [
            "Hemodynamic Goals: Maintain adequate preload; maintain high-normal systemic vascular resistance (phenylephrine or norepinephrine are first-line to maintain diastolic coronary driving pressure); maintain strict sinus rhythm with heart rate 60–80 bpm.",
            "Avoid Inodilators and Pure Vasodilators: Milrinone, dobutamine monotherapy, and vasodilators (nitroprusside, hydralazine, ACE inhibitors) cause peripheral vasodilation without increasing flow through the fixed stenosis, resulting in precipitous hypotension, coronary hypoperfusion, subendocardial ischemia, and ventricular fibrillation.",
            "Peri-Intubation Precautions: Sedative-induced sympatholysis and positive-pressure ventilation drastically reduce venous return and SVR, leading to rapid pulseless electrical activity (PEA) or VF arrest. Always have norepinephrine/phenylephrine infusing at induction, use cardiostable agents (etomidate/ketamine with low doses), avoid hyperventilation, and optimize intravascular volume prior to intubation.",
            "Atrial Fibrillation Management: Sudden loss of the atrial kick (~30–40% of ventricular filling in stiff LV) and rapid ventricular response causes immediate cardiogenic shock. Immediate synchronized electrical cardioversion is indicated for unstable AF.",
            "Definitive Rescue: Emergent Heart Valve Team consultation. In critically ill patients in shock or inoperable status, urgent balloon aortic valvuloplasty (BAV) or emergency transcatheter aortic valve replacement (TAVR) serves as a life-saving bridge to recovery.",
          ],
        },
      ],
    },
    {
      id: "valvular-heart-disease-endocarditis.acute-aortic-regurgitation",
      kind: "management",
      title: "Acute Severe Aortic Regurgitation",
      summary: "Sudden diastolic volume overload into an unprepared LV causing massive LVEDP spike, premature mitral valve closure, cardiogenic shock, and absolute contraindication to IABP.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Acute severe AR contrasts sharply with chronic compensated AR. Because the left ventricle has had no time to dilate, the massive regurgitant volume directly engorges a non-compliant chamber during diastole. LVEDP rises precipitously, rapidly exceeding left atrial pressure in late diastole and causing premature closure of the mitral valve. Forward stroke volume collapses, resulting in severe cardiogenic shock and flash pulmonary edema.",
        },
        {
          type: "list", ordered: false,
          items: [
            "Etiologies: Acute infective endocarditis (leaflet destruction/perforation), Type A aortic dissection retrograde extension (cross-link acute-aortic-syndromes), prosthetic valve disruption, blunt thoracic trauma.",
            "Physical Exam Clues: Unlike the wide pulse pressure and bounding pulses of chronic AR, acute AR typically presents with a narrow pulse pressure, tachycardia, cool extremities, and a short, soft, low-pitched early diastolic murmur (due to early equalization of aortic and LV diastolic pressures).",
            "Hemodynamic Management: Forward flow is augmented by afterload reduction (IV nitroprusside or nicardipine) and positive inotropy (dobutamine or milrinone) if SBP permits. Norepinephrine is used for shock to maintain perfusion while preparing for the operating room. Maintain heart rate slightly elevated (85–105 bpm) to shorten diastole and reduce regurgitant fraction.",
            "Absolute Contraindication to IABP: Intra-aortic balloon counterpulsation (IABP) augments diastolic pressure in the ascending aorta, which directly forces catastrophic retrograde blood flow across the incompetent aortic valve into the left ventricle, causing fatal LV distension and pulmonary edema. IABP is absolutely contraindicated.",
            "Definitive Therapy: Emergency Surgical Aortic Valve Replacement (SAVR) is the definitive life-saving therapy.",
          ],
        },
      ],
    },
    {
      id: "valvular-heart-disease-endocarditis.mitral-stenosis",
      kind: "management",
      title: "Mitral Stenosis in the ICU",
      summary: "Fixed LV inflow restriction, extreme tachycardia intolerance, secondary pulmonary hypertension, and acute decompensation in atrial fibrillation.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Severe mitral stenosis (mitral valve area < 1.5 cm²) impedes left ventricular diastolic filling, creating an elevated transmitral pressure gradient. Left atrial pressure rises, transmitting retrograde into the pulmonary veins and capillaries, causing pulmonary venous hypertension and reactive pulmonary arteriolar vasoconstriction.",
        },
        {
          type: "list", ordered: false,
          items: [
            "Tachycardia Sensitivity: Because transmitral filling occurs exclusively during diastole, shortening diastolic filling time (as in tachycardia or exercise) causes an exponential increase in LA pressure: LAP = Flow² / (Filling Time²). A rise in heart rate from 70 to 120 bpm can instantly quadruple pulmonary capillary wedge pressure, precipitating flash alveolar edema.",
            "Hemodynamic Goals: Strict heart rate control (target 60–75 bpm with IV beta-blockers like esmolol or diltiazem); aggressive maintenance or restoration of sinus rhythm; cautious diuresis (avoiding excessive hypovolemia which starves LV preload); maintaining RV perfusion.",
            "Atrial Fibrillation with Rapid Ventricular Response: The combination of tachycardia and loss of atrial contraction causes immediate pulmonary edema and right heart failure. Immediate synchronized electrical cardioversion is indicated if hemodynamically unstable, provided anticoagulation/TEE is addressed.",
            "Definitive Management: Percutaneous balloon mitral valvuloplasty (PBMV) for pliable non-calcified valves (Wilkins score <= 8) without LA thrombus or moderate/severe MR; surgical mitral valve replacement (MVR) for calcified valves.",
          ],
        },
      ],
    },
    {
      id: "valvular-heart-disease-endocarditis.acute-severe-mitral-regurgitation",
      kind: "management",
      title: "Acute Severe Mitral Regurgitation",
      summary: "Catastrophic systolic volume reflux into a non-dilated left atrium generating giant v-waves, flash pulmonary edema, and acute cardiogenic shock.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "In acute severe MR, a large portion of LV stroke volume is ejected retrogradely into a normal-sized, non-compliant left atrium during systole. This produces massive systolic regurgitant pressure waves (giant LA v-waves, often > 50–70 mmHg), causing instantaneous hydrostatic capillary rupture and flash pulmonary edema while forward cardiac output plummets.",
        },
        {
          type: "list", ordered: false,
          items: [
            "Causes: Post-MI papillary muscle rupture (posteromedial papillary muscle single blood supply from PDA/RCA, cross-link acute-coronary-syndrome), chordae tendineae rupture (myxomatous Barlow disease, trauma), infective endocarditis leaflet perforation/destruction, prosthetic valve dehiscence.",
            "Clinical Presentation: Severe acute respiratory distress, pulmonary edema, cardiogenic shock, and hypoxemia. Notably, the systolic murmur may be soft, early systolic, or completely inaudible because the pressure gradient between LV and LA equalizes rapidly in late systole.",
            "Hemodynamic Management: Aggressive afterload reduction with IV sodium nitroprusside or clevidipine decreases resistance to forward aortic flow and drastically reduces the regurgitant fraction. Inotropes (dobutamine) support forward stroke volume. Mechanical Circulatory Support (IABP or Impella) unloads the left ventricle, lowers LVEDP, decreases v-wave amplitude, and improves systemic perfusion.",
            "Definitive Management: Urgent cardiac surgical consultation for emergency mitral valve repair or replacement.",
          ],
        },
      ],
    },
    {
      id: "valvular-heart-disease-endocarditis.right-sided-valve-disease",
      kind: "management",
      title: "Right-Sided Valve Emergencies & Severe TR",
      summary: "Severe tricuspid regurgitation, RV volume overload, systemic venous hypertension, congestive hepatopathy, and cardiorenal syndrome.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Severe tricuspid regurgitation in the ICU occurs as functional TR from annular dilation due to severe pulmonary hypertension and RV dysfunction, or primary TR from infective endocarditis (IV drug use, transvenous pacemaker/ICD leads). Reflux of RV stroke volume into the right atrium transmits severe venous hypertension into the IVC, hepatic veins, and renal veins.",
        },
        {
          type: "list", ordered: false,
          items: [
            "Congestive End-Organ Injury: Systemic venous congestion generates elevated renal venous pressure, leading to severe congestive cardiorenal AKI (loss of transglomerular perfusion gradient) and congestive hepatopathy (pulsatile liver, transaminitis, hyperbilirubinemia, coagulopathy).",
            "Hemodynamic Strategy: Judicious loop diuresis and aldosterone antagonism to lower central venous pressure (CVP) without compromising RV preload; reduction of RV afterload using inhaled pulmonary vasodilators (inhaled epoprostenol or inhaled nitric oxide, cross-link pulmonary-hypertension, rv-failure); maintenance of systemic arterial pressure with norepinephrine to preserve RV coronary perfusion.",
          ],
        },
      ],
    },
    {
      id: "valvular-heart-disease-endocarditis.prosthetic-valve-emergencies",
      kind: "management",
      title: "Prosthetic Valve Emergencies & Thrombosis",
      summary: "Mechanical valve thrombosis, bioprosthetic failure, paravalvular leak, low-dose ultra-slow fibrinolysis protocols, and emergency surgery.",
      provenance: "guideline",
      evidenceRefs: [
        { kind: "trial", id: "valvular-prometheus-trial", relevance: "TROIA/PROMETHEUS protocol for slow low-dose tPA infusion" }
      ],
      body: [
        {
          type: "paragraph",
          text: "Prosthetic valve dysfunction presents as obstructive or non-obstructive mechanical thrombosis, bioprosthetic leaflet degeneration/tearing, paravalvular regurgitation/dehiscence, or prosthetic valve endocarditis (PVE). Mechanical valve thrombosis carries an in-hospital mortality exceeding 20–30% if unaddressed.",
        },
        {
          type: "list", ordered: false,
          items: [
            "Diagnostic Evaluation: Loss of prosthetic mechanical clicks on auscultation, new murmur, pulmonary edema, or cardiogenic shock. Emergent TTE and TEE with cine-fluoroscopy to assess leaflet mobility, transvalvular gradients, effective orifice area, and distinguish mobile thrombus from fixed fibrous pannus.",
            "Obstructive Mechanical Valve Thrombosis Management: (1) Urgent Surgery: Preferred for large thrombus (area >= 0.8 cm² or mobile length >= 10 mm), left-sided valves in low-to-intermediate surgical risk, or concomitant CAD/PVE; (2) Ultra-Slow Low-Dose Fibrinolysis (PROMETHEUS/TROIA Protocol): Recombinant tPA 25 mg infused intravenously over 25 hours without a bolus (repeated up to 3 times if necessary) is preferred in high-risk surgical candidates, right-sided prosthetic valve thrombosis, or when surgery is unavailable. Achieves ~90% resolution with <2% major bleeding.",
            "Paravalvular Leak: Presents with refractory heart failure and severe Coombs-negative hemolytic anemia (schistocytes, elevated LDH, low haptoglobin). Managed with transcatheter plug closure or surgical reoperation.",
          ],
        },
      ],
    },
    {
      id: "valvular-heart-disease-endocarditis.infective-endocarditis",
      kind: "management",
      title: "Infective Endocarditis & Early Surgery Triggers",
      summary: "Diagnostic criteria, bactericidal pharmacotherapy, septic and embolic complications, neurological event surgery timing, and EASE trial evidence.",
      provenance: "guideline",
      evidenceRefs: [
        { kind: "trial", id: "valvular-ease-trial", relevance: "EASE landmark trial demonstrating early surgery reduces death and embolism" }
      ],
      body: [
        {
          type: "paragraph",
          text: "Infective Endocarditis (IE) in the ICU presents with severe systemic sepsis, acute valvular incompetence, cardiogenic shock, perivalvular destructive abscess, conduction block, or catastrophic systemic embolization (embolic stroke, mycotic intracranial aneurysm, splenic/renal infarction). Diagnostic evaluation follows the 2023 ESC / Modified Duke criteria (blood cultures x 3 sets prior to antibiotics, TTE + TEE).",
        },
        {
          type: "list", ordered: false,
          items: [
            "Immediate Empiric Antimicrobial Therapy: Vancomycin (15–20 mg/kg IV q8–12h with AUC monitoring) PLUS Cefepime (2 g IV q8h) or Ampicillin-Sulbactam (3 g IV q6h). For prosthetic valves within 12 months: Vancomycin + Gentamicin + Rifampin.",
            "Indications for Emergency/Urgent Surgery (<= 24–48 hours per EASE Trial & ESC 2023): (1) Heart failure / cardiogenic shock caused by acute severe AR, MR, or prosthetic dehiscence; (2) Uncontrolled local infection (periannular root abscess, pseudoaneurysm, fistula, enlarging vegetation despite optimal antibiotics, fungal IE); (3) High embolic risk: persistent vegetations > 10 mm on left-sided valves with prior embolic events or severe valve dysfunction.",
            "Neurologic Complications & Surgery Timing: After acute ischemic stroke without massive cerebral infarction or coma, early surgery (within 48–72 hours) is indicated if severe heart failure or uncontrolled sepsis is present. If intracranial hemorrhage (ICH) has occurred, valve surgery should generally be delayed for >= 3–4 weeks if hemodynamically stable due to heparinization risk during cardiopulmonary bypass.",
            "Periannular Abscess & Telemetry: Daily ECG monitoring is mandatory. New PR interval prolongation, bundle branch block, or complete AV block indicates invasive extension into the aortic root and AV conduction axis, demanding emergent TEE and surgical root reconstruction.",
          ],
        },
      ],
    },
    {
      id: "valvular-heart-disease-endocarditis.monitoring",
      kind: "monitoring",
      title: "ICU Monitoring & Hemodynamic Assessment",
      summary: "POCUS/TTE/TEE triggers, pulmonary artery catheter waveforms, giant v-waves, serial biomarkers, and telemetry.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Continuous multimodality monitoring is essential to detect acute valvular decompensation before irreversible organ injury ensues.",
        },
        {
          type: "list", ordered: false,
          items: [
            "Bedside POCUS / Echocardiography: TTE is performed immediately for any patient with unexplained shock, murmur, or flash pulmonary edema. TEE is mandatory for suspected infective endocarditis, prosthetic valve dysfunction, aortic root abscess, and quantified regurgitant severity.",
            "Pulmonary Artery Catheter (PAC): Continuous monitoring of PA pressures, mixed venous saturation (ScvO2/SvO2), and PCWP waveforms. Giant v-waves (> 30–50 mmHg) signify severe acute mitral regurgitation or severe tricuspid regurgitation.",
            "Continuous Telemetry: High sensitivity for conduction delays (PR prolongation, fascicular block) indicative of perivalvular root abscess invasion.",
            "Serial Labs: Serial blood cultures to document clearance, high-sensitivity troponin, serum lactate, arterial blood gas, and complete blood count.",
          ],
        },
      ],
    },
    {
      id: "valvular-heart-disease-endocarditis.complications",
      kind: "complications",
      title: "Complications & Red Lines",
      summary: "Flash pulmonary edema, cardiogenic shock, complete heart block, systemic embolization, and prosthetic valve entrapment.",
      provenance: "textbook",
      body: [
        {
          type: "list", ordered: false,
          items: [
            "Acute Flash Pulmonary Edema: Sudden severe alveolar flooding from acute MR, acute AR, or rapid AF in mitral stenosis.",
            "Refractory Cardiogenic Shock: Biventricular pump collapse requiring emergent mechanical circulatory support and salvage surgery.",
            "Periannular Aortic Root Abscess: Aortic root destruction extending into the membranous septum, causing complete AV block, aortic-cavitary fistulae, and sudden death.",
            "Cerebrovascular Embolization: Embolic ischemic stroke or rupture of infectious (mycotic) intracranial aneurysms.",
            "Mechanical Prosthetic Valve Entrapment / Thrombosis: Catastrophic acute complete valvular obstruction.",
          ],
        },
      ],
    },
    {
      id: "valvular-heart-disease-endocarditis.pitfalls",
      kind: "complications",
      title: "Common Pitfalls & Clinical Pearls",
      summary: "Dangerous assumptions in acute valvular critical illness.",
      provenance: "textbook",
      body: [
        {
          type: "list", ordered: false,
          items: [
            "Missing Acute MR or AR Due to an Inaudible Murmur: Acute severe MR and AR often have soft, early, or completely silent murmurs due to rapid equalization of chamber pressures. Never rule out severe valvular catastrophe based on auscultation alone—obtain emergency echocardiography.",
            "Inserting an IABP in Aortic Regurgitation: IABP counterpulsation is lethal in aortic regurgitation because balloon inflation during diastole directly forces massive retrograde blood flow across the aortic valve into the left ventricle.",
            "Administering Pure Vasodilators or Inodilators in Critical AS: Dropping systemic vascular resistance in fixed critical aortic stenosis precipitates fatal coronary hypoperfusion and cardiac arrest. Maintain SVR with phenylephrine or norepinephrine.",
            "Delaying Surgical Consultation in Large-Vegetation IE: Relying on antibiotics alone in left-sided IE with vegetations > 10 mm and severe valve disease leads to devastating embolic strokes and annular destruction; early surgery (< 48 hours) dramatically improves outcomes (EASE trial).",
          ],
        },
      ],
    },
  ],
};
