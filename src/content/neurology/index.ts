import type { Topic } from "@/content-types";
import { alteredConsciousness } from "./altered-consciousness";
import { statusEpilepticus } from "./status-epilepticus";
import { intracranialHypertension } from "./intracranial-hypertension";
import { brainDeath } from "./brain-death";
import { acuteIschemicStroke } from "./acute-ischemic-stroke";
import { intracranialHemorrhage } from "./intracranial-hemorrhage";
import { severeTbi } from "./severe-tbi";
import { meningitisEncephalitis } from "./meningitis-encephalitis";
import { icuSedationDelirium } from "./icu-sedation-delirium";
import { neuromuscularCriticalIllness } from "./neuromuscular-critical-illness";

export const neurologyTopics: readonly Topic[] = [
  alteredConsciousness,
  statusEpilepticus,
  intracranialHypertension,
  brainDeath,
  acuteIschemicStroke,
  intracranialHemorrhage,
  severeTbi,
  meningitisEncephalitis,
  icuSedationDelirium,
  neuromuscularCriticalIllness,
];
