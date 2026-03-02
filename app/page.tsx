

import Navbar from "../components/ui/app-navbar";
import HomePage from "../landing-page/components/home/home";
import TechStack from "../landing-page/components/tech-stack/tech-stack";
import WorkExperience from "../landing-page/components/work-ex/work-ex";
import Project from "../landing-page/components/project/project";
import Footer from "../landing-page/components/footer/footer";
import { AppSidebar } from "@/components/ui/app-sidebar";

export default function Home() {
  return (
    <div className="relative">
      {/* Fixed Navbar */}
      <div className="sticky top-0 left-0 right-0 z-50">
        <AppSidebar />
        <Navbar />
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-[72px]" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <HomePage />
        <div className="mt-24">
          <TechStack />
        </div>
        <div className="mt-24">
          <WorkExperience />
        </div>
        <div className="mt-24">
          <Project />
        </div>
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
}
