import type { Flashcard } from "@/content-types";

export const cardiogenicShockFlashcards: readonly Flashcard[] = [
  {
    "id": "cshock.fc.definition-hemodynamic-triad",
    "topicId": "cardiogenic-shock",
    "question": "What hemodynamic triad defines Cardiogenic Shock?",
    "answer": "1. Persistent hypotension (SBP < 90 mmHg or MAP < 65); 2. Reduced Cardiac Index (< 2.2 L/min/m2); 3. Elevated Pulmonary Capillary Wedge Pressure (> 15 mmHg).",
    "explanation": "Reflects primary myocardial pump failure with inadequate systemic perfusion despite adequate or elevated left ventricular filling pressures.",
    "difficulty": "basic",
    "category": "Definition",
    "references": [
      "Hochman JS et al. SHOCK Trial. NEJM 1999."
    ]
  },
  {
    "id": "cshock.fc.scai-staging-classification",
    "topicId": "cardiogenic-shock",
    "question": "What are the 5 SCAI shock stages (A through E)?",
    "answer": "A: At risk; B: Beginning (pre-shock/tachycardia); C: Classic (hypoperfusion requiring inotrope/device); D: Deteriorating (failing initial therapy); E: Extremis (circulatory collapse/PEA).",
    "explanation": "SCAI classification provides standardized risk stratification; in-hospital mortality escalates from ~2–5% in Stage A to >50–70% in Stage E.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Baran DA et al. SCAI clinical expert consensus on classification of cardiogenic shock. Catheter Cardiovasc Interv 2019."
    ]
  },
  {
    "id": "cshock.fc.shock-trial-landmark",
    "topicId": "cardiogenic-shock",
    "question": "What did the landmark SHOCK trial prove regarding early revascularization in AMI cardiogenic shock?",
    "answer": "Emergency revascularization (PCI or CABG) within 6 hours significantly reduced long-term mortality (1-year survival 50.3% vs 36.7%) compared to initial medical stabilization.",
    "explanation": "Hochman et al. (NEJM 1999) established early coronary revascularization as the undisputed standard of care for AMI-induced cardiogenic shock.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Hochman JS et al. SHOCK Trial. NEJM 1999."
    ]
  },
  {
    "id": "cshock.fc.iabp-shock-2-finding",
    "topicId": "cardiogenic-shock",
    "question": "What were the findings of the IABP-SHOCK II trial regarding routine intra-aortic balloon pump use in AMI cardiogenic shock?",
    "answer": "Routine IABP use did NOT reduce 30-day or long-term mortality compared to medical therapy alone in patients undergoing early PCI.",
    "explanation": "Thiele et al. (NEJM 2012) changed international guidelines from Class I recommendation for routine IABP to Class III (not recommended routinely).",
    "difficulty": "advanced",
    "category": "Evidence",
    "references": [
      "Thiele H et al. Intraaortic balloon support for myocardial infarction with cardiogenic shock (IABP-SHOCK II). NEJM 2012."
    ]
  },
  {
    "id": "cshock.fc.cshock-dobutamine-vs-milrinone",
    "topicId": "cardiogenic-shock",
    "question": "What did the CAPITAL DOREMI trial find comparing Dobutamine vs Milrinone in cardiogenic shock?",
    "answer": "No significant difference in in-hospital mortality, sustained arrhythmias, renal replacement therapy, or resuscitation duration between dobutamine and milrinone.",
    "explanation": "Published in NEJM 2021 (Mathew et al.), both inotropes showed equivalent clinical outcomes; choice should be individualized to renal clearance and baseline blood pressure.",
    "difficulty": "advanced",
    "category": "Evidence",
    "references": [
      "Mathew R et al. Milrinone as compared with dobutamine in cardiogenic shock (DOREMI). NEJM 2021."
    ]
  },
  {
    "id": "cshock.fc.papi-calculation-rv",
    "topicId": "cardiogenic-shock",
    "question": "What is the Pulmonary Artery Pulsatility Index (PAPi), and what threshold indicates severe RV failure in cardiogenic shock?",
    "answer": "PAPi = (Pulmonary Artery Systolic - PA Diastolic) / Right Atrial Pressure; PAPi < 1.0 indicates severe RV dysfunction.",
    "explanation": "PAPi quantifies right ventricular stroke volume against RV preload. Lower values indicate right ventricular pump failure.",
    "difficulty": "advanced",
    "category": "Monitoring",
    "references": [
      "Korabathina R et al. Catheter Cardiovasc Interv 2012."
    ]
  }
];
