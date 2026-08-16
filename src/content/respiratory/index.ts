import type { Topic } from "@/content-types";
import { ards } from "./ards";
import { respiratoryFailureBasics } from "./respiratory-failure-basics";
import { mechanicalVentilation } from "./mechanical-ventilation";
import { pneumothorax } from "./pneumothorax";
import { hypoxemicRespiratoryFailure } from "./hypoxemic-respiratory-failure";
import { hypercapnicRespiratoryFailure } from "./hypercapnic-respiratory-failure";
import { copdExacerbation } from "./copd-exacerbation";
import { asthma } from "./asthma";
import { pneumonia } from "./pneumonia";
import { pulmonaryEmbolism } from "./pulmonary-embolism";

export const respiratoryTopics: readonly Topic[] = [
  ards,
  respiratoryFailureBasics,
  mechanicalVentilation,
  pneumothorax,
  hypoxemicRespiratoryFailure,
  hypercapnicRespiratoryFailure,
  copdExacerbation,
  asthma,
  pneumonia,
  pulmonaryEmbolism,
];

