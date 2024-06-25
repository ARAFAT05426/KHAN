import Overview from "@/app/(about)/components/Overview/Overview";
import Button1 from "@/app/Components/Common/Buttons/Button1";
import { Roboto_Mono } from "next/font/google";
import { FaUsers } from "react-icons/fa";
import { AiOutlineProject, AiFillStar } from "react-icons/ai";
import { GoCodeReview } from "react-icons/go";
import CountUp from "@/app/Components/Common/CountUp/CountUp";
const roboto = Roboto_Mono({ subsets: ["cyrillic-ext"], weight: ["700"] });

const ServiceSide = () => {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <h1
        className={`text-4xl tablet:text-5xl text-center laptop:text-start laptop:text-6xl font-extrabold leading-tight ${roboto.className}`}
      >
        Crafting Digital <br />
        <span
          className={`${roboto?.className} text-transparent font-extrabold uppercase`}
          style={{ WebkitTextStroke: "3px #14cf93" }}
        >
          Destinies
        </span>
      </h1>
      <p className="text-sm text-center laptop:text-left laptop:text-base leading-relaxed text-gray-300 mt-4 max-w-3xl">
        I specialize in delivering cutting-edge solutions across web development
        and digital marketing, empowering your business to thrive. Discover how
        my expertise can elevate your brand and ignite growth. Lets achieve
        extraordinary results together!
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-card/50 p-3 flex flex-col gap-1 z-[3] items-center rounded-lg">
          <FaUsers className="text-primary" size={35} />
          <CountUp end={16} className={"text-3xl font-black text-gray-200"} />
          <span className="text-xs text-gray-400">Happy Clients</span>
        </div>
        <div className="bg-card/50 p-3 flex flex-col gap-1 z-[3] items-center rounded-lg">
          <AiOutlineProject className="text-primary" size={35} />
          <CountUp end={16} className={"text-3xl font-black text-gray-200"} />
          <span className="text-xs text-gray-400">Completed Projects</span>
        </div>
        <div className="bg-card/50 p-3 flex flex-col gap-1 z-[3] items-center rounded-lg">
          <AiFillStar className="text-primary" size={35} />
          <div className="text-3xl font-black text-gray-200 flex">
            <CountUp end={93} className={"text-3xl font-black text-gray-200"} />%
          </div>
          <span className="text-xs text-gray-400">Positive Reviews</span>
        </div>
        <div className="bg-card/50 p-3 flex flex-col gap-1 z-[3] items-center rounded-lg">
          <GoCodeReview className="text-primary" size={35} />
          <div className="text-3xl font-black text-gray-200 flex">
            <CountUp end={9} className={"text-3xl font-black text-gray-200"} />k+
          </div>
          <span className="text-xs text-gray-400">Lines of Code</span>
        </div>
      </div>
      <Button1 title={"Get Started"} subtitle={"What are u waiting for?"} />
    </div>
  );
};

export default ServiceSide;
