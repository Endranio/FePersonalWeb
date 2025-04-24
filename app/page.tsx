import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "./components/navbar";
import HomePage from "./components/home";
import TechStack from "./components/tech-stack/tech-stack";
import WorkExperience from "./components/work-ex/work-ex";
import Project from "./components/project/project";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
  <div className=''>
    <div className="sticky top-0 bg-white z-50 dark:bg-gray-950  w-screen">
        
            <Navbar/>
            </div>
            <div className="w-[80%] mx-auto">

    <HomePage/>
    <TechStack/>
    <WorkExperience/>
    <Project/>
    <Footer/>
            </div>
  </div> 
  
  );
}
