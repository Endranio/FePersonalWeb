import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

export default function HomePage() {
  return (
    <div className="flex flex-col sm:flex-row gap-20 text-left mt-35 items-center  sm:items-right"  >
      <div className=" w-[300px] sm:w-[1500px] h-[350px] rounded-xl overflow-hidden items-center">

      <Image src="/profile.jpg" width={450} height={450} alt={"my-image"} className="w-full h-full object-cover" />
      </div>
      <div className="space-y-10 flex-col sm:text-left text-center " >

      <h1 className="text-4xl text-6xl font-bold mb-6">Hi I'm Endra 👋</h1>
      <h2 className="text-xl text-3xl text-gray-600 dark:text-gray-400 font-medium mb-6">Full Stack Developer</h2>
      <p className= " text-gray-600 dark:text-gray-400 leading-relaxed">
      Hi! I'm an aspiring fullstack developer currently learning modern web development.
I've been working with technologies like React, TypeScript, Next.js, and Express, as well as UI frameworks such as ShadCN UI, Tailwind CSS, and Chakra UI. I'm also familiar with tools like React Router DOM and TanStack Query to build responsive and efficient web applications.

This portfolio is a showcase of my learning journey and a stepping stone as I seek opportunities to start my career in the tech industry.


      </p>
      <div className="flex gap-5 justify-center sm:justify-start">
 
      <Button className="bg-green-600 text-white hover:bg-green-500"><FaWhatsapp/><a href="https://wa.me/62895326440809">Let's Talk</a></Button>
      <Button><IoMdDownload/>Download CV</Button>
      </div>
      </div>
    </div>
  );
}
