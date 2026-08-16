import type { Topic } from "@/content-types";

export const cardiogenicShock: Topic = {
  id: "cardiogenic-shock",
  slug: "cardiogenic-shock",
  title: "Cardiogenic Shock",
  category: "cardiovascular",
  oneLiner: "Primary pump failure, SCAI staging (A–E), PAC hemodynamics (CPO, PAPi), inotrope selection, emergent revascularization, and mechanical circulatory support.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapter on Cardiogenic Shock: Pathophysiology, Monitoring, and Advanced Management",
    },
    {
      title: "Braunwald's Heart Disease: A Textbook of Cardiovascular Medicine",
      edition: "12th Edition, 2022",
    },
  ],
  currentStatus: "Current as of the 2022 SCAI SHOCK Stage Classification, the 2023 ESC Acute Heart Failure Guidelines, and the 2024 DanGer Shock Landmark Trial.",
  otherReferences: [
    "Baran DA, et al. SCAI clinical expert consensus statement on the classification of cardiogenic shock. Catheter Cardiovasc Interv. 2019;94(1):29-37; Updated JACC 2022;79(9):933-946.",
    "Møller JE, et al. Microaxial Flow Pump or Standard Care in Infarct-Related Cardiogenic Shock (DanGer Shock trial). N Engl J Med. 2024;390(15):1382-1393.",
    "Thiele H, et al. Intraaortic balloon support for myocardial infarction with cardiogenic shock (IABP-SHOCK II). N Engl J Med. 2012;367(14):1287-1296.",
    "Thiele H, et al. PCI strategies in patients with acute myocardial infarction and cardiogenic shock (CULPRIT-SHOCK). N Engl J Med. 2017;377(25):2419-2432.",
    "Hochman JS, et al. Early revascularization in acute myocardial infarction complicated by cardiogenic shock (SHOCK trial). N Engl J Med. 1999;341(9):625-634.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "shock", label: "Foundational hemodynamic and oxygen transport principles" },
    { type: "differential", targetId: "obstructive-shock", label: "Extracardiac mechanical obstruction mimic" },
    { type: "complication", targetId: "rv-failure", label: "Right ventricular failure and biventricular shock" },
    { type: "complication", targetId: "aki", label: "Cardiorenal syndrome type 1" },
    { type: "treated-with", targetId: "crrt", label: "Continuous ultrafiltration for refractory volume overload and uremia" },
    { type: "related-to", targetId: "cardiogenic-pulmonary-edema", label: "Hydrostatic pulmonary capillary hypertension" },
    { type: "related-to", targetId: "arrhythmias", label: "Arrhythmogenic pump failure and malignant arrhythmias" },
  ],
  sections: [
    {
      id: "cardiogenic-shock.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "cardiogenic-shock-guideline-aha-2017",
          relevance: "AHA scientific statement on management of cardiogenic shock"
        },
        {
          kind: "trial",
          id: "cardiogenic-shock-shock-trial",
          relevance: "SHOCK landmark trial proving emergency revascularization improves long-term survival"
        },
        {
          kind: "trial",
          id: "cardiogenic-shock-iabp-shock-ii",
          relevance: "IABP-SHOCK II trial demonstrating no mortality reduction with routine IABP in AMI shock"
        },
        {
          kind: "trial",
          id: "cardiogenic-shock-culprit-shock",
          relevance: "CULPRIT-SHOCK trial establishing culprit-only PCI in AMI cardiogenic shock"
        },
        {
          kind: "trial",
          id: "cardiogenic-shock-danger-shock",
          relevance: "DanGer Shock trial evaluating microaxial flow pump (Impella) in STEMI cardiogenic shock"
        },
        {
          kind: "trial",
          id: "cshock-doremi-trial",
          relevance: "CAPITAL DOREMI trial comparing milrinone vs dobutamine in cardiogenic shock"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Cardiogenic shock is primary myocardial pump failure causing inadequate cardiac output, elevated filling pressures, and profound tissue hypoperfusion, with an in-hospital mortality of 40–50%.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Cardiogenic shock (CS) is a state of severe critical end-organ hypoperfusion caused by primary cardiac pump failure. While acute myocardial infarction (AMI) with severe left ventricular dysfunction accounts for ~60–70% of cases, non-ischemic etiologies (decompensated chronic dilated cardiomyopathy, acute fulminant myocarditis, stress cardiomyopathy, acute severe valvular regurgitation, and primary arrhythmias) represent a rapidly growing subset in modern ICUs.",
        },
        {
          type: "paragraph",
          text: "The clinical presentation is dynamic, characterized by the 2022 SCAI staging system (Stages A through E). Immediate management centers on early invasive revascularization (culprit-only PCI in AMI), hemodynamic stabilization with norepinephrine and inotropes (dobutamine/milrinone), protocolized pulmonary artery catheter (PAC) hemodynamic monitoring, and timely deployment of temporary Mechanical Circulatory Support (MCS: Impella, VA-ECMO).",
        },
      ],
    },
    {
      id: "cardiogenic-shock.physiology",
      kind: "physiology",
      title: "Pathophysiology & The Ischemia-Inflammation Spiral",
      summary: "The classic downward spiral: myocardial necrosis, LV compliance loss, pulmonary capillary hypertension, compensatory vasoconstriction, and late systemic inflammatory vasodilation.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "The classic paradigm of cardiogenic shock is a self-propagating downward spiral: primary myocardial injury reduces stroke volume and cardiac output. Left ventricular end-diastolic pressure (LVEDP) and pulmonary capillary wedge pressure (PCWP) rise sharply, leading to hydrostatic alveolar flooding and hypoxemia.",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Coronary Perfusion Pressure Collapse",
              value: "Coronary perfusion pressure (CPP = Diastolic Aortic Pressure - LVEDP). In CS, falling aortic diastolic pressure combined with elevated LVEDP severely compromises subendocardial coronary perfusion, worsening myocardial ischemia even in non-infarcted territories.",
            },
            {
              label: "2. Maladaptive Compensatory Afterload",
              value: "Intense sympathetic and RAAS activation drives severe peripheral vasoconstriction (SVR > 1400 dyn·s·cm⁻⁵). While defending central blood pressure, this excessive afterload increases LV wall stress and myocardial oxygen consumption (MVO2), further depressing stroke volume.",
            },
            {
              label: "3. Systemic Inflammation & Vasodilation",
              value: "Prolonged low-output shock triggers systemic endothelial activation and release of pro-inflammatory cytokines (TNF-alpha, IL-6, inducible nitric oxide synthase / iNOS). Late cardiogenic shock often transforms into a mixed phenotype with superimposed pathologic vasodilation.",
            },
          ],
        },
      ],
    },
    {
      id: "cardiogenic-shock.hemodynamics",
      kind: "diagnosis",
      title: "Hemodynamic Profiling: Forrester Phenotypes & PAC Metrics",
      summary: "Forrester 2x2 hemodynamic matrix, Pulmonary Artery Catheter indices, Cardiac Power Output (CPO), and Pulmonary Artery Pulsatility Index (PAPi).",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Cardiogenic shock is stratified hemodynamically using the classic Forrester Classification based on perfusion (Cardiac Index, cutoff 2.2 L/min/m2) and congestion (PCWP, cutoff 18 mmHg):",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Warm & Dry (Subset I)",
              value: "Normal hemodynamics: CI > 2.2 L/min/m2, PCWP < 18 mmHg. Compensated.",
            },
            {
              label: "Warm & Wet (Subset II)",
              value: "Pulmonary congestion without shock: CI > 2.2, PCWP > 18. Treated with vasodilators and diuretics.",
            },
            {
              label: "Cold & Dry (Subset III)",
              value: "Euvolemic / relative hypovolemic cardiogenic shock: CI < 2.2, PCWP < 18. Patient may be overdiuresed or have isolated RV infarction. Responds to cautious volume challenge.",
            },
            {
              label: "Cold & Wet (Subset IV)",
              value: "Classic Cardiogenic Shock: CI < 2.2 L/min/m2, PCWP > 18 mmHg, SVR > 1400. Inadequate perfusion with severe pulmonary/systemic congestion.",
            },
            {
              label: "Cardiac Power Output (CPO)",
              value: "CPO (Watts) = [MAP × Cardiac Output] / 451. Measures the hydraulic pumping power of the heart. CPO < 0.60 W is the single strongest independent hemodynamic predictor of in-hospital mortality in cardiogenic shock (Fincke et al., JACC 2004).",
            },
            {
              label: "Pulmonary Artery Pulsatility Index (PAPi)",
              value: "PAPi = (Pulmonary Artery Systolic Pressure - Pulmonary Artery Diastolic Pressure) / CVP. PAPi < 0.9–1.0 specifically indicates severe right ventricular dysfunction.",
            },
          ],
        },
      ],
    },
    {
      id: "cardiogenic-shock.severity",
      kind: "severity",
      title: "SCAI SHOCK Staging System (Stages A through E)",
      summary: "The 2022 SCAI expert consensus staging: At Risk (A), Beginning (B), Classic (C), Deteriorating (D), and Extremis (E).",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "Stage A — At Risk",
              value: "Large acute MI, severe acute heart failure, or myocarditis. Hemodynamically stable, normotensive, normal lactate, no hypoperfusion.",
            },
            {
              label: "Stage B — Beginning (Compensated)",
              value: "Clinical evidence of relative hypotension (SBP < 90, MAP < 60) or sinus tachycardia (HR > 100) WITHOUT systemic hypoperfusion. Normal lactate, warm peripheries, preserved renal function.",
            },
            {
              label: "Stage C — Classic Cardiogenic Shock",
              value: "Hypoperfusion requiring pharmacological or mechanical intervention beyond volume expansion alone. Cold extremities, oliguria, altered mentation, lactate ≥ 2.0 mmol/L, CI < 2.2, CPO < 0.6 W.",
            },
            {
              label: "Stage D — Deteriorating / Refractory",
              value: "Failure of initial therapy (escalating doses of multiple inotropes/pressors or mechanical support) to restore hemodynamic stability; rising lactate, worsening oliguria.",
            },
            {
              label: "Stage E — Extremis",
              value: "Actual or impending circulatory collapse; refractory cardiac arrest receiving CPR, active ECMO cannulation, or multiple simultaneous mechanical support devices.",
            },
          ],
        },
      ],
    },
    {
      id: "cardiogenic-shock.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Low-Cardiac-Output Shock",
      summary: "Differentiate acute LV pump failure from massive PE, cardiac tamponade, and septic cardiomyopathy.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Acute LV Infarction Shock vs Acute Mechanical Complication: Ventricular septal rupture (VSR) or acute severe mitral regurgitation (papillary muscle rupture) presenting as sudden catastrophic shock with new loud murmur; emergency echo is mandatory.",
          "Cardiac Tamponade: Equalization of diastolic chamber pressures with clear lung fields and pulsus paradoxus.",
          "Septic Cardiomyopathy: Distributive low SVR state with secondary myocardial depression; responds to restoration of vascular tone.",
          "Severe Hypovolemia: Low filling pressures (CVP < 5, PAWP < 10) with hyperdynamic LV and collapsed IVC."
]
        }
      ]
    },
    {
      id: "cardiogenic-shock.management",
      kind: "management",
      title: "Comprehensive ICU Management: Revascularization & Inotropes",
      summary: "Emergent coronary angiography, culprit-only PCI (CULPRIT-SHOCK), norepinephrine first-line, and inotrope selection (dobutamine vs milrinone).",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Emergent Revascularization (SHOCK & CULPRIT-SHOCK)",
              value: "Immediate coronary angiography and percutaneous coronary intervention (PCI) of the culprit lesion is standard of care in all AMI-related shock (SHOCK trial). The landmark CULPRIT-SHOCK trial (Thiele et al., NEJM 2017) proved that Culprit-Lesion-Only PCI significantly reduced 30-day mortality and renal replacement therapy compared to immediate multivessel PCI (45.9% vs 55.4%, p=0.01).",
            },
            {
              label: "2. Vasopressor Selection (Norepinephrine First-Line)",
              value: "Norepinephrine is the first-line vasopressor to restore MAP ≥ 65 mmHg and coronary perfusion pressure. Epinephrine is avoided as first-line due to increased myocardial oxygen consumption, arrhythmogenesis, and higher mortality in clinical trials.",
            },
            {
              label: "3. Inotrope Selection (Dobutamine vs Milrinone)",
              value: "Dobutamine (2.5–20 mcg/kg/min): Beta-1 inotrope, first-line for low cardiac output with marginal blood pressure. Milrinone (0.125–0.75 mcg/kg/min): PDE-3 inhibitor / inodilator, ideal for pulmonary hypertension, RV dysfunction, or patients receiving chronic beta-blocker therapy.",
            },
            {
              label: "4. Judicious Fluid & Diuretic Strategy",
              value: "Avoid large-volume crystalloid boluses. In congested patients (PCWP > 18), IV loop diuretics (furosemide/bumetanide) or continuous renal replacement therapy (CRRT) reduce ventricular wall stress and improve renal perfusion.",
            },
          ],
        },
      ],
    },
    {
      id: "cardiogenic-shock.mcs",
      kind: "management",
      title: "Temporary Mechanical Circulatory Support (MCS): DanGer Shock & VA-ECMO",
      summary: "Evidence-based microaxial flow pumps (Impella), the DanGer Shock trial, VA-ECMO, and the mandatory requirement for left ventricular venting.",
      provenance: "trial",
      body: [
        {
          type: "paragraph",
          text: "Temporary Mechanical Circulatory Support (MCS) unloads the failing left ventricle, reduces myocardial oxygen demand, and maintains systemic end-organ perfusion:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Microaxial Flow Pump (Impella CP / 5.5)",
              value: "Transvalvular axial flow pump aspirating blood from the LV and expelling it into the ascending aorta (up to 3.5–5.5 L/min). Directly unloads the LV, reduces LVEDP and PCWP, and increases cardiac power output.",
            },
            {
              label: "The DanGer Shock Trial (NEJM 2024)",
              value: "Landmark RCT of 355 patients with STEMI-related cardiogenic shock randomized to Impella CP plus standard care vs standard care alone. Impella CP significantly reduced 180-day all-cause mortality (45.8% vs 58.5%; HR 0.74, 95% CI 0.55–0.99; p=0.04; NNT = 8). However, Impella significantly increased severe bleeding, limb ischemia, and renal replacement therapy.",
            },
            {
              label: "Intra-Aortic Balloon Pump (IABP)",
              value: "The IABP-SHOCK II trial (NEJM 2012) showed zero mortality benefit in AMI cardiogenic shock; routine IABP is not recommended for AMI shock, but remains useful for acute mechanical complications (mitral regurgitation, VSD).",
            },
            {
              label: "Veno-Arterial ECMO (VA-ECMO)",
              value: "Provides full biventricular and respiratory support (4–6 L/min). Crucial Hazard: Retrograde arterial return increases LV afterload, leading to LV distension, aortic valve stasis, and severe pulmonary edema. Mandates active LV venting (Impella + ECMO = 'ECPELLA', balloon septostomy, or surgical vent).",
            },
          ],
        },
        {
          type: "callout",
          tone: "trial",
          text: "DanGer Shock is the first randomized trial in history to demonstrate a survival benefit for an active mechanical circulatory support device in cardiogenic shock, establishing microaxial flow pumps as a transformative therapy in selected STEMI-CS patients.",
          evidenceId: "cardiogenic-shock-danger-shock",
        },
      ],
    },
    {
      id: "cardiogenic-shock.complications",
      kind: "complications",
      title: "Complications of Cardiogenic Shock & Mechanical Devices",
      summary: "End-organ failure, mechanical MI complications, and device-related vascular trauma.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Disease-Related: Acute mechanical complications of MI (papillary muscle rupture with acute severe MR, ventricular septal rupture / VSD, LV free wall rupture with tamponade), ischemic hepatitis / shock liver, acute cardiorenal syndrome.",
            "Device-Related (Impella / VA-ECMO): Severe access-site bleeding requiring transfusion, acute lower extremity limb ischemia (requires distal perfusion cannula in VA-ECMO), mechanical hemolysis from shear stress, aortic valve injury, device migration.",
            "ICU-Related: Ventilator-associated pneumonia, vascular catheter bloodstream infections, profound ICU-acquired deconditioning.",
          ],
        },
      ],
    },
    {
      id: "cardiogenic-shock.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical diagnostic and management traps in cardiogenic shock.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Performing immediate multivessel PCI in AMI cardiogenic shock: The CULPRIT-SHOCK trial proved that opening non-culprit chronic total occlusions during acute shock increases acute kidney injury and 30-day mortality; revascularize only the culprit artery acutely.",
            "Running VA-ECMO without a left ventricular unloading strategy: Retrograde flow into the ascending aorta increases afterload against an akinetic LV, resulting in severe intraventricular thrombosis and catastrophic flash pulmonary edema.",
            "Over-resuscitating with IV crystalloids: Cardiogenic shock is a pump problem; volume loading pushes the failing heart further rightward on a flat Starling curve, exacerbating pulmonary edema and right heart failure.",
            "Using Epinephrine as the default inotrope: Epinephrine increases myocardial oxygen consumption and causes refractory arrhythmias; use Norepinephrine + Dobutamine instead.",
            "Failing to recognize acute mechanical complications of MI: A sudden new systolic murmur with acute hemodynamic collapse indicates papillary muscle rupture or VSD, requiring emergent echocardiography and urgent surgical repair.",
          ],
        },
      ],
    },
    {
      id: "cardiogenic-shock.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Routine Pulmonary Artery Catheter use and early pre-PCI MCS deployment.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Routine Pulmonary Artery Catheterization in Cardiogenic Shock: Observational data from the National Cardiogenic Shock Initiative (NCSI) and modern shock registries demonstrate that early complete PAC hemodynamic profiling (guiding inotrope titration and MCS escalation based on CPO and PAPi) is associated with improved in-hospital survival (> 70% vs historical 50%), challenging older trials in unselected heterogenous ICU cohorts.",
        },
        {
          type: "paragraph",
          text: "Timing of MCS Deployment (Pre-PCI vs Post-PCI): Registry studies suggest that inserting a microaxial pump (Impella) prior to coronary revascularization ('door-to-unload') reduces infarct size and protects against reperfusion-induced circulatory collapse compared to post-PCI rescue deployment.",
        },
      ],
    },
  ],
};
