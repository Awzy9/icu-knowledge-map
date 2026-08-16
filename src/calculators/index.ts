import type { Calculator } from "@/content-types";

// Respiratory
import { pao2Fio2Ratio } from "./pao2-fio2-ratio";
import { drivingPressure } from "./driving-pressure";
import { staticCompliance } from "./static-compliance";
import { minuteVentilation } from "./minute-ventilation";
import { idealBodyWeight } from "./ideal-body-weight";
import { tidalVolumeByPbw } from "./tidal-volume-by-pbw";

// Hemodynamics
import { map } from "./map";
import { shockIndex } from "./shock-index";

// Acid-Base
import { anionGap } from "./anion-gap";
import { deltaGap } from "./delta-gap";
import { deltaRatio } from "./delta-ratio";
import { wintersFormula } from "./winters-formula";
import { osmolarGap } from "./osmolar-gap";

// Renal
import { creatinineClearance } from "./creatinine-clearance";
import { fena } from "./fena";
import { feurea } from "./feurea";
import { freeWaterDeficit } from "./free-water-deficit";

// Electrolytes
import { correctedSodium } from "./corrected-sodium";

export const calculators: readonly Calculator[] = [
  // Respiratory
  pao2Fio2Ratio,
  drivingPressure,
  staticCompliance,
  minuteVentilation,
  idealBodyWeight,
  tidalVolumeByPbw,
  // Hemodynamics
  map,
  shockIndex,
  // Acid-Base
  anionGap,
  deltaGap,
  deltaRatio,
  wintersFormula,
  osmolarGap,
  // Renal
  creatinineClearance,
  fena,
  feurea,
  freeWaterDeficit,
  // Electrolytes
  correctedSodium,
];
