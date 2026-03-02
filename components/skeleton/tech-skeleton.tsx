import { Skeleton } from "@/components/ui/skeleton";

export default function TechSkeleton() {
  return (
    <div className="flex gap-4 overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="tech-card inline-flex flex-col items-center gap-2 p-4 rounded-xl justify-center">
          <Skeleton className="w-10 h-10 rounded-md" />
          <Skeleton className="w-12 h-3 rounded" />
        </div>
      ))}
    </div>
  );
}
