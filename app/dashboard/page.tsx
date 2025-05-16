

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { api } from "@/lib/api";

export default async function Dashboard() {
  const res = await api.get("/dashboard")
  const data = res.data
  

  return (
    
      <div className="mt-4 flex flex-col w-full relative">
      

        <div className="flex flex-col gap-5 mx-15 mt-15 ">
          <div>
            <h1 className="font-bold">Welcome Back</h1>
            <p className="text-[16px]">Here is a your portofolio content</p>
          </div>

          <div className="flex gap-5">
            <div className="border-2 rounded-xl p-5 flex-1">
              <p className="text-[16px]">Total Project</p>
              <h1 className="font-bold text-[25px]">{data.ExperienceCount}</h1>
            </div>
            <div className="border-2 p-5 rounded-xl flex-1">
              <p className="text-[16px]">Work Experience</p>
              <h1 className="font-bold text-[25px]">{data.ProjectCount}</h1>
            </div>
            <div className="border-2 p-5 rounded-xl flex-1">
              <p className="text-[16px]">Tech Stack</p>
              <h1 className="font-bold text-[25px]">{data.techStackCount}</h1>
            </div>
          </div>
        </div>
      </div>
    
  );
}
