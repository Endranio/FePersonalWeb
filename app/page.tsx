

import Navbar from "../components/ui/app-navbar";
import HomePage from "../landing-page/components/home/home";
import TechStack from "../landing-page/components/tech-stack/tech-stack";
import WorkExperience from "../landing-page/components/work-ex/work-ex";
import Project from "../landing-page/components/project/project";
import Footer from "../landing-page/components/footer/footer";
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
