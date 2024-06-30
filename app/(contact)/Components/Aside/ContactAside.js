"use client";
import { motion } from "framer-motion";
import { MdLocationPin, MdPhone, MdEmail } from "react-icons/md";
import { Rubik_Mono_One } from "next/font/google";

const roboto = Rubik_Mono_One({ subsets: ["latin"], weight: ["400"] });

const ContactAside = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.7,
        ease: "easeInOut",
        staggerChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <aside className="flex-1 w-full p-5 h-auto overflow-hidden space-y-5">
      <motion.div
        className="flex flex-col items-center laptop:items-start gap-5"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className={`${roboto.className} text-3xl tablet:text-4xl text-center laptop:text-start laptop:text-5xl font-extrabold text-gray-200 leading-tight ${roboto.className}`}
          variants={itemVariants}
        >
          lets craft{" "}
          <motion.span
            className={`text-transparent font-extrabold uppercase`}
            style={{ WebkitTextStroke: "1.5px #14cf93" }}
            variants={itemVariants}
          >
            something
          </motion.span>{" "}
          amazing
        </motion.h1>
        <motion.p
          className="text-base text-gray-300 max-w-2xl text-center laptop:text-start"
          variants={itemVariants}
        >
          Don&apos;t be afraid, just say hello! Feel free to get in touch with me. I
          am always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </motion.p>
      </motion.div>
      <motion.div
        className="grid grid-cols-2 gap-3"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="bg-card/50 p-5 flex flex-col gap-2 items-center rounded-lg z-10"
          variants={itemVariants}
        >
          <MdLocationPin className="text-primary" size={35} />
          <p className="text-gray-300 text-center laptop:text-start text-wrap">
            Ave Street 177, New York, USA
          </p>
        </motion.div>
        <motion.div
          className="bg-card/50 p-5 flex flex-col gap-2 items-center rounded-lg z-10"
          variants={itemVariants}
        >
          <MdPhone className="text-primary" size={30} />
          <p className="text-gray-300 text-center laptop:text-start text-wrap">
            +44 077 155 09 09
          </p>
        </motion.div>
        <motion.div
          className="bg-card/50 p-5 flex flex-col gap-2 items-center rounded-lg z-10"
          variants={itemVariants}
        >
          <MdEmail className="text-primary" size={30} />
          <p className="text-gray-300 text-center laptop:text-start text-wrap">
            james@example.com
          </p>
        </motion.div>
      </motion.div>
    </aside>
  );
};

export default ContactAside;
