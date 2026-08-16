import type { ClinicalProblem } from "@/content-types";

export const acuteComaLossOfBrainstemFunction: ClinicalProblem = {
  id: "acute-coma-loss-of-brainstem-function",
  slug: "acute-coma-loss-of-brainstem-function",
  title: "Acute Coma & Loss of Brainstem Reflexes",
  category: "neurologic",
  oneLiner: "Bedside evaluation of profound unresponsiveness: FOUR score and GCS, pupillary/corneal/caloric reflex examination, herniation syndrome recognition, confounder clearance, and Death by Neurologic Criteria (BD/DNC) evaluation.",
  relatedTopicIds: [
    "brain-death",
    "altered-consciousness",
    "intracranial-hypertension",
    "acute-ischemic-stroke",
    "intracranial-hemorrhage",
    "severe-tbi",
  ],
  body: [
    {
      type: "paragraph",
      text: "Profound acute coma (unresponsiveness to all noxious stimuli with eye closure) and loss of brainstem cranial nerve reflexes represent the most severe catastrophic spectrum of neuro-critical illness. The immediate bedside objectives are: (1) Recognize and emergently treat impending transtentorial/tonsillar herniation; (2) Rule out basilar artery occlusion ('Locked-In' syndrome) and reversible metabolic/toxic mimics; (3) Systematically clear confounders; and (4) Evaluate for Death by Neurologic Criteria (BD/DNC) when irreversibility is established.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Transtentorial (Uncal) Herniation (unilateral fixed dilated pupil, decerebrate posturing) requiring immediate hyperosmolar bolus and emergent neurosurgical decompression; Acute Basilar Artery Thrombosis (distinguishable by preserved vertical eye movements and intact cortical consciousness on EEG); and hypothermia/pharmacologic paralysis mimicking whole-brain death.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. RECOGNIZE & QUANTIFY UNRESPONSIVENESS",
          value: "• FOUR Score & Glasgow Coma Scale (GCS):\n  - FOUR Score (Full Outline of UnResponsiveness): Assesses Eye responses (0–4), Motor responses (0–4), Brainstem reflexes (0–4), and Respiration (0–4); superior to GCS in intubated ICU patients.\n  - GCS: GCS ≤ 8 defines severe coma requiring definitive endotracheal airway protection.",
        },
        {
          label: "2. SYSTEMATIC BRAINSTEM REFLEX EXAMINATION",
          value: "• Pupillary Light Reflex (CN II/III): Test with strong light; fixed midposition (4–6 mm) or fixed dilated pupils indicate midbrain tectal/parasympathetic failure.\n• Corneal Reflex (CN V/VII): Touch cornea with sterile swab; evaluates pontine integrity.\n• Oculocephalic ('Doll's Eyes', CN III/VI/VIII): Rotate head horizontally; eyes moving opposite to head movement indicates intact pontine/midbrain reflex arcs (test only after clearing cervical spine).\n• Oculovestibular (Cold Caloric Test, CN III/VI/VIII): Irrigate EAC with 50 mL ice-cold water after confirming intact tympanic membranes; tonic conjugate deviation toward cold ear indicates intact brainstem.\n• Pharyngeal & Tracheal Reflexes (CN IX/X): Gag on posterior pharyngeal touch; cough on deep carina endotracheal suctioning.",
        },
        {
          label: "3. IMMEDIATE EMERGENCY HERNIATION RESUSCITATION",
          value: "If signs of acute herniation (dilating pupil, Cushing triad [bradycardia, hypertension, irregular breathing], decerebrate extensor posturing):\n• Immediate Hyperosmolar Therapy: Administer 3% Hypertonic Saline (250–500 mL IV bolus over 10–15 min) OR Mannitol 20% (1.0–1.5 g/kg IV bolus over 15–20 min).\n• Elevate Head of Bed: 30° with neck in neutral midline position to maximize jugular venous drainage.\n• Brief Hyperventilation: Target PaCO2 30–35 mmHg as a temporary bridge to induce cerebral vasoconstriction while preparing the operating room (avoid prolonged hyperventilation).\n• Stat Neurosurgical Consult: Immediate CT head and emergent surgical decompression (decompressive hemicraniectomy, EVD, clot evacuation).",
        },
        {
          label: "4. SYSTEMATIC EXCLUSION OF REVERSIBLE MIMICS & CONFOUNDERS",
          value: "Before considering brain death or permanent futility, all confounders must be cleared:\n• Core Temperature: Must be normothermic ≥ 36.0°C (≥ 35.5°C in pediatrics; hypothermia directly suppresses brainstem reflexes).\n• Hemodynamics: Defend SBP ≥ 100 mmHg (MAP ≥ 75 mmHg).\n• Pharmacologic Clearance: Ensure clearance of sedatives, opioids, barbiturates, and paralytics (confirm Train-of-Four 4/4 twitches + deep tendon reflexes; account for renal/hepatic failure and post-TTM kinetics; obtain drug levels or perform ancillary testing if uncertain).\n• Metabolic / Endocrine: Correct severe electrolyte abnormalities (Na+ 130–160), severe acidemia (pH > 7.20), and severe endocrine collapse (myxedema, adrenal failure).",
        },
        {
          label: "5. EVALUATION FOR DEATH BY NEUROLOGIC CRITERIA (BD/DNC)",
          value: "If catastrophic irreversible structural brain injury is established and prerequisites are met:\n• Clinical Examination: Complete absence of all cerebral and brainstem motor responses and cranial nerve reflexes.\n• Apnea Testing: Formal 8–10 minute apnea test delivering apneic O2; positive test confirming death requires zero respiratory effort + PaCO2 ≥ 60 mmHg (or ΔPaCO2 ≥ 20) with pH < 7.30.\n• Valid Ancillary Testing: Indicated when clinical exam or apnea test cannot be completed (4-vessel cerebral angiography, 99mTc-HMPAO nuclear scintigraphy, or Transcranial Doppler; CTA/EEG are not standalone ancillary tests per 2023 AAN guidelines).",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Confusing spinal cord reflexes (e.g. triple flexion of lower limbs, abdominal reflexes, or Lazarus sign) with cerebral motor responses. Spinal reflexes originate from the isolated spinal cord and do NOT indicate brain viability or invalidate brain death; educate bedside staff and families.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Brain Death / DNC: 2023 AAN/AAP/CNS/SCCM guideline, apnea testing on/off ECMO, and donor management.\n• Altered Consciousness: FOUR score, GCS, and structural coma differential.\n• Intracranial Hypertension: Tiered ICP algorithms, EVD management, and hyperosmolar therapy.\n• Ischemic Stroke: Basilar artery occlusion, malignant MCA infarction, and hemicraniectomy.\n• Severe TBI: Marshall/Rotterdam CT classifications and brain trauma foundation protocols.",
        },
      ],
    },
  ],
};
