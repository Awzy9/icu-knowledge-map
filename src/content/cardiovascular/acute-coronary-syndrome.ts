import type { Topic } from "@/content-types";

export const acuteCoronarySyndrome: Topic = {
  id: "acute-coronary-syndrome",
  slug: "acute-coronary-syndrome",
  title: "Acute Coronary Syndrome",
  category: "cardiovascular",
  oneLiner: "Plaque rupture, coronary thrombosis, STEMI vs NSTEMI risk stratification, emergent reperfusion, DAPT/anticoagulation, and mechanical/electrical ICU complications.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Acute Coronary Syndromes, Mechanical Complications of Myocardial Infarction, and Coronary Care Unit Management",
    },
    {
      title: "2023 ESC Guidelines for the management of acute coronary syndromes",
      edition: "Eur Heart J 2023;44(38):3720-3826",
    },
  ],
  currentStatus: "Current as of the 2023 ESC ACS Guidelines, the 2021 ACC/AHA Coronary Revascularization Guidelines, and the CULPRIT-SHOCK and DanGer Shock trials.",
  otherReferences: [
    "Byrne RA, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023;44(38):3720-3826.",
    "Thiele H, et al. PCI Strategies in Patients with Acute Myocardial Infarction and Cardiogenic Shock (CULPRIT-SHOCK trial). N Engl J Med. 2017;377(25):2419-2432.",
    "Moller JE, et al. Microaxial Flow Pump or Standard Care in Infarct-Related Cardiogenic Shock (DanGer Shock trial). N Engl J Med. 2024;390(23):2129-2140.",
    "Schupke S, et al. Ticagrelor or Prasugrel in Patients with Acute Coronary Syndromes (ISAR-REACT 5 trial). N Engl J Med. 2019;381(16):1524-1534.",
  ],
  relationships: [
    { type: "complication", targetId: "cardiogenic-shock", label: "Pump failure, SCAI staging, and mechanical circulatory support" },
    { type: "complication", targetId: "arrhythmias", label: "Ventricular tachycardia/fibrillation and high-degree AV block" },
    { type: "prerequisite", targetId: "anticoagulation", label: "Parenteral anticoagulation and antiplatelet management" },
    { type: "related-to", targetId: "shock", label: "Hemodynamic profiling and vasopressor selection" },
    { type: "related-to", targetId: "cardiogenic-pulmonary-edema", label: "Acute ischemic LV dysfunction and flash pulmonary edema" },
  ],
  sections: [
    {
      id: "acute-coronary-syndrome.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "acs-guideline-acc-aha-2023",
          relevance: "2023 ACC/AHA clinical guideline on acute coronary syndromes and emergency revascularization"
        },
        {
          kind: "trial",
          id: "cardiogenic-shock-culprit-shock",
          relevance: "CULPRIT-SHOCK trial on PCI revascularization strategy in acute coronary syndromes"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Acute Coronary Syndrome (ACS) encompasses a continuum of acute myocardial ischemia ranging from Unstable Angina and Non-ST-Elevation Myocardial Infarction (NSTEMI) to transmural ST-Elevation Myocardial Infarction (STEMI), requiring rapid risk stratification and immediate reperfusion.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Acute Coronary Syndrome (ACS) is the clinical manifestation of sudden, critical imbalance between myocardial oxygen supply and demand, most commonly precipitated by atherothrombotic plaque rupture or erosion. In the intensive care unit, ACS frequently presents with complex hemodynamic instability, acute pulmonary edema, malignant arrhythmias, or mechanical catastrophe.",
        },
        {
          type: "paragraph",
          text: "The clinical imperatives are: (1) Rapid 12-lead ECG acquisition within 10 minutes to detect STEMI or STEMI-equivalents; (2) Immediate guideline-directed medical therapy (DAPT, parenteral anticoagulation, anti-ischemic agents); (3) Emergency revascularization (Primary PCI within 90 minutes for STEMI; immediate < 2h invasive angiography for very high-risk NSTEMI); and (4) Vigilant monitoring for post-infarction mechanical complications (papillary muscle rupture, VSR, free wall rupture) and cardiogenic shock.",
        },
      ],
    },
    {
      id: "acute-coronary-syndrome.physiology",
      kind: "physiology",
      title: "Pathophysiology: Plaque Rupture, Thrombosis & Ischemic Cascade",
      summary: "Fibroatheroma rupture, platelet activation/aggregation, thrombin burst, transmural vs subendocardial ischemia, and cellular necrosis.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "The pathophysiological cascade underlying acute myocardial infarction involves vascular, cellular, and hemodynamic mechanisms:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Plaque Disruption & Coronary Thrombosis",
              value: "Atherosclerotic plaque rupture (exposing the thrombogenic lipid-rich necrotic core with tissue factor) or plaque erosion triggers immediate platelet adhesion via glycoprotein Ib-IX-V to von Willebrand factor, platelet activation (secreting ADP, thromboxane A2, serotonin), and platelet aggregation via glycoprotein IIb/IIIa receptor cross-linking with fibrinogen. This drives a local thrombin burst, creating an occlusive platelet-fibrin red/white thrombus.",
            },
            {
              label: "2. The Ischemic Wavefront Phenomenon",
              value: "Coronary occlusion halts oxidative phosphorylation within 8 seconds; anaerobic glycolysis produces intracellular acidosis, glycogen depletion, and cell membrane Na+/K+-ATPase failure. Irreversible myocardial necrosis begins within 20 minutes in the vulnerable subendocardium and progresses as a wavefront toward the subepicardium over 6 hours ('time is muscle').",
            },
            {
              label: "3. Type 1 vs Type 2 Myocardial Infarction",
              value: "• Type 1 MI: Spontaneous atherothrombotic coronary plaque rupture, ulceration, or dissection.\n• Type 2 MI: Myocardial necrosis secondary to severe supply-demand mismatch without acute plaque disruption (frequent in the ICU due to septic vasodilation, profound anemia, severe hypoxemia, sustained tachyarrhythmias, or extreme hypertensive emergency).",
            },
            {
              label: "4. Myocardial Stunning vs Hibernation",
              value: "• Stunning: Prolonged post-ischemic contractile dysfunction that persists despite full restoration of coronary blood flow; reversible over days to weeks.\n• Hibernation: Chronic down-regulation of resting myocardial contractility in response to severe, chronic coronary stenosis; recovers only after revascularization.",
            },
          ],
        },
      ],
    },
    {
      id: "acute-coronary-syndrome.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Evaluation: ECG Patterns, Biomarkers & STEMI Equivalents",
      summary: "12-lead ECG criteria, high-sensitivity troponin 0/1h algorithms, and high-risk STEMI equivalents (Wellens, de Winter, Sgarbossa, posterior MI).",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Electrocardiographic and biomarker diagnosis of acute coronary syndromes:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Classical STEMI Criteria",
              value: "New ST elevation at the J-point in ≥ 2 contiguous leads:\n• Leads V2–V3: ≥ 2.0 mm in men ≥ 40y, ≥ 2.5 mm in men < 40y, or ≥ 1.5 mm in women.\n• All other contiguous leads: ≥ 1.0 mm ST elevation.\n• Reciprocal ST depression in opposing vascular territories strongly reinforces STEMI diagnosis.",
            },
            {
              label: "2. Critical STEMI Equivalents (Mandating Immediate Reperfusion)",
              value: "• Posterior STEMI: Isolated ST depression ≥ 0.5 mm in V1–V3 with tall, broad R waves and upright T waves; confirmed by ST elevation ≥ 0.5 mm in posterior leads V7–V9.\n• De Winter Pattern: 1–3 mm upsloping ST depression at the J-point in leads V1–V6 with tall, prominent, symmetric T waves (signifies acute proximal LAD occlusion, 2% of LAD infarctions).\n• Wellens' Syndrome: Deeply inverted (Type B, 75%) or biphasic (Type A, 25%) T waves in V2–V3 in a pain-free patient; signifies critical proximal LAD stenosis with high risk of anterior wall infarction.\n• Modified Sgarbossa Criteria (for LBBB or Paced Ventricular Rhythm):\n  - Concordant ST elevation ≥ 1 mm in any lead with positive QRS (5 points)\n  - Concordant ST depression ≥ 1 mm in leads V1–V3 (3 points)\n  - Smith-modified: Excessively discordant ST elevation with ST/S ratio ≤ -0.25 (i.e. ST elevation > 25% of the preceding S-wave depth).",
            },
            {
              label: "3. High-Sensitivity Cardiac Troponin (hs-cTn)",
              value: "High-sensitivity Troponin I or T utilizing the ESC 0/1-hour or 0/2-hour algorithm: Baseline 0h sample + 1h sample. A significant delta rise/fall above the 99th percentile upper reference limit confirms acute myocardial injury.",
            },
          ],
        },
      ],
    },
    {
      id: "acute-coronary-syndrome.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Acute Chest Pain & ST Derangements",
      summary: "Differentiate plaque-rupture Type 1 MI from Type 2 demand ischemia, aortic dissection, PE, and myopericarditis.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Type 1 MI vs Type 2 Myocardial Infarction: Type 1 is acute atherosclerotic plaque rupture/thrombosis; Type 2 is supply-demand mismatch (tachyarrhythmia, severe hypotension, hypoxemia, sepsis) without plaque rupture.",
          "Acute Aortic Dissection with Coronary Extension: Dissection flap occluding RCA ostium presenting as inferior STEMI; administering antiplatelets/thrombolysis is fatal.",
          "Acute Myopericarditis: Positional pleuritic chest pain, PR-segment depression, diffuse upwardly concave ST elevation without reciprocal changes.",
          "Acute Pulmonary Embolism with RV Strain: T-wave inversions in V1-V4 and S1Q3T3 pattern mimicking anteroseptal ischemia; POCUS shows RV dilatation and McConnell's sign."
]
        }
      ]
    },
    {
      id: "acute-coronary-syndrome.management",
      kind: "management",
      title: "Stepped Medical & Reperfusion Management",
      summary: "DAPT (Ticagrelor/Prasugrel), anticoagulation, primary PCI vs pharmacoinvasive fibrinolysis, very high-risk NSTEMI triggers, and secondary prevention.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Stepped emergency management of acute coronary syndromes:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Antiplatelet Therapy",
              value: "• Aspirin: 162–325 mg non-enteric-coated chewed immediately, followed by 81 mg daily indefinitely.\n• P2Y12 Inhibitors:\n  - Prasugrel: 60 mg loading dose, then 10 mg daily (preferred over Ticagrelor in STEMI/NSTEMI undergoing PCI per ISAR-REACT 5 trial; contraindicated in prior stroke/TIA, age ≥ 75y, weight < 60 kg).\n  - Ticagrelor: 180 mg loading dose, then 90 mg bid (PLATO trial: reduces cardiovascular mortality vs clopidogrel).\n  - Clopidogrel: 600 mg loading, then 75 mg daily (reserved for patients receiving fibrinolytic therapy, high bleeding risk, or oral anticoagulant indication).",
            },
            {
              label: "2. Parenteral Anticoagulation",
              value: "• Unfractionated Heparin (UFH): 60–70 U/kg IV bolus (max 4000 U), followed by 12 U/kg/hr infusion (target anti-Xa 0.3–0.7 IU/mL or ACT 250–300s during PCI). Preferred in patients proceeding directly to cardiac catheterization.\n• Enoxaparin: 1 mg/kg SC q12h (or 0.75 mg/kg if CrCl < 30 mL/min).\n• Bivalirudin: 0.75 mg/kg IV bolus + 1.75 mg/kg/hr during PCI (alternative in patients with HIT or high bleeding risk).",
            },
            {
              label: "3. Reperfusion Strategy for STEMI",
              value: "• Primary PCI: Gold standard; perform within 90 minutes of first medical contact at PCI-capable centers (or < 120 minutes transfer time).\n• Fibrinolysis (STREAM Trial Protocol): Indicated if anticipated transfer time to primary PCI exceeds 120 minutes and symptom onset is < 12 hours. Administer IV Tenecteplase (weight-based single bolus over 5s: 30–50 mg; reduce dose by 50% in patients ≥ 75 years) + Aspirin + Clopidogrel 300 mg + Enoxaparin IV/SC. Immediately transfer to a PCI center for rescue PCI (if ST resolution < 50% at 90 min) or routine angiographic catheterization within 2–24 hours.",
            },
            {
              label: "4. Invasive Strategy for NSTEMI",
              value: "• Very High-Risk NSTEMI (Immediate Invasive < 2 hours): Hemodynamic instability or cardiogenic shock; recurrent/refractory chest pain despite medical therapy; life-threatening ventricular arrhythmias or cardiac arrest; acute heart failure; or dynamic ST-T changes.\n• High-Risk NSTEMI (Early Invasive < 24 hours): Confirmed NSTEMI with GRACE risk score > 140 or dynamic ST-segment depression.",
            },
            {
              label: "5. Anti-Ischemic & Supportive Pharmacotherapy",
              value: "• Nitroglycerin: Sublingual 0.4 mg q5min x 3, or IV infusion (5–200 mcg/min). CONTRAINDICATED in RV infarction, SBP < 90 mmHg, severe aortic stenosis, or PDE-5 inhibitor use within 24h (sildenafil) to 48h (tadalafil).\n• Beta-Blockers: Initiate oral metoprolol succinate or carvedilol within 24 hours in hemodynamically stable patients. CONTRAINDICATED IV in acute unstable phase or heart failure (COMMIT trial: early IV beta-blockade precipitated cardiogenic shock in 3% of patients).\n• High-Intensity Statin: Atorvastatin 80 mg daily initiated before catheterization.",
            },
          ],
        },
      ],
    },
    {
      id: "acute-coronary-syndrome.complications",
      kind: "complications",
      title: "ICU-Level Mechanical & Electrical Complications",
      summary: "Papillary muscle rupture, ventricular septal rupture, free wall rupture, cardiogenic shock, and life-threatening arrhythmias.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Acute Mitral Regurgitation: Rupture of the posteromedial papillary muscle (occurring 2–7 days post-inferior/posterior MI due to its single blood supply from the PDA) causing acute flash pulmonary edema, new apical holosystolic murmur, and rapid cardiogenic shock; requires urgent IABP/Impella afterload reduction and emergent surgical repair.",
            "Ventricular Septal Rupture (VSR): Transmural necrosis of the septum (anterior LAD or inferior PDA MI) causing a large left-to-right shunt, new harsh holosystolic murmur with palpable thrill, and a step-up in oxygen saturation (> 10%) between right atrium and pulmonary artery; requires emergent surgical or percutaneous closure.",
            "Left Ventricular Free Wall Rupture: Catastrophic rupture into the pericardial space causing sudden electromechanical dissociation (PEA), tamponade, and death within minutes; requires immediate pericardiocentesis and emergent open sternotomy repair.",
            "Cardiogenic Shock: Extensively studied in the CULPRIT-SHOCK trial (which proved that immediate PCI of the culprit lesion only reduced 30-day mortality and renal failure compared to immediate multivessel PCI) and the DanGer Shock trial (which demonstrated that microaxial Impella flow pumps significantly reduced 180-day mortality in STEMI cardiogenic shock).",
            "Malignant Arrhythmias: Sustained polymorphic VT or VF (immediate defibrillation, IV amiodarone 300 mg or lidocaine 100 mg, electrolyte repletion K+ > 4.0, Mg2+ > 2.0); complete AV block in inferior MI (temporary transvenous pacing).",
          ],
        },
      ],
    },
    {
      id: "acute-coronary-syndrome.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical mistakes in managing acute coronary syndrome in the ICU.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Administering IV Beta-Blockers to an acutely unstable patient: Precipitously triggers cardiogenic shock; wait until the patient is completely stabilized, euvolemic, and without signs of low cardiac output before starting low-dose oral beta-blockers.",
            "Giving Nitroglycerin or Diuretics in Right Ventricular Infarction: RV infarction (ST elevation in lead V4R) is preload-dependent; nitrates cause catastrophic hypotension; treat with aggressive isotonic fluid resuscitation instead.",
            "Failing to obtain posterior leads (V7–V9) in isolated ST depression in V1–V3: Leads V1–V3 ST depression is frequently an acute posterior STEMI requiring immediate primary PCI, not an uncomplicated NSTEMI.",
            "Performing immediate multivessel PCI during cardiogenic shock: The CULPRIT-SHOCK trial established that opening non-culprit chronic total occlusions during acute shock increases mortality and dialysis; fix the culprit lesion only.",
            "Missing acute mechanical complications: Sudden hemodynamic collapse in a post-MI patient with a new murmur is a surgical emergency; immediately perform bedside echocardiography.",
          ],
        },
      ],
    },
    {
      id: "acute-coronary-syndrome.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Timing of complete revascularization in hemodynamically stable STEMI, and routine oxygen therapy.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Complete vs Culprit-Only Revascularization in Stable Multivessel STEMI: The COMPLETE trial (Mehta 2019) demonstrated that in hemodynamically STABLE STEMI patients with multivessel disease, staged complete revascularization of non-culprit lesions (performed before hospital discharge or within 45 days) significantly reduced cardiovascular death and recurrent MI compared to culprit-only PCI. This contrasts sharply with cardiogenic shock, where culprit-only PCI remains the mandatory standard.",
        },
        {
          type: "paragraph",
          text: "Supplemental Oxygen in Normoxemic ACS: Large-scale trials (DETO2X-AMI and AVOID) confirmed that routine supplemental oxygen in patients with normal oxygen saturation (SpO2 ≥ 90–92%) does not reduce infarct size or mortality and causes hyperoxic coronary vasoconstriction. Oxygen is recommended ONLY if SpO2 < 90% or PaO2 < 60 mmHg.",
        },
      ],
    },
  ],
};
