import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { CgPhone } from "react-icons/cg";
const SocialIcons = ({ className }) => {
  const icons = [
    { icon: FaFacebook, url: "https://www.flickr.com" },
    { icon: FaLinkedin, url: "https://www.blogger.com" },
    { icon: FaGithub, url: "https://www.vimeo.com" },
    { icon: CgPhone, url: "https://www.vimeo.com" },
  ];

  return (
    <div
      className={`${
        className
          ? className
          : "flex gap-x-5 p-5 justify-center laptop:justify-start w-full"
      }`}
    >
      {icons.map((item, index) => (
        <div
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg z-10"
        >
          <button className="p-3 border-2 border-primary rounded-full bg-transparent text-primary hover:bg-primary hover:text-black transition duration-500 ease-in-out">
            <item.icon size={30} className="group-hover:text-black" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
