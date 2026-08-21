"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useBookmarks } from "@/hooks/useBookmarks";
import { useBookmarkNotes } from "@/hooks/useBookmarkNotes";
import { getBookmarkableEntity } from "@/registry";

export function LibraryView() {
  const { bookmarks, toggleBookmark } = useBookmarks();
  const { getNote, setNote } = useBookmarkNotes();
  
  const [activeTab, setActiveTab] = useState("all");
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");

  const filteredBookmarks = activeTab === "all" 
    ? bookmarks 
    : bookmarks.filter(b => b.type === activeTab);

  const handleEditStart = (type: string, id: string, currentNote: string = "") => {
    setEditingNoteId(`${type}:${id}`);
    setEditValue(currentNote);
  };

  const handleEditSave = (type: string, id: string) => {
    setNote(type, id, editValue);
    setEditingNoteId(null);
  };

  const handleEditCancel = () => {
    setEditingNoteId(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent, type: string, id: string) => {
    if (e.key === "Enter") {
      handleEditSave(type, id);
    } else if (e.key === "Escape") {
      handleEditCancel();
    }
  };

  if (bookmarks.length === 0) {
    return (
      <div className="bg-surface rounded-xl border border-border p-12 text-center shadow-sm">
        <svg className="w-12 h-12 mx-auto text-ink-faint mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
        <h3 className="text-xl font-medium text-ink mb-2">Your Library is Empty</h3>
        <p className="text-ink-muted max-w-md mx-auto">
          Save resources by tapping the bookmark icon on any page to build your personal ICU reference library.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar gap-2">
        {TABS.map((tab) => {
          const count = tab.id === "all" 
            ? bookmarks.length 
            : bookmarks.filter(b => b.type === tab.id).length;
            
          if (count === 0 && tab.id !== "all") return null;

          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isActive 
                  ? "bg-ink text-canvas" 
                  : "bg-surface border border-border text-ink-muted hover:bg-surface-elevated hover:text-ink"
              }`}
            >
              {tab.label} <span className={`ml-1.5 opacity-70 ${isActive ? "text-canvas" : ""}`}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredBookmarks.map((bookmark) => {
          const entity = getBookmarkableEntity(bookmark.type as Parameters<typeof getBookmarkableEntity>[0], bookmark.id);
          if (!entity) return null;
          
          const noteKey = `${bookmark.type}:${bookmark.id}`;
          const isEditing = editingNoteId === noteKey;
          const note = getNote(bookmark.type, bookmark.id);

          return (
            <div key={noteKey} className="bg-surface border border-border rounded-xl shadow-sm p-5 flex flex-col transition-all hover:shadow-md">
              <div className="flex items-start justify-between mb-2">
                <div className="flex flex-col">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-accent-soft text-accent w-fit mb-2">
                    {bookmark.type}
                  </span>
                  <Link href={entity.href} className="text-lg font-medium text-ink hover:text-accent transition-colors">
                    {entity.title}
                  </Link>
                  {entity.subtitle && (
                    <p className="text-sm text-ink-muted mt-1">{entity.subtitle}</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => toggleBookmark(bookmark.type as Parameters<typeof toggleBookmark>[0], bookmark.id)}
                  className="p-2 text-accent hover:bg-accent-soft rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="Remove bookmark"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-border/50">
                {isEditing ? (
                  <div className="flex flex-col gap-2">
                    <input
                      autoFocus
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, bookmark.type, bookmark.id)}
                      onBlur={() => handleEditSave(bookmark.type, bookmark.id)}
                      placeholder="Add a personal note..."
                      className="w-full px-3 py-2 text-sm bg-canvas border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-ink"
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        onMouseDown={(e) => { e.preventDefault(); handleEditCancel(); }}
                        className="text-xs font-medium text-ink-muted hover:text-ink px-2 py-1"
                      >
                        Cancel
                      </button>
                      <button
                        onMouseDown={(e) => { e.preventDefault(); handleEditSave(bookmark.type, bookmark.id); }}
                        className="text-xs font-medium text-white bg-accent hover:bg-accent-strong px-2 py-1 rounded"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="group flex items-start justify-between min-h-[1.5rem]">
                    {note ? (
                      <p className="text-sm text-ink-muted italic flex-grow mr-4 line-clamp-3">
                        &ldquo;{note}&rdquo;
                      </p>
                    ) : (
                      <p className="text-sm text-ink-faint italic flex-grow mr-4">
                        Add a personal note...
                      </p>
                    )}
                    <button
                      onClick={() => handleEditStart(bookmark.type, bookmark.id, note)}
                      className="p-1.5 text-ink-faint hover:text-accent hover:bg-accent-soft rounded opacity-0 group-hover:opacity-100 transition-all focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      aria-label="Edit note"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const TABS = [
  { id: "all", label: "All Saved" },
  { id: "medication", label: "Medications" },
  { id: "topic", label: "Topics" },
  { id: "pathway", label: "Pathways" },
  { id: "problem", label: "Problems" },
  { id: "evidence", label: "Evidence" },
  { id: "case", label: "Cases" },
];
