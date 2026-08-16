import type { Question } from "@/content-types";

export const obstructiveShockQuestions: readonly Question[] = [
  {
    "id": "obstructive.q.tamponade-management",
    "topicId": "obstructive-shock",
    "stem": "A 48-year-old man post-cardiac surgery presents with sudden hypotension (BP 72/50 mmHg), tachycardia (HR 130 bpm), and elevated CVP (20 mmHg). Point-of-care ultrasound shows a large circumferential pericardial effusion with Right Ventricular early diastolic collapse. What is the definitive life-saving intervention?",
    "options": [
      {
        "id": "a",
        "text": "Emergency subxiphoid pericardiocentesis or surgical pericardial window",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "High-dose Norepinephrine and 3 liters of normal saline bolus",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Urgent endotracheal intubation and high PEEP mechanical ventilation",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Administration of IV Furosemide to reduce preload",
        "isCorrect": false
      }
    ],
    "explanation": "Cardiac tamponade with RV diastolic collapse and shock is a mechanical surgical emergency. Immediate drainage (pericardiocentesis or surgical window) is definitive. Note that positive pressure ventilation can cause immediate circulatory collapse by reducing already compromised venous return.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Klein AL et al. JASE 2013; Irwin & Rippe."
    ]
  }
,
  {
    id: "obs-shock.q.tamponade-triad",
    topicId: "obstructive-shock",
    stem: "What are the physical exam findings of Beck's Triad and the classic echocardiographic signs of Cardiac Tamponade causing obstructive shock?",
    options: [
      { id: "a", text: "Hypertension, bradycardia, and irregular respirations.", isCorrect: false },
      { id: "b", text: "Beck's Triad (Hypotension, Jugular Venous Distension, Muffled Heart Sounds); Echo: Right Atrial systolic collapse, Right Ventricular early diastolic collapse, and dilated non-collapsing IVC.", isCorrect: true },
      { id: "c", text: "Wide pulse pressure, bounding pulses, and systolic ejection murmur.", isCorrect: false },
      { id: "d", text: "Bilateral lung crackles, S3 gallop, and elevated pulmonary capillary wedge pressure.", isCorrect: false }
    ],
    explanation: "Cardiac tamponade impairs diastolic ventricular filling as intrapericardial pressure exceeds intracardiac pressures. Beck's triad comprises hypotension, elevated JVP, and distant heart sounds. Bedside echo reveals diastolic collapse of the compliant thin-walled right atrium and right ventricle, along with a plethoric IVC with absent respiratory variation.",
    difficulty: "basic",
    category: "Diagnosis",
    references: [
      "Oh's Intensive Care Manual; ESC Pericardial Disease Guidelines."
    ]
  },
  {
    id: "obs-shock.q.tension-pneumo-first-step",
    topicId: "obstructive-shock",
    stem: "A mechanically ventilated patient suddenly develops severe hypotension (BP 60/30), tachycardia (145 bpm), peak inspiratory pressure rise from 22 to 45 cmH2O, absent right breath sounds, and tracheal deviation to the left. What is the immediate NEXT step?",
    options: [
      { id: "a", text: "Order an urgent portable stat chest X-ray and 1 L saline bolus.", isCorrect: false },
      { id: "b", text: "Immediate needle decompression (14G angiocatheter in 4th/5th intercostal space anterior axillary line or 2nd space midclavicular line) followed promptly by formal tube thoracostomy without waiting for X-ray.", isCorrect: true },
      { id: "c", text: "Increase PEEP on the ventilator to overcome airway resistance.", isCorrect: false },
      { id: "d", text: "Perform bedside pericardiocentesis.", isCorrect: false }
    ],
    explanation: "Tension pneumothorax is an immediate clinical diagnosis requiring emergent decompression. Radiographic confirmation must NOT delay decompression in an unstable patient, as elevated intrapleural pressure compresses the vena cava, reducing venous return and causing immediate fatal PEA arrest.",
    difficulty: "basic",
    category: "Management",
    references: [
      "ATLS 10th Edition; Irwin & Rippe's Intensive Care Medicine."
    ]
  }
];
