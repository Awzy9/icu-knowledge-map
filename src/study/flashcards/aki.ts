import type { Flashcard } from "@/content-types";

export const akiFlashcards: readonly Flashcard[] = [
  {
    "id": "aki.fc.kdigo-staging-definition",
    "topicId": "aki",
    "question": "What are the KDIGO diagnostic criteria and stages for Acute Kidney Injury?",
    "answer": "Stage 1: SCr rise ≥ 0.3 mg/dL within 48h or 1.5–1.9x baseline, or UOP < 0.5 mL/kg/h for 6–12h; Stage 2: SCr 2.0–2.9x baseline, or UOP < 0.5 for ≥ 12h; Stage 3: SCr 3.0x baseline, SCr ≥ 4.0 mg/dL, initiation of RRT, or anuria for ≥ 12h.",
    "explanation": "KDIGO criteria unify RIFLE and AKIN definitions; both urine output and serum creatinine criteria must be tracked independently, with the worst criterion defining the stage.",
    "difficulty": "basic",
    "category": "Definition",
    "references": [
      "KDIGO Clinical Practice Guideline for Acute Kidney Injury. Kidney Int Suppl 2012."
    ]
  },
  {
    "id": "aki.fc.fena-vs-feurea",
    "topicId": "aki",
    "question": "When is Fractional Excretion of Urea (FEUrea) superior to Fractional Excretion of Sodium (FeNa) in evaluating AKI?",
    "answer": "In patients who have received loop or thiazide diuretics within the past 24–48 hours.",
    "explanation": "Diuretics increase urinary sodium excretion, falsely elevating FeNa > 1% in pre-renal states. FEUrea (< 35% indicates pre-renal azotemia) remains reliable because urea is handled primarily in the proximal tubule.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Carvounis CP et al. Significance of the fractional excretion of urea in the differential diagnosis of acute renal failure. Kidney Int 2002."
    ]
  },
  {
    "id": "aki.fc.furosemide-stress-test",
    "topicId": "aki",
    "question": "What is the Furosemide Stress Test (FST), and what response predicts progression to Stage 3 AKI / need for RRT?",
    "answer": "IV Furosemide 1.0 mg/kg (or 1.5 mg/kg in prior diuretic users); urine output < 200 mL in the 2 hours post-administration predicts severe AKI progression and RRT need.",
    "explanation": "Chawla et al. (Crit Care 2013) demonstrated that FST assesses functional tubular integrity with high sensitivity and specificity (~87%).",
    "difficulty": "advanced",
    "category": "Monitoring",
    "references": [
      "Chawla LS et al. Development and standardization of a furosemide stress test. Crit Care 2013."
    ]
  },
  {
    "id": "aki.fc.urgent-dialysis-indications-aeiou",
    "topicId": "aki",
    "question": "What are the 'AEIOU' absolute urgent indications for initiating renal replacement therapy?",
    "answer": "A: Refractory Acidosis (pH < 7.15); E: Refractory Electrolytes (K+ > 6.5 mEq/L with ECG changes); I: Ingestions (toxic alcohols, salicylates, lithium); O: Volume Overload refractory to diuretics; U: Uremic complications (encephalopathy, pericarditis, bleeding).",
    "explanation": "These represent medical emergencies where failure to initiate RRT immediately carries high risk of mortality.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "KDIGO AKI Guidelines 2012; Irwin & Rippe."
    ]
  },
  {
    "id": "aki.fc.timing-trials-starrt-akiki",
    "topicId": "aki",
    "question": "What did large randomized trials (STARRT-AKI, AKIKI, IDEAL-ICU) conclude regarding early vs accelerated RRT initiation in AKI without urgent indications?",
    "answer": "Accelerated/early RRT initiation did NOT improve 90-day mortality and caused higher rates of adverse events (hypotension, catheter complications, dialysis dependence).",
    "explanation": "The STARRT-AKI trial (NEJM 2020) established that a watchful waiting strategy is safe and allows many patients to recover renal function spontaneously without ever requiring dialysis.",
    "difficulty": "advanced",
    "category": "Evidence",
    "references": [
      "STARRT-AKI Investigators. Timing of initiation of renal-replacement therapy in AKI. NEJM 2020; AKIKI Trial. NEJM 2016."
    ]
  }
];
