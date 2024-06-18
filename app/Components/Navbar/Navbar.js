"use client";
import Link from "next/link";
import { links } from "./links";
import { usePathname } from "next/navigation";
import Tooltip from "../Common/Tooltip/Tooltip";

const Navbar = () => {
  const pathname = usePathname();
  if(pathname === "login"){
    return <></>
  }
  return (
    <nav className="fixed z-40 bottom-1 md:bottom-10 tablet:bottom-14 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-card px-4 md:px-6 py-3 gap-x-3 minipad:gap-x-5 w-fit rounded-full shadow-2xl backdrop-blur-md backdrop-filter">
      {links.map((link, i) => (
        <Tooltip key={i} content={link.title}>
          <Link href={link.path}>
            <button
              className={`${
                pathname === link?.path
                  ? "bg-primary-content hover:bg-primary-hover animate-pulse"
                  : "bg-transparent"
              } p-2 md:p-3 rounded-full transition-all transform`}
              style={{
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDuration: "500ms",
              }}
            >
              <link.icon
                size={25}
                className={`${
                  pathname === link?.path
                    ? "text-primary hover:scale-100 md:hover:scale-100"
                    : "text-primary-content group-hover:scale-125"
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
