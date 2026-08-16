"use client";

import { useState } from "react";
import type { Flashcard as FlashcardType } from "@/content-types";
import { useFlashcardProgress } from "@/hooks/useFlashcardProgress";
import { Flashcard } from "./Flashcard";

interface FlashcardDeckProps {
  readonly cards: readonly FlashcardType[];
}

export function FlashcardDeck({ cards }: FlashcardDeckProps) {
  const { progress, markCard } = useFlashcardProgress();
  const [index, setIndex] = useState(0);

  if (cards.length === 0) {
    return <p className="text-sm text-ink-muted">No flashcards yet for this topic.</p>;
  }

  const current = cards[index % cards.length];
  const knownCount = cards.filter((card) => progress[card.id] === "known").length;

  const mark = (status: "known" | "review") => {
    markCard(current.id, status);
    setIndex((i) => (i + 1) % cards.length);
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-ink-muted">
        Card {(index % cards.length) + 1} of {cards.length} · {knownCount}/{cards.length} marked known
      </p>
      <Flashcard key={current.id} card={current} />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setIndex((i) => (i - 1 + cards.length) % cards.length)}
          className="rounded-md border border-border px-3 py-1.5 text-sm text-ink-muted hover:text-ink"
        >
          Previous
        </button>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => mark("review")}
            className="rounded-md border border-border px-3 py-1.5 text-sm text-ink-muted hover:text-ink"
          >
            Review again
          </button>
          <button
            type="button"
            onClick={() => mark("known")}
            className="rounded-md border border-accent bg-accent-soft px-3 py-1.5 text-sm text-accent-strong"
          >
            Mark known
          </button>
        </div>
        <button
          type="button"
          onClick={() => setIndex((i) => (i + 1) % cards.length)}
          className="rounded-md border border-border px-3 py-1.5 text-sm text-ink-muted hover:text-ink"
        >
          Next
        </button>
      </div>
    </div>
  );
}
