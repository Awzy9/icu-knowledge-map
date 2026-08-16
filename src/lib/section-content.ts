import type { ContentBlock, ContentSection, Topic } from "@/content-types";

/**
 * Robustly checks if a ContentSection contains meaningful, usable medical content.
 * Handles strings, arrays, blocks, tables, callouts, calculators, children, and evidence references.
 */
export function hasSectionContent(section: ContentSection | undefined | null): boolean {
  if (!section) return false;

  // 1. Check summary string
  if (typeof section.summary === "string" && section.summary.trim().length > 0) {
    return true;
  }

  // 2. Check body content blocks
  if (Array.isArray(section.body) && section.body.length > 0) {
    for (const block of section.body as readonly ContentBlock[]) {
      if (!block) continue;
      if (block.type === "paragraph" && typeof block.text === "string" && block.text.trim().length > 0) {
        return true;
      }
      if (block.type === "list" && Array.isArray(block.items) && block.items.length > 0) {
        if (block.items.some((item: string) => typeof item === "string" && item.trim().length > 0)) {
          return true;
        }
      }
      if (block.type === "key-value-table" && Array.isArray(block.rows) && block.rows.length > 0) {
        if (
          block.rows.some(
            (row: { label: string; value: string }) =>
              (row.label && row.label.trim().length > 0) || (row.value && row.value.trim().length > 0),
          )
        ) {
          return true;
        }
      }
      if (block.type === "callout" && typeof block.text === "string" && block.text.trim().length > 0) {
        return true;
      }
      if (block.type === "calculator-embed" && typeof block.calculatorId === "string" && block.calculatorId.trim().length > 0) {
        return true;
      }
    }
  }

  // 3. Check child sections recursively
  if (Array.isArray(section.children) && section.children.length > 0) {
    if (section.children.some((child) => hasSectionContent(child))) {
      return true;
    }
  }

  // 4. Check attached evidence references
  if (Array.isArray(section.evidenceRefs) && section.evidenceRefs.length > 0) {
    return true;
  }

  return false;
}

/**
 * Checks if a Topic has meaningful content for a given section kind or section ID.
 */
export function topicHasContentForKind(topic: Topic, kinds: readonly string[]): boolean {
  if (!topic || !Array.isArray(topic.sections)) return false;
  return topic.sections.some((s) => kinds.includes(s.kind) && hasSectionContent(s));
}
