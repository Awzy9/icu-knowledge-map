import type { Flashcard } from "@/content-types";

export const meningitisEncephalitisFlashcards: readonly Flashcard[] = [
  {
    "id": "meningitis.fc.dexamethasone-timing",
    "topicId": "meningitis-encephalitis",
    "question": "When should Dexamethasone be administered in acute bacterial meningitis, and what did the de Gans trial show?",
    "answer": "Give Dexamethasone (10 mg IV) prior to or with the first dose of antibiotics; significantly reduced mortality and hearing loss in pneumococcal meningitis.",
    "explanation": "De Gans and van de Beek (NEJM 2002) proved that blunting the inflammatory response from antibiotic-mediated bacterial lysis improves survival in S. pneumoniae meningitis.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "de Gans J, van de Beek D. Dexamethasone in adults with bacterial meningitis. NEJM 2002."
    ]
  },
  {
    "id": "meningitis.fc.empiric-icu-regimen",
    "topicId": "meningitis-encephalitis",
    "question": "What is the standard empiric antimicrobial regimen for community-acquired bacterial meningitis in adults > 50 years or immunocompromised?",
    "answer": "Vancomycin + Ceftriaxone (or Cefotaxime) + Ampicillin (for Listeria monocytogenes) + Acyclovir (if HSV encephalitis is in the differential).",
    "explanation": "Ampicillin is mandatory in adults >50 or immunocompromised to cover Listeria, which is inherently resistant to 3rd-generation cephalosporins.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "IDSA Bacterial Meningitis Guidelines; van de Beek D et al. Lancet Infect Dis 2016."
    ]
  },
  {
    "id": "meningitis.fc.ct-before-lp-indications",
    "topicId": "meningitis-encephalitis",
    "question": "What are the specific clinical criteria requiring Head CT prior to Lumbar Puncture in suspected meningitis?",
    "answer": "1. Focal neurologic deficits; 2. New-onset seizures; 3. Papilledema; 4. Immunocompromise; 5. Moderate-to-severe altered consciousness (GCS < 10).",
    "explanation": "If CT is required, obtain blood cultures and administer empiric antibiotics + dexamethasone immediately BEFORE transporting the patient to the scanner.",
    "difficulty": "intermediate",
    "category": "Guidelines",
    "references": [
      "Hasbun R et al. Computed tomography of the head before lumbar puncture in adults with suspected meningitis. NEJM 2001."
    ]
  },
  {
    "id": "meningitis.fc.empiric-regimen",
    "topicId": "meningitis-encephalitis",
    "question": "What is the standard empiric antibiotic regimen for community-acquired bacterial meningitis in an adult > 50 years or immunocompromised?",
    "answer": "Ceftriaxone 2 g IV q12h + Vancomycin 15-20 mg/kg IV q8-12h + Ampicillin 2 g IV q4h (to cover Listeria monocytogenes) + Acyclovir 10 mg/kg IV q8h.",
    "explanation": "Ampicillin is essential in elderly/immunocompromised patients because cephalosporins have zero activity against Listeria.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in meningitis-encephalitis"
    ]
  },
  {
    "id": "meningitis.fc.hsv-encephalitis-csf",
    "topicId": "meningitis-encephalitis",
    "question": "What CSF findings and initial therapy are characteristic of Herpes Simplex Encephalitis (HSE)?",
    "answer": "CSF with lymphocytic pleocytosis, elevated RBCs/xanthochromia, elevated protein, normal glucose, and positive HSV PCR. Immediate IV Acyclovir (10 mg/kg q8h).",
    "explanation": "HSV-1 causes necrotizing temporal lobe encephalitis. Delaying acyclovir by >24-48 hours drastically worsens mortality and permanent cognitive deficit.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in meningitis-encephalitis"
    ]
  }
];
