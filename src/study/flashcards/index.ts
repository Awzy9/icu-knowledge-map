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
import { immunocompromisedOncologicCriticalIllnessFlashcards } from "./immunocompromised-oncologic-critical-illness";
import { intracranialHemorrhageFlashcards } from "./intracranial-hemorrhage";
import { intracranialHypertensionFlashcards } from "./intracranial-hypertension";
import { lowerGiBleedingFlashcards } from "./lower-gi-bleeding";
import { mdrOrganismsFlashcards } from "./mdr-organisms";
import { mechanicalVentilationFlashcards } from "./mechanical-ventilation";
import { meningitisEncephalitisFlashcards } from "./meningitis-encephalitis";
import { metabolicAcidosisFlashcards } from "./metabolic-acidosis";
import { necrotizingSoftTissueInfectionsFlashcards } from "./necrotizing-soft-tissue-infections";
import { neuromuscularCriticalIllnessFlashcards } from "./neuromuscular-critical-illness";
import { obstetricCriticalCareFlashcards } from "./obstetric-critical-care";
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
import { valvularHeartDiseaseEndocarditisFlashcards } from "./valvular-heart-disease-endocarditis";
import { vapFlashcards } from "./vap";

export const flashcardsByTopic: Record<string, readonly Flashcard[]> = {
  "acid-base-disorders": acidBaseDisordersFlashcards,
  "acute-aortic-syndromes": acuteAorticSyndromesFlashcards,
  "acute-coronary-syndrome": acuteCoronarySyndromeFlashcards,
  "acute-heart-failure": acuteHeartFailureFlashcards,
  "acute-ischemic-stroke": acuteIschemicStrokeFlashcards,
  "acute-liver-failure": acuteLiverFailureFlashcards,
  "acute-mesenteric-ischemia": acuteMesentericIschemiaFlashcards,
  "acute-pancreatitis": acutePancreatitisFlashcards,
  "airway-management-rsi": airwayManagementRsiFlashcards,
  "aki": akiFlashcards,
  "altered-consciousness": alteredConsciousnessFlashcards,
  "anticoagulation": anticoagulationFlashcards,
  "ards": ardsFlashcards,
  "arrhythmias": arrhythmiasFlashcards,
  "asthma": asthmaFlashcards,
  "bleeding": bleedingFlashcards,
  "brain-death": brainDeathFlashcards,
  "burns-critical-care": burnsCriticalCareFlashcards,
  "cardiac-arrest-post-arrest": cardiacArrestPostArrestFlashcards,
  "cardiogenic-pulmonary-edema": cardiogenicPulmonaryEdemaFlashcards,
  "cardiogenic-shock": cardiogenicShockFlashcards,
  "copd-exacerbation": copdExacerbationFlashcards,
  "critical-illness-nutrition": criticalIllnessNutritionFlashcards,
  "crrt": crrtFlashcards,
  "diabetic-ketoacidosis": diabeticKetoacidosisFlashcards,
  "dic": dicFlashcards,
  "ecmo-fundamentals": ecmoFundamentalsFlashcards,
  "endocrine-emergencies": endocrineEmergenciesFlashcards,
  "hap": hapFlashcards,
  "hit": hitFlashcards,
  "hypercapnic-respiratory-failure": hypercapnicRespiratoryFailureFlashcards,
  "hyperkalemia": hyperkalemiaFlashcards,
  "hypertensive-emergencies": hypertensiveEmergenciesFlashcards,
  "hypoxemic-respiratory-failure": hypoxemicRespiratoryFailureFlashcards,
  "icu-sedation-delirium": icuSedationDeliriumFlashcards,
  "immunocompromised-oncologic-critical-illness": immunocompromisedOncologicCriticalIllnessFlashcards,
  "intracranial-hemorrhage": intracranialHemorrhageFlashcards,
  "intracranial-hypertension": intracranialHypertensionFlashcards,
  "lower-gi-bleeding": lowerGiBleedingFlashcards,
  "mdr-organisms": mdrOrganismsFlashcards,
  "mechanical-ventilation": mechanicalVentilationFlashcards,
  "meningitis-encephalitis": meningitisEncephalitisFlashcards,
  "metabolic-acidosis": metabolicAcidosisFlashcards,
  "necrotizing-soft-tissue-infections": necrotizingSoftTissueInfectionsFlashcards,
  "neuromuscular-critical-illness": neuromuscularCriticalIllnessFlashcards,
  "obstetric-critical-care": obstetricCriticalCareFlashcards,
  "obstructive-shock": obstructiveShockFlashcards,
  "pneumonia": pneumoniaFlashcards,
  "pneumothorax": pneumothoraxFlashcards,
  "pulmonary-embolism": pulmonaryEmbolismFlashcards,
  "pulmonary-hypertension": pulmonaryHypertensionFlashcards,
  "respiratory-failure-basics": respiratoryFailureBasicsFlashcards,
  "rv-failure": rvFailureFlashcards,
  "sepsis": sepsisFlashcards,
  "septic-shock": septicShockFlashcards,
  "severe-sodium-disorders": severeSodiumDisordersFlashcards,
  "severe-tbi": severeTbiFlashcards,
  "shock": shockFlashcards,
  "status-epilepticus": statusEpilepticusFlashcards,
  "toxicologic-emergencies": toxicologicEmergenciesFlashcards,
  "transfusion": transfusionFlashcards,
  "upper-gi-bleeding": upperGiBleedingFlashcards,
  "valvular-heart-disease-endocarditis": valvularHeartDiseaseEndocarditisFlashcards,
  "vap": vapFlashcards,
};

export const allFlashcards: readonly Flashcard[] = Object.values(flashcardsByTopic).flat();
export const flashcards = allFlashcards;
