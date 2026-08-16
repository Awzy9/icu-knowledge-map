import type { Flashcard } from "@/content-types";

export const crrtFlashcards: readonly Flashcard[] = [
  {
    "id": "crrt.fc.delivered-dose-kdigo",
    "topicId": "crrt",
    "question": "What is the KDIGO guideline-recommended delivered effluent dose for CRRT in acute kidney injury?",
    "answer": "20 to 25 mL/kg/hour delivered effluent dose (prescribe 25–30 mL/kg/h to account for interruptions).",
    "explanation": "The RENAL (NEJM 2009) and ATN (NEJM 2008) trials proved that higher effluent doses (35–40 mL/kg/h) provide no mortality or renal recovery benefit over 20–25 mL/kg/h.",
    "difficulty": "basic",
    "category": "Guidelines",
    "references": [
      "KDIGO AKI Guidelines 2012; RENAL Replacement Therapy Study. NEJM 2009."
    ]
  },
  {
    "id": "crrt.fc.regional-citrate-anticoagulation",
    "topicId": "crrt",
    "question": "Why is Regional Citrate Anticoagulation (RCA) recommended as first-line anticoagulation for CRRT over systemic heparin?",
    "answer": "RCA prolongs circuit life and significantly reduces major patient bleeding complications.",
    "explanation": "Citrate chelates calcium pre-filter (inhibiting the coagulation cascade inside the circuit); calcium is replaced post-filter before blood returns to the patient, leaving systemic coagulation intact.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "KDIGO AKI Guidelines 2012; Cochrane Review on Anticoagulation for CRRT."
    ]
  },
  {
    "id": "crrt.fc.citrate-toxicity-triad",
    "topicId": "crrt",
    "question": "What laboratory findings indicate Citrate Toxicity ('Citrate Lock') during CRRT?",
    "answer": "1. Widened Total-to-Ionized Calcium ratio (> 2.5); 2. Refractory systemic ionized hypocalcemia; 3. Worsening High Anion Gap Metabolic Acidosis.",
    "explanation": "Occurs when impaired hepatic or skeletal muscle metabolism fails to metabolize citrate to bicarbonate, causing circulating calcium-citrate complexes to accumulate.",
    "difficulty": "advanced",
    "category": "Complications",
    "references": [
      "Schneider AG et al. Citrate anticoagulation in CRRT. Critical Care 2017."
    ]
  },
  {
    "id": "crrt.fc.diffusion-vs-convection",
    "topicId": "crrt",
    "question": "What is the physical difference between Diffusion (CVVHD) and Convection (CVVH) in CRRT?",
    "answer": "Diffusion relies on a concentration gradient across the membrane (optimal for small solutes like urea/K+); Convection uses solvent drag created by hydrostatic transmembrane pressure (superior for middle molecules).",
    "explanation": "Continuous Veno-Venous Hemodiafiltration (CVVHDF) combines both mechanisms for broad solute clearance.",
    "difficulty": "intermediate",
    "category": "Pathophysiology",
    "references": [
      "Irwin and Rippe's Intensive Care Medicine, 9th Edition."
    ]
  },
  {
    "id": "crrt.fc.effluent-dose-target",
    "topicId": "crrt",
    "question": "What is the recommended delivered effluent dose in CRRT, and what did the RENAL and ATN trials prove?",
    "answer": "Prescribe 25-30 mL/kg/h to deliver 20-25 mL/kg/h. RENAL (NEJM 2009) and ATN (NEJM 2008) proved higher effluent doses (35-40 mL/kg/h) do NOT reduce mortality and increase electrolyte/drug clearance.",
    "explanation": "Prescribing slightly above 20-25 mL/kg/h accounts for downtime due to circuit changes, bag replacements, and patient transport.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in crrt"
    ]
  },
  {
    "id": "crrt.fc.citrate-anticoagulation",
    "topicId": "crrt",
    "question": "Why is Regional Citrate Anticoagulation (RCA) preferred over systemic heparin for CRRT circuits?",
    "answer": "Citrate chelates calcium in the circuit to prevent clotting without causing systemic anticoagulation, significantly prolonging filter lifespan and reducing patient bleeding complications (RICH trial).",
    "explanation": "Monitor post-filter ionized calcium (target 0.25-0.35 mmol/L) and systemic ionized calcium (target 1.1-1.3 mmol/L) with IV calcium chloride replacement.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in crrt"
    ]
  },
  {
    "id": "crrt.fc.citrate-toxicity-ratio",
    "topicId": "crrt",
    "question": "What lab finding indicates Citrate Accumulation ('Citrate Lock') during CRRT with citrate anticoagulation?",
    "answer": "Total Serum Calcium to Ionized Calcium ratio > 2.5 (Total Ca / iCa > 2.5), accompanied by worsening high anion gap metabolic acidosis and refractory hypocalcemia.",
    "explanation": "Occurs in severe liver failure or hypoperfusion when hepatic mitochondria cannot metabolize calcium-citrate complexes into bicarbonate.",
    "difficulty": "advanced",
    "category": "Complications",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in crrt"
    ]
  }
];
