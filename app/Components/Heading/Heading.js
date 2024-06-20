const Heading = ({ text }) => {
  return (
    <div className="pl-5 mt-10 mb-5">
      <h1 className="text-5xl text-primary font-extrabold">
        {text}
      </h1>
    </div>
  );
};

export default Heading;
