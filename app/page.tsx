import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "../components/ui/app-navbar";
import HomePage from "../dashboard/components/home/home";
import TechStack from "../dashboard/components/tech-stack/tech-stack";
import WorkExperience from "../dashboard/components/work-ex/work-ex";
import Project from "../dashboard/components/project/project";
import Footer from "../dashboard/components/footer/footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";

export default function Home() {
  return (
    <div className=" relative">
      <div className="sticky top-0 bg-white z-50 dark:bg-gray-950  w-screen">
      <AppSidebar />
        <Navbar />
      </div>
      <div className="w-3/4 mx-auto">
        <HomePage />
        <TechStack />
        <WorkExperience />
        <Project />
      </div>
      <Footer />
    </div>
  );
}
