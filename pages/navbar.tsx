import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

export default function Navbar(){
    return(
      <div>

        <div className="flex justify-end items-center gap-5 w-full px-45 py-4">
        <p>Tech Stack</p>
        <p>Experients</p>
        <p>Project</p>
        <Button className="bg-green-600 text-white"><FaWhatsapp/>Let's Talk</Button>
        <Button><IoMdDownload/>Download CV</Button>
        <ModeToggle />
      </div>
      </div>
    )
}