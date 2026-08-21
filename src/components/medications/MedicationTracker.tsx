"use client";

import { useEffect, useRef } from "react";
import { markMedicationViewed } from "@/lib/learning-state";
import { useRecentActivity } from "@/hooks/useRecentActivity";

interface MedicationTrackerProps {
  slug: string;
  name: string;
}

export function MedicationTracker({ slug, name }: MedicationTrackerProps) {
  const recorded = useRef(false);
  const { recordActivity } = useRecentActivity();

  useEffect(() => {
    if (!recorded.current) {
      recorded.current = true;
      markMedicationViewed(slug);
      recordActivity({
        type: "medication",
        id: slug,
        title: name,
        href: `/medications/${slug}`,
      });
    }
  }, [slug, name, recordActivity]);

  return null;
}
