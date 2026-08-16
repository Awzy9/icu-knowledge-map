import type { Topic } from "@/content-types";
import { respiratoryTopics } from "./respiratory/index";
import { cardiovascularTopics } from "./cardiovascular/index";
import { renalTopics } from "./renal/index";
import { infectiousDiseaseTopics } from "./infectious-disease/index";
import { neurologyTopics } from "./neurology/index";
import { gastrointestinalTopics } from "./gastrointestinal/index";
import { hematologyTopics } from "./hematology/index";
import { proceduresTopics } from "./procedures/index";

export const allTopics: readonly Topic[] = [
  ...respiratoryTopics,
  ...cardiovascularTopics,
  ...renalTopics,
  ...infectiousDiseaseTopics,
  ...neurologyTopics,
  ...gastrointestinalTopics,
  ...hematologyTopics,
  ...proceduresTopics,
];

