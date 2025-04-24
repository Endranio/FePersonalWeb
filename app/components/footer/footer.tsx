import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Footer() {
  return (
    <div className="border-t border-white-1 mt-50 mb-10 flex flex-col space-y-5 justify-center items-center">
      <p className="mt-10">© 2025 Coded and designed with ❤️ by Endranio Palupi</p>
      <p className='flex items-center gap-10'>
      <FaGithub width={"10px"} /> <FaLinkedin />
      </p>
    </div>
  );
}
