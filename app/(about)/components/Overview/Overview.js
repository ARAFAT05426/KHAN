import { Roboto_Mono } from "next/font/google";
const roboto = Roboto_Mono({ subsets: ["cyrillic-ext"], weight: ["700"] });

const Overview = () => {
  const overview = [
    {
      count: 3800,
      title: "Hours of Coding",
    },
    {
      count: 16,
      title: "Completed Projects",
    },
    {
      count: 8,
      title: "Technologies Mastered",
    },
    {
      count: 480,
      title: "Github Code Commits",
    },
  ];

  return (
    <div className="grid gap-x-5 grid-cols-2 tablet:grid-cols-4">
      {overview.map((item, index) => (
        <div key={index} className="flex flex-col text-center laptop:items-start px-[2px] py-3 relative">
          <div
            className={`${roboto.className} text-primary text-2xl tablet:text-3xl laptop:text-4xl font-bold mb-2 text-center`}
            style={{
              WebkitTextStroke: "1px #14cf93",
              WebkitTextFillColor: "transparent",
            }}
          >
            {item.count}
          </div>
          <div className={`${item?.title?.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} text-gray-700 text-center laptop:text-left text-sm tablet:text-base laptop:text-lg font-semibold`}>
            {item.title}
          </div>
          {/* Add a vertical divider except for the last item in the row */}
          {index < overview.length - 1 && (
            <div className="hidden laptop:block absolute top-0 right-0 h-full w-[1px] rounded-full bg-card" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Overview;
