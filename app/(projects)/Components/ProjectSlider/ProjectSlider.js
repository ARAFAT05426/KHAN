"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ProjectSlider = ({ handleSlideChange, projects }) => {
  return (
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
            <div className="h-[325px] tablet:h-[400px] laptop:h-[500px] overflow-hidden relative rounded group">
              <Image
                src={project?.image}
                alt={`Project ${project?.num}`}
                className="rounded transition-transform duration-500 group-hover:scale-105"
                layout="fill"
                objectFit="cover"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/75 to-card opacity-0 group-hover:opacity-75 transition-all duration-700 flex justify-center items-center p-4"
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
  );
};

export default ProjectSlider;
