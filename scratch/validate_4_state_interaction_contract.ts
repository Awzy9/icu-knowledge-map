import { getAllTopics, getKnowledgeMapTree } from "@/registry";
import { trials } from "@/evidence/trials";
import { guidelines } from "@/evidence/guidelines";
import { systematicReviews } from "@/evidence/systematic-reviews";
import type { ContentSection, Topic } from "@/content-types";
import type { KnowledgeMapNode } from "@/registry/build-knowledge-map";

const allTopics = getAllTopics();
console.log(`=================================================================`);
console.log(`4-STATE INTERACTION CONTRACT VALIDATOR — ALL ${allTopics.length} TOPICS`);
console.log(`=================================================================\n`);

interface NodeAuditRecord {
  topicSlug: string;
  topicTitle: string;
  nodeId: string;
  nodeLabel: string;
  nodeKind: string;
  hasContent: boolean;
  hasChildren: boolean;
  childrenCount: number;
  href?: string;
  state: "STATE_1_DISABLED" | "STATE_2_NAVIGATE_ONLY" | "STATE_3_EXPAND_ONLY" | "STATE_4_DUAL_ACTION";
  mainNodeAction: "NAVIGATE_IN_PAGE" | "NAVIGATE_ROUTE" | "EXPAND" | "NONE";
  expandControlPresent: boolean;
  isValid: boolean;
  error?: string;
}

function findSectionRecursive(sections: readonly ContentSection[], id: string): boolean {
  for (const s of sections) {
    if (s.id === id) return true;
    if (s.children && findSectionRecursive(s.children, id)) return true;
  }
  return false;
}

const registeredTrials = new Set(trials.map((t) => t.id));
const registeredGuidelines = new Set(guidelines.map((g) => g.id));
const registeredReviews = new Set(systematicReviews.map((r) => r.id));

const auditLog: NodeAuditRecord[] = [];

function auditNode(topic: Topic, node: KnowledgeMapNode, path: string[]) {
  const hasOwnContent = Boolean(node.hasContent && node.href && node.href.trim().length > 0);
  const hasChildren = Boolean(node.children && node.children.length > 0);
  const childrenCount = node.children ? node.children.length : 0;

  let state: "STATE_1_DISABLED" | "STATE_2_NAVIGATE_ONLY" | "STATE_3_EXPAND_ONLY" | "STATE_4_DUAL_ACTION";
  let mainNodeAction: "NAVIGATE_IN_PAGE" | "NAVIGATE_ROUTE" | "EXPAND" | "NONE";
  let expandControlPresent: boolean;

  if (!hasOwnContent && !hasChildren) {
    state = "STATE_1_DISABLED";
    mainNodeAction = "NONE";
    expandControlPresent = false;
  } else if (hasOwnContent && !hasChildren) {
    state = "STATE_2_NAVIGATE_ONLY";
    mainNodeAction = node.href?.startsWith("#") ? "NAVIGATE_IN_PAGE" : "NAVIGATE_ROUTE";
    expandControlPresent = false;
  } else if (!hasOwnContent && hasChildren) {
    state = "STATE_3_EXPAND_ONLY";
    mainNodeAction = "EXPAND";
    expandControlPresent = true;
  } else {
    // State 4: hasOwnContent && hasChildren
    state = "STATE_4_DUAL_ACTION";
    mainNodeAction = node.href?.startsWith("#") ? "NAVIGATE_IN_PAGE" : "NAVIGATE_ROUTE";
    expandControlPresent = true; // Dedicated '+' badge rendered
  }

  let isValid = true;
  let error: string | undefined;

  // Invariant 1: If node claims hasContent === true, href MUST be present and valid
  if (node.hasContent && !node.href) {
    isValid = false;
    error = `hasContent is true, but href is missing! Path: ${path.join(" -> ")}`;
  }

  // Invariant 2: If in-page anchor, verify target exists on page
  if (node.href && node.href.startsWith("#")) {
    const targetId = node.href.slice(1);
    const validPageAnchors = new Set([
      "topic-references",
      "sources",
      "evidence-timeline",
      "topic-assessment",
      "topic-related-concepts",
    ]);

    const exists = findSectionRecursive(topic.sections, targetId) || validPageAnchors.has(targetId);
    if (!exists) {
      isValid = false;
      error = `Target anchor "#${targetId}" does not exist in topic sections or known page anchors!`;
    }
  }

  // Invariant 3: If route href, verify route exists in evidence registry
  if (node.href && !node.href.startsWith("#")) {
    if (node.href.startsWith("/trials/")) {
      const id = node.href.replace("/trials/", "");
      if (!registeredTrials.has(id)) {
        isValid = false;
        error = `Trial route "${node.href}" points to unregistered trial ID "${id}"`;
      }
    } else if (node.href.startsWith("/guidelines/")) {
      const id = node.href.replace("/guidelines/", "");
      if (!registeredGuidelines.has(id)) {
        isValid = false;
        error = `Guideline route "${node.href}" points to unregistered guideline ID "${id}"`;
      }
    } else if (node.href.startsWith("/evidence/")) {
      const id = node.href.replace("/evidence/", "");
      if (!registeredReviews.has(id)) {
        isValid = false;
        error = `Review route "${node.href}" points to unregistered review ID "${id}"`;
      }
    }
  }

  auditLog.push({
    topicSlug: topic.slug,
    topicTitle: topic.title,
    nodeId: node.id,
    nodeLabel: node.label,
    nodeKind: node.kind,
    hasContent: Boolean(node.hasContent),
    hasChildren,
    childrenCount,
    href: node.href,
    state,
    mainNodeAction,
    expandControlPresent,
    isValid,
    error,
  });

  if (node.children) {
    node.children.forEach((child) => auditNode(topic, child, [...path, child.label]));
  }
}

allTopics.forEach((topic) => {
  const tree = getKnowledgeMapTree(topic.slug);
  if (!tree || !tree.children) return;
  tree.children.forEach((spoke) => auditNode(topic, spoke, [topic.title, spoke.label]));
});

const totalNodes = auditLog.length;
const state1 = auditLog.filter((n) => n.state === "STATE_1_DISABLED").length;
const state2 = auditLog.filter((n) => n.state === "STATE_2_NAVIGATE_ONLY").length;
const state3 = auditLog.filter((n) => n.state === "STATE_3_EXPAND_ONLY").length;
const state4 = auditLog.filter((n) => n.state === "STATE_4_DUAL_ACTION").length;
const invalidRecords = auditLog.filter((n) => !n.isValid);

console.log("=== 4-STATE DISTRIBUTION ACROSS ALL NODES ===");
console.log(`Total Nodes Evaluated: ${totalNodes}`);
console.log(`State 1 (Disabled / Non-Interactive): ${state1}`);
console.log(`State 2 (Navigate Only - Content Without Children): ${state2}`);
console.log(`State 3 (Expand Only - Children Without Content): ${state3}`);
console.log(`State 4 (Dual-Action - Content AND Children): ${state4}`);
console.log(`Invalid Nodes Violating Contract: ${invalidRecords.length}`);

if (invalidRecords.length > 0) {
  console.error("\nFAILURES DETECTED:");
  invalidRecords.forEach((r, i) => {
    console.error(`${i + 1}. [${r.topicSlug}] ${r.nodeKind} "${r.nodeLabel}": ${r.error}`);
  });
} else {
  console.log("\n>>> SUCCESS: 100% OF ALL NODES STRICTLY OBEY THE 4-STATE INTERACTION CONTRACT! <<<");
}

console.log("\n=== SAMPLING PRIMARY TOPICS FOR BEHAVIOR VERIFICATION ===");
const testSlugs = [
  "pneumothorax",
  "ards",
  "septic-shock",
  "acute-aortic-syndromes",
  "acute-mesenteric-ischemia",
];

testSlugs.forEach((slug) => {
  const records = auditLog.filter((r) => r.topicSlug === slug);
  console.log(`\nTopic: ${slug} (${records.length} nodes)`);
  records.forEach((r) => {
    console.log(`  [${r.nodeLabel}] (${r.nodeKind}) -> State: ${r.state} | Main Action: ${r.mainNodeAction} | Expand Badge: ${r.expandControlPresent ? "YES (+)" : "NO"}`);
  });
});
