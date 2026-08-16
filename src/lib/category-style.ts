import type { TopicCategory } from "@/content-types";

interface CategoryStyle {
  readonly label: string;
  /** Small dot indicator (topic headers, list rows, accordion items). */
  readonly dotClass: string;
  /** Label text color paired with the dot. */
  readonly textClass: string;
  /** Full badge/chip: tint background + text + border. */
  readonly chipClass: string;
  /** Hex color for SVG graph nodes/edges, where Tailwind utility classes don't apply. */
  readonly graphColor: string;
}

export const categoryStyle: Record<TopicCategory, CategoryStyle> = {
  respiratory: {
    label: "Respiratory",
    dotClass: "bg-topic-respiratory",
    textClass: "text-topic-respiratory-text",
    chipClass: "border-topic-respiratory/30 bg-topic-respiratory-tint text-topic-respiratory-text",
    graphColor: "#127d72",
  },
  cardiovascular: {
    label: "Cardiovascular",
    dotClass: "bg-topic-cardiovascular",
    textClass: "text-topic-cardiovascular-text",
    chipClass: "border-topic-cardiovascular/30 bg-topic-cardiovascular-tint text-topic-cardiovascular-text",
    graphColor: "#b23b4e",
  },
  renal: {
    label: "Renal",
    dotClass: "bg-topic-renal",
    textClass: "text-topic-renal-text",
    chipClass: "border-topic-renal/30 bg-topic-renal-tint text-topic-renal-text",
    graphColor: "#a97418",
  },
  "infectious-disease": {
    label: "Infectious Disease",
    dotClass: "bg-topic-infectious-disease",
    textClass: "text-topic-infectious-disease-text",
    chipClass:
      "border-topic-infectious-disease/30 bg-topic-infectious-disease-tint text-topic-infectious-disease-text",
    graphColor: "#3e7f49",
  },
  neurology: {
    label: "Neurologic",
    dotClass: "bg-topic-neurologic",
    textClass: "text-topic-neurologic-text",
    chipClass: "border-topic-neurologic/30 bg-topic-neurologic-tint text-topic-neurologic-text",
    graphColor: "#6a4fb8",
  },
  hematology: {
    label: "Hematology",
    dotClass: "bg-topic-hematology",
    textClass: "text-topic-hematology-text",
    chipClass: "border-topic-hematology/30 bg-topic-hematology-tint text-topic-hematology-text",
    graphColor: "#a83e74",
  },
  "gi-hepatic": {
    label: "GI / Hepatic",
    dotClass: "bg-amber-600",
    textClass: "text-amber-700 dark:text-amber-400",
    chipClass: "border-amber-600/30 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400",
    graphColor: "#d97706",
  },
  procedures: {
    label: "Airway / Procedures",
    dotClass: "bg-cyan-600",
    textClass: "text-cyan-700 dark:text-cyan-400",
    chipClass: "border-cyan-600/30 bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400",
    graphColor: "#0891b2",
  },
};
