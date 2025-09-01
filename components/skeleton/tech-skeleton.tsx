import { Skeleton } from "@/components/ui/skeleton"

export default function TechSkeleton() {
  return (
    <div className="flex gap-5 overflow-hidden">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="inline-flex p-5 rounded-xl justify-center dark:bg-gray-800">
          <Skeleton className="w-10 h-10 rounded-md" />
        </div>
      ))}
    </div>
  )
}
