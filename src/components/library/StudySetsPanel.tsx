"use client";

import { useState } from "react";
import Link from "next/link";
import { useStudySets } from "@/hooks/useStudySets";
import { CONTENT_KIND_LABEL, type ContentKind } from "@/lib/content-id";
import { cn } from "@/lib/cn";

/** Pre-resolved content, passed from the server so this stays a thin client. */
export interface ResolvedItem {
  readonly contentId: string;
  readonly kind: ContentKind;
  readonly title: string;
  readonly subtitle: string;
  readonly href: string;
}

interface StudySetsPanelProps {
  /** Every resolvable content id in the app, keyed by contentId. */
  readonly catalog: readonly ResolvedItem[];
}

export function StudySetsPanel({ catalog }: StudySetsPanelProps) {
  const {
    studySets,
    createSet,
    renameSet,
    deleteSet,
    addToSet,
    removeFromSet,
    reorderItem,
  } = useStudySets();

  const [newSetName, setNewSetName] = useState("");
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const [addingToSetId, setAddingToSetId] = useState<string | null>(null);
  const [addQuery, setAddQuery] = useState("");

  const byId = new Map(catalog.map((item) => [item.contentId, item] as const));

  const handleCreate = (event: React.FormEvent) => {
    event.preventDefault();
    if (newSetName.trim() === "") return;
    createSet(newSetName);
    setNewSetName("");
  };

  const handleRenameSubmit = (setId: string) => {
    renameSet(setId, renameValue);
    setRenamingId(null);
  };

  const searchResults =
    addQuery.trim().length < 2
      ? []
      : catalog
          .filter((item) => item.title.toLowerCase().includes(addQuery.trim().toLowerCase()))
          .slice(0, 8);

  return (
    <section aria-labelledby="study-sets-heading" className="space-y-4">
      <div>
        <h2 id="study-sets-heading" className="text-xl font-bold text-ink">
          Custom study sets
        </h2>
        <p className="mt-1 text-sm text-ink-muted">
          Group anything in the library into your own collections — then run them as a focused session.
        </p>
      </div>

      {/* Create ---------------------------------------------------------- */}
      <form onSubmit={handleCreate} className="flex flex-wrap gap-2">
        <label htmlFor="new-study-set" className="sr-only">
          New study set name
        </label>
        <input
          id="new-study-set"
          type="text"
          value={newSetName}
          onChange={(event) => setNewSetName(event.target.value)}
          placeholder="e.g. Night Shift Review"
          className="min-h-11 min-w-0 flex-1 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink outline-none placeholder:text-ink-faint focus:border-accent"
        />
        <button
          type="submit"
          disabled={newSetName.trim() === ""}
          className="min-h-11 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-contrast transition-opacity disabled:opacity-40"
        >
          Create set
        </button>
      </form>

      {/* Sets ------------------------------------------------------------ */}
      {studySets.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border bg-surface px-4 py-8 text-center text-sm text-ink-muted">
          No study sets yet. Create one above — for example &ldquo;Shock Review&rdquo; or &ldquo;ARDS Rotation&rdquo;.
        </p>
      ) : (
        <ul className="space-y-4">
          {studySets.map((set) => {
            const items = set.itemIds
              .map((id) => byId.get(id))
              .filter((item): item is ResolvedItem => item !== undefined);

            return (
              <li key={set.id} className="rounded-xl border border-border bg-surface p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  {renamingId === set.id ? (
                    <div className="flex flex-1 flex-wrap gap-2">
                      <label htmlFor={`rename-${set.id}`} className="sr-only">
                        Rename set
                      </label>
                      <input
                        id={`rename-${set.id}`}
                        type="text"
                        value={renameValue}
                        autoFocus
                        onChange={(event) => setRenameValue(event.target.value)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") handleRenameSubmit(set.id);
                          if (event.key === "Escape") setRenamingId(null);
                        }}
                        className="min-h-11 min-w-0 flex-1 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink outline-none focus:border-accent"
                      />
                      <button
                        type="button"
                        onClick={() => handleRenameSubmit(set.id)}
                        className="min-h-11 rounded-lg border border-border px-3 text-sm font-medium text-ink"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="min-w-0">
                      <h3 className="truncate text-base font-semibold text-ink">{set.name}</h3>
                      <p className="text-xs text-ink-faint">
                        {items.length} item{items.length === 1 ? "" : "s"}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-1.5">
                    {items.length > 0 && (
                      <Link
                        href={`/learn/study-session/${set.id}`}
                        className="min-h-11 rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-accent-contrast"
                      >
                        Start session
                      </Link>
                    )}
                    <button
                      type="button"
                      onClick={() => setAddingToSetId(addingToSetId === set.id ? null : set.id)}
                      aria-expanded={addingToSetId === set.id}
                      className="min-h-11 rounded-lg border border-border px-3 py-2 text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      Add
                    </button>
                    {renamingId !== set.id && (
                      <button
                        type="button"
                        onClick={() => {
                          setRenamingId(set.id);
                          setRenameValue(set.name);
                        }}
                        className="min-h-11 rounded-lg border border-border px-3 py-2 text-sm text-ink-muted transition-colors hover:text-ink"
                      >
                        Rename
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => deleteSet(set.id)}
                      className="min-h-11 rounded-lg border border-border px-3 py-2 text-sm text-rose-600 transition-colors hover:bg-rose-500/10 dark:text-rose-400"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {/* Add-item search */}
                {addingToSetId === set.id && (
                  <div className="mt-3 rounded-lg border border-border bg-surface-muted/40 p-3">
                    <label htmlFor={`add-${set.id}`} className="text-xs font-medium text-ink-muted">
                      Search the library to add
                    </label>
                    <input
                      id={`add-${set.id}`}
                      type="text"
                      value={addQuery}
                      onChange={(event) => setAddQuery(event.target.value)}
                      placeholder="Topic, medication, physiology, case…"
                      className="mt-1.5 min-h-11 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink outline-none placeholder:text-ink-faint focus:border-accent"
                    />
                    {searchResults.length > 0 && (
                      <ul className="mt-2 space-y-1">
                        {searchResults.map((item) => {
                          const already = set.itemIds.includes(item.contentId);
                          return (
                            <li key={item.contentId}>
                              <button
                                type="button"
                                disabled={already}
                                onClick={() => {
                                  addToSet(set.id, item.contentId);
                                  setAddQuery("");
                                }}
                                className={cn(
                                  "flex min-h-11 w-full items-center justify-between gap-2 rounded-md px-2 py-2 text-left text-sm transition-colors",
                                  already
                                    ? "cursor-default text-ink-faint"
                                    : "text-ink hover:bg-accent-soft",
                                )}
                              >
                                <span className="truncate">{item.title}</span>
                                <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wide text-ink-faint">
                                  {already ? "Added" : CONTENT_KIND_LABEL[item.kind]}
                                </span>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                )}

                {/* Items */}
                {items.length > 0 && (
                  <ol className="mt-3 space-y-1.5">
                    {items.map((item, position) => (
                      <li
                        key={item.contentId}
                        className="flex items-center gap-2 rounded-md border border-border bg-surface-muted/30 px-2 py-1.5"
                      >
                        <span className="w-5 shrink-0 text-center text-xs text-ink-faint">
                          {position + 1}
                        </span>
                        <Link href={item.href} className="min-w-0 flex-1 truncate text-sm text-ink hover:text-accent">
                          {item.title}
                        </Link>
                        <span className="hidden shrink-0 text-[10px] font-semibold uppercase tracking-wide text-ink-faint sm:inline">
                          {CONTENT_KIND_LABEL[item.kind]}
                        </span>
                        <button
                          type="button"
                          aria-label={`Move ${item.title} up`}
                          disabled={position === 0}
                          onClick={() => reorderItem(set.id, item.contentId, -1)}
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded text-ink-muted disabled:opacity-30"
                        >
                          ↑
                        </button>
                        <button
                          type="button"
                          aria-label={`Move ${item.title} down`}
                          disabled={position === items.length - 1}
                          onClick={() => reorderItem(set.id, item.contentId, 1)}
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded text-ink-muted disabled:opacity-30"
                        >
                          ↓
                        </button>
                        <button
                          type="button"
                          aria-label={`Remove ${item.title} from ${set.name}`}
                          onClick={() => removeFromSet(set.id, item.contentId)}
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded text-ink-muted hover:text-rose-600"
                        >
                          ×
                        </button>
                      </li>
                    ))}
                  </ol>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
