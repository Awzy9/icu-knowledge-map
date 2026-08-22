/**
 * Consequence-coverage audit across clinical reasoning cases.
 * Run: npx tsx scratch/audit-case-consequences.ts
 *
 * Reads the real registry export so it can never drift from the content set.
 */
import { clinicalCases } from "../src/content/clinical-cases";

const EXPECTED = 25;
if (clinicalCases.length !== EXPECTED) {
  console.warn(`WARNING: expected ${EXPECTED} cases, found ${clinicalCases.length}.`);
}

let fullyCovered = 0;
let totalOptions = 0;
let totalMeaningful = 0;

for (const c of clinicalCases) {
  const stepIds = new Set(c.steps.map((s) => s.id));
  let opts = 0;
  let meaningful = 0;
  let branches = 0;

  for (const step of c.steps) {
    for (const opt of step.options) {
      opts += 1;
      const validBranch = Boolean(opt.nextStepId && stepIds.has(opt.nextStepId));
      if (validBranch) branches += 1;
      const hasOutcome =
        opt.outcome &&
        ((opt.outcome.immediateEffects?.length ?? 0) > 0 ||
          Boolean(opt.outcome.clinicalResponse) ||
          validBranch);
      if (hasOutcome) meaningful += 1;
    }
  }

  totalOptions += opts;
  totalMeaningful += meaningful;
  const ok = opts > 0 && meaningful === opts;
  if (ok) fullyCovered += 1;

  console.log(
    `${ok ? "PASS" : "MISS"}  ${c.slug.padEnd(30)} ${String(meaningful).padStart(3)}/${String(opts).padEnd(3)} options with outcomes · ${branches} valid branch targets`,
  );
}

console.log(`\nCases fully consequence-covered: ${fullyCovered}/${clinicalCases.length}`);
console.log(`Options with consequences:       ${totalMeaningful}/${totalOptions}`);
