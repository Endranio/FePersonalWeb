import { Skeleton } from "@/components/ui/skeleton";

export default function WorkCardSkeleton() {
  return (
    <div className="sm:flex gap-20 bg-white dark:bg-gray-800 p-10 rounded-xl mt-10">
      <div className="shrink-0 p-3">
        <Skeleton className="w-[100px] h-[100px] rounded-md" />
      </div>

      <div className="w-full space-y-4">
        <div className="sm:flex sm:justify-between items-center">
          <div className="space-y-2">
            <Skeleton className="h-8 w-40" />
            <Skeleton className="h-5 w-32" />
          </div>
          <Skeleton className="h-5 w-24" />
        </div>

        <div className="space-y-2 mt-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        <div className="flex flex-wrap gap-3 mt-5">
          {Array.from({ length: 1 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-20 rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
