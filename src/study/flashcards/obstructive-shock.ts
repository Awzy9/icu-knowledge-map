import type { Flashcard } from "@/content-types";

export const obstructiveShockFlashcards: readonly Flashcard[] = [
  {
    "id": "obstructive.fc.four-primary-causes",
    "topicId": "obstructive-shock",
    "question": "What are the 4 major clinical causes of Obstructive Shock in the ICU?",
    "answer": "1. Cardiac Tamponade; 2. Tension Pneumothorax; 3. Massive Pulmonary Embolism; 4. Severe Dynamic Hyperinflation (Severe Auto-PEEP).",
    "explanation": "All four causes mechanically impede blood flow through the cardiac chambers or great vessels, producing severe shock with elevated central venous pressures.",
    "difficulty": "basic",
    "category": "Definition",
    "references": [
      "Irwin and Rippe's Intensive Care Medicine, 9th Edition."
    ]
  },
  {
    "id": "obstructive.fc.tamponade-becks-triad",
    "topicId": "obstructive-shock",
    "question": "What physical exam findings make up Beck's Triad of cardiac tamponade?",
    "answer": "1. Hypotension; 2. Jugular venous distension (elevated JVP); 3. Muffled/distant heart sounds.",
    "explanation": "Pulsus paradoxus (drop in SBP > 10 mmHg on inspiration) and electrical alternans on ECG are additional classic diagnostic findings.",
    "difficulty": "basic",
    "category": "Recognition",
    "references": [
      "Beck CS. Two cardiac compression triads. JAMA 1935."
    ]
  },
  {
    "id": "obstructive.fc.tamponade-echo-signs",
    "topicId": "obstructive-shock",
    "question": "What are the key bedside echocardiographic signs of hemodynamic cardiac tamponade?",
    "answer": "Pericardial effusion with Right Ventricular diastolic collapse, Right Atrial systolic collapse (>1/3 of cycle), plethoric non-collapsing IVC, and significant respiratory variation in mitral inflow velocity (>25%).",
    "explanation": "RV diastolic collapse is the most specific echocardiographic finding confirming that intrapericardial pressure exceeds intracardiac chamber pressure.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Klein AL et al. American Society of Echocardiography clinical recommendations for multimodality cardiovascular imaging of patients with pericardial disease. JASE 2013."
    ]
  },
  {
    "id": "obstructive.fc.beck-triad",
    "topicId": "obstructive-shock",
    "question": "What is Beck's triad in cardiac tamponade, and what is the bedside echocardiographic gold standard for confirmation?",
    "answer": "Beck's triad: Hypotension, Jugular Venous Distension (JVD), and Muffled Heart Sounds. Echo gold standard: Right ventricular diastolic collapse and right atrial systolic collapse + dilated non-collapsing IVC.",
    "explanation": "Immediate bedside pericardiocentesis with drainage catheter placement is life-saving.",
    "difficulty": "basic",
    "category": "Diagnosis",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in obstructive-shock"
    ]
  },
  {
    "id": "obstructive.fc.tension-pneumo-treatment",
    "topicId": "obstructive-shock",
    "question": "What is the immediate bedside emergency management of Tension Pneumothorax in a crashing ventilated patient?",
    "answer": "Immediate needle decompression (5th intercostal space mid-axillary line or 2nd intercostal space mid-clavicular line) followed immediately by definitive tube thoracostomy (chest tube).",
    "explanation": "Do NOT wait for a chest X-ray in a hemodynamically unstable, hypoxemic patient with absent unilateral breath sounds and tracheal deviation.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in obstructive-shock"
    ]
  },
  {
    "id": "obstructive.fc.massive-pe-thrombolysis",
    "topicId": "obstructive-shock",
    "question": "What defines Category E1 high-risk Pulmonary Embolism under the 2026 guideline, and what is the advanced reperfusion approach?",
    "answer": "Persistent hypotension (SBP < 90 mmHg for ≥ 15 min or requiring vasopressors) with cardiogenic shock. Management: prompt advanced reperfusion selecting among guideline-reasonable options (Systemic Thrombolysis [Alteplase 100 mg IV over 2 hours], Catheter-Directed Thrombolysis, Mechanical Thrombectomy, or Surgical Embolectomy) based on bleeding risk and institutional resources.",
    "explanation": "Under the 2026 AHA/ACC multisociety guideline, advanced reperfusion is Class 2a for systemic thrombolysis, catheter-directed lysis, and mechanical thrombectomy. Systemic thrombolysis provides rapid bedside lysis when bleeding risk is low, while catheter-based and surgical modalities offer targeted alternatives when lysis is contraindicated or high bleeding risk is present.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "2026 AHA/ACC Multisociety Acute PE Guideline; ESC Guidelines for Pulmonary Embolism."
    ]
  }
];
