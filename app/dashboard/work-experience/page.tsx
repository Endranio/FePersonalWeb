import { Button } from "@/components/ui/button";
import { ModalAddExperience } from "@/components/ui/modal-experience";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { TableExperience } from "@/components/ui/table-experience";

export default function WorkExperience(){
    return(
        <div className="mx-15 mt-15">
            <div className="flex justify-between mb-10">

            <div>
        <h1 className="font-bold">Work Experience</h1>
            <p className="text-[16px]">manage your work experience</p>
            </div>
            <ModalAddExperience
            trigger={ <Button>+ Add Work Experience</Button>}
            />
           
            </div>

            <div>
            <h1 className="font-bold">Your Experience</h1>
            <p className="text-[16px]">Here is a list of your work experience</p>
            <TableExperience/>
            </div>
        </div>
    )
}