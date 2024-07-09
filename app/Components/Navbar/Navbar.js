"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Tooltip from "../Common/Tooltip/Tooltip";
import { links } from "./Links";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bg-card/75 bottom-2 laptop:bottom-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center px-4 laptop:px-6 py-2 gap-x-3 w-fit rounded-full border border-primary/25 z-50">
      {links.map((link, i) => (
        <Tooltip key={i} content={link.title}>
          <Link href={link.path}>
            <motion.button
              whileHover={{
                boxShadow: "0 0 20px rgba(20, 207, 147, 0.8), 0 0 40px rgba(17, 24, 39, 0.6)",
                scale: 1.05,
              }}
              className={`${
                pathname === link?.path
                  ? "bg-primary hover:bg-primary-hover"
                  : "bg-transparent"
              } p-2 rounded-full transition-all transform`}
              style={{
                backgroundColor: pathname === link?.path ? "#14cf93" : "transparent",
                color: pathname === link?.path ? "#000" : "#ccc",
              }}
            >
              <link.icon
                size={25}
                className={`${
                  pathname === link?.path ? "text-black" : "text-gray-300 group-hover:scale-105"
                } transition-all duration-300`}
              />
            </motion.button>
          </Link>
        </Tooltip>
      ))}
    </nav>
  );
};

export default Navbar;



