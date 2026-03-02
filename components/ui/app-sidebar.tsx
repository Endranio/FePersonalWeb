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
import { FaWhatsapp } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

export function AppSidebar() {
  const { setOpenMobile, setOpen } = useSidebar();

  const close = () => {
    setOpenMobile(false);
    setOpen(false);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "work-ex", label: "Experience" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <Sidebar side="right">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-end">
            <RxCross1
              className="cursor-pointer hover:text-teal-500 transition-colors"
              onClick={close}
            />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <div className="flex flex-col gap-4 px-4 pt-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      scroll(link.id);
                      close();
                    }}
                    className="cursor-pointer text-left hover:text-teal-500 text-lg font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                ))}

                <div className="mt-4 flex flex-col gap-3">
                  <Button className="btn-gradient rounded-full cursor-pointer" asChild>
                    <a href="#" target="_blank">
                      <IoMdDownload className="mr-1" />
                      Download CV
                    </a>
                  </Button>
                  <Button
                    className="bg-green-600 text-white hover:bg-green-500 rounded-full cursor-pointer"
                    asChild
                  >
                    <a href="https://wa.me/62895326440809" target="_blank">
                      <FaWhatsapp className="mr-1" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
