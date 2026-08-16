import type { Flashcard } from "@/content-types";

export const burnsCriticalCareFlashcards: readonly Flashcard[] = [
  {
    "id": "burns-critical-care.fc.1",
    "topicId": "burns-critical-care",
    "sectionId": "burns-critical-care.overview",
    "question": "Which burn depths are included in Total Body Surface Area (TBSA) fluid resuscitation calculations?",
    "answer": "Only 2nd-degree (partial-thickness) and 3rd-degree (full-thickness) burns are included. 1st-degree burns (superficial erythema/sunburn) are EXCLUDED.",
    "explanation": "First-degree burns do not disrupt epidermal barrier or cause systemic capillary leak.",
    "difficulty": "basic",
    "references": [
      {
        "kind": "guideline",
        "id": "burns-guideline-aba-isbi-2023",
        "relevance": "ABA burn resuscitation guidelines."
      }
    ]
  },
  {
    "id": "burns-critical-care.fc.2",
    "topicId": "burns-critical-care",
    "sectionId": "burns-critical-care.fluid-resuscitation-creep",
    "question": "What is the initial fluid resuscitation calculation and timing according to the Parkland / Modified Brooke formula?",
    "answer": "2-4 mL x Weight (kg) x %TBSA of balanced crystalloid (Lactated Ringer) in the first 24 hours: 50% given in the FIRST 8 HOURS from the TIME OF INJURY, and 50% over the next 16 hours.",
    "explanation": "Timing starts from time of burn, not hospital arrival. Half must be delivered rapidly during peak capillary permeability.",
    "difficulty": "basic",
    "references": [
      "ABA Guidelines 2023"
    ]
  },
  {
    "id": "burns-critical-care.fc.3",
    "topicId": "burns-critical-care",
    "sectionId": "burns-critical-care.fluid-resuscitation-creep",
    "question": "What is the primary physiologic endpoint used to titrate burn fluid resuscitation hourly?",
    "answer": "Urine output: target 0.5 to 1.0 mL/kg/hour in adults (30-50 mL/h), or 1.0-1.5 mL/kg/h in electrical burns with myoglobinuria.",
    "explanation": "Titrating strictly to urine output avoids over-resuscitation ('fluid creep') while maintaining organ perfusion.",
    "difficulty": "basic",
    "references": [
      "ABA Practice Guidelines 2023"
    ]
  },
  {
    "id": "burns-critical-care.fc.4",
    "topicId": "burns-critical-care",
    "sectionId": "burns-critical-care.fluid-resuscitation-creep",
    "question": "What are the life-threatening consequences of 'Fluid Creep' (over-resuscitation) in major burns?",
    "answer": "Abdominal Compartment Syndrome (ACS), limb compartment syndrome in unburned extremities, severe pulmonary edema, orbital compartment syndrome, and prolonged ventilator dependence.",
    "explanation": "Occurs when crystalloid infusion exceeds formula estimates (> 250 mL/kg/24h); addition of 5% Albumin should be considered.",
    "difficulty": "intermediate",
    "references": [
      "Greenhalgh DG. J Burn Care Res 2010"
    ]
  },
  {
    "id": "burns-critical-care.fc.5",
    "topicId": "burns-critical-care",
    "sectionId": "burns-critical-care.airway-inhalation-escharotomy",
    "question": "What are the indications for emergency bedside Escharotomy in major burns?",
    "answer": "Circumferential full-thickness burns causing: 1. Thoracic restriction (high peak pressures, hypoventilation), or 2. Extremity vascular compromise (loss of Doppler pulses, compartment pressure > 30 mmHg).",
    "explanation": "Inelastic leathery eschar acts as a tourniquet; incising down to subcutaneous fat releases pressure.",
    "difficulty": "basic",
    "references": [
      "ABA Guidelines 2023"
    ]
  },
  {
    "id": "burns-critical-care.fc.6",
    "topicId": "burns-critical-care",
    "sectionId": "burns-critical-care.airway-inhalation-escharotomy",
    "question": "Why is prophylactic early endotracheal intubation recommended for suspected upper airway thermal injury?",
    "answer": "Thermal injury causes progressive pharyngeal and laryngeal edema that peaks at 12-24 hours; delaying intubation results in complete anatomical airway loss.",
    "explanation": "Signs warranting intubation: stridor, deep facial burns, singed nasal hairs, blistering oral mucosa, and carbonaceous sputum.",
    "difficulty": "basic",
    "references": [
      "Irwin & Rippe 9th Edition"
    ]
  },
  {
    "id": "burns-critical-care.fc.7",
    "topicId": "burns-critical-care",
    "sectionId": "burns-critical-care.airway-inhalation-escharotomy",
    "question": "How does 100% high-flow oxygen treat Carbon Monoxide poisoning in smoke inhalation?",
    "answer": "Reduces the elimination half-life of Carboxyhemoglobin (COHb) from 300 minutes (on room air) down to 45-60 minutes (on 100% O2).",
    "explanation": "Displaces carbon monoxide from hemoglobin and cytochrome c oxidase.",
    "difficulty": "basic",
    "references": [
      "Oh's Intensive Care Manual 9th Edition"
    ]
  },
  {
    "id": "burns-critical-care.fc.8",
    "topicId": "burns-critical-care",
    "sectionId": "burns-critical-care.airway-inhalation-escharotomy",
    "question": "What pharmacologic aerosol cocktail is indicated for subglottic chemical inhalation injury?",
    "answer": "Nebulized Heparin (5,000-10,000 units) + nebulized N-Acetylcysteine (20%) + Albuterol every 4 hours.",
    "explanation": "Heparin prevents obstructive fibrin cast formation; NAC lyses mucus and casts in the tracheobronchial tree.",
    "difficulty": "advanced",
    "references": [
      "Colohan SM et al. J Burn Care Res 2010"
    ]
  }
];
