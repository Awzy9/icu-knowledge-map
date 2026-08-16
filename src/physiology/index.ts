import type { PhysiologyConcept } from "@/content-types";

// Respiratory
import { compliance } from "./compliance";
import { resistance } from "./resistance";
import { deadSpace } from "./dead-space";
import { shunt } from "./shunt";
import { ventilationPerfusionMismatch } from "./ventilation-perfusion-mismatch";
import { autoPeep } from "./auto-peep";
import { drivingPressure } from "./driving-pressure";
import { plateauPressure } from "./plateau-pressure";
import { transpulmonaryPressure } from "./transpulmonary-pressure";
import { workOfBreathing } from "./work-of-breathing";

// Cardiovascular
import { preload } from "./preload";
import { afterload } from "./afterload";
import { contractility } from "./contractility";
import { cardiacOutput } from "./cardiac-output";
import { svr } from "./svr";
import { venousReturn } from "./venous-return";
import { oxygenDeliveryEquation } from "./oxygen-delivery-equation";
import { oxygenConsumption } from "./oxygen-consumption";
import { do2Vo2Relationship } from "./do2-vo2-relationship";
import { rvFailurePhysiology } from "./rv-failure-physiology";

// Renal
import { gfr } from "./gfr";
import { filtration } from "./filtration";
import { tubularFunction } from "./tubular-function";
import { sodiumHandling } from "./sodium-handling";
import { potassiumHandling } from "./potassium-handling";
import { renalAcidBaseRegulation } from "./renal-acid-base-regulation";

// Acid-Base
import { hendersonHasselbalch } from "./henderson-hasselbalch";
import { anionGap } from "./anion-gap";
import { compensation } from "./compensation";
import { wintersFormula } from "./winters-formula";
import { mixedDisorders } from "./mixed-disorders";
import { deltaGap } from "./delta-gap";
import { osmolarGap } from "./osmolar-gap";

export const physiologyConcepts: readonly PhysiologyConcept[] = [
  // Respiratory
  compliance,
  resistance,
  deadSpace,
  shunt,
  ventilationPerfusionMismatch,
  autoPeep,
  drivingPressure,
  plateauPressure,
  transpulmonaryPressure,
  workOfBreathing,
  // Cardiovascular
  preload,
  afterload,
  contractility,
  cardiacOutput,
  svr,
  venousReturn,
  oxygenDeliveryEquation,
  oxygenConsumption,
  do2Vo2Relationship,
  rvFailurePhysiology,
  // Renal
  gfr,
  filtration,
  tubularFunction,
  sodiumHandling,
  potassiumHandling,
  renalAcidBaseRegulation,
  // Acid-Base
  hendersonHasselbalch,
  anionGap,
  compensation,
  wintersFormula,
  mixedDisorders,
  deltaGap,
  osmolarGap,
];
