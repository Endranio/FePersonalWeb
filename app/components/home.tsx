import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

export default function HomePage() {
  return (
    <div className="flex gap-20 text-left mt-35">
      <Image src="/my-img.jpg" width={450} height={450} alt={"my-image"} className="p-10 rounded-xl"/>
      <div className="space-y-10" >

      <h1 className="text-4xl lg:text-6xl font-bold mb-6">Hi I'm Endra</h1>
      <h2 className="text-xl lg:text-3xl text-gray-600 dark:text-gray-400 font-medium mb-6">Full Stack Developer</h2>
      <p className= " text-gray-600 dark:text-gray-400 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa
        molestias incidunt est error ut culpa adipisci itaque consectetur
        veritatis, quisquam perspiciatis ex aut iure officiis distinctio esse
        fuga atque?
      </p>
      <div className="flex gap-5">

      <Button className="bg-green-600 text-white"><FaWhatsapp/>Let's Talk</Button>
      <Button><IoMdDownload/>Download CV</Button>
      </div>
      </div>
    </div>
  );
}
