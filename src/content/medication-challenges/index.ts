import type { MedicationChallenge } from "@/content-types/medication-challenge";

import { hemodynamicChallenges } from "./hemodynamic-challenges";
import { antimicrobialChallenges } from "./antimicrobial-challenges";
import { sedationAnalgesiaChallenges } from "./sedation-analgesia-challenges";
import { organFailureChallenges } from "./organ-failure-challenges";
import { interactionToxicityChallenges } from "./interaction-toxicity-challenges";

export const medicationChallenges: MedicationChallenge[] = [
  ...hemodynamicChallenges,
  ...antimicrobialChallenges,
  ...sedationAnalgesiaChallenges,
  ...organFailureChallenges,
  ...interactionToxicityChallenges,
];
