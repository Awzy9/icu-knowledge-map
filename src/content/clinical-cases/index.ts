import type { ClinicalCase } from "@/content-types/clinical-case";

import { septicShockCase } from "./septic-shock";
import { ardsCase } from "./ards";
import { acutePulmonaryEdemaCase } from "./acute-pulmonary-edema";
import { statusAsthmaticusCase } from "./status-asthmaticus";
import { severeHyperkalemiaCase } from "./severe-hyperkalemia";
import { dkaCase } from "./dka";
import { afHemodynamicInstabilityCase } from "./af-hemodynamic-instability";
import { massivePeCase } from "./massive-pe";
import { ventilatorDeteriorationCase } from "./ventilator-deterioration";
import { hypertensiveEmergencyCase } from "./hypertensive-emergency";

export const clinicalCases: ClinicalCase[] = [
  septicShockCase,
  ardsCase,
  acutePulmonaryEdemaCase,
  statusAsthmaticusCase,
  severeHyperkalemiaCase,
  dkaCase,
  afHemodynamicInstabilityCase,
  massivePeCase,
  ventilatorDeteriorationCase,
  hypertensiveEmergencyCase
];
