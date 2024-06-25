"use client";
import { useEffect, useState } from "react";
import { Roboto_Mono } from "next/font/google";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { projects } from "../projectlist/ProjectList";
import ProjectSlider from "./ProjectSlider";

const roboto = Roboto_Mono({ subsets: ["cyrillic-ext"], weight: ["700"] });

const Projects = () => {
  const [myProjects, setProjects] = useState(projects);
  const [activeProject, setActiveProject] = useState(myProjects[0]);
  const handleSlideChange = (swiper) => {
    setActiveProject(myProjects[swiper?.activeIndex]);
  };
  useEffect(() =>{
    fetchData()
  }, [])
  const fetchData = async() =>{
    const res = await fetch("http://localhost:3000/projects/api", {cache: "no-store"})
    const data = await res.json()
    setProjects(data.data)
    setActiveProject(data.data[0])
  }
  return (
    <div className="flex flex-col-reverse laptop:flex-row gap-3 p-5 h-fit bg-gradient-to-r from-card/25 to-card/15 rounded-lg border border-card/15">
      {/* Project Details */}
      <div className="w-full laptop:w-1/2 overflow-hidden relative rounded-lg shadow-lg">
        <div
          className={`${roboto?.className} text-transparent text-5xl tablet:text-6xl laptop:text-7xl desktop:text-8xl font-extrabold absolute top-0 right-0`}
          style={{ WebkitTextStroke: "2px #14cf93" }}
        >
          {activeProject?.num}
        </div>
        <div className="text-gray-200 mt-4 relative z-10">
          <div className="flex items-center mb-4">
            <span className="text-xs text-primary">
              {activeProject?.startDate} - {activeProject?.endDate}
            </span>
          </div>
          <h2 className="text-xl tablet:text-2xl laptop:text-3xl font-bold uppercase mb-2">
            {activeProject?.title}
          </h2>
          <p className="mb-4 text-md tablet:text-sm max-w-xl text-gray-300">
            {activeProject?.description}
          </p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-200">Tech Stack</h3>
            <div className="flex mt-2 space-x-2 flex-wrap">
              {activeProject?.stack.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-card/35 text-primary text-xs rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-200">
              Key Features
            </h3>
            <p className="text-xs text-gray-400">{activeProject?.features}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-200">Challenges</h3>
            <p className="text-xs text-gray-400">{activeProject?.challenges}</p>
          </div>
        </div>
        <hr className="w-4/5 border-card my-3 rounded-full" />
        <div className="flex items-center gap-3">
          <button className="z-10 transform -rotate-45 hover:-rotate-3 p-3 border-2 border-primary rounded-full bg-transparent text-primary hover:bg-primary hover:text-black transition duration-500 ease-in-out">
            <HiArrowLongRight size={20} />
          </button>
          <button className="z-10 p-3 border-2 border-primary rounded-full bg-transparent text-primary hover:bg-primary hover:text-black transition duration-500 ease-in-out">
            <FaGithub size={20} />
          </button>
        </div>
      </div>
      {/* Project Images Slider */}
      <ProjectSlider projects={myProjects} handleSlideChange={handleSlideChange} />
    </div>
  );
};

export default Projects;
