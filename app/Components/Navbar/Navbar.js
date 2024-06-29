"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Tooltip from "../Common/Tooltip/Tooltip";
import { links } from "./Links";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed z-40 bottom-3 tablet:bottom-7 laptop:bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-card/50 px-4 tablet:px-6 py-2 gap-x-3 w-fit rounded-full border border-card/75">
      {links.map((link, i) => (
        <Tooltip key={i} content={link.title}>
          <Link href={link.path}>
            <button
              className={`${
                pathname === link?.path
                  ? "bg-primary hover:bg-primary-hover animate-pulse"
                  : "bg-transparent"
              } p-2 rounded-full transition-all transform`}
              style={{
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDuration: "500ms",
              }}
            >
              <link.icon
                size={25}
                className={`${
                  pathname === link?.path
                    ? "text-black hover:scale-100 md:hover:scale-100"
                    : "text-gray-300 group-hover:scale-125"
                } transition-all duration-300`}
              />
            </button>
          </Link>
        </Tooltip>
      ))}
    </nav>
  );
};

export default Navbar;
