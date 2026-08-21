import type { ClinicalCase } from "@/content-types/clinical-case";

export const dkaCase: ClinicalCase = {
  id: "case-dka-management",
  slug: "dka",
  title: "Severe Diabetic Ketoacidosis Resuscitation",
  subtitle: "Fluid resuscitation, potassium kinetics, and insulin transition in severe DKA",
  difficulty: "intermediate",
  system: "renal",
  tags: ["dka", "metabolic-acidosis", "fluids", "potassium", "insulin"],
  objectives: [
    "Prioritize aggressive balanced crystalloid volume expansion prior to insulin initiation",
    "Apply current international consensus criteria (ADA/EASD/JBDS/AACE/DTS 2024) for DKA diagnosis, potassium safety threshold (> 3.5 mmol/L), and beta-hydroxybutyrate-guided resolution",
    "Anticipate transcellular potassium shifts: delay insulin if K+ ≤ 3.5 mmol/L and replete potassium before and during insulin therapy",
    "Execute safe transition from IV insulin infusion to subcutaneous basal regimens with a 2- to 4-hour overlap"
  ],
  initialPresentation: {
    history: "A 22-year-old female with Type 1 Diabetes Mellitus presents with 2 days of intractable vomiting, abdominal pain, and progressive lethargy following a viral gastroenteritis.",
    vitals: { "HR": "128/min", "BP": "92/58 mmHg", "RR": "32/min", "SpO2": "99% on room air", "Temp": "37.1°C" },
    keyFindings: [
      "Deep, rapid Kussmaul respirations with a strong acetone/fruity breath odor",
      "Severe mucosal dehydration, sunken eyes, and delayed skin turgor",
      "Point-of-care blood glucose: 640 mg/dL (elevated plasma beta-hydroxybutyrate 6.2 mmol/L)",
      "Stat Venous Blood Gas & Chemistries: pH 7.12, pCO2 20 mmHg, HCO3 7 mEq/L, Sodium 131 mEq/L, Potassium 3.9 mEq/L, Chloride 96 mEq/L (Anion Gap = 28)"
    ]
  },
  steps: [
    {
      id: "step-1",
      prompt: "The patient presents with the diagnostic triad of DKA: hyperglycemia (640 mg/dL), severe metabolic acidosis (pH 7.12, HCO3 7 mEq/L), and severe ketonemia (beta-hydroxybutyrate 6.2 mmol/L, with anion gap 28). She has profound volume contraction estimated at 5–6 liters from osmotic diuresis.",
      question: "What is your immediate, most crucial initial intervention?",
      options: [
        {
          id: "1-a",
          text: "Rapid IV fluid expansion with 1.0–1.5 L of balanced crystalloid (Lactated Ringer's or Plasma-Lyte) over the first hour",
          isCorrect: true,
          explanation: "Initial resuscitation must prioritize restoring effective circulating volume and renal perfusion. Fluid expansion alone lowers blood glucose through renal excretion and reduces counter-regulatory stress hormones. Balanced crystalloids are preferred over 0.9% saline to avoid hyperchloremic acidosis.",
          physiologicReasoning: "Restoring intravascular volume re-establishes renal tubular perfusion, augmenting glucosuria and decreasing sympathetic/cortisol drive.",
          nextStepId: "step-2",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Intravascular volume expansion restores venous return",
              "Heart rate decreases from 128 to 110/min",
              "Renal blood flow increases, initiating urinary glucose elimination"
            ],
            clinicalResponse: "After 1.5 L of balanced crystalloid, blood pressure rises to 108/68 mmHg, and urine output resumes at 50 mL/hr.",
            nextStepId: "step-2"
          }
        },
        {
          id: "1-b",
          text: "Give an IV Regular Insulin bolus of 0.14 units/kg immediately before giving IV fluids",
          isCorrect: false,
          explanation: "Starting insulin before volume resuscitation causes rapid intracellular movement of glucose and water, which can exacerbate intravascular volume depletion and precipitate hypotension.",
          whyNot: "Insulin without prior fluid expansion shifts water into cells, risking acute vascular collapse.",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Intravascular water shifts into the intracellular space with glucose",
              "Intravascular volume depletion worsens, increasing the risk of severe hypotension"
            ],
            clinicalResponse: "Starting insulin without adequate fluid resuscitation causes blood pressure to decline, necessitating urgent crystalloid expansion."
          }
        },
        {
          id: "1-c",
          text: "Administer 2 ampules of IV Sodium Bicarbonate for pH < 7.15",
          isCorrect: false,
          explanation: "Routine sodium bicarbonate in DKA is NOT recommended by current consensus. Bicarbonate therapy does not improve clinical recovery or mortality and is associated with delayed ketone clearance, paradoxical CSF acidosis, hypocalcemia, and severe hypokalemia. Current consensus notes bicarbonate may only be considered in severe acidemia (pH < 7.0) with severe hemodynamic instability or life-threatening hyperkalemia.",
          whyNot: "Bicarbonate delays ketoacidosis resolution, risks severe hypokalemia, and produces paradoxical cerebral acidosis.",
          outcome: {
            classification: "suboptimal",
            immediateEffects: [
              "Extracellular potassium shifts intracellularly, increasing hypokalemia risk",
              "Paradoxical CSF acidosis may worsen sensorium"
            ],
            clinicalResponse: "Bicarbonate administration triggers a drop in serum potassium and risks worsening intracellular acidosis without improving ketosis clearance."
          }
        }
      ]
    },
    {
      id: "step-2",
      prompt: "After 2 liters of balanced crystalloid, BP is 112/70 mmHg. The repeat serum potassium is 3.8 mmol/L.",
      question: "How should potassium and insulin be managed according to the 2024 international consensus guidelines?",
      vitalsUpdate: { "BP": "112/70 mmHg", "HR": "108/min" },
      options: [
        {
          id: "2-a",
          text: "Verify K+ > 3.5 mmol/L, start IV regular insulin at 0.1 units/kg/hr, and add 20–30 mmol/L of potassium to IV fluids once urine output is established",
          isCorrect: true,
          explanation: "The 2024 international consensus establishes K+ ≤ 3.5 mmol/L as the critical safety threshold to DELAY insulin and infuse IV potassium until serum K+ rises > 3.5 mmol/L, because insulin stimulates cellular Na+/K+-ATPase and drives potassium intracellularly, precipitating fatal arrhythmias or respiratory arrest. When baseline K+ is safely > 3.5 mmol/L (3.5–5.3 mmol/L) with confirmed urine output, start insulin at 0.1 units/kg/hr and add 20–30 mmol potassium per liter of IV maintenance fluid to maintain serum K+ strictly between 4.0–5.0 mmol/L.",
          physiologicReasoning: "Insulin and acidosis correction drive potassium into cells, unmasking severe whole-body potassium depletion.",
          nextStepId: "step-3",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Serum potassium is maintained in the safe 4.0–5.0 mmol/L window",
              "Insulin infusion safely halts lipolysis and suppresses hepatic ketogenesis",
              "Plasma beta-hydroxybutyrate decreases steadily"
            ],
            clinicalResponse: "Insulin runs smoothly without hypokalemia. Serum potassium stays stable at 4.2 mmol/L.",
            nextStepId: "step-3"
          }
        },
        {
          id: "2-b",
          text: "Hold all potassium repletion until serum potassium drops below 3.0 mmol/L",
          isCorrect: false,
          explanation: "Waiting for overt severe hypokalemia before repleting potassium in DKA frequently leads to cardiac arrhythmias, diaphragmatic weakness, and cardiac arrest.",
          whyNot: "Potassium must be replaced proactively when K+ is ≤ 5.3 mmol/L with established urine output.",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Serum potassium drops rapidly as insulin drives K+ into cells",
              "Arrhythmia risk increases markedly without proactive repletion"
            ],
            clinicalResponse: "Serum potassium falls toward dangerous levels, triggering ventricular ectopy and forcing insulin suspension."
          }
        }
      ]
    },
    {
      id: "step-3",
      prompt: "Fourteen hours into therapy, blood glucose is 160 mg/dL (on D5W + crystalloid), venous pH is 7.36, serum bicarbonate is 21 mEq/L, and plasma beta-hydroxybutyrate has cleared to 0.4 mmol/L (normal < 0.6 mmol/L). The patient is alert, hungry, and requesting breakfast.",
      question: "How is DKA resolution defined under the 2024 consensus, and what is the proper transition protocol off IV insulin?",
      vitalsUpdate: { "BP": "120/75 mmHg", "HR": "78/min", "RR": "16/min" },
      options: [
        {
          id: "3-a",
          text: "Recognize DKA resolution (plasma beta-hydroxybutyrate < 0.6 mmol/L with venous pH ≥ 7.30 or bicarbonate ≥ 18 mmol/L, with glucose ideally < 200 mg/dL), administer Subcutaneous Basal Insulin, and overlap the IV insulin infusion for 2 to 4 hours",
          isCorrect: true,
          explanation: "Under the 2024 consensus, DKA resolution is defined by ketone clearance (plasma beta-hydroxybutyrate < 0.6 mmol/L) along with recovery of acid-base status (venous pH ≥ 7.30 or serum bicarbonate ≥ 18 mmol/L), with blood glucose ideally < 200 mg/dL. Anion gap is no longer the primary criterion because hyperchloremic non-gap acidosis from fluid resuscitation can depress bicarbonate even after ketoacidosis has fully cleared. Because IV regular insulin has a half-life of ~5–9 minutes, subcutaneous basal insulin must overlap the IV infusion by 2–4 hours (minimum 2 hours) before stopping IV insulin to prevent rebound ketoacidosis.",
          physiologicReasoning: "Subcutaneous basal depot establishes circulating insulin before IV insulin clears, preventing unchecked lipolysis and rebound DKA.",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Subcutaneous depot establishes steady plasma insulin concentrations",
              "No gap in circulating insulin occurs",
              "Ketoacidosis remains fully suppressed"
            ],
            clinicalResponse: "The transition is completely seamless. The patient tolerates oral meals with prandial coverage and is discharged from the ICU the following morning."
          }
        },
        {
          id: "3-b",
          text: "Stop the IV insulin infusion immediately and administer short-acting Lispro only when the meal arrives",
          isCorrect: false,
          explanation: "Stopping the IV drip without prior basal insulin creates an immediate insulin deficiency within 15 minutes, allowing lipolysis and ketoacidosis to recur within hours.",
          whyNot: "IV insulin clears in minutes; lacking basal coverage causes acute rebound DKA.",
          outcome: {
            classification: "suboptimal",
            immediateEffects: [
              "Serum insulin levels drop to near zero within 30 minutes",
              "Unchecked lipolysis resumes, widening the anion gap back to 18"
            ],
            clinicalResponse: "Four hours later, the patient develops recurrent nausea and the anion gap re-opens, requiring resumption of the IV infusion."
          }
        }
      ]
    }
  ],
  relatedMedicationSlugs: ["norepinephrine", "fentanyl", "propofol"],
  relatedTopicIds: ["diabetic-ketoacidosis", "acid-base-disorders", "aki"],
  relatedPathwaySlugs: ["metabolic-acidosis-evaluation-workflow"],
  relatedProblemSlugs: ["metabolic-acidosis", "acute-altered-mental-status"],
  references: [
    "ElSayed NA, Aleppo G, Bannuru RR, et al. Hyperglycemic Crises in Adults With Diabetes: A Consensus Report by the American Diabetes Association (ADA), European Association for the Study of Diabetes (EASD), Joint British Diabetes Societies for Inpatient Care (JBDS), American Association of Clinical Endocrinology (AACE), and Diabetes Technology Society (DTS). Diabetes Care. 2024.",
    "Fayfman M, Pasquel FJ, Umpierrez GE. Management of Hyperglycemic Emergencies. Lancet. 2017;390(10097):825-837.",
    "Kitabchi AE, Umpierrez GE, Miles JM, Fisher JN. Hyperglycemic crises in adult patients with diabetes (Historical ADA Statement). Diabetes Care. 2009;32(7):1335-1343."
  ]
};