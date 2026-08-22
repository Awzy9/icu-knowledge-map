/**
 * Unified, Versioned Learning State & Progress Engine (Version 2)
 *
 * Architecture:
 * - Single root storage key: "icu-km:unified-state:v2"
 * - Backward-safe migration from legacy keys ("icu-km:bookmarks", "icu-km:completed-topics", etc.)
 * - Transparent 4-tier Learning State engine: "not-started" | "learning" | "practiced" | "strong"
 * - SSR safe with useSyncExternalStore compatible pub/sub listener map
 */

export type LearningStateLevel = "not-started" | "learning" | "practiced" | "strong";

export interface DecisionRecord {
  stepId: string;
  stepPrompt: string;
  selectedOptionId: string;
  selectedOptionText: string;
  isCorrect: boolean;
  classification: "appropriate" | "reasonable-alternative" | "suboptimal" | "potentially-harmful";
  timestamp: string;
}

export interface CaseProgressRecord {
  caseId: string;
  currentStepId?: string;
  currentStepIndex: number;
  stepResults: Record<string, { selectedOptionId: string; correct: boolean; classification?: string }>;
  decisionTimeline: DecisionRecord[];
  completedAt?: string;
  score?: number;
}

export interface ChallengeAttempt {
  selectedOptionId: string;
  correct: boolean;
  attemptedAt: string;
}

export interface QuestionAttempt {
  optionId: string;
  correct: boolean;
  attemptedAt: string;
}

export interface BookmarkItem {
  id: string;
  type: string;
  savedAt: string;
  note?: string;
}

export interface ActivityRecord {
  type: "topic" | "medication" | "case" | "challenge" | "pathway" | "flashcards" | "questions" | "problem";
  id: string;
  title: string;
  href: string;
  timestamp: string;
  resumeState?: { stepIndex?: number };
}

export interface DailyChallengeRecord {
  lastCompletedDate: string | null;
  lastChallengeId: string | null;
  selectedOptionId: string | null;
  correct: boolean | null;
  streak: number;
}

/** A user-created collection of canonical content ids ("topic:ards"). */
export interface StudySet {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  /** Ordered canonical content ids. Order is user-controlled (reorder). */
  itemIds: string[];
}

/** One attempt at a Rapid Decision or a Find-the-Error case. */
export interface PracticeAttempt {
  selectedOptionId: string;
  correct: boolean;
  attemptedAt: string;
}

/**
 * "Why is this wrong?" per-line classification attempt. `lineIndex` refers to
 * the position within the error case's icuPlan array.
 */
export interface LineClassificationAttempt {
  lineIndex: number;
  selected: "correct" | "questionable" | "context-dependent" | "dangerous";
  expected: "correct" | "questionable" | "context-dependent" | "dangerous";
  isMatch: boolean;
  attemptedAt: string;
}

export interface UnifiedLearningState {
  version: 3;
  lastActiveTimestamp: string;

  // Entity engagements
  topics: Record<string, { viewed: boolean; lastViewedAt?: string; completed: boolean }>;
  medications: Record<string, { viewed: boolean; lastViewedAt?: string }>;

  // Interactive engines
  cases: Record<string, CaseProgressRecord>;
  challenges: Record<string, { attempts: ChallengeAttempt[]; lastAttemptedAt: string }>;
  questions: Record<string, { attempts: QuestionAttempt[]; lastAttemptedAt: string }>;
  flashcards: Record<string, { status: "known" | "review"; lastReviewedAt: string }>;
  /** Rapid ICU Decisions results, keyed by decision id. */
  rapidDecisions: Record<string, { attempts: PracticeAttempt[]; lastAttemptedAt: string }>;
  /** Find the ICU Error results, keyed by error case id. */
  errorHunts: Record<
    string,
    {
      attempts: PracticeAttempt[];
      lineClassifications: LineClassificationAttempt[];
      lastAttemptedAt: string;
    }
  >;

  // User library & session
  bookmarks: BookmarkItem[];
  studySets: StudySet[];
  recentActivity: ActivityRecord[];
  dailyChallenge: DailyChallengeRecord;
  preferences: { theme?: string; fontSize?: string; bedsideMode?: boolean };
}

export const STORAGE_KEY_V2 = "icu-km:unified-state:v2";
export const STORAGE_KEY_V3 = "icu-km:unified-state:v3";

export const DEFAULT_LEARNING_STATE: UnifiedLearningState = {
  version: 3,
  lastActiveTimestamp: new Date().toISOString(),
  topics: {},
  medications: {},
  cases: {},
  challenges: {},
  questions: {},
  flashcards: {},
  rapidDecisions: {},
  errorHunts: {},
  bookmarks: [],
  studySets: [],
  recentActivity: [],
  dailyChallenge: {
    lastCompletedDate: null,
    lastChallengeId: null,
    selectedOptionId: null,
    correct: null,
    streak: 0,
  },
  preferences: {},
};

// In-memory pub/sub for same-tab sync
const listeners = new Set<() => void>();
let cachedRaw: string | null = null;
let cachedState: UnifiedLearningState = DEFAULT_LEARNING_STATE;

export function subscribeToLearningState(callback: () => void): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function emitChange() {
  listeners.forEach((listener) => {
    try {
      listener();
    } catch {
      // ignore callback error
    }
  });
}

/**
 * Migrates data from all legacy v1 storage keys into the unified v2 state.
 */
export function migrateLegacyState(): UnifiedLearningState {
  if (typeof window === "undefined") return DEFAULT_LEARNING_STATE;

  const state: UnifiedLearningState = { ...DEFAULT_LEARNING_STATE, lastActiveTimestamp: new Date().toISOString() };

  try {
    // 1. Bookmarks & Notes
    const legacyBookmarksRaw = localStorage.getItem("icu-km:bookmarks");
    const legacyNotesRaw = localStorage.getItem("icu-km:bookmark-notes");
    const legacyBookmarks = legacyBookmarksRaw ? JSON.parse(legacyBookmarksRaw) : [];
    const legacyNotes: Record<string, string> = legacyNotesRaw ? JSON.parse(legacyNotesRaw) : {};

    if (Array.isArray(legacyBookmarks)) {
      state.bookmarks = legacyBookmarks.map((b: { id?: string; type?: string; savedAt?: string }) => ({
        id: b.id || "",
        type: b.type || "topic",
        savedAt: b.savedAt || new Date().toISOString(),
        note: legacyNotes[`${b.type}:${b.id}`] || undefined,
      }));
    }

    // 2. Completed Topics
    const legacyTopicsRaw = localStorage.getItem("icu-km:completed-topics");
    if (legacyTopicsRaw) {
      const topicIds: string[] = JSON.parse(legacyTopicsRaw);
      if (Array.isArray(topicIds)) {
        topicIds.forEach((id) => {
          state.topics[id] = { viewed: true, completed: true, lastViewedAt: new Date().toISOString() };
        });
      }
    }

    // 3. Flashcards
    const legacyFlashcardsRaw = localStorage.getItem("icu-km:flashcard-progress");
    if (legacyFlashcardsRaw) {
      const fcMap: Record<string, "known" | "review"> = JSON.parse(legacyFlashcardsRaw);
      Object.entries(fcMap).forEach(([id, status]) => {
        state.flashcards[id] = { status, lastReviewedAt: new Date().toISOString() };
      });
    }

    // 4. Questions
    const legacyQuestionsRaw = localStorage.getItem("icu-km:question-history");
    if (legacyQuestionsRaw) {
      const qMap: Record<string, { lastOptionId: string; correct: boolean; attemptedAt: string }> = JSON.parse(legacyQuestionsRaw);
      Object.entries(qMap).forEach(([id, q]) => {
        state.questions[id] = {
          attempts: [{ optionId: q.lastOptionId, correct: q.correct, attemptedAt: q.attemptedAt || new Date().toISOString() }],
          lastAttemptedAt: q.attemptedAt || new Date().toISOString(),
        };
      });
    }

    // 5. Clinical Cases
    const legacyCasesRaw = localStorage.getItem("icu-km:case-progress");
    if (legacyCasesRaw) {
      const caseMap: Record<string, { currentStepIndex?: number; stepResults?: Record<string, { selectedOptionId: string; correct: boolean; classification?: string }>; completedAt?: string; score?: number }> = JSON.parse(legacyCasesRaw);
      Object.entries(caseMap).forEach(([id, c]) => {
        state.cases[id] = {
          caseId: id,
          currentStepIndex: c.currentStepIndex || 0,
          stepResults: c.stepResults || {},
          decisionTimeline: [],
          completedAt: c.completedAt,
          score: c.score,
        };
      });
    }

    // 6. Medication Challenges
    const legacyChallengesRaw = localStorage.getItem("icu-km:challenge-history");
    if (legacyChallengesRaw) {
      const chMap: Record<string, { challengeId: string; selectedOptionId: string; correct: boolean; attemptedAt: string }> = JSON.parse(legacyChallengesRaw);
      Object.entries(chMap).forEach(([id, ch]) => {
        state.challenges[id] = {
          attempts: [{ selectedOptionId: ch.selectedOptionId, correct: ch.correct, attemptedAt: ch.attemptedAt || new Date().toISOString() }],
          lastAttemptedAt: ch.attemptedAt || new Date().toISOString(),
        };
      });
    }

    // 7. Daily Challenge
    const legacyDailyRaw = localStorage.getItem("icu-km:daily-challenge");
    if (legacyDailyRaw) {
      const daily = JSON.parse(legacyDailyRaw);
      state.dailyChallenge = {
        lastCompletedDate: daily.lastCompletedDate || null,
        lastChallengeId: daily.lastChallengeId || null,
        selectedOptionId: daily.selectedOptionId || null,
        correct: typeof daily.correct === "boolean" ? daily.correct : null,
        streak: Number(daily.streak) || 0,
      };
    }

    // 8. Recent Activity
    const legacyActivityRaw = localStorage.getItem("icu-km:recent-activity");
    if (legacyActivityRaw) {
      const acts = JSON.parse(legacyActivityRaw);
      if (Array.isArray(acts)) {
        state.recentActivity = acts;
      }
    }
  } catch (err) {
    console.warn("Error migrating legacy learning state:", err);
  }

  return state;
}

/**
 * Reads the unified learning state from localStorage with safe fallback and cache.
 */
/** Normalizes any parsed payload (v2 or v3) into a complete v3 state object. */
function normalizeToV3(parsed: Record<string, unknown>): UnifiedLearningState {
  const get = <T,>(key: string, fallback: T): T =>
    (parsed[key] as T | undefined) ?? fallback;

  return {
    ...DEFAULT_LEARNING_STATE,
    ...parsed,
    version: 3,
    topics: get("topics", {}),
    medications: get("medications", {}),
    cases: get("cases", {}),
    challenges: get("challenges", {}),
    questions: get("questions", {}),
    flashcards: get("flashcards", {}),
    // New in v3 — absent in a v2 payload.
    rapidDecisions: get("rapidDecisions", {}),
    errorHunts: get("errorHunts", {}),
    bookmarks: Array.isArray(parsed.bookmarks) ? (parsed.bookmarks as BookmarkItem[]) : [],
    studySets: Array.isArray(parsed.studySets) ? (parsed.studySets as StudySet[]) : [],
    recentActivity: Array.isArray(parsed.recentActivity)
      ? (parsed.recentActivity as ActivityRecord[])
      : [],
    dailyChallenge: {
      ...DEFAULT_LEARNING_STATE.dailyChallenge,
      ...((parsed.dailyChallenge as Partial<DailyChallengeRecord>) || {}),
    },
    preferences: get("preferences", {}),
  };
}

export function getUnifiedLearningState(): UnifiedLearningState {
  if (typeof window === "undefined") return DEFAULT_LEARNING_STATE;

  try {
    const raw = localStorage.getItem(STORAGE_KEY_V3);
    if (raw === cachedRaw && cachedRaw !== null) {
      return cachedState;
    }

    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") {
        cachedRaw = raw;
        cachedState = normalizeToV3(parsed);
        return cachedState;
      }
    }

    // Upgrade an existing v2 state in place — nothing is lost.
    const rawV2 = localStorage.getItem(STORAGE_KEY_V2);
    if (rawV2) {
      const parsedV2 = JSON.parse(rawV2);
      if (parsedV2 && typeof parsedV2 === "object") {
        const upgraded = normalizeToV3(parsedV2);
        saveUnifiedLearningState(upgraded);
        return upgraded;
      }
    }

    // No v3 and no v2 — fall back to the original per-key legacy migration.
    const migrated = migrateLegacyState();
    saveUnifiedLearningState(migrated);
    return migrated;
  } catch (err) {
    console.error("Failed to read learning state from localStorage:", err);
    return DEFAULT_LEARNING_STATE;
  }
}

/**
 * Persists the unified learning state into localStorage and notifies subscribers.
 */
export function saveUnifiedLearningState(nextState: UnifiedLearningState): void {
  if (typeof window === "undefined") return;

  try {
    const updated = {
      ...nextState,
      version: 3 as const,
      lastActiveTimestamp: new Date().toISOString(),
    };
    const raw = JSON.stringify(updated);
    localStorage.setItem(STORAGE_KEY_V3, raw);
    cachedRaw = raw;
    cachedState = updated;
    emitChange();
  } catch (err) {
    console.warn("Storage write failed (quota exceeded or disabled):", err);
  }
}

/**
 * Mutates unified learning state via an updater function.
 */
export function updateUnifiedLearningState(
  updater: (prev: UnifiedLearningState) => UnifiedLearningState
): void {
  const current = getUnifiedLearningState();
  const next = updater(current);
  saveUnifiedLearningState(next);
}

export function markMedicationViewed(slug: string): void {
  updateUnifiedLearningState((prev) => {
    if (prev.medications[slug]?.viewed) {
      return prev;
    }
    return {
      ...prev,
      medications: {
        ...prev.medications,
        [slug]: {
          viewed: true,
          lastViewedAt: new Date().toISOString(),
        },
      },
    };
  });
}

export function markTopicViewed(id: string): void {
  updateUnifiedLearningState((prev) => {
    if (prev.topics[id]?.viewed) {
      return prev;
    }
    return {
      ...prev,
      topics: {
        ...prev.topics,
        [id]: {
          ...prev.topics[id],
          viewed: true,
          completed: prev.topics[id]?.completed ?? false,
          lastViewedAt: new Date().toISOString(),
        },
      },
    };
  });
}

/* -------------------------------------------------------------------------- */
/*  4-Tier Learning State Computation Engine                                  */
/* -------------------------------------------------------------------------- */

export interface LearningStateInput {
  isViewed: boolean;
  challengeTotalAttempts: number;
  challengeRecentCorrect: number;
  questionTotalAttempts: number;
  questionRecentCorrect: number;
  flashcardStatus?: "known" | "review";
  casesCompleted?: number;
}

/**
 * Computes a transparent, recency-aware 4-tier Learning State:
 * 1. "not-started": No meaningful view or practice
 * 2. "learning": Page viewed / initiated
 * 3. "practiced": Attempted related questions, flashcards, challenges, or cases
 * 4. "strong": Consistent high accuracy (≥75%) across multiple attempts (≥2 questions/challenges)
 */
export function computeLearningState(input: LearningStateInput): LearningStateLevel {
  const totalPracticeAttempts = input.challengeTotalAttempts + input.questionTotalAttempts + (input.flashcardStatus ? 1 : 0) + (input.casesCompleted ? 1 : 0);

  if (totalPracticeAttempts === 0) {
    return input.isViewed ? "learning" : "not-started";
  }

  const totalInteractiveAttempts = input.challengeTotalAttempts + input.questionTotalAttempts;
  const totalCorrect = input.challengeRecentCorrect + input.questionRecentCorrect;

  if (totalInteractiveAttempts >= 2) {
    const accuracy = (totalCorrect / totalInteractiveAttempts) * 100;
    if (accuracy >= 75) {
      return "strong";
    }
  } else if (totalInteractiveAttempts === 1 && totalCorrect === 1 && input.flashcardStatus === "known") {
    return "strong";
  }

  return "practiced";
}

/* -------------------------------------------------------------------------- */
/*  Export / Import / Reset Tools                                             */
/* -------------------------------------------------------------------------- */

export function exportLearningState(): string {
  const state = getUnifiedLearningState();
  return JSON.stringify(state, null, 2);
}

export function importLearningState(jsonStr: string): { success: boolean; error?: string } {
  try {
    const parsed = JSON.parse(jsonStr);
    if (!parsed || typeof parsed !== "object") {
      return { success: false, error: "Invalid JSON format." };
    }
    if (parsed.version !== 3 && parsed.version !== 2 && parsed.version !== 1) {
      return { success: false, error: "Unsupported schema version." };
    }

    const normalized: UnifiedLearningState = {
      ...normalizeToV3(parsed),
      lastActiveTimestamp: new Date().toISOString(),
    };

    saveUnifiedLearningState(normalized);
    return { success: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Failed to parse JSON file.";
    return { success: false, error: msg };
  }
}

export function resetLearningState(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY_V3);
    localStorage.removeItem(STORAGE_KEY_V2);
    // Clean legacy keys as well to prevent re-migration
    const legacyKeys = [
      "icu-km:bookmarks",
      "icu-km:bookmark-notes",
      "icu-km:completed-topics",
      "icu-km:flashcard-progress",
      "icu-km:question-history",
      "icu-km:case-progress",
      "icu-km:challenge-history",
      "icu-km:daily-challenge",
      "icu-km:recent-activity",
    ];
    legacyKeys.forEach((key) => localStorage.removeItem(key));
    cachedRaw = null;
    cachedState = DEFAULT_LEARNING_STATE;
    emitChange();
    window.location.reload();
  } catch {
    // ignore
  }
}
