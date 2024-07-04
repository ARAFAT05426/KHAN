// Tooltip component

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Tooltip = ({ children, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative z-10"
      >
        {children}
      </div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute z-10 bg-card text-white text-sm rounded-md shadow-lg px-2 py-1 pointer-events-none top-full mt-5 -left-1/4"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: -15, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {content}
            <div className="absolute bg-card w-2 h-2 -top-1 left-1/2 transform -translate-x-1/2 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
