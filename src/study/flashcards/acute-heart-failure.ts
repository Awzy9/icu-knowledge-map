import type { Flashcard } from "@/content-types";

export const acuteHeartFailureFlashcards: readonly Flashcard[] = [
  {
    "id": "ahf.fc.four-hemodynamic-profiles",
    "topicId": "acute-heart-failure",
    "question": "What are the 4 Forrester hemodynamic profiles of Acute Heart Failure?",
    "answer": "1. Warm and Dry (compensated); 2. Warm and Wet (congested, normal perfusion); 3. Cold and Wet (congested with hypoperfusion); 4. Cold and Dry (hypovolemic/underfilled).",
    "explanation": "Profiles guide bedside treatment: Warm & Wet requires vasodilators/diuretics; Cold & Wet requires inotropes/MCS plus decongestion.",
    "difficulty": "basic",
    "category": "Classification",
    "references": [
      "Forrester JS et al. Medical therapy of acute myocardial infarction by application of hemodynamic subsets. NEJM 1976."
    ]
  },
  {
    "id": "ahf.fc.dose-trial-diuretics",
    "topicId": "acute-heart-failure",
    "question": "What did the landmark DOSE trial demonstrate regarding high-dose vs low-dose loop diuretics in Acute Decompensated Heart Failure?",
    "answer": "High-dose furosemide (2.5x home oral dose IV) led to greater fluid loss and dyspnea relief without worsening 60-day renal outcomes or mortality compared to low-dose.",
    "explanation": "Felker et al. (NEJM 2011) also proved no difference between continuous IV infusion vs intermittent boluses.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Felker GM et al. Diuretic Strategies in Patients with Acute Decompensated Heart Failure (DOSE). NEJM 2011."
    ]
  },
  {
    "id": "ahf.fc.advor-trial-acetazolamide",
    "topicId": "acute-heart-failure",
    "question": "What did the ADVOR trial find regarding IV Acetazolamide in acute decompensated heart failure with volume overload?",
    "answer": "Adding IV Acetazolamide (500 mg daily) to loop diuretics significantly increased successful decongestion within 3 days (42.2% vs 30.5%).",
    "explanation": "Published in NEJM 2022 (Mullens et al.), proximal nephron sodium blockade with acetazolamide enhances loop diuretic potency in resistant congestion.",
    "difficulty": "advanced",
    "category": "Evidence",
    "references": [
      "Mullens W et al. Acetazolamide in Decompensated Heart Failure with Volume Overload (ADVOR). NEJM 2022."
    ]
  },
  {
    "id": "ahf.fc.advor-trial",
    "topicId": "acute-heart-failure",
    "question": "What did the ADVOR trial demonstrate regarding sequential nephron blockade in acute decompensated heart failure?",
    "answer": "Adding IV Acetazolamide (500 mg daily) to IV loop diuretics significantly increased successful decongestion within 3 days (42.2% vs 30.5%) without increasing renal adverse events.",
    "explanation": "Mullens et al. (NEJM 2022) proved that blocking proximal tubular sodium reclamation with acetazolamide overcomes loop diuretic resistance in fluid-overloaded heart failure.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in acute-heart-failure"
    ]
  },
  {
    "id": "ahf.fc.doose-trial",
    "topicId": "acute-heart-failure",
    "question": "What did the DOOSE (DOSE-AHF) trial demonstrate regarding continuous infusion vs intermittent boluses of furosemide?",
    "answer": "No significant difference in global symptom relief or renal function changes between continuous infusion and intermittent boluses, but high-dose strategy (2.5x home dose) provided more rapid decongestion.",
    "explanation": "Felker et al. (NEJM 2011) established that high-dose loop diuretic protocols safely accelerate fluid removal in acute decompensated heart failure.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in acute-heart-failure"
    ]
  },
  {
    "id": "ahf.fc.hemodynamic-profiles",
    "topicId": "acute-heart-failure",
    "question": "What are the 4 Forrester/Nohria hemodynamic profiles in acute heart failure?",
    "answer": "Warm & Dry (Profile A: normal), Warm & Wet (Profile B: congested, well-perfused - vasodilators/diuretics), Cold & Wet (Profile C: congested, hypoperfused - inotropes/diuretics), Cold & Dry (Profile L: hypoperfused, hypovolemic - cautious fluid).",
    "explanation": "Guides immediate pharmacotherapy based on bedside perfusion (warm vs cold) and congestion (wet vs dry) markers.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in acute-heart-failure"
    ]
  }
];
