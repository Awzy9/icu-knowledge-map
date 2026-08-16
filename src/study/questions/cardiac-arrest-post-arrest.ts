import type { Question } from "@/content-types";

export const cardiacArrestPostArrestQuestions: readonly Question[] = [
  {
    "id": "cardiac-arrest-post-arrest.q.1",
    "topicId": "cardiac-arrest-post-arrest",
    "sectionId": "cardiac-arrest-post-arrest.temperature-management",
    "stem": "A 58-year-old male is admitted to the ICU comatose following resuscitation from out-of-hospital ventricular fibrillation arrest. Per current ILCOR guidelines and the TTM2 trial, what is the most appropriate targeted temperature management strategy?",
    "options": [
      {
        "id": "a",
        "text": "Target deep hypothermia to 28-30°C for 48 hours",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Maintain targeted normothermia (<= 37.5°C) with active fever prevention using a feedback cooling device for at least 72 hours",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Permit unmanaged fever up to 39°C to stimulate endogenous immune response",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Induce hypothermia to 33°C only if the patient develops clinical seizures",
        "isCorrect": false
      }
    ],
    "explanation": "The landmark TTM2 trial (n=1900) showed that targeted normothermia (<= 37.5°C) with active device cooling if temperature reaches >= 37.8°C is equivalent to targeted hypothermia (33°C) in 6-month survival and neurologic outcome, while causing fewer arrhythmias.",
    "difficulty": "basic",
    "references": [
      {
        "kind": "trial",
        "id": "cardiac-arrest-ttm2-trial",
        "relevance": "Direct source of this finding."
      }
    ]
  },
  {
    "id": "cardiac-arrest-post-arrest.q.2",
    "topicId": "cardiac-arrest-post-arrest",
    "sectionId": "cardiac-arrest-post-arrest.neuroprognostication",
    "stem": "A comatose post-cardiac arrest patient is being evaluated 24 hours post-ROSC while sedated with propofol and fentanyl. The resident suggests withdrawing life-sustaining therapy because pupillary reflexes are sluggish. What is the most appropriate next step?",
    "options": [
      {
        "id": "a",
        "text": "Agree with withdrawal since early examination is definitive",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Order an immediate head CT and withdraw therapy if normal",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Delay multimodal neuroprognostication until at least 72 hours post-ROSC after sedative clearance",
        "isCorrect": true
      },
      {
        "id": "d",
        "text": "Declare brain death immediately based on the 24-hour exam",
        "isCorrect": false
      }
    ],
    "explanation": "International guidelines mandate delaying multimodal neuroprognostication until at least 72 hours post-ROSC to eliminate confounding from residual sedatives and permit potential delayed neurocognitive recovery.",
    "difficulty": "intermediate",
    "references": [
      "AHA/ERC/ILCOR Guidelines 2021"
    ]
  },
  {
    "id": "cardiac-arrest-post-arrest.q.3",
    "topicId": "cardiac-arrest-post-arrest",
    "sectionId": "cardiac-arrest-post-arrest.post-rosc-hemodynamics",
    "stem": "A 62-year-old female with ROSC after cardiac arrest without ST-elevation on ECG is hemodynamically stable in the ICU. According to the COACT trial, what is the best strategy regarding coronary angiography?",
    "options": [
      {
        "id": "a",
        "text": "Emergent immediate coronary catheterization within 2 hours is mandatory for survival",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Delayed coronary evaluation after neurological stabilization is safe and provides equivalent survival",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Coronary angiography should be permanently avoided in post-arrest patients",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Emergent CABG is indicated within 6 hours",
        "isCorrect": false
      }
    ],
    "explanation": "The COACT randomized trial demonstrated that immediate emergent coronary angiography provided no 90-day survival benefit over delayed angiography in hemodynamically stable post-arrest patients without ST-segment elevation.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "trial",
        "id": "cardiac-arrest-coact-trial",
        "relevance": "COACT trial evidence."
      }
    ]
  },
  {
    "id": "cardiac-arrest-post-arrest.q.4",
    "topicId": "cardiac-arrest-post-arrest",
    "sectionId": "cardiac-arrest-post-arrest.post-rosc-hemodynamics",
    "stem": "Why must hyperoxia (PaO2 > 200-300 mmHg) be strictly avoided during post-ROSC ICU care?",
    "options": [
      {
        "id": "a",
        "text": "It causes profound hypothermia",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "It generates reactive oxygen species (ROS) that accelerate neuronal apoptotic cell death during cerebral reperfusion",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "It converts hemoglobin into methemoglobin",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "It inhibits cardiac contractility directly",
        "isCorrect": false
      }
    ],
    "explanation": "Reperfusion of ischemic brain tissue in the presence of hyperoxia accelerates reactive oxygen species generation, lipid peroxidation, and mitochondrial injury. Target SpO2 92-98% (PaO2 70-100 mmHg).",
    "difficulty": "basic",
    "references": [
      "AHA/ERC Post-Resuscitation Guidelines 2021"
    ]
  },
  {
    "id": "cardiac-arrest-post-arrest.q.5",
    "topicId": "cardiac-arrest-post-arrest",
    "sectionId": "cardiac-arrest-post-arrest.neuroprognostication",
    "stem": "Which of the following neurophysiologic testing results at >= 72 hours post-ROSC is most strongly predictive of a poor neurological outcome with a false-positive rate < 1%?",
    "options": [
      {
        "id": "a",
        "text": "Continuous reactive EEG background",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Bilaterally absent N20 cortical responses on somatosensory evoked potentials (SSEP)",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Serum troponin > 10 ng/mL",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Absence of shivering during rewarming",
        "isCorrect": false
      }
    ],
    "explanation": "Bilaterally absent cortical N20 SSEP potentials after median nerve stimulation tested >= 72 hours post-ROSC reliably indicates extensive neocortical death with a false-positive rate < 1%.",
    "difficulty": "advanced",
    "references": [
      "AAN Neuroprognostication Guidelines"
    ]
  }
];
