import type { Question } from "@/content-types";

export const neuromuscularCriticalIllnessQuestions: readonly Question[] = [
  {
    id: "nm.q.gbs-intubation-trigger",
    topicId: "neuromuscular-critical-illness",
    sectionId: "bedside-respiratory-assessment",
    stem: "A 32-year-old man with Guillain-Barré syndrome has ascending weakness. Over the last 6 hours, his Forced Vital Capacity (FVC) has decreased from 35 mL/kg to 16 mL/kg, and his NIF is -22 cmH2O. His ABG shows pH 7.39, PaCO2 38 mmHg, PaO2 88 mmHg on room air. What is the most appropriate next step?",
    options: [
      { id: "a", text: "Proceed with elective endotracheal intubation using rocuronium", isCorrect: true },
      { id: "b", text: "Continue close observation since the ABG is normal", isCorrect: false },
      { id: "c", text: "Administer high-dose IV methylprednisolone monotherapy", isCorrect: false },
      { id: "d", text: "Initiate noninvasive CPAP and recheck ABG in 4 hours", isCorrect: false }
    ],
    explanation: "FVC < 20 mL/kg and NIF worse than -30 cmH2O indicate impending ventilatory pump exhaustion. ABG values remain normal until the patient suffers sudden diaphragmatic arrest. Intubation should be performed electively with rocuronium (succinylcholine is contraindicated).",
    difficulty: "basic",
    category: "Management",
    references: ["van Doorn PA et al. 2021 EAN/PNS GBS Guideline."]
  },
  {
    id: "nm.q.myasthenia-precipitating-meds",
    topicId: "neuromuscular-critical-illness",
    sectionId: "myasthenic-crisis",
    stem: "A 45-year-old woman with generalized myasthenia gravis is hospitalized for community-acquired pneumonia. Within 12 hours of starting empiric antibiotic therapy, she develops severe nasal speech, dysphagia, and shallow breathing. Which antibiotic is most likely responsible for precipitating this myasthenic crisis?",
    options: [
      { id: "a", text: "Ciprofloxacin (fluoroquinolone) or Gentamicin (aminoglycoside)", isCorrect: true },
      { id: "b", text: "Ceftriaxone (third-generation cephalosporin)", isCorrect: false },
      { id: "c", text: "Amoxicillin-clavulanate", isCorrect: false },
      { id: "d", text: "Vancomycin", isCorrect: false }
    ],
    explanation: "Fluoroquinolones (ciprofloxacin, levofloxacin), aminoglycosides (gentamicin, tobramycin), and macrolides impair neuromuscular junction transmission and carry black box warnings for precipitating acute life-threatening myasthenic crises.",
    difficulty: "intermediate",
    category: "Safety",
    references: ["Narayanaswami P et al. 2020 MG Consensus Update."]
  },
  {
    id: "nm.q.schweickert-mobility-delirium",
    topicId: "neuromuscular-critical-illness",
    sectionId: "icu-acquired-weakness",
    stem: "In the landmark Schweickert randomized trial (Lancet 2009), what was the primary clinical benefit of pairing early physical and occupational therapy with daily sedation interruption in mechanically ventilated patients?",
    options: [
      { id: "a", text: "Significantly higher return to independent functional status at hospital discharge (59% vs 35%, P = 0.02) and shorter delirium duration", isCorrect: true },
      { id: "b", text: "Complete elimination of critical illness polyneuropathy on EMG", isCorrect: false },
      { id: "c", text: "Reduced in-hospital mortality from 50% to 10%", isCorrect: false },
      { id: "d", text: "Decreased incidence of ventilator-associated pneumonia", isCorrect: false }
    ],
    explanation: "Schweickert et al. demonstrated that early mobility started within 72 hours of ventilation doubled independent functional recovery at discharge (OR 2.7) and halved median delirium duration (2.0 vs 4.0 days).",
    difficulty: "intermediate",
    category: "Evidence",
    references: ["Schweickert WD et al. Lancet 2009."]
  },
  {
    id: "nm.q.succinylcholine-denervation-mechanism",
    topicId: "neuromuscular-critical-illness",
    sectionId: "guillain-barre-syndrome",
    stem: "A patient with subacute Guillain-Barré syndrome experiences sudden cardiac arrest with peaked T waves on the ECG immediately following rapid sequence intubation. What pharmacological error occurred?",
    options: [
      { id: "a", text: "Succinylcholine was administered, causing massive potassium release from upregulated extrajunctional acetylcholine receptors", isCorrect: true },
      { id: "b", text: "Rocuronium induced malignant hyperthermia", isCorrect: false },
      { id: "c", text: "Etomidate caused acute adrenal crisis", isCorrect: false },
      { id: "d", text: "Sugammadex induced severe anaphylaxis", isCorrect: false }
    ],
    explanation: "Denervated skeletal muscle upregulates embryonic gamma and alpha-7 extrajunctional ACh receptors across the entire sarcolemma. Succinylcholine depolarization causes uncontrolled, massive potassium efflux, leading to lethal hyperkalemic cardiac arrest.",
    difficulty: "basic",
    category: "Safety",
    references: ["van Doorn PA et al. 2021 EAN/PNS GBS Guideline."]
  },
  {
    id: "nm.q.botulism-pupil-distinction",
    topicId: "neuromuscular-critical-illness",
    sectionId: "other-neuromuscular-emergencies",
    stem: "A 28-year-old man presents with progressive symmetric descending weakness, dysphagia, ptosis, fixed dilated unreactive pupils, and dry mouth following consumption of home-canned vegetables. What is the immediate treatment?",
    options: [
      { id: "a", text: "Immediate administration of Heptavalent Botulinum Antitoxin (BAT) and supportive ventilation", isCorrect: true },
      { id: "b", text: "High-dose Intravenous Immunoglobulin (IVIG 2 g/kg)", isCorrect: false },
      { id: "c", text: "Plasma exchange for 5 consecutive days", isCorrect: false },
      { id: "d", text: "Intravenous edrophonium (Tensilon test)", isCorrect: false }
    ],
    explanation: "Foodborne botulism presents with descending paralysis, prominent cranial neuropathies (fixed dilated pupils), dry mouth, and clear sensorium. Heptavalent Botulinum Antitoxin (BAT) neutralizes circulating toxin and must be given immediately without waiting for culture results.",
    difficulty: "intermediate",
    category: "Management",
    references: ["Oh's Intensive Care Manual 8th Ed."]
  },
  {
    id: "nm.q.extubation-failure-peak-cough-flow",
    topicId: "neuromuscular-critical-illness",
    sectionId: "ventilator-liberation",
    stem: "A patient recovering from severe GBS has been mechanically ventilated for 14 days. She successfully passes a 30-minute Spontaneous Breathing Trial (SBT) with RSBI 48 and PaO2 95 on FiO2 0.30. However, her peak expiratory cough flow (PECF) is measured at 95 L/min with copious oral secretions. What is the correct liberation decision?",
    options: [
      { id: "a", text: "Do not extubate; PECF < 160 L/min strongly predicts post-extubation aspiration and extubation failure", isCorrect: true },
      { id: "b", text: "Proceed with immediate extubation because the SBT and RSBI are normal", isCorrect: false },
      { id: "c", text: "Administer high-dose aminophylline to stimulate diaphragmatic drive", isCorrect: false },
      { id: "d", text: "Extubate and initiate continuous morphine infusion", isCorrect: false }
    ],
    explanation: "In neuromuscular patients, passing an SBT only proves inspiratory muscle endurance. A peak cough flow < 160 L/min indicates severe expiratory muscle weakness unable to clear secretions, resulting in rapid post-extubation aspiration and asphyxiation.",
    difficulty: "intermediate",
    category: "Liberation",
    references: ["Irwin & Rippe's Intensive Care Medicine 9th Ed."]
  }
];
