'use client'

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

export const scroll =(page:string)=>{
  const section=document.getElementById(page)
  section?.scrollIntoView({behavior:"smooth"})
}
export default function Navbar(){


    return(
      <div>
<div className="sm:hidden flex  justify-between p-4">
 <div>Cek</div>
<SidebarTrigger/>

</div>
        <div className="hidden sm:flex justify-end items-center gap-5 w-full px-45 py-4">
        <p onClick={()=>{scroll("tech-stack")}} className="cursor-pointer hover:text-blue-400">Tech Stack</p>
        <p onClick={()=>{scroll("work-ex")}} className="cursor-pointer hover:text-blue-400">Experients</p>
        <p onClick={()=>{scroll("project")}} className="cursor-pointer hover:text-blue-400">Project</p>
        <Button className="bg-green-600 text-white hover:bg-green-500"> <FaWhatsapp/><a href="https://wa.me/62895326440809">Let's Talk </a></Button>
        <Button><IoMdDownload/>Download CV</Button>
        <ModeToggle />
      </div>
      </div>
    )
}