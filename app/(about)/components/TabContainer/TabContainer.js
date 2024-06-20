"use client";
import { useState } from "react";
import Skills from "../Tabs/Skills/Skills";
import Education from "../Tabs/Education/Education";
import Expriences from "../Tabs/Expriences/Expriences";
import AboutMe from "../Tabs/About/AboutMe";

const Tabs = () => {
  const tabs = ["Skills", "Education", "Experience", "About Me"];
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="flex-1">
      <div className="grid gap-3 laptop:gap-1 grid-cols-2 laptop:grid-cols-4 bg-transparent laptop:bg-card/80 rounded-md mb-5 w-full">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`transition-transform duration-500 ease-in-out w-full px-4 py-2 text-xs laptop:text-sm z-10 font-bold rounded ${
              activeTab === index
                ? "bg-primary text-black hover:bg-primary"
                : "bg-card/75 text-primary hover:bg-primary/85 hover:text-black"
            } transform hover:scale-[1.03]`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="">
        {activeTab === 0 && <Skills />}
        {activeTab === 1 && <Education />}
        {activeTab === 2 && <Expriences />}
        {activeTab === 3 && <AboutMe />}
      </div>
    </section>
  );
};

export default Tabs;
