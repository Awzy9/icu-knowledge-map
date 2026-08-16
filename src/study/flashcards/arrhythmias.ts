import type { Flashcard } from "@/content-types";

export const arrhythmiasFlashcards: readonly Flashcard[] = [
  {
    "id": "arrhythmia.fc.unstable-tachycardia-action",
    "topicId": "arrhythmias",
    "question": "What is the immediate ACLS treatment for any tachyarrhythmia causing hemodynamic instability?",
    "answer": "Immediate Synchronized Direct Current Cardioversion.",
    "explanation": "Instability signs: hypotension, acute altered mental status, signs of shock, ischemic chest pain, or acute pulmonary edema.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "AHA ACLS Guidelines 2020."
    ]
  },
  {
    "id": "arrhythmia.fc.afib-rvr-rate-control",
    "topicId": "arrhythmias",
    "question": "What are the first-line pharmacologic agents for rate control in stable Atrial Fibrillation with Rapid Ventricular Response (RVR) in the ICU?",
    "answer": "IV Beta-blockers (Esmolol infusion or Metoprolol) or IV Non-dihydropyridine Calcium Channel Blockers (Diltiazem); IV Amiodarone is preferred in heart failure/reduced EF.",
    "explanation": "Target resting heart rate < 110 bpm; in patients with severe LV systolic dysfunction (EF < 40%) or decompensated heart failure, avoid calcium channel blockers.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "AHA/ACC/HRS Guideline for the Management of Patients With Atrial Fibrillation 2023."
    ]
  },
  {
    "id": "arrhythmia.fc.torsades-magnesium",
    "topicId": "arrhythmias",
    "question": "What is the acute first-line treatment for Torsades de Pointes (polymorphic VT with prolonged QT)?",
    "answer": "Intravenous Magnesium Sulfate (2 g IV push over 1–2 min, repeatable), correction of hypokalemia, and overdrive pacing/isoproterenol if bradycardia-dependent.",
    "explanation": "Magnesium stabilizes the cardiac membrane by blocking early afterdepolarizations (EADs) independent of serum magnesium concentration.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "AHA ACLS Guidelines 2020; Irwin and Rippe."
    ]
  },
  {
    "id": "arrhythmias.fc.af-rvr-shock",
    "topicId": "arrhythmias",
    "question": "What is the immediate management of Atrial Fibrillation with Rapid Ventricular Response (RVR) in a hemodynamically unstable patient (shock, chest pain, pulmonary edema)?",
    "answer": "Immediate synchronized electrical cardioversion (120-200 J biphasic), preceded by IV procedural sedation if conscious.",
    "explanation": "Rate-controlling medications (beta-blockers, diltiazem) take time to work and further depress contractility/blood pressure in decompensated shock.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in arrhythmias"
    ]
  },
  {
    "id": "arrhythmias.fc.diltiazem-vs-amiodarone",
    "topicId": "arrhythmias",
    "question": "When should IV Amiodarone be chosen over Diltiazem or Beta-blockers for rate control in new-onset atrial fibrillation in the ICU?",
    "answer": "In patients with acute decompensated heart failure with reduced ejection fraction (HFrEF), cardiogenic shock, or severe vasopressor-dependent septic shock.",
    "explanation": "Diltiazem and beta-blockers have negative inotropic effects that can trigger cardiovascular collapse in low EF; amiodarone is hemodynamically neutral.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in arrhythmias"
    ]
  },
  {
    "id": "arrhythmias.fc.torsades-magnesium",
    "topicId": "arrhythmias",
    "question": "What is the first-line pharmacologic treatment for Torsades de Pointes (polymorphic VT with prolonged QT)?",
    "answer": "IV Magnesium Sulfate 2 g over 1-2 minutes (repeatable), regardless of baseline serum magnesium level, plus temporary overdrive pacing or isoproterenol to shorten QT.",
    "explanation": "Magnesium stabilizes the cardiac membrane by blocking early afterdepolarizations (EADs) caused by L-type calcium channels.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in arrhythmias"
    ]
  }
];
