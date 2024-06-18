const HireNow = () => {
  return (
    <div className="flex justify-center items-center h-12 tablet:h-14 overflow-hidden z-10 border-4 border-primary/75 rounded-full">
      <button className="relative px-6 py-3 text-primary font-semibold focus:outline-none transition-all duration-500 hover:bg-card">
        <span className="relative text-sm tablet:text-lg text-nowrap">
          Hire Now
        </span>
        <span className="absolute top-0 left-0 w-full h-full bg-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </button>
    </div>
  );
};

export default HireNow;
