// Import necessary icons from react-icons
import { BiSolidEnvelope, BiSolidUserAccount } from "react-icons/bi";
import { FaHome, FaStream } from "react-icons/fa";
import { HiRectangleGroup } from "react-icons/hi2";
import { TbBriefcaseFilled, TbTools } from "react-icons/tb";

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
    title: "Services", 
    path: "/services", 
    icon: HiRectangleGroup,     
  },
  {
    title: "Projects", 
    path: "/projects", 
    icon: TbBriefcaseFilled,
  },
  {
    title: "Contact",  
    path: "/contact",  
    icon: BiSolidEnvelope,
  }
];

