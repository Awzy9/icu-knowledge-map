import type { ClinicalProblem } from "@/content-types";

// 1-5: Respiratory
import { suddenHypoxemia } from "./sudden-hypoxemia";
import { acuteHypercapnia } from "./acute-hypercapnia";
import { suddenVentilatorDeterioration } from "./sudden-ventilator-deterioration";
import { acuteRespiratoryDistress } from "./acute-respiratory-distress";
import { newHemoptysis } from "./new-hemoptysis";

// 6-10: Hemodynamic
import { acuteHypotension } from "./acute-hypotension";
import { refractoryShock } from "./refractory-shock";
import { newTachycardia } from "./new-tachycardia";
import { newBradycardia } from "./new-bradycardia";
import { acuteHypertension } from "./acute-hypertension";

// 11-14: Neurologic
import { acuteAlteredMentalStatus } from "./acute-altered-mental-status";
import { newFocalNeurologicDeficit } from "./new-focal-neurologic-deficit";
import { newSeizureStatusEpilepticus } from "./new-seizure-status-epilepticus";
import { acuteComaLossOfBrainstemFunction } from "./acute-coma-loss-of-brainstem-function";

// 15-20: Renal / Metabolic
import { oliguriaFallingUrineOutput } from "./oliguria-falling-urine-output";
import { metabolicAcidosis } from "./metabolic-acidosis";
import { metabolicAlkalosis } from "./metabolic-alkalosis";
import { severeHyponatremia } from "./severe-hyponatremia";
import { severeHypernatremia } from "./severe-hypernatremia";
import { severeHyperkalemia } from "./severe-hyperkalemia";

// 21-23: Infectious
import { newFeverSuspectedInfection } from "./new-fever-suspected-infection";
import { suspectedSepsis } from "./suspected-sepsis";
import { persistentFeverDespiteAntibiotics } from "./persistent-fever-despite-antibiotics";

// 24-25: Hematology / GI
import { acuteBleedingFallingHemoglobin } from "./acute-bleeding-falling-hemoglobin";
import { newThrombocytopeniaCoagulopathy } from "./new-thrombocytopenia-coagulopathy";

export const clinicalProblems: readonly ClinicalProblem[] = [
  // Respiratory
  suddenHypoxemia,
  acuteHypercapnia,
  suddenVentilatorDeterioration,
  acuteRespiratoryDistress,
  newHemoptysis,

  // Hemodynamic
  acuteHypotension,
  refractoryShock,
  newTachycardia,
  newBradycardia,
  acuteHypertension,

  // Neurologic
  acuteAlteredMentalStatus,
  newFocalNeurologicDeficit,
  newSeizureStatusEpilepticus,
  acuteComaLossOfBrainstemFunction,

  // Renal / Metabolic
  oliguriaFallingUrineOutput,
  metabolicAcidosis,
  metabolicAlkalosis,
  severeHyponatremia,
  severeHypernatremia,
  severeHyperkalemia,

  // Infectious
  newFeverSuspectedInfection,
  suspectedSepsis,
  persistentFeverDespiteAntibiotics,

  // Hematology / GI
  acuteBleedingFallingHemoglobin,
  newThrombocytopeniaCoagulopathy,
];
