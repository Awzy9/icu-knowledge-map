import type { Topic } from "@/content-types";

export const upperGiBleeding: Topic = {
  id: "upper-gi-bleeding",
  slug: "upper-gi-bleeding",
  title: "Upper Gastrointestinal Bleeding (UGIB)",
  category: "gi-hepatic",
  oneLiner: "Non-variceal vs Variceal hemorrhage algorithms, Villanueva restrictive transfusion (Hb < 7.0), high-dose IV PPIs, Octreotide, Ceftriaxone, EVL, early TIPS, and balloon tamponade.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Upper Gastrointestinal Bleeding, Variceal Hemorrhage, and Interventional Endoscopy in the ICU",
    },
    {
      title: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding",
      edition: "Am J Gastroenterol 2021;116(5):899-917",
    },
    {
      title: "Baveno VII — Renewing consensus in portal hypertension: Report of the Baveno VII Consensus Workshop",
      edition: "J Hepatol 2022;76(4):959-974",
    },
  ],
  currentStatus: "Current as of the 2021 ACG Upper GI Bleeding Guidelines, the Baveno VII Portal Hypertension Consensus, and the Villanueva and Garcia-Pagan randomized trials.",
  otherReferences: [
    "Laine L, et al. ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. Am J Gastroenterol. 2021;116(5):899-917.",
    "de Franchis R, et al. Baveno VII - Renewing consensus in portal hypertension. J Hepatol. 2022;76(4):959-974.",
    "Villanueva C, et al. Transfusion strategies for acute upper gastrointestinal bleeding. N Engl J Med. 2013;368(1):11-21.",
    "Garcia-Pagan JC, et al. Early use of TIPS in patients with cirrhosis and high-risk acute variceal bleeding. N Engl J Med. 2010;362(25):2370-2379.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "transfusion", label: "Restrictive PRBC transfusion thresholds (Hb < 7.0 g/dL) and coagulopathy triggers" },
    { type: "complication", targetId: "shock", label: "Hemorrhagic hypovolemic shock, massive transfusion, and resuscitation endpoints" },
    { type: "prerequisite", targetId: "anticoagulation", label: "Emergency anticoagulant reversal protocols in active life-threatening bleeding" },
    { type: "related-to", targetId: "bleeding", label: "Damage control resuscitation and viscoelastic testing (TEG/ROTEM)" },
    { type: "complication", targetId: "dic", label: "Consumptive coagulopathy in massive gastrointestinal exsanguination" },
  ],
  sections: [
    {
      id: "upper-gi-bleeding.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Triage: Variceal vs Non-Variceal & Risk Stratification",
      summary: "Initial clinical differentiation of peptic ulcer vs variceal hemorrhage, Glasgow-Blatchford risk scoring, and urgent EGD timing within 24 hours.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Glasgow-Blatchford Score (GBS)", value: "Pre-endoscopy risk stratification (evaluates BUN, hemoglobin, SBP, heart rate, melena, syncope, liver disease, heart failure). Score > 1 requires inpatient admission; score >= 6 indicates high risk of endoscopic intervention or transfusion." },
            { label: "Variceal vs Non-Variceal Indicators", value: "Suspect varices with known cirrhosis, stigmata of portal hypertension (ascites, caput medusae, spider angiomas), or thrombocytopenia. Empiric IV Octreotide (50 mcg bolus, then 50 mcg/h) + IV Ceftriaxone (1 g/day) must be initiated immediately before endoscopy." },
            { label: "Esophagogastroduodenoscopy (EGD) Timing", value: "Emergent/Urgent EGD within 24 hours (or within 12 hours for suspected variceal bleeding or hemodynamic instability) after initial hemodynamic resuscitation." }
          ]
        }
      ]
    },
    {
      id: "upper-gi-bleeding.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Acute Upper GI Hemorrhage",
      summary: "Differentiate peptic ulcer and varices from Mallory-Weiss tears, Dieulafoy lesions, and aortoenteric fistulae.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Peptic Ulcer Disease (50%): Gastric or duodenal ulcer with Forrest classification (Ia spurting, Ib oozing, IIa non-bleeding visible vessel requiring dual endoscopic therapy).",
            "Esophageal / Gastric Varices (20-30%): Massive painless hematemesis in portal hypertension; requires endoscopic band ligation (EBL).",
            "Dieulafoy Lesion (2-5%): Massive recurrent arterial bleeding from an abnormally large submucosal artery eroding through mucosal defect in the gastric fundus.",
            "Mallory-Weiss Tear (5-10%): Mucosal laceration at the gastroesophageal junction following repeated retching or vomiting.",
            "Aortoenteric Fistula: Rare but fatal herald bleed followed by massive exsanguinating hemorrhage in a patient with a prior abdominal aortic vascular graft eroding into third portion of duodenum."
          ]
        }
      ]
    },
    {
      id: "upper-gi-bleeding.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "ugib-guideline-aasld-2017",
          relevance: "AASLD guidance on variceal hemorrhage: restrictive transfusion, octreotide, and antibiotic prophylaxis"
        },
        {
          kind: "trial",
          id: "ugib-villanueva-trial",
          relevance: "Villanueva landmark trial proving restrictive transfusion (Hb < 7.0 g/dL) reduces 45-day mortality and rebleeding"
        },
        {
          kind: "systematic-review",
          id: "ugib-antibiotics-cochrane-review",
          relevance: "Cochrane systematic review proving short-term antibiotic prophylaxis reduces mortality in cirrhotic GI bleeding"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Upper Gastrointestinal Bleeding (UGIB) is hemorrhage originating proximal to the Ligament of Treitz, categorized into Non-Variceal (NVUGIB, e.g. peptic ulcer disease) and Variceal (VUGIB, e.g. gastroesophageal varices in portal hypertension), mandating distinct pathophysiological and therapeutic pathways.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Acute Upper Gastrointestinal Bleeding (UGIB) remains one of the most common critical care emergencies, presenting with hematemesis, 'coffee-ground' emesis, melena, or massive hematochezia in hypermotile brisk bleeding. Mortality ranges from 5% in non-variceal bleeding to over 15–20% in acute variceal hemorrhage complicated by end-stage liver disease.",
        },
        {
          type: "paragraph",
          text: "The clinical imperatives in the ICU are: (1) Airway protection via early endotracheal intubation for massive hematemesis or encephalopathy; (2) Restrictive transfusion strategy (transfusing strictly when Hemoglobin < 7.0 g/dL per the landmark Villanueva trial); (3) Pre-endoscopic pharmacotherapy (high-dose IV PPI for NVUGIB; early Vasoactive Octreotide + IV Ceftriaxone for VUGIB); (4) Emergency therapeutic endoscopy within 12 to 24 hours; and (5) Rapid rescue interventions (Transcatheter Arterial Embolization, Balloon Tamponade, or Early Preemptive TIPS) for refractory bleeding.",
        },
      ],
    },
    {
      id: "upper-gi-bleeding.physiology-transfusion",
      kind: "physiology",
      title: "Pathophysiology & The Restrictive Transfusion Paradox (Villanueva Trial)",
      summary: "Gastric acid clot lysis, portal pressure dynamics, and why liberal transfusions (Hb > 9) dramatically increase rebleeding and mortality.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Pathophysiological dynamics of gastrointestinal hemostasis and portal hypertension:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Gastric Acid & Platelet Clot Disaggregation",
              value: "Platelet aggregation and coagulation factor enzymatic cascades are completely inhibited at an intragastric pH < 5.4; at pH < 4.0, pepsin is activated and rapidly lyses pre-formed fibrin clots. Suppressing gastric acid secretion to maintain an intragastric pH > 6.0 stabilizes the platelet-fibrin plug and prevents recurrent ulcer bleeding.",
            },
            {
              label: "2. Portal Venous Hemodynamics & Variceal Wall Tension",
              value: "Variceal rupture occurs when the Hepatic Venous Pressure Gradient (HVPG) exceeds 12 mmHg. Variceal wall tension is governed by Laplace's Law (Tension = Pressure x Radius). Rapid intravenous volume expansion or excessive blood transfusion elevates central venous and portal pressures, expanding variceal radius, increasing wall tension, and triggering immediate catastrophic rebleeding.",
            },
            {
              label: "3. The Restrictive Transfusion Paradox (The Villanueva NEJM Trial)",
              value: "The landmark Villanueva trial (NEJM 2013) randomized acute UGIB patients to Restrictive Transfusion (PRBCs transfused only when Hb < 7.0 g/dL, target Hb 7.0–9.0 g/dL) vs Liberal Transfusion (transfused when Hb < 9.0 g/dL, target Hb 9.0–11.0 g/dL). Restrictive transfusion produced a dramatic 45% relative reduction in 45-day all-cause mortality (5% vs 9%, p = 0.02), significantly reduced rebleeding (10% vs 16%), and shortened hospital stay. Liberal transfusion increases portal pressure, induces hypervolemic hemodilution, and worsens coagulopathy.",
            },
          ],
        },
      ],
    },
    {
      id: "upper-gi-bleeding.non-variceal",
      kind: "management",
      title: "Non-Variceal UGIB (NVUGIB): Peptic Ulcer Disease & Endoscopic Protocols",
      summary: "Glasgow-Blatchford scoring, high-dose IV PPI infusions, Forrest classification, dual endoscopic therapy, and transcatheter arterial embolization (TAE).",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Management algorithm for Non-Variceal Upper GI Bleeding (Peptic Ulcers, Dieulafoy, Mallory-Weiss):",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Pre-Endoscopic Pharmacotherapy",
              value: "• High-Dose IV Proton Pump Inhibitor (PPI): Pantoprazole or Esomeprazole 80 mg IV bolus, followed by 8 mg/hr continuous IV infusion for 72 hours (or intermittent high-dose 40 mg IV bid, shown to be non-inferior in meta-analyses).\n• IV Prokinetic Agent: Erythromycin 250 mg IV infused 30 to 60 minutes prior to endoscopy (stimulates motilin receptors, clearing clots and fresh blood from the gastric lumen and significantly improving endoscopic visualization).",
            },
            {
              label: "2. The Forrest Classification & Endoscopic Interventions",
              value: "• Forrest Ia (Spurting arterial hemorrhage, 90% rebleed risk) & Ib (Oozing hemorrhage, 50% rebleed): Mandatory Dual Endoscopic Therapy: Epinephrine injection (for temporary vasoconstriction/tamponade) PLUS a definitive mechanical modality (Through-The-Scope Hemoclips) OR thermal coagulation (Bipolar/Heater probe) OR Over-The-Scope Clips (OTSC).\n• Forrest IIa (Non-bleeding visible vessel, 50% rebleed): Mandatory Dual Endoscopic Therapy (Hemoclips or Thermal).\n• Forrest IIb (Adherent clot, 25% rebleed): Clot removal via targeted cold snare washing followed by endoscopic treatment of underlying vessel.\n• Forrest IIc (Flat pigmented spot, 10% rebleed) & III (Clean-based ulcer, < 3% rebleed): No endoscopic therapy required; oral PPI therapy.",
            },
            {
              label: "3. Refractory Bleeding / Transcatheter Arterial Embolization (TAE)",
              value: "If endoscopic therapy fails to achieve initial hemostasis or if recurrent spurting hemorrhage occurs post-endoscopy, immediately consult Interventional Radiology for Transcatheter Arterial Embolization (TAE / coil embolization of the gastroduodenal or left gastric artery) before considering emergency open surgery.",
            },
          ],
        },
      ],
    },
    {
      id: "upper-gi-bleeding.variceal",
      kind: "management",
      title: "Variceal UGIB (VUGIB): Vasoactive Drugs, Antibiotics, EVL & Early TIPS",
      summary: "Immediate Octreotide/Terlipressin, 7-day Ceftriaxone protocol, Endoscopic Band Ligation, Early Preemptive TIPS (Garcia-Pagan trial), and Balloon Tamponade rescue.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Stepped critical care protocol for Acute Variceal Bleeding (Baveno VII Consensus):",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Vasoactive Splanchnic Vasoconstrictors (Start IMMEDIATELY)",
              value: "• Octreotide: 50 mcg IV bolus, followed by 50 mcg/hr continuous IV infusion.\n• Terlipressin: 2.0 mg IV q4h for the first 48 hours, then 1.0 mg IV q4h.\n• Mechanism: Induces selective splanchnic arterial vasoconstriction, decreasing portal venous inflow and immediately lowering portal pressure and variceal wall tension. Maintain continuously for exactly 2 to 5 days.",
            },
            {
              label: "2. Prophylactic Antibiotics (Mandatory in All Cirrhotic Bleeders)",
              value: "• Ceftriaxone: 1.0 g IV once daily for exactly 7 days.\n• Rationale: Cirrhotic patients with GI bleeding have high rates of bacterial translocation and spontaneous bacterial peritonitis (SBP). Prophylactic ceftriaxone reduces serious bacterial infections, decreases early rebleeding rates by 50%, and significantly reduces all-cause mortality.",
            },
            {
              label: "3. Endoscopic Variceal Ligation (EVL)",
              value: "Perform diagnostic and therapeutic endoscopy within 12 hours of presentation once hemodynamics are stabilized. Endoscopic Band Ligation (EVL) of esophageal varices is the definitive treatment of choice (superior to sclerotherapy with lower rebleeding and complication rates). For bleeding gastric fundal varices (GOV2/IGV1): Endoscopic Cyanoacrylate tissue glue injection.",
            },
            {
              label: "4. Early Preemptive TIPS (The Garcia-Pagan NEJM Trial)",
              value: "• Indication (High-Risk Patients): Cirrhotic patients with acute variceal bleeding who meet high-risk criteria: Child-Pugh Class C (score 10–13) OR Child-Pugh Class B (score 7–9) with active bleeding at endoscopy.\n• Evidence (Garcia-Pagan Trial): Placement of an early polytetrafluoroethylene-covered Transjugular Intrahepatic Portosystemic Shunt (TIPS) within 24 to 72 hours of admission dramatically reduced 1-year treatment failure/rebleeding (from 50% to 3%) and significantly improved 1-year survival (from 61% to 86%).",
            },
            {
              label: "5. Temporary Rescue: Balloon Tamponade (Sengstaken-Blakemore / Minnesota Tube)",
              value: "• Indication: Refractory exsanguinating variceal hemorrhage failing medical/endoscopic therapy as a temporary bridge to TIPS or surgery.\n• Protocol: Mandatory endotracheal intubation prior to insertion. Inflate gastric balloon with 250–300 mL of air, apply 0.5–1.0 kg traction (using a 500 mL IV fluid bag over a pulley). Inflate esophageal balloon (to 30–45 mmHg) ONLY if bleeding persists despite gastric balloon traction.\n• Safety Limit: Deflate esophageal balloon after 12 hours and remove tube completely within 24 hours to prevent fatal pressure-induced esophageal necrosis and perforation.",
            },
          ],
        },
      ],
    },
    {
      id: "upper-gi-bleeding.complications",
      kind: "complications",
      title: "ICU Complications & Organ Failure",
      summary: "Massive aspiration pneumonitis, hepatic encephalopathy, acute tubular necrosis, and balloon tamponade perforation.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Fatal Aspiration Pneumonitis: Massive vomiting of blood into unprotected airways during altered mentation; prevented by preemptive endotracheal intubation.",
            "Worsening Hepatic Encephalopathy: Digestion of large protein loads (blood in the gastrointestinal tract) releases massive systemic ammonia; initiate oral Lactulose (20–30 g tid) once bleeding is controlled.",
            "Esophageal Necrosis & Perforation: Catastrophic complication of prolonged esophageal balloon inflation (> 24 hours).",
            "Recurrent Rebleeding & Hypovolemic Cardiac Arrest: Occurs in up to 15–20% of high-risk ulcers or unsecured varices within the first 72 hours.",
          ],
        },
      ],
    },
    {
      id: "upper-gi-bleeding.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical errors to avoid in managing upper GI bleeding.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Over-transfusing PRBCs to a 'normal' Hemoglobin (> 9–10 g/dL): Over-transfusion elevates portal pressures and increases rebleeding and mortality (the Villanueva trial warning); maintain a strict restrictive threshold (transfuse when Hb < 7.0 g/dL).",
            "Withholding prophylactic Ceftriaxone in cirrhotic patients with variceal bleeding: Ceftriaxone reduces rebleeding and mortality; start IV antibiotics immediately upon presentation.",
            "Placing a Sengstaken-Blakemore tube without endotracheal intubation: Highly dangerous; balloon inflation in an un-intubated patient causes massive pulmonary aspiration and asphyxiation.",
            "Delaying Octreotide until endoscopy proves variceal origin: Start IV Octreotide immediately in any patient with suspected cirrhosis or portal hypertension presenting with hematemesis.",
            "Failing to consider Early Preemptive TIPS in Child-Pugh C patients: Early TIPS within 72 hours saves lives; do not wait for recurrent secondary bleeding before requesting Interventional Radiology consultation.",
          ],
        },
      ],
    },
    {
      id: "upper-gi-bleeding.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Hemospray (Endoscopic Hemostatic Powder) and Self-Expanding Metal Esophageal Stents (SEMS).",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Endoscopic Hemostatic Powders (Hemospray / TC-325): Topical mineral powders that rapidly form an adherent mechanical barrier upon contact with blood, achieving > 90% immediate hemostasis in large, diffuse bleeding lesions (e.g. malignancy, diffuse oozing, refractory ulcers). It is currently utilized as an effective rescue bridge therapy prior to definitive thermal/clip therapy or arterial embolization.",
        },
        {
          type: "paragraph",
          text: "Self-Expanding Metal Stents (SEMS, e.g. SX-Ella Danis Stent) vs Balloon Tamponade: Specially designed covered esophageal metal stents deployed endoscopically without requiring continuous traction, maintaining hemostasis for up to 7 days with significantly lower mucosal necrosis and aspiration rates compared to traditional Sengstaken-Blakemore balloon tubes.",
        },
      ],
    },
  ],
};
