import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
const SocialIcons = ({ className }) => {
  const icons = [
    { icon: FaFacebook, url: "https://www.facebook.com/Khan05426" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/arafathossennibir-5426-khan/" },
    { icon: FaGithub, url: "https://github.com/ARAFAT05426" },
    { icon: FaPhoneVolume, url: "tel: +8801918348342" }
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.2,
        staggerChildren: 0.3,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className={`${
        className
          ? className
          : "flex gap-x-5 p-5 justify-center laptop:justify-start w-full"
      }`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {icons.map((item, index) => (
        <motion.a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          className="group relative focus:outline-none z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="p-3 border-2 border-primary rounded-full bg-transparent text-primary hover:bg-primary hover:text-black transition duration-500 ease-in-out">
            <item.icon size={30} className="group-hover:text-black" />
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialIcons;
