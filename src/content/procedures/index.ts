import type { Topic } from "@/content-types";
import { airwayManagementRsi } from "./airway-management-rsi";
import { toxicologicEmergencies } from "./toxicologic-emergencies";
import { ecmoFundamentals } from "./ecmo-fundamentals";
import { burnsCriticalCare } from "./burns-critical-care";
import { obstetricCriticalCare } from "./obstetric-critical-care";

export const proceduresTopics: readonly Topic[] = [
  airwayManagementRsi,
  toxicologicEmergencies,
  ecmoFundamentals,
  burnsCriticalCare,
  obstetricCriticalCare,
];
