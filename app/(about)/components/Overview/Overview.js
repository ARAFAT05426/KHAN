import useProjects from "@/app/(projects)/Components/useProjects/useProjects";
import CountUp from "@/app/Components/Common/CountUp/CountUp";
import { Roboto_Mono } from "next/font/google";
const roboto = Roboto_Mono({ subsets: ["cyrillic-ext"], weight: ["700"] });
const Overview = () => {
  const { projects } = useProjects();
  console.log(projects);
  const overview = [
    {
      count: 1200,
      title: "Hours of Coding",
    },
    {
      count: projects?.length || 12,
      title: "Completed Projects",
    },
    {
      count: 10,
      title: "Technologies Mastered",
    },
    {
      count: 370,
      title: "Github Code Commits",
    },
  ];

  return (
    <div className="grid gap-x-5 grid-cols-2 tablet:grid-cols-4">
      {overview.map((item, index) => (
        <div
          key={index}
          className="flex flex-col text-center laptop:items-start px-[2px] py-3 relative"
        >
          <CountUp
            end={item.count}
            className={`${roboto?.className} text-2xl tablet:text-3xl laptop:text-4xl mb-2 text-transparent font-extrabold`}
            style={{ WebkitTextStroke: "1.5px #14cf93" }}
          />
          <div
            className={`${
              item?.title?.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
            } text-gray-400/75 text-center laptop:text-left text-sm tablet:text-base laptop:text-lg font-semibold`}
          >
            {item.title}
          </div>
          {index < overview.length - 1 && (
            <div className="hidden laptop:block absolute top-0 right-0 h-full w-[1px] rounded-full bg-card" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Overview;
