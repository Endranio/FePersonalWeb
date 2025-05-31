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
} from "@/components/ui/sidebar";
import Cookies from 'js-cookie';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { RiBriefcaseLine, RiFolderLine, RiStackLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { Button } from "./button";
import { ModeToggle } from "./mode-toggle";
;

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
    const router = useRouter()
    const logout = ()=>{
      Cookies.remove("token")
      router.push("/login")
    }
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

              <Button onClick={logout}>Logout</Button>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
