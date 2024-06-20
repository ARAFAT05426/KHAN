"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { projects } from "./ProjectList";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setActiveProject(projects[swiper?.activeIndex]);
  };

  return (
    <div className="flex flex-col-reverse laptop:flex-row gap-3 p-5 h-fit bg-gradient-to-r from-card/35 to-card/15 rounded-lg border border-card/25">
      {/* Project Details */}
      <div className="w-full laptop:w-1/2 overflow-hidden relative rounded-lg shadow-lg">
        <div
          className="text-transparent text-5xl tablet:text-6xl laptop:text-7xl desktop:text-8xl font-extrabold absolute top-0 right-0"
          style={{ WebkitTextStroke: "2px #14cf93" }}
        >
          {activeProject?.num}
        </div>
        <div className="text-white mt-4 relative z-10">
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
          <button className="transform -rotate-45 hover:-rotate-3 p-3 border-2 border-primary rounded-full bg-transparent text-primary hover:bg-primary hover:text-black transition duration-500 ease-in-out">
            <HiArrowLongRight size={30} />
          </button>
          <button className="p-3 border-2 border-primary rounded-full bg-transparent text-primary hover:bg-primary hover:text-black transition duration-500 ease-in-out">
            <FaGithub size={30} />
          </button>
        </div>
      </div>
      {/* Project Images Slider */}
      <div className="w-full laptop:w-1/2 relative">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className="h-[325px] tablet:h-[400px] laptop:h-[500px]"
          onSlideChange={handleSlideChange}
          modules={[Navigation]}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="h-[325px] tablet:h-[400px] laptop:h-[500px] overflow-hidden relative rounded group cursor-grab">
                <Image
                  src={project?.image}
                  alt={`Project ${project.num}`}
                  className="rounded transition-transform duration-500 group-hover:scale-105"
                  layout="fill"
                  objectFit="cover"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/75
                 to-card opacity-0 group-hover:opacity-75 transition-all duration-700 flex justify-center items-center p-4"
                  style={{
                    transitionTimingFunction:
                      "cubic-bezier(0.215, 0.61, 0.355, 1)",
                  }}
                >
                  <h3 className="text-2xl absolute bottom-0 group-hover:bottom-[47%] tablet:text-3xl font-thin uppercase transition-all duration-500">
                    {project?.category}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-1 right-1 laptop:-bottom-20 laptop:-right-4 flex gap-3 justify-between laptop:justify-normal z-10">
          <button className="prev p-2 bg-card/75 rounded duration-300 z-10">
            <MdKeyboardArrowLeft className="text-primary text-4xl" />
          </button>
          <button className="next p-2 bg-card/75 rounded duration-300 z-10">
            <MdKeyboardArrowRight className="text-primary text-4xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
