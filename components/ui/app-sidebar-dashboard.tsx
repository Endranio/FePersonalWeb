'use client'



import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { RiStackLine,RiBriefcaseLine ,RiFolderLine} from "react-icons/ri"
import { CgProfile } from "react-icons/cg";;
import {IconType} from "react-icons"
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
import { RxCross1 } from "react-icons/rx"
import { ModeToggle } from "./mode-toggle"
import Link from "next/link";

// Menu items.
const items : { title: string; url: string; icon: IconType }[] = [
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: CgProfile,
  },
  {
    title: "Tech Stack",
    url: "/dashboard/tech-stack",
    icon: RiStackLine,
  },
  {
    title: "Work Experience",
    url: "/dashboard/work-experience",
    icon: RiBriefcaseLine,
  },
  {
    title: "Project",
    url: "/dashboard/project",
    icon: RiFolderLine,
  }
 
]

export function AppSidebarDashboard() {
    const {setOpen} = useSidebar()
  return (
    <Sidebar className="z-51">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-7">
            <RxCross1 onClick={()=>{setOpen(false)}}/>
                <ModeToggle/>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
