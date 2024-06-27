"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Pagetransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 0.7, duration: 0.3, ease: "easeInOut" },
        }}
        exit={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
        className="h-screen w-screen fixed bg-black top-0 pointer-events-none z-50"
      />
      {children}
    </AnimatePresence>
  );
};

export default Pagetransition;
