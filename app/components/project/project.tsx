import Link from "next/link";
import ProjectCard from "./project-card";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ProjectDTO } from "@/app/types/type";

export default async function Project() {

  const res = await fetch("http://localhost:3001/project")
  const data = await res.json()
  console.log(data)

  return (
    <div id="project">
      <h1 className="text-2xl md:text-3xl font-bold mb-32 pt-24">
        My Project:
      </h1>

      <div className="grid md:grid-cols-2 gap-20 mb-32">
        {data.map((project:ProjectDTO,index:number)=>(
          <div key={index}>


        <ProjectCard {...project} />
          </div>
      ))}
      </div>
        
      <div className="flex flex-col items-center space-y-5 mb-20">
        <h1 className="font-bold text-3xl text-center">
          Lets build something together
        </h1>
        <p className="text-center">
          Feel free to reach out of you're looking for a developer,have a
          question,or just want to connect
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-10 mt-10">
          <a className="flex items-center gap-2" href="mailto:endranio576@gmail.com">
            <MdEmail /> endranio576@gmail.com
          </a>{" "}
          <span className="hidden sm:inline">|</span>{" "}
          <a className="flex items-center gap-2" href="https://wa.me/62895326440809">
            {" "}
            <FaWhatsapp /> +62 895-32644-0809
          </a>
        </div>
      </div>
    </div>
  );
}
