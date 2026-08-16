import type { Topic } from "@/content-types";

export const crrt: Topic = {
  id: "crrt",
  slug: "crrt",
  title: "Continuous Renal Replacement Therapy (CRRT)",
  shortName: "CRRT",
  category: "renal",
  oneLiner: "Principles of convection vs diffusion, filtration fraction, delivered effluent dosing (20–25 mL/kg/h), Regional Citrate Anticoagulation, and citrate toxicity.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Continuous Renal Replacement Therapies, Extracorporeal Blood Purification, and Anticoagulation for CRRT",
    },
    {
      title: "Ronco C, et al. Critical Care Nephrology",
      edition: "3rd Edition, 2018",
    },
  ],
  currentStatus: "Current as of the final published KDIGO Guidelines, the landmark RENAL, ATN, and STARRT-AKI trials, and international consensus on Regional Citrate Anticoagulation.",
  otherReferences: [
    "The RENAL Replacement Therapy Study Investigators. Intensity of continuous renal-replacement therapy in critically ill patients. N Engl J Med. 2009;361(17):1627-1638.",
    "The VA/NIH Acute Renal Failure Trial Network. Intensity of renal support in critically ill patients with acute kidney injury. N Engl J Med. 2008;359(1):7-20.",
    "Schneider AG, et al. Regional citrate anticoagulation for continuous renal replacement therapy: an update. Curr Opin Crit Care. 2017;23(6):487-492.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "aki", label: "KDIGO Stage 3 AKI and AEIOU dialysis indications" },
    { type: "related-to", targetId: "anticoagulation", label: "Circuit anticoagulation and regional citrate protocols" },
    { type: "related-to", targetId: "septic-shock", label: "Septic acute kidney injury and hemodynamic instability" },
    { type: "related-to", targetId: "metabolic-acidosis", label: "Correction of refractory acidemia and buffer reconstitution" },
    { type: "related-to", targetId: "hyperkalemia", label: "Continuous extracorporeal potassium clearance" },
  ],
  sections: [
    {
      id: "crrt.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "aki-kdigo-2012",
          relevance: "KDIGO guideline recommendations on CRRT modality, dose (20-25 mL/kg/h), and regional citrate anticoagulation"
        },
        {
          kind: "trial",
          id: "crrt-renal-trial",
          relevance: "RENAL landmark study establishing 25 mL/kg/h as the standard CRRT effluent dose"
        },
        {
          kind: "trial",
          id: "crrt-atn-trial",
          relevance: "ATN landmark study showing high-intensity dialysis does not improve AKI survival"
        },
        {
          kind: "trial",
          id: "aki-starrt-aki",
          relevance: "STARRT-AKI trial evaluating continuous renal replacement therapy timing"
        },
        {
          kind: "trial",
          id: "aki-akiki",
          relevance: "AKIKI trial on indications for initiating renal replacement therapy in the ICU"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "CRRT is continuous, slow extracorporeal blood purification providing steady solute clearance and fluid removal over 24 hours in hemodynamically unstable critically ill patients.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Continuous Renal Replacement Therapy (CRRT) is the preferred extracorporeal renal support modality for critically ill ICU patients with acute kidney injury and concurrent circulatory shock, refractory multiorgan failure, or acute brain injury with cerebral edema.",
        },
        {
          type: "paragraph",
          text: "Unlike Intermittent Hemodialysis (IHD)—which removes large fluid and solute volumes over 3–4 hours, frequently triggering intradialytic hypotension and secondary ischemic renal injury—CRRT operates continuously at lower flow rates. This allows precise net ultrafiltration, continuous metabolic control, and maintenance of cerebral perfusion pressure without rapid osmotic shifts.",
        },
      ],
    },
    {
      id: "crrt.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Renal Replacement Modality Selection",
      summary: "Selecting between Continuous Venovenous Hemofiltration (CVVH), Hemodialysis (CVVHD), and Hemodiafiltration (CVVHDF).",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "CRRT vs Intermittent Hemodialysis (IHD): CRRT is mandatory in hemodynamically unstable shock and acute brain injury/elevated ICP (IHD causes rapid osmolality shifts and fatal cerebral edema); IHD is preferred for rapid clearance of toxic ingestions and stable hyperkalemia.",
          "Solute Clearance Mechanics: Convection (CVVH) removes middle and large molecules via solvent drag across ultrafiltration membrane; Diffusion (CVVHD) removes small molecules (potassium, urea, creatinine) down concentration gradient against dialysate."
]
        }
      ]
    },
    {
      id: "crrt.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Evaluation: Urgent 'AEIOU' Indications & Timing of Initiation",
      summary: "Laboratory and clinical criteria for urgent renal replacement therapy, and the STARRT-AKI / AKIKI timing consensus.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Urgent 'AEIOU' Dialysis Triggers", value: "• A — Acidemia: Refractory metabolic acidosis (pH < 7.15-7.20) despite medical therapy.\n• E — Electrolytes: Refractory hyperkalemia (K+ > 6.5 mEq/L) with ECG changes.\n• I — Ingestion: Dialyzable toxins (methanol, ethylene glycol, lithium, salicylates).\n• O — Overload: Refractory hypervolemic pulmonary edema unresponsive to diuretics.\n• U — Uremia: Uremic pericarditis, uremic encephalopathy, or uremic bleeding." },
            { label: "Timing of Initiation (STARRT-AKI Evidence)", value: "In the absence of urgent AEIOU indications, the STARRT-AKI and AKIKI trials establish that 'accelerated/early' CRRT does NOT reduce mortality and increases dialysis dependence compared with a 'standard-delayed' watch-and-wait strategy." }
          ]
        }
      ]
    },
    {
      id: "crrt.modalities",
      kind: "definition",
      title: "CRRT Modalities & Physical Transport Mechanisms",
      summary: "Diffusion (CVVHD), convection (CVVH), combination hemodiafiltration (CVVHDF), and isolated ultrafiltration (SCUF).",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "CRRT modalities are classified by the dominant biophysical transport mechanism used to clear solutes across the semi-permeable biocompatible membrane:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Slow Continuous Ultrafiltration (SCUF)",
              value: "Mechanism: Pure hydrostatic convection without replacement fluid or dialysate. Goal: Isolated fluid removal (ultrafiltration 100–400 mL/hr) for refractory volume overload in patients without significant uremic or electrolyte derangements.",
            },
            {
              label: "2. Continuous Venovenous Hemofiltration (CVVH)",
              value: "Mechanism: Pure Convection. A positive transmembrane pressure (TMP) forces plasma water across the membrane ('solvent drag'), dragging small and middle-sized solutes (up to 30–40 kDa, including inflammatory mediators and cytokines). Requires high-volume sterile Replacement Fluid (pre- or post-filter) to maintain volume homeostasis.",
            },
            {
              label: "3. Continuous Venovenous Hemodialysis (CVVHD)",
              value: "Mechanism: Pure Diffusion. Countercurrent sterile Dialysate fluid runs along the outside of hollow fibers. Solutes move down their concentration gradients. Highly efficient for small molecules (< 500 Da: urea, creatinine, potassium), but minimal middle-molecule clearance.",
            },
            {
              label: "4. Continuous Venovenous Hemodiafiltration (CVVHDF)",
              value: "Mechanism: Combined Convection + Diffusion. Both dialysate fluid (diffusive clearance) and replacement fluid (convective clearance) are utilized simultaneously, maximizing broad-spectrum solute clearance.",
            },
          ],
        },
      ],
    },
    {
      id: "crrt.mechanics",
      kind: "physiology",
      title: "Clearance Physics, Pre/Post Dilution, & Filtration Fraction",
      summary: "The sieving coefficient, mathematical dilution factor, and maintaining Filtration Fraction < 20–25% to prevent circuit clotting.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Mastering CRRT mechanics requires precise understanding of fluid physics and circuit dynamics:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Sieving Coefficient (S)",
              value: "S = Concentration in Ultrafiltrate / Concentration in Plasma Water. S = 1.0 for completely unbound small solutes (urea, potassium); S = 0 for large or protein-bound molecules (albumin). Convective clearance = S × Ultrafiltration Rate (QUF).",
            },
            {
              label: "Pre-Filter vs Post-Filter Replacement Dilution",
              value: "• Pre-Filter Dilution: Infuses replacement fluid before blood enters the hemofilter. Dilutes hematocrit and reduces blood viscosity, significantly prolonging filter lifespan and reducing clotting, but lowers solute clearance efficiency by the Dilution Factor: [Plasma Flow / (Plasma Flow + Pre-filter Flow)].\n• Post-Filter Dilution: Infuses replacement fluid after the filter. Delivers maximum solute clearance efficiency (100%), but concentrates blood inside hollow fibers, increasing clotting risk.",
            },
            {
              label: "Filtration Fraction (FF)",
              value: "FF (%) = [Total Ultrafiltration Flow (QUF) / Plasma Flow (Qplasma)] × 100 = [QUF / (Blood Flow × (1 - Hematocrit))] × 100.\nTarget: Keep FF < 20–25%. A Filtration Fraction > 25% causes severe hemoconcentration inside filter capillaries, accelerating protein deposition (filter clogging) and premature circuit thrombosis.",
            },
          ],
        },
      ],
    },
    {
      id: "crrt.dosing",
      kind: "management",
      title: "Effluent Dose Prescription & The RENAL / ATN Evidence",
      summary: "KDIGO target delivered dose 20–25 mL/kg/h, accounting for filter downtime, and the lack of benefit for high-intensity dosing.",
      provenance: "trial",
      body: [
        {
          type: "paragraph",
          text: "The CRRT dose is defined by the Total Effluent Flow Rate (Effluent Rate = Dialysate Flow + Replacement Fluid Flow + Net Fluid Removal Rate) normalized to actual body weight (mL/kg/hr):",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Target Delivered Effluent Dose",
              value: "KDIGO guidelines recommend a delivered effluent dose of 20–25 mL/kg/hour. Because circuit downtime (nursing interventions, bag changes, filter clotting, diagnostic scans) averages 15–20% per day, clinicians should prescribe 25–30 mL/kg/hour to guarantee delivery of ≥ 20–25 mL/kg/hr.",
            },
            {
              label: "The Landmark RENAL & VA/NIH ATN Trials",
              value: "The multicenter RENAL Trial (NEJM 2009, 1508 patients) and VA/NIH ATN Study (NEJM 2008, 1124 patients) evaluated standard intensity (20–25 mL/kg/hr) vs high intensity (35–40 mL/kg/hr). High-intensity CRRT provided ZERO survival benefit, failed to improve renal recovery, and significantly increased adverse events (severe hypophosphatemia, hypokalemia, and inadvertent antimicrobial clearance).",
            },
          ],
        },
      ],
    },
    {
      id: "crrt.anticoagulation",
      kind: "management",
      title: "Regional Citrate Anticoagulation (RCA) Protocol & Citrate Toxicity",
      summary: "Pre-filter citrate chelation, post-filter calcium replacement, and diagnosing Citrate Lock (Total Ca / Ionized Ca > 2.5).",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Regional Citrate Anticoagulation (RCA) is recommended by KDIGO as first-line anticoagulation for CRRT in patients without contraindications:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Mechanism of Regional Anticoagulation",
              value: "Trisodium citrate is infused pre-filter into the arterial line. Citrate chelates ionized calcium (Ca2+), dropping circuit ionized calcium to < 0.25–0.35 mmol/L, completely inhibiting calcium-dependent clotting cascade enzymes. A continuous IV infusion of Calcium Chloride or Gluconate is administered post-filter / via central line to restore systemic ionized calcium to normal (1.10–1.30 mmol/L).",
            },
            {
              label: "2. Advantages over Systemic Heparin",
              value: "RCA dramatically extends filter lifespan (mean > 50–60 hours) and eliminates systemic patient anticoagulation, significantly reducing bleeding complications.",
            },
            {
              label: "3. Citrate Accumulation / 'Citrate Lock' Toxicity",
              value: "Under normal conditions, systemic citrate is rapidly metabolized by the liver, skeletal muscle, and kidneys into bicarbonate (1 mol citrate generates 3 mol HCO3-). In severe hepatic failure, severe hypoperfusion, or mitochondrial shock, citrate cannot be metabolized and accumulates.",
            },
            {
              label: "4. Diagnostic Triad of Citrate Toxicity",
              value: "(1) Worsening High Anion Gap Metabolic Acidosis (unmetabolized citrate is a strong unmeasured anion);\n(2) Refractory systemic ionized hypocalcemia despite escalating calcium infusion rates;\n(3) Total Calcium to Ionized Calcium Ratio > 2.5: Total Ca (mg/dL) / Ionized Ca (mmol/L) > 2.5 is diagnostic of citrate accumulation. Management: Immediately stop citrate infusion, switch to heparin or no anticoagulation, and continue calcium infusion.",
            },
          ],
        },
      ],
    },
    {
      id: "crrt.complications",
      kind: "complications",
      title: "Complications of Continuous Renal Replacement Therapy",
      summary: "Circuit thrombosis, catheter-related bloodstream infections, hypophosphatemia, and antibiotic underdosing.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Severe Electrolyte Depletion: Rapid development of severe hypophosphatemia (causes respiratory muscle weakness and weaning failure), hypokalemia, and hypomagnesemia; mandates scheduled protocolized electrolyte repletion in CRRT solutions.",
            "Antimicrobial Underdosing: Convective and diffusive clearance of hydrophilic antibiotics (vancomycin, cefepime, meropenem, piperacillin-tazobactam, aminoglycosides) can cause therapeutic failure; require aggressive loading doses and therapeutic drug monitoring.",
            "Hypothermia: Massive extracorporeal blood circulation in ambient ICU air drops core body temperature (< 35.5°C); requires integrated blood/fluid warmers.",
            "Vascular Access Complications: Dialysis catheter thrombosis, kinking, central venous stenosis, and catheter-related bloodstream infections (CRBSI).",
          ],
        },
      ],
    },
    {
      id: "crrt.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical operational and pharmacological pitfalls in CRRT.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Underdosing antibiotics on CRRT: Automatically reducing antibiotic doses because 'the patient is in renal failure' leads to underdosing; CRRT actively clears water-soluble drugs. Administer full loading doses and elevated maintenance doses.",
            "Missing Citrate Lock in a shock patient on RCA: Checking only ionized calcium masks severe citrate accumulation; always calculate the Total Calcium to Ionized Calcium ratio daily (cutoff > 2.5).",
            "Exceeding Filtration Fraction > 25%: Results in early filter clotting and lost treatment time; increase blood flow rate (Qb) or add pre-filter replacement fluid to lower FF.",
            "Using high-intensity CRRT doses (> 35 mL/kg/hr): Large RCTs proved no survival benefit, with increased risk of severe hypophosphatemia and drug clearance.",
            "Failing to account for circuit downtime when prescribing dose: Prescribing exactly 20 mL/kg/hr results in delivering only 16–17 mL/kg/hr; prescribe 25–30 mL/kg/hr to hit the 20–25 target.",
          ],
        },
      ],
    },
    {
      id: "crrt.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Optimal timing of CRRT liberation and SLED/PIRRT versus continuous therapy.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "SLED (Sustained Low-Efficiency Dialysis) versus CRRT: SLED provides hybrid 6–12 hour daily dialysis at lower blood/dialysate flow rates. Randomized trials demonstrate comparable hemodynamic stability and renal recovery between SLED and CRRT in most ICU patients, offering lower circuit costs and flexibility for mobilization.",
        },
        {
          type: "paragraph",
          text: "Timing and Criteria for CRRT Liberation: Discontinuation is guided by spontaneous 24-hour urine output (> 400–500 mL/day without diuretics or > 1000 mL/day with loop diuretics) and stable creatinine clearance, rather than a fixed biochemical threshold.",
        },
      ],
    },
  ],
};
