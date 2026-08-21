import type { PhysiologyProfile } from "@/content-types/physiology-profile";

/* -------------------------------------------------------------------------- */
/*  Drug profiles                                                            */
/* -------------------------------------------------------------------------- */

export const norepinephrineProfile: PhysiologyProfile = {
  id: "norepinephrine",
  name: "Norepinephrine",
  type: "drug",
  variables: {
    svr: "up-up",
    hr: "neutral",
    contractility: "up",
    preload: "up",
    afterload: "up-up",
    co: "up",
    map: "up-up",
    pvr: "up",
    myocardialO2Demand: "up",
  },
  mechanism: "Potent α1 agonism → arterial/venous vasoconstriction; modest β1 → increased contractility. Minimal β2 effect.",
  clinicalContext: "First-line vasopressor in septic shock. Increases MAP primarily through SVR with preserved or improved CO.",
};

export const vasopressinProfile: PhysiologyProfile = {
  id: "vasopressin",
  name: "Vasopressin",
  type: "drug",
  variables: {
    svr: "up-up",
    hr: "neutral",
    contractility: "neutral",
    preload: "neutral",
    afterload: "up-up",
    co: "neutral",
    map: "up",
    pvr: "neutral",
    myocardialO2Demand: "neutral",
  },
  mechanism: "V1 receptor agonism → vascular smooth muscle contraction. Non-adrenergic; no direct cardiac β1 effect.",
  clinicalContext: "Second-line vasopressor in septic shock. Added at 0.03 units/min to reduce norepinephrine requirements.",
};

export const phenylephrineProfile: PhysiologyProfile = {
  id: "phenylephrine",
  name: "Phenylephrine",
  type: "drug",
  variables: {
    svr: "up-up",
    hr: "down",
    contractility: "neutral",
    preload: "up",
    afterload: "up-up",
    co: "down",
    map: "up",
    pvr: "up",
    myocardialO2Demand: "up",
  },
  mechanism: "Pure α1 agonism → arterial vasoconstriction. No β1 activity. Reflex bradycardia from baroreceptor activation.",
  clinicalContext: "Limited role in septic shock — may decrease CO. Consider in tachyarrhythmia-associated hypotension.",
};

export const epinephrineProfile: PhysiologyProfile = {
  id: "epinephrine",
  name: "Epinephrine",
  type: "drug",
  variables: {
    svr: "up",
    hr: "up-up",
    contractility: "up-up",
    preload: "up",
    afterload: "up",
    co: "up-up",
    map: "up-up",
    pvr: "variable",
    myocardialO2Demand: "up-up",
  },
  mechanism: "Potent β1 + β2 + α1 agonism. Dose-dependent: lower doses β-dominant (inotropy/chronotropy), higher doses α-dominant (vasoconstriction).",
  clinicalContext: "Second-line in refractory septic shock or anaphylactic shock. Increases lactate independently of tissue hypoxia.",
};

export const dobutamineProfile: PhysiologyProfile = {
  id: "dobutamine",
  name: "Dobutamine",
  type: "drug",
  variables: {
    svr: "down",
    hr: "up",
    contractility: "up-up",
    preload: "down",
    afterload: "down",
    co: "up-up",
    map: "variable",
    pvr: "down",
    myocardialO2Demand: "up",
  },
  mechanism: "Predominant β1 agonism → increased contractility. Mild β2 → peripheral vasodilation. No significant α1 effect.",
  clinicalContext: "Added to norepinephrine in septic shock with myocardial dysfunction. Risk of hypotension if used alone in vasoplegia.",
};

export const milrinoneProfile: PhysiologyProfile = {
  id: "milrinone",
  name: "Milrinone",
  type: "drug",
  variables: {
    svr: "down-down",
    hr: "up",
    contractility: "up",
    preload: "down",
    afterload: "down-down",
    co: "up",
    map: "down",
    pvr: "down-down",
    myocardialO2Demand: "variable",
  },
  mechanism: "PDE-3 inhibitor → increased cAMP → inotropy + vasodilation (inodilator). Non-adrenergic mechanism.",
  clinicalContext: "Used in cardiogenic shock with elevated PVR / RV failure. Renally cleared — accumulates in AKI.",
};

export const nicardipineProfile: PhysiologyProfile = {
  id: "nicardipine",
  name: "Nicardipine",
  type: "drug",
  variables: {
    svr: "down-down",
    hr: "up",
    contractility: "neutral",
    preload: "neutral",
    afterload: "down-down",
    co: "up",
    map: "down-down",
    pvr: "neutral",
    myocardialO2Demand: "down",
  },
  mechanism: "Dihydropyridine calcium channel blocker → arterial smooth muscle relaxation → afterload reduction.",
  clinicalContext: "First-line IV antihypertensive for hypertensive emergency. Titratable with predictable MAP reduction.",
};

export const propofolProfile: PhysiologyProfile = {
  id: "propofol",
  name: "Propofol",
  type: "drug",
  variables: {
    svr: "down-down",
    hr: "down",
    contractility: "down",
    preload: "down",
    afterload: "down-down",
    co: "down",
    map: "down-down",
  },
  mechanism: "GABA-A agonism → venodilation + arterial vasodilation + negative inotropy. Direct cardiac depression.",
  clinicalContext: "Hemodynamic compromise risk in hypovolemic/shocked patients. Monitor for propofol infusion syndrome in prolonged use.",
};

/* -------------------------------------------------------------------------- */
/*  Disease state profiles                                                   */
/* -------------------------------------------------------------------------- */

export const septicShockProfile: PhysiologyProfile = {
  id: "septic-shock",
  name: "Septic Shock",
  type: "disease",
  variables: {
    svr: "down-down",
    hr: "up-up",
    contractility: "variable",
    preload: "down",
    afterload: "down-down",
    co: "variable",
    map: "down-down",
    venousReturn: "down",
    myocardialO2Demand: "up",
  },
  mechanism: "Inflammatory vasodilation → decreased SVR. Capillary leak → reduced effective preload. Septic cardiomyopathy may depress contractility.",
  clinicalContext: "Hyperdynamic (high CO, low SVR) early; may evolve to hypodynamic with myocardial depression.",
};

export const cardiogenicShockProfile: PhysiologyProfile = {
  id: "cardiogenic-shock",
  name: "Cardiogenic Shock",
  type: "disease",
  variables: {
    svr: "up-up",
    hr: "up",
    contractility: "down-down",
    preload: "up-up",
    afterload: "up",
    co: "down-down",
    map: "down",
    venousReturn: "up",
    myocardialO2Demand: "up-up",
  },
  mechanism: "Pump failure → decreased CO → compensatory sympathetic activation → increased SVR and HR. Elevated filling pressures.",
  clinicalContext: "Cold and wet presentation. Requires inotropic support ± afterload reduction, NOT vasopressors alone.",
};

export const obstructiveShockProfile: PhysiologyProfile = {
  id: "obstructive-shock",
  name: "Obstructive Shock (Massive PE)",
  type: "disease",
  variables: {
    svr: "up",
    hr: "up-up",
    contractility: "down",
    preload: "down-down",
    afterload: "up-up",
    co: "down-down",
    map: "down-down",
    pvr: "up-up",
    venousReturn: "down",
  },
  mechanism: "Acute RV pressure overload → RV dilation → interventricular septum bowing → LV underfilling → decreased CO.",
  clinicalContext: "Massive PE: acute RV failure with obstructive physiology. Treatment targets the obstruction (thrombolysis) not just hemodynamics.",
};

export const hypovolemicShockProfile: PhysiologyProfile = {
  id: "hypovolemic-shock",
  name: "Hypovolemic Shock",
  type: "disease",
  variables: {
    svr: "up-up",
    hr: "up-up",
    contractility: "up",
    preload: "down-down",
    afterload: "up",
    co: "down-down",
    map: "down",
    venousReturn: "down-down",
    myocardialO2Demand: "up",
  },
  mechanism: "Reduced circulating volume → decreased venous return → decreased preload → decreased CO. Compensatory sympathetic response.",
  clinicalContext: "Volume resuscitation is primary therapy. Vasopressors without volume are harmful.",
};

export const ardsProfile: PhysiologyProfile = {
  id: "ards",
  name: "ARDS",
  type: "disease",
  variables: {
    pvr: "up-up",
    co: "variable",
    preload: "variable",
    afterload: "up",
  },
  mechanism: "Diffuse alveolar damage → V/Q mismatch + intrapulmonary shunt. Hypoxic pulmonary vasoconstriction → elevated PVR → RV strain.",
  clinicalContext: "Lung-protective ventilation required. Avoid fluid overload. Prone positioning for P/F < 150.",
};

export const pulmonaryHypertensionProfile: PhysiologyProfile = {
  id: "pulmonary-hypertension",
  name: "Pulmonary Hypertension / RV Failure",
  type: "disease",
  variables: {
    svr: "variable",
    hr: "up",
    contractility: "down",
    preload: "up",
    co: "down",
    map: "down",
    pvr: "up-up",
    venousReturn: "up",
  },
  mechanism: "Chronic or acute elevation of PVR → RV pressure overload → RV dilation and failure → decreased LV filling.",
  clinicalContext: "Avoid systemic vasodilators that worsen V/Q mismatch. Consider inhaled pulmonary vasodilators (iNO, epoprostenol).",
};

/* -------------------------------------------------------------------------- */
/*  Aggregated export                                                        */
/* -------------------------------------------------------------------------- */

export const physiologyProfiles: readonly PhysiologyProfile[] = [
  // Drugs
  norepinephrineProfile,
  vasopressinProfile,
  phenylephrineProfile,
  epinephrineProfile,
  dobutamineProfile,
  milrinoneProfile,
  nicardipineProfile,
  propofolProfile,
  // Diseases
  septicShockProfile,
  cardiogenicShockProfile,
  obstructiveShockProfile,
  hypovolemicShockProfile,
  ardsProfile,
  pulmonaryHypertensionProfile,
];
