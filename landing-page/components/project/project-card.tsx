import { ProjectDTO } from "@/types/type";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard(project: ProjectDTO) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md flex flex-col h-full">
      <div className="bg-gray-100 dark:bg-gray-800 flex items-center justify-center h-[300] rounded-t-xl">
        <img src={project.image} width={400} className="h-full" alt="project" />
      </div>
      <div className="flex flex-col gap-8 flex-grow bg-white dark:bg-gray-900 p-10 rounded-b-xl">
        <h1 className="font-bold text-3xl ">{project.title}</h1>
  

        <p className=" line-clamp-4 h-[120px]">{project.description}</p>
        
        <div className="flex flex-wrap gap-3 mt-auto">
          {project.tech.map((tech, index) => (
            <Button
              key={index}
              className="px-3 py-1 bg-gray-100 hover:bg-transparent  dark:bg-gray-700 rounded-full  text-gray-600 dark:text-gray-400"
            >
              {tech}
            </Button>
          ))}
        </div>
        <div className="flex gap-5 mt-auto">
          {project.isGithub ? (
            <Link
              href={project.linkGithub}
              className="text-sm flex gap-1 items-center text-blue-500"
            >
              <FaGithub className="w-4 h-4" />
              View On Repository
            </Link>
          ) : (
            <p className="text-sm flex gap-1 pointer-events-none items-center">
              <FaGithub className="w-4 h-4 " />
              Private Repository
            </p>
          )}
          {project.isDemo ? (
            <Link
              className="text-sm text-blue-500 flex gap-1 items-center"
              href={project.linkDemo}
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Live Demo
            </Link>
          ) : (
            <p className="text-sm flex gap-1 items-center pointer-events-none">
              <FaExternalLinkAlt className="w-4 h-4" />
              Demo Unavailale
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
