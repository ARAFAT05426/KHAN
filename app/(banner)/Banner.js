"use client";
import { motion } from "framer-motion";
import Avatar from "./components/Avatar/Avatar";
import Intro from "./components/Intro";
import HireNow from "./components/Buttons/HireNow";
import Cv from "./components/Buttons/Cv";
import SocialIcons from "./components/Buttons/SoicalIcons";

const Banner = () => {
  const introVariants = {
    hidden: { opacity: 0, x: 500, scale: 0.5 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.7,
        ease: "easeInOut",
        type: "spring",
        stiffness: 50,
      },
    },
  };

  const buttonsVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.8,
        duration: 0.7,
        ease: "easeInOut",
        type: "spring",
        stiffness: 70,
      },
    },
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -35 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeInOut",
        type: "spring",
        stiffness: 70,
      },
    },
  };

  return (
    <section className="container mx-auto h-full tablet:h-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-col-reverse laptop:flex-row items-center justify-between w-full gap-y-6">
        {/* Intro and Buttons Section */}
        <motion.div
          className="flex flex-col gap-y-3 items-center tablet:items-start w-full laptop:w-1/2 text-center laptop:text-left"
          initial="hidden"
          animate="visible"
          variants={introVariants}
        >
          <Intro />
          <motion.div
            className="flex gap-x-3 items-center justify-center laptop:justify-start ml-4"
            initial="hidden"
            animate="visible"
            variants={buttonsVariants}
          >
            <Cv />
            <HireNow />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonsVariants}
          >
            <SocialIcons />
          </motion.div>
        </motion.div>
        {/* Avatar Section */}
        <motion.div
          className="w-full laptop:w-1/2 flex justify-center laptop:justify-end"
          initial="hidden"
          animate="visible"
          variants={avatarVariants}
        >
          <Avatar />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
