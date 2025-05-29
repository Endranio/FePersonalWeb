import Link from "next/link";
import ProjectCard from "./project-card";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ProjectDTO } from "@/types/type";
import { api } from "@/lib/api";

export default async function Project() {
  const res = await api.get("/projects")
  const data = res.data
  

  return (
    <div id="project">
      <h1 className="text-2xl md:text-3xl font-bold mb-20 pt-15">
        My Project:
      </h1>

      <div className="grid md:grid-cols-2 gap-20 mb-32">
        {data.map((project: ProjectDTO, index: number) => (
          <div key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center space-y-5 ">
        <h1 className="font-bold text-3xl text-center">
          Lets build something together
        </h1>
        <p className="text-center">
          Feel free to reach out of you're looking for a developer,have a
          question,or just want to connect
        </p>
       
      </div>
    </div>
  );
}
