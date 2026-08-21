import type { Topic } from "@/content-types";

export const obstructiveShock: Topic = {
  id: "obstructive-shock",
  slug: "obstructive-shock",
  title: "Obstructive Shock",
  category: "cardiovascular",
  oneLiner: "Extracardiac mechanical barriers to filling or ejection: Massive PE, Cardiac Tamponade, Tension Pneumothorax, and Auto-PEEP.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Obstructive Shock, Acute Pulmonary Embolism, and Pericardial Disease",
    },
    {
      title: "Goldhaber SZ, Bounameaux H. Pulmonary embolism and deep vein thrombosis. Lancet. 2012;379(9828):1835-1846.",
    },
  ],
  currentStatus: "Current as of the 2026 AHA/ACC/CHEST/SCAI Acute Pulmonary Embolism Guidelines and standard emergency pericardial/thoracostomy resuscitation consensus.",
  otherReferences: [
    "Jaff MR, et al. Management of massive and submassive pulmonary embolism, iliofemoral deep vein thrombosis, and chronic thromboembolic pulmonary hypertension. Circulation. 2011;123(16):1788-1830.",
    "Konstantinides SV, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020;41(4):543-603.",
    "Spodick DH. Acute cardiac tamponade. N Engl J Med. 2003;349(7):684-690.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "shock", label: "Core hemodynamic and oxygen delivery framework" },
    { type: "complication", targetId: "pneumothorax", label: "Tension pneumothorax etiology" },
    { type: "complication", targetId: "rv-failure", label: "Massive PE acute RV failure and cor pulmonale" },
    { type: "related-to", targetId: "anticoagulation", label: "Anticoagulation and thrombolytic protocols" },
    { type: "differential", targetId: "cardiogenic-shock", label: "Differentiating intrinsic LV failure from extracardiac obstruction" },
  ],
  sections: [
    {
      id: "obstructive-shock.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "obstructive-shock-guideline-pe-2026",
          relevance: "ESC guidelines on diagnosis and management of acute pulmonary embolism"
        },
        {
          kind: "trial",
          id: "pe-peitho-trial",
          relevance: "PEITHO trial evaluating reperfusion in obstructive hemodynamics"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Obstructive shock is acute circulatory failure caused by a physical mechanical barrier that impedes ventricular filling or systolic ejection, characterized by elevated filling pressures and clear lung fields.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Obstructive shock results from an extracardiac mechanical obstruction to the cardiovascular circuit. Unlike cardiogenic shock (primary myocardial pump failure) or hypovolemic shock (intravascular volume deficit), the heart muscle and circulating volume are initially intact, but blood cannot fill the cardiac chambers or be ejected into the systemic circulation.",
        },
        {
          type: "paragraph",
          text: "The three classic etiologies are Massive (High-Risk) Pulmonary Embolism (RV outflow obstruction), Cardiac Tamponade (diastolic biventricular compression), and Tension Pneumothorax (vena caval kinking and collapse). A fourth critical ICU etiology is severe Dynamic Hyperinflation / Auto-PEEP. Each requires immediate, etiology-specific physical decompression rather than non-specific fluid or vasopressor therapy.",
        },
      ],
    },
    {
      id: "obstructive-shock.etiologies",
      kind: "definition",
      title: "The 4 Core Mechanical Etiologies & Pathophysiology",
      summary: "Detailed mechanical derangements for Massive PE, Cardiac Tamponade, Tension Pneumothorax, and Severe Auto-PEEP.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Massive (High-Risk) Pulmonary Embolism",
              value: "Large occlusive thromboembolism obstructing > 50% of the pulmonary arterial bed. Causes an acute, massive increase in right ventricular afterload. The thin-walled RV acutely dilates and fails, shifting the interventricular septum into the LV (D-shaped LV). This severely restricts LV diastolic filling, collapsing stroke volume and cardiac output.",
            },
            {
              label: "2. Cardiac Tamponade",
              value: "Accumulation of pericardial fluid under tension that exceeds the compliance limit of the pericardium. Intrapericardial pressure rises, equalizing with and exceeding intracardiac diastolic filling pressures (first the thin-walled RA, then the RV). Diastolic filling is severely restricted across all chambers, producing profound pulsus paradoxus (> 10–12 mmHg) and low cardiac output.",
            },
            {
              label: "3. Tension Pneumothorax",
              value: "One-way valve mechanism where air enters the pleural space during inspiration but cannot escape during expiration. High intrapleural pressure shifts the mediastinum, compresses and kinks the superior and inferior vena cava, and abolishes venous return to the heart.",
            },
            {
              label: "4. Dynamic Hyperinflation / Severe Auto-PEEP",
              value: "In ventilated obstructive patients (asthma/COPD), extreme gas trapping raises intrathoracic alveolar pressure, transmitting positive pressure to the mediastinum, compressing the vena cava, and arresting venous return.",
            },
          ],
        },
      ],
    },
    {
      id: "obstructive-shock.clinical-presentation",
      kind: "clinical-presentation",
      title: "Clinical Presentation: The Triad of Shock, JVD, and Clear Lungs",
      summary: "Physical exam features distinguishing obstructive shock from cardiogenic pulmonary edema at the bedside.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "Universal Shared Hemodynamic Pattern",
              value: "Profound hypotension (MAP < 65), severe tachycardia, cold mottled peripheries, and marked Jugular Venous Distension (JVD / elevated CVP) WITH CLEAR LUNG FIELDS on auscultation. Clear lungs distinguish obstructive shock from classic cardiogenic shock (which exhibits diffuse pulmonary crackles and alveolar edema).",
            },
            {
              label: "Cardiac Tamponade Signs",
              value: "Beck's Triad (Hypotension, Distended Neck Veins, Muffled Heart Sounds; present in < 30%); Pulsus Paradoxus (exaggerated drop in systolic BP > 10–12 mmHg during normal inspiration); electrical alternans and low QRS voltage on ECG.",
            },
            {
              label: "Massive PE Signs",
              value: "Acute severe dyspnea, cyanosis, syncope, pleuritic chest pain, loud P2 heart sound, tricuspid regurgitation murmur, right ventricular heave, right bundle branch block (RBBB) and S1Q3T3 pattern on ECG.",
            },
            {
              label: "Tension Pneumothorax Signs",
              value: "Sudden respiratory distress, unilateral hyperresonance, unilaterally absent breath sounds, tracheal deviation away from the affected hemithorax (late sign).",
            },
          ],
        },
      ],
    },
    {
      id: "obstructive-shock.diagnosis",
      kind: "diagnosis",
      title: "Point-of-Care Echocardiography & Ultrasound Diagnostic Protocol",
      summary: "POCUS echographic criteria for massive PE (McConnell's sign, D-sign), tamponade (diastolic RV collapse, IVC plethora), and pneumothorax.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Focused Cardiac Ultrasound (FoCUS) and Point-of-Care Thoracic Ultrasound immediately differentiate the four causes within minutes at the bedside:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "FoCUS Criteria for Massive PE",
              value: "1. RV/LV End-Diastolic Diameter Ratio > 1.0 on apical 4-chamber view.\n2. McConnell's Sign: Akinesis/hypokinesis of the RV mid-free wall with preserved/hyperdynamic apex (sensitivity 77%, specificity 94%).\n3. D-Shaped Left Ventricle: Interventricular septal flattening compressing the LV in parasternal short-axis view.\n4. 60/60 Sign: Pulmonary acceleration time < 60 ms with midsystolic notch + tricuspid gradient < 60 mmHg.\n5. Mobile Clot-in-Transit in right atrium or ventricle.",
            },
            {
              label: "FoCUS Criteria for Cardiac Tamponade",
              value: "1. Significant Pericardial Effusion (anechoic space surrounding myocardium).\n2. Early Diastolic RV Free Wall Collapse (specific for hemodynamic compromise).\n3. Late Systolic RA Inversion / Collapse (> 1/3 of cardiac cycle; sensitive).\n4. Plethoric, Non-Collapsing IVC (diameter > 2.1 cm with < 50% inspiratory collapsibility).\n5. Exaggerated Respiratory Variation in Transvalvular Doppler Flow (> 25% drop in mitral E-velocity, > 40% increase in tricuspid E-velocity on inspiration).",
            },
            {
              label: "POCUS Criteria for Tension Pneumothorax",
              value: "Absent pleural sliding, complete absence of B-lines and lung pulse, and presence of the barcode/stratosphere sign on M-mode over the anterior chest.",
            },
          ],
        },
      ],
    },
    {
      id: "obstructive-shock.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Extracardiac Obstructive Shock",
      summary: "Differentiate tension pneumothorax, cardiac tamponade, massive PE, and dynamic hyperinflation.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Cardiac Tamponade vs Tension Pneumothorax: Both cause elevated JVP and hypotension; tension pneumothorax has unilateral absent breath sounds, tracheal deviation, and hyperresonance.",
          "Massive Pulmonary Embolism: Severe RV dilatation, McConnell's sign, elevated pulmonary pressures without pericardial effusion.",
          "Severe Auto-PEEP / Dynamic Hyperinflation: Severe obstructive lung disease on mechanical ventilation where high intrinsic PEEP impairs venous return; immediately disconnect ventilator to assess response."
]
        }
      ]
    },
    {
      id: "obstructive-shock.management",
      kind: "management",
      title: "Emergency Interventions & Reperfusion Strategies",
      summary: "Thrombolysis and catheter embolectomy for PE, emergent pericardiocentesis for tamponade, and decompression for pneumothorax.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Massive Pulmonary Embolism (Category E)",
              value: "Systemic Thrombolysis: Alteplase (tPA) 100 mg IV infusion over 2 hours with therapeutic Unfractionated Heparin (UFH) continuous infusion.\nCatheter-Directed Therapy (CDT): Catheter-directed thrombolysis or mechanical aspiration thrombectomy recommended as class 2a alternative per 2026 multi-society guidelines, especially if high bleeding risk.\nSurgical Embolectomy / VA-ECMO: For refractory shock or contraindications to thrombolysis.",
            },
            {
              label: "2. Cardiac Tamponade",
              value: "Emergent Pericardiocentesis: Subxiphoid or apical puncture under direct ultrasound guidance; insert 6–8 Fr pigtail catheter for continuous drainage. Immediate evacuation of even 50–100 mL of fluid dramatically reduces intrapericardial pressure and restores cardiac output.\nTemporizing Bridge: Cautious IV crystalloid bolus (500–1000 mL) to raise central venous pressure above intrapericardial pressure while prepping for procedural drainage.",
            },
            {
              label: "3. Tension Pneumothorax",
              value: "Immediate Needle Decompression (14G/10G catheter at 4th/5th ICS anterior axillary line) or Finger Thoracostomy, followed by definitive Tube Thoracostomy.",
            },
            {
              label: "4. Dynamic Hyperinflation / Severe Auto-PEEP",
              value: "Immediate Disconnection from the ventilator circuit for 30–60 seconds to allow full passive expiration of trapped gas.",
            },
          ],
        },
      ],
    },
    {
      id: "obstructive-shock.complications",
      kind: "complications",
      title: "Complications of Obstructive Shock & Interventions",
      summary: "PEA cardiac arrest, reperfusion arrhythmias, catastrophic bleeding from thrombolysis, and procedural myocardial puncture.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Disease-Related: Pulseless electrical activity (PEA) cardiac arrest, severe hypoxic-ischemic brain injury, acute cor pulmonale with refractory RV infarction, ischemic acute tubular necrosis.",
            "Thrombolysis Complications: Major intracranial hemorrhage (ICH risk ~1.5–3.0%), retroperitoneal bleeding, catastrophic gastrointestinal hemorrhage.",
            "Pericardiocentesis Complications: Right ventricular laceration or puncture, coronary artery laceration, hemopericardium, pneumothorax, vasovagal bradycardia.",
            "Post-Decompression Reperfusion Syndrome: Acute RV dysfunction or paradoxical LV failure following sudden relief of chronic pericardial tamponade or pulmonary obstruction.",
          ],
        },
      ],
    },
    {
      id: "obstructive-shock.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Life-saving clinical rules in obstructive shock.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Giving massive fluid boluses to a patient with massive PE: Volume loading in acute RV failure dilates the RV, increases wall stress, shifts the septum leftward, and worsens LV underfilling and shock.",
            "Intubating a patient with severe cardiac tamponade without preparing for immediate pericardiocentesis: Positive pressure ventilation abruptly decreases venous return, precipitating immediate PEA arrest upon induction; perform pericardiocentesis under local anesthesia prior to intubation if possible.",
            "Delaying thrombolysis for CT confirmation in a crashing patient with suspected massive PE: In an unstable patient with shock, bedside echocardiographic demonstration of acute RV strain (McConnell's sign, D-shaped LV) is sufficient to initiate emergent thrombolysis.",
            "Failing to disconnect the ventilator in sudden PEA arrest of an asthmatic patient: Always disconnect the circuit for 30–60 seconds before initiating other ALS interventions to rule out dynamic hyperinflation arrest.",
            "Misinterpreting JVD and clear lungs as pure hypovolemic shock: Hypovolemic shock features flat neck veins; JVD with clear lungs strongly indicates obstructive shock or acute RV infarction.",
          ],
        },
      ],
    },
    {
      id: "obstructive-shock.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Catheter-directed thrombectomy versus systemic thrombolysis in massive PE.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Systemic Thrombolysis versus Catheter-Directed Thrombectomy in Massive PE: The 2026 multi-society guidelines elevated catheter-directed mechanical thrombectomy and catheter-directed low-dose thrombolysis to class 2a recommendations alongside systemic thrombolysis for high-risk Category E shock. In centers with rapid-response PERT teams and catheterization laboratory availability, mechanical aspiration thrombectomy rapidly clears central thrombus burden while minimizing major hemorrhagic stroke risks.",
        },
      ],
    },
  ],
};
