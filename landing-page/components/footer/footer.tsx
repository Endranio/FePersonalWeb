import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Footer() {
  return (
    <div className="border-t border-white-1 mt-50 mb-10 flex flex-col gap-3 justify-center items-center">
      <div className="flex gap-5 mt-5">

                <a
                  className="flex items-center gap-2"
                  href="mailto:endranio576@gmail.com"
                >
                  <MdEmail /> endranio576@gmail.com
                </a>{" "}
                <span >|</span>
                <a
                  className="flex items-center gap-2"
                  href="https://wa.me/62895326440809"
                >
                  {" "}
                  <FaWhatsapp /> +62 895-32644-0809
                </a>
                  </div>
      <p className="text-center">© 2025 Coded and designed with ❤️ by Endranio Palupi</p>
      <p className='flex items-center text-center gap-10'>
      <FaGithub width={"10px"} /> <FaLinkedin />
      </p>
    </div>
  );
}
