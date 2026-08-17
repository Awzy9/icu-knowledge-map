import type { Topic } from "@/content-types";
import { vap } from "./vap";
import { hap } from "./hap";
import { mdrOrganisms } from "./mdr-organisms";
import { sepsis } from "./sepsis";
import { necrotizingSoftTissueInfections } from "./necrotizing-soft-tissue-infections";
import { immunocompromisedOncologicCriticalIllness } from "./immunocompromised-oncologic-critical-illness";

export const infectiousDiseaseTopics: readonly Topic[] = [
  vap,
  hap,
  mdrOrganisms,
  sepsis,
  necrotizingSoftTissueInfections,
  immunocompromisedOncologicCriticalIllness,
];

