"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const path = usePathname();

  if (path === "/") {
    return null;
  }

  return (
    <div className="relative bg-card/25 text-sm py-6 border-t border-t-card z-40">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-300">
          &copy; 2024 Arafat Khan | Front-end Devloper. All rights reserved.
        </p>
        <div className="flex w-fit px-10 mx-auto border-t border-card pt-2 mt-2 text-gray-400 justify-center gap-4 z-10">
          <Link
            href="https://www.facebook.com/Khan05426"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebook className="text-xl hover:text-primary transition-colors z-10" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/arafathossennibir-5426-khan/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl hover:text-primary transition-colors z-10" />
          </Link>
          <Link
            href="https://github.com/arafat05426"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl hover:text-primary transition-colors z-10" />
          </Link>
          <Link href="mailto:arafat05426@gmail.com" aria-label="Email">
            <FaEnvelope className="text-xl hover:text-primary transition-colors z-10" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
