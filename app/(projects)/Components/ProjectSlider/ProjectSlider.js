"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
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
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
              className="h-[325px] tablet:h-[400px] laptop:h-[500px] overflow-hidden relative rounded group z-[1]"
            >
              <Image
                src={project?.image}
                alt={`Project ${project?.num}`}
                className="rounded object-fill transition-transform duration-500 group-hover:scale-105"
                layout="fill"
              />
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.75 }}
                className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/75 to-card/75 flex justify-center items-center p-4"
              >
                <motion.h3
                  initial={{ bottom: "-100%" }}
                  animate={{ bottom: "47%" }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl tablet:text-3xl font-thin uppercase pointer-events-auto"
                >
                  {project?.category}
                </motion.h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/75 to-card/75 opacity-0 group-hover:opacity-75 transition-all duration-700 flex justify-center items-center p-4 pointer-events-none"
              >
                <motion.h3
                  initial={{ bottom: "-100%" }}
                  animate={{ bottom: "47%" }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl tablet:text-3xl font-thin uppercase pointer-events-auto"
                >
                  {project?.category}
                </motion.h3>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-1 right-1 laptop:-bottom-20 laptop:-right-4 flex gap-3 justify-between laptop:justify-normal z-10"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="prev p-2 bg-card/75 rounded duration-300 z-10"
        >
          <MdKeyboardArrowLeft className="text-primary text-4xl" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="next p-2 bg-card/75 rounded duration-300 z-10"
        >
          <MdKeyboardArrowRight className="text-primary text-4xl" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ProjectSlider;
