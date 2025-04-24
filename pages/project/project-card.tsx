import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import StackIcon from "tech-stack-icons";

export default function ProjectCard(){
    return(
        <div >
            <div className="bg-gray-800 flex items-center justify-center">
                <Image src="/my-img.jpg" width={400} height={450} alt="project"/>
            </div>
            <div className="flex flex-col gap-8 bg-white dark:bg-gray-900 p-10">
                <h1 className="font-bold text-3xl ">Circle</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eaque soluta dolore tempore sed itaque velit. Atque nisi deleniti rerum ullam sed optio quisquam, voluptatum, cupiditate ratione, molestias alias ipsam.</p>
                <div className="flex gap-3 mt-5">
            <div className="px-3 py-1 bg-gray-100 fs-12 dark:bg-gray-700 rounded-full font-medium text-gray-600 dark:text-gray-400">Node.js</div>
            <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-m font-medium text-gray-600 dark:text-gray-400">React.js</div>
            <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-m font-medium text-gray-600 dark:text-gray-400">Next.js</div>
            </div>
            <div className="flex gap-3">
                <p className="text-m flex gap-1 items-center"><StackIcon className="w-8 h-8" name="github" />Private Repository</p>
                <Link className="text-m flex gap-1 items-center" href={"https://circle-kappa-two.vercel.app/"}><FaExternalLinkAlt className="w-6 h-6"/>Live Demo</Link>
            </div>
            </div>
        </div>
    )
}