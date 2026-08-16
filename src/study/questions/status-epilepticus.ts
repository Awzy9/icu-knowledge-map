import type { Question } from "@/content-types";

export const statusEpilepticusQuestions: readonly Question[] = [
  {
    "id": "se.q.esett-trial-equivalence",
    "topicId": "status-epilepticus",
    "stem": "A 45-year-old man continues to have generalized tonic-clonic seizures despite receiving two full doses of IV Lorazepam (total 8 mg IV). According to the ESETT trial (NEJM 2019), which second-line IV antiepileptic drug has proven superior efficacy?",
    "options": [
      {
        "id": "a",
        "text": "IV Fosphenytoin is superior to Levetiracetam and Valproate",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "IV Levetiracetam (60 mg/kg), IV Fosphenytoin (20 mg PE/kg), and IV Valproate (40 mg/kg) have statistically equivalent efficacy (~47% seizure termination)",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "IV Valproate is superior due to broad-spectrum enzyme inhibition",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "IV Phenobarbital is superior to all three newer agents",
        "isCorrect": false
      }
    ],
    "explanation": "The ESETT randomized trial (NEJM 2019, n=384) established that Levetiracetam, Fosphenytoin, and Valproate each successfully terminated status epilepticus in ~45–47% of patients with no significant difference in efficacy or safety endpoints.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Kapur J et al. ESETT Trial. NEJM 2019."
    ]
  },
  {
    "id": "se.q.rampart-prehospital-midazolam",
    "topicId": "status-epilepticus",
    "stem": "In the landmark RAMPART trial (NEJM 2012), what was demonstrated regarding intramuscular (IM) Midazolam compared to intravenous (IV) Lorazepam for the early treatment of status epilepticus?",
    "options": [
      {
        "id": "a",
        "text": "IM Midazolam was non-inferior to IV Lorazepam in terminating seizures and resulted in faster administration and fewer ICU admissions.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "IV Lorazepam was significantly more effective due to higher peak bioavailability.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "IM Midazolam caused unacceptably high rates of respiratory arrest.",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Both drugs failed in over 80% of patients.",
        "isCorrect": false
      }
    ],
    "explanation": "RAMPART demonstrated that IM Midazolam (10 mg via autoinjector) stopped seizures before ED arrival in 73.4% of patients compared to 63.4% with IV Lorazepam (4 mg), primarily because IM administration eliminated delays associated with establishing IV access.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Silbergleit R et al. RAMPART Trial. NEJM 2012."
    ]
  }
,
  {
    id: "se.q.esett-trial-equivalency",
    topicId: "status-epilepticus",
    stem: "What was the definitive finding of the ESETT landmark randomized trial (NEJM 2019) comparing second-line IV antiseizure medications (Levetiracetam 60 mg/kg, Fosphenytoin 20 mg PE/kg, and Sodium Valproate 40 mg/kg) in benzodiazepine-refractory convulsive status epilepticus?",
    options: [
      { id: "a", text: "Levetiracetam was vastly superior in efficacy to both fosphenytoin and valproate.", isCorrect: false },
      { id: "b", text: "All three second-line agents achieved similar rates of seizure cessation and improved alertness at 60 minutes (~45–47%) with similar safety profiles; none was proven superior to the others.", isCorrect: true },
      { id: "c", text: "Fosphenytoin caused massive cardiovascular collapse and is no longer recommended.", isCorrect: false },
      { id: "d", text: "Immediate general anesthesia was superior to all three non-sedating agents.", isCorrect: false }
    ],
    explanation: "The ESETT trial (NEJM 2019, n=384) showed that levetiracetam (60 mg/kg, max 4500 mg), fosphenytoin (20 mg PE/kg, max 1500 mg PE), and valproate (40 mg/kg, max 3000 mg) had statistically indistinguishable efficacy (47%, 45%, 46% seizure termination at 60 min) and low adverse event rates, confirming all three as equivalent first-choice second-line alternatives.",
    difficulty: "intermediate",
    category: "Evidence",
    references: [
      "Kapur J, et al. ESETT Trial. NEJM 2019; AES 2016 Guidelines."
    ]
  }
];
