import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";


export default function ProjectCard(){
    return(
        <div>
            <div className="bg-gray-100 dark:bg-gray-800 flex items-center justify-center rounded-t-xl">
                <Image src="/my-img.jpg" width={400} height={450} alt="project"/>
            </div>
            <div className="flex flex-col gap-8 bg-white dark:bg-gray-900 p-10 rounded-b-xl">
                <h1 className="font-bold text-3xl ">Circle</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eaque soluta dolore tempore sed itaque velit. Atque nisi deleniti rerum ullam sed optio quisquam, voluptatum, cupiditate ratione, molestias alias ipsam.</p>
                <div className="flex gap-3 mt-5">
            <Button className="px-3 py-1 bg-gray-100 hover:bg-transparent  dark:bg-gray-700 rounded-full  text-gray-600 dark:text-gray-400">Node.js</Button>
            <Button className="px-3 py-1 bg-gray-100 hover:bg-transparent dark:bg-gray-700 rounded-full text-m font-medium text-gray-600 dark:text-gray-400">React.js</Button>
            <Button className="px-3 py-1 bg-gray-100 hover:bg-transparent dark:bg-gray-700 rounded-full text-m font-medium text-gray-600 dark:text-gray-400">Next.js</Button>
            </div>
            <div className="flex gap-5">
                <p className="text-sm flex gap-1 items-center"><FaGithub className="w-4 h-4"/>Private Repository</p>
                <Link className="text-sm flex gap-1 items-center" href={"https://circle-kappa-two.vercel.app/"}><FaExternalLinkAlt className="w-4 h-4"/>Live Demo</Link>
            </div>
            </div>
        </div>
    )
}