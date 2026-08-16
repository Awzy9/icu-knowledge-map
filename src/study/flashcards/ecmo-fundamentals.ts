import type { Flashcard } from "@/content-types";

export const ecmoFundamentalsFlashcards: readonly Flashcard[] = [
  {
    "id": "ecmo-fundamentals.fc.1",
    "topicId": "ecmo-fundamentals",
    "sectionId": "ecmo-fundamentals.overview",
    "question": "What is the fundamental difference between VV ECMO and VA ECMO?",
    "answer": "VV ECMO provides respiratory gas exchange support only (native heart provides all cardiac output); VA ECMO provides both gas exchange AND mechanical biventricular circulatory support.",
    "explanation": "VV ECMO drains venous blood and returns it to venous circulation; VA ECMO drains venous blood and returns it into the arterial system.",
    "difficulty": "basic",
    "references": [
      {
        "kind": "guideline",
        "id": "ecmo-guideline-elso-2021",
        "relevance": "ELSO adult ECMO guidelines."
      }
    ]
  },
  {
    "id": "ecmo-fundamentals.fc.2",
    "topicId": "ecmo-fundamentals",
    "sectionId": "ecmo-fundamentals.physiology-circuit-dynamics",
    "question": "How are oxygenation and carbon dioxide clearance independently controlled on an ECMO circuit?",
    "answer": "Oxygenation is controlled by ECMO Blood Flow Rate (L/min) and circuit FiO2; Carbon Dioxide clearance is controlled by Sweep Gas Flow Rate (L/min).",
    "explanation": "Increasing sweep gas exponentially lowers PaCO2; increasing pump RPM/flow increases oxygen delivery.",
    "difficulty": "basic",
    "references": [
      "ELSO Guidelines 2021"
    ]
  },
  {
    "id": "ecmo-fundamentals.fc.3",
    "topicId": "ecmo-fundamentals",
    "sectionId": "ecmo-fundamentals.physiology-circuit-dynamics",
    "question": "What are the recommended 'lung rest' mechanical ventilation settings during VV ECMO?",
    "answer": "Ultra-protective settings: Tidal Volume 2-4 mL/kg, Pplat <= 24 cmH2O, Driving Pressure <= 10 cmH2O, PEEP 10-15 cmH2O, Respiratory Rate 4-10 breaths/min, FiO2 0.30-0.50.",
    "explanation": "Resting the lungs eliminates ventilator-induced lung injury (VILI) while the membrane oxygenator performs gas exchange.",
    "difficulty": "intermediate",
    "references": [
      "EOLIA Trial Ventilation Protocol"
    ]
  },
  {
    "id": "ecmo-fundamentals.fc.4",
    "topicId": "ecmo-fundamentals",
    "sectionId": "ecmo-fundamentals.va-ecmo-challenges-complications",
    "question": "What causes Left Ventricular Distension during peripheral VA ECMO and how is it managed?",
    "answer": "Retrograde arterial flow increases LV afterload, preventing the stunned LV from opening the aortic valve, causing LV dilation, pulmonary edema, and intracardiac thrombus. Managed with inotropes, Impella LV unloading (ECPELLA), or septostomy.",
    "explanation": "Active LV venting restores forward flow and reduces left atrial pressures.",
    "difficulty": "advanced",
    "references": [
      "Irwin & Rippe 9th Edition"
    ]
  },
  {
    "id": "ecmo-fundamentals.fc.5",
    "topicId": "ecmo-fundamentals",
    "sectionId": "ecmo-fundamentals.va-ecmo-challenges-complications",
    "question": "What is Differential Hypoxemia (Harlequin / North-South Syndrome) in peripheral VA ECMO?",
    "answer": "Occurs when native cardiac recovery pumps deoxygenated blood from poorly functioning lungs to the upper body (brain, coronary arteries), while ECMO blood perfuses only the lower body.",
    "explanation": "Monitored via RIGHT radial arterial blood gas; managed by improving lung function, converting to V-AV ECMO, or central cannulation.",
    "difficulty": "advanced",
    "references": [
      "Oh's Intensive Care Manual 9th Edition"
    ]
  },
  {
    "id": "ecmo-fundamentals.fc.6",
    "topicId": "ecmo-fundamentals",
    "sectionId": "ecmo-fundamentals.overview",
    "question": "What did the CESAR and EOLIA trials demonstrate regarding ECMO in severe ARDS?",
    "answer": "CESAR showed centralized ECMO referral improved 6-month disability-free survival; EOLIA and individual-patient meta-analysis showed significant 60-day mortality reduction (RR 0.73, P=0.008).",
    "explanation": "Supports early ECMO consideration for severe ARDS (PaO2/FiO2 < 80) unresponsive to proning.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "trial",
        "id": "ecmo-cesar-trial",
        "relevance": "CESAR landmark trial."
      },
      {
        "kind": "systematic-review",
        "id": "ecmo-ards-individual-patient-meta-analysis",
        "relevance": "EOLIA/CESAR meta-analysis."
      }
    ]
  },
  {
    "id": "ecmo-fundamentals.fc.7",
    "topicId": "ecmo-fundamentals",
    "sectionId": "ecmo-fundamentals.overview",
    "question": "What did the ECLS-SHOCK trial find regarding routine early VA-ECMO in infarct-related cardiogenic shock?",
    "answer": "Routine early VA-ECMO did not reduce 30-day mortality (47.8% vs 49.0%) and significantly increased major bleeding and peripheral vascular complications.",
    "explanation": "Reversed unselected early VA-ECMO deployment; VA-ECMO should be reserved as rescue for refractory SCAI Stage E shock.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "trial",
        "id": "ecmo-ecls-shock-trial",
        "relevance": "ECLS-SHOCK trial results."
      }
    ]
  },
  {
    "id": "ecmo-fundamentals.fc.8",
    "topicId": "ecmo-fundamentals",
    "sectionId": "ecmo-fundamentals.va-ecmo-challenges-complications",
    "question": "Why is a distal perfusion cannula (DPC) routinely placed during femoral VA ECMO cannulation?",
    "answer": "The large arterial cannula occludes antegrade femoral flow, causing acute lower extremity ischemia; a 5-7 Fr antegrade cannula perfuses the superficial femoral artery.",
    "explanation": "Prevents compartment syndrome and limb loss during prolonged femoral cannulation.",
    "difficulty": "basic",
    "references": [
      "ELSO Guidelines 2021"
    ]
  }
];
