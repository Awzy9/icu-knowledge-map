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
import { intracranialHemorrhageQuestions } from "./intracranial-hemorrhage";
import { intracranialHypertensionQuestions } from "./intracranial-hypertension";
import { lowerGiBleedingQuestions } from "./lower-gi-bleeding";
import { mdrOrganismsQuestions } from "./mdr-organisms";
import { mechanicalVentilationQuestions } from "./mechanical-ventilation";
import { meningitisEncephalitisQuestions } from "./meningitis-encephalitis";
import { metabolicAcidosisQuestions } from "./metabolic-acidosis";
import { necrotizingSoftTissueInfectionsQuestions } from "./necrotizing-soft-tissue-infections";
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
import { vapQuestions } from "./vap";

export const questions: readonly Question[] = [
  ...acidBaseDisordersQuestions,
  ...acuteAorticSyndromesQuestions,
  ...acuteCoronarySyndromeQuestions,
  ...acuteHeartFailureQuestions,
  ...acuteIschemicStrokeQuestions,
  ...acuteLiverFailureQuestions,
  ...acuteMesentericIschemiaQuestions,
  ...acutePancreatitisQuestions,
  ...airwayManagementRsiQuestions,
  ...akiQuestions,
  ...alteredConsciousnessQuestions,
  ...anticoagulationQuestions,
  ...ardsQuestions,
  ...arrhythmiasQuestions,
  ...asthmaQuestions,
  ...bleedingQuestions,
  ...brainDeathQuestions,
  ...burnsCriticalCareQuestions,
  ...cardiacArrestPostArrestQuestions,
  ...cardiogenicPulmonaryEdemaQuestions,
  ...cardiogenicShockQuestions,
  ...copdExacerbationQuestions,
  ...criticalIllnessNutritionQuestions,
  ...crrtQuestions,
  ...diabeticKetoacidosisQuestions,
  ...dicQuestions,
  ...ecmoFundamentalsQuestions,
  ...endocrineEmergenciesQuestions,
  ...hapQuestions,
  ...hitQuestions,
  ...hypercapnicRespiratoryFailureQuestions,
  ...hyperkalemiaQuestions,
  ...hypertensiveEmergenciesQuestions,
  ...hypoxemicRespiratoryFailureQuestions,
  ...icuSedationDeliriumQuestions,
  ...intracranialHemorrhageQuestions,
  ...intracranialHypertensionQuestions,
  ...lowerGiBleedingQuestions,
  ...mdrOrganismsQuestions,
  ...mechanicalVentilationQuestions,
  ...meningitisEncephalitisQuestions,
  ...metabolicAcidosisQuestions,
  ...necrotizingSoftTissueInfectionsQuestions,
  ...obstructiveShockQuestions,
  ...pneumoniaQuestions,
  ...pneumothoraxQuestions,
  ...pulmonaryEmbolismQuestions,
  ...pulmonaryHypertensionQuestions,
  ...respiratoryFailureBasicsQuestions,
  ...rvFailureQuestions,
  ...sepsisQuestions,
  ...septicShockQuestions,
  ...severeSodiumDisordersQuestions,
  ...severeTbiQuestions,
  ...shockQuestions,
  ...statusEpilepticusQuestions,
  ...toxicologicEmergenciesQuestions,
  ...transfusionQuestions,
  ...upperGiBleedingQuestions,
  ...vapQuestions,
];

export const allQuestions = questions;

export const questionsByTopic = questions.reduce<Record<string, Question[]>>((acc, q) => {
  if (!acc[q.topicId]) acc[q.topicId] = [];
  acc[q.topicId].push(q);
  return acc;
}, {});
