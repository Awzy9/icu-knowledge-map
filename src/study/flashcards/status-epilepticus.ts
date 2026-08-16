import type { Flashcard } from "@/content-types";

export const statusEpilepticusFlashcards: readonly Flashcard[] = [
  {
    "id": "se.fc.operational-definition-t1-t2",
    "topicId": "status-epilepticus",
    "question": "What are the ILAE operational timepoints (t1 and t2) defining Status Epilepticus?",
    "answer": "t1 (5 minutes): Time to initiate treatment (seizure unlikely to self-terminate); t2 (30 minutes): Time when irreversible neuronal injury and pharmacoresistance begin.",
    "explanation": "The International League Against Epilepsy (ILAE 2015) defines status epilepticus at 5 minutes to mandate emergent benzodiazepine therapy rather than waiting.",
    "difficulty": "basic",
    "category": "Definition",
    "references": [
      "Trinka E et al. A definition and classification of status epilepticus (ILAE). Epilepsia 2015."
    ]
  },
  {
    "id": "se.fc.first-line-benzodiazepine-dosing",
    "topicId": "status-epilepticus",
    "question": "What are the guideline-recommended first-line benzodiazepine regimens and doses for status epilepticus?",
    "answer": "IV Lorazepam (0.1 mg/kg, standard 4 mg IV bolus) OR IM Midazolam (10 mg IM if >40 kg, 5 mg if 13–40 kg).",
    "explanation": "The RAMPART trial (NEJM 2012) proved IM Midazolam is non-inferior (and faster to administer prehospital) than IV Lorazepam.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Silbergleit R et al. RAMPART Trial. NEJM 2012; AES Guidelines 2016."
    ]
  },
  {
    "id": "se.fc.esett-trial-three-agents",
    "topicId": "status-epilepticus",
    "question": "What did the landmark ESETT trial find regarding second-line antiepileptic drugs in benzodiazepine-refractory status epilepticus?",
    "answer": "IV Levetiracetam (60 mg/kg), IV Fosphenytoin (20 mg PE/kg), and IV Valproate (40 mg/kg) had identical efficacy (~47% seizure cessation at 60 min) and equivalent safety.",
    "explanation": "Published in NEJM 2019 (Kapur et al.), all three drugs are equally valid second-line choices following benzodiazepine failure.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Kapur J et al. Randomized trial of three drugs for status epilepticus (ESETT). NEJM 2019."
    ]
  },
  {
    "id": "se.fc.refractory-status-anesthetics",
    "topicId": "status-epilepticus",
    "question": "What defines Refractory Status Epilepticus (RSE), and what is the treatment strategy?",
    "answer": "Persistent seizures despite adequate first-line benzodiazepine AND second-line AED; requires ICU intubation, continuous anesthetic infusions (Propofol, Midazolam, or Ketamine), and cEEG targeting burst suppression.",
    "explanation": "Continuous EEG monitoring is mandatory to confirm electrographic cessation, as clinical motor manifestations often subside while cortical seizures continue.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Glauser T et al. American Epilepsy Society Guidelines. Epilepsy Curr 2016."
    ]
  },
  {
    "id": "se.fc.gaba-receptor-internalization",
    "topicId": "status-epilepticus",
    "question": "Why do benzodiazepines lose efficacy as seizure duration exceeds 15–30 minutes?",
    "answer": "Synaptic GABA-A receptors undergo clathrin-mediated endocytosis and internalization, while excitatory NMDA/AMPA receptors migrate to the synaptic membrane.",
    "explanation": "This receptor trafficking explains why benzodiazepine resistance develops rapidly, necessitating early second-line AEDs and NMDA-active agents (Ketamine).",
    "difficulty": "advanced",
    "category": "Pathophysiology",
    "references": [
      "Naylor DE et al. Trafficking of GABA(A) receptors, loss of inhibition, and status epilepticus. J Neurosci 2005."
    ]
  }
];
