import type { ClinicalCase } from "@/content-types/clinical-case";

import { septicShockCase } from "./septic-shock";
import { ardsCase } from "./ards";
import { acutePulmonaryEdemaCase } from "./acute-pulmonary-edema";
import { statusAsthmaticusCase } from "./status-asthmaticus";
import { severeHyperkalemiaCase } from "./severe-hyperkalemia";
import { dkaCase } from "./dka";
import { afHemodynamicInstabilityCase } from "./af-hemodynamic-instability";
import { massivePeCase } from "./massive-pe";
import { ventilatorDeteriorationCase } from "./ventilator-deterioration";
import { hypertensiveEmergencyCase } from "./hypertensive-emergency";

// 15 New Clinical Reasoning Cases
import { rvFailurePostIntubationCase } from "./rv-failure-post-intubation";
import { autoPeepShockCase } from "./auto-peep-shock";
import { refractorySepticShockCase } from "./refractory-septic-shock";
import { completeHeartBlockCase } from "./complete-heart-block";
import { vtStormCase } from "./vt-storm";
import { refractoryStatusEpilepticusCase } from "./refractory-status-epilepticus";
import { intracranialHypertensionCase } from "./intracranial-hypertension";
import { severeHyponatremiaCase } from "./severe-hyponatremia";
import { mixedAcidBaseCase } from "./mixed-acid-base";
import { vapMdrCase } from "./vap-mdr";
import { candidemiaCase } from "./candidemia";
import { adrenalCrisisIcuCase } from "./adrenal-crisis-icu";
import { tensionPneumoVentilatedCase } from "./tension-pneumo-ventilated";
import { cardiogenicShockMiCase } from "./cardiogenic-shock-mi";
import { severeMetabolicAlkalosisCase } from "./severe-metabolic-alkalosis";

export const clinicalCases: ClinicalCase[] = [
  // Existing 10 Cases
  septicShockCase,
  ardsCase,
  acutePulmonaryEdemaCase,
  statusAsthmaticusCase,
  severeHyperkalemiaCase,
  dkaCase,
  afHemodynamicInstabilityCase,
  massivePeCase,
  ventilatorDeteriorationCase,
  hypertensiveEmergencyCase,

  // 15 New Cases (Total: 25)
  rvFailurePostIntubationCase,
  autoPeepShockCase,
  refractorySepticShockCase,
  completeHeartBlockCase,
  vtStormCase,
  refractoryStatusEpilepticusCase,
  intracranialHypertensionCase,
  severeHyponatremiaCase,
  mixedAcidBaseCase,
  vapMdrCase,
  candidemiaCase,
  adrenalCrisisIcuCase,
  tensionPneumoVentilatedCase,
  cardiogenicShockMiCase,
  severeMetabolicAlkalosisCase
];
