import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("rounded-md border border-border bg-surface p-4", className)}>
      {children}
    </div>
  );
}
