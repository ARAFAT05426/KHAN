import { aboutlist } from "./AboutList";
import { motion } from "framer-motion";

const AboutMe = () => {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 tablet:grid-cols-2 gap-3 h-96 overflow-y-auto"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {aboutlist.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col gap-y-1 bg-card/50 w-full p-5 rounded-md z-[5]"
          variants={itemVariants}
        >
          <motion.span className="text-primary" variants={itemVariants}>
            ヾ(⌐■_■)
          </motion.span>
          <motion.strong className="text-gray-300" variants={itemVariants}>
            {item.label}:
          </motion.strong>
          <motion.p className="text-gray-400 font-bold text-sm" variants={itemVariants}>
            {item.value}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AboutMe;
