"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { projects } from "../projectlist/ProjectList";
import ProjectSlider from "./ProjectSlider";
import useProjects from "../useProjects/useProjects";
const Projects = () => {
  const [myProjects, setProjects] = useState(projects);
  const [activeProject, setActiveProject] = useState(myProjects[0]);
  const handleSlideChange = (swiper) => {
    setActiveProject(myProjects[swiper?.activeIndex]);
  };
  const { projects: dbProjects } = useProjects();
  useEffect(() => {
    setProjects(dbProjects);
    setActiveProject(dbProjects[0]);
  }, [dbProjects]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col-reverse laptop:flex-row gap-3 p-5 h-fit bg-gradient-to-r from-card/25 to-card/15 rounded-lg shadow-lg border border-card/15"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full laptop:w-1/2 relative rounded-lg overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute top-0 right-0 text-transparent text-6xl laptop:text-8xl font-extrabold"
          style={{ WebkitTextStroke: "2px #14cf93" }}
        >
          {activeProject?.num}
        </motion.div>
        <div className="text-gray-200 mt-4 relative z-10">
          <div className="flex items-center mb-4">
            <span className="text-xs text-primary">
              {activeProject?.startDate} - {activeProject?.endDate}
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold uppercase mb-2"
          >
            {activeProject?.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-4 text-lg md:text-xl text-gray-300 max-w-xl"
          >
            {activeProject?.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-4"
          >
            <h3 className="text-lg font-semibold text-gray-200">Tech Stack</h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex mt-2 space-x-2 flex-wrap"
            >
              {activeProject?.stack.map((item, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="px-3 py-1 bg-card/35 text-primary text-xs rounded-md"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-4"
          >
            <h3 className="text-lg font-semibold text-gray-200">
              Key Features
            </h3>
            <motion.p variants={itemVariants} className="text-sm text-gray-400">
              {activeProject?.features}
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mb-4"
          >
            <h3 className="text-lg font-semibold text-gray-200">Challenges</h3>
            <motion.p variants={itemVariants} className="text-sm text-gray-400">
              {activeProject?.challenges}
            </motion.p>
          </motion.div>
          <hr className="my-4 border-card w-3/4" />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex items-center gap-3"
          >
            <motion.button
              whileHover={{ rotate: -3 }}
              className="transform -rotate-45 p-3 border-2 border-primary rounded-full bg-transparent text-primary hover:bg-primary hover:text-black transition duration-500 ease-in-out"
            >
              <HiArrowLongRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="p-3 border-2 border-primary rounded-full bg-transparent text-primary hover:bg-primary hover:text-black transition duration-500 ease-in-out"
            >
              <FaGithub size={20} />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
      <ProjectSlider
        projects={myProjects}
        handleSlideChange={handleSlideChange}
      />
    </motion.div>
  );
};

export default Projects;
