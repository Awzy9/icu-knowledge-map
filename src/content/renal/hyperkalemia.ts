import type { Topic } from "@/content-types";

export const hyperkalemia: Topic = {
  id: "hyperkalemia",
  slug: "hyperkalemia",
  title: "Severe Hyperkalemia in Critical Illness",
  category: "renal",
  oneLiner: "Nernst resting potential mechanics, ECG progression, the 3-step resuscitation framework (Stabilize, Shift, Eliminate), and post-dialysis rebound kinetics.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Potassium Disorders, Dialysis in the ICU, and Cardiac Emergencies",
    },
    {
      title: "UK Kidney Association Clinical Practice Guideline: Management of Hyperkalaemia in Adults",
      edition: "October 2023",
    },
  ],
  currentStatus: "Current as of the 2023 UK Kidney Association Hyperkalaemia Guideline and international critical care nephrology emergency protocols.",
  otherReferences: [
    "UK Kidney Association. Management of Hyperkalaemia in Adults. October 2023.",
    "Palmer BF, Clegg DJ. Diagnosis and treatment of hyperkalemia. Med Clin North Am. 2017;101(3):589-605.",
    "Levine M, et al. Critical review: Calcium administration in digoxin toxicity (the 'stone heart' debunked). J Emerg Med. 2011;40(1):41-46.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "acid-base-disorders", label: "Transcellular hydrogen-potassium exchange" },
    { type: "complication", targetId: "arrhythmias", label: "Malignant ventricular arrhythmias and sine-wave arrest" },
    { type: "related-to", targetId: "aki", label: "Acute kidney injury and loss of potassium excretion" },
    { type: "treated-with", targetId: "crrt", label: "Definitive extracorporeal elimination for refractory hyperkalemia" },
    { type: "related-to", targetId: "metabolic-acidosis", label: "Acidemic transcellular potassium shifts and type 4 RTA" },
  ],
  sections: [
    {
      id: "hyperkalemia.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Triad: Rapid Serum Verification, ECG Staging & Hemolysis Exclusion",
      summary: "Immediate 12-lead ECG is the essential triage tool. Differentiate true hyperkalemia from pseudohyperkalemia while initiating membrane stabilization.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "First Action: 12-Lead ECG", value: "Check immediately for sequential electrophysiological toxicity: (1) Peaked T-waves (narrow base, symmetrical), (2) PR prolongation and P-wave flattening, (3) QRS widening, (4) Sine wave pattern, (5) Asystole / VF." },
            { label: "Excluding Pseudohyperkalemia", value: "Suspect when elevated potassium occurs in an asymptomatic patient with normal ECG and renal function. Causes: In vitro hemolysis (traumatic venipuncture, prolonged tourniquet, pneumatic tube transit), severe thrombocytosis (platelets > 1,000,000/uL), or marked leukocytosis (WBC > 100,000/uL in leukemia). Confirm with an unspun heparinized whole-blood blood gas sample." },
            { label: "Search for Etiology", value: "Screen for AKI/ESRD, medication precipitants (RAAS inhibitors, spironolactone, NSAIDs, trimethoprim, calcineurin inhibitors), massive tissue breakdown (rhabdomyolysis, tumor lysis), and metabolic acidosis." }
          ]
        }
      ]
    },
    {
      id: "hyperkalemia.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Severe Electrolyte Emergencies",
      summary: "Differentiate hyperkalemic ECG changes from primary ischemia, bundle branch blocks, and other metabolic derangements.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Hyperacute T-Waves of STEMI: Ischemic T-waves have a broad base, asymmetrical shape, and local anatomical distribution with reciprocal ST depression; hyperkalemic T-waves are narrow-based, pointed, symmetrical, and diffuse across all leads.",
            "Pre-Existing Left Bundle Branch Block (LBBB) / Intraventricular Conduction Delay: Differentiate chronic baseline wide QRS from hyperkalemic QRS widening by comparing to prior baseline ECGs; when in doubt, administer IV Calcium.",
            "Severe Acidemia with Normal Potassium: Acidosis shifts potassium extracellularly (~0.3-0.6 mEq/L rise per 0.1 drop in pH in mineral metabolic acidosis).",
            "Severe Hypercalcemia: Shortened QTc interval and Osborn-like waves; hypercalcemia protects against potassium toxicity whereas hypocalcemia synergistically worsens potassium cardiotoxicity."
          ]
        }
      ]
    },
    {
      id: "hyperkalemia.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "hyperkalemia-guideline-ukka-2023",
          relevance: "UK Kidney Association 2023 clinical practice guideline for management of hyperkalemia"
        },
        {
          kind: "trial",
          id: "hyperkalemia-harmonize-trial",
          relevance: "HARMONIZE trial demonstrating rapid potassium reduction with sodium zirconium cyclosilicate (ZS-9)"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Severe hyperkalemia (serum potassium ≥ 6.5 mEq/L or any level with ECG changes) is an immediate electrophysiological emergency risking sine-wave ventricular arrest.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Potassium is the primary intracellular cation (140 mEq/L intracellular vs 3.5–5.0 mEq/L extracellular). The resting membrane potential of cardiac myocytes and conductive tissue is determined by the ratio of intracellular to extracellular potassium per the Nernst equation. Acute hyperkalemia causes partial cellular depolarization, inactivating fast voltage-gated sodium channels and accelerating repolarization.",
        },
        {
          type: "paragraph",
          text: "Critical care management is structured around an immediate three-part emergency algorithm: (1) Stabilize the cardiac membrane (IV calcium); (2) Shift potassium intracellularly (IV insulin + dextrose, high-dose nebulized albuterol); and (3) Eliminate potassium from the body (loop diuretics, novel potassium binders, or emergent hemodialysis/CRRT).",
        },
      ],
    },
    {
      id: "hyperkalemia.physiology",
      kind: "physiology",
      title: "Electrophysiology & The Nernst Equation of Cardiac Arrest",
      summary: "Resting membrane potential collapse, Nav1.5 fast sodium channel inactivation, Phase 3 acceleration, and progressive ECG stages.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "The cardiac resting membrane potential (Em) is defined by the Nernst Equation: Em = -61.5 × log10([K+]in / [K+]out). In health, Em is approximately -90 mV.",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Resting Depolarization & Na+ Inactivation",
              value: "Rising extracellular [K+] narrows the chemical gradient, shifting resting membrane potential toward zero (e.g. from -90 mV to -70 mV). This persistent depolarization causes voltage-dependent conformational inactivation of fast sodium channels (Nav1.5), slowing Phase 0 depolarization and severely depressing intra-myocardial conduction velocity.",
            },
            {
              label: "2. Accelerated Repolarization (IKr)",
              value: "Hyperkalemia simultaneously enhances outward potassium conductance via delayed rectifier (IKr) channels, shortening action potential duration and accelerating Phase 3 repolarization.",
            },
            {
              label: "3. Progressive ECG Stages",
              value: "• K+ 5.5–6.5: Tall, peaked, narrow-based, symmetrical T-waves (often with shortened QT interval).\n• K+ 6.5–7.5: PR interval prolongation, flattening and widening of P-waves, ST-segment depression.\n• K+ 7.0–8.0: Complete disappearance of P-waves (sinoventricular conduction), severe QRS widening, bundle branch blocks.\n• K+ > 8.0: Fusion of the wide QRS with the T-wave creating the lethal 'Sine-Wave Pattern', followed by Ventricular Fibrillation or Asystole.",
            },
          ],
        },
        {
          type: "callout",
          tone: "caution",
          text: "ECG changes do NOT correlate linearly with serum potassium levels. A patient with K+ of 8.2 mEq/L may have a normal ECG before abruptly degenerating into ventricular fibrillation, while another may develop sine-wave conduction at 6.8 mEq/L. Rate of potassium rise (e.g., in rhabdomyolysis or tumor lysis) is as critical as the absolute concentration.",
        },
      ],
    },
    {
      id: "hyperkalemia.stabilize",
      kind: "management",
      title: "Step 1: Cardiac Membrane Stabilization (IV Calcium)",
      summary: "Calcium gluconate vs calcium chloride dosing, mechanism of threshold potential restoration, and debunking the digoxin 'stone heart' myth.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Indication: ANY hyperkalemia with ECG changes (widened QRS, lost P-waves, sine wave) OR serum K+ ≥ 6.5 mEq/L in unstable patients:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Calcium Gluconate 10% (Preferred for Peripheral IV)",
              value: "Dose: 10 mL (1 g = 2.2 mmol / 90 mg elemental Ca2+) IV over 2–3 minutes. Preferred for peripheral veins because extravasation causes minimal soft-tissue injury.",
            },
            {
              label: "Calcium Chloride 10% (Preferred in Arrest / Central Lines)",
              value: "Dose: 10 mL (1 g = 6.8 mmol / 270 mg elemental Ca2+) IV over 2–3 minutes. Delivers 3 times more elemental calcium than gluconate. Mandates central venous access or true peri-arrest/code situations due to severe tissue necrosis upon peripheral extravasation.",
            },
            {
              label: "Mechanism of Action",
              value: "Calcium does NOT lower serum potassium. It increases extracellular calcium, shifting the threshold potential (Ethreshold) to a less negative value (from -65 mV to -45 mV). This restores the normal voltage gap between resting potential and threshold potential, reactivating fast sodium channels and narrowing the QRS within 1–3 minutes. Duration is short (30–60 minutes); repeat dose if ECG changes persist after 5–10 minutes.",
            },
            {
              label: "The Digoxin 'Stone Heart' Controversy Debunked",
              value: "Older dogma taught that IV calcium in digoxin toxicity caused irreversible tetanic cardiac contracture ('stone heart'). Extensive systematic reviews show that calcium does not cause arrest in digoxin toxicity; however, Digoxin-specific Fab fragments (DigiFab) remain the definitive first-line antidote.",
            },
          ],
        },
      ],
    },
    {
      id: "hyperkalemia.shift",
      kind: "management",
      title: "Step 2: Transcellular Potassium Shifting",
      summary: "IV regular insulin with dextrose, high-dose nebulized albuterol (10–20 mg), delayed hypoglycemia prevention, and sodium bicarbonate nuances.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Shifting agents drive extracellular potassium into skeletal muscle and hepatic cells within 15–30 minutes, lowering serum potassium by 0.5–1.5 mEq/L for 2–4 hours:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. IV Regular Insulin + Dextrose Protocol",
              value: "Dose: 10 units IV Regular Insulin + 50 mL of 50% Dextrose (D50W, 25 g glucose) as IV push over 5 minutes. (If blood glucose > 250 mg/dL, omit dextrose). Stimulates the Na+/K+-ATPase pump. Onset: 15–30 min; peak: 60 min; duration: 4–6 hours.",
            },
            {
              label: "Preventing Delayed Hypoglycemia in Renal Failure",
              value: "Insulin is cleared by the kidneys; in AKI/ESRD, insulin half-life is markedly prolonged while hepatic gluconeogenesis is blunted. Hypoglycemia occurs in up to 15–20% of patients 1–3 hours post-dose. Protocol: Initiate an infusion of 10% Dextrose (D10W at 50–75 mL/hr) for 3–4 hours and monitor blood glucose hourly for 4 hours.",
            },
            {
              label: "2. High-Dose Nebulized Beta-2 Agonist (Albuterol)",
              value: "Dose: 10–20 mg of nebulized albuterol over 15 minutes (this requires 4 to 8 standard 2.5 mg nebulizer vials — NOT a single 2.5 mg dose). Stimulates beta-2 receptors to activate Na+/K+-ATPase via cAMP. Lowers K+ by 0.6–1.0 mEq/L. Additive with insulin. Note: ~20% of ESRD patients are beta-2 non-responders.",
            },
            {
              label: "3. Sodium Bicarbonate (Narrow Role)",
              value: "IV Sodium Bicarbonate (50–100 mEq) is INEFFECTIVE for acute potassium shifting in the absence of metabolic acidemia. Indicated only when severe concurrent metabolic acidosis (pH < 7.20) coexists.",
            },
          ],
        },
      ],
    },
    {
      id: "hyperkalemia.eliminate",
      kind: "management",
      title: "Step 3: Total Body Potassium Elimination & Rebound Kinetics",
      summary: "Loop diuretics, novel potassium binders (Sodium Zirconium Cyclosilicate vs Patiromer), hemodialysis, and post-dialysis potassium rebound.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Stabilizing and shifting measures are temporary holding maneuvers; total body potassium must be permanently removed from the body:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Renal Excretion (Loop Diuretics)",
              value: "IV Furosemide (40–80 mg IV) or Bumetanide (1–2 mg IV) enhances distal tubular potassium secretion. Effective only in patients with preserved glomerular filtration and intact urine output; useless in anuric AKI/ESRD.",
            },
            {
              label: "2. Sodium Zirconium Cyclosilicate (SZC / Lokelma)",
              value: "Selective inorganic crystal cation exchanger that entraps K+ in exchange for Na+ throughout the GI tract. Onset of action: 1 hour. Dose: 10 g PO TID for up to 48 hours. Endorsed by the 2023 UK Kidney Association guideline for acute severe hyperkalemia in emergency/ICU settings.",
            },
            {
              label: "3. Patiromer (Veltassa)",
              value: "Non-absorbed polymer binding K+ in exchange for Ca2+ primarily in the colon. Slower onset (4–7 hours); preferred for chronic hyperkalemia management.",
            },
            {
              label: "4. Sodium Polystyrene Sulfonate (SPS / Kayexalate Hazard)",
              value: "Slower onset (4–24 hours). Boxed warning for intestinal necrosis, bowel perforation, and colonic ulceration, especially when formulated with sorbitol. Avoid in post-operative, ileus, or critically ill patients.",
            },
            {
              label: "5. Emergent Hemodialysis / CRRT",
              value: "The gold-standard definitive elimination modality. Intermittent hemodialysis (IHD) removes 30–50 mEq of potassium per hour using a 0 or 1 K+ bath. Continuous Renal Replacement Therapy (CRRT) provides steady, continuous clearance.",
            },
            {
              label: "The Post-Dialysis Potassium Rebound Phenomenon",
              value: "During acute hemodialysis, potassium is rapidly cleared from the small extracellular compartment (ECF, containing only 2% of body K+). Intracellular-to-extracellular equilibration lags behind. Within 1–2 hours after stopping IHD, potassium shifts back into the ECF, causing serum potassium to rebound upward by 1.0–1.5 mEq/L (a ~30% increase). Always recheck serum potassium 2 hours post-dialysis.",
            },
          ],
        },
      ],
    },
    {
      id: "hyperkalemia.complications",
      kind: "complications",
      title: "Complications of Hyperkalemia & Resuscitation",
      summary: "Ventricular fibrillation arrest, severe iatrogenic hypoglycemia, colonic necrosis, and rebound hyperkalemia.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Lethal Arrhythmias: Ventricular fibrillation, complete heart block, pulseless electrical activity (PEA), and asystole.",
            "Iatrogenic Hypoglycemia: Neuroglycopenic brain injury, seizures, and coma resulting from unmonitored insulin-dextrose administration in renal failure.",
            "Colonic Necrosis: Intestinal ischemia and transmural perforation secondary to Sodium Polystyrene Sulfonate (Kayexalate) with sorbitol.",
            "Post-Intervention Rebound Hyperkalemia: Recurrence of life-threatening cardiac conduction abnormalities 2–4 hours after shifting agents wear off if definitive elimination (dialysis) is delayed.",
          ],
        },
      ],
    },
    {
      id: "hyperkalemia.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical mistakes to avoid in acute hyperkalemia management.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Relying on a normal ECG to delay therapy in severe hyperkalemia (K+ > 6.5 mEq/L): Up to 50% of patients with K+ > 6.5 have no classical ECG changes prior to sudden malignant ventricular arrest.",
            "Under-dosing nebulized albuterol: Giving standard 2.5–5 mg asthma doses has minimal potassium-lowering effect; a full 10–20 mg dose (4–8 vials) is required to stimulate systemic beta-2 shifting.",
            "Failing to monitor glucose for 4 hours after insulin administration in renal failure: Delayed hypoglycemia peaks 2–3 hours post-insulin; maintain a dextrose infusion and check hourly blood sugars.",
            "Assuming IV Calcium lowers serum potassium: Calcium only stabilizes the cardiac membrane for 30–60 minutes; shifting and elimination therapies must be administered immediately.",
            "Failing to recheck serum potassium 2 hours post-hemodialysis: Transcellular re-equilibration frequently causes a 30% rebound in serum potassium, which may require a second dialysis run.",
          ],
        },
      ],
    },
    {
      id: "hyperkalemia.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Acute emergency use of novel gastrointestinal binders versus urgent hemodialysis.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Novel Potassium Binders in the Acute Resuscitation Phase: The 2023 UK Kidney Association guidelines positioned Sodium Zirconium Cyclosilicate (SZC) as an adjunct in acute hyperkalemia due to its 1-hour onset of action. However, in unstable patients with active ECG changes or anuric AKI, GI binders cannot replace urgent emergent hemodialysis, which clears 30–50 mEq of potassium within the first hour.",
        },
      ],
    },
  ],
};
