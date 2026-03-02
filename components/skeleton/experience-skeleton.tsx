import { Skeleton } from "@/components/ui/skeleton";

export default function WorkCardSkeleton() {
  return (
    <div className="relative">
      {/* Timeline dot skeleton */}
      <div className="absolute left-[14px] top-[40px] w-[14px] h-[14px] rounded-full">
        <Skeleton className="w-full h-full rounded-full" />
      </div>

      {/* Card skeleton */}
      <div className="glass-card rounded-2xl p-8 ml-6">
        <div className="sm:flex sm:justify-between sm:items-start gap-6">
          <div className="flex items-start gap-5">
            <Skeleton className="w-14 h-14 rounded-xl shrink-0" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-48" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
          <Skeleton className="h-6 w-28 rounded-full mt-3 sm:mt-0" />
        </div>

        <div className="space-y-2 mt-5">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        <div className="flex flex-wrap gap-2 mt-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-7 w-20 rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
