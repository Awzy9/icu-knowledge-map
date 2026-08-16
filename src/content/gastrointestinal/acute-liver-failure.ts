import type { Topic } from "@/content-types";

export const acuteLiverFailure: Topic = {
  id: "acute-liver-failure",
  slug: "acute-liver-failure",
  title: "Acute Liver Failure (ALF)",
  category: "gi-hepatic",
  oneLiner: "Hyperammonemia, cytotoxic cerebral edema, balanced coagulopathy, N-acetylcysteine, 3% saline neuroprotection, CRRT ammonia clearance, and King's College transplant criteria.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Fulminant Hepatic Failure, Hepatorenal Syndrome, and Critical Care Hepatology",
    },
    {
      title: "AASLD Position Paper: The Management of Acute Liver Failure: Update 2011 (and 2023 Guidance on ALF)",
      edition: "Hepatology 2012;55(3):965-967 (and Hepatology 2023)",
    },
  ],
  currentStatus: "Current as of the AASLD Acute Liver Failure Guidance, the EASL Clinical Practice Guidelines on Acute (fulminant) Liver Failure, and the ALFSG trial on N-acetylcysteine in non-APAP ALF.",
  otherReferences: [
    "Lee WM, et al. Intravenous N-acetylcysteine improves transplant-free survival in early stage non-acetaminophen acute liver failure (ALFSG trial). Gastroenterology. 2009;137(3):856-864.",
    "Bernal W, et al. Acute liver failure. Lancet. 2010;376(9736):190-201.",
    "O'Grady JG, et al. Early indicators of prognosis in fulminant hepatic failure (King's College Criteria). Gastroenterology. 1989;97(2):439-445.",
    "Murphy N, et al. The effect of hypertonic sodium chloride on intracranial pressure in patients with acute liver failure. Hepatology. 2004;39(2):464-470.",
  ],
  relationships: [
    { type: "complication", targetId: "intracranial-hypertension", label: "Astrocytic glutamine swelling, cytotoxic cerebral edema, and brainstem herniation" },
    { type: "differential", targetId: "altered-consciousness", label: "Hepatic encephalopathy grading (West Haven Stages I–IV) and metabolic coma" },
    { type: "complication", targetId: "aki", label: "Hepatorenal syndrome and acute tubular necrosis" },
    { type: "related-to", targetId: "crrt", label: "Continuous venovenous hemofiltration for ammonia clearance and temperature control" },
    { type: "related-to", targetId: "bleeding", label: "The rebalanced hemostasis paradox and rotational thromboelastometry" },
    { type: "related-to", targetId: "shock", label: "High-output vasoplegic shock and vasopressor titration" },
  ],
  sections: [
    {
      id: "acute-liver-failure.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "alf-guideline-aasld-2023",
          relevance: "AASLD 2023 practice guidance on acute liver failure, NAC therapy, and liver transplant criteria"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Acute Liver Failure (ALF) is a catastrophic multiorgan syndrome defined by the rapid onset of severe hepatocellular dysfunction, coagulopathy (INR ≥ 1.5), and hepatic encephalopathy in a patient without pre-existing cirrhosis, carrying high mortality from cerebral edema and vasoplegic collapse.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Acute Liver Failure (ALF, formerly fulminant hepatic failure) is classified based on the interval from the onset of jaundice to the development of hepatic encephalopathy: Hyperacute (< 7 days; e.g. Acetaminophen, Hepatitis A/E, ischemia; highest cerebral edema rate but best transplant-free survival), Acute (7–28 days; e.g. Hepatitis B), and Subacute (4–26 weeks; e.g. Drug-Induced Liver Injury, autoimmune hepatitis; insidious progression with highest mortality without transplantation).",
        },
        {
          type: "paragraph",
          text: "The clinical imperatives in the ICU are: (1) Rapid identification of reversible etiologies and immediate initiation of N-Acetylcysteine (NAC); (2) Prevention and aggressive management of hyperammonemic cerebral edema; (3) Avoidance of prophylactic blood product transfusions (understanding the 'rebalanced hemostasis' concept); (4) Early application of CRRT for ammonia clearance; and (5) Immediate consultation and transfer to a specialized liver transplant center utilizing King's College Criteria.",
        },
      ],
    },
    {
      id: "acute-liver-failure.physiology",
      kind: "physiology",
      title: "Pathophysiology: Hyperammonemia, Brain Edema & The Rebalanced Hemostasis Paradox",
      summary: "Ammonia neurotoxicity, astrocytic glutamine accumulation, high-output vasoplegia, hypoglycemia, and concurrent loss of pro- and anticoagulant proteins.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Multisystem pathophysiological derangements in acute liver failure:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Hyperammonemic Cytotoxic Cerebral Edema",
              value: "Massive hepatic necrosis halts the urea cycle. Circulating ammonia (NH3) crosses the blood-brain barrier into astrocytes, where glutamine synthetase converts ammonia and glutamate into Glutamine. Intracellular glutamine accumulation acts as a potent osmotic sponge, drawing free water into astrocytes, producing Cytotoxic Brain Edema. Sustained arterial ammonia > 150–200 mcg/dL correlates with a > 70% incidence of intracranial hypertension (ICP > 20–25 mmHg) and fatal transtentorial/tonsillar herniation.",
            },
            {
              label: "2. The Rebalanced Hemostasis Paradox",
              value: "While standard coagulopathy markers (PT/INR) are markedly prolonged due to failure of hepatic synthesis of procoagulant factors (II, V, VII, IX, X, fibrinogen), the failing liver SIMULTANEOUSLY loses synthesis of natural anticoagulant proteins (Protein C, Protein S, Antithrombin III). Concurrently, damaged endothelial cells release massive quantities of Factor VIII and von Willebrand Factor (vWF). Net result: Hemostasis is REBALANCED. Spontaneous clinical bleeding occurs in < 5% of ALF patients; prophylactic FFP/platelet transfusion does NOT prevent bleeding, obscures the INR (the single best prognostic marker), and causes volume overload and TRALI.",
            },
            {
              label: "3. Hyperdynamic Vasoplegic Shock",
              value: "Systemic cytokine storm (TNF-alpha, IL-6), splanchnic vasodilation, and nitric oxide overproduction produce a profound hyperdynamic vasoplegic state (elevated Cardiac Index > 4.5 L/min/m2 with severely depressed Systemic Vascular Resistance < 600 dynes-sec/cm5). Relative adrenal insufficiency occurs in up to 60% of cases.",
            },
            {
              label: "4. Severe Hypoglycemia & Lactic Acidosis",
              value: "Exhaustion of hepatic glycogen stores and complete failure of gluconeogenesis causes rapid, profound hypoglycemia; failure of hepatic lactate clearance via the Cori cycle worsens metabolic lactic acidosis.",
            },
          ],
        },
      ],
    },
    {
      id: "acute-liver-failure.etiology-diagnosis",
      kind: "diagnosis",
      title: "Etiological Diagnostic Workup & Severity Staging",
      summary: "West Haven Encephalopathy staging (I–IV), acetaminophen vs non-APAP etiologies, and emergency transplant criteria.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "West Haven Hepatic Encephalopathy Staging and diagnostic workup:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. West Haven Encephalopathy Grading",
              value: "• Grade I: Mild confusion, euphoria or anxiety, shortened attention span, altered sleep rhythm; no asterixis.\n• Grade II: Lethargy, moderate disorientation, personality changes, inappropriate behavior, overt Asterixis ('flapping tremor').\n• Grade III: Somnolence to semi-stupor, responsive to verbal stimuli, marked confusion, incoherent speech; asterixis present.\n• Grade IV: Deep Coma; unresponsive to verbal stimuli, posturing (decorticate/decerebrate) or flaccid. Mandates immediate endotracheal intubation.",
            },
            {
              label: "2. Immediate Etiological Laboratory Panel",
              value: "• Acetaminophen level (mandatory even if overdose denied; send APAP adducts if available).\n• Viral Serologies: Acute Hepatitis A (IgM anti-HAV), Acute Hepatitis B (HBsAg, IgM anti-HBc, HBV-DNA), Hepatitis D/E, HSV-1/2 PCR, VZV, CMV, EBV.\n• Autoimmune: ANA, ASMA (anti-smooth muscle), IgG levels, LKM-1.\n• Wilson Disease (in young patients): Serum ceruloplasmin, 24h urine copper, Coombs-negative hemolytic anemia with elevated bilirubin-to-alkaline phosphatase ratio > 2.0.\n• Vascular/Pregnancy: Right Upper Quadrant Doppler Ultrasound (rule out Budd-Chiari hepatic vein thrombosis), pregnancy test (AFLP / HELLP).",
            },
            {
              label: "3. King's College Criteria for Liver Transplantation",
              value: "• Acetaminophen-Induced ALF: Arterial pH < 7.30 at 24 hours after resuscitation; OR all 3 of: (1) INR > 6.5 (PT > 100s), (2) Serum Creatinine > 3.4 mg/dL (300 umol/L), (3) Grade III or IV Encephalopathy within 24h. (Or arterial lactate > 3.5 at 4h or > 3.0 at 12h).\n• Non-Acetaminophen ALF: INR > 6.5; OR any 3 of the following 5 criteria: (1) Age < 10 or > 40 years, (2) Etiology (DILI, autoimmune, indeterminate), (3) Jaundice-to-encephalopathy interval > 7 days, (4) INR > 3.5, (5) Serum Bilirubin > 17.5 mg/dL (300 umol/L).",
            },
          ],
        },
      ],
    },
    {
      id: "acute-liver-failure.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Hyperacute Hepatic Necrosis & Coagulopathy",
      summary: "Differentiate acetaminophen toxicity, viral hepatitis, ischemic hepatitis (shock liver), and acute Wilson disease.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Ischemic Hepatitis ('Shock Liver'): Massive aminotransferase spikes (>5,000-10,000 U/L) and LDH elevation following transient hypotensive event, rapidly resolving within 48-72h of circulatory restoration.",
          "Acetaminophen Toxicity: Massive AST/ALT elevation with early high acetaminophen adduct levels; rapid progression to encephalopathy.",
          "Acute Wilson Disease: Hyperacute liver failure with severe Coombs-negative hemolytic anemia, marked hyperbilirubinemia with disproportionately low alkaline phosphatase (Alk Phos to Bilirubin ratio < 2.0).",
          "Budd-Chiari Syndrome: Hepatic vein thrombosis presenting with tender hepatomegaly, intractable ascites, and caudate lobe hypertrophy on Doppler ultrasound."
]
        }
      ]
    },
    {
      id: "acute-liver-failure.management",
      kind: "management",
      title: "Stepped ICU Resuscitation: NAC, Neuroprotection & CRRT Protocols",
      summary: "The 3-bag N-acetylcysteine protocol, 3% Hypertonic Saline for ICP prophylaxis, early high-effluent CRRT, and vasopressor support.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Protocolized ICU critical care resuscitation for Acute Liver Failure:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. N-Acetylcysteine (NAC) Protocol (APAP & Non-APAP)",
              value: "• Acetaminophen Toxicity: IV NAC must be started immediately. Standard 3-Bag Regimen: Loading dose 150 mg/kg in 200 mL D5W over 1 hour; Second dose 50 mg/kg in 500 mL D5W over 4 hours; Third dose 100 mg/kg in 1000 mL D5W over 16 hours. Continue continuous NAC infusion (6.25 mg/kg/hr) until AST/ALT and INR are steadily improving and APAP is undetectable.\n• Non-Acetaminophen ALF (The ALFSG Trial): The landmark ALFSG trial demonstrated that IV NAC significantly improved transplant-free survival (from 27% to 40%) in early-stage (Grade I–II encephalopathy) non-APAP ALF by improving hepatic microcirculatory blood flow and scavenging free radicals.",
            },
            {
              label: "2. Neuroprotection & Brain Edema Management",
              value: "• Prophylactic Hypertonic Saline: Maintain serum sodium strictly 145–155 mEq/L using 3% Hypertonic Saline infusion (Murphy et al. proved prophylactic hypertonic saline significantly reduces acute surges in ICP in Grade 3/4 encephalopathy).\n• Airway: Intubate immediately for Grade 3 or 4 encephalopathy using rapid sequence intubation with Ketamine/Propofol and Rocuronium.\n• Positioning & Environment: Head of bed 30 degrees, neutral neck, minimal suctioning/stimulation.\n• Temperature: Maintain strict normothermia (36.0–36.8°C). Avoid fever (> 37.5°C doubles cerebral ammonia uptake and ICP).",
            },
            {
              label: "3. Continuous Renal Replacement Therapy (CRRT)",
              value: "• Initiate early Continuous Venovenous Hemofiltration (CVVH) with high effluent flow (30–35 mL/kg/hr) even in the absence of severe AKI for hyperammonemia (arterial ammonia > 150 mcg/dL), metabolic acidosis, or hyperthermia.\n• Ammonia is a small water-soluble molecule (17 Da) cleared efficiently by convective hemofiltration.",
            },
            {
              label: "4. Hemodynamics & Metabolic Support",
              value: "• Vasopressors: Norepinephrine first-line (titrate to MAP ≥ 65–75 mmHg to ensure adequate Cerebral Perfusion Pressure [CPP 60–70 mmHg]); add Vasopressin (0.03 U/min) for refractory vasoplegia.\n• Hypoglycemia: Continuous 10% or 20% Dextrose (D10W / D20W) infusion via central line with hourly blood glucose checks (target 140–180 mg/dL).\n• Coagulopathy Management: Do NOT give prophylactic FFP or platelets! Transfuse ONLY for active invasive bleeding or immediately before intracranial pressure monitor placement (guided by viscoelastic testing / ROTEM).",
            },
          ],
        },
      ],
    },
    {
      id: "acute-liver-failure.complications",
      kind: "complications",
      title: "ICU Complications & Multiorgan Failure",
      summary: "Transtentorial brainstem herniation, bacterial/fungal sepsis, pancreatitis, and sudden cardiac collapse.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Transtentorial Uncal & Tonsillar Herniation: The primary cause of death in hyperacute ALF; heralds with pupil dilation, Cushing's triad (hypertension, bradycardia, irregular respiration), and decerebrate posturing.",
            "Invasive Bacterial & Fungal Sepsis: Occurs in > 80% of ALF patients due to reticuloendothelial clearance failure, opsonin deficiency, and complement depletion; maintain a low threshold for broad-spectrum empiric antibiotics and antifungal therapy (Echinocandins).",
            "Severe Metabolic Lactic Acidosis & Hypoglycemia: Terminal metabolic collapse from loss of hepatic functional mass.",
            "Acute Respiratory Distress Syndrome (ARDS) & Pancreatitis: High incidence secondary to massive systemic cytokine storm.",
          ],
        },
      ],
    },
    {
      id: "acute-liver-failure.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical errors in managing acute liver failure in the ICU.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Administering prophylactic FFP to 'correct' an elevated INR: FFP does not reduce bleeding risk, causes fluid overload and TRALI, and destroys the INR as the primary prognostic tool to assess transplant need; avoid FFP unless active severe bleeding is present.",
            "Delaying transfer to a specialized liver transplant center until Grade 3/4 encephalopathy develops: Once Grade 4 encephalopathy occurs, brain edema makes transfer high-risk or impossible; contact the transplant center at the first sign of coagulopathy + confusion.",
            "Withholding N-Acetylcysteine in non-acetaminophen ALF: The ALFSG trial demonstrated clear transplant-free survival benefit for NAC in non-APAP ALF; start IV NAC for all etiologies.",
            "Administering hypotonic IV fluids or allowing hyponatremia: Serum sodium < 135 mEq/L severely accelerates cytotoxic brain edema and precipitates herniation; keep sodium strictly 145–155 mEq/L.",
            "Using oral Lactulose aggressively in intubated ALF patients: Lactulose causes massive bowel distension and gas accumulation, severely interfering with emergency liver transplantation surgery; avoid aggressive lactulose.",
          ],
        },
      ],
    },
    {
      id: "acute-liver-failure.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Extracorporeal Liver Support Systems (MARS) and Invasive ICP Monitoring.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Extracorporeal Artificial Liver Support (MARS / Prometheus): Randomized clinical trials (such as the FULMAR trial) evaluating albumin dialysis (MARS) showed improvements in biochemical parameters and encephalopathy grade, but failed to demonstrate a statistically significant improvement in transplant-free survival. Its use is currently reserved for specialized centers as a temporary bridge to transplantation.",
        },
        {
          type: "paragraph",
          text: "Invasive Intracranial Pressure (ICP) Monitoring: While direct parenchymal ICP monitoring provides real-time CPP guidance, it carries a 10–20% risk of intracranial hemorrhage in ALF coagulopathy. Non-invasive monitoring (serial optic nerve sheath diameter [ONSD] ultrasound and pupillometry) combined with empirical hyperosmolar protocols is increasingly favored.",
        },
      ],
    },
  ],
};
