import Link from "next/link";
import Typewritter from "./Typewritter";

const Intro = () => {
  return (
    <div className="flex flex-col items-center laptop:items-start h-fit p-5 w-fit tablet:w-full z-[1]">
      <span
        className="text-transparent bg-clip-text text-sm minipad:text-base tablet:text-lg laptop:text-3xl"
        style={{
          WebkitTextStroke: ".5px white",
          WebkitTextFillColor: "transparent",
        }}
      >
        Hello there!
      </span>
      <h1 className="text-3xl tablet:text-4xl laptop:text-5xl desktop:text-6xl text-gray-200 text-center font-bold laptop:text-left mt-2 text-nowrap">
        I am Arafat <Link href={"/dashboard"}>Khan</Link>
        <br />
        <Typewritter
          texts={["Frontend Developer", "Logo Designer", "University Student"]}
          loop={true}
        />
      </h1>
      <p className="text-xs tablet:text-sm desktop:text-base text-center laptop:text-left font-light tablet:font-medium text-gray-400 mt-4 max-w-2xl mobile:max-w-3xl tablet:max-w-4xl laptop:max-w-4xl">
        Passionate about building dynamic and responsive web applications using
        the latest technologies. Experienced in MongoDB, Express.js, React, and
        Node.js.
      </p>
    </div>
  );
};

export default Intro;
