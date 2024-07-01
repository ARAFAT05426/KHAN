"use client";
import { motion } from "framer-motion";
import { Rubik_Mono_One } from "next/font/google";
import { contactList } from "./ContactInfos";
import { FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa";

const rubikMonoOne = Rubik_Mono_One({ subsets: ["latin"], weight: ["400"] });

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
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };
  return (
    <aside className="flex-1 w-full p-5 h-auto space-y-5">
      <motion.div
        className="flex flex-col items-center tablet:items-start gap-5"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className={`${rubikMonoOne.className} text-3xl tablet:text-4xl text-center laptop:text-start laptop:text-5xl font-extrabold text-gray-200 leading-tight`}
          variants={itemVariants}
        >
          let&apos;s craft{" "}
          <motion.span
            className="text-transparent font-extrabold uppercase"
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
          Don&apos;t be afraid, just say hello! Feel free to get in touch with
          me. I am always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 tablet:grid-cols-2 gap-3 w-full"
          variants={sectionVariants}
        >
          {contactList.map((contact, index) => (
            <motion.div
              key={index}
              className="bg-card/75 p-5 rounded-md flex items-center gap-5 hover:bg-card transition-all duration-500 ease-in-out z-10"
              variants={itemVariants}
            >
              <contact.icon className="text-2xl text-primary" />
              <div className="flex flex-col gap-1">
                <span className="text-lg font-semibold text-gray-200">{contact.label}</span>
                <span className="text-sm text-gray-300">{contact.info}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </aside>
  );
};

export default ContactAside;
