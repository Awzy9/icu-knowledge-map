import { cn } from "@/lib/cn";

/** A single pulsing placeholder bar — compose several to build a route's loading.tsx. */
export function Skeleton({ className }: { readonly className?: string }) {
  return <div className={cn("animate-pulse rounded-md bg-border/70", className)} />;
}
