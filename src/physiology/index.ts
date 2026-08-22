import type { PhysiologyConcept } from "@/content-types";

// Original Core Concepts
import { plateauPressure } from "./plateau-pressure";
import { drivingPressure } from "./driving-pressure";
import { compliance } from "./compliance";
import { resistance } from "./resistance";
import { autoPeep } from "./auto-peep";
import { transpulmonaryPressure } from "./transpulmonary-pressure";
import { deadSpace } from "./dead-space";
import { shunt } from "./shunt";
import { workOfBreathing } from "./work-of-breathing";
import { ventilationPerfusionMismatch } from "./ventilation-perfusion-mismatch";
import { oxygenDeliveryEquation } from "./oxygen-delivery-equation";
import { oxygenConsumption } from "./oxygen-consumption";
import { do2Vo2Relationship } from "./do2-vo2-relationship";
import { preload } from "./preload";
import { afterload } from "./afterload";
import { contractility } from "./contractility";
import { cardiacOutput } from "./cardiac-output";
import { svr } from "./svr";
import { venousReturn } from "./venous-return";
import { rvFailurePhysiology } from "./rv-failure-physiology";
import { filtration } from "./filtration";
import { gfr } from "./gfr";
import { tubularFunction } from "./tubular-function";
import { sodiumHandling } from "./sodium-handling";
import { potassiumHandling } from "./potassium-handling";
import { renalAcidBaseRegulation } from "./renal-acid-base-regulation";
import { hendersonHasselbalch } from "./henderson-hasselbalch";
import { anionGap } from "./anion-gap";
import { deltaGap } from "./delta-gap";
import { osmolarGap } from "./osmolar-gap";
import { compensation } from "./compensation";
import { wintersFormula } from "./winters-formula";
import { mixedDisorders } from "./mixed-disorders";

// 15 Interactive Physiology Visual 2.0 Modules
import { septicShockPhysiology } from "./septic-shock-physiology";
import { cardiogenicShockPhysiology } from "./cardiogenic-shock-physiology";
import { rvFailureDynamic } from "./rv-failure-dynamic";
import { positivePressureVentilationPhysiology } from "./positive-pressure-ventilation-physiology";
import { autoPeepHemodynamics } from "./auto-peep-hemodynamics";
import { ardsPathophysiology } from "./ards-pathophysiology";
import { obstructiveShockPePhysiology } from "./obstructive-shock-pe-physiology";
import { tamponadePhysiology } from "./tamponade-physiology";
import { hyperkalemiaTreatmentPhysiology } from "./hyperkalemia-treatment-physiology";
import { dkaPhysiology } from "./dka-physiology";
import { loopDiureticPhysiology } from "./loop-diuretic-physiology";
import { acidBasePrimaryDisorders } from "./acid-base-primary-disorders";
import { aorticDissectionPhysiology } from "./aortic-dissection-physiology";
import { cerebralPerfusionCpp } from "./cerebral-perfusion-cpp";
import { oxygenDeliveryDo2 } from "./oxygen-delivery-do2";

export const physiologyConcepts: readonly PhysiologyConcept[] = [
  // Core Reference Concepts
  plateauPressure,
  drivingPressure,
  compliance,
  resistance,
  autoPeep,
  transpulmonaryPressure,
  deadSpace,
  shunt,
  workOfBreathing,
  ventilationPerfusionMismatch,
  oxygenDeliveryEquation,
  oxygenConsumption,
  do2Vo2Relationship,
  preload,
  afterload,
  contractility,
  cardiacOutput,
  svr,
  venousReturn,
  rvFailurePhysiology,
  filtration,
  gfr,
  tubularFunction,
  sodiumHandling,
  potassiumHandling,
  renalAcidBaseRegulation,
  hendersonHasselbalch,
  anionGap,
  deltaGap,
  osmolarGap,
  compensation,
  wintersFormula,
  mixedDisorders,

  // 15 Physiology Visual 2.0 Dynamic Modules
  septicShockPhysiology,
  cardiogenicShockPhysiology,
  rvFailureDynamic,
  positivePressureVentilationPhysiology,
  autoPeepHemodynamics,
  ardsPathophysiology,
  obstructiveShockPePhysiology,
  tamponadePhysiology,
  hyperkalemiaTreatmentPhysiology,
  dkaPhysiology,
  loopDiureticPhysiology,
  acidBasePrimaryDisorders,
  aorticDissectionPhysiology,
  cerebralPerfusionCpp,
  oxygenDeliveryDo2,
];
