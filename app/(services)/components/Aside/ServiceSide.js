"use client";
import { motion } from "framer-motion";
import Button1 from "@/app/Components/Common/Buttons/Button1";
import { Rubik_Mono_One } from "next/font/google";
import { FaUsers } from "react-icons/fa";
import { AiOutlineProject, AiFillStar } from "react-icons/ai";
import { GoCodeReview } from "react-icons/go";
import CountUp from "@/app/Components/Common/CountUp/CountUp";
import useProjects from "@/app/(projects)/Components/useProjects/useProjects";

const rubik = Rubik_Mono_One({ subsets: ["latin"], weight: ["400"] });

const ServiceSide = () => {
  const {projects} = useProjects()
  // Variants for each service item
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  // Container variants for staggering
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-4 flex-1 h-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className={`${rubik?.className} text-3xl tablet:text-4xl text-center laptop:text-start laptop:text-5xl font-extrabold leading-tight text-gray-200`}
        variants={itemVariants}
      >
        Crafting Digital <br />
        <span
          className={`text-transparent font-extrabold uppercase`}
          style={{ WebkitTextStroke: "1.5px #14cf93" }}
        >
          Destinies
        </span>
      </motion.h1>
      <motion.p
        className="text-sm text-center laptop:text-left laptop:text-base leading-relaxed text-gray-300 max-w-3xl"
        variants={itemVariants}
      >
        I specialize in delivering cutting-edge solutions across web development
        empowering your business to thrive. Discover how my expertise can
        elevate your brand and ignite growth. Let`s achieve extraordinary
        results together!
      </motion.p>
      <motion.div
        className="grid grid-cols-2 gap-3"
        variants={containerVariants}
      >
        {/* <motion.div
          className="bg-card/50 p-3 flex flex-col gap-1 z-[3] items-center rounded-lg"
          variants={itemVariants}
        >
          <FaUsers className="text-primary" size={35} />
          <CountUp end={16} className={"text-3xl font-black text-gray-200"} />
          <span className="text-xs text-gray-400">Happy Clients</span>
        </motion.div> */}
        <motion.div
          className="bg-card/50 p-3 flex flex-col gap-1 z-[3] items-center rounded-lg"
          variants={itemVariants}
        >
          <AiOutlineProject className="text-primary" size={35} />
          <CountUp end={projects?.length || 12} className={"text-3xl font-black text-gray-200"} />
          <span className="text-xs text-gray-400">Completed Projects</span>
        </motion.div>
        <motion.div
          className="bg-card/50 p-3 flex flex-col gap-1 z-[3] items-center rounded-lg"
          variants={itemVariants}
        >
          <AiFillStar className="text-primary" size={35} />
          <div className="text-3xl font-black text-gray-200 flex">
            <CountUp end={99} className={"text-3xl font-black text-gray-200"} />
            %
          </div>
          <span className="text-xs text-gray-400">Success rate</span>
        </motion.div>
        <motion.div
          className="bg-card/50 p-3 flex flex-col gap-1 z-[3] items-center rounded-lg"
          variants={itemVariants}
        >
          <GoCodeReview className="text-primary" size={35} />
          <div className="text-3xl font-black text-gray-200 flex">
            <CountUp end={9} className={"text-3xl font-black text-gray-200"} />
            k+
          </div>
          <span className="text-xs text-gray-400">Lines of Code</span>
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-auto mb-0"
        variants={itemVariants}
      >
        <a href="/projects">
          <Button1
            title={"Explore Projects"}
            subtitle={"Discover My Expertise"}
          />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ServiceSide;
