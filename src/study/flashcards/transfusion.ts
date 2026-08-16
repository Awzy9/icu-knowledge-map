import type { Flashcard } from "@/content-types";

export const transfusionFlashcards: readonly Flashcard[] = [
  {
    "id": "transfusion.fc.tricc-trial-restrictive-threshold",
    "topicId": "transfusion",
    "question": "What did the landmark TRICC trial establish regarding restrictive vs liberal RBC transfusion in general ICU patients?",
    "answer": "A restrictive threshold (transfuse for Hb < 7.0 g/dL, target 7.0–9.0 g/dL) was as safe as (and in younger/less severely ill patients superior to) a liberal strategy (transfuse for Hb < 10.0 g/dL).",
    "explanation": "Hébert et al. (NEJM 1999) established the 7.0 g/dL transfusion threshold as standard of care across critical care.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Hébert PC et al. A multicenter, randomized, controlled clinical trial of transfusion requirements in critical care (TRICC). NEJM 1999."
    ]
  },
  {
    "id": "transfusion.fc.trali-vs-taco",
    "topicId": "transfusion",
    "question": "How do Transfusion-Related Acute Lung Injury (TRALI) and Transfusion-Associated Circulatory Overload (TACO) differ clinically?",
    "answer": "TRALI is non-cardiogenic pulmonary edema mediated by donor anti-HLA/HNA antibodies causing neutrophil activation (normal CVP/PCWP, fever, hypotension); TACO is hydrostatic cardiogenic volume overload (high CVP/BNP, hypertension, responsive to diuretics).",
    "explanation": "Both present within 6 hours of transfusion with acute respiratory distress, but TACO is managed with diuresis while TRALI requires supportive lung-protective ventilation.",
    "difficulty": "intermediate",
    "category": "Complications",
    "references": [
      "Vlaar APJ et al. A consensus definition of TRALI. Lancet Haematol 2019."
    ]
  },
  {
    "id": "transfusion.fc.platelet-thresholds-procedures",
    "topicId": "transfusion",
    "question": "What are the standard guideline-recommended platelet transfusion thresholds before invasive bedside ICU procedures?",
    "answer": "General bedside procedures / Central line placement: ≥ 20,000–50,000/mcL; Lumbar puncture: ≥ 50,000/mcL; Neurosurgery / Intracranial hemorrhage: ≥ 100,000/mcL.",
    "explanation": "Prophylactic transfusion in non-bleeding ICU patients is typically withheld until platelets fall < 10,000/mcL (PLADO trial).",
    "difficulty": "basic",
    "category": "Guidelines",
    "references": [
      "AABB Clinical Practice Guidelines on Platelet Transfusion. Ann Intern Med 2015."
    ]
  },
  {
    "id": "transfusion.fc.taco-vs-trali",
    "topicId": "transfusion",
    "question": "How do Transfusion-Associated Circulatory Overload (TACO) and Transfusion-Related Acute Lung Injury (TRALI) differ clinically?",
    "answer": "TACO is hydrostatic pulmonary edema (elevated BNP, high CVP/PAWP, responsive to diuresis, hypertension). TRALI is immune non-cardiogenic pulmonary edema (normal BNP/CVP, fever, hypotension, non-responsive to diuresis).",
    "explanation": "Both present with acute hypoxemic respiratory failure within 6 hours of transfusion; TACO requires diuretics and afterload reduction, TRALI requires lung-protective ventilation and hemodynamic support.",
    "difficulty": "intermediate",
    "category": "Complications",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in transfusion"
    ]
  },
  {
    "id": "transfusion.fc.tricc-trial",
    "topicId": "transfusion",
    "question": "What did the landmark TRICC trial establish regarding transfusion thresholds in general ICU patients?",
    "answer": "A restrictive transfusion strategy (transfuse for Hb < 7.0 g/dL, target 7.0-8.0 g/dL) is at least as effective as, and in younger/less severely ill patients superior to, a liberal strategy (transfuse for Hb < 10.0 g/dL).",
    "explanation": "Hebert et al. (NEJM 1999) proved restrictive transfusion reduced transfusion exposure, infections, and cardiac events without increasing mortality.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in transfusion"
    ]
  },
  {
    "id": "transfusion.fc.platelet-refractoriness",
    "topicId": "transfusion",
    "question": "What is Platelet Refractoriness and how is it calculated?",
    "answer": "Failure to achieve expected platelet count increase 1 hour post-transfusion. Corrected Count Increment (CCI) < 5,000-7,500/uL at 1 hour on 2 occasions indicates refractoriness (due to HLA alloimmunization, sepsis, splenomegaly, or consumption).",
    "explanation": "Calculate CCI = (Post-count - Pre-count) × Body Surface Area (m2) / Platelets transfused (10^11).",
    "difficulty": "advanced",
    "category": "Diagnosis",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in transfusion"
    ]
  }
];
