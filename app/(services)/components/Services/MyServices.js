"use client";
import { services } from "./ServicesList";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 gap-3 p-3 flex-1 h-[61vh] overflow-auto z-[3]">
      {services?.map((item, i) => (
        <div
          key={i}
          className="group relative p-6 bg-card/50 rounded-lg transition-all duration-300 hover:shadow-lg"
        >
          <div className="absolute inset-0 bg-primary/75 opacity-0 group-hover:opacity-100 rounded-lg transition-all duration-300" />

          <div className="relative z-10">
            <div className="text-center mb-6 flex flex-col items-center">
              <item.service className="text-5xl text-primary group-hover:text-card mb-4 transition-all duration-500 text-center" />
              <h3 className="text-xl font-bold text-gray-200 group-hover:text-card transition-all text-center duration-500">
                {item.title}
              </h3>
            </div>

            <p className="text-xs text-gray-300 group-hover:text-card transition-all duration-500 text-center">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyServices;
