import Link from "next/link";
import ProjectCard from "./project-card";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Project(){
    return(
        <>
            <h1 className="text-2xl md:text-3xl font-bold mb-32 mt-24">My Project:</h1>
        <div className="grid  sm:grid-cols-2 gap-20 mb-32">

            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
        <div className="flex flex-col items-center space-y-5 mb-20">

        <h1 className='font-bold text-3xl'>Lets build something together</h1>
        <p>Feel free to reach out of you're looking for a developer,have a question,or just want to connect</p>
        <div className='inline-flex  gap-10 '>

        <Link className='flex items-center gap-2' href='asss'><MdEmail /> endranio576@gmail.com</Link> | <Link className='flex items-center gap-2' href=''> <FaWhatsapp/> +62 895-32644-0809</Link>
        </div>
        </div>
        </>
    )
}