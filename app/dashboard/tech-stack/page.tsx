import { Button } from "@/components/ui/button";
import { TableTech } from "@/components/ui/table-tech";

export default function TechStack() {
  return (
    <div className="mx-15 mt-15">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold">TechStack</h1>
          <p className="text-[16px]">Manage your terchnologies</p>
        </div>
        <Button>+ Add Technology</Button>
      </div>

      <div className="mt-10">
        <h1  className="font-bold">Your Tech Stack</h1>
        <p className="text-[16px] mb-5">Technologies you've added to your portfolio</p>
        <TableTech/>
      </div>
    </div>
  );
}
