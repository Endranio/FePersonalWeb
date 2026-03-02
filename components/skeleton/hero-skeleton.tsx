import { Skeleton } from "@/components/ui/skeleton";

export default function HeroSkeleton() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 text-left items-center w-full">
        {/* Image skeleton */}
        <div className="shrink-0">
          <Skeleton className="w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] rounded-2xl" />
        </div>

        {/* Content skeleton */}
        <div className="space-y-6 flex-1 lg:text-left text-center w-full">
          <Skeleton className="h-8 w-48 rounded-full mx-auto lg:mx-0" />
          <Skeleton className="h-14 w-3/4 mx-auto lg:mx-0" />
          <Skeleton className="h-8 w-1/3 mx-auto lg:mx-0" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <Skeleton className="h-5 w-1/4 mx-auto lg:mx-0" />
          <div className="flex gap-4 justify-center lg:justify-start pt-2">
            <Skeleton className="h-12 w-36 rounded-full" />
            <Skeleton className="h-12 w-40 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
