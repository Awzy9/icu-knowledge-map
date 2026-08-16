import type { Question } from "@/content-types";

export const mechanicalVentilationQuestions: readonly Question[] = [
  {
    "id": "vent.q.high-peak-normal-plateau",
    "topicId": "mechanical-ventilation",
    "stem": "An intubated patient on volume-control ventilation suddenly triggers high-pressure alarms. Peak inspiratory pressure has risen from 26 to 48 cmH2O, but plateau pressure measured on an inspiratory pause remains unchanged at 20 cmH2O (PEEP 8 cmH2O). Which of the following is the most likely cause?",
    "options": [
      {
        "id": "a",
        "text": "Acute tension pneumothorax",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Worsening ARDS and pulmonary consolidation",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Endotracheal tube biting or acute bronchospasm",
        "isCorrect": true
      },
      {
        "id": "d",
        "text": "Severe abdominal compartment syndrome",
        "isCorrect": false
      }
    ],
    "explanation": "An isolated increase in Peak pressure with a stable, normal Plateau pressure (Ppeak - Pplat gap increased from 6 to 28 cmH2O) indicates increased resistive pressure (Raw = [Ppeak - Pplat] / Flow). This occurs with airway obstruction (ET tube biting, secretions, bronchospasm, kinking). Tension pneumothorax, ARDS, and abdominal compartment syndrome all decrease compliance, which would elevate both Ppeak and Pplat.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Tobin MJ. Principles and Practice of Mechanical Ventilation."
    ]
  },
  {
    "id": "vent.q.amato-driving-pressure",
    "topicId": "mechanical-ventilation",
    "stem": "According to the landmark observational analysis by Amato et al. (NEJM 2015), which ventilator parameter has the strongest independent association with mortality in patients with ARDS?",
    "options": [
      {
        "id": "a",
        "text": "Driving Pressure (Plateau Pressure minus PEEP)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Absolute Tidal Volume per actual kilogram body weight",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Absolute PEEP level alone",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Peak Inspiratory Pressure",
        "isCorrect": false
      }
    ],
    "explanation": "Amato et al. showed that Driving Pressure (ΔP = Pplat - PEEP = Vt / Crs) was the single best predictor of survival. Reductions in ΔP were strongly associated with increased survival, whereas changes in Vt or PEEP were only beneficial if they resulted in a lower driving pressure.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Amato MBP et al. Driving pressure and survival in ARDS. NEJM 2015."
    ]
  }
,
  {
    id: "vent.q.driving-pressure-amato",
    topicId: "mechanical-ventilation",
    stem: "What did the landmark study by Amato et al. (NEJM 2015) demonstrate regarding Driving Pressure (Delta P = Plateau Pressure - PEEP) during mechanical ventilation?",
    options: [
      { id: "a", text: "Driving pressure is only relevant in patients without lung disease.", isCorrect: false },
      { id: "b", text: "Driving pressure (Delta P) was the ventilation variable most strongly associated with survival; targeting Delta P <= 14–15 cmH2O significantly reduces mortality.", isCorrect: true },
      { id: "c", text: "High driving pressure > 25 cmH2O is protective against atelectasis.", isCorrect: false },
      { id: "d", text: "PEEP should always be reduced to 0 to minimize driving pressure.", isCorrect: false }
    ],
    explanation: "Amato et al. (NEJM 2015, n=3562) showed that Driving Pressure (Delta P = Pplat - PEEP = Vt / Respiratory System Compliance) was the single best predictor of mortality in ARDS. Decreases in Delta P by either lowering Vt or titrating PEEP to recruit lung units were strongly associated with increased survival.",
    difficulty: "intermediate",
    category: "Evidence",
    references: [
      "Amato MBP, et al. NEJM 2015."
    ]
  }
];
