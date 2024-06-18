"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import me from "/public/me.png";
const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.05, rotate: 2 },
};

const Avatar = () => {
  return (
    <div className="p-4 z-10 flex justify-center items-center">
      <motion.div
        className="h-[550px] w-[550px] rounded-full overflow-hidden mix-blend-darken"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <Image
          src={me}
          priority
          quality={100}
          alt="me"
          className="object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Avatar;
