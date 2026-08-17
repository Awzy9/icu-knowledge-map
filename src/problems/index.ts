import type { ClinicalProblem } from "@/content-types";

// 1-5: Respiratory
import { suddenHypoxemia } from "./sudden-hypoxemia";
import { acuteHypercapnia } from "./acute-hypercapnia";
import { suddenVentilatorDeterioration } from "./sudden-ventilator-deterioration";
import { acuteRespiratoryDistress } from "./acute-respiratory-distress";
import { newHemoptysis } from "./new-hemoptysis";

// 6-11: Hemodynamic
import { acuteHypotension } from "./acute-hypotension";
import { refractoryShock } from "./refractory-shock";
import { newTachycardia } from "./new-tachycardia";
import { newBradycardia } from "./new-bradycardia";
import { acuteHypertension } from "./acute-hypertension";
import { newMurmurShockPulmonaryEdema } from "./new-murmur-shock-pulmonary-edema";

// 12-16: Neurologic
import { acuteAlteredMentalStatus } from "./acute-altered-mental-status";
import { newFocalNeurologicDeficit } from "./new-focal-neurologic-deficit";
import { newSeizureStatusEpilepticus } from "./new-seizure-status-epilepticus";
import { acuteComaLossOfBrainstemFunction } from "./acute-coma-loss-of-brainstem-function";
import { rapidlyProgressiveWeaknessVentilatoryFailure } from "./rapidly-progressive-weakness-ventilatory-failure";

// 17-22: Renal / Metabolic
import { oliguriaFallingUrineOutput } from "./oliguria-falling-urine-output";
import { metabolicAcidosis } from "./metabolic-acidosis";
import { metabolicAlkalosis } from "./metabolic-alkalosis";
import { severeHyponatremia } from "./severe-hyponatremia";
import { severeHypernatremia } from "./severe-hypernatremia";
import { severeHyperkalemia } from "./severe-hyperkalemia";

// 23-26: Infectious & Immunocompromised
import { newFeverSuspectedInfection } from "./new-fever-suspected-infection";
import { suspectedSepsis } from "./suspected-sepsis";
import { persistentFeverDespiteAntibiotics } from "./persistent-fever-despite-antibiotics";
import { immunocompromisedFeverOrganFailure } from "./immunocompromised-fever-organ-failure";

// 27-28: Hematology / GI
import { acuteBleedingFallingHemoglobin } from "./acute-bleeding-falling-hemoglobin";
import { newThrombocytopeniaCoagulopathy } from "./new-thrombocytopenia-coagulopathy";

// 29: Special Populations / Obstetric
import { criticallyIllPregnantPostpartumPatient } from "./critically-ill-pregnant-postpartum-patient";

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
  newMurmurShockPulmonaryEdema,

  // Neurologic
  acuteAlteredMentalStatus,
  newFocalNeurologicDeficit,
  newSeizureStatusEpilepticus,
  acuteComaLossOfBrainstemFunction,
  rapidlyProgressiveWeaknessVentilatoryFailure,

  // Renal / Metabolic
  oliguriaFallingUrineOutput,
  metabolicAcidosis,
  metabolicAlkalosis,
  severeHyponatremia,
  severeHypernatremia,
  severeHyperkalemia,

  // Infectious & Immunocompromised
  newFeverSuspectedInfection,
  suspectedSepsis,
  persistentFeverDespiteAntibiotics,
  immunocompromisedFeverOrganFailure,

  // Hematology / GI
  acuteBleedingFallingHemoglobin,
  newThrombocytopeniaCoagulopathy,

  // Special Populations
  criticallyIllPregnantPostpartumPatient,
];
