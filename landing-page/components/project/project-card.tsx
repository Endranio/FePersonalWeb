import { ProjectDTO } from "@/types/type";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard(project: ProjectDTO) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group">
      {/* Image container */}
      <div className="relative h-[220px] overflow-hidden bg-foreground/5">
        <img
          src={project.image}
          height={220}
          width={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt={project.title}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5 flex-grow p-7">
        <h3 className="font-bold text-xl lg:text-2xl group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-foreground/60 line-clamp-3 text-[15px] leading-relaxed">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300 border border-teal-200/50 dark:border-teal-700/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-5 mt-auto pt-2 border-t border-foreground/5">
          {project.isGithub ? (
            <Link
              href={project.linkGithub || ""}
              className="text-sm flex gap-2 items-center text-foreground/50 hover:text-teal-500 transition-colors duration-200 font-medium"
              target="_blank"
            >
              <FaGithub className="w-4 h-4" />
              Repository
            </Link>
          ) : (
            <p className="text-sm flex gap-2 pointer-events-none items-center text-foreground/30 font-medium">
              <FaGithub className="w-4 h-4" />
              Private
            </p>
          )}

          {project.isDemo ? (
            <Link
              className="text-sm flex gap-2 items-center text-foreground/50 hover:text-teal-500 transition-colors duration-200 font-medium"
              href={project.linkDemo || ""}
              target="_blank"
            >
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
              Live Demo
            </Link>
          ) : (
            <p className="text-sm flex gap-2 items-center pointer-events-none text-foreground/30 font-medium">
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
              No Demo
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
