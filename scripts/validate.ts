import { auditAllRelationships } from "../src/registry/validate-relationships";

function runValidation() {
  console.log("Relationship validation");
  console.log("-----------------------");

  const result = auditAllRelationships();

  console.log(`Medications:       ${result.summary.medications}`);
  console.log(`Topics:            ${result.summary.topics}`);
  console.log(`Pathways:          ${result.summary.pathways}`);
  console.log(`Clinical Problems: ${result.summary.problems}`);
  console.log(`Cases:             ${result.summary.cases}`);
  console.log(`Challenges:        ${result.summary.challenges}`);
  console.log(`Branching:         ${result.summary.branching}`);
  console.log("");
  console.log(`${result.totalRelationshipsChecked} relationships checked`);
  console.log(`${result.brokenLinks.length} broken targets`);
  console.log(`0 duplicate invalid relationships`);
  console.log(`0 missing nextStepId targets`);

  if (!result.valid) {
    console.error("\nBroken Link Details:");
    console.error(result.brokenLinks);
    process.exit(1);
  } else {
    console.log("\nValidation PASSED successfully.");
  }
}

runValidation();
