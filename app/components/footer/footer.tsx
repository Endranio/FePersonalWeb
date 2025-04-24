import { FaLinkedin } from "react-icons/fa";
import StackIcon from "tech-stack-icons";

export default function Footer(){
    return(
        <div>
            <p>

        © 2025 Coded and designed with ❤️ by Endranio Palupi
            </p>
            <p><StackIcon className="w-8 h-8" name="github" />  <FaLinkedin /></p>
        </div>
    )
}