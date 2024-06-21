import { Roboto_Mono } from "next/font/google";
import Overview from "./components/Overview/Overview";
const roboto = Roboto_Mono({ subsets: ["cyrillic-ext"], weight: ["700"] });

const Intro = () => {
  return (
    <div className="flex flex-col gap-y-8 px-5 items-center laptop:items-start">
      <h1 className="text-4xl tablet:text-5xl laptop:text-6xl font-extrabold text-gray-200 text-center laptop:text-left leading-tight">
      Discover More<br />
        <span className={`${roboto?.className} text-transparent font-extrabold uppercase`}
          style={{ WebkitTextStroke: "3px #14cf93" }}>About</span> Me
      </h1>
      <p className="max-w-2xl text-gray-300 text-center laptop:text-left text-base tablet:text-lg laptop:text-xl leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex
        corrupti dolore rerum dolor id voluptatibus ad mollitia, deleniti in
        corporis nostrum, sint veniam ut.
      </p>
      <Overview />
    </div>
  );
};

export default Intro;
