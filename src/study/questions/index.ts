import type { Question } from "@/content-types";
import { acidBaseDisordersQuestions } from "./acid-base-disorders";
import { acuteAorticSyndromesQuestions } from "./acute-aortic-syndromes";
import { acuteCoronarySyndromeQuestions } from "./acute-coronary-syndrome";
import { acuteHeartFailureQuestions } from "./acute-heart-failure";
import { acuteIschemicStrokeQuestions } from "./acute-ischemic-stroke";
import { acuteLiverFailureQuestions } from "./acute-liver-failure";
import { acuteMesentericIschemiaQuestions } from "./acute-mesenteric-ischemia";
import { acutePancreatitisQuestions } from "./acute-pancreatitis";
import { airwayManagementRsiQuestions } from "./airway-management-rsi";
import { akiQuestions } from "./aki";
import { alteredConsciousnessQuestions } from "./altered-consciousness";
import { anticoagulationQuestions } from "./anticoagulation";
import { ardsQuestions } from "./ards";
import { arrhythmiasQuestions } from "./arrhythmias";
import { asthmaQuestions } from "./asthma";
import { bleedingQuestions } from "./bleeding";
import { brainDeathQuestions } from "./brain-death";
import { burnsCriticalCareQuestions } from "./burns-critical-care";
import { cardiacArrestPostArrestQuestions } from "./cardiac-arrest-post-arrest";
import { cardiogenicPulmonaryEdemaQuestions } from "./cardiogenic-pulmonary-edema";
import { cardiogenicShockQuestions } from "./cardiogenic-shock";
import { copdExacerbationQuestions } from "./copd-exacerbation";
import { criticalIllnessNutritionQuestions } from "./critical-illness-nutrition";
import { crrtQuestions } from "./crrt";
import { diabeticKetoacidosisQuestions } from "./diabetic-ketoacidosis";
import { dicQuestions } from "./dic";
import { ecmoFundamentalsQuestions } from "./ecmo-fundamentals";
import { endocrineEmergenciesQuestions } from "./endocrine-emergencies";
import { hapQuestions } from "./hap";
import { hitQuestions } from "./hit";
import { hypercapnicRespiratoryFailureQuestions } from "./hypercapnic-respiratory-failure";
import { hyperkalemiaQuestions } from "./hyperkalemia";
import { hypertensiveEmergenciesQuestions } from "./hypertensive-emergencies";
import { hypoxemicRespiratoryFailureQuestions } from "./hypoxemic-respiratory-failure";
import { icuSedationDeliriumQuestions } from "./icu-sedation-delirium";
import { immunocompromisedOncologicCriticalIllnessQuestions } from "./immunocompromised-oncologic-critical-illness";
import { intracranialHemorrhageQuestions } from "./intracranial-hemorrhage";
import { intracranialHypertensionQuestions } from "./intracranial-hypertension";
import { lowerGiBleedingQuestions } from "./lower-gi-bleeding";
import { mdrOrganismsQuestions } from "./mdr-organisms";
import { mechanicalVentilationQuestions } from "./mechanical-ventilation";
import { meningitisEncephalitisQuestions } from "./meningitis-encephalitis";
import { metabolicAcidosisQuestions } from "./metabolic-acidosis";
import { necrotizingSoftTissueInfectionsQuestions } from "./necrotizing-soft-tissue-infections";
import { neuromuscularCriticalIllnessQuestions } from "./neuromuscular-critical-illness";
import { obstetricCriticalCareQuestions } from "./obstetric-critical-care";
import { obstructiveShockQuestions } from "./obstructive-shock";
import { pneumoniaQuestions } from "./pneumonia";
import { pneumothoraxQuestions } from "./pneumothorax";
import { pulmonaryEmbolismQuestions } from "./pulmonary-embolism";
import { pulmonaryHypertensionQuestions } from "./pulmonary-hypertension";
import { respiratoryFailureBasicsQuestions } from "./respiratory-failure-basics";
import { rvFailureQuestions } from "./rv-failure";
import { sepsisQuestions } from "./sepsis";
import { septicShockQuestions } from "./septic-shock";
import { severeSodiumDisordersQuestions } from "./severe-sodium-disorders";
import { severeTbiQuestions } from "./severe-tbi";
import { shockQuestions } from "./shock";
import { statusEpilepticusQuestions } from "./status-epilepticus";
import { toxicologicEmergenciesQuestions } from "./toxicologic-emergencies";
import { transfusionQuestions } from "./transfusion";
import { upperGiBleedingQuestions } from "./upper-gi-bleeding";
import { valvularHeartDiseaseEndocarditisQuestions } from "./valvular-heart-disease-endocarditis";
import { vapQuestions } from "./vap";

export const questionsByTopic: Record<string, readonly Question[]> = {
  "acid-base-disorders": acidBaseDisordersQuestions,
  "acute-aortic-syndromes": acuteAorticSyndromesQuestions,
  "acute-coronary-syndrome": acuteCoronarySyndromeQuestions,
  "acute-heart-failure": acuteHeartFailureQuestions,
  "acute-ischemic-stroke": acuteIschemicStrokeQuestions,
  "acute-liver-failure": acuteLiverFailureQuestions,
  "acute-mesenteric-ischemia": acuteMesentericIschemiaQuestions,
  "acute-pancreatitis": acutePancreatitisQuestions,
  "airway-management-rsi": airwayManagementRsiQuestions,
  "aki": akiQuestions,
  "altered-consciousness": alteredConsciousnessQuestions,
  "anticoagulation": anticoagulationQuestions,
  "ards": ardsQuestions,
  "arrhythmias": arrhythmiasQuestions,
  "asthma": asthmaQuestions,
  "bleeding": bleedingQuestions,
  "brain-death": brainDeathQuestions,
  "burns-critical-care": burnsCriticalCareQuestions,
  "cardiac-arrest-post-arrest": cardiacArrestPostArrestQuestions,
  "cardiogenic-pulmonary-edema": cardiogenicPulmonaryEdemaQuestions,
  "cardiogenic-shock": cardiogenicShockQuestions,
  "copd-exacerbation": copdExacerbationQuestions,
  "critical-illness-nutrition": criticalIllnessNutritionQuestions,
  "crrt": crrtQuestions,
  "diabetic-ketoacidosis": diabeticKetoacidosisQuestions,
  "dic": dicQuestions,
  "ecmo-fundamentals": ecmoFundamentalsQuestions,
  "endocrine-emergencies": endocrineEmergenciesQuestions,
  "hap": hapQuestions,
  "hit": hitQuestions,
  "hypercapnic-respiratory-failure": hypercapnicRespiratoryFailureQuestions,
  "hyperkalemia": hyperkalemiaQuestions,
  "hypertensive-emergencies": hypertensiveEmergenciesQuestions,
  "hypoxemic-respiratory-failure": hypoxemicRespiratoryFailureQuestions,
  "icu-sedation-delirium": icuSedationDeliriumQuestions,
  "immunocompromised-oncologic-critical-illness": immunocompromisedOncologicCriticalIllnessQuestions,
  "intracranial-hemorrhage": intracranialHemorrhageQuestions,
  "intracranial-hypertension": intracranialHypertensionQuestions,
  "lower-gi-bleeding": lowerGiBleedingQuestions,
  "mdr-organisms": mdrOrganismsQuestions,
  "mechanical-ventilation": mechanicalVentilationQuestions,
  "meningitis-encephalitis": meningitisEncephalitisQuestions,
  "metabolic-acidosis": metabolicAcidosisQuestions,
  "necrotizing-soft-tissue-infections": necrotizingSoftTissueInfectionsQuestions,
  "neuromuscular-critical-illness": neuromuscularCriticalIllnessQuestions,
  "obstetric-critical-care": obstetricCriticalCareQuestions,
  "obstructive-shock": obstructiveShockQuestions,
  "pneumonia": pneumoniaQuestions,
  "pneumothorax": pneumothoraxQuestions,
  "pulmonary-embolism": pulmonaryEmbolismQuestions,
  "pulmonary-hypertension": pulmonaryHypertensionQuestions,
  "respiratory-failure-basics": respiratoryFailureBasicsQuestions,
  "rv-failure": rvFailureQuestions,
  "sepsis": sepsisQuestions,
  "septic-shock": septicShockQuestions,
  "severe-sodium-disorders": severeSodiumDisordersQuestions,
  "severe-tbi": severeTbiQuestions,
  "shock": shockQuestions,
  "status-epilepticus": statusEpilepticusQuestions,
  "toxicologic-emergencies": toxicologicEmergenciesQuestions,
  "transfusion": transfusionQuestions,
  "upper-gi-bleeding": upperGiBleedingQuestions,
  "valvular-heart-disease-endocarditis": valvularHeartDiseaseEndocarditisQuestions,
  "vap": vapQuestions,
};

export const allQuestions: readonly Question[] = Object.values(questionsByTopic).flat();
export const questions = allQuestions;
