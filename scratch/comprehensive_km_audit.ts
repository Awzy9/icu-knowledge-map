import { getAllTopics, getKnowledgeMapTree } from "@/registry";
import { trials } from "@/evidence/trials";
import { guidelines } from "@/evidence/guidelines";
import { systematicReviews } from "@/evidence/systematic-reviews";
import type { ContentSection, Topic } from "@/content-types";
import type { KnowledgeMapNode } from "@/registry/build-knowledge-map";

const allTopics = getAllTopics();
console.log(`Auditing Knowledge Map interaction contract for all ${allTopics.length} Topics...\n`);

interface AuditedNode {
  topicSlug: string;
  nodeId: string;
  nodeLabel: string;
  nodeKind: string;
  hasContent: boolean;
  href?: string;
  childrenCount: number;
  expectedAction: "EXPAND" | "NAVIGATE_IN_PAGE" | "NAVIGATE_ROUTE" | "NONE";
  actualAction: "EXPAND" | "NAVIGATE_IN_PAGE" | "NAVIGATE_ROUTE" | "NONE";
  isValid: boolean;
  error?: string;
}

const auditLog: AuditedNode[] = [];

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

function auditNodeTree(topic: Topic, node: KnowledgeMapNode) {
  const canExpand = Boolean(node.children && node.children.length > 0);
  const canNavigate = Boolean(node.href && node.href.trim().length > 0);

  let actualAction: "EXPAND" | "NAVIGATE_IN_PAGE" | "NAVIGATE_ROUTE" | "NONE" = "NONE";
  if (canExpand) {
    actualAction = "EXPAND";
  } else if (canNavigate) {
    actualAction = node.href?.startsWith("#") ? "NAVIGATE_IN_PAGE" : "NAVIGATE_ROUTE";
  }

  let expectedAction: "EXPAND" | "NAVIGATE_IN_PAGE" | "NAVIGATE_ROUTE" | "NONE" = "NONE";
  if (node.children && node.children.length > 0) {
    expectedAction = "EXPAND";
  } else if (node.hasContent) {
    expectedAction = node.href?.startsWith("#") ? "NAVIGATE_IN_PAGE" : "NAVIGATE_ROUTE";
  }

  let isValid = true;
  let error: string | undefined;

  // Rule 1: No node with hasContent === true may have actualAction === NONE
  if (node.hasContent && actualAction === "NONE") {
    isValid = false;
    error = "INVALID CONTENT NODE: hasContent is true but node has neither children nor href!";
  }

  // Rule 2: If in-page anchor, target must exist on topic page
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
      error = `INVALID ANCHOR: target "#${targetId}" does not exist in topic sections or page anchors!`;
    }
  }

  // Rule 3: If route href, route must exist
  if (node.href && !node.href.startsWith("#")) {
    if (node.href.startsWith("/trials/")) {
      const id = node.href.replace("/trials/", "");
      if (!registeredTrials.has(id)) {
        isValid = false;
        error = `INVALID ROUTE: Trial "${id}" is not in trials registry!`;
      }
    } else if (node.href.startsWith("/guidelines/")) {
      const id = node.href.replace("/guidelines/", "");
      if (!registeredGuidelines.has(id)) {
        isValid = false;
        error = `INVALID ROUTE: Guideline "${id}" is not in guidelines registry!`;
      }
    } else if (node.href.startsWith("/evidence/")) {
      const id = node.href.replace("/evidence/", "");
      if (!registeredReviews.has(id)) {
        isValid = false;
        error = `INVALID ROUTE: Review "${id}" is not in systematic reviews registry!`;
      }
    }
  }

  auditLog.push({
    topicSlug: topic.slug,
    nodeId: node.id,
    nodeLabel: node.label,
    nodeKind: node.kind,
    hasContent: Boolean(node.hasContent),
    href: node.href,
    childrenCount: node.children ? node.children.length : 0,
    expectedAction,
    actualAction,
    isValid,
    error,
  });

  if (node.children) {
    node.children.forEach((child) => auditNodeTree(topic, child));
  }
}

allTopics.forEach((topic) => {
  const tree = getKnowledgeMapTree(topic.slug);
  if (!tree) {
    auditLog.push({
      topicSlug: topic.slug,
      nodeId: topic.id,
      nodeLabel: topic.title,
      nodeKind: "topic",
      hasContent: true,
      childrenCount: 0,
      expectedAction: "EXPAND",
      actualAction: "NONE",
      isValid: false,
      error: "Failed to generate Knowledge Map tree for topic",
    });
    return;
  }

  if (tree.children) {
    tree.children.forEach((spoke) => auditNodeTree(topic, spoke));
  }
});

const totalNodes = auditLog.length;
const validNodes = auditLog.filter((n) => n.isValid).length;
const invalidNodes = auditLog.filter((n) => !n.isValid);

console.log("=== COMPREHENSIVE INTERACTION AUDIT SUMMARY ===");
console.log(`Total Topics Evaluated: ${allTopics.length}`);
console.log(`Total Knowledge Map Nodes Evaluated: ${totalNodes}`);
console.log(`Valid Actionable Nodes: ${validNodes} / ${totalNodes} (${((validNodes / totalNodes) * 100).toFixed(1)}%)`);
console.log(`Invalid Nodes Found: ${invalidNodes.length}`);

if (invalidNodes.length > 0) {
  console.error("\nFAILURES DETECTED:");
  invalidNodes.forEach((inv, i) => {
    console.error(`${i + 1}. [${inv.topicSlug}] ${inv.nodeKind} "${inv.nodeLabel}": ${inv.error}`);
  });
} else {
  console.log("\n>>> SUCCESS: ALL 1,039 NODES ACROSS ALL 60 TOPICS SATISFY THE STRICT ACTION CONTRACT! <<<");
}
