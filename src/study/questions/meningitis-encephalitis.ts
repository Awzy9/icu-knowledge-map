import type { Question } from "@/content-types";

export const meningitisEncephalitisQuestions: readonly Question[] = [
  {
    "id": "meningitis.q.dexamethasone-timing-priority",
    "topicId": "meningitis-encephalitis",
    "stem": "A 52-year-old man presents with fever, nuchal rigidity, and altered mental status. Lumbar puncture shows cloudy CSF with 4,000 neutrophils/mcL, elevated protein, and low glucose. Gram stain shows Gram-positive diplococci (Streptococcus pneumoniae). What is the critical timing requirement for IV Dexamethasone?",
    "options": [
      {
        "id": "a",
        "text": "Administer Dexamethasone 10 mg IV immediately before or concurrently with the first dose of antibiotics.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Start Dexamethasone 24 hours after antibiotics have sterilized the CSF.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Dexamethasone is only indicated if the patient develops acute hearing loss.",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Give Dexamethasone only if cultures grow Gram-negative rods.",
        "isCorrect": false
      }
    ],
    "explanation": "The European multicenter randomized trial by de Gans and van de Beek (NEJM 2002) demonstrated that Dexamethasone (10 mg IV q6h for 4 days) initiated before or with the first antibiotic dose reduced 8-week mortality from 34% to 14% in pneumococcal meningitis. Giving steroids after antibiotics provides no benefit.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "de Gans J, van de Beek D. NEJM 2002; IDSA Guidelines."
    ]
  }
,
  {
    id: "mening.q.dexamethasone-timing",
    topicId: "meningitis-encephalitis",
    stem: "What is the correct timing and indication for adjunctive IV Dexamethasone (10 mg IV q6h for 4 days) in suspected bacterial meningitis based on the de Gans landmark trial?",
    options: [
      { id: "a", text: "Give dexamethasone 24 hours after antibiotics have sterilized the CSF.", isCorrect: false },
      { id: "b", text: "Administer dexamethasone BEFORE or CONCURRENTLY with the first dose of empiric antibiotics; continue if Streptococcus pneumoniae is confirmed, and stop if another organism is identified.", isCorrect: true },
      { id: "c", text: "Dexamethasone is contraindicated in all central nervous system infections.", isCorrect: false },
      { id: "d", text: "Give dexamethasone only if the opening pressure is > 40 cmH2O.", isCorrect: false }
    ],
    explanation: "The de Gans trial (NEJM 2002) demonstrated that early IV dexamethasone (10 mg IV given with or before the first antibiotic dose) significantly reduced mortality and neurological sequelae (including hearing loss) in adults with Streptococcus pneumoniae meningitis. Dexamethasone blunts subarachnoid inflammatory cascade triggered by antibiotic-induced bacterial lysis. If S. pneumoniae is ruled out, steroids can be stopped.",
    difficulty: "intermediate",
    category: "Management",
    references: [
      "de Gans J, et al. NEJM 2002; IDSA Bacterial Meningitis Guidelines."
    ]
  },
  {
    id: "mening.q.acyclovir-encephalitis",
    topicId: "meningitis-encephalitis",
    stem: "A 45-year-old with fever, acute confusion, temporal lobe seizures, and RBCs in the CSF on lumbar puncture has suspected Herpes Simplex Virus (HSV-1) encephalitis. What is the immediate treatment of choice?",
    options: [
      { id: "a", text: "Wait for CSF HSV PCR results (24-48 hours) before starting antivirals.", isCorrect: false },
      { id: "b", text: "Immediate IV Acyclovir 10 mg/kg q8h with adequate IV hydration to prevent crystalline nephropathy.", isCorrect: true },
      { id: "c", text: "Oral Valacyclovir 1 g TID.", isCorrect: false },
      { id: "d", text: "High-dose methylprednisolone pulse therapy alone.", isCorrect: false }
    ],
    explanation: "HSV encephalitis has high mortality (>70% if untreated) and permanent neurocognitive morbidity. Empiric IV Acyclovir (10 mg/kg actual body weight IV every 8 hours) must be initiated immediately upon suspicion without waiting for PCR results. Adequate hydration prevents tubular crystallization and AKI.",
    difficulty: "basic",
    category: "Management",
    references: [
      "IDSA Encephalitis Guidelines; Whitley RJ. NEJM 2006."
    ]
  }
];
