import type { Topic } from "@/content-types";
import { vap } from "./vap";
import { hap } from "./hap";
import { mdrOrganisms } from "./mdr-organisms";
import { sepsis } from "./sepsis";
import { necrotizingSoftTissueInfections } from "./necrotizing-soft-tissue-infections";

export const infectiousDiseaseTopics: readonly Topic[] = [
  vap,
  hap,
  mdrOrganisms,
  sepsis,
  necrotizingSoftTissueInfections,
];

