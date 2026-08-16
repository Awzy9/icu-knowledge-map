import type { SystematicReview } from "@/content-types";
import { airwayVideolaryngoscopyCochraneReview } from "./airway-videolaryngoscopy-cochrane-review";
import { ardsNmbMetaAnalysis } from "./ards-nmb-meta-analysis";
import { asthmaMgso4MetaAnalysis } from "./asthma-mgso4-meta-analysis";
import { cardiacArrestTtmCochraneReview } from "./cardiac-arrest-ttm-cochrane-review";
import { ecmoArdsIndividualPatientMetaAnalysis } from "./ecmo-ards-individual-patient-meta-analysis";
import { meningitisCorticosteroidsCochraneReview } from "./meningitis-corticosteroids-cochrane-review";
import { sepsisEgdtMetaAnalysis } from "./sepsis-egdt-meta-analysis";
import { shockPlrMetaAnalysis } from "./shock-plr-meta-analysis";
import { transfusionRestrictiveCochraneReview } from "./transfusion-restrictive-cochrane-review";
import { ugibAntibioticsCochraneReview } from "./ugib-antibiotics-cochrane-review";

export const systematicReviews: readonly SystematicReview[] = [
  airwayVideolaryngoscopyCochraneReview,
  ardsNmbMetaAnalysis,
  asthmaMgso4MetaAnalysis,
  cardiacArrestTtmCochraneReview,
  ecmoArdsIndividualPatientMetaAnalysis,
  meningitisCorticosteroidsCochraneReview,
  sepsisEgdtMetaAnalysis,
  shockPlrMetaAnalysis,
  transfusionRestrictiveCochraneReview,
  ugibAntibioticsCochraneReview,
];
