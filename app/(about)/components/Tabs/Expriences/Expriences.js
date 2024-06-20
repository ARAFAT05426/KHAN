import { Roboto_Mono } from "next/font/google";
import { experienceList } from "./ExprienceList";
const roboto = Roboto_Mono({ subsets: ["cyrillic-ext"], weight: ["700"] });

const Expriences = () => {
  return (
    <div className="w-full grid grid-cols-1 tablet:grid-cols-2 gap-3 h-96 overflow-y-auto py-5">
      {experienceList?.map((item, i) => (
        <div
          key={i}
          className="bg-card/50 p-5 flex flex-col gap-y-1 items-center tablet:items-start rounded-lg z-[5] w-full"
        >
          <p className="text-primary mt-2">
            {item.period.from} - {item.period.to}
          </p>
          <h2
            className={`${roboto.className} text-lg text-center tablet:text-left font-bold text-gray-300`}
          >
            {item.jobTitle}
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-[5px] h-[5px] rounded-full bg-primary" />
            <p className="text-gray-300 text-xs font-semibold text-center tablet:text-left">
              {item.company}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Expriences;
