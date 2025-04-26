import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "./components/navbar";
import HomePage from "./components/home";
import TechStack from "./components/tech-stack/tech-stack";
import WorkExperience from "./components/work-ex/work-ex";
import Project from "./components/project/project";
import Footer from "./components/footer/footer";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {

 

  return (
  
    <div className=" relative">

      <div className="sticky top-0 bg-white z-50 dark:bg-gray-950  w-screen">
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
