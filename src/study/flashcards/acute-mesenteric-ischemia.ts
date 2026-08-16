import type { Flashcard } from "@/content-types";

export const acuteMesentericIschemiaFlashcards: readonly Flashcard[] = [
  {
    "id": "acute-mesenteric-ischemia.fc.1",
    "topicId": "acute-mesenteric-ischemia",
    "sectionId": "acute-mesenteric-ischemia.overview",
    "question": "What are the four primary subtypes of acute mesenteric ischemia and their relative frequencies?",
    "answer": "1. SMA Embolism (~50%), 2. SMA Thrombosis (~25%), 3. Non-Occlusive Mesenteric Ischemia (NOMI, ~20%), 4. Mesenteric Venous Thrombosis (MVT, ~5-10%).",
    "explanation": "SMA embolism is cardioembolic; thrombosis occurs on chronic atherosclerosis; NOMI occurs in low-output shock.",
    "difficulty": "basic",
    "references": [
      "2022 WSES Mesenteric Ischemia Guidelines"
    ]
  },
  {
    "id": "acute-mesenteric-ischemia.fc.2",
    "topicId": "acute-mesenteric-ischemia",
    "sectionId": "acute-mesenteric-ischemia.recognition-diagnosis",
    "question": "What is the classic clinical presentation of acute mesenteric arterial ischemia?",
    "answer": "Severe, unremitting abdominal pain out of proportion to physical examination findings (soft, non-tender abdomen in early stages).",
    "explanation": "Peritoneal signs (guarding, rigidity) develop late and indicate transmural bowel infarction and perforation.",
    "difficulty": "basic",
    "references": [
      "Irwin & Rippe 9th Edition"
    ]
  },
  {
    "id": "acute-mesenteric-ischemia.fc.3",
    "topicId": "acute-mesenteric-ischemia",
    "sectionId": "acute-mesenteric-ischemia.recognition-diagnosis",
    "question": "Why does a normal serum lactate level NOT rule out early acute mesenteric ischemia?",
    "answer": "Lactate elevation occurs late, only after transmural bowel gangrene and mucosal barrier necrosis have already occurred. Early mucosal ischemia has normal lactate.",
    "explanation": "Relying on lactate elevation before ordering imaging leads to unacceptably high mortality.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "guideline",
        "id": "mesenteric-ischemia-guideline-wses-2022",
        "relevance": "WSES guideline warning against lactate reliance."
      }
    ]
  },
  {
    "id": "acute-mesenteric-ischemia.fc.4",
    "topicId": "acute-mesenteric-ischemia",
    "sectionId": "acute-mesenteric-ischemia.recognition-diagnosis",
    "question": "What is the diagnostic imaging of choice for acute mesenteric ischemia?",
    "answer": "Biphasic Multidetector CT Angiography (CTA) of the abdomen and pelvis (arterial and portal venous phases without oral contrast).",
    "explanation": "Sensitivity ~94%, specificity ~96%; visualizes vessel cutoffs, bowel wall thinning/pneumatosis, and portal venous gas.",
    "difficulty": "basic",
    "references": [
      "WSES Guidelines 2022"
    ]
  },
  {
    "id": "acute-mesenteric-ischemia.fc.5",
    "topicId": "acute-mesenteric-ischemia",
    "sectionId": "acute-mesenteric-ischemia.icu-management-revascularization",
    "question": "What is the immediate initial pharmacologic intervention upon suspicion of AMI?",
    "answer": "Immediate systemic Unfractionated Heparin anticoagulation (bolus + infusion) to prevent thrombus propagation and microvascular thrombosis.",
    "explanation": "Initiated immediately prior to or during diagnostic imaging.",
    "difficulty": "basic",
    "references": [
      "WSES Guidelines 2022"
    ]
  },
  {
    "id": "acute-mesenteric-ischemia.fc.6",
    "topicId": "acute-mesenteric-ischemia",
    "sectionId": "acute-mesenteric-ischemia.icu-management-revascularization",
    "question": "Which vasopressors should be strictly avoided in patients with acute mesenteric ischemia?",
    "answer": "Vasopressin and high-dose Epinephrine (potent splanchnic alpha-1 and V1 vasoconstrictors).",
    "explanation": "Norepinephrine is preferred as it preserves splanchnic blood flow better when perfusion pressure is restored.",
    "difficulty": "intermediate",
    "references": [
      "Oh's Intensive Care Manual 9th Edition"
    ]
  },
  {
    "id": "acute-mesenteric-ischemia.fc.7",
    "topicId": "acute-mesenteric-ischemia",
    "sectionId": "acute-mesenteric-ischemia.icu-management-revascularization",
    "question": "When is a planned second-look laparotomy at 24-48 hours indicated in acute mesenteric ischemia?",
    "answer": "It is a selective strategy indicated when borderline bowel viability remains after initial resection/revascularization, following damage-control surgery, or if clinical deterioration occurs.",
    "explanation": "Second-look laparotomy is not universally mandatory for clearly viable bowel, but prevents premature over-resection of stunned bowel and catches delayed necrosis when viability is uncertain.",
    "difficulty": "advanced",
    "references": [
      "WSES Guidelines 2022"
    ]
  },
  {
    "id": "acute-mesenteric-ischemia.fc.8",
    "topicId": "acute-mesenteric-ischemia",
    "sectionId": "acute-mesenteric-ischemia.icu-management-revascularization",
    "question": "What is the treatment of choice for Non-Occlusive Mesenteric Ischemia (NOMI)?",
    "answer": "Correction of low cardiac output/shock + catheter-directed intra-arterial infusion of vasodilators (Papaverine or Tolazoline) into the SMA via angiography.",
    "explanation": "NOMI is a functional vasospasm without mechanical occlusion; relieving vasospasm restores mesenteric perfusion.",
    "difficulty": "advanced",
    "references": [
      "Corcos O et al. Br J Surg 2013"
    ]
  }
];
