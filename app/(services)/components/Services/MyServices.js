"use client";
import { motion } from "framer-motion";
import { services } from "./ServicesList";

const MyServices = () => {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 tablet:grid-cols-2 gap-3 p-1 flex-1 overflow-auto z-[3] transition-all"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {services?.map((item, i) => (
        <motion.div
          key={i}
          className="group relative p-6 bg-card/50 rounded-lg transition-all duration-300 overflow-hidden h-full"
          variants={itemVariants}
        >
          <motion.div
            className="absolute inset-0 bg-primary/75 opacity-0 group-hover:opacity-100 rounded-lg duration-300"
          />

          <motion.div variants={itemVariants} className="relative z-10">
            <div className="text-center mb-5 flex flex-col items-center">
              <item.service className="text-5xl text-primary group-hover:text-card mb-3 transition-all duration-300 text-center" />
              <h3 className="text-xl font-bold text-gray-200 group-hover:text-card transition-all text-center duration-300">
                {item.title}
              </h3>
            </div>

            <motion.p variants={itemVariants} className="text-xs text-gray-300 group-hover:text-card transition-all duration-300 text-center">
              {item.description}
            </motion.p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MyServices;
