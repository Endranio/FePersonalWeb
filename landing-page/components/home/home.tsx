import { Button } from "@/components/ui/button";
import { IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

export default function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row gap-20 text-left mt-35 items-center lg:items-right"  >
      <div className=" w-[350px] lg:w-[1800px] h-[350px] rounded-xl overflow-hidden flex items-center">

      <img src="profile.jpg" width={450} height={450} alt={"my-image"} className="object-cover" />
      </div>
      <div className="space-y-10 flex-col lg:text-left text-center " >
<div className="flex flex-col gap-3">

      <h1 className="text-6xl  font-bold mb-6">Hi I'm Endra 👋</h1>
      <h2 className="text-2xl  text-gray-600 dark:text-gray-400 font-bold ">Full Stack Developer</h2>
      <p className= " text-gray-600 dark:text-gray-400 leading-relaxed">
      Hi! I'm an aspiring fullstack developer currently learning modern web development.
I've been working with technologies like React, TypeScript, Next.js, and Express, as well as UI frameworks such as ShadCN UI, Tailwind CSS, and Chakra UI. I'm also familiar with tools like React Router DOM and TanStack Query to build responsive and efficient web applications.

This portfolio is a showcase of my learning journey and a stepping stone as I seek opportunities to start my career in the tech industry.


      </p>
      <p className="flex items-center gap-2"><IoLocationOutline /> Depok,Sawangan,Indonesia</p>
      <ul className="list-disc list-inside text-green-600">
        <li>Avaible for new projects</li>
      </ul>
</div>
      <div className="flex gap-5 justify-center lg:justify-start">
 
      <Button className="bg-green-600 text-white hover:bg-green-500"><FaWhatsapp/><a href="https://wa.me/62895326440809" target="_blank">Let's Talk</a></Button>
      <Button><IoMdDownload/>Download CV</Button>
      </div>
      </div>
    </div>
  );
}
