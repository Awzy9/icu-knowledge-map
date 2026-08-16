import type { Topic } from "@/content-types";
import { bleeding } from "./bleeding";
import { dic } from "./dic";
import { hit } from "./hit";
import { transfusion } from "./transfusion";
import { anticoagulation } from "./anticoagulation";

export const hematologyTopics: readonly Topic[] = [
  bleeding,
  dic,
  hit,
  transfusion,
  anticoagulation,
];
