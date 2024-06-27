"use client";
import { motion } from "framer-motion";
import { Rubik_Mono_One } from "next/font/google";
import Overview from "../Overview/Overview";

const rubic = Rubik_Mono_One({ subsets: ["latin"], weight: ["400"] });

const Intro = () => {
  const introVariants = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.4,
        duration: 0.8,
        type: "spring",
        stiffness: 200,
        damping: 25,
      },
    },
  };
  const childVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        type: "spring",
        stiffness: 70,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-y-8 px-5 items-center laptop:items-start"
      initial="hidden"
      animate="visible"s
      variants={introVariants}
    >
      <motion.h1
        className={`${rubic?.className} text-3xl tablet:text-4xl laptop:text-5xl font-extrabold text-gray-300 text-center laptop:text-left`}
        variants={childVariants}
      >
        Discover More
        <br />
        <span
          className={` text-transparent uppercase scale-75`}
          style={{ WebkitTextStroke: "1.5px #14cf93" }}
        >
          About{" "}
        </span>
        Me
      </motion.h1>
      <motion.p
        className="max-w-2xl text-gray-300 text-center laptop:text-left text-base tablet:text-lg laptop:text-xl leading-relaxed"
        variants={childVariants}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex
        corrupti dolore rerum dolor id voluptatibus ad mollitia, deleniti in
        corporis nostrum, sint veniam ut.
      </motion.p>
      <motion.div variants={childVariants}>
        <Overview />
      </motion.div>
    </motion.div>
  );
};

export default Intro;
