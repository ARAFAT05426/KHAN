"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiArrowSortedDown } from "react-icons/ti";

const CustomDropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <h1 className="text-gray-200">{title}</h1>
      <div className="relative">
        <button
          type="button"
          className="w-full bg-transparent outline-none border-b border-card focus-within:border-b-primary px-1 py-3 text-left cursor-pointer flex justify-between text-gray-300"
          onClick={toggleDropdown}
        >
          {selectedOption}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <TiArrowSortedDown size={25} />
          </motion.div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-10 mt-1 bg-card/75 w-full max-h-60 rounded-md py-1 text-base overflow-hidden focus:outline-none"
            >
              {options.map((option, index) => (
                <motion.li
                  key={index}
                  onClick={() => selectOption(option)}
                  className={`cursor-pointer select-none font-bold relative py-2 pl-3 pr-9 hover:bg-primary hover:text-black rounded ${
                    index === options.length - 1 ? "" : "border-b border-b-card"
                  }`}
                  whileHover={{ scale: 1.01 }}
                >
                  {option}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CustomDropdown;
