import type { Question } from "@/content-types";

export const shockQuestions: readonly Question[] = [
  {
    "id": "shock.q.soap2-vasopressor-choice",
    "topicId": "shock",
    "stem": "A 66-year-old man presents with undifferentiated shock and MAP 50 mmHg. What was the primary finding of the SOAP II trial that makes Norepinephrine preferred over Dopamine in shock resuscitation?",
    "options": [
      {
        "id": "a",
        "text": "Dopamine caused a significantly higher incidence of arrhythmic events and higher subgroup mortality in cardiogenic shock.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Norepinephrine causes less renal vasoconstriction than low-dose dopamine infusions.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Dopamine has no inotropic activity on beta-1 receptors.",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Norepinephrine does not require central venous access.",
        "isCorrect": false
      }
    ],
    "explanation": "The landmark SOAP II trial (NEJM 2010) enrolled 1,679 patients with shock and showed that dopamine was associated with more than double the rate of arrhythmic events (20.7% vs 12.4%, P < 0.001) and significantly increased 28-day mortality in patients with cardiogenic shock.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "De Backer D et al. SOAP II Trial. NEJM 2010."
    ]
  },
  {
    "id": "shock.q.andromeda-crt-trial",
    "topicId": "shock",
    "stem": "In the ANDROMEDA-SHOCK randomized clinical trial (JAMA 2019), what clinical parameter was targeted to guide fluid and vasopressor resuscitation in septic shock, resulting in less fluid administration and faster organ recovery?",
    "options": [
      {
        "id": "a",
        "text": "Normalization of Capillary Refill Time (CRT ≤ 3 seconds)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Normalization of Central Venous Pressure to 12 mmHg",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Targeting an ScvO2 > 80%",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Serial arterial base excess measurement every hour",
        "isCorrect": false
      }
    ],
    "explanation": "ANDROMEDA-SHOCK demonstrated that targeting peripheral perfusion via Capillary Refill Time (normalizing to ≤ 3 seconds) resulted in less organ dysfunction at 72 hours, reduced fluid administration, and improved survival on adjusted multivariable analysis compared to targeting lactate clearance.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Hernández G et al. ANDROMEDA-SHOCK. JAMA 2019."
    ]
  }
,
  {
    id: "shock.q.dynamic-fluid-responsiveness",
    topicId: "shock",
    stem: "Why are dynamic measures of fluid responsiveness (Passive Leg Raise test with real-time cardiac output, or stroke volume variation on arterial line) superior to static measures (Central Venous Pressure - CVP) in undifferentiated shock?",
    options: [
      { id: "a", text: "Static CVP has an Area Under the ROC Curve of ~0.56 (equivalent to a coin flip) for predicting whether cardiac output will increase with fluid, whereas the Passive Leg Raise (PLR) creates a reversible autologous ~300 mL fluid challenge with >90% sensitivity and specificity.", isCorrect: true },
      { id: "b", text: "Dynamic measures can only be performed if the patient is awake and coughing.", isCorrect: false },
      { id: "c", text: "CVP > 12 mmHg guarantees fluid responsiveness.", isCorrect: false },
      { id: "d", text: "Dynamic measures are contraindicated in sepsis.", isCorrect: false }
    ],
    explanation: "Extensive systematic reviews (Marik et al.) proved that static markers like CVP do not correlate with blood volume or fluid responsiveness. Dynamic assessments (PLR-induced transient preload increase with real-time stroke volume monitoring) test the patient's position on the Frank-Starling curve without infusing fluid, avoiding dangerous fluid overload in non-responders.",
    difficulty: "basic",
    category: "Physiology",
    references: [
      "Marik PE, et al. Crit Care Med 2013; Monnet X, et al. Intensive Care Med 2016."
    ]
  }
];
