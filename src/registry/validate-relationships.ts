import { allMedications } from "@/content/medications";
import { allTopics } from "@/content";
import { clinicalCases } from "@/content/clinical-cases";
import { medicationChallenges } from "@/content/medication-challenges";
import { pathways } from "@/pathways";
import { clinicalProblems } from "@/problems";

export interface RelationshipAuditResult {
  valid: boolean;
  totalRelationshipsChecked: number;
  brokenLinks: Array<{ source: string; target: string; type: string }>;
  medicationCoverage: Record<string, { topicsCount: number; pathwaysCount: number; problemsCount: number; casesCount: number }>;
  summary: {
    medications: "PASS" | "FAIL";
    topics: "PASS" | "FAIL";
    pathways: "PASS" | "FAIL";
    problems: "PASS" | "FAIL";
    cases: "PASS" | "FAIL";
    challenges: "PASS" | "FAIL";
    branching: "PASS" | "FAIL";
  };
}

export function auditAllRelationships(): RelationshipAuditResult {
  const topicIds = new Set(allTopics.map((t) => t.id));
  const medSlugs = new Set(allMedications.map((m) => m.slug));
  const pathwaySlugs = new Set(pathways.map((p) => p.slug));
  const problemSlugs = new Set(clinicalProblems.map((p) => p.slug));

  const brokenLinks: Array<{ source: string; target: string; type: string }> = [];
  const medicationCoverage: Record<string, { topicsCount: number; pathwaysCount: number; problemsCount: number; casesCount: number }> = {};
  let totalRelationshipsChecked = 0;

  // 1. Audit Medications
  let medErrors = 0;
  for (const med of allMedications) {
    let topicsCount = 0;
    for (const tid of med.relatedTopicIds || []) {
      totalRelationshipsChecked++;
      if (topicIds.has(tid)) {
        topicsCount++;
      } else {
        brokenLinks.push({ source: `medication:${med.slug}`, target: `topicId:${tid}`, type: "relatedTopicId" });
        medErrors++;
      }
    }

    const matchedPathways = pathways.filter((p) => (p.relatedTopicIds || []).some((tid) => med.relatedTopicIds?.includes(tid)));
    const matchedProblems = clinicalProblems.filter((p) => (p.relatedTopicIds || []).some((tid) => med.relatedTopicIds?.includes(tid)));
    const matchedCases = clinicalCases.filter((c) => (c.relatedMedicationSlugs || []).includes(med.slug) || (c.relatedTopicIds || []).some((tid) => med.relatedTopicIds?.includes(tid)));

    medicationCoverage[med.slug] = {
      topicsCount,
      pathwaysCount: matchedPathways.length,
      problemsCount: matchedProblems.length,
      casesCount: matchedCases.length,
    };
  }

  // 2. Audit Topics
  let topicErrors = 0;
  for (const topic of allTopics) {
    for (const rel of topic.relationships || []) {
      totalRelationshipsChecked++;
      if (!topicIds.has(rel.targetId)) {
        brokenLinks.push({ source: `topic:${topic.id}`, target: `targetId:${rel.targetId}`, type: "topicRelationship" });
        topicErrors++;
      }
    }
  }

  // 3. Audit Clinical Problems
  let problemErrors = 0;
  for (const pr of clinicalProblems) {
    for (const tid of pr.relatedTopicIds || []) {
      totalRelationshipsChecked++;
      if (!topicIds.has(tid)) {
        brokenLinks.push({ source: `problem:${pr.slug}`, target: `topicId:${tid}`, type: "relatedTopicId" });
        problemErrors++;
      }
    }
  }

  // 4. Audit Pathways
  let pathwayErrors = 0;
  for (const p of pathways) {
    for (const tid of p.relatedTopicIds || []) {
      totalRelationshipsChecked++;
      if (!topicIds.has(tid)) {
        brokenLinks.push({ source: `pathway:${p.slug}`, target: `topicId:${tid}`, type: "relatedTopicId" });
        pathwayErrors++;
      }
    }
  }

  // 5. Audit Clinical Cases & Light Branching nextStepId targets
  let caseErrors = 0;
  let branchingErrors = 0;
  for (const c of clinicalCases) {
    const caseStepIds = new Set(c.steps.map((s) => s.id));

    for (const medSlug of c.relatedMedicationSlugs || []) {
      totalRelationshipsChecked++;
      if (!medSlugs.has(medSlug)) {
        brokenLinks.push({ source: `case:${c.slug}`, target: `medication:${medSlug}`, type: "relatedMedicationSlug" });
        caseErrors++;
      }
    }
    for (const tid of c.relatedTopicIds || []) {
      totalRelationshipsChecked++;
      if (!topicIds.has(tid)) {
        brokenLinks.push({ source: `case:${c.slug}`, target: `topicId:${tid}`, type: "relatedTopicId" });
        caseErrors++;
      }
    }
    for (const pSlug of c.relatedPathwaySlugs || []) {
      totalRelationshipsChecked++;
      if (!pathwaySlugs.has(pSlug)) {
        brokenLinks.push({ source: `case:${c.slug}`, target: `pathway:${pSlug}`, type: "relatedPathwaySlug" });
        caseErrors++;
      }
    }
    for (const prSlug of c.relatedProblemSlugs || []) {
      totalRelationshipsChecked++;
      if (!problemSlugs.has(prSlug)) {
        brokenLinks.push({ source: `case:${c.slug}`, target: `problem:${prSlug}`, type: "relatedProblemSlug" });
        caseErrors++;
      }
    }

    // Check branching nextStepId references
    for (const step of c.steps) {
      for (const opt of step.options) {
        const nextId = opt.nextStepId || opt.outcome?.nextStepId;
        if (nextId) {
          totalRelationshipsChecked++;
          if (!caseStepIds.has(nextId)) {
            brokenLinks.push({
              source: `case:${c.slug}/step:${step.id}/option:${opt.id}`,
              target: `stepId:${nextId}`,
              type: "invalidNextStepId",
            });
            branchingErrors++;
          }
        }
      }
    }
  }

  // 6. Audit Medication Challenges
  let challengeErrors = 0;
  for (const ch of medicationChallenges) {
    for (const medSlug of ch.relatedMedicationSlugs || []) {
      totalRelationshipsChecked++;
      if (!medSlugs.has(medSlug)) {
        brokenLinks.push({ source: `challenge:${ch.id}`, target: `medication:${medSlug}`, type: "relatedMedicationSlug" });
        challengeErrors++;
      }
    }
  }

  return {
    valid: brokenLinks.length === 0,
    totalRelationshipsChecked,
    brokenLinks,
    medicationCoverage,
    summary: {
      medications: medErrors === 0 ? "PASS" : "FAIL",
      topics: topicErrors === 0 ? "PASS" : "FAIL",
      pathways: pathwayErrors === 0 ? "PASS" : "FAIL",
      problems: problemErrors === 0 ? "PASS" : "FAIL",
      cases: caseErrors === 0 ? "PASS" : "FAIL",
      challenges: challengeErrors === 0 ? "PASS" : "FAIL",
      branching: branchingErrors === 0 ? "PASS" : "FAIL",
    },
  };
}
