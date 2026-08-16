import type { Topic } from "@/content-types";

export const pneumothorax: Topic = {
  id: "pneumothorax",
  slug: "pneumothorax",
  title: "Pneumothorax & Barotrauma in Critical Care",
  category: "respiratory",
  oneLiner: "Tension physiology, point-of-care ultrasound diagnosis, needle/finger/tube thoracostomy, and management of bronchopleural fistulas on mechanical ventilation.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Pleural Disease, Chest Tube Insertion, and Barotrauma in Mechanical Ventilation",
    },
    {
      title: "ATLS: Advanced Trauma Life Support",
      edition: "10th Edition, 2018",
    },
  ],
  currentStatus: "Current as of the 2023 British Thoracic Society (BTS) Pleural Disease Guideline and the ATLS 10th Edition updates on thoracic decompression.",
  otherReferences: [
    "Roberts DJ, et al. British Thoracic Society Guideline for Pleural Disease. Thorax. 2023;78(Suppl 3):s1-s42.",
    "Lichtenstein DA, Menu Y. A bedside ultrasound sign ruling out pneumothorax in the critically ill: lung sliding. Chest. 1995;108(5):1345-1348.",
    "Volpicelli G. Sonographic diagnosis of pneumothorax. Intensive Care Med. 2011;37(2):224-232.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "respiratory-failure-basics" },
    { type: "differential", targetId: "obstructive-shock", label: "Tension pneumothorax causes obstructive shock" },
    { type: "related-to", targetId: "ards", label: "Barotrauma and alveolar rupture in ARDS" },
    { type: "related-to", targetId: "mechanical-ventilation", label: "Positive pressure ventilation and bronchopleural fistula mechanics" },
    { type: "related-to", targetId: "copd-exacerbation", label: "Rupture of apical emphysematous bullae" },
    { type: "related-to", targetId: "asthma", label: "Dynamic hyperinflation barotrauma" },
  ],
  sections: [
    {
      id: "pneumothorax.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "pneumothorax-guideline-bts-2023",
          relevance: "British Thoracic Society (BTS) Guideline for Pleural Disease and thoracic decompression"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Air in the pleural space ranges from a small stable leak to life-threatening tension pneumothorax causing obstructive shock and cardiac arrest.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Pneumothorax is the accumulation of air within the pleural cavity, disrupting the negative intrapleural pressure that maintains lung expansion. In the ICU, pneumothorax is predominantly secondary (e.g., severe COPD, ARDS, necrotizing pneumonia) or iatrogenic (central line placement, positive-pressure mechanical ventilation, thoracentesis, lung biopsy, CPR).",
        },
        {
          type: "paragraph",
          text: "In mechanically ventilated patients, a simple pneumothorax can rapidly convert into a life-threatening tension pneumothorax with every delivered breath. Tension pneumothorax is an immediate clinical emergency requiring instant needle, finger, or tube decompression without waiting for confirmatory imaging.",
        },
      ],
    },
    {
      id: "pneumothorax.definition",
      kind: "definition",
      title: "Classification & Etiologies in the ICU",
      summary: "Taxonomy by etiology (primary, secondary, iatrogenic, traumatic) and physiology (simple, open, tension).",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "Primary Spontaneous Pneumothorax (PSP)",
              value: "Occurs in individuals without overt underlying lung disease (typically tall, thin young individuals with apical subpleural blebs). Rare in the ICU.",
            },
            {
              label: "Secondary Spontaneous Pneumothorax (SSP)",
              value: "Complication of pre-existing lung disease: COPD (rupture of bullae), ARDS (alveolar rupture from VILI), necrotizing pneumonia (S. aureus, Klebsiella), PJP pneumonia, cystic fibrosis, cavitary tuberculosis, interstitial lung disease. Poorly tolerated due to limited baseline reserve.",
            },
            {
              label: "Iatrogenic Pneumothorax",
              value: "The leading ICU cause. Central venous catheterization (subclavian vein risk 1.5–3.0% > internal jugular 0.5%), barotrauma/volutrauma from invasive mechanical ventilation (high Pplat, high driving pressure, severe auto-PEEP), thoracentesis, transbronchial/percutaneous lung biopsy, chest compressions during CPR.",
            },
            {
              label: "Traumatic Pneumothorax",
              value: "Blunt chest trauma (rib fractures lacerating visceral pleura) or penetrating chest trauma. Can present as an 'open pneumothorax' (sucking chest wound) if chest wall defect exceeds two-thirds the tracheal diameter.",
            },
            {
              label: "Tension Pneumothorax",
              value: "A one-way valve effect where air enters the pleural space during inspiration but cannot escape during expiration, progressively raising intrapleural pressure above central venous pressure.",
            },
          ],
        },
      ],
    },
    {
      id: "pneumothorax.physiology",
      kind: "physiology",
      title: "Physiology of Tension Pneumothorax & Hemodynamic Collapse",
      summary: "The progressive one-way valve mechanism, vena caval compression, obstructive shock, and positive-pressure ventilation acceleration.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "In a simple pneumothorax, air enters until intrapleural pressure equilibrates with atmospheric pressure, resulting in partial lung collapse and V/Q mismatch with mild-to-moderate hypoxemia.",
        },
        {
          type: "paragraph",
          text: "Tension Physiology represents an extreme, lethal mechanical obstruction:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Progressive Pressure Accumulation",
              value: "A flap of lacerated visceral pleura acts as a one-way valve. Air enters the pleural space during positive-pressure inspiration or active inspiration, but cannot egress. Intrapleural pressure escalates, exceeding atmospheric and central venous pressures.",
            },
            {
              label: "2. Mediastinal Shift & Vena Caval Kinking",
              value: "High hemithoracic pressure shifts the mediastinum, trachea, and heart toward the contralateral hemithorax, mechanically kinking and compressing the superior and inferior vena cava. Venous return (preload) to the right heart drops precipitously.",
            },
            {
              label: "3. Obstructive Shock & Cardiac Arrest",
              value: "Stroke volume and cardiac output collapse, causing profound hypotension, compensatory tachycardia, and rapid progression to pulseless electrical activity (PEA) arrest. Simultaneously, compression of the contralateral lung worsens hypoxemia and hypercapnia.",
            },
            {
              label: "4. Positive-Pressure Acceleration",
              value: "In mechanically ventilated patients, each mechanical breath forces 400–600 mL of positive-pressure gas directly into the pleural space, transforming a small puncture into catastrophic tension within seconds to minutes.",
            },
          ],
        },
      ],
    },
    {
      id: "pneumothorax.clinical-presentation",
      kind: "clinical-presentation",
      title: "Clinical Presentation & Bedside Recognition",
      summary: "Clinical signs in spontaneously breathing vs mechanically ventilated patients; early vs late signs of tension.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "Spontaneously Breathing Patient",
              value: "Sudden-onset unilateral pleuritic chest pain, dyspnea, tachypnea, tachycardia, unilateral chest expansion lag, hyperresonance to percussion, and decreased breath sounds on the affected side.",
            },
            {
              label: "Mechanically Ventilated Patient",
              value: "Sudden unexplained desaturation (SpO2 drops), acute synchronous spike in peak airway pressure (Ppeak) and plateau airway pressure (Pplat), sudden hypotension, tachycardia, high airway pressure alarms, and asymmetrical chest rise.",
            },
            {
              label: "Tension Pneumothorax Signs",
              value: "Severe hypotension / shock, profound cyanosis, marked diaphoresis, absent breath sounds and tympanitic percussion on the affected side, distended neck veins (JVD, absent if severe hypovolemia coexists), and tracheal deviation away from the affected hemithorax (a late, unreliable sign).",
            },
          ],
        },
        {
          type: "callout",
          tone: "caution",
          text: "Never wait for tracheal deviation before decompressing a suspected tension pneumothorax in an unstable ICU patient. Tracheal deviation is a late, post-mortem, or near-arrest finding. The triad of sudden hypotension, high ventilator pressures, and unilateral diminished breath sounds mandates immediate decompression.",
        },
      ],
    },
    {
      id: "pneumothorax.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Imaging & Point-of-Care Ultrasound (POCUS)",
      summary: "POCUS lung sliding, lung point sign, stratosphere/barcode M-mode sign, chest radiography (deep sulcus sign), and CT evaluation.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Point-of-Care Lung Ultrasound (POCUS) is the most sensitive and rapid bedside modality for diagnosing pneumothorax in the ICU (sensitivity 90–95%, vs 50–60% for supine portable CXR):",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Lung Sliding (B-mode)",
              value: "Normal lung exhibits glistening 'ants marching' sliding between visceral and parietal pleura. In pneumothorax, pleural sliding is completely absent over the anterior non-dependent chest (Zone 1/2 in supine position).",
            },
            {
              label: "2. M-Mode: Stratosphere / Barcode Sign",
              value: "In health, M-mode shows a granular 'seashore sign' below the pleural line. In pneumothorax, the lack of sliding produces rigid, horizontal parallel lines across the entire display ('stratosphere' or 'barcode' sign).",
            },
            {
              label: "3. B-Lines & Lung Pulse (Rules Out Pneumothorax)",
              value: "B-lines (comet-tail artifacts arising from the visceral pleura) and lung pulse (cardiac oscillations transmitted to the pleura) can only exist if visceral and parietal pleura are in contact. The presence of even one B-line or lung pulse 100% rules out pneumothorax at that probe location.",
            },
            {
              label: "4. The Lung Point Sign (100% Specific)",
              value: "The pathognomonic physical boundary where sliding lung and absent sliding/barcode sign intermittently alternate during respiration. Pinpoints the exact anatomical margin of the pneumothorax.",
            },
          ],
        },
        {
          type: "paragraph",
          text: "Chest Radiography: On an upright film, a visible visceral pleural line with absent peripheral lung markings is diagnostic. On a supine ICU film, look for the 'Deep Sulcus Sign' — an abnormally deep, hyperlucent, lucent costophrenic angle on the affected side.",
        },
      ],
    },
    {
      id: "pneumothorax.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Sudden Unilateral Absent Breath Sounds & Shock",
      summary: "Differentiate tension pneumothorax from massive hemothorax, severe atelectasis, and large bullous emphysema.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Tension Pneumothorax vs Massive Hemothorax: Both cause respiratory distress and shock; tension pneumothorax has hyperresonance to percussion and tracheal deviation away from the lesion; hemothorax has dullness to percussion and flat neck veins from hypovolemia.",
          "Giant Emphysematous Bulla: Large lung cyst mimicking pneumothorax on radiograph; chest tube placement into a bulla causes bronchopleural fistula; CT chest differentiates.",
          "Mainstem Bronchial Intubation: Right mainstem intubation causes left lung collapse and absent left breath sounds; pulling back ETT 2-3 cm restores bilateral ventilation."
]
        }
      ]
    },
    {
      id: "pneumothorax.management",
      kind: "management",
      title: "Emergency Decompression & Chest Tube Management",
      summary: "Needle thoracostomy (4th/5th ICS AAL vs 2nd ICS MCL), finger thoracostomy, pigtail vs large-bore chest tubes, and drainage mechanics.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Management depends on hemodynamic stability, etiology, and whether the patient is receiving positive-pressure mechanical ventilation:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Emergent Needle Decompression",
              value: "Indicated for tension pneumothorax with hemodynamic collapse. Anatomical site (ATLS 10th Edition): 4th or 5th intercostal space just anterior to the mid-axillary line (AAL) in adults (superior success rate compared to 2nd ICS MCL due to thinner chest wall musculature). Use a 14G or 10G catheter at least 5–8 cm long. Immediate rush of air confirms decompression.",
            },
            {
              label: "2. Emergent Finger Thoracostomy",
              value: "In mechanically ventilated patients in cardiac arrest or peri-arrest: 3–4 cm incision at 4th/5th ICS AAL, blunt dissection with Kelly clamp over rib into pleural space, and finger insertion directly relieves tension and cannot kink or occlude.",
            },
            {
              label: "3. Tube Thoracostomy (Chest Drain Selection)",
              value: "Small-bore pigtail catheter (10–14 Fr via Seldinger technique): First-line for spontaneous, iatrogenic, or uncomplicated pneumothoraces. Large-bore chest tube (24–32 Fr): Indicated for trauma, hemothorax, or large continuous air leaks in ventilated patients.",
            },
            {
              label: "4. Drainage System Mechanics",
              value: "Connect drain to a 3-chamber water-seal drainage unit. Water seal (2 cmH2O) acts as a one-way valve. Apply suction (-10 to -20 cmH2O) if the lung fails to re-expand on water seal alone or if an active large air leak is present.",
            },
          ],
        },
        {
          type: "callout",
          tone: "guideline",
          text: "The 2023 BTS Pleural Disease Guideline supports conservative outpatient/observation management for select small, minimally symptomatic primary spontaneous pneumothoraces in stable non-ventilated patients. However, ALL mechanically ventilated patients with a pneumothorax require chest tube drainage because positive pressure continuously enlarges the pleural collection.",
        },
      ],
    },
    {
      id: "pneumothorax.bpf",
      kind: "management",
      title: "Bronchopleural Fistula (BPF) & Persistent Air Leak on Ventilator",
      summary: "Pathophysiology, ventilator adjustments, suction titration, and advanced interventional management for persistent alveolar-pleural leaks.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "A Bronchopleural Fistula (BPF) or alveolopleural fistula occurs when a direct communication exists between the bronchus/parenchyma and pleural space, resulting in a persistent air leak (> 24–48 hours) on positive pressure ventilation.",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Mechanical Consequences",
              value: "Loss of delivered tidal volume (exhaled Vt significantly lower than inspiratory Vt), loss of effective PEEP, persistent ventilator auto-triggering from flow leak through the chest tube, and inability to maintain alveolar recruitment.",
            },
            {
              label: "Ventilator Strategy for BPF",
              value: "Minimize transpulmonary and airway driving pressures to allow the parenchymal defect to seal: (1) Lower tidal volume to 4–6 mL/kg PBW; (2) Reduce PEEP to the lowest level compatible with oxygenation (high PEEP keeps the fistula open); (3) Lower peak and plateau pressures (Pplat < 25–28 cmH2O); (4) Shorten inspiratory time, lower respiratory rate, and accept permissive hypercapnia.",
            },
            {
              label: "Chest Drain Suction in BPF",
              value: "Titrate suction to the minimum level necessary to keep the lung against the chest wall; excessive suction (-20 to -30 cmH2O) increases flow across the fistula, preventing closure.",
            },
            {
              label: "Advanced Interventions",
              value: "Independent Lung Ventilation (ILV) with double-lumen ETT for unilateral massive leaks; bronchoscopic placement of endobronchial valves (EBVs), spigots, or fibrin glue; surgical pleurodesis or decortication.",
            },
          ],
        },
      ],
    },
    {
      id: "pneumothorax.complications",
      kind: "complications",
      title: "Complications of Pneumothorax & Pleural Interventions",
      summary: "Re-expansion pulmonary edema, persistent air leaks, and procedural trauma.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Disease-Related: Obstructive shock, severe hypoxic-ischemic encephalopathy, pulseless electrical activity (PEA) cardiac arrest, bilateral tension pneumothorax.",
            "Re-expansion Pulmonary Edema (REPE): Acute unilateral non-cardiogenic pulmonary edema developing within 1–24 hours after rapid evacuation of a large, long-standing pneumothorax (> 3–5 days). Pathophysiology: mechanical capillary stretch and ischemia-reperfusion injury. Prevention: avoid rapid evacuation > 1.0–1.5 L of pleural air/fluid per hour.",
            "Treatment-Related / Chest Tube Hazards: Intercostal vessel laceration and hemothorax, lung parenchymal laceration, liver/spleen puncture from low trocar placement, subcutaneous emphysema, empyema / pleural space infection, drain occlusion or kinking.",
            "ICU-Related: Prolonged mechanical ventilation, failed weaning from BPF, critical illness deconditioning.",
          ],
        },
      ],
    },
    {
      id: "pneumothorax.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical mistakes to avoid in pneumothorax diagnosis and management.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Clamping a chest tube in a mechanically ventilated patient with an active air leak: Clamping traps all leaking positive-pressure air inside the hemithorax, precipitating tension pneumothorax and PEA arrest within minutes. Never clamp an active chest tube during positive-pressure ventilation.",
            "Relying on a portable supine chest radiograph to rule out pneumothorax: In supine patients, air collects anteriorly and basally; sensitivity of supine CXR is only 50%. Use bedside lung ultrasound (POCUS) instead.",
            "Using a standard short needle (3.2 cm) for needle decompression in the 2nd ICS MCL: Chest wall thickness in adults frequently exceeds 4.5 cm, leading to failure rates of 30–50%. Use a 5–8 cm catheter in the 4th/5th ICS anterior axillary line.",
            "Attempting to 'wean' an air leak by applying excessive negative suction (-30 cmH2O): High suction draws more gas through the parenchymal tear, preventing healing. Transition to water seal as soon as the lung is fully expanded.",
            "Confusing severe subcutaneous emphysema with tension pneumothorax: Subcutaneous air causes skin crepitus and high peak pressures; always confirm pleural air via POCUS or chest X-ray before placing bilateral large-bore tubes.",
          ],
        },
      ],
    },
    {
      id: "pneumothorax.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Occult pneumothorax on mechanical ventilation and conservative management.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Management of Occult Pneumothorax on Mechanical Ventilation: An occult pneumothorax is identified on CT but invisible on initial supine CXR. While traditionally all ventilated pneumothoraces received chest tubes, observational studies suggest that small occult pneumothoraces (< 20% hemithorax on CT) in stable mechanically ventilated patients can be closely observed with serial ultrasound/radiography, placing a drain only if progression or tension signs develop.",
        },
        {
          type: "paragraph",
          text: "Water Seal versus Suction for Persistent Air Leaks: Multiple RCTs in thoracic surgery and ICU populations demonstrate that maintaining chest tubes on simple water seal results in faster air leak cessation and shorter chest tube duration compared to continuous suction, as water seal minimizes the trans-pulmonary pressure gradient across the fistula.",
        },
      ],
    },
  ],
};
