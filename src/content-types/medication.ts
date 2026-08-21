import { z } from "zod";
import { nodeIdSchema } from "./common";

export const medicationCategorySchema = z.enum([
  "antimicrobials",
  "vasopressors-inotropes",
  "sedatives-analgesics",
  "neuromuscular-blockers",
  "antihypertensives-vasodilators",
  "antiarrhythmics",
  "anticoagulants",
  "endocrine-metabolic",
  "diuretics",
  "electrolytes-emergency",
]);
export type MedicationCategory = z.infer<typeof medicationCategorySchema>;

export const spectrumGroupSchema = z.object({
  covered: z.array(z.string().min(1)),
  notCovered: z.array(z.string().min(1)),
  notes: z.string().optional(),
});
export type SpectrumGroup = z.infer<typeof spectrumGroupSchema>;

export const antimicrobialSpectrumSchema = z.object({
  gramPositive: spectrumGroupSchema,
  gramNegative: spectrumGroupSchema,
  anaerobes: spectrumGroupSchema,
  atypicalsFungi: spectrumGroupSchema.optional(),
  notableGaps: z.array(z.string().min(1)),
});
export type AntimicrobialSpectrum = z.infer<typeof antimicrobialSpectrumSchema>;

export const pkPdDataSchema = z.object({
  type: z.enum(["time-dependent", "concentration-dependent", "auc-mic", "receptor-occupancy", "other"]),
  targetParameter: z.string().min(1),
  halfLife: z.string().min(1),
  proteinBinding: z.string().min(1),
  metabolism: z.string().min(1),
  elimination: z.string().min(1),
  vdNotes: z.string().optional(),
});
export type PkPdData = z.infer<typeof pkPdDataSchema>;

export const syndromeDosingSchema = z.object({
  syndrome: z.string().min(1),
  regimen: z.string().min(1),
  reference: z.string().optional(),
  note: z.string().optional(),
});
export type SyndromeDosing = z.infer<typeof syndromeDosingSchema>;

export const renalDosingAdjustmentSchema = z.object({
  crclRange: z.string().min(1),
  dose: z.string().min(1),
  note: z.string().optional(),
});
export type RenalDosingAdjustment = z.infer<typeof renalDosingAdjustmentSchema>;

export const medicationDosingSchema = z.object({
  routine: z.string().min(1),
  adultIntubationDose: z.string().optional(),
  pediatricDoseNotes: z.string().optional(),
  imDoseNotes: z.string().optional(),
  maintenanceInfusionNotes: z.string().optional(),
  syndromeSpecific: z.array(syndromeDosingSchema).optional(),
  renallyAdjusted: z.array(renalDosingAdjustmentSchema).optional(),
  hdDosing: z.string().optional(),
  crrtDosing: z.string().optional(),
});
export type MedicationDosing = z.infer<typeof medicationDosingSchema>;

export const organFailureConsiderationsSchema = z.object({
  renalConsiderations: z.string().min(1),
  hepaticConsiderations: z.string().min(1),
});
export type OrganFailureConsiderations = z.infer<typeof organFailureConsiderationsSchema>;

export const organToxicitySchema = z.object({
  organ: z.string().min(1),
  description: z.string().min(1),
});
export type OrganToxicity = z.infer<typeof organToxicitySchema>;

export const medicationToxicitySchema = z.object({
  majorWarnings: z.array(z.string().min(1)),
  organToxicities: z.array(organToxicitySchema),
  blackBoxWarning: z.string().optional(),
});
export type MedicationToxicity = z.infer<typeof medicationToxicitySchema>;

export const drugInteractionSchema = z.object({
  drug: z.string().min(1),
  mechanism: z.string().min(1),
  consequence: z.string().min(1),
  icuAction: z.string().min(1),
});
export type DrugInteraction = z.infer<typeof drugInteractionSchema>;

export const tdmProtocolSchema = z.object({
  targetPeak: z.string().optional(),
  targetTrough: z.string().optional(),
  targetAUC: z.string().optional(),
  timing: z.string().min(1),
});
export type TdmProtocol = z.infer<typeof tdmProtocolSchema>;

export const medicationMonitoringSchema = z.object({
  parameters: z.array(z.string().min(1)),
  tdmProtocol: tdmProtocolSchema.optional(),
});
export type MedicationMonitoring = z.infer<typeof medicationMonitoringSchema>;

export const stewardshipTeachingSchema = z.object({
  deEscalationNotes: z.string().min(1),
  broadNotBetterPoint: z.string().min(1),
});
export type StewardshipTeaching = z.infer<typeof stewardshipTeachingSchema>;

export const claimCitationSchema = z.object({
  claim: z.string().min(1),
  source: z.string().min(1),
  citationUrl: z.string().optional(),
});
export type ClaimCitation = z.infer<typeof claimCitationSchema>;

export const evidenceTraceabilitySchema = z.object({
  guidelineIds: z.array(z.string()).optional(),
  trialIds: z.array(z.string()).optional(),
  claimCitations: z.array(claimCitationSchema),
});
export type EvidenceTraceability = z.infer<typeof evidenceTraceabilitySchema>;

export const patientScenarioSchema = z.object({
  title: z.string().min(1),
  clinicalContext: z.string().min(1),
  decision: z.string().min(1),
  rationale: z.string().min(1),
});
export type PatientScenario = z.infer<typeof patientScenarioSchema>;

export const examTrapSchema = z.object({
  misconception: z.string().min(1),
  reality: z.string().min(1),
  explanation: z.string().min(1),
});
export type ExamTrap = z.infer<typeof examTrapSchema>;

export const medicationSchema = z.object({
  id: nodeIdSchema,
  slug: z.string().min(1),
  name: z.string().min(1),
  genericName: z.string().min(1),
  brandNames: z.array(z.string().min(1)),
  class: z.string().min(1),
  category: medicationCategorySchema,
  subcategory: z.string().min(1),
  summary: z.string().min(1),
  mechanism: z.object({
    title: z.string().min(1),
    steps: z.array(z.string().min(1)),
    visualDiagram: z.string().optional(),
  }),
  spectrum: antimicrobialSpectrumSchema.optional(),
  pkPd: pkPdDataSchema,
  icuReasoning: z.object({
    whyIChooseIt: z.array(z.string().min(1)),
    whyIDont: z.array(z.string().min(1)),
    bedsidePearl: z.string().min(1),
  }),
  dosing: medicationDosingSchema,
  organFailure: organFailureConsiderationsSchema,
  toxicity: medicationToxicitySchema,
  interactions: z.array(drugInteractionSchema),
  monitoring: medicationMonitoringSchema,
  stewardship: stewardshipTeachingSchema.optional(),
  evidenceTraceability: evidenceTraceabilitySchema,
  patientScenarios: z.array(patientScenarioSchema),
  examTraps: z.array(examTrapSchema),
  searchAliases: z.array(z.string().min(1)),
  relatedTopicIds: z.array(z.string()),
});

export type Medication = z.infer<typeof medicationSchema>;
