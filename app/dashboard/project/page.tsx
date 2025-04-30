import { Button } from "@/components/ui/button";
import { TableProject } from "@/components/ui/table-project";

export default function Project(){
return(
    <div className="mx-15 mt-15">
    <div className="flex justify-between">
      <div>
        <h1 className="font-bold">Project</h1>
        <p className="text-[16px]">Manage your project</p>
      </div>
      <Button>+ Add Project</Button>
    </div>

    <div className="mt-10">
      <h1  className="font-bold">Your Project</h1>
      <p className="text-[16px] mb-5">Here is a list of your project</p>
      <TableProject/>
    </div>
  </div>
)
} 