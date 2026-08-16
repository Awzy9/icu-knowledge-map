import type { ClinicalProblem } from "@/content-types";

export const persistentFeverDespiteAntibiotics: ClinicalProblem = {
  id: "persistent-fever-despite-antibiotics",
  slug: "persistent-fever-despite-antibiotics",
  title: "Persistent Fever Despite Broad-Spectrum Antibiotics",
  category: "infectious",
  oneLiner: "Evaluating unresolved fever after 48–72 hours of antimicrobial therapy: undrained closed-space infection, resistant/fungal pathogens, catheter infections, C. difficile, drug fever, and ICU thrombosis.",
  relatedTopicIds: [
      "sepsis",
      "mdr-organisms",
      "necrotizing-soft-tissue-infections",
      "meningitis-encephalitis",
      "aki",
      "vap",
      "hap"
    ],
  body: [
    {
      type: "paragraph",
      text: "Persistent or recurrent fever after 48 to 72 hours of empiric broad-spectrum antibiotic therapy is a frequent, perplexing ICU challenge. Reflexively broadening antibacterial coverage without a systematic anatomic and microbiological audit is a major clinical trap that selects for multidrug-resistant pathogens and fungal superinfections. The bedside priority is to systematically evaluate the 6 cardinal mechanisms of antimicrobial failure: undrained anatomical source, inadequate PK/PD dosing, resistant or non-bacterial pathogens, catheter/hardware biofilm, drug fever, and non-infectious inflammatory triggers.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Undrained Loculated Abscess (subdiaphragmatic, pelvic, psoas, or retroperitoneal), Empyema / Parapneumonic Effusion, Infective Endocarditis with valvular destruction, Suppurative Thrombophlebitis / Septic Thrombosis (Lemierre syndrome or infected central line thrombus), Invasive Candidiasis, and Fulminant Clostridioides difficile Colitis.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. THE 6 CARDINAL MECHANISMS OF ANTIMICROBIAL FAILURE",
          value: "• 1. Undrained Closed-Space Infection (Source Control Failure): Antibiotics cannot penetrate thick fibrous capsules, low pH abscess cavities, or dense necrotic tissue.\n• 2. Indwelling Device Biofilm: Microorganisms embedded in glycocalyx on central venous catheters, urinary catheters, endotracheal tubes, or orthopedic hardware.\n• 3. Resistant or Non-Bacterial Pathogens: Methicillin-resistant S. aureus (MRSA), Vancomycin-resistant Enterococcus (VRE), Carbapenem-resistant Enterobacterales (CRE), MDR Pseudomonas, Stenotrophomonas maltophilia, Candida albicans / auris, Aspergillus, CMV, HSV.\n• 4. Pharmacokinetic / Pharmacodynamic (PK/PD) Underdosing: Augmented renal clearance (ARC: CrCl > 130 mL/min) or high volume of distribution leading to subtherapeutic antibiotic troughs.\n• 5. Drug-Induced Fever: Offending antibiotics (beta-lactams, vancomycin, sulfonamides), anticonvulsants (phenytoin, carbamazepine), or heparin.\n• 6. Non-Infectious ICU Inflammation: Venous thromboembolism (DVT/PE), acute pancreatitis, acalculous cholecystitis, intracranial fever, hematoma resorption.",
        },
        {
          label: "2. SYSTEMATIC STEP-BY-STEP DIAGNOSTIC AUDIT",
          value: "• Repeat Blood Cultures: Draw 2 new sets of blood cultures (including catheter lumens) to check for persistent bacteremia or breakthrough fungemia.\n• Comprehensive Imaging Search (The 'Pan-Scan' Strategy):\n  - CT Abdomen & Pelvis with IV contrast: Highest yield study in unexplained fever (evaluates for occult abscess, anastomotic leak, bowel ischemia, pancreatitis, acalculous cholecystitis).\n  - CT Chest: Evaluates for parapneumonic empyema, lung abscess, cavitary necrosis, or septic pulmonary emboli.\n  - Echocardiography (TTE / TEE): Mandatory if persistent S. aureus, Enterococcus, or Candida bacteremia is present to rule out infective endocarditis.\n  - Vascular Doppler Ultrasound: Rule out lower/upper extremity DVT and suppurative line thrombophlebitis.",
        },
        {
          label: "3. LINE MANAGEMENT & HARDWARE AUDIT",
          value: "• Central Venous Catheters: If indwelling > 5–7 days, remove and replace at a new anatomical site, or perform tip culture (> 15 CFU confirms catheter colonization).\n• Urinary Catheter: Replace Foley catheter if indwelling > 7 days.",
        },
        {
          label: "4. PHARMACOKINETIC & ANTIMICROBIAL OPTIMIZATION",
          value: "• Optimize Beta-Lactams: Switch intermittent boluses to Extended (3–4 hr) or Continuous 24-hour Infusions to maximize time above MIC (> 100% fT > MIC).\n• Therapeutic Drug Monitoring: Check vancomycin AUC24/MIC (target 400–600) or trough (15–20 mcg/mL), aminoglycoside peaks/troughs.\n• Empiric Antifungal Therapy: In patients with septic shock, multiple risk factors (TPN, broad-spectrum antibiotics > 7d, central lines, recent GI surgery), initiate IV Echinocandin (Caspofungin / Micafungin / Anidulafungin).",
        },
        {
          label: "5. REASSESSMENT & ANTIMICROBIAL TIME-OUT",
          value: "• Discontinue Offending Drugs: If drug fever is suspected (eosinophilia, rash, relative bradycardia), stop suspected medications; drug fever typically resolves within 48–72 hours of cessation.\n• Urgent Source Control: If CT reveals an abscess > 3 cm, arrange immediate percutaneous catheter drainage with Interventional Radiology or surgical debridement.",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Continually changing or escalating antibacterial coverage (e.g. adding colistin or tigecycline) without obtaining a contrast-enhanced CT of the abdomen/pelvis or chest. In over 70% of persistent ICU fevers, the root cause is an undrained anatomical fluid collection or an infected indwelling central line that no antibiotic can cure.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Sepsis: Source control timelines and immune dysregulation.\n• Catheter Infections: Catheter-related bloodstream infections, line removal criteria, and lock therapy.\n• C. difficile: Toxic megacolon, diagnostic algorithms, and oral vancomycin.\n• Antimicrobial Stewardship: PK/PD beta-lactam dosing and antifungal stewardship.\n• Intra-Abdominal Hypertension: Tertiary peritonitis and abdominal compartment syndrome.\n• VAP & HAP: Cavitary pneumonia, empyema, and resistant Gram-negative pathogens.",
        },
      ],
    },
  ],
};
