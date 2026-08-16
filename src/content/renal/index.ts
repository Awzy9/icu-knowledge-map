import type { Topic } from "@/content-types";
import { crrt } from "./crrt";
import { acidBaseDisorders } from "./acid-base-disorders";
import { metabolicAcidosis } from "./metabolic-acidosis";
import { hyperkalemia } from "./hyperkalemia";
import { aki } from "./aki";
import { diabeticKetoacidosis } from "./diabetic-ketoacidosis";
import { severeSodiumDisorders } from "./severe-sodium-disorders";
import { endocrineEmergencies } from "./endocrine-emergencies";

export const renalTopics: readonly Topic[] = [
  crrt,
  acidBaseDisorders,
  metabolicAcidosis,
  hyperkalemia,
  aki,
  diabeticKetoacidosis,
  severeSodiumDisorders,
  endocrineEmergencies,
];
