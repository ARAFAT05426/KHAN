import Overview from "./components/Overview/Overview";

const Intro = () => {
  return (
    <div className="flex flex-col gap-y-8 px-5 items-center laptop:items-start">
      <h1 className="text-4xl tablet:text-5xl laptop:text-6xl font-extrabold text-gray-200 text-center laptop:text-left leading-tight">
        Crafting Digital <br />
        <span className="text-primary">Destinies.</span>
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
