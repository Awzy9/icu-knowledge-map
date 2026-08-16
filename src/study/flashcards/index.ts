import type { Flashcard } from "@/content-types";
import { acidBaseDisordersFlashcards } from "./acid-base-disorders";
import { acuteAorticSyndromesFlashcards } from "./acute-aortic-syndromes";
import { acuteCoronarySyndromeFlashcards } from "./acute-coronary-syndrome";
import { acuteHeartFailureFlashcards } from "./acute-heart-failure";
import { acuteIschemicStrokeFlashcards } from "./acute-ischemic-stroke";
import { acuteLiverFailureFlashcards } from "./acute-liver-failure";
import { acuteMesentericIschemiaFlashcards } from "./acute-mesenteric-ischemia";
import { acutePancreatitisFlashcards } from "./acute-pancreatitis";
import { airwayManagementRsiFlashcards } from "./airway-management-rsi";
import { akiFlashcards } from "./aki";
import { alteredConsciousnessFlashcards } from "./altered-consciousness";
import { anticoagulationFlashcards } from "./anticoagulation";
import { ardsFlashcards } from "./ards";
import { arrhythmiasFlashcards } from "./arrhythmias";
import { asthmaFlashcards } from "./asthma";
import { bleedingFlashcards } from "./bleeding";
import { brainDeathFlashcards } from "./brain-death";
import { burnsCriticalCareFlashcards } from "./burns-critical-care";
import { cardiacArrestPostArrestFlashcards } from "./cardiac-arrest-post-arrest";
import { cardiogenicPulmonaryEdemaFlashcards } from "./cardiogenic-pulmonary-edema";
import { cardiogenicShockFlashcards } from "./cardiogenic-shock";
import { copdExacerbationFlashcards } from "./copd-exacerbation";
import { criticalIllnessNutritionFlashcards } from "./critical-illness-nutrition";
import { crrtFlashcards } from "./crrt";
import { diabeticKetoacidosisFlashcards } from "./diabetic-ketoacidosis";
import { dicFlashcards } from "./dic";
import { ecmoFundamentalsFlashcards } from "./ecmo-fundamentals";
import { endocrineEmergenciesFlashcards } from "./endocrine-emergencies";
import { hapFlashcards } from "./hap";
import { hitFlashcards } from "./hit";
import { hypercapnicRespiratoryFailureFlashcards } from "./hypercapnic-respiratory-failure";
import { hyperkalemiaFlashcards } from "./hyperkalemia";
import { hypertensiveEmergenciesFlashcards } from "./hypertensive-emergencies";
import { hypoxemicRespiratoryFailureFlashcards } from "./hypoxemic-respiratory-failure";
import { icuSedationDeliriumFlashcards } from "./icu-sedation-delirium";
import { intracranialHemorrhageFlashcards } from "./intracranial-hemorrhage";
import { intracranialHypertensionFlashcards } from "./intracranial-hypertension";
import { lowerGiBleedingFlashcards } from "./lower-gi-bleeding";
import { mdrOrganismsFlashcards } from "./mdr-organisms";
import { mechanicalVentilationFlashcards } from "./mechanical-ventilation";
import { meningitisEncephalitisFlashcards } from "./meningitis-encephalitis";
import { metabolicAcidosisFlashcards } from "./metabolic-acidosis";
import { necrotizingSoftTissueInfectionsFlashcards } from "./necrotizing-soft-tissue-infections";
import { obstructiveShockFlashcards } from "./obstructive-shock";
import { pneumoniaFlashcards } from "./pneumonia";
import { pneumothoraxFlashcards } from "./pneumothorax";
import { pulmonaryEmbolismFlashcards } from "./pulmonary-embolism";
import { pulmonaryHypertensionFlashcards } from "./pulmonary-hypertension";
import { respiratoryFailureBasicsFlashcards } from "./respiratory-failure-basics";
import { rvFailureFlashcards } from "./rv-failure";
import { sepsisFlashcards } from "./sepsis";
import { septicShockFlashcards } from "./septic-shock";
import { severeSodiumDisordersFlashcards } from "./severe-sodium-disorders";
import { severeTbiFlashcards } from "./severe-tbi";
import { shockFlashcards } from "./shock";
import { statusEpilepticusFlashcards } from "./status-epilepticus";
import { toxicologicEmergenciesFlashcards } from "./toxicologic-emergencies";
import { transfusionFlashcards } from "./transfusion";
import { upperGiBleedingFlashcards } from "./upper-gi-bleeding";
import { vapFlashcards } from "./vap";

export const flashcards: readonly Flashcard[] = [
  ...acidBaseDisordersFlashcards,
  ...acuteAorticSyndromesFlashcards,
  ...acuteCoronarySyndromeFlashcards,
  ...acuteHeartFailureFlashcards,
  ...acuteIschemicStrokeFlashcards,
  ...acuteLiverFailureFlashcards,
  ...acuteMesentericIschemiaFlashcards,
  ...acutePancreatitisFlashcards,
  ...airwayManagementRsiFlashcards,
  ...akiFlashcards,
  ...alteredConsciousnessFlashcards,
  ...anticoagulationFlashcards,
  ...ardsFlashcards,
  ...arrhythmiasFlashcards,
  ...asthmaFlashcards,
  ...bleedingFlashcards,
  ...brainDeathFlashcards,
  ...burnsCriticalCareFlashcards,
  ...cardiacArrestPostArrestFlashcards,
  ...cardiogenicPulmonaryEdemaFlashcards,
  ...cardiogenicShockFlashcards,
  ...copdExacerbationFlashcards,
  ...criticalIllnessNutritionFlashcards,
  ...crrtFlashcards,
  ...diabeticKetoacidosisFlashcards,
  ...dicFlashcards,
  ...ecmoFundamentalsFlashcards,
  ...endocrineEmergenciesFlashcards,
  ...hapFlashcards,
  ...hitFlashcards,
  ...hypercapnicRespiratoryFailureFlashcards,
  ...hyperkalemiaFlashcards,
  ...hypertensiveEmergenciesFlashcards,
  ...hypoxemicRespiratoryFailureFlashcards,
  ...icuSedationDeliriumFlashcards,
  ...intracranialHemorrhageFlashcards,
  ...intracranialHypertensionFlashcards,
  ...lowerGiBleedingFlashcards,
  ...mdrOrganismsFlashcards,
  ...mechanicalVentilationFlashcards,
  ...meningitisEncephalitisFlashcards,
  ...metabolicAcidosisFlashcards,
  ...necrotizingSoftTissueInfectionsFlashcards,
  ...obstructiveShockFlashcards,
  ...pneumoniaFlashcards,
  ...pneumothoraxFlashcards,
  ...pulmonaryEmbolismFlashcards,
  ...pulmonaryHypertensionFlashcards,
  ...respiratoryFailureBasicsFlashcards,
  ...rvFailureFlashcards,
  ...sepsisFlashcards,
  ...septicShockFlashcards,
  ...severeSodiumDisordersFlashcards,
  ...severeTbiFlashcards,
  ...shockFlashcards,
  ...statusEpilepticusFlashcards,
  ...toxicologicEmergenciesFlashcards,
  ...transfusionFlashcards,
  ...upperGiBleedingFlashcards,
  ...vapFlashcards,
];

export const allFlashcards = flashcards;

export const flashcardsByTopic = flashcards.reduce<Record<string, Flashcard[]>>((acc, card) => {
  if (!acc[card.topicId]) acc[card.topicId] = [];
  acc[card.topicId].push(card);
  return acc;
}, {});
