"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { CiGrid42 } from "react-icons/ci";
import { FaHospitalUser } from "react-icons/fa";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { id: 1, icon: FaHospitalUser },
    { id: 2, icon: TfiLayoutListThumbAlt },
  ];

  return (
    <div className="fixed top-5 left-5 w-16 bg-card/50 rounded-full flex flex-col items-center px-1 py-3 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`text-primary cursor-pointer z-10 outline-none transition-all duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <CiGrid42 size={30} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "7rem" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden rounded-md mt-2 w-14"
        style={{ originY: 0 }}
      >
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-4 mt-2"
          >
            {links.map((link) => {
              const Icon = link.icon;
              return <Icon key={link.id} size={30} className={`text-gray-300`} />;
            })}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Sidebar;
