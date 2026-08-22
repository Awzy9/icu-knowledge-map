import type { ClinicalCase } from "@/content-types/clinical-case";

export const statusAsthmaticusCase: ClinicalCase = {
  id: "case-status-asthmaticus",
  slug: "status-asthmaticus",
  title: "Status Asthmaticus in the ICU",
  subtitle: "Management of refractory bronchospasm, dynamic hyperinflation, and ventilator strategy",
  difficulty: "foundation",
  system: "respiratory",
  tags: ["asthma", "bronchospasm", "mechanical-ventilation", "auto-peep"],
  objectives: [
    "Differentiate acute severe bronchospasm from upper airway obstruction",
    "Administer aggressive inhaled and systemic bronchodilator therapies according to the 2026 GINA Report",
    "Identify dynamic hyperinflation (Auto-PEEP) and its severe hemodynamic consequences",
    "Set ventilator to maximize expiratory time, accept permissive hypercapnia, and avoid breath-stacking"
  ],
  initialPresentation: {
    history: "A 24-year-old female with severe persistent asthma presents with acute respiratory exhaustion. She has used her albuterol inhaler every 20 minutes for the past 6 hours without relief. She is hunched forward and unable to speak more than single syllables.",
    vitals: { "HR": "136/min", "BP": "142/88 mmHg", "RR": "34/min", "SpO2": "87% on room air" },
    keyFindings: [
      "Diffuse expiratory and inspiratory wheezes with markedly prolonged expiratory phase and reduced air entry",
      "Severe sternocleidomastoid retractions with paradoxical abdominal breathing and pulsus paradoxus",
      "ABG on 4L NC: pH 7.26, PaCO2 52 mmHg, PaO2 58 mmHg (Pseudonormal/rising PaCO2 in a tachypneic patient signaling impending respiratory muscle exhaustion)"
    ]
  },
  steps: [
    {
      id: "step-1",
      prompt: "The patient is tiring rapidly. A rising PaCO2 (52 mmHg) with worsening acidemia in a severely tachypneic asthmatic indicates respiratory muscle exhaustion. She is alert but struggling.",
      question: "What is your immediate primary medical therapy bundle according to the 2026 GINA Report?",
      options: [
        {
          id: "1-a",
          text: "Continuous nebulized albuterol + ipratropium, early systemic corticosteroids, controlled oxygen targeting SpO2 93–95%, and IV magnesium sulfate 2 g over 20 minutes for severe presentation",
          isCorrect: true,
          explanation: "First-line medical therapy for acute severe asthma (2026 GINA Report) includes repetitive/continuous inhaled SABA combined with SAMA (ipratropium), systemic corticosteroids (IV methylprednisolone or oral prednisone) to reduce mucosal inflammation, and controlled oxygen targeting SpO2 93–95% (avoiding hyperoxia-induced V/Q mismatch). IV magnesium sulfate (2 g over 20 min) is recommended as an effective adjunctive therapy in severe, life-threatening, or refractory exacerbations.",
          physiologicReasoning: "Beta-2 stimulation and magnesium-mediated calcium channel inhibition relax bronchial smooth muscle, reducing severe airway resistance.",
          nextStepId: "step-2",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Bronchial smooth muscle relaxation reduces airway resistance",
              "Airflow improves and dynamic hyperinflation begins to decompress"
            ],
            clinicalResponse: "Continuous nebulization begins and IV magnesium is infused over 20 minutes. Air movement improves moderately, though the patient remains fatigued.",
            nextStepId: "step-2"
          }
        },
        {
          id: "1-b",
          text: "Immediate rapid sequence intubation with high tidal volume and rate to normalize PaCO2",
          isCorrect: false,
          explanation: "Intubation in severe asthma carries high mortality from acute dynamic hyperinflation, tension pneumothorax, and cardiovascular collapse. Exhaust all aggressive medical therapies first; reserve intubation for severe exhaustion, obtundation, or arrest.",
          whyNot: "Mechanical ventilation in asthma is notoriously hazardous; dynamic hyperinflation causes severe barotrauma and hemodynamic collapse.",
          outcome: {
            classification: "suboptimal",
            immediateEffects: [
              "Severe expiratory flow limitation leads to rapid breath-stacking",
              "Intrathoracic pressure spikes, compromising venous return"
            ],
            clinicalResponse: "Positive pressure ventilation and induction vasodilation in a hyperinflated asthmatic cause blood pressure to drop from air trapping."
          }
        },
        {
          id: "1-c",
          text: "Administer IV Morphine 4 mg to reduce anxiety and slow down the respiratory rate",
          isCorrect: false,
          explanation: "Opioids depress respiratory drive and can cause histamine release, precipitating acute ventilatory failure in severe asthma.",
          whyNot: "Opioids eliminate respiratory compensation and histamine release worsens bronchoconstriction.",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Respiratory drive is blunted",
              "Hypercapnia worsens, increasing the risk of acute respiratory arrest"
            ],
            clinicalResponse: "Opioid administration blunts the patient's respiratory compensation, resulting in worsening hypoventilation and urgent bag-valve-mask assistance."
          }
        }
      ]
    },
    {
      id: "step-2",
      prompt: "Despite 45 minutes of continuous nebulization and magnesium, the patient becomes obtunded with worsening respiratory acidosis (pH 7.15, PaCO2 74 mmHg). Emergency intubation is performed using Ketamine (bronchodilating sedative) and Rocuronium.",
      question: "Which ventilator strategy is crucial to prevent fatal dynamic hyperinflation (Auto-PEEP)?",
      vitalsUpdate: { "HR": "122/min", "BP": "98/58 mmHg", "SpO2": "92%" },
      options: [
        {
          id: "2-a",
          text: "Low starting respiratory rate (10–14/min), low VT (6–8 mL/kg PBW), high inspiratory flow (70–90 L/min), long expiratory time (I:E ratio ≥1:4), and permissive hypercapnia",
          isCorrect: true,
          explanation: "The primary ventilator goal in status asthmaticus is preventing dynamic hyperinflation (Auto-PEEP), NOT normalizing PaCO2. Maximizing expiratory time (initial low RR 10–14/min, short inspiratory time via high inspiratory flow 70–90 L/min) allows exhalation of trapped air. Permissive hypercapnia is maintained to prioritize lung-protective mechanics and prevent dynamic hyperinflation (accepting elevated PaCO2 and respiratory acidemia while monitoring hemodynamic tolerance and avoiding high airway pressures), avoiding barotrauma and hemodynamic collapse.",
          physiologicReasoning: "Severe airflow resistance dramatically increases the expiratory time constant; long expiratory time prevents progressive breath-stacking.",
          nextStepId: "step-3",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Expiratory flow reaches baseline zero before the next breath initiates",
              "Auto-PEEP is controlled below safe thresholds (<10–12 cmH2O)",
              "Venous return and MAP stabilize"
            ],
            clinicalResponse: "Peak pressures decrease from 55 to 38 cmH2O, and blood pressure stabilizes at 112/68 mmHg with adequate organ perfusion.",
            nextStepId: "step-3"
          }
        },
        {
          id: "2-b",
          text: "High respiratory rate (26/min) with high set PEEP (15 cmH2O) to blow off PaCO2 and recruit collapsed alveoli",
          isCorrect: false,
          explanation: "High respiratory rates drastically shorten expiratory time, causing severe dynamic hyperinflation, Auto-PEEP accumulation, barotrauma, and risk of cardiovascular collapse.",
          whyNot: "Asthma is an obstructive pathology, not restrictive ARDS. High RR causes severe breath-stacking.",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Expiratory flow never reaches zero before the next breath is delivered",
              "Massive Auto-PEEP accumulates",
              "Venous return is severely obstructed, risking pulseless electrical activity (PEA) arrest"
            ],
            clinicalResponse: "The monitor alarms high peak airway pressure and severe hypotension develops from extreme air trapping, requiring immediate ventilator disconnection."
          }
        }
      ]
    },
    {
      id: "step-3",
      prompt: "Two hours post-intubation, peak pressure suddenly rises from 38 to 58 cmH2O. Blood pressure abruptly drops to 65/35 mmHg with HR 145/min.",
      question: "What is your immediate diagnostic and therapeutic maneuver?",
      vitalsUpdate: { "BP": "65/35 mmHg", "HR": "145/min", "SpO2": "84%" },
      options: [
        {
          id: "3-a",
          text: "Disconnect the patient from the ventilator, perform manual chest compression to allow complete expiration of trapped gas, and evaluate for tension pneumothorax",
          isCorrect: true,
          explanation: "Sudden high peak pressure and acute hypotension in a ventilated asthmatic indicates either massive dynamic hyperinflation (Auto-PEEP) or tension pneumothorax. Disconnecting the ventilator removes positive pressure, allows immediate full exhalation of trapped air, restores venous return, and helps differentiate breath-stacking from tension pneumothorax.",
          physiologicReasoning: "Disconnecting the circuit removes positive pressure, immediately decompressing trapped gas and restoring venous return.",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Audible rush of trapped gas decompresses the lungs",
              "Intrathoracic pressure plummets",
              "Blood pressure immediately rebounds to 110/65 mmHg within 30 seconds"
            ],
            clinicalResponse: "A large volume of air exhausts from the ETT. Blood pressure returns to normal, confirming severe dynamic hyperinflation as the cause."
          }
        },
        {
          id: "3-b",
          text: "Start an immediate epinephrine infusion at 0.2 mcg/kg/min for presumed anaphylaxis",
          isCorrect: false,
          explanation: "The acute event is mechanical (Auto-PEEP air trapping or pneumothorax). Starting pressors without relieving the mechanical obstruction will not restore preload.",
          whyNot: "Mechanical obstruction to venous return must be decompressed immediately.",
          outcome: {
            classification: "suboptimal",
            immediateEffects: [
              "High sympathetic stimulation without addressing air trapping"
            ],
            clinicalResponse: "Heart rate increases to 160/min while blood pressure remains dangerously low."
          }
        }
      ]
    }
  ],
  relatedMedicationSlugs: ["ketamine", "rocuronium", "propofol", "epinephrine"],
  relatedTopicIds: ["asthma", "mechanical-ventilation"],
  relatedPathwaySlugs: ["respiratory-support-escalation", "mechanical-ventilation-initiation"],
  relatedProblemSlugs: ["acute-respiratory-distress", "acute-hypercapnia"],
  references: [
    "Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention (2026 GINA Report). Available from: www.ginasthma.org.",
    "Leatherman J. Mechanical ventilation for severe asthma. Chest. 2015;147(6):1671-1680.",
    "Laher AE, Buchanan SK. Mechanically Ventilating the Severe Asthmatic. J Intensive Care Med. 2018;33(9):491-501."
  ]
};