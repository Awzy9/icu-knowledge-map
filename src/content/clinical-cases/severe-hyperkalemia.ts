import type { ClinicalCase } from "@/content-types/clinical-case";

export const severeHyperkalemiaCase: ClinicalCase = {
  id: "case-severe-hyperkalemia",
  slug: "severe-hyperkalemia",
  title: "Severe Hyperkalemia with Cardiac Toxicity",
  subtitle: "Emergency membrane stabilization, intracellular shifting, and elimination in end-stage renal disease",
  difficulty: "foundation",
  system: "renal",
  tags: ["hyperkalemia", "arrhythmia", "renal-failure", "calcium", "dialysis"],
  objectives: [
    "Recognize pathognomonic ECG findings of life-threatening hyperkalemia",
    "Administer IV Calcium immediately for cardiac membrane stabilization",
    "Deploy rapid intracellular shifting agents (insulin/dextrose, beta-2 agonists)",
    "Avoid hyperkalemia-exacerbating neuromuscular blockers like Succinylcholine"
  ],
  initialPresentation: {
    history: "A 55-year-old male with End-Stage Renal Disease (ESRD) on hemodialysis missed his last two dialysis sessions due to severe transportation issues. He presents with profound generalized muscular weakness, inability to lift his legs, and lethargy.",
    vitals: { "HR": "48/min", "BP": "94/52 mmHg", "RR": "20/min", "SpO2": "97%" },
    keyFindings: [
      "12-Lead ECG: Marked sinus bradycardia with absent P-waves, severe QRS widening (175 ms), and tall peaked symmetric T-waves transitioning into a sine-wave morphology",
      "Stat bedside point-of-care blood gas: Potassium 8.6 mEq/L, pH 7.18, HCO3 12 mEq/L, BUN 98 mg/dL, Creatinine 11.4 mg/dL"
    ]
  },
  steps: [
    {
      id: "step-1",
      prompt: "The patient has a potassium of 8.6 mEq/L with ECG showing classic sine-wave appearance and extreme QRS widening. He is at imminent risk of ventricular fibrillation or asystolic cardiac arrest.",
      question: "What is your immediate first-line life-saving intervention?",
      options: [
        {
          id: "1-a",
          text: "Administer IV Calcium Gluconate (30 mL of 10% solution = 3 g) or Calcium Chloride (10 mL of 10% solution = 1 g) over 2–5 minutes",
          isCorrect: true,
          explanation: "IV Calcium is the mandatory first-line emergency therapy for hyperkalemic cardiac toxicity. Calcium does not lower serum potassium; it directly restores cardiac membrane resting potential and stabilizes cardiomyocytes within 1–3 minutes.",
          physiologicReasoning: "Elevated extracellular potassium decreases the resting membrane potential (hypopolarization), inactivating sodium channels. Calcium raises the action potential threshold, restoring normal resting-to-threshold difference.",
          nextStepId: "step-2",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Cardiac membrane threshold potential shifts upward",
              "QRS duration narrows from 175 ms to 110 ms on continuous telemetry",
              "Heart rate accelerates from 48 to 68/min"
            ],
            clinicalResponse: "Within 2 minutes of IV Calcium infusion, the sine-wave pattern resolves and distinct QRS complexes reappear on the cardiac monitor.",
            nextStepId: "step-2"
          }
        },
        {
          id: "1-b",
          text: "Administer IV Regular Insulin 10 units with 50 mL of D50W as initial monotherapy",
          isCorrect: false,
          explanation: "While insulin/glucose is essential for shifting potassium, its onset of action takes 15–30 minutes. In the presence of sine-wave ECG changes, waiting for insulin without giving membrane-stabilizing calcium risks fatal ventricular arrest.",
          whyNot: "Insulin takes 15–30 minutes to work; cardiac arrest can occur within seconds without immediate membrane stabilization.",
          nextStepId: "step-branch-ecg-instability",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Delayed potassium shifting while the myocardium remains critically vulnerable to VF",
              "QRS widens into a deteriorating sinusoidal rhythm"
            ],
            clinicalResponse: "While insulin is infusing, the telemetry monitor alarms with non-sustained ventricular tachycardia, prompting emergency calcium rescue.",
            nextStepId: "step-branch-ecg-instability"
          }
        },
        {
          id: "1-c",
          text: "Wait for the hemodialysis team to arrive and initiate emergent dialysis",
          isCorrect: false,
          explanation: "Dialysis takes 30–60 minutes to set up and prime. Unstable hyperkalemia requires immediate bedside pharmacological stabilization before dialysis begins.",
          whyNot: "Dialysis is definitive elimination, but medical stabilization is mandatory to keep the patient alive during setup.",
          nextStepId: "step-branch-ecg-instability",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Unprotected myocardium during the 45-minute dialysis preparation"
            ],
            clinicalResponse: "The patient requires bedside pharmacological rescue while the vascular catheter is placed.",
            nextStepId: "step-branch-ecg-instability"
          }
        }
      ]
    },
    {
      id: "step-branch-ecg-instability",
      isBranchStep: true,
      parentDecisionRef: "step-1",
      prompt: "Because membrane stabilization was omitted, the patient develops runs of polymorphic ventricular tachycardia and the QRS widens further into an unstable sine-wave pattern with BP 74/40 mmHg.",
      question: "What emergency intervention must be pushed immediately to stabilize myocardial resting membrane potential?",
      options: [
        {
          id: "branch-k-a",
          text: "Push IV Calcium Chloride 1g (or Calcium Gluconate 3g) stat over 2 minutes while preparing for electrical defibrillation if unstable VT persists",
          isCorrect: true,
          explanation: "IV Calcium immediately restores the threshold potential of cardiac myocytes, narrowing the QRS and suppressing hyperkalemic ventricular arrhythmias within 1–3 minutes.",
          physiologicReasoning: "Restores normal voltage difference between resting membrane potential and action potential threshold in cardiac conducting tissue.",
          nextStepId: "step-2",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Cardiomyocyte membrane threshold potential shifts upward",
              "Wide sinusoidal rhythm rapidly resolves into narrow QRS complexes",
              "Blood pressure recovers to 106/62 mmHg"
            ],
            clinicalResponse: "Within 90 seconds of IV Calcium, the polymorphic ventricular rhythm converts back to sinus rhythm and vital signs stabilize.",
            nextStepId: "step-2"
          }
        },
        {
          id: "branch-k-b",
          text: "Administer Amiodarone 150 mg IV bolus as primary anti-arrhythmic",
          isCorrect: false,
          explanation: "Amiodarone is ineffective for electrolyte-induced channel inactivation and can worsen hyperkalemic bradycardia and conduction block.",
          whyNot: "Anti-arrhythmics cannot fix potassium-induced membrane inactivation; IV Calcium is mandatory.",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Worsening bradycardia and conduction block without membrane stabilization"
            ],
            clinicalResponse: "Heart rate drops to 30 bpm without resolving the wide QRS."
          }
        }
      ]
    },
    {
      id: "step-2",
      prompt: "The ECG shows narrowed QRS complexes after calcium administration. However, total body potassium remains severely elevated (8.6 mEq/L). The patient is anuric.",
      question: "Which combination of intracellular shifting agents is most effective for rapid temporary potassium reduction?",
      vitalsUpdate: { "HR": "68/min", "BP": "104/60 mmHg" },
      options: [
        {
          id: "2-a",
          text: "IV Regular Insulin 10 units + 50 mL 50% Dextrose (D50W) plus high-dose nebulized Albuterol (10–20 mg)",
          isCorrect: true,
          explanation: "Insulin stimulates the Na+/K+-ATPase pump driving potassium into cells (lowers K+ by 0.5–1.2 mEq/L within 30–60 mins). High-dose beta-2 agonists have an additive shifting effect via cAMP-mediated Na+/K+-ATPase activation.",
          physiologicReasoning: "Insulin activates sodium-potassium ATPase pumps in skeletal muscle, while beta-2 adrenergic agonism enhances intracellular potassium uptake.",
          nextStepId: "step-3",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Potassium shifts rapidly into skeletal muscle and liver cells",
              "Serum potassium drops from 8.6 to 7.2 mEq/L over 45 minutes",
              "Blood glucose remains stable with concurrent dextrose"
            ],
            clinicalResponse: "Repeat potassium at 45 minutes is 7.1 mEq/L. Muscle strength begins to return, and the patient is fully awake.",
            nextStepId: "step-3"
          }
        },
        {
          id: "2-b",
          text: "Administer IV Furosemide 80 mg bolus",
          isCorrect: false,
          explanation: "Loop diuretics rely on renal tubular flow and functioning nephrons to excrete potassium. In an anuric ESRD patient, loop diuretics produce zero potassium clearance and risk ototoxicity.",
          whyNot: "Anuric ESRD kidneys cannot respond to loop diuretics; it provides zero potassium excretion.",
          outcome: {
            classification: "suboptimal",
            immediateEffects: [
              "Zero potassium elimination and zero urine output"
            ],
            clinicalResponse: "No diuresis occurs, and potassium remains dangerously high."
          }
        },
        {
          id: "2-c",
          text: "If intubation is needed, use Succinylcholine 1.5 mg/kg for rapid paralysis",
          isCorrect: false,
          explanation: "Succinylcholine causes sustained motor endplate depolarization, causing an extracellular potassium release of 0.5–1.0 mEq/L. In pre-existing severe hyperkalemia, this triggers fatal cardiac arrest. Use Rocuronium instead.",
          whyNot: "Succinylcholine is absolutely contraindicated in hyperkalemia because it raises serum K+ further, causing cardiac arrest.",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Extracellular potassium spikes above 9.5 mEq/L",
              "Immediate recurrence of sine-wave rhythm and asystole"
            ],
            clinicalResponse: "The patient arrests immediately upon drug administration and requires emergency ACLS resuscitation."
          }
        }
      ]
    },
    {
      id: "step-3",
      prompt: "Pharmacologic shifting has temporarily brought serum potassium to 7.0 mEq/L, but shifting agents only last 2–4 hours before potassium leaks back into the extracellular space.",
      question: "What is the definitive therapy to eliminate potassium from the body in an anuric ESRD patient?",
      options: [
        {
          id: "3-a",
          text: "Urgent Hemodialysis via vascular access",
          isCorrect: true,
          explanation: "Hemodialysis is the definitive therapy for severe hyperkalemia in renal failure, capable of clearing 25–50 mEq of potassium per hour through diffusive concentration gradients.",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Diffusive removal of potassium across dialysis membrane",
              "Serum potassium normalizes to 4.4 mEq/L over 3 hours of dialysis"
            ],
            clinicalResponse: "Dialysis proceeds smoothly, metabolic acidosis is corrected, and the patient makes a complete recovery."
          }
        },
        {
          id: "3-b",
          text: "Administer Oral Sodium Polystyrene Sulfonate (Kayexalate) every 2 hours",
          isCorrect: false,
          explanation: "Kayexalate has a delayed onset of 4–6 hours, low efficacy in acute hyperkalemia, and carries FDA warnings for intestinal necrosis and bowel perforation.",
          whyNot: "Cation-exchange resins are too slow for emergency elimination and risk colonic necrosis.",
          outcome: {
            classification: "suboptimal",
            immediateEffects: [
              "Delayed gastrointestinal binding without emergency clearance"
            ],
            clinicalResponse: "Potassium levels rebound while waiting for slow bowel transit."
          }
        }
      ]
    }
  ],
  relatedMedicationSlugs: ["rocuronium", "succinylcholine", "tmp-smx"],
  relatedTopicIds: ["hyperkalemia", "aki", "crrt"],
  relatedPathwaySlugs: ["hyperkalemia-management-workflow", "rrt-crrt-initiation-workflow"],
  relatedProblemSlugs: ["severe-hyperkalemia", "acute-altered-mental-status"],
  references: [
    "Lott C, et al. European Resuscitation Council Guidelines 2021: Cardiac arrest in special circumstances — Hyperkalemia. Resuscitation 2021;161:152-219.",
    "Palmer BF, Clegg DJ. Diagnosis and treatment of hyperkalemia. Med Clin North Am 2015;99:1071-1084.",
    "Weisberg LS. Management of severe hyperkalemia. Crit Care Med 2008;36:3246-3251."
  ]
};