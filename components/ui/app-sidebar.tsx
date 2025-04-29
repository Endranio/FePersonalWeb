"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  useSidebar,
} from "@/components/ui/sidebar";
import { scroll } from "./app-navbar";
import { Button } from "@/components/ui/button";
import { RxCross1 } from "react-icons/rx";

export function AppSidebar() {
  const { setOpenMobile,setOpen } = useSidebar();
  return (
    <Sidebar side="right">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-end ">
            <RxCross1 onClick={()=>{setOpenMobile(false),setOpen(false)}} />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <div className="flex flex-col gap-3">
                <p
                  onClick={() => {
                    scroll("tech-stack"), setOpenMobile(false),setOpen(false);
                  }}
                  className="cursor-pointer hover:text-blue-400 text-lg"
                >
                  Tech Stack
                </p>
                <p
                  onClick={() => {
                    scroll("work-ex"), setOpenMobile(false),setOpen(false);
                  }}
                  className="cursor-pointer hover:text-blue-400 text-lg"
                >
                  Experients
                </p>
                <p
                  onClick={() => {
                    scroll("project"), setOpenMobile(false),setOpen(false);
                  }}
                  className="cursor-pointer hover:text-blue-400 text-lg"
                >
                  Project
                </p>
                <Button className="w-3/4 mx-auto rounded-full cursor-pointer">
                  Download CV
                </Button>
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
