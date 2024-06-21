import { MdLocationPin, MdPhone, MdEmail } from "react-icons/md";
import { Roboto_Mono } from "next/font/google";
// import SocialIcons from "@/app/(banner)/components/Buttons/SoicalIcons";

const roboto = Roboto_Mono({ subsets: ["cyrillic-ext"], weight: ["700"] });

const ContactAside = () => {
  return (
    <aside className="flex-1 w-full p-5 h-auto overflow-hidden space-y-5">
      <div className="flex flex-col items-center laptop:items-start gap-5">
        <h1
          className={`text-4xl tablet:text-5xl text-center laptop:text-start laptop:text-6xl font-extrabold text-gray-200 leading-tight ${roboto.className}`}>
           let's craft <span className={`${roboto?.className} text-transparent font-extrabold uppercase`}
          style={{ WebkitTextStroke: "3px #14cf93" }}>something</span> amazing
        </h1>
        <p className="text-base text-gray-300 max-w-2xl text-center laptop:text-start">
          Don`t be afraid, just say hello! Feel free to get in touch with me. I
          am always open to discussing new projects, creative ideas or
          opportunities to be part of your visions.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-card/50 p-5 flex flex-col gap-2 items-center rounded-lg z-10">
          <MdLocationPin className="text-primary" size={35} />
          <p className="text-gray-300 text-center laptop:text-start text-wrap">Ave Street 177, New York, USA</p>
        </div>
        <div className="bg-card/50 p-5 flex flex-col gap-2 items-center rounded-lg z-10">
          <MdPhone className="text-primary" size={30} />
          <p className="text-gray-300 text-center laptop:text-start text-wrap">+44 077 155 09 09</p>
        </div>
        <div className="bg-card/50 p-5 flex flex-col gap-2 items-center rounded-lg z-10">
          <MdEmail className="text-primary" size={30} />
          <p className="text-gray-300 text-center laptop:text-start text-wrap">james@example.com</p>
        </div>
        <div className="bg-card/50 p-5 flex flex-col gap-2 items-center rounded-lg z-10">
          <MdEmail className="text-primary" size={30} />
          <p className="text-gray-300 text-center laptop:text-start text-wrap">james@example.com</p>
        </div>
      </div>
      {/* <div className="flex items-center">
        <hr className="w-full border-card mx-1" />
        <span className="text-primary mx-3">or</span>
        <hr className="w-full border-card mx-1" />
      </div>
      <h1 className="text-center">Follow Me</h1>
      <SocialIcons className={"flex items-center gap-x-3 max-w-fit mx-auto"} /> */}
    </aside>
  );
};

export default ContactAside;
