import type { Flashcard } from "@/content-types";

export const criticalIllnessNutritionFlashcards: readonly Flashcard[] = [
  {
    "id": "critical-illness-nutrition.fc.1",
    "topicId": "critical-illness-nutrition",
    "sectionId": "critical-illness-nutrition.timing-route-dosing",
    "question": "When should Enteral Nutrition (EN) ideally be initiated in critically ill ICU patients?",
    "answer": "Early Enteral Nutrition should be initiated within 24 to 48 hours of ICU admission once initial hemodynamic resuscitation is established.",
    "explanation": "Maintains gut mucosal integrity, supports tight junctions, and reduces bacterial translocation and systemic infection.",
    "difficulty": "basic",
    "references": [
      {
        "kind": "guideline",
        "id": "nutrition-guideline-espen-2019",
        "relevance": "ESPEN early EN recommendation."
      }
    ]
  },
  {
    "id": "critical-illness-nutrition.fc.2",
    "topicId": "critical-illness-nutrition",
    "sectionId": "critical-illness-nutrition.timing-route-dosing",
    "question": "What is the recommended protein intake target in critically ill adult patients?",
    "answer": "1.3 to 2.0 g/kg/day of protein (up to 2.0-2.5 g/kg/day in patients on CRRT or with major thermal burns).",
    "explanation": "High protein intake preserves lean muscle mass and supports immune function during severe hypercatabolism.",
    "difficulty": "basic",
    "references": [
      "ESPEN Guidelines 2019"
    ]
  },
  {
    "id": "critical-illness-nutrition.fc.3",
    "topicId": "critical-illness-nutrition",
    "sectionId": "critical-illness-nutrition.timing-route-dosing",
    "question": "What did the landmark EPaNIC trial demonstrate regarding the timing of Parenteral Nutrition?",
    "answer": "Late initiation of supplemental PN (withheld until day 8) resulted in fewer ICU infections, shorter ventilator duration, and faster ICU discharge compared to early PN.",
    "explanation": "Overfeeding during early critical illness suppresses cellular autophagy and worsens infection rates.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "trial",
        "id": "nutrition-epanic-trial",
        "relevance": "EPaNIC trial landmark finding."
      }
    ]
  },
  {
    "id": "critical-illness-nutrition.fc.4",
    "topicId": "critical-illness-nutrition",
    "sectionId": "critical-illness-nutrition.timing-route-dosing",
    "question": "What did the TARGET trial show regarding 100% caloric delivery vs standard 70% delivery in ICU patients?",
    "answer": "Energy-dense enteral formula delivering 100% of target calories showed no difference in 90-day mortality and caused higher gastrointestinal intolerance.",
    "explanation": "Confirms that permissive underfeeding (~70% of energy targets) in early critical illness is safe and effective.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "trial",
        "id": "nutrition-target-trial",
        "relevance": "TARGET trial results."
      }
    ]
  },
  {
    "id": "critical-illness-nutrition.fc.5",
    "topicId": "critical-illness-nutrition",
    "sectionId": "critical-illness-nutrition.timing-route-dosing",
    "question": "Why should Enteral Nutrition be withheld during severe, unstable shock on escalating vasopressors?",
    "answer": "The NUTRIREA-2 trial demonstrated a 3-fold higher rate of acute bowel ischemia and non-occlusive mesenteric necrosis (NOMI) with enteral feeding during high-dose vasopressor shock.",
    "explanation": "When splanchnic perfusion is compromised, metabolic oxygen demand from digestion triggers intestinal necrosis.",
    "difficulty": "advanced",
    "references": [
      "Reignier J et al. NUTRIREA-2 Trial. Lancet Respir Med 2018"
    ]
  },
  {
    "id": "critical-illness-nutrition.fc.6",
    "topicId": "critical-illness-nutrition",
    "sectionId": "critical-illness-nutrition.refeeding-syndrome",
    "question": "What electrolyte abnormality is the hallmark diagnostic feature of Refeeding Syndrome?",
    "answer": "Severe acute hypophosphatemia (< 1.5 mg/dL or drop > 0.5 mg/dL), accompanied by hypokalemia and hypomagnesemia.",
    "explanation": "Carbohydrate reintroduction triggers insulin release, driving phosphate into cells for ATP synthesis, causing diaphragmatic failure and arrhythmias.",
    "difficulty": "basic",
    "references": [
      "Oh's Intensive Care Manual 9th Edition"
    ]
  },
  {
    "id": "critical-illness-nutrition.fc.7",
    "topicId": "critical-illness-nutrition",
    "sectionId": "critical-illness-nutrition.refeeding-syndrome",
    "question": "Why do modern guidelines recommend AGAINST routine monitoring of Gastric Residual Volumes (GRVs)?",
    "answer": "Routine GRV monitoring leads to inappropriate cessation of enteral nutrition and severe underfeeding without reducing rates of aspiration pneumonia or mortality.",
    "explanation": "Only hold feeds if overt vomiting, abdominal distension, or GRV > 500 mL accompanied by clinical signs of intolerance.",
    "difficulty": "intermediate",
    "references": [
      "ESPEN / ASPEN Guidelines"
    ]
  },
  {
    "id": "critical-illness-nutrition.fc.8",
    "topicId": "critical-illness-nutrition",
    "sectionId": "critical-illness-nutrition.timing-route-dosing",
    "question": "What is the recommended caloric target during the early acute phase (Days 1-3) of critical illness?",
    "answer": "Hypocaloric feeding delivering 10-20 kcal/kg/day or <= 70% of calculated energy expenditure, advancing to 80-100% after day 3.",
    "explanation": "Prevents overfeeding-induced hyperglycemia, hepatic steatosis, and hypercapnia.",
    "difficulty": "basic",
    "references": [
      "ESPEN Guidelines 2019"
    ]
  }
];
