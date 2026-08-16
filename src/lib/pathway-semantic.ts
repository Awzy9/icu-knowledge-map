import type { PathwayNode, PathwayNodeRole } from "@/content-types";

/**
 * Infers or returns the semantic clinical role for a pathway node.
 * Enables distinct visual hierarchy for Clinical Problems, Assessments,
 * Decision Points, Mechanisms, Diagnoses, Interventions, and Reassessments.
 */
export function getNodeSemanticRole(
  node: PathwayNode,
  parent?: PathwayNode,
  depth = 0,
): PathwayNodeRole {
  if (node.role) {
    return node.role;
  }

  const label = node.label.toLowerCase();

  // 1. Reassessment check
  if (
    label.includes("reassess") ||
    label.includes("monitoring") ||
    label.includes("responding") ||
    label.includes("titrate") ||
    label.includes("repeat") ||
    label.includes("de-escalat")
  ) {
    return "reassessment";
  }

  // 2. Critical warning check
  if (label.includes("emergency") || label.includes("warning") || label.includes("refractory")) {
    return "warning";
  }

  // 3. Action / Intervention check
  if (
    label.startsWith("start ") ||
    label.startsWith("administer ") ||
    label.startsWith("initiate ") ||
    label.startsWith("stabilize ") ||
    label.startsWith("shift ") ||
    label.startsWith("remove ") ||
    label.startsWith("control ") ||
    label.startsWith("correct ") ||
    label.startsWith("give ") ||
    label.startsWith("consider proning") ||
    label.includes("lung-protective") ||
    label.includes("dialysis")
  ) {
    return "intervention";
  }

  // 4. Decision Point check
  if (
    (node.children && node.children.length > 1) ||
    label.includes("identify mechanism") ||
    label.includes("identify likely category") ||
    label.includes("classify") ||
    label.includes("ecg changes") ||
    label.includes("anion gap") ||
    label.includes("decision")
  ) {
    return "decision";
  }

  // 5. Mechanism / Physiologic branch check (immediate child of a branching decision)
  if (parent && (parent.children?.length ?? 0) > 1 && depth <= 5) {
    // If it has children of its own or represents a broad category
    if (
      label.includes("shunt") ||
      label.includes("v/q") ||
      label.includes("hypoventilation") ||
      label.includes("diffusion") ||
      label.includes("inspired oxygen") ||
      label.includes("distributive") ||
      label.includes("cardiogenic") ||
      label.includes("hypovolemic") ||
      label.includes("obstructive") ||
      label.includes("prerenal") ||
      label.includes("intrinsic") ||
      label.includes("postrenal") ||
      label.includes("structural") ||
      label.includes("toxic-metabolic") ||
      label.includes("infectious") ||
      label.includes("seizure") ||
      label.includes("high anion gap") ||
      label.includes("normal anion gap") ||
      label.includes("anticoagulant") ||
      label.includes("coagulopathy") ||
      label.includes("thrombocytopenia")
    ) {
      return "mechanism";
    }
  }

  // 6. Diagnosis / Entity check (nodes linking to a topic or terminal branch leaves)
  if (
    node.topicId ||
    (!node.children || node.children.length === 0) ||
    (parent && parent.kind === "branch" && !node.children?.length)
  ) {
    return "diagnosis";
  }

  // 7. Assessment / Investigation check (default for step nodes)
  return "assessment";
}

export interface RoleVisualConfig {
  readonly tag: string;
  readonly badgeClass: string;
  readonly borderClass: string;
  readonly bgClass: string;
  readonly dotClass: string;
  readonly textClass: string;
}

export const ROLE_VISUAL_CONFIG: Record<PathwayNodeRole, RoleVisualConfig> = {
  assessment: {
    tag: "Assessment Step",
    badgeClass:
      "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800/70 dark:text-slate-300 dark:border-slate-700",
    borderClass: "border-border",
    bgClass: "bg-surface",
    dotClass: "bg-slate-400",
    textClass: "text-ink",
  },
  decision: {
    tag: "Decision Point",
    badgeClass:
      "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60",
    borderClass: "border-amber-400/70 dark:border-amber-500/50",
    bgClass: "bg-surface",
    dotClass: "bg-amber-500",
    textClass: "text-ink",
  },
  mechanism: {
    tag: "Physiologic Mechanism",
    badgeClass:
      "bg-sky-50 text-sky-800 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800/60",
    borderClass: "border-sky-400/70 dark:border-sky-500/50",
    bgClass: "bg-surface",
    dotClass: "bg-sky-500",
    textClass: "text-ink",
  },
  diagnosis: {
    tag: "Diagnosis / Etiology",
    badgeClass:
      "bg-teal-50 text-teal-800 border-teal-200 dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-800/60",
    borderClass: "border-border-strong",
    bgClass: "bg-surface",
    dotClass: "bg-teal-500",
    textClass: "text-ink",
  },
  intervention: {
    tag: "Clinical Action",
    badgeClass:
      "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60",
    borderClass: "border-emerald-500/60 dark:border-emerald-500/50",
    bgClass: "bg-surface",
    dotClass: "bg-emerald-500",
    textClass: "text-ink",
  },
  reassessment: {
    tag: "Reassessment / Loop",
    badgeClass:
      "bg-indigo-50 text-indigo-800 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800/60",
    borderClass: "border-indigo-400/70 dark:border-indigo-500/50",
    bgClass: "bg-surface",
    dotClass: "bg-indigo-500",
    textClass: "text-ink",
  },
  warning: {
    tag: "Critical Alert",
    badgeClass:
      "bg-rose-50 text-rose-800 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800/60",
    borderClass: "border-rose-500/70 dark:border-rose-500/60",
    bgClass: "bg-surface",
    dotClass: "bg-rose-500",
    textClass: "text-ink",
  },
};
