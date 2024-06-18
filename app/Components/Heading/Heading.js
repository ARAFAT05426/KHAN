const Heading = ({ text, bgtext }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center mt-10 mb-5">
      {/* Background Text */}
      <h1
        className="absolute text-transparent bg-clip-text text-6xl"
        style={{
          WebkitTextStroke: "2px #111827",
          WebkitTextFillColor: "transparent",
        }}
      >
        {bgtext}
      </h1>

      {/* Main Text with Animated Stroke */}
      <div className=" text-8xl font-bold text-black">
        <span
          className="left-1/2 font-black text-9xl text-primary/50 opacity-20 pointer-events-none"
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default Heading;
