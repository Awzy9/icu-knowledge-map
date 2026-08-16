import type { Flashcard } from "@/content-types";

export const upperGiBleedingFlashcards: readonly Flashcard[] = [
  {
    "id": "ugib.fc.restrictive-transfusion-villanueva",
    "topicId": "upper-gi-bleeding",
    "question": "What did the landmark Villanueva trial conclude regarding transfusion thresholds in acute Upper GI Bleeding?",
    "answer": "A restrictive transfusion strategy (transfuse for Hb < 7.0 g/dL, target 7.0–9.0) significantly reduced 45-day mortality (5% vs 9%) and rebleeding compared to a liberal strategy (Hb < 9.0).",
    "explanation": "Villanueva et al. (NEJM 2013) demonstrated that liberal transfusion increases portal and splanchnic venous pressures, promoting clot disruption and rebleeding.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Villanueva C et al. Transfusion strategies for acute upper gastrointestinal bleeding. NEJM 2013."
    ]
  },
  {
    "id": "ugib.fc.variceal-bleeding-triad",
    "topicId": "upper-gi-bleeding",
    "question": "What 3 pharmacologic and endoscopic therapies are standard of care for acute esophageal variceal hemorrhage?",
    "answer": "1. Vasoactive therapy (Octreotide 50 mcg IV bolus + 50 mcg/h infusion); 2. Prophylactic IV Ceftriaxone (1 g daily for 7 days); 3. Endoscopic Variceal Ligation (EVL) within 12 hours.",
    "explanation": "Short-term prophylactic antibiotics reduce bacterial translocation, recurrent bleeding, and all-cause mortality in cirrhotic patients with GI bleeding.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "AASLD Guidelines on Portal Hypertensive Bleeding in Cirrhosis 2017."
    ]
  },
  {
    "id": "ugib.fc.erythromycin-prokinetic-endoscopy",
    "topicId": "upper-gi-bleeding",
    "question": "What is the role of IV Erythromycin prior to emergent endoscopy in acute upper GI bleeding?",
    "answer": "Administering Erythromycin 250 mg IV 30–60 minutes prior to endoscopy stimulates motilin receptors, empties blood and clots from the stomach, and significantly improves endoscopic visualization.",
    "explanation": "Improves diagnostic yield, reduces the need for repeat endoscopy, and shortens procedure duration.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Barkun AN et al. International Consensus Recommendations on the Management of Nonvariceal Upper GI Bleeding. Ann Intern Med 2019."
    ]
  },
  {
    "id": "ugib.fc.erythromycin-prokinetic",
    "topicId": "upper-gi-bleeding",
    "question": "What is the role and dose of IV Erythromycin prior to urgent endoscopy in severe upper GI bleeding?",
    "answer": "IV Erythromycin 250 mg given 20-90 minutes before endoscopy acts as a motilin receptor agonist to promote gastric emptying of clots, significantly improving endoscopic visualization and reducing repeat endoscopy.",
    "explanation": "Recommended by ACG/ESGE guidelines for patients with active upper GI bleeding.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in upper-gi-bleeding"
    ]
  },
  {
    "id": "ugib.fc.variceal-triad",
    "topicId": "upper-gi-bleeding",
    "question": "What are the 3 mandatory pharmacologic and endoscopic components of acute variceal hemorrhage management?",
    "answer": "1. Vasoactive therapy (Octreotide 50 mcg bolus + 50 mcg/h IV); 2. Prophylactic IV Ceftriaxone (1 g daily for 7 days); 3. Urgent Upper Endoscopy with Endoscopic Band Ligation (EBL) within 12 hours.",
    "explanation": "Ceftriaxone reduces spontaneous bacterial peritonitis, rebleeding, and hospital mortality in cirrhotic bleeding.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in upper-gi-bleeding"
    ]
  },
  {
    "id": "ugib.fc.tips-early-indication",
    "topicId": "upper-gi-bleeding",
    "question": "When is Early 'Preemptive' TIPS (within 24-72 hours) indicated in acute variceal bleeding?",
    "answer": "High-risk cirrhotic patients with Child-Pugh Class C (score 10-13) or Child-Pugh Class B with active bleeding on endoscopy (Garcia-Pagan NEJM trial).",
    "explanation": "Early preemptive TIPS significantly reduces treatment failure and mortality compared to pharmacotherapy + banding alone.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in upper-gi-bleeding"
    ]
  }
];
