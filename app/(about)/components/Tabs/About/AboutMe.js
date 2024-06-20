import { aboutlist } from "./AboutList";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 gap-3 h-96 overflow-y-auto">
      {aboutlist.map((item, index) => (
        <div key={index} className="flex flex-col gap-y-1 bg-card/50 w-full p-5 rounded-md z-[5]">
          <span className="text-primary">ヾ(⌐■_■)</span>
          <strong className="text-gray-300">{item.label}:</strong>
          <p className="text-gray-400 font-bold text-sm">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutMe;
