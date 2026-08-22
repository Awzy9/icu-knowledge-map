import type { MedicationChallenge } from "@/content-types/medication-challenge";

export const hemodynamicChallenges: MedicationChallenge[] = [
  {
    id: "hemo-septic-shock-first-line",
    challengeType: "best-drug",
    difficulty: "foundation",
    system: "Cardiovascular",
    stem: "A 65-year-old patient presents with suspected community-acquired pneumonia. After receiving 30 mL/kg of crystalloid fluid resuscitation, the mean arterial pressure (MAP) remains 54 mmHg. The heart rate is 110 bpm and extremities are warm. Which of the following is the most appropriate initial vasoactive agent?",
    options: [
      { id: "opt-norepi", text: "Norepinephrine", isCorrect: true },
      { id: "opt-dopa", text: "Dopamine", isCorrect: false },
      { id: "opt-pheny", text: "Phenylephrine", isCorrect: false },
      { id: "opt-vaso", text: "Vasopressin", isCorrect: false }
    ],
    explanation: "Norepinephrine is the first-line vasopressor for septic shock. It provides potent alpha-1 mediated vasoconstriction to increase systemic vascular resistance (SVR) along with modest beta-1 inotropy, avoiding the excessive tachycardia and arrhythmogenesis seen with dopamine.",
    whyNotAlternatives: [
      {
        optionId: "opt-dopa",
        drug: "Dopamine",
        reasoning: "Associated with a higher risk of tachyarrhythmias and increased mortality compared to norepinephrine in septic shock (SOAP II trial)."
      },
      {
        optionId: "opt-pheny",
        drug: "Phenylephrine",
        reasoning: "Pure alpha-1 agonist. Lacks beta-1 activity, which can lead to a reflex decrease in cardiac output. It is generally reserved for salvage therapy or specific clinical scenarios (e.g., tachyarrhythmias where beta-1 stimulation is undesirable)."
      },
      {
        optionId: "opt-vaso",
        drug: "Vasopressin",
        reasoning: "Recommended as a second-line agent to add to norepinephrine to raise MAP or decrease norepinephrine dose requirements, not as a first-line standalone agent."
      }
    ],
    relatedMedicationSlugs: ["norepinephrine", "dopamine", "phenylephrine", "vasopressin"],
    relatedTopicIds: ["septic-shock", "shock"],
    tags: ["vasopressors", "septic-shock", "guidelines"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "hemo-add-vasopressin",
    challengeType: "dose-change",
    difficulty: "intermediate",
    system: "Cardiovascular",
    stem: "A 55-year-old patient with intra-abdominal sepsis is currently receiving a norepinephrine infusion at 0.35 mcg/kg/min. MAP is fluctuating between 60-63 mmHg. The patient's heart rate is 125 bpm. What is the most appropriate next step in vasoactive management?",
    options: [
      { id: "opt-add-vaso", text: "Add Vasopressin at 0.03 units/min", isCorrect: true },
      { id: "opt-add-epi", text: "Add Epinephrine at 0.05 mcg/kg/min", isCorrect: false },
      { id: "opt-titrate-norepi", text: "Titrate Norepinephrine to 0.7 mcg/kg/min", isCorrect: false },
      { id: "opt-add-pheny", text: "Add Phenylephrine at 50 mcg/min", isCorrect: false }
    ],
    explanation: "Current guidelines recommend adding vasopressin (typically at 0.03 units/min) rather than escalating the dose of norepinephrine when the norepinephrine requirement is in the range of 0.25-0.5 mcg/kg/min. This strategy helps achieve MAP goals while minimizing catecholamine-induced toxicity (like tachycardia, which this patient already has).",
    whyNotAlternatives: [
      {
        optionId: "opt-add-epi",
        drug: "Epinephrine",
        reasoning: "Epinephrine is typically a third-line agent and its potent beta-1 effects would likely worsen the patient's existing tachycardia (HR 125)."
      },
      {
        optionId: "opt-titrate-norepi",
        drug: "Norepinephrine",
        reasoning: "Escalating norepinephrine monotherapy beyond 0.25-0.5 mcg/kg/min without adding vasopressin increases the risk of severe vasoconstriction, ischemia, and arrhythmias."
      },
      {
        optionId: "opt-add-pheny",
        drug: "Phenylephrine",
        reasoning: "Phenylephrine is not the preferred second-line agent in septic shock and can decrease stroke volume in the setting of severe sepsis."
      }
    ],
    relatedMedicationSlugs: ["vasopressin", "norepinephrine", "epinephrine", "phenylephrine"],
    relatedTopicIds: ["septic-shock", "shock"],
    tags: ["vasopressors", "refractory-shock", "escalation"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "hemo-nitroprusside-toxicity",
    challengeType: "toxicity",
    difficulty: "intermediate",
    system: "Cardiovascular",
    stem: "A 68-year-old man with acute heart failure and severe hypertension has been receiving an infusion of sodium nitroprusside at 4 mcg/kg/min for 72 hours. He develops unexplained altered mental status, metabolic acidosis with an elevated lactate, and a mixed venous oxygen saturation (SvO2) of 88%. Which of the following is the most likely cause?",
    options: [
      { id: "opt-cyanide", text: "Cyanide toxicity", isCorrect: true },
      { id: "opt-methemoglobinemia", text: "Methemoglobinemia", isCorrect: false },
      { id: "opt-thiocyanate", text: "Thiocyanate toxicity", isCorrect: false },
      { id: "opt-lactic-acidosis", text: "Propylene glycol toxicity", isCorrect: false }
    ],
    explanation: "Prolonged infusion of sodium nitroprusside, especially at higher doses (>2 mcg/kg/min) or for prolonged periods (>48 hours), can lead to cyanide toxicity. Cyanide blocks mitochondrial cytochrome c oxidase, preventing cellular oxygen utilization. This presents with altered mental status, lactic acidosis, and an inappropriately high SvO2 (because tissues cannot extract oxygen).",
    whyNotAlternatives: [
      {
        optionId: "opt-methemoglobinemia",
        drug: "Nitroglycerin",
        reasoning: "Methemoglobinemia is more classically associated with excessive nitroglycerin or local anesthetic use, presenting with cyanosis and a normal PaO2 but low SpO2."
      },
      {
        optionId: "opt-thiocyanate",
        drug: "Nitroprusside",
        reasoning: "Thiocyanate toxicity can also occur from nitroprusside (especially in renal failure) but typically presents with hyperreflexia, tinnitus, and seizures, without the severe lactic acidosis and high SvO2 characteristic of cyanide poisoning."
      },
      {
        optionId: "opt-lactic-acidosis",
        drug: "Lorazepam",
        reasoning: "Propylene glycol toxicity (associated with high-dose IV lorazepam or diazepam infusions) causes an anion-gap metabolic acidosis and osmolar gap, but not an abnormally elevated SvO2."
      }
    ],
    relatedMedicationSlugs: ["nitroprusside", "nitroglycerin"],
    relatedTopicIds: ["hypertensive-emergency", "toxicology"],
    tags: ["antihypertensives", "toxicity", "nitroprusside"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "hemo-dobutamine-physiology",
    challengeType: "fits-physiology",
    difficulty: "advanced",
    system: "Cardiovascular",
    stem: "A 60-year-old with ischemic cardiomyopathy presents with cardiogenic shock. An echocardiogram shows severe left ventricular systolic dysfunction (EF 15%). The patient has cold extremities, a MAP of 75 mmHg, and a heart rate of 85 bpm. Central venous oxygen saturation (ScvO2) is 45%. Which medication is most physiologically tailored to this hemodynamic profile?",
    options: [
      { id: "opt-dobutamine", text: "Dobutamine", isCorrect: true },
      { id: "opt-phenylephrine", text: "Phenylephrine", isCorrect: false },
      { id: "opt-norepinephrine", text: "Norepinephrine", isCorrect: false },
      { id: "opt-esmolol", text: "Esmolol", isCorrect: false }
    ],
    explanation: "This patient has classic 'cold and dry' or 'cold and wet' cardiogenic shock with a preserved MAP (75 mmHg) but profound systemic hypoperfusion (low ScvO2 of 45%). Dobutamine, a strong beta-1 and mild beta-2 agonist, will increase cardiac output (inotropy) and provide mild systemic vasodilation (afterload reduction), effectively improving forward flow and tissue oxygen delivery.",
    whyNotAlternatives: [
      {
        optionId: "opt-phenylephrine",
        drug: "Phenylephrine",
        reasoning: "Phenylephrine is a pure alpha-1 agonist that would increase systemic vascular resistance (afterload). In the setting of severe LV dysfunction, increased afterload will further depress stroke volume and worsen cardiogenic shock."
      },
      {
        optionId: "opt-norepinephrine",
        drug: "Norepinephrine",
        reasoning: "While norepinephrine is sometimes used in cardiogenic shock if the patient is hypotensive, this patient's MAP is preserved (75 mmHg). Norepinephrine's alpha-1 effects would increase afterload unnecessarily compared to an inodilator like dobutamine."
      },
      {
        optionId: "opt-esmolol",
        drug: "Esmolol",
        reasoning: "Esmolol is a beta-blocker that would decrease myocardial contractility, completely contraindicated in a patient with an EF of 15% presenting in cardiogenic shock with hypoperfusion."
      }
    ],
    relatedMedicationSlugs: ["dobutamine", "phenylephrine", "norepinephrine", "esmolol"],
    relatedTopicIds: ["cardiogenic-shock", "shock"],
    tags: ["inotropes", "cardiogenic-shock", "hemodynamics"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "hemo-avoid-dopamine",
    challengeType: "avoid-drug",
    difficulty: "intermediate",
    system: "Cardiovascular",
    stem: "A 72-year-old patient presents to the ICU in shock. Vital signs: BP 75/40 mmHg (MAP 52 mmHg), HR 125 bpm, irregularly irregular. ECG confirms rapid atrial fibrillation. The resident suggests starting Dopamine. What is the primary clinical rationale for avoiding Dopamine in this patient?",
    options: [
      { id: "opt-arrhythmia", text: "It causes significantly more tachyarrhythmias than alternatives.", isCorrect: true },
      { id: "opt-renal", text: "It causes profound renal vasoconstriction.", isCorrect: false },
      { id: "opt-afterload", text: "It excessively decreases systemic vascular resistance.", isCorrect: false },
      { id: "opt-bradycardia", text: "It induces a reflex bradycardia.", isCorrect: false }
    ],
    explanation: "Dopamine is associated with a significantly higher incidence of arrhythmogenic events (especially atrial fibrillation and ventricular tachycardia) compared to norepinephrine. This was famously demonstrated in the SOAP II trial. In a patient already experiencing rapid atrial fibrillation, dopamine is highly likely to exacerbate the tachyarrhythmia.",
    whyNotAlternatives: [
      {
        optionId: "opt-renal",
        drug: "Dopamine",
        reasoning: "Low-dose dopamine actually historically (though mistakenly) was thought to increase renal blood flow via dopaminergic receptors. It does not typically cause profound renal vasoconstriction at moderate doses."
      },
      {
        optionId: "opt-afterload",
        drug: "Dopamine",
        reasoning: "Dopamine, at moderate to high doses, stimulates alpha-1 receptors leading to an increase (not decrease) in systemic vascular resistance."
      },
      {
        optionId: "opt-bradycardia",
        drug: "Dopamine",
        reasoning: "Dopamine possesses beta-1 agonist properties that predictably cause tachycardia, not bradycardia. Reflex bradycardia is typically seen with pure alpha-1 agonists like phenylephrine."
      }
    ],
    relatedMedicationSlugs: ["dopamine", "norepinephrine"],
    relatedTopicIds: ["shock", "atrial-fibrillation"],
    tags: ["vasopressors", "arrhythmia", "adverse-effects"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "hemo-clevidipine-lipid",
    challengeType: "toxicity",
    difficulty: "advanced",
    system: "Cardiovascular",
    stem: "A 45-year-old patient with hypertensive emergency is receiving a continuous infusion of clevidipine. Which of the following metabolic parameters must be carefully monitored or considered during a prolonged infusion?",
    options: [
      { id: "opt-lipid", text: "Triglyceride levels", isCorrect: true },
      { id: "opt-cyanide", text: "Cyanide levels", isCorrect: false },
      { id: "opt-glucose", text: "Blood glucose", isCorrect: false },
      { id: "opt-calcium", text: "Ionized calcium", isCorrect: false }
    ],
    explanation: "Clevidipine is formulated in a 20% lipid emulsion (similar to propofol). Prolonged infusions or high doses provide a significant lipid load, which can lead to hypertriglyceridemia and potentially acute pancreatitis. Lipid intake from clevidipine must be accounted for in the patient's nutritional plan.",
    whyNotAlternatives: [
      {
        optionId: "opt-cyanide",
        drug: "Nitroprusside",
        reasoning: "Cyanide toxicity is a risk with sodium nitroprusside infusions, not clevidipine."
      },
      {
        optionId: "opt-glucose",
        drug: "Epinephrine",
        reasoning: "While epinephrine and some corticosteroids can cause hyperglycemia, clevidipine's primary metabolic impact is related to its lipid emulsion vehicle."
      },
      {
        optionId: "opt-calcium",
        drug: "Clevidipine",
        reasoning: "Although clevidipine is a dihydropyridine calcium channel blocker, it works by blocking L-type calcium channels on vascular smooth muscle. It does not meaningfully alter serum ionized calcium levels."
      }
    ],
    relatedMedicationSlugs: ["clevidipine", "nitroprusside"],
    relatedTopicIds: ["hypertensive-emergency"],
    tags: ["antihypertensives", "toxicity", "monitoring"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "hemo-milrinone-renal",
    challengeType: "organ-failure",
    difficulty: "intermediate",
    system: "Cardiovascular",
    stem: "A 65-year-old patient with acute decompensated heart failure is being considered for an inotropic infusion. Laboratory studies reveal a serum creatinine of 3.2 mg/dL (CrCl 18 mL/min). The team decides to use milrinone. What dosing modification is essential?",
    options: [
      { id: "opt-reduce-dose", text: "Reduce the maintenance infusion rate.", isCorrect: true },
      { id: "opt-no-change", text: "No dosage adjustment is necessary.", isCorrect: false },
      { id: "opt-increase-dose", text: "Increase the dose to overcome protein binding.", isCorrect: false },
      { id: "opt-bolus-only", text: "Administer only as intermittent boluses.", isCorrect: false }
    ],
    explanation: "Milrinone undergoes significant renal elimination (up to 80-90% excreted unchanged in the urine). In patients with severe renal impairment, milrinone clearance is markedly reduced, leading to drug accumulation and an increased risk of severe hypotension and arrhythmias. The maintenance infusion rate must be reduced based on creatinine clearance.",
    whyNotAlternatives: [
      {
        optionId: "opt-no-change",
        drug: "Dobutamine",
        reasoning: "Unlike dobutamine, which is metabolized rapidly in the liver and tissues with a very short half-life (minutes), milrinone has a longer half-life (hours) and heavily depends on renal clearance."
      },
      {
        optionId: "opt-increase-dose",
        drug: "Milrinone",
        reasoning: "Increasing the dose in renal failure would profoundly worsen accumulation and the risk of adverse effects."
      },
      {
        optionId: "opt-bolus-only",
        drug: "Milrinone",
        reasoning: "Bolusing milrinone is often avoided altogether (even in normal renal function) because it frequently causes acute, precipitous hypotension. Maintenance infusions are the standard."
      }
    ],
    relatedMedicationSlugs: ["milrinone", "dobutamine"],
    relatedTopicIds: ["cardiogenic-shock"],
    tags: ["inotropes", "renal-failure", "pharmacokinetics"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "hemo-epinephrine-lactate",
    challengeType: "interaction",
    difficulty: "advanced",
    system: "Cardiovascular",
    stem: "A patient with mixed septic and cardiogenic shock is started on an epinephrine infusion. Four hours later, the patient's MAP improves from 55 mmHg to 70 mmHg, but the serum lactate has increased from 3.0 mmol/L to 6.5 mmol/L. ScvO2 is 75% and urine output is 1 mL/kg/hr. What is the most appropriate interpretation of the rising lactate?",
    options: [
      { id: "opt-aerobic", text: "Aerobic glycolysis stimulated by beta-2 receptor agonism.", isCorrect: true },
      { id: "opt-mesenteric", text: "Profound mesenteric ischemia from severe vasoconstriction.", isCorrect: false },
      { id: "opt-worsening-shock", text: "Worsening global tissue hypoxia due to pump failure.", isCorrect: false },
      { id: "opt-hepatic", text: "Acute hepatic failure blocking lactate clearance.", isCorrect: false }
    ],
    explanation: "Epinephrine profoundly stimulates beta-2 receptors in skeletal muscle, accelerating aerobic glycolysis (breakdown of glycogen to pyruvate). Because the rate of pyruvate production exceeds the capacity of the citric acid cycle, excess pyruvate is converted to lactate. This 'type B' lactic acidosis implies increased production rather than tissue hypoxia, supported by the patient's reassuring MAP, ScvO2, and urine output.",
    whyNotAlternatives: [
      {
        optionId: "opt-mesenteric",
        drug: "Epinephrine",
        reasoning: "While intense vasopressors can cause ischemia, the patient's other perfusion parameters (urine output, ScvO2) have improved, making global hypoperfusion/ischemia less likely as the primary cause of this specific pattern."
      },
      {
        optionId: "opt-worsening-shock",
        drug: "Epinephrine",
        reasoning: "The MAP has reached goal, ScvO2 is normal (75%), and urine output is excellent (1 mL/kg/hr). These suggest global perfusion is adequate, ruling out worsening shock."
      },
      {
        optionId: "opt-hepatic",
        drug: "Epinephrine",
        reasoning: "There is no clinical sign of acute liver failure presented. Epinephrine-induced hyperlactatemia is a well-documented direct metabolic effect."
      }
    ],
    relatedMedicationSlugs: ["epinephrine", "norepinephrine"],
    relatedTopicIds: ["shock", "septic-shock"],
    tags: ["vasopressors", "metabolic", "lactate"],
    references: ["Guidelines and Textbooks"]
  }
];
