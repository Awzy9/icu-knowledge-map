import type { Flashcard } from "@/content-types";

export const acuteLiverFailureFlashcards: readonly Flashcard[] = [
  {
    "id": "alf.fc.kings-college-criteria",
    "topicId": "acute-liver-failure",
    "question": "What are the King's College Criteria for emergency liver transplantation in Acetaminophen vs Non-Acetaminophen Acute Liver Failure?",
    "answer": "Acetaminophen: Arterial pH < 7.30 after resuscitation OR all 3 of: INR > 6.5, Creatinine > 3.4 mg/dL, and Grade III/IV encephalopathy. Non-Acetaminophen: INR > 6.5 OR any 3 of: age <10 or >40, etiology (non-A/B/C hepatitis, halothane, idiosyncratic drug), jaundice-to-encephalopathy >7 days, INR > 3.5, bilirubin > 17.5 mg/dL.",
    "explanation": "King's College Criteria identify patients with <15–20% spontaneous survival who urgently require liver transplantation.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "O'Grady JG et al. Early indicators of prognosis in fulminant hepatic failure (King's College Criteria). Gastroenterology 1989."
    ]
  },
  {
    "id": "alf.fc.n-acetylcysteine-non-acetaminophen",
    "topicId": "acute-liver-failure",
    "question": "What did the ALFSG trial conclude regarding IV N-Acetylcysteine (NAC) in non-acetaminophen acute liver failure?",
    "answer": "IV NAC significantly improved transplant-free survival (40% vs 27%) and overall survival in patients with early-stage (Grade I–II) encephalopathy.",
    "explanation": "Lee et al. (Gastroenterology 2009) showed NAC provides antioxidant protection, improves microvascular hepatic blood flow, and improves hemodynamics across diverse ALF etiologies.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Lee WM et al. Intravenous N-acetylcysteine improves transplant-free survival in early stage non-acetaminophen acute liver failure. Gastroenterology 2009."
    ]
  },
  {
    "id": "alf.fc.cerebral-edema-ammonia-threshold",
    "topicId": "acute-liver-failure",
    "question": "What arterial ammonia concentration threshold correlates with severe intracranial hypertension and brain herniation in ALF?",
    "answer": "Arterial ammonia > 150–200 mcmol/L.",
    "explanation": "Excess ammonia crosses the blood-brain barrier and is converted to glutamine in astrocytes by glutamine synthetase, causing severe intracellular cytotoxic cerebral edema.",
    "difficulty": "basic",
    "category": "Monitoring",
    "references": [
      "Bernal W et al. Acute liver failure. Lancet 2010."
    ]
  },
  {
    "id": "alf.fc.cerebral-edema-ammonia",
    "topicId": "acute-liver-failure",
    "question": "What arterial ammonia threshold is strongly associated with intracranial hypertension and brain herniation in Acute Liver Failure?",
    "answer": "Arterial ammonia > 150-200 mcg/dL (or > 100-150 mcmol/L).",
    "explanation": "Ammonia crosses the blood-brain barrier and is converted to glutamine inside astrocytes, causing severe astrocyte swelling, cytotoxic brain edema, and fatal herniation.",
    "difficulty": "intermediate",
    "category": "Physiology",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in acute-liver-failure"
    ]
  },
  {
    "id": "alf.fc.nac-non-apap",
    "topicId": "acute-liver-failure",
    "question": "What is the evidence for N-Acetylcysteine (NAC) in NON-acetaminophen acute liver failure?",
    "answer": "The ALFSG randomized trial (Gastroenterology 2009) showed IV NAC significantly improved transplant-free survival (40% vs 27%) in early-stage (Grade I-II) non-APAP ALF.",
    "explanation": "NAC improves microcirculatory hepatic blood flow, acts as an antioxidant, and reduces systemic inflammatory response even without APAP.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in acute-liver-failure"
    ]
  }
];
