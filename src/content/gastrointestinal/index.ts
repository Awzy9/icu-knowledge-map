import type { Topic } from "@/content-types";
import { acuteLiverFailure } from "./acute-liver-failure";
import { acutePancreatitis } from "./acute-pancreatitis";
import { upperGiBleeding } from "./upper-gi-bleeding";
import { lowerGiBleeding } from "./lower-gi-bleeding";
import { acuteMesentericIschemia } from "./acute-mesenteric-ischemia";
import { criticalIllnessNutrition } from "./critical-illness-nutrition";

export const gastrointestinalTopics: readonly Topic[] = [
  acuteLiverFailure,
  acutePancreatitis,
  upperGiBleeding,
  lowerGiBleeding,
  acuteMesentericIschemia,
  criticalIllnessNutrition,
];
