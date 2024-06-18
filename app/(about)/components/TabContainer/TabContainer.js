"use client";
import { useState } from "react";
import Skills from "../Tabs/Skills/Skills";
import Education from "../Tabs/Education/Education";

const Tabs = () => {
  const tabs = ["Skills", "Education", "Experience", "About Me"];
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="flex-1">
      <div className="grid gap-3 laptop:gap-1 grid-cols-2 laptop:grid-cols-4 bg-transparent laptop:bg-card rounded-md mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`transition-transform duration-300 ease-in-out w-full px-4 py-2 text-xs sm:text-sm lg:text-base xl:text-lg font-bold rounded ${
              activeTab === index
                ? "bg-primary text-black hover:bg-primary"
                : "bg-card text-primary hover:bg-primary-200 hover:text-black"
            } transform hover:scale-[1.03]`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="py-4 rounded-lg shadow-lg">
        {activeTab === 0 && <Skills />}
        {activeTab === 1 && <Education />}
        {activeTab === 2 && <div>Experience Content</div>}
        {activeTab === 3 && <div>About Me Content</div>}
      </div>
    </section>
  );
};

export default Tabs;
