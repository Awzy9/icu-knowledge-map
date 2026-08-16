import type { Pathway } from "@/content-types";
import { mechanicalVentilationInitiation } from "./mechanical-ventilation-initiation";
import { mechanicalVentilationLiberation } from "./mechanical-ventilation-liberation";
import { pronePositioningProtocol } from "./prone-positioning-protocol";
import { respiratorySupportEscalation } from "./respiratory-support-escalation";
import { ardsFirstSixHours } from "./ards-first-6-hours";
import { difficultWeaningTracheostomyWorkflow } from "./difficult-weaning-tracheostomy-workflow";
import { hemodynamicResuscitationWorkflow } from "./hemodynamic-resuscitation-workflow";
import { vasopressorTitrationWorkflow } from "./vasopressor-titration-workflow";
import { refractoryShockEscalation } from "./refractory-shock-escalation";
import { rrtCrrtInitiationWorkflow } from "./rrt-crrt-initiation-workflow";
import { hyperkalemiaManagementWorkflow } from "./hyperkalemia-management-workflow";
import { metabolicAcidosisEvaluationWorkflow } from "./metabolic-acidosis-evaluation-workflow";
import { sepsisBundleWorkflow } from "./sepsis-bundle-workflow";
import { massiveHemorrhageProtocol } from "./massive-hemorrhage-protocol";
import { sedationAnalgesiaLiberationWorkflow } from "./sedation-analgesia-liberation-workflow";
import { neurologicDeteriorationWorkflow } from "./neurologic-deterioration-workflow";
import { statusEpilepticusWorkflow } from "./status-epilepticus-workflow";
import { icuNutritionWorkflow } from "./icu-nutrition-workflow";

// Established diagnostic evaluation pathways (restructured)
import { acuteHypoxemia } from "./acute-hypoxemia";
import { hypotension } from "./hypotension";
import { shock } from "./shock";
import { aki } from "./aki";
import { metabolicAcidosis } from "./metabolic-acidosis";
import { hyperkalemia } from "./hyperkalemia";
import { alteredConsciousness } from "./altered-consciousness";
import { feverSepsis } from "./fever-sepsis";
import { bleeding } from "./bleeding";

export const pathways: readonly Pathway[] = [
  // Respiratory Workflows
  mechanicalVentilationInitiation,
  mechanicalVentilationLiberation,
  pronePositioningProtocol,
  respiratorySupportEscalation,
  ardsFirstSixHours,
  difficultWeaningTracheostomyWorkflow,
  acuteHypoxemia,

  // Hemodynamic Workflows
  hemodynamicResuscitationWorkflow,
  vasopressorTitrationWorkflow,
  refractoryShockEscalation,
  hypotension,
  shock,

  // Renal & Metabolic Workflows
  rrtCrrtInitiationWorkflow,
  hyperkalemiaManagementWorkflow,
  metabolicAcidosisEvaluationWorkflow,
  aki,
  metabolicAcidosis,
  hyperkalemia,

  // Sepsis & Infectious Disease Workflows
  sepsisBundleWorkflow,
  feverSepsis,

  // Hemostasis & Hematology Workflows
  massiveHemorrhageProtocol,
  bleeding,

  // Sedation & ICU Liberation Workflows
  sedationAnalgesiaLiberationWorkflow,

  // Neurologic & Neurocritical Workflows
  neurologicDeteriorationWorkflow,
  statusEpilepticusWorkflow,
  alteredConsciousness,

  // Supportive Care & Nutrition Workflows
  icuNutritionWorkflow,
];
