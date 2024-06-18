import { BiDownload } from "react-icons/bi";

const Cv = () => {
  return (
    <div className="flex justify-center">
      <button
        type="button"
        className="bg-card text-center w-48 tablet:w-52 rounded-full h-12 tablet:h-14 relative text-primary text-sm tablet:text-lg font-semibold group z-10"
      >
        <div className="bg-primary rounded-full h-8 tablet:h-10 w-1/4 flex items-center justify-center absolute left-2 top-2 group-hover:w-[93%] z-20 duration-500 text-black">
          <BiDownload size={20} />
        </div>
        <p className="translate-x-3 tablet:translate-x-5">Download CV</p>
      </button>
    </div>
  );
};

export default Cv;
