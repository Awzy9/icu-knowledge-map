import type { Topic } from "@/content-types";

export const acuteMesentericIschemia: Topic = {
  id: "acute-mesenteric-ischemia",
  slug: "acute-mesenteric-ischemia",
  title: "Acute Mesenteric Ischemia (AMI)",
  category: "gi-hepatic",
  oneLiner: "Rapid biphasic CTA diagnosis, mechanism-specific revascularization (embolism vs thrombosis vs venous thrombosis vs NOMI), individualized therapeutic anticoagulation, and selective second-look laparotomy.",
  status: "complete",
  lastReviewed: "2026-08-16",
  version: "2.1",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapter 82: Acute Mesenteric Ischemia and Splanchnic Vascular Disorders"
    },
    {
      title: "Oh's Intensive Care Manual",
      edition: "9th Edition, 2025",
      note: "Chapter 45: Vascular Emergencies of the Gastrointestinal Tract"
    }
  ],
  currentStatus: "Current as of the 2022 World Society of Emergency Surgery (WSES) Guidelines for the Management of Acute Mesenteric Ischemia.",
  otherReferences: [
    "Bala M, et al. Acute mesenteric ischemia: updated guidelines of the World Society of Emergency Surgery. World J Emerg Surg. 2022;17(1):54.",
    "Corcos O, et al. Effects of a multimodal management strategy for acute mesenteric ischemia on 2-year survival: a prospective study. Lancet Gastroenterol Hepatol. 2020;5(6):553-561."
  ],
  relationships: [
    { type: "prerequisite", targetId: "shock", label: "Non-occlusive mesenteric ischemia (NOMI) in low-flow distributive or cardiogenic shock" },
    { type: "complication", targetId: "septic-shock", label: "Bacterial translocation, mucosal necrosis, and overwhelming intra-abdominal sepsis" },
    { type: "complication", targetId: "metabolic-acidosis", label: "Severe lactic acidosis secondary to extensive transmural bowel gangrene" },
    { type: "differential", targetId: "acute-pancreatitis", label: "Severe epigastric pain and elevated serum amylase in acute abdominal crisis" }
  ],
  sections: [
    {
      id: "acute-mesenteric-ischemia.overview",
      kind: "overview",
      title: "The Four Subtypes & Time-to-Treatment Window",
      summary: "Acute Mesenteric Ischemia (AMI) is a life-threatening abdominal vascular catastrophe with mortality exceeding 50% to 70%. Survival depends on early diagnosis before transmural infarction occurs.",
      provenance: "guideline",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "mesenteric-ischemia-guideline-wses-2022",
          relevance: "2022 WSES Guidelines on multimodal diagnosis, endovascular vs surgical revascularization, and second-look laparotomy"
        }
      ],
      body: [
        {
          type: "paragraph",
          text: "The hallmark clinical presentation of AMI is 'pain out of proportion to physical examination' — severe, sudden, agonizing abdominal pain with a soft, non-tender abdomen early in the course. The bowel mucosa is exquisitely sensitive to ischemia; irreversible transmural gangrene develops within 6 to 12 hours of complete arterial occlusion."
        },
        {
          type: "key-value-table",
          rows: [
            { label: "1. SMA Embolism (~50%)", value: "Cardiac embolus (atrial fibrillation, post-MI mural thrombus, endocarditis) lodging in the superior mesenteric artery typically 3-8 cm distal to the origin, sparing the proximal jejunum." },
            { label: "2. SMA Thrombosis (~25%)", value: "Acute thrombosis superimposed on chronic atherosclerotic stenosis at the ostium of the SMA, frequently with a prior history of 'intestinal angina' (postprandial pain, weight loss)." },
            { label: "3. Non-Occlusive Mesenteric Ischemia (NOMI, ~20%)", value: "Profound splanchnic vasoconstriction in low-flow states (severe cardiogenic shock, septic shock, high-dose vasopressors, cardiac surgery, dialysis). The vessels are patent but severely constricted." },
            { label: "4. Mesenteric Venous Thrombosis (MVT, ~5-10%)", value: "Thrombosis of the superior mesenteric or portal vein associated with inherited thrombophilia, cirrhosis/portal hypertension, intra-abdominal infection, or malignancy." }
          ]
        }
      ]
    },
    {
      id: "acute-mesenteric-ischemia.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Gold Standard & The Lactate Myth",
      summary: "Biphasic contrast-enhanced CTA of the abdomen is the definitive diagnostic modality of choice. A normal lactate DOES NOT exclude early ischemia.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Early diagnosis before bowel necrosis occurs is the single greatest determinant of survival."
        },
        {
          type: "key-value-table",
          rows: [
            { label: "Diagnostic Gold Standard", value: "Biphasic Multidetector CT Angiography (CTA) of abdomen and pelvis with IV contrast in arterial AND portal venous phases without oral contrast is the primary imaging modality of choice (sensitivity >90-95%, specificity >95%). Directly visualizes arterial embolus/thrombus, SMA patency, bowel wall hypo-enhancement, pneumatosis intestinalis, and portal venous gas." },
            { label: "CRITICAL PITFALL: The Serum Lactate Myth", value: "A normal serum lactate concentration DOES NOT exclude acute mesenteric ischemia. Elevation of D-lactate and L-lactate occurs late, only after irreversible transmural bowel gangrene and mucosal barrier collapse have already developed. Waiting for elevated lactate or metabolic acidosis guarantees high mortality." },
            { label: "Laboratory Clues", value: "Marked leukocytosis (>15,000-20,000/uL with left shift), elevated D-dimer (>1.0 mcg/mL, >95% sensitive), high-normal amylase, and metabolic acidosis with high anion gap in late stages." }
          ]
        }
      ]
    },
    {
      id: "acute-mesenteric-ischemia.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Acute Severe Abdominal Pain",
      summary: "Differentiate AMI from other life-threatening surgical abdomens and vascular catastrophes.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Acute Severe Pancreatitis: Elevated lipase >3x ULN, peripancreatic stranding/fluid collections on CT, prominent epigastric tenderness.",
            "Perforated Peptic Ulcer / Viscus: Sudden onset with immediate rigid, board-like abdomen, free air under the diaphragm on imaging.",
            "Ruptured Abdominal Aortic Aneurysm (AAA): Pulsatile abdominal mass, severe back/flank pain, profound shock, retroperitoneal hematoma on CTA.",
            "Acute Strangulated Bowel Obstruction: Bilious vomiting, obstipation, dilated bowel loops with transition point and closed-loop strangulation on CT."
          ]
        }
      ]
    },
    {
      id: "acute-mesenteric-ischemia.management",
      kind: "management",
      title: "Mechanism-Specific Resuscitation, Anticoagulation & Revascularization",
      summary: "Hemodynamic optimization, individualized therapeutic anticoagulation, mechanism-specific revascularization (embolism vs thrombosis vs MVT vs NOMI), and selective second-look laparotomy.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Management must be strictly tailored to the underlying mechanism (arterial embolism vs arterial thrombosis vs mesenteric venous thrombosis vs NOMI) and the presence of bowel gangrene or peritonitis."
        },
        {
          type: "key-value-table",
          rows: [
            { label: "1. Resuscitation & Hemodynamics", value: "Volume resuscitation to restore systemic intravascular volume is foundational. Optimize systemic perfusion while minimizing unnecessary or excessive splanchnic vasoconstriction. If vasopressors are required, Norepinephrine is generally preferred, with hemodynamic targets individualized to baseline physiology. Avoid pure alpha-1 vasoconstrictors or high-dose vasopressin where possible to prevent worsening visceral vasospasm." },
            { label: "2. Individualized Anticoagulation", value: "Therapeutic anticoagulation with unfractionated heparin is commonly initiated when appropriate, particularly in arterial occlusive disease and mesenteric venous thrombosis, unless contraindicated. The specific dosing regimen should follow the institutional therapeutic UFH protocol and be individualized to the clinical situation." },
            { label: "3. Broad-Spectrum Antibiotics", value: "Immediate broad-spectrum IV antibiotics covering enteric Gram-negative bacilli and anaerobes (e.g., Piperacillin-tazobactam or Meropenem) to treat and prevent bacterial translocation across ischemic mucosal barriers." },
            { label: "4. Arterial Embolism (EAM)", value: "Urgent revascularization via endovascular approaches (aspiration embolectomy, catheter-directed thrombolysis) or open surgical embolectomy depending on anatomy, patient stability, and institutional expertise. Assessment of bowel viability is mandatory, with laparotomy indicated if peritonitis or necrosis is present." },
            { label: "5. Arterial Thrombosis (TAM)", value: "Revascularization is required for bowel-threatening ischemia, utilizing endovascular strategies (stenting, angioplasty), open surgical bypass (aortoceliac/aortomesenteric bypass), or hybrid approaches based on anatomy and expertise. Treating underlying atherosclerotic stenosis is an essential part of the definitive strategy." },
            { label: "6. Mesenteric Venous Thrombosis (MVT)", value: "Systemic therapeutic anticoagulation is the foundational and primary therapy. Surgery is required if bowel infarction or peritonitis occurs. Endovascular catheter-directed thrombolysis/thrombectomy is selective for worsening ischemia despite anticoagulation; arterial revascularization is not indicated." },
            { label: "7. Non-Occlusive Ischemia (NOMI)", value: "Management centers on correcting the low-flow state, optimizing cardiac output, treating the precipitating shock/sepsis, and minimizing splanchnic vasoconstrictors. Consider catheter-directed intra-arterial vasodilator infusion (e.g., papaverine) when vasospasm is angiographically confirmed. Laparotomy with bowel resection is indicated for necrosis/peritonitis; NOMI is NOT an indication for thrombectomy or arterial revascularization." },
            { label: "8. Surgical Laparotomy & Second-Look", value: "Open laparotomy is mandatory across all subtypes if peritonitis, perforation, or clear bowel necrosis is present. Resect frankly non-viable bowel while preserving borderline segments. A planned second-look laparotomy at 24-48 hours is indicated when bowel viability remains indeterminate after initial intervention or damage-control surgery." }
          ]
        }
      ]
    },
    {
      id: "acute-mesenteric-ischemia.monitoring",
      kind: "monitoring",
      title: "ICU Monitoring & Intra-Abdominal Pressure",
      summary: "Surveillance for reperfusion injury, abdominal compartment syndrome, and ongoing necrosis.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Intra-Abdominal Pressure (IAP)", value: "Measure bladder pressure every 4-6 hours. Massive bowel edema and fluid resuscitation post-revascularization frequently cause intra-abdominal hypertension (IAP > 12 mmHg) and Abdominal Compartment Syndrome (IAP > 20 mmHg with organ failure), requiring urgent decompressive laparostomy." },
            { label: "Serial Lactate Clearance", value: "Monitor lactate every 2-4 hours; rising or non-clearing lactate post-revascularization indicates persistent unresected bowel gangrene or patch re-occlusion." },
            { label: "Reperfusion Syndrome Surveillance", value: "Look for severe hyperkalemia, profound metabolic acidosis, and myoglobinuria resulting from sudden washout of ischemic toxins upon vascular restoration." }
          ]
        }
      ]
    },
    {
      id: "acute-mesenteric-ischemia.complications",
      kind: "complications",
      title: "Complications & Escalation Triggers",
      summary: "Structured recognition of catastrophic acute, treatment-related, and delayed complications.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Early / Life-Threatening", value: "Transmural bowel gangrene, free perforation with fecal peritonitis, overwhelming septic shock, severe metabolic acidosis." },
            { label: "Treatment-Related", value: "Reperfusion-induced hyperkalemia and acute lung injury, Abdominal Compartment Syndrome from aggressive fluid resuscitation, contrast-induced nephropathy." },
            { label: "Late / Delayed", value: "Short bowel syndrome requiring lifelong parenteral nutrition (if >70-80% small bowel resected), enterocutaneous fistulae, ischemic strictures." },
            { label: "Escalation Triggers", value: "Development of new peritonitis/rebound tenderness; worsening lactic acidosis despite revascularization; intra-abdominal pressure > 20 mmHg with oliguria." }
          ]
        }
      ]
    }
  ]
};
