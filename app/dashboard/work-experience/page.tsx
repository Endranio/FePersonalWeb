import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function WorkExperience(){
    return(
        <div className="mx-15 mt-15">
            <div className="flex justify-between">

            <div>
        <h1 className="font-bold">Work Experience</h1>
            <p className="text-[16px]">manage your work experience</p>
            </div>
            <Button>+ Add Work Experience</Button>
            </div>
        </div>
    )
}