/** Shown when no verified review metadata exists. We never invent dates. */
export function ReviewMetadataNotice({ className }: { className?: string }) {
  return (
    <div className={`rounded-lg border border-border bg-surface p-4 text-sm ${className ?? ""}`} role="note">
      <p className="text-xs font-bold uppercase tracking-wide text-ink-muted">Evidence status</p>
      <p className="mt-1 italic text-ink-muted">Review metadata not yet recorded.</p>
      <p className="mt-1 text-xs text-ink-muted">
        Status, review dates and guideline versions appear here once editorial metadata is authored for this content.
      </p>
    </div>
  );
}
