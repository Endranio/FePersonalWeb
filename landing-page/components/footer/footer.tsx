import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/endranio",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/endranio",
      label: "LinkedIn",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/62895326440809",
      label: "WhatsApp",
    },
    {
      icon: <MdEmail className="w-5 h-5" />,
      href: "mailto:endranio576@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">
              <span className="gradient-text">Endranio</span> Palupi
            </p>
            <p className="text-foreground/40 text-sm mt-1">
              Fullstack Developer
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                className="w-10 h-10 rounded-full flex items-center justify-center text-foreground/40 hover:text-teal-500 bg-foreground/5 hover:bg-teal-500/10 transition-all duration-300 hover:-translate-y-0.5"
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </div>

          {/* Right - Contact */}
          <div className="text-center md:text-right">
            <Link
              href="mailto:endranio576@gmail.com"
              className="text-sm text-foreground/40 hover:text-teal-500 transition-colors duration-200"
            >
              endranio576@gmail.com
            </Link>
            <p className="text-foreground/40 text-sm mt-1">
              +62 895-32644-0809
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-foreground/5 text-center">
          <p className="text-foreground/30 text-sm">
            © {new Date().getFullYear()} Coded and designed with ❤️ by Endranio
            Palupi
          </p>
        </div>
      </div>
    </footer>
  );
}
