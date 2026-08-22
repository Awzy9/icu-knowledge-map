import type { Flashcard } from "@/content-types";

export const asthmaFlashcards: readonly Flashcard[] = [
  {
    "id": "asthma.fc.pathophysiology-triad",
    "topicId": "asthma",
    "question": "What is the classic pathophysiologic triad of acute severe asthma?",
    "answer": "Bronchospasm (smooth muscle constriction), airway mucosal edema/inflammation, and thick tenacious mucous plugging.",
    "explanation": "All three components contribute to marked increases in airway resistance, expiratory flow limitation, dynamic hyperinflation, and ventilation-perfusion mismatch.",
    "difficulty": "basic",
    "category": "Pathophysiology",
    "references": [
      "Global Initiative for Asthma (2026 GINA Report)."
    ]
  },
  {
    "id": "asthma.fc.silent-chest-sign",
    "topicId": "asthma",
    "question": "What does a 'silent chest' on auscultation in severe acute asthma signify?",
    "answer": "Imminent fatal respiratory arrest due to air movement being too low to generate wheezing.",
    "explanation": "Wheezing requires airflow. As severe bronchospasm and dynamic hyperinflation worsen, airflow drops precipitously, producing an ominously quiet chest.",
    "difficulty": "intermediate",
    "category": "Recognition",
    "references": [
      "Irwin and Rippe's Intensive Care Medicine, 9th Edition."
    ]
  },
  {
    "id": "asthma.fc.paco2-normalization",
    "topicId": "asthma",
    "question": "Why is a 'normal' PaCO2 (38–42 mmHg) alarming in an acutely dyspneic asthmatic patient?",
    "answer": "It indicates respiratory muscle exhaustion and transitioning into hypercapnic respiratory failure.",
    "explanation": "Severe asthma initially induces profound tachypnea and respiratory alkalosis (low PaCO2). A normal or rising PaCO2 signals respiratory muscle fatigue and impending collapse.",
    "difficulty": "basic",
    "category": "Diagnosis",
    "references": [
      "British Thoracic Society / SIGN Guideline on the Management of Asthma."
    ]
  },
  {
    "id": "asthma.fc.first-line-pharmacotherapy",
    "topicId": "asthma",
    "question": "What is the first-line pharmacotherapy bundle for acute severe asthma exacerbation in the ICU?",
    "answer": "Continuous or frequent nebulized short-acting beta-2 agonists (Albuterol) combined with ipratropium bromide, early systemic corticosteroids, and controlled oxygen (SpO2 93–95%).",
    "explanation": "Inhaled beta-2 agonists provide rapid bronchodilation. Ipratropium adds additive bronchodilation and reduces hospitalizations. Systemic steroids blunt the inflammatory cascade over 4–6 hours.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Global Initiative for Asthma (2026 GINA Report); Cochrane Systematic Review on SABA + Anticholinergics."
    ]
  },
  {
    "id": "asthma.fc.magnesium-sulfate-role",
    "topicId": "asthma",
    "question": "What is the role and dose of IV magnesium sulfate in severe acute asthma?",
    "answer": "2 g IV infused over 20 minutes; acts as a smooth muscle relaxant by inhibiting calcium influx into bronchial smooth muscle cells.",
    "explanation": "Recommended as an adjunct in patients presenting with severe exacerbations or those failing to respond to initial SABA/SAMA and systemic corticosteroid therapy.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "3Mg Trial; Cochrane Database Syst Rev 2014; 2026 GINA Report."
    ]
  },
  {
    "id": "asthma.fc.pulsus-paradoxus",
    "topicId": "asthma",
    "question": "What is Pulsus Paradoxus, and what threshold indicates severe airway obstruction in asthma?",
    "answer": "An exaggerated drop in systolic blood pressure > 10–12 mmHg during spontaneous inspiration.",
    "explanation": "Extreme negative intrathoracic pressure on inspiration increases LV afterload and RV venous return, causing interventricular septal flattening and transient SBP decline.",
    "difficulty": "intermediate",
    "category": "Monitoring",
    "references": [
      "Irwin and Rippe's Intensive Care Medicine, 9th Edition."
    ]
  },
  {
    "id": "asthma.fc.dynamic-hyperinflation",
    "topicId": "asthma",
    "question": "What mechanical ventilation strategy prevents dynamic hyperinflation (Auto-PEEP) in intubated asthmatics?",
    "answer": "Prolong expiratory time (I:E ratio 1:3 to 1:5), low initial respiratory rate (8–12 bpm), low tidal volume (6–8 mL/kg PBW), and high inspiratory flow rate (70–90 L/min).",
    "explanation": "Allowing complete exhalation minimizes stacked breaths (auto-PEEP), preventing barotrauma and hemodynamic collapse from impaired venous return.",
    "difficulty": "advanced",
    "category": "Management",
    "references": [
      "Tuxen DV et al. Dynamic hyperinflation and auto-PEEP. Am Rev Respir Dis 1987."
    ]
  },
  {
    "id": "asthma.fc.permissive-hypercapnia",
    "topicId": "asthma",
    "question": "What is permissive hypercapnia, and what is its primary objective in mechanical ventilation for asthma?",
    "answer": "Accepting elevated PaCO2 and respiratory acidemia to prioritize lung-protective mechanics, prolong expiratory time, and prevent dynamic hyperinflation and auto-PEEP.",
    "explanation": "Attempting to normalize PaCO2 by increasing minute ventilation causes severe gas trapping, high plateau pressures, pneumothorax, and cardiovascular collapse.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Darioli R, Perret C. Mechanical controlled hypoventilation in status asthmaticus. Am Rev Respir Dis 1984."
    ]
  },
  {
    "id": "asthma.fc.ketamine-intubation",
    "topicId": "asthma",
    "question": "Why is Ketamine often selected as the induction agent for intubation in near-fatal asthma?",
    "answer": "Ketamine possesses direct bronchodilatory properties via catecholamine release and NMDA inhibition, while maintaining hemodynamic stability.",
    "explanation": "Ketamine reduces airway resistance and bronchospasm compared to other induction agents like propofol or etomidate, though rapid sequence intubation must still be executed meticulously.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Critical Care Medicine Airway Guidelines."
    ]
  },
  {
    "id": "asthma.fc.post-intubation-hypotension",
    "topicId": "asthma",
    "question": "What is the immediate bedside action if an intubated asthmatic becomes acutely hypotensive?",
    "answer": "Disconnect the patient from the ventilator circuit immediately and manually compress the chest to allow exhalation of trapped gas (relieving severe Auto-PEEP).",
    "explanation": "Severe dynamic hyperinflation increases intrathoracic pressure, eliminating venous return to the right atrium. Disconnection immediately relieves thoracic pressure and restores preload.",
    "difficulty": "advanced",
    "category": "Complications",
    "references": [
      "Irwin and Rippe's Intensive Care Medicine, 9th Edition."
    ]
  }
];
