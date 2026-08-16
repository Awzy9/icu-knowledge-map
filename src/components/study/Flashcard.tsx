"use client";

import { useState } from "react";
import Link from "next/link";
import type { Flashcard as FlashcardType } from "@/content-types";
import { BookmarkToggle } from "@/components/bookmarks/BookmarkToggle";
import { Tag } from "@/components/ui/Tag";
import { difficultyLabel } from "@/lib/study-style";
import { resolveStudyReference } from "./resolveStudyReference";

export function Flashcard({ card }: { readonly card: FlashcardType }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex min-h-56 w-full flex-col rounded-md border border-border bg-surface p-6">
      <div className="mb-2 flex items-center justify-between gap-3">
        <Tag>{difficultyLabel[card.difficulty]}</Tag>
        <BookmarkToggle type="flashcard" id={card.id} />
      </div>

      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className="flex flex-1 flex-col items-center justify-center gap-3 text-center"
      >
        <p className="text-xs uppercase tracking-wide text-ink-faint">{flipped ? "Answer" : "Question"}</p>
        <p className="text-base text-ink">{flipped ? card.answer : card.question}</p>
        {flipped && <p className="text-sm leading-relaxed text-ink-muted">{card.explanation}</p>}
        <p className="text-xs text-ink-faint">Tap to flip</p>
      </button>

      {flipped && (
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 border-t border-border pt-3 text-xs text-ink-faint">
          {card.references.map((reference, i) => {
            const resolved = resolveStudyReference(reference);
            return resolved.href ? (
              <Link key={i} href={resolved.href} className="hover:text-accent">
                {resolved.text}
              </Link>
            ) : (
              <span key={i}>{resolved.text}</span>
            );
          })}
        </div>
      )}
    </div>
  );
}
