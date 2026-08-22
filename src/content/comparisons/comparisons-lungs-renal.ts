import type { Comparison } from "@/content-types/comparison";

const A = "ards", CP = "cpe";
const TR = "trali", TC = "taco";
const PRE = "prerenal", INT = "intrinsic", POST = "postrenal";

export const ardsVsCpe: Comparison = {
  id: "ards-vs-cardiogenic-edema",
  title: "ARDS vs Cardiogenic Pulmonary Edema",
  subtitle: "Injured barrier vs elevated pressures",
  system: "Respiratory",
  entities: [
    { id: A, label: "ARDS", href: "/topics/ards" },
    { id: CP, label: "Cardiogenic edema", href: "/topics/cardiogenic-pulmonary-edema" },
  ],
  rows: [
    { label: "Mechanism", group: "mechanism", values: [
      { entityId: A, content: "Alveolar-capillary barrier injury → protein-rich, non-cardiogenic edema (diffuse alveolar damage)", emphasis: true },
      { entityId: CP, content: "Elevated LV filling pressures → hydrostatic transudative edema" },
    ]},
    { label: "History / context", group: "assessment", values: [
      { entityId: A, content: "Pneumonia, aspiration, sepsis, pancreatitis, trauma/transfusion; onset over hours–days; no JVD" },
      { entityId: CP, content: "HF, ischemia, arrhythmia, hypertensive crisis, fluid overload; JVD, S3, orthopnea", emphasis: true },
    ]},
    { label: "CXR", group: "assessment", values: [
      { entityId: A, content: "Bilateral opacities; normal heart size; air bronchograms; effusions atypical" },
      { entityId: CP, content: "Congestion ± cardiomegaly, Kerley lines, pleural effusions", emphasis: true },
    ]},
    { label: "POCUS", group: "assessment", values: [
      { entityId: A, content: "B-lines with spared areas, pleural-line irregularity, consolidations" },
      { entityId: CP, content: "Diffuse homogeneous B-lines, effusions, plethoric IVC", emphasis: true },
    ]},
    { label: "Echo", group: "assessment", values: [
      { entityId: A, content: "Normal LV function (unless concurrent septic cardiomyopathy)" },
      { entityId: CP, content: "Reduced EF and/or diastolic dysfunction, valvular lesion" },
    ]},
    { label: "BNP limitations", group: "traps", values: [
      { entityId: A, content: "BNP/NT-proBNP rises in sepsis and ARDS too — an elevated value does NOT prove cardiogenic", emphasis: true },
      { entityId: CP, content: "A low value argues strongly against cardiogenic edema; interpret with context, never alone" },
    ]},
    { label: "Hemodynamics", group: "assessment", values: [
      { entityId: A, content: "Normal filling pressures (if measured)" },
      { entityId: CP, content: "Elevated filling pressures" },
    ]},
    { label: "Response to PEEP", group: "management", values: [
      { entityId: A, content: "Recruits alveoli; oxygenation improves — PEEP is therapy within a lung-protective framework" },
      { entityId: CP, content: "Oxygenation improves by redistributing edema — definitive therapy is pressure/volume offload", emphasis: true },
    ]},
    { label: "Treatment priorities", group: "management", values: [
      { entityId: A, content: "Treat the trigger; 4–6 mL/kg PBW, Pplat ≤30; prone if severe; avoid fluid overload while supporting perfusion" },
      { entityId: CP, content: "Oxygenation/NIV support, afterload/preload reduction, diuresis; treat the cardiac cause (ischemia, rate, valve)", emphasis: true },
    ]},
  ],
  references: [
    { label: "ESICM 2023 ARDS guideline entries (project)" },
    { label: "AHF guideline entries (project)" },
  ],
};

export const traliVsTaco: Comparison = {
  id: "trali-vs-taco",
  title: "TRALI vs TACO",
  subtitle: "Transfusion-associated lung injury vs circulatory overload",
  system: "Hematology",
  entities: [
    { id: TR, label: "TRALI", href: "/topics/transfusion" },
    { id: TC, label: "TACO", href: "/topics/transfusion" },
  ],
  rows: [
    { label: "Timing", group: "mechanism", values: [
      { entityId: TR, content: "During or within 6 h of transfusion (consensus definition)", emphasis: true },
      { entityId: TC, content: "During or shortly after transfusion, commonly within a 24 h surveillance window" },
    ]},
    { label: "Mechanism", group: "mechanism", values: [
      { entityId: TR, content: "Donor antibodies / neutrophil-priming mediators → acute non-cardiogenic lung injury", emphasis: true },
      { entityId: TC, content: "Transfused volume exceeds cardiovascular reserve → hydrostatic pulmonary edema", emphasis: true },
    ]},
    { label: "BP", group: "assessment", values: [
      { entityId: TR, content: "Often hypotensive", emphasis: true },
      { entityId: TC, content: "Often hypertensive", emphasis: true },
    ]},
    { label: "JVP / exam", group: "assessment", values: [
      { entityId: TR, content: "Normal JVP; no peripheral edema" },
      { entityId: TC, content: "Raised JVP, peripheral edema, weight gain" },
    ]},
    { label: "BNP / NT-proBNP", group: "traps", values: [
      { entityId: TR, content: "Not diagnostic; may rise from critical illness itself" },
      { entityId: TC, content: "Pre-vs-post rise supports TACO but a single post-transfusion value is not decisive — use volume status and echo", emphasis: true },
    ]},
    { label: "CXR", group: "assessment", values: [
      { entityId: TR, content: "Bilateral infiltrates, normal cardiac silhouette" },
      { entityId: TC, content: "Congestion ± cardiomegaly, effusions" },
    ]},
    { label: "Echo", group: "assessment", values: [
      { entityId: TR, content: "Normal filling pressures/function" },
      { entityId: TC, content: "Volume-overloaded ± systolic/diastolic dysfunction" },
    ]},
    { label: "Response to diuresis", group: "management", values: [
      { entityId: TR, content: "Minimal — it is not a volume problem", emphasis: true },
      { entityId: TC, content: "Prompt improvement", emphasis: true },
    ]},
    { label: "Treatment", group: "management", values: [
      { entityId: TR, content: "Stop transfusion; supportive care incl. lung-protective ventilation if severe; report reaction; no diuresis-first strategy" },
      { entityId: TC, content: "Stop/slow transfusion, oxygen ± NIV, diurese; slower future infusions" },
    ]},
    { label: "Prevention", group: "traps", values: [
      { entityId: TR, content: "Avoid unnecessary plasma-rich exposures; risk-reduced plasma strategies per blood bank; transfuse only when indicated" },
      { entityId: TC, content: "Slow infusion rates, single-unit-at-a-time reassessment, prophylactic diuretic in high-risk recipients" },
    ]},
  ],
  caveat: "Definitions follow current international transfusion-reaction consensus; borderline cases (possible TRALI with ALI risk factors) are reported and adjudicated by the blood bank.",
  references: [{ label: "AABB / transfusion guideline entries (project)" }],
};

export const akiComparison: Comparison = {
  id: "aki-categories",
  title: "AKI Categories",
  subtitle: "Prerenal vs Intrinsic (ATN) vs Postrenal",
  system: "Renal",
  entities: [
    { id: PRE, label: "Prerenal", href: "/topics/aki" },
    { id: INT, label: "Intrinsic", href: "/topics/aki" },
    { id: POST, label: "Postrenal", href: "/topics/aki" },
  ],
  rows: [
    { label: "Mechanism", group: "mechanism", values: [
      { entityId: PRE, content: "Reduced renal perfusion; parenchyma intact" },
      { entityId: INT, content: "Direct tubular/glomerular/interstitial injury", emphasis: true },
      { entityId: POST, content: "Obstruction to urine outflow", emphasis: true },
    ]},
    { label: "Urine findings", group: "assessment", values: [
      { entityId: PRE, content: "Bland sediment; concentrated urine (high osmolality, low Na)" },
      { entityId: INT, content: "Muddy-brown granular casts; isothenuric; Na higher", emphasis: true },
      { entityId: POST, content: "Variable; may be anuric" },
    ]},
    { label: "POCUS", group: "assessment", values: [
      { entityId: PRE, content: "Collapsible IVC; small/hyperkinetic LV if hypovolemia" },
      { entityId: INT, content: "Often nonspecific" },
      { entityId: POST, content: "Bilateral hydronephrosis (absence does not exclude obstruction — sensitivity limited)", emphasis: true },
    ]},
    { label: "History", group: "assessment", values: [
      { entityId: PRE, content: "Diuretics, GI losses, bleeding, poor intake, heart failure" },
      { entityId: INT, content: "Sepsis, nephrotoxins (aminoglycosides, contrast, pigments), prolonged ischemia" },
      { entityId: POST, content: "BPH, malignancy, stones, new anuria, catheter malfunction" },
    ]},
    { label: "Response to fluids", group: "management", values: [
      { entityId: PRE, content: "Improves with perfusion restored", emphasis: true },
      { entityId: INT, content: "No brisk improvement; supportive until recovery" },
      { entityId: POST, content: "No improvement until obstruction relieved (flush/check catheter first!)", emphasis: true },
    ]},
    { label: "Common causes", group: "traps", values: [
      { entityId: PRE, content: "Hemorrhage, diarrhea, over-diuresis, third-spacing" },
      { entityId: INT, content: "ATN from sepsis/ischemia/toxins; AIN from drugs" },
      { entityId: POST, content: "Clot retention, neurogenic bladder, bilateral ureteric obstruction" },
    ]},
    { label: "FeNa / FeUrea", group: "traps", values: [
      { entityId: PRE, content: "Traditionally low — BUT unreliable on diuretics, with CKD, in sepsis, or after contrast", emphasis: true },
      { entityId: INT, content: "Traditionally higher — same caveats; never diagnose on indices alone", emphasis: true },
      { entityId: POST, content: "Not applicable — examine/image and relieve obstruction" },
    ]},
  ],
  caveat: "FeNa/FeUrea are adjuncts with major limitations (diuretics, CKD, sepsis). Clinical context + ultrasound + sediment outweigh indices.",
  references: [{ label: "KDIGO AKI guideline entry (project)" }],
};
