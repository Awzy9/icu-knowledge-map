import type { Question } from "@/content-types";

export const arrhythmiasQuestions: readonly Question[] = [
  {
    "id": "arrhythmia.q.torsades-management",
    "topicId": "arrhythmias",
    "stem": "An ICU patient on amiodarone and haloperidol develops sudden polymorphic ventricular tachycardia on telemetry that twists around the isoelectric baseline. The baseline QTc interval was 540 ms. The patient is conscious but lightheaded with BP 94/60 mmHg. What is the immediate drug of choice?",
    "options": [
      {
        "id": "a",
        "text": "Intravenous Magnesium Sulfate (2 g IV bolus)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Intravenous Amiodarone 150 mg bolus",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Intravenous Procainamide infusion",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Intravenous Adenosine 6 mg rapid push",
        "isCorrect": false
      }
    ],
    "explanation": "Torsades de Pointes is a polymorphic ventricular tachycardia associated with a prolonged QT interval. IV Magnesium Sulfate (2 g IV) is the drug of choice. Class III antiarrhythmics like amiodarone and procainamide further prolong the QT interval and are strictly contraindicated.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "AHA ACLS Guidelines 2020."
    ]
  }
,
  {
    id: "arrhythmias.q.afib-rvr-wpw",
    topicId: "arrhythmias",
    stem: "A 28-year-old male presents with palpitations, BP 118/75, and an irregularly irregular wide-complex tachycardia at 220 bpm with varying QRS morphologies (Wolff-Parkinson-White with AF). Which medication is strictly contraindicated?",
    options: [
      { id: "a", text: "IV Procainamide or Ibutilide.", isCorrect: false },
      { id: "b", text: "AV-nodal blocking agents (IV Diltiazem, Verapamil, Metoprolol, Adenosine, Digoxin).", isCorrect: true },
      { id: "c", text: "Synchronized DC electrical cardioversion.", isCorrect: false },
      { id: "d", text: "IV Magnesium sulfate.", isCorrect: false }
    ],
    explanation: "In pre-excited atrial fibrillation (WPW with AF), AV nodal blocking drugs (calcium blockers, beta-blockers, adenosine, digoxin) block the normal AV node, shunting all electrical impulses down the accessory pathway with very short refractory periods, precipitating 1:1 ventricular conduction, ventricular fibrillation, and sudden cardiac death. Treatment of choice is IV Procainamide or synchronized cardioversion.",
    difficulty: "advanced",
    category: "Safety",
    references: [
      "AHA/ACC/HRS Guideline for the Management of Adult Patients with Supraventricular Tachycardia."
    ]
  },
  {
    id: "arrhythmias.q.torsades-treatment",
    topicId: "arrhythmias",
    stem: "A patient on sotalol and haloperidol develops polymorphic ventricular tachycardia with a baseline QTc of 560 ms (Torsades de Pointes). The patient has a palpable pulse. What is the immediate first-line medical therapy and pacing strategy?",
    options: [
      { id: "a", text: "IV Amiodarone 150 mg bolus.", isCorrect: false },
      { id: "b", text: "IV Magnesium sulfate (2 g bolus over 1-2 min) and overdrive transvenous/pharmacologic (isoproterenol) pacing to HR 100-110 bpm to shorten the QT interval.", isCorrect: true },
      { id: "c", text: "IV Procainamide infusion.", isCorrect: false },
      { id: "d", text: "IV Metoprolol 5 mg.", isCorrect: false }
    ],
    explanation: "Torsades de Pointes is triggered by early afterdepolarizations in prolonged QT states. IV Magnesium sulfate (2 g IV) stabilizes the myocardial membrane regardless of baseline magnesium. Overdrive pacing or isoproterenol increases the heart rate, shortening the QT interval and preventing pause-dependent initiation. Amiodarone and procainamide prolong the QT and are strictly contraindicated.",
    difficulty: "intermediate",
    category: "Management",
    references: [
      "AHA/ACC/HRS Ventricular Arrhythmia Guidelines."
    ]
  }
];
