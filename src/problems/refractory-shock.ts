import type { ClinicalProblem } from "@/content-types";

export const refractoryShock: ClinicalProblem = {
  id: "refractory-shock",
  slug: "refractory-shock",
  title: "Refractory Shock Despite High-Dose Vasopressors",
  category: "hemodynamic",
  oneLiner: "Advanced multimodal hemodynamic rescue: second-line vasopressors (vasopressin, angiotensin II), inotropic augmentation, stress-dose steroids, metabolic correction, and mechanical circulatory support evaluation.",
  relatedTopicIds: [
      "shock",
      "septic-shock",
      "cardiogenic-shock",
      "obstructive-shock",
      "rv-failure",
      "pulmonary-hypertension",
      "acute-mesenteric-ischemia",
      "acute-pancreatitis",
      "burns-critical-care",
      "ecmo-fundamentals",
      "cardiac-arrest-post-arrest",
      "acid-base-disorders"
    ],
  body: [
    {
      type: "paragraph",
      text: "Refractory shock is defined as persistent tissue hypoperfusion (elevated lactate, oliguria, altered mental status, prolonged capillary refill) despite escalating doses of primary vasopressors (Norepinephrine > 0.25–0.50 mcg/kg/min) and adequate fluid loading. It signals extreme pathological vasoplegia, concurrent myocardial dysfunction, critical endocrine failure, or uncorrected mechanical obstruction requiring multimodal hemodynamic rescue.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Dynamic Left Ventricular Outflow Tract (LVOT) Obstruction with systolic anterior motion (SAM) of the mitral valve (where inotropes worsen shock and beta-blockers/fluids improve it), concealed cardiac tamponade, massive occult retroperitoneal bleeding, and acute critical adrenal insufficiency.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. RECOGNIZE & REASSESS",
          value: "• High-Dose Threshold: Norepinephrine requirement exceeding 0.25–0.50 mcg/kg/min (or escalating combination therapy).\n• Persistent Hypoperfusion Markers: Arterial lactate failing to clear (> 2.0 mmol/L or rising), Mottling Score ≥ 3, base deficit worsening (> -6 mEq/L), mixed venous oxygen saturation (ScvO2) persistently < 65% or paradoxically elevated (> 85% indicating cellular dysoxia in terminal vasoplegia).",
        },
        {
          label: "2. SCREEN FOR REVERSIBLE MECHANICAL / METABOLIC TRAPS",
          value: "• Check POCUS for Dynamic LVOT Obstruction: High-dose catecholamines in a hyperdynamic underfilled heart can cause systolic anterior motion (SAM) of the anterior mitral leaflet against the septum, obstructing forward aortic flow; inotropes worsen this condition drastically.\n• Check for Severe Acidemia (pH < 7.15): Severe hydrogen ion accumulation directly uncouples beta- and alpha-adrenergic receptors, rendering vascular smooth muscle unresponsive to catecholamines.\n• Check Ionized Calcium: Maintain ionized Ca2+ > 1.10–1.25 mmol/L (calcium is a mandatory cofactor for vascular smooth muscle contraction and myocardial excitation-contraction coupling).",
        },
        {
          label: "3. MULTIMODAL VASOPRESSOR ESCALATION (NON-ADRENERGIC RESCUE)",
          value: "• Add Vasopressin: Fixed infusion at 0.03 U/min (acts via vascular V1a receptors; restores vascular tone in relative vasopressin deficiency without increasing myocardial oxygen demand or inducing beta-1 tachycardia).\n• Add Stress-Dose Corticosteroids: Hydrocortisone 200 mg/day (50 mg IV q6h or continuous infusion); upregulates alpha-1 adrenergic receptor expression and treats critical illness-related corticosteroid insufficiency (CIRCI).\n• Third-Line Vasopressors:\n  - Angiotensin II (Giapreza): Titrated infusion (10–80 ng/kg/min via AT1 receptors; selectively effective in high-renin vasoplegic shock).\n  - Epinephrine Infusion: 0.05–0.50 mcg/kg/min (adds potent alpha-1 and beta-1 inotropy; monitor for hyperlactatemia from aerobic glycolysis).\n  - Methylene Blue: 1.5–2.0 mg/kg IV bolus (inhibits inducible nitric oxide synthase and soluble guanylyl cyclase, breaking nitric oxide-mediated vasoplegia in severe sepsis/cardiopulmonary bypass).",
        },
        {
          label: "4. INOTROPIC & RIGHT VENTRICULAR RESCUE",
          value: "• Identify Sepsis-Induced Cardiomyopathy / RV Failure: Perform bedside echocardiography to assess LV stroke volume and RV strain (TAPSE < 16 mm, RV/LV > 1.0).\n• Add Inotropes: Dobutamine (2.5–10 mcg/kg/min) or Milrinone (0.125–0.375 mcg/kg/min with norepinephrine) to augment stroke volume and cardiac index (> 2.2 L/min/m2).",
        },
        {
          label: "5. ADVANCED MECHANICAL CIRCULATORY SUPPORT (MCS)",
          value: "• Venoarterial Extracorporeal Membrane Oxygenation (VA-ECMO): For refractory cardiogenic shock or massive pulmonary embolism failing inotropes and medical therapy.\n• Continuous Renal Replacement Therapy (CRRT): Initiate early for severe refractory acidemia (pH < 7.15), severe volume overload, and to clear inflammatory cytokines.",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Escalating a single adrenergic vasopressor (Norepinephrine) to massive doses (> 1.0–1.5 mcg/kg/min) without initiating multi-receptor blockade (Vasopressin + Hydrocortisone). Single-agent excessive adrenergic exposure induces severe peripheral digital necrosis, splanchnic vasoconstriction, and tachyarrhythmias.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Shock: Advanced perfusion indices, microcirculatory dysfunction, and oxygen consumption.\n• Septic Shock: Vasopressor pathways, Corticus/ADRENAL steroid trials, and refractory resuscitation.\n• Cardiogenic Shock: SCAI Stage D/E refractory shock algorithms and ECMO/Impella.\n• Vasopressors & Inotropes: Receptor profiles, receptor downregulation, and non-adrenergic rescue.\n• RV Failure: 4-pillar resuscitation and pulmonary vasodilator delivery.",
        },
      ],
    },
  ],
};
