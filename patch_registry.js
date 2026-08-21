const fs = require('fs');

let content = fs.readFileSync('src/registry/index.ts', 'utf-8');

const importsToAdd = `
import { clinicalCases } from "@/content/clinical-cases";
import { medicationChallenges } from "@/content/medication-challenges";
import type { ClinicalCase } from "@/content-types/clinical-case";
import type { MedicationChallenge } from "@/content-types/medication-challenge";
`;

content = importsToAdd + content;

const casesMaps = `
const clinicalCasesBySlug = new Map(clinicalCases.map((c) => [c.slug, c]));

export function getAllClinicalCases(): readonly ClinicalCase[] {
  return clinicalCases;
}

export function getClinicalCase(slug: string): ClinicalCase | undefined {
  return clinicalCasesBySlug.get(slug);
}

export function getAllClinicalCaseSlugs(): readonly string[] {
  return clinicalCases.map(c => c.slug);
}

export function getAllMedicationChallenges(): readonly MedicationChallenge[] {
  return medicationChallenges;
}

export function getMedicationChallengesByType(type: string): readonly MedicationChallenge[] {
  return medicationChallenges.filter(c => c.type === type);
}

export function getRelatedContentForMedication(slug: string) {
  const med = getMedication(slug);
  const topics = allTopics.filter(t => t.relatedMedications?.includes(slug) || med?.relatedTopicIds?.includes(t.id));
  const pathwaysList = pathways.filter(p => p.relatedMedicationSlugs?.includes(slug));
  const problems = clinicalProblems.filter(p => p.relatedMedicationSlugs?.includes(slug));
  const cases = clinicalCases.filter(c => c.relatedMedicationSlugs?.includes(slug));
  
  return { topics, pathways: pathwaysList, problems, cases };
}

export function getRelatedContentForTopic(id: string) {
  const meds = allMedications.filter(m => m.relatedTopicIds?.includes(id));
  const pathwaysList = pathways.filter(p => p.relatedTopicIds?.includes(id));
  const problems = clinicalProblems.filter(p => p.relatedTopicIds?.includes(id));
  const cases = clinicalCases.filter(c => c.relatedTopicIds?.includes(id));
  
  return { medications: meds, pathways: pathwaysList, problems, cases };
}
`;

content = content + '\n' + casesMaps;
fs.writeFileSync('src/registry/index.ts', content, 'utf-8');
