"use client";

import { useCaseProgress } from "@/hooks/useCaseProgress";

export function CaseStatusBadgeClient({ slug }: { slug: string }) {
  const { getCaseProgress } = useCaseProgress();
  const progress = getCaseProgress(slug);

  if (progress?.completedAt) {
    return <span className="text-xs font-semibold text-green-500">✓ Completed</span>;
  }
  
  if (progress && progress.currentStepIndex > 0) {
    return <span className="text-xs font-semibold text-orange-500">In Progress</span>;
  }
  
  return null;
}
