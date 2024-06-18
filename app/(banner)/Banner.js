import Avatar from "./components/Avatar/Avatar";
import Intro from "./components/Intro";
import HireNow from "./components/Buttons/HireNow";
import Cv from "./components/Buttons/Cv";
import SocialIcons from "./components/Buttons/SoicalIcons";

const Banner = () => {
  return (
    <section className="container mx-auto h-full tablet:h-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-col-reverse laptop:flex-row items-center justify-between w-full gap-y-6">
        {/* Intro and Buttons Section */}
        <div className="flex flex-col gap-y-3 items-center tablet:items-start w-full laptop:w-1/2 text-center laptop:text-left">
          <Intro />
          <div className="flex gap-x-3 items-center justify-center laptop:justify-start">
            <Cv />
            <HireNow />
          </div>
          <SocialIcons />
        </div>
        {/* Avatar Section */}
        <div className="w-full laptop:w-1/2 flex justify-center laptop:justify-end">
          <Avatar />
        </div>
      </div>
    </section>
  );
};

export default Banner;
