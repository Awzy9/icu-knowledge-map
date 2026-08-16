import type { Topic } from "@/content-types";
import { shock } from "./shock";
import { cardiogenicPulmonaryEdema } from "./cardiogenic-pulmonary-edema";
import { septicShock } from "./septic-shock";
import { cardiogenicShock } from "./cardiogenic-shock";
import { obstructiveShock } from "./obstructive-shock";
import { rvFailure } from "./rv-failure";
import { arrhythmias } from "./arrhythmias";
import { acuteCoronarySyndrome } from "./acute-coronary-syndrome";
import { acuteHeartFailure } from "./acute-heart-failure";
import { cardiacArrestPostArrest } from "./cardiac-arrest-post-arrest";
import { acuteAorticSyndromes } from "./acute-aortic-syndromes";
import { hypertensiveEmergencies } from "./hypertensive-emergencies";
import { pulmonaryHypertension } from "./pulmonary-hypertension";

export const cardiovascularTopics: readonly Topic[] = [
  shock,
  cardiogenicPulmonaryEdema,
  septicShock,
  cardiogenicShock,
  obstructiveShock,
  rvFailure,
  arrhythmias,
  acuteCoronarySyndrome,
  acuteHeartFailure,
  cardiacArrestPostArrest,
  acuteAorticSyndromes,
  hypertensiveEmergencies,
  pulmonaryHypertension,
];
