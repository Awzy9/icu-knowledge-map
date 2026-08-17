import type { SystematicReview } from "@/content-types";
import { airwayVideolaryngoscopyCochraneReview } from "./airway-videolaryngoscopy-cochrane-review";
import { ardsNmbMetaAnalysis } from "./ards-nmb-meta-analysis";
import { asthmaMgso4MetaAnalysis } from "./asthma-mgso4-meta-analysis";
import { cardiacArrestTtmCochraneReview } from "./cardiac-arrest-ttm-cochrane-review";
import { ecmoArdsIndividualPatientMetaAnalysis } from "./ecmo-ards-individual-patient-meta-analysis";
import { immunocompromisedIcuCancerOutcomesSystematicReview } from "./immunocompromised-icu-cancer-outcomes-systematic-review";
import { meningitisCorticosteroidsCochraneReview } from "./meningitis-corticosteroids-cochrane-review";
import { neuromuscularGbsIvigPlexCochraneReview } from "./neuromuscular-gbs-ivig-plex-cochrane-review";
import { obstetricHypertensionPregnancyCochraneReview } from "./obstetric-hypertension-pregnancy-cochrane-review";
import { sepsisEgdtMetaAnalysis } from "./sepsis-egdt-meta-analysis";
import { shockPlrMetaAnalysis } from "./shock-plr-meta-analysis";
import { transfusionRestrictiveCochraneReview } from "./transfusion-restrictive-cochrane-review";
import { ugibAntibioticsCochraneReview } from "./ugib-antibiotics-cochrane-review";
import { valvularIeSurgeryTimingSystematicReview } from "./valvular-ie-surgery-timing-systematic-review";

export const systematicReviews: readonly SystematicReview[] = [
  airwayVideolaryngoscopyCochraneReview,
  ardsNmbMetaAnalysis,
  asthmaMgso4MetaAnalysis,
  cardiacArrestTtmCochraneReview,
  ecmoArdsIndividualPatientMetaAnalysis,
  immunocompromisedIcuCancerOutcomesSystematicReview,
  meningitisCorticosteroidsCochraneReview,
  neuromuscularGbsIvigPlexCochraneReview,
  obstetricHypertensionPregnancyCochraneReview,
  sepsisEgdtMetaAnalysis,
  shockPlrMetaAnalysis,
  transfusionRestrictiveCochraneReview,
  ugibAntibioticsCochraneReview,
  valvularIeSurgeryTimingSystematicReview,
];
