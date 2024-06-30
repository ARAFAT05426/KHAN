import { Roboto_Mono } from "next/font/google";
import { experienceList } from "./ExprienceList";
import { motion } from "framer-motion";

const roboto = Roboto_Mono({ subsets: ["cyrillic-ext"], weight: ["700"] });

const Expriences = () => {
  // Variants for each experience item
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
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
      className="w-full grid grid-cols-1 tablet:grid-cols-2 gap-3 h-96 overflow-y-auto py-5"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {experienceList?.map((item, i) => (
        <motion.div
          key={i}
          className="bg-card/50 p-5 flex flex-col gap-y-1 items-center tablet:items-start rounded-lg max-h-40 z-[5] w-full"
          variants={itemVariants}
        >
          <p className="text-primary mt-2">
            {item.period.from} - {item.period.to}
          </p>
          <motion.h2
            className={`${roboto.className} text-lg text-center tablet:text-left font-bold text-gray-300`}
            variants={itemVariants}
          >
            {item.jobTitle}
          </motion.h2>
          <motion.div
            className="flex items-center gap-2 mt-2"
            variants={itemVariants}
          >
            <span className="w-[5px] h-[5px] rounded-full bg-primary" />
            <p className="text-gray-300 text-xs font-semibold text-center tablet:text-left">
              {item.company}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Expriences;
