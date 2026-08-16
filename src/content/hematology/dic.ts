import type { Topic } from "@/content-types";

export const dic: Topic = {
  id: "dic",
  slug: "dic",
  title: "Disseminated Intravascular Coagulation (DIC) & Sepsis Coagulopathy",
  category: "hematology",
  oneLiner: "Tissue factor thrombin burst, antithrombin/protein C depletion, PAI-1 fibrinolytic shutdown, ISTH 2025 overt DIC score, comparison with TTP/HUS/HIT, and targeted replacement.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Disseminated Intravascular Coagulation, Sepsis-Induced Coagulopathy, and Coagulation in Critical Illness",
    },
    {
      title: "ISTH SSC Updated Definition and Scoring of Disseminated Intravascular Coagulation in 2025",
      edition: "J Thromb Haemost 2025",
    },
  ],
  currentStatus: "Current as of the ISTH 2025 Updated DIC Diagnostic Consensus, the Sepsis-Induced Coagulopathy (SIC) criteria, and international blood transfusion guidelines.",
  otherReferences: [
    "Iba T, et al. Diagnosis and management of sepsis-induced coagulopathy and disseminated intravascular coagulation. J Clin Med. 2019;8(9):1436.",
    "Taylor FB Jr, et al. Towards definition, clinical and laboratory criteria, and a scoring system for disseminated intravascular coagulation. Thromb Haemost. 2001;86(5):1327-1330.",
    "Wada H, et al. Guidance for diagnosis and treatment of disseminated intravascular coagulation from harmonization of the recommendations from three guidelines. J Thromb Haemost. 2013;11(4):761-767.",
    "Levi M, et al. Disseminated intravascular coagulation. N Engl J Med. 2019;380(14):1301-1308.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "sepsis", label: "Leading etiology of systemic inflammatory coagulopathy and endothelial injury" },
    { type: "differential", targetId: "hit", label: "Prothrombotic thrombocytopenia with isolated platelet activation without factor consumption" },
    { type: "differential", targetId: "bleeding", label: "Trauma-induced coagulopathy vs consumptive inflammatory coagulopathy" },
    { type: "treated-with", targetId: "transfusion", label: "Targeted platelet, plasma, and cryoprecipitate replacement therapy" },
    { type: "complication", targetId: "aki", label: "Renal microvascular fibrin thrombosis and acute tubular necrosis" },
    { type: "complication", targetId: "septic-shock", label: "Consumptive coagulopathy worsening capillary leak and organ failure" },
  ],
  sections: [
    {
      id: "dic.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "dic-guideline-isth-2025",
          relevance: "ISTH guidance on diagnosis and treatment of disseminated intravascular coagulation"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Disseminated Intravascular Coagulation (DIC) is a catastrophic systemic thrombo-hemorrhagic syndrome characterized by unbridled thrombin generation, consumption of clotting factors and platelets, and microvascular organ failure.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Disseminated Intravascular Coagulation (DIC) is never an isolated primary disease; it is always an acquired, severe secondary complication of an underlying catastrophic insult. Sepsis is the most common trigger (~50% of cases), followed by major polytrauma, obstetric disasters (amniotic fluid embolism, placental abruption), acute promyelocytic leukemia (APL), and vascular malformations.",
        },
        {
          type: "paragraph",
          text: "The pathognomonic paradox of DIC is the simultaneous occurrence of microvascular thrombosis (causing tissue ischemia, gangrene, and multiorgan failure) and systemic consumptive hemorrhage (causing spontaneous bleeding from line sites, mucosa, and surgical wounds). Definitive treatment requires immediate eradication of the underlying trigger combined with targeted, evidence-based blood component replacement.",
        },
      ],
    },
    {
      id: "dic.physiology",
      kind: "physiology",
      title: "Pathophysiology: Thrombin Storm, Anticoagulant Collapse, & PAI-1 Fibrinolytic Shutdown",
      summary: "Tissue factor exposure, degradation of Antithrombin III and Protein C, and PAI-1-mediated failure of fibrin clearance.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "The molecular pathogenesis of DIC involves three interconnected pathological cascades:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Massive Tissue Factor (TF) Driven Thrombin Storm",
              value: "Inflammatory cytokines (TNF-alpha, IL-1beta, IL-6) and pathogen endotoxins induce aberrant Tissue Factor expression on circulating monocytes and damaged vascular endothelial cells. TF binds Factor VIIa, triggering uncontrolled conversion of prothrombin to thrombin (Factor IIa), generating widespread intravascular microvascular fibrin clots.",
            },
            {
              label: "2. Total Collapse of Endogenous Anticoagulant Mechanisms",
              value: "• Antithrombin III (ATIII) Depletion: Rapidly consumed forming thrombin-antithrombin (TAT) complexes, degraded by neutrophil elastases, and suppressed by impaired hepatic synthesis.\n• Protein C Pathway Paralysis: Endothelial thrombomodulin and endothelial protein C receptors (EPCR) are downregulated by cytokines, eliminating activated Protein C (APC) generation.\n• Tissue Factor Pathway Inhibitor (TFPI) Exhaustion.",
            },
            {
              label: "3. Fibrinolytic Shutdown (Sepsis Phenotype) vs Hyperfibrinolysis (Trauma/APL)",
              value: "• Sepsis-Induced DIC (Suppressed Fibrinolysis): Massive endothelial release of Plasminogen Activator Inhibitor-1 (PAI-1) completely shuts down tissue plasminogen activator (tPA). Fibrin thrombi cannot be degraded, accumulating throughout renal, pulmonary, and hepatic microvessels, driving ischemic multi-organ failure and Purpura Fulminans.\n• Trauma / Obstetric / APL DIC (Enhanced Fibrinolysis): Massive tPA release with low PAI-1 triggers hyperfibrinolysis, causing catastrophic diffuse bleeding with rapid fibrinogen depletion.",
            },
          ],
        },
      ],
    },
    {
      id: "dic.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Scoring: The ISTH 2025 Overt DIC & SIC Criteria",
      summary: "The 2025 ISTH overt-DIC scoring algorithm (Platelets, D-dimer, PT prolongation, Fibrinogen) and Sepsis-Induced Coagulopathy.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Step 1: Confirm the presence of an established underlying disorder known to trigger DIC. Step 2: Calculate the 2025 ISTH Overt DIC Score:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Platelet Count",
              value: "> 100,000/uL = 0 points\n50,000–100,000/uL = 1 point\n< 50,000/uL = 2 points",
            },
            {
              label: "D-Dimer / Fibrin Degradation Products (FDP)",
              value: "No increase (< 3x upper limit of normal [ULN]) = 0 points\nModerate increase (3x to 7x ULN) = 2 points\nSevere increase (> 7x ULN) = 3 points",
            },
            {
              label: "Prolongation of Prothrombin Time (PT)",
              value: "< 3 seconds prolongation (INR < 1.2) = 0 points\n3 to 6 seconds prolongation (INR 1.2–1.5) = 1 point\n> 6 seconds prolongation (INR > 1.5) = 2 points",
            },
            {
              label: "Fibrinogen Concentration",
              value: "≥ 100 mg/dL (≥ 1.0 g/L) = 0 points\n< 100 mg/dL (< 1.0 g/L) = 1 point",
            },
            {
              label: "Score Interpretation",
              value: "• Total Score ≥ 5: Overt DIC (compatible with fulminant consumptive coagulopathy; repeat score daily).\n• Total Score < 5: Non-Overt / Pre-DIC (reassess every 24–48 hours as clinical condition evolves).",
            },
            {
              label: "Sepsis-Induced Coagulopathy (SIC) Criteria",
              value: "Identifies early coagulopathy before overt DIC: Evaluates Platelets (< 150k [1 pt], < 100k [2 pts]), PT-INR (> 1.2 [1 pt], > 1.4 [2 pts]), and total SOFA score (≥ 2 [2 pts]). SIC score ≥ 4 predicts high benefit from early sepsis resuscitation.",
            },
          ],
        },
      ],
    },
    {
      id: "dic.differential-matrix",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis: DIC vs TTP vs HUS vs HIT Matrix",
      summary: "Comprehensive comparative diagnostic matrix across primary thrombotic and consumptive microangiopathies.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Distinguishing DIC from other critical care thrombocytopenic and microangiopathic syndromes:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Disseminated Intravascular Coagulation (DIC)",
              value: "Platelets: Markedly Decreased (< 50k) | PT / aPTT: Prolonged | Fibrinogen: Markedly Decreased (< 100–150 mg/dL) | D-Dimer: Extremely Elevated (> 7x ULN) | Schistocytes: Rare / Few | Key Mechanism: Tissue factor thrombin burst consuming both platelets AND clotting factors | Primary Rx: Treat underlying cause + targeted blood products for bleeding.",
            },
            {
              label: "2. Thrombotic Thrombocytopenic Purpura (TTP)",
              value: "Platelets: Profoundly Decreased (< 20k) | PT / aPTT: NORMAL | Fibrinogen: NORMAL | D-Dimer: Normal to mildly elevated | Schistocytes: PROMINENT (> 1% on peripheral blood smear) | Key Mechanism: Severe deficiency of ADAMTS13 (< 10%) producing ultra-large vWF multimers | Primary Rx: Emergent Therapeutic Plasma Exchange (TPE) + Caplacizumab + Corticosteroids.",
            },
            {
              label: "3. Hemolytic Uremic Syndrome (HUS / aHUS)",
              value: "Platelets: Decreased | PT / aPTT: NORMAL | Fibrinogen: NORMAL | D-Dimer: Normal to mildly elevated | Schistocytes: PROMINENT | Key Mechanism: Shiga toxin (STEC-HUS) or complement dysregulation (aHUS) targeting renal glomerular endothelium | Primary Rx: Supportive care for STEC-HUS; Eculizumab/Ravulizumab (C5 inhibitors) for aHUS.",
            },
            {
              label: "4. Heparin-Induced Thrombocytopenia (HIT)",
              value: "Platelets: Decreased (> 50% drop from baseline) | PT / aPTT: NORMAL | Fibrinogen: NORMAL | D-Dimer: Mildly elevated | Schistocytes: ABSENT | Key Mechanism: Autoantibodies against PF4-Heparin complexes causing massive platelet activation | Primary Rx: Immediate cessation of all heparin + Non-heparin anticoagulation (Argatroban/Bivalirudin).",
            },
          ],
        },
      ],
    },
    {
      id: "dic.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Microangiopathic & Consumptive Thrombocytopenia",
      summary: "Differentiate DIC from TTP, HUS, HIT, and acute liver failure coagulopathy.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "DIC vs TTP (Thrombotic Thrombocytopenic Purpura)", value: "DIC has PROLONGED PT/INR and aPTT with low fibrinogen; TTP has NORMAL PT/INR, aPTT, and fibrinogen, but profound thrombocytopenia, microangiopathic hemolytic anemia (schistocytes), and severe ADAMTS13 deficiency (<10%)." },
            { label: "DIC vs Severe Liver Failure", value: "In acute liver failure, both PT and aPTT are prolonged, but Factor VIII level is NORMAL or ELEVATED (synthesized by endothelium), whereas in DIC Factor VIII is CONSUMED and LOW." },
            { label: "DIC vs Heparin-Induced Thrombocytopenia (HIT)", value: "HIT causes isolated thrombocytopenia with thrombosis without hypofibrinogenemia or prolonged coagulation times (PT/INR normal)." }
          ]
        }
      ]
    },
    {
      id: "dic.management",
      kind: "management",
      title: "Stepped Critical Care Management: Source Control & Targeted Component Therapy",
      summary: "The cardinal source control rule, transfusion triggers in active bleeding (Cryoprecipitate, Platelets, FFP/PCC), and why antifibrinolytics are contraindicated in sepsis DIC.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Stepped critical care protocol for Disseminated Intravascular Coagulation:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. The Absolute Cardinal Rule: Eradicate the Underlying Trigger",
              value: "DIC cannot be 'cured' by blood products alone. All therapy is futile without definitive source control: (1) Immediate broad-spectrum antimicrobials and surgical debridement for sepsis/NSTI; (2) Immediate operative delivery for placental abruption/amniotic fluid embolism; (3) Hemostatic surgery and damage control resuscitation for major polytrauma; (4) ATRA / ATO for acute promyelocytic leukemia.",
            },
            {
              label: "2. The 'Do Not Treat Laboratory Values' Principle",
              value: "In the absence of active bleeding or scheduled high-risk invasive procedures (lumbar puncture, major surgery), DO NOT administer prophylactic FFP, platelets, or cryoprecipitate simply to 'normalize' abnormal numbers. Prophylactic transfusion adds fuel to the microvascular thrombosis fire, increases TRALI/TACO risks, and worsens mortality.",
            },
            {
              label: "3. Targeted Transfusion Protocol: Bleeding Targets vs Prophylactic Triggers",
              value: "• Fibrinogen Repletion (Cryoprecipitate / Fibrinogen Concentrate): Transfuse Cryoprecipitate (10–20 units, or 1 unit per 10 kg; or 2–4 g Fibrinogen Concentrate) to maintain serum Fibrinogen strictly > 150 mg/dL (1.5 g/L) in actively bleeding patients. Hypofibrinogenemia is the primary driver of fatal microvascular bleeding.\n• Platelet Transfusion: Transfuse 1 adult dose (apheresis unit) to maintain Platelets > 50,000/uL in active bleeding (or > 100,000/uL in central nervous system bleeding or intracranial surgery). Prophylactic platelet transfusion in NON-bleeding patients is indicated only for profound thrombocytopenia (< 10,000–20,000/uL).\n• Plasma / Prothrombin Complex: Transfuse Fresh Frozen Plasma (15–20 mL/kg) ONLY in actively bleeding patients with severe PT/INR prolongation (> 1.5–2.0) and volume capacity; use 4F-PCC cautiously if volume overload precludes FFP.",
            },
            {
              label: "4. Anticoagulation in Predominantly Thrombotic DIC (Purpura Fulminans)",
              value: "In patients with severe organ-threatening microvascular thrombosis (purpura fulminans, symmetrical peripheral gangrene of digits/limbs) without active hemorrhage, continuous low-dose unfractionated heparin (5–10 U/kg/hr IV without bolus) may be considered to arrest ongoing thrombin generation.",
            },
            {
              label: "5. Antifibrinolytic Therapy (TXA) Considerations: Phenotype-Guided Strategy",
              value: "• Suppressed-Fibrinolysis Phenotype (Typical Sepsis-Associated DIC): Sepsis triggers massive endothelial PAI-1 release, resulting in profound fibrinolytic shutdown. Routine antifibrinolytic therapy (tranexamic acid or aminocaproic acid) is NOT recommended in typical sepsis-induced DIC, as halting residual plasmin activity risks exacerbating microvascular thrombosis, renal cortical necrosis, and ischemic organ failure.\n• Hyperfibrinolytic Phenotype (Trauma, Postpartum Hemorrhage, APL): In conditions where massive tPA release overwhelms inhibitors (severe trauma-induced coagulopathy, amniotic fluid embolism, acute obstetric exsanguination, or acute promyelocytic leukemia), tranexamic acid is an established, life-saving therapy when administered early.\n• Individualized / Specialist-Directed Use: In complex DIC cases with refractory, life-threatening hyperfibrinolytic bleeding (confirmed by viscoelastic testing [TEG/ROTEM] showing accelerated clot lysis), specialist-guided antifibrinolytic therapy may be considered alongside definitive source control and factor replacement.",
            },
          ],
        },
      ],
    },
    {
      id: "dic.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls in DIC Management",
      summary: "Critical errors to avoid in managing consumptive coagulopathy.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Transfusing blood products to treat laboratory numbers in a non-bleeding patient: Prophylactic transfusions increase microvascular thrombosis and transfusion-related lung injury; transfuse only for active hemorrhage or urgent invasive procedures.",
            "Routine administration of Tranexamic Acid (TXA) in sepsis-associated DIC: Sepsis is typically a state of fibrinolytic shutdown; unselected TXA administration can accelerate microvascular thrombosis and ischemic organ damage unless hyperfibrinolysis is clearly demonstrated.",
            "Confusing DIC with Thrombotic Thrombocytopenic Purpura (TTP): TTP has normal PT/aPTT and normal fibrinogen; giving platelet transfusions in TTP can precipitate fatal thrombosis, while TTP requires emergent plasma exchange.",
            "Failing to prioritize definitive surgical or medical source control: Blood products provide only brief, temporary hemostasis; without eradicating the underlying trigger (infection, obstetric crisis, trauma), consumptive coagulopathy inevitably recurs.",
            "Overlooking severe hypofibrinogenemia: Fibrinogen < 100 mg/dL severely impairs clot firmness regardless of platelet count; check fibrinogen levels serially and administer Cryoprecipitate.",
          ],
        },
      ],
    },
    {
      id: "dic.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Antithrombin III (ATIII) Concentrates and Recombinant Thrombomodulin in Sepsis DIC.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Anticoagulant Replacement Therapies in DIC: While physiological rationale supports replacing consumed natural anticoagulants, the large multicenter KyberSept trial evaluated high-dose Antithrombin III (ATIII) in severe sepsis and failed to show a 28-day survival benefit while increasing bleeding complications. Recombinant human soluble thrombomodulin (rhTM, ART-123 / SCARLET trial) showed promising reductions in 28-day mortality in patients with coagulopathy and cardiovascular/respiratory dysfunction, but did not reach statistical significance in the overall intent-to-treat population.",
        },
      ],
    },
    {
      id: "dic.complications",
      kind: "complications",
      title: "Complications & Escalation Triggers",
      summary: "Structured recognition of multiorgan microthrombosis, fatal hemorrhage, and transfusion targets.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Early / Life-Threatening", value: "Catastrophic multiorgan microvascular thrombosis (purpura fulminans, symmetrical peripheral gangrene, acute renal cortical necrosis), massive spontaneous intracranial/pulmonary/GI hemorrhage." },
            { label: "Treatment-Related", value: "Transfusion-Related Acute Lung Injury (TRALI) and Transfusion-Associated Circulatory Overload (TACO) from massive plasma/platelet replacement; heparin-induced bleeding in consumptive DIC." },
            { label: "Late / Delayed", value: "Permanent limb loss from peripheral ischemic necrosis, chronic renal insufficiency." },
            { label: "Escalation Triggers", value: "Refractory hypofibrinogenemia (<100-150 mg/dL) with active hemorrhage -> Cryoprecipitate (10 units) or Fibrinogen Concentrate; severe microvascular thrombosis in purpura fulminans -> therapeutic plasma exchange or careful IV unfractionated heparin in specialized centers." }
          ]
        }
      ]
    },
],
};
