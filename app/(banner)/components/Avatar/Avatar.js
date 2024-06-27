"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import me from "/public/me.png";
import useAvatar from "@/lib/Hooks/useAvatar";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: {
    scale: 1.1,
    rotate: 3,
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
  },
};

const Avatar = () => {
  const { avatar, loading, error } = useAvatar();

  return (
    <div className="relative flex flex-col justify-center items-center p-6 rounded-lg z-10">
      <motion.div
        className="relative h-[300px] tablet:h-[400px] laptop:h-[500px] lg:h-[550px] w-[300px] tablet:w-[400px] laptop:w-[500px] lg:w-[550px] rounded-full overflow-hidden cursor-pointer border-4 border-white transition-all duration-500 ease-in-out transform hover:scale-105"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-full text-white">
            {error}
          </div>
        ) : (
          <Image
            src={avatar || me}
            priority
            quality={100}
            fill
            alt="Avatar"
            className="object-contain"
          />
        )}
      </motion.div>
    </div>
  );
};

export default Avatar;
