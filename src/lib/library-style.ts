import type { BookmarkableType } from "@/registry";

export type LibraryCategory = "topics" | "medications" | "evidence" | "guidelines" | "calculators" | "learning";

export const categoryByBookmarkType: Record<BookmarkableType, LibraryCategory> = {
  topic: "topics",
  medication: "medications",
  physiology: "topics",
  trial: "evidence",
  "systematic-review": "evidence",
  guideline: "guidelines",
  calculator: "calculators",
  pathway: "learning",
  flashcard: "learning",
  question: "learning",
};

export const libraryCategoryLabel: Record<LibraryCategory, string> = {
  topics: "Topics",
  medications: "Medications",
  evidence: "Evidence",
  guidelines: "Guidelines",
  calculators: "Calculators",
  learning: "Learning",
};

export const libraryCategoryOrder: readonly LibraryCategory[] = ["topics", "medications", "evidence", "guidelines", "calculators", "learning"];
