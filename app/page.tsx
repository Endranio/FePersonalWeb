import Navbar from "../components/ui/app-navbar";
import HomePage from "../landing-page/components/home/home";
import TechStack from "../landing-page/components/tech-stack/tech-stack";
import WorkExperience from "../landing-page/components/work-ex/work-ex";
import Project from "../landing-page/components/project/project";
import Footer from "../landing-page/components/footer/footer";
import { AppSidebar } from "@/components/ui/app-sidebar";
import type { ProfileDTO, TechStack as TechStackType, WorkExDTO, ProjectDTO } from "@/types/type";

const API_BASE = "https://be-new-persolan-web.vercel.app";

async function getProfile(): Promise<ProfileDTO> {
  const res = await fetch(`${API_BASE}/profile`, { cache: "no-store" });
  return res.json();
}

async function getTechs(): Promise<TechStackType[]> {
  const res = await fetch(`${API_BASE}/techs`, { cache: "no-store" });
  return res.json();
}

async function getExperience(): Promise<WorkExDTO[]> {
  const res = await fetch(`${API_BASE}/experience`, { cache: "no-store" });
  return res.json();
}

async function getProjects(): Promise<ProjectDTO[]> {
  const res = await fetch(`${API_BASE}/projects`, { cache: "no-store" });
  return res.json();
}

export default async function Home() {
  const [profile, techs, experience, projects] = await Promise.all([
    getProfile(),
    getTechs(),
    getExperience(),
    getProjects(),
  ]);

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
        <HomePage profile={profile} />
        <div className="mt-24">
          <TechStack techList={techs} />
        </div>
        <div className="mt-24">
          <WorkExperience experiences={experience} />
        </div>
        <div className="mt-24">
          <Project projects={projects} />
        </div>
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
}
