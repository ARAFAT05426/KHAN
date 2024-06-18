import { FaBlogger } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BiSolidUserAccount } from "react-icons/bi";
import { GiFiles } from "react-icons/gi";
import { HiAnnotation } from "react-icons/hi";
export const links = [
  {
    title: "Home",
    path: "/",
    icon: FaHome,
  },
  {
    title: "About",
    path: "/about",
    icon: BiSolidUserAccount,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: GiFiles,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: HiAnnotation,
  },
  {
    title: "Blog",
    path: "/blog",
    icon: FaBlogger,
  },
];
