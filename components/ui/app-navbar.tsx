"use client";

import AppAvatar from "@/components/ui/app-avatar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { useEffect, useState } from "react";

export const scroll = (page: string) => {
  if (page === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const section = document.getElementById(page);
  section?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["contact", "project", "work-ex", "tech-stack"];
      let found = false;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(id);
          found = true;
          break;
        }
      }
      if (!found) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "work-ex", label: "Experience" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div>
      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between p-4 glass">
        <AppAvatar />
        <div className="flex items-center gap-2">
          <ModeToggle />
          <SidebarTrigger />
        </div>
      </div>

      {/* Desktop Navbar */}
      <div
        className={`hidden lg:flex justify-between items-center gap-5 w-full px-20 xl:px-45 py-4 transition-all duration-300 glass
        ${scrolled ? "shadow-sm" : ""}`}
      >
        <div>
          <AppAvatar />
        </div>
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scroll(link.id)}
              className={`relative cursor-pointer text-[15px] font-medium transition-colors duration-200 hover:text-teal-500
                ${activeSection === link.id ? "text-teal-600 dark:text-teal-400" : "text-foreground/70"}`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500" />
              )}
            </button>
          ))}

          <Button
            className="bg-green-600 text-white hover:bg-green-500 rounded-full px-5 cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-green-500/20"
            asChild
          >
            <a href="https://wa.me/62895326440809" target="_blank">
              <FaWhatsapp className="mr-1" />
              Let&apos;s Talk
            </a>
          </Button>

          <Button className="btn-gradient rounded-full px-5 cursor-pointer" asChild>
            <a href="#" target="_blank">
              <IoMdDownload className="mr-1" />
              Download CV
            </a>
          </Button>

          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
