import type { Flashcard } from "@/content-types";

export const acuteAorticSyndromesFlashcards: readonly Flashcard[] = [
  {
    "id": "acute-aortic-syndromes.fc.1",
    "topicId": "acute-aortic-syndromes",
    "sectionId": "acute-aortic-syndromes.stanford-classification",
    "question": "How does the Stanford classification categorize acute aortic dissections and what are the surgical implications?",
    "answer": "Stanford Type A involves the ascending aorta (requires immediate open surgical repair); Stanford Type B does not involve the ascending aorta (managed primarily with medical anti-impulse therapy or selective TEVAR for complicated/high-risk cases).",
    "explanation": "Type A carries high mortality in the first 24-48 hours if untreated due to risk of pericardial rupture/tamponade, coronary occlusion, or acute aortic regurgitation.",
    "difficulty": "basic",
    "references": [
      "2022 ACC/AHA Aortic Disease Guideline"
    ]
  },
  {
    "id": "acute-aortic-syndromes.fc.2",
    "topicId": "acute-aortic-syndromes",
    "sectionId": "acute-aortic-syndromes.anti-impulse-therapy",
    "question": "What is the critical sequence of pharmacotherapy in anti-impulse therapy for acute aortic dissection?",
    "answer": "Administer IV Beta-blocker (Esmolol or Labetalol) FIRST to achieve heart rate control (~60-80 bpm, where tolerated), then add IV Vasodilator (Nicardipine/Clevidipine/Nitroprusside) if SBP remains >= 120 mmHg.",
    "explanation": "Vasodilators given without prior beta-blockade cause reflex tachycardia, increasing dP/dt (shear stress) and propagating dissection tears.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "guideline",
        "id": "aortic-syndromes-guideline-acc-aha-2022",
        "relevance": "Defines anti-impulse sequencing."
      }
    ]
  },
  {
    "id": "acute-aortic-syndromes.fc.3",
    "topicId": "acute-aortic-syndromes",
    "sectionId": "acute-aortic-syndromes.anti-impulse-therapy",
    "question": "What are the target heart rate and blood pressure goals in acute aortic dissection?",
    "answer": "Heart rate ~60-80 bpm, where tolerated and clinically appropriate, and Systolic Blood Pressure < 120 mmHg or the lowest BP that maintains adequate end-organ perfusion.",
    "explanation": "Minimizes left ventricular ejection force (dP/dt) and systemic wall tension (Laplace law); these are titration targets, not rigid universal cutoffs for every patient.",
    "difficulty": "basic",
    "references": [
      "2022 ACC/AHA Guideline"
    ]
  },
  {
    "id": "acute-aortic-syndromes.fc.4",
    "topicId": "acute-aortic-syndromes",
    "sectionId": "acute-aortic-syndromes.stanford-classification",
    "question": "What clinical features define complicated Stanford Type B aortic dissection requiring urgent intervention (TEVAR)?",
    "answer": "Established complications including: 1. Aortic rupture or impending rupture, 2. Branch-vessel occlusion/malperfusion (mesenteric, renal, spinal, or limb ischemia), 3. Dissection extension or progressive aortic enlargement, 4. Intractable/refractory pain, and 5. Uncontrolled hypertension despite maximal medical therapy.",
    "explanation": "Complicated Type B generally warrants TEVAR when anatomy is suitable (open/hybrid otherwise). Separate high-risk anatomical features in uncomplicated Type B (e.g. false lumen diameter >20-22 mm, primary entry tear >10 mm or on lesser curve) may prompt individualized consideration of pre-emptive TEVAR, but a high-risk feature alone is not an automatic TEVAR indication.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "trial",
        "id": "aortic-syndromes-instead-xl-trial",
        "relevance": "TEVAR in Type B dissection."
      }
    ]
  },
  {
    "id": "acute-aortic-syndromes.fc.5",
    "topicId": "acute-aortic-syndromes",
    "sectionId": "acute-aortic-syndromes.overview",
    "question": "What three distinct entities comprise Acute Aortic Syndrome (AAS)?",
    "answer": "1. Classic Aortic Dissection, 2. Intramural Hematoma (IMH), 3. Penetrating Atherosclerotic Ulcer (PAU).",
    "explanation": "All three present with severe acute chest/back pain and carry high risk of aortic rupture or progression.",
    "difficulty": "basic",
    "references": [
      "Irwin & Rippe 9th Edition"
    ]
  },
  {
    "id": "acute-aortic-syndromes.fc.6",
    "topicId": "acute-aortic-syndromes",
    "sectionId": "acute-aortic-syndromes.diagnosis-complications",
    "question": "Why is aggressive pericardiocentesis generally avoided in acute Stanford Type A dissection with hemopericardium?",
    "answer": "Complete aspiration of pericardial blood relieves the tamponade counterpressure on the aortic tear, which can accelerate active bleeding from the false lumen into the pericardium. Emergent surgery is definitive.",
    "explanation": "Controlled, minimal aspiration is strictly considered as a brief temporizing bridge if catastrophic obstructive shock is present prior to emergent sternotomy.",
    "difficulty": "advanced",
    "references": [
      "Oh's Intensive Care Manual 9th Edition"
    ]
  },
  {
    "id": "acute-aortic-syndromes.fc.7",
    "topicId": "acute-aortic-syndromes",
    "sectionId": "acute-aortic-syndromes.diagnosis-complications",
    "question": "What is the definitive first-line diagnostic imaging for suspected acute aortic syndrome?",
    "answer": "ECG-gated Contrast-Enhanced CT Angiography (CTA) of the chest, abdomen, and pelvis.",
    "explanation": "Provides >98% sensitivity and specificity, maps intimal flap extent, entry tears, and branch vessel malperfusion.",
    "difficulty": "basic",
    "references": [
      "ACC/AHA Guidelines 2022"
    ]
  },
  {
    "id": "acute-aortic-syndromes.fc.8",
    "topicId": "acute-aortic-syndromes",
    "sectionId": "acute-aortic-syndromes.anti-impulse-therapy",
    "question": "Which IV antihypertensive agent is preferred if beta-blockers are strictly contraindicated in acute dissection?",
    "answer": "Non-dihydropyridine calcium channel blockers: IV Diltiazem or IV Verapamil.",
    "explanation": "Provides both negative inotropy/chronotropy (reducing dP/dt) and peripheral vasodilation.",
    "difficulty": "intermediate",
    "references": [
      "ACC/AHA Guidelines 2022"
    ]
  }
];
