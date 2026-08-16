import type { Topic } from "@/content-types";

export const rvFailure: Topic = {
  id: "rv-failure",
  slug: "rv-failure",
  title: "Acute Right Ventricular Failure",
  category: "cardiovascular",
  oneLiner: "RV anatomy and ischemia spiral, ventricular interdependence (D-sign), echocardiographic metrics (TAPSE, S', PAPi, VExUS), and the 4-pillar resuscitation strategy.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Acute Cor Pulmonale, Right Ventricular Myocardial Infarction, and Hemodynamic Monitoring",
    },
    {
      title: "Vieillard-Baron A, et al. Experts' opinion on management of the right ventricle in ICU. Intensive Care Med. 2016;42(10):1485-1493.",
    },
  ],
  currentStatus: "Current as of the ESICM Consensus on Right Ventricular Management in Critical Care, the 2023 ATS Clinical Practice Guideline on Acute RV Failure in the ICU, and international pulmonary hypertension emergency guidelines.",
  otherReferences: [
    "Harjola VP, et al. Contemporary management of acute right ventricular failure: a statement from the Heart Failure Association of the ESC. Eur J Heart Fail. 2016;18(3):226-241.",
    "Lahm T, et al. Medical Management of Acute Right Ventricular Failure in the ICU: An Official ATS Clinical Practice Guideline. Am J Respir Crit Care Med. 2023;208(9):e18-e42.",
    "Korabathina R, et al. The pulmonary artery pulsatility index identifies severe right ventricular dysfunction in acute myocardial infarction. Catheter Cardiovasc Interv. 2012;80(4):593-600.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "shock", label: "Fundamental hemodynamic and oxygen delivery principles" },
    { type: "differential", targetId: "cardiogenic-shock", label: "Right ventricular vs left ventricular pump failure" },
    { type: "differential", targetId: "obstructive-shock", label: "Massive PE as a primary cause of acute RV failure" },
    { type: "complication", targetId: "ards", label: "Acute cor pulmonale complicating severe ARDS and high PEEP" },
    { type: "related-to", targetId: "mechanical-ventilation", label: "Ventilator mechanics and pulmonary vascular resistance" },
    { type: "related-to", targetId: "arrhythmias", label: "Loss of atrial kick and arrhythmogenic collapse in RV failure" },
  ],
  sections: [
    {
      id: "rv-failure.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "rv-failure-guideline-aha-2018",
          relevance: "AHA scientific statement on evaluation and management of right-sided heart failure"
        },
        {
          kind: "trial",
          id: "cshock-doremi-trial",
          relevance: "DOREMI trial on inodilator selection (milrinone vs dobutamine) in acute RV failure"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Acute Right Ventricular Failure (ARVF) is a rapidly progressive hemodynamic emergency where the thin-walled, afterload-sensitive RV decompensates, causing systemic venous congestion and leftward septal shift.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "The right ventricle (RV) is an exquisitely thin-walled, compliant chamber designed to eject against the low-resistance, high-capacitance pulmonary vascular bed. While the RV adapts well to gradual chronic volume loading, it is highly intolerant of acute elevations in pulmonary vascular resistance (afterload).",
        },
        {
          type: "paragraph",
          text: "In the ICU, acute RV failure arises from acute pulmonary embolism, severe ARDS (acute cor pulmonale in 20–25% of moderate-severe ARDS), RV myocardial infarction, or acute decompensation of chronic pulmonary hypertension. Management requires a disciplined four-pillar strategy: (1) Preload optimization (strict avoidance of volume overload), (2) Systemic pressure support to preserve RV coronary perfusion, (3) Pulmonary vascular resistance reduction (inhaled prostacyclin/nitric oxide, ventilatory optimization), and (4) Selective inotropy.",
        },
      ],
    },
    {
      id: "rv-failure.physiology",
      kind: "physiology",
      title: "Anatomy, The Ischemic Death Spiral, & Ventricular Interdependence",
      summary: "Unique RV coronary perfusion dynamics, the self-propagating ischemia-dilation spiral, and leftward septal shift (the D-sign).",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Unique RV Coronary Perfusion Dynamics",
              value: "In health, RV systolic pressure (20–25 mmHg) is far lower than aortic pressure (120 mmHg). Consequently, the Right Coronary Artery (RCA) perfuses the RV myocardium continuously throughout BOTH systole and diastole. (In contrast, the thick LV is perfused almost exclusively in diastole).",
            },
            {
              label: "2. The RV Ischemic Death Spiral",
              value: "When acute afterload raises RV systolic pressure (e.g., to 60–80 mmHg) and systemic blood pressure falls, RV systolic coronary perfusion is extinguished. RCA flow becomes restricted to diastole. Rising RV end-diastolic pressure further compresses intramyocardial vessels, causing acute RV free-wall ischemia, contractility loss, dilation, and circulatory collapse.",
            },
            {
              label: "3. Ventricular Interdependence & The D-Sign",
              value: "The RV and LV share the interventricular septum and pericardial sac. As the failing RV dilates within the rigid pericardium, the septum shifts leftward during diastole and systole (the 'D-shaped LV' on short-axis echo). This mechanically compresses the LV cavity, reducing LV end-diastolic volume (preload) and dropping stroke volume and cardiac output.",
            },
          ],
        },
      ],
    },
    {
      id: "rv-failure.diagnosis-pocus",
      kind: "diagnosis",
      title: "Bedside POCUS Echocardiography & Hemodynamic Indices",
      summary: "Quantitative echocardiographic metrics (TAPSE, S' velocity, FAC, RV/LV ratio), septal flattening dynamics, PAPi calculations, and systemic venous Doppler (VExUS).",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Bedside assessment requires integrating echocardiographic geometry with systemic venous Doppler and invasive hemodynamics (interpreting measurements in holistic clinical context rather than isolated cutoffs):",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. TAPSE (Tricuspid Annular Plane Systolic Excursion)",
              value: "• Reference Value: Normal > 17 mm.\n• Diagnostic Threshold: TAPSE < 16–17 mm indicates impaired longitudinal RV systolic function.\n• Clinical Context & Limitations: Measures only longitudinal base-to-apex shortening; angle-dependent; may underestimate function post-cardiac surgery or miss radial compensation.",
            },
            {
              label: "2. RV Free Wall Tissue Doppler (RV S' Velocity)",
              value: "• Reference Value: Normal > 9.5–10 cm/s.\n• Diagnostic Threshold: S' velocity < 9.5 cm/s indicates impaired longitudinal RV systolic function.",
            },
            {
              label: "3. Fractional Area Change (FAC)",
              value: "• Calculation: FAC = [(End-Diastolic Area - End-Systolic Area) / End-Diastolic Area] × 100% in apical 4-chamber view.\n• Reference Value: Normal > 35%.\n• Diagnostic Threshold: FAC < 35% captures both longitudinal and radial contractility, serving as the most robust 2D echocardiographic metric of global RV systolic function.",
            },
            {
              label: "4. RV/LV Diameter Ratio & Interventricular Septal Shift (D-Sign)",
              value: "• RV/LV Basal Ratio: Normal < 0.6. Ratio > 0.9–1.0 indicates severe RV dilation (McConnell's sign: apical sparing with mid-free wall akinesis in acute PE).\n• Parasternal Short-Axis D-Sign: End-Systolic flattening indicates RV Pressure Overload (pulmonary hypertension/PE); End-Diastolic flattening indicates RV Volume Overload (shunts/severe TR); Flattening in both systole and diastole indicates severe mixed overload.",
            },
            {
              label: "5. Pulmonary Artery Pulsatility Index (PAPi)",
              value: "• Formula: PAPi = (Pulmonary Artery Systolic Pressure - Pulmonary Artery Diastolic Pressure) / CVP (measured via PAC).\n• Hemodynamic Interpretation: PAPi < 0.9–1.0 in acute myocardial infarction / shock (or < 1.5–1.8 post-LVAD) is a validated hemodynamic indicator of severe RV failure and inotrope/RVAD requirement.",
            },
            {
              label: "6. Systemic Venous Congestion & VExUS Score",
              value: "Assesses backward congestion into target organs: Dilated non-collapsing IVC (> 2.1 cm) + Hepatic vein systolic flow reversal + Portal vein pulsatility fraction > 50% + Intrarenal discontinuous biphasic venous Doppler (Grade 3 VExUS: severe cardiorenal congestion).",
            },
          ],
        },
      ],
    },
    {
      id: "rv-failure.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Acute Right Heart Failure",
      summary: "Differentiate acute mechanical RV pressure overload, acute RV ischemia, and primary volume overload.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Acute Massive Pulmonary Embolism: Sudden mechanical obstruction of pulmonary arterial bed with McConnell's sign on echo and severe acute afterload mismatch.",
            "Acute RV Myocardial Infarction: Primary loss of RV contractility with ST elevation in V4R; clear lung fields with elevated JVP and hypotension.",
            "Acute Cor Pulmonale in Severe ARDS: High driving pressure, hypoxia, hypercapnia, and lung hyperinflation spiking PVR and causing RV dilation.",
            "Cardiac Tamponade: Extrinsic compression of all cardiac chambers with equalized diastolic pressures and pulsus paradoxus."
          ]
        }
      ]
    },
    {
      id: "rv-failure.management",
      kind: "management",
      title: "The 4-Pillar ICU Resuscitation Strategy",
      summary: "Preload optimization (avoiding volume loading), systemic perfusion restoration, pulmonary afterload reduction, and RV inotropy.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "The 4-pillar critical care resuscitation protocol for acute RV failure:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Pillar 1: Optimize (Do Not Overload) Preload",
              value: "Avoid indiscriminate fluid loading. The dilated RV is on the flat or descending limb of the Frank-Starling curve; excessive fluids worsen septal shift, dilate the tricuspid annulus, and precipitate renal venous congestion (VExUS grade 3). If CVP > 12–15 mmHg, cautious diuresis or CRRT unloads the RV and improves LV cardiac output.",
            },
            {
              label: "Pillar 2: Restore Systemic Perfusion Pressure",
              value: "Norepinephrine is the first-line vasopressor. It increases aortic root pressure, restoring the coronary perfusion pressure gradient across the RCA to the RV myocardium without significantly raising pulmonary vascular resistance (PVR). Vasopressin (fixed 0.03 U/min) is an ideal second-line agent (causes systemic vasoconstriction while sparing pulmonary vessels via endothelial NO release).",
            },
            {
              label: "Pillar 3: Reduce Pulmonary Vascular Resistance (PVR)",
              value: "1. Correct physiological vasoconstrictors: Avoid hypoxemia (target PaO2 > 80), hypercapnia (target PaCO2 35–40), and acidemia (pH > 7.30).\n2. Inhaled Pulmonary Vasodilators: Inhaled Epoprostenol (iPGI2, 10–50 ng/kg/min) or Inhaled Nitric Oxide (iNO, 20–40 ppm). Delivered selectively to ventilated alveoli, lowering pulmonary artery pressure without systemic vasodilation.",
            },
            {
              label: "Pillar 4: Augment RV Inotropy",
              value: "Milrinone (0.125–0.50 mcg/kg/min): PDE-3 inhibitor / inodilator, lowers PVR and enhances RV contractility (combine with norepinephrine to defend MAP). Dobutamine (2.5–10 mcg/kg/min): Beta-1 inotrope; higher doses (> 10) worsen tachycardia and increase PVR.",
            },
          ],
        },
        {
          type: "callout",
          tone: "caution",
          text: "The High-Risk Intubation Danger: Endotracheal intubation in severe RV failure carries a catastrophic risk of post-induction cardiac arrest. Sedatives (propofol) eliminate systemic vascular tone, extinguishing RV coronary perfusion, while positive-pressure ventilation abruptly increases RV afterload. Start a norepinephrine infusion before induction, pre-oxygenate with HFNC, use etomidate or ketamine, and avoid hypoventilation during laryngoscopy.",
        },
      ],
    },
    {
      id: "rv-failure.ventilator",
      kind: "management",
      title: "RV-Protective Mechanical Ventilation",
      summary: "Balancing alveolar recruitment against West Zone 1 capillary compression, driving pressure limits, and avoiding hypercapnic vasoconstriction.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Mechanical ventilation has profound direct effects on RV afterload:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "The U-Shaped PVR Curve",
              value: "Pulmonary Vascular Resistance is lowest at Functional Residual Capacity (FRC). At low lung volumes (atelectasis), extra-alveolar vessels are compressed. At high lung volumes (overdistension/high PEEP), intra-alveolar capillaries are compressed (Zone 1 conditions). Both extremes spike RV afterload.",
            },
            {
              label: "Ventilator Settings in RV Failure",
              value: "• Low Tidal Volumes (6 mL/kg PBW) to limit end-inspiratory transpulmonary pressure.\n• Strict Driving Pressure Limit: Keep Driving Pressure (Pplat - PEEP) < 14–15 cmH2O and Pplat < 27–28 cmH2O.\n• Moderate PEEP: Set PEEP to achieve alveolar recruitment without overdistension (typically 8–12 cmH2O in ARDS).\n• Avoid Permissive Hypercapnia: Severe acidosis (pH < 7.20) and hypercapnia (PaCO2 > 50) induce potent precapillary pulmonary vasoconstriction, directly precipitating acute cor pulmonale.",
            },
          ],
        },
      ],
    },
    {
      id: "rv-failure.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls in RV Failure",
      summary: "Critical mistakes to avoid in managing acute right ventricular failure.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Administering repeated IV fluid boluses for hypotension in RV failure: The failing RV is overstretched; fluids worsen tricuspid regurgitation, push the septum leftward, and decrease LV cardiac output; use vasopressors and inotropes instead.",
            "Inducing anesthesia without active vasopressor infusions: Loss of sympathetic tone collapses RCA perfusion, precipitating immediate fatal arrest; start Norepinephrine before induction.",
            "Allowing hypercapnic acidosis: Respiratory acidosis is a potent pulmonary vasoconstrictor that rapidly doubles RV afterload; maintain PaCO2 strictly 35–45 mmHg and pH > 7.30.",
            "Using high doses of Phenylephrine as primary vasopressor: Phenylephrine is a pure alpha-1 agonist that significantly increases pulmonary vascular resistance without inotropic benefit; use Norepinephrine.",
            "Using single echocardiographic cutoffs in isolation: TAPSE can be preserved in apical-sparing regional failure or falsely depressed post-cardiotomy; always integrate multiple views, tissue Doppler, and systemic venous congestion Doppler (VExUS).",
          ],
        },
      ],
    },
    {
      id: "rv-failure.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Temporary Mechanical Circulatory Support for Isolated RV Failure (Procyk RVAD / Impella RP vs VA-ECMO).",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Temporary Right Ventricular Mechanical Circulatory Support (MCS): In refractory RV cardiogenic shock failing inotropes and inhaled vasodilators, options include percutaneous transvalvular microaxial pumps (Impella RP: draws blood from the IVC and ejects into the pulmonary artery, delivering up to 4.0 L/min of flow) versus Oxy-RVAD (cannulas with in-line oxygenator) versus Venoarterial Extracorporeal Membrane Oxygenation (VA-ECMO). VA-ECMO provides instantaneous RV unloading and full biventricular/gas exchange support, but increases LV afterload, requiring careful monitoring.",
        },
      ],
    },
    {
      id: "rv-failure.complications",
      kind: "complications",
      title: "Complications & Escalation Triggers",
      summary: "Structured recognition of RV ischemia-shock spiral, cardio-hepatic and cardiorenal failure.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Early / Life-Threatening", value: "RV death spiral (RV dilatation -> septal leftward shift -> reduced LV preload -> systemic hypotension -> RCA hypoperfusion -> worsened RV ischemia), lethal bradyarrhythmias, PEA cardiac arrest during positive pressure intubation." },
            { label: "Treatment-Related", value: "Systemic vasodilation and shock from oral PDE5 inhibitors or non-selective IV vasodilators; worsening RV dilation from fluid boluses." },
            { label: "Late / Delayed", value: "Congestive hepatopathy ('nutmeg liver') with coagulopathy, Cardiorenal Syndrome Type 1 with renal venous hypertension (CVP > 18-20 mmHg)." },
            { label: "Escalation Triggers", value: "Refractory shock failing norepinephrine, inhaled epoprostenol/iNO, and milrinone -> Veno-Arterial (VA) ECMO or RVAD (Impella RP / ProtekDuo)." }
          ]
        }
      ]
    },
],
};
