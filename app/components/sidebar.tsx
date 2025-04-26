'use client'


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { scroll } from "./navbar"






export function AppSidebar() {
  const {setOpenMobile} = useSidebar()
  return (
    <Sidebar side="right">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
             <p onClick={()=>{scroll("tech-stack"),setOpenMobile(false)}} className="cursor-pointer hover:text-blue-400">Tech Stack</p>
                     <p onClick={()=>{scroll("work-ex"),setOpenMobile(false)}} className="cursor-pointer hover:text-blue-400">Experients</p>
                     <p onClick={()=>{scroll("project"),setOpenMobile(false)}} className="cursor-pointer hover:text-blue-400">Project</p>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
