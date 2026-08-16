import type { ClinicalProblem } from "@/content-types";

export const suspectedSepsis: ClinicalProblem = {
  id: "suspected-sepsis",
  slug: "suspected-sepsis",
  title: "Suspected Sepsis & Early Septic Shock",
  category: "infectious",
  oneLiner: "Surviving Sepsis Campaign 1-hour resuscitation: SOFA/qSOFA scoring, blood cultures before antimicrobials, 30 mL/kg balanced crystalloids, norepinephrine initiation, lactate clearance tracking, and emergency source control.",
  relatedTopicIds: [
    "sepsis",
    "septic-shock",
    "shock",
    "dic",
    "mdr-organisms",
  ],
  body: [
    {
      type: "paragraph",
      text: "Sepsis is defined as life-threatening organ dysfunction caused by a dysregulated host response to infection. When accompanied by refractory cellular/metabolic abnormalities and profound vasodilation requiring vasopressors to maintain MAP ≥ 65 mmHg with serum lactate > 2.0 mmol/L despite fluid resuscitation, it is designated Septic Shock (hospital mortality > 40%). Bedside resuscitation demands immediate implementation of the Surviving Sepsis Campaign (SSC) 1-Hour Bundle.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Fulminant Septic Shock with rapid vasoplegic collapse, Purpura Fulminans / Sepsis-Induced DIC (microvascular digital and cutaneous necrosis), Necrotizing Fasciitis, and Concealed Abscess (retroperitoneal/intra-abdominal) requiring emergent surgical debridement.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. RECOGNIZE & ASSESS ORGAN DYSFUNCTION (SOFA / qSOFA)",
          value: "• SOFA Score (Sequential Organ Failure Assessment): Acute rise of ≥ 2 points in total SOFA score identifies sepsis-induced organ dysfunction across 6 organ systems:\n  - Respiration (PaO2/FiO2 ratio).\n  - Coagulation (Platelets).\n  - Hepatic (Bilirubin).\n  - Cardiovascular (MAP & vasopressor requirement).\n  - CNS (Glasgow Coma Scale).\n  - Renal (Creatinine & Urine Output).\n• Quick SOFA (qSOFA) Bedside Screen: (1) Altered mental status (GCS < 15); (2) Respiratory rate ≥ 22 bpm; (3) Systolic BP ≤ 100 mmHg (≥ 2 criteria suggests high risk).",
        },
        {
          label: "2. THE SURVIVING SEPSIS CAMPAIGN (SSC) 1-HOUR BUNDLE",
          value: "Execute all 5 components within 60 minutes of recognition:\n• 1. Measure Serum Lactate: Remeasure within 2–4 hours if initial lactate > 2.0 mmol/L to guide resuscitation to lactate clearance (> 20% drop every 2h).\n• 2. Obtain Blood Cultures Prior to Antibiotics: At least 2 sets of blood cultures (aerobic and anaerobic; peripheral + central line).\n• 3. Administer Broad-Spectrum IV Antimicrobials: Initiate empiric IV antibiotics covering all likely bacterial/fungal pathogens within 1 hour.\n• 4. Begin Rapid IV Fluid Resuscitation: Infuse 30 mL/kg of Balanced Crystalloids (Lactated Ringer's or Plasma-Lyte; avoid 0.9% saline) within 3 hours for hypotension or lactate ≥ 4.0 mmol/L.\n• 5. Apply Vasopressors for Refractory Hypotension: Initiate Norepinephrine during or immediately after fluid loading to defend MAP ≥ 65 mmHg.",
        },
        {
          label: "3. TARGETED DIFFERENTIAL BY INFECTION SOURCE",
          value: "• Pulmonary (50% of sepsis cases): Pneumonia, severe VAP, aspiration, empyema.\n• Abdominal (20–25%): Peritonitis, perforated diverticulum, cholangitis, acute cholecystitis, mesenteric ischemia, anastomotic leak, acute pancreatitis with infected necrosis.\n• Urinary Tract (10–15%): Urosepsis, pyelonephritis, obstructive stone with infected hydronephrosis.\n• Skin & Soft Tissue: Necrotizing fasciitis, severe cellulitis, infected decubitus ulcers, surgical site infection.\n• Catheter & Implanted Devices: Central line infection, prosthetic valve endocarditis, cardiac device infection.\n• Central Nervous System: Bacterial meningitis, brain abscess, ventriculitis.",
        },
        {
          label: "4. THE ABSOLUTE CARDINAL MANDATE: EMERGENCY SOURCE CONTROL",
          value: "• Antimicrobials alone cannot cure closed-space sepsis. Identify and eradicate the source within 6 to 12 hours of diagnosis:\n  - Emergency Laparotomy: For perforated viscus, ischemic bowel, peritonitis.\n  - Percutaneous Drainage: For intra-abdominal, hepatic, or renal abscesses.\n  - Debridement: For necrotizing soft tissue infections (serial surgical exploration).\n  - Device Removal: Remove infected central venous catheters, urinary catheters, or foreign bodies.",
        },
        {
          label: "5. ADVANCED HEMODYNAMIC ESCALATION IN SEPTIC SHOCK",
          value: "• Dynamic Fluid Responsiveness: Use Passive Leg Raise (PLR) or Stroke Volume Variation (SVV) to guide further fluids; avoid unguided fluid loading once 30 mL/kg is given.\n• Vasopressin Addition: Add Vasopressin (fixed 0.03 U/min) when Norepinephrine exceeds 0.25 mcg/kg/min.\n• Stress-Dose Corticosteroids: Add Hydrocortisone (200 mg/day IV) for vasopressor-refractory shock.\n• Inotropy: Add Dobutamine (2.5–10 mcg/kg/min) if myocardial dysfunction (decreased ScvO2, elevated filling pressures, echocardiographic hypokinesis) persists despite adequate MAP.",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Delaying the initiation of Norepinephrine until full crystalloid fluid resuscitation (30 mL/kg) is completed. Early administration of Norepinephrine during initial fluid loading increases venous return via splanchnic venoconstriction, restores coronary and renal perfusion pressure immediately, and prevents fatal under-resuscitation.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Sepsis: Pathogenesis, immune dysregulation, and diagnostic criteria.\n• Septic Shock: SSC guidelines, vasopressor algorithms, and fluid stewardship.\n• Shock: Hemodynamic monitoring and microcirculatory perfusion endpoints.\n• Vasopressors & Inotropes: Receptor profiles, Vasopressin kinetics, and Angiotensin II.\n• DIC: Sepsis-induced coagulopathy (SIC) scoring and microvascular thrombosis.\n• Antimicrobial Stewardship: PK/PD beta-lactam optimization and de-escalation.",
        },
      ],
    },
  ],
};
