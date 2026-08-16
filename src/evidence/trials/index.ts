import type { Trial } from "@/content-types";
import { acidosisBicarIcuTrial } from "./acidosis-bicar-icu-trial";
import { ahfAdvorTrial } from "./ahf-advor-trial";
import { airwayPreventTrial } from "./airway-prevent-trial";
import { aisDawnTrial } from "./ais-dawn-trial";
import { akiAkiki } from "./aki-akiki";
import { akiElain } from "./aki-elain";
import { akiIdealIcu } from "./aki-ideal-icu";
import { akiStarrtAki } from "./aki-starrt-aki";
import { anticoagReVerseAdTrial } from "./anticoag-re-verse-ad-trial";
import { aorticSyndromesInsteadXlTrial } from "./aortic-syndromes-instead-xl-trial";
import { ardsAcurasys } from "./ards-acurasys";
import { ardsAlveoli } from "./ards-alveoli";
import { ardsArma } from "./ards-arma";
import { ardsArt } from "./ards-art";
import { ardsDexaArds } from "./ards-dexa-ards";
import { ardsEolia } from "./ards-eolia";
import { ardsFactt } from "./ards-factt";
import { ardsProseva } from "./ards-proseva";
import { ardsRose } from "./ards-rose";
import { bleedingCrash2 } from "./bleeding-crash-2";
import { bleedingProppr } from "./bleeding-proppr";
import { cardiacArrestCoactTrial } from "./cardiac-arrest-coact-trial";
import { cardiacArrestTtm2Trial } from "./cardiac-arrest-ttm2-trial";
import { cardiogenicPulmonaryEdemaDoseTrial } from "./cardiogenic-pulmonary-edema-dose-trial";
import { cardiogenicShockCulpritShock } from "./cardiogenic-shock-culprit-shock";
import { cardiogenicShockDangerShock } from "./cardiogenic-shock-danger-shock";
import { cardiogenicShockIabpShockIi } from "./cardiogenic-shock-iabp-shock-ii";
import { cardiogenicShockShockTrial } from "./cardiogenic-shock-shock-trial";
import { copdReduceTrial } from "./copd-reduce-trial";
import { crrtAtnTrial } from "./crrt-atn-trial";
import { crrtRenalTrial } from "./crrt-renal-trial";
import { cshockDoremiTrial } from "./cshock-doremi-trial";
import { ecmoCesarTrial } from "./ecmo-cesar-trial";
import { ecmoEclsShockTrial } from "./ecmo-ecls-shock-trial";
import { hyperkalemiaHarmonizeTrial } from "./hyperkalemia-harmonize-trial";
import { hypoxemicFloraliTrial } from "./hypoxemic-florali-trial";
import { ichInteract2Trial } from "./ich-interact2-trial";
import { ichPatchTrial } from "./ich-patch-trial";
import { intracranialHypertensionDecra } from "./intracranial-hypertension-decra";
import { intracranialHypertensionRescueicp } from "./intracranial-hypertension-rescueicp";
import { meningitisDeGansTrial } from "./meningitis-de-gans-trial";
import { nutritionEpanicTrial } from "./nutrition-epanic-trial";
import { nutritionTargetTrial } from "./nutrition-target-trial";
import { pancreatitisPanterTrial } from "./pancreatitis-panter-trial";
import { pancreatitisWaterfallTrial } from "./pancreatitis-waterfall-trial";
import { pePeithoTrial } from "./pe-peitho-trial";
import { phAmbitionTrial } from "./ph-ambition-trial";
import { pneumoniaCapeCodTrial } from "./pneumonia-cape-cod-trial";
import { sedationAbcGirardTrial } from "./sedation-abc-girard-trial";
import { sedationMidsSpice3Trial } from "./sedation-mids-spice3-trial";
import { sepsisAdrenal } from "./sepsis-adrenal";
import { sepsisAprocchss } from "./sepsis-aprocchss";
import { sepsisSmartTrial } from "./sepsis-smart-trial";
import { sepsisVanish } from "./sepsis-vanish";
import { sepsisVasst } from "./sepsis-vasst";
import { shockAndromedaTrial } from "./shock-andromeda-trial";
import { shockSoapIiTrial } from "./shock-soap-ii-trial";
import { statusEpilepticusEsett } from "./status-epilepticus-esett";
import { statusRampartTrial } from "./status-rampart-trial";
import { tbiCrash3Trial } from "./tbi-crash-3-trial";
import { transfusionTriccTrial } from "./transfusion-tricc-trial";
import { transfusionTrissTrial } from "./transfusion-triss-trial";
import { ugibVillanuevaTrial } from "./ugib-villanueva-trial";
import { vapChastre8dayTrial } from "./vap-chastre-8day-trial";

export const trials: readonly Trial[] = [
  acidosisBicarIcuTrial,
  ahfAdvorTrial,
  airwayPreventTrial,
  aisDawnTrial,
  akiAkiki,
  akiElain,
  akiIdealIcu,
  akiStarrtAki,
  anticoagReVerseAdTrial,
  aorticSyndromesInsteadXlTrial,
  ardsAcurasys,
  ardsAlveoli,
  ardsArma,
  ardsArt,
  ardsDexaArds,
  ardsEolia,
  ardsFactt,
  ardsProseva,
  ardsRose,
  bleedingCrash2,
  bleedingProppr,
  cardiacArrestCoactTrial,
  cardiacArrestTtm2Trial,
  cardiogenicPulmonaryEdemaDoseTrial,
  cardiogenicShockCulpritShock,
  cardiogenicShockDangerShock,
  cardiogenicShockIabpShockIi,
  cardiogenicShockShockTrial,
  copdReduceTrial,
  crrtAtnTrial,
  crrtRenalTrial,
  cshockDoremiTrial,
  ecmoCesarTrial,
  ecmoEclsShockTrial,
  hyperkalemiaHarmonizeTrial,
  hypoxemicFloraliTrial,
  ichInteract2Trial,
  ichPatchTrial,
  intracranialHypertensionDecra,
  intracranialHypertensionRescueicp,
  meningitisDeGansTrial,
  nutritionEpanicTrial,
  nutritionTargetTrial,
  pancreatitisPanterTrial,
  pancreatitisWaterfallTrial,
  pePeithoTrial,
  phAmbitionTrial,
  pneumoniaCapeCodTrial,
  sedationAbcGirardTrial,
  sedationMidsSpice3Trial,
  sepsisAdrenal,
  sepsisAprocchss,
  sepsisSmartTrial,
  sepsisVanish,
  sepsisVasst,
  shockAndromedaTrial,
  shockSoapIiTrial,
  statusEpilepticusEsett,
  statusRampartTrial,
  tbiCrash3Trial,
  transfusionTriccTrial,
  transfusionTrissTrial,
  ugibVillanuevaTrial,
  vapChastre8dayTrial,
];
