"use client";

import React, { useState, useRef } from "react";
import {
  useLearningProgress,
  exportLearningData,
  importLearningState,
  resetLearningData,
} from "@/hooks/useLearningProgress";
import Link from "next/link";

interface ProgressDashboardProps {
  totalTopics: number;
  totalCases: number;
}

export function ProgressDashboard({ totalTopics, totalCases }: ProgressDashboardProps) {
  const stats = useLearningProgress({ totalTopics, totalCases });
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [selectedMedFilter, setSelectedMedFilter] = useState<string | null>(null);
  const [importStatus, setImportStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    const data = exportLearningData();
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `icu-km-progress-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const res = importLearningState(content);
      if (res.success) {
        setImportStatus({ type: "success", message: "Learning state imported successfully!" });
        setTimeout(() => window.location.reload(), 1000);
      } else {
        setImportStatus({ type: "error", message: res.error || "Failed to import file." });
      }
    };
    reader.readAsText(file);
  };

  const handleReset = () => {
    if (showConfirmReset) {
      resetLearningData();
    } else {
      setShowConfirmReset(true);
    }
  };

  return (
    <div className="space-y-8">
      {/* 4-Tier Learning State Breakdowns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Topics 4-State */}
        <div className="bg-surface rounded-xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wider block">Knowledge Library</span>
              <h3 className="text-lg font-bold text-ink">Topics Learning States</h3>
            </div>
            <span className="text-xs font-medium text-ink-muted bg-surface-elevated px-2.5 py-1 rounded-full border border-border">
              {stats.totalTopics} Topics Total
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            <div className="bg-canvas border border-border rounded-lg p-3 text-center">
              <span className="text-xs text-ink-muted block mb-1">Not Started</span>
              <span className="text-xl font-bold text-ink-faint">{stats.topicBreakdown.notStarted}</span>
            </div>
            <div className="bg-canvas border border-blue-200 dark:border-blue-900/40 rounded-lg p-3 text-center">
              <span className="text-xs text-blue-600 dark:text-blue-400 block mb-1">Learning</span>
              <span className="text-xl font-bold text-blue-700 dark:text-blue-300">{stats.topicBreakdown.learning}</span>
            </div>
            <div className="bg-canvas border border-amber-200 dark:border-amber-900/40 rounded-lg p-3 text-center">
              <span className="text-xs text-amber-600 dark:text-amber-400 block mb-1">Practiced</span>
              <span className="text-xl font-bold text-amber-700 dark:text-amber-300">{stats.topicBreakdown.practiced}</span>
            </div>
            <div className="bg-canvas border border-emerald-200 dark:border-emerald-900/40 rounded-lg p-3 text-center">
              <span className="text-xs text-emerald-600 dark:text-emerald-400 block mb-1">Strong</span>
              <span className="text-xl font-bold text-emerald-700 dark:text-emerald-300">{stats.topicBreakdown.strong}</span>
            </div>
          </div>

          <div className="w-full bg-canvas rounded-full h-2 flex overflow-hidden border border-border/50">
            <div
              style={{ width: `${(stats.topicBreakdown.strong / stats.totalTopics) * 100}%` }}
              className="bg-emerald-500"
              title="Strong"
            />
            <div
              style={{ width: `${(stats.topicBreakdown.practiced / stats.totalTopics) * 100}%` }}
              className="bg-amber-500"
              title="Practiced"
            />
            <div
              style={{ width: `${(stats.topicBreakdown.learning / stats.totalTopics) * 100}%` }}
              className="bg-blue-500"
              title="Learning"
            />
          </div>
        </div>

        {/* Medications 4-State */}
        <div className="bg-surface rounded-xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wider block">Pharmacotherapy</span>
              <h3 className="text-lg font-bold text-ink">Medication Learning States</h3>
            </div>
            <span className="text-xs font-medium text-ink-muted bg-surface-elevated px-2.5 py-1 rounded-full border border-border">
              35 Medications
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            <button
              onClick={() => setSelectedMedFilter(selectedMedFilter === "not-started" ? null : "not-started")}
              className={`p-3 rounded-lg text-center border transition-all ${
                selectedMedFilter === "not-started"
                  ? "bg-ink/5 border-ink ring-2 ring-ink/20"
                  : "bg-canvas border-border hover:border-ink/30"
              }`}
            >
              <span className="text-xs text-ink-muted block mb-1">Not Started</span>
              <span className="text-xl font-bold text-ink-faint">{stats.medicationBreakdown.notStarted}</span>
            </button>
            <button
              onClick={() => setSelectedMedFilter(selectedMedFilter === "learning" ? null : "learning")}
              className={`p-3 rounded-lg text-center border transition-all ${
                selectedMedFilter === "learning"
                  ? "bg-blue-50 dark:bg-blue-950/40 border-blue-500 ring-2 ring-blue-500/20"
                  : "bg-canvas border-blue-200 dark:border-blue-900/40 hover:border-blue-400"
              }`}
            >
              <span className="text-xs text-blue-600 dark:text-blue-400 block mb-1">Learning</span>
              <span className="text-xl font-bold text-blue-700 dark:text-blue-300">{stats.medicationBreakdown.learning}</span>
            </button>
            <button
              onClick={() => setSelectedMedFilter(selectedMedFilter === "practiced" ? null : "practiced")}
              className={`p-3 rounded-lg text-center border transition-all ${
                selectedMedFilter === "practiced"
                  ? "bg-amber-50 dark:bg-amber-950/40 border-amber-500 ring-2 ring-amber-500/20"
                  : "bg-canvas border-amber-200 dark:border-amber-900/40 hover:border-amber-400"
              }`}
            >
              <span className="text-xs text-amber-600 dark:text-amber-400 block mb-1">Practiced</span>
              <span className="text-xl font-bold text-amber-700 dark:text-amber-300">{stats.medicationBreakdown.practiced}</span>
            </button>
            <button
              onClick={() => setSelectedMedFilter(selectedMedFilter === "strong" ? null : "strong")}
              className={`p-3 rounded-lg text-center border transition-all ${
                selectedMedFilter === "strong"
                  ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 ring-2 ring-emerald-500/20"
                  : "bg-canvas border-emerald-200 dark:border-emerald-900/40 hover:border-emerald-400"
              }`}
            >
              <span className="text-xs text-emerald-600 dark:text-emerald-400 block mb-1">Strong</span>
              <span className="text-xl font-bold text-emerald-700 dark:text-emerald-300">{stats.medicationBreakdown.strong}</span>
            </button>
          </div>

          <div className="w-full bg-canvas rounded-full h-2 flex overflow-hidden border border-border/50 mb-3">
            <div
              style={{ width: `${(stats.medicationBreakdown.strong / 35) * 100}%` }}
              className="bg-emerald-500"
              title="Strong"
            />
            <div
              style={{ width: `${(stats.medicationBreakdown.practiced / 35) * 100}%` }}
              className="bg-amber-500"
              title="Practiced"
            />
            <div
              style={{ width: `${(stats.medicationBreakdown.learning / 35) * 100}%` }}
              className="bg-blue-500"
              title="Learning"
            />
          </div>

          {selectedMedFilter && (
            <div className="mt-3 pt-3 border-t border-border/60">
              <span className="text-xs font-semibold text-ink-muted uppercase tracking-wider block mb-2">
                Medications in {selectedMedFilter.replace("-", " ")}:
              </span>
              <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
                {stats.medicationList
                  .filter((m) => m.level === selectedMedFilter)
                  .map((m) => (
                    <Link
                      key={m.slug}
                      href={`/medications/${m.slug}`}
                      className="px-2.5 py-1 text-xs bg-canvas hover:bg-accent-soft hover:text-accent border border-border rounded-md font-medium text-ink transition-colors"
                    >
                      {m.name}
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Interactive Activity & Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Cases */}
        <div className="bg-surface rounded-xl border border-border p-5 shadow-sm">
          <h4 className="text-xs font-semibold text-ink-muted uppercase tracking-wider mb-2">Clinical Cases</h4>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-ink">{stats.casesCompleted}</span>
            <span className="text-sm font-medium text-ink-muted mb-1">/ {stats.totalCases} finished</span>
          </div>
        </div>

        {/* Challenges Accuracy */}
        <div className="bg-surface rounded-xl border border-border p-5 shadow-sm">
          <h4 className="text-xs font-semibold text-ink-muted uppercase tracking-wider mb-2">Challenge Accuracy</h4>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-ink">{stats.challengeAccuracy.percentage}%</span>
            <span className="text-sm font-medium text-ink-muted mb-1">({stats.challengeAccuracy.total} attempts)</span>
          </div>
        </div>

        {/* Question Accuracy */}
        <div className="bg-surface rounded-xl border border-border p-5 shadow-sm">
          <h4 className="text-xs font-semibold text-ink-muted uppercase tracking-wider mb-2">Question Accuracy</h4>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-ink">{stats.questionAccuracy.percentage}%</span>
            <span className="text-sm font-medium text-ink-muted mb-1">({stats.questionAccuracy.total} attempts)</span>
          </div>
        </div>

        {/* Bookmarks */}
        <div className="bg-surface rounded-xl border border-border p-5 shadow-sm">
          <h4 className="text-xs font-semibold text-ink-muted uppercase tracking-wider mb-2">Saved Resources</h4>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-ink">{stats.bookmarkCount}</span>
            <span className="text-sm font-medium text-ink-muted mb-1">in library</span>
          </div>
        </div>
      </div>

      {/* Needs Review Section */}
      {stats.needsReview.length > 0 && (
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-xl p-5">
          <h4 className="font-semibold text-amber-900 dark:text-amber-300 flex items-center gap-2 mb-3">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Needs Review
          </h4>
          <p className="text-xs text-amber-800/80 dark:text-amber-300/80 mb-4">
            Items identified based on repeated suboptimal answers or scores &lt; 70%:
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {stats.needsReview.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="flex items-center justify-between p-3 bg-white/70 dark:bg-black/30 border border-amber-200/60 dark:border-amber-900/30 rounded-lg hover:border-amber-400 transition-colors"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-700 dark:text-amber-400 tracking-wider block">
                    {item.category}
                  </span>
                  <span className="text-sm font-semibold text-ink capitalize">{item.title}</span>
                </div>
                <span className="text-xs font-medium text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/40 px-2 py-1 rounded">
                  {item.reason}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Strong Areas Section */}
      {stats.strongAreas.length > 0 && (
        <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-xl p-5">
          <h4 className="font-semibold text-emerald-900 dark:text-emerald-300 flex items-center gap-2 mb-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Strong Areas
          </h4>
          <div className="flex flex-wrap gap-2 mt-3">
            {stats.strongAreas.map((area) => (
              <span
                key={area}
                className="text-xs font-semibold text-emerald-800 dark:text-emerald-200 bg-emerald-100 dark:bg-emerald-900/40 px-3 py-1.5 rounded-lg"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Persistence & Tools Section */}
      <div className="border-t border-border pt-6 mt-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs text-ink-faint flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Learning progress is stored locally on this device (Unified v2).
            </p>
            {importStatus && (
              <p className={`text-xs mt-1 font-medium ${importStatus.type === "success" ? "text-emerald-600" : "text-red-600"}`}>
                {importStatus.message}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImportFile}
              accept=".json"
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex-1 sm:flex-none px-3.5 py-2 text-xs font-medium text-ink bg-surface border border-border hover:bg-surface-elevated rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Import
            </button>
            <button
              type="button"
              onClick={handleExport}
              className="flex-1 sm:flex-none px-3.5 py-2 text-xs font-medium text-ink bg-surface border border-border hover:bg-surface-elevated rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Export
            </button>
            <button
              type="button"
              onClick={handleReset}
              className={`flex-1 sm:flex-none px-3.5 py-2 text-xs font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                showConfirmReset
                  ? "bg-red-600 hover:bg-red-700 text-white border border-transparent"
                  : "text-red-600 dark:text-red-500 bg-surface border border-border hover:bg-red-50 dark:hover:bg-red-900/20"
              }`}
            >
              {showConfirmReset ? "Confirm Reset" : "Reset"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
