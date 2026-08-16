import { Skeleton } from "@/components/ui/Skeleton";

export default function TrialLoading() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-5 px-4 py-10 sm:px-6">
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-6 w-24" />
      <Skeleton className="h-8 w-2/3" />
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-16 w-full" />
      <Skeleton className="h-16 w-full" />
    </div>
  );
}
