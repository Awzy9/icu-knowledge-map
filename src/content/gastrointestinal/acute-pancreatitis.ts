import type { Topic } from "@/content-types";

export const acutePancreatitis: Topic = {
  id: "acute-pancreatitis",
  slug: "acute-pancreatitis",
  title: "Severe Acute Pancreatitis",
  category: "gi-hepatic",
  oneLiner: "Revised Atlanta severity staging, WATERFALL moderate fluid resuscitation, early enteral nutrition, antibiotic avoidance in sterile necrosis, and the PANTER step-up approach.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Severe Acute Pancreatitis, Pancreatic Necrosis, and Abdominal Sepsis in the ICU",
    },
    {
      title: "American Gastroenterological Association Clinical Practice Guideline on Initial Management of Acute Pancreatitis",
      edition: "Gastroenterology 2018;154(4):1096-1108 (and ACG 2024 Guidelines)",
    },
  ],
  currentStatus: "Current as of the 2024 ACG Guidelines for Management of Acute Pancreatitis, the IAP/APA Evidence-Based Guidelines, and the WATERFALL, PANTER, and PYTHON randomized trials.",
  otherReferences: [
    "Tenner S, et al. American College of Gastroenterology Guidelines: Management of Acute Pancreatitis. Am J Gastroenterol. 2024;119(3):419-437.",
    "de-Madaria E, et al. Aggressive versus Moderate Fluid Resuscitation for Acute Pancreatitis (WATERFALL trial). N Engl J Med. 2022;387(14):1325-1337.",
    "van Santvoort HC, et al. A step-up approach or open necrosectomy for necrotizing pancreatitis (PANTER trial). N Engl J Med. 2010;362(16):1491-1502.",
    "Bakker OJ, et al. Early Enteral Nutrition in Severe Acute Pancreatitis (PYTHON trial). N Engl J Med. 2014;371(21):1983-1993.",
    "Banks PA, et al. Classification of acute pancreatitis—2012: revision of the Atlanta classification and definitions by international consensus. Gut. 2013;62(1):102-111.",
  ],
  relationships: [
    { type: "complication", targetId: "ards", label: "Enzyme-mediated pulmonary capillary leak and acute lung injury" },
    { type: "complication", targetId: "shock", label: "Massive third-spacing, SIRS, and vasoplegic distributive shock" },
    { type: "complication", targetId: "aki", label: "Prerenal hypoperfusion and intra-abdominal hypertension" },
    { type: "differential", targetId: "sepsis", label: "Sterile systemic inflammatory response syndrome vs infected necrosis" },
    { type: "related-to", targetId: "metabolic-acidosis", label: "Lactic acidosis and hypocalcemia in severe necrotizing disease" },
  ],
  sections: [
    {
      id: "acute-pancreatitis.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "pancreatitis-guideline-aga-2018",
          relevance: "AGA guideline on moderate fluid resuscitation and step-up approach for pancreatitis"
        },
        {
          kind: "trial",
          id: "pancreatitis-waterfall-trial",
          relevance: "WATERFALL trial proving aggressive fluid loading causes volume overload harm in acute pancreatitis"
        },
        {
          kind: "trial",
          id: "pancreatitis-panter-trial",
          relevance: "PANTER landmark trial establishing minimally invasive step-up approach over open necrosectomy"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Severe Acute Pancreatitis (SAP) is an acute necro-inflammatory disease of the pancreas characterized by premature intracellular zymogen activation, systemic inflammatory response syndrome (SIRS), massive retroperitoneal fluid sequestration, and persistent multiorgan failure.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Acute Pancreatitis represents a leading gastrointestinal cause of ICU admission. While mild pancreatitis resolves with brief supportive care, Severe Acute Pancreatitis (SAP, defined by persistent multiorgan failure > 48 hours) carries an ICU mortality of 20% to 40%, primarily driven by early sterile SIRS/shock and late secondary infected pancreatic necrosis.",
        },
        {
          type: "paragraph",
          text: "The clinical imperatives in the ICU are: (1) Moderate goal-directed fluid resuscitation with Lactated Ringer's (avoiding aggressive fluid overload per the WATERFALL trial); (2) Early enteral nutrition to maintain mucosal barrier integrity; (3) Strict avoidance of prophylactic antibiotics for sterile necrosis; (4) Minimally invasive 'Step-Up' drainage for infected walled-off necrosis (PANTER trial); and (5) Vigilant monitoring for Abdominal Compartment Syndrome (ACS) and ARDS.",
        },
      ],
    },
    {
      id: "acute-pancreatitis.physiology-staging",
      kind: "physiology",
      title: "Pathophysiology & Revised Atlanta Severity Staging",
      summary: "Trypsinogen autodigestion, microvascular thrombosis, retroperitoneal third-spacing, and Modified Marshall Organ Failure Staging.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Cellular pathophysiological cascade and international severity definitions:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Intracellular Zymogen Activation & Autodigestion",
              value: "Disruption of acinar calcium signaling causes premature fusion of zymogen granules with lysosomes (colocalization). Lysosomal cathepsin B cleaves trypsinogen into active Trypsin, which activates downstream elastase, phospholipase A2, and carboxypeptidase. This triggers acinar autodigestion, peripancreatic fat saponification (consuming ionized calcium and causing profound hypocalcemia), and retroperitoneal microvascular thrombosis.",
            },
            {
              label: "2. The Biphasic Mortality Curve",
              value: "• Early Phase (Weeks 1–2): Driven by sterile systemic inflammatory response syndrome (SIRS). Circulating pancreatic enzymes and cytokines (TNF-alpha, IL-1beta, IL-6) cause widespread endothelial barrier breakdown, massive third-spacing (4–8 L retroperitoneal sequestration), vasoplegic shock, and acute lung injury (ARDS).\n• Late Phase (Weeks > 2): Driven by secondary bacterial infection of necrotic pancreatic parenchyma (infected necrosis and peripancreatic fluid collections via gut mucosal bacterial translocation), leading to septic shock and death.",
            },
            {
              label: "3. Revised Atlanta Severity Classification",
              value: "• Mild Acute Pancreatitis: Absence of organ failure and absence of local/systemic complications; resolves rapidly.\n• Moderately Severe Acute Pancreatitis: Transient Organ Failure (< 48 hours) AND/OR local complications (acute peripancreatic fluid collections, pseudocyst, sterile necrosis).\n• Severe Acute Pancreatitis: Persistent Organ Failure (> 48 hours) involving one or more organ systems (Cardiovascular, Respiratory, Renal) assessed via the Modified Marshall Score:\n  - Cardiovascular: SBP < 90 mmHg unresponsive to fluids, requiring inotropes/vasopressors.\n  - Respiratory: PaO2/FiO2 ratio ≤ 300 mmHg.\n  - Renal: Serum Creatinine ≥ 1.9 mg/dL (170 umol/L).",
            },
          ],
        },
      ],
    },
    {
      id: "acute-pancreatitis.diagnosis-etiology",
      kind: "diagnosis",
      title: "Diagnostic Criteria & Etiological Workup",
      summary: "The 2-of-3 diagnostic rule, gallstones vs alcohol vs hypertriglyceridemia, and CT imaging timing (why not day 1).",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Diagnostic criteria and etiological evaluation:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Diagnostic Triad (Requires ≥ 2 of 3)",
              value: "1. Characteristic epigastric pain (severe, abrupt onset, radiating band-like to the back, relieved by leaning forward).\n2. Serum Lipase or Amylase ≥ 3 times the Upper Limit of Normal (Lipase is preferred due to higher sensitivity and prolonged elevation 8–14 days; absolute magnitude of lipase elevation does NOT correlate with disease severity!).\n3. Characteristic radiological findings of acute pancreatitis on Contrast-Enhanced CT (CECT), MRI, or transabdominal ultrasound.",
            },
            {
              label: "2. Etiological Workup",
              value: "• Gallstones (40–50%): Transabdominal ultrasound to detect cholelithiasis, choledocholithiasis, and biliary ductal dilation (ALT > 150 IU/L has 95% positive predictive value for biliary etiology).\n• Alcohol (30–35%): Chronic heavy intake.\n• Hypertriglyceridemia (5–10%): Fasting serum triglycerides > 1000 mg/dL (11.3 mmol/L). Treated with continuous IV Regular Insulin infusion (0.1 U/kg/hr with D5W) to activate lipoprotein lipase and clear triglycerides < 500 mg/dL.\n• Other: Post-ERCP, medications (azathioprine, GLP-1 agonists, valproate, furosemide), hypercalcemia, trauma, and autoimmune (IgG4).",
            },
            {
              label: "3. CT Imaging Timing — Why Avoid Routine Early CT?",
              value: "Contrast-Enhanced CT (CECT) performed in the first 24–48 hours frequently underestimates the true extent of pancreatic necrosis because tissue non-enhancement takes 72 to 96 hours to fully demarcate. CECT is indicated in the first 48 hours ONLY to rule out other intra-abdominal surgical catastrophes (ischemic bowel, perforated ulcer). The optimal time for CECT to evaluate necrosis is 72 to 96 hours after symptom onset.",
            },
          ],
        },
      ],
    },
    {
      id: "acute-pancreatitis.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Severe Epigastric Pain & Systemic Inflammation",
      summary: "Differentiate acute necrotizing pancreatitis from acute mesenteric ischemia, perforated peptic ulcer, and ruptured AAA.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Acute Mesenteric Ischemia: Severe pain out of proportion with soft abdomen early on; lactate rises late; CTA confirms mesenteric arterial occlusion.",
          "Perforated Peptic Ulcer: Sudden onset rigid board-like peritonitis with subdiaphragmatic free air on upright X-ray / CT.",
          "Biliary Colic / Acute Cholecystitis: Right upper quadrant tenderness, positive Murphy's sign, gallbladder wall thickening and pericholecystic fluid on POCUS."
]
        }
      ]
    },
    {
      id: "acute-pancreatitis.management",
      kind: "management",
      title: "Stepped ICU Resuscitation: Fluid Protocol, Nutrition & The Step-Up Approach",
      summary: "The WATERFALL trial moderate fluid protocol, early enteral nutrition (PYTHON trial), strict avoidance of prophylactic antibiotics, and the PANTER step-up strategy.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Stepped, evidence-based critical care management of acute pancreatitis:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Fluid Resuscitation Protocol (The WATERFALL Trial Paradigm)",
              value: "• Fluid Selection: Balanced Crystalloid (Lactated Ringer's preferred over 0.9% Normal Saline; LR reduces systemic inflammation and hyperchloremic metabolic acidosis).\n• The Landmark WATERFALL Trial (NEJM 2022): Proved that aggressive fluid loading (20 mL/kg bolus + 3 mL/kg/hr) significantly increased fluid overload (20.5% vs 6.3%, p = 0.004) without improving clinical recovery or preventing organ failure compared to moderate hydration.\n• Recommended Moderate Protocol:\n  - If Hypovolemic (tachycardia, SBP < 100, BUN > 20, dry mucous membranes): Administer a moderate bolus of 10 mL/kg LR over 2 hours, then maintain 1.5 mL/kg/hr.\n  - If Euvolemic: Start directly on maintenance LR at 1.5 mL/kg/hr.\n  - Re-evaluate at 6, 12, 24, and 48 hours; adjust infusion rate based on hematocrit (< 35–40%), BUN, urine output (> 0.5 mL/kg/hr), and ultrasound signs of fluid overload.",
            },
            {
              label: "2. Early Enteral Nutrition (The PYTHON Trial Protocol)",
              value: "• Early Enteral Tube Feeding: Start enteral nutrition within 24 to 72 hours via Nasogastric (NG) or Nasojejunal (NJ) tube using standard polymeric liquid formula.\n• Evidence (PYTHON Trial): Enteral feeding maintains gut mucosal architecture, prevents bacterial translocation across the ischemic bowel barrier, and reduces infectious complications, surgical interventions, and mortality compared to Total Parenteral Nutrition (TPN). TPN is reserved ONLY for patients who cannot tolerate enteral tube feeds.",
            },
            {
              label: "3. CRITICAL RULE: Withhold Prophylactic Antibiotics in Sterile Necrosis",
              value: "Multiple randomized controlled trials and meta-analyses have definitively established that routine prophylactic intravenous antibiotics in sterile acute necrotizing pancreatitis DO NOT reduce infected necrosis, do NOT reduce surgical intervention rates, and do NOT improve mortality, while selecting for resistant fungal (Candida) and MDR bacterial superinfections. Prophylactic antibiotics are STRICTLY CONTRAINDICATED.",
            },
            {
              label: "4. Infected Necrosis & The Minimally Invasive Step-Up Approach (PANTER Trial)",
              value: "• Diagnosis: Suspected in patients with persistent fever, rising leukocytosis, or clinical deterioration after 7–14 days, or documented 'gas bubbles' within pancreatic necrosis on CECT.\n• Empiric Antibiotics for Infected Necrosis: High pancreatic tissue penetration agents: Carbapenem (Meropenem 1.0 g IV q8h) OR Fluoroquinolone + Metronidazole.\n• The Step-Up Approach (PANTER Trial): Delay invasive drainage until necrosis is 'walled off' (Walled-Off Pancreatic Necrosis, WOPN; typically ≥ 4 weeks after onset). Step 1: Percutaneous retroperitoneal catheter drainage or Endoscopic transluminal transmural drainage (resolves infection in > 35% of patients without surgery); Step 2: Minimally invasive retroperitoneal necrosectomy (VARD) or endoscopic necrosectomy ONLY if catheter drainage fails. Reduces major complications and death by 50% compared to primary open laparotomy.",
            },
            {
              label: "5. Urgent ERCP Indications (The APEC Trial)",
              value: "Urgent ERCP with biliary sphincterotomy within 24 to 48 hours is indicated ONLY if concurrent Acute Cholangitis (fever, jaundice, biliary sepsis) or persistent common bile duct stone obstruction is present. Routine early ERCP in predicted severe biliary pancreatitis without cholangitis does NOT improve outcomes (APEC trial).",
            },
          ],
        },
      ],
    },
    {
      id: "acute-pancreatitis.complications",
      kind: "complications",
      title: "ICU Complications & Abdominal Compartment Syndrome",
      summary: "Abdominal Compartment Syndrome (ACS), ARDS, severe hypocalcemia, pseudoaneurysm rupture, and pancreatic fistulae.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Abdominal Compartment Syndrome (ACS): Defined as sustained Intra-Abdominal Pressure (IAP) > 20 mmHg measured via bladder catheter, accompanied by new or worsening organ failure (oliguria, refractory hypoxemia, high peak airway pressures); managed with NG/rectal decompression, paralysis, percutaneous drainage of tense ascites, and emergency surgical decompressive laparostomy.",
            "Acute Respiratory Distress Syndrome (ARDS): Direct alveolar epithelial damage from circulating pancreatic phospholipase A2 and systemic cytokines.",
            "Profound Hypocalcemia & Saponification: Fat necrosis chelating ionized calcium; requires IV Calcium Gluconate repletion to maintain iCa > 1.0 mmol/L and prevent myocardial depression and tetany.",
            "Splenic/Gastroduodenal Pseudoaneurysm Rupture: Erosion of retroperitoneal arteries by proteolytic pancreatic enzymes presenting with sudden massive gastrointestinal or intra-abdominal hemorrhage; requires emergency transcatheter arterial embolization (TAE).",
          ],
        },
      ],
    },
    {
      id: "acute-pancreatitis.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "High-risk mistakes in managing severe acute pancreatitis.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Administering aggressive volume overload (> 4–6 L in 24h): Over-resuscitation increases abdominal compartment syndrome, ARDS, and mortality without improving renal function (the WATERFALL trial warning); use moderate hydration with Lactated Ringer's.",
            "Prescribing prophylactic antibiotics for sterile necrotizing pancreatitis: Multiple trials prove zero benefit and increased fungal superinfections; withhold antibiotics unless infected necrosis is documented or clinical sepsis develops.",
            "Ordering immediate contrast CT on admission: Day 1 CT underestimates necrosis and may worsen acute renal injury; delay elective staging CT to 72–96 hours.",
            "Keeping patients NPO for weeks on TPN: Starvation leads to gut barrier breakdown and bacterial translocation; initiate early enteral tube feeding within 24–72 hours.",
            "Rushing to early open surgical necrosectomy in the first 2–3 weeks: Early open surgery on unorganized necrosis causes massive hemorrhage and 50% mortality; delay intervention until walled-off (≥ 4 weeks) and utilize the minimally invasive Step-Up approach.",
          ],
        },
      ],
    },
    {
      id: "acute-pancreatitis.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Endoscopic Transluminal vs Minimally Invasive Surgical Necrosectomy (TENSION Trial).",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Endoscopic Transluminal Necrosectomy vs Surgical Step-Up (The TENSION & MIS-PANC Trials): In patients with infected walled-off necrosis (WOPN) located adjacent to the gastric wall, endoscopic transmural drainage and necrosectomy (using lumen-apposing metal stents, LAMS) achieves similar survival to minimally invasive surgical necrosectomy (VARD), but significantly reduces the incidence of long-term pancreatic fistulae, hospital stay, and systemic inflammatory spikes.",
        },
      ],
    },
  ],
};
