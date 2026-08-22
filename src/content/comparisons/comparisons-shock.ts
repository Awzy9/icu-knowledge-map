import type { Comparison } from "@/content-types/comparison";

const S = "septic", C = "cardiogenic", O = "obstructive", H = "hypovolemic";
const PE = "pe", TA = "tamponade", TP = "tension";

export const shockTypesComparison: Comparison = {
  id: "shock-types",
  title: "Shock Types at a Glance",
  subtitle: "Septic vs Cardiogenic vs Obstructive vs Hypovolemic",
  system: "Cardiovascular",
  entities: [
    { id: S, label: "Septic", href: "/topics/septic-shock" },
    { id: C, label: "Cardiogenic", href: "/topics/cardiogenic-shock" },
    { id: O, label: "Obstructive", href: "/topics/obstructive-shock" },
    { id: H, label: "Hypovolemic" },
  ],
  rows: [
    { label: "Mechanism", group: "mechanism", values: [
      { entityId: S, content: "Vasodilatory state from infection — capillary leak + vasopressor deficiency" },
      { entityId: C, content: "Pump failure (MI, myocarditis, arrhythmia, valve)", emphasis: true },
      { entityId: O, content: "Mechanical obstruction of filling or output (PE, tamponade, tension pneumothorax)" },
      { entityId: H, content: "Intravascular volume loss (hemorrhage, GI/renal losses)", emphasis: true },
    ]},
    { label: "Preload", group: "assessment", values: [
      { entityId: S, content: "Low–normal (capillary leak)" },
      { entityId: C, content: "Often elevated (congested); can be low" },
      { entityId: O, content: "High (obstructed filling)" },
      { entityId: H, content: "Low", emphasis: true },
    ]},
    { label: "Cardiac output", group: "assessment", values: [
      { entityId: S, content: "Normal or high early; may fall late" },
      { entityId: C, content: "Low", emphasis: true },
      { entityId: O, content: "Low" },
      { entityId: H, content: "Low" },
    ]},
    { label: "SVR", group: "assessment", values: [
      { entityId: S, content: "Low", emphasis: true },
      { entityId: C, content: "High (compensatory)" },
      { entityId: O, content: "High" },
      { entityId: H, content: "High" },
    ]},
    { label: "CVP", group: "assessment", values: [
      { entityId: S, content: "Low" },
      { entityId: C, content: "High" },
      { entityId: O, content: "High — tamponade: blunted y descent" },
      { entityId: H, content: "Low" },
    ]},
    { label: "SvO₂ / ScvO₂", group: "assessment", values: [
      { entityId: S, content: "High (impaired extraction)", emphasis: true },
      { entityId: C, content: "Low" },
      { entityId: O, content: "Low–variable" },
      { entityId: H, content: "Low until late" },
    ]},
    { label: "Skin / perfusion", group: "assessment", values: [
      { entityId: S, content: "Warm early; cool in late/decompensated phase" },
      { entityId: C, content: "Cool, mottled" },
      { entityId: O, content: "Cool" },
      { entityId: H, content: "Cool, pale" },
    ]},
    { label: "POCUS", group: "assessment", values: [
      { entityId: S, content: "Hyperdynamic LV, collapsing IVC; hunt the source" },
      { entityId: C, content: "Reduced EF, dilated chambers, B-profile lungs" },
      { entityId: O, content: "See obstructive trio comparison" },
      { entityId: H, content: "Flat IVC, small hyperkinetic LV; free-fluid sweep" },
    ]},
    { label: "First priorities", group: "management", values: [
      { entityId: S, content: "Cultures → broad antimicrobials urgently; balanced crystalloid for hypoperfusion; norepinephrine to MAP ≥65; early source control" },
      { entityId: C, content: "Support pump (inotrope), treat the cause urgently (revascularization, rate/rhythm, valve) — avoid reflexive fluid stacking", emphasis: true },
      { entityId: O, content: "Relieve the obstruction: reperfusion / pericardiocentesis / decompression", emphasis: true },
      { entityId: H, content: "Stop the loss + restore volume — blood early if hemorrhagic" },
    ]},
    { label: "Common traps", group: "traps", values: [
      { entityId: S, content: "Warm skin ≠ stability; delaying source control; ignoring rising lactate" },
      { entityId: C, content: "Treating ACS cardiogenic shock that looks like sepsis with more fluid", emphasis: true },
      { entityId: O, content: "Fluid-loading tamponade or a failing RV — worsens both" },
      { entityId: H, content: "Crystalloid-for-blood substitution in hemorrhagic shock" },
    ]},
  ],
  references: [
    { label: "ESICM shock consensus (project guideline entry)" },
    { label: "Surviving Sepsis Campaign (project sepsis guideline entries)" },
  ],
};

export const obstructiveShockTrio: Comparison = {
  id: "obstructive-shock-trio",
  title: "Obstructive Shock Trio",
  subtitle: "High-risk PE vs Tamponade vs Tension Pneumothorax",
  system: "Cardiovascular",
  entities: [
    { id: PE, label: "High-risk PE", href: "/topics/pulmonary-embolism" },
    { id: TA, label: "Tamponade", href: "/topics/obstructive-shock" },
    { id: TP, label: "Tension PTX", href: "/topics/pneumothorax" },
  ],
  rows: [
    { label: "Mechanism", group: "mechanism", values: [
      { entityId: PE, content: "Acute mechanical RV outflow obstruction by clot" },
      { entityId: TA, content: "Pericardial pressure abolishes filling gradient", emphasis: true },
      { entityId: TP, content: "Intrapleural pressure collapses venous return + mediastinal shift" },
    ]},
    { label: "JVP / CVP", group: "assessment", values: [
      { entityId: PE, content: "Elevated" },
      { entityId: TA, content: "Elevated; prominent x descent; pulsus paradoxus", emphasis: true },
      { entityId: TP, content: "Elevated" },
    ]},
    { label: "Lung exam", group: "assessment", values: [
      { entityId: PE, content: "Clear" },
      { entityId: TA, content: "Clear" },
      { entityId: TP, content: "Unilateral absent breath sounds ± tracheal deviation (late)", emphasis: true },
    ]},
    { label: "POCUS", group: "assessment", values: [
      { entityId: PE, content: "RV dilation, McConnell sign, ± clot-in-transit" },
      { entityId: TA, content: "Effusion + RA/RV diastolic collapse, plethoric IVC, swinging heart", emphasis: true },
      { entityId: TP, content: "Absent lung sliding + shift; do NOT delay decompression for imaging when unstable" },
    ]},
    { label: "RV findings", group: "assessment", values: [
      { entityId: PE, content: "Dilated, strained RV", emphasis: true },
      { entityId: TA, content: "Compressed chambers (external squeeze)" },
      { entityId: TP, content: "Underfilled/small RV — preload is choked off", emphasis: true },
    ]},
    { label: "BP", group: "assessment", values: [
      { entityId: PE, content: "Hypotension; syncope common" },
      { entityId: TA, content: "Hypotension with exaggerated pulsus paradoxus" },
      { entityId: TP, content: "Precipitous collapse, especially in the ventilated patient", emphasis: true },
    ]},
    { label: "Key clue", group: "traps", values: [
      { entityId: PE, content: "Prostrating hypotension with clear lungs + acute RV strain" },
      { entityId: TA, content: "Known effusion (malignancy, uremia, viral pericarditis, dialysis)" },
      { entityId: TP, content: "Sudden deterioration on a ventilator or after line/chest procedure", emphasis: true },
    ]},
    { label: "Immediate treatment", group: "management", values: [
      { entityId: PE, content: "Anticoagulation + urgent reperfusion (systemic lysis / catheter / surgical embolectomy); cautious small-volume fluids only if RV underfilled", emphasis: true },
      { entityId: TA, content: "Pericardiocentesis — fluids are a bridge only", emphasis: true },
      { entityId: TP, content: "Immediate needle decompression → chest tube, before imaging if crashing", emphasis: true },
    ]},
  ],
  caveat: "All three share hypotension + elevated JVP; the discriminators are lung exam, POCUS chamber behaviour, and context.",
  references: [
    { label: "ESC PE guidance / project PE guideline entries" },
    { label: "Project obstructive-shock & pneumothorax topics" },
  ],
};
