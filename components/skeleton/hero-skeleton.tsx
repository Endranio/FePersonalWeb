import { Skeleton } from "@/components/ui/skeleton"

export default function HeroSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row gap-20 text-left mt-15 items-center">
      
      <div className="w-[350px] lg:w-[600px] h-[350px] rounded-xl overflow-hidden flex items-center">
        <Skeleton className="w-full h-full rounded-xl" />
      </div>

      
      <div className="space-y-10 flex-col lg:text-left text-center w-full">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-14 w-2/3 mx-auto lg:mx-0" /> 
          <Skeleton className="h-8 w-1/2 mx-auto lg:mx-0" />   
          <Skeleton className="h-4 w-full" />                  
          <Skeleton className="h-4 w-5/6" />                  
          <Skeleton className="h-4 w-3/4" />                  
          <Skeleton className="h-5 w-1/3 mx-auto lg:mx-0" />   
        </div>

        
        <div className="flex gap-5 justify-center lg:justify-start">
          <Skeleton className="h-10 w-32 rounded-lg" />
          <Skeleton className="h-10 w-40 rounded-lg" />
        </div>
      </div>
    </div>
  )
}
