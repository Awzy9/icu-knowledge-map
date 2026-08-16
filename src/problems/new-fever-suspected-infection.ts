import type { ClinicalProblem } from "@/content-types";

export const newFeverSuspectedInfection: ClinicalProblem = {
  id: "new-fever-suspected-infection",
  slug: "new-fever-suspected-infection",
  title: "New Fever in the ICU & Suspected Infection",
  category: "infectious",
  oneLiner: "Systematic diagnostic workup of new ICU fever (T ≥ 38.3°C): line and device screening, pulmonary/abdominal/urinary source triage, distinguishing infectious vs non-infectious fever, and rational blood culturing.",
  relatedTopicIds: [
      "sepsis",
      "septic-shock",
      "vap",
      "hap",
      "mdr-organisms",
      "necrotizing-soft-tissue-infections",
      "meningitis-encephalitis"
    ],
  body: [
    {
      type: "paragraph",
      text: "New-onset fever (core body temperature ≥ 38.3°C / 101.0°F) in an ICU patient is a daily clinical dilemma. While fever frequently signals nosocomial bacterial infection (VAP, CRBSI, CAUTI, C. difficile, surgical site infection), up to 30–50% of new ICU fevers are non-infectious (drug fever, DVT/PE, transfusion reaction, acute pancreatitis, intracranial fever). The bedside task is to screen for severe sepsis/septic shock, systematically inspect all lines and invasive devices, and obtain rational microbiological diagnostics before unguided antibiotic escalation.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Necrotizing Soft Tissue Infection (NSTI / Fournier gangrene; severe pain out of proportion to exam, skin bullae, subcutaneous crepitus), Catheter-Related Bloodstream Infection with Septic Shock, Acute Intra-Abdominal Disaster (perforated viscus, anastomotic leak), and Malignant Hyperthermia / Neuroleptic Malignant Syndrome / Serotonin Syndrome.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. RECOGNIZE & INITIAL SAFETY SCREEN",
          value: "• Measure Core Temperature: Esophageal, bladder, or rectal thermometry (axillary/temporal measurements are notoriously inaccurate in ICU shock states).\n• Hemodynamic Screen for Sepsis: Check for new hypotension (MAP < 65), acute tachypnea, rising oxygen requirement, altered mental status, or rising serum lactate.\n• Immediate Danger Signs: Mottled skin, purpura fulminans, severe unexplained metabolic acidosis, rapidly expanding erythema with blister formation.",
        },
        {
          label: "2. SYSTEMATIC '5-W' NOSOCOMIAL INFECTION AUDIT",
          value: "• Wind (Pulmonary): Ventilator-Associated Pneumonia (VAP) or Hospital-Acquired Pneumonia (HAP); purulent endotracheal secretions, new or progressive pulmonary infiltrates on CXR, worsening PaO2/FiO2 ratio.\n• Water (Urinary Tract): Catheter-Associated Urinary Tract Infection (CAUTI); cloudy urine, suprapubic tenderness (note: asymptomatic pyuria/candiduria in catheterized patients is common colonization and rarely causes fever alone).\n• Wound (Surgical Sites & Skin): Surgical incisions, sternotomy, drains, decubitus pressure ulcers, cellulitis, necrotizing fasciitis (probe wounds, inspect under dressings).\n• Waves / Wire (Vascular Catheters): Central Venous Catheter (CVC), hemodialysis lines, arterial lines (inspect insertion sites for erythema, induration, purulence; check catheter dwell time).\n• What did we do? (Drugs & Transfusions): Drug-induced fever (beta-lactams, anticonvulsants, heparin-induced), acute hemolytic or febrile non-hemolytic transfusion reactions, acute acalculous cholecystitis, C. difficile colitis (watery diarrhea, leukocytosis).",
        },
        {
          label: "3. TARGETED DIAGNOSTIC WORKUP",
          value: "• Blood Cultures: Draw at least 2 sets of blood cultures (1 set peripheral venipuncture + 1 set from each lumen of indwelling central lines) PRIOR to initiating/modifying antimicrobials; calculate differential time to positivity (DTP).\n• Endotracheal Aspirate (ETA) / Sputum: Quantitative or semiquantitative Gram stain and bacterial culture.\n• Urinalysis & Urine Culture: Specimen collected from newly placed catheter or aspiration port (never from drainage bag).\n• Stool Clostridioides difficile PCR & Toxin EIA: If watery diarrhea (≥ 3 loose stools in 24h) or unexplained leukocytosis.\n• Diagnostic Imaging: Portable CXR; Bedside POCUS (gallbladder for cholecystitis, DVT compression ultrasound, pleural effusions); CT Abdomen/Pelvis if intra-abdominal source is suspected.",
        },
        {
          label: "4. INITIAL ANTIMICROBIAL & SOURCE CONTROL PRINCIPLES",
          value: "• Hemodynamically Stable (No Shock or Organ Dysfunction): It is safe and appropriate to withhold new broad-spectrum antibiotics for several hours while completing thorough physical exam, cultures, and imaging to avoid indiscriminate antibiotic overuse.\n• Sepsis / Septic Shock Present: Administer empiric broad-spectrum IV antimicrobials covering local hospital-acquired pathogens (MRSA + Pseudomonas aeruginosa) within 1 hour.\n• Emergency Source Control: If line-associated infection is suspected in shock, remove the central line immediately; if intra-abdominal disaster or NSTI is suspected, obtain immediate surgical consultation for operative debridement.",
        },
        {
          label: "5. REASSESSMENT & ANTIMICROBIAL TIME-OUT (AT 48–72 HOURS)",
          value: "• Review all culture results, viral PCRs, and rapid multiplex panels at 48 hours.\n• De-escalate or Discontinue: Narrow spectrum based on sensitivities, discontinue vancomycin if nasal MRSA PCR is negative, and stop empiric antibiotics if a non-infectious etiology is identified.",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Reflexively adding broad-spectrum Vancomycin and Meropenem for every single fever spike without examining the patient, inspecting surgical wounds, or considering non-infectious causes (e.g. DVT, drug fever, pancreatitis, post-operative systemic inflammatory response). This drives antimicrobial resistance and C. difficile infections without improving clinical outcomes.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Sepsis & Septic Shock: SSC guidelines, bundle delivery, and lactate clearance.\n• VAP & HAP: Diagnostic thresholds, quantitative cultures, and 7-day de-escalation.\n• Catheter Infections: Differential time to positivity, line salvage vs removal, and catheter lock therapy.\n• C. difficile: Toxin assays, oral vancomycin/fidaxomicin, and surgical triggers for toxic megacolon.\n• Antimicrobial Stewardship: PK/PD beta-lactam infusions and rapid molecular diagnostic interpretation.",
        },
      ],
    },
  ],
};
