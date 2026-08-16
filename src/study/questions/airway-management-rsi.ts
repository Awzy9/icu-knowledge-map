import type { Question } from "@/content-types";

export const airwayManagementRsiQuestions: readonly Question[] = [
  {
    "id": "airway.q.prevent-trial-bmv",
    "topicId": "airway-management-rsi",
    "stem": "According to the landmark PREVENT randomized trial (NEJM 2019), what is the impact of performing gentle bag-mask ventilation during the interval between induction and laryngoscopy in critically ill adults undergoing RSI?",
    "options": [
      {
        "id": "a",
        "text": "Significantly reduced the incidence of severe hypoxemia (SpO2 < 80%) with no increase in the risk of gastric aspiration.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Caused a 4-fold increase in fatal aspiration pneumonitis and is strictly contraindicated.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Had no effect on oxygen saturation but prolonged intubation duration.",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Increased rates of tension pneumothorax by 15%.",
        "isCorrect": false
      }
    ],
    "explanation": "The PREVENT trial (NEJM 2019, n=401) disproved the traditional teaching that bagging during RSI should be avoided. Gentle BMV (with a PEEP valve and low peak pressures < 20 cmH2O) during the apneic phase significantly reduced severe desaturation (10.9% vs 22.8%, P<0.001) without any increase in pulmonary aspiration (2.5% vs 4.0%).",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Casey JD et al. PREVENT Trial. NEJM 2019."
    ]
  },
  {
    "id": "airway.q.succinylcholine-hyperkalemia-contraindications",
    "topicId": "airway-management-rsi",
    "stem": "A 50-year-old man who sustained major 40% total body surface area burns 3 weeks ago requires emergency intubation for acute respiratory distress. Why is Succinylcholine strictly contraindicated as the neuromuscular blocking agent in this patient?",
    "options": [
      {
        "id": "a",
        "text": "Proliferation of extrajunctional acetylcholine receptors leads to massive, life-threatening potassium efflux and fatal cardiac arrest.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Succinylcholine undergoes rapid renal clearance in burn patients, resulting in zero muscle relaxation.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Succinylcholine induces acute methemoglobinemia.",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Succinylcholine precipitates irreversible laryngospasm in burn patients.",
        "isCorrect": false
      }
    ],
    "explanation": "Following burns, severe trauma, denervation injuries, or prolonged immobility (>48–72 hours post-injury), extrajunctional nicotinic acetylcholine receptors upregulate across the entire sarcolemma. Depolarization with succinylcholine opens these channels, triggering massive potassium efflux from myocytes (serum K+ can surge by >3–5 mEq/L within minutes), causing refractory hyperkalemic cardiac arrest. Rocuronium is the drug of choice.",
    "difficulty": "basic",
    "category": "Pharmacology",
    "references": [
      "Martyn JA, Richtsfeld M. Succinylcholine-induced hyperkalemia in acquired pathologic states. Anesthesiology 2006."
    ]
  }
,
  {
    id: "airway.q.device-trial-vl",
    topicId: "airway-management-rsi",
    stem: "According to the DEVICE landmark randomized trial (NEJM 2023), what is the effect of first-attempt video laryngoscopy compared with direct laryngoscopy during emergency endotracheal intubation in critically ill adults?",
    options: [
      { id: "a", text: "Direct laryngoscopy resulted in significantly higher first-pass success.", isCorrect: false },
      { id: "b", text: "Video laryngoscopy significantly increased first-pass intubation success (85.1% vs 70.8%, P < 0.001) without increasing complications.", isCorrect: true },
      { id: "c", text: "Video laryngoscopy increased the rate of esophageal intubation.", isCorrect: false },
      { id: "d", text: "Video laryngoscopy is only beneficial for experienced anesthesiologists in operating rooms.", isCorrect: false }
    ],
    explanation: "The DEVICE trial (NEJM 2023, n=1417) proved that video laryngoscopy resulted in significantly higher first-attempt intubation success (85.1% vs 70.8%) across a broad range of critically ill ICU and ED patients, establishing video laryngoscopy as the preferred first-line tool for emergency airway management.",
    difficulty: "basic",
    category: "Evidence",
    references: [
      "Prekker ME, et al. DEVICE Trial. NEJM 2023."
    ]
  }
];
