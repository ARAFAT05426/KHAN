import { Roboto_Mono } from "next/font/google";
import { education } from "./EducationArray";
const roboto = Roboto_Mono({ subsets: ["cyrillic-ext"], weight: ["700"] });

const Education = () => {
  return (
    <div className="w-full grid grid-cols-1 tablet:grid-cols-2 gap-5 h-96 overflow-y-auto py-5 px-2">
      {education?.map((item, i) => (
        <div
          key={i}
          className="bg-card/50 p-5 flex flex-col items-center tablet:items-start rounded-lg shadow-md transform transition duration-300 hover:scale-[1.03] hover:shadow-lg"
        >
          <p className="text-primary mt-2">
            {item.duration.from} - {item.duration.to}
          </p>
          <h2 className={`${roboto.className} text-lg text-center tablet:text-left font-bold text-gray-300`}>
            {item.course}
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-[5px] h-[5px] rounded-full bg-primary" />
            <p className="text-gray-300 text-xs font-semibold text-center tablet:text-left">
              {item.institution}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
